import os
from flask import Flask
import bigquery
from datetime import datetime, timedelta, timezone

app = Flask(__name__)

@app.route("/")
def test():

    rows = [
        { "url": "http://localhost:8888","date":"2022-11-11", "pattern": "WP" },
        { "url": "http://localhost:8888","date":"2022-11-11", "pattern": "DIGEST" },
        { "url": "http://localhost:8888","date":"2022-11-11", "pattern": "WP" },
        { "url": "http://localhost:8888","date":"2022-11-11", "pattern": "DIGEST" },
        { "url": "http://localhost:8888","date":"2022-11-11", "pattern": "WP" },
    ]

    JST = timezone(timedelta(hours=+9), 'JST')
    now = datetime.now(JST)
    datetime_bq_partition = now.strftime('%Y%m%d') # BQテーブルのパーティション取得用日時
    bigquery.save(rows,datetime_bq_partition)
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))