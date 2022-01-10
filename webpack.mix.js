const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
let mix = require('laravel-mix');

/* Больше настроек Webpack: https://laravel-mix.com/docs/6.0/extending-mix */

//require('laravel-mix-eslint');

mix.webpackConfig({
    plugins: [
        // Перед каждым новым запуском папка /dist будет очищена
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new ESLintPlugin({
            fix: true,
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
    //.eslint({
    //    fix: true,
    //    extensions: ['js']
    //})
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