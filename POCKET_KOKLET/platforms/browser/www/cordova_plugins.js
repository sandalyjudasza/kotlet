cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio-browser.js",
        "id": "cordova-plugin-nativeaudio.NativeAudioBrowser",
        "pluginId": "cordova-plugin-nativeaudio",
        "clobbers": [
            "cordova.plugins.NativeAudio",
            "plugins.NativeAudio"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-nativeaudio": "3.0.9",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});