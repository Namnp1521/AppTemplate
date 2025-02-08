module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.json',
        ],
        alias: {
          '@constants': ['./src/common/constants'],
          '@components': ['./src/common/components'],
          '@assets': ['./src/assets'],
          '@config': ['./src/config'],
          '@modules': ['./src/modules'],
          '@navigation': ['./src/navigation'],
          '@utils': ['./src/utils'],
          '@redux': ['./src/redux'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
