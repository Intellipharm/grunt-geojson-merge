var geojson_merge = require('geojson-merge'),
    grunt = require('grunt');

'use strict';

grunt.registerMultiTask('geojson-merge',
    'Merges multiple geojson files into one',
    function register() {
        this.files.forEach(function filesEach(file) {
            var geojson = [];

            file.src.forEach(function filesEach(src) {
                try {
                    var json = JSON.parse(grunt.file.read(src));
                } catch (e) {
                    grunt.log.error('Invalid json in ' + src);
                    throw new Exception(e);
                }

                geojson.push(json);
            });

            grunt.file.write(
                file.dest,
                JSON.stringify(geojson_merge(geojson))
            );
        });
    }
);
