import gspread
from oauth2client.service_account import ServiceAccountCredentials

def get():
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    credentials = ServiceAccountCredentials.from_json_keyfile_name("./credential.json",scope)
    client = gspread.authorize(credentials)
    sheet = client.open_by_key("スプレットシートのID").sheet1
    list = sheet.get_all_records()
    print(list) 
    # return list
    
def write():
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    credentials = ServiceAccountCredentials.from_json_keyfile_name("./credential.json",scope)
    client = gspread.authorize(credentials)
    sheet = client.open_by_key("スプレットシートのID").sheet1
    
    # 範囲指定して一気に更新
    data = [[1,2,3],[4,5,6],[7,8,9]]   
    sheet.update('A1:C3', data)
    
    # 1セルずつ更新
    # for i , value in enumerate(values):
    #     sheet.update_cell(i+1, 1, value)