mkdir -p dist
echo "created dist folder"

rm -rf dist/*
echo "removed all files from dist"

cp -r src/* dist
echo "copied src to dist"

mkdir -p build
echo "created build folder"

rm -rf build/*
echo "removed all files from dist"

cp -r src/* build
echo "copied src to build"

rm dist/**/*.js
echo "removed js files from dist"

babel src -d build || exit 1
echo "transpiled src to build"

webpack --config webpack.config.js
echo "webpacked build"