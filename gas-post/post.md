- POST

  const url = "URL"

  function line(){

  // POST オプション
  const post_options = {
  method: "post",
  contentType:"application/json",
  payload:value,
  };

  // POST
  const response = UrlFetchApp.fetch(url, post_options);
  const data = JSON.parse(response)
  }
