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
___CSS_LOADER_EXPORT___.push([module.id, "\n#content{\n    display:flex;\n}\n.cardControl{\n    display:flex;\n    justify-content: space-between;\n}\n#sideBar{\n    display: flex;\n    border-style: solid;\n    border-color: white;\n    padding: 10px;\n    border-right-color: black;\n    flex-direction: column;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-content: center;\n    width: 20vw;\n}\n#todoCards {\n    display: flex;\n}\n.todoCard{\n    display:flex;\n    flex-wrap:wrap;\n    flex-direction: column;\n    flex-wrap: column;\n    border-style: solid;\n    width: 20vw;\n    margin: 5px 2.5vw 5px 2.5vw;\n    height: 80px;\n    align-content: center;\n    justify-content: center;\n    row-gap: 5px;\n    padding: 5px;\n}\n.title, .dueDate{\n    display:flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.projectSubmitButton, .addProjectButton, .addToDoButton, .exitButton{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    padding: 10px 15px;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    box-shadow: 6px 6px 29px -4px rgba(0,0,0,0.25);\n    margin-top: 25px;\n    text-decoration:none;\n    text-align: center;\n}\n\n#projects{\n    list-style-type: none;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    text-align: center;\n}\n\n.expandCard, .deleteCard{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    text-decoration:none;\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,8CAA8C;IAC9C,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;AACtB","sourcesContent":["\n#content{\n    display:flex;\n}\n.cardControl{\n    display:flex;\n    justify-content: space-between;\n}\n#sideBar{\n    display: flex;\n    border-style: solid;\n    border-color: white;\n    padding: 10px;\n    border-right-color: black;\n    flex-direction: column;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-content: center;\n    width: 20vw;\n}\n#todoCards {\n    display: flex;\n}\n.todoCard{\n    display:flex;\n    flex-wrap:wrap;\n    flex-direction: column;\n    flex-wrap: column;\n    border-style: solid;\n    width: 20vw;\n    margin: 5px 2.5vw 5px 2.5vw;\n    height: 80px;\n    align-content: center;\n    justify-content: center;\n    row-gap: 5px;\n    padding: 5px;\n}\n.title, .dueDate{\n    display:flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.projectSubmitButton, .addProjectButton, .addToDoButton, .exitButton{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    padding: 10px 15px;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    box-shadow: 6px 6px 29px -4px rgba(0,0,0,0.25);\n    margin-top: 25px;\n    text-decoration:none;\n    text-align: center;\n}\n\n#projects{\n    list-style-type: none;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    text-align: center;\n}\n\n.expandCard, .deleteCard{\n    border-style: solid;\n    border-color: orange;\n    cursor: pointer;\n    color: black;\n    border-radius: 5px;\n    background: lightcoral;\n    text-decoration:none;\n    text-align: center;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRLHdEQUFjO0FBQ3RCOztBQUVBO0FBQ0EsUUFBUSx3REFBYztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5RUFBMkI7QUFDL0M7QUFDQTs7QUFFQTs7Ozs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ2xCO0FBQ0Y7O0FBRXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9QdWJTdWIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2hlY2tMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3BvcFVwRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9DYXJkc0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi5jYXJkQ29udHJvbHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNzaWRlQmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsYWNrO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuI3RvZG9DYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b2RvQ2FyZHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiBjb2x1bW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtYXJnaW46IDVweCAyLjV2dyA1cHggMi41dnc7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi50aXRsZSwgLmR1ZURhdGV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RTdWJtaXRCdXR0b24sIC5hZGRQcm9qZWN0QnV0dG9uLCAuYWRkVG9Eb0J1dHRvbiwgLmV4aXRCdXR0b257XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMjlweCAtNHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0c3tcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZENhcmQsIC5kZWxldGVDYXJke1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4jY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG4uY2FyZENvbnRyb2x7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jc2lkZUJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibGFjaztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcbiN0b2RvQ2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udG9kb0NhcmR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogY29sdW1uO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWFyZ2luOiA1cHggMi41dncgNXB4IDIuNXZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4udGl0bGUsIC5kdWVEYXRle1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0U3VibWl0QnV0dG9uLCAuYWRkUHJvamVjdEJ1dHRvbiwgLmFkZFRvRG9CdXR0b24sIC5leGl0QnV0dG9ue1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDI5cHggLTRweCByZ2JhKDAsMCwwLDAuMjUpO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdHN7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmRDYXJkLCAuZGVsZXRlQ2FyZHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG4gICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQge2NyZWF0ZVRvRG9Gcm9tVUl9IGZyb20gXCIuL3RvZG9PYmplY3QuanNcIjtcbmltcG9ydCB7ZGlzcGxheUNhcmQsIGRlbGV0ZUNhcmQsIGNoYW5nZURpc3BsYXl9IGZyb20gJy4vdG9kb0NhcmRzRE9NLmpzJztcbmltcG9ydCB7YWRkVG9Qcm9qZWN0TGlzdERPTSwgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiwgY3JlYXRlQWRkVG9Eb0J1dHRvbn0gZnJvbSAnLi9wcm9qZWN0c0RPTS5qcyc7XG5pbXBvcnQge2NyZWF0ZURhcmtCYWNrZ3JvdW5kLCBcbiAgICBjcmVhdGVBZGRQcm9qZWN0Rm9ybSwgXG4gICAgY2hhbmdlUHJvamVjdEZvcm1EaXNwbGF5LCBcbiAgICBjcmVhdGVBZGRUb0RvRm9ybSwgXG4gICAgY2hhbmdlVG9Eb0Zvcm1EaXNwbGF5LCBcbiAgICBjcmVhdGVUb0RvQ2FyZFBvcFVwLFxuICAgIGNoYW5nZUNhcmRQb3BVcERpc3BsYXl9IGZyb20gJy4vcG9wVXBET00uanMnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQge2FkZFRvRG9Mb2NhbFN0b3JhZ2UsIGFkZFByb2plY3RMb2NhbFN0b3JhZ2V9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IGNoZWNrU3RvcmFnZSBmcm9tICcuL2NoZWNrTG9jYWxTdG9yYWdlLmpzJztcblxuLy8vcGFnZSBsb2FkZWQgZm9yIGZpcnN0IHRpbWVcblB1YlN1Yi5zdWJzY3JpYmUoJ3BhZ2VMb2FkZWQnLCBjcmVhdGVEYXJrQmFja2dyb3VuZCk7XG5QdWJTdWIuc3Vic2NyaWJlKCdwYWdlTG9hZGVkJywgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbik7XG5QdWJTdWIuc3Vic2NyaWJlKCdwYWdlTG9hZGVkJywgY3JlYXRlQWRkVG9Eb0J1dHRvbik7XG5QdWJTdWIuc3Vic2NyaWJlKCdwYWdlTG9hZGVkJywgY3JlYXRlQWRkUHJvamVjdEZvcm0pO1xuUHViU3ViLnN1YnNjcmliZSgncGFnZUxvYWRlZCcsIGNyZWF0ZUFkZFRvRG9Gb3JtKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ3BhZ2VMb2FkZWQnLCBjcmVhdGVUb0RvQ2FyZFBvcFVwKTtcblB1YlN1Yi5zdWJzY3JpYmUoJ3BhZ2VMb2FkZWQnLCBjaGVja1N0b3JhZ2UpO1xuXG4vL25ldyBUb0RvIGNyZWF0ZWRcblB1YlN1Yi5zdWJzY3JpYmUoXCJ0b0RvQ3JlYXRlZFwiLCBhZGRUb0RvTG9jYWxTdG9yYWdlKTtcblxuLy9jcmVhdGUgbmV3IHRvZG8gY2FyZFxuUHViU3ViLnN1YnNjcmliZSgnY3JlYXRlVG9Eb2Rpc3BsYXknLCBkaXNwbGF5Q2FyZCk7XG5cblxuLy9kZWxldGUgYSBjYXJkXG5QdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVUb0RvZGlzcGxheScsIGRlbGV0ZUNhcmQpO1xuLy9kZWx0ZSBhIHRvZG9cblB1YlN1Yi5zdWJzY3JpYmUoXCJkZWxldGVkVG9Eb1wiLCBhZGRUb0RvTG9jYWxTdG9yYWdlKTtcblxuLy9hZGQgYSBwcm9qZWN0XG5QdWJTdWIuc3Vic2NyaWJlKCdjcmVhdGVQcm9qZWN0JywgYWRkVG9Qcm9qZWN0TGlzdERPTSk7XG5QdWJTdWIuc3Vic2NyaWJlKCdjcmVhdGVkTmV3UHJvamVjdCcsIGFkZFByb2plY3RMb2NhbFN0b3JhZ2UpO1xuXG4vL0FkZCBwcm9qZWN0IGJ1dHRvbiBwcmVzc2VkXG5QdWJTdWIuc3Vic2NyaWJlKCdhZGRQcm9qZWN0QnV0dG9uUHJlc3NlZCcsIGNoYW5nZVByb2plY3RGb3JtRGlzcGxheSk7XG5cbi8vc3VibWl0IHByb2plY3QgYnV0dG9uIHByZXNzZWRcblB1YlN1Yi5zdWJzY3JpYmUoXCJzdWJtaXRQcm9qZWN0QnV0dG9uUHJlc3NlZFwiLCBjaGFuZ2VQcm9qZWN0Rm9ybURpc3BsYXkpO1xuUHViU3ViLnN1YnNjcmliZSgnc3VibWl0UHJvamVjdEJ1dHRvblByZXNzZWQnLCBmdW5jdGlvbihtc2csIHByb2plY3Qpe25ldyBwcm9qZWN0cyhwcm9qZWN0KX0pO1xuXG4vL3Byb2plY3QgbmFtZSBjbGlja2VkXG5QdWJTdWIuc3Vic2NyaWJlKFwicHJvamVjdE5hbWVDbGlja2VkXCIsIGNoYW5nZURpc3BsYXkpO1xuXG4vL3RvZG8gc3VibWl0IGJ1dHRvbiBwcmVzc2VkXG5QdWJTdWIuc3Vic2NyaWJlKFwic3VibWl0VG9Eb0J1dHRvblByZXNzZWRcIiwgY3JlYXRlVG9Eb0Zyb21VSSk7XG5QdWJTdWIuc3Vic2NyaWJlKCdzdWJtaXRUb0RvQnV0dG9uUHJlc3NlZCcsIGNoYW5nZVRvRG9Gb3JtRGlzcGxheSk7XG4vL2FkZCB0byBkbyBidXR0b24gcHJlc3NlZFxuUHViU3ViLnN1YnNjcmliZSgnYWRkVG9Eb0J1dHRvblByZXNzZWQnLCBjaGFuZ2VUb0RvRm9ybURpc3BsYXkpO1xuXG4vL2Rpc3BsYXkgdGhlIGZ1bGwgY2FyZFxuUHViU3ViLnN1YnNjcmliZShcImZ1bGxEaXNwbGF5XCIsIGNoYW5nZUNhcmRQb3BVcERpc3BsYXkpO1xuLy9leGl0IHRoZSBjYXJkIGluZm8gZGlzcGxheVxuUHViU3ViLnN1YnNjcmliZShcImV4aXRDYXJkSW5mb1wiLGNoYW5nZUNhcmRQb3BVcERpc3BsYXkgKSIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCB7dG9Eb09iamVjdH0gZnJvbSAnLi90b2RvT2JqZWN0LmpzJztcblxuY29uc3QgY2hlY2tTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2FkZWRUb0RvcyA9IGNoZWNrVG9EbygpO1xuICAgIGNvbnN0IGxvYWRlZFByb2plY3RzID0gY2hlY2tQcm9qZWN0KCk7XG4gICAgaWYobG9hZGVkUHJvamVjdHMgIT0gbnVsbCl7XG4gICAgICAgIGxvYWRlZFByb2plY3RzLm1hcChmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgbmV3IHByb2plY3RzKGVsZSk7XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IHByb2plY3RzKFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgICBpZihsb2FkZWRUb0RvcyAhPSBudWxsIHx8IGxvYWRlZFRvRG9zLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgbG9hZGVkVG9Eb3MubWFwKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGUpO1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSBuZXcgdG9Eb09iamVjdChlbGUudGl0bGUsIGVsZS5kZXNjcmlwdGlvbiwgZWxlLmR1ZURhdGUsIGVsZS5wcmlvcml0eSwgZWxlLnByb2plY3QpO1xuICAgICAgICAgICAgbmV3SXRlbS5kaXNwbGF5KCk7XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGl0ZW0xID0gbmV3IHRvRG9PYmplY3QoXCJNYWtlIHRoaXMgcHJvamVjdFwiLCBcInRoZSBvZGluIHByb2plY3RcIiwgXCJTb29uXCIsIFwiMVwiLCBcImRlZmF1bHRcIik7XG4gICAgICAgIGl0ZW0xLmRpc3BsYXkoKTtcbiAgICAgICAgbGV0IGl0ZW0yID0gbmV3IHRvRG9PYmplY3QoXCJ0ZXN0XCIsIFwidGhlIG9kaW4gcHJvamVjdFwiLCBcIlNvb25cIiwgXCIxXCIsIFwidGVzdFwiKTtcbiAgICAgICAgaXRlbTIuZGlzcGxheSgpO1xuICAgIH1cbn1cblxuY29uc3QgY2hlY2tUb0RvID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbn1cblxuY29uc3QgY2hlY2tQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tTdG9yYWdlOyIsIlxuXG5cbmNvbnN0IGFkZFRvRG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbihtc2csIHRvZG9MaXN0KXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSlcbn07XG5cbmNvbnN0IGFkZFByb2plY3RMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbihtc2csIHByb2plY3RMaXN0KXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSlcbn1cblxuZXhwb3J0IHthZGRUb0RvTG9jYWxTdG9yYWdlLCBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlfTsiLCJpbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcbi8vaW1wb3J0IGN1cnJlbnREaXNwbGF5IGZyb20gXCIuL3RvZG9DYXJkc0RPTS5qc1wiO1xuXG5jb25zdCBjcmVhdGVEYXJrQmFja2dyb3VuZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgYmFzZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IHBvcFVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFzZUVsZS5hcHBlbmRDaGlsZChwb3BVcEJhY2tncm91bmQpO1xuICAgIHBvcFVwQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwicG9wVXBCYWNrZ3JvdW5kXCIpO1xuXG5cbiAgICAvL3N0eWxpbmdcbiAgICBwb3BVcEJhY2tncm91bmQuc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJub25lXCI7XG4gICAgcG9wVXBCYWNrZ3JvdW5kLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwicmdiYSgwLDAsMCwwLjYpXCJcbiAgICBwb3BVcEJhY2tncm91bmQuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcInRvcFwiXSA9IFwiMFwiO1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcInRleHQtYWxpZ25cIl0gPSBcImNlbnRlclwiO1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID1cImNlbnRlclwiO1xuICAgIHBvcFVwQmFja2dyb3VuZC5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9XCJjZW50ZXJcIjtcblxufVxuXG5jb25zdCBjcmVhdGVBZGRQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGFya0JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBCYWNrZ3JvdW5kJyk7XG4gICAgY29uc3QgcG9wVXBGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHBvcFVwRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wVXBGb3JtQ29udGFpbmVyXCIpO1xuICAgIGRhcmtCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcFVwRm9ybUNvbnRhaW5lcik7XG5cbiAgICAvL2FkZCBmb3JtIGlucHV0cyBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVJbnB1dFwiKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lXCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgIGNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0U3VibWl0QnV0dG9uXCIpO1xuICAgIHByb2plY3RTdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdEJ1dHRvbik7XG4gICAgcHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtQdWJTdWIucHVibGlzaChcInN1Ym1pdFByb2plY3RCdXR0b25QcmVzc2VkXCIsIHByb2plY3ROYW1lSW5wdXQudmFsdWUpfSk7XG5cbiAgICAvL3N0eWxpbmdcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJub25lXCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wiZmxleC1kaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgIHBvcFVwRm9ybUNvbnRhaW5lci5zdHlsZVtcImhlaWdodFwiXSA9ICBcIjIwMHB4XCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wid2lkdGhcIl0gPSBcIjUwMHB4XCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwid2hpdGVcIjtcbiAgICBwb3BVcEZvcm1Db250YWluZXIuc3R5bGVbXCJwYWRkaW5nXCJdID0gXCIyMHB4XCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wiYm9yZGVyLXJhZGl1c1wiXSA9IFwiNXB4XCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcInJlbGF0aXZlXCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IFwiY2VudGVyXCI7XG4gICAgcG9wVXBGb3JtQ29udGFpbmVyLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgIHBvcFVwRm9ybUNvbnRhaW5lci5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7IFxufTtcblxuY29uc3QgY2hhbmdlUHJvamVjdEZvcm1EaXNwbGF5ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkYXJrQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcEJhY2tncm91bmQnKTtcbiAgICBjb25zdCBwb3BVcFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwRm9ybUNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IHBvcFVwUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5O1xuICAgIHN3aXRjaChwcm9qZWN0RGlzcGxheSl7XG4gICAgICAgIGNhc2UgXCJmbGV4XCI6XG4gICAgICAgICAgICBwb3BVcFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZGFya0JhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgICBwb3BVcFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZGFya0JhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VUb0RvRm9ybURpc3BsYXkgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhcmtCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IHBvcFVwVG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUb0RvQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk7XG4gICAgc3dpdGNoKHByb2plY3REaXNwbGF5KXtcbiAgICAgICAgY2FzZSBcImZsZXhcIjpcbiAgICAgICAgICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkYXJrQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBkYXJrQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZUFkZFRvRG9Gb3JtID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkYXJrQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcEJhY2tncm91bmQnKTtcbiAgICBjb25zdCBwb3BVcFRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3BVcFRvRG9Db250YWluZXJcIik7XG4gICAgZGFya0JhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wVXBUb0RvQ29udGFpbmVyKTtcblxuICAgIC8vYWRkIGZvcm0gaW5wdXRzIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICAvL3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RcbiAgICAvL2RlY2xhcmUgdmFyaWFibGVzXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy9jb25zdCBwcm9qZWN0ID0gY3VycmVudERpc3BsYXkuY2xhc3NMaXN0WzBdO1xuXG4gICAgLy9hZGQgY2xhc3NsaXN0c1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9Eb1RpdGxlXCIpO1xuICAgIHRvRG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Rlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRHVlRGF0ZVwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cbiAgICAvL2FkZCBpbnB1dCB0eXBlXG4gICAgdG9Eb1RpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICB0b0RvRGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9EdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBwcmlvcml0eS50eXBlID0gXCJudW1iZXJcIjtcbiAgICBcbiAgICAvL2FkZCBwbGFjZWhvbGRlcnNcbiAgICB0b0RvVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRvLURvIFRpdGxlXCI7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIHRvZG9EdWVEYXRlLnBsYWNlaG9sZGVyID0gXCJEdWUgRGF0ZVwiO1xuICAgIHByaW9yaXR5LnBsYWNlaG9sZGVyID0gXCJQcmlvcml0eVwiO1xuXG5cbiAgICAvL2FwcGVuZFxuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb24pO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuXG5cbiAgICBjb25zdCBUb0RvU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVG9Eb1N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiVG9Eb1N1Ym1pdEJ1dHRvblwiKTtcbiAgICBUb0RvU3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKFRvRG9TdWJtaXRCdXR0b24pO1xuICAgIFRvRG9TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7UHViU3ViLnB1Ymxpc2goXCJzdWJtaXRUb0RvQnV0dG9uUHJlc3NlZFwiLCB0aGlzKX0pO1xuXG4gICAgLy9zdHlsaW5nXG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwibm9uZVwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcImZsZXgtZGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICBwb3BVcFRvRG9Db250YWluZXIuc3R5bGVbXCJoZWlnaHRcIl0gPSAgXCIyMDBweFwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcIndpZHRoXCJdID0gXCI1MDBweFwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcIndoaXRlXCI7XG4gICAgcG9wVXBUb0RvQ29udGFpbmVyLnN0eWxlW1wicGFkZGluZ1wiXSA9IFwiMjBweFwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcImJvcmRlci1yYWRpdXNcIl0gPSBcIjVweFwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJyZWxhdGl2ZVwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcInRleHQtYWxpZ25cIl0gPSBcImNlbnRlclwiO1xuICAgIHBvcFVwVG9Eb0NvbnRhaW5lci5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICBwb3BVcFRvRG9Db250YWluZXIuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiOyBcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG9DYXJkUG9wVXAgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhcmtCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IHBvcFVwQ2FyZEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3BVcENhcmRJbmZvQ29udGFpbmVyXCIpO1xuICAgIGRhcmtCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcFVwQ2FyZEluZm9Db250YWluZXIpO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwdGlvbik7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRHVlRGF0ZSk7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkUHJpb3JpdHkpO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFByb2plY3QpO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdEJ1dHRvbik7XG5cbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmRUaXRsZVwiKTtcbiAgICBjYXJkRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmREZXNjcmlwdGlvblwiKTtcbiAgICBjYXJkRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2FyZER1ZURhdGVcIik7XG4gICAgY2FyZFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjYXJkUHJpb3JpdHlcIik7XG4gICAgY2FyZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImNhcmRQcm9qZWN0XCIpO1xuICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXRCdXR0b25cIik7XG4gICAgZXhpdEJ1dHRvbi5pbm5lclRleHQgPSBcIkV4aXRcIjtcbiAgICBleGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1B1YlN1Yi5wdWJsaXNoKFwiZXhpdENhcmRJbmZvXCIsIHRoaXMpfSk7XG5cbiAgICAvL3N0eWxpbmdcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwibm9uZVwiO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJmbGV4LWRpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcImhlaWdodFwiXSA9ICBcIjIwMHB4XCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcIndpZHRoXCJdID0gXCI1MDBweFwiO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJ3aGl0ZVwiO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJwYWRkaW5nXCJdID0gXCIyMHB4XCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcImJvcmRlci1yYWRpdXNcIl0gPSBcIjVweFwiO1xuICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGVbXCJwb3NpdGlvblwiXSA9IFwicmVsYXRpdmVcIjtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IFwiY2VudGVyXCI7XG4gICAgcG9wVXBDYXJkSW5mb0NvbnRhaW5lci5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbn1cblxuY29uc3QgYWRkSW5mb1RvQ2FyZFBvcFVwID0gZnVuY3Rpb24oaXRlbSl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQ2FyZEluZm9Db250YWluZXInKTtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcmRUaXRsZScpO1xuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FyZERlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgY2FyZER1ZURhdGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcmREdWVEYXRlJyk7XG4gICAgY29uc3QgY2FyZFByaW9yaXR5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkUHJpb3JpdHknKTtcbiAgICBjb25zdCBjYXJkUHJvamVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FyZFByb2plY3QnKTtcbi8vdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdFxuICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSBgVGl0bGU6ICR7aXRlbS50aXRsZX1gO1xuICAgIGNhcmREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgRGVzY3JpcHRpb246ICR7aXRlbS5kZXNjcmlwdGlvbn1gO1xuICAgIGNhcmREdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgRGF0ZTogJHtpdGVtLmR1ZURhdGV9YDtcbiAgICBjYXJkUHJpb3JpdHkuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiAke2l0ZW0ucHJpb3JpdHl9YDtcbiAgICBjYXJkUHJvamVjdC5pbm5lclRleHQgPSBgUHJvamVjdDogJHtpdGVtLnByb2plY3R9YDtcbn1cbmNvbnN0IGNoYW5nZUNhcmRQb3BVcERpc3BsYXkgPSBmdW5jdGlvbihtc2csIGl0ZW0pe1xuICAgIGNvbnN0IGRhcmtCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IHBvcFVwQ2FyZEluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ2FyZEluZm9Db250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk7XG4gICAgc3dpdGNoKHByb2plY3REaXNwbGF5KXtcbiAgICAgICAgY2FzZSBcImZsZXhcIjpcbiAgICAgICAgICAgIHBvcFVwQ2FyZEluZm9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZGFya0JhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgICBhZGRJbmZvVG9DYXJkUG9wVXAoaXRlbSk7XG4gICAgICAgICAgICBwb3BVcENhcmRJbmZvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGRhcmtCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZURhcmtCYWNrZ3JvdW5kLCBcbiAgICBjcmVhdGVBZGRQcm9qZWN0Rm9ybSxcbiAgICBjaGFuZ2VQcm9qZWN0Rm9ybURpc3BsYXksXG4gICAgY3JlYXRlQWRkVG9Eb0Zvcm0sXG4gICAgY2hhbmdlVG9Eb0Zvcm1EaXNwbGF5LFxuICAgIGNyZWF0ZVRvRG9DYXJkUG9wVXAsXG4gICAgY2hhbmdlQ2FyZFBvcFVwRGlzcGxheSxcbn07IiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwicHVic3ViLWpzXCI7XG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuY2xhc3MgcHJvamVjdHN7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpe1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmRvZXNQcm9qZWN0RXhpc3QodGhpcy5wcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChjaGVjayA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJjcmVhdGVQcm9qZWN0XCIsIHRoaXMpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaCh0aGlzLnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwiY3JlYXRlZE5ld1Byb2plY3RcIiwgcHJvamVjdExpc3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkR1cGxpY2F0ZSBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvZXNQcm9qZWN0RXhpc3QocHJvamVjdE5hbWUpe1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAocHJvamVjdExpc3RbaV0gPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0czsiLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNvbnN0IGFkZFRvUHJvamVjdExpc3RET00gPSBmdW5jdGlvbihtc2csIHByb2plY3Qpe1xuICAgIGNvbnN0IHBhcmVudEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaXN0SXRlbS5pbm5lclRleHQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIHBhcmVudEVsZS5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XG4gICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0RGl2KHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgIG5ld0xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1B1YlN1Yi5wdWJsaXNoKFwicHJvamVjdE5hbWVDbGlja2VkXCIsIHByb2plY3QucHJvamVjdE5hbWUpfSk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0RGl2ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgY29uc3QgcGFyZW50RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9DYXJkcycpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1gKTtcbiAgICBwYXJlbnRFbGUuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG59O1xuXG5jb25zdCBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwYXJlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIHBhcmVudEVsZS5pbnNlcnRCZWZvcmUobmV3SXRlbSwgcGFyZW50RWxlLmZpcnN0Q2hpbGQpO1xuICAgIG5ld0l0ZW0uaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtQdWJTdWIucHVibGlzaChcImFkZFByb2plY3RCdXR0b25QcmVzc2VkXCIsIHRoaXMpfSlcbn1cblxuY29uc3QgY3JlYXRlQWRkVG9Eb0J1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcGFyZW50RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKTtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWRkVG9Eb0J1dHRvblwiKTtcbiAgICBwYXJlbnRFbGUuaW5zZXJ0QmVmb3JlKG5ld0l0ZW0sIHBhcmVudEVsZS5maXJzdENoaWxkKTtcbiAgICBuZXdJdGVtLmlubmVyVGV4dCA9IFwiQWRkIFRvLURvXCI7XG5cbiAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1B1YlN1Yi5wdWJsaXNoKFwiYWRkVG9Eb0J1dHRvblByZXNzZWRcIiwgdGhpcyl9KVxufTtcblxuZXhwb3J0IHtjcmVhdGVBZGRQcm9qZWN0QnV0dG9uLCBhZGRUb1Byb2plY3RMaXN0RE9NLCBjcmVhdGVBZGRUb0RvQnV0dG9ufTsiLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNvbnN0IHRvZG9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0NhcmRzXCIpO1xubGV0IGN1cnJlbnREaXNwbGF5ID0gdG9kb0NhcmRzLnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdFwiKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdENvbnRhaW5lciA9IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgIGNvbnN0IGNoZWNrID0gdG9kb0NhcmRzLnF1ZXJ5U2VsZWN0b3IoYC4ke3Byb2plY3R9YCk7XG4gICAgaWYoY2hlY2sgPT0gbnVsbCl7XG4gICAgICAgIGxldCBuZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0NhcmRzLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcik7XG4gICAgICAgIG5ld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3Byb2plY3R9YCk7XG4gICAgICAgIG5ld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufTtcblxuY29uc3QgZGlzcGxheUNhcmQgPSBmdW5jdGlvbihtc2csIHRvZG9JdGVtKXtcbiAgICAvL2NyZWF0ZSBuZWVkZWQgZWxlbWVudHNcbiAgICBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKHRvZG9JdGVtLnByb2plY3QpO1xuICAgIGNvbnN0IGNvbnRhaW5lckl0ZW0gPSB0b2RvQ2FyZHMucXVlcnlTZWxlY3RvcihgLiR7dG9kb0l0ZW0ucHJvamVjdH1gKTtcbiAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZURhdGVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9ICh0b2RvSXRlbS50aXRsZS5zcGxpdChcIiBcIikpLmpvaW4oXCJcIik7XG4gICAgY29uc3QgY2FyZENvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZWxldGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZXhwYW5kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9hc3NpZ24gdGV4dFxuICAgIHRpdGxlRWxlLmlubmVyVGV4dCA9IHRvZG9JdGVtLnRpdGxlO1xuICAgIGR1ZURhdGVFbGUuaW5uZXJUZXh0ID0gdG9kb0l0ZW0uZHVlRGF0ZTtcbiAgICBkZWxldGVDYXJkLmlubmVyVGV4dCA9IFwiRGVsZXRlIENhcmRcIjtcbiAgICBleHBhbmRDYXJkLmlubmVyVGV4dCA9IFwiVmlldyBJbmZvXCJcblxuICAgIC8vYXNzaWduIGNsYXNzZXMgb3IgSUQnc1xuICAgIG5ld0NhcmQuaWQgPSBgJHt0aXRsZX1gO1xuICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZChcInRvZG9DYXJkXCIpO1xuICAgIHRpdGxlRWxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBkdWVEYXRlRWxlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICAgIGNhcmRDb250cm9sLmNsYXNzTGlzdC5hZGQoXCJjYXJkQ29udHJvbFwiKVxuICAgIGRlbGV0ZUNhcmQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQ2FyZCcpO1xuICAgIGV4cGFuZENhcmQuY2xhc3NMaXN0LmFkZChcImV4cGFuZENhcmRcIik7XG5cbiAgICAvL2FwcGVuZCBjaGlsZHJlbiBhbmQgcGFyZW50c1xuICAgIGNvbnRhaW5lckl0ZW0uYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgbmV3Q2FyZC5hcHBlbmRDaGlsZCh0aXRsZUVsZSk7XG4gICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlRWxlKTtcbiAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGNhcmRDb250cm9sKTtcbiAgICBjYXJkQ29udHJvbC5hcHBlbmRDaGlsZChleHBhbmRDYXJkKTtcbiAgICBjYXJkQ29udHJvbC5hcHBlbmRDaGlsZChkZWxldGVDYXJkKTtcblxuXG4gICAgLy9hZGQgZXZlbnRzXG4gICAgZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0l0ZW0uZGVsZXRlLmJpbmQodG9kb0l0ZW0pKTtcbiAgICBleHBhbmRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvSXRlbS5mdWxsRGlzcGxheS5iaW5kKHRvZG9JdGVtKSlcbn1cblxuY29uc3QgZGVsZXRlQ2FyZCA9IGZ1bmN0aW9uKG1zZywgdG9kb0l0ZW0pe1xuICAgIGNvbnN0IHRpdGxlID0gKHRvZG9JdGVtLnRpdGxlLnNwbGl0KFwiIFwiKSkuam9pbihcIlwiKTtcbiAgICBjb25zdCBpdGVtQ2FyZFBhcmVudCA9IHRvZG9DYXJkcy5xdWVyeVNlbGVjdG9yKGAuJHt0b2RvSXRlbS5wcm9qZWN0fWApO1xuICAgIGNvbnN0IGl0ZW1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGl0bGV9YCk7XG4gICAgd2hpbGUoaXRlbUNhcmQubGFzdENoaWxkKXtcbiAgICAgICAgaXRlbUNhcmQucmVtb3ZlQ2hpbGQoaXRlbUNhcmQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgaXRlbUNhcmRQYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbUNhcmQpO1xufVxuXG5jb25zdCBjaGFuZ2VEaXNwbGF5ID0gZnVuY3Rpb24obXNnLCBkaXNwbGF5KXtcbiAgICAvL29ubHkgdGFrZSBhY3Rpb24gaWYgd2UgY2xpY2tlZCBvbiBhIHZpZXcgb3RoZXIgdGhhbiB3aGF0IGlzIGFscmVhZHkgdGhlcmVcbiAgICBpZih0b2RvQ2FyZHMucXVlcnlTZWxlY3RvcihgLiR7ZGlzcGxheX1gKSAhPT0gY3VycmVudERpc3BsYXkpe1xuICAgICAgICBjdXJyZW50RGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGN1cnJlbnREaXNwbGF5ID0gdG9kb0NhcmRzLnF1ZXJ5U2VsZWN0b3IoYC4ke2Rpc3BsYXl9YCk7XG4gICAgICAgIGN1cnJlbnREaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgXG59XG5cblxuZXhwb3J0IHtkaXNwbGF5Q2FyZCxcbiAgICAgICAgZGVsZXRlQ2FyZCxcbiAgICAgICAgY2hhbmdlRGlzcGxheSxcbiAgICAgICAgY3VycmVudERpc3BsYXksXG5cbn07IiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IHtjdXJyZW50RGlzcGxheX0gZnJvbSBcIi4vdG9kb0NhcmRzRE9NLmpzXCI7XG5cbmxldCB0b2RvcyA9IFtdO1xuXG5jbGFzcyB0b0RvT2JqZWN0e1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0b2Rvcy5wdXNoKHRoaXMpO1xuICAgICAgICBQdWJTdWIucHVibGlzaChcInRvRG9DcmVhdGVkXCIsIHRvZG9zKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5KCl7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwiY3JlYXRlVG9Eb2Rpc3BsYXlcIiwgdGhpcyk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih0b2Rvc1tpXSA9PT0gdGhpcyl7XG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwiZGVsZXRlZFRvRG9cIiwgdG9kb3MpO1xuICAgICAgICBQdWJTdWIucHVibGlzaChcImRlbGV0ZVRvRG9kaXNwbGF5XCIsIHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bGxEaXNwbGF5KCl7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwiZnVsbERpc3BsYXlcIiwgdGhpcyk7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVUb0RvRnJvbVVJID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRvRG9Db250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb1RpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLnRvRG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLnRvRG9EdWVEYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBjdXJyZW50RGlzcGxheS5jbGFzc0xpc3RbMF07XG4gICAgY29uc3QgbmV3VG9EbyA9IG5ldyB0b0RvT2JqZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIG5ld1RvRG8uZGlzcGxheSgpO1xuXG59XG5cblxuZXhwb3J0IHt0b0RvT2JqZWN0LCBjcmVhdGVUb0RvRnJvbVVJfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IHt0b0RvT2JqZWN0fSBmcm9tIFwiLi90b2RvT2JqZWN0XCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vUHViU3ViLmpzJ1xuXG5QdWJTdWIucHVibGlzaCgncGFnZUxvYWRlZCcsIG51bGwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9