const mix = require('laravel-mix');
const path = require('path')

const { devServer } = require("./webpack.fix")

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.js', 'public/js')
    .sass('resources/css/app.scss', 'public/css')
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
            extensions: ['.*', '.wasm', '.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
            alias: {
                '@': path.resolve('resources/js'),
                Shared: path.resolve('resources/js/Shared'),
                Pages: path.resolve('resources/js/Pages'),
                api: path.resolve('resources/js/api/index'),
                Reducer: path.resolve('resources/js/Reducer')
            }
        },
        optimization: {
            moduleIds: 'named'
        },
        devServer
    })
    // .postCss('resources/css/app.scss', 'public/css', [
    //     //
    // ]);
