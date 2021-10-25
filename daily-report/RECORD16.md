## IT日報　4月28日　幡野

お疲れ様です。

こちらの日報ではITに関することの報告を致します。

## 「できなかったこと、学んだこと」

### ストリーム

・stream.Readable　読み取りだけ

・stream.Writable　書き込みだけ

・stream.Duplex　読み取りと書き込み

・stream.Transform　読み取ったデータを変換して出力

### グローバルオブジェクト processもストリームとして扱える

・process.stdin　標準入力から読み取る

・process.stdout　標準出力へ書き込む

・process.stderr　標準エラー出力へ書き込む



### その他
フラグ：真偽値が入る変数のこと

レスポンシブデザイン：単一の HTML で PC やタブレット、スマートフォンなどの様々なデバイスに合わせた表示ができるデザインのこと

脆弱性：悪用できる不具合のこと

XSS脆弱性（クロスサイト・スクリプティング）
Webサービスの外部からの入力で表示が変化する機能において、意図しない変更ができる脆弱性

リグレッション：コードに修正を入れることによって本来あった機能が失われること

## N高進捗

本日は第3章のサーバーサイドプログラミング入門の25~29まで

## 感想
ちょっとしたコードの違いで脆弱性はかなり違うと感じた。つまり、よく理解してコードを書かないと外部から攻撃されてしまうことが分かった。現在、2020年度プログラミング入門Webアプリで半分まで進んでいるが、5月の２週目までに一旦全てを終わらせる。