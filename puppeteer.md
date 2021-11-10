## puppeteer

- ブラウザのコンソールで確認する方法
  const a = document.querySelectorAll("要素");
  console.log(a)

&rarr;要素が取得できているか、長さはどれくらいか確認できる

- Promise.all を使うことで wait と click が同時並行で実行される
  await Promise.all([page.waitForNavigation({ waitUntil: "load" }), page.click('button[name="〇〇"]')])

- SPA を操作する時の留意点

1. page.goto()の後は、動的生成される HTML タグの CSS セレクタが登場するまで待機する。
   page.goto()のオプションで{waitUntil: 'networkidle'}を指定する。

または page.waitFor(), page.waitForSelector()などで待機する。

1. page.click()で画面が遷移した後に待機を行う場合は、page.waitForNavigation()を使用しない。
   page.waitFor(), page.waitForSelector()などで待機する。

page.waitForNavigation()はある Web ページから別の Web ページに移動するまで待機する関数のため、Single Page Application のように同じ Web ページに留まる場合は待機タイムアウトする。
