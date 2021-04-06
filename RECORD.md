## IT日報　4月６日　幡野

お疲れ様です。

こちらの日報ではITに関することの報告を致します。

## 「できなかったこと、学んだこと」
Qiitaのサイトを利用してnodenvをクローンにできたが、nodenvにパスを通せていなかった。
## 原因：
.zshrcや.bash_profileという異なるshellがある。(Qiitaではbash)
## 対策方法
自分のshellは.zshrcであるためvi~/.zshrcで確認し、打ち込む。そして:qで抜ける。

## 「日報の提出方法」
保存する
1のマークでステージを変える→＋押す
viewからターミナル開く
git commit する
insert mode
題名をつける
esc→：wq
git push
レポジトリで確認