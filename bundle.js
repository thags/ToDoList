/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#content{\n    display:flex;\n}\n.cardControl{\n    display:flex;\n    justify-content: space-between;\n}\n#sideBar{\n    display: flex;\n    border-style: solid;\n    border-color: white;\n    padding: 10px;\n    border-right-color: black;\n    flex-direction: column;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-content: center;\n}\n#todoCards {\n    display: flex;\n    flex-direction: row;\n}\n.todoCard{\n    display:flex;\n    flex-direction: column;\n    flex-wrap: column;\n    border-style: solid;\n    width: 20vw;\n    margin: 5px 2.5vw 5px 2.5vw;\n    height: 80px;\n    align-content: center;\n    justify-content: center;\n    row-gap: 5px;\n    padding: 5px;\n}\n.title, .dueDate{\n    display:flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.projectSubmitButton, .addProjectButton, .addToDoButton, .exitButton{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    padding: 10px 15px;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    box-shadow: 6px 6px 29px -4px rgba(0,0,0,0.25);\n    margin-top: 25px;\n    text-decoration:none;\n    text-align: center;\n}\n\n#projects{\n    list-style-type: none;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    text-align: center;\n}\n\n.expandCard, .deleteCard{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    text-decoration:none;\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,8CAA8C;IAC9C,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;AACtB","sourcesContent":["\n#content{\n    display:flex;\n}\n.cardControl{\n    display:flex;\n    justify-content: space-between;\n}\n#sideBar{\n    display: flex;\n    border-style: solid;\n    border-color: white;\n    padding: 10px;\n    border-right-color: black;\n    flex-direction: column;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-content: center;\n}\n#todoCards {\n    display: flex;\n    flex-direction: row;\n}\n.todoCard{\n    display:flex;\n    flex-direction: column;\n    flex-wrap: column;\n    border-style: solid;\n    width: 20vw;\n    margin: 5px 2.5vw 5px 2.5vw;\n    height: 80px;\n    align-content: center;\n    justify-content: center;\n    row-gap: 5px;\n    padding: 5px;\n}\n.title, .dueDate{\n    display:flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.projectSubmitButton, .addProjectButton, .addToDoButton, .exitButton{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    padding: 10px 15px;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    box-shadow: 6px 6px 29px -4px rgba(0,0,0,0.25);\n    margin-top: 25px;\n    text-decoration:none;\n    text-align: center;\n}\n\n#projects{\n    list-style-type: none;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    text-align: center;\n}\n\n.expandCard, .deleteCard{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    text-decoration:none;\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};
    root.PubSub = PubSub;
    factory(PubSub);
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/PubSub.js":
/*!***********************!*\
  !*** ./src/PubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todoObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObject.js */ "./src/todoObject.js");
/* harmony import */ var _todoCardsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCardsDOM.js */ "./src/todoCardsDOM.js");
/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectsDOM.js */ "./src/projectsDOM.js");
/* harmony import */ var _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popUpDOM.js */ "./src/popUpDOM.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _checkLocalStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkLocalStorage.js */ "./src/checkLocalStorage.js");









///page loaded for first time
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.createDarkBackground);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _projectsDOM_js__WEBPACK_IMPORTED_MODULE_3__.createAddProjectButton);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _projectsDOM_js__WEBPACK_IMPORTED_MODULE_3__.createAddToDoButton);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.createAddProjectForm);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.createAddToDoForm);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.createToDoCardPopUp);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('pageLoaded', _checkLocalStorage_js__WEBPACK_IMPORTED_MODULE_7__["default"]);

//new ToDo created
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("toDoCreated", _localStorage_js__WEBPACK_IMPORTED_MODULE_6__.addToDoLocalStorage);

//create new todo card
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('createToDodisplay', _todoCardsDOM_js__WEBPACK_IMPORTED_MODULE_2__.displayCard);


//delete a card
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('deleteToDodisplay', _todoCardsDOM_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard);
//delte a todo
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("deletedToDo", _localStorage_js__WEBPACK_IMPORTED_MODULE_6__.addToDoLocalStorage);

//add a project
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('createProject', _projectsDOM_js__WEBPACK_IMPORTED_MODULE_3__.addToProjectListDOM);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('createdNewProject', _localStorage_js__WEBPACK_IMPORTED_MODULE_6__.addProjectLocalStorage);

//Add project button pressed
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('addProjectButtonPressed', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.changeProjectFormDisplay);

//submit project button pressed
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("submitProjectButtonPressed", _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.changeProjectFormDisplay);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('submitProjectButtonPressed', function(msg, project){new _projects_js__WEBPACK_IMPORTED_MODULE_5__["default"](project)});

//project name clicked
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("projectNameClicked", _todoCardsDOM_js__WEBPACK_IMPORTED_MODULE_2__.changeDisplay);

//todo submit button pressed
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("submitToDoButtonPressed", _todoObject_js__WEBPACK_IMPORTED_MODULE_1__.createToDoFromUI);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('submitToDoButtonPressed', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.changeToDoFormDisplay);
//add to do button pressed
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('addToDoButtonPressed', _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.changeToDoFormDisplay);

//display the full card
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("fullDisplay", _popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.changeCardPopUpDisplay);
//exit the card info display
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("exitCardInfo",_popUpDOM_js__WEBPACK_IMPORTED_MODULE_4__.changeCardPopUpDisplay )

/***/ }),

/***/ "./src/checkLocalStorage.js":
/*!**********************************!*\
  !*** ./src/checkLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _todoObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoObject.js */ "./src/todoObject.js");




const checkStorage = function(){
    const loadedToDos = checkToDo();
    const loadedProjects = checkProject();
    if(loadedProjects != null){
        loadedProjects.map(function(ele){
            new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](ele);
        })
    } else {
        new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"]("default");
    }

    if(loadedToDos != null || loadedToDos.length != 0){
        loadedToDos.map(function(ele){
            console.log(ele);
            let newItem = new _todoObject_js__WEBPACK_IMPORTED_MODULE_2__.toDoObject(ele.title, ele.description, ele.dueDate, ele.priority, ele.project);
            newItem.display();
        })
    } else {
        let item1 = new _todoObject_js__WEBPACK_IMPORTED_MODULE_2__.toDoObject("Make this project", "the odin project", "Soon", "1", "default");
        item1.display();
        let item2 = new _todoObject_js__WEBPACK_IMPORTED_MODULE_2__.toDoObject("test", "the odin project", "Soon", "1", "test");
        item2.display();
    }
}

const checkToDo = function(){
    return JSON.parse(localStorage.getItem("todos"));
}

const checkProject = function(){
    return JSON.parse(localStorage.getItem("projects"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkStorage);

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoLocalStorage": () => (/* binding */ addToDoLocalStorage),
/* harmony export */   "addProjectLocalStorage": () => (/* binding */ addProjectLocalStorage)
/* harmony export */ });



