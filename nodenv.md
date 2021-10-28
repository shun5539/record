## nodenvが最新でないとき 

    - `nodenv install -l`

    - `brew update && brew upgrade node-build`

    - `cd "$(nodenv root)"/plugins/node-build && git pull`

#### コンフリでpullできない時、強制実行
    - `git reset --hard FETCH_HEAD`