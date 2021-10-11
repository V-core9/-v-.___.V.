const open = require('open');

const link = 'https://github.com/V-core9';

// Opens the image in the default image viewer and waits for the opened app to quit.
open('../static/assets/logo.png', {wait: true});
console.log('The image viewer app quit');

// Opens the URL in the default browser.
open(link);

// Opens the URL in a specified browser.
open(link, {app: {name: 'firefox'}});

// Specify app arguments.
open(link, {app: {name: 'google chrome', arguments: ['--incognito']}});

//==============[GOOD]=============