const addToDoLocalStorage = function(msg, todoList){
    localStorage.setItem("todos", JSON.stringify(todoList))
};

const addProjectLocalStorage = function(msg, projectList){
    localStorage.setItem("projects", JSON.stringify(projectList))
}



/***/ }),

/***/ "./src/popUpDOM.js":
/*!*************************!*\
  !*** ./src/popUpDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDarkBackground": () => (/* binding */ createDarkBackground),
/* harmony export */   "createAddProjectForm": () => (/* binding */ createAddProjectForm),
/* harmony export */   "changeProjectFormDisplay": () => (/* binding */ changeProjectFormDisplay),
/* harmony export */   "createAddToDoForm": () => (/* binding */ createAddToDoForm),
/* harmony export */   "changeToDoFormDisplay": () => (/* binding */ changeToDoFormDisplay),
/* harmony export */   "createToDoCardPopUp": () => (/* binding */ createToDoCardPopUp),
/* harmony export */   "changeCardPopUpDisplay": () => (/* binding */ changeCardPopUpDisplay)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);

//import currentDisplay from "./todoCardsDOM.js";

const createDarkBackground = function(){
    const baseEle = document.querySelector("body");
    const popUpBackground = document.createElement("div");
    baseEle.appendChild(popUpBackground);
    popUpBackground.classList.add("popUpBackground");


    //styling
    popUpBackground.style["display"] = "none";
    popUpBackground.style["background"] = "rgba(0,0,0,0.6)"
    popUpBackground.style["width"] = "100%";
    popUpBackground.style["height"] = "100%";
    popUpBackground.style["position"] = "absolute";
    popUpBackground.style["top"] = "0";
    popUpBackground.style["text-align"] = "center";
    popUpBackground.style["align-items"] ="center";
    popUpBackground.style["justify-content"] ="center";

}

const createAddProjectForm = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpFormContainer = document.createElement('form');
    popUpFormContainer.classList.add("popUpFormContainer");
    darkBackground.appendChild(popUpFormContainer);

    //add form inputs and append them to the form container
    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add("projectNameInput");
    projectNameInput.type = "text";
    projectNameInput.placeholder = "New Project Name";
    popUpFormContainer.appendChild(projectNameInput);
    const projectSubmitButton = document.createElement('div');
    projectSubmitButton.classList.add("projectSubmitButton");
    projectSubmitButton.innerText = "Submit";
    popUpFormContainer.appendChild(projectSubmitButton);
    projectSubmitButton.addEventListener("click", function(){pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("submitProjectButtonPressed", projectNameInput.value)});

    //styling
    popUpFormContainer.style["display"] = "none";
    popUpFormContainer.style["flex-direction"] = "column";
    popUpFormContainer.style["height"] =  "200px";
    popUpFormContainer.style["width"] = "500px";
    popUpFormContainer.style["background"] = "white";
    popUpFormContainer.style["padding"] = "20px";
    popUpFormContainer.style["border-radius"] = "5px";
    popUpFormContainer.style["position"] = "relative";
    popUpFormContainer.style["text-align"] = "center";
    popUpFormContainer.style["align-items"] = "center";
    popUpFormContainer.style["justify-content"] = "center"; 
};

const changeProjectFormDisplay = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpProjectContainer = document.querySelector(".popUpFormContainer");
    const projectDisplay = popUpProjectContainer.style.display;
    switch(projectDisplay){
        case "flex":
            popUpProjectContainer.style.display = "none";
            darkBackground.style.display = "none";
            break;
        case "none":
            popUpProjectContainer.style.display = "flex";
            darkBackground.style.display = "flex";
            break;
    }
}

const changeToDoFormDisplay = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpToDoContainer = document.querySelector(".popUpToDoContainer");
    const projectDisplay = popUpToDoContainer.style.display;
    switch(projectDisplay){
        case "flex":
            popUpToDoContainer.style.display = "none";
            darkBackground.style.display = "none";
            break;
        case "none":
            popUpToDoContainer.style.display = "flex";
            darkBackground.style.display = "flex";
            break;
    }
}

const createAddToDoForm = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpToDoContainer = document.createElement('form');
    popUpToDoContainer.classList.add("popUpToDoContainer");
    darkBackground.appendChild(popUpToDoContainer);

    //add form inputs and append them to the form container
    //title, description, dueDate, priority, project
    //declare variables
    const toDoTitle = document.createElement('input');
    const toDoDescription = document.createElement('input');
    const todoDueDate = document.createElement('input');
    const priority = document.createElement('input');
    //const project = currentDisplay.classList[0];

    //add classlists
    toDoTitle.classList.add("toDoTitle");
    toDoDescription.classList.add("toDoDescription");
    todoDueDate.classList.add("toDoDueDate");
    priority.classList.add("priority");

    //add input type
    toDoTitle.type = "text";
    toDoDescription.type = "text";
    todoDueDate.type = "date";
    priority.type = "number";
    
    //add placeholders
    toDoTitle.placeholder = "To-Do Title";
    toDoDescription.placeholder = "Description";
    todoDueDate.placeholder = "Due Date";
    priority.placeholder = "Priority";


    //append
    popUpToDoContainer.appendChild(toDoTitle);
    popUpToDoContainer.appendChild(toDoDescription);
    popUpToDoContainer.appendChild(todoDueDate);
    popUpToDoContainer.appendChild(priority);



    const ToDoSubmitButton = document.createElement('div');
    ToDoSubmitButton.classList.add("ToDoSubmitButton");
    ToDoSubmitButton.innerText = "Submit";
    popUpToDoContainer.appendChild(ToDoSubmitButton);
    ToDoSubmitButton.addEventListener("click", function(){pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("submitToDoButtonPressed", this)});

    //styling
    popUpToDoContainer.style["display"] = "none";
    popUpToDoContainer.style["flex-direction"] = "column";
    popUpToDoContainer.style["height"] =  "200px";
    popUpToDoContainer.style["width"] = "500px";
    popUpToDoContainer.style["background"] = "white";
    popUpToDoContainer.style["padding"] = "20px";
    popUpToDoContainer.style["border-radius"] = "5px";
    popUpToDoContainer.style["position"] = "relative";
    popUpToDoContainer.style["text-align"] = "center";
    popUpToDoContainer.style["align-items"] = "center";
    popUpToDoContainer.style["justify-content"] = "center"; 
};

