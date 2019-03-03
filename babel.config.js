module.exports = {
    "presets": [
        ["env", {
            "targets": {
                "node": "current",
                "browsers": [ ">0.25%", "not ie 11", "not op_mini all"]
            }
        }]
    ],
    "plugins": [
        ["tranform-boject-rest-spread", {
            "useBuiltIns": true
        }]
    ]
}