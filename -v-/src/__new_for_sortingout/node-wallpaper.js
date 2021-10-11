// import wallpaper from "node-wallpaper";
// or:
const wallpaper = require("node-wallpaper").default;

wallpaper.get().then((wallpaper) => {
  console.log("The wallpaper is:", wallpaper);
});

//==============[GOOD]=============
