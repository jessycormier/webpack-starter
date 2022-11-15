// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // TODO: Look into how to work this with mvc pages

const config = {
    // entry: './src/main.ts', // TODO: How to use many entry files (to setup a per page load not an SPA)
    entry: {
        main: {
            import: './src/main.ts'
        },
        aboutUs: {
            import: './src/pages/page.about-us.ts',
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            //   {
            //     test: /\.scss$/,
            //     use: [
            //       'style-loader',
            //       'css-loader',
            //       'sass-loader'
            //     ]
            //   }
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    }, {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }]
            }
        ]
    },
    plugins: [
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
