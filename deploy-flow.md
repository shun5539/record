## デプロイの流れ

1. Masterに本番と同じものがあるのでdevelop→master
1. タイトル「デプロイ@日付」

①テンプレにある項目が必要か否か

②項目を追加する必要があるか否か

1. 削除しないで打ち消し線を使う（mark down:~~〇〇~~）
1. PRがマージされた#を開ける
1. 作成できたら自分で確認を行う（draft,WIP）
1. エディタでdevelopからfeとssに移動してyarnコマンドの実行
1. リンクから移動し、GCPのタグを作成
1. リビジョンを〇〇にデプロイ「コンテナイメージのURL」で最新のものを選択
1. comand+Fを押して「コンテナイメージのURL」を同じになっているか確認

## 本番リリース作業

1. zipを使う時、インラインエディタ→zipアップロード
1. ターミナルでpwdを記入→絶対パスが出てくるのでコピー
1. 参照を押してcommand +shift +Gを押す
1. 絶対パスを貼る
1. RESULT LINKテスト環境→devtoolのNetowork「Headers」
1. eventIdをコピー
1. BQに移動し、WHERE句）外にAND event_id = コピーしたやつ一つあればok

## タグ
1. PRの実装内容をmarkdownでコピー
1. codeのreleasesを押す→Draft a new release
1. 内容貼り付け
1. タイトルは日付
1. targetをmasterに変更
1. Choose a tagで新規の日付タグ作成
