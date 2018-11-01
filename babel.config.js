let useBuiltIns = false;

if (process.env.MODE === 'site') {
  useBuiltIns = 'usage';
}

module.exports = {
  presets: [
    ['@vue/app', { useBuiltIns }]
  ]
};
