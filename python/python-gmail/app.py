import os
from flask import Flask
import gmail

app = Flask(__name__)

@app.route("/")
def test():
    # gmail.create_service()
    gmail.get_messages()
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))