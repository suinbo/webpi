const packageJson = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

const isProduction = process.argv.indexOf('prod') >= 0 || process.env.NODE_ENV === 'production'

const defaultPlugin = [
    new HtmlWebpackPlugin({
        template: './index.html',
        favicon: '',
        minify: {
            minifyJS: true,
            minifyCSS: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
        },
    }),
    new CleanWebpackPlugin({
        root: __dirname,
        verbose: true,
        dry: false,
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash]].css',
        chunkFilename: 'css/[id].[contenthash].css',
    }),
    new webpack.BannerPlugin({
        entryOnly: true,
        raw: true,
        banner: 'typeof window !== "undefined" &&',
    }),
    new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(packageJson.version),
    }),
]

const defaultConfig = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app: './main.tsx',
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
        alias: {
            '@': '/app/',
            '@components': '/app/components/',
            '@pages': '/app/pages/',
            '@apis': '/app/utils/apis/',
            '@types': '/app/utils/resources/types',
            assets: '/assets/',
        },
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    !isProduction && {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                '@babel/preset-typescript',
                                [
                                    '@babel/preset-env',
                                    {
                                        loose: true,
                                        modules: false,
                                        targets: {
                                            browsers: ['chrome >= 47', 'firefox >= 51', 'ie >= 11', 'safari >= 8', 'ios >= 8', 'android >= 4'],
                                        },
                                    },
                                ],
                            ],
                            plugins: [
                                '@babel/plugin-proposal-object-rest-spread',
                                '@babel/plugin-transform-object-assign',
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-proposal-optional-chaining',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ].filter(Boolean),
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "assets/styles/variables.scss";',
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif|ico)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
        ],
    },
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
}

const webpackConfig = [
    {
        name: 'dev',
        mode: 'development',
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: '[id].chunk.js',
            sourceMapFilename: '[name].[contenthash].js.map',
            assetModuleFilename: 'assets/[hash][ext][query]',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        plugins: defaultPlugin.concat([new Dotenv({ path: `.env.dev`, systemvars: true })]),
        devtool: 'inline-source-map',
        devServer: {
            hot: true,
            static: false,
            historyApiFallback: {
                index: '/',
            },
        },
        optimization: {
            runtimeChunk: 'single',
        },
    },
].map(config => merge(defaultConfig, config))

module.exports = args => {
    const requestedConfig = Object.keys(args).filter(key => !/^WEBPACK_/.test(key))

    let configs

    if (!requestedConfig.length) configs = webpackConfig
    else {
        configs = webpackConfig.filter(config => requestedConfig.includes(config.name))
        console.log(`Building configs: ${configs.map(config => config.name).join(', ')}.\n`)
    }
    
    return configs
}
