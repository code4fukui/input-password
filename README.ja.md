# input-password

`InputAlpha` を拡張してパスワード入力フィールドを作成するカスタムHTML要素（`<input-password>`）です。

## デモ

ライブデモはこちら：**[input-password demo](https://code4fukui.github.io/input-password/)**

デモでは以下の3つの例を示しています：
1.  基本的なパスワード入力。
2.  `maxlength="8"` を指定したパスワード入力。
3.  `required` 属性を使用した必須のパスワード入力。

## 機能

-   シンプルな `<input-password>` カスタム要素を提供します。
-   `InputAlpha` の機能を継承します。
-   `maxlength` や `required` などの標準的な input 属性をサポートします。

## 使い方

HTMLファイルにモジュールをインポートします。コンポーネントは `InputAlpha` への依存関係を自動的に処理します。

```html
<script type="module" src="https://code4fukui.github.io/input-password/input-password.js"></script>
```

その後、HTML内で `<input-password>` タグを使用できます。

### 基本的な例

```html
<input-password id="my-password"></input-password>
```

### 属性の指定

この要素は標準的な属性をサポートしており、それらは内部の `<input>` 要素に渡されます。

```html
<!-- 最大文字数を8文字に設定 -->
<input-password maxlength="8"></input-password>

<!-- フィールドを必須入力に設定 -->
<input-password required></input-password>
```

## クレジット

-   by [@taisukef](https://fukuno.jig.jp/3366)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
