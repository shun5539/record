## Promise

`return promise.resolve`や`return Promise.reject(error)`を使う理由

&rarr; 非同期で関数の外(親要素)の catch でエラーを書き出したい時、関数内で上記をしないと関数の外で感知できない

&rarr;return で返す値があれば、同期非同期関わらず記入する

## axios

- [axios の導入と簡単な使い方](https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9)
