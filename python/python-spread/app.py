import os
from flask import Flask
import spreadsheet

app = Flask(__name__)

@app.route("/")
def test():
    spread = spreadsheet.get()
    print(spread)
    
    write = spreadsheet.write()
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))