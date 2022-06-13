import requests

def notify():
    CHATWORK_ROOM_ID = '００００００００００'
    CHATWORK_TOKEN = "xxxxxxxxxxxxxx"

    endpoint = 'https://api.chatwork.com/v2/rooms/%s/messages' % CHATWORK_ROOM_ID
    params = {
        "body": "testテストてすと",
        "self_unread": 0
    }
    response = requests.post(endpoint, params, headers={"X-ChatWorkToken":CHATWORK_TOKEN}, timeout=600)
    print(response.status_code)