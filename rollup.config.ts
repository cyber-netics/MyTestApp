import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

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

      external({
        extensions: [".js", ".json", ".jsx", ".ts"],
      }),

      resolve({
        extensions: [".js", ".json", ".jsx", ".ts"],
      }),

      url(),
      terser(),
      svgr({ babel: false }),
    ],
  },
];
