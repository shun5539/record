## docker

- package.jsonのscriptsに書き込む

    "docker:build": "docker build -t サービス名 .",
    "docker:exec": "docker run -p 8888:8888 -i サービス名"

## gcloud

    "gcloud:build":"gcloud builds submit --tag gcr.io/プロジェクト名/サービス名",
    "gclud:deploy":"gcloud beta run deploy サービス名 --image gcr.io/プロジェクト名/サービス名 --platform managed --region=リージョン",
    "gcloud:project": "gcloud config set project プロジェクト名",

    "gcloud:dev:decrypt": "gcloud kms decrypt --location global --keyring cv-improvement-dev --key cv-improvement --ciphertext-file .env.dev.encrypted --plaintext-file .env",
    "gcloud:dev:encrypt": "gcloud kms encrypt --location global --keyring cv-improvement-dev --key cv-improvement --plaintext-file .env --ciphertext-file .env.dev.encrypted"
