import os
from flask import Flask
import bigquery
from datetime import datetime, timedelta, timezone

app = Flask(__name__)

@app.route("/")
def test():
    data = []

    JST = timezone(timedelta(hours=+9), 'JST')
    now = datetime.now(JST)
    datetime_bq_partition = now.strftime('%Y%m%d') # BQテーブルのパーティション取得用日時

    rows = bigquery.select(datetime_bq_partition)
    for row in rows:
        data.append(row)
    print(data)

    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))