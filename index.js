
var ngAnnotate = require('ng-annotate'),
    SourceMapSource = require('webpack-core/lib/SourceMapSource');

function ngAnnotatePlugin(options) {
    this.options = options || { add: true, sourceMap: false };
}

ngAnnotatePlugin.prototype.apply = function apply(compiler) {
    var options = this.options;

    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('optimize-chunk-assets', function(chunks, callback) {
            var files = [];

            function getFilesFromChunk(chunk) {
                files = files.concat(chunk.files);
            }

            function annotateFile(file) {
                if (options.sourceMap) {
                    options.map = {
                        inFile: file,
                        sourceRoot: ""
                    };
                }
                var value = ngAnnotate(compilation.assets[file].source(), options);

                var asset = compilation.assets[file];

                if (options.sourceMap && asset.sourceAndMap) {
                    var sourceAndMap = asset.sourceAndMap();
                    var map = sourceAndMap.map;
                    var input = sourceAndMap.source;
                } else {
                    map = asset.map();
                }

                if (!value.errors) {
                    if (options.sourceMap && asset.sourceAndMap) {
                        compilation.assets[file] = new SourceMapSource(value.src, file, JSON.parse(value.map), input, map);
                    }
                    else {
                        compilation.assets[file] = new SourceMapSource(value.src, file, map);
                    }
                }
            }

            chunks.forEach(getFilesFromChunk);

            files = files.concat(compilation.additionalChunkAssets);

            files.forEach(annotateFile);

            callback();
        });
    });
};

module.exports = ngAnnotatePlugin;
