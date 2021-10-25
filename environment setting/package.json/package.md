## Package.json

#### dependencies
- dotenv:見せれない情報を.envファイルで管理することで公開させない
- express:サーバーサイドJavascriptの実行環境
- helmet:セキュリティの脆弱性で必要、expressと相性が良い
- typescript:tsを使えるようにする

&rarr;`tsc --init`コマンドでtsconfig.jsonを作成
- ts-node:tsを毎回tscコマンドを叩いてjsにコンパイルことをしなくてもよくするやつ
- winston:複数のトランスポート（出力先）をサポートするロギングライブラリ（logformと繋がっている）
- morgan：expressのmorganというログのライブラリー
- fixpack：アルファベット順に並び替え

#### devDependencies
- prettier:コードフォーマッター（ソースコードを整形してくれるツール）

&rarr; eslintでは整形できないコードを整形できる
- eslint:単純な構文エラーやプロジェクト固有のコーディング規約を定義することができる

&rarr; 自由にルールを設定できる
- cspell:スペルチェック
- ts-node-dev:tsファイルをjsファイルにコンパイルすることなく、起動することができ、
さらに監視モードで素早く再起動が使用できる
- npm-run-all:複数のnpm-scriptsを実行できるコマンドラインツール
- (nodemon：ソースを監視して、自動でサーバーを再起動してくれるツール)
* scriptで複数ある時は`run-p`をつける 後につけると順番担保、:*で全て並列実行