const createToDoCardPopUp = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpCardInfoContainer = document.createElement('div');
    popUpCardInfoContainer.classList.add("popUpCardInfoContainer");
    darkBackground.appendChild(popUpCardInfoContainer);
    const cardTitle = document.createElement('div');
    const cardDescription = document.createElement('div');
    const cardDueDate = document.createElement('div');
    const cardPriority = document.createElement('div');
    const cardProject = document.createElement('div');
    const exitButton = document.createElement('div')

    popUpCardInfoContainer.appendChild(cardTitle);
    popUpCardInfoContainer.appendChild(cardDescription);
    popUpCardInfoContainer.appendChild(cardDueDate);
    popUpCardInfoContainer.appendChild(cardPriority);
    popUpCardInfoContainer.appendChild(cardProject);
    popUpCardInfoContainer.appendChild(exitButton);

    cardTitle.classList.add("cardTitle");
    cardDescription.classList.add("cardDescription");
    cardDueDate.classList.add("cardDueDate");
    cardPriority.classList.add("cardPriority");
    cardProject.classList.add("cardProject");
    exitButton.classList.add("exitButton");
    exitButton.innerText = "Exit";
    exitButton.addEventListener("click", function(){pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("exitCardInfo", this)});

    //styling
    popUpCardInfoContainer.style["display"] = "none";
    popUpCardInfoContainer.style["flex-direction"] = "column";
    popUpCardInfoContainer.style["height"] =  "200px";
    popUpCardInfoContainer.style["width"] = "500px";
    popUpCardInfoContainer.style["background"] = "white";
    popUpCardInfoContainer.style["padding"] = "20px";
    popUpCardInfoContainer.style["border-radius"] = "5px";
    popUpCardInfoContainer.style["position"] = "relative";
    popUpCardInfoContainer.style["text-align"] = "center";
    popUpCardInfoContainer.style["align-items"] = "center";
    popUpCardInfoContainer.style["justify-content"] = "center";
}

const addInfoToCardPopUp = function(item){
    const container = document.querySelector('.popUpCardInfoContainer');
    const cardTitle = container.querySelector('.cardTitle');
    const cardDescription = container.querySelector('.cardDescription');
    const cardDueDate = container.querySelector('.cardDueDate');
    const cardPriority = container.querySelector('.cardPriority');
    const cardProject = container.querySelector('.cardProject');
//title, description, dueDate, priority, project
    cardTitle.innerText = `Title: ${item.title}`;
    cardDescription.innerText = `Description: ${item.description}`;
    cardDueDate.innerText = `Due Date: ${item.dueDate}`;
    cardPriority.innerText = `Priority: ${item.priority}`;
    cardProject.innerText = `Project: ${item.project}`;
}
const changeCardPopUpDisplay = function(msg, item){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpCardInfoContainer = document.querySelector(".popUpCardInfoContainer");
    const projectDisplay = popUpCardInfoContainer.style.display;
    switch(projectDisplay){
        case "flex":
            popUpCardInfoContainer.style.display = "none";
            darkBackground.style.display = "none";
            break;
        case "none":
            addInfoToCardPopUp(item);
            popUpCardInfoContainer.style.display = "flex";
            darkBackground.style.display = "flex";
            break;
    }
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);

let projectList = [];

class projects{
    constructor(projectName){
        this.projectName = projectName.split(" ").join("_");
        let check = this.doesProjectExist(this.projectName);
        if (check === false){
            pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("createProject", this);
            projectList.push(this.projectName);
            pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("createdNewProject", projectList)
        } else {
            alert("Duplicate project name");
            
        }
    }

    doesProjectExist(projectName){
        for(let i=0; i<projectList.length; i++){
            if (projectList[i] === projectName){
                return true;
            }
        }
        return false;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/projectsDOM.js":
/*!****************************!*\
  !*** ./src/projectsDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddProjectButton": () => (/* binding */ createAddProjectButton),
/* harmony export */   "addToProjectListDOM": () => (/* binding */ addToProjectListDOM),
/* harmony export */   "createAddToDoButton": () => (/* binding */ createAddToDoButton)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


const addToProjectListDOM = function(msg, project){
    const parentEle = document.querySelector('#projects');
    const newListItem = document.createElement('li');
    newListItem.innerText = project.projectName;
    parentEle.appendChild(newListItem);
    newListItem.classList.add(project.projectName);
    createNewProjectDiv(project.projectName);
    newListItem.addEventListener("click", function(){pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("projectNameClicked", project.projectName)});
};

const createNewProjectDiv = function(name){
    const parentEle = document.querySelector('#todoCards');
    const newItem = document.createElement('div');
    newItem.classList.add(`${name}`);
    parentEle.appendChild(newItem);
};

const createAddProjectButton = function(){
    const parentEle = document.querySelector('#sideBar');
    const newItem = document.createElement('div');
    newItem.classList.add("addProjectButton");
    parentEle.insertBefore(newItem, parentEle.firstChild);
    newItem.innerText = "Add Project";

    newItem.addEventListener("click", function(){pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("addProjectButtonPressed", this)})
}

const createAddToDoButton = function(){
    const parentEle = document.querySelector('#sideBar');
    const newItem = document.createElement('div');
    newItem.classList.add("addToDoButton");
    parentEle.insertBefore(newItem, parentEle.firstChild);
    newItem.innerText = "Add To-Do";

    newItem.addEventListener("click", function(){pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("addToDoButtonPressed", this)})
};



/***/ }),

/***/ "./src/todoCardsDOM.js":
/*!*****************************!*\
  !*** ./src/todoCardsDOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCard": () => (/* binding */ displayCard),
/* harmony export */   "deleteCard": () => (/* binding */ deleteCard),
/* harmony export */   "changeDisplay": () => (/* binding */ changeDisplay),
/* harmony export */   "currentDisplay": () => (/* binding */ currentDisplay)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


const todoCards = document.querySelector("#todoCards");
let currentDisplay = todoCards.querySelector(".default");

const createProjectContainer = function(project){
    const check = todoCards.querySelector(`.${project}`);
    if(check == null){
        let newContainer = document.createElement('div');
        todoCards.appendChild(newContainer);
        newContainer.classList.add(`${project}`);
        newContainer.style.display = "none";
    }
};

const displayCard = function(msg, todoItem){
    //create needed elements
    createProjectContainer(todoItem.project);
    const containerItem = todoCards.querySelector(`.${todoItem.project}`);
    const newCard = document.createElement("div");
    const titleEle = document.createElement('div');
    const dueDateEle = document.createElement('div');
    const title = (todoItem.title.split(" ")).join("");
    const cardControl = document.createElement('div');
    const deleteCard = document.createElement('div');
    const expandCard = document.createElement('div');

    //assign text
    titleEle.innerText = todoItem.title;
    dueDateEle.innerText = todoItem.dueDate;
    deleteCard.innerText = "Delete Card";
    expandCard.innerText = "View Info"

    //assign classes or ID's
    newCard.id = `${title}`;
    newCard.classList.add("todoCard");
    titleEle.classList.add("title");
    dueDateEle.classList.add("dueDate");
    cardControl.classList.add("cardControl")
    deleteCard.classList.add('deleteCard');
    expandCard.classList.add("expandCard");

    //append children and parents
    containerItem.appendChild(newCard);
    newCard.appendChild(titleEle);
    newCard.appendChild(dueDateEle);
    newCard.appendChild(cardControl);
    cardControl.appendChild(expandCard);
    cardControl.appendChild(deleteCard);


    //add events
    deleteCard.addEventListener("click", todoItem.delete.bind(todoItem));
    expandCard.addEventListener("click", todoItem.fullDisplay.bind(todoItem))
}

