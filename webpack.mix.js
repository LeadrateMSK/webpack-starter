const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let mix = require('laravel-mix');

/* Больше настроек Webpack: https://laravel-mix.com/docs/6.0/extending-mix */

mix.webpackConfig({
    plugins: [
        // Перед каждым новым запуском папка /dist будет очищена
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
    ]
});

mix.options({
    processCssUrls: false,
});

mix.js('src/js/app.js', 'js')
    //.vue()
    .sass('src/styles/app.scss', 'css')
    .sourceMaps()
    .copyDirectory('src/*.html', 'dist')
    .copyDirectory('src/fonts', 'dist/fonts')
    .copyDirectory('src/img', 'dist/img')
    .setPublicPath('dist');

mix.browserSync({
    watch: true,
    ghostMode: false,
    notify: false,
    server: "./dist",
});