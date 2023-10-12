module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    ["module-resolver", {
      alias: {
        "@database": "./src/database",
        "@core": "./src/core",
        "@main": "./src/main",
      }
    }]
  ],
  ignore: [
    "**/*.spec.ts"
  ]
}