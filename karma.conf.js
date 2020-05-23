// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [  // these added to get rid of error TS2503: Cannot find namespace 'google'.
      'https://maps.googleapis.com/maps/api/js?sensor=false', //<--this one https://github.com/ScottieR/angular-google-maps-mock
      'mocks/maps.googleapis.com-maps-api.js', //<--and this one https://dev.to/devpato/setup-google-map-in-angular-app-the-pro-way-3m9p
    ],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular-gmap'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
