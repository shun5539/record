## Function

プロジェクト設置

    gcloud config set project プロジェクト名

デプロイ

    gcloud functions deploy import_bq \
    --runtime python39 \
    --trigger-resource GCSのバケット名 \
    --trigger-event google.storage.object.finalize \
    --project プロジェクト名 \
    --region us-central1 \
    --allow-unauthenticated \
    --memory 512MB
