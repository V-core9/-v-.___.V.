// https://www.npmjs.com/package/console-gui
//
const ConsoleGUI = require("console-gui");
const app = new ConsoleGUI();

app.name("foo").version("1.0.0").motd("Welcome message!").logo(" <= FOO => ");

app.run();
