import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.tsx",
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
    onwarn: function (warning, warner) {
      // if circular dependency warning
      if (warning.code === "CIRCULAR_DEPENDENCY") {
        // if comming from a third-party
        if (warning.importer && warning.importer.startsWith("node_modules/")) {
          // ignore warning
          return;
        }
      }
      // Use default for everything else
      warner(warning);
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),

      typescript({
        tsconfig: "./tsconfig.json",
      }),

      commonjs({
        include: ["node_modules/**"],
      }),

      external({
        packageJsonPath: "my/folder/package.json",
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
