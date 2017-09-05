import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import colors from 'colors'

console.log('Generating minified bundle for production via Webpack. Just a moment...'.blue)

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red)
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(e => console.log(e.red))
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow)
    return jsonStats.errors.map(w => console.log(w.yellow))
  }

  console.log(`Webpack stats: ${stats}`)

  console.log('Your app has been compiled in production mode and written to /dist. Cheers!'.green)

  return 0
})
