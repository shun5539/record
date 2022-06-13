from google.cloud import bigquery

def import_bq(event, context):
    file = event['name']
    bucket = event['bucket']
    bq_client = bigquery.Client()
    
    # スキーマの設定
    schema_json = [
        bigquery.SchemaField("date", "DATE"),
        bigquery.SchemaField("id", "STRING"),
        bigquery.SchemaField("name", "STRING"),
        bigquery.SchemaField("click", "INTEGER"),
    ]
    
    job_config = bigquery.LoadJobConfig(
        schema=schema_json,
        # 宛先テーブルがすでに存在する場合、上書き
        write_disposition=bigquery.WriteDisposition.WRITE_TRUNCATE,
        # CSV形式でBQに格納
        source_format=bigquery.SourceFormat.CSV,
        # null許容フィールドをスキーマに追加できるようにする
        schema_update_options=[bigquery.SchemaUpdateOption.ALLOW_FIELD_ADDITION],
        # 今回CSVなのでカラムの部分をスキップ
        skip_leading_rows=1,
        # パーティションを日毎で分割
        time_partitioning=bigquery.TimePartitioning(
            type_=bigquery.TimePartitioningType.DAY,
            field="date", 
        ),
    )
    # TODO $20220606でパーティションを切っているので変数にする必要あり
    table_id = bq_client.dataset('テーブルセット名').table('report$20220606')
    uri = f'gs://{bucket}/{file}'
    load_job = bq_client.load_table_from_uri(
        uri, table_id, job_config=job_config
    )
    return load_job.result()