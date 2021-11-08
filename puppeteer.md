## puppeteer

- ブラウザのコンソールで確認する方法
  const a = document.querySelectorAll("要素");
  console.log(a)

&rarr;要素が取得できているか、長さはどれくらいか確認できる

- Promise.all を使うことで wait と click が同時並行で実行される
  await Promise.all([page.waitForNavigation({ waitUntil: "load" }), page.click('button[name="〇〇"]')])
