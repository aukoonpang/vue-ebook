module.exports = {
  presets: [
    // old config
    // '@vue/app'

    // config like this if want to use codejs@3
    // ["@babel/preset-env",
    //   {
    //     "corejs": {
    //         "version": 3,
    //         "proposals": true
    //     }
    //   }
    // ]

    [ '@vue/app', { useBuiltIns: 'entry' } ] // change the config due to corejs updates @3,refer to "https://github.com/vuejs/vue-cli/issues/3678"
  ]
}
