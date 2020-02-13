const removeConsolePlugin = [];
if (process.env.NODE_ENV === "production") {
  removeConsolePlugin.push("transform-remove-console");
}

module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", { modules: false }]],
  plugins: removeConsolePlugin,
  env: {
    test: {
      presets: [
        ["@vue/cli-plugin-babel/preset", { targets: { node: "current" } }]
      ]
    }
  }
};
