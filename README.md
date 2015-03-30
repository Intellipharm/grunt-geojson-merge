# grunt-geojson-merge
Merge multiple GeoJSON files into one FeatureCollection


This is a grunt wrapper for [geojson-merge](https://github.com/mapbox/geojson-merge)


## Example
```js
grunt.initConfig({
    'geojson-merge': {
        my_target: {
            files: {
                'dest/output.geo.json': ['src/input1.geo.json', 'src/input2.geo.json', 'src2/*
                ']
            }
        }
    }
});
```