const deleteCard = function(msg, todoItem){
    const title = (todoItem.title.split(" ")).join("");
    const itemCardParent = todoCards.querySelector(`.${todoItem.project}`);
    const itemCard = document.querySelector(`#${title}`);
    while(itemCard.lastChild){
        itemCard.removeChild(itemCard.lastChild);
    }
    itemCardParent.removeChild(itemCard);
}

const changeDisplay = function(msg, display){
    //only take action if we clicked on a view other than what is already there
    if(todoCards.querySelector(`.${display}`) !== currentDisplay){
        currentDisplay.style.display = "none";
        currentDisplay = todoCards.querySelector(`.${display}`);
        currentDisplay.style.display = "flex";
    }
    
}




/***/ }),

/***/ "./src/todoObject.js":
/*!***************************!*\
  !*** ./src/todoObject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoObject": () => (/* binding */ toDoObject),
/* harmony export */   "createToDoFromUI": () => (/* binding */ createToDoFromUI)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todoCardsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCardsDOM.js */ "./src/todoCardsDOM.js");



let todos = [];

class toDoObject{
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        todos.push(this);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("toDoCreated", todos);
    }

    display(){
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("createToDodisplay", this);
    }

    delete(){
        for(let i = 0; i < todos.length; i++){
            if(todos[i] === this){
                todos.splice(i, 1);
            }
        }
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("deletedToDo", todos);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("deleteToDodisplay", this);
    }

    fullDisplay(){
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("fullDisplay", this);
    }
}

const createToDoFromUI = function(){
    const form = document.querySelector(".popUpToDoContainer");
    const title = form.querySelector(".toDoTitle").value;
    const description = form.querySelector(".toDoDescription").value;
    const dueDate = form.querySelector(".toDoDueDate").value;
    const priority = form.querySelector(".priority").value;
    const project = _todoCardsDOM_js__WEBPACK_IMPORTED_MODULE_1__.currentDisplay.classList[0];
    const newToDo = new toDoObject(title, description, dueDate, priority, project);
    newToDo.display();

}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoObject */ "./src/todoObject.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _PubSub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PubSub.js */ "./src/PubSub.js");




