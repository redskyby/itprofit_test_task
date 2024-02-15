import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = "production" | 'development';

interface EnvVariables {
    mode : Mode
}

export default (env : EnvVariables) => {
    const config: webpack.Configuration = {
        mode : env.mode ?? 'development',
        entry : path.resolve(__dirname , 'src' , "index.tsx"),
        output : {
            path : path.resolve(__dirname , 'build'),
            filename : '[name].[contenthash].js',
            clean : true
        },
        plugins : [
            new HtmlWebpackPlugin({template : path.resolve(__dirname , "public" , 'index.html')}),
            new MiniCssExtractPlugin({
                filename : 'css/[name].[contenthash:8].css',
                chunkFilename : 'css/[name].[contenthash:8].css',
            })
        ] ,
        module : {
            rules :[
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        MiniCssExtractPlugin.loader ,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test : /\.tsx?$/,
                    use : 'ts-loader',
                    exclude : '/node_module',
                }
            ]
        },
        resolve : {
            extensions : [".tsx" , '.tsx' , '.js']
        },
        devServer : {
            port : 3000,
            open : true
        }as DevServerConfiguration,
    }
    return config;
}