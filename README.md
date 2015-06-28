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
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
    ]
}

```

If you are looking for a loader instead of a plugin, use [ng-annotate-loader](https://github.com/huston007/ng-annotate-loader) instead
