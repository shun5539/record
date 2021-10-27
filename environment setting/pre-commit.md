## pre-commit

- .huskyディレクトリを作成し、その中にpre-commitというファイルを作成する`yarn husky add .husky/pre-commit "yarn lint-staged"`

例

    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    //コミット前に実行したいコマンド
    yarn lint-staged --config lint-staged.config.js