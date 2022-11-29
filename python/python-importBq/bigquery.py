from google.cloud import bigquery

DATASET = 'BQデータセット' # BQデータセット
BQ_TABLE = 'BQテーブル' # BQテーブル

def save(rows, datetime_bq_partition):
    bq_client = bigquery.Client()
    table_id = bq_client.dataset(DATASET).table(f'{BQ_TABLE}_{datetime_bq_partition}')
    schema_json = [
        bigquery.SchemaField("url", "STRING"),
        bigquery.SchemaField("date", "DATE"),
        bigquery.SchemaField("pattern", "STRING"),
    ]
    job_config = bigquery.LoadJobConfig(
        schema=schema_json,
        write_disposition=bigquery.WriteDisposition.WRITE_TRUNCATE,
        source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON,
        time_partitioning=bigquery.TimePartitioning(
            type_=bigquery.TimePartitioningType.DAY,
            field="date",
        )
    )

    load_job = bq_client.load_table_from_json(
        rows, table_id, job_config=job_config
    )
    return load_job.result()