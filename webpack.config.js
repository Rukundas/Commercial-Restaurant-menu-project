import path from "node:path";
import HtmlWebPackPlugin from "html-webpack-plugin";
export default {
  mode: "development",
  entry: './src/home.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean : true
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/home.html"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/templete.html'
    })
  ],
   module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader","css-loader"],
        },
        {
            test: /\.html$/i,
            use: ["html-loader"],
        },
    ]
   }
};