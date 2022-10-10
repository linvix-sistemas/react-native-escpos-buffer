[![Latest Version][version-badge]][npm-link]
[![TypeScript version][ts-badge]][typescript-48]
[![MIT][license-badge]][license]

# ESC/POS Printer Library for React Native

Library to generate buffer for thermal printers.

## Install

Run command bellow on your project folder

```sh
yarn add @linvix-sistemas/react-native-escpos-buffer
```

or

```sh
npm install @linvix-sistemas/react-native-escpos-buffer
```

## Usage

```js
const model = new Model('MP-4200 TH');
const connection = new InMemory();
const printer = await Printer.CONNECT(model, connection);

await printer.setColumns(56)
await printer.write('Simple Text *** ')
await printer.writeln('Bold Text -> complete line text.[]123456', Style.Bold)
await printer.writeln('Double height', Style.DoubleHeight | Style.Bold, Align.Center)
await printer.writeln('Áçênts R$ 5,00', Style.DoubleWidth | Style.DoubleWidth, Align.Center)
await printer.withStyle({
  width: 4,
  height: 6,
  bold: true,
  italic: true,
  underline: true,
  align: Align.Center,
  }, () => {
    printer.writeln('You can apply multiple styles at once using withStyle()')
    printer.writeln('Font sizes 1-8 are available')
})
await printer.writeln('Default style is restored afterwards')
await printer.feed(6)
await printer.buzzer()
await printer.cutter()
await printer.drawer(Drawer.First)

// Get generated bytes from lib
const bytes = connection.buffer();

// You need to send bytes to printer, via bluetooth or other, with another package.
```

## Available scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `style:fix` - fix prettier style problems,
- `style:check` - check for prettier style,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
- `test:debug` - run tests debugging

## License

Licensed under the MIT. See the [LICENSE](https://github.com/linvix-sistemas/react-native-escpos-buffer/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.8-blue.svg
[typescript-48]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-8.html
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/linvix-sistemas/react-native-escpos-buffer/blob/master/LICENSE
[version-badge]: https://img.shields.io/npm/v/@linvix-sistemas/react-native-escpos-buffer?label=@linvix-sistemas/react-native-escpos-buffer
[npm-link]: https://www.npmjs.com/package/@linvix-sistemas/react-native-escpos-buffer
