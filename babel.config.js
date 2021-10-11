module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "mobx",
  ];

  const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    process.env.NODE_ENV === "development" && "react-refresh/babel",
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
