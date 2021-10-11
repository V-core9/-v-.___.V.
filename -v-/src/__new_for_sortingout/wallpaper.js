// https://www.npmjs.com/package/wallpaper 
// Works on macOS 10.14.4+, Linux, and Windows 10+.

const wallpaper = require('wallpaper');

const img1 = 'c:\\windows\\web\\wallpaper\\theme1\\img2.jpg';
const img2 = 'c:\\windows\\web\\wallpaper\\theme1\\img13.jpg';

(async () => {

	var wall = await wallpaper.get();
	console.log(wall);

  if (wall !== img1) {
    await wallpaper.set(img1);
  } else {
    await wallpaper.set(img2);
  }

})();

//==============[GOOD]=============
