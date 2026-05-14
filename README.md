# input-password

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element (`<input-password>`) that extends `InputAlpha` to create a password input field.

## Demo

A live demo is available here: **[input-password demo](https://code4fukui.github.io/input-password/)**

The demo shows three examples:
1.  A basic password input.
2.  A password input with `maxlength="8"`.
3.  A required password input using the `required` attribute.

## Features

-   Provides a simple `<input-password>` custom element.
-   Inherits functionality from `InputAlpha`.
-   Supports standard input attributes like `maxlength` and `required`.

## Usage

Import the module into your HTML file. The component will automatically handle its dependency on `InputAlpha`.

```html
<script type="module" src="https://code4fukui.github.io/input-password/input-password.js"></script>
```

Then, you can use the `<input-password>` tag in your HTML.

### Basic Example

```html
<input-password id="my-password"></input-password>
```

### With Attributes

The element supports standard attributes, which are passed to the underlying `<input>` element.

```html
<!-- Set a maximum length of 8 characters -->
<input-password maxlength="8"></input-password>

<!-- Make the field required -->
<input-password required></input-password>
```

## Attribution

-   by [@taisukef](https://fukuno.jig.jp/3366)

## License

MIT License — see [LICENSE](LICENSE).