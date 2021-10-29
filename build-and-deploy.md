## docker

- Dockerとは...コンテナ型仮想化プラットフォーム
    - コンテナ「規格が定まった容器に収納することで、他の環境でも利用しやすくしている」
    - 仮想化「動作しているOSの上で、もう1つのOS・サーバーを立ち上げること」

- パフォーマンス重視の場合はDockerのFROMでalpineやslimを書く
- alpineで記述の場合はaptは使えず、apkで書かなければならない

#### package.jsonのscriptsに書き込む

    "docker:build": "docker build -t サービス名 ."

    "docker:exec": "docker run -p 8888:8888 -i サービス名"

`docker ps`：実行中のコンテナだけ表示

## gcloud

    "gcloud:build":"gcloud builds submit --tag gcr.io/プロジェクト名/サービス名"

    "gclud:deploy":"gcloud beta run deploy サービス名 --image gcr.io/プロジェクト名/サービス名 --platform managed --region=リージョン"

    "gcloud:project": "gcloud config set project プロジェクト名"

`gcloud config list`：projectが一致しているか見る 

// 以下変更
- Cloud KMSを導入するとgithub上にファイルを上げても暗号化される
&rarr; チーム全体が必要な情報で、かつ隠したい場合は導入すると良い
[参考記事](https://qiita.com/takasp/items/99270cf3bf0546f7e55e):Qiita

1. [KMSのAPIを有効化](https://console.cloud.google.com/flows/enableapi?apiid=cloudkms.googleapis.com)
1. [SDKのインストール](https://cloud.google.com/sdk/docs/install)

例

    "gcloud:dev:decrypt": "gcloud kms decrypt --location global --keyring cv-improvement-dev --key cv-improvement --ciphertext-file .env.dev.encrypted --plaintext-file .env",

    "gcloud:dev:encrypt": "gcloud kms encrypt --location global --keyring cv-improvement-dev --key cv-improvement --plaintext-file .env --ciphertext-file .env.dev.encrypted"
