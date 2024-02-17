import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";

type Mode = "production" | "development";

interface EnvVariables {
    mode: Mode;
}

export default (env: EnvVariables) => {
    const isDev = env.mode === "development";

    const config: webpack.Configuration = {
        mode: env.mode ?? "development",

        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
                favicon: path.resolve(__dirname, "public", "favicon.png"),
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
            new ReactRefreshWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                                getCustomTransformers: () => ({
                                    // подключение hot module
                                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                                }),
                            },
                        },
                    ],
                    exclude: "/node_module",
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".tsx", ".js"],
        },
        devServer: {
            port: 3000,
            open: true,
            hot: true,
        } as DevServerConfiguration,
    };
    return config;
};
