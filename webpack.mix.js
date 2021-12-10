let mix = require("laravel-mix");

mix
  .js("resources/js/field.js", "dist/js")
  .sass("resources/sass/field.scss", "dist/css")
  .vue()
  .webpackConfig({
    resolve: {
      symlinks: false,
    },
  });
