import repositories.GoogleAnalyticsRepository  

def import_data(body):
    property_id = body['property_id']
    response = repositories.GoogleAnalyticsRepository.get_data(property_id)
    print(response)
    return "200"