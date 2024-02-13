import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default () => {
    const config: webpack.Configuration = {
        entry : path.resolve(__dirname , 'src' , "index.ts"),
        output : {
            path : path.resolve(__dirname , 'build'),
            filename : '[name].[contenthash].js',
            clean : true
        },
        plugins : [
            new HtmlWebpackPlugin({template : path.resolve(__dirname , "public" , 'index.html')})
        ] ,
        module : {
            rules :[
                {
                    test : /\.tsx?$/,
                    use : 'ts-loader',
                    exclude : '/node_module',
                }
            ]
        },
        resolve : {
            extensions : [".tsx" , '.tsx' , '.js']
        }
    }
    return config;
}