import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom", "styled-components", "@svgr/rollup"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-lib",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({ preferBuiltins: false }),
      commonjs({
        include: ["node_modules/**"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      image(),
    ],
  },
];
