## lint-staged.config.js

-prettierとeslintをインストールしている必要がある

例

    /**
    * ファイルパス配列を半スペで結合した文字列を返す
    * @param filenames {string[]}
    * @returns {string}
    */
      const getJoinedPaths = (filenames) => filenames.join(" ")

    /**
    * ルート相対パスに書き換えたファイルパス配列を返す
    * @param filenames {string[]}
    * @returns {string[]}
    */
      const getReplacedFilePaths = (filenames) => filenames.map((filename) => filename.replace(`${__dirname}/`, "")).join(" ")

    module.exports = {
      //複数コマンドを順番に実行する
      "*.ts": (filenames) => {
        const joinedHalfSpace = getJoinedPaths(filenames)
        return [
          `eslint ${joinedHalfSpace}`,
          "tsc --project . --noEmit",
          `cspell ${getReplacedFilePaths(filenames)}`,
        ]
      },
      "*.{json,json5}": (filenames) => {
        const joinedHalfSpace = getJoinedPaths(filenames)
        return [`prettier --write ${joinedHalfSpace}`]
      },
      "package.json": () => ["fixpack"],
      }
