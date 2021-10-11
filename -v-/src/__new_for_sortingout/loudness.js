// https://www.npmjs.com/package/loudness
// A node.js library to control the systems output volume

const loudness = require("loudness");

async function setVol(vol = 20) {
  try {
    var res = await loudness.setVolume(vol);
    return true;
  } catch (error) {
    console.log(error);
    console.trace();
    return error;
  }
}

async function getVol() {
  try {
    var res = await loudness.getVolume();
    return res;
  } catch (error) {
    console.log(error);
    console.trace();
    return error;
  }
}

async function mute(mval = false) {
  try {
    var res = await loudness.setMuted(false);
    console.log(res);
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function isMute() {
  try {
    var mutedStatus = await loudness.getMuted();
    return mutedStatus;
  } catch (error) {
    console.log(error);
    console.trace();
    return error;
  }
}

async function testingIT() {
  var vol = await getVol();
  console.log(await vol);

  var vol2 = await setVol(5);
  console.log(await vol2);

  var vol3 = await setVol(75);
  console.log(await vol3);

  var vol4 = await getVol();
  console.log(await vol4);

  var vol5 = await setVol(5);
  console.log(await vol5);
  // vol = 45
  var vol25 = await setVol(8);
  console.log(await vol25);
}

testingIT();
