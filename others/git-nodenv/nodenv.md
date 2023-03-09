## nodenvが最新でないとき 

    - `nodenv install -l`

    - `brew update && brew upgrade node-build`

    - `cd "$(nodenv root)"/plugins/node-build && git pull`

## version切り替え
[version](https://zenn.dev/donchan922/articles/b08a66cf3cbbc5)

#### コンフリでpullできない時、強制実行
    - `git reset --hard FETCH_HEAD`
    
