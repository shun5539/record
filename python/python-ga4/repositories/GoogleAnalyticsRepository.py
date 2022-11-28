import json

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import DateRange
from google.analytics.data_v1beta.types import Dimension
from google.analytics.data_v1beta.types import Metric
from google.analytics.data_v1beta.types import RunReportRequest

def get_report():
    json_open = open(f'configs/adwords.json'  , 'r')
    return json.load(json_open)

def get_dimensions(json_load):
    dimensions = []
    for reportRequest in json_load.get('reportRequests', []):
        for i, data in enumerate(reportRequest['dimensions']):
            dimensions.append(data["name"])
    return dimensions

def get_metrics(json_load):    
    metrics = []
    for reportRequest in json_load.get('reportRequests', []):
        for i, data in enumerate(reportRequest['metrics']):
            metrics.append(data["name"])
    return metrics

def get_dates(json_load):    
    dates = []
    for reportRequest in json_load.get('reportRequests', []):
        dates.append(reportRequest['dateRanges'][0]['startDate'])
        dates.append(reportRequest['dateRanges'][0]['endDate'])
    return dates

def get_data(property_id):
    json_load = get_report()
    dimension = get_dimensions(json_load)
    metrics =  get_metrics(json_load)
    date = get_dates(json_load)

    client = BetaAnalyticsDataClient()
    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name=name)  for name in dimension],
        metrics=[Metric(name=name) for name in metrics],
        date_ranges=[DateRange(start_date=date[0], end_date=date[1])],
    )
    return client.run_report(request)