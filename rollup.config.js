import resolve from "@rollup/plugin-node-resolve";
import json from "rollup-plugin-json";
import alias from "rollup-plugin-alias";
import serve from "rollup-plugin-serve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "testing",
  },
  plugins: [
    json(),
    resolve(),
    alias({
      resolve: [".js"],
      entries: [
        {
          find: "global/A",
          replacement: `${__dirname}/src/a_directory/a.js`,
        },
        {
          find: "global/B",
          replacement: `${__dirname}/src/b_directory/b.js`,
        },
      ],
    }),
    serve({
      contentBase: "dist",
      open: true,
      port: 1234,
    }),
  ],
};
