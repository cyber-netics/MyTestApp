import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import dts from "rollup-plugin-dts";
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
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      commonjs({
        include: ["node_modules/**"],
      }),
      external(),
      resolve(),
      terser(),
      svgr({ babel: false }),
      url({ icon: false }),
    ],
  },
  {
    input: "src/Shared/shared.d.ts",
    output: [{ file: "build/shared.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
