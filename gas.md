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
