## cspell.json

-jsonとtxtをプラス
-txtに書いた文字はチェックされない

例

{

  "version": "0.2",

  "language": "en",

  "dictionaries": ["en", "typescript"],

  "dictionaryDefinitions": [

    {

      "name": "en",

      "path": "./cspell.txt"

    }

  ],

  "ignorePaths": ["node_modules/**"]

}