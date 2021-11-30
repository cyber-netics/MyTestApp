import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom", "styled-components"],
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
      resolve(),
      commonjs({
        include: ["node_modules/**"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      svgr({ babel: false }),
      url({ icon: false }),
    ],
  },
];
