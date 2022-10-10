const { Printer, Align, Model, InMemory } = require('../dist');

(async () => {
  const model = new Model('PrintiD')
  const connection = new InMemory()
  const printer = await Printer.CONNECT(model, connection)
  await printer.setAlignment(Align.Center)
  // not all printers have the qrcode method implemented, you may need to implement the method with the manufacturer's esc/pos commands.
  await printer.qrcode('https://github.com/grandchef/escpos-buffer')
  await printer.setAlignment(Align.Left)
  await printer.buzzer()
  await printer.cutter()
  process.stdout.write(connection.buffer())
})()

//> node examples/qrcode.js | lp -d MyCupsPrinterName
