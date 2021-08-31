const {Command, flags} = require('@oclif/command')

class SampleRobotjsBaseDemoCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleRobotjsBaseDemoCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_robotjs-base-demo.js`)

    // Move the mouse across the screen as a sine wave.
    var robot = require("robotjs");
    
    // Speed up the mouse.
    robot.setMouseDelay(.25);
    
    var twoPI = Math.PI * 2.0;
    var screenSize = robot.getScreenSize();
    var height = (screenSize.height / 2) - 10;
    var width = screenSize.width;


    for (var x = 0; x < width; x++)
    {
        var y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }

    // Type "Hello World".
    robot.typeString("-v- sample_node-notifier");
    
    // Press enter.
    robot.keyTap("enter");

    // Get mouse position.
    var mouse = robot.getMousePos();
    // Get pixel color in hex format.
    var hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
  }
}

SampleRobotjsBaseDemoCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleRobotjsBaseDemoCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleRobotjsBaseDemoCommand
