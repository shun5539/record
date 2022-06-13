## package.json

#### ・engines

`"node": "16.x"`と記載することで 16 系全て使える

#### ・dependencies

**dotenv**：見せれない情報を.env ファイルで管理することで公開させない

**express**：サーバーサイド Javascript の実行環境

**helmet**：セキュリティの脆弱性で必要、express と相性が良い

**winston**：複数のトランスポート（出力先）をサポートするロギングライブラリ（logform と繋がっている）

#### ・devDependencies

**fixpack**：アルファベット順に並び替え

**typescript**：ts を使えるようにする

&rarr;`yarn run tsc --init`コマンドで tsconfig.json を作成

**ts-node**：ts を毎回 tsc コマンドを叩いて js にコンパイルことをしなくてもよくするやつ

**prettier**：コードフォーマッター（ソースコードを整形してくれるツール）

&rarr; eslint では整形できないコードを整形できる

**eslint**：単純な構文エラーやプロジェクト固有のコーディング規約を定義することができる

&rarr; 自由にルールを設定できる、rules で上書きすることでルールを緩くできる(.eslintrc.js)

**eslint-config-prettier**：prettier と競合するルールをオフにする

**@typescript-eslint/eslint-plugin**：.eslintrc.js で plugin を使いたうため

**@typescript-eslint/parser**：.eslintrc.js で parser を使いたうため

**@types/node**：ts で使う時、node_modules の型定義ファイル

**cspell**：スペルチェック
&rarr;cspell.json を手書き、./cspell.txt 作成

**ts-node-dev**：ts ファイルを js ファイルにコンパイルすることなく、起動することができ、
さらに監視モードで素早く再起動が使用できる

&rarr; scripts で start で動くようにすると良い

**npm-run-all**：複数の npm-scripts を実行できるコマンドラインツール

(**nodemon**：ソースを監視して、自動でサーバーを再起動してくれるツール)

*script で複数ある時は`run-p`をつける 後につけると順番担保、：*で全て並列実行

### +a

#### ・husky

**husky**：コミットやプッシュなど、特定のアクションが発生した時、特定のスクリプトを実行する仕組み `yarn husky install`コマンド実行すると`.husky`ディレクトリ作成

**hooks**：`.husky`ディレクトリが作成されると有効化される。`yarn husky add .husky/pre-commit "yarn lint-staged --config lint-staged.config.js`ファイル作成

**precommit**：コミット前に実行されること

**lint-staged**：ステージングしたファイルに対し、特定のコマンドが実行できるパッケージ
