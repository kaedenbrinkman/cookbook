// Change this to your repository name
var GHPATH = '/';

// Choose a different app prefix name
var APP_PREFIX = 'recipes_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…).
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add
// others to this list
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/bootstrap-social.css`,
  `${GHPATH}/css/bootstrap-theme.css`,
  `${GHPATH}/css/bootstrap-theme.css.map`,
  `${GHPATH}/css/bootstrap-theme.min.css`,
  `${GHPATH}/js/bootstrap.css`,
  `${GHPATH}/js/bootstrap.css.map`,
  `${GHPATH}/js/bootstrap.min.css`,
  `${GHPATH}/js/main-minimal.css`,
  `${GHPATH}/js/main.css`,
  `${GHPATH}/js/normalize.css`,
  `${GHPATH}/js/pygment_highlights.css`,
  `${GHPATH}/js/staticman.css`,
  `${GHPATH}/js/bootstrap.js`
  `${GHPATH}/js/bootstrap.min.js`,
  `${GHPATH}/js/jquery-1.11.2.min.js`,
  `${GHPATH}/js/main.js`,
  `${GHPATH}/js/recipe-scaling.js`,
  `${GHPATH}/js/search.js`,
  `${GHPATH}/js/simple-jekyll-search.min.js`,
  `${GHPATH}/js/staticman.js`,
  `${GHPATH}/img/site/404.svg`,
]