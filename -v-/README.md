-v-
===

V_CLI Tool 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/-v-.svg)](https://npmjs.org/package/-v-)
[![Downloads/week](https://img.shields.io/npm/dw/-v-.svg)](https://npmjs.org/package/-v-)
[![License](https://img.shields.io/npm/l/-v-.svg)](https://github.com/MyUserNameIsMyUserName/-v-/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g -v-
$ -v- COMMAND
running command...
$ -v- (-v|--version|version)
-v-/1.2.7 win32-x64 node-v14.17.5
$ -v- --help [COMMAND]
USAGE
  $ -v- COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`-v- check-ip [TESTIP]`](#-v--check-ip-testip)
* [`-v- cross-zip`](#-v--cross-zip)
* [`-v- demotech_md5`](#-v--demotech_md5)
* [`-v- hello`](#-v--hello)
* [`-v- help [COMMAND]`](#-v--help-command)
* [`-v- scan_all_ports`](#-v--scan_all_ports)
* [`-v- sys_audio`](#-v--sys_audio)
* [`-v- sys_baseboard`](#-v--sys_baseboard)
* [`-v- sys_battery`](#-v--sys_battery)
* [`-v- sys_bios`](#-v--sys_bios)
* [`-v- sys_chassis`](#-v--sys_chassis)
* [`-v- sys_cpu_current_speed`](#-v--sys_cpu_current_speed)
* [`-v- sys_cpu_info`](#-v--sys_cpu_info)
* [`-v- sys_cpu_temp`](#-v--sys_cpu_temp)
* [`-v- sys_disk_io`](#-v--sys_disk_io)
* [`-v- sys_disk_layout`](#-v--sys_disk_layout)
* [`-v- sys_fs_stats`](#-v--sys_fs_stats)
* [`-v- sys_graphics`](#-v--sys_graphics)
* [`-v- sys_inet_checksite`](#-v--sys_inet_checksite)
* [`-v- sys_inet_latency`](#-v--sys_inet_latency)
* [`-v- sys_info`](#-v--sys_info)
* [`-v- sys_load`](#-v--sys_load)
* [`-v- sys_mem_info`](#-v--sys_mem_info)
* [`-v- sys_net_conn`](#-v--sys_net_conn)
* [`-v- sys_net_def_gateway`](#-v--sys_net_def_gateway)
* [`-v- sys_net_def_interface`](#-v--sys_net_def_interface)
* [`-v- sys_net_interfaces`](#-v--sys_net_interfaces)
* [`-v- sys_net_stats`](#-v--sys_net_stats)
* [`-v- sys_open_files`](#-v--sys_open_files)
* [`-v- sys_os_info`](#-v--sys_os_info)
* [`-v- sys_processes`](#-v--sys_processes)
* [`-v- sys_services`](#-v--sys_services)
* [`-v- sys_users`](#-v--sys_users)
* [`-v- sys_uuid`](#-v--sys_uuid)
* [`-v- sys_versions`](#-v--sys_versions)
* [`-v- test-is_cmd`](#-v--test-is_cmd)
* [`-v- test-is_online`](#-v--test-is_online)
* [`-v- test-speedtest.net`](#-v--test-speedtestnet)
* [`-v- test-unicode_version`](#-v--test-unicode_version)
* [`-v- test_globally-installed`](#-v--test_globally-installed)
* [`-v- test_internal-ip`](#-v--test_internal-ip)
* [`-v- test_public-ip`](#-v--test_public-ip)
* [`-v- volume_demo_example`](#-v--volume_demo_example)
* [`-v- volume_get`](#-v--volume_get)
* [`-v- volume_mute`](#-v--volume_mute)
* [`-v- volume_set [VOLLEVEL]`](#-v--volume_set-vollevel)
* [`-v- volume_unmute`](#-v--volume_unmute)
* [`-v- wifi-name`](#-v--wifi-name)
* [`-v- wifi-password`](#-v--wifi-password)
* [`-v- wifi_connect`](#-v--wifi_connect)
* [`-v- wifi_delete-connection`](#-v--wifi_delete-connection)
* [`-v- wifi_disconnect`](#-v--wifi_disconnect)
* [`-v- wifi_get-current-connections`](#-v--wifi_get-current-connections)
* [`-v- wifi_node`](#-v--wifi_node)
* [`-v- wifi_scan`](#-v--wifi_scan)
* [`-v- windows-vulnerabilities`](#-v--windows-vulnerabilities)

## `-v- check-ip [TESTIP]`

CommonJS module for Node.js to validate IP addresses and return additional information about the IP address

```
USAGE
  $ -v- check-ip [TESTIP]

ARGUMENTS
  TESTIP  [default: 8.8.8.8] This is IP we want to check...

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  check-ip
  1.1.1 • Public • Published 4 years ago

  A simple module that will take an IP address as input and perform the following:
       ->  Validate the IP address for proper format and number range
       ->  Remove any leading zeros in each octet
       ->  Return a tested ("boiled") IP address
       ->  Indicate if the IP address is part of the bogons list (https://en.wikipedia.org/wiki/Bogon_filtering)
       ->  Indicate if the IP address is part of the multicast IP range (https://en.wikipedia.org/wiki/IP_multicast)
       ->  Indicate if the IP address is an Automatic Private IP Address aka APIPA 
  (http://www.webopedia.com/TERM/A/APIPA.html)
       ->  Indicate if the IP address is an RFC1918 IP address aka private IP address 
  (https://tools.ietf.org/html/rfc1918)
       ->  Indicate if the IP address is a public IP address

  npm install check-ip

  ------------------------------
  var checkIp = require('check-ip');
 
  checkIp('8.8.8.8');
  ------------------------------
```

_See code: [src/commands/check-ip.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/check-ip.js)_

## `-v- cross-zip`

Cross-platform .zip file creation

```
USAGE
  $ -v- cross-zip

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  cross-zip -> https://www.npmjs.com/package/cross-zip
  DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate 
  @types/cross-zip package
  4.0.0 • Public • Published 10 months ago

  npm install cross-zip

  Repository
  -> github.com/feross/cross-zip

  Homepage
  -> github.com/feross/cross-zip
```

_See code: [src/commands/cross-zip.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/cross-zip.js)_

## `-v- demotech_md5`

Node.js package for Apache style password encryption using md5.

```
USAGE
  $ -v- demotech_md5

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  apache-md5
  1.1.7 • Public • Published 2 months ago

  npm install apache-md5

  Repository
  ->  github.com/gevorg/apache-md5

  Homepage
  ->  github.com/gevorg/apache-md5
```

_See code: [src/commands/demotech_md5.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/demotech_md5.js)_

## `-v- hello`

HELLO & WELCOME 

```
USAGE
  $ -v- hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here 
  Yup we are quite short with it...haha
```

_See code: [src/commands/hello.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/hello.js)_

## `-v- help [COMMAND]`

display help for -v-

```
USAGE
  $ -v- help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `-v- scan_all_ports`

Scans ports to see if they are open or closed.

```
USAGE
  $ -v- scan_all_ports

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  node-port-scanner
  3.0.1 • Public • Published 5 months ago

  Scans ports to see if they are open or closed.
  After calling nodePortScanner, ports are checked in order one after the previous is completed.
  Multiple calls can be made and will run in parallel.

  npm i node-port-scanner

  Repository
  github.com/beaudurrant/node-port-scanner

  Homepage
  github.com/beaudurrant/node-port-scanner
```

_See code: [src/commands/scan_all_ports.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/scan_all_ports.js)_

## `-v- sys_audio`

Describe the command here

```
USAGE
  $ -v- sys_audio

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_audio.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_audio.js)_

## `-v- sys_baseboard`

Describe the command here

```
USAGE
  $ -v- sys_baseboard

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_baseboard.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_baseboard.js)_

## `-v- sys_battery`

Describe the command here

```
USAGE
  $ -v- sys_battery

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_battery.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_battery.js)_

## `-v- sys_bios`

Prints BIOS information

```
USAGE
  $ -v- sys_bios

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_bios.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_bios.js)_

## `-v- sys_chassis`

Describe the command here

```
USAGE
  $ -v- sys_chassis

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_chassis.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_chassis.js)_

## `-v- sys_cpu_current_speed`

Current CPU speed & Per Core stats

```
USAGE
  $ -v- sys_cpu_current_speed

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_cpu_current_speed.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_cpu_current_speed.js)_

## `-v- sys_cpu_info`

Getting and printing CPU info

```
USAGE
  $ -v- sys_cpu_info

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_cpu_info.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_cpu_info.js)_

## `-v- sys_cpu_temp`

CPU Temperature Check

```
USAGE
  $ -v- sys_cpu_temp

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_cpu_temp.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_cpu_temp.js)_

## `-v- sys_disk_io`

Describe the command here

```
USAGE
  $ -v- sys_disk_io

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_disk_io.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_disk_io.js)_

## `-v- sys_disk_layout`

Describe the command here

```
USAGE
  $ -v- sys_disk_layout

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_disk_layout.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_disk_layout.js)_

## `-v- sys_fs_stats`

Describe the command here

```
USAGE
  $ -v- sys_fs_stats

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_fs_stats.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_fs_stats.js)_

## `-v- sys_graphics`

Describe the command here

```
USAGE
  $ -v- sys_graphics

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_graphics.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_graphics.js)_

## `-v- sys_inet_checksite`

Describe the command here

```
USAGE
  $ -v- sys_inet_checksite

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_inet_checksite.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_inet_checksite.js)_

## `-v- sys_inet_latency`

Describe the command here

```
USAGE
  $ -v- sys_inet_latency

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_inet_latency.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_inet_latency.js)_

## `-v- sys_info`

Describe the command here

```
USAGE
  $ -v- sys_info

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_info.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_info.js)_

## `-v- sys_load`

Current System Load Information & Per Core Stats

```
USAGE
  $ -v- sys_load

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_load.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_load.js)_

## `-v- sys_mem_info`

RAM Info printing

```
USAGE
  $ -v- sys_mem_info

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_mem_info.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_mem_info.js)_

## `-v- sys_net_conn`

Describe the command here

```
USAGE
  $ -v- sys_net_conn

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_net_conn.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_net_conn.js)_

## `-v- sys_net_def_gateway`

Describe the command here

```
USAGE
  $ -v- sys_net_def_gateway

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_net_def_gateway.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_net_def_gateway.js)_

## `-v- sys_net_def_interface`

Describe the command here

```
USAGE
  $ -v- sys_net_def_interface

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_net_def_interface.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_net_def_interface.js)_

## `-v- sys_net_interfaces`

Describe the command here

```
USAGE
  $ -v- sys_net_interfaces

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_net_interfaces.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_net_interfaces.js)_

## `-v- sys_net_stats`

Describe the command here

```
USAGE
  $ -v- sys_net_stats

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_net_stats.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_net_stats.js)_

## `-v- sys_open_files`

Describe the command here

```
USAGE
  $ -v- sys_open_files

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_open_files.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_open_files.js)_

## `-v- sys_os_info`

Finding and printing Operating System Info

```
USAGE
  $ -v- sys_os_info

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_os_info.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_os_info.js)_

## `-v- sys_processes`

Describe the command here

```
USAGE
  $ -v- sys_processes

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_processes.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_processes.js)_

## `-v- sys_services`

Describe the command here

```
USAGE
  $ -v- sys_services

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_services.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_services.js)_

## `-v- sys_users`

Describe the command here

```
USAGE
  $ -v- sys_users

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_users.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_users.js)_

## `-v- sys_uuid`

Describe the command here

```
USAGE
  $ -v- sys_uuid

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_uuid.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_uuid.js)_

## `-v- sys_versions`

Describe the command here

```
USAGE
  $ -v- sys_versions

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/sys_versions.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/sys_versions.js)_

## `-v- test-is_cmd`

Check if the current environment is the Windows Command Prompt

```
USAGE
  $ -v- test-is_cmd

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/test-is_cmd.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test-is_cmd.js)_

## `-v- test-is_online`

Check if the internet connection is up

```
USAGE
  $ -v- test-is_online

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  is-online -> https://www.npmjs.com/package/is-online
  TypeScript icon, indicating that this package has built-in type declarations
  9.0.1 • Public • Published 3 months ago

  Repository
  ->  github.com/sindresorhus/is-online

  Homepage
  ->  github.com/sindresorhus/is-online#readme

  Works in Node.js and the browser (with a bundler).
  In the browser you have navigator.onLine, but it's useless as it only tells you if there's a local connection, and not 
  whether the internet is accessible.

  npm install is-online

  ============================
  const isOnline = require('is-online');

  (async () => {
  	console.log(await isOnline());
  	//=> true
  })();
  ============================
```

_See code: [src/commands/test-is_online.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test-is_online.js)_

## `-v- test-speedtest.net`

The whole speed test runs automatically, but a lot of events are available to get more info than you need.

```
USAGE
  $ -v- test-speedtest.net

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  speedtest-net -> https://www.npmjs.com/package/speedtest-net
  DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate 
  @types/speedtest-net package
  2.2.0 • Public • Published 4 months ago

  Installation
  npm install --save speedtest-net

  Command-Line Tool
  $ npm install --global speedtest-net
  $ speedtest-net

  Repository
  ->  github.com/ddsol/speedtest.net

  Homepage
  ->  github.com/ddsol/speedtest.net#readme
```

_See code: [src/commands/test-speedtest.net.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test-speedtest.net.js)_

## `-v- test-unicode_version`

Check the unicode version in your code

```
USAGE
  $ -v- test-unicode_version

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  unicode-version -> https://www.npmjs.com/package/unicode-version
  1.0.2 • Public • Published 3 years ago

  npm install unicode-version

  Usage
  ----------------------------------------------
  const unicodeVersion = require('unicode-version');
  console.log(unicodeVersion);
  ----------------------------------------------

  $ npm start
  #=> 11.0 


  Repository
  ->  github.com/MrDatastorage/unicode-version

  Homepage
  ->  github.com/MrDatastorage/unicode-version
```

_See code: [src/commands/test-unicode_version.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test-unicode_version.js)_

## `-v- test_globally-installed`

Describe the command here

```
USAGE
  $ -v- test_globally-installed

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/test_globally-installed.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test_globally-installed.js)_

## `-v- test_internal-ip`

Describe the command here

```
USAGE
  $ -v- test_internal-ip

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/test_internal-ip.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test_internal-ip.js)_

## `-v- test_public-ip`

Get your public IP address - very fast!

```
USAGE
  $ -v- test_public-ip

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  public-ip -> https://www.npmjs.com/package/public-ip
  TypeScript icon, indicating that this package has built-in type declarations
  4.0.4 • Public • Published 3 months ago

  npm install public-ip

  ==================
  const publicIp = require('public-ip');

  (async () => {
  	console.log(await publicIp.v4());
  	//=> '46.5.21.123'

  	console.log(await publicIp.v6());
  	//=> 'fe80::200:f8ff:fe21:67cf'
  })();
  ===================
  <| OR MAYBE |>
  ===================
  const publicIp = require('public-ip');

  (async () => {
  	await publicIp.v6({
  		fallbackUrls: [
  			'https://ifconfig.co/ip'
  		]
  	});
  })();
  ====================

  Repository
  ->  github.com/sindresorhus/public-ip

  Homepage
  ->  github.com/sindresorhus/public-ip#readme
```

_See code: [src/commands/test_public-ip.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/test_public-ip.js)_

## `-v- volume_demo_example`

A node.js library to control the systems output volume

```
USAGE
  $ -v- volume_demo_example

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  loudness  ->  https://www.npmjs.com/package/loudness
  TypeScript icon, indicating that this package has built-in type declarations
  0.4.1 • Public • Published a year ago

  node-loudness
  A node.js library to control the systems output volume

  Usage
  The library currently has support for four simple async functions. The volume is specified as an integer between 0 and 
  100 (inc.).

  OS Support
  Currently macOS, Windows (>= Vista) and Linux (ALSA) is supported, please send a pull request if you are using another 
  setup.

  Repository
  ->  github.com/LinusU/node-loudness

  Homepage
  ->  github.com/LinusU/node-loudness#readm
```

_See code: [src/commands/volume_demo_example.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/volume_demo_example.js)_

## `-v- volume_get`

Get the current volume setting.

```
USAGE
  $ -v- volume_get

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  loudness  ->  https://www.npmjs.com/package/loudness
  TypeScript icon, indicating that this package has built-in type declarations
  0.4.1 • Public • Published a year ago

  node-loudness
  A node.js library to control the systems output volume

  Usage
  The library currently has support for four simple async functions. The volume is specified as an integer between 0 and 
  100 (inc.).

  OS Support
  Currently macOS, Windows (>= Vista) and Linux (ALSA) is supported, please send a pull request if you are using another 
  setup.

  Repository
  ->  github.com/LinusU/node-loudness

  Homepage
  ->  github.com/LinusU/node-loudness#readm
```

_See code: [src/commands/volume_get.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/volume_get.js)_

## `-v- volume_mute`

Mute device to stop it from producing sound.

```
USAGE
  $ -v- volume_mute

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  loudness  ->  https://www.npmjs.com/package/loudness
  TypeScript icon, indicating that this package has built-in type declarations
  0.4.1 • Public • Published a year ago

  node-loudness
  A node.js library to control the systems output volume

  Usage
  The library currently has support for four simple async functions. The volume is specified as an integer between 0 and 
  100 (inc.).

  OS Support
  Currently macOS, Windows (>= Vista) and Linux (ALSA) is supported, please send a pull request if you are using another 
  setup.

  Repository
  ->  github.com/LinusU/node-loudness

  Homepage
  ->  github.com/LinusU/node-loudness#readm
```

_See code: [src/commands/volume_mute.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/volume_mute.js)_

## `-v- volume_set [VOLLEVEL]`

Command that will set the OS Volume Level to [value-provided]

```
USAGE
  $ -v- volume_set [VOLLEVEL]

ARGUMENTS
  VOLLEVEL  [default: 20] This is basically how it gets new value sent by using the args option.

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  loudness  ->  https://www.npmjs.com/package/loudness
  TypeScript icon, indicating that this package has built-in type declarations
  0.4.1 • Public • Published a year ago

  node-loudness
  A node.js library to control the systems output volume

  Usage
  The library currently has support for four simple async functions. The volume is specified as an integer between 0 and 
  100 (inc.).

  OS Support
  Currently macOS, Windows (>= Vista) and Linux (ALSA) is supported, please send a pull request if you are using another 
  setup.

  Repository
  ->  github.com/LinusU/node-loudness

  Homepage
  ->  github.com/LinusU/node-loudness#readm
```

_See code: [src/commands/volume_set.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/volume_set.js)_

## `-v- volume_unmute`

Unmute device command - Sound ON

```
USAGE
  $ -v- volume_unmute

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  loudness  ->  https://www.npmjs.com/package/loudness
  TypeScript icon, indicating that this package has built-in type declarations
  0.4.1 • Public • Published a year ago

  node-loudness
  A node.js library to control the systems output volume

  Usage
  The library currently has support for four simple async functions. The volume is specified as an integer between 0 and 
  100 (inc.).

  OS Support
  Currently macOS, Windows (>= Vista) and Linux (ALSA) is supported, please send a pull request if you are using another 
  setup.

  Repository
  ->  github.com/LinusU/node-loudness

  Homepage
  ->  github.com/LinusU/node-loudness#readm
```

_See code: [src/commands/volume_unmute.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/volume_unmute.js)_

## `-v- wifi-name`

Get current wifi name

```
USAGE
  $ -v- wifi-name

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  wifi-name
  3.1.1 • Public • Published 4 years ago

  npm install wifi-name

  Repository
  ->  github.com/kevva/wifi-name

  Homepage
  ->  github.com/kevva/wifi-name#readme
```

_See code: [src/commands/wifi-name.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi-name.js)_

## `-v- wifi-password`

Get current wifi password

```
USAGE
  $ -v- wifi-password

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  wifi-password -> https://www.npmjs.com/package/wifi-password
  3.0.1 • Public • Published 4 years ago

  npm install wifi-password

  ------------------------------
  const wifiPassword = require('wifi-password');
 
  wifiPassword().then(password => {
       console.log(password);
       //=> 'johndoesecretpassword'
  });
  -------------------------------------

  Repository
  -> github.com/kevva/wifi-password

  Homepage
  -> github.com/kevva/wifi-password#readme
```

_See code: [src/commands/wifi-password.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi-password.js)_

## `-v- wifi_connect`

Connect to a network

```
USAGE
  $ -v- wifi_connect

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Node-WiFi - Connect to a network

  node-wifi =>  https://www.npmjs.com/package/node-wifi
  2.0.15 • Public • Published 18 days ago

  # Use as a module
  npm install node-wifi

  # Use as a CLI
  npm install node-wifi -g

  Repository
  ->  github.com/friedrith/node-wifi

  Homepage
  ->  github.com/friedrith/node-wifi#readme

  =============================
  wifi.connect({ ssid: 'ssid', password: 'password' }, error => {
     if (error) {
       console.log(error);
     }
     console.log('Connected');
  });
  ============================
```

_See code: [src/commands/wifi_connect.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi_connect.js)_

## `-v- wifi_delete-connection`

Delete connection information

```
USAGE
  $ -v- wifi_delete-connection

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Node-WiFi - Delete a saved network
  NOTE: Not available on all os for now!

  node-wifi =>  https://www.npmjs.com/package/node-wifi
  2.0.15 • Public • Published 18 days ago

  # Use as a module
  npm install node-wifi

  # Use as a CLI
  npm install node-wifi -g

  Repository
  ->  github.com/friedrith/node-wifi

  Homepage
  ->  github.com/friedrith/node-wifi#readme

  ==================================
  wifi.deleteConnection({ ssid: 'ssid' }, error => {
     if (error) {
       console.log(error);
     } else {
       console.log('Deleted');
     }
  });
  ==================================
```

_See code: [src/commands/wifi_delete-connection.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi_delete-connection.js)_

## `-v- wifi_disconnect`

Disconnect from a network

```
USAGE
  $ -v- wifi_disconnect

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Node-WiFi - Disconnect from a network
  NOTE: Not available on all os for now!

  node-wifi =>  https://www.npmjs.com/package/node-wifi
  2.0.15 • Public • Published 18 days ago

  # Use as a module
  npm install node-wifi

  # Use as a CLI
  npm install node-wifi -g

  Repository
  ->  github.com/friedrith/node-wifi

  Homepage
  ->  github.com/friedrith/node-wifi#readme

  ========================
  wifi.disconnect(error => {
     if (error) {
       console.log(error);
     } else {
       console.log('Disconnected');
     }
  });
  =========================
```

_See code: [src/commands/wifi_disconnect.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi_disconnect.js)_

## `-v- wifi_get-current-connections`

Describe the command here

```
USAGE
  $ -v- wifi_get-current-connections

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Node-WiFi - Describe the command here

  node-wifi =>  https://www.npmjs.com/package/node-wifi
  2.0.15 • Public • Published 18 days ago

  # Use as a module
  npm install node-wifi

  # Use as a CLI
  npm install node-wifi -g

  Repository
  ->  github.com/friedrith/node-wifi

  Homepage
  ->  github.com/friedrith/node-wifi#readme
```

_See code: [src/commands/wifi_get-current-connections.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi_get-current-connections.js)_

## `-v- wifi_node`

Node-WiFi demo that has all the things triggered.

```
USAGE
  $ -v- wifi_node

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Node-WiFi  -  demo that has all the things triggered
  node-wifi =>  https://www.npmjs.com/package/node-wifi
  2.0.15 • Public • Published 18 days ago

  # Use as a module
  npm install node-wifi

  # Use as a CLI
  npm install node-wifi -g

  Repository
  ->  github.com/friedrith/node-wifi

  Homepage
  ->  github.com/friedrith/node-wifi#readme
```

_See code: [src/commands/wifi_node.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi_node.js)_

## `-v- wifi_scan`

Scans for Available Networks

```
USAGE
  $ -v- wifi_scan

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Node-WiFi  - Scans for Available Networks
  node-wifi =>  https://www.npmjs.com/package/node-wifi
  2.0.15 • Public • Published 18 days ago

  # Use as a module
  npm install node-wifi

  # Use as a CLI
  npm install node-wifi -g

  Repository
  ->  github.com/friedrith/node-wifi

  Homepage
  ->  github.com/friedrith/node-wifi#readme
```

_See code: [src/commands/wifi_scan.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/wifi_scan.js)_

## `-v- windows-vulnerabilities`

Get the number of known security vulnerabilities for your current windows 10 version

```
USAGE
  $ -v- windows-vulnerabilities

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  windows-vulnerabilities -> https://www.npmjs.com/package/windows-vulnerabilities
  0.0.22 • Public • Published a year ago

  Get os version and number of known security vulnerabilities. Array or -1 if os build not in database.

  npm install windows-vulnerabilities

  --------------------------------------------------
  const winVlnr = require('windows-vulnerabilities');
 
  // Get os version and number of known security vulnerabilities
  winVlnr();
  //=> '['1607', "842"]'
  -------------------------------------------------

  Repository
  -> github.com/lukapetrovic/windows-vulnerabilities

  Homepage
  -> github.com/lukapetrovic/windows-vulnerabilities
```

_See code: [src/commands/windows-vulnerabilities.js](https://github.com/MyUserNameIsMyUserName/-v-/blob/v1.2.7/src/commands/windows-vulnerabilities.js)_
<!-- commandsstop -->
