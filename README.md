ng-annotate-webpack-plugin
==========================

# Announcement
Due to lack of time and the fact that I no longer use webpack with any of my projects. I will not be actively maintaining this code. Also at this time I feel webpack's lack of documentation (re: plugins) and potential unstability requires more webpack expertise than I care to obtain.

If anyone would like to take over this project, let me know and we can figure something out.

Use [ng-annotate-loader](https://github.com/huston007/ng-annotate-loader) instead...

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
