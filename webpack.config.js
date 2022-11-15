const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // TODO: Look into how to work this with mvc pages
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        main: __dirname + '/src/main.ts',
        styles: __dirname + '/src/styles/main.scss',
        // pages: ['./src/pages/page.about-us.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'styles/[name]-[contenthash].min.css'
                },
                use: [
                    'sass-loader'
                ]
            }
            //   {
            //     test: /\.scss$/,
            //     use: [
            //       'style-loader',
            //       'css-loader',
            //       'sass-loader'
            //     ]
            //   }
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         // 'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: /\.(scss)$/,

            //     // Question: Does order mater?
            //     use: [
            //         'sass-loader',
            //         'style-loader',
            //         'css-loader',

            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 postcssOptions: {
            //                     plugins: () => [require('autoprefixer')]
            //                 }
            //             }
            //         },

            //     ]
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            templateContent: ({ htmlWebpackPlugin }) => `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${htmlWebpackPlugin.options.title}</title>
</head>
<body>
<div id="app">
    Check the console for now.
    <button class="btn btn-primary">Hello Did this</button>
</div>
</body>
</html>`,
            filename: 'index.html',
        })
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};

module.exports = config;
