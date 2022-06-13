import os
from flask import Flask
import requests
from requests.auth import HTTPBasicAuth
from google.cloud import storage

ID = "ooooooooo"
PASS = "xxxxxxxx"

app = Flask(__name__)

# @app.route("/",  methods=['POST'])
@app.route("/")
def test():
    
    # データ取得
    response = requests.get(
    "URL",  
    auth=HTTPBasicAuth(ID, PASS)
    )
    
    # # csvの形になっているか確認
    # with open("downloadフォルダ「パスのコピー」/test.csv", mode='w') as f:
    #     f.write(response.text)
        
    # Google Cloud StorageにCSVとして格納
    client = storage.Client()
    bucket = client.get_bucket("test")
    blob = bucket.blob(f'test/test20220606.csv')
    blob.upload_from_string(
    response.text,
    content_type='text/csv'
    )
    return "ok"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))