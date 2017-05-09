// Tell ESLint that Package is the global namespace.
/* global Package */

// Define the package holding application specific code.
Package.describe({ name: 'fluenced-in' })

// Connect the modules to external resources.
Package.onUse(function (api) {
  api.use(['vulcan:core', 'vulcan:forms', 'vulcan:accounts'])

  api.addFiles('lib/stylesheets/bootstrap.min.css', 'client')

  api.mainModule('lib/server/main.js', 'server')
  api.mainModule('lib/server/main.js', 'client')
})
