ng-annotate-webpack-plugin
==========================


WebPack plugin that runs [ng-annotate](https://github.com/olov/ng-annotate) on your bundles

Based on [ngmin-webpack-plugin](https://github.com/jeffling/ngmin-webpack-plugin)

# Usage
In webpack.config.js:
```javascript
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    /// ... rest of config
    plugins: [
        new ngAnnotatePlugin()
    ]
}
```
To modify the default plugin options or to add options for `ng-annotate`:
```javascript
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    /// ... rest of config
    plugins: [
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
    ]
}
```

Since version 0.4.0: for performance reasons, chunks where the name starts with `vendors~` are not
annotated. To customize this behavior, set the option `annotateChunk` to a method that returns
`true` if a chunk should be annotated:

```javascript
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    /// ... rest of config
    plugins: [
        new ngAnnotatePlugin({
            add: true,
            annotateChunk: (chunk) => !chunk.name || !chunk.name.startsWith("vendors~"),
            // other ng-annotate options here
        })
    ]
}
```

If you are looking for a loader instead of a plugin, use [ng-annotate-loader](https://github.com/huston007/ng-annotate-loader) instead
