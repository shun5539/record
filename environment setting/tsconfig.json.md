## tsconfig.json

#### compilerOptions
- __"target"__："es6"

&rarr; es6にすることでmapなどが使える
- __"lib"__：["dom", "dom.iterable", "esnext”]

&rarr;ライブラリ、カッコに入れることで使える
- __allowJs__：これをtrueにしておくと、.jsと.jsxもコンパイル対象。型チェックなし
- __checkJs__：型チェック
- __downlevelIteration__：古いバージョンのJavaScriptにトランスパイルするという意味
- __esModuleInterop__：インポートに対して Namespace オブジェクトを生成することによって、CommonJS と ES Modules 間で相互運用可能なコードを出力
- __forceConsistentCasingInFileNames__：import時にファイルパスの文字列で大文字小文字を区別するかどうかを指定
- __isolatedModules__：コンパイル対象のファイル間の関係性を一切無視して、全てのファイルを単一のモジュールとしてコンパイルする。trueにした場合、コンパイル対象の全てのファイルがexport構文を含む必要があり、コード中の

・declare const enum

・型のre-export

はエラーとなりコンパイル出来ない。
- __"module"__： "commonjs"
- __moduleResolution__：tscのモジュール解決の方法を指定する。

値は"node"か"classic"
- __noEmit__：tsc --noEmitとすることでTypeScriptのコンパイルエラーのみをチェックできる
- __noUnusedLocals__：宣言されたが使用されていない変数が存在する場合にコンパイルエラー
- __noUnusedParameters__：関数の作成時、定義しているのに中身のコードで使用されない場合にコンパイルエラー
- __outDir__：何も指定しない場合、コンパイルされたjsはコンパイルしたtsファイルと同じディレクトリに作成。オプションでディレクトリを指定した場合、tsファイルのディレクトリ構成をそのままに保ちつつ、指定したディレクトリにjsファイルを作成
- __resolveJsonModule__：json’拡張子のファイルをモジュールとしてインポートできるようにします
- __skipLibCheck__：型定義ファイルのチェックをスキップ
- __"strict"__： true
- __"useUnknownInCatchVariables"__： false

&rarr; trueからfalseに変更

#### その他
- __exclude__：コンパイルする対象から外す
- __include__：コンパイルする対象ファイルを記述。

ワイルドカード（*,?,**/）が使える
