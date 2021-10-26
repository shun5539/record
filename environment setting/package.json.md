## package.json

#### ・engines

  `"node": "16.x"`と記載することで16系全て使える

#### ・dependencies

__dotenv__：見せれない情報を.envファイルで管理することで公開させない

__express__：サーバーサイドJavascriptの実行環境

__helmet__：セキュリティの脆弱性で必要、expressと相性が良い

__typescript__：tsを使えるようにする

&rarr;`tsc --init`コマンドでtsconfig.jsonを作成

__ts-node__：tsを毎回tscコマンドを叩いてjsにコンパイルことをしなくてもよくするやつ

__winston__：複数のトランスポート（出力先）をサポートするロギングライブラリ（logformと繋がっている）

__morgan__：expressのmorganというログのライブラリー

__fixpack__：アルファベット順に並び替え

#### ・devDependencies

__prettier__：コードフォーマッター（ソースコードを整形してくれるツール）

&rarr; eslintでは整形できないコードを整形できる

__eslint__：単純な構文エラーやプロジェクト固有のコーディング規約を定義することができる

&rarr; 自由にルールを設定できる、rulesで上書きすることでルールを緩くできる

__cspell__：スペルチェック
&rarr;cspell.jsonを手書き、./cspell.txt作成

__ts-node-dev__：tsファイルをjsファイルにコンパイルすることなく、起動することができ、
さらに監視モードで素早く再起動が使用できる

&rarr; scriptsでstartで動くようにすると良い

__npm-run-all__：複数のnpm-scriptsを実行できるコマンドラインツール

(__nodemon__：ソースを監視して、自動でサーバーを再起動してくれるツール)

*scriptで複数ある時は`run-p`をつける 後につけると順番担保、：*で全て並列実行