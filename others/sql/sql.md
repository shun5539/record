## SQL

- 関数を使用した時、AS で名前をつける必要がある

- **UNNEST**：ネストされていたクエリを平たくできる

例

     UNNEST(ネストされているカラム名) AS XXXX

- **CAST**：型を変更
- **SAFE-CAST**：型変更できない時 null にする。書き方は CAST と同じ

例
CAST(カラム名 AS 変更する型) AS XXXX

- **SUBSTRING**：文字の切り取り

例

    SAFE_CAST(SUBSTRING(カラム名,0,9)  AS 変更する型) AS XXXX

↑ のように組み込むこともできる

- **EXCEPT**：除外する

例

    SELECT * EXCEPT(除外したい値) FROM

- **USING**：別のテーブルと **カラム名** を紐付ける(Key)

例

    USING(key)

- **ON**：別のテーブルと **別のカラム名** で紐付ける(Key)

例

    ON xxxx = oooo

- **ROUND**：数値を指定された小数点以下の桁数に丸める

- `SELECT * FROM`でテーブル全選択し、`LEFT JOIN`
  &rarr; テーブルの右に追加される

- `SELECT xxx, ooooo FROM`と書いて選択し`LEFT JOIN xxx`
  &rarr; テーブルの右ではなく、順番通りに書かれる
