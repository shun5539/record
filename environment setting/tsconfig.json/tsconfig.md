## tsconfig.json

#### compilerOptions
- "target":"es6"

&rarr; es6にすることでmapなどが使える
- "lib":["dom", "dom.iterable", "esnext”]

&rarr;ライブラリ、カッコに入れることで使える
- allowJs:これをtrueにしておくと、.jsと.jsxもコンパイル対象。型チェックなし
- checkJs:型チェック
- downlevelIteration:古いバージョンのJavaScriptにトランスパイルするという意味
- esModuleInterop:インポートに対して Namespace オブジェクトを生成することによって、CommonJS と ES Modules 間で相互運用可能なコードを出力
- forceConsistentCasingInFileNames:import時にファイルパスの文字列で大文字小文字を区別するかどうかを指定
- isolatedModules:コンパイル対象のファイル間の関係性を一切無視して、全てのファイルを単一のモジュールとしてコンパイルする。trueにした場合、コンパイル対象の全てのファイルがexport構文を含む必要があり、コード中の

・declare const enum

・型のre-export

はエラーとなりコンパイル出来ない。
- "module": "commonjs"
- moduleResolution:tscのモジュール解決の方法を指定する。

値は"node"か"classic"
- noEmit:tsc --noEmitとすることでTypeScriptのコンパイルエラーのみをチェックできる
- noUnusedLocals:宣言されたが使用されていない変数が存在する場合にコンパイルエラー
- noUnusedParameters:関数の作成時、定義しているのに中身のコードで使用されない場合にコンパイルエラー
- outDir:何も指定しない場合、コンパイルされたjsはコンパイルしたtsファイルと同じディレクトリに作成。オプションでディレクトリを指定した場合、tsファイルのディレクトリ構成をそのままに保ちつつ、指定したディレクトリにjsファイルを作成
- resolveJsonModule：json’拡張子のファイルをモジュールとしてインポートできるようにします
- skipLibCheck：型定義ファイルのチェックをスキップ
- "strict": true
- "useUnknownInCatchVariables": false

&rarr; trueからfalseに変更

#### その他
- exclude:コンパイルする対象から外す
- include:コンパイルする対象ファイルを記述。

ワイルドカード（*,?,**/）が使える
