## IT日報　5月7日　幡野

お疲れ様です。

こちらの日報ではITに関することの報告を致します。

## 「できなかったこと、学んだこと」

 ### Express

 #### GitHubを使った外部認証

serializeUser：ユーザーの情報をデータとして保存する処理を記述

deserializeUser：保存されたデータをユーザーの情報として読み出す際の処理を設定

doneは「成功したよ、失敗したよ」とpassport内部に対して通知するイベントを発行しているようなもの

Process.nextTick関数は、シングルスレッドで動くNode.jsのイベントループを処理する仕組みの中で重要な関数の1つ。すぐに実行を行わず、現在の処理が終わった後のタイミングでコールバック関数を実行できる

 #### テスティングフレームワーク

 ・テスティングフレームワークを使うと、テストの分割・意味付け・集計表示などが行える 

・モジュール単体をテストする、ユニットテスト

・複数のモジュールを結合して機能をテストする、結合テスト

・システム全体が正しく動くことをテストする、システムテスト

・モジュール内部の仕組みを意識することなく、外部のインターフェースからのみテストする手法をブラックボックステスト

「npx jest -h」のnpxはnomのコマンドの一つ、ローカルにインストールされたモジュールを直接実行できる

#### 継続的インテグレーション：CI

・・・ソフトウェア開発において、継続的にソフトウェアのコードの品質の低下や機能の問題を早期に検出し、開発の効率化を図る習慣のこと

テストの結果を出力する際はJUnitテスティングフレームワークの形式を用いる

・テストジョブ詳細情報の把握

・テストを並列処理する際の調整と高速化

### クライアントサイドのフレームワーク
webpackは依存関係を持つJSなどのHTMLに組み込むファイルを依存関係を解決し１つのファイルにまとめてくれるフレームワーク。
さらに、モジュールをクライアントのHTMLで利用可能なJSに変換する機能を内部に内包している

キャッシュ：すでにダウンロード済みの静的なファイルのこと

browserify：Node.jsのモジュールをHTMLでも利用できる機能  

babel-loader：最新のJSで書かれたコードをブラウザが実行できるバージョンに変換するモジュール

import dc from ‘’; import文でrequireメソッドと同様にモジュールを読み込むことができる構文

#### DOM（Document Object Model）

・・・XMLやHTMLなどの形式の文章を扱うためのAPI

animate関数はCSSのstyleをJSのオブジェクトとして定義したものを第一引数に、第二引数にアニメーションをする時間をミリ秒の整数で設定する

## N高進捗

第4章の実践サーバーサイドプログラミング4~8まで

## 感想
N高が終盤になり、理解できているのか理解できていないのか分からない状況になってきている。あと2個進めると切りが良いのでまずは終わらせる。そして、個人で購入しているUdemyの教材でJSの復習をする！！