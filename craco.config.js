const { resolve } = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@local': resolve(__dirname, 'src/components'),
      '@common': resolve(__dirname, 'src/common'),
      '@image': resolve(__dirname, 'src/images')
    }
  }
};