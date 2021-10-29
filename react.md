## React

#### 用語

**props** : 親コンポーネントから子コンポーネントへ値を渡すための仕組み

&rarr; props  オブジェクトがあらかじめ存在しており、それを JSX に渡したいような場合は  `...`  を「スプレッド」演算子として使用することで、props オブジェクトそのものを渡すことができる

**state** : 各コンポーネントごとに持つ、コンポーネントの状態を管理する仕組み

- class コンポーネント：set と setState で状態管理
- functional コンポーネント：状態管理できないので、Hooks の useState を用いて状態管理を行う(基本こちらを使う)

**レンダリング**：何らかのデータを元にして表示内容を作る(例：ボタンクリックでグラフが変わる)

**Effect(副作用)**：レンダリングによって引き起こされる処理

**Flux フロー**：データフローの設計概念、流れが一方向

**プレゼンテーショナルコンポーネント**：軽量で、実際に HTML/DOM を生み出し、ステート（状態）を一切保持しないコンポーネント

**コンテナコンポーネント**：Store から値を注入する

#### ライフサイクル

    Mounting：コンポーネントが配置される期間
    Updating：コンポーネントが表示され、stateの変更される期間
    Unmounting：他のコンポーネントに移る時にだけ呼ばれる期間

#### ライフサイクルメソッドの代替：useEffect

    ①useEffect内にコールバック関数（レンダー毎に呼ばれる）
    ②第二引数に空配列をを渡すとMount時のみ実行される
    ③MountとUnmount（①と②）
    ④第二引数に配列0番目を入れる（特定のレンダー時）
    ・useEffect内でfetchが使える
    ・consoleで確認
    ・クリーンアップが必要な時

**クリーンアップ関数**：useEffect 内で return すること

&rarr; 再レンダリングされる前にクリーンアップ関数が実行される

#### 重要なこと

- JSX は必ず階層構造
- div 等で囲う必要があるが必要ない場合、`<React.Fragment>`で囲う
  &rarr; 省略<>
- React で map を回す場合、ユニーク key が必要

&rarr; なぜなら、消えた時にバグを起こすため

&rarr; console でエラーが出る

- Index は禁止、順番がずれるから

&rarr; 追加や削除など、絶対に変化しないのであれば使っても良い

&rarr; ユニークな key を入れるには、nanoid や uuid を使う

(`react eject script`を実行 → カプセル化されているので、複雑にしたいときに使う)

#### Redux or Hooks

**Redux**：複数ページまたがる場合、API から得られる情報

**Hooks**：True か false のようなコンポーネント内で管理できるもの

**Redux**：ページ全てレンダリング

&rarr;分けないとパフォーマンスが悪くなる場合がある

**Hooks**：一部分だけレンダリング

**useState** はコンポーネント単位で状態管理 &hArr; **Redux** はアプリ全体の状態を管理

## Redux

#### flow

component&rarr;Actions&rarr;(dispatch)&rarr;Reducer&rarr;(State 更新)&rarr;State

- Actions：プレーンなオブジェクトを返す（データだけを返す）
  - タイプを指定して export する
  - return 内に type と payload を記述
- Reducers：Actions からデータを受け取り Store の state をどう変更するか決める
  - initialState を作る（Store の初期状態、必要な state、export を記述）
- Store：redux の createStore メソッドを return し、combineReducers で state を生成
  - import した Reducers を combineReducers の中の value に指定する
  - router 内に redux を import して`<provider store={store}>`でコンポーネントを囲う

**ミドルウェア**：dispatch する前に処理する

- ミドルウェアと呼ばれる特別な種類のアドオンを使用して、dispatch 機能をカスタマイズできる

- configureStore：ストアのセットアッププロセスを簡素化する API
- createSlice：レデューサーのロジックとアクションを簡素化`{name, iniialState,reduers}`

- Redux Toolkit の Slice ＝ Reducer/Action/State を一つにした概念

- React だけだと大規模アプリは辛い
  &rarr; ネストが深くなると props を渡す作業が多くなる（バケツリレー）
  &rarr; Redux を使うと store から直接渡せる
