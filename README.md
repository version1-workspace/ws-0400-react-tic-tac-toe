

# React基礎 コンポーネントの実装

JavaScriptで実装した○×ゲームと同様のゲームをReactで実装してください。

demo: https://version-1.github.io/ws-0400-react-tic-tac-toe/

## 課題で身に着けること

- ライフサイクルメソッド
- propsとは？
- stateとは？
- children, fragment
- クラスコンポーネントと関数コンポーネント
- コンポーネントを作る時に考えること
- yarnモジュールのインストール（styled-components)
- CSS in JS(Styled-Component)

## 課題の進め方

#### 0. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。

#### 1. yarn, create-react-appを利用してReactをインストール

1. reactをインストール
```
yarn create react-app .
```

2. reactを動かしてみる
```
yarn start
```

ブラウザが起動してReactのロゴが表示されれば完了です。


#### 2. Reactの公式ドキュメントを読む

主にメインコンセプト部分中心に

- [React.js公式](https://ja.reactjs.org/docs/hello-world.html)

### 参考リンク
- [JavaScriptでイミュータブルなプログラミングをする](https://sbfl.net/blog/2018/09/25/javascript-immutable-programming/)
- [ES2015のモジュール機能(import/export)](https://qiita.com/ozaki25/items/9723cb3c1c72845157d5)
- [これから始めるReact.js入門](https://speakerdeck.com/jjoo/korekarashi-merureact-dot-jsru-men)
- [Reactのライフサイクルメソッドのコード例](https://codesandbox.io/s/react-lifecycle-sample-w6n87?file=/src/App.js)

jsFiddleのようなブラウザで動作を確認できるものを使いながら読むと理解が深まるかと思います。

[jsFiddle](https://jsfiddle.net/boilerplate/react-jsx)


#### 3. ○×ゲームを実装

[js課題](https://github.com/version-1/js-tic-tac-toe)で実装した○×ゲームと同様のものを実装して、
JavaScriptでの実装とReactでの実装の違いを学ぶ。

##### styled-component をインストールしてstyled-componentを使ってスタイルする

下記手順を参考にstyled-componentをインストールして使用する。

[styled-components install](https://styled-components.com/docs/basics#installation)

##### 開発はdevelopブランチを使って行い、実装が完了した後はmasterへのプルリクエストを作成する。

サイトを公開する際はdevelopブランチで下記サイト公開の手順を実施してください。

#### 4. サイトとして公開

1. gh-pagesモジュールを追加

```
$ yarn add -D gh-pages
```

2. package.jsonのscriptsに下記コマンドを追加

```
"predeploy": "yarn run build"
"deploy": "gh-pages -d build"
```

3. package.jsonにhompepage urlを追加
```
// https://[アカウント名].github.io/[リポジトリ名]
ex)
  "homepage": "https://version-1.github.io/react-tic-tac-toe"
```

4. 上記変更をコミット & Push

5. コマンドを実行

```
$ yarn run deploy
```
