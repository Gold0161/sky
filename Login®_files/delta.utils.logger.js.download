//TODO::replace according to comment.
/*
 * these local implementations of logMessage need to be replaced
 * or mapped to new logMessage, including DeltaUtils.logMessage
 * 	- mySkymilesUtils.logMessage
 *	- ShoppingUtils.logMessage
 */
var delta = window.delta || {};
delta.utils = window.delta.utils || {};
delta.utils.logger = (function () {
  return {
    config:
      undefined !== delta.loggerConfigValues
        ? delta.loggerConfigValues
        : {
            useConsole: true,
            enableTrackJS: true,
            suppressedHosts: ['www.delta.com'],
            metadataTypeError:
              'Metadata not updated. Metadata actions must supply strings as arguments.',
            configInvalidPropertyError:
              '{{}} is not a valid config option after initialization.',
            configInvalidArgumentError:
              'Invalid arguments passed to delta.utils.logger.configure().',
            unspecifiedAjaxErrorMessage: 'Ajax Error occurred',
            unspecifiedErrorMessage:
              'Unspecified error supplied to delta.utils.logger.track',
            unspecifiedErrorMessageConsoleWarning:
              'delta.utils.logger -- error successfully tracked but with unspecified content.'
          },
    useTrackJS: window.trackJs ? true : false,
    validMethods: ['info', 'log', 'warn', 'error', 'debug'],
    validConfigProperties: [
      'application',
      'userId',
      'sessionId',
      'version',
      'onError',
      'serialize'
    ],
    trackJS_methods: ['log', 'warn', 'debug', 'error'],
    _marTechApplicationHelper: function (func, args) {
      // helper method to temporarily switch to the marTech application
      var currentApplication, tmpApplication;
      if (window._trackJs) {
        if (_trackJs.application !== '' && _trackJs.application) {
          currentApplication = _trackJs.application;
          var environment = _trackJs.application.split('-');
          tmpApplication = environment[0] + '-' + 'martech';
          trackJs.configure({
            application: tmpApplication
          });
          if (func === 'logMessage') {
            this.logMessage(args[0], args[1]);
          } else if (func === 'track') {
            this.track(args);
          } else {
            this.logMessage(
              'Invalid function supplied to _marTechApplicationHelper method',
              'warn'
            );
          }
          trackJs.configure({
            application: currentApplication
          });
        }
      }
    },
    addMetadata: function (obj) {
      // ensure this.useTrackJS is true
      // fill this in, add support for passing in one object of key/value pairs
      if (this.useTrackJS) {
        if (typeof obj === 'object') {
          for (var prop in obj) {
            trackJs.addMetadata(prop, obj[prop]);
          }
        } else if (
          typeof obj === 'string' &&
          typeof arguments[1] === 'string' &&
          arguments.length > 1 &&
          arguments.length < 3
        ) {
          trackJs.addMetadata(obj, arguments[1]);
        }
      }
    },
    ajaxError: function (jqXHR, textStatus, exception) {
      var XHRstatus = undefined !== jqXHR.status ? jqXHR.status : undefined;
      var statusText =
        undefined !== jqXHR.statusText ? jqXHR.statusText : undefined;
      var responseText =
        undefined !== jqXHR.responseText ? jqXHR.responseText : undefined;
      var message;
      if (exception) {
        if (exception.message) {
          message =
            this.config.unspecifiedAjaxErrorMessage + ': ' + exception.message;
        } else if (exception.stack) {
          var tmpStackString = exception.stack.toString();
          message =
            this.config.unspecifiedAjaxErrorMessage + ': ' + tmpStackString;
        } else {
          message = this.config.unspecifiedAjaxErrorMessage;
        }
      } else if (statusText) {
        if (XHRstatus && XHRstatus >= 400) {
          message =
            this.config.unspecifiedAjaxErrorMessage +
            ': ' +
            XHRstatus +
            ' ' +
            statusText;
        } else {
          message = this.config.unspecifiedAjaxErrorMessage + ': ' + statusText;
        }
      } else if (textStatus) {
        message = this.config.unspecifiedAjaxErrorMessage + ': ' + textStatus;
      } else if (responseText) {
        message = this.config.unspecifiedAjaxErrorMessage + ': ' + responseText;
      } else {
        message = this.config.unspecifiedAjaxErrorMessage;
      }
      this.logMessage(message, 'error');
      if (exception) {
        this.track(exception);
      } else {
        this.track(message);
      }
    },
    configure: function (config) {
      // ensure this.useTrackJS is true
      // take config object (series of key/value pairs) and validate it
      // pass it on to trackJs.configure();
      // Configuration After Page Load: docs.trackjs.com
      // only the following properties can be configured after initialization:
      // application, userId, sessionId, version, onError, serialize
      var sanitizedConfig = {};
      if (this.useTrackJS) {
        if (typeof config === 'object') {
          for (var prop in config) {
            var value = config[prop];
            if (
              this.validConfigProperties.indexOf(prop) !== -1 &&
              typeof value !== 'object'
            ) {
              if (typeof value === 'number') {
                value = value.toString();
              }
              sanitizedConfig[prop] = value;
            } else {
              var tmp = this.config.configInvalidPropertyError.replace(
                '{{}}',
                prop
              );
              this.track(tmp);
            }
          }
          trackJs.configure(sanitizedConfig);
        } else if (
          typeof config === 'string' &&
          typeof arguments[1] === 'string' &&
          arguments.length > 1 &&
          arguments.length < 3
        ) {
          if (delta.utils.logger.validConfigProperties.indexOf(config) !== -1) {
            sanitizedConfig[config] = arguments[1];
            trackJs.configure(sanitizedConfig);
          }
        } else {
          this.track(this.configInvalidArgumentError);
        }
      }
    },
    logMarTechMessage: function (msg, method) {
      this._marTechApplicationHelper('logMessage', [msg, method]);
    },
    logMessage: function (msg, method) {
      if (delta.utils.logger.config.useConsole) {
        if (window.console && window.console.log) {
          if (method) {
            if (delta.utils.logger.validMethods.indexOf(method) !== -1) {
              console[method](msg);
            } else {
              console.log(msg);
            }
          } else {
            console.log(msg);
          }
        } else {
          var showAlert =
            this.config.suppressedHosts.indexOf(window.location.hostname) === -1
              ? true
              : false;
          if (delta.utils.logger.validMethods.indexOf(method) !== -1) {
            if (showAlert) {
              alert('Runtime ' + method.toUpperCase() + ': ' + msg);
            }
            if (
              this.useTrackJS &&
              delta.utils.logger.trackJS_methods.indexOf(method) !== -1
            ) {
              trackJs.console[method](msg);
            }
          } else {
            if (showAlert) {
              alert('Runtime Log: ' + msg);
            }
            if (this.useTrackJS) {
              trackJs.console.log(msg);
            }
          }
        }
      } else {
        if (this.useTrackJS) {
          if (delta.utils.logger.trackJS_methods.indexOf(method) !== -1) {
            trackJs.console[method](msg);
          } else {
            trackJs.console.log(msg);
          }
        }
      }
    },
    removeMetadata: function (key) {
      // ensure this.useTrackJS is true
      // fill this in
      if (this.useTrackJS) {
        trackJs.removeMetadata(key);
      }
    },
    trackMarTech: function (message) {
      this._marTechApplicationHelper('track', message);
    },
    /* use with all timeouts */
    track: function (message) {
      // just for tracking the raw error via output to console.log
      // timeouts use
      // if error object
      // else if string
      // else if empty
      var printConsoleWarning = false;
      if (message === undefined) {
        // if empty
        message = this.config.unspecifiedErrorMessage;
        printConsoleWarning = true;
      }
      if (this.useTrackJS) {
        trackJs.track(message);
        if (printConsoleWarning) {
          this.logMessage(
            this.config.unspecifiedErrorMessageConsoleWarning,
            'warn'
          );
        }
      } else {
        if (window.console && window.console.error) {
          console.error(message);
        }
      }
    }
  };
})();
