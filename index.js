var ngAnnotate = require('ng-annotate'),
    SourceMapSource = require('webpack-core/lib/SourceMapSource');

function ngAnnotatePlugin(options) {
    this.options = options || { add: true };
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
                var map = compilation.assets[file].map(),
                    value = ngAnnotate(compilation.assets[file].source(), options);

                if (!value.errors) {
                    compilation.assets[file] = new SourceMapSource(value.src, file, map);
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
