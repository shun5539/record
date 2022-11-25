import requests

def get_boards(token):
    board_ids = []
    url = 'https://api.pinterest.com/v5/boards'
    response = requests.get(url,headers=token)
    boards_json = response.json()
    boards_items = boards_json["items"]
    for item in boards_items:
        board_ids.append(item["id"])
    return board_ids

def get_pins(board_ids,token):
    pin_ids = []
    for board_id in board_ids:
        url = f'https://api.pinterest.com/v5/boards/{board_id}/pins'
        response = requests.get(url,headers=token)
    pins_json = response.json()
    pins_items = pins_json["items"]
    for item in pins_items:
        pin_ids.append(item["id"])
    return pin_ids

def get_pin_analytics(pin_ids,token,date):
    data = []
    metric_types = ["IMPRESSION","SAVE","PIN_CLICK","OUTBOUND_CLICK","VIDEO_MRC_VIEW","VIDEO_AVG_WATCH_TIME","VIDEO_V50_WATCH_TIME","QUARTILE_95_PERCENT_VIEW"]
    for pin_id in pin_ids:
        url = f"https://api.pinterest.com/v5/pins/{pin_id}/analytics" 
        params = {'start_date': date, 'end_date': date,'metric_types': ','.join(metric_types)}
        response = requests.get(url,headers=token,params=params)
        data.append(response.json())
    return data