import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "testing",
  },
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
