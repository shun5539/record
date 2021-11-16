## GAS

- スプレットシートの情報を CW で通知させる

例

    function myFunction() {
    //CW API
    const api_key = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
    const base_url = 'https://api.chatwork.com/v2';
    const room_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    const url = base_url + '/rooms/' + room_id + '/messages';

        //スプレットシート

    const sheet_id = 'xxxxxxxxxxxxxxxxxxxxx';
    const ss = SpreadsheetApp.openById(sheet_id);
    const sheet = ss.getSheetByName("シート 1");
    const cell = sheet.getDataRange().getValues();
    const value = cell.toString();

    console.log(value);

        const options = {

    'method': 'post',
    'headers': {'X-ChatWorkToken' : api_key},
    'payload': {'body' : value}
    };

        var result = UrlFetchApp.fetch(url, options);
        var json = JSON.parse(result.getContentText());

        Logger.log(json);

    }

- Cloud Run で動かし、スプレットシートに書き込む

例

        const scraping = "Cloud Run URL"

        function line(){
        //スプレットシートからスクレイピングするデータ取得

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const range = sheet.getRange("LINE!A1:A3").getValues();
    const value = JSON.stringify(range)

        // POSTオプション

    const post_options = {
    method: "post",
    contentType:"application/json",
    payload:value,
    };

        // POST

    const response = UrlFetchApp.fetch(scraping, post_options);

        //JSON読み込み

    const data = JSON.parse(response)

        //LINEのシートに書き込む

    const sheets = spreadsheet.getSheetByName("LINE")
    sheets.getRange(2,2,data.length,data[0].length).setValues(data)

        }

- 上記で気をつけること

1. setValue：1 つのデータだけをセットする
1. setValues：複数のデータをセットする
