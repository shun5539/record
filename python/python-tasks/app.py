import json
import os
from flask import Flask, request
from google.cloud import tasks_v2

app = Flask(__name__)

values = [1,2,3,4,5,6,7,8,9]

# tasksにセット
@app.route('/set_tasks', methods=['POST'])
def set_tasks():
    
    executions_data = []
    # 3つずつ分割する
    for i in range(0, len(values), 3):
        value = {"data":values[i: i + 3]}
        executions_data.append(value)
        
    for data in executions_data:
        client = tasks_v2.CloudTasksClient()
        project = 'プロジェクト名'
        location = 'asia-northeast1'
        queue = 'コンソールで作成したキュー名：test'
        parent = client.queue_path(project, location, queue)
        task = {
            "http_request": {  
                "http_method": tasks_v2.HttpMethod.POST,
                # TODO Runにしたら'RunのURL' + '今後の処理(例：/update)'
                "url": 'https://localhost:0000',  
            }
        }
        task["http_request"]["headers"] = {"Content-type": "application/json"}
        task["http_request"]["body"] = json.dumps(data).encode()
        client.create_task(request={"parent": parent, "task": task})
    return "ok"

# TODO Tasksからデータを受け取る
# @app.route("/update", methods=['POST'])
# def update():
#     tasks_data = request.json["data"]

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
    
    