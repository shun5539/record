## Google Cloud Campus

**プロダクト一覧**

#### コンピューティング

1. Compute Engines（仮想マシン）

   - 柔軟なスペックの選択、複数の OS を選択

1. Google Kubernetes Engines（フルマネージド）
   - エコシステムを活用、ユースケースに応じた２つの運用モード
     ① スタンダード：ノード設定の柔軟性
     ②Autopilot：ノード管理も Google 任せ（制約あり）
     → 柔軟な構成はスタンダート

#### サーバーレス

1. Cloud Run（サーバーレスコンテナ実行環境）
   - ユースケースに応じた２つの提供形態
     ① フルマネージド版：Cloud run
     ② 既存 Kubernetes 環境を活用：Cloud Run for Anthos
     特徴：コンテナをシンプルに使える、言語ランタイム及びライブラリに制約がないなど…

コンテナとは、アプリケーションコードとその依存ファイル群を一つのユニットとしてまとめる
&rarr; アプリケーションとインフラを疎結合することができる

1. App Engine（サーバーレスアプリケーション実行環境）

   - ユースケースに応じた２つのオプション
     ① スタンダード環境：素早いスケーリング
     ② フレキシブル環境：コンテナ利用可能

1. Cloud Functions（サーバーレス Functions as a Service ）
   - 負荷に応じた自動スケーリング、関数に最小権限の原則を適用可能

#### データベース

- SQL：My SQL、PostgreSQL、SQL server で使用できる

- Bigtable：大規模な分析ワークロードにも運用ワークロードにも対応できる

- Firestore：No SQL ドキュメント指向データベース

#### Cloud SDK

- [Cloud SDK のインストール](https://cloud.google.com/sdk/docs/install?hl=JA)

&rarr;gcloud コマンドや bq コマンドが使えるようになる
