## YDN レポートの更新手順

- VSCode

## ResultTable

`Media-Analysis-DS > ResultTable`

1. `ydn_report_account_YYYYMMDD.sql`を作成

   WITH ydn_report_account AS (
   SELECT
   adId,
   CAST (day AS DATE) AS date,
   gender,
   age,
   prefecture,
   IFNULL(SUM (impressions),0) AS impressions,
   IFNULL(SUM (clicks),0) AS clicks,
   IFNULL(SUM (conversions),0) AS cv,
   IFNULL(SUM (cost),0) AS cost,
   FROM `piala-ad-report-pro.platform.ydn_report_account_v201911`
   WHERE DATE(\_PARTITIONTIME) BETWEEN "YYYY-MM-DD" AND "YYYY-MM-DD"
   GROUP BY adId,date,gender,age,prefecture
   )
   SELECT \* FROM ydn_report_account

- `BETWEEN "YYYY-MM-DD" AND "YYYY-MM-DD"`の中には先月分の年月日を記載する

2. `ydn_report_report_YYYYMMDD.sql`を作成

   WITH ydn_report_report AS (
   SELECT
   CAST (adId AS STRING ) AS adId,
   CAST (day AS DATE) AS date,
   device,
   os,
   appli,
   hourofday,
   IFNULL(SUM (impressions),0) AS impressions,
   IFNULL(SUM (clicks),0) AS clicks,
   IFNULL(SUM (conversions),0) AS cv,
   IFNULL(SUM (cost),0) AS cost,
   FROM `piala-ad-report-pro.platform.ydn_report_report_v201911`
   WHERE DATE(\_PARTITIONTIME) BETWEEN "YYYY-MM-DD" AND "YYYY-MM-DD"
   GROUP BY adId,date,device,os,appli,hourofday
   )
   SELECT \* FROM ydn_report_report

- `BETWEEN "YYYY-MM-DD" AND "YYYY-MM-DD"`の中には先月分の年月日を記載する

## 更新するスケジュールドクエリ

`Media-Analysis-DS > Yahoo > YDN`

1. `ydn_report_account`の中間テーブル名`ydn`の WHERE にある年月日を今月に変更する
2. `ydn_report_report`の中間テーブル名`ydn`の WHERE にある年月日を今月に変更する

## PR 作成

上記まで作成できたら PR を出すレビュー完了後、下記の手順

## GCP コンソール

(https://console.cloud.google.com/bigquery?project=piala-ad-report-pro)

1. クエリを新規作成
2. `ResultTable(VSCode)`で作成した`ydn_report_account_YYYYMMDD.sql`のコードをコピーする
3. コンソールに貼り付けて`実行`をクリック
4. クエリ結果の横に`結果を保存`ボタンをクリック
5. 保存場所`BigQuery テーブル`を選択
6. プロジェクト名`PIALA MEDIADATA PRO`
7. データセット名`datastudio`
8. テーブル名`ydn_report_account_YYYYMMDD.sql`の先頭に`hatano_`を追加し`.sql`を除いた名前
9. 保存する

- ※`ydn_report_report_YYYYMMDD.sql`も上記と同様に行う

## スケジュールされたクエリ

(https://console.cloud.google.com/bigquery/scheduled-queries?project=piala-ad-report-pro)

1. `hatano_ydn_report_account`をクリックし右上の`編集`ボタンをクリック
2. VSCode で作成した`ydn_report_account.sql`のコードをコピペ
3. `スケジュール`の`スケジュールされたクエリを更新`をクリック
4. 詳細オプションのサービスアカウントを`bq-scheduled-queries-runner`を選択
5. 保存

- ※`hatano_ydn_report_report`も上記と同様に行う
