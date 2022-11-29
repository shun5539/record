from google.cloud import bigquery

DATASET = 'BQデータセット'
BQ_TABLE = 'BQテーブル'

def select(datetime_bq_partition):
    bq_client = bigquery.Client()
    table_id = bq_client.dataset(DATASET).table(f'{BQ_TABLE}_{datetime_bq_partition}')
    return bq_client.query(f'select * from `{table_id}`')
