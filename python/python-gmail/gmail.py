import base64
import json
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage
import httplib2
from apiclient import discovery

SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
CLIENT_SECRET_FILE = 'client_id.json'
USER_SECRET_FILE = 'credentials-gmail.json'

def create_service():
    store = Storage(USER_SECRET_FILE)
    credentials = store.get()
    if not credentials:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = 'Python Gmail API'
        credentials = tools.run_flow(flow, store, None)
        print('認証結果を保存しました:' + USER_SECRET_FILE)
        print(json.dumps(credentials.to_json()))
    elif credentials.invalid:
        credentials.refresh(httplib2.Http())
        print(json.dumps(credentials.to_json()))
    return credentials

# 全体取得
def get_messages():
    credentials = create_service()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)
    messages = service.users().messages()
    msg_list = messages.list(userId='me', maxResults=1).execute()
    for msg in msg_list['messages']:
        topid = msg['id']
        msg = messages.get(userId='me', id=topid).execute()
        print(msg)
        
# 件名取得
# def get_messages():
#     credentials = create_service()
#     http = credentials.authorize(httplib2.Http())
#     service = discovery.build('gmail', 'v1', http=http)
#     messages = service.users().messages()
#     msg_list = messages.list(userId='me', maxResults=1).execute()
#     for msg in msg_list['messages']:
#         topid = msg['id']
#         msg = messages.get(userId='me', id=topid).execute()
#     #  件名の取得
#     for msg in msg_list['messages']:
#         topid = msg['id']
#         msg = messages.get(userId='me', id=topid).execute()
#         for header in msg['payload']['headers']:
#             if header['name'] == "Subject": 
#                 print(header['value'])

# 本文取得
# def get_messages():
#     credentials = create_service()
#     http = credentials.authorize(httplib2.Http())
#     service = discovery.build('gmail', 'v1', http=http)
#     messages = service.users().messages()
#     msg_list = messages.list(userId='me', maxResults=1).execute()
#     for msg in msg_list['messages']:
#         topid = msg['id']
#         msg = messages.get(userId='me', id=topid).execute()
#         # 本文の取得
#         if(msg["payload"]["body"]["size"]!=0):
#             decoded_bytes = base64.urlsafe_b64decode(
#                 msg["payload"]["body"]["data"])
#             decoded_message = decoded_bytes.decode("UTF-8")
#             print(decoded_message)
#         else:
#             #メールによっては"parts"属性の中に本文がある場合もある
#             decoded_bytes = base64.urlsafe_b64decode(
#                 msg["payload"]["parts"][0]["body"]["data"])
#             decoded_message = decoded_bytes.decode("UTF-8")
#             print(decoded_message)

# 要約取得
# def get_messages():
#     credentials = create_service()
#     http = credentials.authorize(httplib2.Http())
#     service = discovery.build('gmail', 'v1', http=http)
#     messages = service.users().messages()
#     msg_list = messages.list(userId='me', maxResults=1).execute()
#     for msg in msg_list['messages']:
#         topid = msg['id']
#         msg = messages.get(userId='me', id=topid).execute()
#         # 要約の取得
#         print(msg['snippet'])