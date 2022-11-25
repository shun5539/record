import os

import services.GoogleAnalyticsService
from flask import Flask, request

app = Flask(__name__)

@app.route('/test', methods=['POST'])
def test():
    return services.GoogleAnalyticsService.import_data(request.json)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))