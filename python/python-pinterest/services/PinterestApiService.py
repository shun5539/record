import repositories.PinterestApiRepository

def import_data(token,date):
    board_ids = repositories.PinterestApiRepository.get_boards(token)
    # print(board_ids)
    pin_ids = repositories.PinterestApiRepository.get_pins(board_ids,token)
    # print(pin_ids)
    pin_analytics = repositories.PinterestApiRepository.get_pin_analytics(pin_ids,token,date)
    print(pin_analytics)
    return "200"

