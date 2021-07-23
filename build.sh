echo "MAKING >> Staging Folder inside Public dir."
mkdir PUBLIC/build_staging

npx webpack

echo "Now Exporting JS files using BABEL [with remove-comments plugin]"
npx babel dist/ --out-dir PUBLIC/build_staging/ --source-maps --plugins remove-comments @babel/plugin-transform-modules-commonjs --ignore "src/assets/**/*"

echo "Now Exporting JS files using BABEL [MINIFY separate run]"
minify PUBLIC/build_staging/ --out-dir PUBLIC/ --mangle.keepClassName

echo "REMOVING >> Staging Folder inside Public dir."
rm -r PUBLIC/build_staging