PubSub.publish('pageLoaded', null);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlFQUEyQjtBQUMvQztBQUNBOztBQUVBOzs7Ozs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKd0M7QUFDbEI7QUFDRjs7QUFFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jaGVja0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcG9wVXBET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0NhcmRzRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLmNhcmRDb250cm9se1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3NpZGVCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN0b2RvQ2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4udG9kb0NhcmR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiBjb2x1bW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtYXJnaW46IDVweCAyLjV2dyA1cHggMi41dnc7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi50aXRsZSwgLmR1ZURhdGV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RTdWJtaXRCdXR0b24sIC5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVG9Eb0J1dHRvbiwgLmV4aXRCdXR0b257XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMjlweCAtNHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0c3tcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZENhcmQsIC5kZWxldGVDYXJke1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLmNhcmRDb250cm9se1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3NpZGVCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN0b2RvQ2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4udG9kb0NhcmR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiBjb2x1bW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtYXJnaW46IDVweCAyLjV2dyA1cHggMi41dnc7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi50aXRsZSwgLmR1ZURhdGV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RTdWJtaXRCdXR0b24sIC5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVG9Eb0J1dHRvbiwgLmV4aXRCdXR0b257XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMjlweCAtNHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0c3tcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZENhcmQsIC5kZWxldGVDYXJke1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcbiAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCB7Y3JlYXRlVG9Eb0Zyb21VSX0gZnJvbSBcIi4vdG9kb09iamVjdC5qc1wiO1xuaW1wb3J0IHtkaXNwbGF5Q2FyZCwgZGVsZXRlQ2FyZCwgY2hhbmdlRGlzcGxheX0gZnJvbSAnLi90b2RvQ2FyZHNET00uanMnO1xuaW1wb3J0IHthZGRUb1Byb2plY3RMaXN0RE9NLCBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uLCBjcmVhdGVBZGRUb0RvQnV0dG9ufSBmcm9tICcuL3Byb2plY3RzRE9NLmpzJztcbmltcG9ydCB7Y3JlYXRlRGFya0JhY2tncm91bmQsIFxuICAgIGNyZWF0ZUFkZFByb2plY3RGb3JtLCBcbiAgICBjaGFuZ2VQcm9qZWN0Rm9ybURpc3BsYXksIFxuICAgIGNyZWF0ZUFkZFRvRG9Gb3JtLCBcbiAgICBjaGFuZ2VUb0RvRm9ybURpc3BsYXksIFxuICAgIGNyZWF0ZVRvRG9DYXJkUG9wVXAsXG4gICAgY2hhbmdlQ2FyZFBvcFVwRGlzcGxheX0gZnJvbSAnLi9wb3BVcERPTS5qcyc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7YWRkVG9Eb0xvY2FsU3RvcmFnZSwgYWRkUHJvamVjdExvY2FsU3RvcmFnZX0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XG5pbXBvcnQgY2hlY2tTdG9yYWdlIGZyb20gJy4vY2hlY2tMb2NhbFN0b3JhZ2UuanMnO1xuXG4vLy9wYWdlIGxvYWRlZCBmb3IgZmlyc3QgdGltZVxuUHViU3ViLnN1YnNjcmliZSgncGFnZUxvYWRlZCcsIGNyZWF0ZURhcmtCYWNrZ3JvdW5kKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ3BhZ2VMb2FkZWQnLCBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ3BhZ2VMb2FkZWQnLCBjcmVhdGVBZGRUb0RvQnV0dG9uKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ3BhZ2VMb2FkZWQnLCBjcmVhdGVBZGRQcm9qZWN0Rm9ybSk7XG5QdWJTdWIuc3Vic2NyaWJlKCdwYWdlTG9hZGVkJywgY3JlYXRlQWRkVG9Eb0Zvcm0pO1xuUHViU3ViLnN1YnNjcmliZSgncGFnZUxvYWRlZCcsIGNyZWF0ZVRvRG9DYXJkUG9wVXApO1xuUHViU3ViLnN1YnNjcmliZSgncGFnZUxvYWRlZCcsIGNoZWNrU3RvcmFnZSk7XG5cbi8vbmV3IFRvRG8gY3JlYXRlZFxuUHViU3ViLnN1YnNjcmliZShcInRvRG9DcmVhdGVkXCIsIGFkZFRvRG9Mb2NhbFN0b3JhZ2UpO1xuXG4vL2NyZWF0ZSBuZXcgdG9kbyBjYXJkXG5QdWJTdWIuc3Vic2NyaWJlKCdjcmVhdGVUb0RvZGlzcGxheScsIGRpc3BsYXlDYXJkKTtcblxuXG4vL2RlbGV0ZSBhIGNhcmRcblB1YlN1Yi5zdWJzY3JpYmUoJ2RlbGV0ZVRvRG9kaXNwbGF5JywgZGVsZXRlQ2FyZCk7XG4vL2RlbHRlIGEgdG9kb1xuUHViU3ViLnN1YnNjcmliZShcImRlbGV0ZWRUb0RvXCIsIGFkZFRvRG9Mb2NhbFN0b3JhZ2UpO1xuXG4vL2FkZCBhIHByb2plY3RcblB1YlN1Yi5zdWJzY3JpYmUoJ2NyZWF0ZVByb2plY3QnLCBhZGRUb1Byb2plY3RMaXN0RE9NKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ2NyZWF0ZWROZXdQcm9qZWN0JywgYWRkUHJvamVjdExvY2FsU3RvcmFnZSk7XG5cbi8vQWRkIHByb2plY3QgYnV0dG9uIHByZXNzZWRcblB1YlN1Yi5zdWJzY3JpYmUoJ2FkZFByb2plY3RCdXR0b25QcmVzc2VkJywgY2hhbmdlUHJvamVjdEZvcm1EaXNwbGF5KTtcblxuLy9zdWJtaXQgcHJvamVjdCBidXR0b24gcHJlc3NlZFxuUHViU3ViLnN1YnNjcmliZShcInN1Ym1pdFByb2plY3RCdXR0b25QcmVzc2VkXCIsIGNoYW5nZVByb2plY3RGb3JtRGlzcGxheSk7XG5QdWJTdWIuc3Vic2NyaWJlKCdzdWJtaXRQcm9qZWN0QnV0dG9uUHJlc3NlZCcsIGZ1bmN0aW9uKG1zZywgcHJvamVjdCl7bmV3IHByb2plY3RzKHByb2plY3QpfSk7XG5cbi8vcHJvamVjdCBuYW1lIGNsaWNrZWRcblB1YlN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0TmFtZUNsaWNrZWRcIiwgY2hhbmdlRGlzcGxheSk7XG5cbi8vdG9kbyBzdWJtaXQgYnV0dG9uIHByZXNzZWRcblB1YlN1Yi5zdWJzY3JpYmUoXCJzdWJtaXRUb0RvQnV0dG9uUHJlc3NlZFwiLCBjcmVhdGVUb0RvRnJvbVVJKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ3N1Ym1pdFRvRG9CdXR0b25QcmVzc2VkJywgY2hhbmdlVG9Eb0Zvcm1EaXNwbGF5KTtcbi8vYWRkIHRvIGRvIGJ1dHRvbiBwcmVzc2VkXG5QdWJTdWIuc3Vic2NyaWJlKCdhZGRUb0RvQnV0dG9uUHJlc3NlZCcsIGNoYW5nZVRvRG9Gb3JtRGlzcGxheSk7XG5cbi8vZGlzcGxheSB0aGUgZnVsbCBjYXJkXG5QdWJTdWIuc3Vic2NyaWJlKFwiZnVsbERpc3BsYXlcIiwgY2hhbmdlQ2FyZFBvcFVwRGlzcGxheSk7XG4vL2V4aXQgdGhlIGNhcmQgaW5mbyBkaXNwbGF5XG5QdWJTdWIuc3Vic2NyaWJlKFwiZXhpdENhcmRJbmZvXCIsY2hhbmdlQ2FyZFBvcFVwRGlzcGxheSApIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xuaW1wb3J0IHt0b0RvT2JqZWN0fSBmcm9tICcuL3RvZG9PYmplY3QuanMnO1xuXG5jb25zdCBjaGVja1N0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxvYWRlZFRvRG9zID0gY2hlY2tUb0RvKCk7XG4gICAgY29uc3QgbG9hZGVkUHJvamVjdHMgPSBjaGVja1Byb2plY3QoKTtcbiAgICBpZihsb2FkZWRQcm9qZWN0cyAhPSBudWxsKXtcbiAgICAgICAgbG9hZGVkUHJvamVjdHMubWFwKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICBuZXcgcHJvamVjdHMoZWxlKTtcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgcHJvamVjdHMoXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICAgIGlmKGxvYWRlZFRvRG9zICE9IG51bGwgfHwgbG9hZGVkVG9Eb3MubGVuZ3RoICE9IDApe1xuICAgICAgICBsb2FkZWRUb0Rvcy5tYXAoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZSk7XG4gICAgICAgICAgICBsZXQgbmV3SXRlbSA9IG5ldyB0b0RvT2JqZWN0KGVsZS50aXRsZSwgZWxlLmRlc2NyaXB0aW9uLCBlbGUuZHVlRGF0ZSwgZWxlLnByaW9yaXR5LCBlbGUucHJvamVjdCk7XG4gICAgICAgICAgICBuZXdJdGVtLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaXRlbTEgPSBuZXcgdG9Eb09iamVjdChcIk1ha2UgdGhpcyBwcm9qZWN0XCIsIFwidGhlIG9kaW4gcHJvamVjdFwiLCBcIlNvb25cIiwgXCIxXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgaXRlbTEuZGlzcGxheSgpO1xuICAgICAgICBsZXQgaXRlbTIgPSBuZXcgdG9Eb09iamVjdChcInRlc3RcIiwgXCJ0aGUgb2RpbiBwcm9qZWN0XCIsIFwiU29vblwiLCBcIjFcIiwgXCJ0ZXN0XCIpO1xuICAgICAgICBpdGVtMi5kaXNwbGF5KCk7XG4gICAgfVxufVxuXG5jb25zdCBjaGVja1RvRG8gPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xufVxuXG5jb25zdCBjaGVja1Byb2plY3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja1N0b3JhZ2U7IiwiXG5cblxuY29uc3QgYWRkVG9Eb0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKG1zZywgdG9kb0xpc3Qpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKVxufTtcblxuY29uc3QgYWRkUHJvamVjdExvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKG1zZywgcHJvamVjdExpc3Qpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKVxufVxuXG5leHBvcnQge2FkZFRvRG9Mb2NhbFN0b3JhZ2UsIGFkZFByb2plY3RMb2NhbFN0b3JhZ2V9OyIsImltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuLy9pbXBvcnQgY3VycmVudERpc3BsYXkgZnJvbSBcIi4vdG9kb0NhcmRzRE9NLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZURhcmtCYWNrZ3JvdW5kID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBiYXNlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgcG9wVXBCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXNlRWxlLmFwcGVuZENoaWxkKHBvcFVwQmFja2dyb3VuZCk7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJwb3BVcEJhY2tncm91bmRcIik7XG5cblxuICAgIC8vc3R5bGluZ1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcImRpc3BsYXlcIl0gPSBcIm5vbmVcIjtcbiAgICBwb3BVcEJhY2tncm91bmQuc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJyZ2JhKDAsMCwwLDAuNilcIlxuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcIndpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcImFic29sdXRlXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1widG9wXCJdID0gXCIwXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IFwiY2VudGVyXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPVwiY2VudGVyXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID1cImNlbnRlclwiO1xuXG59XG5cbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RGb3JtID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkYXJrQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcEJhY2tncm91bmQnKTtcbiAgICBjb25zdCBwb3BVcEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3BVcEZvcm1Db250YWluZXJcIik7XG4gICAgZGFya0JhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wVXBGb3JtQ29udGFpbmVyKTtcblxuICAgIC8vYWRkIGZvcm0gaW5wdXRzIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUlucHV0XCIpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgY29uc3QgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RTdWJtaXRCdXR0b25cIik7XG4gICAgcHJvamVjdFN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIHBvcFVwRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0QnV0dG9uKTtcbiAgICBwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1B1YlN1Yi5wdWJsaXNoKFwic3VibWl0UHJvamVjdEJ1dHRvblByZXNzZWRcIiwgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSl9KTtcblxuICAgIC8vc3R5bGluZ1xuICAgIHBvcFVwRm9ybUNvbnRhaW5lci5zdHlsZVtcImRpc3BsYXlcIl0gPSBcIm5vbmVcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJmbGV4LWRpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wiaGVpZ2h0XCJdID0gIFwiMjAwcHhcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiNTAwcHhcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJ3aGl0ZVwiO1xuICAgIHBvcFVwRm9ybUNvbnRhaW5lci5zdHlsZVtcInBhZGRpbmdcIl0gPSBcIjIwcHhcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJib3JkZXItcmFkaXVzXCJdID0gXCI1cHhcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJwb3NpdGlvblwiXSA9IFwicmVsYXRpdmVcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJ0ZXh0LWFsaWduXCJdID0gXCJjZW50ZXJcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjsgXG59O1xuXG5jb25zdCBjaGFuZ2VQcm9qZWN0Rm9ybURpc3BsYXkgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhcmtCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IHBvcFVwUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBGb3JtQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gcG9wVXBQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXk7XG4gICAgc3dpdGNoKHByb2plY3REaXNwbGF5KXtcbiAgICAgICAgY2FzZSBcImZsZXhcIjpcbiAgICAgICAgICAgIHBvcFVwUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkYXJrQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgIHBvcFVwUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBkYXJrQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZVRvRG9Gb3JtRGlzcGxheSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGFya0JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBCYWNrZ3JvdW5kJyk7XG4gICAgY29uc3QgcG9wVXBUb0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRvRG9Db250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBwb3BVcFRvRG9Db250YWluZXIuc3R5bGUuZGlzcGxheTtcbiAgICBzd2l0Y2gocHJvamVjdERpc3BsYXkpe1xuICAgICAgICBjYXNlIFwiZmxleFwiOlxuICAgICAgICAgICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRhcmtCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGRhcmtCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlQWRkVG9Eb0Zvcm0gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhcmtCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IHBvcFVwVG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwb3BVcFRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcFVwVG9Eb0NvbnRhaW5lclwiKTtcbiAgICBkYXJrQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwb3BVcFRvRG9Db250YWluZXIpO1xuXG4gICAgLy9hZGQgZm9ybSBpbnB1dHMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIC8vdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdFxuICAgIC8vZGVjbGFyZSB2YXJpYWJsZXNcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAvL2NvbnN0IHByb2plY3QgPSBjdXJyZW50RGlzcGxheS5jbGFzc0xpc3RbMF07XG5cbiAgICAvL2FkZCBjbGFzc2xpc3RzXG4gICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvVGl0bGVcIik7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvRG9EdWVEYXRlXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblxuICAgIC8vYWRkIGlucHV0IHR5cGVcbiAgICB0b0RvVGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvRG9EZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdG9kb0R1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHByaW9yaXR5LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIFxuICAgIC8vYWRkIHBsYWNlaG9sZGVyc1xuICAgIHRvRG9UaXRsZS5wbGFjZWhvbGRlciA9IFwiVG8tRG8gVGl0bGVcIjtcbiAgICB0b0RvRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgdG9kb0R1ZURhdGUucGxhY2Vob2xkZXIgPSBcIkR1ZSBEYXRlXCI7XG4gICAgcHJpb3JpdHkucGxhY2Vob2xkZXIgPSBcIlByaW9yaXR5XCI7XG5cblxuICAgIC8vYXBwZW5kXG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbik7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICBwb3BVcFRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG5cblxuICAgIGNvbnN0IFRvRG9TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUb0RvU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJUb0RvU3VibWl0QnV0dG9uXCIpO1xuICAgIFRvRG9TdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBwb3BVcFRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoVG9Eb1N1Ym1pdEJ1dHRvbik7XG4gICAgVG9Eb1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtQdWJTdWIucHVibGlzaChcInN1Ym1pdFRvRG9CdXR0b25QcmVzc2VkXCIsIHRoaXMpfSk7XG5cbiAgICAvL3N0eWxpbmdcbiAgICBwb3BVcFRvRG9Db250YWluZXIuc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJub25lXCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wiZmxleC1kaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcImhlaWdodFwiXSA9ICBcIjIwMHB4XCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wid2lkdGhcIl0gPSBcIjUwMHB4XCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwid2hpdGVcIjtcbiAgICBwb3BVcFRvRG9Db250YWluZXIuc3R5bGVbXCJwYWRkaW5nXCJdID0gXCIyMHB4XCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wiYm9yZGVyLXJhZGl1c1wiXSA9IFwiNXB4XCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcInJlbGF0aXZlXCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IFwiY2VudGVyXCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7IFxufTtcblxuY29uc3QgY3JlYXRlVG9Eb0NhcmRQb3BVcCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGFya0JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBCYWNrZ3JvdW5kJyk7XG4gICAgY29uc3QgcG9wVXBDYXJkSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcFVwQ2FyZEluZm9Db250YWluZXJcIik7XG4gICAgZGFya0JhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wVXBDYXJkSW5mb0NvbnRhaW5lcik7XG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXB0aW9uKTtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREdWVEYXRlKTtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRQcmlvcml0eSk7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkUHJvamVjdCk7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcblxuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZFRpdGxlXCIpO1xuICAgIGNhcmREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZERlc2NyaXB0aW9uXCIpO1xuICAgIGNhcmREdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJjYXJkRHVlRGF0ZVwiKTtcbiAgICBjYXJkUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImNhcmRQcmlvcml0eVwiKTtcbiAgICBjYXJkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY2FyZFByb2plY3RcIik7XG4gICAgZXhpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZXhpdEJ1dHRvblwiKTtcbiAgICBleGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRXhpdFwiO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7UHViU3ViLnB1Ymxpc2goXCJleGl0Q2FyZEluZm9cIiwgdGhpcyl9KTtcblxuICAgIC8vc3R5bGluZ1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJub25lXCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcImZsZXgtZGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1wiaGVpZ2h0XCJdID0gIFwiMjAwcHhcIjtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1wid2lkdGhcIl0gPSBcIjUwMHB4XCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcIndoaXRlXCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcInBhZGRpbmdcIl0gPSBcIjIwcHhcIjtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1wiYm9yZGVyLXJhZGl1c1wiXSA9IFwiNXB4XCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJyZWxhdGl2ZVwiO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJ0ZXh0LWFsaWduXCJdID0gXCJjZW50ZXJcIjtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xufVxuXG5jb25zdCBhZGRJbmZvVG9DYXJkUG9wVXAgPSBmdW5jdGlvbihpdGVtKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBDYXJkSW5mb0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FyZFRpdGxlJyk7XG4gICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBjYXJkRHVlRGF0ZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FyZER1ZURhdGUnKTtcbiAgICBjb25zdCBjYXJkUHJpb3JpdHkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcmRQcmlvcml0eScpO1xuICAgIGNvbnN0IGNhcmRQcm9qZWN0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkUHJvamVjdCcpO1xuLy90aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0XG4gICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IGBUaXRsZTogJHtpdGVtLnRpdGxlfWA7XG4gICAgY2FyZERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGBEZXNjcmlwdGlvbjogJHtpdGVtLmRlc2NyaXB0aW9ufWA7XG4gICAgY2FyZER1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBEYXRlOiAke2l0ZW0uZHVlRGF0ZX1gO1xuICAgIGNhcmRQcmlvcml0eS5pbm5lclRleHQgPSBgUHJpb3JpdHk6ICR7aXRlbS5wcmlvcml0eX1gO1xuICAgIGNhcmRQcm9qZWN0LmlubmVyVGV4dCA9IGBQcm9qZWN0OiAke2l0ZW0ucHJvamVjdH1gO1xufVxuY29uc3QgY2hhbmdlQ2FyZFBvcFVwRGlzcGxheSA9IGZ1bmN0aW9uKG1zZywgaXRlbSl7XG4gICAgY29uc3QgZGFya0JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBCYWNrZ3JvdW5kJyk7XG4gICAgY29uc3QgcG9wVXBDYXJkSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBDYXJkSW5mb0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGUuZGlzcGxheTtcbiAgICBzd2l0Y2gocHJvamVjdERpc3BsYXkpe1xuICAgICAgICBjYXNlIFwiZmxleFwiOlxuICAgICAgICAgICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkYXJrQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgIGFkZEluZm9Ub0NhcmRQb3BVcChpdGVtKTtcbiAgICAgICAgICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZGFya0JhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRGFya0JhY2tncm91bmQsIFxuICAgIGNyZWF0ZUFkZFByb2plY3RGb3JtLFxuICAgIGNoYW5nZVByb2plY3RGb3JtRGlzcGxheSxcbiAgICBjcmVhdGVBZGRUb0RvRm9ybSxcbiAgICBjaGFuZ2VUb0RvRm9ybURpc3BsYXksXG4gICAgY3JlYXRlVG9Eb0NhcmRQb3BVcCxcbiAgICBjaGFuZ2VDYXJkUG9wVXBEaXNwbGF5LFxufTsiLCJpbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5jbGFzcyBwcm9qZWN0c3tcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSl7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuZG9lc1Byb2plY3RFeGlzdCh0aGlzLnByb2plY3ROYW1lKTtcbiAgICAgICAgaWYgKGNoZWNrID09PSBmYWxzZSl7XG4gICAgICAgICAgICBQdWJTdWIucHVibGlzaChcImNyZWF0ZVByb2plY3RcIiwgdGhpcyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRoaXMucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJjcmVhdGVkTmV3UHJvamVjdFwiLCBwcm9qZWN0TGlzdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRHVwbGljYXRlIHByb2plY3QgbmFtZVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9lc1Byb2plY3RFeGlzdChwcm9qZWN0TmFtZSl7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXSA9PT0gcHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzOyIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY29uc3QgYWRkVG9Qcm9qZWN0TGlzdERPTSA9IGZ1bmN0aW9uKG1zZywgcHJvamVjdCl7XG4gICAgY29uc3QgcGFyZW50RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5ld0xpc3RJdGVtLmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgcGFyZW50RWxlLmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3REaXYocHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgbmV3TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7UHViU3ViLnB1Ymxpc2goXCJwcm9qZWN0TmFtZUNsaWNrZWRcIiwgcHJvamVjdC5wcm9qZWN0TmFtZSl9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3REaXYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICBjb25zdCBwYXJlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0NhcmRzJyk7XG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChgJHtuYW1lfWApO1xuICAgIHBhcmVudEVsZS5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHBhcmVudEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlQmFyJyk7XG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RCdXR0b25cIik7XG4gICAgcGFyZW50RWxlLmluc2VydEJlZm9yZShuZXdJdGVtLCBwYXJlbnRFbGUuZmlyc3RDaGlsZCk7XG4gICAgbmV3SXRlbS5pbm5lclRleHQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1B1YlN1Yi5wdWJsaXNoKFwiYWRkUHJvamVjdEJ1dHRvblByZXNzZWRcIiwgdGhpcyl9KVxufVxuXG5jb25zdCBjcmVhdGVBZGRUb0RvQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwYXJlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJhZGRUb0RvQnV0dG9uXCIpO1xuICAgIHBhcmVudEVsZS5pbnNlcnRCZWZvcmUobmV3SXRlbSwgcGFyZW50RWxlLmZpcnN0Q2hpbGQpO1xuICAgIG5ld0l0ZW0uaW5uZXJUZXh0ID0gXCJBZGQgVG8tRG9cIjtcblxuICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7UHViU3ViLnB1Ymxpc2goXCJhZGRUb0RvQnV0dG9uUHJlc3NlZFwiLCB0aGlzKX0pXG59O1xuXG5leHBvcnQge2NyZWF0ZUFkZFByb2plY3RCdXR0b24sIGFkZFRvUHJvamVjdExpc3RET00sIGNyZWF0ZUFkZFRvRG9CdXR0b259OyIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY29uc3QgdG9kb0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ2FyZHNcIik7XG5sZXQgY3VycmVudERpc3BsYXkgPSB0b2RvQ2FyZHMucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0XCIpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgY29uc3QgY2hlY2sgPSB0b2RvQ2FyZHMucXVlcnlTZWxlY3RvcihgLiR7cHJvamVjdH1gKTtcbiAgICBpZihjaGVjayA9PSBudWxsKXtcbiAgICAgICAgbGV0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ2FyZHMuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbiAgICAgICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7cHJvamVjdH1gKTtcbiAgICAgICAgbmV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59O1xuXG5jb25zdCBkaXNwbGF5Q2FyZCA9IGZ1bmN0aW9uKG1zZywgdG9kb0l0ZW0pe1xuICAgIC8vY3JlYXRlIG5lZWRlZCBlbGVtZW50c1xuICAgIGNyZWF0ZVByb2plY3RDb250YWluZXIodG9kb0l0ZW0ucHJvamVjdCk7XG4gICAgY29uc3QgY29udGFpbmVySXRlbSA9IHRvZG9DYXJkcy5xdWVyeVNlbGVjdG9yKGAuJHt0b2RvSXRlbS5wcm9qZWN0fWApO1xuICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gKHRvZG9JdGVtLnRpdGxlLnNwbGl0KFwiIFwiKSkuam9pbihcIlwiKTtcbiAgICBjb25zdCBjYXJkQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlbGV0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBleHBhbmRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2Fzc2lnbiB0ZXh0XG4gICAgdGl0bGVFbGUuaW5uZXJUZXh0ID0gdG9kb0l0ZW0udGl0bGU7XG4gICAgZHVlRGF0ZUVsZS5pbm5lclRleHQgPSB0b2RvSXRlbS5kdWVEYXRlO1xuICAgIGRlbGV0ZUNhcmQuaW5uZXJUZXh0ID0gXCJEZWxldGUgQ2FyZFwiO1xuICAgIGV4cGFuZENhcmQuaW5uZXJUZXh0ID0gXCJWaWV3IEluZm9cIlxuXG4gICAgLy9hc3NpZ24gY2xhc3NlcyBvciBJRCdzXG4gICAgbmV3Q2FyZC5pZCA9IGAke3RpdGxlfWA7XG4gICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kb0NhcmRcIik7XG4gICAgdGl0bGVFbGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGR1ZURhdGVFbGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gICAgY2FyZENvbnRyb2wuY2xhc3NMaXN0LmFkZChcImNhcmRDb250cm9sXCIpXG4gICAgZGVsZXRlQ2FyZC5jbGFzc0xpc3QuYWRkKCdkZWxldGVDYXJkJyk7XG4gICAgZXhwYW5kQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kQ2FyZFwiKTtcblxuICAgIC8vYXBwZW5kIGNoaWxkcmVuIGFuZCBwYXJlbnRzXG4gICAgY29udGFpbmVySXRlbS5hcHBlbmRDaGlsZChuZXdDYXJkKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKHRpdGxlRWxlKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGVFbGUpO1xuICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRyb2wpO1xuICAgIGNhcmRDb250cm9sLmFwcGVuZENoaWxkKGV4cGFuZENhcmQpO1xuICAgIGNhcmRDb250cm9sLmFwcGVuZENoaWxkKGRlbGV0ZUNhcmQpO1xuXG5cbiAgICAvL2FkZCBldmVudHNcbiAgICBkZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvSXRlbS5kZWxldGUuYmluZCh0b2RvSXRlbSkpO1xuICAgIGV4cGFuZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9JdGVtLmZ1bGxEaXNwbGF5LmJpbmQodG9kb0l0ZW0pKVxufVxuXG5jb25zdCBkZWxldGVDYXJkID0gZnVuY3Rpb24obXNnLCB0b2RvSXRlbSl7XG4gICAgY29uc3QgdGl0bGUgPSAodG9kb0l0ZW0udGl0bGUuc3BsaXQoXCIgXCIpKS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGl0ZW1DYXJkUGFyZW50ID0gdG9kb0NhcmRzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RvZG9JdGVtLnByb2plY3R9YCk7XG4gICAgY29uc3QgaXRlbUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aXRsZX1gKTtcbiAgICB3aGlsZShpdGVtQ2FyZC5sYXN0Q2hpbGQpe1xuICAgICAgICBpdGVtQ2FyZC5yZW1vdmVDaGlsZChpdGVtQ2FyZC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBpdGVtQ2FyZFBhcmVudC5yZW1vdmVDaGlsZChpdGVtQ2FyZCk7XG59XG5cbmNvbnN0IGNoYW5nZURpc3BsYXkgPSBmdW5jdGlvbihtc2csIGRpc3BsYXkpe1xuICAgIC8vb25seSB0YWtlIGFjdGlvbiBpZiB3ZSBjbGlja2VkIG9uIGEgdmlldyBvdGhlciB0aGFuIHdoYXQgaXMgYWxyZWFkeSB0aGVyZVxuICAgIGlmKHRvZG9DYXJkcy5xdWVyeVNlbGVjdG9yKGAuJHtkaXNwbGF5fWApICE9PSBjdXJyZW50RGlzcGxheSl7XG4gICAgICAgIGN1cnJlbnREaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY3VycmVudERpc3BsYXkgPSB0b2RvQ2FyZHMucXVlcnlTZWxlY3RvcihgLiR7ZGlzcGxheX1gKTtcbiAgICAgICAgY3VycmVudERpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBcbn1cblxuXG5leHBvcnQge2Rpc3BsYXlDYXJkLFxuICAgICAgICBkZWxldGVDYXJkLFxuICAgICAgICBjaGFuZ2VEaXNwbGF5LFxuICAgICAgICBjdXJyZW50RGlzcGxheSxcblxufTsiLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQge2N1cnJlbnREaXNwbGF5fSBmcm9tIFwiLi90b2RvQ2FyZHNET00uanNcIjtcblxubGV0IHRvZG9zID0gW107XG5cbmNsYXNzIHRvRG9PYmplY3R7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRvZG9zLnB1c2godGhpcyk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwidG9Eb0NyZWF0ZWRcIiwgdG9kb3MpO1xuICAgIH1cblxuICAgIGRpc3BsYXkoKXtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJjcmVhdGVUb0RvZGlzcGxheVwiLCB0aGlzKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRvZG9zW2ldID09PSB0aGlzKXtcbiAgICAgICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJkZWxldGVkVG9Eb1wiLCB0b2Rvcyk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwiZGVsZXRlVG9Eb2Rpc3BsYXlcIiwgdGhpcyk7XG4gICAgfVxuXG4gICAgZnVsbERpc3BsYXkoKXtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJmdWxsRGlzcGxheVwiLCB0aGlzKTtcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZVRvRG9Gcm9tVUkgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVG9Eb0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi50b0RvVGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0R1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnREaXNwbGF5LmNsYXNzTGlzdFswXTtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IHRvRG9PYmplY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgbmV3VG9Eby5kaXNwbGF5KCk7XG5cbn1cblxuXG5leHBvcnQge3RvRG9PYmplY3QsIGNyZWF0ZVRvRG9Gcm9tVUl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJpbXBvcnQge3RvRG9PYmplY3R9IGZyb20gXCIuL3RvZG9PYmplY3RcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9QdWJTdWIuanMnXG5cblB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZGVkJywgbnVsbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=