import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";

export default {
  input: "src/svgcanvas/svgcanvas.js",
  output: [
    {
      file: pkg.main,
      //dir: "./dist",
      format: "es",
      inlineDynamicImports: true,
      sourcemap: true
    },
    /* {
        file: pkg.module,
        format: "umd",
        inlineDynamicImports: true,
        name: "svgedit-wrapper"
    } */
  ],
  /*  external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
  ], */
  plugins: [
    nodeResolve(),
    babel(),
    commonjs(),
  ],
};
