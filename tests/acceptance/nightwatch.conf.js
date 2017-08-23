require('nightwatch-cucumber')({
    cucumberArgs: ['--compiler', 'js:babel-core/register', '--require', 'features/step_definitions', 'features']
});

var seleniumServer = require('selenium-server')
var phantomjs = require('phantomjs-prebuilt')
var nightwatchCucumber = require('nightwatch-cucumber')


module.exports = {
    // Loads nightwatch-cucumber configuration into main nightwatch.js conf
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: '',
    live_output: true,
    disable_colors: false,


    // Sets configuration for Selenium Server
    selenium: {
        start_process: false,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444
    },


    // Sets config options for different testing environments defined by the user
    test_settings: {
        default: {
            launch_url: 'http://moduscreate.com',
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            'screenshots': {
                enabled: true,
                on_error: true,
                on_failure: true,
                path: '/screenshots'
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }


}