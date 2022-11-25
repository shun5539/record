import os
from flask import Flask
import services.PinterestApiService

date = "2022-11-11"
token = {'Authorization': 'Bearer 「トークン」'}

app = Flask(__name__)

@app.route("/")
def test():
    services.PinterestApiService.import_data(token,date)
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))