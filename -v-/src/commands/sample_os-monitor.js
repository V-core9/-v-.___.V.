const { Command, flags } = require("@oclif/command");

class SampleOsMonitorCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleOsMonitorCommand);
    const stream = flags.stream || null;
    this.log(
      `hello ${stream} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_os-monitor.js`
    );

    const monitor = require("os-monitor");

    // basic usage
    monitor.start();

    // more advanced usage with configs.
    monitor.start({
      delay: 500, // interval in ms between monitor cycles
      freemem: 1000000000, // freemem under which event 'freemem' is triggered
      uptime: 1000000, // number of secs over which event 'uptime' is triggered
      critical1: 0.1, // loadavg1 over which event 'loadavg1' is triggered
      critical5: 0.25, // loadavg5 over which event 'loadavg5' is triggered
      critical15: 0.5, // loadavg15 over which event 'loadavg15' is triggered
      silent: false, // set true to mute event 'monitor'
      stream: false, // set true to enable the monitor as a Readable Stream
      immediate: false, // set true to execute a monitor cycle at start()
    });

    // define handler that will always fire every cycle
    monitor.on("monitor", (event) => {
      console.log(
        event.type,
        "This event always happens on each monitor cycle!"
      );
    });

    // define handler for a too high 1-minute load average
    monitor.on("loadavg1", (event) => {
      console.log(event.type, "Load average is exceptionally high!");
    });

    // define handler for a too low free memory
    monitor.on("freemem", (event) => {
      console.log(event.type, "Free memory is very low!");
    });

    // define a throttled handler, using Underscore.js's throttle function (http://underscorejs.org/#throttle)
    monitor.throttle(
      "loadavg5",
      (event) => {
        // whatever is done here will not happen
        // more than once every 5 minutes(300000 ms)
      },
      monitor.minutes(5)
    );

    // change config while monitor is running
    monitor.config({
      freemem: 0.3, // alarm when 30% or less free memory available
    });

    if (stream !== null) {
      // use as readable stream
      monitor.start({ stream: true }).pipe(process.stdout);
    }
  }
}

SampleOsMonitorCommand.description = `A very simple monitor for the built-in os module in Node.js.
...
Allows you to observe some OS parameters, such as free memory available or load average.

os-monitor => https://www.npmjs.com/package/os-monitor
1.2.2 • Public • Published 10 days ago

Repository
> github.com/lfortin/node-os-monitor

Homepage
> github.com/lfortin/node-os-monitor#readme

npm install os-monitor


`;

SampleOsMonitorCommand.flags = {
  stream: flags.string({ char: "s", description: "use as readable stream " }),
};

module.exports = SampleOsMonitorCommand;
