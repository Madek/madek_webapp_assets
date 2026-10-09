(function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	//#endregion
	//#region node_modules/lodash-es/_freeGlobal.js
	var freeGlobal;
	var init__freeGlobal = __esmMin((() => {
		freeGlobal = typeof global == "object" && global && global.Object === Object && global;
	}));
	//#endregion
	//#region node_modules/lodash-es/_root.js
	var freeSelf, root;
	var init__root = __esmMin((() => {
		init__freeGlobal();
		freeSelf = typeof self == "object" && self && self.Object === Object && self;
		root = freeGlobal || freeSelf || Function("return this")();
	}));
	//#endregion
	//#region node_modules/lodash-es/_Symbol.js
	var Symbol$1;
	var init__Symbol = __esmMin((() => {
		init__root();
		Symbol$1 = root.Symbol;
	}));
	//#endregion
	//#region node_modules/lodash-es/_getRawTag.js
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty$12.call(value, symToStringTag$1), tag = value[symToStringTag$1];
		try {
			value[symToStringTag$1] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString$1.call(value);
		if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
		return result;
	}
	var objectProto$4, hasOwnProperty$12, nativeObjectToString$1, symToStringTag$1;
	var init__getRawTag = __esmMin((() => {
		init__Symbol();
		objectProto$4 = Object.prototype;
		hasOwnProperty$12 = objectProto$4.hasOwnProperty;
		nativeObjectToString$1 = objectProto$4.toString;
		symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
	}));
	//#endregion
	//#region node_modules/lodash-es/_objectToString.js
	/**
	* Converts `value` to a string using `Object.prototype.toString`.
	*
	* @private
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	*/
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	var nativeObjectToString;
	var init__objectToString = __esmMin((() => {
		nativeObjectToString = Object.prototype.toString;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseGetTag.js
	/**
	* The base implementation of `getTag` without fallbacks for buggy environments.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	var nullTag, undefinedTag, symToStringTag;
	var init__baseGetTag = __esmMin((() => {
		init__Symbol();
		init__getRawTag();
		init__objectToString();
		nullTag = "[object Null]";
		undefinedTag = "[object Undefined]";
		symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
	}));
	//#endregion
	//#region node_modules/lodash-es/isObjectLike.js
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	var init_isObjectLike = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/isSymbol.js
	/**
	* Checks if `value` is classified as a `Symbol` primitive or object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	* @example
	*
	* _.isSymbol(Symbol.iterator);
	* // => true
	*
	* _.isSymbol('abc');
	* // => false
	*/
	function isSymbol(value) {
		return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
	}
	var symbolTag$1;
	var init_isSymbol = __esmMin((() => {
		init__baseGetTag();
		init_isObjectLike();
		symbolTag$1 = "[object Symbol]";
	}));
	//#endregion
	//#region node_modules/lodash-es/_arrayMap.js
	/**
	* A specialized version of `_.map` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function arrayMap(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length, result = Array(length);
		while (++index < length) result[index] = iteratee(array[index], index, array);
		return result;
	}
	var init__arrayMap = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/isArray.js
	var isArray$1;
	var init_isArray = __esmMin((() => {
		isArray$1 = Array.isArray;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseToString.js
	/**
	* The base implementation of `_.toString` which doesn't convert nullish
	* values to empty strings.
	*
	* @private
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	*/
	function baseToString(value) {
		if (typeof value == "string") return value;
		if (isArray$1(value)) return arrayMap(value, baseToString) + "";
		if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
	}
	var INFINITY$2, symbolProto$1, symbolToString;
	var init__baseToString = __esmMin((() => {
		init__Symbol();
		init__arrayMap();
		init_isArray();
		init_isSymbol();
		INFINITY$2 = Infinity;
		symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0;
		symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
	}));
	//#endregion
	//#region node_modules/lodash-es/_trimmedEndIndex.js
	/**
	* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	* character of `string`.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {number} Returns the index of the last non-whitespace character.
	*/
	function trimmedEndIndex(string) {
		var index = string.length;
		while (index-- && reWhitespace.test(string.charAt(index)));
		return index;
	}
	var reWhitespace;
	var init__trimmedEndIndex = __esmMin((() => {
		reWhitespace = /\s/;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseTrim.js
	/**
	* The base implementation of `_.trim`.
	*
	* @private
	* @param {string} string The string to trim.
	* @returns {string} Returns the trimmed string.
	*/
	function baseTrim(string) {
		return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
	}
	var reTrimStart;
	var init__baseTrim = __esmMin((() => {
		init__trimmedEndIndex();
		reTrimStart = /^\s+/;
	}));
	//#endregion
	//#region node_modules/lodash-es/isObject.js
	/**
	* Checks if `value` is the
	* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(_.noop);
	* // => true
	*
	* _.isObject(null);
	* // => false
	*/
	function isObject(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	var init_isObject = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/toNumber.js
	/**
	* Converts `value` to a number.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to process.
	* @returns {number} Returns the number.
	* @example
	*
	* _.toNumber(3.2);
	* // => 3.2
	*
	* _.toNumber(Number.MIN_VALUE);
	* // => 5e-324
	*
	* _.toNumber(Infinity);
	* // => Infinity
	*
	* _.toNumber('3.2');
	* // => 3.2
	*/
	function toNumber(value) {
		if (typeof value == "number") return value;
		if (isSymbol(value)) return NAN;
		if (isObject(value)) {
			var other = typeof value.valueOf == "function" ? value.valueOf() : value;
			value = isObject(other) ? other + "" : other;
		}
		if (typeof value != "string") return value === 0 ? value : +value;
		value = baseTrim(value);
		var isBinary = reIsBinary.test(value);
		return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}
	var NAN, reIsBadHex, reIsBinary, reIsOctal, freeParseInt;
	var init_toNumber = __esmMin((() => {
		init__baseTrim();
		init_isObject();
		init_isSymbol();
		NAN = NaN;
		reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
		reIsBinary = /^0b[01]+$/i;
		reIsOctal = /^0o[0-7]+$/i;
		freeParseInt = parseInt;
	}));
	//#endregion
	//#region node_modules/lodash-es/toFinite.js
	/**
	* Converts `value` to a finite number.
	*
	* @static
	* @memberOf _
	* @since 4.12.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {number} Returns the converted number.
	* @example
	*
	* _.toFinite(3.2);
	* // => 3.2
	*
	* _.toFinite(Number.MIN_VALUE);
	* // => 5e-324
	*
	* _.toFinite(Infinity);
	* // => 1.7976931348623157e+308
	*
	* _.toFinite('3.2');
	* // => 3.2
	*/
	function toFinite(value) {
		if (!value) return value === 0 ? value : 0;
		value = toNumber(value);
		if (value === INFINITY$1 || value === -INFINITY$1) return (value < 0 ? -1 : 1) * MAX_INTEGER;
		return value === value ? value : 0;
	}
	var INFINITY$1, MAX_INTEGER;
	var init_toFinite = __esmMin((() => {
		init_toNumber();
		INFINITY$1 = Infinity;
		MAX_INTEGER = 17976931348623157e292;
	}));
	//#endregion
	//#region node_modules/lodash-es/toInteger.js
	/**
	* Converts `value` to an integer.
	*
	* **Note:** This method is loosely based on
	* [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {number} Returns the converted integer.
	* @example
	*
	* _.toInteger(3.2);
	* // => 3
	*
	* _.toInteger(Number.MIN_VALUE);
	* // => 0
	*
	* _.toInteger(Infinity);
	* // => 1.7976931348623157e+308
	*
	* _.toInteger('3.2');
	* // => 3
	*/
	function toInteger(value) {
		var result = toFinite(value), remainder = result % 1;
		return result === result ? remainder ? result - remainder : result : 0;
	}
	var init_toInteger = __esmMin((() => {
		init_toFinite();
	}));
	//#endregion
	//#region node_modules/lodash-es/identity.js
	/**
	* This method returns the first argument it receives.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Util
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'a': 1 };
	*
	* console.log(_.identity(object) === object);
	* // => true
	*/
	function identity(value) {
		return value;
	}
	var init_identity = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/isFunction.js
	/**
	* Checks if `value` is classified as a `Function` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*
	* _.isFunction(/abc/);
	* // => false
	*/
	function isFunction(value) {
		if (!isObject(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	var asyncTag, funcTag$1, genTag, proxyTag;
	var init_isFunction = __esmMin((() => {
		init__baseGetTag();
		init_isObject();
		asyncTag = "[object AsyncFunction]";
		funcTag$1 = "[object Function]";
		genTag = "[object GeneratorFunction]";
		proxyTag = "[object Proxy]";
	}));
	//#endregion
	//#region node_modules/lodash-es/_coreJsData.js
	var coreJsData;
	var init__coreJsData = __esmMin((() => {
		init__root();
		coreJsData = root["__core-js_shared__"];
	}));
	//#endregion
	//#region node_modules/lodash-es/_isMasked.js
	/**
	* Checks if `func` has its source masked.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` is masked, else `false`.
	*/
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	var maskSrcKey;
	var init__isMasked = __esmMin((() => {
		init__coreJsData();
		maskSrcKey = function() {
			var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
			return uid ? "Symbol(src)_1." + uid : "";
		}();
	}));
	//#endregion
	//#region node_modules/lodash-es/_toSource.js
	/**
	* Converts `func` to its source code.
	*
	* @private
	* @param {Function} func The function to convert.
	* @returns {string} Returns the source code.
	*/
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString$2.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	var funcToString$2;
	var init__toSource = __esmMin((() => {
		funcToString$2 = Function.prototype.toString;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsNative.js
	/**
	* The base implementation of `_.isNative` without bad shim checks.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a native function,
	*  else `false`.
	*/
	function baseIsNative(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	var reRegExpChar, reIsHostCtor, funcProto$1, objectProto$3, funcToString$1, hasOwnProperty$11, reIsNative;
	var init__baseIsNative = __esmMin((() => {
		init_isFunction();
		init__isMasked();
		init_isObject();
		init__toSource();
		reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
		reIsHostCtor = /^\[object .+?Constructor\]$/;
		funcProto$1 = Function.prototype;
		objectProto$3 = Object.prototype;
		funcToString$1 = funcProto$1.toString;
		hasOwnProperty$11 = objectProto$3.hasOwnProperty;
		reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$11).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	}));
	//#endregion
	//#region node_modules/lodash-es/_getValue.js
	/**
	* Gets the value at `key` of `object`.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	var init__getValue = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_getNative.js
	/**
	* Gets the native function at `key` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the method to get.
	* @returns {*} Returns the function if it's native, else `undefined`.
	*/
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	var init__getNative = __esmMin((() => {
		init__baseIsNative();
		init__getValue();
	}));
	//#endregion
	//#region node_modules/lodash-es/_WeakMap.js
	var WeakMap$1;
	var init__WeakMap = __esmMin((() => {
		init__getNative();
		init__root();
		WeakMap$1 = getNative(root, "WeakMap");
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseCreate.js
	var objectCreate, baseCreate;
	var init__baseCreate = __esmMin((() => {
		init_isObject();
		objectCreate = Object.create;
		baseCreate = function() {
			function object() {}
			return function(proto) {
				if (!isObject(proto)) return {};
				if (objectCreate) return objectCreate(proto);
				object.prototype = proto;
				var result = new object();
				object.prototype = void 0;
				return result;
			};
		}();
	}));
	//#endregion
	//#region node_modules/lodash-es/_apply.js
	/**
	* A faster alternative to `Function#apply`, this function invokes `func`
	* with the `this` binding of `thisArg` and the arguments of `args`.
	*
	* @private
	* @param {Function} func The function to invoke.
	* @param {*} thisArg The `this` binding of `func`.
	* @param {Array} args The arguments to invoke `func` with.
	* @returns {*} Returns the result of `func`.
	*/
	function apply(func, thisArg, args) {
		switch (args.length) {
			case 0: return func.call(thisArg);
			case 1: return func.call(thisArg, args[0]);
			case 2: return func.call(thisArg, args[0], args[1]);
			case 3: return func.call(thisArg, args[0], args[1], args[2]);
		}
		return func.apply(thisArg, args);
	}
	var init__apply = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_copyArray.js
	/**
	* Copies the values of `source` to `array`.
	*
	* @private
	* @param {Array} source The array to copy values from.
	* @param {Array} [array=[]] The array to copy values to.
	* @returns {Array} Returns `array`.
	*/
	function copyArray(source, array) {
		var index = -1, length = source.length;
		array || (array = Array(length));
		while (++index < length) array[index] = source[index];
		return array;
	}
	var init__copyArray = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_shortOut.js
	/**
	* Creates a function that'll short out and invoke `identity` instead
	* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	* milliseconds.
	*
	* @private
	* @param {Function} func The function to restrict.
	* @returns {Function} Returns the new shortable function.
	*/
	function shortOut(func) {
		var count = 0, lastCalled = 0;
		return function() {
			var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) return arguments[0];
			} else count = 0;
			return func.apply(void 0, arguments);
		};
	}
	var HOT_COUNT, HOT_SPAN, nativeNow;
	var init__shortOut = __esmMin((() => {
		HOT_COUNT = 800;
		HOT_SPAN = 16;
		nativeNow = Date.now;
	}));
	//#endregion
	//#region node_modules/lodash-es/constant.js
	/**
	* Creates a function that returns `value`.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {*} value The value to return from the new function.
	* @returns {Function} Returns the new constant function.
	* @example
	*
	* var objects = _.times(2, _.constant({ 'a': 1 }));
	*
	* console.log(objects);
	* // => [{ 'a': 1 }, { 'a': 1 }]
	*
	* console.log(objects[0] === objects[1]);
	* // => true
	*/
	function constant(value) {
		return function() {
			return value;
		};
	}
	var init_constant = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_defineProperty.js
	var defineProperty;
	var init__defineProperty = __esmMin((() => {
		init__getNative();
		defineProperty = function() {
			try {
				var func = getNative(Object, "defineProperty");
				func({}, "", {});
				return func;
			} catch (e) {}
		}();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseSetToString.js
	var baseSetToString;
	var init__baseSetToString = __esmMin((() => {
		init_constant();
		init__defineProperty();
		init_identity();
		baseSetToString = !defineProperty ? identity : function(func, string) {
			return defineProperty(func, "toString", {
				"configurable": true,
				"enumerable": false,
				"value": constant(string),
				"writable": true
			});
		};
	}));
	//#endregion
	//#region node_modules/lodash-es/_setToString.js
	var setToString;
	var init__setToString = __esmMin((() => {
		init__baseSetToString();
		init__shortOut();
		setToString = shortOut(baseSetToString);
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseFindIndex.js
	/**
	* The base implementation of `_.findIndex` and `_.findLastIndex` without
	* support for iteratee shorthands.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {Function} predicate The function invoked per iteration.
	* @param {number} fromIndex The index to search from.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
		var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
		while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
		return -1;
	}
	var init__baseFindIndex = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsNaN.js
	/**
	* The base implementation of `_.isNaN` without support for number objects.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	*/
	function baseIsNaN(value) {
		return value !== value;
	}
	var init__baseIsNaN = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_strictIndexOf.js
	/**
	* A specialized version of `_.indexOf` which performs strict equality
	* comparisons of values, i.e. `===`.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} value The value to search for.
	* @param {number} fromIndex The index to search from.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function strictIndexOf(array, value, fromIndex) {
		var index = fromIndex - 1, length = array.length;
		while (++index < length) if (array[index] === value) return index;
		return -1;
	}
	var init__strictIndexOf = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_baseIndexOf.js
	/**
	* The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} value The value to search for.
	* @param {number} fromIndex The index to search from.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function baseIndexOf(array, value, fromIndex) {
		return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	var init__baseIndexOf = __esmMin((() => {
		init__baseFindIndex();
		init__baseIsNaN();
		init__strictIndexOf();
	}));
	//#endregion
	//#region node_modules/lodash-es/_isIndex.js
	/**
	* Checks if `value` is a valid array-like index.
	*
	* @private
	* @param {*} value The value to check.
	* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	*/
	function isIndex(value, length) {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER$1 : length;
		return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	var MAX_SAFE_INTEGER$1, reIsUint;
	var init__isIndex = __esmMin((() => {
		MAX_SAFE_INTEGER$1 = 9007199254740991;
		reIsUint = /^(?:0|[1-9]\d*)$/;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseAssignValue.js
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty) defineProperty(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	var init__baseAssignValue = __esmMin((() => {
		init__defineProperty();
	}));
	//#endregion
	//#region node_modules/lodash-es/eq.js
	/**
	* Performs a
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* comparison between two values to determine if they are equivalent.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.eq(object, object);
	* // => true
	*
	* _.eq(object, other);
	* // => false
	*
	* _.eq('a', 'a');
	* // => true
	*
	* _.eq('a', Object('a'));
	* // => false
	*
	* _.eq(NaN, NaN);
	* // => true
	*/
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	var init_eq = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_assignValue.js
	/**
	* Assigns `value` to `key` of `object` if the existing value is not equivalent
	* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty$10.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	var hasOwnProperty$10;
	var init__assignValue = __esmMin((() => {
		init__baseAssignValue();
		init_eq();
		hasOwnProperty$10 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/_copyObject.js
	/**
	* Copies properties of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy properties from.
	* @param {Array} props The property identifiers to copy.
	* @param {Object} [object={}] The object to copy properties to.
	* @param {Function} [customizer] The function to customize copied values.
	* @returns {Object} Returns `object`.
	*/
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index = -1, length = props.length;
		while (++index < length) {
			var key = props[index];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	var init__copyObject = __esmMin((() => {
		init__assignValue();
		init__baseAssignValue();
	}));
	//#endregion
	//#region node_modules/lodash-es/_overRest.js
	/**
	* A specialized version of `baseRest` which transforms the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @param {Function} transform The rest array transform.
	* @returns {Function} Returns the new function.
	*/
	function overRest(func, start, transform) {
		start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
		return function() {
			var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
			while (++index < length) array[index] = args[start + index];
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) otherArgs[index] = args[index];
			otherArgs[start] = transform(array);
			return apply(func, this, otherArgs);
		};
	}
	var nativeMax$1;
	var init__overRest = __esmMin((() => {
		init__apply();
		nativeMax$1 = Math.max;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseRest.js
	/**
	* The base implementation of `_.rest` which doesn't validate or coerce arguments.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @returns {Function} Returns the new function.
	*/
	function baseRest(func, start) {
		return setToString(overRest(func, start, identity), func + "");
	}
	var init__baseRest = __esmMin((() => {
		init_identity();
		init__overRest();
		init__setToString();
	}));
	//#endregion
	//#region node_modules/lodash-es/isLength.js
	/**
	* Checks if `value` is a valid array-like length.
	*
	* **Note:** This method is loosely based on
	* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	* @example
	*
	* _.isLength(3);
	* // => true
	*
	* _.isLength(Number.MIN_VALUE);
	* // => false
	*
	* _.isLength(Infinity);
	* // => false
	*
	* _.isLength('3');
	* // => false
	*/
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	var MAX_SAFE_INTEGER;
	var init_isLength = __esmMin((() => {
		MAX_SAFE_INTEGER = 9007199254740991;
	}));
	//#endregion
	//#region node_modules/lodash-es/isArrayLike.js
	/**
	* Checks if `value` is array-like. A value is considered array-like if it's
	* not a function and has a `value.length` that's an integer greater than or
	* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	* @example
	*
	* _.isArrayLike([1, 2, 3]);
	* // => true
	*
	* _.isArrayLike(document.body.children);
	* // => true
	*
	* _.isArrayLike('abc');
	* // => true
	*
	* _.isArrayLike(_.noop);
	* // => false
	*/
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction(value);
	}
	var init_isArrayLike = __esmMin((() => {
		init_isFunction();
		init_isLength();
	}));
	//#endregion
	//#region node_modules/lodash-es/_isIterateeCall.js
	/**
	* Checks if the given arguments are from an iteratee call.
	*
	* @private
	* @param {*} value The potential iteratee value argument.
	* @param {*} index The potential iteratee index or key argument.
	* @param {*} object The potential iteratee object argument.
	* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	*  else `false`.
	*/
	function isIterateeCall(value, index, object) {
		if (!isObject(object)) return false;
		var type = typeof index;
		if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
		return false;
	}
	var init__isIterateeCall = __esmMin((() => {
		init_eq();
		init_isArrayLike();
		init__isIndex();
		init_isObject();
	}));
	//#endregion
	//#region node_modules/lodash-es/_createAssigner.js
	/**
	* Creates a function like `_.assign`.
	*
	* @private
	* @param {Function} assigner The function to assign values.
	* @returns {Function} Returns the new assigner function.
	*/
	function createAssigner(assigner) {
		return baseRest(function(object, sources) {
			var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
			customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
			if (guard && isIterateeCall(sources[0], sources[1], guard)) {
				customizer = length < 3 ? void 0 : customizer;
				length = 1;
			}
			object = Object(object);
			while (++index < length) {
				var source = sources[index];
				if (source) assigner(object, source, index, customizer);
			}
			return object;
		});
	}
	var init__createAssigner = __esmMin((() => {
		init__baseRest();
		init__isIterateeCall();
	}));
	//#endregion
	//#region node_modules/lodash-es/_isPrototype.js
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
	}
	var objectProto$2;
	var init__isPrototype = __esmMin((() => {
		objectProto$2 = Object.prototype;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseTimes.js
	/**
	* The base implementation of `_.times` without support for iteratee shorthands
	* or max array length checks.
	*
	* @private
	* @param {number} n The number of times to invoke `iteratee`.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the array of results.
	*/
	function baseTimes(n, iteratee) {
		var index = -1, result = Array(n);
		while (++index < n) result[index] = iteratee(index);
		return result;
	}
	var init__baseTimes = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsArguments.js
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag$2;
	}
	var argsTag$2;
	var init__baseIsArguments = __esmMin((() => {
		init__baseGetTag();
		init_isObjectLike();
		argsTag$2 = "[object Arguments]";
	}));
	//#endregion
	//#region node_modules/lodash-es/isArguments.js
	var objectProto$1, hasOwnProperty$9, propertyIsEnumerable$1, isArguments;
	var init_isArguments = __esmMin((() => {
		init__baseIsArguments();
		init_isObjectLike();
		objectProto$1 = Object.prototype;
		hasOwnProperty$9 = objectProto$1.hasOwnProperty;
		propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
		isArguments = baseIsArguments(function() {
			return arguments;
		}()) ? baseIsArguments : function(value) {
			return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
		};
	}));
	//#endregion
	//#region node_modules/lodash-es/stubFalse.js
	/**
	* This method returns `false`.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {boolean} Returns `false`.
	* @example
	*
	* _.times(2, _.stubFalse);
	* // => [false, false]
	*/
	function stubFalse() {
		return false;
	}
	var init_stubFalse = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/isBuffer.js
	var freeExports$2, freeModule$2, Buffer$2, isBuffer;
	var init_isBuffer = __esmMin((() => {
		init__root();
		init_stubFalse();
		freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
		freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
		Buffer$2 = freeModule$2 && freeModule$2.exports === freeExports$2 ? root.Buffer : void 0;
		isBuffer = (Buffer$2 ? Buffer$2.isBuffer : void 0) || stubFalse;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsTypedArray.js
	/**
	* The base implementation of `_.isTypedArray` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	*/
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	var argsTag$1, arrayTag$1, boolTag$2, dateTag$1, errorTag$1, funcTag, mapTag$3, numberTag$2, objectTag$3, regexpTag$1, setTag$3, stringTag$2, weakMapTag$1, arrayBufferTag$1, dataViewTag$2, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags;
	var init__baseIsTypedArray = __esmMin((() => {
		init__baseGetTag();
		init_isLength();
		init_isObjectLike();
		argsTag$1 = "[object Arguments]";
		arrayTag$1 = "[object Array]";
		boolTag$2 = "[object Boolean]";
		dateTag$1 = "[object Date]";
		errorTag$1 = "[object Error]";
		funcTag = "[object Function]";
		mapTag$3 = "[object Map]";
		numberTag$2 = "[object Number]";
		objectTag$3 = "[object Object]";
		regexpTag$1 = "[object RegExp]";
		setTag$3 = "[object Set]";
		stringTag$2 = "[object String]";
		weakMapTag$1 = "[object WeakMap]";
		arrayBufferTag$1 = "[object ArrayBuffer]";
		dataViewTag$2 = "[object DataView]";
		float32Tag = "[object Float32Array]";
		float64Tag = "[object Float64Array]";
		int8Tag = "[object Int8Array]";
		int16Tag = "[object Int16Array]";
		int32Tag = "[object Int32Array]";
		uint8Tag = "[object Uint8Array]";
		uint8ClampedTag = "[object Uint8ClampedArray]";
		uint16Tag = "[object Uint16Array]";
		uint32Tag = "[object Uint32Array]";
		typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$3] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$3] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$1] = false;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseUnary.js
	/**
	* The base implementation of `_.unary` without support for storing metadata.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @returns {Function} Returns the new capped function.
	*/
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	var init__baseUnary = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_nodeUtil.js
	var freeExports$1, freeModule$1, freeProcess, nodeUtil;
	var init__nodeUtil = __esmMin((() => {
		init__freeGlobal();
		freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
		freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
		freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && freeGlobal.process;
		nodeUtil = function() {
			try {
				var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
				if (types) return types;
				return freeProcess && freeProcess.binding && freeProcess.binding("util");
			} catch (e) {}
		}();
	}));
	//#endregion
	//#region node_modules/lodash-es/isTypedArray.js
	var nodeIsTypedArray, isTypedArray;
	var init_isTypedArray = __esmMin((() => {
		init__baseIsTypedArray();
		init__baseUnary();
		init__nodeUtil();
		nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
		isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	}));
	//#endregion
	//#region node_modules/lodash-es/_arrayLikeKeys.js
	/**
	* Creates an array of the enumerable property names of the array-like `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @param {boolean} inherited Specify returning inherited property names.
	* @returns {Array} Returns the array of property names.
	*/
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
		for (var key in value) if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	var hasOwnProperty$8;
	var init__arrayLikeKeys = __esmMin((() => {
		init__baseTimes();
		init_isArguments();
		init_isArray();
		init_isBuffer();
		init__isIndex();
		init_isTypedArray();
		hasOwnProperty$8 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/_overArg.js
	/**
	* Creates a unary function that invokes `func` with its argument transformed.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} transform The argument transform.
	* @returns {Function} Returns the new function.
	*/
	function overArg(func, transform) {
		return function(arg) {
			return func(transform(arg));
		};
	}
	var init__overArg = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_nativeKeys.js
	var nativeKeys;
	var init__nativeKeys = __esmMin((() => {
		init__overArg();
		nativeKeys = overArg(Object.keys, Object);
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseKeys.js
	/**
	* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeys(object) {
		if (!isPrototype(object)) return nativeKeys(object);
		var result = [];
		for (var key in Object(object)) if (hasOwnProperty$7.call(object, key) && key != "constructor") result.push(key);
		return result;
	}
	var hasOwnProperty$7;
	var init__baseKeys = __esmMin((() => {
		init__isPrototype();
		init__nativeKeys();
		hasOwnProperty$7 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/keys.js
	/**
	* Creates an array of the own enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects. See the
	* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* for more details.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keys(new Foo);
	* // => ['a', 'b'] (iteration order is not guaranteed)
	*
	* _.keys('hi');
	* // => ['0', '1']
	*/
	function keys(object) {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	var init_keys = __esmMin((() => {
		init__arrayLikeKeys();
		init__baseKeys();
		init_isArrayLike();
	}));
	//#endregion
	//#region node_modules/lodash-es/_nativeKeysIn.js
	/**
	* This function is like
	* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* except that it includes inherited enumerable properties.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
	var init__nativeKeysIn = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_baseKeysIn.js
	/**
	* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeysIn(object) {
		if (!isObject(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) result.push(key);
		return result;
	}
	var hasOwnProperty$6;
	var init__baseKeysIn = __esmMin((() => {
		init_isObject();
		init__isPrototype();
		init__nativeKeysIn();
		hasOwnProperty$6 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/keysIn.js
	/**
	* Creates an array of the own and inherited enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keysIn(new Foo);
	* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	*/
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	var init_keysIn = __esmMin((() => {
		init__arrayLikeKeys();
		init__baseKeysIn();
		init_isArrayLike();
	}));
	//#endregion
	//#region node_modules/lodash-es/_isKey.js
	/**
	* Checks if `value` is a property name and not a property path.
	*
	* @private
	* @param {*} value The value to check.
	* @param {Object} [object] The object to query keys on.
	* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	*/
	function isKey(value, object) {
		if (isArray$1(value)) return false;
		var type = typeof value;
		if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	var reIsDeepProp, reIsPlainProp;
	var init__isKey = __esmMin((() => {
		init_isArray();
		init_isSymbol();
		reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
		reIsPlainProp = /^\w*$/;
	}));
	//#endregion
	//#region node_modules/lodash-es/_nativeCreate.js
	var nativeCreate;
	var init__nativeCreate = __esmMin((() => {
		init__getNative();
		nativeCreate = getNative(Object, "create");
	}));
	//#endregion
	//#region node_modules/lodash-es/_hashClear.js
	/**
	* Removes all key-value entries from the hash.
	*
	* @private
	* @name clear
	* @memberOf Hash
	*/
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	var init__hashClear = __esmMin((() => {
		init__nativeCreate();
	}));
	//#endregion
	//#region node_modules/lodash-es/_hashDelete.js
	/**
	* Removes `key` and its value from the hash.
	*
	* @private
	* @name delete
	* @memberOf Hash
	* @param {Object} hash The hash to modify.
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	var init__hashDelete = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_hashGet.js
	/**
	* Gets the hash value for `key`.
	*
	* @private
	* @name get
	* @memberOf Hash
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED$2 ? void 0 : result;
		}
		return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
	}
	var HASH_UNDEFINED$2, hasOwnProperty$5;
	var init__hashGet = __esmMin((() => {
		init__nativeCreate();
		HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
		hasOwnProperty$5 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/_hashHas.js
	/**
	* Checks if a hash value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Hash
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
	}
	var hasOwnProperty$4;
	var init__hashHas = __esmMin((() => {
		init__nativeCreate();
		hasOwnProperty$4 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/_hashSet.js
	/**
	* Sets the hash `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Hash
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the hash instance.
	*/
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
		return this;
	}
	var HASH_UNDEFINED$1;
	var init__hashSet = __esmMin((() => {
		init__nativeCreate();
		HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
	}));
	//#endregion
	//#region node_modules/lodash-es/_Hash.js
	/**
	* Creates a hash object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Hash(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	var init__Hash = __esmMin((() => {
		init__hashClear();
		init__hashDelete();
		init__hashGet();
		init__hashHas();
		init__hashSet();
		Hash.prototype.clear = hashClear;
		Hash.prototype["delete"] = hashDelete;
		Hash.prototype.get = hashGet;
		Hash.prototype.has = hashHas;
		Hash.prototype.set = hashSet;
	}));
	//#endregion
	//#region node_modules/lodash-es/_listCacheClear.js
	/**
	* Removes all key-value entries from the list cache.
	*
	* @private
	* @name clear
	* @memberOf ListCache
	*/
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	var init__listCacheClear = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_assocIndexOf.js
	/**
	* Gets the index at which the `key` is found in `array` of key-value pairs.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} key The key to search for.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function assocIndexOf(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	var init__assocIndexOf = __esmMin((() => {
		init_eq();
	}));
	//#endregion
	//#region node_modules/lodash-es/_listCacheDelete.js
	/**
	* Removes `key` and its value from the list cache.
	*
	* @private
	* @name delete
	* @memberOf ListCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function listCacheDelete(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	var splice;
	var init__listCacheDelete = __esmMin((() => {
		init__assocIndexOf();
		splice = Array.prototype.splice;
	}));
	//#endregion
	//#region node_modules/lodash-es/_listCacheGet.js
	/**
	* Gets the list cache value for `key`.
	*
	* @private
	* @name get
	* @memberOf ListCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function listCacheGet(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	var init__listCacheGet = __esmMin((() => {
		init__assocIndexOf();
	}));
	//#endregion
	//#region node_modules/lodash-es/_listCacheHas.js
	/**
	* Checks if a list cache value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf ListCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	var init__listCacheHas = __esmMin((() => {
		init__assocIndexOf();
	}));
	//#endregion
	//#region node_modules/lodash-es/_listCacheSet.js
	/**
	* Sets the list cache `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf ListCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the list cache instance.
	*/
	function listCacheSet(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	var init__listCacheSet = __esmMin((() => {
		init__assocIndexOf();
	}));
	//#endregion
	//#region node_modules/lodash-es/_ListCache.js
	/**
	* Creates an list cache object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function ListCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	var init__ListCache = __esmMin((() => {
		init__listCacheClear();
		init__listCacheDelete();
		init__listCacheGet();
		init__listCacheHas();
		init__listCacheSet();
		ListCache.prototype.clear = listCacheClear;
		ListCache.prototype["delete"] = listCacheDelete;
		ListCache.prototype.get = listCacheGet;
		ListCache.prototype.has = listCacheHas;
		ListCache.prototype.set = listCacheSet;
	}));
	//#endregion
	//#region node_modules/lodash-es/_Map.js
	var Map$1;
	var init__Map = __esmMin((() => {
		init__getNative();
		init__root();
		Map$1 = getNative(root, "Map");
	}));
	//#endregion
	//#region node_modules/lodash-es/_mapCacheClear.js
	/**
	* Removes all key-value entries from the map.
	*
	* @private
	* @name clear
	* @memberOf MapCache
	*/
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map$1 || ListCache)(),
			"string": new Hash()
		};
	}
	var init__mapCacheClear = __esmMin((() => {
		init__Hash();
		init__ListCache();
		init__Map();
	}));
	//#endregion
	//#region node_modules/lodash-es/_isKeyable.js
	/**
	* Checks if `value` is suitable for use as unique object key.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	*/
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	var init__isKeyable = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_getMapData.js
	/**
	* Gets the data for `map`.
	*
	* @private
	* @param {Object} map The map to query.
	* @param {string} key The reference key.
	* @returns {*} Returns the map data.
	*/
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	var init__getMapData = __esmMin((() => {
		init__isKeyable();
	}));
	//#endregion
	//#region node_modules/lodash-es/_mapCacheDelete.js
	/**
	* Removes `key` and its value from the map.
	*
	* @private
	* @name delete
	* @memberOf MapCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	var init__mapCacheDelete = __esmMin((() => {
		init__getMapData();
	}));
	//#endregion
	//#region node_modules/lodash-es/_mapCacheGet.js
	/**
	* Gets the map value for `key`.
	*
	* @private
	* @name get
	* @memberOf MapCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	var init__mapCacheGet = __esmMin((() => {
		init__getMapData();
	}));
	//#endregion
	//#region node_modules/lodash-es/_mapCacheHas.js
	/**
	* Checks if a map value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf MapCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	var init__mapCacheHas = __esmMin((() => {
		init__getMapData();
	}));
	//#endregion
	//#region node_modules/lodash-es/_mapCacheSet.js
	/**
	* Sets the map `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf MapCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the map cache instance.
	*/
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	var init__mapCacheSet = __esmMin((() => {
		init__getMapData();
	}));
	//#endregion
	//#region node_modules/lodash-es/_MapCache.js
	/**
	* Creates a map cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function MapCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	var init__MapCache = __esmMin((() => {
		init__mapCacheClear();
		init__mapCacheDelete();
		init__mapCacheGet();
		init__mapCacheHas();
		init__mapCacheSet();
		MapCache.prototype.clear = mapCacheClear;
		MapCache.prototype["delete"] = mapCacheDelete;
		MapCache.prototype.get = mapCacheGet;
		MapCache.prototype.has = mapCacheHas;
		MapCache.prototype.set = mapCacheSet;
	}));
	//#endregion
	//#region node_modules/lodash-es/memoize.js
	/**
	* Creates a function that memoizes the result of `func`. If `resolver` is
	* provided, it determines the cache key for storing the result based on the
	* arguments provided to the memoized function. By default, the first argument
	* provided to the memoized function is used as the map cache key. The `func`
	* is invoked with the `this` binding of the memoized function.
	*
	* **Note:** The cache is exposed as the `cache` property on the memoized
	* function. Its creation may be customized by replacing the `_.memoize.Cache`
	* constructor with one whose instances implement the
	* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	* method interface of `clear`, `delete`, `get`, `has`, and `set`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to have its output memoized.
	* @param {Function} [resolver] The function to resolve the cache key.
	* @returns {Function} Returns the new memoized function.
	* @example
	*
	* var object = { 'a': 1, 'b': 2 };
	* var other = { 'c': 3, 'd': 4 };
	*
	* var values = _.memoize(_.values);
	* values(object);
	* // => [1, 2]
	*
	* values(other);
	* // => [3, 4]
	*
	* object.a = 2;
	* values(object);
	* // => [1, 2]
	*
	* // Modify the result cache.
	* values.cache.set(object, ['a', 'b']);
	* values(object);
	* // => ['a', 'b']
	*
	* // Replace `_.memoize.Cache`.
	* _.memoize.Cache = WeakMap;
	*/
	function memoize(func, resolver) {
		if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var memoized = function() {
			var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
			if (cache.has(key)) return cache.get(key);
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache)();
		return memoized;
	}
	var FUNC_ERROR_TEXT;
	var init_memoize = __esmMin((() => {
		init__MapCache();
		FUNC_ERROR_TEXT = "Expected a function";
		memoize.Cache = MapCache;
	}));
	//#endregion
	//#region node_modules/lodash-es/_memoizeCapped.js
	/**
	* A specialized version of `_.memoize` which clears the memoized function's
	* cache when it exceeds `MAX_MEMOIZE_SIZE`.
	*
	* @private
	* @param {Function} func The function to have its output memoized.
	* @returns {Function} Returns the new memoized function.
	*/
	function memoizeCapped(func) {
		var result = memoize(func, function(key) {
			if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
			return key;
		});
		var cache = result.cache;
		return result;
	}
	var MAX_MEMOIZE_SIZE;
	var init__memoizeCapped = __esmMin((() => {
		init_memoize();
		MAX_MEMOIZE_SIZE = 500;
	}));
	//#endregion
	//#region node_modules/lodash-es/_stringToPath.js
	var rePropName, reEscapeChar, stringToPath;
	var init__stringToPath = __esmMin((() => {
		init__memoizeCapped();
		rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
		reEscapeChar = /\\(\\)?/g;
		stringToPath = memoizeCapped(function(string) {
			var result = [];
			if (string.charCodeAt(0) === 46) result.push("");
			string.replace(rePropName, function(match, number, quote, subString) {
				result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
			});
			return result;
		});
	}));
	//#endregion
	//#region node_modules/lodash-es/toString.js
	/**
	* Converts `value` to a string. An empty string is returned for `null`
	* and `undefined` values. The sign of `-0` is preserved.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	* @example
	*
	* _.toString(null);
	* // => ''
	*
	* _.toString(-0);
	* // => '-0'
	*
	* _.toString([1, 2, 3]);
	* // => '1,2,3'
	*/
	function toString(value) {
		return value == null ? "" : baseToString(value);
	}
	var init_toString = __esmMin((() => {
		init__baseToString();
	}));
	//#endregion
	//#region node_modules/lodash-es/_castPath.js
	/**
	* Casts `value` to a path array if it's not one.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {Object} [object] The object to query keys on.
	* @returns {Array} Returns the cast property path array.
	*/
	function castPath(value, object) {
		if (isArray$1(value)) return value;
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	var init__castPath = __esmMin((() => {
		init_isArray();
		init__isKey();
		init__stringToPath();
		init_toString();
	}));
	//#endregion
	//#region node_modules/lodash-es/_toKey.js
	/**
	* Converts `value` to a string key if it's not a string or symbol.
	*
	* @private
	* @param {*} value The value to inspect.
	* @returns {string|symbol} Returns the key.
	*/
	function toKey(value) {
		if (typeof value == "string" || isSymbol(value)) return value;
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	var INFINITY;
	var init__toKey = __esmMin((() => {
		init_isSymbol();
		INFINITY = Infinity;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseGet.js
	/**
	* The base implementation of `_.get` without support for default values.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @returns {*} Returns the resolved value.
	*/
	function baseGet(object, path) {
		path = castPath(path, object);
		var index = 0, length = path.length;
		while (object != null && index < length) object = object[toKey(path[index++])];
		return index && index == length ? object : void 0;
	}
	var init__baseGet = __esmMin((() => {
		init__castPath();
		init__toKey();
	}));
	//#endregion
	//#region node_modules/lodash-es/get.js
	/**
	* Gets the value at `path` of `object`. If the resolved value is
	* `undefined`, the `defaultValue` is returned in its place.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @param {*} [defaultValue] The value returned for `undefined` resolved values.
	* @returns {*} Returns the resolved value.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.get(object, 'a[0].b.c');
	* // => 3
	*
	* _.get(object, ['a', '0', 'b', 'c']);
	* // => 3
	*
	* _.get(object, 'a.b.c', 'default');
	* // => 'default'
	*/
	function get(object, path, defaultValue) {
		var result = object == null ? void 0 : baseGet(object, path);
		return result === void 0 ? defaultValue : result;
	}
	var init_get = __esmMin((() => {
		init__baseGet();
	}));
	//#endregion
	//#region node_modules/lodash-es/_arrayPush.js
	/**
	* Appends the elements of `values` to `array`.
	*
	* @private
	* @param {Array} array The array to modify.
	* @param {Array} values The values to append.
	* @returns {Array} Returns `array`.
	*/
	function arrayPush(array, values) {
		var index = -1, length = values.length, offset = array.length;
		while (++index < length) array[offset + index] = values[index];
		return array;
	}
	var init__arrayPush = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_isFlattenable.js
	/**
	* Checks if `value` is a flattenable `arguments` object or array.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	*/
	function isFlattenable(value) {
		return isArray$1(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	var spreadableSymbol;
	var init__isFlattenable = __esmMin((() => {
		init__Symbol();
		init_isArguments();
		init_isArray();
		spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseFlatten.js
	/**
	* The base implementation of `_.flatten` with support for restricting flattening.
	*
	* @private
	* @param {Array} array The array to flatten.
	* @param {number} depth The maximum recursion depth.
	* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	* @param {Array} [result=[]] The initial result value.
	* @returns {Array} Returns the new flattened array.
	*/
	function baseFlatten(array, depth, predicate, isStrict, result) {
		var index = -1, length = array.length;
		predicate || (predicate = isFlattenable);
		result || (result = []);
		while (++index < length) {
			var value = array[index];
			if (depth > 0 && predicate(value)) if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
			else arrayPush(result, value);
			else if (!isStrict) result[result.length] = value;
		}
		return result;
	}
	var init__baseFlatten = __esmMin((() => {
		init__arrayPush();
		init__isFlattenable();
	}));
	//#endregion
	//#region node_modules/lodash-es/_getPrototype.js
	var getPrototype;
	var init__getPrototype = __esmMin((() => {
		init__overArg();
		getPrototype = overArg(Object.getPrototypeOf, Object);
	}));
	//#endregion
	//#region node_modules/lodash-es/isPlainObject.js
	/**
	* Checks if `value` is a plain object, that is, an object created by the
	* `Object` constructor or one with a `[[Prototype]]` of `null`.
	*
	* @static
	* @memberOf _
	* @since 0.8.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	* }
	*
	* _.isPlainObject(new Foo);
	* // => false
	*
	* _.isPlainObject([1, 2, 3]);
	* // => false
	*
	* _.isPlainObject({ 'x': 0, 'y': 0 });
	* // => true
	*
	* _.isPlainObject(Object.create(null));
	* // => true
	*/
	function isPlainObject$1(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag$2) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	var objectTag$2, funcProto, objectProto, funcToString, hasOwnProperty$3, objectCtorString;
	var init_isPlainObject = __esmMin((() => {
		init__baseGetTag();
		init__getPrototype();
		init_isObjectLike();
		objectTag$2 = "[object Object]";
		funcProto = Function.prototype;
		objectProto = Object.prototype;
		funcToString = funcProto.toString;
		hasOwnProperty$3 = objectProto.hasOwnProperty;
		objectCtorString = funcToString.call(Object);
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseClamp.js
	/**
	* The base implementation of `_.clamp` which doesn't coerce arguments.
	*
	* @private
	* @param {number} number The number to clamp.
	* @param {number} [lower] The lower bound.
	* @param {number} upper The upper bound.
	* @returns {number} Returns the clamped number.
	*/
	function baseClamp(number, lower, upper) {
		if (number === number) {
			if (upper !== void 0) number = number <= upper ? number : upper;
			if (lower !== void 0) number = number >= lower ? number : lower;
		}
		return number;
	}
	var init__baseClamp = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_stackClear.js
	/**
	* Removes all key-value entries from the stack.
	*
	* @private
	* @name clear
	* @memberOf Stack
	*/
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	var init__stackClear = __esmMin((() => {
		init__ListCache();
	}));
	//#endregion
	//#region node_modules/lodash-es/_stackDelete.js
	/**
	* Removes `key` and its value from the stack.
	*
	* @private
	* @name delete
	* @memberOf Stack
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	var init__stackDelete = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_stackGet.js
	/**
	* Gets the stack value for `key`.
	*
	* @private
	* @name get
	* @memberOf Stack
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function stackGet(key) {
		return this.__data__.get(key);
	}
	var init__stackGet = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_stackHas.js
	/**
	* Checks if a stack value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Stack
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function stackHas(key) {
		return this.__data__.has(key);
	}
	var init__stackHas = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_stackSet.js
	/**
	* Sets the stack `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Stack
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the stack cache instance.
	*/
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}
	var LARGE_ARRAY_SIZE;
	var init__stackSet = __esmMin((() => {
		init__ListCache();
		init__Map();
		init__MapCache();
		LARGE_ARRAY_SIZE = 200;
	}));
	//#endregion
	//#region node_modules/lodash-es/_Stack.js
	/**
	* Creates a stack cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Stack(entries) {
		var data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}
	var init__Stack = __esmMin((() => {
		init__ListCache();
		init__stackClear();
		init__stackDelete();
		init__stackGet();
		init__stackHas();
		init__stackSet();
		Stack.prototype.clear = stackClear;
		Stack.prototype["delete"] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;
	}));
	//#endregion
	//#region node_modules/lodash-es/_cloneBuffer.js
	/**
	* Creates a clone of  `buffer`.
	*
	* @private
	* @param {Buffer} buffer The buffer to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Buffer} Returns the cloned buffer.
	*/
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
		buffer.copy(result);
		return result;
	}
	var freeExports, freeModule, Buffer$1, allocUnsafe;
	var init__cloneBuffer = __esmMin((() => {
		init__root();
		freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
		freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
		Buffer$1 = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
		allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
	}));
	//#endregion
	//#region node_modules/lodash-es/_arrayFilter.js
	/**
	* A specialized version of `_.filter` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	*/
	function arrayFilter(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
		while (++index < length) {
			var value = array[index];
			if (predicate(value, index, array)) result[resIndex++] = value;
		}
		return result;
	}
	var init__arrayFilter = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/stubArray.js
	/**
	* This method returns a new empty array.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {Array} Returns the new empty array.
	* @example
	*
	* var arrays = _.times(2, _.stubArray);
	*
	* console.log(arrays);
	* // => [[], []]
	*
	* console.log(arrays[0] === arrays[1]);
	* // => false
	*/
	function stubArray() {
		return [];
	}
	var init_stubArray = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_getSymbols.js
	var propertyIsEnumerable, nativeGetSymbols, getSymbols;
	var init__getSymbols = __esmMin((() => {
		init__arrayFilter();
		init_stubArray();
		propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
		nativeGetSymbols = Object.getOwnPropertySymbols;
		getSymbols = !nativeGetSymbols ? stubArray : function(object) {
			if (object == null) return [];
			object = Object(object);
			return arrayFilter(nativeGetSymbols(object), function(symbol) {
				return propertyIsEnumerable.call(object, symbol);
			});
		};
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseGetAllKeys.js
	/**
	* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	* `keysFunc` and `symbolsFunc` to get the enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @param {Function} symbolsFunc The function to get the symbols of `object`.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		var result = keysFunc(object);
		return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	var init__baseGetAllKeys = __esmMin((() => {
		init__arrayPush();
		init_isArray();
	}));
	//#endregion
	//#region node_modules/lodash-es/_getAllKeys.js
	/**
	* Creates an array of own enumerable property names and symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeys(object) {
		return baseGetAllKeys(object, keys, getSymbols);
	}
	var init__getAllKeys = __esmMin((() => {
		init__baseGetAllKeys();
		init__getSymbols();
		init_keys();
	}));
	//#endregion
	//#region node_modules/lodash-es/_DataView.js
	var DataView$1;
	var init__DataView = __esmMin((() => {
		init__getNative();
		init__root();
		DataView$1 = getNative(root, "DataView");
	}));
	//#endregion
	//#region node_modules/lodash-es/_Promise.js
	var Promise$1;
	var init__Promise = __esmMin((() => {
		init__getNative();
		init__root();
		Promise$1 = getNative(root, "Promise");
	}));
	//#endregion
	//#region node_modules/lodash-es/_Set.js
	var Set$1;
	var init__Set = __esmMin((() => {
		init__getNative();
		init__root();
		Set$1 = getNative(root, "Set");
	}));
	//#endregion
	//#region node_modules/lodash-es/_getTag.js
	var mapTag$2, objectTag$1, promiseTag, setTag$2, weakMapTag, dataViewTag$1, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, _getTag_default;
	var init__getTag = __esmMin((() => {
		init__DataView();
		init__Map();
		init__Promise();
		init__Set();
		init__WeakMap();
		init__baseGetTag();
		init__toSource();
		mapTag$2 = "[object Map]";
		objectTag$1 = "[object Object]";
		promiseTag = "[object Promise]";
		setTag$2 = "[object Set]";
		weakMapTag = "[object WeakMap]";
		dataViewTag$1 = "[object DataView]";
		dataViewCtorString = toSource(DataView$1);
		mapCtorString = toSource(Map$1);
		promiseCtorString = toSource(Promise$1);
		setCtorString = toSource(Set$1);
		weakMapCtorString = toSource(WeakMap$1);
		getTag = baseGetTag;
		if (DataView$1 && getTag(new DataView$1(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$2 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$2 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) getTag = function(value) {
			var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
			if (ctorString) switch (ctorString) {
				case dataViewCtorString: return dataViewTag$1;
				case mapCtorString: return mapTag$2;
				case promiseCtorString: return promiseTag;
				case setCtorString: return setTag$2;
				case weakMapCtorString: return weakMapTag;
			}
			return result;
		};
		_getTag_default = getTag;
	}));
	//#endregion
	//#region node_modules/lodash-es/_Uint8Array.js
	var Uint8Array$1;
	var init__Uint8Array = __esmMin((() => {
		init__root();
		Uint8Array$1 = root.Uint8Array;
	}));
	//#endregion
	//#region node_modules/lodash-es/_cloneArrayBuffer.js
	/**
	* Creates a clone of `arrayBuffer`.
	*
	* @private
	* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	* @returns {ArrayBuffer} Returns the cloned array buffer.
	*/
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
		return result;
	}
	var init__cloneArrayBuffer = __esmMin((() => {
		init__Uint8Array();
	}));
	//#endregion
	//#region node_modules/lodash-es/_cloneTypedArray.js
	/**
	* Creates a clone of `typedArray`.
	*
	* @private
	* @param {Object} typedArray The typed array to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned typed array.
	*/
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	var init__cloneTypedArray = __esmMin((() => {
		init__cloneArrayBuffer();
	}));
	//#endregion
	//#region node_modules/lodash-es/_initCloneObject.js
	/**
	* Initializes an object clone.
	*
	* @private
	* @param {Object} object The object to clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
	var init__initCloneObject = __esmMin((() => {
		init__baseCreate();
		init__getPrototype();
		init__isPrototype();
	}));
	//#endregion
	//#region node_modules/lodash-es/_setCacheAdd.js
	/**
	* Adds `value` to the array cache.
	*
	* @private
	* @name add
	* @memberOf SetCache
	* @alias push
	* @param {*} value The value to cache.
	* @returns {Object} Returns the cache instance.
	*/
	function setCacheAdd(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}
	var HASH_UNDEFINED;
	var init__setCacheAdd = __esmMin((() => {
		HASH_UNDEFINED = "__lodash_hash_undefined__";
	}));
	//#endregion
	//#region node_modules/lodash-es/_setCacheHas.js
	/**
	* Checks if `value` is in the array cache.
	*
	* @private
	* @name has
	* @memberOf SetCache
	* @param {*} value The value to search for.
	* @returns {boolean} Returns `true` if `value` is found, else `false`.
	*/
	function setCacheHas(value) {
		return this.__data__.has(value);
	}
	var init__setCacheHas = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_SetCache.js
	/**
	*
	* Creates an array cache object to store unique values.
	*
	* @private
	* @constructor
	* @param {Array} [values] The values to cache.
	*/
	function SetCache(values) {
		var index = -1, length = values == null ? 0 : values.length;
		this.__data__ = new MapCache();
		while (++index < length) this.add(values[index]);
	}
	var init__SetCache = __esmMin((() => {
		init__MapCache();
		init__setCacheAdd();
		init__setCacheHas();
		SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
		SetCache.prototype.has = setCacheHas;
	}));
	//#endregion
	//#region node_modules/lodash-es/_arraySome.js
	/**
	* A specialized version of `_.some` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	*/
	function arraySome(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (predicate(array[index], index, array)) return true;
		return false;
	}
	var init__arraySome = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_cacheHas.js
	/**
	* Checks if a `cache` value for `key` exists.
	*
	* @private
	* @param {Object} cache The cache to query.
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function cacheHas(cache, key) {
		return cache.has(key);
	}
	var init__cacheHas = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_equalArrays.js
	/**
	* A specialized version of `baseIsEqualDeep` for arrays with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Array} array The array to compare.
	* @param {Array} other The other array to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `array` and `other` objects.
	* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	*/
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
		if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
		var arrStacked = stack.get(array);
		var othStacked = stack.get(other);
		if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
		var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
		stack.set(array, other);
		stack.set(other, array);
		while (++index < arrLength) {
			var arrValue = array[index], othValue = other[index];
			if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
			if (compared !== void 0) {
				if (compared) continue;
				result = false;
				break;
			}
			if (seen) {
				if (!arraySome(other, function(othValue, othIndex) {
					if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
				})) {
					result = false;
					break;
				}
			} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
				result = false;
				break;
			}
		}
		stack["delete"](array);
		stack["delete"](other);
		return result;
	}
	var COMPARE_PARTIAL_FLAG$5, COMPARE_UNORDERED_FLAG$3;
	var init__equalArrays = __esmMin((() => {
		init__SetCache();
		init__arraySome();
		init__cacheHas();
		COMPARE_PARTIAL_FLAG$5 = 1;
		COMPARE_UNORDERED_FLAG$3 = 2;
	}));
	//#endregion
	//#region node_modules/lodash-es/_mapToArray.js
	/**
	* Converts `map` to its key-value pairs.
	*
	* @private
	* @param {Object} map The map to convert.
	* @returns {Array} Returns the key-value pairs.
	*/
	function mapToArray(map) {
		var index = -1, result = Array(map.size);
		map.forEach(function(value, key) {
			result[++index] = [key, value];
		});
		return result;
	}
	var init__mapToArray = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_setToArray.js
	/**
	* Converts `set` to an array of its values.
	*
	* @private
	* @param {Object} set The set to convert.
	* @returns {Array} Returns the values.
	*/
	function setToArray(set) {
		var index = -1, result = Array(set.size);
		set.forEach(function(value) {
			result[++index] = value;
		});
		return result;
	}
	var init__setToArray = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_equalByTag.js
	/**
	* A specialized version of `baseIsEqualDeep` for comparing objects of
	* the same `toStringTag`.
	*
	* **Note:** This function only supports comparing values with tags of
	* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {string} tag The `toStringTag` of the objects to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
				object = object.buffer;
				other = other.buffer;
			case arrayBufferTag:
				if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) return false;
				return true;
			case boolTag$1:
			case dateTag:
			case numberTag$1: return eq(+object, +other);
			case errorTag: return object.name == other.name && object.message == other.message;
			case regexpTag:
			case stringTag$1: return object == other + "";
			case mapTag$1: var convert = mapToArray;
			case setTag$1:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
				convert || (convert = setToArray);
				if (object.size != other.size && !isPartial) return false;
				var stacked = stack.get(object);
				if (stacked) return stacked == other;
				bitmask |= COMPARE_UNORDERED_FLAG$2;
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack["delete"](object);
				return result;
			case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
		}
		return false;
	}
	var COMPARE_PARTIAL_FLAG$4, COMPARE_UNORDERED_FLAG$2, boolTag$1, dateTag, errorTag, mapTag$1, numberTag$1, regexpTag, setTag$1, stringTag$1, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf;
	var init__equalByTag = __esmMin((() => {
		init__Symbol();
		init__Uint8Array();
		init_eq();
		init__equalArrays();
		init__mapToArray();
		init__setToArray();
		COMPARE_PARTIAL_FLAG$4 = 1;
		COMPARE_UNORDERED_FLAG$2 = 2;
		boolTag$1 = "[object Boolean]";
		dateTag = "[object Date]";
		errorTag = "[object Error]";
		mapTag$1 = "[object Map]";
		numberTag$1 = "[object Number]";
		regexpTag = "[object RegExp]";
		setTag$1 = "[object Set]";
		stringTag$1 = "[object String]";
		symbolTag = "[object Symbol]";
		arrayBufferTag = "[object ArrayBuffer]";
		dataViewTag = "[object DataView]";
		symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
		symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	}));
	//#endregion
	//#region node_modules/lodash-es/_equalObjects.js
	/**
	* A specialized version of `baseIsEqualDeep` for objects with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length;
		if (objLength != getAllKeys(other).length && !isPartial) return false;
		var index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) return false;
		}
		var objStacked = stack.get(object);
		var othStacked = stack.get(other);
		if (objStacked && othStacked) return objStacked == other && othStacked == object;
		var result = true;
		stack.set(object, other);
		stack.set(other, object);
		var skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			var objValue = object[key], othValue = other[key];
			if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
			if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == "constructor");
		}
		if (result && !skipCtor) {
			var objCtor = object.constructor, othCtor = other.constructor;
			if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
		}
		stack["delete"](object);
		stack["delete"](other);
		return result;
	}
	var COMPARE_PARTIAL_FLAG$3, hasOwnProperty$2;
	var init__equalObjects = __esmMin((() => {
		init__getAllKeys();
		COMPARE_PARTIAL_FLAG$3 = 1;
		hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsEqualDeep.js
	/**
	* A specialized version of `baseIsEqual` for arrays and objects which performs
	* deep comparisons and tracks traversed objects enabling objects with circular
	* references to be compared.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} [stack] Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;
		var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) return false;
			objIsArr = true;
			objIsObj = false;
		}
		if (isSameTag && !objIsObj) {
			stack || (stack = new Stack());
			return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		}
		if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
			var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
			if (objIsWrapped || othIsWrapped) {
				var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
				stack || (stack = new Stack());
				return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			}
		}
		if (!isSameTag) return false;
		stack || (stack = new Stack());
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	var COMPARE_PARTIAL_FLAG$2, argsTag, arrayTag, objectTag, hasOwnProperty$1;
	var init__baseIsEqualDeep = __esmMin((() => {
		init__Stack();
		init__equalArrays();
		init__equalByTag();
		init__equalObjects();
		init__getTag();
		init_isArray();
		init_isBuffer();
		init_isTypedArray();
		COMPARE_PARTIAL_FLAG$2 = 1;
		argsTag = "[object Arguments]";
		arrayTag = "[object Array]";
		objectTag = "[object Object]";
		hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsEqual.js
	/**
	* The base implementation of `_.isEqual` which supports partial comparisons
	* and tracks traversed objects.
	*
	* @private
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Unordered comparison
	*  2 - Partial comparison
	* @param {Function} [customizer] The function to customize comparisons.
	* @param {Object} [stack] Tracks traversed `value` and `other` objects.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	*/
	function baseIsEqual(value, other, bitmask, customizer, stack) {
		if (value === other) return true;
		if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	var init__baseIsEqual = __esmMin((() => {
		init__baseIsEqualDeep();
		init_isObjectLike();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseIsMatch.js
	/**
	* The base implementation of `_.isMatch` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to inspect.
	* @param {Object} source The object of property values to match.
	* @param {Array} matchData The property names, values, and compare flags to match.
	* @param {Function} [customizer] The function to customize comparisons.
	* @returns {boolean} Returns `true` if `object` is a match, else `false`.
	*/
	function baseIsMatch(object, source, matchData, customizer) {
		var index = matchData.length, length = index, noCustomizer = !customizer;
		if (object == null) return !length;
		object = Object(object);
		while (index--) {
			var data = matchData[index];
			if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
		}
		while (++index < length) {
			data = matchData[index];
			var key = data[0], objValue = object[key], srcValue = data[1];
			if (noCustomizer && data[2]) {
				if (objValue === void 0 && !(key in object)) return false;
			} else {
				var stack = new Stack();
				if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
				if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) return false;
			}
		}
		return true;
	}
	var COMPARE_PARTIAL_FLAG$1, COMPARE_UNORDERED_FLAG$1;
	var init__baseIsMatch = __esmMin((() => {
		init__Stack();
		init__baseIsEqual();
		COMPARE_PARTIAL_FLAG$1 = 1;
		COMPARE_UNORDERED_FLAG$1 = 2;
	}));
	//#endregion
	//#region node_modules/lodash-es/_isStrictComparable.js
	/**
	* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` if suitable for strict
	*  equality comparisons, else `false`.
	*/
	function isStrictComparable(value) {
		return value === value && !isObject(value);
	}
	var init__isStrictComparable = __esmMin((() => {
		init_isObject();
	}));
	//#endregion
	//#region node_modules/lodash-es/_getMatchData.js
	/**
	* Gets the property names, values, and compare flags of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the match data of `object`.
	*/
	function getMatchData(object) {
		var result = keys(object), length = result.length;
		while (length--) {
			var key = result[length], value = object[key];
			result[length] = [
				key,
				value,
				isStrictComparable(value)
			];
		}
		return result;
	}
	var init__getMatchData = __esmMin((() => {
		init__isStrictComparable();
		init_keys();
	}));
	//#endregion
	//#region node_modules/lodash-es/_matchesStrictComparable.js
	/**
	* A specialized version of `matchesProperty` for source values suitable
	* for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function matchesStrictComparable(key, srcValue) {
		return function(object) {
			if (object == null) return false;
			return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
		};
	}
	var init__matchesStrictComparable = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_baseMatches.js
	/**
	* The base implementation of `_.matches` which doesn't clone `source`.
	*
	* @private
	* @param {Object} source The object of property values to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatches(source) {
		var matchData = getMatchData(source);
		if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		return function(object) {
			return object === source || baseIsMatch(object, source, matchData);
		};
	}
	var init__baseMatches = __esmMin((() => {
		init__baseIsMatch();
		init__getMatchData();
		init__matchesStrictComparable();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseHasIn.js
	/**
	* The base implementation of `_.hasIn` without support for deep paths.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {Array|string} key The key to check.
	* @returns {boolean} Returns `true` if `key` exists, else `false`.
	*/
	function baseHasIn(object, key) {
		return object != null && key in Object(object);
	}
	var init__baseHasIn = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_hasPath.js
	/**
	* Checks if `path` exists on `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @param {Function} hasFunc The function to check properties.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	*/
	function hasPath(object, path, hasFunc) {
		path = castPath(path, object);
		var index = -1, length = path.length, result = false;
		while (++index < length) {
			var key = toKey(path[index]);
			if (!(result = object != null && hasFunc(object, key))) break;
			object = object[key];
		}
		if (result || ++index != length) return result;
		length = object == null ? 0 : object.length;
		return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
	}
	var init__hasPath = __esmMin((() => {
		init__castPath();
		init_isArguments();
		init_isArray();
		init__isIndex();
		init_isLength();
		init__toKey();
	}));
	//#endregion
	//#region node_modules/lodash-es/hasIn.js
	/**
	* Checks if `path` is a direct or inherited property of `object`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	* @example
	*
	* var object = _.create({ 'a': _.create({ 'b': 2 }) });
	*
	* _.hasIn(object, 'a');
	* // => true
	*
	* _.hasIn(object, 'a.b');
	* // => true
	*
	* _.hasIn(object, ['a', 'b']);
	* // => true
	*
	* _.hasIn(object, 'b');
	* // => false
	*/
	function hasIn(object, path) {
		return object != null && hasPath(object, path, baseHasIn);
	}
	var init_hasIn = __esmMin((() => {
		init__baseHasIn();
		init__hasPath();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseMatchesProperty.js
	/**
	* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	*
	* @private
	* @param {string} path The path of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatchesProperty(path, srcValue) {
		if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
		return function(object) {
			var objValue = get(object, path);
			return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		};
	}
	var COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG;
	var init__baseMatchesProperty = __esmMin((() => {
		init__baseIsEqual();
		init_get();
		init_hasIn();
		init__isKey();
		init__isStrictComparable();
		init__matchesStrictComparable();
		init__toKey();
		COMPARE_PARTIAL_FLAG = 1;
		COMPARE_UNORDERED_FLAG = 2;
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseProperty.js
	/**
	* The base implementation of `_.property` without support for deep paths.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function baseProperty(key) {
		return function(object) {
			return object == null ? void 0 : object[key];
		};
	}
	var init__baseProperty = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_basePropertyDeep.js
	/**
	* A specialized version of `baseProperty` which supports deep paths.
	*
	* @private
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyDeep(path) {
		return function(object) {
			return baseGet(object, path);
		};
	}
	var init__basePropertyDeep = __esmMin((() => {
		init__baseGet();
	}));
	//#endregion
	//#region node_modules/lodash-es/property.js
	/**
	* Creates a function that returns the value at `path` of a given object.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	* @example
	*
	* var objects = [
	*   { 'a': { 'b': 2 } },
	*   { 'a': { 'b': 1 } }
	* ];
	*
	* _.map(objects, _.property('a.b'));
	* // => [2, 1]
	*
	* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	* // => [1, 2]
	*/
	function property(path) {
		return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	var init_property = __esmMin((() => {
		init__baseProperty();
		init__basePropertyDeep();
		init__isKey();
		init__toKey();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseIteratee.js
	/**
	* The base implementation of `_.iteratee`.
	*
	* @private
	* @param {*} [value=_.identity] The value to convert to an iteratee.
	* @returns {Function} Returns the iteratee.
	*/
	function baseIteratee(value) {
		if (typeof value == "function") return value;
		if (value == null) return identity;
		if (typeof value == "object") return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
		return property(value);
	}
	var init__baseIteratee = __esmMin((() => {
		init__baseMatches();
		init__baseMatchesProperty();
		init_identity();
		init_isArray();
		init_property();
	}));
	//#endregion
	//#region node_modules/lodash-es/_createBaseFor.js
	/**
	* Creates a base function for methods like `_.forIn` and `_.forOwn`.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
			while (length--) {
				var key = props[fromRight ? length : ++index];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	var init__createBaseFor = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_baseFor.js
	var baseFor;
	var init__baseFor = __esmMin((() => {
		init__createBaseFor();
		baseFor = createBaseFor();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseForOwn.js
	/**
	* The base implementation of `_.forOwn` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Object} Returns `object`.
	*/
	function baseForOwn(object, iteratee) {
		return object && baseFor(object, iteratee, keys);
	}
	var init__baseForOwn = __esmMin((() => {
		init__baseFor();
		init_keys();
	}));
	//#endregion
	//#region node_modules/lodash-es/_createBaseEach.js
	/**
	* Creates a `baseEach` or `baseEachRight` function.
	*
	* @private
	* @param {Function} eachFunc The function to iterate over a collection.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseEach(eachFunc, fromRight) {
		return function(collection, iteratee) {
			if (collection == null) return collection;
			if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
			var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
			while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
			return collection;
		};
	}
	var init__createBaseEach = __esmMin((() => {
		init_isArrayLike();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseEach.js
	var baseEach;
	var init__baseEach = __esmMin((() => {
		init__baseForOwn();
		init__createBaseEach();
		baseEach = createBaseEach(baseForOwn);
	}));
	//#endregion
	//#region node_modules/lodash-es/_assignMergeValue.js
	/**
	* This function is like `assignValue` except that it doesn't assign
	* `undefined` values.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignMergeValue(object, key, value) {
		if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	var init__assignMergeValue = __esmMin((() => {
		init__baseAssignValue();
		init_eq();
	}));
	//#endregion
	//#region node_modules/lodash-es/isArrayLikeObject.js
	/**
	* This method is like `_.isArrayLike` except that it also checks if `value`
	* is an object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an array-like object,
	*  else `false`.
	* @example
	*
	* _.isArrayLikeObject([1, 2, 3]);
	* // => true
	*
	* _.isArrayLikeObject(document.body.children);
	* // => true
	*
	* _.isArrayLikeObject('abc');
	* // => false
	*
	* _.isArrayLikeObject(_.noop);
	* // => false
	*/
	function isArrayLikeObject(value) {
		return isObjectLike(value) && isArrayLike(value);
	}
	var init_isArrayLikeObject = __esmMin((() => {
		init_isArrayLike();
		init_isObjectLike();
	}));
	//#endregion
	//#region node_modules/lodash-es/_safeGet.js
	/**
	* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function safeGet(object, key) {
		if (key === "constructor" && typeof object[key] === "function") return;
		if (key == "__proto__") return;
		return object[key];
	}
	var init__safeGet = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/toPlainObject.js
	/**
	* Converts `value` to a plain object flattening inherited enumerable string
	* keyed properties of `value` to own properties of the plain object.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {Object} Returns the converted plain object.
	* @example
	*
	* function Foo() {
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.assign({ 'a': 1 }, new Foo);
	* // => { 'a': 1, 'b': 2 }
	*
	* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	* // => { 'a': 1, 'b': 2, 'c': 3 }
	*/
	function toPlainObject(value) {
		return copyObject(value, keysIn(value));
	}
	var init_toPlainObject = __esmMin((() => {
		init__copyObject();
		init_keysIn();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseMergeDeep.js
	/**
	* A specialized version of `baseMerge` for arrays and objects which performs
	* deep merges and tracks traversed objects enabling objects with circular
	* references to be merged.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {string} key The key of the value to merge.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} mergeFunc The function to merge values.
	* @param {Function} [customizer] The function to customize assigned values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
		if (stacked) {
			assignMergeValue(object, key, stacked);
			return;
		}
		var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
		var isCommon = newValue === void 0;
		if (isCommon) {
			var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
			newValue = srcValue;
			if (isArr || isBuff || isTyped) if (isArray$1(objValue)) newValue = objValue;
			else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
			else if (isBuff) {
				isCommon = false;
				newValue = cloneBuffer(srcValue, true);
			} else if (isTyped) {
				isCommon = false;
				newValue = cloneTypedArray(srcValue, true);
			} else newValue = [];
			else if (isPlainObject$1(srcValue) || isArguments(srcValue)) {
				newValue = objValue;
				if (isArguments(objValue)) newValue = toPlainObject(objValue);
				else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
			} else isCommon = false;
		}
		if (isCommon) {
			stack.set(srcValue, newValue);
			mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
			stack["delete"](srcValue);
		}
		assignMergeValue(object, key, newValue);
	}
	var init__baseMergeDeep = __esmMin((() => {
		init__assignMergeValue();
		init__cloneBuffer();
		init__cloneTypedArray();
		init__copyArray();
		init__initCloneObject();
		init_isArguments();
		init_isArray();
		init_isArrayLikeObject();
		init_isBuffer();
		init_isFunction();
		init_isObject();
		init_isPlainObject();
		init_isTypedArray();
		init__safeGet();
		init_toPlainObject();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseMerge.js
	/**
	* The base implementation of `_.merge` without support for multiple sources.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} [customizer] The function to customize merged values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMerge(object, source, srcIndex, customizer, stack) {
		if (object === source) return;
		baseFor(source, function(srcValue, key) {
			stack || (stack = new Stack());
			if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
			else {
				var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
				if (newValue === void 0) newValue = srcValue;
				assignMergeValue(object, key, newValue);
			}
		}, keysIn);
	}
	var init__baseMerge = __esmMin((() => {
		init__Stack();
		init__assignMergeValue();
		init__baseFor();
		init__baseMergeDeep();
		init_isObject();
		init_keysIn();
		init__safeGet();
	}));
	//#endregion
	//#region node_modules/lodash-es/last.js
	/**
	* Gets the last element of `array`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to query.
	* @returns {*} Returns the last element of `array`.
	* @example
	*
	* _.last([1, 2, 3]);
	* // => 3
	*/
	function last(array) {
		var length = array == null ? 0 : array.length;
		return length ? array[length - 1] : void 0;
	}
	var init_last = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/endsWith.js
	/**
	* Checks if `string` ends with the given target string.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to inspect.
	* @param {string} [target] The string to search for.
	* @param {number} [position=string.length] The position to search up to.
	* @returns {boolean} Returns `true` if `string` ends with `target`,
	*  else `false`.
	* @example
	*
	* _.endsWith('abc', 'c');
	* // => true
	*
	* _.endsWith('abc', 'b');
	* // => false
	*
	* _.endsWith('abc', 'b', 2);
	* // => true
	*/
	function endsWith(string, target, position) {
		string = toString(string);
		target = baseToString(target);
		var length = string.length;
		position = position === void 0 ? length : baseClamp(toInteger(position), 0, length);
		var end = position;
		position -= target.length;
		return position >= 0 && string.slice(position, end) == target;
	}
	var init_endsWith = __esmMin((() => {
		init__baseClamp();
		init__baseToString();
		init_toInteger();
		init_toString();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseMap.js
	/**
	* The base implementation of `_.map` without support for iteratee shorthands.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function baseMap(collection, iteratee) {
		var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
		baseEach(collection, function(value, key, collection) {
			result[++index] = iteratee(value, key, collection);
		});
		return result;
	}
	var init__baseMap = __esmMin((() => {
		init__baseEach();
		init_isArrayLike();
	}));
	//#endregion
	//#region node_modules/lodash-es/map.js
	/**
	* Creates an array of values by running each element in `collection` thru
	* `iteratee`. The iteratee is invoked with three arguments:
	* (value, index|key, collection).
	*
	* Many lodash methods are guarded to work as iteratees for methods like
	* `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	*
	* The guarded methods are:
	* `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	* `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	* `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	* `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [iteratee=_.identity] The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	* @example
	*
	* function square(n) {
	*   return n * n;
	* }
	*
	* _.map([4, 8], square);
	* // => [16, 64]
	*
	* _.map({ 'a': 4, 'b': 8 }, square);
	* // => [16, 64] (iteration order is not guaranteed)
	*
	* var users = [
	*   { 'user': 'barney' },
	*   { 'user': 'fred' }
	* ];
	*
	* // The `_.property` iteratee shorthand.
	* _.map(users, 'user');
	* // => ['barney', 'fred']
	*/
	function map(collection, iteratee) {
		return (isArray$1(collection) ? arrayMap : baseMap)(collection, baseIteratee(iteratee, 3));
	}
	var init_map = __esmMin((() => {
		init__arrayMap();
		init__baseIteratee();
		init__baseMap();
		init_isArray();
	}));
	//#endregion
	//#region node_modules/lodash-es/isString.js
	/**
	* Checks if `value` is classified as a `String` primitive or object.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a string, else `false`.
	* @example
	*
	* _.isString('abc');
	* // => true
	*
	* _.isString(1);
	* // => false
	*/
	function isString(value) {
		return typeof value == "string" || !isArray$1(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
	}
	var stringTag;
	var init_isString = __esmMin((() => {
		init__baseGetTag();
		init_isArray();
		init_isObjectLike();
		stringTag = "[object String]";
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseValues.js
	/**
	* The base implementation of `_.values` and `_.valuesIn` which creates an
	* array of `object` property values corresponding to the property names
	* of `props`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array} props The property names to get values for.
	* @returns {Object} Returns the array of property values.
	*/
	function baseValues(object, props) {
		return arrayMap(props, function(key) {
			return object[key];
		});
	}
	var init__baseValues = __esmMin((() => {
		init__arrayMap();
	}));
	//#endregion
	//#region node_modules/lodash-es/values.js
	/**
	* Creates an array of the own enumerable string keyed property values of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property values.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.values(new Foo);
	* // => [1, 2] (iteration order is not guaranteed)
	*
	* _.values('hi');
	* // => ['h', 'i']
	*/
	function values(object) {
		return object == null ? [] : baseValues(object, keys(object));
	}
	var init_values = __esmMin((() => {
		init__baseValues();
		init_keys();
	}));
	//#endregion
	//#region node_modules/lodash-es/includes.js
	/**
	* Checks if `value` is in `collection`. If `collection` is a string, it's
	* checked for a substring of `value`, otherwise
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* is used for equality comparisons. If `fromIndex` is negative, it's used as
	* the offset from the end of `collection`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Collection
	* @param {Array|Object|string} collection The collection to inspect.
	* @param {*} value The value to search for.
	* @param {number} [fromIndex=0] The index to search from.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	* @returns {boolean} Returns `true` if `value` is found, else `false`.
	* @example
	*
	* _.includes([1, 2, 3], 1);
	* // => true
	*
	* _.includes([1, 2, 3], 1, 2);
	* // => false
	*
	* _.includes({ 'a': 1, 'b': 2 }, 1);
	* // => true
	*
	* _.includes('abcd', 'bc');
	* // => true
	*/
	function includes(collection, value, fromIndex, guard) {
		collection = isArrayLike(collection) ? collection : values(collection);
		fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
		var length = collection.length;
		if (fromIndex < 0) fromIndex = nativeMax(length + fromIndex, 0);
		return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
	}
	var nativeMax;
	var init_includes = __esmMin((() => {
		init__baseIndexOf();
		init_isArrayLike();
		init_isString();
		init_toInteger();
		init_values();
		nativeMax = Math.max;
	}));
	//#endregion
	//#region node_modules/lodash-es/isBoolean.js
	/**
	* Checks if `value` is classified as a boolean primitive or object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	* @example
	*
	* _.isBoolean(false);
	* // => true
	*
	* _.isBoolean(null);
	* // => false
	*/
	function isBoolean(value) {
		return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
	}
	var boolTag;
	var init_isBoolean = __esmMin((() => {
		init__baseGetTag();
		init_isObjectLike();
		boolTag = "[object Boolean]";
	}));
	//#endregion
	//#region node_modules/lodash-es/isEmpty.js
	/**
	* Checks if `value` is an empty object, collection, map, or set.
	*
	* Objects are considered empty if they have no own enumerable string keyed
	* properties.
	*
	* Array-like values such as `arguments` objects, arrays, buffers, strings, or
	* jQuery-like collections are considered empty if they have a `length` of `0`.
	* Similarly, maps and sets are considered empty if they have a `size` of `0`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is empty, else `false`.
	* @example
	*
	* _.isEmpty(null);
	* // => true
	*
	* _.isEmpty(true);
	* // => true
	*
	* _.isEmpty(1);
	* // => true
	*
	* _.isEmpty([1, 2, 3]);
	* // => false
	*
	* _.isEmpty({ 'a': 1 });
	* // => false
	*/
	function isEmpty(value) {
		if (value == null) return true;
		if (isArrayLike(value) && (isArray$1(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
		var tag = _getTag_default(value);
		if (tag == mapTag || tag == setTag) return !value.size;
		if (isPrototype(value)) return !baseKeys(value).length;
		for (var key in value) if (hasOwnProperty.call(value, key)) return false;
		return true;
	}
	var mapTag, setTag, hasOwnProperty;
	var init_isEmpty = __esmMin((() => {
		init__baseKeys();
		init__getTag();
		init_isArguments();
		init_isArray();
		init_isArrayLike();
		init_isBuffer();
		init__isPrototype();
		init_isTypedArray();
		mapTag = "[object Map]";
		setTag = "[object Set]";
		hasOwnProperty = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/isNumber.js
	/**
	* Checks if `value` is classified as a `Number` primitive or object.
	*
	* **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	* classified as numbers, use the `_.isFinite` method.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a number, else `false`.
	* @example
	*
	* _.isNumber(3);
	* // => true
	*
	* _.isNumber(Number.MIN_VALUE);
	* // => true
	*
	* _.isNumber(Infinity);
	* // => true
	*
	* _.isNumber('3');
	* // => false
	*/
	function isNumber(value) {
		return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
	}
	var numberTag;
	var init_isNumber = __esmMin((() => {
		init__baseGetTag();
		init_isObjectLike();
		numberTag = "[object Number]";
	}));
	//#endregion
	//#region node_modules/lodash-es/merge.js
	var merge;
	var init_merge = __esmMin((() => {
		init__baseMerge();
		init__createAssigner();
		merge = createAssigner(function(object, source, srcIndex) {
			baseMerge(object, source, srcIndex);
		});
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseSortBy.js
	/**
	* The base implementation of `_.sortBy` which uses `comparer` to define the
	* sort order of `array` and replaces criteria objects with their corresponding
	* values.
	*
	* @private
	* @param {Array} array The array to sort.
	* @param {Function} comparer The function to define sort order.
	* @returns {Array} Returns `array`.
	*/
	function baseSortBy(array, comparer) {
		var length = array.length;
		array.sort(comparer);
		while (length--) array[length] = array[length].value;
		return array;
	}
	var init__baseSortBy = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_compareAscending.js
	/**
	* Compares values to sort them in ascending order.
	*
	* @private
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {number} Returns the sort order indicator for `value`.
	*/
	function compareAscending(value, other) {
		if (value !== other) {
			var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
			var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
			if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
			if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
		}
		return 0;
	}
	var init__compareAscending = __esmMin((() => {
		init_isSymbol();
	}));
	//#endregion
	//#region node_modules/lodash-es/_compareMultiple.js
	/**
	* Used by `_.orderBy` to compare multiple properties of a value to another
	* and stable sort them.
	*
	* If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	* specify an order of "desc" for descending or "asc" for ascending sort order
	* of corresponding values.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {boolean[]|string[]} orders The order to sort by for each property.
	* @returns {number} Returns the sort order indicator for `object`.
	*/
	function compareMultiple(object, other, orders) {
		var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
		while (++index < length) {
			var result = compareAscending(objCriteria[index], othCriteria[index]);
			if (result) {
				if (index >= ordersLength) return result;
				return result * (orders[index] == "desc" ? -1 : 1);
			}
		}
		return object.index - other.index;
	}
	var init__compareMultiple = __esmMin((() => {
		init__compareAscending();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseOrderBy.js
	/**
	* The base implementation of `_.orderBy` without param guards.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	* @param {string[]} orders The sort orders of `iteratees`.
	* @returns {Array} Returns the new sorted array.
	*/
	function baseOrderBy(collection, iteratees, orders) {
		if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee) {
			if (isArray$1(iteratee)) return function(value) {
				return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
			};
			return iteratee;
		});
		else iteratees = [identity];
		var index = -1;
		iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
		return baseSortBy(baseMap(collection, function(value, key, collection) {
			return {
				"criteria": arrayMap(iteratees, function(iteratee) {
					return iteratee(value);
				}),
				"index": ++index,
				"value": value
			};
		}), function(object, other) {
			return compareMultiple(object, other, orders);
		});
	}
	var init__baseOrderBy = __esmMin((() => {
		init__arrayMap();
		init__baseGet();
		init__baseIteratee();
		init__baseMap();
		init__baseSortBy();
		init__baseUnary();
		init__compareMultiple();
		init_identity();
		init_isArray();
	}));
	//#endregion
	//#region node_modules/lodash-es/sortBy.js
	var sortBy;
	var init_sortBy = __esmMin((() => {
		init__baseFlatten();
		init__baseOrderBy();
		init__baseRest();
		init__isIterateeCall();
		sortBy = baseRest(function(collection, iteratees) {
			if (collection == null) return [];
			var length = iteratees.length;
			if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
			else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [iteratees[0]];
			return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
		});
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseZipObject.js
	/**
	* This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	*
	* @private
	* @param {Array} props The property identifiers.
	* @param {Array} values The property values.
	* @param {Function} assignFunc The function to assign values.
	* @returns {Object} Returns the new object.
	*/
	function baseZipObject(props, values, assignFunc) {
		var index = -1, length = props.length, valsLength = values.length, result = {};
		while (++index < length) {
			var value = index < valsLength ? values[index] : void 0;
			assignFunc(result, props[index], value);
		}
		return result;
	}
	var init__baseZipObject = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/zipObject.js
	/**
	* This method is like `_.fromPairs` except that it accepts two arrays,
	* one of property identifiers and one of corresponding values.
	*
	* @static
	* @memberOf _
	* @since 0.4.0
	* @category Array
	* @param {Array} [props=[]] The property identifiers.
	* @param {Array} [values=[]] The property values.
	* @returns {Object} Returns the new object.
	* @example
	*
	* _.zipObject(['a', 'b'], [1, 2]);
	* // => { 'a': 1, 'b': 2 }
	*/
	function zipObject(props, values) {
		return baseZipObject(props || [], values || [], assignValue);
	}
	var init_zipObject = __esmMin((() => {
		init__assignValue();
		init__baseZipObject();
	}));
	//#endregion
	//#region node_modules/lodash-es/lodash.js
	var init_lodash = __esmMin((() => {
		init_isSymbol();
		init__baseToString();
		init_toInteger();
		init_identity();
		init__WeakMap();
		init__baseCreate();
		init_isObject();
		init__root();
		init__apply();
		init_isArray();
		init_isObjectLike();
		init__copyArray();
		init__shortOut();
		init__setToString();
		init__baseIndexOf();
		init__isIndex();
		init__assignValue();
		init__copyObject();
		init__createAssigner();
		init_isArrayLike();
		init__isPrototype();
		init_keys();
		init_keysIn();
		init_get();
		init__baseFlatten();
		init__overRest();
		init__baseRest();
		init__baseGetTag();
		init_isPlainObject();
		init__baseAssignValue();
		init__toKey();
		init_toString();
		init_toNumber();
		init__isIterateeCall();
		init__baseClamp();
		init__Stack();
		init__cloneBuffer();
		init__getSymbols();
		init__arrayPush();
		init__getPrototype();
		init_stubArray();
		init__getAllKeys();
		init__baseGetAllKeys();
		init__getTag();
		init__cloneArrayBuffer();
		init__Symbol();
		init__cloneTypedArray();
		init__initCloneObject();
		init_isBuffer();
		init__baseUnary();
		init__nodeUtil();
		init__arrayMap();
		init__baseIteratee();
		init_constant();
		init__baseEach();
		init_eq();
		init__baseMerge();
		init__SetCache();
		init__cacheHas();
		init_isArrayLikeObject();
		init_last();
		init__createBaseFor();
		init__createBaseEach();
		init_endsWith();
		init__mapToArray();
		init__arrayFilter();
		init__baseFindIndex();
		init__baseForOwn();
		init_map();
		init__baseFor();
		init_isFunction();
		init__hasPath();
		init_hasIn();
		init_toFinite();
		init_includes();
		init__castPath();
		init__baseGet();
		init_isArguments();
		init_isBoolean();
		init_isEmpty();
		init__baseIsEqual();
		init_isLength();
		init__baseIsMatch();
		init__getMatchData();
		init_isNumber();
		init__baseIsNative();
		init__coreJsData();
		init_stubFalse();
		init_isString();
		init_isTypedArray();
		init__baseIsNaN();
		init__baseMatches();
		init__baseMatchesProperty();
		init_memoize();
		init_merge();
		init__setToArray();
		init_values();
		init__baseOrderBy();
		init__arraySome();
		init__baseProperty();
		init_property();
		init__compareAscending();
		init__baseKeys();
		init_sortBy();
		init__baseValues();
		init__baseTimes();
		init__stringToPath();
		init_toPlainObject();
		init__baseTrim();
		init__trimmedEndIndex();
		init__Set();
		init_zipObject();
		init__baseZipObject();
	}));
	/**
	* @license
	* Lodash (Custom Build) <https://lodash.com/>
	* Build: `lodash modularize exports="es" --repo lodash/lodash#4.18.1 -o ./`
	* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	* Released under MIT license <https://lodash.com/license>
	* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	*/
	//#endregion
	//#region app/javascript/lib/present.js
	var present_exports = /* @__PURE__ */ __exportAll({
		presence: () => presence,
		present: () => present$1
	});
	var present$1, presence;
	var init_present = __esmMin((() => {
		init_lodash();
		present$1 = (val) => val != null && (!isEmpty(val) || isNumber(val) || isBoolean(val) || isFunction(val));
		presence = (val) => present$1(val) ? val : void 0;
	}));
	//#endregion
	//#region node_modules/object-assign/index.js
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;
		function toObject(val) {
			if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(val);
		}
		function shouldUseNative() {
			try {
				if (!Object.assign) return false;
				var test1 = /* @__PURE__ */ new String("abc");
				test1[5] = "de";
				if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
				var test2 = {};
				for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
				if (Object.getOwnPropertyNames(test2).map(function(n) {
					return test2[n];
				}).join("") !== "0123456789") return false;
				var test3 = {};
				"abcdefghijklmnopqrst".split("").forEach(function(letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
				return true;
			} catch (err) {
				return false;
			}
		}
		module.exports = shouldUseNative() ? Object.assign : function(target, source) {
			var from;
			var to = toObject(target);
			var symbols;
			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);
				for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
				}
			}
			return to;
		};
	}));
	//#endregion
	//#region node_modules/react/cjs/react.production.min.js
	/** @license React v16.14.0
	* react.production.min.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
		var l = require_object_assign();
		var n = "function" === typeof Symbol && Symbol.for;
		var p = n ? Symbol.for("react.element") : 60103;
		var q = n ? Symbol.for("react.portal") : 60106;
		var r = n ? Symbol.for("react.fragment") : 60107;
		var t = n ? Symbol.for("react.strict_mode") : 60108;
		var u = n ? Symbol.for("react.profiler") : 60114;
		var v = n ? Symbol.for("react.provider") : 60109;
		var w = n ? Symbol.for("react.context") : 60110;
		var x = n ? Symbol.for("react.forward_ref") : 60112;
		var y = n ? Symbol.for("react.suspense") : 60113;
		var z = n ? Symbol.for("react.memo") : 60115;
		var A = n ? Symbol.for("react.lazy") : 60116;
		var B = "function" === typeof Symbol && Symbol.iterator;
		function C(a) {
			for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
			return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		}
		var D = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		};
		var E = {};
		function F(a, b, c) {
			this.props = a;
			this.context = b;
			this.refs = E;
			this.updater = c || D;
		}
		F.prototype.isReactComponent = {};
		F.prototype.setState = function(a, b) {
			if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
			this.updater.enqueueSetState(this, a, b, "setState");
		};
		F.prototype.forceUpdate = function(a) {
			this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};
		function G() {}
		G.prototype = F.prototype;
		function H(a, b, c) {
			this.props = a;
			this.context = b;
			this.refs = E;
			this.updater = c || D;
		}
		var I = H.prototype = new G();
		I.constructor = H;
		l(I, F.prototype);
		I.isPureReactComponent = !0;
		var J = { current: null };
		var K = Object.prototype.hasOwnProperty;
		var L = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};
		function M(a, b, c) {
			var e, d = {}, g = null, k = null;
			if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
			var f = arguments.length - 2;
			if (1 === f) d.children = c;
			else if (1 < f) {
				for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];
				d.children = h;
			}
			if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
			return {
				$$typeof: p,
				type: a,
				key: g,
				ref: k,
				props: d,
				_owner: J.current
			};
		}
		function N(a, b) {
			return {
				$$typeof: p,
				type: a.type,
				key: b,
				ref: a.ref,
				props: a.props,
				_owner: a._owner
			};
		}
		function O(a) {
			return "object" === typeof a && null !== a && a.$$typeof === p;
		}
		function escape(a) {
			var b = {
				"=": "=0",
				":": "=2"
			};
			return "$" + ("" + a).replace(/[=:]/g, function(a) {
				return b[a];
			});
		}
		var P = /\/+/g;
		var Q = [];
		function R(a, b, c, e) {
			if (Q.length) {
				var d = Q.pop();
				d.result = a;
				d.keyPrefix = b;
				d.func = c;
				d.context = e;
				d.count = 0;
				return d;
			}
			return {
				result: a,
				keyPrefix: b,
				func: c,
				context: e,
				count: 0
			};
		}
		function S(a) {
			a.result = null;
			a.keyPrefix = null;
			a.func = null;
			a.context = null;
			a.count = 0;
			10 > Q.length && Q.push(a);
		}
		function T(a, b, c, e) {
			var d = typeof a;
			if ("undefined" === d || "boolean" === d) a = null;
			var g = !1;
			if (null === a) g = !0;
			else switch (d) {
				case "string":
				case "number":
					g = !0;
					break;
				case "object": switch (a.$$typeof) {
					case p:
					case q: g = !0;
				}
			}
			if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
			g = 0;
			b = "" === b ? "." : b + ":";
			if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
				d = a[k];
				var f = b + U(d, k);
				g += T(d, f, c, e);
			}
			else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
			else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
			return g;
		}
		function V(a, b, c) {
			return null == a ? 0 : T(a, "", b, c);
		}
		function U(a, b) {
			return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
		}
		function W(a, b) {
			a.func.call(a.context, b, a.count++);
		}
		function aa(a, b, c) {
			var e = a.result, d = a.keyPrefix;
			a = a.func.call(a.context, b, a.count++);
			Array.isArray(a) ? X(a, e, c, function(a) {
				return a;
			}) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
		}
		function X(a, b, c, e, d) {
			var g = "";
			null != c && (g = ("" + c).replace(P, "$&/") + "/");
			b = R(b, g, e, d);
			V(a, aa, b);
			S(b);
		}
		var Y = { current: null };
		function Z() {
			var a = Y.current;
			if (null === a) throw Error(C(321));
			return a;
		}
		var ba = {
			ReactCurrentDispatcher: Y,
			ReactCurrentBatchConfig: { suspense: null },
			ReactCurrentOwner: J,
			IsSomeRendererActing: { current: !1 },
			assign: l
		};
		exports.Children = {
			map: function(a, b, c) {
				if (null == a) return a;
				var e = [];
				X(a, e, null, b, c);
				return e;
			},
			forEach: function(a, b, c) {
				if (null == a) return a;
				b = R(null, null, b, c);
				V(a, W, b);
				S(b);
			},
			count: function(a) {
				return V(a, function() {
					return null;
				}, null);
			},
			toArray: function(a) {
				var b = [];
				X(a, b, null, function(a) {
					return a;
				});
				return b;
			},
			only: function(a) {
				if (!O(a)) throw Error(C(143));
				return a;
			}
		};
		exports.Component = F;
		exports.Fragment = r;
		exports.Profiler = u;
		exports.PureComponent = H;
		exports.StrictMode = t;
		exports.Suspense = y;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
		exports.cloneElement = function(a, b, c) {
			if (null === a || void 0 === a) throw Error(C(267, a));
			var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner;
			if (null != b) {
				void 0 !== b.ref && (g = b.ref, k = J.current);
				void 0 !== b.key && (d = "" + b.key);
				if (a.type && a.type.defaultProps) var f = a.type.defaultProps;
				for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
			}
			var h = arguments.length - 2;
			if (1 === h) e.children = c;
			else if (1 < h) {
				f = Array(h);
				for (var m = 0; m < h; m++) f[m] = arguments[m + 2];
				e.children = f;
			}
			return {
				$$typeof: p,
				type: a.type,
				key: d,
				ref: g,
				props: e,
				_owner: k
			};
		};
		exports.createContext = function(a, b) {
			void 0 === b && (b = null);
			a = {
				$$typeof: w,
				_calculateChangedBits: b,
				_currentValue: a,
				_currentValue2: a,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			};
			a.Provider = {
				$$typeof: v,
				_context: a
			};
			return a.Consumer = a;
		};
		exports.createElement = M;
		exports.createFactory = function(a) {
			var b = M.bind(null, a);
			b.type = a;
			return b;
		};
		exports.createRef = function() {
			return { current: null };
		};
		exports.forwardRef = function(a) {
			return {
				$$typeof: x,
				render: a
			};
		};
		exports.isValidElement = O;
		exports.lazy = function(a) {
			return {
				$$typeof: A,
				_ctor: a,
				_status: -1,
				_result: null
			};
		};
		exports.memo = function(a, b) {
			return {
				$$typeof: z,
				type: a,
				compare: void 0 === b ? null : b
			};
		};
		exports.useCallback = function(a, b) {
			return Z().useCallback(a, b);
		};
		exports.useContext = function(a, b) {
			return Z().useContext(a, b);
		};
		exports.useDebugValue = function() {};
		exports.useEffect = function(a, b) {
			return Z().useEffect(a, b);
		};
		exports.useImperativeHandle = function(a, b, c) {
			return Z().useImperativeHandle(a, b, c);
		};
		exports.useLayoutEffect = function(a, b) {
			return Z().useLayoutEffect(a, b);
		};
		exports.useMemo = function(a, b) {
			return Z().useMemo(a, b);
		};
		exports.useReducer = function(a, b, c) {
			return Z().useReducer(a, b, c);
		};
		exports.useRef = function(a) {
			return Z().useRef(a);
		};
		exports.useState = function(a) {
			return Z().useState(a);
		};
		exports.version = "16.14.0";
	}));
	//#endregion
	//#region node_modules/react/index.js
	var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_production_min();
	}));
	//#endregion
	//#region node_modules/scheduler/cjs/scheduler.production.min.js
	/** @license React v0.19.1
	* scheduler.production.min.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
		var f;
		var g;
		var h;
		var k;
		var l;
		if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
			var p = null, q = null, t = function() {
				if (null !== p) try {
					var a = exports.unstable_now();
					p(!0, a);
					p = null;
				} catch (b) {
					throw setTimeout(t, 0), b;
				}
			}, u = Date.now();
			exports.unstable_now = function() {
				return Date.now() - u;
			};
			f = function(a) {
				null !== p ? setTimeout(f, 0, a) : (p = a, setTimeout(t, 0));
			};
			g = function(a, b) {
				q = setTimeout(a, b);
			};
			h = function() {
				clearTimeout(q);
			};
			k = function() {
				return !1;
			};
			l = exports.unstable_forceFrameRate = function() {};
		} else {
			var w = window.performance, x = window.Date, y = window.setTimeout, z = window.clearTimeout;
			if ("undefined" !== typeof console) {
				var A = window.cancelAnimationFrame;
				"function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
				"function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
			}
			if ("object" === typeof w && "function" === typeof w.now) exports.unstable_now = function() {
				return w.now();
			};
			else {
				var B = x.now();
				exports.unstable_now = function() {
					return x.now() - B;
				};
			}
			var C = !1, D = null, E = -1, F = 5, G = 0;
			k = function() {
				return exports.unstable_now() >= G;
			};
			l = function() {};
			exports.unstable_forceFrameRate = function(a) {
				0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F = 0 < a ? Math.floor(1e3 / a) : 5;
			};
			var H = new MessageChannel(), I = H.port2;
			H.port1.onmessage = function() {
				if (null !== D) {
					var a = exports.unstable_now();
					G = a + F;
					try {
						D(!0, a) ? I.postMessage(null) : (C = !1, D = null);
					} catch (b) {
						throw I.postMessage(null), b;
					}
				} else C = !1;
			};
			f = function(a) {
				D = a;
				C || (C = !0, I.postMessage(null));
			};
			g = function(a, b) {
				E = y(function() {
					a(exports.unstable_now());
				}, b);
			};
			h = function() {
				z(E);
				E = -1;
			};
		}
		function J(a, b) {
			var c = a.length;
			a.push(b);
			a: for (;;) {
				var d = c - 1 >>> 1, e = a[d];
				if (void 0 !== e && 0 < K(e, b)) a[d] = b, a[c] = e, c = d;
				else break a;
			}
		}
		function L(a) {
			a = a[0];
			return void 0 === a ? null : a;
		}
		function M(a) {
			var b = a[0];
			if (void 0 !== b) {
				var c = a.pop();
				if (c !== b) {
					a[0] = c;
					a: for (var d = 0, e = a.length; d < e;) {
						var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
						if (void 0 !== n && 0 > K(n, c)) void 0 !== r && 0 > K(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
						else if (void 0 !== r && 0 > K(r, c)) a[d] = r, a[v] = c, d = v;
						else break a;
					}
				}
				return b;
			}
			return null;
		}
		function K(a, b) {
			var c = a.sortIndex - b.sortIndex;
			return 0 !== c ? c : a.id - b.id;
		}
		var N = [];
		var O = [];
		var P = 1;
		var Q = null;
		var R = 3;
		var S = !1;
		var T = !1;
		var U = !1;
		function V(a) {
			for (var b = L(O); null !== b;) {
				if (null === b.callback) M(O);
				else if (b.startTime <= a) M(O), b.sortIndex = b.expirationTime, J(N, b);
				else break;
				b = L(O);
			}
		}
		function W(a) {
			U = !1;
			V(a);
			if (!T) if (null !== L(N)) T = !0, f(X);
			else {
				var b = L(O);
				null !== b && g(W, b.startTime - a);
			}
		}
		function X(a, b) {
			T = !1;
			U && (U = !1, h());
			S = !0;
			var c = R;
			try {
				V(b);
				for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || a && !k());) {
					var d = Q.callback;
					if (null !== d) {
						Q.callback = null;
						R = Q.priorityLevel;
						var e = d(Q.expirationTime <= b);
						b = exports.unstable_now();
						"function" === typeof e ? Q.callback = e : Q === L(N) && M(N);
						V(b);
					} else M(N);
					Q = L(N);
				}
				if (null !== Q) var m = !0;
				else {
					var n = L(O);
					null !== n && g(W, n.startTime - b);
					m = !1;
				}
				return m;
			} finally {
				Q = null, R = c, S = !1;
			}
		}
		function Y(a) {
			switch (a) {
				case 1: return -1;
				case 2: return 250;
				case 5: return 1073741823;
				case 4: return 1e4;
				default: return 5e3;
			}
		}
		var Z = l;
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function(a) {
			a.callback = null;
		};
		exports.unstable_continueExecution = function() {
			T || S || (T = !0, f(X));
		};
		exports.unstable_getCurrentPriorityLevel = function() {
			return R;
		};
		exports.unstable_getFirstCallbackNode = function() {
			return L(N);
		};
		exports.unstable_next = function(a) {
			switch (R) {
				case 1:
				case 2:
				case 3:
					var b = 3;
					break;
				default: b = R;
			}
			var c = R;
			R = b;
			try {
				return a();
			} finally {
				R = c;
			}
		};
		exports.unstable_pauseExecution = function() {};
		exports.unstable_requestPaint = Z;
		exports.unstable_runWithPriority = function(a, b) {
			switch (a) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: break;
				default: a = 3;
			}
			var c = R;
			R = a;
			try {
				return b();
			} finally {
				R = c;
			}
		};
		exports.unstable_scheduleCallback = function(a, b, c) {
			var d = exports.unstable_now();
			if ("object" === typeof c && null !== c) {
				var e = c.delay;
				e = "number" === typeof e && 0 < e ? d + e : d;
				c = "number" === typeof c.timeout ? c.timeout : Y(a);
			} else c = Y(a), e = d;
			c = e + c;
			a = {
				id: P++,
				callback: b,
				priorityLevel: a,
				startTime: e,
				expirationTime: c,
				sortIndex: -1
			};
			e > d ? (a.sortIndex = e, J(O, a), null === L(N) && a === L(O) && (U ? h() : U = !0, g(W, e - d))) : (a.sortIndex = c, J(N, a), T || S || (T = !0, f(X)));
			return a;
		};
		exports.unstable_shouldYield = function() {
			var a = exports.unstable_now();
			V(a);
			var b = L(N);
			return b !== Q && null !== Q && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q.expirationTime || k();
		};
		exports.unstable_wrapCallback = function(a) {
			var b = R;
			return function() {
				var c = R;
				R = b;
				try {
					return a.apply(this, arguments);
				} finally {
					R = c;
				}
			};
		};
	}));
	//#endregion
	//#region node_modules/scheduler/index.js
	var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_scheduler_production_min();
	}));
	//#endregion
	//#region node_modules/react-dom/cjs/react-dom.production.min.js
	/** @license React v16.14.0
	* react-dom.production.min.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
		var aa = require_react();
		var n = require_object_assign();
		var r = require_scheduler();
		function u(a) {
			for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
			return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		}
		if (!aa) throw Error(u(227));
		function ba(a, b, c, d, e, f, g, h, k) {
			var l = Array.prototype.slice.call(arguments, 3);
			try {
				b.apply(c, l);
			} catch (m) {
				this.onError(m);
			}
		}
		var da = !1;
		var ea = null;
		var fa = !1;
		var ha = null;
		var ia = { onError: function(a) {
			da = !0;
			ea = a;
		} };
		function ja(a, b, c, d, e, f, g, h, k) {
			da = !1;
			ea = null;
			ba.apply(ia, arguments);
		}
		function ka(a, b, c, d, e, f, g, h, k) {
			ja.apply(this, arguments);
			if (da) {
				if (da) {
					var l = ea;
					da = !1;
					ea = null;
				} else throw Error(u(198));
				fa || (fa = !0, ha = l);
			}
		}
		var la = null;
		var ma = null;
		var na = null;
		function oa(a, b, c) {
			var d = a.type || "unknown-event";
			a.currentTarget = na(c);
			ka(d, b, void 0, a);
			a.currentTarget = null;
		}
		var pa = null;
		var qa = {};
		function ra() {
			if (pa) for (var a in qa) {
				var b = qa[a], c = pa.indexOf(a);
				if (!(-1 < c)) throw Error(u(96, a));
				if (!sa[c]) {
					if (!b.extractEvents) throw Error(u(97, a));
					sa[c] = b;
					c = b.eventTypes;
					for (var d in c) {
						var e = void 0;
						var f = c[d], g = b, h = d;
						if (ta.hasOwnProperty(h)) throw Error(u(99, h));
						ta[h] = f;
						var k = f.phasedRegistrationNames;
						if (k) {
							for (e in k) k.hasOwnProperty(e) && ua(k[e], g, h);
							e = !0;
						} else f.registrationName ? (ua(f.registrationName, g, h), e = !0) : e = !1;
						if (!e) throw Error(u(98, d, a));
					}
				}
			}
		}
		function ua(a, b, c) {
			if (va[a]) throw Error(u(100, a));
			va[a] = b;
			wa[a] = b.eventTypes[c].dependencies;
		}
		var sa = [];
		var ta = {};
		var va = {};
		var wa = {};
		function xa(a) {
			var b = !1, c;
			for (c in a) if (a.hasOwnProperty(c)) {
				var d = a[c];
				if (!qa.hasOwnProperty(c) || qa[c] !== d) {
					if (qa[c]) throw Error(u(102, c));
					qa[c] = d;
					b = !0;
				}
			}
			b && ra();
		}
		var ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
		var za = null;
		var Aa = null;
		var Ba = null;
		function Ca(a) {
			if (a = ma(a)) {
				if ("function" !== typeof za) throw Error(u(280));
				var b = a.stateNode;
				b && (b = la(b), za(a.stateNode, a.type, b));
			}
		}
		function Da(a) {
			Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
		}
		function Ea() {
			if (Aa) {
				var a = Aa, b = Ba;
				Ba = Aa = null;
				Ca(a);
				if (b) for (a = 0; a < b.length; a++) Ca(b[a]);
			}
		}
		function Fa(a, b) {
			return a(b);
		}
		function Ga(a, b, c, d, e) {
			return a(b, c, d, e);
		}
		function Ha() {}
		var Ia = Fa;
		var Ja = !1;
		var Ka = !1;
		function La() {
			if (null !== Aa || null !== Ba) Ha(), Ea();
		}
		function Ma(a, b, c) {
			if (Ka) return a(b, c);
			Ka = !0;
			try {
				return Ia(a, b, c);
			} finally {
				Ka = !1, La();
			}
		}
		var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
		var Oa = Object.prototype.hasOwnProperty;
		var Pa = {};
		var Qa = {};
		function Ra(a) {
			if (Oa.call(Qa, a)) return !0;
			if (Oa.call(Pa, a)) return !1;
			if (Na.test(a)) return Qa[a] = !0;
			Pa[a] = !0;
			return !1;
		}
		function Sa(a, b, c, d) {
			if (null !== c && 0 === c.type) return !1;
			switch (typeof b) {
				case "function":
				case "symbol": return !0;
				case "boolean":
					if (d) return !1;
					if (null !== c) return !c.acceptsBooleans;
					a = a.toLowerCase().slice(0, 5);
					return "data-" !== a && "aria-" !== a;
				default: return !1;
			}
		}
		function Ta(a, b, c, d) {
			if (null === b || "undefined" === typeof b || Sa(a, b, c, d)) return !0;
			if (d) return !1;
			if (null !== c) switch (c.type) {
				case 3: return !b;
				case 4: return !1 === b;
				case 5: return isNaN(b);
				case 6: return isNaN(b) || 1 > b;
			}
			return !1;
		}
		function v(a, b, c, d, e, f) {
			this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
			this.attributeName = d;
			this.attributeNamespace = e;
			this.mustUseProperty = c;
			this.propertyName = a;
			this.type = b;
			this.sanitizeURL = f;
		}
		var C = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
			C[a] = new v(a, 0, !1, a, null, !1);
		});
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach(function(a) {
			var b = a[0];
			C[b] = new v(b, 1, !1, a[1], null, !1);
		});
		[
			"contentEditable",
			"draggable",
			"spellCheck",
			"value"
		].forEach(function(a) {
			C[a] = new v(a, 2, !1, a.toLowerCase(), null, !1);
		});
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha"
		].forEach(function(a) {
			C[a] = new v(a, 2, !1, a, null, !1);
		});
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
			C[a] = new v(a, 3, !1, a.toLowerCase(), null, !1);
		});
		[
			"checked",
			"multiple",
			"muted",
			"selected"
		].forEach(function(a) {
			C[a] = new v(a, 3, !0, a, null, !1);
		});
		["capture", "download"].forEach(function(a) {
			C[a] = new v(a, 4, !1, a, null, !1);
		});
		[
			"cols",
			"rows",
			"size",
			"span"
		].forEach(function(a) {
			C[a] = new v(a, 6, !1, a, null, !1);
		});
		["rowSpan", "start"].forEach(function(a) {
			C[a] = new v(a, 5, !1, a.toLowerCase(), null, !1);
		});
		var Ua = /[\-:]([a-z])/g;
		function Va(a) {
			return a[1].toUpperCase();
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
			var b = a.replace(Ua, Va);
			C[b] = new v(b, 1, !1, a, null, !1);
		});
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
			var b = a.replace(Ua, Va);
			C[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
		});
		[
			"xml:base",
			"xml:lang",
			"xml:space"
		].forEach(function(a) {
			var b = a.replace(Ua, Va);
			C[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
		});
		["tabIndex", "crossOrigin"].forEach(function(a) {
			C[a] = new v(a, 1, !1, a.toLowerCase(), null, !1);
		});
		C.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
		[
			"src",
			"href",
			"action",
			"formAction"
		].forEach(function(a) {
			C[a] = new v(a, 1, !1, a.toLowerCase(), null, !0);
		});
		var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null });
		Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
		function Xa(a, b, c, d) {
			var e = C.hasOwnProperty(b) ? C[b] : null;
			(null !== e ? 0 === e.type : !d && !(!(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])) || (Ta(b, c, e, d) && (c = null), d || null === e ? Ra(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
		}
		var Ya = /^(.*)[\\\/]/;
		var E = "function" === typeof Symbol && Symbol.for;
		var Za = E ? Symbol.for("react.element") : 60103;
		var $a = E ? Symbol.for("react.portal") : 60106;
		var ab = E ? Symbol.for("react.fragment") : 60107;
		var bb = E ? Symbol.for("react.strict_mode") : 60108;
		var cb = E ? Symbol.for("react.profiler") : 60114;
		var db = E ? Symbol.for("react.provider") : 60109;
		var eb = E ? Symbol.for("react.context") : 60110;
		var fb = E ? Symbol.for("react.concurrent_mode") : 60111;
		var gb = E ? Symbol.for("react.forward_ref") : 60112;
		var hb = E ? Symbol.for("react.suspense") : 60113;
		var ib = E ? Symbol.for("react.suspense_list") : 60120;
		var jb = E ? Symbol.for("react.memo") : 60115;
		var kb = E ? Symbol.for("react.lazy") : 60116;
		var lb = E ? Symbol.for("react.block") : 60121;
		var mb = "function" === typeof Symbol && Symbol.iterator;
		function nb(a) {
			if (null === a || "object" !== typeof a) return null;
			a = mb && a[mb] || a["@@iterator"];
			return "function" === typeof a ? a : null;
		}
		function ob(a) {
			if (-1 === a._status) {
				a._status = 0;
				var b = a._ctor;
				b = b();
				a._result = b;
				b.then(function(b) {
					0 === a._status && (b = b.default, a._status = 1, a._result = b);
				}, function(b) {
					0 === a._status && (a._status = 2, a._result = b);
				});
			}
		}
		function pb(a) {
			if (null == a) return null;
			if ("function" === typeof a) return a.displayName || a.name || null;
			if ("string" === typeof a) return a;
			switch (a) {
				case ab: return "Fragment";
				case $a: return "Portal";
				case cb: return "Profiler";
				case bb: return "StrictMode";
				case hb: return "Suspense";
				case ib: return "SuspenseList";
			}
			if ("object" === typeof a) switch (a.$$typeof) {
				case eb: return "Context.Consumer";
				case db: return "Context.Provider";
				case gb:
					var b = a.render;
					b = b.displayName || b.name || "";
					return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
				case jb: return pb(a.type);
				case lb: return pb(a.render);
				case kb: if (a = 1 === a._status ? a._result : null) return pb(a);
			}
			return null;
		}
		function qb(a) {
			var b = "";
			do {
				a: switch (a.tag) {
					case 3:
					case 4:
					case 6:
					case 7:
					case 10:
					case 9:
						var c = "";
						break a;
					default:
						var d = a._debugOwner, e = a._debugSource, f = pb(a.type);
						c = null;
						d && (c = pb(d.type));
						d = f;
						f = "";
						e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
						c = "\n    in " + (d || "Unknown") + f;
				}
				b += c;
				a = a.return;
			} while (a);
			return b;
		}
		function rb(a) {
			switch (typeof a) {
				case "boolean":
				case "number":
				case "object":
				case "string":
				case "undefined": return a;
				default: return "";
			}
		}
		function sb(a) {
			var b = a.type;
			return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
		}
		function tb(a) {
			var b = sb(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
			if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
				var e = c.get, f = c.set;
				Object.defineProperty(a, b, {
					configurable: !0,
					get: function() {
						return e.call(this);
					},
					set: function(a) {
						d = "" + a;
						f.call(this, a);
					}
				});
				Object.defineProperty(a, b, { enumerable: c.enumerable });
				return {
					getValue: function() {
						return d;
					},
					setValue: function(a) {
						d = "" + a;
					},
					stopTracking: function() {
						a._valueTracker = null;
						delete a[b];
					}
				};
			}
		}
		function xb(a) {
			a._valueTracker || (a._valueTracker = tb(a));
		}
		function yb(a) {
			if (!a) return !1;
			var b = a._valueTracker;
			if (!b) return !0;
			var c = b.getValue();
			var d = "";
			a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
			a = d;
			return a !== c ? (b.setValue(a), !0) : !1;
		}
		function zb(a, b) {
			var c = b.checked;
			return n({}, b, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: null != c ? c : a._wrapperState.initialChecked
			});
		}
		function Ab(a, b) {
			var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
			c = rb(null != b.value ? b.value : c);
			a._wrapperState = {
				initialChecked: d,
				initialValue: c,
				controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
			};
		}
		function Bb(a, b) {
			b = b.checked;
			null != b && Xa(a, "checked", b, !1);
		}
		function Cb(a, b) {
			Bb(a, b);
			var c = rb(b.value), d = b.type;
			if (null != c) if ("number" === d) {
				if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
			} else a.value !== "" + c && (a.value = "" + c);
			else if ("submit" === d || "reset" === d) {
				a.removeAttribute("value");
				return;
			}
			b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
			null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
		}
		function Eb(a, b, c) {
			if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
				var d = b.type;
				if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
				b = "" + a._wrapperState.initialValue;
				c || b === a.value || (a.value = b);
				a.defaultValue = b;
			}
			c = a.name;
			"" !== c && (a.name = "");
			a.defaultChecked = !!a._wrapperState.initialChecked;
			"" !== c && (a.name = c);
		}
		function Db(a, b, c) {
			if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
		}
		function Fb(a) {
			var b = "";
			aa.Children.forEach(a, function(a) {
				null != a && (b += a);
			});
			return b;
		}
		function Gb(a, b) {
			a = n({ children: void 0 }, b);
			if (b = Fb(b.children)) a.children = b;
			return a;
		}
		function Hb(a, b, c, d) {
			a = a.options;
			if (b) {
				b = {};
				for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
				for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
			} else {
				c = "" + rb(c);
				b = null;
				for (e = 0; e < a.length; e++) {
					if (a[e].value === c) {
						a[e].selected = !0;
						d && (a[e].defaultSelected = !0);
						return;
					}
					null !== b || a[e].disabled || (b = a[e]);
				}
				null !== b && (b.selected = !0);
			}
		}
		function Ib(a, b) {
			if (null != b.dangerouslySetInnerHTML) throw Error(u(91));
			return n({}, b, {
				value: void 0,
				defaultValue: void 0,
				children: "" + a._wrapperState.initialValue
			});
		}
		function Jb(a, b) {
			var c = b.value;
			if (null == c) {
				c = b.children;
				b = b.defaultValue;
				if (null != c) {
					if (null != b) throw Error(u(92));
					if (Array.isArray(c)) {
						if (!(1 >= c.length)) throw Error(u(93));
						c = c[0];
					}
					b = c;
				}
				b ??= "";
				c = b;
			}
			a._wrapperState = { initialValue: rb(c) };
		}
		function Kb(a, b) {
			var c = rb(b.value), d = rb(b.defaultValue);
			null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
			null != d && (a.defaultValue = "" + d);
		}
		function Lb(a) {
			var b = a.textContent;
			b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
		}
		var Mb = {
			html: "http://www.w3.org/1999/xhtml",
			mathml: "http://www.w3.org/1998/Math/MathML",
			svg: "http://www.w3.org/2000/svg"
		};
		function Nb(a) {
			switch (a) {
				case "svg": return "http://www.w3.org/2000/svg";
				case "math": return "http://www.w3.org/1998/Math/MathML";
				default: return "http://www.w3.org/1999/xhtml";
			}
		}
		function Ob(a, b) {
			return null == a || "http://www.w3.org/1999/xhtml" === a ? Nb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
		}
		var Pb;
		var Qb = function(a) {
			return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
				MSApp.execUnsafeLocalFunction(function() {
					return a(b, c, d, e);
				});
			} : a;
		}(function(a, b) {
			if (a.namespaceURI !== Mb.svg || "innerHTML" in a) a.innerHTML = b;
			else {
				Pb = Pb || document.createElement("div");
				Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
				for (b = Pb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
				for (; b.firstChild;) a.appendChild(b.firstChild);
			}
		});
		function Rb(a, b) {
			if (b) {
				var c = a.firstChild;
				if (c && c === a.lastChild && 3 === c.nodeType) {
					c.nodeValue = b;
					return;
				}
			}
			a.textContent = b;
		}
		function Sb(a, b) {
			var c = {};
			c[a.toLowerCase()] = b.toLowerCase();
			c["Webkit" + a] = "webkit" + b;
			c["Moz" + a] = "moz" + b;
			return c;
		}
		var Tb = {
			animationend: Sb("Animation", "AnimationEnd"),
			animationiteration: Sb("Animation", "AnimationIteration"),
			animationstart: Sb("Animation", "AnimationStart"),
			transitionend: Sb("Transition", "TransitionEnd")
		};
		var Ub = {};
		var Vb = {};
		ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
		function Wb(a) {
			if (Ub[a]) return Ub[a];
			if (!Tb[a]) return a;
			var b = Tb[a], c;
			for (c in b) if (b.hasOwnProperty(c) && c in Vb) return Ub[a] = b[c];
			return a;
		}
		var Xb = Wb("animationend");
		var Yb = Wb("animationiteration");
		var Zb = Wb("animationstart");
		var $b = Wb("transitionend");
		var ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
		var bc = new ("function" === typeof WeakMap ? WeakMap : Map)();
		function cc(a) {
			var b = bc.get(a);
			void 0 === b && (b = /* @__PURE__ */ new Map(), bc.set(a, b));
			return b;
		}
		function dc(a) {
			var b = a, c = a;
			if (a.alternate) for (; b.return;) b = b.return;
			else {
				a = b;
				do
					b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return;
				while (a);
			}
			return 3 === b.tag ? c : null;
		}
		function ec(a) {
			if (13 === a.tag) {
				var b = a.memoizedState;
				null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
				if (null !== b) return b.dehydrated;
			}
			return null;
		}
		function fc(a) {
			if (dc(a) !== a) throw Error(u(188));
		}
		function gc(a) {
			var b = a.alternate;
			if (!b) {
				b = dc(a);
				if (null === b) throw Error(u(188));
				return b !== a ? null : a;
			}
			for (var c = a, d = b;;) {
				var e = c.return;
				if (null === e) break;
				var f = e.alternate;
				if (null === f) {
					d = e.return;
					if (null !== d) {
						c = d;
						continue;
					}
					break;
				}
				if (e.child === f.child) {
					for (f = e.child; f;) {
						if (f === c) return fc(e), a;
						if (f === d) return fc(e), b;
						f = f.sibling;
					}
					throw Error(u(188));
				}
				if (c.return !== d.return) c = e, d = f;
				else {
					for (var g = !1, h = e.child; h;) {
						if (h === c) {
							g = !0;
							c = e;
							d = f;
							break;
						}
						if (h === d) {
							g = !0;
							d = e;
							c = f;
							break;
						}
						h = h.sibling;
					}
					if (!g) {
						for (h = f.child; h;) {
							if (h === c) {
								g = !0;
								c = f;
								d = e;
								break;
							}
							if (h === d) {
								g = !0;
								d = f;
								c = e;
								break;
							}
							h = h.sibling;
						}
						if (!g) throw Error(u(189));
					}
				}
				if (c.alternate !== d) throw Error(u(190));
			}
			if (3 !== c.tag) throw Error(u(188));
			return c.stateNode.current === c ? a : b;
		}
		function hc(a) {
			a = gc(a);
			if (!a) return null;
			for (var b = a;;) {
				if (5 === b.tag || 6 === b.tag) return b;
				if (b.child) b.child.return = b, b = b.child;
				else {
					if (b === a) break;
					for (; !b.sibling;) {
						if (!b.return || b.return === a) return null;
						b = b.return;
					}
					b.sibling.return = b.return;
					b = b.sibling;
				}
			}
			return null;
		}
		function ic(a, b) {
			if (null == b) throw Error(u(30));
			if (null == a) return b;
			if (Array.isArray(a)) {
				if (Array.isArray(b)) return a.push.apply(a, b), a;
				a.push(b);
				return a;
			}
			return Array.isArray(b) ? [a].concat(b) : [a, b];
		}
		function jc(a, b, c) {
			Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
		}
		var kc = null;
		function lc(a) {
			if (a) {
				var b = a._dispatchListeners, c = a._dispatchInstances;
				if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) oa(a, b[d], c[d]);
				else b && oa(a, b, c);
				a._dispatchListeners = null;
				a._dispatchInstances = null;
				a.isPersistent() || a.constructor.release(a);
			}
		}
		function mc(a) {
			null !== a && (kc = ic(kc, a));
			a = kc;
			kc = null;
			if (a) {
				jc(a, lc);
				if (kc) throw Error(u(95));
				if (fa) throw a = ha, fa = !1, ha = null, a;
			}
		}
		function nc(a) {
			a = a.target || a.srcElement || window;
			a.correspondingUseElement && (a = a.correspondingUseElement);
			return 3 === a.nodeType ? a.parentNode : a;
		}
		function oc(a) {
			if (!ya) return !1;
			a = "on" + a;
			var b = a in document;
			b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
			return b;
		}
		var pc = [];
		function qc(a) {
			a.topLevelType = null;
			a.nativeEvent = null;
			a.targetInst = null;
			a.ancestors.length = 0;
			10 > pc.length && pc.push(a);
		}
		function rc(a, b, c, d) {
			if (pc.length) {
				var e = pc.pop();
				e.topLevelType = a;
				e.eventSystemFlags = d;
				e.nativeEvent = b;
				e.targetInst = c;
				return e;
			}
			return {
				topLevelType: a,
				eventSystemFlags: d,
				nativeEvent: b,
				targetInst: c,
				ancestors: []
			};
		}
		function sc(a) {
			var b = a.targetInst, c = b;
			do {
				if (!c) {
					a.ancestors.push(c);
					break;
				}
				var d = c;
				if (3 === d.tag) d = d.stateNode.containerInfo;
				else {
					for (; d.return;) d = d.return;
					d = 3 !== d.tag ? null : d.stateNode.containerInfo;
				}
				if (!d) break;
				b = c.tag;
				5 !== b && 6 !== b || a.ancestors.push(c);
				c = tc(d);
			} while (c);
			for (c = 0; c < a.ancestors.length; c++) {
				b = a.ancestors[c];
				var e = nc(a.nativeEvent);
				d = a.topLevelType;
				var f = a.nativeEvent, g = a.eventSystemFlags;
				0 === c && (g |= 64);
				for (var h = null, k = 0; k < sa.length; k++) {
					var l = sa[k];
					l && (l = l.extractEvents(d, b, f, e, g)) && (h = ic(h, l));
				}
				mc(h);
			}
		}
		function uc(a, b, c) {
			if (!c.has(a)) {
				switch (a) {
					case "scroll":
						vc(b, "scroll", !0);
						break;
					case "focus":
					case "blur":
						vc(b, "focus", !0);
						vc(b, "blur", !0);
						c.set("blur", null);
						c.set("focus", null);
						break;
					case "cancel":
					case "close":
						oc(a) && vc(b, a, !0);
						break;
					case "invalid":
					case "submit":
					case "reset": break;
					default: -1 === ac.indexOf(a) && F(a, b);
				}
				c.set(a, null);
			}
		}
		var wc;
		var xc;
		var yc;
		var zc = !1;
		var Ac = [];
		var Bc = null;
		var Cc = null;
		var Dc = null;
		var Ec = /* @__PURE__ */ new Map();
		var Fc = /* @__PURE__ */ new Map();
		var Gc = [];
		var Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" ");
		var Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
		function Jc(a, b) {
			var c = cc(b);
			Hc.forEach(function(a) {
				uc(a, b, c);
			});
			Ic.forEach(function(a) {
				uc(a, b, c);
			});
		}
		function Kc(a, b, c, d, e) {
			return {
				blockedOn: a,
				topLevelType: b,
				eventSystemFlags: c | 32,
				nativeEvent: e,
				container: d
			};
		}
		function Lc(a, b) {
			switch (a) {
				case "focus":
				case "blur":
					Bc = null;
					break;
				case "dragenter":
				case "dragleave":
					Cc = null;
					break;
				case "mouseover":
				case "mouseout":
					Dc = null;
					break;
				case "pointerover":
				case "pointerout":
					Ec.delete(b.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture": Fc.delete(b.pointerId);
			}
		}
		function Mc(a, b, c, d, e, f) {
			if (null === a || a.nativeEvent !== f) return a = Kc(b, c, d, e, f), null !== b && (b = Nc(b), null !== b && xc(b)), a;
			a.eventSystemFlags |= d;
			return a;
		}
		function Oc(a, b, c, d, e) {
			switch (b) {
				case "focus": return Bc = Mc(Bc, a, b, c, d, e), !0;
				case "dragenter": return Cc = Mc(Cc, a, b, c, d, e), !0;
				case "mouseover": return Dc = Mc(Dc, a, b, c, d, e), !0;
				case "pointerover":
					var f = e.pointerId;
					Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
					return !0;
				case "gotpointercapture": return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), !0;
			}
			return !1;
		}
		function Pc(a) {
			var b = tc(a.target);
			if (null !== b) {
				var c = dc(b);
				if (null !== c) {
					if (b = c.tag, 13 === b) {
						if (b = ec(c), null !== b) {
							a.blockedOn = b;
							r.unstable_runWithPriority(a.priority, function() {
								yc(c);
							});
							return;
						}
					} else if (3 === b && c.stateNode.hydrate) {
						a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
						return;
					}
				}
			}
			a.blockedOn = null;
		}
		function Qc(a) {
			if (null !== a.blockedOn) return !1;
			var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
			if (null !== b) {
				var c = Nc(b);
				null !== c && xc(c);
				a.blockedOn = b;
				return !1;
			}
			return !0;
		}
		function Sc(a, b, c) {
			Qc(a) && c.delete(b);
		}
		function Tc() {
			for (zc = !1; 0 < Ac.length;) {
				var a = Ac[0];
				if (null !== a.blockedOn) {
					a = Nc(a.blockedOn);
					null !== a && wc(a);
					break;
				}
				var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
				null !== b ? a.blockedOn = b : Ac.shift();
			}
			null !== Bc && Qc(Bc) && (Bc = null);
			null !== Cc && Qc(Cc) && (Cc = null);
			null !== Dc && Qc(Dc) && (Dc = null);
			Ec.forEach(Sc);
			Fc.forEach(Sc);
		}
		function Uc(a, b) {
			a.blockedOn === b && (a.blockedOn = null, zc || (zc = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
		}
		function Vc(a) {
			function b(b) {
				return Uc(b, a);
			}
			if (0 < Ac.length) {
				Uc(Ac[0], a);
				for (var c = 1; c < Ac.length; c++) {
					var d = Ac[c];
					d.blockedOn === a && (d.blockedOn = null);
				}
			}
			null !== Bc && Uc(Bc, a);
			null !== Cc && Uc(Cc, a);
			null !== Dc && Uc(Dc, a);
			Ec.forEach(b);
			Fc.forEach(b);
			for (c = 0; c < Gc.length; c++) d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
			for (; 0 < Gc.length && (c = Gc[0], null === c.blockedOn);) Pc(c), null === c.blockedOn && Gc.shift();
		}
		var Wc = {};
		var Yc = /* @__PURE__ */ new Map();
		var Zc = /* @__PURE__ */ new Map();
		var $c = [
			"abort",
			"abort",
			Xb,
			"animationEnd",
			Yb,
			"animationIteration",
			Zb,
			"animationStart",
			"canplay",
			"canPlay",
			"canplaythrough",
			"canPlayThrough",
			"durationchange",
			"durationChange",
			"emptied",
			"emptied",
			"encrypted",
			"encrypted",
			"ended",
			"ended",
			"error",
			"error",
			"gotpointercapture",
			"gotPointerCapture",
			"load",
			"load",
			"loadeddata",
			"loadedData",
			"loadedmetadata",
			"loadedMetadata",
			"loadstart",
			"loadStart",
			"lostpointercapture",
			"lostPointerCapture",
			"playing",
			"playing",
			"progress",
			"progress",
			"seeking",
			"seeking",
			"stalled",
			"stalled",
			"suspend",
			"suspend",
			"timeupdate",
			"timeUpdate",
			$b,
			"transitionEnd",
			"waiting",
			"waiting"
		];
		function ad(a, b) {
			for (var c = 0; c < a.length; c += 2) {
				var d = a[c], e = a[c + 1], f = "on" + (e[0].toUpperCase() + e.slice(1));
				f = {
					phasedRegistrationNames: {
						bubbled: f,
						captured: f + "Capture"
					},
					dependencies: [d],
					eventPriority: b
				};
				Zc.set(d, b);
				Yc.set(d, f);
				Wc[e] = f;
			}
		}
		ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
		ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
		ad($c, 2);
		for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++) Zc.set(bd[cd], 0);
		var dd = r.unstable_UserBlockingPriority;
		var ed = r.unstable_runWithPriority;
		var fd = !0;
		function F(a, b) {
			vc(b, a, !1);
		}
		function vc(a, b, c) {
			var d = Zc.get(b);
			switch (void 0 === d ? 2 : d) {
				case 0:
					d = gd.bind(null, b, 1, a);
					break;
				case 1:
					d = hd.bind(null, b, 1, a);
					break;
				default: d = id.bind(null, b, 1, a);
			}
			c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
		}
		function gd(a, b, c, d) {
			Ja || Ha();
			var e = id, f = Ja;
			Ja = !0;
			try {
				Ga(e, a, b, c, d);
			} finally {
				(Ja = f) || La();
			}
		}
		function hd(a, b, c, d) {
			ed(dd, id.bind(null, a, b, c, d));
		}
		function id(a, b, c, d) {
			if (fd) if (0 < Ac.length && -1 < Hc.indexOf(a)) a = Kc(null, a, b, c, d), Ac.push(a);
			else {
				var e = Rc(a, b, c, d);
				if (null === e) Lc(a, d);
				else if (-1 < Hc.indexOf(a)) a = Kc(e, a, b, c, d), Ac.push(a);
				else if (!Oc(e, a, b, c, d)) {
					Lc(a, d);
					a = rc(a, d, null, b);
					try {
						Ma(sc, a);
					} finally {
						qc(a);
					}
				}
			}
		}
		function Rc(a, b, c, d) {
			c = nc(d);
			c = tc(c);
			if (null !== c) {
				var e = dc(c);
				if (null === e) c = null;
				else {
					var f = e.tag;
					if (13 === f) {
						c = ec(e);
						if (null !== c) return c;
						c = null;
					} else if (3 === f) {
						if (e.stateNode.hydrate) return 3 === e.tag ? e.stateNode.containerInfo : null;
						c = null;
					} else e !== c && (c = null);
				}
			}
			a = rc(a, d, c, b);
			try {
				Ma(sc, a);
			} finally {
				qc(a);
			}
			return null;
		}
		var jd = {
			animationIterationCount: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0
		};
		var kd = [
			"Webkit",
			"ms",
			"Moz",
			"O"
		];
		Object.keys(jd).forEach(function(a) {
			kd.forEach(function(b) {
				b = b + a.charAt(0).toUpperCase() + a.substring(1);
				jd[b] = jd[a];
			});
		});
		function ld(a, b, c) {
			return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
		}
		function md(a, b) {
			a = a.style;
			for (var c in b) if (b.hasOwnProperty(c)) {
				var d = 0 === c.indexOf("--"), e = ld(c, b[c], d);
				"float" === c && (c = "cssFloat");
				d ? a.setProperty(c, e) : a[c] = e;
			}
		}
		var nd = n({ menuitem: !0 }, {
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0
		});
		function od(a, b) {
			if (b) {
				if (nd[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(u(137, a, ""));
				if (null != b.dangerouslySetInnerHTML) {
					if (null != b.children) throw Error(u(60));
					if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(u(61));
				}
				if (null != b.style && "object" !== typeof b.style) throw Error(u(62, ""));
			}
		}
		function pd(a, b) {
			if (-1 === a.indexOf("-")) return "string" === typeof b.is;
			switch (a) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": return !1;
				default: return !0;
			}
		}
		var qd = Mb.html;
		function rd(a, b) {
			a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
			var c = cc(a);
			b = wa[b];
			for (var d = 0; d < b.length; d++) uc(b[d], a, c);
		}
		function sd() {}
		function td(a) {
			a = a || ("undefined" !== typeof document ? document : void 0);
			if ("undefined" === typeof a) return null;
			try {
				return a.activeElement || a.body;
			} catch (b) {
				return a.body;
			}
		}
		function ud(a) {
			for (; a && a.firstChild;) a = a.firstChild;
			return a;
		}
		function vd(a, b) {
			var c = ud(a);
			a = 0;
			for (var d; c;) {
				if (3 === c.nodeType) {
					d = a + c.textContent.length;
					if (a <= b && d >= b) return {
						node: c,
						offset: b - a
					};
					a = d;
				}
				a: {
					for (; c;) {
						if (c.nextSibling) {
							c = c.nextSibling;
							break a;
						}
						c = c.parentNode;
					}
					c = void 0;
				}
				c = ud(c);
			}
		}
		function wd(a, b) {
			return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
		}
		function xd() {
			for (var a = window, b = td(); b instanceof a.HTMLIFrameElement;) {
				try {
					var c = "string" === typeof b.contentWindow.location.href;
				} catch (d) {
					c = !1;
				}
				if (c) a = b.contentWindow;
				else break;
				b = td(a.document);
			}
			return b;
		}
		function yd(a) {
			var b = a && a.nodeName && a.nodeName.toLowerCase();
			return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
		}
		var zd = "$";
		var Ad = "/$";
		var Bd = "$?";
		var Cd = "$!";
		var Dd = null;
		var Ed = null;
		function Fd(a, b) {
			switch (a) {
				case "button":
				case "input":
				case "select":
				case "textarea": return !!b.autoFocus;
			}
			return !1;
		}
		function Gd(a, b) {
			return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
		}
		var Hd = "function" === typeof setTimeout ? setTimeout : void 0;
		var Id = "function" === typeof clearTimeout ? clearTimeout : void 0;
		function Jd(a) {
			for (; null != a; a = a.nextSibling) {
				var b = a.nodeType;
				if (1 === b || 3 === b) break;
			}
			return a;
		}
		function Kd(a) {
			a = a.previousSibling;
			for (var b = 0; a;) {
				if (8 === a.nodeType) {
					var c = a.data;
					if (c === zd || c === Cd || c === Bd) {
						if (0 === b) return a;
						b--;
					} else c === Ad && b++;
				}
				a = a.previousSibling;
			}
			return null;
		}
		var Ld = Math.random().toString(36).slice(2);
		var Md = "__reactInternalInstance$" + Ld;
		var Nd = "__reactEventHandlers$" + Ld;
		var Od = "__reactContainere$" + Ld;
		function tc(a) {
			var b = a[Md];
			if (b) return b;
			for (var c = a.parentNode; c;) {
				if (b = c[Od] || c[Md]) {
					c = b.alternate;
					if (null !== b.child || null !== c && null !== c.child) for (a = Kd(a); null !== a;) {
						if (c = a[Md]) return c;
						a = Kd(a);
					}
					return b;
				}
				a = c;
				c = a.parentNode;
			}
			return null;
		}
		function Nc(a) {
			a = a[Md] || a[Od];
			return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
		}
		function Pd(a) {
			if (5 === a.tag || 6 === a.tag) return a.stateNode;
			throw Error(u(33));
		}
		function Qd(a) {
			return a[Nd] || null;
		}
		function Rd(a) {
			do
				a = a.return;
			while (a && 5 !== a.tag);
			return a ? a : null;
		}
		function Sd(a, b) {
			var c = a.stateNode;
			if (!c) return null;
			var d = la(c);
			if (!d) return null;
			c = d[b];
			a: switch (b) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter":
					(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
					a = !d;
					break a;
				default: a = !1;
			}
			if (a) return null;
			if (c && "function" !== typeof c) throw Error(u(231, b, typeof c));
			return c;
		}
		function Td(a, b, c) {
			if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
		}
		function Ud(a) {
			if (a && a.dispatchConfig.phasedRegistrationNames) {
				for (var b = a._targetInst, c = []; b;) c.push(b), b = Rd(b);
				for (b = c.length; 0 < b--;) Td(c[b], "captured", a);
				for (b = 0; b < c.length; b++) Td(c[b], "bubbled", a);
			}
		}
		function Vd(a, b, c) {
			a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
		}
		function Wd(a) {
			a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
		}
		function Xd(a) {
			jc(a, Ud);
		}
		var Yd = null;
		var Zd = null;
		var $d = null;
		function ae() {
			if ($d) return $d;
			var a, b = Zd, c = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length;
			for (a = 0; a < c && b[a] === e[a]; a++);
			var g = c - a;
			for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
			return $d = e.slice(a, 1 < d ? 1 - d : void 0);
		}
		function be() {
			return !0;
		}
		function ce() {
			return !1;
		}
		function G(a, b, c, d) {
			this.dispatchConfig = a;
			this._targetInst = b;
			this.nativeEvent = c;
			a = this.constructor.Interface;
			for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
			this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? be : ce;
			this.isPropagationStopped = ce;
			return this;
		}
		n(G.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a = this.nativeEvent;
				a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = be);
			},
			stopPropagation: function() {
				var a = this.nativeEvent;
				a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = be);
			},
			persist: function() {
				this.isPersistent = be;
			},
			isPersistent: ce,
			destructor: function() {
				var a = this.constructor.Interface, b;
				for (b in a) this[b] = null;
				this.nativeEvent = this._targetInst = this.dispatchConfig = null;
				this.isPropagationStopped = this.isDefaultPrevented = ce;
				this._dispatchInstances = this._dispatchListeners = null;
			}
		});
		G.Interface = {
			type: null,
			target: null,
			currentTarget: function() {
				return null;
			},
			eventPhase: null,
			bubbles: null,
			cancelable: null,
			timeStamp: function(a) {
				return a.timeStamp || Date.now();
			},
			defaultPrevented: null,
			isTrusted: null
		};
		G.extend = function(a) {
			function b() {}
			function c() {
				return d.apply(this, arguments);
			}
			var d = this;
			b.prototype = d.prototype;
			var e = new b();
			n(e, c.prototype);
			c.prototype = e;
			c.prototype.constructor = c;
			c.Interface = n({}, d.Interface, a);
			c.extend = d.extend;
			de(c);
			return c;
		};
		de(G);
		function ee(a, b, c, d) {
			if (this.eventPool.length) {
				var e = this.eventPool.pop();
				this.call(e, a, b, c, d);
				return e;
			}
			return new this(a, b, c, d);
		}
		function fe(a) {
			if (!(a instanceof this)) throw Error(u(279));
			a.destructor();
			10 > this.eventPool.length && this.eventPool.push(a);
		}
		function de(a) {
			a.eventPool = [];
			a.getPooled = ee;
			a.release = fe;
		}
		var ge = G.extend({ data: null });
		var he = G.extend({ data: null });
		var ie = [
			9,
			13,
			27,
			32
		];
		var je = ya && "CompositionEvent" in window;
		var ke = null;
		ya && "documentMode" in document && (ke = document.documentMode);
		var le = ya && "TextEvent" in window && !ke;
		var me = ya && (!je || ke && 8 < ke && 11 >= ke);
		var ne = String.fromCharCode(32);
		var oe = {
			beforeInput: {
				phasedRegistrationNames: {
					bubbled: "onBeforeInput",
					captured: "onBeforeInputCapture"
				},
				dependencies: [
					"compositionend",
					"keypress",
					"textInput",
					"paste"
				]
			},
			compositionEnd: {
				phasedRegistrationNames: {
					bubbled: "onCompositionEnd",
					captured: "onCompositionEndCapture"
				},
				dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
			},
			compositionStart: {
				phasedRegistrationNames: {
					bubbled: "onCompositionStart",
					captured: "onCompositionStartCapture"
				},
				dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
			},
			compositionUpdate: {
				phasedRegistrationNames: {
					bubbled: "onCompositionUpdate",
					captured: "onCompositionUpdateCapture"
				},
				dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
			}
		};
		var pe = !1;
		function qe(a, b) {
			switch (a) {
				case "keyup": return -1 !== ie.indexOf(b.keyCode);
				case "keydown": return 229 !== b.keyCode;
				case "keypress":
				case "mousedown":
				case "blur": return !0;
				default: return !1;
			}
		}
		function re(a) {
			a = a.detail;
			return "object" === typeof a && "data" in a ? a.data : null;
		}
		var se = !1;
		function te(a, b) {
			switch (a) {
				case "compositionend": return re(b);
				case "keypress":
					if (32 !== b.which) return null;
					pe = !0;
					return ne;
				case "textInput": return a = b.data, a === ne && pe ? null : a;
				default: return null;
			}
		}
		function ue(a, b) {
			if (se) return "compositionend" === a || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = !1, a) : null;
			switch (a) {
				case "paste": return null;
				case "keypress":
					if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
						if (b.char && 1 < b.char.length) return b.char;
						if (b.which) return String.fromCharCode(b.which);
					}
					return null;
				case "compositionend": return me && "ko" !== b.locale ? null : b.data;
				default: return null;
			}
		}
		var ve = {
			eventTypes: oe,
			extractEvents: function(a, b, c, d) {
				var e;
				if (je) b: {
					switch (a) {
						case "compositionstart":
							var f = oe.compositionStart;
							break b;
						case "compositionend":
							f = oe.compositionEnd;
							break b;
						case "compositionupdate":
							f = oe.compositionUpdate;
							break b;
					}
					f = void 0;
				}
				else se ? qe(a, c) && (f = oe.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = oe.compositionStart);
				f ? (me && "ko" !== c.locale && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = !0)), f = ge.getPooled(f, b, c, d), e ? f.data = e : (e = re(c), null !== e && (f.data = e)), Xd(f), e = f) : e = null;
				(a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
				return null === e ? b : null === b ? e : [e, b];
			}
		};
		var we = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		};
		function xe(a) {
			var b = a && a.nodeName && a.nodeName.toLowerCase();
			return "input" === b ? !!we[a.type] : "textarea" === b ? !0 : !1;
		}
		var ye = { change: {
			phasedRegistrationNames: {
				bubbled: "onChange",
				captured: "onChangeCapture"
			},
			dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
		} };
		function ze(a, b, c) {
			a = G.getPooled(ye.change, a, b, c);
			a.type = "change";
			Da(c);
			Xd(a);
			return a;
		}
		var Ae = null;
		var Be = null;
		function Ce(a) {
			mc(a);
		}
		function De(a) {
			if (yb(Pd(a))) return a;
		}
		function Ee(a, b) {
			if ("change" === a) return b;
		}
		var Fe = !1;
		ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
		function Ge() {
			Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
		}
		function He(a) {
			if ("value" === a.propertyName && De(Be)) if (a = ze(Be, a, nc(a)), Ja) mc(a);
			else {
				Ja = !0;
				try {
					Fa(Ce, a);
				} finally {
					Ja = !1, La();
				}
			}
		}
		function Ie(a, b, c) {
			"focus" === a ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : "blur" === a && Ge();
		}
		function Je(a) {
			if ("selectionchange" === a || "keyup" === a || "keydown" === a) return De(Be);
		}
		function Ke(a, b) {
			if ("click" === a) return De(b);
		}
		function Le(a, b) {
			if ("input" === a || "change" === a) return De(b);
		}
		var Me = {
			eventTypes: ye,
			_isInputEventSupported: Fe,
			extractEvents: function(a, b, c, d) {
				var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase();
				if ("select" === f || "input" === f && "file" === e.type) var g = Ee;
				else if (xe(e)) if (Fe) g = Le;
				else {
					g = Je;
					var h = Ie;
				}
				else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Ke);
				if (g && (g = g(a, b))) return ze(g, c, d);
				h && h(a, e, b);
				"blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Db(e, "number", e.value);
			}
		};
		var Ne = G.extend({
			view: null,
			detail: null
		});
		var Oe = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};
		function Pe(a) {
			var b = this.nativeEvent;
			return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : !1;
		}
		function Qe() {
			return Pe;
		}
		var Re = 0;
		var Se = 0;
		var Te = !1;
		var Ue = !1;
		var Ve = Ne.extend({
			screenX: null,
			screenY: null,
			clientX: null,
			clientY: null,
			pageX: null,
			pageY: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			getModifierState: Qe,
			button: null,
			buttons: null,
			relatedTarget: function(a) {
				return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
			},
			movementX: function(a) {
				if ("movementX" in a) return a.movementX;
				var b = Re;
				Re = a.screenX;
				return Te ? "mousemove" === a.type ? a.screenX - b : 0 : (Te = !0, 0);
			},
			movementY: function(a) {
				if ("movementY" in a) return a.movementY;
				var b = Se;
				Se = a.screenY;
				return Ue ? "mousemove" === a.type ? a.screenY - b : 0 : (Ue = !0, 0);
			}
		});
		var We = Ve.extend({
			pointerId: null,
			width: null,
			height: null,
			pressure: null,
			tangentialPressure: null,
			tiltX: null,
			tiltY: null,
			twist: null,
			pointerType: null,
			isPrimary: null
		});
		var Xe = {
			mouseEnter: {
				registrationName: "onMouseEnter",
				dependencies: ["mouseout", "mouseover"]
			},
			mouseLeave: {
				registrationName: "onMouseLeave",
				dependencies: ["mouseout", "mouseover"]
			},
			pointerEnter: {
				registrationName: "onPointerEnter",
				dependencies: ["pointerout", "pointerover"]
			},
			pointerLeave: {
				registrationName: "onPointerLeave",
				dependencies: ["pointerout", "pointerover"]
			}
		};
		var Ye = {
			eventTypes: Xe,
			extractEvents: function(a, b, c, d, e) {
				var f = "mouseover" === a || "pointerover" === a, g = "mouseout" === a || "pointerout" === a;
				if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null;
				f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
				if (g) {
					if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, null !== b) {
						var h = dc(b);
						if (b !== h || 5 !== b.tag && 6 !== b.tag) b = null;
					}
				} else g = null;
				if (g === b) return null;
				if ("mouseout" === a || "mouseover" === a) {
					var k = Ve;
					var l = Xe.mouseLeave;
					var m = Xe.mouseEnter;
					var p = "mouse";
				} else if ("pointerout" === a || "pointerover" === a) k = We, l = Xe.pointerLeave, m = Xe.pointerEnter, p = "pointer";
				a = null == g ? f : Pd(g);
				f = null == b ? f : Pd(b);
				l = k.getPooled(l, g, c, d);
				l.type = p + "leave";
				l.target = a;
				l.relatedTarget = f;
				c = k.getPooled(m, b, c, d);
				c.type = p + "enter";
				c.target = f;
				c.relatedTarget = a;
				d = g;
				p = b;
				if (d && p) a: {
					k = d;
					m = p;
					g = 0;
					for (a = k; a; a = Rd(a)) g++;
					a = 0;
					for (b = m; b; b = Rd(b)) a++;
					for (; 0 < g - a;) k = Rd(k), g--;
					for (; 0 < a - g;) m = Rd(m), a--;
					for (; g--;) {
						if (k === m || k === m.alternate) break a;
						k = Rd(k);
						m = Rd(m);
					}
					k = null;
				}
				else k = null;
				m = k;
				for (k = []; d && d !== m;) {
					g = d.alternate;
					if (null !== g && g === m) break;
					k.push(d);
					d = Rd(d);
				}
				for (d = []; p && p !== m;) {
					g = p.alternate;
					if (null !== g && g === m) break;
					d.push(p);
					p = Rd(p);
				}
				for (p = 0; p < k.length; p++) Vd(k[p], "bubbled", l);
				for (p = d.length; 0 < p--;) Vd(d[p], "captured", c);
				return 0 === (e & 64) ? [l] : [l, c];
			}
		};
		function Ze(a, b) {
			return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
		}
		var $e = "function" === typeof Object.is ? Object.is : Ze;
		var af = Object.prototype.hasOwnProperty;
		function bf(a, b) {
			if ($e(a, b)) return !0;
			if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
			var c = Object.keys(a), d = Object.keys(b);
			if (c.length !== d.length) return !1;
			for (d = 0; d < c.length; d++) if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]])) return !1;
			return !0;
		}
		var cf = ya && "documentMode" in document && 11 >= document.documentMode;
		var df = { select: {
			phasedRegistrationNames: {
				bubbled: "onSelect",
				captured: "onSelectCapture"
			},
			dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
		} };
		var ef = null;
		var ff = null;
		var gf = null;
		var hf = !1;
		function jf(a, b) {
			var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
			if (hf || null == ef || ef !== td(c)) return null;
			c = ef;
			"selectionStart" in c && yd(c) ? c = {
				start: c.selectionStart,
				end: c.selectionEnd
			} : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
				anchorNode: c.anchorNode,
				anchorOffset: c.anchorOffset,
				focusNode: c.focusNode,
				focusOffset: c.focusOffset
			});
			return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
		}
		var kf = {
			eventTypes: df,
			extractEvents: function(a, b, c, d, e, f) {
				e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument);
				if (!(f = !e)) {
					a: {
						e = cc(e);
						f = wa.onSelect;
						for (var g = 0; g < f.length; g++) if (!e.has(f[g])) {
							e = !1;
							break a;
						}
						e = !0;
					}
					f = !e;
				}
				if (f) return null;
				e = b ? Pd(b) : window;
				switch (a) {
					case "focus":
						if (xe(e) || "true" === e.contentEditable) ef = e, ff = b, gf = null;
						break;
					case "blur":
						gf = ff = ef = null;
						break;
					case "mousedown":
						hf = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend": return hf = !1, jf(c, d);
					case "selectionchange": if (cf) break;
					case "keydown":
					case "keyup": return jf(c, d);
				}
				return null;
			}
		};
		var lf = G.extend({
			animationName: null,
			elapsedTime: null,
			pseudoElement: null
		});
		var mf = G.extend({ clipboardData: function(a) {
			return "clipboardData" in a ? a.clipboardData : window.clipboardData;
		} });
		var nf = Ne.extend({ relatedTarget: null });
		function of(a) {
			var b = a.keyCode;
			"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
			10 === a && (a = 13);
			return 32 <= a || 13 === a ? a : 0;
		}
		var pf = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		};
		var qf = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		};
		var rf = Ne.extend({
			key: function(a) {
				if (a.key) {
					var b = pf[a.key] || a.key;
					if ("Unidentified" !== b) return b;
				}
				return "keypress" === a.type ? (a = of(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? qf[a.keyCode] || "Unidentified" : "";
			},
			location: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			repeat: null,
			locale: null,
			getModifierState: Qe,
			charCode: function(a) {
				return "keypress" === a.type ? of(a) : 0;
			},
			keyCode: function(a) {
				return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
			},
			which: function(a) {
				return "keypress" === a.type ? of(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
			}
		});
		var sf = Ve.extend({ dataTransfer: null });
		var tf = Ne.extend({
			touches: null,
			targetTouches: null,
			changedTouches: null,
			altKey: null,
			metaKey: null,
			ctrlKey: null,
			shiftKey: null,
			getModifierState: Qe
		});
		var uf = G.extend({
			propertyName: null,
			elapsedTime: null,
			pseudoElement: null
		});
		var vf = Ve.extend({
			deltaX: function(a) {
				return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
			},
			deltaY: function(a) {
				return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
			},
			deltaZ: null,
			deltaMode: null
		});
		var wf = {
			eventTypes: Wc,
			extractEvents: function(a, b, c, d) {
				var e = Yc.get(a);
				if (!e) return null;
				switch (a) {
					case "keypress": if (0 === of(c)) return null;
					case "keydown":
					case "keyup":
						a = rf;
						break;
					case "blur":
					case "focus":
						a = nf;
						break;
					case "click": if (2 === c.button) return null;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						a = Ve;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						a = sf;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						a = tf;
						break;
					case Xb:
					case Yb:
					case Zb:
						a = lf;
						break;
					case $b:
						a = uf;
						break;
					case "scroll":
						a = Ne;
						break;
					case "wheel":
						a = vf;
						break;
					case "copy":
					case "cut":
					case "paste":
						a = mf;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						a = We;
						break;
					default: a = G;
				}
				b = a.getPooled(e, b, c, d);
				Xd(b);
				return b;
			}
		};
		if (pa) throw Error(u(101));
		pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
		ra();
		var xf = Nc;
		la = Qd;
		ma = xf;
		na = Pd;
		xa({
			SimpleEventPlugin: wf,
			EnterLeaveEventPlugin: Ye,
			ChangeEventPlugin: Me,
			SelectEventPlugin: kf,
			BeforeInputEventPlugin: ve
		});
		var yf = [];
		var zf = -1;
		function H(a) {
			0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
		}
		function I(a, b) {
			zf++;
			yf[zf] = a.current;
			a.current = b;
		}
		var Af = {};
		var J = { current: Af };
		var K = { current: !1 };
		var Bf = Af;
		function Cf(a, b) {
			var c = a.type.contextTypes;
			if (!c) return Af;
			var d = a.stateNode;
			if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
			var e = {}, f;
			for (f in c) e[f] = b[f];
			d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
			return e;
		}
		function L(a) {
			a = a.childContextTypes;
			return null !== a && void 0 !== a;
		}
		function Df() {
			H(K);
			H(J);
		}
		function Ef(a, b, c) {
			if (J.current !== Af) throw Error(u(168));
			I(J, b);
			I(K, c);
		}
		function Ff(a, b, c) {
			var d = a.stateNode;
			a = b.childContextTypes;
			if ("function" !== typeof d.getChildContext) return c;
			d = d.getChildContext();
			for (var e in d) if (!(e in a)) throw Error(u(108, pb(b) || "Unknown", e));
			return n({}, c, {}, d);
		}
		function Gf(a) {
			a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
			Bf = J.current;
			I(J, a);
			I(K, K.current);
			return !0;
		}
		function Hf(a, b, c) {
			var d = a.stateNode;
			if (!d) throw Error(u(169));
			c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
			I(K, c);
		}
		var If = r.unstable_runWithPriority;
		var Jf = r.unstable_scheduleCallback;
		var Kf = r.unstable_cancelCallback;
		var Lf = r.unstable_requestPaint;
		var Mf = r.unstable_now;
		var Nf = r.unstable_getCurrentPriorityLevel;
		var Of = r.unstable_ImmediatePriority;
		var Pf = r.unstable_UserBlockingPriority;
		var Qf = r.unstable_NormalPriority;
		var Rf = r.unstable_LowPriority;
		var Sf = r.unstable_IdlePriority;
		var Tf = {};
		var Uf = r.unstable_shouldYield;
		var Vf = void 0 !== Lf ? Lf : function() {};
		var Wf = null;
		var Xf = null;
		var Yf = !1;
		var Zf = Mf();
		var $f = 1e4 > Zf ? Mf : function() {
			return Mf() - Zf;
		};
		function ag() {
			switch (Nf()) {
				case Of: return 99;
				case Pf: return 98;
				case Qf: return 97;
				case Rf: return 96;
				case Sf: return 95;
				default: throw Error(u(332));
			}
		}
		function bg(a) {
			switch (a) {
				case 99: return Of;
				case 98: return Pf;
				case 97: return Qf;
				case 96: return Rf;
				case 95: return Sf;
				default: throw Error(u(332));
			}
		}
		function cg(a, b) {
			a = bg(a);
			return If(a, b);
		}
		function dg(a, b, c) {
			a = bg(a);
			return Jf(a, b, c);
		}
		function eg(a) {
			null === Wf ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
			return Tf;
		}
		function gg() {
			if (null !== Xf) {
				var a = Xf;
				Xf = null;
				Kf(a);
			}
			fg();
		}
		function fg() {
			if (!Yf && null !== Wf) {
				Yf = !0;
				var a = 0;
				try {
					var b = Wf;
					cg(99, function() {
						for (; a < b.length; a++) {
							var c = b[a];
							do
								c = c(!0);
							while (null !== c);
						}
					});
					Wf = null;
				} catch (c) {
					throw null !== Wf && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
				} finally {
					Yf = !1;
				}
			}
		}
		function hg(a, b, c) {
			c /= 10;
			return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
		}
		function ig(a, b) {
			if (a && a.defaultProps) {
				b = n({}, b);
				a = a.defaultProps;
				for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			}
			return b;
		}
		var jg = { current: null };
		var kg = null;
		var lg = null;
		var mg = null;
		function ng() {
			mg = lg = kg = null;
		}
		function og(a) {
			var b = jg.current;
			H(jg);
			a.type._context._currentValue = b;
		}
		function pg(a, b) {
			for (; null !== a;) {
				var c = a.alternate;
				if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
				else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;
				else break;
				a = a.return;
			}
		}
		function qg(a, b) {
			kg = a;
			mg = lg = null;
			a = a.dependencies;
			null !== a && null !== a.firstContext && (a.expirationTime >= b && (rg = !0), a.firstContext = null);
		}
		function sg(a, b) {
			if (mg !== a && !1 !== b && 0 !== b) {
				if ("number" !== typeof b || 1073741823 === b) mg = a, b = 1073741823;
				b = {
					context: a,
					observedBits: b,
					next: null
				};
				if (null === lg) {
					if (null === kg) throw Error(u(308));
					lg = b;
					kg.dependencies = {
						expirationTime: 0,
						firstContext: b,
						responders: null
					};
				} else lg = lg.next = b;
			}
			return a._currentValue;
		}
		var tg = !1;
		function ug(a) {
			a.updateQueue = {
				baseState: a.memoizedState,
				baseQueue: null,
				shared: { pending: null },
				effects: null
			};
		}
		function vg(a, b) {
			a = a.updateQueue;
			b.updateQueue === a && (b.updateQueue = {
				baseState: a.baseState,
				baseQueue: a.baseQueue,
				shared: a.shared,
				effects: a.effects
			});
		}
		function wg(a, b) {
			a = {
				expirationTime: a,
				suspenseConfig: b,
				tag: 0,
				payload: null,
				callback: null,
				next: null
			};
			return a.next = a;
		}
		function xg(a, b) {
			a = a.updateQueue;
			if (null !== a) {
				a = a.shared;
				var c = a.pending;
				null === c ? b.next = b : (b.next = c.next, c.next = b);
				a.pending = b;
			}
		}
		function yg(a, b) {
			var c = a.alternate;
			null !== c && vg(c, a);
			a = a.updateQueue;
			c = a.baseQueue;
			null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
		}
		function zg(a, b, c, d) {
			var e = a.updateQueue;
			tg = !1;
			var f = e.baseQueue, g = e.shared.pending;
			if (null !== g) {
				if (null !== f) {
					var h = f.next;
					f.next = g.next;
					g.next = h;
				}
				f = g;
				e.shared.pending = null;
				h = a.alternate;
				null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g));
			}
			if (null !== f) {
				h = f.next;
				var k = e.baseState, l = 0, m = null, p = null, x = null;
				if (null !== h) {
					var z = h;
					do {
						g = z.expirationTime;
						if (g < d) {
							var ca = {
								expirationTime: z.expirationTime,
								suspenseConfig: z.suspenseConfig,
								tag: z.tag,
								payload: z.payload,
								callback: z.callback,
								next: null
							};
							null === x ? (p = x = ca, m = k) : x = x.next = ca;
							g > l && (l = g);
						} else {
							null !== x && (x = x.next = {
								expirationTime: 1073741823,
								suspenseConfig: z.suspenseConfig,
								tag: z.tag,
								payload: z.payload,
								callback: z.callback,
								next: null
							});
							Ag(g, z.suspenseConfig);
							a: {
								var D = a, t = z;
								g = b;
								ca = c;
								switch (t.tag) {
									case 1:
										D = t.payload;
										if ("function" === typeof D) {
											k = D.call(ca, k, g);
											break a;
										}
										k = D;
										break a;
									case 3: D.effectTag = D.effectTag & -4097 | 64;
									case 0:
										D = t.payload;
										g = "function" === typeof D ? D.call(ca, k, g) : D;
										if (null === g || void 0 === g) break a;
										k = n({}, k, g);
										break a;
									case 2: tg = !0;
								}
							}
							null !== z.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [z] : g.push(z));
						}
						z = z.next;
						if (null === z || z === h) if (g = e.shared.pending, null === g) break;
						else z = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
					} while (1);
				}
				null === x ? m = k : x.next = p;
				e.baseState = m;
				e.baseQueue = x;
				Bg(l);
				a.expirationTime = l;
				a.memoizedState = k;
			}
		}
		function Cg(a, b, c) {
			a = b.effects;
			b.effects = null;
			if (null !== a) for (b = 0; b < a.length; b++) {
				var d = a[b], e = d.callback;
				if (null !== e) {
					d.callback = null;
					d = e;
					e = c;
					if ("function" !== typeof d) throw Error(u(191, d));
					d.call(e);
				}
			}
		}
		var Dg = Wa.ReactCurrentBatchConfig;
		var Eg = new aa.Component().refs;
		function Fg(a, b, c, d) {
			b = a.memoizedState;
			c = c(d, b);
			c = null === c || void 0 === c ? b : n({}, b, c);
			a.memoizedState = c;
			0 === a.expirationTime && (a.updateQueue.baseState = c);
		}
		var Jg = {
			isMounted: function(a) {
				return (a = a._reactInternalFiber) ? dc(a) === a : !1;
			},
			enqueueSetState: function(a, b, c) {
				a = a._reactInternalFiber;
				var d = Gg(), e = Dg.suspense;
				d = Hg(d, a, e);
				e = wg(d, e);
				e.payload = b;
				void 0 !== c && null !== c && (e.callback = c);
				xg(a, e);
				Ig(a, d);
			},
			enqueueReplaceState: function(a, b, c) {
				a = a._reactInternalFiber;
				var d = Gg(), e = Dg.suspense;
				d = Hg(d, a, e);
				e = wg(d, e);
				e.tag = 1;
				e.payload = b;
				void 0 !== c && null !== c && (e.callback = c);
				xg(a, e);
				Ig(a, d);
			},
			enqueueForceUpdate: function(a, b) {
				a = a._reactInternalFiber;
				var c = Gg(), d = Dg.suspense;
				c = Hg(c, a, d);
				d = wg(c, d);
				d.tag = 2;
				void 0 !== b && null !== b && (d.callback = b);
				xg(a, d);
				Ig(a, c);
			}
		};
		function Kg(a, b, c, d, e, f, g) {
			a = a.stateNode;
			return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : !0;
		}
		function Lg(a, b, c) {
			var d = !1, e = Af;
			var f = b.contextType;
			"object" === typeof f && null !== f ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Cf(a, e) : Af);
			b = new b(c, f);
			a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
			b.updater = Jg;
			a.stateNode = b;
			b._reactInternalFiber = a;
			d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
			return b;
		}
		function Mg(a, b, c, d) {
			a = b.state;
			"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
			"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
			b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
		}
		function Ng(a, b, c, d) {
			var e = a.stateNode;
			e.props = c;
			e.state = a.memoizedState;
			e.refs = Eg;
			ug(a);
			var f = b.contextType;
			"object" === typeof f && null !== f ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
			zg(a, c, e, d);
			e.state = a.memoizedState;
			f = b.getDerivedStateFromProps;
			"function" === typeof f && (Fg(a, b, f, c), e.state = a.memoizedState);
			"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
			"function" === typeof e.componentDidMount && (a.effectTag |= 4);
		}
		var Og = Array.isArray;
		function Pg(a, b, c) {
			a = c.ref;
			if (null !== a && "function" !== typeof a && "object" !== typeof a) {
				if (c._owner) {
					c = c._owner;
					if (c) {
						if (1 !== c.tag) throw Error(u(309));
						var d = c.stateNode;
					}
					if (!d) throw Error(u(147, a));
					var e = "" + a;
					if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
					b = function(a) {
						var b = d.refs;
						b === Eg && (b = d.refs = {});
						null === a ? delete b[e] : b[e] = a;
					};
					b._stringRef = e;
					return b;
				}
				if ("string" !== typeof a) throw Error(u(284));
				if (!c._owner) throw Error(u(290, a));
			}
			return a;
		}
		function Qg(a, b) {
			if ("textarea" !== a.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
		}
		function Rg(a) {
			function b(b, c) {
				if (a) {
					var d = b.lastEffect;
					null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
					c.nextEffect = null;
					c.effectTag = 8;
				}
			}
			function c(c, d) {
				if (!a) return null;
				for (; null !== d;) b(c, d), d = d.sibling;
				return null;
			}
			function d(a, b) {
				for (a = /* @__PURE__ */ new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
				return a;
			}
			function e(a, b) {
				a = Sg(a, b);
				a.index = 0;
				a.sibling = null;
				return a;
			}
			function f(b, c, d) {
				b.index = d;
				if (!a) return c;
				d = b.alternate;
				if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
				b.effectTag = 2;
				return c;
			}
			function g(b) {
				a && null === b.alternate && (b.effectTag = 2);
				return b;
			}
			function h(a, b, c, d) {
				if (null === b || 6 !== b.tag) return b = Tg(c, a.mode, d), b.return = a, b;
				b = e(b, c);
				b.return = a;
				return b;
			}
			function k(a, b, c, d) {
				if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Pg(a, b, c), d.return = a, d;
				d = Ug(c.type, c.key, c.props, null, a.mode, d);
				d.ref = Pg(a, b, c);
				d.return = a;
				return d;
			}
			function l(a, b, c, d) {
				if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Vg(c, a.mode, d), b.return = a, b;
				b = e(b, c.children || []);
				b.return = a;
				return b;
			}
			function m(a, b, c, d, f) {
				if (null === b || 7 !== b.tag) return b = Wg(c, a.mode, d, f), b.return = a, b;
				b = e(b, c);
				b.return = a;
				return b;
			}
			function p(a, b, c) {
				if ("string" === typeof b || "number" === typeof b) return b = Tg("" + b, a.mode, c), b.return = a, b;
				if ("object" === typeof b && null !== b) {
					switch (b.$$typeof) {
						case Za: return c = Ug(b.type, b.key, b.props, null, a.mode, c), c.ref = Pg(a, null, b), c.return = a, c;
						case $a: return b = Vg(b, a.mode, c), b.return = a, b;
					}
					if (Og(b) || nb(b)) return b = Wg(b, a.mode, c, null), b.return = a, b;
					Qg(a, b);
				}
				return null;
			}
			function x(a, b, c, d) {
				var e = null !== b ? b.key : null;
				if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
				if ("object" === typeof c && null !== c) {
					switch (c.$$typeof) {
						case Za: return c.key === e ? c.type === ab ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
						case $a: return c.key === e ? l(a, b, c, d) : null;
					}
					if (Og(c) || nb(c)) return null !== e ? null : m(a, b, c, d, null);
					Qg(a, c);
				}
				return null;
			}
			function z(a, b, c, d, e) {
				if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
				if ("object" === typeof d && null !== d) {
					switch (d.$$typeof) {
						case Za: return a = a.get(null === d.key ? c : d.key) || null, d.type === ab ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e);
						case $a: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
					}
					if (Og(d) || nb(d)) return a = a.get(c) || null, m(b, a, d, e, null);
					Qg(b, d);
				}
				return null;
			}
			function ca(e, g, h, k) {
				for (var l = null, t = null, m = g, y = g = 0, A = null; null !== m && y < h.length; y++) {
					m.index > y ? (A = m, m = null) : A = m.sibling;
					var q = x(e, m, h[y], k);
					if (null === q) {
						null === m && (m = A);
						break;
					}
					a && m && null === q.alternate && b(e, m);
					g = f(q, g, y);
					null === t ? l = q : t.sibling = q;
					t = q;
					m = A;
				}
				if (y === h.length) return c(e, m), l;
				if (null === m) {
					for (; y < h.length; y++) m = p(e, h[y], k), null !== m && (g = f(m, g, y), null === t ? l = m : t.sibling = m, t = m);
					return l;
				}
				for (m = d(e, m); y < h.length; y++) A = z(m, e, y, h[y], k), null !== A && (a && null !== A.alternate && m.delete(null === A.key ? y : A.key), g = f(A, g, y), null === t ? l = A : t.sibling = A, t = A);
				a && m.forEach(function(a) {
					return b(e, a);
				});
				return l;
			}
			function D(e, g, h, l) {
				var k = nb(h);
				if ("function" !== typeof k) throw Error(u(150));
				h = k.call(h);
				if (null == h) throw Error(u(151));
				for (var m = k = null, t = g, y = g = 0, A = null, q = h.next(); null !== t && !q.done; y++, q = h.next()) {
					t.index > y ? (A = t, t = null) : A = t.sibling;
					var D = x(e, t, q.value, l);
					if (null === D) {
						null === t && (t = A);
						break;
					}
					a && t && null === D.alternate && b(e, t);
					g = f(D, g, y);
					null === m ? k = D : m.sibling = D;
					m = D;
					t = A;
				}
				if (q.done) return c(e, t), k;
				if (null === t) {
					for (; !q.done; y++, q = h.next()) q = p(e, q.value, l), null !== q && (g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q);
					return k;
				}
				for (t = d(e, t); !q.done; y++, q = h.next()) q = z(t, e, y, q.value, l), null !== q && (a && null !== q.alternate && t.delete(null === q.key ? y : q.key), g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q);
				a && t.forEach(function(a) {
					return b(e, a);
				});
				return k;
			}
			return function(a, d, f, h) {
				var k = "object" === typeof f && null !== f && f.type === ab && null === f.key;
				k && (f = f.props.children);
				var l = "object" === typeof f && null !== f;
				if (l) switch (f.$$typeof) {
					case Za:
						a: {
							l = f.key;
							for (k = d; null !== k;) {
								if (k.key === l) {
									switch (k.tag) {
										case 7:
											if (f.type === ab) {
												c(a, k.sibling);
												d = e(k, f.props.children);
												d.return = a;
												a = d;
												break a;
											}
											break;
										default: if (k.elementType === f.type) {
											c(a, k.sibling);
											d = e(k, f.props);
											d.ref = Pg(a, k, f);
											d.return = a;
											a = d;
											break a;
										}
									}
									c(a, k);
									break;
								} else b(a, k);
								k = k.sibling;
							}
							f.type === ab ? (d = Wg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Ug(f.type, f.key, f.props, null, a.mode, h), h.ref = Pg(a, d, f), h.return = a, a = h);
						}
						return g(a);
					case $a:
						a: {
							for (k = f.key; null !== d;) {
								if (d.key === k) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
									c(a, d.sibling);
									d = e(d, f.children || []);
									d.return = a;
									a = d;
									break a;
								} else {
									c(a, d);
									break;
								}
								else b(a, d);
								d = d.sibling;
							}
							d = Vg(f, a.mode, h);
							d.return = a;
							a = d;
						}
						return g(a);
				}
				if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Tg(f, a.mode, h), d.return = a, a = d), g(a);
				if (Og(f)) return ca(a, d, f, h);
				if (nb(f)) return D(a, d, f, h);
				l && Qg(a, f);
				if ("undefined" === typeof f && !k) switch (a.tag) {
					case 1:
					case 0: throw a = a.type, Error(u(152, a.displayName || a.name || "Component"));
				}
				return c(a, d);
			};
		}
		var Xg = Rg(!0);
		var Yg = Rg(!1);
		var Zg = {};
		var $g = { current: Zg };
		var ah = { current: Zg };
		var bh = { current: Zg };
		function ch(a) {
			if (a === Zg) throw Error(u(174));
			return a;
		}
		function dh(a, b) {
			I(bh, b);
			I(ah, a);
			I($g, Zg);
			a = b.nodeType;
			switch (a) {
				case 9:
				case 11:
					b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
					break;
				default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
			}
			H($g);
			I($g, b);
		}
		function eh() {
			H($g);
			H(ah);
			H(bh);
		}
		function fh(a) {
			ch(bh.current);
			var b = ch($g.current);
			var c = Ob(b, a.type);
			b !== c && (I(ah, a), I($g, c));
		}
		function gh(a) {
			ah.current === a && (H($g), H(ah));
		}
		var M = { current: 0 };
		function hh(a) {
			for (var b = a; null !== b;) {
				if (13 === b.tag) {
					var c = b.memoizedState;
					if (null !== c && (c = c.dehydrated, null === c || c.data === Bd || c.data === Cd)) return b;
				} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
					if (0 !== (b.effectTag & 64)) return b;
				} else if (null !== b.child) {
					b.child.return = b;
					b = b.child;
					continue;
				}
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return null;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
			return null;
		}
		function ih(a, b) {
			return {
				responder: a,
				props: b
			};
		}
		var jh = Wa.ReactCurrentDispatcher;
		var kh = Wa.ReactCurrentBatchConfig;
		var lh = 0;
		var N = null;
		var O = null;
		var P = null;
		var mh = !1;
		function Q() {
			throw Error(u(321));
		}
		function nh(a, b) {
			if (null === b) return !1;
			for (var c = 0; c < b.length && c < a.length; c++) if (!$e(a[c], b[c])) return !1;
			return !0;
		}
		function oh(a, b, c, d, e, f) {
			lh = f;
			N = b;
			b.memoizedState = null;
			b.updateQueue = null;
			b.expirationTime = 0;
			jh.current = null === a || null === a.memoizedState ? ph : qh;
			a = c(d, e);
			if (b.expirationTime === lh) {
				f = 0;
				do {
					b.expirationTime = 0;
					if (!(25 > f)) throw Error(u(301));
					f += 1;
					P = O = null;
					b.updateQueue = null;
					jh.current = rh;
					a = c(d, e);
				} while (b.expirationTime === lh);
			}
			jh.current = sh;
			b = null !== O && null !== O.next;
			lh = 0;
			P = O = N = null;
			mh = !1;
			if (b) throw Error(u(300));
			return a;
		}
		function th() {
			var a = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			null === P ? N.memoizedState = P = a : P = P.next = a;
			return P;
		}
		function uh() {
			if (null === O) {
				var a = N.alternate;
				a = null !== a ? a.memoizedState : null;
			} else a = O.next;
			var b = null === P ? N.memoizedState : P.next;
			if (null !== b) P = b, O = a;
			else {
				if (null === a) throw Error(u(310));
				O = a;
				a = {
					memoizedState: O.memoizedState,
					baseState: O.baseState,
					baseQueue: O.baseQueue,
					queue: O.queue,
					next: null
				};
				null === P ? N.memoizedState = P = a : P = P.next = a;
			}
			return P;
		}
		function vh(a, b) {
			return "function" === typeof b ? b(a) : b;
		}
		function wh(a) {
			var b = uh(), c = b.queue;
			if (null === c) throw Error(u(311));
			c.lastRenderedReducer = a;
			var d = O, e = d.baseQueue, f = c.pending;
			if (null !== f) {
				if (null !== e) {
					var g = e.next;
					e.next = f.next;
					f.next = g;
				}
				d.baseQueue = e = f;
				c.pending = null;
			}
			if (null !== e) {
				e = e.next;
				d = d.baseState;
				var h = g = f = null, k = e;
				do {
					var l = k.expirationTime;
					if (l < lh) {
						var m = {
							expirationTime: k.expirationTime,
							suspenseConfig: k.suspenseConfig,
							action: k.action,
							eagerReducer: k.eagerReducer,
							eagerState: k.eagerState,
							next: null
						};
						null === h ? (g = h = m, f = d) : h = h.next = m;
						l > N.expirationTime && (N.expirationTime = l, Bg(l));
					} else null !== h && (h = h.next = {
						expirationTime: 1073741823,
						suspenseConfig: k.suspenseConfig,
						action: k.action,
						eagerReducer: k.eagerReducer,
						eagerState: k.eagerState,
						next: null
					}), Ag(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
					k = k.next;
				} while (null !== k && k !== e);
				null === h ? f = d : h.next = g;
				$e(d, b.memoizedState) || (rg = !0);
				b.memoizedState = d;
				b.baseState = f;
				b.baseQueue = h;
				c.lastRenderedState = d;
			}
			return [b.memoizedState, c.dispatch];
		}
		function xh(a) {
			var b = uh(), c = b.queue;
			if (null === c) throw Error(u(311));
			c.lastRenderedReducer = a;
			var d = c.dispatch, e = c.pending, f = b.memoizedState;
			if (null !== e) {
				c.pending = null;
				var g = e = e.next;
				do
					f = a(f, g.action), g = g.next;
				while (g !== e);
				$e(f, b.memoizedState) || (rg = !0);
				b.memoizedState = f;
				null === b.baseQueue && (b.baseState = f);
				c.lastRenderedState = f;
			}
			return [f, d];
		}
		function yh(a) {
			var b = th();
			"function" === typeof a && (a = a());
			b.memoizedState = b.baseState = a;
			a = b.queue = {
				pending: null,
				dispatch: null,
				lastRenderedReducer: vh,
				lastRenderedState: a
			};
			a = a.dispatch = zh.bind(null, N, a);
			return [b.memoizedState, a];
		}
		function Ah(a, b, c, d) {
			a = {
				tag: a,
				create: b,
				destroy: c,
				deps: d,
				next: null
			};
			b = N.updateQueue;
			null === b ? (b = { lastEffect: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
			return a;
		}
		function Bh() {
			return uh().memoizedState;
		}
		function Ch(a, b, c, d) {
			var e = th();
			N.effectTag |= a;
			e.memoizedState = Ah(1 | b, c, void 0, void 0 === d ? null : d);
		}
		function Dh(a, b, c, d) {
			var e = uh();
			d = void 0 === d ? null : d;
			var f = void 0;
			if (null !== O) {
				var g = O.memoizedState;
				f = g.destroy;
				if (null !== d && nh(d, g.deps)) {
					Ah(b, c, f, d);
					return;
				}
			}
			N.effectTag |= a;
			e.memoizedState = Ah(1 | b, c, f, d);
		}
		function Eh(a, b) {
			return Ch(516, 4, a, b);
		}
		function Fh(a, b) {
			return Dh(516, 4, a, b);
		}
		function Gh(a, b) {
			return Dh(4, 2, a, b);
		}
		function Hh(a, b) {
			if ("function" === typeof b) return a = a(), b(a), function() {
				b(null);
			};
			if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
				b.current = null;
			};
		}
		function Ih(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return Dh(4, 2, Hh.bind(null, b, a), c);
		}
		function Jh() {}
		function Kh(a, b) {
			th().memoizedState = [a, void 0 === b ? null : b];
			return a;
		}
		function Lh(a, b) {
			var c = uh();
			b = void 0 === b ? null : b;
			var d = c.memoizedState;
			if (null !== d && null !== b && nh(b, d[1])) return d[0];
			c.memoizedState = [a, b];
			return a;
		}
		function Mh(a, b) {
			var c = uh();
			b = void 0 === b ? null : b;
			var d = c.memoizedState;
			if (null !== d && null !== b && nh(b, d[1])) return d[0];
			a = a();
			c.memoizedState = [a, b];
			return a;
		}
		function Nh(a, b, c) {
			var d = ag();
			cg(98 > d ? 98 : d, function() {
				a(!0);
			});
			cg(97 < d ? 97 : d, function() {
				var d = kh.suspense;
				kh.suspense = void 0 === b ? null : b;
				try {
					a(!1), c();
				} finally {
					kh.suspense = d;
				}
			});
		}
		function zh(a, b, c) {
			var d = Gg(), e = Dg.suspense;
			d = Hg(d, a, e);
			e = {
				expirationTime: d,
				suspenseConfig: e,
				action: c,
				eagerReducer: null,
				eagerState: null,
				next: null
			};
			var f = b.pending;
			null === f ? e.next = e : (e.next = f.next, f.next = e);
			b.pending = e;
			f = a.alternate;
			if (a === N || null !== f && f === N) mh = !0, e.expirationTime = lh, N.expirationTime = lh;
			else {
				if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try {
					var g = b.lastRenderedState, h = f(g, c);
					e.eagerReducer = f;
					e.eagerState = h;
					if ($e(h, g)) return;
				} catch (k) {}
				Ig(a, d);
			}
		}
		var sh = {
			readContext: sg,
			useCallback: Q,
			useContext: Q,
			useEffect: Q,
			useImperativeHandle: Q,
			useLayoutEffect: Q,
			useMemo: Q,
			useReducer: Q,
			useRef: Q,
			useState: Q,
			useDebugValue: Q,
			useResponder: Q,
			useDeferredValue: Q,
			useTransition: Q
		};
		var ph = {
			readContext: sg,
			useCallback: Kh,
			useContext: sg,
			useEffect: Eh,
			useImperativeHandle: function(a, b, c) {
				c = null !== c && void 0 !== c ? c.concat([a]) : null;
				return Ch(4, 2, Hh.bind(null, b, a), c);
			},
			useLayoutEffect: function(a, b) {
				return Ch(4, 2, a, b);
			},
			useMemo: function(a, b) {
				var c = th();
				b = void 0 === b ? null : b;
				a = a();
				c.memoizedState = [a, b];
				return a;
			},
			useReducer: function(a, b, c) {
				var d = th();
				b = void 0 !== c ? c(b) : b;
				d.memoizedState = d.baseState = b;
				a = d.queue = {
					pending: null,
					dispatch: null,
					lastRenderedReducer: a,
					lastRenderedState: b
				};
				a = a.dispatch = zh.bind(null, N, a);
				return [d.memoizedState, a];
			},
			useRef: function(a) {
				var b = th();
				a = { current: a };
				return b.memoizedState = a;
			},
			useState: yh,
			useDebugValue: Jh,
			useResponder: ih,
			useDeferredValue: function(a, b) {
				var c = yh(a), d = c[0], e = c[1];
				Eh(function() {
					var c = kh.suspense;
					kh.suspense = void 0 === b ? null : b;
					try {
						e(a);
					} finally {
						kh.suspense = c;
					}
				}, [a, b]);
				return d;
			},
			useTransition: function(a) {
				var b = yh(!1), c = b[0];
				b = b[1];
				return [Kh(Nh.bind(null, b, a), [b, a]), c];
			}
		};
		var qh = {
			readContext: sg,
			useCallback: Lh,
			useContext: sg,
			useEffect: Fh,
			useImperativeHandle: Ih,
			useLayoutEffect: Gh,
			useMemo: Mh,
			useReducer: wh,
			useRef: Bh,
			useState: function() {
				return wh(vh);
			},
			useDebugValue: Jh,
			useResponder: ih,
			useDeferredValue: function(a, b) {
				var c = wh(vh), d = c[0], e = c[1];
				Fh(function() {
					var c = kh.suspense;
					kh.suspense = void 0 === b ? null : b;
					try {
						e(a);
					} finally {
						kh.suspense = c;
					}
				}, [a, b]);
				return d;
			},
			useTransition: function(a) {
				var b = wh(vh), c = b[0];
				b = b[1];
				return [Lh(Nh.bind(null, b, a), [b, a]), c];
			}
		};
		var rh = {
			readContext: sg,
			useCallback: Lh,
			useContext: sg,
			useEffect: Fh,
			useImperativeHandle: Ih,
			useLayoutEffect: Gh,
			useMemo: Mh,
			useReducer: xh,
			useRef: Bh,
			useState: function() {
				return xh(vh);
			},
			useDebugValue: Jh,
			useResponder: ih,
			useDeferredValue: function(a, b) {
				var c = xh(vh), d = c[0], e = c[1];
				Fh(function() {
					var c = kh.suspense;
					kh.suspense = void 0 === b ? null : b;
					try {
						e(a);
					} finally {
						kh.suspense = c;
					}
				}, [a, b]);
				return d;
			},
			useTransition: function(a) {
				var b = xh(vh), c = b[0];
				b = b[1];
				return [Lh(Nh.bind(null, b, a), [b, a]), c];
			}
		};
		var Oh = null;
		var Ph = null;
		var Qh = !1;
		function Rh(a, b) {
			var c = Sh(5, null, null, 0);
			c.elementType = "DELETED";
			c.type = "DELETED";
			c.stateNode = b;
			c.return = a;
			c.effectTag = 8;
			null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
		}
		function Th(a, b) {
			switch (a.tag) {
				case 5:
					var c = a.type;
					b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
					return null !== b ? (a.stateNode = b, !0) : !1;
				case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;
				case 13: return !1;
				default: return !1;
			}
		}
		function Uh(a) {
			if (Qh) {
				var b = Ph;
				if (b) {
					var c = b;
					if (!Th(a, b)) {
						b = Jd(c.nextSibling);
						if (!b || !Th(a, b)) {
							a.effectTag = a.effectTag & -1025 | 2;
							Qh = !1;
							Oh = a;
							return;
						}
						Rh(Oh, c);
					}
					Oh = a;
					Ph = Jd(b.firstChild);
				} else a.effectTag = a.effectTag & -1025 | 2, Qh = !1, Oh = a;
			}
		}
		function Vh(a) {
			for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
			Oh = a;
		}
		function Wh(a) {
			if (a !== Oh) return !1;
			if (!Qh) return Vh(a), Qh = !0, !1;
			var b = a.type;
			if (5 !== a.tag || "head" !== b && "body" !== b && !Gd(b, a.memoizedProps)) for (b = Ph; b;) Rh(a, b), b = Jd(b.nextSibling);
			Vh(a);
			if (13 === a.tag) {
				a = a.memoizedState;
				a = null !== a ? a.dehydrated : null;
				if (!a) throw Error(u(317));
				a: {
					a = a.nextSibling;
					for (b = 0; a;) {
						if (8 === a.nodeType) {
							var c = a.data;
							if (c === Ad) {
								if (0 === b) {
									Ph = Jd(a.nextSibling);
									break a;
								}
								b--;
							} else c !== zd && c !== Cd && c !== Bd || b++;
						}
						a = a.nextSibling;
					}
					Ph = null;
				}
			} else Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
			return !0;
		}
		function Xh() {
			Ph = Oh = null;
			Qh = !1;
		}
		var Yh = Wa.ReactCurrentOwner;
		var rg = !1;
		function R(a, b, c, d) {
			b.child = null === a ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
		}
		function Zh(a, b, c, d, e) {
			c = c.render;
			var f = b.ref;
			qg(b, e);
			d = oh(a, b, c, d, f, e);
			if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
			b.effectTag |= 1;
			R(a, b, d, e);
			return b.child;
		}
		function ai(a, b, c, d, e, f) {
			if (null === a) {
				var g = c.type;
				if ("function" === typeof g && !bi(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
				a = Ug(c.type, null, d, null, b.mode, f);
				a.ref = b.ref;
				a.return = b;
				return b.child = a;
			}
			g = a.child;
			if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : bf, c(e, d) && a.ref === b.ref)) return $h(a, b, f);
			b.effectTag |= 1;
			a = Sg(g, d);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		function ci(a, b, c, d, e, f) {
			return null !== a && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = !1, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
		}
		function ei(a, b) {
			var c = b.ref;
			if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
		}
		function di(a, b, c, d, e) {
			var f = L(c) ? Bf : J.current;
			f = Cf(b, f);
			qg(b, e);
			c = oh(a, b, c, d, f, e);
			if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
			b.effectTag |= 1;
			R(a, b, c, e);
			return b.child;
		}
		function fi(a, b, c, d, e) {
			if (L(c)) {
				var f = !0;
				Gf(b);
			} else f = !1;
			qg(b, e);
			if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = !0;
			else if (null === a) {
				var g = b.stateNode, h = b.memoizedProps;
				g.props = h;
				var k = g.context, l = c.contextType;
				"object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l));
				var m = c.getDerivedStateFromProps, p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
				p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l);
				tg = !1;
				var x = b.memoizedState;
				g.state = x;
				zg(b, d, g, e);
				k = b.memoizedState;
				h !== d || x !== k || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x, k, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
			} else g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l), tg = !1, k = b.memoizedState, g.state = k, zg(b, d, g, e), x = b.memoizedState, h !== d || k !== x || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), x = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
			return gi(a, b, c, d, f, e);
		}
		function gi(a, b, c, d, e, f) {
			ei(a, b);
			var g = 0 !== (b.effectTag & 64);
			if (!d && !g) return e && Hf(b, c, !1), $h(a, b, f);
			d = b.stateNode;
			Yh.current = b;
			var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
			b.effectTag |= 1;
			null !== a && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
			b.memoizedState = d.state;
			e && Hf(b, c, !0);
			return b.child;
		}
		function hi(a) {
			var b = a.stateNode;
			b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, !1);
			dh(a, b.containerInfo);
		}
		var ii = {
			dehydrated: null,
			retryTime: 0
		};
		function ji(a, b, c) {
			var d = b.mode, e = b.pendingProps, f = M.current, g = !1, h;
			(h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
			h ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
			I(M, f & 1);
			if (null === a) {
				void 0 !== e.fallback && Uh(b);
				if (g) {
					g = e.fallback;
					e = Wg(null, d, 0, null);
					e.return = b;
					if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
					c = Wg(g, d, c, null);
					c.return = b;
					e.sibling = c;
					b.memoizedState = ii;
					b.child = e;
					return c;
				}
				d = e.children;
				b.memoizedState = null;
				return b.child = Yg(b, null, d, c);
			}
			if (null !== a.memoizedState) {
				a = a.child;
				d = a.sibling;
				if (g) {
					e = e.fallback;
					c = Sg(a, a.pendingProps);
					c.return = b;
					if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) g.return = c, g = g.sibling;
					d = Sg(d, e);
					d.return = b;
					c.sibling = d;
					c.childExpirationTime = 0;
					b.memoizedState = ii;
					b.child = c;
					return d;
				}
				c = Xg(b, a.child, e.children, c);
				b.memoizedState = null;
				return b.child = c;
			}
			a = a.child;
			if (g) {
				g = e.fallback;
				e = Wg(null, d, 0, null);
				e.return = b;
				e.child = a;
				null !== a && (a.return = e);
				if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
				c = Wg(g, d, c, null);
				c.return = b;
				e.sibling = c;
				c.effectTag |= 2;
				e.childExpirationTime = 0;
				b.memoizedState = ii;
				b.child = e;
				return c;
			}
			b.memoizedState = null;
			return b.child = Xg(b, a, e.children, c);
		}
		function ki(a, b) {
			a.expirationTime < b && (a.expirationTime = b);
			var c = a.alternate;
			null !== c && c.expirationTime < b && (c.expirationTime = b);
			pg(a.return, b);
		}
		function li(a, b, c, d, e, f) {
			var g = a.memoizedState;
			null === g ? a.memoizedState = {
				isBackwards: b,
				rendering: null,
				renderingStartTime: 0,
				last: d,
				tail: c,
				tailExpiration: 0,
				tailMode: e,
				lastEffect: f
			} : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
		}
		function mi(a, b, c) {
			var d = b.pendingProps, e = d.revealOrder, f = d.tail;
			R(a, b, d.children, c);
			d = M.current;
			if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;
			else {
				if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
					if (13 === a.tag) null !== a.memoizedState && ki(a, c);
					else if (19 === a.tag) ki(a, c);
					else if (null !== a.child) {
						a.child.return = a;
						a = a.child;
						continue;
					}
					if (a === b) break a;
					for (; null === a.sibling;) {
						if (null === a.return || a.return === b) break a;
						a = a.return;
					}
					a.sibling.return = a.return;
					a = a.sibling;
				}
				d &= 1;
			}
			I(M, d);
			if (0 === (b.mode & 2)) b.memoizedState = null;
			else switch (e) {
				case "forwards":
					c = b.child;
					for (e = null; null !== c;) a = c.alternate, null !== a && null === hh(a) && (e = c), c = c.sibling;
					c = e;
					null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
					li(b, !1, e, c, f, b.lastEffect);
					break;
				case "backwards":
					c = null;
					e = b.child;
					for (b.child = null; null !== e;) {
						a = e.alternate;
						if (null !== a && null === hh(a)) {
							b.child = e;
							break;
						}
						a = e.sibling;
						e.sibling = c;
						c = e;
						e = a;
					}
					li(b, !0, c, null, f, b.lastEffect);
					break;
				case "together":
					li(b, !1, null, null, void 0, b.lastEffect);
					break;
				default: b.memoizedState = null;
			}
			return b.child;
		}
		function $h(a, b, c) {
			null !== a && (b.dependencies = a.dependencies);
			var d = b.expirationTime;
			0 !== d && Bg(d);
			if (b.childExpirationTime < c) return null;
			if (null !== a && b.child !== a.child) throw Error(u(153));
			if (null !== b.child) {
				a = b.child;
				c = Sg(a, a.pendingProps);
				b.child = c;
				for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
				c.sibling = null;
			}
			return b.child;
		}
		var ni = function(a, b) {
			for (var c = b.child; null !== c;) {
				if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
				else if (4 !== c.tag && null !== c.child) {
					c.child.return = c;
					c = c.child;
					continue;
				}
				if (c === b) break;
				for (; null === c.sibling;) {
					if (null === c.return || c.return === b) return;
					c = c.return;
				}
				c.sibling.return = c.return;
				c = c.sibling;
			}
		};
		var pi = function(a, b, c, d, e) {
			var f = a.memoizedProps;
			if (f !== d) {
				var g = b.stateNode;
				ch($g.current);
				a = null;
				switch (c) {
					case "input":
						f = zb(g, f);
						d = zb(g, d);
						a = [];
						break;
					case "option":
						f = Gb(g, f);
						d = Gb(g, d);
						a = [];
						break;
					case "select":
						f = n({}, f, { value: void 0 });
						d = n({}, d, { value: void 0 });
						a = [];
						break;
					case "textarea":
						f = Ib(g, f);
						d = Ib(g, d);
						a = [];
						break;
					default: "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = sd);
				}
				od(c, d);
				var h, k;
				c = null;
				for (h in f) if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) if ("style" === h) for (k in g = f[h], g) g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");
				else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
				for (h in d) {
					var l = d[h];
					g = null != f ? f[h] : void 0;
					if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) if ("style" === h) if (g) {
						for (k in g) !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = "");
						for (k in l) l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}), c[k] = l[k]);
					} else c || (a || (a = []), a.push(h, c)), c = l;
					else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (va.hasOwnProperty(h) ? (null != l && rd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
				}
				c && (a = a || []).push("style", c);
				e = a;
				if (b.updateQueue = e) b.effectTag |= 4;
			}
		};
		var qi = function(a, b, c, d) {
			c !== d && (b.effectTag |= 4);
		};
		function ri(a, b) {
			switch (a.tailMode) {
				case "hidden":
					b = a.tail;
					for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
					null === c ? a.tail = null : c.sibling = null;
					break;
				case "collapsed":
					c = a.tail;
					for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
					null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
			}
		}
		function si(a, b, c) {
			var d = b.pendingProps;
			switch (b.tag) {
				case 2:
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14: return null;
				case 1: return L(b.type) && Df(), null;
				case 3: return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Wh(b) || (b.effectTag |= 4), null;
				case 5:
					gh(b);
					c = ch(bh.current);
					var e = b.type;
					if (null !== a && null != b.stateNode) pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
					else {
						if (!d) {
							if (null === b.stateNode) throw Error(u(166));
							return null;
						}
						a = ch($g.current);
						if (Wh(b)) {
							d = b.stateNode;
							e = b.type;
							var f = b.memoizedProps;
							d[Md] = b;
							d[Nd] = f;
							switch (e) {
								case "iframe":
								case "object":
								case "embed":
									F("load", d);
									break;
								case "video":
								case "audio":
									for (a = 0; a < ac.length; a++) F(ac[a], d);
									break;
								case "source":
									F("error", d);
									break;
								case "img":
								case "image":
								case "link":
									F("error", d);
									F("load", d);
									break;
								case "form":
									F("reset", d);
									F("submit", d);
									break;
								case "details":
									F("toggle", d);
									break;
								case "input":
									Ab(d, f);
									F("invalid", d);
									rd(c, "onChange");
									break;
								case "select":
									d._wrapperState = { wasMultiple: !!f.multiple };
									F("invalid", d);
									rd(c, "onChange");
									break;
								case "textarea": Jb(d, f), F("invalid", d), rd(c, "onChange");
							}
							od(e, f);
							a = null;
							for (var g in f) if (f.hasOwnProperty(g)) {
								var h = f[g];
								"children" === g ? "string" === typeof h ? d.textContent !== h && (a = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && null != h && rd(c, g);
							}
							switch (e) {
								case "input":
									xb(d);
									Eb(d, f, !0);
									break;
								case "textarea":
									xb(d);
									Lb(d);
									break;
								case "select":
								case "option": break;
								default: "function" === typeof f.onClick && (d.onclick = sd);
							}
							c = a;
							b.updateQueue = c;
							null !== c && (b.effectTag |= 4);
						} else {
							g = 9 === c.nodeType ? c : c.ownerDocument;
							a === qd && (a = Nb(e));
							a === qd ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, { is: d.is }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
							a[Md] = b;
							a[Nd] = d;
							ni(a, b, !1, !1);
							b.stateNode = a;
							g = pd(e, d);
							switch (e) {
								case "iframe":
								case "object":
								case "embed":
									F("load", a);
									h = d;
									break;
								case "video":
								case "audio":
									for (h = 0; h < ac.length; h++) F(ac[h], a);
									h = d;
									break;
								case "source":
									F("error", a);
									h = d;
									break;
								case "img":
								case "image":
								case "link":
									F("error", a);
									F("load", a);
									h = d;
									break;
								case "form":
									F("reset", a);
									F("submit", a);
									h = d;
									break;
								case "details":
									F("toggle", a);
									h = d;
									break;
								case "input":
									Ab(a, d);
									h = zb(a, d);
									F("invalid", a);
									rd(c, "onChange");
									break;
								case "option":
									h = Gb(a, d);
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									h = n({}, d, { value: void 0 });
									F("invalid", a);
									rd(c, "onChange");
									break;
								case "textarea":
									Jb(a, d);
									h = Ib(a, d);
									F("invalid", a);
									rd(c, "onChange");
									break;
								default: h = d;
							}
							od(e, h);
							var k = h;
							for (f in k) if (k.hasOwnProperty(f)) {
								var l = k[f];
								"style" === f ? md(a, l) : "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, null != l && Qb(a, l)) : "children" === f ? "string" === typeof l ? ("textarea" !== e || "" !== l) && Rb(a, l) : "number" === typeof l && Rb(a, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (va.hasOwnProperty(f) ? null != l && rd(c, f) : null != l && Xa(a, f, l, g));
							}
							switch (e) {
								case "input":
									xb(a);
									Eb(a, d, !1);
									break;
								case "textarea":
									xb(a);
									Lb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + rb(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									c = d.value;
									null != c ? Hb(a, !!d.multiple, c, !1) : null != d.defaultValue && Hb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof h.onClick && (a.onclick = sd);
							}
							Fd(e, d) && (b.effectTag |= 4);
						}
						null !== b.ref && (b.effectTag |= 128);
					}
					return null;
				case 6:
					if (a && null != b.stateNode) qi(a, b, a.memoizedProps, d);
					else {
						if ("string" !== typeof d && null === b.stateNode) throw Error(u(166));
						c = ch(bh.current);
						ch($g.current);
						Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
					}
					return null;
				case 13:
					H(M);
					d = b.memoizedState;
					if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b;
					c = null !== d;
					d = !1;
					null === a ? void 0 !== b.memoizedProps.fallback && Wh(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
					if (c && !d && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) S === ti && (S = ui);
					else {
						if (S === ti || S === ui) S = vi;
						0 !== wi && null !== T && (xi(T, U), yi(T, wi));
					}
					if (c || d) b.effectTag |= 4;
					return null;
				case 4: return eh(), null;
				case 10: return og(b), null;
				case 17: return L(b.type) && Df(), null;
				case 19:
					H(M);
					d = b.memoizedState;
					if (null === d) return null;
					e = 0 !== (b.effectTag & 64);
					f = d.rendering;
					if (null === f) {
						if (e) ri(d, !1);
						else if (S !== ti || null !== a && 0 !== (a.effectTag & 64)) for (f = b.child; null !== f;) {
							a = hh(f);
							if (null !== a) {
								b.effectTag |= 64;
								ri(d, !1);
								e = a.updateQueue;
								null !== e && (b.updateQueue = e, b.effectTag |= 4);
								null === d.lastEffect && (b.firstEffect = null);
								b.lastEffect = d.lastEffect;
								for (d = b.child; null !== d;) e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : {
									expirationTime: f.expirationTime,
									firstContext: f.firstContext,
									responders: f.responders
								}), d = d.sibling;
								I(M, M.current & 1 | 2);
								return b.child;
							}
							f = f.sibling;
						}
					} else {
						if (!e) if (a = hh(f), null !== a) {
							if (b.effectTag |= 64, e = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), ri(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
						} else 2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = !0, ri(d, !1), b.expirationTime = b.childExpirationTime = c - 1);
						d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f);
					}
					return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null;
			}
			throw Error(u(156, b.tag));
		}
		function zi(a) {
			switch (a.tag) {
				case 1:
					L(a.type) && Df();
					var b = a.effectTag;
					return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
				case 3:
					eh();
					H(K);
					H(J);
					b = a.effectTag;
					if (0 !== (b & 64)) throw Error(u(285));
					a.effectTag = b & -4097 | 64;
					return a;
				case 5: return gh(a), null;
				case 13: return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
				case 19: return H(M), null;
				case 4: return eh(), null;
				case 10: return og(a), null;
				default: return null;
			}
		}
		function Ai(a, b) {
			return {
				value: a,
				source: b,
				stack: qb(b)
			};
		}
		var Bi = "function" === typeof WeakSet ? WeakSet : Set;
		function Ci(a, b) {
			var c = b.source, d = b.stack;
			null === d && null !== c && (d = qb(c));
			null !== c && pb(c.type);
			b = b.value;
			null !== a && 1 === a.tag && pb(a.type);
			try {
				console.error(b);
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function Di(a, b) {
			try {
				b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
			} catch (c) {
				Ei(a, c);
			}
		}
		function Fi(a) {
			var b = a.ref;
			if (null !== b) if ("function" === typeof b) try {
				b(null);
			} catch (c) {
				Ei(a, c);
			}
			else b.current = null;
		}
		function Gi(a, b) {
			switch (b.tag) {
				case 0:
				case 11:
				case 15:
				case 22: return;
				case 1:
					if (b.effectTag & 256 && null !== a) {
						var c = a.memoizedProps, d = a.memoizedState;
						a = b.stateNode;
						b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
						a.__reactInternalSnapshotBeforeUpdate = b;
					}
					return;
				case 3:
				case 5:
				case 6:
				case 4:
				case 17: return;
			}
			throw Error(u(163));
		}
		function Hi(a, b) {
			b = b.updateQueue;
			b = null !== b ? b.lastEffect : null;
			if (null !== b) {
				var c = b = b.next;
				do {
					if ((c.tag & a) === a) {
						var d = c.destroy;
						c.destroy = void 0;
						void 0 !== d && d();
					}
					c = c.next;
				} while (c !== b);
			}
		}
		function Ii(a, b) {
			b = b.updateQueue;
			b = null !== b ? b.lastEffect : null;
			if (null !== b) {
				var c = b = b.next;
				do {
					if ((c.tag & a) === a) {
						var d = c.create;
						c.destroy = d();
					}
					c = c.next;
				} while (c !== b);
			}
		}
		function Ji(a, b, c) {
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
				case 22:
					Ii(3, c);
					return;
				case 1:
					a = c.stateNode;
					if (c.effectTag & 4) if (null === b) a.componentDidMount();
					else {
						var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps);
						a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
					}
					b = c.updateQueue;
					null !== b && Cg(c, b, a);
					return;
				case 3:
					b = c.updateQueue;
					if (null !== b) {
						a = null;
						if (null !== c.child) switch (c.child.tag) {
							case 5:
								a = c.child.stateNode;
								break;
							case 1: a = c.child.stateNode;
						}
						Cg(c, b, a);
					}
					return;
				case 5:
					a = c.stateNode;
					null === b && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
					return;
				case 6: return;
				case 4: return;
				case 12: return;
				case 13:
					null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Vc(c))));
					return;
				case 19:
				case 17:
				case 20:
				case 21: return;
			}
			throw Error(u(163));
		}
		function Ki(a, b, c) {
			"function" === typeof Li && Li(b);
			switch (b.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
				case 22:
					a = b.updateQueue;
					if (null !== a && (a = a.lastEffect, null !== a)) {
						var d = a.next;
						cg(97 < c ? 97 : c, function() {
							var a = d;
							do {
								var c = a.destroy;
								if (void 0 !== c) {
									var g = b;
									try {
										c();
									} catch (h) {
										Ei(g, h);
									}
								}
								a = a.next;
							} while (a !== d);
						});
					}
					break;
				case 1:
					Fi(b);
					c = b.stateNode;
					"function" === typeof c.componentWillUnmount && Di(b, c);
					break;
				case 5:
					Fi(b);
					break;
				case 4: Mi(a, b, c);
			}
		}
		function Ni(a) {
			var b = a.alternate;
			a.return = null;
			a.child = null;
			a.memoizedState = null;
			a.updateQueue = null;
			a.dependencies = null;
			a.alternate = null;
			a.firstEffect = null;
			a.lastEffect = null;
			a.pendingProps = null;
			a.memoizedProps = null;
			a.stateNode = null;
			null !== b && Ni(b);
		}
		function Oi(a) {
			return 5 === a.tag || 3 === a.tag || 4 === a.tag;
		}
		function Pi(a) {
			a: {
				for (var b = a.return; null !== b;) {
					if (Oi(b)) {
						var c = b;
						break a;
					}
					b = b.return;
				}
				throw Error(u(160));
			}
			b = c.stateNode;
			switch (c.tag) {
				case 5:
					var d = !1;
					break;
				case 3:
					b = b.containerInfo;
					d = !0;
					break;
				case 4:
					b = b.containerInfo;
					d = !0;
					break;
				default: throw Error(u(161));
			}
			c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);
			a: b: for (c = a;;) {
				for (; null === c.sibling;) {
					if (null === c.return || Oi(c.return)) {
						c = null;
						break a;
					}
					c = c.return;
				}
				c.sibling.return = c.return;
				for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
					if (c.effectTag & 2) continue b;
					if (null === c.child || 4 === c.tag) continue b;
					else c.child.return = c, c = c.child;
				}
				if (!(c.effectTag & 2)) {
					c = c.stateNode;
					break a;
				}
			}
			d ? Qi(a, c, b) : Ri(a, c, b);
		}
		function Qi(a, b, c) {
			var d = a.tag, e = 5 === d || 6 === d;
			if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = sd));
			else if (4 !== d && (a = a.child, null !== a)) for (Qi(a, b, c), a = a.sibling; null !== a;) Qi(a, b, c), a = a.sibling;
		}
		function Ri(a, b, c) {
			var d = a.tag, e = 5 === d || 6 === d;
			if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
			else if (4 !== d && (a = a.child, null !== a)) for (Ri(a, b, c), a = a.sibling; null !== a;) Ri(a, b, c), a = a.sibling;
		}
		function Mi(a, b, c) {
			for (var d = b, e = !1, f, g;;) {
				if (!e) {
					e = d.return;
					a: for (;;) {
						if (null === e) throw Error(u(160));
						f = e.stateNode;
						switch (e.tag) {
							case 5:
								g = !1;
								break a;
							case 3:
								f = f.containerInfo;
								g = !0;
								break a;
							case 4:
								f = f.containerInfo;
								g = !0;
								break a;
						}
						e = e.return;
					}
					e = !0;
				}
				if (5 === d.tag || 6 === d.tag) {
					a: for (var h = a, k = d, l = c, m = k;;) if (Ki(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;
					else {
						if (m === k) break a;
						for (; null === m.sibling;) {
							if (null === m.return || m.return === k) break a;
							m = m.return;
						}
						m.sibling.return = m.return;
						m = m.sibling;
					}
					g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
				} else if (4 === d.tag) {
					if (null !== d.child) {
						f = d.stateNode.containerInfo;
						g = !0;
						d.child.return = d;
						d = d.child;
						continue;
					}
				} else if (Ki(a, d, c), null !== d.child) {
					d.child.return = d;
					d = d.child;
					continue;
				}
				if (d === b) break;
				for (; null === d.sibling;) {
					if (null === d.return || d.return === b) return;
					d = d.return;
					4 === d.tag && (e = !1);
				}
				d.sibling.return = d.return;
				d = d.sibling;
			}
		}
		function Si(a, b) {
			switch (b.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
				case 22:
					Hi(3, b);
					return;
				case 1: return;
				case 5:
					var c = b.stateNode;
					if (null != c) {
						var d = b.memoizedProps, e = null !== a ? a.memoizedProps : d;
						a = b.type;
						var f = b.updateQueue;
						b.updateQueue = null;
						if (null !== f) {
							c[Nd] = d;
							"input" === a && "radio" === d.type && null != d.name && Bb(c, d);
							pd(a, e);
							b = pd(a, d);
							for (e = 0; e < f.length; e += 2) {
								var g = f[e], h = f[e + 1];
								"style" === g ? md(c, h) : "dangerouslySetInnerHTML" === g ? Qb(c, h) : "children" === g ? Rb(c, h) : Xa(c, g, h, b);
							}
							switch (a) {
								case "input":
									Cb(c, d);
									break;
								case "textarea":
									Kb(c, d);
									break;
								case "select": b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Hb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? Hb(c, !!d.multiple, d.defaultValue, !0) : Hb(c, !!d.multiple, d.multiple ? [] : "", !1));
							}
						}
					}
					return;
				case 6:
					if (null === b.stateNode) throw Error(u(162));
					b.stateNode.nodeValue = b.memoizedProps;
					return;
				case 3:
					b = b.stateNode;
					b.hydrate && (b.hydrate = !1, Vc(b.containerInfo));
					return;
				case 12: return;
				case 13:
					c = b;
					null === b.memoizedState ? d = !1 : (d = !0, c = b.child, Ti = $f());
					if (null !== c) a: for (a = c;;) {
						if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));
						else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps;
						else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
							f = a.child.sibling;
							f.return = a;
							a = f;
							continue;
						} else if (null !== a.child) {
							a.child.return = a;
							a = a.child;
							continue;
						}
						if (a === c) break;
						for (; null === a.sibling;) {
							if (null === a.return || a.return === c) break a;
							a = a.return;
						}
						a.sibling.return = a.return;
						a = a.sibling;
					}
					Ui(b);
					return;
				case 19:
					Ui(b);
					return;
				case 17: return;
			}
			throw Error(u(163));
		}
		function Ui(a) {
			var b = a.updateQueue;
			if (null !== b) {
				a.updateQueue = null;
				var c = a.stateNode;
				null === c && (c = a.stateNode = new Bi());
				b.forEach(function(b) {
					var d = Vi.bind(null, a, b);
					c.has(b) || (c.add(b), b.then(d, d));
				});
			}
		}
		var Wi = "function" === typeof WeakMap ? WeakMap : Map;
		function Xi(a, b, c) {
			c = wg(c, null);
			c.tag = 3;
			c.payload = { element: null };
			var d = b.value;
			c.callback = function() {
				Yi || (Yi = !0, Zi = d);
				Ci(a, b);
			};
			return c;
		}
		function $i(a, b, c) {
			c = wg(c, null);
			c.tag = 3;
			var d = a.type.getDerivedStateFromError;
			if ("function" === typeof d) {
				var e = b.value;
				c.payload = function() {
					Ci(a, b);
					return d(e);
				};
			}
			var f = a.stateNode;
			null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
				"function" !== typeof d && (null === aj ? aj = /* @__PURE__ */ new Set([this]) : aj.add(this), Ci(a, b));
				var c = b.stack;
				this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" });
			});
			return c;
		}
		var bj = Math.ceil;
		var cj = Wa.ReactCurrentDispatcher;
		var dj = Wa.ReactCurrentOwner;
		var V = 0;
		var ej = 8;
		var fj = 16;
		var gj = 32;
		var ti = 0;
		var hj = 1;
		var ij = 2;
		var ui = 3;
		var vi = 4;
		var jj = 5;
		var W = V;
		var T = null;
		var X = null;
		var U = 0;
		var S = ti;
		var kj = null;
		var lj = 1073741823;
		var mj = 1073741823;
		var nj = null;
		var wi = 0;
		var oj = !1;
		var Ti = 0;
		var pj = 500;
		var Y = null;
		var Yi = !1;
		var Zi = null;
		var aj = null;
		var qj = !1;
		var rj = null;
		var sj = 90;
		var tj = null;
		var uj = 0;
		var vj = null;
		var wj = 0;
		function Gg() {
			return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0);
		}
		function Hg(a, b, c) {
			b = b.mode;
			if (0 === (b & 2)) return 1073741823;
			var d = ag();
			if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
			if ((W & fj) !== V) return U;
			if (null !== c) a = hg(a, c.timeoutMs | 0 || 5e3, 250);
			else switch (d) {
				case 99:
					a = 1073741823;
					break;
				case 98:
					a = hg(a, 150, 100);
					break;
				case 97:
				case 96:
					a = hg(a, 5e3, 250);
					break;
				case 95:
					a = 2;
					break;
				default: throw Error(u(326));
			}
			null !== T && a === U && --a;
			return a;
		}
		function Ig(a, b) {
			if (50 < uj) throw uj = 0, vj = null, Error(u(185));
			a = xj(a, b);
			if (null !== a) {
				var c = ag();
				1073741823 === b ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
				(W & 4) === V || 98 !== c && 99 !== c || (null === tj ? tj = /* @__PURE__ */ new Map([[a, b]]) : (c = tj.get(a), (void 0 === c || c > b) && tj.set(a, b)));
			}
		}
		function xj(a, b) {
			a.expirationTime < b && (a.expirationTime = b);
			var c = a.alternate;
			null !== c && c.expirationTime < b && (c.expirationTime = b);
			var d = a.return, e = null;
			if (null === d && 3 === a.tag) e = a.stateNode;
			else for (; null !== d;) {
				c = d.alternate;
				d.childExpirationTime < b && (d.childExpirationTime = b);
				null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
				if (null === d.return && 3 === d.tag) {
					e = d.stateNode;
					break;
				}
				d = d.return;
			}
			null !== e && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
			return e;
		}
		function zj(a) {
			var b = a.lastExpiredTime;
			if (0 !== b) return b;
			b = a.firstPendingTime;
			if (!Aj(a, b)) return b;
			var c = a.lastPingedTime;
			a = a.nextKnownPendingLevel;
			a = c > a ? c : a;
			return 2 >= a && b !== a ? 0 : a;
		}
		function Z(a) {
			if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));
			else {
				var b = zj(a), c = a.callbackNode;
				if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
				else {
					var d = Gg();
					1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
					if (null !== c) {
						var e = a.callbackPriority;
						if (a.callbackExpirationTime === b && e >= d) return;
						c !== Tf && Kf(c);
					}
					a.callbackExpirationTime = b;
					a.callbackPriority = d;
					b = 1073741823 === b ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), { timeout: 10 * (1073741821 - b) - $f() });
					a.callbackNode = b;
				}
			}
		}
		function Bj(a, b) {
			wj = 0;
			if (b) return b = Gg(), Cj(a, b), Z(a), null;
			var c = zj(a);
			if (0 !== c) {
				b = a.callbackNode;
				if ((W & (fj | gj)) !== V) throw Error(u(327));
				Dj();
				a === T && c === U || Ej(a, c);
				if (null !== X) {
					var d = W;
					W |= fj;
					var e = Fj();
					do
						try {
							Gj();
							break;
						} catch (h) {
							Hj(a, h);
						}
					while (1);
					ng();
					W = d;
					cj.current = e;
					if (S === hj) throw b = kj, Ej(a, c), xi(a, c), Z(a), b;
					if (null === X) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
						case ti:
						case hj: throw Error(u(345));
						case ij:
							Cj(a, 2 < c ? 2 : c);
							break;
						case ui:
							xi(a, c);
							d = a.lastSuspendedTime;
							c === d && (a.nextKnownPendingLevel = Ij(e));
							if (1073741823 === lj && (e = Ti + pj - $f(), 10 < e)) {
								if (oj) {
									var f = a.lastPingedTime;
									if (0 === f || f >= c) {
										a.lastPingedTime = c;
										Ej(a, c);
										break;
									}
								}
								f = zj(a);
								if (0 !== f && f !== c) break;
								if (0 !== d && d !== c) {
									a.lastPingedTime = d;
									break;
								}
								a.timeoutHandle = Hd(Jj.bind(null, a), e);
								break;
							}
							Jj(a);
							break;
						case vi:
							xi(a, c);
							d = a.lastSuspendedTime;
							c === d && (a.nextKnownPendingLevel = Ij(e));
							if (oj && (e = a.lastPingedTime, 0 === e || e >= c)) {
								a.lastPingedTime = c;
								Ej(a, c);
								break;
							}
							e = zj(a);
							if (0 !== e && e !== c) break;
							if (0 !== d && d !== c) {
								a.lastPingedTime = d;
								break;
							}
							1073741823 !== mj ? d = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? d = 0 : (d = 10 * (1073741821 - lj) - 5e3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));
							if (10 < d) {
								a.timeoutHandle = Hd(Jj.bind(null, a), d);
								break;
							}
							Jj(a);
							break;
						case jj:
							if (1073741823 !== lj && null !== nj) {
								f = lj;
								var g = nj;
								d = g.busyMinDurationMs | 0;
								0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3)), d = f <= e ? 0 : e + d - f);
								if (10 < d) {
									xi(a, c);
									a.timeoutHandle = Hd(Jj.bind(null, a), d);
									break;
								}
							}
							Jj(a);
							break;
						default: throw Error(u(329));
					}
					Z(a);
					if (a.callbackNode === b) return Bj.bind(null, a);
				}
			}
			return null;
		}
		function yj(a) {
			var b = a.lastExpiredTime;
			b = 0 !== b ? b : 1073741823;
			if ((W & (fj | gj)) !== V) throw Error(u(327));
			Dj();
			a === T && b === U || Ej(a, b);
			if (null !== X) {
				var c = W;
				W |= fj;
				var d = Fj();
				do
					try {
						Kj();
						break;
					} catch (e) {
						Hj(a, e);
					}
				while (1);
				ng();
				W = c;
				cj.current = d;
				if (S === hj) throw c = kj, Ej(a, b), xi(a, b), Z(a), c;
				if (null !== X) throw Error(u(261));
				a.finishedWork = a.current.alternate;
				a.finishedExpirationTime = b;
				T = null;
				Jj(a);
				Z(a);
			}
			return null;
		}
		function Lj() {
			if (null !== tj) {
				var a = tj;
				tj = null;
				a.forEach(function(a, c) {
					Cj(c, a);
					Z(c);
				});
				gg();
			}
		}
		function Mj(a, b) {
			var c = W;
			W |= 1;
			try {
				return a(b);
			} finally {
				W = c, W === V && gg();
			}
		}
		function Nj(a, b) {
			var c = W;
			W &= -2;
			W |= ej;
			try {
				return a(b);
			} finally {
				W = c, W === V && gg();
			}
		}
		function Ej(a, b) {
			a.finishedWork = null;
			a.finishedExpirationTime = 0;
			var c = a.timeoutHandle;
			-1 !== c && (a.timeoutHandle = -1, Id(c));
			if (null !== X) for (c = X.return; null !== c;) {
				var d = c;
				switch (d.tag) {
					case 1:
						d = d.type.childContextTypes;
						null !== d && void 0 !== d && Df();
						break;
					case 3:
						eh();
						H(K);
						H(J);
						break;
					case 5:
						gh(d);
						break;
					case 4:
						eh();
						break;
					case 13:
						H(M);
						break;
					case 19:
						H(M);
						break;
					case 10: og(d);
				}
				c = c.return;
			}
			T = a;
			X = Sg(a.current, null);
			U = b;
			S = ti;
			kj = null;
			mj = lj = 1073741823;
			nj = null;
			wi = 0;
			oj = !1;
		}
		function Hj(a, b) {
			do {
				try {
					ng();
					jh.current = sh;
					if (mh) for (var c = N.memoizedState; null !== c;) {
						var d = c.queue;
						null !== d && (d.pending = null);
						c = c.next;
					}
					lh = 0;
					P = O = N = null;
					mh = !1;
					if (null === X || null === X.return) return S = hj, kj = b, X = null;
					a: {
						var e = a, f = X.return, g = X, h = b;
						b = U;
						g.effectTag |= 2048;
						g.firstEffect = g.lastEffect = null;
						if (null !== h && "object" === typeof h && "function" === typeof h.then) {
							var k = h;
							if (0 === (g.mode & 2)) {
								var l = g.alternate;
								l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
							}
							var m = 0 !== (M.current & 1), p = f;
							do {
								var x;
								if (x = 13 === p.tag) {
									var z = p.memoizedState;
									if (null !== z) x = null !== z.dehydrated ? !0 : !1;
									else {
										var ca = p.memoizedProps;
										x = void 0 === ca.fallback ? !1 : !0 !== ca.unstable_avoidThisFallback ? !0 : m ? !1 : !0;
									}
								}
								if (x) {
									var D = p.updateQueue;
									if (null === D) {
										var t = /* @__PURE__ */ new Set();
										t.add(k);
										p.updateQueue = t;
									} else D.add(k);
									if (0 === (p.mode & 2)) {
										p.effectTag |= 64;
										g.effectTag &= -2981;
										if (1 === g.tag) if (null === g.alternate) g.tag = 17;
										else {
											var y = wg(1073741823, null);
											y.tag = 2;
											xg(g, y);
										}
										g.expirationTime = 1073741823;
										break a;
									}
									h = void 0;
									g = b;
									var A = e.pingCache;
									null === A ? (A = e.pingCache = new Wi(), h = /* @__PURE__ */ new Set(), A.set(k, h)) : (h = A.get(k), void 0 === h && (h = /* @__PURE__ */ new Set(), A.set(k, h)));
									if (!h.has(g)) {
										h.add(g);
										var q = Oj.bind(null, e, k, g);
										k.then(q, q);
									}
									p.effectTag |= 4096;
									p.expirationTime = b;
									break a;
								}
								p = p.return;
							} while (null !== p);
							h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
						}
						S !== jj && (S = ij);
						h = Ai(h, g);
						p = f;
						do {
							switch (p.tag) {
								case 3:
									k = h;
									p.effectTag |= 4096;
									p.expirationTime = b;
									var B = Xi(p, k, b);
									yg(p, B);
									break a;
								case 1:
									k = h;
									var w = p.type, ub = p.stateNode;
									if (0 === (p.effectTag & 64) && ("function" === typeof w.getDerivedStateFromError || null !== ub && "function" === typeof ub.componentDidCatch && (null === aj || !aj.has(ub)))) {
										p.effectTag |= 4096;
										p.expirationTime = b;
										var vb = $i(p, k, b);
										yg(p, vb);
										break a;
									}
							}
							p = p.return;
						} while (null !== p);
					}
					X = Pj(X);
				} catch (Xc) {
					b = Xc;
					continue;
				}
				break;
			} while (1);
		}
		function Fj() {
			var a = cj.current;
			cj.current = sh;
			return null === a ? sh : a;
		}
		function Ag(a, b) {
			a < lj && 2 < a && (lj = a);
			null !== b && a < mj && 2 < a && (mj = a, nj = b);
		}
		function Bg(a) {
			a > wi && (wi = a);
		}
		function Kj() {
			for (; null !== X;) X = Qj(X);
		}
		function Gj() {
			for (; null !== X && !Uf();) X = Qj(X);
		}
		function Qj(a) {
			var b = Rj(a.alternate, a, U);
			a.memoizedProps = a.pendingProps;
			null === b && (b = Pj(a));
			dj.current = null;
			return b;
		}
		function Pj(a) {
			X = a;
			do {
				var b = X.alternate;
				a = X.return;
				if (0 === (X.effectTag & 2048)) {
					b = si(b, X, U);
					if (1 === U || 1 !== X.childExpirationTime) {
						for (var c = 0, d = X.child; null !== d;) {
							var e = d.expirationTime, f = d.childExpirationTime;
							e > c && (c = e);
							f > c && (c = f);
							d = d.sibling;
						}
						X.childExpirationTime = c;
					}
					if (null !== b) return b;
					null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
				} else {
					b = zi(X);
					if (null !== b) return b.effectTag &= 2047, b;
					null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
				}
				b = X.sibling;
				if (null !== b) return b;
				X = a;
			} while (null !== X);
			S === ti && (S = jj);
			return null;
		}
		function Ij(a) {
			var b = a.expirationTime;
			a = a.childExpirationTime;
			return b > a ? b : a;
		}
		function Jj(a) {
			var b = ag();
			cg(99, Sj.bind(null, a, b));
			return null;
		}
		function Sj(a, b) {
			do
				Dj();
			while (null !== rj);
			if ((W & (fj | gj)) !== V) throw Error(u(327));
			var c = a.finishedWork, d = a.finishedExpirationTime;
			if (null === c) return null;
			a.finishedWork = null;
			a.finishedExpirationTime = 0;
			if (c === a.current) throw Error(u(177));
			a.callbackNode = null;
			a.callbackExpirationTime = 0;
			a.callbackPriority = 90;
			a.nextKnownPendingLevel = 0;
			var e = Ij(c);
			a.firstPendingTime = e;
			d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
			d <= a.lastPingedTime && (a.lastPingedTime = 0);
			d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
			a === T && (X = T = null, U = 0);
			1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
			if (null !== e) {
				var f = W;
				W |= gj;
				dj.current = null;
				Dd = fd;
				var g = xd();
				if (yd(g)) {
					if ("selectionStart" in g) var h = {
						start: g.selectionStart,
						end: g.selectionEnd
					};
					else a: {
						h = (h = g.ownerDocument) && h.defaultView || window;
						var k = h.getSelection && h.getSelection();
						if (k && 0 !== k.rangeCount) {
							h = k.anchorNode;
							var l = k.anchorOffset, m = k.focusNode;
							k = k.focusOffset;
							try {
								h.nodeType, m.nodeType;
							} catch (wb) {
								h = null;
								break a;
							}
							var p = 0, x = -1, z = -1, ca = 0, D = 0, t = g, y = null;
							b: for (;;) {
								for (var A;;) {
									t !== h || 0 !== l && 3 !== t.nodeType || (x = p + l);
									t !== m || 0 !== k && 3 !== t.nodeType || (z = p + k);
									3 === t.nodeType && (p += t.nodeValue.length);
									if (null === (A = t.firstChild)) break;
									y = t;
									t = A;
								}
								for (;;) {
									if (t === g) break b;
									y === h && ++ca === l && (x = p);
									y === m && ++D === k && (z = p);
									if (null !== (A = t.nextSibling)) break;
									t = y;
									y = t.parentNode;
								}
								t = A;
							}
							h = -1 === x || -1 === z ? null : {
								start: x,
								end: z
							};
						} else h = null;
					}
					h = h || {
						start: 0,
						end: 0
					};
				} else h = null;
				Ed = {
					activeElementDetached: null,
					focusedElem: g,
					selectionRange: h
				};
				fd = !1;
				Y = e;
				do
					try {
						Tj();
					} catch (wb) {
						if (null === Y) throw Error(u(330));
						Ei(Y, wb);
						Y = Y.nextEffect;
					}
				while (null !== Y);
				Y = e;
				do
					try {
						for (g = a, h = b; null !== Y;) {
							var q = Y.effectTag;
							q & 16 && Rb(Y.stateNode, "");
							if (q & 128) {
								var B = Y.alternate;
								if (null !== B) {
									var w = B.ref;
									null !== w && ("function" === typeof w ? w(null) : w.current = null);
								}
							}
							switch (q & 1038) {
								case 2:
									Pi(Y);
									Y.effectTag &= -3;
									break;
								case 6:
									Pi(Y);
									Y.effectTag &= -3;
									Si(Y.alternate, Y);
									break;
								case 1024:
									Y.effectTag &= -1025;
									break;
								case 1028:
									Y.effectTag &= -1025;
									Si(Y.alternate, Y);
									break;
								case 4:
									Si(Y.alternate, Y);
									break;
								case 8: l = Y, Mi(g, l, h), Ni(l);
							}
							Y = Y.nextEffect;
						}
					} catch (wb) {
						if (null === Y) throw Error(u(330));
						Ei(Y, wb);
						Y = Y.nextEffect;
					}
				while (null !== Y);
				w = Ed;
				B = xd();
				q = w.focusedElem;
				h = w.selectionRange;
				if (B !== q && q && q.ownerDocument && wd(q.ownerDocument.documentElement, q)) {
					null !== h && yd(q) && (B = h.start, w = h.end, void 0 === w && (w = B), "selectionStart" in q ? (q.selectionStart = B, q.selectionEnd = Math.min(w, q.value.length)) : (w = (B = q.ownerDocument || document) && B.defaultView || window, w.getSelection && (w = w.getSelection(), l = q.textContent.length, g = Math.min(h.start, l), h = void 0 === h.end ? g : Math.min(h.end, l), !w.extend && g > h && (l = h, h = g, g = l), l = vd(q, g), m = vd(q, h), l && m && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== m.node || w.focusOffset !== m.offset) && (B = B.createRange(), B.setStart(l.node, l.offset), w.removeAllRanges(), g > h ? (w.addRange(B), w.extend(m.node, m.offset)) : (B.setEnd(m.node, m.offset), w.addRange(B))))));
					B = [];
					for (w = q; w = w.parentNode;) 1 === w.nodeType && B.push({
						element: w,
						left: w.scrollLeft,
						top: w.scrollTop
					});
					"function" === typeof q.focus && q.focus();
					for (q = 0; q < B.length; q++) w = B[q], w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
				}
				fd = !!Dd;
				Ed = Dd = null;
				a.current = c;
				Y = e;
				do
					try {
						for (q = a; null !== Y;) {
							var ub = Y.effectTag;
							ub & 36 && Ji(q, Y.alternate, Y);
							if (ub & 128) {
								B = void 0;
								var vb = Y.ref;
								if (null !== vb) {
									var Xc = Y.stateNode;
									switch (Y.tag) {
										case 5:
											B = Xc;
											break;
										default: B = Xc;
									}
									"function" === typeof vb ? vb(B) : vb.current = B;
								}
							}
							Y = Y.nextEffect;
						}
					} catch (wb) {
						if (null === Y) throw Error(u(330));
						Ei(Y, wb);
						Y = Y.nextEffect;
					}
				while (null !== Y);
				Y = null;
				Vf();
				W = f;
			} else a.current = c;
			if (qj) qj = !1, rj = a, sj = b;
			else for (Y = e; null !== Y;) b = Y.nextEffect, Y.nextEffect = null, Y = b;
			b = a.firstPendingTime;
			0 === b && (aj = null);
			1073741823 === b ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
			"function" === typeof Uj && Uj(c.stateNode, d);
			Z(a);
			if (Yi) throw Yi = !1, a = Zi, Zi = null, a;
			if ((W & ej) !== V) return null;
			gg();
			return null;
		}
		function Tj() {
			for (; null !== Y;) {
				var a = Y.effectTag;
				0 !== (a & 256) && Gi(Y.alternate, Y);
				0 === (a & 512) || qj || (qj = !0, dg(97, function() {
					Dj();
					return null;
				}));
				Y = Y.nextEffect;
			}
		}
		function Dj() {
			if (90 !== sj) {
				var a = 97 < sj ? 97 : sj;
				sj = 90;
				return cg(a, Vj);
			}
		}
		function Vj() {
			if (null === rj) return !1;
			var a = rj;
			rj = null;
			if ((W & (fj | gj)) !== V) throw Error(u(331));
			var b = W;
			W |= gj;
			for (a = a.current.firstEffect; null !== a;) {
				try {
					var c = a;
					if (0 !== (c.effectTag & 512)) switch (c.tag) {
						case 0:
						case 11:
						case 15:
						case 22: Hi(5, c), Ii(5, c);
					}
				} catch (d) {
					if (null === a) throw Error(u(330));
					Ei(a, d);
				}
				c = a.nextEffect;
				a.nextEffect = null;
				a = c;
			}
			W = b;
			gg();
			return !0;
		}
		function Wj(a, b, c) {
			b = Ai(c, b);
			b = Xi(a, b, 1073741823);
			xg(a, b);
			a = xj(a, 1073741823);
			null !== a && Z(a);
		}
		function Ei(a, b) {
			if (3 === a.tag) Wj(a, a, b);
			else for (var c = a.return; null !== c;) {
				if (3 === c.tag) {
					Wj(c, a, b);
					break;
				} else if (1 === c.tag) {
					var d = c.stateNode;
					if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === aj || !aj.has(d))) {
						a = Ai(b, a);
						a = $i(c, a, 1073741823);
						xg(c, a);
						c = xj(c, 1073741823);
						null !== c && Z(c);
						break;
					}
				}
				c = c.return;
			}
		}
		function Oj(a, b, c) {
			var d = a.pingCache;
			null !== d && d.delete(b);
			T === a && U === c ? S === vi || S === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(a, U) : oj = !0 : Aj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z(a)));
		}
		function Vi(a, b) {
			var c = a.stateNode;
			null !== c && c.delete(b);
			b = 0;
			0 === b && (b = Gg(), b = Hg(b, a, null));
			a = xj(a, b);
			null !== a && Z(a);
		}
		var Rj = function(a, b, c) {
			var d = b.expirationTime;
			if (null !== a) {
				var e = b.pendingProps;
				if (a.memoizedProps !== e || K.current) rg = !0;
				else {
					if (d < c) {
						rg = !1;
						switch (b.tag) {
							case 3:
								hi(b);
								Xh();
								break;
							case 5:
								fh(b);
								if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
								break;
							case 1:
								L(b.type) && Gf(b);
								break;
							case 4:
								dh(b, b.stateNode.containerInfo);
								break;
							case 10:
								d = b.memoizedProps.value;
								e = b.type._context;
								I(jg, e._currentValue);
								e._currentValue = d;
								break;
							case 13:
								if (null !== b.memoizedState) {
									d = b.child.childExpirationTime;
									if (0 !== d && d >= c) return ji(a, b, c);
									I(M, M.current & 1);
									b = $h(a, b, c);
									return null !== b ? b.sibling : null;
								}
								I(M, M.current & 1);
								break;
							case 19:
								d = b.childExpirationTime >= c;
								if (0 !== (a.effectTag & 64)) {
									if (d) return mi(a, b, c);
									b.effectTag |= 64;
								}
								e = b.memoizedState;
								null !== e && (e.rendering = null, e.tail = null);
								I(M, M.current);
								if (!d) return null;
						}
						return $h(a, b, c);
					}
					rg = !1;
				}
			} else rg = !1;
			b.expirationTime = 0;
			switch (b.tag) {
				case 2:
					d = b.type;
					null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
					a = b.pendingProps;
					e = Cf(b, J.current);
					qg(b, c);
					e = oh(null, b, d, a, e, c);
					b.effectTag |= 1;
					if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
						b.tag = 1;
						b.memoizedState = null;
						b.updateQueue = null;
						if (L(d)) {
							var f = !0;
							Gf(b);
						} else f = !1;
						b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
						ug(b);
						var g = d.getDerivedStateFromProps;
						"function" === typeof g && Fg(b, d, g, a);
						e.updater = Jg;
						b.stateNode = e;
						e._reactInternalFiber = b;
						Ng(b, d, a, c);
						b = gi(null, b, d, !0, f, c);
					} else b.tag = 0, R(null, b, e, c), b = b.child;
					return b;
				case 16:
					a: {
						e = b.elementType;
						null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
						a = b.pendingProps;
						ob(e);
						if (1 !== e._status) throw e._result;
						e = e._result;
						b.type = e;
						f = b.tag = Xj(e);
						a = ig(e, a);
						switch (f) {
							case 0:
								b = di(null, b, e, a, c);
								break a;
							case 1:
								b = fi(null, b, e, a, c);
								break a;
							case 11:
								b = Zh(null, b, e, a, c);
								break a;
							case 14:
								b = ai(null, b, e, ig(e.type, a), d, c);
								break a;
						}
						throw Error(u(306, e, ""));
					}
					return b;
				case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);
				case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
				case 3:
					hi(b);
					d = b.updateQueue;
					if (null === a || null === d) throw Error(u(282));
					d = b.pendingProps;
					e = b.memoizedState;
					e = null !== e ? e.element : null;
					vg(a, b);
					zg(b, d, null, c);
					d = b.memoizedState.element;
					if (d === e) Xh(), b = $h(a, b, c);
					else {
						if (e = b.stateNode.hydrate) Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = !0;
						if (e) for (c = Yg(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
						else R(a, b, d, c), Xh();
						b = b.child;
					}
					return b;
				case 5: return fh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : null !== f && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;
				case 6: return null === a && Uh(b), null;
				case 13: return ji(a, b, c);
				case 4: return dh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child;
				case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);
				case 7: return R(a, b, b.pendingProps, c), b.child;
				case 8: return R(a, b, b.pendingProps.children, c), b.child;
				case 12: return R(a, b, b.pendingProps.children, c), b.child;
				case 10:
					a: {
						d = b.type._context;
						e = b.pendingProps;
						g = b.memoizedProps;
						f = e.value;
						var h = b.type._context;
						I(jg, h._currentValue);
						h._currentValue = f;
						if (null !== g) if (h = g.value, f = $e(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
							if (g.children === e.children && !K.current) {
								b = $h(a, b, c);
								break a;
							}
						} else for (h = b.child, null !== h && (h.return = b); null !== h;) {
							var k = h.dependencies;
							if (null !== k) {
								g = h.child;
								for (var l = k.firstContext; null !== l;) {
									if (l.context === d && 0 !== (l.observedBits & f)) {
										1 === h.tag && (l = wg(c, null), l.tag = 2, xg(h, l));
										h.expirationTime < c && (h.expirationTime = c);
										l = h.alternate;
										null !== l && l.expirationTime < c && (l.expirationTime = c);
										pg(h.return, c);
										k.expirationTime < c && (k.expirationTime = c);
										break;
									}
									l = l.next;
								}
							} else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
							if (null !== g) g.return = h;
							else for (g = h; null !== g;) {
								if (g === b) {
									g = null;
									break;
								}
								h = g.sibling;
								if (null !== h) {
									h.return = g.return;
									g = h;
									break;
								}
								g = g.return;
							}
							h = g;
						}
						R(a, b, e.children, c);
						b = b.child;
					}
					return b;
				case 9: return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;
				case 14: return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);
				case 15: return ci(a, b, b.type, b.pendingProps, d, c);
				case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = !0, Gf(b)) : a = !1, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null, b, d, !0, a, c);
				case 19: return mi(a, b, c);
			}
			throw Error(u(156, b.tag));
		};
		var Uj = null;
		var Li = null;
		function Yj(a) {
			if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
			var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (b.isDisabled || !b.supportsFiber) return !0;
			try {
				var c = b.inject(a);
				Uj = function(a) {
					try {
						b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
					} catch (e) {}
				};
				Li = function(a) {
					try {
						b.onCommitFiberUnmount(c, a);
					} catch (e) {}
				};
			} catch (d) {}
			return !0;
		}
		function Zj(a, b, c, d) {
			this.tag = a;
			this.key = c;
			this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
			this.index = 0;
			this.ref = null;
			this.pendingProps = b;
			this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
			this.mode = d;
			this.effectTag = 0;
			this.lastEffect = this.firstEffect = this.nextEffect = null;
			this.childExpirationTime = this.expirationTime = 0;
			this.alternate = null;
		}
		function Sh(a, b, c, d) {
			return new Zj(a, b, c, d);
		}
		function bi(a) {
			a = a.prototype;
			return !(!a || !a.isReactComponent);
		}
		function Xj(a) {
			if ("function" === typeof a) return bi(a) ? 1 : 0;
			if (void 0 !== a && null !== a) {
				a = a.$$typeof;
				if (a === gb) return 11;
				if (a === jb) return 14;
			}
			return 2;
		}
		function Sg(a, b) {
			var c = a.alternate;
			null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
			c.childExpirationTime = a.childExpirationTime;
			c.expirationTime = a.expirationTime;
			c.child = a.child;
			c.memoizedProps = a.memoizedProps;
			c.memoizedState = a.memoizedState;
			c.updateQueue = a.updateQueue;
			b = a.dependencies;
			c.dependencies = null === b ? null : {
				expirationTime: b.expirationTime,
				firstContext: b.firstContext,
				responders: b.responders
			};
			c.sibling = a.sibling;
			c.index = a.index;
			c.ref = a.ref;
			return c;
		}
		function Ug(a, b, c, d, e, f) {
			var g = 2;
			d = a;
			if ("function" === typeof a) bi(a) && (g = 1);
			else if ("string" === typeof a) g = 5;
			else a: switch (a) {
				case ab: return Wg(c.children, e, f, b);
				case fb:
					g = 8;
					e |= 7;
					break;
				case bb:
					g = 8;
					e |= 1;
					break;
				case cb: return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
				case hb: return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
				case ib: return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;
				default:
					if ("object" === typeof a && null !== a) switch (a.$$typeof) {
						case db:
							g = 10;
							break a;
						case eb:
							g = 9;
							break a;
						case gb:
							g = 11;
							break a;
						case jb:
							g = 14;
							break a;
						case kb:
							g = 16;
							d = null;
							break a;
						case lb:
							g = 22;
							break a;
					}
					throw Error(u(130, null == a ? a : typeof a, ""));
			}
			b = Sh(g, c, b, e);
			b.elementType = a;
			b.type = d;
			b.expirationTime = f;
			return b;
		}
		function Wg(a, b, c, d) {
			a = Sh(7, a, d, b);
			a.expirationTime = c;
			return a;
		}
		function Tg(a, b, c) {
			a = Sh(6, a, null, b);
			a.expirationTime = c;
			return a;
		}
		function Vg(a, b, c) {
			b = Sh(4, null !== a.children ? a.children : [], a.key, b);
			b.expirationTime = c;
			b.stateNode = {
				containerInfo: a.containerInfo,
				pendingChildren: null,
				implementation: a.implementation
			};
			return b;
		}
		function ak(a, b, c) {
			this.tag = b;
			this.current = null;
			this.containerInfo = a;
			this.pingCache = this.pendingChildren = null;
			this.finishedExpirationTime = 0;
			this.finishedWork = null;
			this.timeoutHandle = -1;
			this.pendingContext = this.context = null;
			this.hydrate = c;
			this.callbackNode = null;
			this.callbackPriority = 90;
			this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
		}
		function Aj(a, b) {
			var c = a.firstSuspendedTime;
			a = a.lastSuspendedTime;
			return 0 !== c && c >= b && a <= b;
		}
		function xi(a, b) {
			var c = a.firstSuspendedTime, d = a.lastSuspendedTime;
			c < b && (a.firstSuspendedTime = b);
			if (d > b || 0 === c) a.lastSuspendedTime = b;
			b <= a.lastPingedTime && (a.lastPingedTime = 0);
			b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
		}
		function yi(a, b) {
			b > a.firstPendingTime && (a.firstPendingTime = b);
			var c = a.firstSuspendedTime;
			0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
		}
		function Cj(a, b) {
			var c = a.lastExpiredTime;
			if (0 === c || c > b) a.lastExpiredTime = b;
		}
		function bk(a, b, c, d) {
			var e = b.current, f = Gg(), g = Dg.suspense;
			f = Hg(f, e, g);
			a: if (c) {
				c = c._reactInternalFiber;
				b: {
					if (dc(c) !== c || 1 !== c.tag) throw Error(u(170));
					var h = c;
					do {
						switch (h.tag) {
							case 3:
								h = h.stateNode.context;
								break b;
							case 1: if (L(h.type)) {
								h = h.stateNode.__reactInternalMemoizedMergedChildContext;
								break b;
							}
						}
						h = h.return;
					} while (null !== h);
					throw Error(u(171));
				}
				if (1 === c.tag) {
					var k = c.type;
					if (L(k)) {
						c = Ff(c, k, h);
						break a;
					}
				}
				c = h;
			} else c = Af;
			null === b.context ? b.context = c : b.pendingContext = c;
			b = wg(f, g);
			b.payload = { element: a };
			d = void 0 === d ? null : d;
			null !== d && (b.callback = d);
			xg(e, b);
			Ig(e, f);
			return f;
		}
		function ck(a) {
			a = a.current;
			if (!a.child) return null;
			switch (a.child.tag) {
				case 5: return a.child.stateNode;
				default: return a.child.stateNode;
			}
		}
		function dk(a, b) {
			a = a.memoizedState;
			null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
		}
		function ek(a, b) {
			dk(a, b);
			(a = a.alternate) && dk(a, b);
		}
		function fk(a, b, c) {
			c = null != c && !0 === c.hydrate;
			var d = new ak(a, b, c), e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
			d.current = e;
			e.stateNode = d;
			ug(e);
			a[Od] = d.current;
			c && 0 !== b && Jc(a, 9 === a.nodeType ? a : a.ownerDocument);
			this._internalRoot = d;
		}
		fk.prototype.render = function(a) {
			bk(a, this._internalRoot, null, null);
		};
		fk.prototype.unmount = function() {
			var a = this._internalRoot, b = a.containerInfo;
			bk(null, a, null, function() {
				b[Od] = null;
			});
		};
		function gk(a) {
			return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
		}
		function hk(a, b) {
			b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
			if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
			return new fk(a, 0, b ? { hydrate: !0 } : void 0);
		}
		function ik(a, b, c, d, e) {
			var f = c._reactRootContainer;
			if (f) {
				var g = f._internalRoot;
				if ("function" === typeof e) {
					var h = e;
					e = function() {
						var a = ck(g);
						h.call(a);
					};
				}
				bk(b, g, a, e);
			} else {
				f = c._reactRootContainer = hk(c, d);
				g = f._internalRoot;
				if ("function" === typeof e) {
					var k = e;
					e = function() {
						var a = ck(g);
						k.call(a);
					};
				}
				Nj(function() {
					bk(b, g, a, e);
				});
			}
			return ck(g);
		}
		function jk(a, b, c) {
			var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return {
				$$typeof: $a,
				key: null == d ? null : "" + d,
				children: a,
				containerInfo: b,
				implementation: c
			};
		}
		wc = function(a) {
			if (13 === a.tag) {
				var b = hg(Gg(), 150, 100);
				Ig(a, b);
				ek(a, b);
			}
		};
		xc = function(a) {
			13 === a.tag && (Ig(a, 3), ek(a, 3));
		};
		yc = function(a) {
			if (13 === a.tag) {
				var b = Gg();
				b = Hg(b, a, null);
				Ig(a, b);
				ek(a, b);
			}
		};
		za = function(a, b, c) {
			switch (b) {
				case "input":
					Cb(a, c);
					b = c.name;
					if ("radio" === c.type && null != b) {
						for (c = a; c.parentNode;) c = c.parentNode;
						c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
						for (b = 0; b < c.length; b++) {
							var d = c[b];
							if (d !== a && d.form === a.form) {
								var e = Qd(d);
								if (!e) throw Error(u(90));
								yb(d);
								Cb(d, e);
							}
						}
					}
					break;
				case "textarea":
					Kb(a, c);
					break;
				case "select": b = c.value, null != b && Hb(a, !!c.multiple, b, !1);
			}
		};
		Fa = Mj;
		Ga = function(a, b, c, d, e) {
			var f = W;
			W |= 4;
			try {
				return cg(98, a.bind(null, b, c, d, e));
			} finally {
				W = f, W === V && gg();
			}
		};
		Ha = function() {
			(W & (1 | fj | gj)) === V && (Lj(), Dj());
		};
		Ia = function(a, b) {
			var c = W;
			W |= 2;
			try {
				return a(b);
			} finally {
				W = c, W === V && gg();
			}
		};
		function kk(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!gk(b)) throw Error(u(200));
			return jk(a, b, null, c);
		}
		var lk = { Events: [
			Nc,
			Pd,
			Qd,
			xa,
			ta,
			Xd,
			function(a) {
				jc(a, Wd);
			},
			Da,
			Ea,
			id,
			mc,
			Dj,
			{ current: !1 }
		] };
		(function(a) {
			var b = a.findFiberByHostInstance;
			return Yj(n({}, a, {
				overrideHookState: null,
				overrideProps: null,
				setSuspenseHandler: null,
				scheduleUpdate: null,
				currentDispatcherRef: Wa.ReactCurrentDispatcher,
				findHostInstanceByFiber: function(a) {
					a = hc(a);
					return null === a ? null : a.stateNode;
				},
				findFiberByHostInstance: function(a) {
					return b ? b(a) : null;
				},
				findHostInstancesForRefresh: null,
				scheduleRefresh: null,
				scheduleRoot: null,
				setRefreshHandler: null,
				getCurrentFiber: null
			}));
		})({
			findFiberByHostInstance: tc,
			bundleType: 0,
			version: "16.14.0",
			rendererPackageName: "react-dom"
		});
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
		exports.createPortal = kk;
		exports.findDOMNode = function(a) {
			if (null == a) return null;
			if (1 === a.nodeType) return a;
			var b = a._reactInternalFiber;
			if (void 0 === b) {
				if ("function" === typeof a.render) throw Error(u(188));
				throw Error(u(268, Object.keys(a)));
			}
			a = hc(b);
			a = null === a ? null : a.stateNode;
			return a;
		};
		exports.flushSync = function(a, b) {
			if ((W & (fj | gj)) !== V) throw Error(u(187));
			var c = W;
			W |= 1;
			try {
				return cg(99, a.bind(null, b));
			} finally {
				W = c, gg();
			}
		};
		exports.hydrate = function(a, b, c) {
			if (!gk(b)) throw Error(u(200));
			return ik(null, a, b, !0, c);
		};
		exports.render = function(a, b, c) {
			if (!gk(b)) throw Error(u(200));
			return ik(null, a, b, !1, c);
		};
		exports.unmountComponentAtNode = function(a) {
			if (!gk(a)) throw Error(u(40));
			return a._reactRootContainer ? (Nj(function() {
				ik(null, null, a, !1, function() {
					a._reactRootContainer = null;
					a[Od] = null;
				});
			}), !0) : !1;
		};
		exports.unstable_batchedUpdates = Mj;
		exports.unstable_createPortal = function(a, b) {
			return kk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
		};
		exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
			if (!gk(c)) throw Error(u(200));
			if (null == a || void 0 === a._reactInternalFiber) throw Error(u(38));
			return ik(a, b, c, !1, d);
		};
		exports.version = "16.14.0";
	}));
	//#endregion
	//#region node_modules/react-dom/index.js
	var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function checkDCE() {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
			} catch (err) {
				console.error(err);
			}
		}
		checkDCE();
		module.exports = require_react_dom_production_min();
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/subscribable.js
	var require_subscribable = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var Subscribable = class {
			constructor() {
				this.listeners = /* @__PURE__ */ new Set();
				this.subscribe = this.subscribe.bind(this);
			}
			subscribe(listener) {
				const identity = { listener };
				this.listeners.add(identity);
				this.onSubscribe();
				return () => {
					this.listeners.delete(identity);
					this.onUnsubscribe();
				};
			}
			hasListeners() {
				return this.listeners.size > 0;
			}
			onSubscribe() {}
			onUnsubscribe() {}
		};
		exports.Subscribable = Subscribable;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/utils.js
	var require_utils$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		const isServer = typeof window === "undefined" || "Deno" in window;
		function noop() {}
		function functionalUpdate(updater, input) {
			return typeof updater === "function" ? updater(input) : updater;
		}
		function isValidTimeout(value) {
			return typeof value === "number" && value >= 0 && value !== Infinity;
		}
		function difference(array1, array2) {
			return array1.filter((x) => !array2.includes(x));
		}
		function replaceAt(array, index, value) {
			const copy = array.slice(0);
			copy[index] = value;
			return copy;
		}
		function timeUntilStale(updatedAt, staleTime) {
			return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
		}
		function parseQueryArgs(arg1, arg2, arg3) {
			if (!isQueryKey(arg1)) return arg1;
			if (typeof arg2 === "function") return {
				...arg3,
				queryKey: arg1,
				queryFn: arg2
			};
			return {
				...arg2,
				queryKey: arg1
			};
		}
		function parseMutationArgs(arg1, arg2, arg3) {
			if (isQueryKey(arg1)) {
				if (typeof arg2 === "function") return {
					...arg3,
					mutationKey: arg1,
					mutationFn: arg2
				};
				return {
					...arg2,
					mutationKey: arg1
				};
			}
			if (typeof arg1 === "function") return {
				...arg2,
				mutationFn: arg1
			};
			return { ...arg1 };
		}
		function parseFilterArgs(arg1, arg2, arg3) {
			return isQueryKey(arg1) ? [{
				...arg2,
				queryKey: arg1
			}, arg3] : [arg1 || {}, arg2];
		}
		function parseMutationFilterArgs(arg1, arg2, arg3) {
			return isQueryKey(arg1) ? [{
				...arg2,
				mutationKey: arg1
			}, arg3] : [arg1 || {}, arg2];
		}
		function matchQuery(filters, query) {
			const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
			if (isQueryKey(queryKey)) {
				if (exact) {
					if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
				} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
			}
			if (type !== "all") {
				const isActive = query.isActive();
				if (type === "active" && !isActive) return false;
				if (type === "inactive" && isActive) return false;
			}
			if (typeof stale === "boolean" && query.isStale() !== stale) return false;
			if (typeof fetchStatus !== "undefined" && fetchStatus !== query.state.fetchStatus) return false;
			if (predicate && !predicate(query)) return false;
			return true;
		}
		function matchMutation(filters, mutation) {
			const { exact, fetching, predicate, mutationKey } = filters;
			if (isQueryKey(mutationKey)) {
				if (!mutation.options.mutationKey) return false;
				if (exact) {
					if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) return false;
				} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
			}
			if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) return false;
			if (predicate && !predicate(mutation)) return false;
			return true;
		}
		function hashQueryKeyByOptions(queryKey, options) {
			return ((options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey)(queryKey);
		}
		/**
		* Default query keys hash function.
		* Hashes the value into a stable hash.
		*/
		function hashQueryKey(queryKey) {
			return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
				result[key] = val[key];
				return result;
			}, {}) : val);
		}
		/**
		* Checks if key `b` partially matches with key `a`.
		*/
		function partialMatchKey(a, b) {
			return partialDeepEqual(a, b);
		}
		/**
		* Checks if `b` partially matches with `a`.
		*/
		function partialDeepEqual(a, b) {
			if (a === b) return true;
			if (typeof a !== typeof b) return false;
			if (a && b && typeof a === "object" && typeof b === "object") return !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key]));
			return false;
		}
		/**
		* This function returns `a` if `b` is deeply equal.
		* If not, it will replace any deeply equal children of `b` with those of `a`.
		* This can be used for structural sharing between JSON values for example.
		*/
		function replaceEqualDeep(a, b, depth = 0) {
			if (a === b) return a;
			if (depth > 500) return b;
			const array = isPlainArray(a) && isPlainArray(b);
			if (array || isPlainObject(a) && isPlainObject(b)) {
				const aSize = array ? a.length : Object.keys(a).length;
				const bItems = array ? b : Object.keys(b);
				const bSize = bItems.length;
				const copy = array ? [] : {};
				let equalItems = 0;
				for (let i = 0; i < bSize; i++) {
					const key = array ? i : bItems[i];
					copy[key] = replaceEqualDeep(a[key], b[key], depth + 1);
					if (copy[key] === a[key]) equalItems++;
				}
				return aSize === bSize && equalItems === aSize ? a : copy;
			}
			return b;
		}
		/**
		* Shallow compare objects. Only works with objects that always have the same properties.
		*/
		function shallowEqualObjects(a, b) {
			if (a && !b || b && !a) return false;
			for (const key in a) if (a[key] !== b[key]) return false;
			return true;
		}
		function isPlainArray(value) {
			return Array.isArray(value) && value.length === Object.keys(value).length;
		}
		function isPlainObject(o) {
			if (!hasObjectPrototype(o)) return false;
			const ctor = o.constructor;
			if (typeof ctor === "undefined") return true;
			const prot = ctor.prototype;
			if (!hasObjectPrototype(prot)) return false;
			if (!prot.hasOwnProperty("isPrototypeOf")) return false;
			return true;
		}
		function hasObjectPrototype(o) {
			return Object.prototype.toString.call(o) === "[object Object]";
		}
		function isQueryKey(value) {
			return Array.isArray(value);
		}
		function isError(value) {
			return value instanceof Error;
		}
		function sleep(timeout) {
			return new Promise((resolve) => {
				setTimeout(resolve, timeout);
			});
		}
		/**
		* Schedules a microtask.
		* This can be useful to schedule state updates after rendering.
		*/
		function scheduleMicrotask(callback) {
			sleep(0).then(callback);
		}
		function getAbortController() {
			if (typeof AbortController === "function") return new AbortController();
		}
		function replaceData(prevData, data, options) {
			if (options.isDataEqual != null && options.isDataEqual(prevData, data)) return prevData;
			else if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
			else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
			return data;
		}
		exports.difference = difference;
		exports.functionalUpdate = functionalUpdate;
		exports.getAbortController = getAbortController;
		exports.hashQueryKey = hashQueryKey;
		exports.hashQueryKeyByOptions = hashQueryKeyByOptions;
		exports.isError = isError;
		exports.isPlainArray = isPlainArray;
		exports.isPlainObject = isPlainObject;
		exports.isQueryKey = isQueryKey;
		exports.isServer = isServer;
		exports.isValidTimeout = isValidTimeout;
		exports.matchMutation = matchMutation;
		exports.matchQuery = matchQuery;
		exports.noop = noop;
		exports.parseFilterArgs = parseFilterArgs;
		exports.parseMutationArgs = parseMutationArgs;
		exports.parseMutationFilterArgs = parseMutationFilterArgs;
		exports.parseQueryArgs = parseQueryArgs;
		exports.partialDeepEqual = partialDeepEqual;
		exports.partialMatchKey = partialMatchKey;
		exports.replaceAt = replaceAt;
		exports.replaceData = replaceData;
		exports.replaceEqualDeep = replaceEqualDeep;
		exports.scheduleMicrotask = scheduleMicrotask;
		exports.shallowEqualObjects = shallowEqualObjects;
		exports.sleep = sleep;
		exports.timeUntilStale = timeUntilStale;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/focusManager.js
	var require_focusManager = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var subscribable = require_subscribable();
		var utils = require_utils$2();
		var FocusManager = class extends subscribable.Subscribable {
			constructor() {
				super();
				this.setup = (onFocus) => {
					if (!utils.isServer && window.addEventListener) {
						const listener = () => onFocus();
						window.addEventListener("visibilitychange", listener, false);
						window.addEventListener("focus", listener, false);
						return () => {
							window.removeEventListener("visibilitychange", listener);
							window.removeEventListener("focus", listener);
						};
					}
				};
			}
			onSubscribe() {
				if (!this.cleanup) this.setEventListener(this.setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$cleanup;
					(_this$cleanup = this.cleanup) == null || _this$cleanup.call(this);
					this.cleanup = void 0;
				}
			}
			setEventListener(setup) {
				var _this$cleanup2;
				this.setup = setup;
				(_this$cleanup2 = this.cleanup) == null || _this$cleanup2.call(this);
				this.cleanup = setup((focused) => {
					if (typeof focused === "boolean") this.setFocused(focused);
					else this.onFocus();
				});
			}
			setFocused(focused) {
				if (this.focused !== focused) {
					this.focused = focused;
					this.onFocus();
				}
			}
			onFocus() {
				this.listeners.forEach(({ listener }) => {
					listener();
				});
			}
			isFocused() {
				if (typeof this.focused === "boolean") return this.focused;
				if (typeof document === "undefined") return true;
				return [
					void 0,
					"visible",
					"prerender"
				].includes(document.visibilityState);
			}
		};
		const focusManager = new FocusManager();
		exports.FocusManager = FocusManager;
		exports.focusManager = focusManager;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/onlineManager.js
	var require_onlineManager = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var subscribable = require_subscribable();
		var utils = require_utils$2();
		const onlineEvents = ["online", "offline"];
		var OnlineManager = class extends subscribable.Subscribable {
			constructor() {
				super();
				this.setup = (onOnline) => {
					if (!utils.isServer && window.addEventListener) {
						const listener = () => onOnline();
						onlineEvents.forEach((event) => {
							window.addEventListener(event, listener, false);
						});
						return () => {
							onlineEvents.forEach((event) => {
								window.removeEventListener(event, listener);
							});
						};
					}
				};
			}
			onSubscribe() {
				if (!this.cleanup) this.setEventListener(this.setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$cleanup;
					(_this$cleanup = this.cleanup) == null || _this$cleanup.call(this);
					this.cleanup = void 0;
				}
			}
			setEventListener(setup) {
				var _this$cleanup2;
				this.setup = setup;
				(_this$cleanup2 = this.cleanup) == null || _this$cleanup2.call(this);
				this.cleanup = setup((online) => {
					if (typeof online === "boolean") this.setOnline(online);
					else this.onOnline();
				});
			}
			setOnline(online) {
				if (this.online !== online) {
					this.online = online;
					this.onOnline();
				}
			}
			onOnline() {
				this.listeners.forEach(({ listener }) => {
					listener();
				});
			}
			isOnline() {
				if (typeof this.online === "boolean") return this.online;
				if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") return true;
				return navigator.onLine;
			}
		};
		const onlineManager = new OnlineManager();
		exports.OnlineManager = OnlineManager;
		exports.onlineManager = onlineManager;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/retryer.js
	var require_retryer = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var focusManager = require_focusManager();
		var onlineManager = require_onlineManager();
		var utils = require_utils$2();
		function defaultRetryDelay(failureCount) {
			return Math.min(1e3 * 2 ** failureCount, 3e4);
		}
		function canFetch(networkMode) {
			return (networkMode != null ? networkMode : "online") === "online" ? onlineManager.onlineManager.isOnline() : true;
		}
		var CancelledError = class {
			constructor(options) {
				this.revert = options == null ? void 0 : options.revert;
				this.silent = options == null ? void 0 : options.silent;
			}
		};
		function isCancelledError(value) {
			return value instanceof CancelledError;
		}
		function createRetryer(config) {
			let isRetryCancelled = false;
			let failureCount = 0;
			let isResolved = false;
			let continueFn;
			let promiseResolve;
			let promiseReject;
			const promise = new Promise((outerResolve, outerReject) => {
				promiseResolve = outerResolve;
				promiseReject = outerReject;
			});
			const cancel = (cancelOptions) => {
				if (!isResolved) {
					reject(new CancelledError(cancelOptions));
					config.abort == null || config.abort();
				}
			};
			const cancelRetry = () => {
				isRetryCancelled = true;
			};
			const continueRetry = () => {
				isRetryCancelled = false;
			};
			const shouldPause = () => !focusManager.focusManager.isFocused() || config.networkMode !== "always" && !onlineManager.onlineManager.isOnline();
			const resolve = (value) => {
				if (!isResolved) {
					isResolved = true;
					config.onSuccess == null || config.onSuccess(value);
					continueFn?.();
					promiseResolve(value);
				}
			};
			const reject = (value) => {
				if (!isResolved) {
					isResolved = true;
					config.onError == null || config.onError(value);
					continueFn?.();
					promiseReject(value);
				}
			};
			const pause = () => {
				return new Promise((continueResolve) => {
					continueFn = (value) => {
						const canContinue = isResolved || !shouldPause();
						if (canContinue) continueResolve(value);
						return canContinue;
					};
					config.onPause == null || config.onPause();
				}).then(() => {
					continueFn = void 0;
					if (!isResolved) config.onContinue == null || config.onContinue();
				});
			};
			const run = () => {
				if (isResolved) return;
				let promiseOrValue;
				try {
					promiseOrValue = config.fn();
				} catch (error) {
					promiseOrValue = Promise.reject(error);
				}
				Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
					var _config$retry, _config$retryDelay;
					if (isResolved) return;
					const retry = (_config$retry = config.retry) != null ? _config$retry : 3;
					const retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
					const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
					const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
					if (isRetryCancelled || !shouldRetry) {
						reject(error);
						return;
					}
					failureCount++;
					config.onFail == null || config.onFail(failureCount, error);
					utils.sleep(delay).then(() => {
						if (shouldPause()) return pause();
					}).then(() => {
						if (isRetryCancelled) reject(error);
						else run();
					});
				});
			};
			if (canFetch(config.networkMode)) run();
			else pause().then(run);
			return {
				promise,
				cancel,
				continue: () => {
					return (continueFn == null ? void 0 : continueFn()) ? promise : Promise.resolve();
				},
				cancelRetry,
				continueRetry
			};
		}
		exports.CancelledError = CancelledError;
		exports.canFetch = canFetch;
		exports.createRetryer = createRetryer;
		exports.isCancelledError = isCancelledError;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/logger.js
	var require_logger = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.defaultLogger = console;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/notifyManager.js
	var require_notifyManager = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		function createNotifyManager() {
			let queue = [];
			let transactions = 0;
			let notifyFn = (callback) => {
				callback();
			};
			let batchNotifyFn = (callback) => {
				callback();
			};
			const batch = (callback) => {
				let result;
				transactions++;
				try {
					result = callback();
				} finally {
					transactions--;
					if (!transactions) flush();
				}
				return result;
			};
			const schedule = (callback) => {
				if (transactions) queue.push(callback);
				else utils.scheduleMicrotask(() => {
					notifyFn(callback);
				});
			};
			/**
			* All calls to the wrapped function will be batched.
			*/
			const batchCalls = (callback) => {
				return (...args) => {
					schedule(() => {
						callback(...args);
					});
				};
			};
			const flush = () => {
				const originalQueue = queue;
				queue = [];
				if (originalQueue.length) utils.scheduleMicrotask(() => {
					batchNotifyFn(() => {
						originalQueue.forEach((callback) => {
							notifyFn(callback);
						});
					});
				});
			};
			/**
			* Use this method to set a custom notify function.
			* This can be used to for example wrap notifications with `React.act` while running tests.
			*/
			const setNotifyFunction = (fn) => {
				notifyFn = fn;
			};
			/**
			* Use this method to set a custom function to batch notifications together into a single tick.
			* By default React Query will use the batch function provided by ReactDOM or React Native.
			*/
			const setBatchNotifyFunction = (fn) => {
				batchNotifyFn = fn;
			};
			return {
				batch,
				batchCalls,
				schedule,
				setNotifyFunction,
				setBatchNotifyFunction
			};
		}
		const notifyManager = createNotifyManager();
		exports.createNotifyManager = createNotifyManager;
		exports.notifyManager = notifyManager;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/removable.js
	var require_removable = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		var Removable = class {
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout();
				if (utils.isValidTimeout(this.cacheTime)) this.gcTimeout = setTimeout(() => {
					this.optionalRemove();
				}, this.cacheTime);
			}
			updateCacheTime(newCacheTime) {
				this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : utils.isServer ? Infinity : 300 * 1e3);
			}
			clearGcTimeout() {
				if (this.gcTimeout) {
					clearTimeout(this.gcTimeout);
					this.gcTimeout = void 0;
				}
			}
		};
		exports.Removable = Removable;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/query.js
	var require_query = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		var logger = require_logger();
		var notifyManager = require_notifyManager();
		var retryer = require_retryer();
		var removable = require_removable();
		var Query = class extends removable.Removable {
			constructor(config) {
				super();
				this.abortSignalConsumed = false;
				this.defaultOptions = config.defaultOptions;
				this.setOptions(config.options);
				this.observers = [];
				this.cache = config.cache;
				this.logger = config.logger || logger.defaultLogger;
				this.queryKey = config.queryKey;
				this.queryHash = config.queryHash;
				this.initialState = config.state || getDefaultState(this.options);
				this.state = this.initialState;
				this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			setOptions(options) {
				this.options = {
					...this.defaultOptions,
					...options
				};
				this.updateCacheTime(this.options.cacheTime);
			}
			optionalRemove() {
				if (!this.observers.length && this.state.fetchStatus === "idle") this.cache.remove(this);
			}
			setData(newData, options) {
				const data = utils.replaceData(this.state.data, newData, this.options);
				this.dispatch({
					data,
					type: "success",
					dataUpdatedAt: options == null ? void 0 : options.updatedAt,
					manual: options == null ? void 0 : options.manual
				});
				return data;
			}
			setState(state, setStateOptions) {
				this.dispatch({
					type: "setState",
					state,
					setStateOptions
				});
			}
			cancel(options) {
				var _this$retryer;
				const promise = this.promise;
				(_this$retryer = this.retryer) == null || _this$retryer.cancel(options);
				return promise ? promise.then(utils.noop).catch(utils.noop) : Promise.resolve();
			}
			destroy() {
				super.destroy();
				this.cancel({ silent: true });
			}
			reset() {
				this.destroy();
				this.setState(this.initialState);
			}
			isActive() {
				return this.observers.some((observer) => observer.options.enabled !== false);
			}
			isDisabled() {
				return this.getObserversCount() > 0 && !this.isActive();
			}
			isStale() {
				return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((observer) => observer.getCurrentResult().isStale);
			}
			isStaleByTime(staleTime = 0) {
				return this.state.isInvalidated || !this.state.dataUpdatedAt || !utils.timeUntilStale(this.state.dataUpdatedAt, staleTime);
			}
			onFocus() {
				var _this$retryer2;
				const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
				if (observer) observer.refetch({ cancelRefetch: false });
				(_this$retryer2 = this.retryer) == null || _this$retryer2.continue();
			}
			onOnline() {
				var _this$retryer3;
				const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
				if (observer) observer.refetch({ cancelRefetch: false });
				(_this$retryer3 = this.retryer) == null || _this$retryer3.continue();
			}
			addObserver(observer) {
				if (!this.observers.includes(observer)) {
					this.observers.push(observer);
					this.clearGcTimeout();
					this.cache.notify({
						type: "observerAdded",
						query: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				if (this.observers.includes(observer)) {
					this.observers = this.observers.filter((x) => x !== observer);
					if (!this.observers.length) {
						if (this.retryer) if (this.abortSignalConsumed) this.retryer.cancel({ revert: true });
						else this.retryer.cancelRetry();
						this.scheduleGc();
					}
					this.cache.notify({
						type: "observerRemoved",
						query: this,
						observer
					});
				}
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				if (!this.state.isInvalidated) this.dispatch({ type: "invalidate" });
			}
			fetch(options, fetchOptions) {
				var _this$options$behavio, _context$fetchOptions;
				if (this.state.fetchStatus !== "idle") {
					if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) this.cancel({ silent: true });
					else if (this.promise) {
						var _this$retryer4;
						(_this$retryer4 = this.retryer) == null || _this$retryer4.continueRetry();
						return this.promise;
					}
				}
				if (options) this.setOptions(options);
				if (!this.options.queryFn) {
					const observer = this.observers.find((x) => x.options.queryFn);
					if (observer) this.setOptions(observer.options);
				}
				const abortController = utils.getAbortController();
				const queryFnContext = {
					queryKey: this.queryKey,
					pageParam: void 0,
					meta: this.meta
				};
				const addSignalProperty = (object) => {
					Object.defineProperty(object, "signal", {
						enumerable: true,
						get: () => {
							if (abortController) {
								this.abortSignalConsumed = true;
								return abortController.signal;
							}
						}
					});
				};
				addSignalProperty(queryFnContext);
				const fetchFn = () => {
					if (!this.options.queryFn) return Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'");
					this.abortSignalConsumed = false;
					return this.options.queryFn(queryFnContext);
				};
				const context = {
					fetchOptions,
					options: this.options,
					queryKey: this.queryKey,
					state: this.state,
					fetchFn
				};
				addSignalProperty(context);
				(_this$options$behavio = this.options.behavior) == null || _this$options$behavio.onFetch(context);
				this.revertState = this.state;
				if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
					var _context$fetchOptions2;
					this.dispatch({
						type: "fetch",
						meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
					});
				}
				const onError = (error) => {
					if (!(retryer.isCancelledError(error) && error.silent)) this.dispatch({
						type: "error",
						error
					});
					if (!retryer.isCancelledError(error)) {
						var _this$cache$config$on, _this$cache$config, _this$cache$config$on2, _this$cache$config2;
						(_this$cache$config$on = (_this$cache$config = this.cache.config).onError) == null || _this$cache$config$on.call(_this$cache$config, error, this);
						(_this$cache$config$on2 = (_this$cache$config2 = this.cache.config).onSettled) == null || _this$cache$config$on2.call(_this$cache$config2, this.state.data, error, this);
					}
					if (!this.isFetchingOptimistic) this.scheduleGc();
					this.isFetchingOptimistic = false;
				};
				this.retryer = retryer.createRetryer({
					fn: context.fetchFn,
					abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
					onSuccess: (data) => {
						var _this$cache$config$on3, _this$cache$config3, _this$cache$config$on4, _this$cache$config4;
						if (typeof data === "undefined") {
							onError(/* @__PURE__ */ new Error(this.queryHash + " data is undefined"));
							return;
						}
						this.setData(data);
						(_this$cache$config$on3 = (_this$cache$config3 = this.cache.config).onSuccess) == null || _this$cache$config$on3.call(_this$cache$config3, data, this);
						(_this$cache$config$on4 = (_this$cache$config4 = this.cache.config).onSettled) == null || _this$cache$config$on4.call(_this$cache$config4, data, this.state.error, this);
						if (!this.isFetchingOptimistic) this.scheduleGc();
						this.isFetchingOptimistic = false;
					},
					onError,
					onFail: (failureCount, error) => {
						this.dispatch({
							type: "failed",
							failureCount,
							error
						});
					},
					onPause: () => {
						this.dispatch({ type: "pause" });
					},
					onContinue: () => {
						this.dispatch({ type: "continue" });
					},
					retry: context.options.retry,
					retryDelay: context.options.retryDelay,
					networkMode: context.options.networkMode
				});
				this.promise = this.retryer.promise;
				return this.promise;
			}
			dispatch(action) {
				const reducer = (state) => {
					var _action$meta, _action$dataUpdatedAt;
					switch (action.type) {
						case "failed": return {
							...state,
							fetchFailureCount: action.failureCount,
							fetchFailureReason: action.error
						};
						case "pause": return {
							...state,
							fetchStatus: "paused"
						};
						case "continue": return {
							...state,
							fetchStatus: "fetching"
						};
						case "fetch": return {
							...state,
							fetchFailureCount: 0,
							fetchFailureReason: null,
							fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
							fetchStatus: retryer.canFetch(this.options.networkMode) ? "fetching" : "paused",
							...!state.dataUpdatedAt && {
								error: null,
								status: "loading"
							}
						};
						case "success": return {
							...state,
							data: action.data,
							dataUpdateCount: state.dataUpdateCount + 1,
							dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
							error: null,
							isInvalidated: false,
							status: "success",
							...!action.manual && {
								fetchStatus: "idle",
								fetchFailureCount: 0,
								fetchFailureReason: null
							}
						};
						case "error":
							const error = action.error;
							if (retryer.isCancelledError(error) && error.revert && this.revertState) return {
								...this.revertState,
								fetchStatus: "idle"
							};
							return {
								...state,
								error,
								errorUpdateCount: state.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: state.fetchFailureCount + 1,
								fetchFailureReason: error,
								fetchStatus: "idle",
								status: "error"
							};
						case "invalidate": return {
							...state,
							isInvalidated: true
						};
						case "setState": return {
							...state,
							...action.state
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.notifyManager.batch(() => {
					this.observers.forEach((observer) => {
						observer.onQueryUpdate(action);
					});
					this.cache.notify({
						query: this,
						type: "updated",
						action
					});
				});
			}
		};
		function getDefaultState(options) {
			const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
			const hasData = typeof data !== "undefined";
			const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
			return {
				data,
				dataUpdateCount: 0,
				dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
				error: null,
				errorUpdateCount: 0,
				errorUpdatedAt: 0,
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchMeta: null,
				isInvalidated: false,
				status: hasData ? "success" : "loading",
				fetchStatus: "idle"
			};
		}
		exports.Query = Query;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/queryCache.js
	var require_queryCache = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		var query = require_query();
		var notifyManager = require_notifyManager();
		var subscribable = require_subscribable();
		var QueryCache = class extends subscribable.Subscribable {
			constructor(config) {
				super();
				this.config = config || {};
				this.queries = [];
				this.queriesMap = {};
			}
			build(client, options, state) {
				var _options$queryHash;
				const queryKey = options.queryKey;
				const queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : utils.hashQueryKeyByOptions(queryKey, options);
				let query$1 = this.get(queryHash);
				if (!query$1) {
					query$1 = new query.Query({
						cache: this,
						logger: client.getLogger(),
						queryKey,
						queryHash,
						options: client.defaultQueryOptions(options),
						state,
						defaultOptions: client.getQueryDefaults(queryKey)
					});
					this.add(query$1);
				}
				return query$1;
			}
			add(query) {
				if (!this.queriesMap[query.queryHash]) {
					this.queriesMap[query.queryHash] = query;
					this.queries.push(query);
					this.notify({
						type: "added",
						query
					});
				}
			}
			remove(query) {
				const queryInMap = this.queriesMap[query.queryHash];
				if (queryInMap) {
					query.destroy();
					this.queries = this.queries.filter((x) => x !== query);
					if (queryInMap === query) delete this.queriesMap[query.queryHash];
					this.notify({
						type: "removed",
						query
					});
				}
			}
			clear() {
				notifyManager.notifyManager.batch(() => {
					this.queries.forEach((query) => {
						this.remove(query);
					});
				});
			}
			get(queryHash) {
				return this.queriesMap[queryHash];
			}
			getAll() {
				return this.queries;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			find(arg1, arg2) {
				const [filters] = utils.parseFilterArgs(arg1, arg2);
				if (typeof filters.exact === "undefined") filters.exact = true;
				return this.queries.find((query) => utils.matchQuery(filters, query));
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			findAll(arg1, arg2) {
				const [filters] = utils.parseFilterArgs(arg1, arg2);
				return Object.keys(filters).length > 0 ? this.queries.filter((query) => utils.matchQuery(filters, query)) : this.queries;
			}
			notify(event) {
				notifyManager.notifyManager.batch(() => {
					this.listeners.forEach(({ listener }) => {
						listener(event);
					});
				});
			}
			onFocus() {
				notifyManager.notifyManager.batch(() => {
					this.queries.forEach((query) => {
						query.onFocus();
					});
				});
			}
			onOnline() {
				notifyManager.notifyManager.batch(() => {
					this.queries.forEach((query) => {
						query.onOnline();
					});
				});
			}
		};
		exports.QueryCache = QueryCache;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/mutation.js
	var require_mutation = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var logger = require_logger();
		var notifyManager = require_notifyManager();
		var removable = require_removable();
		var retryer = require_retryer();
		var Mutation = class extends removable.Removable {
			constructor(config) {
				super();
				this.defaultOptions = config.defaultOptions;
				this.mutationId = config.mutationId;
				this.mutationCache = config.mutationCache;
				this.logger = config.logger || logger.defaultLogger;
				this.observers = [];
				this.state = config.state || getDefaultState();
				this.setOptions(config.options);
				this.scheduleGc();
			}
			setOptions(options) {
				this.options = {
					...this.defaultOptions,
					...options
				};
				this.updateCacheTime(this.options.cacheTime);
			}
			get meta() {
				return this.options.meta;
			}
			setState(state) {
				this.dispatch({
					type: "setState",
					state
				});
			}
			addObserver(observer) {
				if (!this.observers.includes(observer)) {
					this.observers.push(observer);
					this.clearGcTimeout();
					this.mutationCache.notify({
						type: "observerAdded",
						mutation: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				this.observers = this.observers.filter((x) => x !== observer);
				this.scheduleGc();
				this.mutationCache.notify({
					type: "observerRemoved",
					mutation: this,
					observer
				});
			}
			optionalRemove() {
				if (!this.observers.length) if (this.state.status === "loading") this.scheduleGc();
				else this.mutationCache.remove(this);
			}
			continue() {
				var _this$retryer$continu, _this$retryer;
				return (_this$retryer$continu = (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.continue()) != null ? _this$retryer$continu : this.execute();
			}
			async execute() {
				const executeMutation = () => {
					var _this$options$retry;
					this.retryer = retryer.createRetryer({
						fn: () => {
							if (!this.options.mutationFn) return Promise.reject("No mutationFn found");
							return this.options.mutationFn(this.state.variables);
						},
						onFail: (failureCount, error) => {
							this.dispatch({
								type: "failed",
								failureCount,
								error
							});
						},
						onPause: () => {
							this.dispatch({ type: "pause" });
						},
						onContinue: () => {
							this.dispatch({ type: "continue" });
						},
						retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode
					});
					return this.retryer.promise;
				};
				const restored = this.state.status === "loading";
				try {
					var _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onSettl, _this$options3;
					if (!restored) {
						var _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options;
						this.dispatch({
							type: "loading",
							variables: this.options.variables
						});
						await ((_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this));
						const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables));
						if (context !== this.state.context) this.dispatch({
							type: "loading",
							context,
							variables: this.state.variables
						});
					}
					const data = await executeMutation();
					await ((_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this));
					await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context));
					await ((_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, data, null, this.state.variables, this.state.context, this));
					await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context));
					this.dispatch({
						type: "success",
						data
					});
					return data;
				} catch (error) {
					try {
						var _this$mutationCache$c7, _this$mutationCache$c8, _this$options$onError, _this$options4, _this$mutationCache$c9, _this$mutationCache$c10, _this$options$onSettl2, _this$options5;
						await ((_this$mutationCache$c7 = (_this$mutationCache$c8 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c7.call(_this$mutationCache$c8, error, this.state.variables, this.state.context, this));
						await ((_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, error, this.state.variables, this.state.context));
						await ((_this$mutationCache$c9 = (_this$mutationCache$c10 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c9.call(_this$mutationCache$c10, void 0, error, this.state.variables, this.state.context, this));
						await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, void 0, error, this.state.variables, this.state.context));
						throw error;
					} finally {
						this.dispatch({
							type: "error",
							error
						});
					}
				}
			}
			dispatch(action) {
				const reducer = (state) => {
					switch (action.type) {
						case "failed": return {
							...state,
							failureCount: action.failureCount,
							failureReason: action.error
						};
						case "pause": return {
							...state,
							isPaused: true
						};
						case "continue": return {
							...state,
							isPaused: false
						};
						case "loading": return {
							...state,
							context: action.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: !retryer.canFetch(this.options.networkMode),
							status: "loading",
							variables: action.variables
						};
						case "success": return {
							...state,
							data: action.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: "success",
							isPaused: false
						};
						case "error": return {
							...state,
							data: void 0,
							error: action.error,
							failureCount: state.failureCount + 1,
							failureReason: action.error,
							isPaused: false,
							status: "error"
						};
						case "setState": return {
							...state,
							...action.state
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.notifyManager.batch(() => {
					this.observers.forEach((observer) => {
						observer.onMutationUpdate(action);
					});
					this.mutationCache.notify({
						mutation: this,
						type: "updated",
						action
					});
				});
			}
		};
		function getDefaultState() {
			return {
				context: void 0,
				data: void 0,
				error: null,
				failureCount: 0,
				failureReason: null,
				isPaused: false,
				status: "idle",
				variables: void 0
			};
		}
		exports.Mutation = Mutation;
		exports.getDefaultState = getDefaultState;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/mutationCache.js
	var require_mutationCache = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var notifyManager = require_notifyManager();
		var mutation = require_mutation();
		var utils = require_utils$2();
		var subscribable = require_subscribable();
		var MutationCache = class extends subscribable.Subscribable {
			constructor(config) {
				super();
				this.config = config || {};
				this.mutations = [];
				this.mutationId = 0;
			}
			build(client, options, state) {
				const mutation$1 = new mutation.Mutation({
					mutationCache: this,
					logger: client.getLogger(),
					mutationId: ++this.mutationId,
					options: client.defaultMutationOptions(options),
					state,
					defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0
				});
				this.add(mutation$1);
				return mutation$1;
			}
			add(mutation) {
				this.mutations.push(mutation);
				this.notify({
					type: "added",
					mutation
				});
			}
			remove(mutation) {
				this.mutations = this.mutations.filter((x) => x !== mutation);
				this.notify({
					type: "removed",
					mutation
				});
			}
			clear() {
				notifyManager.notifyManager.batch(() => {
					this.mutations.forEach((mutation) => {
						this.remove(mutation);
					});
				});
			}
			getAll() {
				return this.mutations;
			}
			find(filters) {
				if (typeof filters.exact === "undefined") filters.exact = true;
				return this.mutations.find((mutation) => utils.matchMutation(filters, mutation));
			}
			findAll(filters) {
				return this.mutations.filter((mutation) => utils.matchMutation(filters, mutation));
			}
			notify(event) {
				notifyManager.notifyManager.batch(() => {
					this.listeners.forEach(({ listener }) => {
						listener(event);
					});
				});
			}
			resumePausedMutations() {
				var _this$resuming;
				this.resuming = ((_this$resuming = this.resuming) != null ? _this$resuming : Promise.resolve()).then(() => {
					const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
					return notifyManager.notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(utils.noop)), Promise.resolve()));
				}).then(() => {
					this.resuming = void 0;
				});
				return this.resuming;
			}
		};
		exports.MutationCache = MutationCache;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.js
	var require_infiniteQueryBehavior = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		function infiniteQueryBehavior() {
			return { onFetch: (context) => {
				context.fetchFn = () => {
					var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
					const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
					const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
					const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
					const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
					const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
					const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
					const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
					let newPageParams = oldPageParams;
					let cancelled = false;
					const addSignalProperty = (object) => {
						Object.defineProperty(object, "signal", {
							enumerable: true,
							get: () => {
								var _context$signal;
								if ((_context$signal = context.signal) != null && _context$signal.aborted) cancelled = true;
								else {
									var _context$signal2;
									(_context$signal2 = context.signal) == null || _context$signal2.addEventListener("abort", () => {
										cancelled = true;
									});
								}
								return context.signal;
							}
						});
					};
					const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + context.options.queryHash + "'"));
					const buildNewPages = (pages, param, page, previous) => {
						newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
						return previous ? [page, ...pages] : [...pages, page];
					};
					const fetchPage = (pages, manual, param, previous) => {
						if (cancelled) return Promise.reject("Cancelled");
						if (typeof param === "undefined" && !manual && pages.length) return Promise.resolve(pages);
						const queryFnContext = {
							queryKey: context.queryKey,
							pageParam: param,
							meta: context.options.meta
						};
						addSignalProperty(queryFnContext);
						const queryFnResult = queryFn(queryFnContext);
						return Promise.resolve(queryFnResult).then((page) => buildNewPages(pages, param, page, previous));
					};
					let promise;
					if (!oldPages.length) promise = fetchPage([]);
					else if (isFetchingNextPage) {
						const manual = typeof pageParam !== "undefined";
						promise = fetchPage(oldPages, manual, manual ? pageParam : getNextPageParam(context.options, oldPages));
					} else if (isFetchingPreviousPage) {
						const manual = typeof pageParam !== "undefined";
						promise = fetchPage(oldPages, manual, manual ? pageParam : getPreviousPageParam(context.options, oldPages), true);
					} else {
						newPageParams = [];
						const manual = typeof context.options.getNextPageParam === "undefined";
						promise = (refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true) ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
						for (let i = 1; i < oldPages.length; i++) promise = promise.then((pages) => {
							if (refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true) {
								const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
								return fetchPage(pages, manual, param);
							}
							return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
						});
					}
					return promise.then((pages) => ({
						pages,
						pageParams: newPageParams
					}));
				};
			} };
		}
		function getNextPageParam(options, pages) {
			return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
		}
		function getPreviousPageParam(options, pages) {
			return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
		}
		/**
		* Checks if there is a next page.
		* Returns `undefined` if it cannot be determined.
		*/
		function hasNextPage(options, pages) {
			if (options.getNextPageParam && Array.isArray(pages)) {
				const nextPageParam = getNextPageParam(options, pages);
				return typeof nextPageParam !== "undefined" && nextPageParam !== null && nextPageParam !== false;
			}
		}
		/**
		* Checks if there is a previous page.
		* Returns `undefined` if it cannot be determined.
		*/
		function hasPreviousPage(options, pages) {
			if (options.getPreviousPageParam && Array.isArray(pages)) {
				const previousPageParam = getPreviousPageParam(options, pages);
				return typeof previousPageParam !== "undefined" && previousPageParam !== null && previousPageParam !== false;
			}
		}
		exports.getNextPageParam = getNextPageParam;
		exports.getPreviousPageParam = getPreviousPageParam;
		exports.hasNextPage = hasNextPage;
		exports.hasPreviousPage = hasPreviousPage;
		exports.infiniteQueryBehavior = infiniteQueryBehavior;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/queryClient.js
	var require_queryClient = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		var queryCache = require_queryCache();
		var mutationCache = require_mutationCache();
		var focusManager = require_focusManager();
		var onlineManager = require_onlineManager();
		var notifyManager = require_notifyManager();
		var infiniteQueryBehavior = require_infiniteQueryBehavior();
		var logger = require_logger();
		var QueryClient = class {
			constructor(config = {}) {
				this.queryCache = config.queryCache || new queryCache.QueryCache();
				this.mutationCache = config.mutationCache || new mutationCache.MutationCache();
				this.logger = config.logger || logger.defaultLogger;
				this.defaultOptions = config.defaultOptions || {};
				this.queryDefaults = [];
				this.mutationDefaults = [];
				this.mountCount = 0;
			}
			mount() {
				this.mountCount++;
				if (this.mountCount !== 1) return;
				this.unsubscribeFocus = focusManager.focusManager.subscribe(() => {
					if (focusManager.focusManager.isFocused()) {
						this.resumePausedMutations();
						this.queryCache.onFocus();
					}
				});
				this.unsubscribeOnline = onlineManager.onlineManager.subscribe(() => {
					if (onlineManager.onlineManager.isOnline()) {
						this.resumePausedMutations();
						this.queryCache.onOnline();
					}
				});
			}
			unmount() {
				var _this$unsubscribeFocu, _this$unsubscribeOnli;
				this.mountCount--;
				if (this.mountCount !== 0) return;
				(_this$unsubscribeFocu = this.unsubscribeFocus) == null || _this$unsubscribeFocu.call(this);
				this.unsubscribeFocus = void 0;
				(_this$unsubscribeOnli = this.unsubscribeOnline) == null || _this$unsubscribeOnli.call(this);
				this.unsubscribeOnline = void 0;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			isFetching(arg1, arg2) {
				const [filters] = utils.parseFilterArgs(arg1, arg2);
				filters.fetchStatus = "fetching";
				return this.queryCache.findAll(filters).length;
			}
			isMutating(filters) {
				return this.mutationCache.findAll({
					...filters,
					fetching: true
				}).length;
			}
			/**
			* @deprecated This method will accept only queryKey in the next major version.
			*/
			getQueryData(queryKey, filters) {
				var _this$queryCache$find;
				return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			ensureQueryData(arg1, arg2, arg3) {
				const parsedOptions = utils.parseQueryArgs(arg1, arg2, arg3);
				const cachedData = this.getQueryData(parsedOptions.queryKey);
				return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			getQueriesData(queryKeyOrFilters) {
				return this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey, state }) => {
					return [queryKey, state.data];
				});
			}
			setQueryData(queryKey, updater, options) {
				const query = this.queryCache.find(queryKey);
				const prevData = query == null ? void 0 : query.state.data;
				const data = utils.functionalUpdate(updater, prevData);
				if (typeof data === "undefined") return;
				const parsedOptions = utils.parseQueryArgs(queryKey);
				const defaultedOptions = this.defaultQueryOptions(parsedOptions);
				return this.queryCache.build(this, defaultedOptions).setData(data, {
					...options,
					manual: true
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			setQueriesData(queryKeyOrFilters, updater, options) {
				return notifyManager.notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
			}
			getQueryState(queryKey, filters) {
				var _this$queryCache$find2;
				return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			removeQueries(arg1, arg2) {
				const [filters] = utils.parseFilterArgs(arg1, arg2);
				const queryCache = this.queryCache;
				notifyManager.notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						queryCache.remove(query);
					});
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			resetQueries(arg1, arg2, arg3) {
				const [filters, options] = utils.parseFilterArgs(arg1, arg2, arg3);
				const queryCache = this.queryCache;
				const refetchFilters = {
					type: "active",
					...filters
				};
				return notifyManager.notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						query.reset();
					});
					return this.refetchQueries(refetchFilters, options);
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			cancelQueries(arg1, arg2, arg3) {
				const [filters, cancelOptions = {}] = utils.parseFilterArgs(arg1, arg2, arg3);
				if (typeof cancelOptions.revert === "undefined") cancelOptions.revert = true;
				const promises = notifyManager.notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions)));
				return Promise.all(promises).then(utils.noop).catch(utils.noop);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			invalidateQueries(arg1, arg2, arg3) {
				const [filters, options] = utils.parseFilterArgs(arg1, arg2, arg3);
				return notifyManager.notifyManager.batch(() => {
					var _ref, _filters$refetchType;
					this.queryCache.findAll(filters).forEach((query) => {
						query.invalidate();
					});
					if (filters.refetchType === "none") return Promise.resolve();
					const refetchFilters = {
						...filters,
						type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : "active"
					};
					return this.refetchQueries(refetchFilters, options);
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			refetchQueries(arg1, arg2, arg3) {
				const [filters, options] = utils.parseFilterArgs(arg1, arg2, arg3);
				const promises = notifyManager.notifyManager.batch(() => this.queryCache.findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
					var _options$cancelRefetc;
					return query.fetch(void 0, {
						...options,
						cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
						meta: { refetchPage: filters.refetchPage }
					});
				}));
				let promise = Promise.all(promises).then(utils.noop);
				if (!(options != null && options.throwOnError)) promise = promise.catch(utils.noop);
				return promise;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			fetchQuery(arg1, arg2, arg3) {
				const parsedOptions = utils.parseQueryArgs(arg1, arg2, arg3);
				const defaultedOptions = this.defaultQueryOptions(parsedOptions);
				if (typeof defaultedOptions.retry === "undefined") defaultedOptions.retry = false;
				const query = this.queryCache.build(this, defaultedOptions);
				return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			prefetchQuery(arg1, arg2, arg3) {
				return this.fetchQuery(arg1, arg2, arg3).then(utils.noop).catch(utils.noop);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			fetchInfiniteQuery(arg1, arg2, arg3) {
				const parsedOptions = utils.parseQueryArgs(arg1, arg2, arg3);
				parsedOptions.behavior = infiniteQueryBehavior.infiniteQueryBehavior();
				return this.fetchQuery(parsedOptions);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			prefetchInfiniteQuery(arg1, arg2, arg3) {
				return this.fetchInfiniteQuery(arg1, arg2, arg3).then(utils.noop).catch(utils.noop);
			}
			resumePausedMutations() {
				return this.mutationCache.resumePausedMutations();
			}
			getQueryCache() {
				return this.queryCache;
			}
			getMutationCache() {
				return this.mutationCache;
			}
			getLogger() {
				return this.logger;
			}
			getDefaultOptions() {
				return this.defaultOptions;
			}
			setDefaultOptions(options) {
				this.defaultOptions = options;
			}
			setQueryDefaults(queryKey, options) {
				const result = this.queryDefaults.find((x) => utils.hashQueryKey(queryKey) === utils.hashQueryKey(x.queryKey));
				if (result) result.defaultOptions = options;
				else this.queryDefaults.push({
					queryKey,
					defaultOptions: options
				});
			}
			getQueryDefaults(queryKey) {
				if (!queryKey) return;
				const firstMatchingDefaults = this.queryDefaults.find((x) => utils.partialMatchKey(queryKey, x.queryKey));
				return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
			}
			setMutationDefaults(mutationKey, options) {
				const result = this.mutationDefaults.find((x) => utils.hashQueryKey(mutationKey) === utils.hashQueryKey(x.mutationKey));
				if (result) result.defaultOptions = options;
				else this.mutationDefaults.push({
					mutationKey,
					defaultOptions: options
				});
			}
			getMutationDefaults(mutationKey) {
				if (!mutationKey) return;
				const firstMatchingDefaults = this.mutationDefaults.find((x) => utils.partialMatchKey(mutationKey, x.mutationKey));
				return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
			}
			defaultQueryOptions(options) {
				if (options != null && options._defaulted) return options;
				const defaultedOptions = {
					...this.defaultOptions.queries,
					...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
					...options,
					_defaulted: true
				};
				if (!defaultedOptions.queryHash && defaultedOptions.queryKey) defaultedOptions.queryHash = utils.hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
				if (typeof defaultedOptions.refetchOnReconnect === "undefined") defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
				if (typeof defaultedOptions.useErrorBoundary === "undefined") defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
				return defaultedOptions;
			}
			defaultMutationOptions(options) {
				if (options != null && options._defaulted) return options;
				return {
					...this.defaultOptions.mutations,
					...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
					...options,
					_defaulted: true
				};
			}
			clear() {
				this.queryCache.clear();
				this.mutationCache.clear();
			}
		};
		exports.QueryClient = QueryClient;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/queryObserver.js
	var require_queryObserver = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		var notifyManager = require_notifyManager();
		var focusManager = require_focusManager();
		var subscribable = require_subscribable();
		var retryer = require_retryer();
		var QueryObserver = class extends subscribable.Subscribable {
			constructor(client, options) {
				super();
				this.client = client;
				this.options = options;
				this.trackedProps = /* @__PURE__ */ new Set();
				this.selectError = null;
				this.bindMethods();
				this.setOptions(options);
			}
			bindMethods() {
				this.remove = this.remove.bind(this);
				this.refetch = this.refetch.bind(this);
			}
			onSubscribe() {
				if (this.listeners.size === 1) {
					this.currentQuery.addObserver(this);
					if (shouldFetchOnMount(this.currentQuery, this.options)) this.executeFetch();
					this.updateTimers();
				}
			}
			onUnsubscribe() {
				if (!this.hasListeners()) this.destroy();
			}
			shouldFetchOnReconnect() {
				return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
			}
			shouldFetchOnWindowFocus() {
				return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
			}
			destroy() {
				this.listeners = /* @__PURE__ */ new Set();
				this.clearStaleTimeout();
				this.clearRefetchInterval();
				this.currentQuery.removeObserver(this);
			}
			setOptions(options, notifyOptions) {
				const prevOptions = this.options;
				const prevQuery = this.currentQuery;
				this.options = this.client.defaultQueryOptions(options);
				if (!utils.shallowEqualObjects(prevOptions, this.options)) this.client.getQueryCache().notify({
					type: "observerOptionsUpdated",
					query: this.currentQuery,
					observer: this
				});
				if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") throw new Error("Expected enabled to be a boolean");
				if (!this.options.queryKey) this.options.queryKey = prevOptions.queryKey;
				this.updateQuery();
				const mounted = this.hasListeners();
				if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) this.executeFetch();
				this.updateResult(notifyOptions);
				if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) this.updateStaleTimeout();
				const nextRefetchInterval = this.computeRefetchInterval();
				if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) this.updateRefetchInterval(nextRefetchInterval);
			}
			getOptimisticResult(options) {
				const query = this.client.getQueryCache().build(this.client, options);
				const result = this.createResult(query, options);
				if (shouldAssignObserverCurrentProperties(this, result, options)) {
					this.currentResult = result;
					this.currentResultOptions = this.options;
					this.currentResultState = this.currentQuery.state;
				}
				return result;
			}
			getCurrentResult() {
				return this.currentResult;
			}
			trackResult(result) {
				const trackedResult = {};
				Object.keys(result).forEach((key) => {
					Object.defineProperty(trackedResult, key, {
						configurable: false,
						enumerable: true,
						get: () => {
							this.trackedProps.add(key);
							return result[key];
						}
					});
				});
				return trackedResult;
			}
			getCurrentQuery() {
				return this.currentQuery;
			}
			remove() {
				this.client.getQueryCache().remove(this.currentQuery);
			}
			refetch({ refetchPage, ...options } = {}) {
				return this.fetch({
					...options,
					meta: { refetchPage }
				});
			}
			fetchOptimistic(options) {
				const defaultedOptions = this.client.defaultQueryOptions(options);
				const query = this.client.getQueryCache().build(this.client, defaultedOptions);
				query.isFetchingOptimistic = true;
				return query.fetch().then(() => this.createResult(query, defaultedOptions));
			}
			fetch(fetchOptions) {
				var _fetchOptions$cancelR;
				return this.executeFetch({
					...fetchOptions,
					cancelRefetch: (_fetchOptions$cancelR = fetchOptions.cancelRefetch) != null ? _fetchOptions$cancelR : true
				}).then(() => {
					this.updateResult();
					return this.currentResult;
				});
			}
			executeFetch(fetchOptions) {
				this.updateQuery();
				let promise = this.currentQuery.fetch(this.options, fetchOptions);
				if (!(fetchOptions != null && fetchOptions.throwOnError)) promise = promise.catch(utils.noop);
				return promise;
			}
			updateStaleTimeout() {
				this.clearStaleTimeout();
				if (utils.isServer || this.currentResult.isStale || !utils.isValidTimeout(this.options.staleTime)) return;
				const timeout = utils.timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
				this.staleTimeoutId = setTimeout(() => {
					if (!this.currentResult.isStale) this.updateResult();
				}, timeout);
			}
			computeRefetchInterval() {
				var _this$options$refetch;
				return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
			}
			updateRefetchInterval(nextInterval) {
				this.clearRefetchInterval();
				this.currentRefetchInterval = nextInterval;
				if (utils.isServer || this.options.enabled === false || !utils.isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) return;
				this.refetchIntervalId = setInterval(() => {
					if (this.options.refetchIntervalInBackground || focusManager.focusManager.isFocused()) this.executeFetch();
				}, this.currentRefetchInterval);
			}
			updateTimers() {
				this.updateStaleTimeout();
				this.updateRefetchInterval(this.computeRefetchInterval());
			}
			clearStaleTimeout() {
				if (this.staleTimeoutId) {
					clearTimeout(this.staleTimeoutId);
					this.staleTimeoutId = void 0;
				}
			}
			clearRefetchInterval() {
				if (this.refetchIntervalId) {
					clearInterval(this.refetchIntervalId);
					this.refetchIntervalId = void 0;
				}
			}
			createResult(query, options) {
				const prevQuery = this.currentQuery;
				const prevOptions = this.options;
				const prevResult = this.currentResult;
				const prevResultState = this.currentResultState;
				const prevResultOptions = this.currentResultOptions;
				const queryChange = query !== prevQuery;
				const queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
				const prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
				const { state } = query;
				let { dataUpdatedAt, error, errorUpdatedAt, fetchStatus, status } = state;
				let isPreviousData = false;
				let isPlaceholderData = false;
				let data;
				if (options._optimisticResults) {
					const mounted = this.hasListeners();
					const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
					const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
					if (fetchOnMount || fetchOptionally) {
						fetchStatus = retryer.canFetch(query.options.networkMode) ? "fetching" : "paused";
						if (!dataUpdatedAt) status = "loading";
					}
					if (options._optimisticResults === "isRestoring") fetchStatus = "idle";
				}
				if (options.keepPreviousData && !state.dataUpdatedAt && prevQueryResult != null && prevQueryResult.isSuccess && status !== "error") {
					data = prevQueryResult.data;
					dataUpdatedAt = prevQueryResult.dataUpdatedAt;
					status = prevQueryResult.status;
					isPreviousData = true;
				} else if (options.select && typeof state.data !== "undefined") if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) data = this.selectResult;
				else try {
					this.selectFn = options.select;
					data = options.select(state.data);
					data = utils.replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
					this.selectResult = data;
					this.selectError = null;
				} catch (selectError) {
					this.selectError = selectError;
				}
				else data = state.data;
				if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && status === "loading") {
					let placeholderData;
					if (prevResult != null && prevResult.isPlaceholderData && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) placeholderData = prevResult.data;
					else {
						placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
						if (options.select && typeof placeholderData !== "undefined") try {
							placeholderData = options.select(placeholderData);
							this.selectError = null;
						} catch (selectError) {
							this.selectError = selectError;
						}
					}
					if (typeof placeholderData !== "undefined") {
						status = "success";
						data = utils.replaceData(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
						isPlaceholderData = true;
					}
				}
				if (this.selectError) {
					error = this.selectError;
					data = this.selectResult;
					errorUpdatedAt = Date.now();
					status = "error";
				}
				const isFetching = fetchStatus === "fetching";
				const isLoading = status === "loading";
				const isError = status === "error";
				return {
					status,
					fetchStatus,
					isLoading,
					isSuccess: status === "success",
					isError,
					isInitialLoading: isLoading && isFetching,
					data,
					dataUpdatedAt,
					error,
					errorUpdatedAt,
					failureCount: state.fetchFailureCount,
					failureReason: state.fetchFailureReason,
					errorUpdateCount: state.errorUpdateCount,
					isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
					isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
					isFetching,
					isRefetching: isFetching && !isLoading,
					isLoadingError: isError && state.dataUpdatedAt === 0,
					isPaused: fetchStatus === "paused",
					isPlaceholderData,
					isPreviousData,
					isRefetchError: isError && state.dataUpdatedAt !== 0,
					isStale: isStale(query, options),
					refetch: this.refetch,
					remove: this.remove
				};
			}
			updateResult(notifyOptions) {
				const prevResult = this.currentResult;
				const nextResult = this.createResult(this.currentQuery, this.options);
				this.currentResultState = this.currentQuery.state;
				this.currentResultOptions = this.options;
				if (utils.shallowEqualObjects(nextResult, prevResult)) return;
				this.currentResult = nextResult;
				const defaultNotifyOptions = { cache: true };
				const shouldNotifyListeners = () => {
					if (!prevResult) return true;
					const { notifyOnChangeProps } = this.options;
					const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
					if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.trackedProps.size) return true;
					const includedProps = new Set(notifyOnChangePropsValue != null ? notifyOnChangePropsValue : this.trackedProps);
					if (this.options.useErrorBoundary) includedProps.add("error");
					return Object.keys(this.currentResult).some((key) => {
						const typedKey = key;
						return this.currentResult[typedKey] !== prevResult[typedKey] && includedProps.has(typedKey);
					});
				};
				if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) defaultNotifyOptions.listeners = true;
				this.notify({
					...defaultNotifyOptions,
					...notifyOptions
				});
			}
			updateQuery() {
				const query = this.client.getQueryCache().build(this.client, this.options);
				if (query === this.currentQuery) return;
				const prevQuery = this.currentQuery;
				this.currentQuery = query;
				this.currentQueryInitialState = query.state;
				this.previousQueryResult = this.currentResult;
				if (this.hasListeners()) {
					prevQuery?.removeObserver(this);
					query.addObserver(this);
				}
			}
			onQueryUpdate(action) {
				const notifyOptions = {};
				if (action.type === "success") notifyOptions.onSuccess = !action.manual;
				else if (action.type === "error" && !retryer.isCancelledError(action.error)) notifyOptions.onError = true;
				this.updateResult(notifyOptions);
				if (this.hasListeners()) this.updateTimers();
			}
			notify(notifyOptions) {
				notifyManager.notifyManager.batch(() => {
					if (notifyOptions.onSuccess) {
						var _this$options$onSucce, _this$options, _this$options$onSettl, _this$options2;
						(_this$options$onSucce = (_this$options = this.options).onSuccess) == null || _this$options$onSucce.call(_this$options, this.currentResult.data);
						(_this$options$onSettl = (_this$options2 = this.options).onSettled) == null || _this$options$onSettl.call(_this$options2, this.currentResult.data, null);
					} else if (notifyOptions.onError) {
						var _this$options$onError, _this$options3, _this$options$onSettl2, _this$options4;
						(_this$options$onError = (_this$options3 = this.options).onError) == null || _this$options$onError.call(_this$options3, this.currentResult.error);
						(_this$options$onSettl2 = (_this$options4 = this.options).onSettled) == null || _this$options$onSettl2.call(_this$options4, void 0, this.currentResult.error);
					}
					if (notifyOptions.listeners) this.listeners.forEach(({ listener }) => {
						listener(this.currentResult);
					});
					if (notifyOptions.cache) this.client.getQueryCache().notify({
						query: this.currentQuery,
						type: "observerResultsUpdated"
					});
				});
			}
		};
		function shouldLoadOnMount(query, options) {
			return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
		}
		function shouldFetchOnMount(query, options) {
			return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
		}
		function shouldFetchOn(query, options, field) {
			if (options.enabled !== false) {
				const value = typeof field === "function" ? field(query) : field;
				return value === "always" || value !== false && isStale(query, options);
			}
			return false;
		}
		function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
			return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
		}
		function isStale(query, options) {
			return query.isStaleByTime(options.staleTime);
		}
		function shouldAssignObserverCurrentProperties(observer, optimisticResult, options) {
			if (options.keepPreviousData) return false;
			if (options.placeholderData !== void 0) return optimisticResult.isPlaceholderData;
			if (!utils.shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) return true;
			return false;
		}
		exports.QueryObserver = QueryObserver;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/queriesObserver.js
	var require_queriesObserver = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var utils = require_utils$2();
		var notifyManager = require_notifyManager();
		var queryObserver = require_queryObserver();
		var subscribable = require_subscribable();
		var QueriesObserver = class extends subscribable.Subscribable {
			constructor(client, queries) {
				super();
				this.client = client;
				this.queries = [];
				this.result = [];
				this.observers = [];
				this.observersMap = {};
				if (queries) this.setQueries(queries);
			}
			onSubscribe() {
				if (this.listeners.size === 1) this.observers.forEach((observer) => {
					observer.subscribe((result) => {
						this.onUpdate(observer, result);
					});
				});
			}
			onUnsubscribe() {
				if (!this.listeners.size) this.destroy();
			}
			destroy() {
				this.listeners = /* @__PURE__ */ new Set();
				this.observers.forEach((observer) => {
					observer.destroy();
				});
			}
			setQueries(queries, notifyOptions) {
				this.queries = queries;
				notifyManager.notifyManager.batch(() => {
					const prevObservers = this.observers;
					const newObserverMatches = this.findMatchingObservers(this.queries);
					newObserverMatches.forEach((match) => match.observer.setOptions(match.defaultedQueryOptions, notifyOptions));
					const newObservers = newObserverMatches.map((match) => match.observer);
					const newObserversMap = Object.fromEntries(newObservers.map((observer) => [observer.options.queryHash, observer]));
					const newResult = newObservers.map((observer) => observer.getCurrentResult());
					const hasIndexChange = newObservers.some((observer, index) => observer !== prevObservers[index]);
					if (prevObservers.length === newObservers.length && !hasIndexChange) return;
					this.observers = newObservers;
					this.observersMap = newObserversMap;
					this.result = newResult;
					if (!this.hasListeners()) return;
					utils.difference(prevObservers, newObservers).forEach((observer) => {
						observer.destroy();
					});
					utils.difference(newObservers, prevObservers).forEach((observer) => {
						observer.subscribe((result) => {
							this.onUpdate(observer, result);
						});
					});
					this.notify();
				});
			}
			getCurrentResult() {
				return this.result;
			}
			getQueries() {
				return this.observers.map((observer) => observer.getCurrentQuery());
			}
			getObservers() {
				return this.observers;
			}
			getOptimisticResult(queries) {
				return this.findMatchingObservers(queries).map((match) => match.observer.getOptimisticResult(match.defaultedQueryOptions));
			}
			findMatchingObservers(queries) {
				const prevObservers = this.observers;
				const prevObserversMap = new Map(prevObservers.map((observer) => [observer.options.queryHash, observer]));
				const defaultedQueryOptions = queries.map((options) => this.client.defaultQueryOptions(options));
				const matchingObservers = defaultedQueryOptions.flatMap((defaultedOptions) => {
					const match = prevObserversMap.get(defaultedOptions.queryHash);
					if (match != null) return [{
						defaultedQueryOptions: defaultedOptions,
						observer: match
					}];
					return [];
				});
				const matchedQueryHashes = new Set(matchingObservers.map((match) => match.defaultedQueryOptions.queryHash));
				const unmatchedQueries = defaultedQueryOptions.filter((defaultedOptions) => !matchedQueryHashes.has(defaultedOptions.queryHash));
				const matchingObserversSet = new Set(matchingObservers.map((match) => match.observer));
				const unmatchedObservers = prevObservers.filter((prevObserver) => !matchingObserversSet.has(prevObserver));
				const getObserver = (options) => {
					const defaultedOptions = this.client.defaultQueryOptions(options);
					const currentObserver = this.observersMap[defaultedOptions.queryHash];
					return currentObserver != null ? currentObserver : new queryObserver.QueryObserver(this.client, defaultedOptions);
				};
				const newOrReusedObservers = unmatchedQueries.map((options, index) => {
					if (options.keepPreviousData) {
						const previouslyUsedObserver = unmatchedObservers[index];
						if (previouslyUsedObserver !== void 0) return {
							defaultedQueryOptions: options,
							observer: previouslyUsedObserver
						};
					}
					return {
						defaultedQueryOptions: options,
						observer: getObserver(options)
					};
				});
				const sortMatchesByOrderOfQueries = (a, b) => defaultedQueryOptions.indexOf(a.defaultedQueryOptions) - defaultedQueryOptions.indexOf(b.defaultedQueryOptions);
				return matchingObservers.concat(newOrReusedObservers).sort(sortMatchesByOrderOfQueries);
			}
			onUpdate(observer, result) {
				const index = this.observers.indexOf(observer);
				if (index !== -1) {
					this.result = utils.replaceAt(this.result, index, result);
					this.notify();
				}
			}
			notify() {
				notifyManager.notifyManager.batch(() => {
					this.listeners.forEach(({ listener }) => {
						listener(this.result);
					});
				});
			}
		};
		exports.QueriesObserver = QueriesObserver;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/infiniteQueryObserver.js
	var require_infiniteQueryObserver = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var queryObserver = require_queryObserver();
		var infiniteQueryBehavior = require_infiniteQueryBehavior();
		var InfiniteQueryObserver = class extends queryObserver.QueryObserver {
			constructor(client, options) {
				super(client, options);
			}
			bindMethods() {
				super.bindMethods();
				this.fetchNextPage = this.fetchNextPage.bind(this);
				this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
			}
			setOptions(options, notifyOptions) {
				super.setOptions({
					...options,
					behavior: infiniteQueryBehavior.infiniteQueryBehavior()
				}, notifyOptions);
			}
			getOptimisticResult(options) {
				options.behavior = infiniteQueryBehavior.infiniteQueryBehavior();
				return super.getOptimisticResult(options);
			}
			fetchNextPage({ pageParam, ...options } = {}) {
				return this.fetch({
					...options,
					meta: { fetchMore: {
						direction: "forward",
						pageParam
					} }
				});
			}
			fetchPreviousPage({ pageParam, ...options } = {}) {
				return this.fetch({
					...options,
					meta: { fetchMore: {
						direction: "backward",
						pageParam
					} }
				});
			}
			createResult(query, options) {
				var _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet, _state$data, _state$data2;
				const { state } = query;
				const result = super.createResult(query, options);
				const { isFetching, isRefetching } = result;
				const isFetchingNextPage = isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === "forward";
				const isFetchingPreviousPage = isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === "backward";
				return {
					...result,
					fetchNextPage: this.fetchNextPage,
					fetchPreviousPage: this.fetchPreviousPage,
					hasNextPage: infiniteQueryBehavior.hasNextPage(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
					hasPreviousPage: infiniteQueryBehavior.hasPreviousPage(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
					isFetchingNextPage,
					isFetchingPreviousPage,
					isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
				};
			}
		};
		exports.InfiniteQueryObserver = InfiniteQueryObserver;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/mutationObserver.js
	var require_mutationObserver = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var mutation = require_mutation();
		var notifyManager = require_notifyManager();
		var subscribable = require_subscribable();
		var utils = require_utils$2();
		var MutationObserver = class extends subscribable.Subscribable {
			constructor(client, options) {
				super();
				this.client = client;
				this.setOptions(options);
				this.bindMethods();
				this.updateResult();
			}
			bindMethods() {
				this.mutate = this.mutate.bind(this);
				this.reset = this.reset.bind(this);
			}
			setOptions(options) {
				var _this$currentMutation;
				const prevOptions = this.options;
				this.options = this.client.defaultMutationOptions(options);
				if (!utils.shallowEqualObjects(prevOptions, this.options)) this.client.getMutationCache().notify({
					type: "observerOptionsUpdated",
					mutation: this.currentMutation,
					observer: this
				});
				(_this$currentMutation = this.currentMutation) == null || _this$currentMutation.setOptions(this.options);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$currentMutation2;
					(_this$currentMutation2 = this.currentMutation) == null || _this$currentMutation2.removeObserver(this);
				}
			}
			onMutationUpdate(action) {
				this.updateResult();
				const notifyOptions = { listeners: true };
				if (action.type === "success") notifyOptions.onSuccess = true;
				else if (action.type === "error") notifyOptions.onError = true;
				this.notify(notifyOptions);
			}
			getCurrentResult() {
				return this.currentResult;
			}
			reset() {
				this.currentMutation = void 0;
				this.updateResult();
				this.notify({ listeners: true });
			}
			mutate(variables, options) {
				this.mutateOptions = options;
				if (this.currentMutation) this.currentMutation.removeObserver(this);
				this.currentMutation = this.client.getMutationCache().build(this.client, {
					...this.options,
					variables: typeof variables !== "undefined" ? variables : this.options.variables
				});
				this.currentMutation.addObserver(this);
				return this.currentMutation.execute();
			}
			updateResult() {
				const state = this.currentMutation ? this.currentMutation.state : mutation.getDefaultState();
				const isLoading = state.status === "loading";
				const result = {
					...state,
					isLoading,
					isPending: isLoading,
					isSuccess: state.status === "success",
					isError: state.status === "error",
					isIdle: state.status === "idle",
					mutate: this.mutate,
					reset: this.reset
				};
				this.currentResult = result;
			}
			notify(options) {
				notifyManager.notifyManager.batch(() => {
					if (this.mutateOptions && this.hasListeners()) {
						if (options.onSuccess) {
							var _this$mutateOptions$o, _this$mutateOptions, _this$mutateOptions$o2, _this$mutateOptions2;
							(_this$mutateOptions$o = (_this$mutateOptions = this.mutateOptions).onSuccess) == null || _this$mutateOptions$o.call(_this$mutateOptions, this.currentResult.data, this.currentResult.variables, this.currentResult.context);
							(_this$mutateOptions$o2 = (_this$mutateOptions2 = this.mutateOptions).onSettled) == null || _this$mutateOptions$o2.call(_this$mutateOptions2, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
						} else if (options.onError) {
							var _this$mutateOptions$o3, _this$mutateOptions3, _this$mutateOptions$o4, _this$mutateOptions4;
							(_this$mutateOptions$o3 = (_this$mutateOptions3 = this.mutateOptions).onError) == null || _this$mutateOptions$o3.call(_this$mutateOptions3, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
							(_this$mutateOptions$o4 = (_this$mutateOptions4 = this.mutateOptions).onSettled) == null || _this$mutateOptions$o4.call(_this$mutateOptions4, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
						}
					}
					if (options.listeners) this.listeners.forEach(({ listener }) => {
						listener(this.currentResult);
					});
				});
			}
		};
		exports.MutationObserver = MutationObserver;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/hydration.js
	var require_hydration = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		function dehydrateMutation(mutation) {
			return {
				mutationKey: mutation.options.mutationKey,
				state: mutation.state
			};
		}
		function dehydrateQuery(query) {
			return {
				state: query.state,
				queryKey: query.queryKey,
				queryHash: query.queryHash
			};
		}
		function defaultShouldDehydrateMutation(mutation) {
			return mutation.state.isPaused;
		}
		function defaultShouldDehydrateQuery(query) {
			return query.state.status === "success";
		}
		function dehydrate(client, options = {}) {
			const mutations = [];
			const queries = [];
			if (options.dehydrateMutations !== false) {
				const shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
				client.getMutationCache().getAll().forEach((mutation) => {
					if (shouldDehydrateMutation(mutation)) mutations.push(dehydrateMutation(mutation));
				});
			}
			if (options.dehydrateQueries !== false) {
				const shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
				client.getQueryCache().getAll().forEach((query) => {
					if (shouldDehydrateQuery(query)) queries.push(dehydrateQuery(query));
				});
			}
			return {
				mutations,
				queries
			};
		}
		function hydrate(client, dehydratedState, options) {
			if (typeof dehydratedState !== "object" || dehydratedState === null) return;
			const mutationCache = client.getMutationCache();
			const queryCache = client.getQueryCache();
			const mutations = dehydratedState.mutations || [];
			const queries = dehydratedState.queries || [];
			mutations.forEach((dehydratedMutation) => {
				var _options$defaultOptio;
				mutationCache.build(client, {
					...options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations,
					mutationKey: dehydratedMutation.mutationKey
				}, dehydratedMutation.state);
			});
			queries.forEach(({ queryKey, state, queryHash }) => {
				var _options$defaultOptio2;
				const query = queryCache.get(queryHash);
				if (query) {
					if (query.state.dataUpdatedAt < state.dataUpdatedAt) {
						const { fetchStatus: _ignored, ...dehydratedQueryState } = state;
						query.setState(dehydratedQueryState);
					}
					return;
				}
				queryCache.build(client, {
					...options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries,
					queryKey,
					queryHash
				}, {
					...state,
					fetchStatus: "idle"
				});
			});
		}
		exports.defaultShouldDehydrateMutation = defaultShouldDehydrateMutation;
		exports.defaultShouldDehydrateQuery = defaultShouldDehydrateQuery;
		exports.dehydrate = dehydrate;
		exports.hydrate = hydrate;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/index.js
	var require_lib$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var retryer = require_retryer();
		var queryCache = require_queryCache();
		var queryClient = require_queryClient();
		var queryObserver = require_queryObserver();
		var queriesObserver = require_queriesObserver();
		var infiniteQueryObserver = require_infiniteQueryObserver();
		var mutationCache = require_mutationCache();
		var mutationObserver = require_mutationObserver();
		var notifyManager = require_notifyManager();
		var focusManager = require_focusManager();
		var onlineManager = require_onlineManager();
		var utils = require_utils$2();
		var hydration = require_hydration();
		var query = require_query();
		exports.CancelledError = retryer.CancelledError;
		exports.isCancelledError = retryer.isCancelledError;
		exports.QueryCache = queryCache.QueryCache;
		exports.QueryClient = queryClient.QueryClient;
		exports.QueryObserver = queryObserver.QueryObserver;
		exports.QueriesObserver = queriesObserver.QueriesObserver;
		exports.InfiniteQueryObserver = infiniteQueryObserver.InfiniteQueryObserver;
		exports.MutationCache = mutationCache.MutationCache;
		exports.MutationObserver = mutationObserver.MutationObserver;
		exports.notifyManager = notifyManager.notifyManager;
		exports.focusManager = focusManager.focusManager;
		exports.onlineManager = onlineManager.onlineManager;
		exports.hashQueryKey = utils.hashQueryKey;
		exports.isError = utils.isError;
		exports.isServer = utils.isServer;
		exports.matchQuery = utils.matchQuery;
		exports.parseFilterArgs = utils.parseFilterArgs;
		exports.parseMutationArgs = utils.parseMutationArgs;
		exports.parseMutationFilterArgs = utils.parseMutationFilterArgs;
		exports.parseQueryArgs = utils.parseQueryArgs;
		exports.replaceEqualDeep = utils.replaceEqualDeep;
		exports.defaultShouldDehydrateMutation = hydration.defaultShouldDehydrateMutation;
		exports.defaultShouldDehydrateQuery = hydration.defaultShouldDehydrateQuery;
		exports.dehydrate = hydration.dehydrate;
		exports.hydrate = hydration.hydrate;
		exports.Query = query.Query;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/reactBatchedUpdates.js
	var require_reactBatchedUpdates = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var ReactDOM = require_react_dom();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		exports.unstable_batchedUpdates = (/* @__PURE__ */ _interopNamespace(ReactDOM)).unstable_batchedUpdates;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/setBatchUpdatesFn.js
	var require_setBatchUpdatesFn = /* @__PURE__ */ __commonJSMin((() => {
		var queryCore = require_lib$2();
		var reactBatchedUpdates = require_reactBatchedUpdates();
		queryCore.notifyManager.setBatchNotifyFunction(reactBatchedUpdates.unstable_batchedUpdates);
	}));
	//#endregion
	//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
	/**
	* @license React
	* use-sync-external-store-shim.production.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
		var React = require_react();
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		var objectIs = "function" === typeof Object.is ? Object.is : is;
		var useState = React.useState;
		var useEffect = React.useEffect;
		var useLayoutEffect = React.useLayoutEffect;
		var useDebugValue = React.useDebugValue;
		function useSyncExternalStore$2(subscribe, getSnapshot) {
			var value = getSnapshot(), _useState = useState({ inst: {
				value,
				getSnapshot
			} }), inst = _useState[0].inst, forceUpdate = _useState[1];
			useLayoutEffect(function() {
				inst.value = value;
				inst.getSnapshot = getSnapshot;
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			}, [
				subscribe,
				value,
				getSnapshot
			]);
			useEffect(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				return subscribe(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				});
			}, [subscribe]);
			useDebugValue(value);
			return value;
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			inst = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(inst, nextValue);
			} catch (error) {
				return !0;
			}
		}
		function useSyncExternalStore$1(subscribe, getSnapshot) {
			return getSnapshot();
		}
		var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	}));
	//#endregion
	//#region node_modules/use-sync-external-store/shim/index.js
	var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_use_sync_external_store_shim_production();
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.js
	var require_useSyncExternalStore = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.useSyncExternalStore = require_shim().useSyncExternalStore;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/QueryClientProvider.js
	var require_QueryClientProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		const defaultContext = /*#__PURE__*/ React__namespace.createContext(void 0);
		const QueryClientSharingContext = /*#__PURE__*/ React__namespace.createContext(false);
		function getQueryClientContext(context, contextSharing) {
			if (context) return context;
			if (contextSharing && typeof window !== "undefined") {
				if (!window.ReactQueryClientContext) window.ReactQueryClientContext = defaultContext;
				return window.ReactQueryClientContext;
			}
			return defaultContext;
		}
		const useQueryClient = ({ context } = {}) => {
			const queryClient = React__namespace.useContext(getQueryClientContext(context, React__namespace.useContext(QueryClientSharingContext)));
			if (!queryClient) throw new Error("No QueryClient set, use QueryClientProvider to set one");
			return queryClient;
		};
		const QueryClientProvider = ({ client, children, context, contextSharing = false }) => {
			React__namespace.useEffect(() => {
				client.mount();
				return () => {
					client.unmount();
				};
			}, [client]);
			const Context = getQueryClientContext(context, contextSharing);
			return /*#__PURE__*/ React__namespace.createElement(QueryClientSharingContext.Provider, { value: !context && contextSharing }, /*#__PURE__*/ React__namespace.createElement(Context.Provider, { value: client }, children));
		};
		exports.QueryClientProvider = QueryClientProvider;
		exports.defaultContext = defaultContext;
		exports.useQueryClient = useQueryClient;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/isRestoring.js
	var require_isRestoring = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		const IsRestoringContext = /*#__PURE__*/ React__namespace.createContext(false);
		const useIsRestoring = () => React__namespace.useContext(IsRestoringContext);
		exports.IsRestoringProvider = IsRestoringContext.Provider;
		exports.useIsRestoring = useIsRestoring;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/QueryErrorResetBoundary.js
	var require_QueryErrorResetBoundary = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function createValue() {
			let isReset = false;
			return {
				clearReset: () => {
					isReset = false;
				},
				reset: () => {
					isReset = true;
				},
				isReset: () => {
					return isReset;
				}
			};
		}
		const QueryErrorResetBoundaryContext = /*#__PURE__*/ React__namespace.createContext(createValue());
		const useQueryErrorResetBoundary = () => React__namespace.useContext(QueryErrorResetBoundaryContext);
		const QueryErrorResetBoundary = ({ children }) => {
			const [value] = React__namespace.useState(() => createValue());
			return /*#__PURE__*/ React__namespace.createElement(QueryErrorResetBoundaryContext.Provider, { value }, typeof children === "function" ? children(value) : children);
		};
		exports.QueryErrorResetBoundary = QueryErrorResetBoundary;
		exports.useQueryErrorResetBoundary = useQueryErrorResetBoundary;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/utils.js
	var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		function shouldThrowError(_useErrorBoundary, params) {
			if (typeof _useErrorBoundary === "function") return _useErrorBoundary(...params);
			return !!_useErrorBoundary;
		}
		exports.shouldThrowError = shouldThrowError;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/errorBoundaryUtils.js
	var require_errorBoundaryUtils = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var utils = require_utils$1();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		const ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
			if (options.suspense || options.useErrorBoundary) {
				if (!errorResetBoundary.isReset()) options.retryOnMount = false;
			}
		};
		const useClearResetErrorBoundary = (errorResetBoundary) => {
			React__namespace.useEffect(() => {
				errorResetBoundary.clearReset();
			}, [errorResetBoundary]);
		};
		const getHasError = ({ result, errorResetBoundary, useErrorBoundary, query }) => {
			return result.isError && !errorResetBoundary.isReset() && !result.isFetching && utils.shouldThrowError(useErrorBoundary, [result.error, query]);
		};
		exports.ensurePreventErrorBoundaryRetry = ensurePreventErrorBoundaryRetry;
		exports.getHasError = getHasError;
		exports.useClearResetErrorBoundary = useClearResetErrorBoundary;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/suspense.js
	var require_suspense = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		/**
		* Ensures minimum staleTime and cacheTime values when suspense is enabled.
		* Despite the name, this function guards both staleTime and cacheTime to prevent
		* infinite re-render loops with synchronous queries.
		*
		* @deprecated in v5 - replaced by ensureSuspenseTimers
		*/
		const ensureStaleTime = (defaultedOptions) => {
			if (defaultedOptions.suspense) {
				if (typeof defaultedOptions.staleTime !== "number") defaultedOptions.staleTime = 1e3;
				if (typeof defaultedOptions.cacheTime === "number") defaultedOptions.cacheTime = Math.max(defaultedOptions.cacheTime, 1e3);
			}
		};
		const willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
		const shouldSuspend = (defaultedOptions, result, isRestoring) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
		const fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).then(({ data }) => {
			defaultedOptions.onSuccess == null || defaultedOptions.onSuccess(data);
			defaultedOptions.onSettled == null || defaultedOptions.onSettled(data, null);
		}).catch((error) => {
			errorResetBoundary.clearReset();
			defaultedOptions.onError == null || defaultedOptions.onError(error);
			defaultedOptions.onSettled == null || defaultedOptions.onSettled(void 0, error);
		});
		exports.ensureStaleTime = ensureStaleTime;
		exports.fetchOptimistic = fetchOptimistic;
		exports.shouldSuspend = shouldSuspend;
		exports.willFetch = willFetch;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useQueries.js
	var require_useQueries = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var queryCore = require_lib$2();
		var useSyncExternalStore = require_useSyncExternalStore();
		var QueryClientProvider = require_QueryClientProvider();
		var isRestoring = require_isRestoring();
		var QueryErrorResetBoundary = require_QueryErrorResetBoundary();
		var errorBoundaryUtils = require_errorBoundaryUtils();
		var suspense = require_suspense();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function useQueries({ queries, context }) {
			const queryClient = QueryClientProvider.useQueryClient({ context });
			const isRestoring$1 = isRestoring.useIsRestoring();
			const errorResetBoundary = QueryErrorResetBoundary.useQueryErrorResetBoundary();
			const defaultedQueries = React__namespace.useMemo(() => queries.map((options) => {
				const defaultedOptions = queryClient.defaultQueryOptions(options);
				defaultedOptions._optimisticResults = isRestoring$1 ? "isRestoring" : "optimistic";
				return defaultedOptions;
			}), [
				queries,
				queryClient,
				isRestoring$1
			]);
			defaultedQueries.forEach((query) => {
				suspense.ensureStaleTime(query);
				errorBoundaryUtils.ensurePreventErrorBoundaryRetry(query, errorResetBoundary);
			});
			errorBoundaryUtils.useClearResetErrorBoundary(errorResetBoundary);
			const [observer] = React__namespace.useState(() => new queryCore.QueriesObserver(queryClient, defaultedQueries));
			const optimisticResult = observer.getOptimisticResult(defaultedQueries);
			useSyncExternalStore.useSyncExternalStore(React__namespace.useCallback((onStoreChange) => isRestoring$1 ? () => void 0 : observer.subscribe(queryCore.notifyManager.batchCalls(onStoreChange)), [observer, isRestoring$1]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
			React__namespace.useEffect(() => {
				observer.setQueries(defaultedQueries, { listeners: false });
			}, [defaultedQueries, observer]);
			const suspensePromises = optimisticResult.some((result, index) => suspense.shouldSuspend(defaultedQueries[index], result, isRestoring$1)) ? optimisticResult.flatMap((result, index) => {
				const options = defaultedQueries[index];
				const queryObserver = observer.getObservers()[index];
				if (options && queryObserver) {
					if (suspense.shouldSuspend(options, result, isRestoring$1)) return suspense.fetchOptimistic(options, queryObserver, errorResetBoundary);
					else if (suspense.willFetch(result, isRestoring$1)) suspense.fetchOptimistic(options, queryObserver, errorResetBoundary);
				}
				return [];
			}) : [];
			if (suspensePromises.length > 0) throw Promise.all(suspensePromises);
			const observerQueries = observer.getQueries();
			const firstSingleResultWhichShouldThrow = optimisticResult.find((result, index) => {
				var _defaultedQueries$ind, _defaultedQueries$ind2;
				return errorBoundaryUtils.getHasError({
					result,
					errorResetBoundary,
					useErrorBoundary: (_defaultedQueries$ind = (_defaultedQueries$ind2 = defaultedQueries[index]) == null ? void 0 : _defaultedQueries$ind2.useErrorBoundary) != null ? _defaultedQueries$ind : false,
					query: observerQueries[index]
				});
			});
			if (firstSingleResultWhichShouldThrow != null && firstSingleResultWhichShouldThrow.error) throw firstSingleResultWhichShouldThrow.error;
			return optimisticResult;
		}
		exports.useQueries = useQueries;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useBaseQuery.js
	var require_useBaseQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var queryCore = require_lib$2();
		var useSyncExternalStore = require_useSyncExternalStore();
		var QueryErrorResetBoundary = require_QueryErrorResetBoundary();
		var QueryClientProvider = require_QueryClientProvider();
		var isRestoring = require_isRestoring();
		var errorBoundaryUtils = require_errorBoundaryUtils();
		var suspense = require_suspense();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function useBaseQuery(options, Observer) {
			const queryClient = QueryClientProvider.useQueryClient({ context: options.context });
			const isRestoring$1 = isRestoring.useIsRestoring();
			const errorResetBoundary = QueryErrorResetBoundary.useQueryErrorResetBoundary();
			const defaultedOptions = queryClient.defaultQueryOptions(options);
			defaultedOptions._optimisticResults = isRestoring$1 ? "isRestoring" : "optimistic";
			if (defaultedOptions.onError) defaultedOptions.onError = queryCore.notifyManager.batchCalls(defaultedOptions.onError);
			if (defaultedOptions.onSuccess) defaultedOptions.onSuccess = queryCore.notifyManager.batchCalls(defaultedOptions.onSuccess);
			if (defaultedOptions.onSettled) defaultedOptions.onSettled = queryCore.notifyManager.batchCalls(defaultedOptions.onSettled);
			suspense.ensureStaleTime(defaultedOptions);
			errorBoundaryUtils.ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
			errorBoundaryUtils.useClearResetErrorBoundary(errorResetBoundary);
			const [observer] = React__namespace.useState(() => new Observer(queryClient, defaultedOptions));
			const result = observer.getOptimisticResult(defaultedOptions);
			useSyncExternalStore.useSyncExternalStore(React__namespace.useCallback((onStoreChange) => {
				const unsubscribe = isRestoring$1 ? () => void 0 : observer.subscribe(queryCore.notifyManager.batchCalls(onStoreChange));
				observer.updateResult();
				return unsubscribe;
			}, [observer, isRestoring$1]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
			React__namespace.useEffect(() => {
				observer.setOptions(defaultedOptions, { listeners: false });
			}, [defaultedOptions, observer]);
			if (suspense.shouldSuspend(defaultedOptions, result, isRestoring$1)) throw suspense.fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
			if (errorBoundaryUtils.getHasError({
				result,
				errorResetBoundary,
				useErrorBoundary: defaultedOptions.useErrorBoundary,
				query: observer.getCurrentQuery()
			})) throw result.error;
			return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
		}
		exports.useBaseQuery = useBaseQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useQuery.js
	var require_useQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var queryCore = require_lib$2();
		var useBaseQuery = require_useBaseQuery();
		function useQuery(arg1, arg2, arg3) {
			const parsedOptions = queryCore.parseQueryArgs(arg1, arg2, arg3);
			return useBaseQuery.useBaseQuery(parsedOptions, queryCore.QueryObserver);
		}
		exports.useQuery = useQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useSuspenseQuery.js
	var require_useSuspenseQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var queryCore = require_lib$2();
		var useBaseQuery = require_useBaseQuery();
		function useSuspenseQuery(options) {
			return useBaseQuery.useBaseQuery({
				...options,
				enabled: true,
				useErrorBoundary: true,
				suspense: true,
				placeholderData: void 0,
				networkMode: "always",
				onSuccess: void 0,
				onError: void 0,
				onSettled: void 0
			}, queryCore.QueryObserver);
		}
		exports.useSuspenseQuery = useSuspenseQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useSuspenseInfiniteQuery.js
	var require_useSuspenseInfiniteQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var queryCore = require_lib$2();
		var useBaseQuery = require_useBaseQuery();
		function useSuspenseInfiniteQuery(options) {
			return useBaseQuery.useBaseQuery({
				...options,
				enabled: true,
				suspense: true,
				useErrorBoundary: true,
				networkMode: "always"
			}, queryCore.InfiniteQueryObserver);
		}
		exports.useSuspenseInfiniteQuery = useSuspenseInfiniteQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useSuspenseQueries.js
	var require_useSuspenseQueries = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var useQueries = require_useQueries();
		function useSuspenseQueries({ queries, context }) {
			return useQueries.useQueries({
				queries: queries.map((query) => ({
					...query,
					enabled: true,
					useErrorBoundary: true,
					suspense: true,
					placeholderData: void 0,
					networkMode: "always"
				})),
				context
			});
		}
		exports.useSuspenseQueries = useSuspenseQueries;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/queryOptions.js
	var require_queryOptions = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		function queryOptions(options) {
			return options;
		}
		exports.queryOptions = queryOptions;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/infiniteQueryOptions.js
	var require_infiniteQueryOptions = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		function infiniteQueryOptions(options) {
			return options;
		}
		exports.infiniteQueryOptions = infiniteQueryOptions;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/Hydrate.js
	var require_Hydrate = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var queryCore = require_lib$2();
		var QueryClientProvider = require_QueryClientProvider();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function useHydrate(state, options = {}) {
			const queryClient = QueryClientProvider.useQueryClient({ context: options.context });
			const optionsRef = React__namespace.useRef(options);
			optionsRef.current = options;
			React__namespace.useMemo(() => {
				if (state) queryCore.hydrate(queryClient, state, optionsRef.current);
			}, [queryClient, state]);
		}
		const Hydrate = ({ children, options, state }) => {
			useHydrate(state, options);
			return children;
		};
		exports.Hydrate = Hydrate;
		exports.useHydrate = useHydrate;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useIsFetching.js
	var require_useIsFetching = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var queryCore = require_lib$2();
		var useSyncExternalStore = require_useSyncExternalStore();
		var QueryClientProvider = require_QueryClientProvider();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function useIsFetching(arg1, arg2, arg3) {
			const [filters, options = {}] = queryCore.parseFilterArgs(arg1, arg2, arg3);
			const queryClient = QueryClientProvider.useQueryClient({ context: options.context });
			const queryCache = queryClient.getQueryCache();
			return useSyncExternalStore.useSyncExternalStore(React__namespace.useCallback((onStoreChange) => queryCache.subscribe(queryCore.notifyManager.batchCalls(onStoreChange)), [queryCache]), () => queryClient.isFetching(filters), () => queryClient.isFetching(filters));
		}
		exports.useIsFetching = useIsFetching;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useIsMutating.js
	var require_useIsMutating = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var queryCore = require_lib$2();
		var useSyncExternalStore = require_useSyncExternalStore();
		var QueryClientProvider = require_QueryClientProvider();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function useIsMutating(arg1, arg2, arg3) {
			const [filters, options = {}] = queryCore.parseMutationFilterArgs(arg1, arg2, arg3);
			const queryClient = QueryClientProvider.useQueryClient({ context: options.context });
			const mutationCache = queryClient.getMutationCache();
			return useSyncExternalStore.useSyncExternalStore(React__namespace.useCallback((onStoreChange) => mutationCache.subscribe(queryCore.notifyManager.batchCalls(onStoreChange)), [mutationCache]), () => queryClient.isMutating(filters), () => queryClient.isMutating(filters));
		}
		exports.useIsMutating = useIsMutating;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/mutationOptions.js
	var require_mutationOptions = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		function mutationOptions(options) {
			return options;
		}
		exports.mutationOptions = mutationOptions;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useMutation.js
	var require_useMutation = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var React = require_react();
		var queryCore = require_lib$2();
		var useSyncExternalStore = require_useSyncExternalStore();
		var QueryClientProvider = require_QueryClientProvider();
		var utils = require_utils$1();
		function _interopNamespace(e) {
			if (e && e.__esModule) return e;
			var n = Object.create(null);
			if (e) Object.keys(e).forEach(function(k) {
				if (k !== "default") {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function() {
							return e[k];
						}
					});
				}
			});
			n["default"] = e;
			return Object.freeze(n);
		}
		var React__namespace = /*#__PURE__*/ _interopNamespace(React);
		function useMutation(arg1, arg2, arg3) {
			const options = queryCore.parseMutationArgs(arg1, arg2, arg3);
			const queryClient = QueryClientProvider.useQueryClient({ context: options.context });
			const [observer] = React__namespace.useState(() => new queryCore.MutationObserver(queryClient, options));
			React__namespace.useEffect(() => {
				observer.setOptions(options);
			}, [observer, options]);
			const result = useSyncExternalStore.useSyncExternalStore(React__namespace.useCallback((onStoreChange) => observer.subscribe(queryCore.notifyManager.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
			const mutate = React__namespace.useCallback((variables, mutateOptions) => {
				observer.mutate(variables, mutateOptions).catch(noop);
			}, [observer]);
			if (result.error && utils.shouldThrowError(observer.options.useErrorBoundary, [result.error])) throw result.error;
			return {
				...result,
				mutate,
				mutateAsync: result.mutate
			};
		}
		function noop() {}
		exports.useMutation = useMutation;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.js
	var require_useInfiniteQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var queryCore = require_lib$2();
		var useBaseQuery = require_useBaseQuery();
		function useInfiniteQuery(arg1, arg2, arg3) {
			const options = queryCore.parseQueryArgs(arg1, arg2, arg3);
			return useBaseQuery.useBaseQuery(options, queryCore.InfiniteQueryObserver);
		}
		exports.useInfiniteQuery = useInfiniteQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/usePrefetchQuery.js
	var require_usePrefetchQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var QueryClientProvider = require_QueryClientProvider();
		function usePrefetchQuery(options) {
			const client = QueryClientProvider.useQueryClient();
			if (!client.getQueryState(options.queryKey)) client.prefetchQuery(options);
		}
		exports.usePrefetchQuery = usePrefetchQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/usePrefetchInfiniteQuery.js
	var require_usePrefetchInfiniteQuery = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		var QueryClientProvider = require_QueryClientProvider();
		function usePrefetchInfiniteQuery(options) {
			const client = QueryClientProvider.useQueryClient();
			if (!client.getQueryState(options.queryKey)) client.prefetchInfiniteQuery(options);
		}
		exports.usePrefetchInfiniteQuery = usePrefetchInfiniteQuery;
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/index.js
	var require_lib$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		require_setBatchUpdatesFn();
		var queryCore = require_lib$2();
		var useQueries = require_useQueries();
		var useQuery = require_useQuery();
		var useSuspenseQuery = require_useSuspenseQuery();
		var useSuspenseInfiniteQuery = require_useSuspenseInfiniteQuery();
		var useSuspenseQueries = require_useSuspenseQueries();
		var queryOptions = require_queryOptions();
		var infiniteQueryOptions = require_infiniteQueryOptions();
		var QueryClientProvider = require_QueryClientProvider();
		var Hydrate = require_Hydrate();
		var QueryErrorResetBoundary = require_QueryErrorResetBoundary();
		var useIsFetching = require_useIsFetching();
		var useIsMutating = require_useIsMutating();
		var mutationOptions = require_mutationOptions();
		var useMutation = require_useMutation();
		var useInfiniteQuery = require_useInfiniteQuery();
		var isRestoring = require_isRestoring();
		var usePrefetchQuery = require_usePrefetchQuery();
		var usePrefetchInfiniteQuery = require_usePrefetchInfiniteQuery();
		exports.useQueries = useQueries.useQueries;
		exports.useQuery = useQuery.useQuery;
		exports.useSuspenseQuery = useSuspenseQuery.useSuspenseQuery;
		exports.useSuspenseInfiniteQuery = useSuspenseInfiniteQuery.useSuspenseInfiniteQuery;
		exports.useSuspenseQueries = useSuspenseQueries.useSuspenseQueries;
		exports.queryOptions = queryOptions.queryOptions;
		exports.infiniteQueryOptions = infiniteQueryOptions.infiniteQueryOptions;
		exports.QueryClientProvider = QueryClientProvider.QueryClientProvider;
		exports.defaultContext = QueryClientProvider.defaultContext;
		exports.useQueryClient = QueryClientProvider.useQueryClient;
		exports.Hydrate = Hydrate.Hydrate;
		exports.useHydrate = Hydrate.useHydrate;
		exports.QueryErrorResetBoundary = QueryErrorResetBoundary.QueryErrorResetBoundary;
		exports.useQueryErrorResetBoundary = QueryErrorResetBoundary.useQueryErrorResetBoundary;
		exports.useIsFetching = useIsFetching.useIsFetching;
		exports.useIsMutating = useIsMutating.useIsMutating;
		exports.mutationOptions = mutationOptions.mutationOptions;
		exports.useMutation = useMutation.useMutation;
		exports.useInfiniteQuery = useInfiniteQuery.useInfiniteQuery;
		exports.IsRestoringProvider = isRestoring.IsRestoringProvider;
		exports.useIsRestoring = isRestoring.useIsRestoring;
		exports.usePrefetchQuery = usePrefetchQuery.usePrefetchQuery;
		exports.usePrefetchInfiniteQuery = usePrefetchInfiniteQuery.usePrefetchInfiniteQuery;
		Object.keys(queryCore).forEach(function(k) {
			if (k !== "default" && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
				enumerable: true,
				get: function() {
					return queryCore[k];
				}
			});
		});
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/subscribable.mjs
	var Subscribable;
	var init_subscribable = __esmMin((() => {
		Subscribable = class {
			constructor() {
				this.listeners = /* @__PURE__ */ new Set();
				this.subscribe = this.subscribe.bind(this);
			}
			subscribe(listener) {
				const identity = { listener };
				this.listeners.add(identity);
				this.onSubscribe();
				return () => {
					this.listeners.delete(identity);
					this.onUnsubscribe();
				};
			}
			hasListeners() {
				return this.listeners.size > 0;
			}
			onSubscribe() {}
			onUnsubscribe() {}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/utils.mjs
	function noop() {}
	function functionalUpdate(updater, input) {
		return typeof updater === "function" ? updater(input) : updater;
	}
	function isValidTimeout(value) {
		return typeof value === "number" && value >= 0 && value !== Infinity;
	}
	function timeUntilStale(updatedAt, staleTime) {
		return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
	}
	function parseQueryArgs(arg1, arg2, arg3) {
		if (!isQueryKey(arg1)) return arg1;
		if (typeof arg2 === "function") return {
			...arg3,
			queryKey: arg1,
			queryFn: arg2
		};
		return {
			...arg2,
			queryKey: arg1
		};
	}
	function parseFilterArgs(arg1, arg2, arg3) {
		return isQueryKey(arg1) ? [{
			...arg2,
			queryKey: arg1
		}, arg3] : [arg1 || {}, arg2];
	}
	function matchQuery(filters, query) {
		const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
		if (isQueryKey(queryKey)) {
			if (exact) {
				if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
			} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
		}
		if (type !== "all") {
			const isActive = query.isActive();
			if (type === "active" && !isActive) return false;
			if (type === "inactive" && isActive) return false;
		}
		if (typeof stale === "boolean" && query.isStale() !== stale) return false;
		if (typeof fetchStatus !== "undefined" && fetchStatus !== query.state.fetchStatus) return false;
		if (predicate && !predicate(query)) return false;
		return true;
	}
	function matchMutation(filters, mutation) {
		const { exact, fetching, predicate, mutationKey } = filters;
		if (isQueryKey(mutationKey)) {
			if (!mutation.options.mutationKey) return false;
			if (exact) {
				if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) return false;
			} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
		}
		if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) return false;
		if (predicate && !predicate(mutation)) return false;
		return true;
	}
	function hashQueryKeyByOptions(queryKey, options) {
		return ((options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey)(queryKey);
	}
	/**
	* Default query keys hash function.
	* Hashes the value into a stable hash.
	*/
	function hashQueryKey(queryKey) {
		return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
			result[key] = val[key];
			return result;
		}, {}) : val);
	}
	/**
	* Checks if key `b` partially matches with key `a`.
	*/
	function partialMatchKey(a, b) {
		return partialDeepEqual(a, b);
	}
	/**
	* Checks if `b` partially matches with `a`.
	*/
	function partialDeepEqual(a, b) {
		if (a === b) return true;
		if (typeof a !== typeof b) return false;
		if (a && b && typeof a === "object" && typeof b === "object") return !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key]));
		return false;
	}
	/**
	* This function returns `a` if `b` is deeply equal.
	* If not, it will replace any deeply equal children of `b` with those of `a`.
	* This can be used for structural sharing between JSON values for example.
	*/
	function replaceEqualDeep(a, b, depth = 0) {
		if (a === b) return a;
		if (depth > 500) return b;
		const array = isPlainArray(a) && isPlainArray(b);
		if (array || isPlainObject(a) && isPlainObject(b)) {
			const aSize = array ? a.length : Object.keys(a).length;
			const bItems = array ? b : Object.keys(b);
			const bSize = bItems.length;
			const copy = array ? [] : {};
			let equalItems = 0;
			for (let i = 0; i < bSize; i++) {
				const key = array ? i : bItems[i];
				copy[key] = replaceEqualDeep(a[key], b[key], depth + 1);
				if (copy[key] === a[key]) equalItems++;
			}
			return aSize === bSize && equalItems === aSize ? a : copy;
		}
		return b;
	}
	function isPlainArray(value) {
		return Array.isArray(value) && value.length === Object.keys(value).length;
	}
	function isPlainObject(o) {
		if (!hasObjectPrototype(o)) return false;
		const ctor = o.constructor;
		if (typeof ctor === "undefined") return true;
		const prot = ctor.prototype;
		if (!hasObjectPrototype(prot)) return false;
		if (!prot.hasOwnProperty("isPrototypeOf")) return false;
		return true;
	}
	function hasObjectPrototype(o) {
		return Object.prototype.toString.call(o) === "[object Object]";
	}
	function isQueryKey(value) {
		return Array.isArray(value);
	}
	function sleep(timeout) {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	}
	/**
	* Schedules a microtask.
	* This can be useful to schedule state updates after rendering.
	*/
	function scheduleMicrotask(callback) {
		sleep(0).then(callback);
	}
	function getAbortController() {
		if (typeof AbortController === "function") return new AbortController();
	}
	function replaceData(prevData, data, options) {
		if (options.isDataEqual != null && options.isDataEqual(prevData, data)) return prevData;
		else if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
		else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
		return data;
	}
	var isServer;
	var init_utils$1 = __esmMin((() => {
		isServer = typeof window === "undefined" || "Deno" in window;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/focusManager.mjs
	var FocusManager, focusManager;
	var init_focusManager = __esmMin((() => {
		init_subscribable();
		init_utils$1();
		FocusManager = class extends Subscribable {
			constructor() {
				super();
				this.setup = (onFocus) => {
					if (!isServer && window.addEventListener) {
						const listener = () => onFocus();
						window.addEventListener("visibilitychange", listener, false);
						window.addEventListener("focus", listener, false);
						return () => {
							window.removeEventListener("visibilitychange", listener);
							window.removeEventListener("focus", listener);
						};
					}
				};
			}
			onSubscribe() {
				if (!this.cleanup) this.setEventListener(this.setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$cleanup;
					(_this$cleanup = this.cleanup) == null || _this$cleanup.call(this);
					this.cleanup = void 0;
				}
			}
			setEventListener(setup) {
				var _this$cleanup2;
				this.setup = setup;
				(_this$cleanup2 = this.cleanup) == null || _this$cleanup2.call(this);
				this.cleanup = setup((focused) => {
					if (typeof focused === "boolean") this.setFocused(focused);
					else this.onFocus();
				});
			}
			setFocused(focused) {
				if (this.focused !== focused) {
					this.focused = focused;
					this.onFocus();
				}
			}
			onFocus() {
				this.listeners.forEach(({ listener }) => {
					listener();
				});
			}
			isFocused() {
				if (typeof this.focused === "boolean") return this.focused;
				if (typeof document === "undefined") return true;
				return [
					void 0,
					"visible",
					"prerender"
				].includes(document.visibilityState);
			}
		};
		focusManager = new FocusManager();
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/onlineManager.mjs
	var onlineEvents, OnlineManager, onlineManager;
	var init_onlineManager = __esmMin((() => {
		init_subscribable();
		init_utils$1();
		onlineEvents = ["online", "offline"];
		OnlineManager = class extends Subscribable {
			constructor() {
				super();
				this.setup = (onOnline) => {
					if (!isServer && window.addEventListener) {
						const listener = () => onOnline();
						onlineEvents.forEach((event) => {
							window.addEventListener(event, listener, false);
						});
						return () => {
							onlineEvents.forEach((event) => {
								window.removeEventListener(event, listener);
							});
						};
					}
				};
			}
			onSubscribe() {
				if (!this.cleanup) this.setEventListener(this.setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$cleanup;
					(_this$cleanup = this.cleanup) == null || _this$cleanup.call(this);
					this.cleanup = void 0;
				}
			}
			setEventListener(setup) {
				var _this$cleanup2;
				this.setup = setup;
				(_this$cleanup2 = this.cleanup) == null || _this$cleanup2.call(this);
				this.cleanup = setup((online) => {
					if (typeof online === "boolean") this.setOnline(online);
					else this.onOnline();
				});
			}
			setOnline(online) {
				if (this.online !== online) {
					this.online = online;
					this.onOnline();
				}
			}
			onOnline() {
				this.listeners.forEach(({ listener }) => {
					listener();
				});
			}
			isOnline() {
				if (typeof this.online === "boolean") return this.online;
				if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") return true;
				return navigator.onLine;
			}
		};
		onlineManager = new OnlineManager();
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/retryer.mjs
	function defaultRetryDelay(failureCount) {
		return Math.min(1e3 * 2 ** failureCount, 3e4);
	}
	function canFetch(networkMode) {
		return (networkMode != null ? networkMode : "online") === "online" ? onlineManager.isOnline() : true;
	}
	function isCancelledError(value) {
		return value instanceof CancelledError;
	}
	function createRetryer(config) {
		let isRetryCancelled = false;
		let failureCount = 0;
		let isResolved = false;
		let continueFn;
		let promiseResolve;
		let promiseReject;
		const promise = new Promise((outerResolve, outerReject) => {
			promiseResolve = outerResolve;
			promiseReject = outerReject;
		});
		const cancel = (cancelOptions) => {
			if (!isResolved) {
				reject(new CancelledError(cancelOptions));
				config.abort == null || config.abort();
			}
		};
		const cancelRetry = () => {
			isRetryCancelled = true;
		};
		const continueRetry = () => {
			isRetryCancelled = false;
		};
		const shouldPause = () => !focusManager.isFocused() || config.networkMode !== "always" && !onlineManager.isOnline();
		const resolve = (value) => {
			if (!isResolved) {
				isResolved = true;
				config.onSuccess == null || config.onSuccess(value);
				continueFn?.();
				promiseResolve(value);
			}
		};
		const reject = (value) => {
			if (!isResolved) {
				isResolved = true;
				config.onError == null || config.onError(value);
				continueFn?.();
				promiseReject(value);
			}
		};
		const pause = () => {
			return new Promise((continueResolve) => {
				continueFn = (value) => {
					const canContinue = isResolved || !shouldPause();
					if (canContinue) continueResolve(value);
					return canContinue;
				};
				config.onPause == null || config.onPause();
			}).then(() => {
				continueFn = void 0;
				if (!isResolved) config.onContinue == null || config.onContinue();
			});
		};
		const run = () => {
			if (isResolved) return;
			let promiseOrValue;
			try {
				promiseOrValue = config.fn();
			} catch (error) {
				promiseOrValue = Promise.reject(error);
			}
			Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
				var _config$retry, _config$retryDelay;
				if (isResolved) return;
				const retry = (_config$retry = config.retry) != null ? _config$retry : 3;
				const retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
				const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
				const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
				if (isRetryCancelled || !shouldRetry) {
					reject(error);
					return;
				}
				failureCount++;
				config.onFail == null || config.onFail(failureCount, error);
				sleep(delay).then(() => {
					if (shouldPause()) return pause();
				}).then(() => {
					if (isRetryCancelled) reject(error);
					else run();
				});
			});
		};
		if (canFetch(config.networkMode)) run();
		else pause().then(run);
		return {
			promise,
			cancel,
			continue: () => {
				return (continueFn == null ? void 0 : continueFn()) ? promise : Promise.resolve();
			},
			cancelRetry,
			continueRetry
		};
	}
	var CancelledError;
	var init_retryer = __esmMin((() => {
		init_focusManager();
		init_onlineManager();
		init_utils$1();
		CancelledError = class {
			constructor(options) {
				this.revert = options == null ? void 0 : options.revert;
				this.silent = options == null ? void 0 : options.silent;
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/logger.mjs
	var defaultLogger;
	var init_logger = __esmMin((() => {
		defaultLogger = console;
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/notifyManager.mjs
	function createNotifyManager() {
		let queue = [];
		let transactions = 0;
		let notifyFn = (callback) => {
			callback();
		};
		let batchNotifyFn = (callback) => {
			callback();
		};
		const batch = (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		};
		const schedule = (callback) => {
			if (transactions) queue.push(callback);
			else scheduleMicrotask(() => {
				notifyFn(callback);
			});
		};
		/**
		* All calls to the wrapped function will be batched.
		*/
		const batchCalls = (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		};
		const flush = () => {
			const originalQueue = queue;
			queue = [];
			if (originalQueue.length) scheduleMicrotask(() => {
				batchNotifyFn(() => {
					originalQueue.forEach((callback) => {
						notifyFn(callback);
					});
				});
			});
		};
		/**
		* Use this method to set a custom notify function.
		* This can be used to for example wrap notifications with `React.act` while running tests.
		*/
		const setNotifyFunction = (fn) => {
			notifyFn = fn;
		};
		/**
		* Use this method to set a custom function to batch notifications together into a single tick.
		* By default React Query will use the batch function provided by ReactDOM or React Native.
		*/
		const setBatchNotifyFunction = (fn) => {
			batchNotifyFn = fn;
		};
		return {
			batch,
			batchCalls,
			schedule,
			setNotifyFunction,
			setBatchNotifyFunction
		};
	}
	var notifyManager;
	var init_notifyManager = __esmMin((() => {
		init_utils$1();
		notifyManager = createNotifyManager();
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/removable.mjs
	var Removable;
	var init_removable = __esmMin((() => {
		init_utils$1();
		Removable = class {
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout();
				if (isValidTimeout(this.cacheTime)) this.gcTimeout = setTimeout(() => {
					this.optionalRemove();
				}, this.cacheTime);
			}
			updateCacheTime(newCacheTime) {
				this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : isServer ? Infinity : 300 * 1e3);
			}
			clearGcTimeout() {
				if (this.gcTimeout) {
					clearTimeout(this.gcTimeout);
					this.gcTimeout = void 0;
				}
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/query.mjs
	function getDefaultState$1(options) {
		const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
		const hasData = typeof data !== "undefined";
		const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
		return {
			data,
			dataUpdateCount: 0,
			dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
			error: null,
			errorUpdateCount: 0,
			errorUpdatedAt: 0,
			fetchFailureCount: 0,
			fetchFailureReason: null,
			fetchMeta: null,
			isInvalidated: false,
			status: hasData ? "success" : "loading",
			fetchStatus: "idle"
		};
	}
	var Query;
	var init_query = __esmMin((() => {
		init_utils$1();
		init_logger();
		init_notifyManager();
		init_retryer();
		init_removable();
		Query = class extends Removable {
			constructor(config) {
				super();
				this.abortSignalConsumed = false;
				this.defaultOptions = config.defaultOptions;
				this.setOptions(config.options);
				this.observers = [];
				this.cache = config.cache;
				this.logger = config.logger || defaultLogger;
				this.queryKey = config.queryKey;
				this.queryHash = config.queryHash;
				this.initialState = config.state || getDefaultState$1(this.options);
				this.state = this.initialState;
				this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			setOptions(options) {
				this.options = {
					...this.defaultOptions,
					...options
				};
				this.updateCacheTime(this.options.cacheTime);
			}
			optionalRemove() {
				if (!this.observers.length && this.state.fetchStatus === "idle") this.cache.remove(this);
			}
			setData(newData, options) {
				const data = replaceData(this.state.data, newData, this.options);
				this.dispatch({
					data,
					type: "success",
					dataUpdatedAt: options == null ? void 0 : options.updatedAt,
					manual: options == null ? void 0 : options.manual
				});
				return data;
			}
			setState(state, setStateOptions) {
				this.dispatch({
					type: "setState",
					state,
					setStateOptions
				});
			}
			cancel(options) {
				var _this$retryer;
				const promise = this.promise;
				(_this$retryer = this.retryer) == null || _this$retryer.cancel(options);
				return promise ? promise.then(noop).catch(noop) : Promise.resolve();
			}
			destroy() {
				super.destroy();
				this.cancel({ silent: true });
			}
			reset() {
				this.destroy();
				this.setState(this.initialState);
			}
			isActive() {
				return this.observers.some((observer) => observer.options.enabled !== false);
			}
			isDisabled() {
				return this.getObserversCount() > 0 && !this.isActive();
			}
			isStale() {
				return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((observer) => observer.getCurrentResult().isStale);
			}
			isStaleByTime(staleTime = 0) {
				return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
			}
			onFocus() {
				var _this$retryer2;
				const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
				if (observer) observer.refetch({ cancelRefetch: false });
				(_this$retryer2 = this.retryer) == null || _this$retryer2.continue();
			}
			onOnline() {
				var _this$retryer3;
				const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
				if (observer) observer.refetch({ cancelRefetch: false });
				(_this$retryer3 = this.retryer) == null || _this$retryer3.continue();
			}
			addObserver(observer) {
				if (!this.observers.includes(observer)) {
					this.observers.push(observer);
					this.clearGcTimeout();
					this.cache.notify({
						type: "observerAdded",
						query: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				if (this.observers.includes(observer)) {
					this.observers = this.observers.filter((x) => x !== observer);
					if (!this.observers.length) {
						if (this.retryer) if (this.abortSignalConsumed) this.retryer.cancel({ revert: true });
						else this.retryer.cancelRetry();
						this.scheduleGc();
					}
					this.cache.notify({
						type: "observerRemoved",
						query: this,
						observer
					});
				}
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				if (!this.state.isInvalidated) this.dispatch({ type: "invalidate" });
			}
			fetch(options, fetchOptions) {
				var _this$options$behavio, _context$fetchOptions;
				if (this.state.fetchStatus !== "idle") {
					if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) this.cancel({ silent: true });
					else if (this.promise) {
						var _this$retryer4;
						(_this$retryer4 = this.retryer) == null || _this$retryer4.continueRetry();
						return this.promise;
					}
				}
				if (options) this.setOptions(options);
				if (!this.options.queryFn) {
					const observer = this.observers.find((x) => x.options.queryFn);
					if (observer) this.setOptions(observer.options);
				}
				if (!Array.isArray(this.options.queryKey)) this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
				const abortController = getAbortController();
				const queryFnContext = {
					queryKey: this.queryKey,
					pageParam: void 0,
					meta: this.meta
				};
				const addSignalProperty = (object) => {
					Object.defineProperty(object, "signal", {
						enumerable: true,
						get: () => {
							if (abortController) {
								this.abortSignalConsumed = true;
								return abortController.signal;
							}
						}
					});
				};
				addSignalProperty(queryFnContext);
				const fetchFn = () => {
					if (!this.options.queryFn) return Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'");
					this.abortSignalConsumed = false;
					return this.options.queryFn(queryFnContext);
				};
				const context = {
					fetchOptions,
					options: this.options,
					queryKey: this.queryKey,
					state: this.state,
					fetchFn
				};
				addSignalProperty(context);
				(_this$options$behavio = this.options.behavior) == null || _this$options$behavio.onFetch(context);
				this.revertState = this.state;
				if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
					var _context$fetchOptions2;
					this.dispatch({
						type: "fetch",
						meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
					});
				}
				const onError = (error) => {
					if (!(isCancelledError(error) && error.silent)) this.dispatch({
						type: "error",
						error
					});
					if (!isCancelledError(error)) {
						var _this$cache$config$on, _this$cache$config, _this$cache$config$on2, _this$cache$config2;
						(_this$cache$config$on = (_this$cache$config = this.cache.config).onError) == null || _this$cache$config$on.call(_this$cache$config, error, this);
						(_this$cache$config$on2 = (_this$cache$config2 = this.cache.config).onSettled) == null || _this$cache$config$on2.call(_this$cache$config2, this.state.data, error, this);
						this.logger.error(error);
					}
					if (!this.isFetchingOptimistic) this.scheduleGc();
					this.isFetchingOptimistic = false;
				};
				this.retryer = createRetryer({
					fn: context.fetchFn,
					abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
					onSuccess: (data) => {
						var _this$cache$config$on3, _this$cache$config3, _this$cache$config$on4, _this$cache$config4;
						if (typeof data === "undefined") {
							this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash);
							onError(/* @__PURE__ */ new Error(this.queryHash + " data is undefined"));
							return;
						}
						this.setData(data);
						(_this$cache$config$on3 = (_this$cache$config3 = this.cache.config).onSuccess) == null || _this$cache$config$on3.call(_this$cache$config3, data, this);
						(_this$cache$config$on4 = (_this$cache$config4 = this.cache.config).onSettled) == null || _this$cache$config$on4.call(_this$cache$config4, data, this.state.error, this);
						if (!this.isFetchingOptimistic) this.scheduleGc();
						this.isFetchingOptimistic = false;
					},
					onError,
					onFail: (failureCount, error) => {
						this.dispatch({
							type: "failed",
							failureCount,
							error
						});
					},
					onPause: () => {
						this.dispatch({ type: "pause" });
					},
					onContinue: () => {
						this.dispatch({ type: "continue" });
					},
					retry: context.options.retry,
					retryDelay: context.options.retryDelay,
					networkMode: context.options.networkMode
				});
				this.promise = this.retryer.promise;
				return this.promise;
			}
			dispatch(action) {
				const reducer = (state) => {
					var _action$meta, _action$dataUpdatedAt;
					switch (action.type) {
						case "failed": return {
							...state,
							fetchFailureCount: action.failureCount,
							fetchFailureReason: action.error
						};
						case "pause": return {
							...state,
							fetchStatus: "paused"
						};
						case "continue": return {
							...state,
							fetchStatus: "fetching"
						};
						case "fetch": return {
							...state,
							fetchFailureCount: 0,
							fetchFailureReason: null,
							fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
							fetchStatus: canFetch(this.options.networkMode) ? "fetching" : "paused",
							...!state.dataUpdatedAt && {
								error: null,
								status: "loading"
							}
						};
						case "success": return {
							...state,
							data: action.data,
							dataUpdateCount: state.dataUpdateCount + 1,
							dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
							error: null,
							isInvalidated: false,
							status: "success",
							...!action.manual && {
								fetchStatus: "idle",
								fetchFailureCount: 0,
								fetchFailureReason: null
							}
						};
						case "error":
							const error = action.error;
							if (isCancelledError(error) && error.revert && this.revertState) return {
								...this.revertState,
								fetchStatus: "idle"
							};
							return {
								...state,
								error,
								errorUpdateCount: state.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: state.fetchFailureCount + 1,
								fetchFailureReason: error,
								fetchStatus: "idle",
								status: "error"
							};
						case "invalidate": return {
							...state,
							isInvalidated: true
						};
						case "setState": return {
							...state,
							...action.state
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.batch(() => {
					this.observers.forEach((observer) => {
						observer.onQueryUpdate(action);
					});
					this.cache.notify({
						query: this,
						type: "updated",
						action
					});
				});
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/queryCache.mjs
	var QueryCache;
	var init_queryCache = __esmMin((() => {
		init_utils$1();
		init_query();
		init_notifyManager();
		init_subscribable();
		QueryCache = class extends Subscribable {
			constructor(config) {
				super();
				this.config = config || {};
				this.queries = [];
				this.queriesMap = {};
			}
			build(client, options, state) {
				var _options$queryHash;
				const queryKey = options.queryKey;
				const queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
				let query = this.get(queryHash);
				if (!query) {
					query = new Query({
						cache: this,
						logger: client.getLogger(),
						queryKey,
						queryHash,
						options: client.defaultQueryOptions(options),
						state,
						defaultOptions: client.getQueryDefaults(queryKey)
					});
					this.add(query);
				}
				return query;
			}
			add(query) {
				if (!this.queriesMap[query.queryHash]) {
					this.queriesMap[query.queryHash] = query;
					this.queries.push(query);
					this.notify({
						type: "added",
						query
					});
				}
			}
			remove(query) {
				const queryInMap = this.queriesMap[query.queryHash];
				if (queryInMap) {
					query.destroy();
					this.queries = this.queries.filter((x) => x !== query);
					if (queryInMap === query) delete this.queriesMap[query.queryHash];
					this.notify({
						type: "removed",
						query
					});
				}
			}
			clear() {
				notifyManager.batch(() => {
					this.queries.forEach((query) => {
						this.remove(query);
					});
				});
			}
			get(queryHash) {
				return this.queriesMap[queryHash];
			}
			getAll() {
				return this.queries;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			find(arg1, arg2) {
				const [filters] = parseFilterArgs(arg1, arg2);
				if (typeof filters.exact === "undefined") filters.exact = true;
				return this.queries.find((query) => matchQuery(filters, query));
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			findAll(arg1, arg2) {
				const [filters] = parseFilterArgs(arg1, arg2);
				return Object.keys(filters).length > 0 ? this.queries.filter((query) => matchQuery(filters, query)) : this.queries;
			}
			notify(event) {
				notifyManager.batch(() => {
					this.listeners.forEach(({ listener }) => {
						listener(event);
					});
				});
			}
			onFocus() {
				notifyManager.batch(() => {
					this.queries.forEach((query) => {
						query.onFocus();
					});
				});
			}
			onOnline() {
				notifyManager.batch(() => {
					this.queries.forEach((query) => {
						query.onOnline();
					});
				});
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/mutation.mjs
	function getDefaultState() {
		return {
			context: void 0,
			data: void 0,
			error: null,
			failureCount: 0,
			failureReason: null,
			isPaused: false,
			status: "idle",
			variables: void 0
		};
	}
	var Mutation;
	var init_mutation = __esmMin((() => {
		init_logger();
		init_notifyManager();
		init_removable();
		init_retryer();
		Mutation = class extends Removable {
			constructor(config) {
				super();
				this.defaultOptions = config.defaultOptions;
				this.mutationId = config.mutationId;
				this.mutationCache = config.mutationCache;
				this.logger = config.logger || defaultLogger;
				this.observers = [];
				this.state = config.state || getDefaultState();
				this.setOptions(config.options);
				this.scheduleGc();
			}
			setOptions(options) {
				this.options = {
					...this.defaultOptions,
					...options
				};
				this.updateCacheTime(this.options.cacheTime);
			}
			get meta() {
				return this.options.meta;
			}
			setState(state) {
				this.dispatch({
					type: "setState",
					state
				});
			}
			addObserver(observer) {
				if (!this.observers.includes(observer)) {
					this.observers.push(observer);
					this.clearGcTimeout();
					this.mutationCache.notify({
						type: "observerAdded",
						mutation: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				this.observers = this.observers.filter((x) => x !== observer);
				this.scheduleGc();
				this.mutationCache.notify({
					type: "observerRemoved",
					mutation: this,
					observer
				});
			}
			optionalRemove() {
				if (!this.observers.length) if (this.state.status === "loading") this.scheduleGc();
				else this.mutationCache.remove(this);
			}
			continue() {
				var _this$retryer$continu, _this$retryer;
				return (_this$retryer$continu = (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.continue()) != null ? _this$retryer$continu : this.execute();
			}
			async execute() {
				const executeMutation = () => {
					var _this$options$retry;
					this.retryer = createRetryer({
						fn: () => {
							if (!this.options.mutationFn) return Promise.reject("No mutationFn found");
							return this.options.mutationFn(this.state.variables);
						},
						onFail: (failureCount, error) => {
							this.dispatch({
								type: "failed",
								failureCount,
								error
							});
						},
						onPause: () => {
							this.dispatch({ type: "pause" });
						},
						onContinue: () => {
							this.dispatch({ type: "continue" });
						},
						retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode
					});
					return this.retryer.promise;
				};
				const restored = this.state.status === "loading";
				try {
					var _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onSettl, _this$options3;
					if (!restored) {
						var _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options;
						this.dispatch({
							type: "loading",
							variables: this.options.variables
						});
						await ((_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this));
						const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables));
						if (context !== this.state.context) this.dispatch({
							type: "loading",
							context,
							variables: this.state.variables
						});
					}
					const data = await executeMutation();
					await ((_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this));
					await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context));
					await ((_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, data, null, this.state.variables, this.state.context, this));
					await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context));
					this.dispatch({
						type: "success",
						data
					});
					return data;
				} catch (error) {
					try {
						var _this$mutationCache$c7, _this$mutationCache$c8, _this$options$onError, _this$options4, _this$mutationCache$c9, _this$mutationCache$c10, _this$options$onSettl2, _this$options5;
						await ((_this$mutationCache$c7 = (_this$mutationCache$c8 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c7.call(_this$mutationCache$c8, error, this.state.variables, this.state.context, this));
						this.logger.error(error);
						await ((_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, error, this.state.variables, this.state.context));
						await ((_this$mutationCache$c9 = (_this$mutationCache$c10 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c9.call(_this$mutationCache$c10, void 0, error, this.state.variables, this.state.context, this));
						await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, void 0, error, this.state.variables, this.state.context));
						throw error;
					} finally {
						this.dispatch({
							type: "error",
							error
						});
					}
				}
			}
			dispatch(action) {
				const reducer = (state) => {
					switch (action.type) {
						case "failed": return {
							...state,
							failureCount: action.failureCount,
							failureReason: action.error
						};
						case "pause": return {
							...state,
							isPaused: true
						};
						case "continue": return {
							...state,
							isPaused: false
						};
						case "loading": return {
							...state,
							context: action.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: !canFetch(this.options.networkMode),
							status: "loading",
							variables: action.variables
						};
						case "success": return {
							...state,
							data: action.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: "success",
							isPaused: false
						};
						case "error": return {
							...state,
							data: void 0,
							error: action.error,
							failureCount: state.failureCount + 1,
							failureReason: action.error,
							isPaused: false,
							status: "error"
						};
						case "setState": return {
							...state,
							...action.state
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.batch(() => {
					this.observers.forEach((observer) => {
						observer.onMutationUpdate(action);
					});
					this.mutationCache.notify({
						mutation: this,
						type: "updated",
						action
					});
				});
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/mutationCache.mjs
	var MutationCache;
	var init_mutationCache = __esmMin((() => {
		init_notifyManager();
		init_mutation();
		init_utils$1();
		init_subscribable();
		MutationCache = class extends Subscribable {
			constructor(config) {
				super();
				this.config = config || {};
				this.mutations = [];
				this.mutationId = 0;
			}
			build(client, options, state) {
				const mutation = new Mutation({
					mutationCache: this,
					logger: client.getLogger(),
					mutationId: ++this.mutationId,
					options: client.defaultMutationOptions(options),
					state,
					defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0
				});
				this.add(mutation);
				return mutation;
			}
			add(mutation) {
				this.mutations.push(mutation);
				this.notify({
					type: "added",
					mutation
				});
			}
			remove(mutation) {
				this.mutations = this.mutations.filter((x) => x !== mutation);
				this.notify({
					type: "removed",
					mutation
				});
			}
			clear() {
				notifyManager.batch(() => {
					this.mutations.forEach((mutation) => {
						this.remove(mutation);
					});
				});
			}
			getAll() {
				return this.mutations;
			}
			find(filters) {
				if (typeof filters.exact === "undefined") filters.exact = true;
				return this.mutations.find((mutation) => matchMutation(filters, mutation));
			}
			findAll(filters) {
				return this.mutations.filter((mutation) => matchMutation(filters, mutation));
			}
			notify(event) {
				notifyManager.batch(() => {
					this.listeners.forEach(({ listener }) => {
						listener(event);
					});
				});
			}
			resumePausedMutations() {
				var _this$resuming;
				this.resuming = ((_this$resuming = this.resuming) != null ? _this$resuming : Promise.resolve()).then(() => {
					const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
					return notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(noop)), Promise.resolve()));
				}).then(() => {
					this.resuming = void 0;
				});
				return this.resuming;
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs
	function infiniteQueryBehavior() {
		return { onFetch: (context) => {
			context.fetchFn = () => {
				var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
				const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
				const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
				const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
				const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
				const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
				const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
				const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
				let newPageParams = oldPageParams;
				let cancelled = false;
				const addSignalProperty = (object) => {
					Object.defineProperty(object, "signal", {
						enumerable: true,
						get: () => {
							var _context$signal;
							if ((_context$signal = context.signal) != null && _context$signal.aborted) cancelled = true;
							else {
								var _context$signal2;
								(_context$signal2 = context.signal) == null || _context$signal2.addEventListener("abort", () => {
									cancelled = true;
								});
							}
							return context.signal;
						}
					});
				};
				const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + context.options.queryHash + "'"));
				const buildNewPages = (pages, param, page, previous) => {
					newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
					return previous ? [page, ...pages] : [...pages, page];
				};
				const fetchPage = (pages, manual, param, previous) => {
					if (cancelled) return Promise.reject("Cancelled");
					if (typeof param === "undefined" && !manual && pages.length) return Promise.resolve(pages);
					const queryFnContext = {
						queryKey: context.queryKey,
						pageParam: param,
						meta: context.options.meta
					};
					addSignalProperty(queryFnContext);
					const queryFnResult = queryFn(queryFnContext);
					return Promise.resolve(queryFnResult).then((page) => buildNewPages(pages, param, page, previous));
				};
				let promise;
				if (!oldPages.length) promise = fetchPage([]);
				else if (isFetchingNextPage) {
					const manual = typeof pageParam !== "undefined";
					promise = fetchPage(oldPages, manual, manual ? pageParam : getNextPageParam(context.options, oldPages));
				} else if (isFetchingPreviousPage) {
					const manual = typeof pageParam !== "undefined";
					promise = fetchPage(oldPages, manual, manual ? pageParam : getPreviousPageParam(context.options, oldPages), true);
				} else {
					newPageParams = [];
					const manual = typeof context.options.getNextPageParam === "undefined";
					promise = (refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true) ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
					for (let i = 1; i < oldPages.length; i++) promise = promise.then((pages) => {
						if (refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true) {
							const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
							return fetchPage(pages, manual, param);
						}
						return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
					});
				}
				return promise.then((pages) => ({
					pages,
					pageParams: newPageParams
				}));
			};
		} };
	}
	function getNextPageParam(options, pages) {
		return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
	}
	function getPreviousPageParam(options, pages) {
		return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
	}
	var init_infiniteQueryBehavior = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/queryClient.mjs
	var QueryClient;
	var init_queryClient = __esmMin((() => {
		init_utils$1();
		init_queryCache();
		init_mutationCache();
		init_focusManager();
		init_onlineManager();
		init_notifyManager();
		init_infiniteQueryBehavior();
		init_logger();
		QueryClient = class {
			constructor(config = {}) {
				this.queryCache = config.queryCache || new QueryCache();
				this.mutationCache = config.mutationCache || new MutationCache();
				this.logger = config.logger || defaultLogger;
				this.defaultOptions = config.defaultOptions || {};
				this.queryDefaults = [];
				this.mutationDefaults = [];
				this.mountCount = 0;
				if (config.logger) this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
			}
			mount() {
				this.mountCount++;
				if (this.mountCount !== 1) return;
				this.unsubscribeFocus = focusManager.subscribe(() => {
					if (focusManager.isFocused()) {
						this.resumePausedMutations();
						this.queryCache.onFocus();
					}
				});
				this.unsubscribeOnline = onlineManager.subscribe(() => {
					if (onlineManager.isOnline()) {
						this.resumePausedMutations();
						this.queryCache.onOnline();
					}
				});
			}
			unmount() {
				var _this$unsubscribeFocu, _this$unsubscribeOnli;
				this.mountCount--;
				if (this.mountCount !== 0) return;
				(_this$unsubscribeFocu = this.unsubscribeFocus) == null || _this$unsubscribeFocu.call(this);
				this.unsubscribeFocus = void 0;
				(_this$unsubscribeOnli = this.unsubscribeOnline) == null || _this$unsubscribeOnli.call(this);
				this.unsubscribeOnline = void 0;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			isFetching(arg1, arg2) {
				const [filters] = parseFilterArgs(arg1, arg2);
				filters.fetchStatus = "fetching";
				return this.queryCache.findAll(filters).length;
			}
			isMutating(filters) {
				return this.mutationCache.findAll({
					...filters,
					fetching: true
				}).length;
			}
			/**
			* @deprecated This method will accept only queryKey in the next major version.
			*/
			getQueryData(queryKey, filters) {
				var _this$queryCache$find;
				return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			ensureQueryData(arg1, arg2, arg3) {
				const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
				const cachedData = this.getQueryData(parsedOptions.queryKey);
				return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			getQueriesData(queryKeyOrFilters) {
				return this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey, state }) => {
					return [queryKey, state.data];
				});
			}
			setQueryData(queryKey, updater, options) {
				const query = this.queryCache.find(queryKey);
				const data = functionalUpdate(updater, query == null ? void 0 : query.state.data);
				if (typeof data === "undefined") return;
				const parsedOptions = parseQueryArgs(queryKey);
				const defaultedOptions = this.defaultQueryOptions(parsedOptions);
				return this.queryCache.build(this, defaultedOptions).setData(data, {
					...options,
					manual: true
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			setQueriesData(queryKeyOrFilters, updater, options) {
				return notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
			}
			getQueryState(queryKey, filters) {
				var _this$queryCache$find2;
				return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			removeQueries(arg1, arg2) {
				const [filters] = parseFilterArgs(arg1, arg2);
				const queryCache = this.queryCache;
				notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						queryCache.remove(query);
					});
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			resetQueries(arg1, arg2, arg3) {
				const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
				const queryCache = this.queryCache;
				const refetchFilters = {
					type: "active",
					...filters
				};
				return notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						query.reset();
					});
					return this.refetchQueries(refetchFilters, options);
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			cancelQueries(arg1, arg2, arg3) {
				const [filters, cancelOptions = {}] = parseFilterArgs(arg1, arg2, arg3);
				if (typeof cancelOptions.revert === "undefined") cancelOptions.revert = true;
				const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions)));
				return Promise.all(promises).then(noop).catch(noop);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			invalidateQueries(arg1, arg2, arg3) {
				const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
				return notifyManager.batch(() => {
					var _ref, _filters$refetchType;
					this.queryCache.findAll(filters).forEach((query) => {
						query.invalidate();
					});
					if (filters.refetchType === "none") return Promise.resolve();
					const refetchFilters = {
						...filters,
						type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : "active"
					};
					return this.refetchQueries(refetchFilters, options);
				});
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			refetchQueries(arg1, arg2, arg3) {
				const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
				const promises = notifyManager.batch(() => this.queryCache.findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
					var _options$cancelRefetc;
					return query.fetch(void 0, {
						...options,
						cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
						meta: { refetchPage: filters.refetchPage }
					});
				}));
				let promise = Promise.all(promises).then(noop);
				if (!(options != null && options.throwOnError)) promise = promise.catch(noop);
				return promise;
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			fetchQuery(arg1, arg2, arg3) {
				const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
				const defaultedOptions = this.defaultQueryOptions(parsedOptions);
				if (typeof defaultedOptions.retry === "undefined") defaultedOptions.retry = false;
				const query = this.queryCache.build(this, defaultedOptions);
				return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			prefetchQuery(arg1, arg2, arg3) {
				return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			fetchInfiniteQuery(arg1, arg2, arg3) {
				const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
				parsedOptions.behavior = infiniteQueryBehavior();
				return this.fetchQuery(parsedOptions);
			}
			/**
			* @deprecated This method should be used with only one object argument.
			*/
			prefetchInfiniteQuery(arg1, arg2, arg3) {
				return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
			}
			resumePausedMutations() {
				return this.mutationCache.resumePausedMutations();
			}
			getQueryCache() {
				return this.queryCache;
			}
			getMutationCache() {
				return this.mutationCache;
			}
			getLogger() {
				return this.logger;
			}
			getDefaultOptions() {
				return this.defaultOptions;
			}
			setDefaultOptions(options) {
				this.defaultOptions = options;
			}
			setQueryDefaults(queryKey, options) {
				const result = this.queryDefaults.find((x) => hashQueryKey(queryKey) === hashQueryKey(x.queryKey));
				if (result) result.defaultOptions = options;
				else this.queryDefaults.push({
					queryKey,
					defaultOptions: options
				});
			}
			getQueryDefaults(queryKey) {
				if (!queryKey) return;
				const firstMatchingDefaults = this.queryDefaults.find((x) => partialMatchKey(queryKey, x.queryKey));
				if (this.queryDefaults.filter((x) => partialMatchKey(queryKey, x.queryKey)).length > 1) this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(queryKey) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults.");
				return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
			}
			setMutationDefaults(mutationKey, options) {
				const result = this.mutationDefaults.find((x) => hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey));
				if (result) result.defaultOptions = options;
				else this.mutationDefaults.push({
					mutationKey,
					defaultOptions: options
				});
			}
			getMutationDefaults(mutationKey) {
				if (!mutationKey) return;
				const firstMatchingDefaults = this.mutationDefaults.find((x) => partialMatchKey(mutationKey, x.mutationKey));
				if (this.mutationDefaults.filter((x) => partialMatchKey(mutationKey, x.mutationKey)).length > 1) this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(mutationKey) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults.");
				return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
			}
			defaultQueryOptions(options) {
				if (options != null && options._defaulted) return options;
				const defaultedOptions = {
					...this.defaultOptions.queries,
					...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
					...options,
					_defaulted: true
				};
				if (!defaultedOptions.queryHash && defaultedOptions.queryKey) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
				if (typeof defaultedOptions.refetchOnReconnect === "undefined") defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
				if (typeof defaultedOptions.useErrorBoundary === "undefined") defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
				return defaultedOptions;
			}
			defaultMutationOptions(options) {
				if (options != null && options._defaulted) return options;
				return {
					...this.defaultOptions.mutations,
					...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
					...options,
					_defaulted: true
				};
			}
			clear() {
				this.queryCache.clear();
				this.mutationCache.clear();
			}
		};
	}));
	//#endregion
	//#region node_modules/@tanstack/query-core/build/lib/index.mjs
	var init_lib$1 = __esmMin((() => {
		init_retryer();
		init_queryCache();
		init_queryClient();
		init_utils$1();
		init_notifyManager();
		init_focusManager();
		init_subscribable();
		init_mutationCache();
		init_mutation();
		init_onlineManager();
		init_query();
	}));
	//#endregion
	//#region node_modules/@tanstack/react-query/build/lib/index.mjs
	var init_lib = __esmMin((() => {
		init_lib$1();
		init_lib$1();
	}));
	//#endregion
	//#region app/javascript/lib/query-client.js
	var query_client_exports = /* @__PURE__ */ __exportAll({ default: () => queryClient$1 });
	var queryClient$1;
	var init_query_client = __esmMin((() => {
		init_lib();
		queryClient$1 = new QueryClient({ defaultOptions: { queries: {
			retry: false,
			refetchOnWindowFocus: false
		} } });
	}));
	//#endregion
	//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	}));
	//#endregion
	//#region node_modules/prop-types/factoryWithThrowingShims.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_factoryWithThrowingShims = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;
		module.exports = function() {
			function shim(props, propName, componentName, location, propFullName, secret) {
				if (secret === ReactPropTypesSecret) return;
				var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				err.name = "Invariant Violation";
				throw err;
			}
			shim.isRequired = shim;
			function getShim() {
				return shim;
			}
			var ReactPropTypes = {
				array: shim,
				bigint: shim,
				bool: shim,
				func: shim,
				number: shim,
				object: shim,
				string: shim,
				symbol: shim,
				any: shim,
				arrayOf: getShim,
				element: shim,
				elementType: shim,
				instanceOf: getShim,
				node: shim,
				objectOf: getShim,
				oneOf: getShim,
				oneOfType: getShim,
				shape: getShim,
				exact: getShim,
				checkPropTypes: emptyFunctionWithReset,
				resetWarningCache: emptyFunction
			};
			ReactPropTypes.PropTypes = ReactPropTypes;
			return ReactPropTypes;
		};
	}));
	//#endregion
	//#region node_modules/prop-types/index.js
	var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_factoryWithThrowingShims()();
	}));
	//#endregion
	//#region vite.shared/stubs/fs.js
	var fs_exports = /* @__PURE__ */ __exportAll({
		default: () => fs_default,
		readFileSync: () => readFileSync,
		writeFileSync: () => writeFileSync
	});
	var fs_default, readFileSync, writeFileSync;
	var init_fs = __esmMin((() => {
		fs_default = {};
		readFileSync = () => {
			throw new Error("fs.readFileSync not available in browser");
		};
		writeFileSync = () => {
			throw new Error("fs.writeFileSync not available in browser");
		};
	}));
	//#endregion
	//#region node_modules/babyparse/babyparse.js
	var require_babyparse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global) {
			var DEFAULTS = {
				delimiter: "",
				newline: "",
				header: false,
				dynamicTyping: false,
				preview: 0,
				step: void 0,
				comments: false,
				complete: void 0,
				skipEmptyLines: false,
				fastMode: false
			};
			var Baby = {};
			Baby.parse = CsvToJson;
			Baby.parseFiles = ParseFiles;
			Baby.unparse = JsonToCsv;
			Baby.RECORD_SEP = String.fromCharCode(30);
			Baby.UNIT_SEP = String.fromCharCode(31);
			Baby.BYTE_ORDER_MARK = "﻿";
			Baby.BAD_DELIMITERS = [
				"\r",
				"\n",
				"\"",
				Baby.BYTE_ORDER_MARK
			];
			Baby.DefaultDelimiter = ",";
			Baby.Parser = Parser;
			Baby.ParserHandle = ParserHandle;
			var fs = fs || (init_fs(), __toCommonJS(fs_exports));
			function ParseFiles(_input, _config) {
				if (Array.isArray(_input)) {
					var results = [];
					_input.forEach(function(input) {
						if (typeof input === "object") results.push(ParseFiles(input.file, input.config));
						else results.push(ParseFiles(input, _config));
					});
					return results;
				} else {
					var results = {
						data: [],
						errors: []
					};
					if (/(\.csv|\.txt)$/.test(_input)) try {
						return CsvToJson(fs.readFileSync(_input).toString(), _config);
					} catch (err) {
						results.errors.push(err);
						return results;
					}
					else {
						results.errors.push({
							type: "",
							code: "",
							message: "Unsupported file type.",
							row: ""
						});
						return results;
					}
				}
			}
			function CsvToJson(_input, _config) {
				return new ParserHandle(copyAndValidateConfig(_config)).parse(_input);
			}
			function JsonToCsv(_input, _config) {
				var _quotes = false;
				var _delimiter = ",";
				var _newline = "\r\n";
				unpackConfig();
				if (typeof _input === "string") _input = JSON.parse(_input);
				if (_input instanceof Array) {
					if (!_input.length || _input[0] instanceof Array) return serialize(null, _input);
					else if (typeof _input[0] === "object") return serialize(objectKeys(_input[0]), _input);
				} else if (typeof _input === "object") {
					if (typeof _input.data === "string") _input.data = JSON.parse(_input.data);
					if (_input.data instanceof Array) {
						if (!_input.fields) _input.fields = _input.data[0] instanceof Array ? _input.fields : objectKeys(_input.data[0]);
						if (!(_input.data[0] instanceof Array) && typeof _input.data[0] !== "object") _input.data = [_input.data];
					}
					return serialize(_input.fields || [], _input.data || []);
				}
				throw "exception: Unable to serialize unrecognized input";
				function unpackConfig() {
					if (typeof _config !== "object") return;
					if (typeof _config.delimiter === "string" && _config.delimiter.length == 1 && Baby.BAD_DELIMITERS.indexOf(_config.delimiter) == -1) _delimiter = _config.delimiter;
					if (typeof _config.quotes === "boolean" || _config.quotes instanceof Array) _quotes = _config.quotes;
					if (typeof _config.newline === "string") _newline = _config.newline;
				}
				function objectKeys(obj) {
					if (typeof obj !== "object") return [];
					var keys = [];
					for (var key in obj) keys.push(key);
					return keys;
				}
				function serialize(fields, data) {
					var csv = "";
					if (typeof fields === "string") fields = JSON.parse(fields);
					if (typeof data === "string") data = JSON.parse(data);
					var hasHeader = fields instanceof Array && fields.length > 0;
					var dataKeyedByField = !(data[0] instanceof Array);
					if (hasHeader) {
						for (var i = 0; i < fields.length; i++) {
							if (i > 0) csv += _delimiter;
							csv += safe(fields[i], i);
						}
						if (data.length > 0) csv += _newline;
					}
					for (var row = 0; row < data.length; row++) {
						var maxCol = hasHeader ? fields.length : data[row].length;
						for (var col = 0; col < maxCol; col++) {
							if (col > 0) csv += _delimiter;
							var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
							csv += safe(data[row][colIdx], col);
						}
						if (row < data.length - 1) csv += _newline;
					}
					return csv;
				}
				function safe(str, col) {
					if (typeof str === "undefined" || str === null) return "";
					str = str.toString().replace(/"/g, "\"\"");
					return typeof _quotes === "boolean" && _quotes || _quotes instanceof Array && _quotes[col] || hasAny(str, Baby.BAD_DELIMITERS) || str.indexOf(_delimiter) > -1 || str.charAt(0) == " " || str.charAt(str.length - 1) == " " ? "\"" + str + "\"" : str;
				}
				function hasAny(str, substrings) {
					for (var i = 0; i < substrings.length; i++) if (str.indexOf(substrings[i]) > -1) return true;
					return false;
				}
			}
			function ParserHandle(_config) {
				var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;
				var self = this;
				var _stepCounter = 0;
				var _input;
				var _parser;
				var _paused = false;
				var _delimiterError;
				var _fields = [];
				var _results = {
					data: [],
					errors: [],
					meta: {}
				};
				if (isFunction(_config.step)) {
					var userStep = _config.step;
					_config.step = function(results) {
						_results = results;
						if (needsHeaderRow()) processResults();
						else {
							processResults();
							if (_results.data.length == 0) return;
							_stepCounter += results.data.length;
							if (_config.preview && _stepCounter > _config.preview) _parser.abort();
							else userStep(_results, self);
						}
					};
				}
				this.parse = function(input) {
					if (!_config.newline) _config.newline = guessLineEndings(input);
					_delimiterError = false;
					if (!_config.delimiter) {
						var delimGuess = guessDelimiter(input);
						if (delimGuess.successful) _config.delimiter = delimGuess.bestDelimiter;
						else {
							_delimiterError = true;
							_config.delimiter = Baby.DefaultDelimiter;
						}
						_results.meta.delimiter = _config.delimiter;
					}
					var parserConfig = copy(_config);
					if (_config.preview && _config.header) parserConfig.preview++;
					_input = input;
					_parser = new Parser(parserConfig);
					_results = _parser.parse(_input);
					processResults();
					if (isFunction(_config.complete) && !_paused && (!self.streamer || self.streamer.finished())) _config.complete(_results);
					return _paused ? { meta: { paused: true } } : _results || { meta: { paused: false } };
				};
				this.pause = function() {
					_paused = true;
					_parser.abort();
					_input = _input.substr(_parser.getCharIndex());
				};
				this.resume = function() {
					_paused = false;
					_parser = new Parser(_config);
					_parser.parse(_input);
					if (!_paused) {
						if (self.streamer && !self.streamer.finished()) self.streamer.resume();
						else if (isFunction(_config.complete)) _config.complete(_results);
					}
				};
				this.abort = function() {
					_parser.abort();
					if (isFunction(_config.complete)) _config.complete(_results);
					_input = "";
				};
				function processResults() {
					if (_results && _delimiterError) {
						addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + Baby.DefaultDelimiter + "'");
						_delimiterError = false;
					}
					if (_config.skipEmptyLines) {
						for (var i = 0; i < _results.data.length; i++) if (_results.data[i].length == 1 && _results.data[i][0] == "") _results.data.splice(i--, 1);
					}
					if (needsHeaderRow()) fillHeaderFields();
					return applyHeaderAndDynamicTyping();
				}
				function needsHeaderRow() {
					return _config.header && _fields.length == 0;
				}
				function fillHeaderFields() {
					if (!_results) return;
					for (var i = 0; needsHeaderRow() && i < _results.data.length; i++) for (var j = 0; j < _results.data[i].length; j++) _fields.push(_results.data[i][j]);
					_results.data.splice(0, 1);
				}
				function applyHeaderAndDynamicTyping() {
					if (!_results || !_config.header && !_config.dynamicTyping) return _results;
					for (var i = 0; i < _results.data.length; i++) {
						var row = {};
						for (var j = 0; j < _results.data[i].length; j++) {
							if (_config.dynamicTyping) {
								var value = _results.data[i][j];
								if (value == "true" || value === "TRUE") _results.data[i][j] = true;
								else if (value == "false" || value === "FALSE") _results.data[i][j] = false;
								else _results.data[i][j] = tryParseFloat(value);
							}
							if (_config.header) if (j >= _fields.length) {
								if (!row["__parsed_extra"]) row["__parsed_extra"] = [];
								row["__parsed_extra"].push(_results.data[i][j]);
							} else row[_fields[j]] = _results.data[i][j];
						}
						if (_config.header) {
							_results.data[i] = row;
							if (j > _fields.length) addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + _fields.length + " fields but parsed " + j, i);
							else if (j < _fields.length) addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + _fields.length + " fields but parsed " + j, i);
						}
					}
					if (_config.header && _results.meta) _results.meta.fields = _fields;
					return _results;
				}
				function guessDelimiter(input) {
					var delimChoices = [
						",",
						"	",
						"|",
						";",
						Baby.RECORD_SEP,
						Baby.UNIT_SEP
					];
					var bestDelim, bestDelta, fieldCountPrevRow;
					for (var i = 0; i < delimChoices.length; i++) {
						var delim = delimChoices[i];
						var delta = 0, avgFieldCount = 0;
						fieldCountPrevRow = void 0;
						var preview = new Parser({
							delimiter: delim,
							preview: 10
						}).parse(input);
						for (var j = 0; j < preview.data.length; j++) {
							var fieldCount = preview.data[j].length;
							avgFieldCount += fieldCount;
							if (typeof fieldCountPrevRow === "undefined") {
								fieldCountPrevRow = fieldCount;
								continue;
							} else if (fieldCount > 1) {
								delta += Math.abs(fieldCount - fieldCountPrevRow);
								fieldCountPrevRow = fieldCount;
							}
						}
						avgFieldCount /= preview.data.length;
						if ((typeof bestDelta === "undefined" || delta < bestDelta) && avgFieldCount > 1.99) {
							bestDelta = delta;
							bestDelim = delim;
						}
					}
					_config.delimiter = bestDelim;
					return {
						successful: !!bestDelim,
						bestDelimiter: bestDelim
					};
				}
				function guessLineEndings(input) {
					input = input.substr(0, 1024 * 1024);
					var r = input.split("\r");
					if (r.length == 1) return "\n";
					var numWithN = 0;
					for (var i = 0; i < r.length; i++) if (r[i][0] == "\n") numWithN++;
					return numWithN >= r.length / 2 ? "\r\n" : "\r";
				}
				function tryParseFloat(val) {
					return FLOAT.test(val) ? parseFloat(val) : val;
				}
				function addError(type, code, msg, row) {
					_results.errors.push({
						type,
						code,
						message: msg,
						row
					});
				}
			}
			function Parser(config) {
				config = config || {};
				var delim = config.delimiter;
				var newline = config.newline;
				var comments = config.comments;
				var step = config.step;
				var preview = config.preview;
				var fastMode = config.fastMode;
				if (typeof delim !== "string" || delim.length != 1 || Baby.BAD_DELIMITERS.indexOf(delim) > -1) delim = ",";
				if (comments === delim) throw "Comment character same as delimiter";
				else if (comments === true) comments = "#";
				else if (typeof comments !== "string" || Baby.BAD_DELIMITERS.indexOf(comments) > -1) comments = false;
				if (newline != "\n" && newline != "\r" && newline != "\r\n") newline = "\n";
				var cursor = 0;
				var aborted = false;
				this.parse = function(input) {
					if (typeof input !== "string") throw "Input must be a string";
					var inputLen = input.length, delimLen = delim.length, newlineLen = newline.length, commentsLen = comments.length;
					var stepIsFunction = typeof step === "function";
					cursor = 0;
					var data = [], errors = [], row = [];
					if (!input) return returnable();
					if (fastMode) {
						var rows = input.split(newline);
						for (var i = 0; i < rows.length; i++) {
							if (comments && rows[i].substr(0, commentsLen) == comments) continue;
							if (stepIsFunction) {
								data = [rows[i].split(delim)];
								doStep();
								if (aborted) return returnable();
							} else data.push(rows[i].split(delim));
							if (preview && i >= preview) {
								data = data.slice(0, preview);
								return returnable(true);
							}
						}
						return returnable();
					}
					var nextDelim = input.indexOf(delim, cursor);
					var nextNewline = input.indexOf(newline, cursor);
					for (;;) {
						if (input[cursor] == "\"") {
							var quoteSearch = cursor;
							cursor++;
							for (;;) {
								var quoteSearch = input.indexOf("\"", quoteSearch + 1);
								if (quoteSearch === -1) {
									errors.push({
										type: "Quotes",
										code: "MissingQuotes",
										message: "Quoted field unterminated",
										row: data.length,
										index: cursor
									});
									return finish();
								}
								if (quoteSearch === inputLen - 1) {
									row.push(input.substring(cursor, quoteSearch).replace(/""/g, "\""));
									data.push(row);
									if (stepIsFunction) doStep();
									return returnable();
								}
								if (input[quoteSearch + 1] == "\"") {
									quoteSearch++;
									continue;
								}
								if (input[quoteSearch + 1] == delim) {
									row.push(input.substring(cursor, quoteSearch).replace(/""/g, "\""));
									cursor = quoteSearch + 1 + delimLen;
									nextDelim = input.indexOf(delim, cursor);
									nextNewline = input.indexOf(newline, cursor);
									break;
								}
								if (input.substr(quoteSearch + 1, newlineLen) === newline) {
									row.push(input.substring(cursor, quoteSearch).replace(/""/g, "\""));
									saveRow(quoteSearch + 1 + newlineLen);
									nextDelim = input.indexOf(delim, cursor);
									if (stepIsFunction) {
										doStep();
										if (aborted) return returnable();
									}
									if (preview && data.length >= preview) return returnable(true);
									break;
								}
							}
							continue;
						}
						if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments) {
							if (nextNewline == -1) return returnable();
							cursor = nextNewline + newlineLen;
							nextNewline = input.indexOf(newline, cursor);
							nextDelim = input.indexOf(delim, cursor);
							continue;
						}
						if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1)) {
							row.push(input.substring(cursor, nextDelim));
							cursor = nextDelim + delimLen;
							nextDelim = input.indexOf(delim, cursor);
							continue;
						}
						if (nextNewline !== -1) {
							row.push(input.substring(cursor, nextNewline));
							saveRow(nextNewline + newlineLen);
							if (stepIsFunction) {
								doStep();
								if (aborted) return returnable();
							}
							if (preview && data.length >= preview) return returnable(true);
							continue;
						}
						break;
					}
					return finish();
					function finish() {
						row.push(input.substr(cursor));
						data.push(row);
						cursor = inputLen;
						if (stepIsFunction) doStep();
						return returnable();
					}
					function saveRow(newCursor) {
						data.push(row);
						row = [];
						cursor = newCursor;
						nextNewline = input.indexOf(newline, cursor);
					}
					function returnable(stopped) {
						return {
							data,
							errors,
							meta: {
								delimiter: delim,
								linebreak: newline,
								aborted,
								truncated: !!stopped
							}
						};
					}
					function doStep() {
						step(returnable());
						data = [], errors = [];
					}
				};
				this.abort = function() {
					aborted = true;
				};
				this.getCharIndex = function() {
					return cursor;
				};
			}
			function copyAndValidateConfig(origConfig) {
				if (typeof origConfig !== "object") origConfig = {};
				var config = copy(origConfig);
				if (typeof config.delimiter !== "string" || config.delimiter.length != 1 || Baby.BAD_DELIMITERS.indexOf(config.delimiter) > -1) config.delimiter = DEFAULTS.delimiter;
				if (config.newline != "\n" && config.newline != "\r" && config.newline != "\r\n") config.newline = DEFAULTS.newline;
				if (typeof config.header !== "boolean") config.header = DEFAULTS.header;
				if (typeof config.dynamicTyping !== "boolean") config.dynamicTyping = DEFAULTS.dynamicTyping;
				if (typeof config.preview !== "number") config.preview = DEFAULTS.preview;
				if (typeof config.step !== "function") config.step = DEFAULTS.step;
				if (typeof config.complete !== "function") config.complete = DEFAULTS.complete;
				if (typeof config.skipEmptyLines !== "boolean") config.skipEmptyLines = DEFAULTS.skipEmptyLines;
				if (typeof config.fastMode !== "boolean") config.fastMode = DEFAULTS.fastMode;
				return config;
			}
			function copy(obj) {
				if (typeof obj !== "object") return obj;
				var cpy = obj instanceof Array ? [] : {};
				for (var key in obj) cpy[key] = copy(obj[key]);
				return cpy;
			}
			function isFunction(func) {
				return typeof func === "function";
			}
			if (typeof module !== "undefined" && module.exports) module.exports = Baby;
			else if (typeof define === "function" && define.amd) define(function() {
				return Baby;
			});
			else global.Baby = Baby;
		})(typeof window !== "undefined" ? window : exports);
	}));
	//#endregion
	//#region app/javascript/lib/parse-translations-from-csv.js
	function readTranslationsFromCSV(rawCsvText, ignoreColumns) {
		ignoreColumns = presence(ignoreColumns) || ignoreColumnsDefault;
		if (!present$1(rawCsvText)) throw new Error("No translations found!");
		var parsed = import_babyparse.default.parse(rawCsvText);
		if (present$1(parsed.errors)) throw new Error(parsed.errors);
		var header = parsed.data[0];
		var rows = parsed.data.slice(1);
		var languages = header.slice(1);
		var keys = map(rows, "0");
		return languages.map(function(lang, index) {
			if (ignoreColumns.includes(lang)) return null;
			return {
				lang,
				mapping: zipObject(keys, map(rows, index + 1))
			};
		}).filter(Boolean);
	}
	var import_babyparse, ignoreColumnsDefault;
	var init_parse_translations_from_csv = __esmMin((() => {
		init_lodash();
		init_present();
		import_babyparse = /* @__PURE__ */ __toESM(require_babyparse());
		ignoreColumnsDefault = ["comment"];
	}));
	//#endregion
	//#region app/javascript/lib/i18n-translate.js
	function I18nTranslate(marker) {
		var LANG = APP_CONFIG.userLanguage;
		if (!Object.hasOwn(translations, LANG)) throw new Error(`Unknown language '${LANG}'!`);
		const s = get(translations, [LANG, marker]);
		return isString(s) ? s : "⟨" + marker + "⟩";
	}
	var translationsList, translations;
	var init_i18n_translate = __esmMin((() => {
		init_lodash();
		init_parse_translations_from_csv();
		translationsList = readTranslationsFromCSV("key,de,en,comment\najax_form_connection_error,Verbindungsfehler. Bitte versuchen Sie es noch einmal.,Connection error. Please try again.,\najax_form_no_longer_authorized,Sie sind für diese Aktion nicht mehr authorisiert.,You are no longer authorized to do this.,\najax_form_unexpected_error,Es gab einen unerwarteten Server-Fehler.,There was an unexpected server error.,\najax_form_validation_error_unparsable,Validation error with unparsable errors.,Validation error with unparsable errors.,\"Formular speichern, Edge case: Server gibt Fehlermeldung UND sie kann nicht gelesen werden.\"\najax_form_validation_error_without_any_data,Validation error without any data.,Validation error without any data.,\"Formular speichern, Edge case: Server gibt Fehlermeldungs-Code aber sonst keinen Inhalt\"\najax_form_validation_error_without_error_data,Validation error without error data.,Validation error without error data.,\"Formular speichern, Edge case: Server gibt Fehlermeldung, aber keine Details\"\napi_tokens_callback_description,Token wird für eine externe Applikation erstellt.,Token is being created for an external application.,\napi_tokens_create_cancel,Abbrechen,Cancel,\napi_tokens_create_description,Beschreibung,Description,\napi_tokens_create_submit,Token anlegen,Create token,\napi_tokens_create_title,Neuen Token hinzufügen,Add new token,\napi_tokens_created_back_btn,Zurück zu allen Tokens.,Back to all tokens.,\napi_tokens_created_callback_btn,Weiter zur Applikation,Continue to the application,\napi_tokens_created_callback_description,\"Falls die Weiterleitung nicht funktioniert, kann der Token auch manuell kopiert werden:\",\"If the redirect does not work, the token can also be copied manually:\",\napi_tokens_created_notice,Dieser Token wird nur einmal angezeigt. Bitte speichern Sie ihn jetzt.,This token is displayed only once. Please save it now.,\napi_tokens_created_title,Es wurde ein neuer Token erstellt.,A new token was created.,\napi_tokens_head_id,ID,ID,\napi_tokens_head_name,Name,Name,\napi_tokens_head_permissions,Berechtigungen,Permissions,\napi_tokens_head_valid_since,Gültig seit,Valid from,\napi_tokens_head_valid_until,Gültig bis,Valid to,\napi_tokens_list_created_hint_pre,Erstellt: ,Created: ,\"Tooltip auf dem Datum in der Tokens-Tabelle, wird vor einem Zeitstempel angezeigt\"\napi_tokens_list_expires_hint_pre,Ablaufdatum: ,Expiration date: ,\"Tooltip auf dem Datum in der Tokens-Tabelle, wird vor einem Zeitstempel angezeigt\"\napi_tokens_list_new_button,Neuen Token erstellen,Create new token,\napi_tokens_list_no_description,(Keine Beschreibung),No description),\"Platzhalter-Text, falls ein Token keine Beschreibung hat.\"\napi_tokens_list_revoke_btn_hint,Token zurückziehen.,Revoke token.,\napi_tokens_list_revoke_confirm,\"Sind Sie sicher, dass Sie diesen Token zurückziehen wollen?\",Are you sure you want to revoke the token?,\napi_tokens_list_revoked_title,Abgelaufene und zurückgezogene Tokens,Expired and revoked tokens,\napi_tokens_list_scope_off,Nein,No,\napi_tokens_list_scope_on,Ja,Yes,\napi_tokens_list_scope_read,Lesen,Read,\napi_tokens_list_scope_write,Schreiben,Write,\napp_autocomplete_displayname_users,Nutzer/innen,Users,\napp_autocomplete_displayname_delegations,Verantwortungs-Gruppen,Responsibility groups,\napp_autocomplete_no_results,Keine Ergebnisse.,No results.,\napp_autocomplete_user_delegation_postfix, (Verantwortungs-Gruppe), (Responsibility group)\napp_autocomplete_enter_term,Suchbegriff eingeben für weitere Ergebnisse,Enter search term for further results,\napp_autocomplete_extend_term,Suchbegriff erweitern für weitere Ergebnisse,Extend search term for further results,\napp_confirm_form_leave_msg,\"Diese Seite bittet Sie zu bestätigen, dass Sie die Seite verlassen möchten. Daten, die Sie eingegeben haben, werden unter Umständen nicht gespeichert.\",Please confirm that you wish to leave this page – entered data might not be saved.,NOTE: German version copied from Firefox default message\napp_notice_admin_mode_on,Admin-Modus aktiviert!,Admin mode activated!,\napp_notice_admin_mode_off,Admin-Modus deaktiviert!,Admin mode deactivated!,\napp_notice_logged_in,Sie haben sich angemeldet.,You have logged in.,\napp_notice_logged_out,Sie haben sich abgemeldet.,You have logged out.,\napp_notice_wrong_credentials,Falscher Benutzername/Passwort.,Incorrect username/password.,\napp_notice_shibboleth_not_enabled,Die Anmeldung mittels Shibboleth ist nicht aktiviert!,Shibboleth sign in is not enabled!,\napp_notice_shibboleth_missing_fields,\"Die Authentifizierungsdaten von Shibboleth sind unvollständig. SURNAME, GIVENNAME und EMAIL sind Pflichtfelder!\",\"Shibboleth authentication data is incomplete. SURNAME, GIVENNAME and EMAIL are required fields!\",\napp_warning_jsonly,\"Diese Funktion erfordert JavaScript, aber es ist nicht aktiviert.\",\"This feature requires Javascript, but it is not activated.\",\nauthentication_groups,Systemgruppen,System groups,\nbatch_add_to_collection_hint,\"Nach Sets suchen, zu denen Sie die Medieneinträge hinzufügen möchten.\",Seach for sets to add media entries.,\nbatch_add_to_collection_post, Medieneinträge zu Set hinzufügen,Add media entries to set,(nach der Anzahl)\nbatch_add_to_collection_pre, ,,(vor der Anzahl)\nbatch_destroy_resources_ask_1,Möchten Sie folgende Inhalte löschen:,Do you want to delete the following items:,\nbatch_destroy_resources_ask_2, Medieneinträge, Media entries,\nbatch_destroy_resources_ask_3, Sets, Sets,\nbatch_destroy_resources_ask_4,(Die Inhalte von Sets werden nicht automatisch mit dem Set gelöscht.),\"(When a set is deleted, the items of this set are not deleted at the same time.)\",\nbatch_destroy_resources_cancel,Abbrechen,Cancel,\nbatch_destroy_resources_ok,OK,OK,\nbatch_destroy_resources_success,Inhalte wurden erfolgreich gelöscht.,Items are deleted successfully.,\nbatch_meta_data_edit,Metadaten für %{media_entry_count} Medieneinträge gleichzeitig editieren.,Edit metadata for %{media_entry_count} media entries at the same time.,\nbatch_remove_from_collection_cancel,Abbrechen,Cancel,\nbatch_remove_from_collection_question_part_1,Möchten Sie die ausgewählten ,Do you want to remove the selected ,\nbatch_remove_from_collection_question_part_2, Medieneinträge und , media entries and ,\nbatch_remove_from_collection_question_part_3, Sets aus dem Set entfernen?, sets from this set?,\nbatch_remove_from_collection_remove,Entfernen,Remove,\nbatch_remove_from_collection_title,Medieinträge/Sets aus Set entfernen,Remove media entries/sets from sets,\nbatch_warning_no_authorized_contents_collection,Sie haben für keines der Sets die nötige Berechtigung.,You have no permissions for these sets.,\nbatch_warning_no_authorized_contents_media_entry,Sie haben für keinen der Medieneinträge die nötige Berechtigung.,You have no permissions for these media entries.,\nbatch_warning_no_contents_collection,Sie haben keine Sets.,You have no sets.,\nbatch_warning_no_contents_media_entry,Sie haben keine Medieneinträge.,You have no media entries.,\nbatch_edit_title_title,Titel von Medieneinträgen editieren,Edit titles of media entries,\nbatch_edit_title_th_filename,Dateiname,File name,\nbatch_edit_title_th_title,Titel,Title,\nbatch_edit_title_save,Speichern,Save,\nbatch_edit_title_cancel,Abbrechen,Cancel,\nbrowse_entries_browse_link_title,In diese Richtung weiterstöbern,Browse further in this direction,\nbrowse_entries_filter_link,Weiter filtern →,Apply additional filter →,\nbrowse_entries_loading_error,Ladefehler,Loading error,\nbrowse_entries_title,Nach ähnlichen Inhalten stöbern,Browse similar items,\nbubble_batch_label,Stapel,Batch,Wo: Labels in der Stapelverarbeitung\nbubble_draft_label,Entwurf,Draft,Wo: Labels in der Stapelverarbeitung\nclipboard_add_hint,Zur Stapelverarbeitung hinzufügen,Add to batch processing,\nclipboard_adding_all_resources_cancelled,\"Das Hinzufügen zur Stapelverarbeitung wurde abgebrochen. Ein Teil der Inhalte wurde schon hinzugefügt. Wenn Sie alle hinzufügen möchten, versuchen Sie es noch einmal. Schon hinzugefügte Inhalte werden nicht dupliziert.\",\"The process of adding items to batch processing was interrupted. Some items were successfully added to batch processing. If you wish to add all items, please try again.Those items already added will not be duplicated.\",\nclipboard_adding_all_resources_error,Es konnten nicht alle Inhalte zur Stapelverarbeitung hinzugefügt werden. Bitte versuchen Sie es noch einmal. Schon hinzugefügte Inhalte werden nicht dupliziert.,It was not possible to add all items to batch processing. Please try again. Those items already added will not be duplicated.,\nclipboard_adding_all_resources_retry,Nochmals, Again,\nclipboard_adding_resources,Füge Inhalte zur Stapelverarbeitung hinzu …,Add items to batch processing …,\nclipboard_ask_add_all_1,Möchten sie alle ,Would you like to add all ,\nclipboard_ask_add_all_2, Inhalte zur Stapelverarbeitung hinzufügen?, items to batch processing?,\nclipboard_ask_add_all_cancel,Abbrechen,Cancel,\nclipboard_ask_add_all_ok,Ok,OK,\nclipboard_batch_add_success,Die Inhalte wurden der Stapelverarbeitung hinzugefügt.,Items were added to batch processing.,\nclipboard_batch_remove_success,Die Inhalte wurden aus der Stapelverarbeitung entfernt.,Items wer removed from batch processing.,\nclipboard_empty_message,Sie haben keine Inhalte für die Stapelverarbeitung ausgewählt.,Batch processing is empty,\nclipboard_fetching_resources,Lade Inhalte …,Items loading …,\"Wieso sind da Pünktchen? -> Ist eine Zustandsanzeige, Nutzer wartet.\"\nclipboard_removing_resources,Entferne Inhalte aus Stapelverarbeitung...,Remove items from batch processing ...,\ncollection_ask_delete_question_pre,\"Sind Sie sicher, dass Sie folgendes Set löschen möchten: \",Are you sure you want to delete the following set:,\ncollection_ask_delete_title,Set löschen,Delete set,\ncollection_deleted,Dieses Set wurde gelöscht und ist für Benutzer nicht mehr sichtbar.,This set has been deleted and is no longer visible to users.\ncollection_delete_success,Set wurde gelöscht.,Set deleted.,\ncollection_does_not_exist,Dieses Set existiert nicht.,This set does not exist.,\ncollection_edit_cover_submit_btn,Speichern,Submit,\ncollection_edit_cover_title,Titelbild für Set festlegen,Define set cover,\ncollection_edit_highlights_btn,Auswahl speichern,Submit selection,\ncollection_edit_highlights_empty,Dieses Set hat noch keine Inhalte.,This set has no items yet.,\ncollection_edit_highlights_title,Inhalte hervorheben,Highlight items,\ncollection_edit_permissions_btn,Speichern,Submit,\ncollection_highlighted_contents,Hervorgehobene Inhalte,Highlighted items,\ncollection_layout_save,Darstellung festlegen,Save type of display,\ncollection_layout_saved,Darstellung gespeichert,Type of display saved,\ncollection_meta_data_header_prefix,Set editieren: ,Edit set:,\ncollection_new_cancel,Abbrechen,Cancel,\ncollection_new_create_set,Set erstellen,Create set,\ncollection_new_dialog_title,Set erstellen,Create set,\ncollection_new_dialog_parent_warning,The new created set will be added as a child to:,The new created set will be added as a child to:,\ncollection_new_flash_successful,Set wurde erstellt.,Set was created.,\ncollection_new_flash_title_needed,Titel ist ein Pflichtfeld.,Title is a mandatory field.,\ncollection_new_header,Neues Set,New set,\ncollection_new_label_title,Titel,Title,\ncollection_permissions_btn,Zugriffsberechtigungen ändern,Change permissions,\ncollection_relations_child_sets,Untergeordnete Sets,Child sets,\ncollection_relations_children_hint,Diese Sets wurden dem ausgewählten Set hinzugefügt.,These sets are now related to the selected set.,\ncollection_relations_current,Aktuelles Set,Current set,\ncollection_relations_hint_text,\"Das ausgewählte Set ist mit anderen Sets verknüpft. Diese Zusammenhänge wurden aktiv durch Sie oder eine/n andere/n Nutzer/in festgelegt als übergeordnet, benachbart oder untergeordnet. Sie sehen hier sowohl eigene Sets, als auch solche, die andere Nutzer/innen mit Ihnen teilen.\",\"The selected set is related to other sets. The relationship between these sets was actively defined by you or another user. The type of relationship to the other sets could be described as parent, siblings or children relationship. The displayed sets are owned by yourself or shared by other users with you.\",\ncollection_relations_no_child_sets, , ,\"Optionaler Hinweis, falls Zusammenhänge leer\"\ncollection_relations_no_parent_sets, , ,\"Optionaler Hinweis, falls Zusammenhänge leer\"\ncollection_relations_no_sibling_sets, , ,\"Optionaler Hinweis, falls Zusammenhänge leer\"\ncollection_relations_parent_sets,Übergeordnete Sets,Parent sets,\ncollection_relations_parents_hint,Das ausgewählte Set wurde diesen Sets hinzugefügt.,The selected set is now related to this set.,\ncollection_relations_show_all,Alle anzeigen →,Show all →,\ncollection_relations_show_all_relations,Alle Zusammenhänge anzeigen,Show all relations,\ncollection_relations_sibling_sets,Benachbarte Sets,Sibling sets,\ncollection_relations_siblings_hint,Diese Sets wurden den gleichen Sets hinzugefügt wie das ausgewählte Set.,This set is related to the same sets as the selected set.,Wo: Zusammenhänge eines Sets\ncollection_resource_selection_cancel,Abbrechen,Cancel,\ncollection_resource_selection_h_author,Autor/in,Author,\ncollection_resource_selection_h_date,Datierung,Dating,\ncollection_resource_selection_h_keywords,Schlagworte,Keywords,\ncollection_resource_selection_h_responsible,Rechteinhaber,Holder of rights,\ncollection_resource_selection_h_selection,Auswahl,Selection,\ncollection_resource_selection_h_subtitle,Untertitel,Subtitle,\ncollection_resource_selection_h_title,Titel,Title,\ncollection_resource_selection_save,Auswahl speichern,Save selection,\ncollection_select_collection_flash_result,Set aus %{removed_count} Set(s) entfernt. Zu %{added_count} Set(s) hinzugefügt.,Removed set from %{removed_count} set(s). Added set to %{added_count} set(s).,\ncollection_sorting_created_at_asc,Sortieren nach Importierdatum aufsteigend,Sort by import date ascending,\ncollection_sorting_created_at_desc,Sortieren nach Importierdatum absteigend,Sort by import date descending,\ncollection_sorting_manual_asc,Sortieren manuell aufsteigend,Sort manually ascending,\ncollection_sorting_manual_desc,Sortieren manuell absteigend,Sort manually descending,\ncollection_sorting_last_change_desc,Sortieren nach letzter Änderung absteigend,Sort by date of update descending,\ncollection_sorting_last_change_asc,Sortieren nach letzter Änderung aufsteigend,Sort by date of update ascending,\ncollection_sorting_title_asc,Sortieren nach Titel alphabetisch,Sort by title alphabetically,\ncollection_sorting_title_desc,Sortieren nach Titel absteigend,\"Sort by title alphabetically, but descending\",\ncollection_tab_main,Set,Set,\ncollection_was_disfavored,Das Set wurde von den Favoriten entfernt.,Set was removed from favorites.,\ncollection_was_favored,Das Set wurde zu den Favoriten hinzugefügt.,Set was added to favorites.,\ncontents_privacy_private,Diese Inhalte sind nur für Sie zugänglich.,These items are only accessible to you.,\ncontents_privacy_public,Diese Inhalte sind öffentlich zugänglich.,These items are accessible to the public.,\ncustom_urls_canonical_hint,\"Jeder Inhalt hat eine automatisch erzeugte, kanonische Adresse bestehend aus Zahlen und Buchstaben, eine sog. UUID (Universally Unique Identifier). Diese Adresse kann nicht übertragen oder entfernt werden und ist deshalb immer an erster Stelle aufgelistet.\",\"Every item has a canonical address consisting of numbers und letters which is created automatically, a so- called UUID (Universally Unique Identifier). This address can not be transferred or deleted. For this reason it is always listed first.\",\ncustom_urls_canonical_title,Kanonische Adresse (UUID),Canonical address (UUID),\ncustom_urls_flash_create_successful_1,Adresse ,Address ,\ncustom_urls_flash_create_successful_2, wurde erstellt., was created.,\ncustom_urls_flash_empty,Adresse darf nicht leer sein.,Address is not allowed to be empty.,\ncustom_urls_flash_exists_on_itself_collection_1,Die Adresse ,The address ,\ncustom_urls_flash_exists_on_itself_collection_2, existiert bereits für dieses Set., already exists for this set.,\ncustom_urls_flash_exists_on_itself_media_entry_1,Die Adresse ,The address ,\ncustom_urls_flash_exists_on_itself_media_entry_2, existiert bereits für diesen Medieneintrag., already exists for this media entry.,\ncustom_urls_flash_not_allowed_collection_1,Die Adresse ,The address ,\ncustom_urls_flash_not_allowed_collection_2,\" kann nicht übertragen werden. Sie haben nicht die Berechtigung das Set zu verwalten, auf welches die Adresse \", can not be transferred. You do not have permission to manage the set to which the address ,\ncustom_urls_flash_not_allowed_collection_3, im Moment verweist., is related to.,\ncustom_urls_flash_not_allowed_media_entry_1,Die Adresse ,The address ,\ncustom_urls_flash_not_allowed_media_entry_2,\" kann nicht übertragen werden. Sie haben nicht die Berechtigung den Medieneintrag zu verwalten, auf welchen die Adresse \", cannot be transferred. You do not have  permission to manage the media entry to which the address ,\ncustom_urls_flash_not_allowed_media_entry_3, im Moment verweist., is related to.,\ncustom_urls_flash_not_same_type_collection_1,Adresse ,The address ,\ncustom_urls_flash_not_same_type_collection_2, kann nicht übertragen werden. Adressen von Medieneinträgen können nicht auf Sets übertragen werden., can not be transferred. Addresses from media entries can not be transferred to sets.,\ncustom_urls_flash_not_same_type_media_entry_1,Adresse ,The address ,\ncustom_urls_flash_not_same_type_media_entry_2, kann nicht übertragen werden. Adressen von Sets können nicht auf Medieneinträge übertragen werden., cannot be transferred. Addresses from sets cannot be transferred to media entries.,\ncustom_urls_flash_primary_url_set_1,,,\"Wo: Bestätigung CustomURL, vor der Adresse\"\ncustom_urls_flash_primary_url_set_2, wurde als primäre Adresse gesetzt., was set as primary address.,\"Wo: Bestätigung CustomURL, nach der Adresse\"\ncustom_urls_flash_transfer_confirmation_collection_1,Die Adresse ,The address ,\ncustom_urls_flash_transfer_confirmation_collection_2, ist gegenwärtig dem Set , is currently related to the set  ,\ncustom_urls_flash_transfer_confirmation_collection_3, zugewiesen. Wollen Sie diese Adresse auf das Set ,. Would you like to transfer this address to the set ,\ncustom_urls_flash_transfer_confirmation_collection_4, übertragen?,?,\ncustom_urls_flash_transfer_confirmation_media_entry_1,Die Adresse ,The address ,\ncustom_urls_flash_transfer_confirmation_media_entry_2, ist gegenwärtig dem Medieneintrag , is currently related to the media entry  ,\ncustom_urls_flash_transfer_confirmation_media_entry_3, zugewiesen. Wollen Sie diese Adresse auf den Medieneintrag ,. Would you like to transfer this address to the media entry ,\ncustom_urls_flash_transfer_confirmation_media_entry_4, übertragen?,?,\ncustom_urls_flash_transfer_successful_1,Adresse ,Address  ,\ncustom_urls_flash_transfer_successful_2, wurde von , was transferred from  ,\ncustom_urls_flash_transfer_successful_3, auf , to ,\ncustom_urls_flash_transfer_successful_4, übertragen.,0,\ncustom_urls_flash_wrong_format_1,Adresse ,Address ,\ncustom_urls_flash_wrong_format_2, erfüllt die Anforderungen nicht., does not meet the requirements.,\ncustom_urls_manage_address_title,Adressverwaltung,Address administration,\ncustom_urls_new,Adresse anlegen / übertragen,Create / transfer address,\ncustom_urls_no_addresses_defined,Noch keine Adressen definiert.,No address defined yet.,\ncustom_urls_primary_hint,\"Für jeden Inhalt (egal ob Medieneintrag oder Set) gibt es immer genau eine primäre Adresse. Diese ist in der Adressleiste des Browsers sichtbar, wenn der Inhalt angezeigt wird. Neben der primären Adresse können weitere gesetzt werden, die auf die primäre Adresse weiterleiten.\",Each item (media entry or set) has exactly one primary address. This address is displayed in the browsersaddress bar when the item is accessed.You have the option to create other addresses which are forwarded to the primary address.,\ncustom_urls_primary_title,Primäre Adresse,Primary address,\ncustom_urls_table_header_actions,Aktionen,Actions,\ncustom_urls_table_header_address,Adresse,Address ,\ncustom_urls_table_header_created_by,Erstellt durch,Created by,\ncustom_urls_table_header_date,Datum,Date,\ncustom_urls_table_header_type,Typ,Type,\ncustom_urls_title,Adressen für ,Addresses for ,\ndashboard_create_collection,Set erstellen,Create set,\ndashboard_create_collection_btn,Set erstellen,Create set,\ndashboard_create_media_entry_btn,Medien importieren,Upload media,\ndashboard_none_exist,Keine vorhanden.,There are none.,\ndashboard_show_all,Alle anzeigen,Show all,\ndashboard_title_head,Mein Archiv,My archive,\ndeleted,gelöscht,deleted,\ndynamic_filters_any_values_title,Jegliche Werte,Any values,\ndynamic_filters_authorization,Berechtigung,Authorization,\ndynamic_filters_visibility,Sichtbarkeit,Accessability,\ndynamic_filters_visibility_private,Nur für mich,Only for me,\ndynamic_filters_visibility_user_or_group,Geteilt mit Personen und Arbeitsgruppen,Shared with people and work groups,\ndynamic_filters_person_header,Personen,Persons,\ndynamic_filters_remove_all_title,Alle entfernen,Remove all,\ndynamic_filters_role_header,Funktionen,Functions,\ndynamic_filters_search_for_api_client_placeholder,Suche nach API-Applikation,Search for API client...,\ndynamic_filters_search_for_delegation_placeholder,Suche nach Gruppe...,Search for group...,\ndynamic_filters_search_for_group_placeholder,Suche nach Gruppe...,Search for group...,\ndynamic_filters_search_for_user_placeholder,Suche nach User...,Search for user...,\ndynamic_filters_search_for,Suche nach,Search for,\nedit_custom_urls_back_to_collection,Zurück zum Set,Back to the set,\nedit_custom_urls_back_to_media_entry,Zurück zum Medieneintrag,Back to the media entry,\nedit_custom_urls_cancel,Abbrechen,Cancel,\nedit_custom_urls_confirmation,Bestätigung,Confirmation,\nedit_custom_urls_create_or_transfer,Adresse anlegen / übertragen,Create / transfer address,\nedit_custom_urls_preferred_address,Gewünschte Adresse:,Preferred address:,\nedit_custom_urls_requirements_hint,\"Eine Adresse darf nur genau einmal im System vorkommen – entweder für einen Medieneintrag oder für ein Set. Sie beginnt immer mit einem Kleinbuchstaben, gefolgt von (mindestens einem) weiteren Zeichen aus Kleinbuchstaben, Nummern, Bindestrichen ( - ) und Grundstrichen ( _ ) in beliebiger Reihenfolge.\",\"Each comprehensible address is unique in the system – either for a media entry or for a set. The address always begins with a lower case letter, followed by at least one other character. The following characters can bei lower case letters, numbers, hyphens ( - ) or low lines ( _ ) in any order.\",\nedit_custom_urls_requirements_title,Anforderungen,Requirements,\nedit_custom_urls_set_primary,Als primäre Adresse setzen,Set as primary address,\nedit_custom_urls_state_primary,Primäre Adresse,Primary address,\nedit_custom_urls_state_transfer,Weiterleitung,Forwarding,\nedit_custom_urls_title,Anforderungen,Requirements,\nedit_custom_urls_transfer,Übertragen,Transfer,\nedit_custom_urls_transfer_hint,\"Eine bereits bestehende Adresse kann von einem Medieneintrag auf einen anderen oder von einem Set auf ein anderes übertragen werden. Bestehende Adressen können nicht von einem Medieneintrag auf ein Set und umgekehrt übertragen werden. Wollen Sie eine Adresse übertragen, dann geben Sie diese hier ein. Sie müssen für beide Inhalte über die Zugriffsberechtigung 'Verwalten' verfügen.\",\"An existing address can be transferred from one media entry to another or from one set to another. Existing addresses cannfot be transferred from a media entry to a set or vice versa. If you want to transfer an address, please enter this address here. You have to have manage permissions for both items.\",\nedit_custom_urls_transfer_title,Übertragen,Transfer,\nembed_error_title,\"Fehler!\",\"Error!\",\nembed_error_context_pre,\"Angeforderte URL: \",\"Requested URL: \",\nembed_error_context_post,\"\",\"\",\nembed_error_help_pre,\"Hilfe: \",\"Help: \",\nembed_error_help_post,\"\",\"\",\nembed_error_msg,\"Dieser Inhalt kann nicht eingebettet werden.\",\"This content cannot be embedded.\",\nembed_error_msg_403,\"Dieser Inhalt kann nicht eingebettet werden, weil die nötigen Berechtigungen fehlen.\",\"This content cannot be embedded because the necessary permissions are missing.\",\nembed_error_msg_404,\"Der gewünschte Inhalt konnte nicht gefunden werden.\",\"The requested content could not be found.\",\nerror_401_title,\"Um Zugang zu diesem Bereich zu erhalten, melden Sie sich bitte an.\",To get access please login below with your user data.,\nerror_403_message,Bitte kontaktieren Sie die für die Ressource verantwortliche Person.,Please contact the responsible user for this resource.,\nerror_403_title,Sie haben keine Zugriffsrechte für diesen Inhalt.,You don’t have the necessary permissions to access this resource.,\nerror_404_title,Die gesuchte Seite kann nicht gefunden werden.,The requested page cannot be found.,\nerror_500_message,\"Benötigen Sie diesbezüglich Hilfe, dann kontaktieren Sie bitte den Support (%{support_email}) mit einer Beschreibung Ihrer letzten Arbeitsschritte sowie einem Screenshot dieser Seite.\",\"If you require help in this matter, please contact the support (%{support_email}) with a description of your last working steps and a screen shot of this page.\",\nerror_500_message_pre,\"Benötigen Sie diesbezüglich Hilfe, dann kontaktieren Sie bitte den Support (\",\"If you require help in this matter, please contact the support (\",\nerror_500_message_post,\") mit einer Beschreibung Ihrer letzten Arbeitsschritte sowie einem Screenshot dieser Seite.\",\") with a description of your last working steps and a screen shot of this page.\",\nerror_500_title,Es ist ein Server-Fehler aufgetreten.,A server error occurred.,\nexplore_keywords_section_title,Häufige Schlagworte,Frequent keywords,\nexplore_show_more,Weitere anzeigen,Show more,\nexplore_vocabulary_section_show_details,Details anzeigen,View details,\nexplore_vovabulary_section_title,Vokabulare,Vocabularies,\nexternal_groups,Abteilungsgruppen,Division groups,\nfooter_choose_language,Sprache wählen,Choose language,\ngroup_ask_delete_cancel,Abbrechen,Cancel,\ngroup_ask_delete_delete,Löschen,Delete,\ngroup_ask_delete_question_post, löschen?,?,\ngroup_ask_delete_question_pre,Möchten Sie die Arbeitsgruppe ,Would you like to delete work group ,\ngroup_ask_delete_title,Arbeitsgruppe löschen,Delete work group,\ngroup_delete_confirm_msg,\"Sind Sie sicher, dass Sie diese Arbeitsgruppe löschen wollen?\",Are you sure you want to delete this work group?,\ngroup_edit_at_least_one_member_delete,löschen,delete,VERB\ngroup_edit_at_least_one_member_post,0,0,NACH dem Verb und Namen der Gruppe\ngroup_edit_at_least_one_member_pre,Eine Arbeitsgruppe muss mindestens eine Person enthalten. Ganze Arbeitsgruppe ,A work group has at least one member. Whole work group,VOR dem Verb und Namen der Gruppe\ngroup_edit_btn,Bearbeiten,Edit,\ngroup_edit_cancel,Abbrechen,Cancel,\ngroup_edit_form_new_member_login_hint,Login des neuen Mitglieds dieser Arbeitsgruppe,New work group member login,\ngroup_edit_form_new_member_login_label,User hinzufügen,Add a member,\ngroup_edit_form_save_btn,Speichern,Save,\ngroup_edit_form_title_pre,Arbeitsgruppe bearbeiten: ,Edit work group: ,\ngroup_edit_hint_remove_yourself,Achtung: Sie entfernen sich selbst aus der Arbeitsgruppe!,Attention: You are about to remove yourself from the work group!,\ngroup_edit_member,Mitglieder,Members,\ngroup_edit_name,Name,Name,\ngroup_edit_person,Person,Person,\ngroup_edit_save,Speichern,Save,\ngroup_edit_username,Benutzername,Username,\ngroup_meta_data_institutional_name,Name der Abteilungsgruppe,Division group name,\ngroup_meta_data_name,Name,Name,\ngroup_new_form_title,Neue Arbeitsgruppe erstellen,Create group,\ngroup_new_group_btn,Neue Arbeitsgruppe,New work group,\ngroup_show_edit_button,Arbeitsgruppe bearbeiten,Edit work group,\ngroup_show_members,Mitglieder,Members,\ngroup_show_permissions_use,(anwenden),(execute),\ngroup_show_permissions_view,(betrachten),(view),\ngroup_show_permissions_view_use,(betrachten und anwenden),(view and execute),\ngroup_show_vocabulary_permissions,Berechtigungen Vokabulare,Permissions vocabularies,\ngroup_toolbar_header_entrusted_resources,Mir anvertraute Medieneinträge,Entrusted media entries,\ngroup_was_deleted,Arbeitsgruppe wurde gelöscht.,Work group has been deleted.,\nhome_page_new_contents,Neue Inhalte,New items,\ninternal_groups,Arbeitsgruppen,Work groups,\nlayout_mode_grid,Raster-Ansicht,Grid view,\nlayout_mode_list,Listen-Ansicht,List view,\nlayout_mode_miniature,Miniatur-Ansicht,Miniature view,\nlayout_mode_tiles,Kachel-Ansicht,Tile view,\nlogin_box_internal,Externe,External users,\nlogin_box_title,Anmelden,Log in,\nlogin_box_login_btn,Anmelden,Log in,\nlogin_box_email_or_login,E-Mail,Email,\nlogin_box_password,Passwort,Password,\nlogin_box_rememberme,Login merken,Remember me,\nlogin_box_username,Benutzername,User name,\nmedia_entry_all_metadata_title,Alle Metadaten nach Vokabularen,All metadata by vocabulary,\nmedia_entry_ask_delete_question_pre,\"Sind Sie sicher, dass Sie folgenden Medienintrag löschen möchten: \",Are you sure you want to delete the following media entry:,\nmedia_entry_ask_delete_title,Medieneintrag löschen,Delete media entry,\nmedia_entry_back_btn,Zurück,Back,\nmedia_entry_conversion_hint,\"Diese Datei wird gerade für eine Vorschau konvertiert. Sobald dies abgeschlossen ist, finden Sie hier eine abspielbare Version.\",\"Currently the system is converting this file to a preview. As soon as the conversion is finished, you will be able to play the file here.\",\nmedia_entry_conversion_progress_post,% abgeschlossen.,% completed.,\nmedia_entry_conversion_progress_pre,Konvertierung zu ,Conversion ,\nmedia_entry_conversion_reload,\"Laden Sie diese Seite neu, um den aktuellen Stand der Konvertierung zu erfahren.\",Reload this page to display the current state of conversion.,\nmedia_entry_conversion_status_failed,Die Konvertierung ist fehlgeschlagen. Bitte wenden Sie sich an den Support.,The file conversion has failed. Please contact support.,\nmedia_entry_conversion_status_initialized,Die Konvertierung läuft. Bitte versuchen Sie es später noch einmal.,The media file is converting. Please try later.,\nmedia_entry_conversion_status_submitted,Die Konvertierung läuft. Bitte versuchen Sie es später noch einmal.,The media file is converting. Please try later.,\nmedia_entry_deleted,Dieser Medieneintrag wurde gelöscht und ist für Benutzer nicht mehr sichtbar.,This media entry has been deleted and is no longer visible to users.\nmedia_entry_delete_success,Der Medieneintrag wurde gelöscht.,Media entry has been deleted.,\nmedia_entry_duplicator_configuration_annotate_as_new_version_of_post,erstellen,,\nmedia_entry_duplicator_configuration_annotate_as_new_version_of_pre,(Experte) Hinweis zu neuer Version inkl. Verlinkung zu,(Expert) Add annotation «new version of» and link to,\nmedia_entry_duplicator_configuration_copy_meta_data,Metadaten übertragen,Copy meta data,\nmedia_entry_duplicator_configuration_copy_permissions,Zugriffsberechtigungen übertragen,Copy permissions,\nmedia_entry_duplicator_configuration_copy_relations,Zusammenhänge übertragen (übergeordnete Sets und Favoriten),Copy relations (parent collections & favorites),\nmedia_entry_duplicator_configuration_move_custom_urls,(Experte) Sprechende Adresse (URL) übernehmen,(Expert) Move comprehensible Address (URL),\nmedia_entry_duplicator_configuration_instructions,Folgende Optionen können gewählt werden:,Choose options below:,\nmedia_entry_duplicator_custom_urls_already_moved,moved to the first successful upload!,moved to the first successful upload!,\nmedia_entry_duplicator_desc_post,zugewiesen.,by selected options.,\nmedia_entry_duplicator_desc_pre,\"Die unten importierten Mediendateien bekommen die den nachfolgend gewählten Optionen entsprechenden Metadaten, Zugriffsberechtigungen, Beziehungen und weitere Einstellungen des aktuellen Medieneintrags\",\"The media file to be imported below will get assigned meta data, permissions, relations and further settings from the actual media entry\",\nmedia_entry_duplicator_md_title_suffix,(updated),(updated),\nmedia_entry_duplicator_new_version_of_label,Updated file,Updated file,\nmedia_entry_export_close,Schliessen,Close,\nmedia_entry_export_download,Exportieren,Download,\nmedia_entry_export_has_no_original,Sie verfügen für den Export der Originaldatei nicht über die notwendige Berechtigung.,You are not allowed to download the original file.,\nmedia_entry_export_no_content,Sie haben keine Zugriffsberechtigung für die Originaldatei und es steht keine Vorschau zur Verfügung.,You do not have permission to access the original file and there is no preview available.,\nmedia_entry_export_original,Original,Original,\nmedia_entry_export_original_hint,Originaldatei herunterladen.,Download original file.,\nmedia_entry_export_subtitle_audios,Audio-Dateien,Audio files,\nmedia_entry_export_subtitle_documents,Dokumente,Documents,\nmedia_entry_export_subtitle_images,Bilder,Images,\nmedia_entry_export_subtitle_videos,Video-Dateien,Video files,\nmedia_entry_export_title,Medieneintrag exportieren,Download media entry,\nmedia_entry_export_rdf_title,RDF-Export Metadaten,RDF export metadata,\nmedia_entry_export_rdf_title_hint,(experimentell),(experimental),\nmedia_entry_export_rdf_experiment_footnote,\"Struktur und Format der Daten können sich ändern. Bitte geben sie eine Rückmeldung, falls Sie diese verwenden!\",\"Data structure and format is subject to change. Please send feedback if you are using this!\",\nmedia_entry_export_checksum_title,Prüfsumme,Checksum,\nmedia_entry_export_checksum_generate,Erzeugen,Generate,\nmedia_entry_export_checksum_verify,Prüfen,Verify,\nmedia_entry_export_checksum_empty,Prüfsumme erzeugen,Generate checksum,\nmedia_entry_export_checksum_generating,Wird erzeugt…,Generating…,\nmedia_entry_export_checksum_verifying,Wird verifiziert…,Verifying…,\nmedia_entry_export_checksum_generated_at,Erzeugt am,Generated at,\nmedia_entry_export_checksum_verified_at,Geprüft am,Verified at,\nmedia_entry_export_checksum_match,Prüfsumme stimmt überein,Checksum matches,\nmedia_entry_export_checksum_mismatch,Prüfsumme stimmt nicht überein,Checksum does not match,\nmedia_entry_export_checksum_error,Fehler bei der Prüfsummen-Operation,Error during checksum operation,\nmedia_entry_file_format_not_supported_1,\"Wahrscheinlich unterstützt Ihr Browser nicht die Darstellung dieses Dateiformats, aber Sie \",\"Your browser probably does not support the file format, but you can \",\nmedia_entry_file_format_not_supported_2,können die Datei ,download the file,\nmedia_entry_file_format_not_supported_3,exportieren.,0,\nmedia_entry_file_information_title,Datei,File information,\nmedia_entry_media_import_gotodrafts,Medieneinträge vervollständigen,Complete media entries,\nmedia_entry_media_import_gotomediaentries,Weiter zu Meine Medieneinträge,Continue to My media entries,\nmedia_entry_media_import_header,Medien importieren,Media upload,\nmedia_entry_media_import_box_header_a,,,\nmedia_entry_media_import_box_header_b, Upload(s), Upload(s),\nmedia_entry_media_import_box_upload_status_waiting,Warten…,Waiting…,\nmedia_entry_media_import_box_upload_status_error,Fehler!,Error!,\nmedia_entry_media_import_box_upload_status_progress_a,Hochladen… ,Uploading… ,\nmedia_entry_media_import_box_upload_status_progress_b,%,%,\nmedia_entry_media_import_box_upload_status_processing,Verarbeiten…,Processing…,\nmedia_entry_media_import_inside,Dateien auf dieses Feld ziehen oder ,Add files by drag and drop in this field or ,\nmedia_entry_media_import_inside_nojs,Dateien auswählen,Select files,\nmedia_entry_media_import_notes_msg,\"Bilder (TIFF, JPEG, PNG) sowie Audio- und Videofiles in den gängigsten Formaten werden direkt verarbeitet und dargestellt. Bilder im CMYK-Farbraum werden nicht korrekt dargestellt. Wandeln Sie diese vor dem Importieren in RGB um.\",\"Images (TIFF, JPEG, PNG) and audio/video files in the most common formats are processed and displayed directly. Images in the CMYK color model cannot be displayed correctly, please convert to RGB before uploading.\",\nmedia_entry_media_import_notes_title,Hinweise,Hints,\nmedia_entry_media_import_select_media,Medien auswählen,Select media files,\nmedia_entry_media_import_upload_error,überschreitet maximale Grösse von 16000 Pixel,exceeds size limit of 16000 pixel,\nmedia_entry_media_import_title,\"Bilder, Videos, Audio-Dateien oder Dokumente bereitstellen.\",\"Add images, video or audio files, or other documents.\",\nmedia_entry_meta_data_edit_by_context_btn,Metadaten nach Kontexten bearbeiten,Edit metadata by context,\nmedia_entry_meta_data_edit_by_vocab_btn,Metadaten nach Vokabularen bearbeiten,Edit metadata by vocabulary,\nmedia_entry_meta_data_header_prefix,Medieneintrag editieren: ,Edit media entry: ,\nmedia_entry_more_data_title,Verantwortlichkeit und Aktivität,Responsibility and activities,\nmedia_entry_not_published_warning_msg,Bei diesem Medieneintrag fehlen noch Pflichtangaben.,Media entry still needs mandatory data.,\nmedia_entry_relations_current,Aktueller Eintrag,Current entry,\nmedia_entry_relations_hint_text,\"Der ausgewählte Medieneintrag ist mit Sets verknüpft. Diese Zusammenhänge wurden aktiv festgelegt als übergeordnet oder benachbart. Sie sehen hier sowohl eigene Sets, als auch solche, die andere Nutzer/innen mit Ihnen teilen.\",\"The selected media entry is connected to sets. These relations are actively defined as a parent, a sibling or a child relationship. The sets displayed here are your own or are shared with you by other users.\",\nmedia_entry_relations_parents_hint,Der ausgewählte Medieneintrag wurde diesen Sets hinzugefügt.,The selected media entry was added to these sets.,\nmedia_entry_relations_siblings_hint,Diese Sets wurden den gleichen Sets hinzugefügt wie der ausgewählte Medieneintrag.,These sets were added to the same sets as the selected media entry.,\nmedia_entry_select_collection_flash_result,Der Medieneintrag wurde aus %{removed_count} Set(s) entfernt und zu %{added_count} Set(s) hinzugefügt.,Media entry removed from %{removed_count} set(s) and added to %{added_count} set(s).,\nmedia_entry_siblings_section_title,Weitere Medieneinträge im selben Set,Other media entries in the same set,\nmedia_entry_siblings_parent_set,Übergeordnetes Set:,Parent set:,\nmedia_entry_tab_main,Medieneintrag,Media entry,\nmedia_entry_tab_more_data,Alle Metadaten,All metadata,\nmedia_entry_tab_permissions,Berechtigungen,Permissions,\nmedia_entry_tab_relations,Zusammenhänge,Relations,\nmedia_entry_tab_usage_data,Nutzung,Usage,\nmedia_entry_upload_btn,Importieren,Upload,\nmedia_entry_was_disfavored,Der Medieneintrag wurde von den Favoriten entfernt.,Media entry was removed from favorites.,\nmedia_entry_was_favored,Der Medieneintrag wurde zu den Favoriten hinzugefügt.,Media entry was added to favorites.,\nmeta_data_action_delete_btn,Löschen,Delete,\nmeta_data_action_edit_btn,Bearbeiten,Edit,\nmeta_data_batch_action_remove_meta_data,Werte für alle Inhalte löschen,Delete data for all content,\nmeta_data_batch_failure,Metadaten konnten nicht aktualisiert werden.,Metadata could not be updated.,\nmeta_data_batch_hint_differences,Unterschiedliche Metadaten vorhanden,Different metadata in place.,\nmeta_data_batch_hint_differences_override,\"Achtung: Bestehende Werte werden durch Änderungen überschrieben! Wenn keine Änderungen vorgenommen werden, bleiben die verschiedenen Werte erhalten.\",\"Attention: Changes will replace exiting data. If not changes are made, data will be preserved.\",\nmeta_data_batch_hint_equal_data,Gleiche Metadaten vorhanden,Same metadata in place.,\nmeta_data_batch_hint_no_data,Noch keine Metadaten vorhanden,No metadata available yet.,\nmeta_data_batch_hint_value,Werte oder Text,Values or text,\nmeta_data_batch_item_selected,Medieneintrag selektiert,Media entry selected,\nmeta_data_batch_items_selected,Medieneinträge selektiert,Media entries selected,\nmeta_data_batch_more,weitere,More,\nmeta_data_batch_some_ignored_1,(,(,\nmeta_data_batch_some_ignored_2,\" Medieneinträge wurden ignoriert, da Sie nicht über die nötigen Berechtigungen verfügen)\",\"Media entries were ignored, because you do not have the required permissions.)\",\nmeta_data_batch_success,Metadaten wurden erfolgreich aktualisiert.,metadata have been updated successfully.,\nmeta_data_batch_summary_all_post, Medieneinträge wurden gespeichert., Media entries have been saved.,NACH der Anzahl\nmeta_data_batch_summary_all_pre,Alle ,All ,VOR der Anzahl\nmeta_data_batch_summary_missing, haben fehlende Pflichtangaben, have missing mandatory data,\nmeta_data_batch_summary_published, haben ausgefüllte Pflichtfelder, have mandatory data,\nmeta_data_batch_summary_were_published, hatten bereits ausgefüllte Pflichtfelder, already had mandatory data,\nmeta_data_batch_title_post_collections, Sets gleichzeitig editieren,Edit sets at the same time,\nmeta_data_batch_title_post_media_entries, Medieneinträge gleichzeitig bearbeiten, media entries at once,\nmeta_data_batch_title_pre,Metadaten für ,Edit metadata for ,\nmeta_data_blank_value_for_required_meta_key_post,0,0,\nmeta_data_blank_value_for_required_meta_key_pre,Kein Wert vorhanden für ,No value available for,\nmeta_data_collection_batch_summary_all_post, Sets wurden gespeichert., Sets were saved.,\nmeta_data_collection_batch_summary_all_pre,Alle ,All ,\nmeta_data_delete_confirm_msg,\"Sind Sie sicher, dass Sie diese Werte löschen wollen?\",Are you sure you want to delete these data?,\nmeta_data_edit_collection_saved,Set wurde gespeichert.,Set was saved.,\nmeta_data_edit_media_entry_published,Der Medieneintrag wurde gespeichert und alle Pflichtfelder sind ausgefüllt.,Media entry was saved and mandatory data have been entered.,\nmeta_data_edit_media_entry_saved,Der Medieneintrag wurde gespeichert.,Media entry was saved.,\nmeta_data_edit_media_entry_saved_missing,\"Der Medieneintrag wurde gespeichert, aber es wurden nicht alle Pflichtfelder ausgefüllt.\",Media entry was saved but there some mandatory data are missing.,\nmeta_data_edit_more_data,Weitere Angaben,More data,\nmeta_data_form_all_data,Alle Daten,All metadata,\nmeta_data_form_cancel,Abbrechen,Cancel,\nmeta_data_form_save,Speichern,Save,\nmeta_data_form_saving,Die Metadaten werden gerade gespeichert. Dies kann einige Zeit in Anspruch nehmen. Bitte gedulden Sie sich und schliessen Sie das Fenster nicht.,Meta data are currently being saved. This will take some time. Please be patient and do not close the browser.,\nmeta_data_form_submit_btn,Speichern,Save,\nmeta_data_header_text,Werte,Data,\nmeta_data_input_date_placeholder_duration_from,von,from,\nmeta_data_input_date_placeholder_duration_to,bis,to,\nmeta_data_input_date_placeholder_text,Freie Eingabe,Free text entry,\nmeta_data_input_date_placeholder_timestamp,wird als Text gespeichert,on,\nmeta_data_input_date_type_duration,von/bis,from/to,\nmeta_data_input_date_type_text,Freie Eingabe,Free text entry,\nmeta_data_input_date_type_timestamp,am,on,\nmeta_data_input_keywords_existing,Schlagwort ist bereits vergeben.,Keyword already assigned.,\nmeta_data_input_new_group_add,Arbeitsgruppe einfügen,Add work group,\nmeta_data_input_new_group_name,Name,Name,\nmeta_data_input_new_person_add,Person einfügen,Add person,\nmeta_data_input_new_person_first_name,Vorname,First name,\nmeta_data_input_new_person_last_name,Nachname,Last name,\nmeta_data_input_new_person_pseudonym,Pseudonym,Pseudonym,\nmeta_data_input_new_person_toggle,Neue Person oder Gruppe anlegen,Add new person or work group,\nmeta_data_input_person_save,Übernehmen,Apply,\nmeta_data_input_json_err_prefix,Eingabefehler: ,Input error: ,\nmeta_data_input_json_err_no_object,Wert ist nicht vom Typ 'Object'!,Value is not an 'Object'!,\nmeta_data_meta_key_documentation_url,> Online-Hilfe,click link for details,\nmeta_data_meta_key_label,Schlüssel,Key,\nmeta_data_role_add_another_btn,Weitere Funktion hinzufügen,Add another function,\nmeta_data_role_add_btn,Funktion hinzufügen,Add a function,\nmeta_data_role_add_heading,Funktion hinzufügen zu ,Add a function to,\nmeta_data_role_choose_label,Wählen Sie eine Funktion aus der Liste,Choose a function from the list,\nmeta_data_extensible_role_choose_label,Wählen Sie eine Funktion aus der Liste oder ergänzen Sie die Liste mit der gewünschten Funktion. Mit Enter die Eingabe abschliessen.,Choose a function from the list or enter the function and press Enter,\nmeta_data_role_edit_btn,Funktion bearbeiten,Edit function,\nmeta_data_role_edit_heading,Funktion bearbeiten,Edit the function of,\nmeta_data_role_remove_btn,Funktion entfernen,Remove function,\nmeta_data_type_label,Typ,Type,\nmeta_data_value_label,Wert,Data,\nmeta_datum_media_entry_label_id,Ressourcen-ID:,Resource ID:,\nmeta_datum_media_entry_label_string,Zusatztext:,additional text:,\nmeta_datum_media_entry_err_uuid_invalid,Ungültige UUID!,Invalid UUID!,\nmeta_datum_media_entry_value_unauthorized,Hinweis: Sie haben keinen Zugriff auf diese Ressource!,Notice: You do not have access to this resource!,\nmeta_datum_media_entry_value_not_found,Hinweis: Diese Ressource konnte nicht (mehr) gefunden werden!,Notice: This resource could not be found (anymore)!,\nmeta_key_order_alphabetical,a-z,a-z,\nmeta_key_order_alphabetical_hint,Die Schlagworte dieses Metadatenfeldes sind alphabetisch sortiert.,The keywords of this metakey are sorted alphabetically.,\nmeta_key_order_custom,redaktionell,editorial,\nmeta_key_order_custom_hint,Die Schlagworte dieses Metadatenfeldes sind redaktionell sortiert.,The keywords of this metakey are sorted editorially.,\nno_content_fallback,Keine Inhalte vorhanden.,No items available.,\nno_groups_fallback,Keine Arbeitsgruppen vorhanden.,No work groups available.,\nno_keywords_fallback,Keine Schlagworte vorhanden.,No keywords available.,\nno_relations_title,Es wurden keine Zusammenhänge gefunden.,No relations found.,\nnotifications_title_transfer_responsibility,Verantwortlichkeit übertragen,Transfer responsibility,\nnotifications_message_transfer_responsibility,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{user} an Sie übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{user} to you.\",\nnotifications_message_transfer_responsibility_via_delegation,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{user} an %{viaDelegation} übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{user} to %{viaDelegation}.\",\nnotifications_message_transfer_responsibility_by_user,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{sourceDelegation} durch %{actingUser} an Sie übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{sourceDelegation} by %{actingUser} to you.\",\nnotifications_message_transfer_responsibility_via_delegation_by_user,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{sourceDelegation} durch %{actingUser} an %{viaDelegation} übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{sourceDelegation} by %{actingUser} to %{viaDelegation}.\",\nnotifications_media_entry,Medieneintrag,media entry,\nnotifications_collection,Set,set,\nnotifications_acknowledge_all,Alle Notifikationen löschen,Delete all notifications,\nnotifications_really_acknowledge_all,Wirklich alle löschen?,Really delete all?,\nnotifications_acknowledge,Löschen,Delete,\nnotifications_acknowledge_date_tooltip,Alle Notifikationen vom %{date} löschen,Delete all notifications of %{date},\nnotifications_no_notifications,Keine Einträge vorhanden,No entries present,\nnotifications_section_expand,Alle anzeigen,Show all,\nnotifications_section_collapse,Anzeige reduzieren,Reduce,\nnotifications_section_show_more,Weitere Einträge anzeigen,Show more,\npagination_nav_loadnext,Mehr laden,Load more,\npagination_nav_nextloading,Mehr Inhalte werden geladen.,More items are being loaded.,\npagination_nav_nextpage,Nächste Seite,Next page,Wo: Manuelle Paginierung (ohne Javascript-Auto-Nachladen)\npagination_nav_prevpage,Vorangehende Seite,Previous page,Wo: Manuelle Paginierung (ohne Javascript-Auto-Nachladen)\npagination_nav_thispage,Diese Seite,This page,Wo: Manuelle Paginierung (ohne Javascript-Auto-Nachladen)\npagination_prefix,Seite ,Page ,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npagination_infix, von , of ,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npagination_postfix,,,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npagination_selection_label,Seite auswählen,Select page,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npeople_toolbar_header,Ähnliche Inhalte,Related items,\npermission_entrusted_to_api_client,Sichtbar für API-Applikationen,Visible to API clients,\npermission_entrusted_to_group,Sichtbar für Arbeitsgruppen,Visible to work groups,\npermission_entrusted_to_user,Sichtbar für Nutzer/innen,Visible to users,\npermission_name_edit_metadata,Metadaten editieren,Edit metadata,\npermission_name_edit_metadata_and_relations,Metadaten editieren & Inhalte hinzufügen,Edit metadata and add items,\npermission_name_edit_permissions,Zugriffsberechtigungen ändern,Edit permissions,\npermission_name_get_full_size,Original exportieren & in PDF blättern,Download original & browse PDF,\npermission_name_get_metadata_and_previews,Betrachten,View,\npermission_name_use,Anwenden,Execute,bezieht sich auf Vokabulare!\npermission_name_view,Betrachten,View,bezieht sich auf Vokabulare!\npermission_overridden_by_public,(überschrieben durch die öffentlichen Berechtigungen),(overruled by public permissions),\npermission_subject_name_public,Internet,Internet,\npermission_subject_title_apiapps,API-Applikationen,API clients,\npermission_subject_title_groups,Gruppen,Groups,\npermission_subject_title_public,Öffentlichkeit,Public,\npermission_subject_title_users,Nutzer/innen,Users,\npermission_subject_title_users_or_delegations,Nutzer/innen / Verantwortungs-Gruppen,Users / Responsibility Groups,\npermissions_batch_success,Berechtigungen wurden erfolgreich aktualisiert.,Permissions have been updated succesfully.,\npermissions_batch_title_post, Inhalten., Items.,\npermissions_batch_title_pre,Berechtigungen ändern von ,Edit permissions of ,\npermissions_overview_yours_msg_end,\", haben gegenwärtig als Nutzer/in oder als Mitglied einer Verantwortungs-Gruppe oder Arbeitsgruppe folgende Berechtigungen:\",\", currently have the following permissions (either directly or as a member of a\nresponsibility group or as a member of a work group):\",\npermissions_overview_yours_msg_start,\"Sie, \",\"You, \",\npermissions_overview_yours_title,Ihre Berechtigungen,Your permissions,\npermissions_responsibility_title,Verantwortlichkeit,Responsibility,\npermissions_responsible_user_and_responsibility_group_title,Verantwortliche/r Nutzer/in / Verantwortungs-Gruppe,Responsible user / Responsibility group,\npermissions_responsible_user_and_responsibility_group_msg,Der/die verantwortliche/r Nutzer/in hat alle Berechtigungen zu den ausgewählten Inhalten und kann diese auch löschen.,The responsible user / responsibility group has all permissions for the selected content and can also delete it.,\npermissions_responsible_delegation_title,Verantwortungs-Gruppe,Responsibility group,\npermissions_responsible_user_title,Verantwortliche Person,Responsible user,\npermissions_table_cancel_btn,Abbrechen,Cancel,\npermissions_table_edit_btn,Bearbeiten,Edit,\npermissions_table_remove_subject_btn,Berechtigung entfernen,Remove permission,\npermissions_table_save_btn,Speichern,Save,\npermissions_table_title,Zugriffsberechtigungen,Permissions,\npermissions_transfer_responsibility_link,Verantwortlichkeit übertragen,Transfer responsibility,\nperson_edit_add_uri_btn,URI hinzufügen,Add URL,\nperson_edit_cancel_btn,Abbrechen,Cancel,\nperson_edit_editing_header,Bearbeiten,editing,\nperson_show_external_uris,Links,Links,\nperson_edit_preview,Vorschau,Preview,\nperson_edit_save_btn,Speichern,Save,\nperson_edit_name_readonly_hint,\"Hinweis: Der eigene Name kann nicht geändert werden. Bitte wenden sie sich an den Support.\",\"Notice: Your own name can not be changed .Please contact the support.\"\nperson_show_description,Kurzbiographie,Short biography,\nperson_show_edit_btn,Seite bearbeiten,Edit Page,\nperson_show_external_uris,Links,Links,\nperson_show_external_uris_autority_control,Verzeichnis(se),Register,\nperson_show_first_name,Vorname,First name,\nperson_show_last_name,Nachname,Last name,\nperson_show_only_name,Name,Name,\nperson_show_pseudonym,Pseudonym,Pseudonym,\npicture_alt_fallback,(unbekannt),(unkown),\npicture_alt_prefix,Bild: ,Picture:,Prefix für Titel von Bildern (hover-titel/Screenreader)\nrelations_parents_title,Übergeordnete Sets,Parents,\nrelations_siblings_title,Benachbarte Sets,Siblings,\nrelations_title,Zusammenhänge,Relations,\nrelease_source_history,Source History,Source History,\nrelease_info,Release Info,Release info,\nrelease_local_git_version,Lokale Git Version,Local Git version,\nresource_action_collection_create,Set erstellen,Create set,\nresource_action_collection_destroy,Set löschen,Delete set,\nresource_action_collection_disfavor,Aus Favoriten entfernen,Remove from favorites,\nresource_action_collection_edit_cover,Titelbild festlegen,Define set cover,\nresource_action_collection_edit_custom_urls,Sprechende Adressen verwalten,Manage comprehensible address,\nresource_action_collection_edit_highlight,Inhalte hervorheben,Highlight items,\nresource_action_collection_edit_metadata,Metadaten editieren,Edit metadata,\nresource_action_collection_favor,Zu Favoriten hinzufügen,Add to favorites,\nresource_action_collection_select_collection,Zu Set hinzufügen/entfernen,Add to/remove from set,\nresource_action_collection_share,Set teilen,Share set,\nresource_action_media_entry_destroy,Medieneintrag löschen,Delete media entry,\nresource_action_media_entry_disfavor,Aus Favoriten entfernen,Remove from favorites,\nresource_action_media_entry_edit_custom_urls,Sprechende Adressen verwalten,Manage comprehensible address,\nresource_action_media_entry_edit_metadata,Metadaten editieren,Edit metadata,\nresource_action_media_entry_export,Medieneintrag exportieren,Export media entry,\nresource_action_media_entry_favor,Zu Favoriten hinzufügen,Add to favorites,\nresource_action_media_entry_manage_confidential_links,Vertrauliche Links verwalten,Manage Confidential Links,\nresource_action_media_entry_select_collection,Zu Sets hinzufügen / Aus Sets entfernen,Add to/remove from set,\nresource_action_media_entry_share,Medieneintrag teilen,Share media entry,\nresource_action_media_entry_update_file,Medieneintrag ersetzen,Replace media entry,\nresource_action_more_actions,Weitere Aktionen,Further actions,\nresource_action_show_in_admin,Zeige im Admin-Interface,Show in Admin Interface,\nresource_ask_delete_cancel,Abbrechen,Cancel,\nresource_ask_delete_ok,Löschen,Delete,\nresource_ask_delete_question_post,?,?,\nresource_meta_data_copyright_notice,Rechte am geistigen Eigentum,Copyright notice,\nresource_meta_data_date,Datierung,Date,\nresource_meta_data_description,Beschreibung,Description,\nresource_meta_data_document_type,Dokumenttyp,Type of document,\nresource_meta_data_fallback,Es sind keine Metadaten zu diesem Kontext bereitgestellt.,There are no metadata related to this context.,\nresource_meta_data_has_validation_errors,Es gibt fehlerhafte Eingabefelder.,There are erroneously entry fields.,\"Wo: Meldung wenn Metadaten fehlerhaft, z.B. fehlendes Pflichtfeld\"\nresource_meta_data_keywords,Schlagworte,Keywords,\nresource_meta_data_resource_type,Medientyp,Media type,\nresource_meta_data_responsible,Verantwortliche/r Nutzer/in,Responsible user,\nresource_meta_data_saved_filter,Gespeicherter Filter,Saved filter,\nresource_meta_data_title,Titel,Title,\nresource_select_collection_cancel,Abbrechen,Cancel,\nresource_select_collection_clear,Löschen,Clear,\nresource_select_collection_has_more,Es gibt noch weitere Resultate. Bitte Suche verfeinern.,There are more results. Please refine the search.,\nresource_select_collection_hint_more,Es wurden noch weitere Sets gefunden. Bitte verfeinern Sie Ihre Suche.,Additional sets were found. Please refine your search.,\nresource_select_collection_new,Neue,New,\nresource_select_collection_non_assigned,Inhalt ist noch keinem Set zugewiesen.,Item is not yet related to any set.,\nresource_select_collection_non_found,Zu dieser Suche wurde kein Set gefunden.,No set was found.,\nresource_select_collection_save,Speichern,Save,\nresource_select_collection_search,Suchen,Search,\nresource_select_collection_search_placeholder,Suche,Search,\nresource_select_collection_title,Zu Set hinzufügen/entfernen,Add to/remove from set,\nresource_thumbnail_contents,Inhalte,Items,\nresource_thumbnail_sets,Sets,Sets,\nresources_box_batch_actions_addalltoclipboard_1,Alle ,Add all ,\nresources_box_batch_actions_addalltoclipboard_2, zur Stapelverarbeitung hinzufügen, to batch processing,\nresources_box_batch_actions_addselectedtoclipboard,Ausgewählte zur Stapelverarbeitung hinzufügen,Add selected to batch processing,\nresources_box_batch_actions_addtoset,Ausgewählte zu Set hinzufügen,Add selected to set,\nresources_box_batch_actions_clear_clipboard,Stapelverarbeitung leeren,Empty batch processing,\nresources_box_batch_actions_delete,Ausgewählte löschen,Delete selected,\nresources_box_batch_actions_edit,Metadaten von Medieneinträgen editieren,Edit metadata for media entries,\nresources_box_batch_actions_edit_title,Titel von Medieneinträgen editieren,Edit titles of media entries,\nresources_box_batch_actions_edit_all_collections,Metadaten von allen Sets editieren,Edit metadata of all sets at once,\nresources_box_batch_actions_edit_all_media_entries,Metadaten von allen Medieneinträgen editieren,Edit metadata of all media entries at once,\nresources_box_batch_actions_edit_sets,Metadaten von Sets editieren,Edit metadata of sets,\nresources_box_batch_actions_managepermissions,Berechtigungen von Medieneinträgen editieren,Edit permissions for media entries,\nresources_box_batch_actions_menu_title,Aktionen,Actions,\nresources_box_batch_actions_removefromclipboard,Ausgewählte aus der Stapelverarbeitung entfernen,Remove selected from batch processing,\nresources_box_batch_actions_removefromset,Aus Set entfernen,Remove from set,\nresources_box_batch_actions_sets_managepermissions,Berechtigungen von Sets editieren,Edit permissions for sets,\nresources_box_batch_actions_transfer_responsibility_entries,Verantwortlichkeit von Medieneinträgen übertragen,Transfer responsibility of media entries,\nresources_box_batch_actions_transfer_responsibility_sets,Verantwortlichkeit von Sets übertragen,Transfer responsibility of sets,\nresources_box_deselect_all,Alle abwählen,Deselect all,\nresources_box_filter,Filtern,Filter,\nresources_box_filters_note_post,\"aus, um weitere Filterkriterien anwenden zu können.\",\"in the Action bar to see more filter options.\",\nresources_box_filters_note_pre,Wählen Sie in der Aktionsleiste,Please select,\nresources_box_filters_note_or,oder,or,\nresources_box_new_search,Neue Suche,New search,\nresources_box_no_content,Keine Inhalte verfügbar,No items available.,\nresources_box_no_content_but_sets_1,Es gibt keine Medieneinträge für diese Suche. Es wurden aber ,There are no media entries related to this search process. But ,\nresources_box_no_content_but_sets_2,Sets,sets,\nresources_box_no_content_but_sets_3, gefunden., have been found.,\nresources_box_reset_filter,Filter zurücksetzen,Reset filter,\nresources_box_select_all,Alle auswählen,Select all,\nresources_box_selection_limit_ok,Ok,Ok,\nresources_box_selection_limit_page_1,\"Die Seite kann nicht selektiert werden, da sonst die maximale Anzahl von \",This page cannot be selected because otherwise the maximum number of,\nresources_box_selection_limit_page_2, ausgewählten Inhalten überstiegen würde., pages would be exceeded.,\nresources_box_selection_limit_single_1,\"Der Inhalt kann nicht selektiert werden, da sonst die maximale Anzahl von \",\"This item can not be selected, because otherwise the maximum number of\",\nresources_box_selection_limit_single_2, ausgewählten Inhalten überstiegen würde.,selected items would be exceeded.,\nresources_box_selection_remove_selection,Auswahl entfernen,Remove selection,\nresources_box_selection_select,Auswählen,Select,\nresources_box_title_count_post,Inhalte,Items,\nresources_box_info_header_no_system_groups,In dieser Auflistung werden %{system_groups_name} nicht berücksichtigt.,%{system_groups_name} are not taken into account.,\nresources_box_info_header_system_groups_name,Systemgruppen,System groups,\nresources_section_show_all,Alle anzeigen →,Show all →,\nresources_type_all,Alle,All,\nresponsibility_groups,Verantwortungs-Gruppen,Responsibility groups,\nsearch_btn_search,Suchen,Search,\nsearch_filename,Filename,File name,\nsearch_full_text,Volltext,Full text,\nsection_title_collections,Meine Sets,My sets,\nsection_title_groups,Meine Gruppen,My groups,\nsection_title_keywords,Meine Schlagworte,My keywords,\nsection_title_media_entries,Meine Medieneinträge,My media entries,\nsection_title_tokens,Meine Tokens,My tokens,\nsession_expiring_soon,Sie werden in weniger als %{minutes} Minuten ausgeloggt. Speichern Sie Ihre Eingaben und melden sich neu an.,You will be logged out in less than %{minutes} minutes. Save your input and log in again.\nshare_back_to_collection,Zurück zum Set,Back to the set,\nshare_back_to_media_entry,Zurück zum Medieneintrag,Back to the media entry,\nshare_close,Schliessen,Close,\nshare_custom_url_hint_collection,\"Falls eine «sprechende Adresse» definiert wurde und Sie diese nutzen möchten (z.B. …/annas-neueste-arbeiten), dann verwenden Sie folgende URL:\",\"If a \"comprehensible address\" has been defined and you would like to use it (e.g., …/latest-works-by-anna), use the following URL:\",\nshare_custom_url_hint_media_entry,\"Falls eine «sprechende Adresse» definiert wurde und Sie diese nutzen möchten (z.B. …/annas-neueste-arbeit), dann verwenden Sie folgende URL:\",\"If a \"comprehensible address\" has been defined and you would like to use it (e.g., …/latest-work-by-anna), use the following URL:\",\nshare_custom_url_none_available,Es ist keine sprechende Adresse angelegt.,No comprehensible address has been defined.,\nshare_custom_url_subtitle,Sprechende Adresse teilen,Share comprehensible address,\nshare_embed_hint_iframe,\"Falls dies von Ihrem gewünschen System nicht unterstützt wird, kopieren Sie den nachfolgenden iFrame-Code und fügen diesen als HTML-Element in das gewünschte System ein.\",\"If your desired system does not support this, copy the following iFrame code and paste it into the desired system as an HTML element.\",\nshare_embed_hint_iframe_code,\"IFrame-Code\",\"IFrame Code\",\nshare_embed_hint_oembed,\"Viele Content Management Systeme lassen einfaches Einbetten von Inhalten via oEmbed zu. Dazu kopieren Sie die URL oben und fügen sie in ein Inhaltselement ein.\",\"Many content management systems allow easy embedding of content via oEmbed. To do so, copy the URL above and paste it into a content element.\",\nshare_embed_hint_subtitle,\"Medieneintrag einbetten\",\"Embed Media Entry\",\nshare_title_collection,Set teilen,Share set,\nshare_title_media_entry,Medieneintrag teilen,Share media entry,\nshare_uuid_url_hint_collection,\"Möchten Sie dieses Set teilen? Verwenden Sie dazu folgende URL.\",\"Would you like to share this set? Use the following URL.\",\nshare_uuid_url_hint_exporter,Auch für den Export mit dem Madek-Exporter wird diese URL benötigt.,This URL is also required for exporting with the Madek exporter.,\nshare_uuid_url_hint_media_entry,\"Möchten Sie diesen Medieneintrag teilen? Verwenden Sie dazu folgende URL.\",\"Would you like to share this media entry? Use the following URL.\",\nshare_uuid_url_subtitle,URL teilen,Share URL,\n\n\nsettings_notifications_title,Notifikationen,Notifications,\nsettings_notifications_info1,Notifikationen werden unter %{notifications} aufgeführt und optional per E-Mail verschickt.,Notifications are listed under %{notifications} and optionally sent via email.,\nsettings_notifications_info2,Notifikationen werden nach 6 Monaten gelöscht,Notifications will be removed after 6 months,\nsettings_notifications_info3,Die Einstellungen für die E-Mail-Notifikationen finden Sie nachstehend:,Choose your settings for e-mail notifications below:,\nsettings_notifications_email_label,An folgende E-Mail-Adresse bekommen Sie Notifikationen zugestellt:,Notifications will be sent to the following e-mail address:,\nsettings_notifications_locale_label,Die E-Mails werden in folgender Sprache verschickt:,You will receive emails in,\nsettings_notifications_locale_de,Deutsch,German,\nsettings_notifications_locale_en,Englisch,English,\nsettings_notifications_title_transfer_responsibility,Verantwortlichkeit übertragen,Transfer responsibility,\nsettings_notifications_title_weather_report,Wetterbericht,Weather report,\nsettings_notifications_email_frequency_label,In welcher Häufigkeit möchten Sie E-Mails erhalten?,Frequency of email notification:,\nsettings_notifications_email_frequency_immediately,sofort,immediately,\nsettings_notifications_email_frequency_daily,täglich (Zusammenfassung),daily (digest),\nsettings_notifications_email_frequency_weekly,wöchentlich (Zusammenfassung),weekly (digest),\nsettings_notifications_email_frequency_never,keine,none,\nsettings_advanced_functions_title,Erweiterte Funktionen,Advanced functions,\nsettings_show_all_data_tab_in_edit_mode_label,Reiter «Alle Daten» im Bearbeitungsmodus einblenden,Show the «All metadata» Tab in edit mode,\nsettings_save_changes,Einstellungen speichern,Save settings,\nsettings_saved_changes,Einstellungen wurden gespeichert,Settings have been saved,\nsitemap_activities,Aktivitäten,Activities,\nsitemap_notifications,Notifikationen,Notifications,\nsitemap_api,API,API,\nsitemap_clipboard,Stapelverarbeitung,Batch processing,\nsitemap_collections,Sets,Sets,\nsitemap_entries,Medieneinträge,Media entries,\nsitemap_explore,Erkunden,Explore,\nsitemap_filter_sets,Filtersets,Filter sets,\nsitemap_help,Hilfe,Support,\nsitemap_media_entries,Medieneinträge,Media entries,\nsitemap_metakey,Metakey,Metakey,\nsitemap_metakey_id,Metakey-ID,Metakey ID,\nsitemap_my_archive,Mein Archiv,My archive,\nsitemap_my_clipboard,Stapelverarbeitung,Batch processing,\nsitemap_my_content_collections,Sets,Sets,\nsitemap_my_content_media_entries,Medieneinträge,Media entries,\nsitemap_my_delegated_collections,Sets in gemeinsamer Verantwortung,Sets with joint responsibility,\nsitemap_my_delegated_media_entries,Medieneinträge in gemeinsamer Verantwortung,Media entries with joint responsibility,\nsitemap_my_entrusted_collections,Mir anvertraute Sets,My entrusted sets,\nsitemap_my_entrusted_filter_sets,Mir anvertraute Filtersets,My entrusted filter sets,\nsitemap_my_entrusted_media_entries,Mir anvertraute Medieneinträge,My entrusted media entries,\nsitemap_my_favorite_collections,Favoriten-Sets,Favorite sets,\nsitemap_my_favorite_media_entries,Favoriten-Medieneinträge,Favorite media entries,\nsitemap_my_groups,Gruppen,Groups,\nsitemap_my_latest_imports,Letzte Importe,Last imports,\nsitemap_my_unpublished,Unvollständige Medieneinträge,Incomplete media entries,\nsitemap_my_used_keywords,Schlagworte,Keywords,\nsitemap_search,Suche,Search,\nsitemap_tokens,Tokens,Tokens,\nsitemap_settings,Einstellungen,Settings,\nsitemap_vocabularies,Vokabulare,Vocabularies,\nconfidential_links_help_title,Hinweise,Hints,\nsitemap_vocabulary,Vokabular,Vocabulary,\nconfidential_links_help_text,\"Vertrauliche Links ermöglichen den direkten Zugriff auf Medieneinträge, auch wenn sie nicht öffentlich sichtbar sind.\nDiese Links ermöglichen somit auch Benutzern ohne Login einen Zugang zum Medieneintrag. Binden Sie Vertrauliche Links nicht in öffentlich zugängliche Webseiten ein, sonst werden die regulären Zugriffsberechtigungen wirkungslos.\nVertrauliche Links können nur vom Verantwortlichen eines Medieneintrags erstellt und zurückgezogen werden. Die Links können mit einem Verfallsdatum erstellt oder zeitlich unbeschränkt erstellt werden.\",\"Confidential Links can be used to enable access to Entries without making them publicly visible.\nThese Links therefore also make it possible to share Entries with Users that don't have a login. Please do not share or embed Confidential Links onto publicly accessible websites, because it would render the regular permission settings useless.\nConfidential Links can only be created by the responsible user of an Entry. They can be manually revoked at any time, and optionally be set to expire automatically after a set day.\",\nconfidential_links_header,Vertrauliche Links,Confidential Links,\nconfidential_links_title_pre,Vertrauliche Links für ,Confidential Links for ,\nconfidential_links_title_post,Zurück zum Set,Back to the set,\nconfidential_links_back_to_media_entry,Zurück zum Medieneintrag,Back to the media entry,\nconfidential_links_create_title,Neuen Vertraulichen Link erstellen,Create a new Confidential Link,\nconfidential_links_create_description,Beschreibung,Description,\nconfidential_links_create_submit,Vertraulichen Link erstellen,Create Confidential Link,\nconfidential_links_create_set_expiration_date,Ablaufdatum einstellen,Set expiration date,\nconfidential_links_create_cancel,Abbrechen,Cancel,\nconfidential_links_created_title,Neuer Vertraulicher Link erstellt,New Confidential Link created,\nconfidential_links_created_back_btn,Zurück zu allen Vertraulichen Links,Go back to all Confidential Links,\nconfidential_links_created_notice,Vertraulicher Link erstellt!,Confidential Link was created!,\nconfidential_links_show_link_for_copy,Link zum kopieren:,Link to copy:,\nconfidential_links_show_embedcode_for_copy,Embed-Code zum kopieren:,Embed-Code to copy:,\nconfidential_links_show_embed_link,Embed-Link:,Embed-link:,\nconfidential_links_show_embed_code_iframe,HTML-Code/iframe:,HTML-code/iframe:,\nconfidential_links_list_created_hint_pre,Erstellt: ,Created: ,\nconfidential_links_list_expires_hint_pre,Ablaufdatum: ,Expiration date: ,\nconfidential_links_list_no_expiry,Nie,Never,\nconfidential_links_list_new_button,Neuen Vertraulichen Link erstellen,Add a new Confidential Link,\nconfidential_links_list_no_description,(Keine Beschreibung),(No description),\nconfidential_links_list_revoke_btn_hint,Zurückziehen,Revoke,\nconfidential_links_list_revoke_confirm,\"Sind Sie sicher, dass Sie diesen Vertraulichen Link zurückziehen wollen?\",Are you sure you want to revoke this Confidential Link?,\nconfidential_links_list_revoked_title,Abgelaufene und zurückgezogene Vertrauliche Links,Expired and revoked Confidential Links,\nconfidential_links_list_show_url,Link anzeigen,Show Link,\nconfidential_links_list_copy_url,Vertraulichen Link kopieren,Copy Confidential Link,\nconfidential_links_head_id,ID,ID,\nconfidential_links_head_name,Name,Name,\nconfidential_links_head_token,Token,Token,\nconfidential_links_head_valid_since,Erstellt am,Created at,\nconfidential_links_head_valid_until,Läuft ab,Expires at,\nconfidential_links_show_title,Vertraulicher Link,Confidential Link,\nconfidential_links_access_notice,Dieser Medieneintrag wurde über einen Vertraulichen Link aufgerufen. Die URL dieser Seite darf nur einem eingeschränkten Personenkreis zugänglich sein.,This Entry was accessed via a Confidential Link. The URL of this page shall only be made accessible to a limited group of people.,\ntransfer_responsibility_batch_success_collection_1,Sie haben für ,You have successfully transferred responsibility for ,\ntransfer_responsibility_batch_success_collection_1a, Set , set ,\ntransfer_responsibility_batch_success_collection_1b, Sets , sets ,\ntransfer_responsibility_batch_success_collection_2, die Verantwortlichkeit erfolgreich übertragen.,0,\ntransfer_responsibility_batch_success_media_entry_1,Sie haben für ,You have successfully transferred responsibility for ,\ntransfer_responsibility_batch_success_media_entry_1a, Medieneintrag , media entry,\ntransfer_responsibility_batch_success_media_entry_1b, Medieneinträge, media entries,\ntransfer_responsibility_batch_success_media_entry_2, die Verantwortlichkeit erfolgreich übertragen.,0,\ntransfer_responsibility_cancel,Abbrechen,Cancel,\ntransfer_responsibility_currently_responsible,Bisher verantwortlich,Currently responsible,\ntransfer_responsibility_to,Verantwortlichkeit übertragen auf,Transfer responsibility to,\ntransfer_responsibility_for_1_media_entry,für 1 Medieneintrag,for 1 media entry,\ntransfer_responsibility_for_n_media_entries,für %{nofResources} Medieneinträge,for %{nofResources} media entries,\ntransfer_responsibility_for_1_collection,für 1 Set,for %{nofResources} set,\ntransfer_responsibility_for_n_collections,für %{nofResources} Sets,for %{nofResources} sets,\ntransfer_responsibility_multiple_will_receive,Die bisher Verantwortlichen behalten folgende Berechtigungen:,The ones currently responsible are retaining the following permissions:,\ntransfer_responsibility_single_will_receive,%{name} behält folgende Berechtigungen:,%{name} is retaining the following permissions:,\ntransfer_responsibility_submit,Übertragen,Transfer,\ntransfer_responsibility_success_collection,Sie haben die Verantwortlichkeit für das Set erfolgreich übertragen.,You have successfully transferred responsibility for the set.,\ntransfer_responsibility_success_media_entry,Sie haben die Verantwortlichkeit für den Medieneintrag erfolgreich übertragen.,You have successfully transferred responsibility for the media entry.,\ntransfer_responsibility_title_single,Verantwortlichkeit übertragen,Transfer responsibility,\ntransfer_responsibility_title_batch,Verantwortlichkeit %{forNResources} übertragen,Transfer responsibility %{forNResources},\ntransfer_responsibility_you_will_receive,\"Sie, %{name}, behalten folgende Berechtigungen:\",\"You, %{name}, are retaining the following permissions:\",\nusage_data_created_at,Erstellt am,Created on,\nusage_data_import_at,Importiert am,Imported on,\nusage_data_import_by,Importiert durch,Imported by,\nusage_data_last_changes_empty,Es wurden noch keine Änderungen festgehalten.,No changes have been recorded yet.,\nusage_data_last_changes_title,Letzte Änderungen der Metadaten,Last change of metadata,\nusage_data_relations_children,Set enthält,Set is related to,\nusage_data_relations_parents,Übergeordnete Sets,Parent sets,\nusage_data_relations_title,Zusammenhänge,Relations,\nusage_data_responsibility_title,Verantwortlichkeit und Aktivitäten,Responsibility and activities,\nusage_data_responsible,Verantwortliche/r Nutzer/in / Verantwortungs-Gruppe,Responsible user / responsibility group,\nusage_terms_accept_btn,Nutzungsbedingungen akzeptieren,Accept usage terms,\nusage_terms_reject_btn,Ablehnen,Reject usage terms,\nuser_menu_admin_mode_toogle_off,Admin-Modus beenden,Stop admin mode,\nuser_menu_admin_mode_toogle_on,In Admin-Modus wechseln,Switch to admin mode,\nuser_menu_admin_ui,Admin-Interface öffnen,Open admin interface,\nuser_menu_login_btn,Anmelden,Log in,\nuser_menu_logout_btn,Abmelden,Log out,\nuser_menu_my_content_collections,Meine Sets,My sets,\nuser_menu_my_content_media_entries,Meine Medieneinträge,My media entries,\nuser_menu_my_favorite_collections,Favoriten - Sets,Favorites - sets,\nuser_menu_my_favorite_media_entries,Favoriten - Medieneinträge,Favorites - media entries,\nuser_menu_my_groups,Meine Gruppen,My groups,\nuser_menu_my_person,Meine Person,My person,\nuser_menu_upload,Medien importieren,Upload media,\nuser_name_deactivated,[Gelöschter User],[Deleted user],\nvocabularies_all,Alle Vokabulare,All vocabularies,\nvocabularies_contents_hint_1,Alle Inhalte mit Metadaten des Vokabulars ,All items with metadata related to the vocabulary,\nvocabularies_contents_hint_2,\". Sie sehen nur Inhalte, für die Sie berechtigt sind.\",. You can see only items you have permissions for.,\nvocabularies_keywords_hint_1,Alle im Vokabular ,All keywords contained in the vocabulary ,\nvocabularies_keywords_hint_2, enthaltenen Schlagworte und die dazugehörenden Metadatenfelder., and related meta data fields.,\nvocabularies_no_description,(Keine Beschreibung),(No description available),\nvocabularies_no_keywords,Keine Schlagworte vorhanden.,No keywords available.,\nvocabularies_no_people,Keine Personen vorhanden.,Keine Personen vorhanden.,\nvocabularies_people_hint_1,Alle im Vokabular ,Alle im Vokabular ,\nvocabularies_people_hint_2, enthaltenen Personen und die dazugehörenden Metadatenfelder., enthaltenen Personen und die dazugehörenden Metadatenfelder.,\nvocabularies_tabs_contents,Inhalte,Items,\nvocabularies_tabs_keywords,Schlagworte,Keywords,\nvocabularies_tabs_people,Personen,People,\nvocabularies_tabs_permissions,Berechtigungen,Permissions,\nvocabularies_tabs_vocabulary,Vokabular,Vocabulary,\nvocabulary_permissions_hint1,\"Für dieses Vokabular können die Berechtigungen \"\"Betrachten\"\" und \"\"Anwenden\"\" vergeben werden. Wenn Sie Mitglied einer berechtigten Arbeitsgruppe sind, können Sie weitere Personen zu dieser hinzufügen oder daraus entfernen. Bitte überlegen Sie Änderungen gut, da über Arbeitsgruppen auch weitere Berechtigungen gesteuert werden.\",\"This vocabulary can be managed with the permissions \"\"View\"\" and \"\"Execute\"\". If you are member of a work group which owns permissions, you are able to add or remove further users. Think carefully before you make changes to work groups as this may affect other permissions.\",\nvocabulary_permissions_hint2,\"Weitere Berechtigungen für Personen, Arbeitsgruppen, API-Applikationen oder die Öffentlichkeit werden durch den Administrator vergeben – bitte wenden Sie sich an den Support.\",\"Further permissions for persons, work groups, API clients or public usage are granted by the administrator. Please contact  support.\",\nvocabulary_term_info_contents,Inhalte,Items,\nvocabulary_term_info_description,Beschreibung,Description,\nvocabulary_term_info_rdfclass,Typ,Type,\nvocabulary_term_info_term,Begriff,Term,\nvocabulary_term_info_url,URL,URL,\nvocabulary_term_info_urls,URLs,URLs,\nworkgroup_link_to_contents_text,Inhalte,Items,\nworkgroup_link_to_contents_title,Inhalte dieser Arbeitsgruppe anzeigen,Show items of this work group,\nworkgroup_members_table_is_member,Mitglied?,Member?,\nworkgroup_members_table_login,Login,Login,\nworkgroup_members_table_title,Mitglieder,Members,\nmedia_entry_notice_new_versions,Für diesen Medieneintrag sind neuere Versionen vorhanden:,Newer versions are available for this media entry:,\nread_more_button,\"Mehr anzeigen\",\"Show more\",\nread_less_button,\"Weniger anzeigen\",\"Show less\",\nmedia_player_settings_title,Wiedergabe,Playback,\nmedia_player_media_config,Player-Konfiguration (JSON) / DEV-MODE,Player config (JSON) / DEV-MODE,\nmedia_player_media_config_hint_pre,\"JSON-Konfiguration für \",JSON configuration for ,\nmedia_player_media_config_hint_post,\": headers, overlays (stop_media_during_overlay true pausiert die Wiedergabe, solange das Overlay sichtbar ist) VTT-Dateien für Untertitel/Kapitel werden unten hochgeladen.\",\": headers, overlays (stop_media_during_overlay true pauses playback while the overlay is visible) VTT files for subtitles and chapters are uploaded below.\",\nmedia_player_save_config,Konfiguration speichern,Save config,\nmedia_player_config_invalid,Die Konfiguration ist kein gültiges JSON-Objekt.,Config is not a valid JSON object.,\nmedia_player_subtitles,Untertitel und Kapitel,Subtitles and chapters,\nmedia_player_no_subtitles,Keine VTT-Dateien.,No VTT files.,\nmedia_player_uploaded_subtitles,Hochgeladene Untertitel,Uploaded subtitles,\nmedia_player_language,Sprache,Language,\nmedia_player_label,Bezeichnung,Label,\nmedia_player_kind,Art,Kind,\nmedia_player_kind_hint,\"Untertitel sind der gesprochene Text. Kapitel sind Abschnitte auf der Zeitleiste.\",\"Subtitles are the spoken text. Chapters are sections on the timeline.\",\nmedia_player_kind_subtitles,Untertitel,Subtitles,\nmedia_player_kind_chapters,Kapitel,Chapters,\nmedia_player_default,Standard,Default,\nmedia_player_default_hint,\"Die Datei in der aktuellen Sprache der Oberfläche (Deutsch oder Englisch) wird vorausgewählt.\",\"The file in the current interface language (German or English) is selected.\",\nmedia_player_file,VTT-Datei,VTT file,\nmedia_player_choose_file,Datei auswählen,Choose file,\nmedia_player_no_file,Keine ausgewählt,No file chosen,\nmedia_player_upload,Hochladen,Upload,\nmedia_player_delete,Löschen,Delete,\nmedia_player_delete_confirm,Diese VTT-Datei löschen?,Delete this VTT file?,\n");
		translations = Object.fromEntries(translationsList.map(function(item) {
			return [item.lang, item.mapping];
		}));
	}));
	//#endregion
	//#region node_modules/classnames/index.js
	var require_classnames = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/*!
		Copyright (c) 2016 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
		*/
		(function() {
			"use strict";
			var hasOwn = {}.hasOwnProperty;
			function classNames() {
				var classes = [];
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
					var argType = typeof arg;
					if (argType === "string" || argType === "number") classes.push(arg);
					else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg));
					else if (argType === "object") {
						for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
					}
				}
				return classes.join(" ");
			}
			if (typeof module !== "undefined" && module.exports) module.exports = classNames;
			else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
				return classNames;
			});
			else window.classNames = classNames;
		})();
	}));
	//#endregion
	//#region node_modules/es-errors/type.js
	var require_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./type')} */
		module.exports = TypeError;
	}));
	//#endregion
	//#region (ignored) node_modules/side-channel/node_modules/object-inspect/util.inspect.js
	var require_util_inspect$3 = /* @__PURE__ */ __commonJSMin((() => {}));
	//#endregion
	//#region node_modules/side-channel/node_modules/object-inspect/index.js
	var require_object_inspect$3 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasMap = typeof Map === "function" && Map.prototype;
		var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
		var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
		var mapForEach = hasMap && Map.prototype.forEach;
		var hasSet = typeof Set === "function" && Set.prototype;
		var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
		var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
		var setForEach = hasSet && Set.prototype.forEach;
		var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
		var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
		var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
		var booleanValueOf = Boolean.prototype.valueOf;
		var objectToString = Object.prototype.toString;
		var functionToString = Function.prototype.toString;
		var $match = String.prototype.match;
		var $slice = String.prototype.slice;
		var $replace = String.prototype.replace;
		var $toUpperCase = String.prototype.toUpperCase;
		var $toLowerCase = String.prototype.toLowerCase;
		var $test = RegExp.prototype.test;
		var $concat = Array.prototype.concat;
		var $join = Array.prototype.join;
		var $arrSlice = Array.prototype.slice;
		var $floor = Math.floor;
		var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
		var gOPS = Object.getOwnPropertySymbols;
		var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
		var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
		var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
			return O.__proto__;
		} : null);
		function addNumericSeparator(num, str) {
			if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
			var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
			if (typeof num === "number") {
				var int = num < 0 ? -$floor(-num) : $floor(num);
				if (int !== num) {
					var intStr = String(int);
					var dec = $slice.call(str, intStr.length + 1);
					return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
				}
			}
			return $replace.call(str, sepRegex, "$&_");
		}
		var utilInspect = require_util_inspect$3();
		var inspectCustom = utilInspect.custom;
		var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
		var quotes = {
			__proto__: null,
			"double": "\"",
			single: "'"
		};
		var quoteREs = {
			__proto__: null,
			"double": /(["\\])/g,
			single: /(['\\])/g
		};
		module.exports = function inspect_(obj, options, depth, seen) {
			var opts = options || {};
			if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
			if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
			var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
			if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
			if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
			if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
			var numericSeparator = opts.numericSeparator;
			if (typeof obj === "undefined") return "undefined";
			if (obj === null) return "null";
			if (typeof obj === "boolean") return obj ? "true" : "false";
			if (typeof obj === "string") return inspectString(obj, opts);
			if (typeof obj === "number") {
				if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
				var str = String(obj);
				return numericSeparator ? addNumericSeparator(obj, str) : str;
			}
			if (typeof obj === "bigint") {
				var bigIntStr = String(obj) + "n";
				return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
			}
			var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
			if (typeof depth === "undefined") depth = 0;
			if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
			var indent = getIndent(opts, depth);
			if (typeof seen === "undefined") seen = [];
			else if (indexOf(seen, obj) >= 0) return "[Circular]";
			function inspect(value, from, noIndent) {
				if (from) {
					seen = $arrSlice.call(seen);
					seen.push(from);
				}
				if (noIndent) {
					var newOpts = { depth: opts.depth };
					if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
					return inspect_(value, newOpts, depth + 1, seen);
				}
				return inspect_(value, opts, depth + 1, seen);
			}
			if (typeof obj === "function" && !isRegExp(obj)) {
				var name = nameOf(obj);
				var keys = arrObjKeys(obj, inspect);
				return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
			}
			if (isSymbol(obj)) {
				var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
				return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
			}
			if (isElement(obj)) {
				var s = "<" + $toLowerCase.call(String(obj.nodeName));
				var attrs = obj.attributes || [];
				for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
				s += ">";
				if (obj.childNodes && obj.childNodes.length) s += "...";
				s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
				return s;
			}
			if (isArray(obj)) {
				if (obj.length === 0) return "[]";
				var xs = arrObjKeys(obj, inspect);
				if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
				return "[ " + $join.call(xs, ", ") + " ]";
			}
			if (isError(obj)) {
				var parts = arrObjKeys(obj, inspect);
				if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
				if (parts.length === 0) return "[" + String(obj) + "]";
				return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
			}
			if (typeof obj === "object" && customInspect) {
				if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
				else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
			}
			if (isMap(obj)) {
				var mapParts = [];
				if (mapForEach) mapForEach.call(obj, function(value, key) {
					mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
				});
				return collectionOf("Map", mapSize.call(obj), mapParts, indent);
			}
			if (isSet(obj)) {
				var setParts = [];
				if (setForEach) setForEach.call(obj, function(value) {
					setParts.push(inspect(value, obj));
				});
				return collectionOf("Set", setSize.call(obj), setParts, indent);
			}
			if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
			if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
			if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
			if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
			if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
			if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
			if (isString(obj)) return markBoxed(inspect(String(obj)));
			if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
			if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
			if (!isDate(obj) && !isRegExp(obj)) {
				var ys = arrObjKeys(obj, inspect);
				var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
				var protoTag = obj instanceof Object ? "" : "null prototype";
				var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
				var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
				if (ys.length === 0) return tag + "{}";
				if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
				return tag + "{ " + $join.call(ys, ", ") + " }";
			}
			return String(obj);
		};
		function wrapQuotes(s, defaultStyle, opts) {
			var quoteChar = quotes[opts.quoteStyle || defaultStyle];
			return quoteChar + s + quoteChar;
		}
		function quote(s) {
			return $replace.call(String(s), /"/g, "&quot;");
		}
		function canTrustToString(obj) {
			return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
		}
		function isArray(obj) {
			return toStr(obj) === "[object Array]" && canTrustToString(obj);
		}
		function isDate(obj) {
			return toStr(obj) === "[object Date]" && canTrustToString(obj);
		}
		function isRegExp(obj) {
			return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
		}
		function isError(obj) {
			return toStr(obj) === "[object Error]" && canTrustToString(obj);
		}
		function isString(obj) {
			return toStr(obj) === "[object String]" && canTrustToString(obj);
		}
		function isNumber(obj) {
			return toStr(obj) === "[object Number]" && canTrustToString(obj);
		}
		function isBoolean(obj) {
			return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
		}
		function isSymbol(obj) {
			if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
			if (typeof obj === "symbol") return true;
			if (!obj || typeof obj !== "object" || !symToString) return false;
			try {
				symToString.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		function isBigInt(obj) {
			if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
			try {
				bigIntValueOf.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty || function(key) {
			return key in this;
		};
		function has(obj, key) {
			return hasOwn.call(obj, key);
		}
		function toStr(obj) {
			return objectToString.call(obj);
		}
		function nameOf(f) {
			if (f.name) return f.name;
			var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
			if (m) return m[1];
			return null;
		}
		function indexOf(xs, x) {
			if (xs.indexOf) return xs.indexOf(x);
			for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
			return -1;
		}
		function isMap(x) {
			if (!mapSize || !x || typeof x !== "object") return false;
			try {
				mapSize.call(x);
				try {
					setSize.call(x);
				} catch (s) {
					return true;
				}
				return x instanceof Map;
			} catch (e) {}
			return false;
		}
		function isWeakMap(x) {
			if (!weakMapHas || !x || typeof x !== "object") return false;
			try {
				weakMapHas.call(x, weakMapHas);
				try {
					weakSetHas.call(x, weakSetHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakMap;
			} catch (e) {}
			return false;
		}
		function isWeakRef(x) {
			if (!weakRefDeref || !x || typeof x !== "object") return false;
			try {
				weakRefDeref.call(x);
				return true;
			} catch (e) {}
			return false;
		}
		function isSet(x) {
			if (!setSize || !x || typeof x !== "object") return false;
			try {
				setSize.call(x);
				try {
					mapSize.call(x);
				} catch (m) {
					return true;
				}
				return x instanceof Set;
			} catch (e) {}
			return false;
		}
		function isWeakSet(x) {
			if (!weakSetHas || !x || typeof x !== "object") return false;
			try {
				weakSetHas.call(x, weakSetHas);
				try {
					weakMapHas.call(x, weakMapHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakSet;
			} catch (e) {}
			return false;
		}
		function isElement(x) {
			if (!x || typeof x !== "object") return false;
			if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
			return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
		}
		function inspectString(str, opts) {
			if (str.length > opts.maxStringLength) {
				var remaining = str.length - opts.maxStringLength;
				var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
				return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
			}
			var quoteRE = quoteREs[opts.quoteStyle || "single"];
			quoteRE.lastIndex = 0;
			return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
		}
		function lowbyte(c) {
			var n = c.charCodeAt(0);
			var x = {
				8: "b",
				9: "t",
				10: "n",
				12: "f",
				13: "r"
			}[n];
			if (x) return "\\" + x;
			return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
		}
		function markBoxed(str) {
			return "Object(" + str + ")";
		}
		function weakCollectionOf(type) {
			return type + " { ? }";
		}
		function collectionOf(type, size, entries, indent) {
			var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
			return type + " (" + size + ") {" + joinedEntries + "}";
		}
		function singleLineValues(xs) {
			for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
			return true;
		}
		function getIndent(opts, depth) {
			var baseIndent;
			if (opts.indent === "	") baseIndent = "	";
			else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
			else return null;
			return {
				base: baseIndent,
				prev: $join.call(Array(depth + 1), baseIndent)
			};
		}
		function indentedJoin(xs, indent) {
			if (xs.length === 0) return "";
			var lineJoiner = "\n" + indent.prev + indent.base;
			return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
		}
		function arrObjKeys(obj, inspect) {
			var isArr = isArray(obj);
			var xs = [];
			if (isArr) {
				xs.length = obj.length;
				for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
			}
			var syms = typeof gOPS === "function" ? gOPS(obj) : [];
			var symMap;
			if (hasShammedSymbols) {
				symMap = {};
				for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
			}
			for (var key in obj) {
				if (!has(obj, key)) continue;
				if (isArr && String(Number(key)) === key && key < obj.length) continue;
				if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
				else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
				else xs.push(key + ": " + inspect(obj[key], obj));
			}
			if (typeof gOPS === "function") {
				for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
			}
			return xs;
		}
	}));
	//#endregion
	//#region (ignored) node_modules/side-channel-list/node_modules/object-inspect/util.inspect.js
	var require_util_inspect$2 = /* @__PURE__ */ __commonJSMin((() => {}));
	//#endregion
	//#region node_modules/side-channel-list/node_modules/object-inspect/index.js
	var require_object_inspect$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasMap = typeof Map === "function" && Map.prototype;
		var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
		var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
		var mapForEach = hasMap && Map.prototype.forEach;
		var hasSet = typeof Set === "function" && Set.prototype;
		var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
		var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
		var setForEach = hasSet && Set.prototype.forEach;
		var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
		var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
		var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
		var booleanValueOf = Boolean.prototype.valueOf;
		var objectToString = Object.prototype.toString;
		var functionToString = Function.prototype.toString;
		var $match = String.prototype.match;
		var $slice = String.prototype.slice;
		var $replace = String.prototype.replace;
		var $toUpperCase = String.prototype.toUpperCase;
		var $toLowerCase = String.prototype.toLowerCase;
		var $test = RegExp.prototype.test;
		var $concat = Array.prototype.concat;
		var $join = Array.prototype.join;
		var $arrSlice = Array.prototype.slice;
		var $floor = Math.floor;
		var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
		var gOPS = Object.getOwnPropertySymbols;
		var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
		var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
		var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
			return O.__proto__;
		} : null);
		function addNumericSeparator(num, str) {
			if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
			var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
			if (typeof num === "number") {
				var int = num < 0 ? -$floor(-num) : $floor(num);
				if (int !== num) {
					var intStr = String(int);
					var dec = $slice.call(str, intStr.length + 1);
					return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
				}
			}
			return $replace.call(str, sepRegex, "$&_");
		}
		var utilInspect = require_util_inspect$2();
		var inspectCustom = utilInspect.custom;
		var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
		var quotes = {
			__proto__: null,
			"double": "\"",
			single: "'"
		};
		var quoteREs = {
			__proto__: null,
			"double": /(["\\])/g,
			single: /(['\\])/g
		};
		module.exports = function inspect_(obj, options, depth, seen) {
			var opts = options || {};
			if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
			if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
			var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
			if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
			if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
			if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
			var numericSeparator = opts.numericSeparator;
			if (typeof obj === "undefined") return "undefined";
			if (obj === null) return "null";
			if (typeof obj === "boolean") return obj ? "true" : "false";
			if (typeof obj === "string") return inspectString(obj, opts);
			if (typeof obj === "number") {
				if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
				var str = String(obj);
				return numericSeparator ? addNumericSeparator(obj, str) : str;
			}
			if (typeof obj === "bigint") {
				var bigIntStr = String(obj) + "n";
				return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
			}
			var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
			if (typeof depth === "undefined") depth = 0;
			if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
			var indent = getIndent(opts, depth);
			if (typeof seen === "undefined") seen = [];
			else if (indexOf(seen, obj) >= 0) return "[Circular]";
			function inspect(value, from, noIndent) {
				if (from) {
					seen = $arrSlice.call(seen);
					seen.push(from);
				}
				if (noIndent) {
					var newOpts = { depth: opts.depth };
					if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
					return inspect_(value, newOpts, depth + 1, seen);
				}
				return inspect_(value, opts, depth + 1, seen);
			}
			if (typeof obj === "function" && !isRegExp(obj)) {
				var name = nameOf(obj);
				var keys = arrObjKeys(obj, inspect);
				return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
			}
			if (isSymbol(obj)) {
				var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
				return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
			}
			if (isElement(obj)) {
				var s = "<" + $toLowerCase.call(String(obj.nodeName));
				var attrs = obj.attributes || [];
				for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
				s += ">";
				if (obj.childNodes && obj.childNodes.length) s += "...";
				s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
				return s;
			}
			if (isArray(obj)) {
				if (obj.length === 0) return "[]";
				var xs = arrObjKeys(obj, inspect);
				if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
				return "[ " + $join.call(xs, ", ") + " ]";
			}
			if (isError(obj)) {
				var parts = arrObjKeys(obj, inspect);
				if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
				if (parts.length === 0) return "[" + String(obj) + "]";
				return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
			}
			if (typeof obj === "object" && customInspect) {
				if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
				else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
			}
			if (isMap(obj)) {
				var mapParts = [];
				if (mapForEach) mapForEach.call(obj, function(value, key) {
					mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
				});
				return collectionOf("Map", mapSize.call(obj), mapParts, indent);
			}
			if (isSet(obj)) {
				var setParts = [];
				if (setForEach) setForEach.call(obj, function(value) {
					setParts.push(inspect(value, obj));
				});
				return collectionOf("Set", setSize.call(obj), setParts, indent);
			}
			if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
			if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
			if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
			if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
			if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
			if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
			if (isString(obj)) return markBoxed(inspect(String(obj)));
			if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
			if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
			if (!isDate(obj) && !isRegExp(obj)) {
				var ys = arrObjKeys(obj, inspect);
				var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
				var protoTag = obj instanceof Object ? "" : "null prototype";
				var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
				var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
				if (ys.length === 0) return tag + "{}";
				if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
				return tag + "{ " + $join.call(ys, ", ") + " }";
			}
			return String(obj);
		};
		function wrapQuotes(s, defaultStyle, opts) {
			var quoteChar = quotes[opts.quoteStyle || defaultStyle];
			return quoteChar + s + quoteChar;
		}
		function quote(s) {
			return $replace.call(String(s), /"/g, "&quot;");
		}
		function canTrustToString(obj) {
			return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
		}
		function isArray(obj) {
			return toStr(obj) === "[object Array]" && canTrustToString(obj);
		}
		function isDate(obj) {
			return toStr(obj) === "[object Date]" && canTrustToString(obj);
		}
		function isRegExp(obj) {
			return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
		}
		function isError(obj) {
			return toStr(obj) === "[object Error]" && canTrustToString(obj);
		}
		function isString(obj) {
			return toStr(obj) === "[object String]" && canTrustToString(obj);
		}
		function isNumber(obj) {
			return toStr(obj) === "[object Number]" && canTrustToString(obj);
		}
		function isBoolean(obj) {
			return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
		}
		function isSymbol(obj) {
			if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
			if (typeof obj === "symbol") return true;
			if (!obj || typeof obj !== "object" || !symToString) return false;
			try {
				symToString.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		function isBigInt(obj) {
			if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
			try {
				bigIntValueOf.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty || function(key) {
			return key in this;
		};
		function has(obj, key) {
			return hasOwn.call(obj, key);
		}
		function toStr(obj) {
			return objectToString.call(obj);
		}
		function nameOf(f) {
			if (f.name) return f.name;
			var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
			if (m) return m[1];
			return null;
		}
		function indexOf(xs, x) {
			if (xs.indexOf) return xs.indexOf(x);
			for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
			return -1;
		}
		function isMap(x) {
			if (!mapSize || !x || typeof x !== "object") return false;
			try {
				mapSize.call(x);
				try {
					setSize.call(x);
				} catch (s) {
					return true;
				}
				return x instanceof Map;
			} catch (e) {}
			return false;
		}
		function isWeakMap(x) {
			if (!weakMapHas || !x || typeof x !== "object") return false;
			try {
				weakMapHas.call(x, weakMapHas);
				try {
					weakSetHas.call(x, weakSetHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakMap;
			} catch (e) {}
			return false;
		}
		function isWeakRef(x) {
			if (!weakRefDeref || !x || typeof x !== "object") return false;
			try {
				weakRefDeref.call(x);
				return true;
			} catch (e) {}
			return false;
		}
		function isSet(x) {
			if (!setSize || !x || typeof x !== "object") return false;
			try {
				setSize.call(x);
				try {
					mapSize.call(x);
				} catch (m) {
					return true;
				}
				return x instanceof Set;
			} catch (e) {}
			return false;
		}
		function isWeakSet(x) {
			if (!weakSetHas || !x || typeof x !== "object") return false;
			try {
				weakSetHas.call(x, weakSetHas);
				try {
					weakMapHas.call(x, weakMapHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakSet;
			} catch (e) {}
			return false;
		}
		function isElement(x) {
			if (!x || typeof x !== "object") return false;
			if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
			return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
		}
		function inspectString(str, opts) {
			if (str.length > opts.maxStringLength) {
				var remaining = str.length - opts.maxStringLength;
				var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
				return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
			}
			var quoteRE = quoteREs[opts.quoteStyle || "single"];
			quoteRE.lastIndex = 0;
			return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
		}
		function lowbyte(c) {
			var n = c.charCodeAt(0);
			var x = {
				8: "b",
				9: "t",
				10: "n",
				12: "f",
				13: "r"
			}[n];
			if (x) return "\\" + x;
			return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
		}
		function markBoxed(str) {
			return "Object(" + str + ")";
		}
		function weakCollectionOf(type) {
			return type + " { ? }";
		}
		function collectionOf(type, size, entries, indent) {
			var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
			return type + " (" + size + ") {" + joinedEntries + "}";
		}
		function singleLineValues(xs) {
			for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
			return true;
		}
		function getIndent(opts, depth) {
			var baseIndent;
			if (opts.indent === "	") baseIndent = "	";
			else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
			else return null;
			return {
				base: baseIndent,
				prev: $join.call(Array(depth + 1), baseIndent)
			};
		}
		function indentedJoin(xs, indent) {
			if (xs.length === 0) return "";
			var lineJoiner = "\n" + indent.prev + indent.base;
			return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
		}
		function arrObjKeys(obj, inspect) {
			var isArr = isArray(obj);
			var xs = [];
			if (isArr) {
				xs.length = obj.length;
				for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
			}
			var syms = typeof gOPS === "function" ? gOPS(obj) : [];
			var symMap;
			if (hasShammedSymbols) {
				symMap = {};
				for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
			}
			for (var key in obj) {
				if (!has(obj, key)) continue;
				if (isArr && String(Number(key)) === key && key < obj.length) continue;
				if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
				else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
				else xs.push(key + ": " + inspect(obj[key], obj));
			}
			if (typeof gOPS === "function") {
				for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
			}
			return xs;
		}
	}));
	//#endregion
	//#region node_modules/side-channel-list/index.js
	var require_side_channel_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var inspect = require_object_inspect$2();
		var $TypeError = require_type();
		/** @type {import('./list.d.ts').listGetNode} */
		var listGetNode = function(list, key, isDelete) {
			/** @type {typeof list | NonNullable<(typeof list)['next']>} */
			var prev = list;
			/** @type {(typeof list)['next']} */
			var curr;
			for (; (curr = prev.next) != null; prev = curr) if (curr.key === key) {
				prev.next = curr.next;
				if (!isDelete) {
					curr.next = list.next;
					list.next = curr;
				}
				return curr;
			}
		};
		/** @type {import('./list.d.ts').listGet} */
		var listGet = function(objects, key) {
			if (!objects) return;
			var node = listGetNode(objects, key);
			return node && node.value;
		};
		/** @type {import('./list.d.ts').listSet} */
		var listSet = function(objects, key, value) {
			var node = listGetNode(objects, key);
			if (node) node.value = value;
			else objects.next = {
				key,
				next: objects.next,
				value
			};
		};
		/** @type {import('./list.d.ts').listHas} */
		var listHas = function(objects, key) {
			if (!objects) return false;
			return !!listGetNode(objects, key);
		};
		/** @type {import('./list.d.ts').listDelete} */
		var listDelete = function(objects, key) {
			if (objects) return listGetNode(objects, key, true);
		};
		/** @type {import('.')} */
		module.exports = function getSideChannelList() {
			/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */
			/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					var root = $o && $o.next;
					var deletedNode = listDelete($o, key);
					if (deletedNode && root && root === deletedNode) $o = void 0;
					return !!deletedNode;
				},
				get: function(key) {
					return listGet($o, key);
				},
				has: function(key) {
					return listHas($o, key);
				},
				set: function(key, value) {
					if (!$o) $o = { next: void 0 };
					listSet($o, key, value);
				}
			};
			return channel;
		};
	}));
	//#endregion
	//#region node_modules/es-object-atoms/index.js
	var require_es_object_atoms = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		module.exports = Object;
	}));
	//#endregion
	//#region node_modules/es-errors/index.js
	var require_es_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		module.exports = Error;
	}));
	//#endregion
	//#region node_modules/es-errors/eval.js
	var require_eval = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./eval')} */
		module.exports = EvalError;
	}));
	//#endregion
	//#region node_modules/es-errors/range.js
	var require_range = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./range')} */
		module.exports = RangeError;
	}));
	//#endregion
	//#region node_modules/es-errors/ref.js
	var require_ref = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./ref')} */
		module.exports = ReferenceError;
	}));
	//#endregion
	//#region node_modules/es-errors/syntax.js
	var require_syntax = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./syntax')} */
		module.exports = SyntaxError;
	}));
	//#endregion
	//#region node_modules/es-errors/uri.js
	var require_uri = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./uri')} */
		module.exports = URIError;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/abs.js
	var require_abs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./abs')} */
		module.exports = Math.abs;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/floor.js
	var require_floor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./floor')} */
		module.exports = Math.floor;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/max.js
	var require_max = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./max')} */
		module.exports = Math.max;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/min.js
	var require_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./min')} */
		module.exports = Math.min;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/pow.js
	var require_pow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./pow')} */
		module.exports = Math.pow;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/round.js
	var require_round = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./round')} */
		module.exports = Math.round;
	}));
	//#endregion
	//#region node_modules/math-intrinsics/isNaN.js
	var require_isNaN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./isNaN')} */
		module.exports = Number.isNaN || function isNaN(a) {
			return a !== a;
		};
	}));
	//#endregion
	//#region node_modules/math-intrinsics/sign.js
	var require_sign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $isNaN = require_isNaN();
		/** @type {import('./sign')} */
		module.exports = function sign(number) {
			if ($isNaN(number) || number === 0) return number;
			return number < 0 ? -1 : 1;
		};
	}));
	//#endregion
	//#region node_modules/gopd/gOPD.js
	var require_gOPD = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./gOPD')} */
		module.exports = Object.getOwnPropertyDescriptor;
	}));
	//#endregion
	//#region node_modules/gopd/index.js
	var require_gopd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		var $gOPD = require_gOPD();
		if ($gOPD) try {
			$gOPD([], "length");
		} catch (e) {
			$gOPD = null;
		}
		module.exports = $gOPD;
	}));
	//#endregion
	//#region node_modules/es-define-property/index.js
	var require_es_define_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		var $defineProperty = Object.defineProperty || false;
		if ($defineProperty) try {
			$defineProperty({}, "a", { value: 1 });
		} catch (e) {
			$defineProperty = false;
		}
		module.exports = $defineProperty;
	}));
	//#endregion
	//#region node_modules/has-symbols/shams.js
	var require_shams = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./shams')} */
		module.exports = function hasSymbols() {
			if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
			if (typeof Symbol.iterator === "symbol") return true;
			/** @type {{ [k in symbol]?: unknown }} */
			var obj = {};
			var sym = Symbol("test");
			var symObj = Object(sym);
			if (typeof sym === "string") return false;
			if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
			if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
			var symVal = 42;
			obj[sym] = symVal;
			for (var _ in obj) return false;
			if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
			if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
			var syms = Object.getOwnPropertySymbols(obj);
			if (syms.length !== 1 || syms[0] !== sym) return false;
			if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
			if (typeof Object.getOwnPropertyDescriptor === "function") {
				var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
				if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
			}
			return true;
		};
	}));
	//#endregion
	//#region node_modules/has-symbols/index.js
	var require_has_symbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var origSymbol = typeof Symbol !== "undefined" && Symbol;
		var hasSymbolSham = require_shams();
		/** @type {import('.')} */
		module.exports = function hasNativeSymbols() {
			if (typeof origSymbol !== "function") return false;
			if (typeof Symbol !== "function") return false;
			if (typeof origSymbol("foo") !== "symbol") return false;
			if (typeof Symbol("bar") !== "symbol") return false;
			return hasSymbolSham();
		};
	}));
	//#endregion
	//#region node_modules/get-proto/Reflect.getPrototypeOf.js
	var require_Reflect_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./Reflect.getPrototypeOf')} */
		module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
	}));
	//#endregion
	//#region node_modules/get-proto/Object.getPrototypeOf.js
	var require_Object_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./Object.getPrototypeOf')} */
		module.exports = require_es_object_atoms().getPrototypeOf || null;
	}));
	//#endregion
	//#region node_modules/function-bind/implementation.js
	var require_implementation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
		var toStr = Object.prototype.toString;
		var max = Math.max;
		var funcType = "[object Function]";
		var concatty = function concatty(a, b) {
			var arr = [];
			for (var i = 0; i < a.length; i += 1) arr[i] = a[i];
			for (var j = 0; j < b.length; j += 1) arr[j + a.length] = b[j];
			return arr;
		};
		var slicy = function slicy(arrLike, offset) {
			var arr = [];
			for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) arr[j] = arrLike[i];
			return arr;
		};
		var joiny = function(arr, joiner) {
			var str = "";
			for (var i = 0; i < arr.length; i += 1) {
				str += arr[i];
				if (i + 1 < arr.length) str += joiner;
			}
			return str;
		};
		module.exports = function bind(that) {
			var target = this;
			if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
			var args = slicy(arguments, 1);
			var bound;
			var binder = function() {
				if (this instanceof bound) {
					var result = target.apply(this, concatty(args, arguments));
					if (Object(result) === result) return result;
					return this;
				}
				return target.apply(that, concatty(args, arguments));
			};
			var boundLength = max(0, target.length - args.length);
			var boundArgs = [];
			for (var i = 0; i < boundLength; i++) boundArgs[i] = "$" + i;
			bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
			if (target.prototype) {
				var Empty = function Empty() {};
				Empty.prototype = target.prototype;
				bound.prototype = new Empty();
				Empty.prototype = null;
			}
			return bound;
		};
	}));
	//#endregion
	//#region node_modules/function-bind/index.js
	var require_function_bind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var implementation = require_implementation();
		module.exports = Function.prototype.bind || implementation;
	}));
	//#endregion
	//#region node_modules/call-bind-apply-helpers/functionCall.js
	var require_functionCall = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./functionCall')} */
		module.exports = Function.prototype.call;
	}));
	//#endregion
	//#region node_modules/call-bind-apply-helpers/functionApply.js
	var require_functionApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./functionApply')} */
		module.exports = Function.prototype.apply;
	}));
	//#endregion
	//#region node_modules/call-bind-apply-helpers/reflectApply.js
	var require_reflectApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./reflectApply')} */
		module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
	}));
	//#endregion
	//#region node_modules/call-bind-apply-helpers/actualApply.js
	var require_actualApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var bind = require_function_bind();
		var $apply = require_functionApply();
		var $call = require_functionCall();
		/** @type {import('./actualApply')} */
		module.exports = require_reflectApply() || bind.call($call, $apply);
	}));
	//#endregion
	//#region node_modules/call-bind-apply-helpers/index.js
	var require_call_bind_apply_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var bind = require_function_bind();
		var $TypeError = require_type();
		var $call = require_functionCall();
		var $actualApply = require_actualApply();
		/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
		module.exports = function callBindBasic(args) {
			if (args.length < 1 || typeof args[0] !== "function") throw new $TypeError("a function is required");
			return $actualApply(bind, $call, args);
		};
	}));
	//#endregion
	//#region node_modules/dunder-proto/get.js
	var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var callBind = require_call_bind_apply_helpers();
		var gOPD = require_gopd();
		var hasProtoAccessor;
		try {
			hasProtoAccessor = [].__proto__ === Array.prototype;
		} catch (e) {
			if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
		}
		var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__");
		var $Object = Object;
		var $getPrototypeOf = $Object.getPrototypeOf;
		/** @type {import('./get')} */
		module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
			return $getPrototypeOf(value == null ? value : $Object(value));
		} : false;
	}));
	//#endregion
	//#region node_modules/get-proto/index.js
	var require_get_proto = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var reflectGetProto = require_Reflect_getPrototypeOf();
		var originalGetProto = require_Object_getPrototypeOf();
		var getDunderProto = require_get();
		/** @type {import('.')} */
		module.exports = reflectGetProto ? function getProto(O) {
			return reflectGetProto(O);
		} : originalGetProto ? function getProto(O) {
			if (!O || typeof O !== "object" && typeof O !== "function") throw new TypeError("getProto: not an object");
			return originalGetProto(O);
		} : getDunderProto ? function getProto(O) {
			return getDunderProto(O);
		} : null;
	}));
	//#endregion
	//#region node_modules/hasown/index.js
	var require_hasown = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = Function.prototype.call;
		var $hasOwn = Object.prototype.hasOwnProperty;
		/** @type {import('.')} */
		module.exports = require_function_bind().call(call, $hasOwn);
	}));
	//#endregion
	//#region node_modules/get-intrinsic/index.js
	var require_get_intrinsic = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var undefined;
		var $Object = require_es_object_atoms();
		var $Error = require_es_errors();
		var $EvalError = require_eval();
		var $RangeError = require_range();
		var $ReferenceError = require_ref();
		var $SyntaxError = require_syntax();
		var $TypeError = require_type();
		var $URIError = require_uri();
		var abs = require_abs();
		var floor = require_floor();
		var max = require_max();
		var min = require_min();
		var pow = require_pow();
		var round = require_round();
		var sign = require_sign();
		var $Function = Function;
		var getEvalledConstructor = function(expressionSyntax) {
			try {
				return $Function("\"use strict\"; return (" + expressionSyntax + ").constructor;")();
			} catch (e) {}
		};
		var $gOPD = require_gopd();
		var $defineProperty = require_es_define_property();
		var throwTypeError = function() {
			throw new $TypeError();
		};
		var ThrowTypeError = $gOPD ? function() {
			try {
				arguments.callee;
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					return $gOPD(arguments, "callee").get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}() : throwTypeError;
		var hasSymbols = require_has_symbols()();
		var getProto = require_get_proto();
		var $ObjectGPO = require_Object_getPrototypeOf();
		var $ReflectGPO = require_Reflect_getPrototypeOf();
		var $apply = require_functionApply();
		var $call = require_functionCall();
		var needsEval = {};
		var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
		var INTRINSICS = {
			__proto__: null,
			"%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
			"%Array%": Array,
			"%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
			"%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
			"%AsyncFromSyncIteratorPrototype%": undefined,
			"%AsyncFunction%": needsEval,
			"%AsyncGenerator%": needsEval,
			"%AsyncGeneratorFunction%": needsEval,
			"%AsyncIteratorPrototype%": needsEval,
			"%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
			"%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
			"%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
			"%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
			"%Boolean%": Boolean,
			"%DataView%": typeof DataView === "undefined" ? undefined : DataView,
			"%Date%": Date,
			"%decodeURI%": decodeURI,
			"%decodeURIComponent%": decodeURIComponent,
			"%encodeURI%": encodeURI,
			"%encodeURIComponent%": encodeURIComponent,
			"%Error%": $Error,
			"%eval%": eval,
			"%EvalError%": $EvalError,
			"%Float16Array%": typeof Float16Array === "undefined" ? undefined : Float16Array,
			"%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
			"%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
			"%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
			"%Function%": $Function,
			"%GeneratorFunction%": needsEval,
			"%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
			"%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
			"%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
			"%isFinite%": isFinite,
			"%isNaN%": isNaN,
			"%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
			"%JSON%": typeof JSON === "object" ? JSON : undefined,
			"%Map%": typeof Map === "undefined" ? undefined : Map,
			"%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
			"%Math%": Math,
			"%Number%": Number,
			"%Object%": $Object,
			"%Object.getOwnPropertyDescriptor%": $gOPD,
			"%parseFloat%": parseFloat,
			"%parseInt%": parseInt,
			"%Promise%": typeof Promise === "undefined" ? undefined : Promise,
			"%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
			"%RangeError%": $RangeError,
			"%ReferenceError%": $ReferenceError,
			"%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
			"%RegExp%": RegExp,
			"%Set%": typeof Set === "undefined" ? undefined : Set,
			"%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
			"%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
			"%String%": String,
			"%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
			"%Symbol%": hasSymbols ? Symbol : undefined,
			"%SyntaxError%": $SyntaxError,
			"%ThrowTypeError%": ThrowTypeError,
			"%TypedArray%": TypedArray,
			"%TypeError%": $TypeError,
			"%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
			"%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
			"%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
			"%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
			"%URIError%": $URIError,
			"%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
			"%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
			"%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet,
			"%Function.prototype.call%": $call,
			"%Function.prototype.apply%": $apply,
			"%Object.defineProperty%": $defineProperty,
			"%Object.getPrototypeOf%": $ObjectGPO,
			"%Math.abs%": abs,
			"%Math.floor%": floor,
			"%Math.max%": max,
			"%Math.min%": min,
			"%Math.pow%": pow,
			"%Math.round%": round,
			"%Math.sign%": sign,
			"%Reflect.getPrototypeOf%": $ReflectGPO
		};
		if (getProto) try {
			null.error;
		} catch (e) {
			INTRINSICS["%Error.prototype%"] = getProto(getProto(e));
		}
		var doEval = function doEval(name) {
			var value;
			if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
			else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
			else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
			else if (name === "%AsyncGenerator%") {
				var fn = doEval("%AsyncGeneratorFunction%");
				if (fn) value = fn.prototype;
			} else if (name === "%AsyncIteratorPrototype%") {
				var gen = doEval("%AsyncGenerator%");
				if (gen && getProto) value = getProto(gen.prototype);
			}
			INTRINSICS[name] = value;
			return value;
		};
		var LEGACY_ALIASES = {
			__proto__: null,
			"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
			"%ArrayPrototype%": ["Array", "prototype"],
			"%ArrayProto_entries%": [
				"Array",
				"prototype",
				"entries"
			],
			"%ArrayProto_forEach%": [
				"Array",
				"prototype",
				"forEach"
			],
			"%ArrayProto_keys%": [
				"Array",
				"prototype",
				"keys"
			],
			"%ArrayProto_values%": [
				"Array",
				"prototype",
				"values"
			],
			"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
			"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
			"%AsyncGeneratorPrototype%": [
				"AsyncGeneratorFunction",
				"prototype",
				"prototype"
			],
			"%BooleanPrototype%": ["Boolean", "prototype"],
			"%DataViewPrototype%": ["DataView", "prototype"],
			"%DatePrototype%": ["Date", "prototype"],
			"%ErrorPrototype%": ["Error", "prototype"],
			"%EvalErrorPrototype%": ["EvalError", "prototype"],
			"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
			"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
			"%FunctionPrototype%": ["Function", "prototype"],
			"%Generator%": ["GeneratorFunction", "prototype"],
			"%GeneratorPrototype%": [
				"GeneratorFunction",
				"prototype",
				"prototype"
			],
			"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
			"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
			"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
			"%JSONParse%": ["JSON", "parse"],
			"%JSONStringify%": ["JSON", "stringify"],
			"%MapPrototype%": ["Map", "prototype"],
			"%NumberPrototype%": ["Number", "prototype"],
			"%ObjectPrototype%": ["Object", "prototype"],
			"%ObjProto_toString%": [
				"Object",
				"prototype",
				"toString"
			],
			"%ObjProto_valueOf%": [
				"Object",
				"prototype",
				"valueOf"
			],
			"%PromisePrototype%": ["Promise", "prototype"],
			"%PromiseProto_then%": [
				"Promise",
				"prototype",
				"then"
			],
			"%Promise_all%": ["Promise", "all"],
			"%Promise_reject%": ["Promise", "reject"],
			"%Promise_resolve%": ["Promise", "resolve"],
			"%RangeErrorPrototype%": ["RangeError", "prototype"],
			"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
			"%RegExpPrototype%": ["RegExp", "prototype"],
			"%SetPrototype%": ["Set", "prototype"],
			"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
			"%StringPrototype%": ["String", "prototype"],
			"%SymbolPrototype%": ["Symbol", "prototype"],
			"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
			"%TypedArrayPrototype%": ["TypedArray", "prototype"],
			"%TypeErrorPrototype%": ["TypeError", "prototype"],
			"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
			"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
			"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
			"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
			"%URIErrorPrototype%": ["URIError", "prototype"],
			"%WeakMapPrototype%": ["WeakMap", "prototype"],
			"%WeakSetPrototype%": ["WeakSet", "prototype"]
		};
		var bind = require_function_bind();
		var hasOwn = require_hasown();
		var $concat = bind.call($call, Array.prototype.concat);
		var $spliceApply = bind.call($apply, Array.prototype.splice);
		var $replace = bind.call($call, String.prototype.replace);
		var $strSlice = bind.call($call, String.prototype.slice);
		var $exec = bind.call($call, RegExp.prototype.exec);
		var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
		var reEscapeChar = /\\(\\)?/g;
		var stringToPath = function stringToPath(string) {
			var first = $strSlice(string, 0, 1);
			var last = $strSlice(string, -1);
			if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
			else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
			var result = [];
			$replace(string, rePropName, function(match, number, quote, subString) {
				result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
			});
			return result;
		};
		var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
			var intrinsicName = name;
			var alias;
			if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
				alias = LEGACY_ALIASES[intrinsicName];
				intrinsicName = "%" + alias[0] + "%";
			}
			if (hasOwn(INTRINSICS, intrinsicName)) {
				var value = INTRINSICS[intrinsicName];
				if (value === needsEval) value = doEval(intrinsicName);
				if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
				return {
					alias,
					name: intrinsicName,
					value
				};
			}
			throw new $SyntaxError("intrinsic " + name + " does not exist!");
		};
		module.exports = function GetIntrinsic(name, allowMissing) {
			if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
			if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError("\"allowMissing\" argument must be a boolean");
			if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
			var parts = stringToPath(name);
			var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
			var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
			var intrinsicRealName = intrinsic.name;
			var value = intrinsic.value;
			var skipFurtherCaching = false;
			var alias = intrinsic.alias;
			if (alias) {
				intrinsicBaseName = alias[0];
				$spliceApply(parts, $concat([0, 1], alias));
			}
			for (var i = 1, isOwn = true; i < parts.length; i += 1) {
				var part = parts[i];
				var first = $strSlice(part, 0, 1);
				var last = $strSlice(part, -1);
				if ((first === "\"" || first === "'" || first === "`" || last === "\"" || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
				if (part === "constructor" || !isOwn) skipFurtherCaching = true;
				intrinsicBaseName += "." + part;
				intrinsicRealName = "%" + intrinsicBaseName + "%";
				if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
				else if (value != null) {
					if (!(part in value)) {
						if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
						return;
					}
					if ($gOPD && i + 1 >= parts.length) {
						var desc = $gOPD(value, part);
						isOwn = !!desc;
						if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
						else value = value[part];
					} else {
						isOwn = hasOwn(value, part);
						value = value[part];
					}
					if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
				}
			}
			return value;
		};
	}));
	//#endregion
	//#region node_modules/call-bound/index.js
	var require_call_bound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var GetIntrinsic = require_get_intrinsic();
		var callBindBasic = require_call_bind_apply_helpers();
		/** @type {(thisArg: string, searchString: string, position?: number) => number} */
		var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
		/** @type {import('.')} */
		module.exports = function callBoundIntrinsic(name, allowMissing) {
			var intrinsic = GetIntrinsic(name, !!allowMissing);
			if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBindBasic([intrinsic]);
			return intrinsic;
		};
	}));
	//#endregion
	//#region (ignored) node_modules/side-channel-map/node_modules/object-inspect/util.inspect.js
	var require_util_inspect$1 = /* @__PURE__ */ __commonJSMin((() => {}));
	//#endregion
	//#region node_modules/side-channel-map/node_modules/object-inspect/index.js
	var require_object_inspect$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasMap = typeof Map === "function" && Map.prototype;
		var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
		var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
		var mapForEach = hasMap && Map.prototype.forEach;
		var hasSet = typeof Set === "function" && Set.prototype;
		var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
		var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
		var setForEach = hasSet && Set.prototype.forEach;
		var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
		var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
		var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
		var booleanValueOf = Boolean.prototype.valueOf;
		var objectToString = Object.prototype.toString;
		var functionToString = Function.prototype.toString;
		var $match = String.prototype.match;
		var $slice = String.prototype.slice;
		var $replace = String.prototype.replace;
		var $toUpperCase = String.prototype.toUpperCase;
		var $toLowerCase = String.prototype.toLowerCase;
		var $test = RegExp.prototype.test;
		var $concat = Array.prototype.concat;
		var $join = Array.prototype.join;
		var $arrSlice = Array.prototype.slice;
		var $floor = Math.floor;
		var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
		var gOPS = Object.getOwnPropertySymbols;
		var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
		var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
		var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
			return O.__proto__;
		} : null);
		function addNumericSeparator(num, str) {
			if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
			var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
			if (typeof num === "number") {
				var int = num < 0 ? -$floor(-num) : $floor(num);
				if (int !== num) {
					var intStr = String(int);
					var dec = $slice.call(str, intStr.length + 1);
					return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
				}
			}
			return $replace.call(str, sepRegex, "$&_");
		}
		var utilInspect = require_util_inspect$1();
		var inspectCustom = utilInspect.custom;
		var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
		var quotes = {
			__proto__: null,
			"double": "\"",
			single: "'"
		};
		var quoteREs = {
			__proto__: null,
			"double": /(["\\])/g,
			single: /(['\\])/g
		};
		module.exports = function inspect_(obj, options, depth, seen) {
			var opts = options || {};
			if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
			if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
			var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
			if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
			if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
			if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
			var numericSeparator = opts.numericSeparator;
			if (typeof obj === "undefined") return "undefined";
			if (obj === null) return "null";
			if (typeof obj === "boolean") return obj ? "true" : "false";
			if (typeof obj === "string") return inspectString(obj, opts);
			if (typeof obj === "number") {
				if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
				var str = String(obj);
				return numericSeparator ? addNumericSeparator(obj, str) : str;
			}
			if (typeof obj === "bigint") {
				var bigIntStr = String(obj) + "n";
				return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
			}
			var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
			if (typeof depth === "undefined") depth = 0;
			if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
			var indent = getIndent(opts, depth);
			if (typeof seen === "undefined") seen = [];
			else if (indexOf(seen, obj) >= 0) return "[Circular]";
			function inspect(value, from, noIndent) {
				if (from) {
					seen = $arrSlice.call(seen);
					seen.push(from);
				}
				if (noIndent) {
					var newOpts = { depth: opts.depth };
					if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
					return inspect_(value, newOpts, depth + 1, seen);
				}
				return inspect_(value, opts, depth + 1, seen);
			}
			if (typeof obj === "function" && !isRegExp(obj)) {
				var name = nameOf(obj);
				var keys = arrObjKeys(obj, inspect);
				return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
			}
			if (isSymbol(obj)) {
				var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
				return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
			}
			if (isElement(obj)) {
				var s = "<" + $toLowerCase.call(String(obj.nodeName));
				var attrs = obj.attributes || [];
				for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
				s += ">";
				if (obj.childNodes && obj.childNodes.length) s += "...";
				s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
				return s;
			}
			if (isArray(obj)) {
				if (obj.length === 0) return "[]";
				var xs = arrObjKeys(obj, inspect);
				if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
				return "[ " + $join.call(xs, ", ") + " ]";
			}
			if (isError(obj)) {
				var parts = arrObjKeys(obj, inspect);
				if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
				if (parts.length === 0) return "[" + String(obj) + "]";
				return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
			}
			if (typeof obj === "object" && customInspect) {
				if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
				else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
			}
			if (isMap(obj)) {
				var mapParts = [];
				if (mapForEach) mapForEach.call(obj, function(value, key) {
					mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
				});
				return collectionOf("Map", mapSize.call(obj), mapParts, indent);
			}
			if (isSet(obj)) {
				var setParts = [];
				if (setForEach) setForEach.call(obj, function(value) {
					setParts.push(inspect(value, obj));
				});
				return collectionOf("Set", setSize.call(obj), setParts, indent);
			}
			if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
			if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
			if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
			if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
			if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
			if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
			if (isString(obj)) return markBoxed(inspect(String(obj)));
			if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
			if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
			if (!isDate(obj) && !isRegExp(obj)) {
				var ys = arrObjKeys(obj, inspect);
				var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
				var protoTag = obj instanceof Object ? "" : "null prototype";
				var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
				var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
				if (ys.length === 0) return tag + "{}";
				if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
				return tag + "{ " + $join.call(ys, ", ") + " }";
			}
			return String(obj);
		};
		function wrapQuotes(s, defaultStyle, opts) {
			var quoteChar = quotes[opts.quoteStyle || defaultStyle];
			return quoteChar + s + quoteChar;
		}
		function quote(s) {
			return $replace.call(String(s), /"/g, "&quot;");
		}
		function canTrustToString(obj) {
			return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
		}
		function isArray(obj) {
			return toStr(obj) === "[object Array]" && canTrustToString(obj);
		}
		function isDate(obj) {
			return toStr(obj) === "[object Date]" && canTrustToString(obj);
		}
		function isRegExp(obj) {
			return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
		}
		function isError(obj) {
			return toStr(obj) === "[object Error]" && canTrustToString(obj);
		}
		function isString(obj) {
			return toStr(obj) === "[object String]" && canTrustToString(obj);
		}
		function isNumber(obj) {
			return toStr(obj) === "[object Number]" && canTrustToString(obj);
		}
		function isBoolean(obj) {
			return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
		}
		function isSymbol(obj) {
			if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
			if (typeof obj === "symbol") return true;
			if (!obj || typeof obj !== "object" || !symToString) return false;
			try {
				symToString.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		function isBigInt(obj) {
			if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
			try {
				bigIntValueOf.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty || function(key) {
			return key in this;
		};
		function has(obj, key) {
			return hasOwn.call(obj, key);
		}
		function toStr(obj) {
			return objectToString.call(obj);
		}
		function nameOf(f) {
			if (f.name) return f.name;
			var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
			if (m) return m[1];
			return null;
		}
		function indexOf(xs, x) {
			if (xs.indexOf) return xs.indexOf(x);
			for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
			return -1;
		}
		function isMap(x) {
			if (!mapSize || !x || typeof x !== "object") return false;
			try {
				mapSize.call(x);
				try {
					setSize.call(x);
				} catch (s) {
					return true;
				}
				return x instanceof Map;
			} catch (e) {}
			return false;
		}
		function isWeakMap(x) {
			if (!weakMapHas || !x || typeof x !== "object") return false;
			try {
				weakMapHas.call(x, weakMapHas);
				try {
					weakSetHas.call(x, weakSetHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakMap;
			} catch (e) {}
			return false;
		}
		function isWeakRef(x) {
			if (!weakRefDeref || !x || typeof x !== "object") return false;
			try {
				weakRefDeref.call(x);
				return true;
			} catch (e) {}
			return false;
		}
		function isSet(x) {
			if (!setSize || !x || typeof x !== "object") return false;
			try {
				setSize.call(x);
				try {
					mapSize.call(x);
				} catch (m) {
					return true;
				}
				return x instanceof Set;
			} catch (e) {}
			return false;
		}
		function isWeakSet(x) {
			if (!weakSetHas || !x || typeof x !== "object") return false;
			try {
				weakSetHas.call(x, weakSetHas);
				try {
					weakMapHas.call(x, weakMapHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakSet;
			} catch (e) {}
			return false;
		}
		function isElement(x) {
			if (!x || typeof x !== "object") return false;
			if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
			return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
		}
		function inspectString(str, opts) {
			if (str.length > opts.maxStringLength) {
				var remaining = str.length - opts.maxStringLength;
				var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
				return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
			}
			var quoteRE = quoteREs[opts.quoteStyle || "single"];
			quoteRE.lastIndex = 0;
			return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
		}
		function lowbyte(c) {
			var n = c.charCodeAt(0);
			var x = {
				8: "b",
				9: "t",
				10: "n",
				12: "f",
				13: "r"
			}[n];
			if (x) return "\\" + x;
			return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
		}
		function markBoxed(str) {
			return "Object(" + str + ")";
		}
		function weakCollectionOf(type) {
			return type + " { ? }";
		}
		function collectionOf(type, size, entries, indent) {
			var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
			return type + " (" + size + ") {" + joinedEntries + "}";
		}
		function singleLineValues(xs) {
			for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
			return true;
		}
		function getIndent(opts, depth) {
			var baseIndent;
			if (opts.indent === "	") baseIndent = "	";
			else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
			else return null;
			return {
				base: baseIndent,
				prev: $join.call(Array(depth + 1), baseIndent)
			};
		}
		function indentedJoin(xs, indent) {
			if (xs.length === 0) return "";
			var lineJoiner = "\n" + indent.prev + indent.base;
			return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
		}
		function arrObjKeys(obj, inspect) {
			var isArr = isArray(obj);
			var xs = [];
			if (isArr) {
				xs.length = obj.length;
				for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
			}
			var syms = typeof gOPS === "function" ? gOPS(obj) : [];
			var symMap;
			if (hasShammedSymbols) {
				symMap = {};
				for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
			}
			for (var key in obj) {
				if (!has(obj, key)) continue;
				if (isArr && String(Number(key)) === key && key < obj.length) continue;
				if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
				else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
				else xs.push(key + ": " + inspect(obj[key], obj));
			}
			if (typeof gOPS === "function") {
				for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
			}
			return xs;
		}
	}));
	//#endregion
	//#region node_modules/side-channel-map/index.js
	var require_side_channel_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var GetIntrinsic = require_get_intrinsic();
		var callBound = require_call_bound();
		var inspect = require_object_inspect$1();
		var $TypeError = require_type();
		var $Map = GetIntrinsic("%Map%", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */
		var $mapGet = callBound("Map.prototype.get", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */
		var $mapSet = callBound("Map.prototype.set", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
		var $mapHas = callBound("Map.prototype.has", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
		var $mapDelete = callBound("Map.prototype.delete", true);
		/** @type {<K, V>(thisArg: Map<K, V>) => number} */
		var $mapSize = callBound("Map.prototype.size", true);
		/** @type {import('.')} */
		module.exports = !!$Map && function getSideChannelMap() {
			/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */
			/** @type {Map<K, V> | undefined} */ var $m;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					if ($m) {
						var result = $mapDelete($m, key);
						if ($mapSize($m) === 0) $m = void 0;
						return result;
					}
					return false;
				},
				get: function(key) {
					if ($m) return $mapGet($m, key);
				},
				has: function(key) {
					if ($m) return $mapHas($m, key);
					return false;
				},
				set: function(key, value) {
					if (!$m) $m = new $Map();
					$mapSet($m, key, value);
				}
			};
			return channel;
		};
	}));
	//#endregion
	//#region (ignored) node_modules/side-channel-weakmap/node_modules/object-inspect/util.inspect.js
	var require_util_inspect = /* @__PURE__ */ __commonJSMin((() => {}));
	//#endregion
	//#region node_modules/side-channel-weakmap/node_modules/object-inspect/index.js
	var require_object_inspect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasMap = typeof Map === "function" && Map.prototype;
		var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
		var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
		var mapForEach = hasMap && Map.prototype.forEach;
		var hasSet = typeof Set === "function" && Set.prototype;
		var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
		var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
		var setForEach = hasSet && Set.prototype.forEach;
		var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
		var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
		var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
		var booleanValueOf = Boolean.prototype.valueOf;
		var objectToString = Object.prototype.toString;
		var functionToString = Function.prototype.toString;
		var $match = String.prototype.match;
		var $slice = String.prototype.slice;
		var $replace = String.prototype.replace;
		var $toUpperCase = String.prototype.toUpperCase;
		var $toLowerCase = String.prototype.toLowerCase;
		var $test = RegExp.prototype.test;
		var $concat = Array.prototype.concat;
		var $join = Array.prototype.join;
		var $arrSlice = Array.prototype.slice;
		var $floor = Math.floor;
		var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
		var gOPS = Object.getOwnPropertySymbols;
		var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
		var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
		var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
			return O.__proto__;
		} : null);
		function addNumericSeparator(num, str) {
			if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
			var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
			if (typeof num === "number") {
				var int = num < 0 ? -$floor(-num) : $floor(num);
				if (int !== num) {
					var intStr = String(int);
					var dec = $slice.call(str, intStr.length + 1);
					return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
				}
			}
			return $replace.call(str, sepRegex, "$&_");
		}
		var utilInspect = require_util_inspect();
		var inspectCustom = utilInspect.custom;
		var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
		var quotes = {
			__proto__: null,
			"double": "\"",
			single: "'"
		};
		var quoteREs = {
			__proto__: null,
			"double": /(["\\])/g,
			single: /(['\\])/g
		};
		module.exports = function inspect_(obj, options, depth, seen) {
			var opts = options || {};
			if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
			if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
			var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
			if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
			if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
			if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
			var numericSeparator = opts.numericSeparator;
			if (typeof obj === "undefined") return "undefined";
			if (obj === null) return "null";
			if (typeof obj === "boolean") return obj ? "true" : "false";
			if (typeof obj === "string") return inspectString(obj, opts);
			if (typeof obj === "number") {
				if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
				var str = String(obj);
				return numericSeparator ? addNumericSeparator(obj, str) : str;
			}
			if (typeof obj === "bigint") {
				var bigIntStr = String(obj) + "n";
				return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
			}
			var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
			if (typeof depth === "undefined") depth = 0;
			if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
			var indent = getIndent(opts, depth);
			if (typeof seen === "undefined") seen = [];
			else if (indexOf(seen, obj) >= 0) return "[Circular]";
			function inspect(value, from, noIndent) {
				if (from) {
					seen = $arrSlice.call(seen);
					seen.push(from);
				}
				if (noIndent) {
					var newOpts = { depth: opts.depth };
					if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
					return inspect_(value, newOpts, depth + 1, seen);
				}
				return inspect_(value, opts, depth + 1, seen);
			}
			if (typeof obj === "function" && !isRegExp(obj)) {
				var name = nameOf(obj);
				var keys = arrObjKeys(obj, inspect);
				return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
			}
			if (isSymbol(obj)) {
				var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
				return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
			}
			if (isElement(obj)) {
				var s = "<" + $toLowerCase.call(String(obj.nodeName));
				var attrs = obj.attributes || [];
				for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
				s += ">";
				if (obj.childNodes && obj.childNodes.length) s += "...";
				s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
				return s;
			}
			if (isArray(obj)) {
				if (obj.length === 0) return "[]";
				var xs = arrObjKeys(obj, inspect);
				if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
				return "[ " + $join.call(xs, ", ") + " ]";
			}
			if (isError(obj)) {
				var parts = arrObjKeys(obj, inspect);
				if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
				if (parts.length === 0) return "[" + String(obj) + "]";
				return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
			}
			if (typeof obj === "object" && customInspect) {
				if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
				else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
			}
			if (isMap(obj)) {
				var mapParts = [];
				if (mapForEach) mapForEach.call(obj, function(value, key) {
					mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
				});
				return collectionOf("Map", mapSize.call(obj), mapParts, indent);
			}
			if (isSet(obj)) {
				var setParts = [];
				if (setForEach) setForEach.call(obj, function(value) {
					setParts.push(inspect(value, obj));
				});
				return collectionOf("Set", setSize.call(obj), setParts, indent);
			}
			if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
			if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
			if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
			if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
			if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
			if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
			if (isString(obj)) return markBoxed(inspect(String(obj)));
			if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
			if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
			if (!isDate(obj) && !isRegExp(obj)) {
				var ys = arrObjKeys(obj, inspect);
				var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
				var protoTag = obj instanceof Object ? "" : "null prototype";
				var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
				var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
				if (ys.length === 0) return tag + "{}";
				if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
				return tag + "{ " + $join.call(ys, ", ") + " }";
			}
			return String(obj);
		};
		function wrapQuotes(s, defaultStyle, opts) {
			var quoteChar = quotes[opts.quoteStyle || defaultStyle];
			return quoteChar + s + quoteChar;
		}
		function quote(s) {
			return $replace.call(String(s), /"/g, "&quot;");
		}
		function canTrustToString(obj) {
			return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
		}
		function isArray(obj) {
			return toStr(obj) === "[object Array]" && canTrustToString(obj);
		}
		function isDate(obj) {
			return toStr(obj) === "[object Date]" && canTrustToString(obj);
		}
		function isRegExp(obj) {
			return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
		}
		function isError(obj) {
			return toStr(obj) === "[object Error]" && canTrustToString(obj);
		}
		function isString(obj) {
			return toStr(obj) === "[object String]" && canTrustToString(obj);
		}
		function isNumber(obj) {
			return toStr(obj) === "[object Number]" && canTrustToString(obj);
		}
		function isBoolean(obj) {
			return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
		}
		function isSymbol(obj) {
			if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
			if (typeof obj === "symbol") return true;
			if (!obj || typeof obj !== "object" || !symToString) return false;
			try {
				symToString.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		function isBigInt(obj) {
			if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
			try {
				bigIntValueOf.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty || function(key) {
			return key in this;
		};
		function has(obj, key) {
			return hasOwn.call(obj, key);
		}
		function toStr(obj) {
			return objectToString.call(obj);
		}
		function nameOf(f) {
			if (f.name) return f.name;
			var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
			if (m) return m[1];
			return null;
		}
		function indexOf(xs, x) {
			if (xs.indexOf) return xs.indexOf(x);
			for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
			return -1;
		}
		function isMap(x) {
			if (!mapSize || !x || typeof x !== "object") return false;
			try {
				mapSize.call(x);
				try {
					setSize.call(x);
				} catch (s) {
					return true;
				}
				return x instanceof Map;
			} catch (e) {}
			return false;
		}
		function isWeakMap(x) {
			if (!weakMapHas || !x || typeof x !== "object") return false;
			try {
				weakMapHas.call(x, weakMapHas);
				try {
					weakSetHas.call(x, weakSetHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakMap;
			} catch (e) {}
			return false;
		}
		function isWeakRef(x) {
			if (!weakRefDeref || !x || typeof x !== "object") return false;
			try {
				weakRefDeref.call(x);
				return true;
			} catch (e) {}
			return false;
		}
		function isSet(x) {
			if (!setSize || !x || typeof x !== "object") return false;
			try {
				setSize.call(x);
				try {
					mapSize.call(x);
				} catch (m) {
					return true;
				}
				return x instanceof Set;
			} catch (e) {}
			return false;
		}
		function isWeakSet(x) {
			if (!weakSetHas || !x || typeof x !== "object") return false;
			try {
				weakSetHas.call(x, weakSetHas);
				try {
					weakMapHas.call(x, weakMapHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakSet;
			} catch (e) {}
			return false;
		}
		function isElement(x) {
			if (!x || typeof x !== "object") return false;
			if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
			return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
		}
		function inspectString(str, opts) {
			if (str.length > opts.maxStringLength) {
				var remaining = str.length - opts.maxStringLength;
				var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
				return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
			}
			var quoteRE = quoteREs[opts.quoteStyle || "single"];
			quoteRE.lastIndex = 0;
			return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
		}
		function lowbyte(c) {
			var n = c.charCodeAt(0);
			var x = {
				8: "b",
				9: "t",
				10: "n",
				12: "f",
				13: "r"
			}[n];
			if (x) return "\\" + x;
			return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
		}
		function markBoxed(str) {
			return "Object(" + str + ")";
		}
		function weakCollectionOf(type) {
			return type + " { ? }";
		}
		function collectionOf(type, size, entries, indent) {
			var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
			return type + " (" + size + ") {" + joinedEntries + "}";
		}
		function singleLineValues(xs) {
			for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
			return true;
		}
		function getIndent(opts, depth) {
			var baseIndent;
			if (opts.indent === "	") baseIndent = "	";
			else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
			else return null;
			return {
				base: baseIndent,
				prev: $join.call(Array(depth + 1), baseIndent)
			};
		}
		function indentedJoin(xs, indent) {
			if (xs.length === 0) return "";
			var lineJoiner = "\n" + indent.prev + indent.base;
			return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
		}
		function arrObjKeys(obj, inspect) {
			var isArr = isArray(obj);
			var xs = [];
			if (isArr) {
				xs.length = obj.length;
				for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
			}
			var syms = typeof gOPS === "function" ? gOPS(obj) : [];
			var symMap;
			if (hasShammedSymbols) {
				symMap = {};
				for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
			}
			for (var key in obj) {
				if (!has(obj, key)) continue;
				if (isArr && String(Number(key)) === key && key < obj.length) continue;
				if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
				else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
				else xs.push(key + ": " + inspect(obj[key], obj));
			}
			if (typeof gOPS === "function") {
				for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
			}
			return xs;
		}
	}));
	//#endregion
	//#region node_modules/side-channel-weakmap/index.js
	var require_side_channel_weakmap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var GetIntrinsic = require_get_intrinsic();
		var callBound = require_call_bound();
		var inspect = require_object_inspect();
		var getSideChannelMap = require_side_channel_map();
		var $TypeError = require_type();
		var $WeakMap = GetIntrinsic("%WeakMap%", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */
		var $weakMapGet = callBound("WeakMap.prototype.get", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */
		var $weakMapSet = callBound("WeakMap.prototype.set", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
		var $weakMapHas = callBound("WeakMap.prototype.has", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
		var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
		/** @type {import('.')} */
		module.exports = $WeakMap ? function getSideChannelWeakMap() {
			/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */
			/** @type {WeakMap<K & object, V> | undefined} */ var $wm;
			/** @type {Channel | undefined} */ var $m;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if ($wm) return $weakMapDelete($wm, key);
					} else if (getSideChannelMap) {
						if ($m) return $m["delete"](key);
					}
					return false;
				},
				get: function(key) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if ($wm) return $weakMapGet($wm, key);
					}
					return $m && $m.get(key);
				},
				has: function(key) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if ($wm) return $weakMapHas($wm, key);
					}
					return !!$m && $m.has(key);
				},
				set: function(key, value) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if (!$wm) $wm = new $WeakMap();
						$weakMapSet($wm, key, value);
					} else if (getSideChannelMap) {
						if (!$m) $m = getSideChannelMap();
						/** @type {NonNullable<typeof $m>} */ $m.set(key, value);
					}
				}
			};
			return channel;
		} : getSideChannelMap;
	}));
	//#endregion
	//#region node_modules/side-channel/index.js
	var require_side_channel = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $TypeError = require_type();
		var inspect = require_object_inspect$3();
		var getSideChannelList = require_side_channel_list();
		var getSideChannelMap = require_side_channel_map();
		var makeChannel = require_side_channel_weakmap() || getSideChannelMap || getSideChannelList;
		/** @type {import('.')} */
		module.exports = function getSideChannel() {
			/** @typedef {ReturnType<typeof getSideChannel>} Channel */
			/** @type {Channel | undefined} */ var $channelData;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					return !!$channelData && $channelData["delete"](key);
				},
				get: function(key) {
					return $channelData && $channelData.get(key);
				},
				has: function(key) {
					return !!$channelData && $channelData.has(key);
				},
				set: function(key, value) {
					if (!$channelData) $channelData = makeChannel();
					$channelData.set(key, value);
				}
			};
			return channel;
		};
	}));
	//#endregion
	//#region node_modules/qs/lib/formats.js
	var require_formats = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var replace = String.prototype.replace;
		var percentTwenties = /%20/g;
		var Format = {
			RFC1738: "RFC1738",
			RFC3986: "RFC3986"
		};
		module.exports = {
			"default": Format.RFC3986,
			formatters: {
				RFC1738: function(value) {
					return replace.call(value, percentTwenties, "+");
				},
				RFC3986: function(value) {
					return String(value);
				}
			},
			RFC1738: Format.RFC1738,
			RFC3986: Format.RFC3986
		};
	}));
	//#endregion
	//#region node_modules/qs/lib/utils.js
	var require_utils = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var formats = require_formats();
		var getSideChannel = require_side_channel();
		var has = Object.prototype.hasOwnProperty;
		var isArray = Array.isArray;
		var overflowChannel = getSideChannel();
		var markOverflow = function markOverflow(obj, maxIndex) {
			overflowChannel.set(obj, maxIndex);
			return obj;
		};
		var isOverflow = function isOverflow(obj) {
			return overflowChannel.has(obj);
		};
		var getMaxIndex = function getMaxIndex(obj) {
			return overflowChannel.get(obj);
		};
		var setMaxIndex = function setMaxIndex(obj, maxIndex) {
			overflowChannel.set(obj, maxIndex);
		};
		var hexTable = function() {
			var array = [];
			for (var i = 0; i < 256; ++i) array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
			return array;
		}();
		var compactQueue = function compactQueue(queue) {
			while (queue.length > 1) {
				var item = queue.pop();
				var obj = item.obj[item.prop];
				if (isArray(obj)) {
					var compacted = [];
					for (var j = 0; j < obj.length; ++j) if (typeof obj[j] !== "undefined") compacted[compacted.length] = obj[j];
					item.obj[item.prop] = compacted;
				}
			}
		};
		var arrayToObject = function arrayToObject(source, options) {
			var obj = options && options.plainObjects ? { __proto__: null } : {};
			for (var i = 0; i < source.length; ++i) if (typeof source[i] !== "undefined") obj[i] = source[i];
			return obj;
		};
		var merge = function merge(target, source, options) {
			if (!source) return target;
			if (typeof source !== "object" && typeof source !== "function") {
				if (isArray(target)) {
					var nextIndex = target.length;
					if (options && typeof options.arrayLimit === "number" && nextIndex > options.arrayLimit) return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
					target[nextIndex] = source;
				} else if (target && typeof target === "object") {
					if (isOverflow(target)) {
						var newIndex = getMaxIndex(target) + 1;
						target[newIndex] = source;
						setMaxIndex(target, newIndex);
					} else if (options && options.strictMerge) return [target, source];
					else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
				} else return [target, source];
				return target;
			}
			if (!target || typeof target !== "object") {
				if (isOverflow(source)) {
					var sourceKeys = Object.keys(source);
					var result = options && options.plainObjects ? {
						__proto__: null,
						0: target
					} : { 0: target };
					for (var m = 0; m < sourceKeys.length; m++) {
						var oldKey = parseInt(sourceKeys[m], 10);
						result[oldKey + 1] = source[sourceKeys[m]];
					}
					return markOverflow(result, getMaxIndex(source) + 1);
				}
				var combined = [target].concat(source);
				if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) return markOverflow(arrayToObject(combined, options), combined.length - 1);
				return combined;
			}
			var mergeTarget = target;
			if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
			if (isArray(target) && isArray(source)) {
				source.forEach(function(item, i) {
					if (has.call(target, i)) {
						var targetItem = target[i];
						if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
						else target[target.length] = item;
					} else target[i] = item;
				});
				return target;
			}
			return Object.keys(source).reduce(function(acc, key) {
				var value = source[key];
				if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
				else acc[key] = value;
				if (isOverflow(source) && !isOverflow(acc)) markOverflow(acc, getMaxIndex(source));
				if (isOverflow(acc)) {
					var keyNum = parseInt(key, 10);
					if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) setMaxIndex(acc, keyNum);
				}
				return acc;
			}, mergeTarget);
		};
		var assign = function assignSingleSource(target, source) {
			return Object.keys(source).reduce(function(acc, key) {
				acc[key] = source[key];
				return acc;
			}, target);
		};
		var decode = function(str, defaultDecoder, charset) {
			var strWithoutPlus = str.replace(/\+/g, " ");
			if (charset === "iso-8859-1") return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
			try {
				return decodeURIComponent(strWithoutPlus);
			} catch (e) {
				return strWithoutPlus;
			}
		};
		var limit = 1024;
		module.exports = {
			arrayToObject,
			assign,
			combine: function combine(a, b, arrayLimit, plainObjects) {
				if (isOverflow(a)) {
					var newIndex = getMaxIndex(a) + 1;
					a[newIndex] = b;
					setMaxIndex(a, newIndex);
					return a;
				}
				var result = [].concat(a, b);
				if (result.length > arrayLimit) return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
				return result;
			},
			compact: function compact(value) {
				var queue = [{
					obj: { o: value },
					prop: "o"
				}];
				var refs = [];
				for (var i = 0; i < queue.length; ++i) {
					var item = queue[i];
					var obj = item.obj[item.prop];
					var keys = Object.keys(obj);
					for (var j = 0; j < keys.length; ++j) {
						var key = keys[j];
						var val = obj[key];
						if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
							queue[queue.length] = {
								obj,
								prop: key
							};
							refs[refs.length] = val;
						}
					}
				}
				compactQueue(queue);
				return value;
			},
			decode,
			encode: function encode(str, defaultEncoder, charset, kind, format) {
				if (str.length === 0) return str;
				var string = str;
				if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
				else if (typeof str !== "string") string = String(str);
				if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
					return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
				});
				var out = "";
				for (var j = 0; j < string.length; j += limit) {
					var segment = string.length >= limit ? string.slice(j, j + limit) : string;
					var arr = [];
					for (var i = 0; i < segment.length; ++i) {
						var c = segment.charCodeAt(i);
						if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
							arr[arr.length] = segment.charAt(i);
							continue;
						}
						if (c < 128) {
							arr[arr.length] = hexTable[c];
							continue;
						}
						if (c < 2048) {
							arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
							continue;
						}
						if (c < 55296 || c >= 57344) {
							arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
							continue;
						}
						i += 1;
						c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
						arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
					}
					out += arr.join("");
				}
				return out;
			},
			isBuffer: function isBuffer(obj) {
				if (!obj || typeof obj !== "object") return false;
				return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
			},
			isOverflow,
			isRegExp: function isRegExp(obj) {
				return Object.prototype.toString.call(obj) === "[object RegExp]";
			},
			markOverflow,
			maybeMap: function maybeMap(val, fn) {
				if (isArray(val)) {
					var mapped = [];
					for (var i = 0; i < val.length; i += 1) mapped[mapped.length] = fn(val[i]);
					return mapped;
				}
				return fn(val);
			},
			merge
		};
	}));
	//#endregion
	//#region node_modules/qs/lib/stringify.js
	var require_stringify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getSideChannel = require_side_channel();
		var utils = require_utils();
		var formats = require_formats();
		var has = Object.prototype.hasOwnProperty;
		var arrayPrefixGenerators = {
			brackets: function brackets(prefix) {
				return prefix + "[]";
			},
			comma: "comma",
			indices: function indices(prefix, key) {
				return prefix + "[" + key + "]";
			},
			repeat: function repeat(prefix) {
				return prefix;
			}
		};
		var isArray = Array.isArray;
		var push = Array.prototype.push;
		var pushToArray = function(arr, valueOrArray) {
			push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
		};
		var toISO = Date.prototype.toISOString;
		var defaultFormat = formats["default"];
		var defaults = {
			addQueryPrefix: false,
			allowDots: false,
			allowEmptyArrays: false,
			arrayFormat: "indices",
			charset: "utf-8",
			charsetSentinel: false,
			commaRoundTrip: false,
			delimiter: "&",
			encode: true,
			encodeDotInKeys: false,
			encoder: utils.encode,
			encodeValuesOnly: false,
			filter: void 0,
			format: defaultFormat,
			formatter: formats.formatters[defaultFormat],
			indices: false,
			serializeDate: function serializeDate(date) {
				return toISO.call(date);
			},
			skipNulls: false,
			strictNullHandling: false
		};
		var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
			return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
		};
		var sentinel = {};
		var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
			var obj = object;
			var tmpSc = sideChannel;
			var step = 0;
			var findFlag = false;
			while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
				var pos = tmpSc.get(object);
				step += 1;
				if (typeof pos !== "undefined") if (pos === step) throw new RangeError("Cyclic object value");
				else findFlag = true;
				if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
			}
			if (typeof filter === "function") obj = filter(prefix, obj);
			else if (obj instanceof Date) obj = serializeDate(obj);
			else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
				if (value instanceof Date) return serializeDate(value);
				return value;
			});
			if (obj === null) {
				if (strictNullHandling) return formatter(encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix);
				obj = "";
			}
			if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
				if (encoder) return [formatter(encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format)) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
				return [formatter(prefix) + "=" + formatter(String(obj))];
			}
			var values = [];
			if (typeof obj === "undefined") return values;
			var objKeys;
			if (generateArrayPrefix === "comma" && isArray(obj)) {
				if (encodeValuesOnly && encoder) obj = utils.maybeMap(obj, function(v) {
					return v == null ? v : encoder(v);
				});
				objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
			} else if (isArray(filter)) objKeys = filter;
			else {
				var keys = Object.keys(obj);
				objKeys = sort ? keys.sort(sort) : keys;
			}
			var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
			var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
			if (allowEmptyArrays && isArray(obj) && obj.length === 0) return adjustedPrefix + "[]";
			for (var j = 0; j < objKeys.length; ++j) {
				var key = objKeys[j];
				var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
				if (skipNulls && value === null) continue;
				var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
				var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
				sideChannel.set(object, step);
				var valueSideChannel = getSideChannel();
				valueSideChannel.set(sentinel, sideChannel);
				pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
			}
			return values;
		};
		var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
			if (!opts) return defaults;
			if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
			if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
			if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
			var charset = opts.charset || defaults.charset;
			if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
			var format = formats["default"];
			if (typeof opts.format !== "undefined") {
				if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
				format = opts.format;
			}
			var formatter = formats.formatters[format];
			var filter = defaults.filter;
			if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
			var arrayFormat;
			if (opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
			else if ("indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
			else arrayFormat = defaults.arrayFormat;
			if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
			var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
			return {
				addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
				allowDots,
				allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
				arrayFormat,
				charset,
				charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
				commaRoundTrip: !!opts.commaRoundTrip,
				delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
				encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
				encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
				encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
				encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
				filter,
				format,
				formatter,
				serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
				skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
				sort: typeof opts.sort === "function" ? opts.sort : null,
				strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
			};
		};
		module.exports = function(object, opts) {
			var obj = object;
			var options = normalizeStringifyOptions(opts);
			var objKeys;
			var filter;
			if (typeof options.filter === "function") {
				filter = options.filter;
				obj = filter("", obj);
			} else if (isArray(options.filter)) {
				filter = options.filter;
				objKeys = filter;
			}
			var keys = [];
			if (typeof obj !== "object" || obj === null) return "";
			var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
			var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
			if (!objKeys) objKeys = Object.keys(obj);
			if (options.sort) objKeys.sort(options.sort);
			var sideChannel = getSideChannel();
			for (var i = 0; i < objKeys.length; ++i) {
				var key = objKeys[i];
				if (typeof key === "undefined" || key === null) continue;
				var value = obj[key];
				if (options.skipNulls && value === null) continue;
				pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
			}
			var joined = keys.join(options.delimiter);
			var prefix = options.addQueryPrefix === true ? "?" : "";
			if (options.charsetSentinel) if (options.charset === "iso-8859-1") prefix += "utf8=%26%2310003%3B" + options.delimiter;
			else prefix += "utf8=%E2%9C%93" + options.delimiter;
			return joined.length > 0 ? prefix + joined : "";
		};
	}));
	//#endregion
	//#region node_modules/qs/lib/parse.js
	var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var utils = require_utils();
		var has = Object.prototype.hasOwnProperty;
		var isArray = Array.isArray;
		var defaults = {
			allowDots: false,
			allowEmptyArrays: false,
			allowPrototypes: false,
			allowSparse: false,
			arrayLimit: 20,
			charset: "utf-8",
			charsetSentinel: false,
			comma: false,
			decodeDotInKeys: false,
			decoder: utils.decode,
			delimiter: "&",
			depth: 5,
			duplicates: "combine",
			ignoreQueryPrefix: false,
			interpretNumericEntities: false,
			parameterLimit: 1e3,
			parseArrays: true,
			plainObjects: false,
			strictDepth: false,
			strictMerge: true,
			strictNullHandling: false,
			throwOnLimitExceeded: false
		};
		var interpretNumericEntities = function(str) {
			return str.replace(/&#(\d+);/g, function($0, numberStr) {
				return String.fromCharCode(parseInt(numberStr, 10));
			});
		};
		var parseArrayValue = function(val, options, currentArrayLength) {
			if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
			if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
			return val;
		};
		var isoSentinel = "utf8=%26%2310003%3B";
		var charsetSentinel = "utf8=%E2%9C%93";
		var parseValues = function parseQueryStringValues(str, options) {
			var obj = { __proto__: null };
			var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
			cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
			var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
			var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded && typeof limit !== "undefined" ? limit + 1 : limit);
			if (options.throwOnLimitExceeded && typeof limit !== "undefined" && parts.length > limit) throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
			var skipIndex = -1;
			var i;
			var charset = options.charset;
			if (options.charsetSentinel) {
				for (i = 0; i < parts.length; ++i) if (parts[i].indexOf("utf8=") === 0) {
					if (parts[i] === charsetSentinel) charset = "utf-8";
					else if (parts[i] === isoSentinel) charset = "iso-8859-1";
					skipIndex = i;
					i = parts.length;
				}
			}
			for (i = 0; i < parts.length; ++i) {
				if (i === skipIndex) continue;
				var part = parts[i];
				var bracketEqualsPos = part.indexOf("]=");
				var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
				var key;
				var val;
				if (pos === -1) {
					key = options.decoder(part, defaults.decoder, charset, "key");
					val = options.strictNullHandling ? null : "";
				} else {
					key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
					if (key !== null) val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
						return options.decoder(encodedVal, defaults.decoder, charset, "value");
					});
				}
				if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(String(val));
				if (part.indexOf("[]=") > -1) val = isArray(val) ? [val] : val;
				if (options.comma && isArray(val) && val.length > options.arrayLimit) {
					if (options.throwOnLimitExceeded) throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
					val = utils.combine([], val, options.arrayLimit, options.plainObjects);
				}
				if (key !== null) {
					var existing = has.call(obj, key);
					if (existing && (options.duplicates === "combine" || part.indexOf("[]=") > -1)) obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
					else if (!existing || options.duplicates === "last") obj[key] = val;
				}
			}
			return obj;
		};
		var parseObject = function(chain, val, options, valuesParsed) {
			var currentArrayLength = 0;
			if (chain.length > 0 && chain[chain.length - 1] === "[]") {
				var parentKey = chain.slice(0, -1).join("");
				currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
			}
			var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
			for (var i = chain.length - 1; i >= 0; --i) {
				var obj;
				var root = chain[i];
				if (root === "[]" && options.parseArrays) if (utils.isOverflow(leaf)) obj = leaf;
				else obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
				else {
					obj = options.plainObjects ? { __proto__: null } : {};
					var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
					var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
					var index = parseInt(decodedRoot, 10);
					var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
					if (!options.parseArrays && decodedRoot === "") obj = { 0: leaf };
					else if (isValidArrayIndex && index < options.arrayLimit) {
						obj = [];
						obj[index] = leaf;
					} else if (isValidArrayIndex && options.throwOnLimitExceeded) throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
					else if (isValidArrayIndex) {
						obj[index] = leaf;
						utils.markOverflow(obj, index);
					} else if (decodedRoot !== "__proto__") obj[decodedRoot] = leaf;
				}
				leaf = obj;
			}
			return leaf;
		};
		var splitKeyIntoSegments = function splitKeyIntoSegments(originalKey, options) {
			var key = options.allowDots ? originalKey.replace(/\.([^.[]+)/g, "[$1]") : originalKey;
			if (options.depth <= 0) {
				if (!options.plainObjects && has.call(Object.prototype, key)) {
					if (!options.allowPrototypes) return;
				}
				return [key];
			}
			var segments = [];
			var first = key.indexOf("[");
			var parent = first >= 0 ? key.slice(0, first) : key;
			if (parent) {
				if (!options.plainObjects && has.call(Object.prototype, parent)) {
					if (!options.allowPrototypes) return;
				}
				segments[segments.length] = parent;
			}
			var n = key.length;
			var open = first;
			var collected = 0;
			while (open >= 0 && collected < options.depth) {
				var level = 1;
				var i = open + 1;
				var close = -1;
				while (i < n && close < 0) {
					var cu = key.charCodeAt(i);
					if (cu === 91) level += 1;
					else if (cu === 93) {
						level -= 1;
						if (level === 0) close = i;
					}
					i += 1;
				}
				if (close < 0) {
					segments[segments.length] = "[" + key.slice(open) + "]";
					return segments;
				}
				var seg = key.slice(open, close + 1);
				var content = seg.slice(1, -1);
				if (!options.plainObjects && has.call(Object.prototype, content) && !options.allowPrototypes) return;
				segments[segments.length] = seg;
				collected += 1;
				open = key.indexOf("[", close + 1);
			}
			if (open >= 0) {
				if (options.strictDepth === true) throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
				segments[segments.length] = "[" + key.slice(open) + "]";
			}
			return segments;
		};
		var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
			if (!givenKey) return;
			var keys = splitKeyIntoSegments(givenKey, options);
			if (!keys) return;
			return parseObject(keys, val, options, valuesParsed);
		};
		var normalizeParseOptions = function normalizeParseOptions(opts) {
			if (!opts) return defaults;
			if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
			if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
			if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
			if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
			if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
			var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
			var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
			if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
			return {
				allowDots: typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots,
				allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
				allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
				allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
				arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
				charset,
				charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
				comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
				decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
				decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
				delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
				depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
				duplicates,
				ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
				interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
				parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
				parseArrays: opts.parseArrays !== false,
				plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
				strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
				strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults.strictMerge,
				strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
				throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
			};
		};
		module.exports = function(str, opts) {
			var options = normalizeParseOptions(opts);
			if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? { __proto__: null } : {};
			var tempObj = typeof str === "string" ? parseValues(str, options) : str;
			var obj = options.plainObjects ? { __proto__: null } : {};
			var keys = Object.keys(tempObj);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
				obj = utils.merge(obj, newObj, options);
			}
			if (options.allowSparse === true) return obj;
			return utils.compact(obj);
		};
	}));
	//#endregion
	//#region node_modules/qs/lib/index.js
	var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var stringify = require_stringify();
		var parse = require_parse();
		module.exports = {
			formats: require_formats(),
			parse,
			stringify
		};
	}));
	//#endregion
	//#region node_modules/punycode/punycode.js
	var require_punycode = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/*! https://mths.be/punycode v1.4.1 by @mathias */
		(function(root) {
			/** Detect free variables */
			var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
			var freeModule = typeof module == "object" && module && !module.nodeType && module;
			var freeGlobal = typeof global == "object" && global;
			if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
			/**
			* The `punycode` object.
			* @name punycode
			* @type Object
			*/
			var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
				"overflow": "Overflow: input needs wider integers to process",
				"not-basic": "Illegal input >= 0x80 (not a basic code point)",
				"invalid-input": "Invalid input"
			}, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
			/**
			* A generic error utility function.
			* @private
			* @param {String} type The error type.
			* @returns {Error} Throws a `RangeError` with the applicable error message.
			*/
			function error(type) {
				throw new RangeError(errors[type]);
			}
			/**
			* A generic `Array#map` utility function.
			* @private
			* @param {Array} array The array to iterate over.
			* @param {Function} callback The function that gets called for every array
			* item.
			* @returns {Array} A new array of values returned by the callback function.
			*/
			function map(array, fn) {
				var length = array.length;
				var result = [];
				while (length--) result[length] = fn(array[length]);
				return result;
			}
			/**
			* A simple `Array#map`-like wrapper to work with domain name strings or email
			* addresses.
			* @private
			* @param {String} domain The domain name or email address.
			* @param {Function} callback The function that gets called for every
			* character.
			* @returns {Array} A new string of characters returned by the callback
			* function.
			*/
			function mapDomain(string, fn) {
				var parts = string.split("@");
				var result = "";
				if (parts.length > 1) {
					result = parts[0] + "@";
					string = parts[1];
				}
				string = string.replace(regexSeparators, ".");
				var encoded = map(string.split("."), fn).join(".");
				return result + encoded;
			}
			/**
			* Creates an array containing the numeric code points of each Unicode
			* character in the string. While JavaScript uses UCS-2 internally,
			* this function will convert a pair of surrogate halves (each of which
			* UCS-2 exposes as separate characters) into a single code point,
			* matching UTF-16.
			* @see `punycode.ucs2.encode`
			* @see <https://mathiasbynens.be/notes/javascript-encoding>
			* @memberOf punycode.ucs2
			* @name decode
			* @param {String} string The Unicode input string (UCS-2).
			* @returns {Array} The new array of code points.
			*/
			function ucs2decode(string) {
				var output = [], counter = 0, length = string.length, value, extra;
				while (counter < length) {
					value = string.charCodeAt(counter++);
					if (value >= 55296 && value <= 56319 && counter < length) {
						extra = string.charCodeAt(counter++);
						if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
						else {
							output.push(value);
							counter--;
						}
					} else output.push(value);
				}
				return output;
			}
			/**
			* Creates a string based on an array of numeric code points.
			* @see `punycode.ucs2.decode`
			* @memberOf punycode.ucs2
			* @name encode
			* @param {Array} codePoints The array of numeric code points.
			* @returns {String} The new Unicode string (UCS-2).
			*/
			function ucs2encode(array) {
				return map(array, function(value) {
					var output = "";
					if (value > 65535) {
						value -= 65536;
						output += stringFromCharCode(value >>> 10 & 1023 | 55296);
						value = 56320 | value & 1023;
					}
					output += stringFromCharCode(value);
					return output;
				}).join("");
			}
			/**
			* Converts a basic code point into a digit/integer.
			* @see `digitToBasic()`
			* @private
			* @param {Number} codePoint The basic numeric code point value.
			* @returns {Number} The numeric value of a basic code point (for use in
			* representing integers) in the range `0` to `base - 1`, or `base` if
			* the code point does not represent a value.
			*/
			function basicToDigit(codePoint) {
				if (codePoint - 48 < 10) return codePoint - 22;
				if (codePoint - 65 < 26) return codePoint - 65;
				if (codePoint - 97 < 26) return codePoint - 97;
				return base;
			}
			/**
			* Converts a digit/integer into a basic code point.
			* @see `basicToDigit()`
			* @private
			* @param {Number} digit The numeric value of a basic code point.
			* @returns {Number} The basic code point whose value (when used for
			* representing integers) is `digit`, which needs to be in the range
			* `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
			* used; else, the lowercase form is used. The behavior is undefined
			* if `flag` is non-zero and `digit` has no uppercase form.
			*/
			function digitToBasic(digit, flag) {
				return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
			}
			/**
			* Bias adaptation function as per section 3.4 of RFC 3492.
			* https://tools.ietf.org/html/rfc3492#section-3.4
			* @private
			*/
			function adapt(delta, numPoints, firstTime) {
				var k = 0;
				delta = firstTime ? floor(delta / damp) : delta >> 1;
				delta += floor(delta / numPoints);
				for (; delta > baseMinusTMin * tMax >> 1; k += base) delta = floor(delta / baseMinusTMin);
				return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
			}
			/**
			* Converts a Punycode string of ASCII-only symbols to a string of Unicode
			* symbols.
			* @memberOf punycode
			* @param {String} input The Punycode string of ASCII-only symbols.
			* @returns {String} The resulting string of Unicode symbols.
			*/
			function decode(input) {
				var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic = input.lastIndexOf(delimiter), j, index, oldi, w, k, digit, t, baseMinusT;
				if (basic < 0) basic = 0;
				for (j = 0; j < basic; ++j) {
					if (input.charCodeAt(j) >= 128) error("not-basic");
					output.push(input.charCodeAt(j));
				}
				for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
					for (oldi = i, w = 1, k = base;; k += base) {
						if (index >= inputLength) error("invalid-input");
						digit = basicToDigit(input.charCodeAt(index++));
						if (digit >= base || digit > floor((maxInt - i) / w)) error("overflow");
						i += digit * w;
						t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (digit < t) break;
						baseMinusT = base - t;
						if (w > floor(maxInt / baseMinusT)) error("overflow");
						w *= baseMinusT;
					}
					out = output.length + 1;
					bias = adapt(i - oldi, out, oldi == 0);
					if (floor(i / out) > maxInt - n) error("overflow");
					n += floor(i / out);
					i %= out;
					output.splice(i++, 0, n);
				}
				return ucs2encode(output);
			}
			/**
			* Converts a string of Unicode symbols (e.g. a domain name label) to a
			* Punycode string of ASCII-only symbols.
			* @memberOf punycode
			* @param {String} input The string of Unicode symbols.
			* @returns {String} The resulting Punycode string of ASCII-only symbols.
			*/
			function encode(input) {
				var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
				input = ucs2decode(input);
				inputLength = input.length;
				n = initialN;
				delta = 0;
				bias = initialBias;
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < 128) output.push(stringFromCharCode(currentValue));
				}
				handledCPCount = basicLength = output.length;
				if (basicLength) output.push(delimiter);
				while (handledCPCount < inputLength) {
					for (m = maxInt, j = 0; j < inputLength; ++j) {
						currentValue = input[j];
						if (currentValue >= n && currentValue < m) m = currentValue;
					}
					handledCPCountPlusOne = handledCPCount + 1;
					if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
					delta += (m - n) * handledCPCountPlusOne;
					n = m;
					for (j = 0; j < inputLength; ++j) {
						currentValue = input[j];
						if (currentValue < n && ++delta > maxInt) error("overflow");
						if (currentValue == n) {
							for (q = delta, k = base;; k += base) {
								t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
								if (q < t) break;
								qMinusT = q - t;
								baseMinusT = base - t;
								output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
								q = floor(qMinusT / baseMinusT);
							}
							output.push(stringFromCharCode(digitToBasic(q, 0)));
							bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
							delta = 0;
							++handledCPCount;
						}
					}
					++delta;
					++n;
				}
				return output.join("");
			}
			/**
			* Converts a Punycode string representing a domain name or an email address
			* to Unicode. Only the Punycoded parts of the input will be converted, i.e.
			* it doesn't matter if you call it on a string that has already been
			* converted to Unicode.
			* @memberOf punycode
			* @param {String} input The Punycoded domain name or email address to
			* convert to Unicode.
			* @returns {String} The Unicode representation of the given Punycode
			* string.
			*/
			function toUnicode(input) {
				return mapDomain(input, function(string) {
					return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
				});
			}
			/**
			* Converts a Unicode string representing a domain name or an email address to
			* Punycode. Only the non-ASCII parts of the domain name will be converted,
			* i.e. it doesn't matter if you call it with a domain that's already in
			* ASCII.
			* @memberOf punycode
			* @param {String} input The domain name or email address to convert, as a
			* Unicode string.
			* @returns {String} The Punycode representation of the given domain name or
			* email address.
			*/
			function toASCII(input) {
				return mapDomain(input, function(string) {
					return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
				});
			}
			/** Define the public API */
			punycode = {
				/**
				* A string representing the current Punycode.js version number.
				* @memberOf punycode
				* @type String
				*/
				"version": "1.4.1",
				/**
				* An object of methods to convert from JavaScript's internal character
				* representation (UCS-2) to Unicode code points, and back.
				* @see <https://mathiasbynens.be/notes/javascript-encoding>
				* @memberOf punycode
				* @type Object
				*/
				"ucs2": {
					"decode": ucs2decode,
					"encode": ucs2encode
				},
				"decode": decode,
				"encode": encode,
				"toASCII": toASCII,
				"toUnicode": toUnicode
			};
			/** Expose `punycode` */
			if (typeof define == "function" && typeof define.amd == "object" && define.amd) define("punycode", function() {
				return punycode;
			});
			else if (freeExports && freeModule) if (module.exports == freeExports) freeModule.exports = punycode;
			else for (key in punycode) punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			else root.punycode = punycode;
		})(exports);
	}));
	//#endregion
	//#region node_modules/url/url.js
	var require_url = /* @__PURE__ */ __commonJSMin(((exports) => {
		var punycode = require_punycode();
		function Url() {
			this.protocol = null;
			this.slashes = null;
			this.auth = null;
			this.host = null;
			this.port = null;
			this.hostname = null;
			this.hash = null;
			this.search = null;
			this.query = null;
			this.pathname = null;
			this.path = null;
			this.href = null;
		}
		var protocolPattern = /^([a-z0-9.+-]+:)/i;
		var portPattern = /:[0-9]*$/;
		var simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
		var unwise = [
			"{",
			"}",
			"|",
			"\\",
			"^",
			"`"
		].concat([
			"<",
			">",
			"\"",
			"`",
			" ",
			"\r",
			"\n",
			"	"
		]);
		var autoEscape = ["'"].concat(unwise);
		var nonHostChars = [
			"%",
			"/",
			"?",
			";",
			"#"
		].concat(autoEscape);
		var hostEndingChars = [
			"/",
			"?",
			"#"
		];
		var hostnameMaxLen = 255;
		var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
		var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
		var unsafeProtocol = {
			javascript: true,
			"javascript:": true
		};
		var hostlessProtocol = {
			javascript: true,
			"javascript:": true
		};
		var slashedProtocol = {
			http: true,
			https: true,
			ftp: true,
			gopher: true,
			file: true,
			"http:": true,
			"https:": true,
			"ftp:": true,
			"gopher:": true,
			"file:": true
		};
		var querystring = require_lib();
		function urlParse(url, parseQueryString, slashesDenoteHost) {
			if (url && typeof url === "object" && url instanceof Url) return url;
			var u = new Url();
			u.parse(url, parseQueryString, slashesDenoteHost);
			return u;
		}
		Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
			if (typeof url !== "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
			var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter);
			uSplit[0] = uSplit[0].replace(/\\/g, "/");
			url = uSplit.join(splitter);
			var rest = url;
			rest = rest.trim();
			if (!slashesDenoteHost && url.split("#").length === 1) {
				var simplePath = simplePathPattern.exec(rest);
				if (simplePath) {
					this.path = rest;
					this.href = rest;
					this.pathname = simplePath[1];
					if (simplePath[2]) {
						this.search = simplePath[2];
						if (parseQueryString) this.query = querystring.parse(this.search.substr(1));
						else this.query = this.search.substr(1);
					} else if (parseQueryString) {
						this.search = "";
						this.query = {};
					}
					return this;
				}
			}
			var proto = protocolPattern.exec(rest);
			if (proto) {
				proto = proto[0];
				var lowerProto = proto.toLowerCase();
				this.protocol = lowerProto;
				rest = rest.substr(proto.length);
			}
			if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
				var slashes = rest.substr(0, 2) === "//";
				if (slashes && !(proto && hostlessProtocol[proto])) {
					rest = rest.substr(2);
					this.slashes = true;
				}
			}
			if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
				var hostEnd = -1;
				for (var i = 0; i < hostEndingChars.length; i++) {
					var hec = rest.indexOf(hostEndingChars[i]);
					if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
				}
				var auth, atSign;
				if (hostEnd === -1) atSign = rest.lastIndexOf("@");
				else atSign = rest.lastIndexOf("@", hostEnd);
				if (atSign !== -1) {
					auth = rest.slice(0, atSign);
					rest = rest.slice(atSign + 1);
					this.auth = decodeURIComponent(auth);
				}
				hostEnd = -1;
				for (var i = 0; i < nonHostChars.length; i++) {
					var hec = rest.indexOf(nonHostChars[i]);
					if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
				}
				if (hostEnd === -1) hostEnd = rest.length;
				this.host = rest.slice(0, hostEnd);
				rest = rest.slice(hostEnd);
				this.parseHost();
				this.hostname = this.hostname || "";
				var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
				if (!ipv6Hostname) {
					var hostparts = this.hostname.split(/\./);
					for (var i = 0, l = hostparts.length; i < l; i++) {
						var part = hostparts[i];
						if (!part) continue;
						if (!part.match(hostnamePartPattern)) {
							var newpart = "";
							for (var j = 0, k = part.length; j < k; j++) if (part.charCodeAt(j) > 127) newpart += "x";
							else newpart += part[j];
							if (!newpart.match(hostnamePartPattern)) {
								var validParts = hostparts.slice(0, i);
								var notHost = hostparts.slice(i + 1);
								var bit = part.match(hostnamePartStart);
								if (bit) {
									validParts.push(bit[1]);
									notHost.unshift(bit[2]);
								}
								if (notHost.length) rest = "/" + notHost.join(".") + rest;
								this.hostname = validParts.join(".");
								break;
							}
						}
					}
				}
				if (this.hostname.length > hostnameMaxLen) this.hostname = "";
				else this.hostname = this.hostname.toLowerCase();
				if (!ipv6Hostname) this.hostname = punycode.toASCII(this.hostname);
				var p = this.port ? ":" + this.port : "";
				var h = this.hostname || "";
				this.host = h + p;
				this.href += this.host;
				if (ipv6Hostname) {
					this.hostname = this.hostname.substr(1, this.hostname.length - 2);
					if (rest[0] !== "/") rest = "/" + rest;
				}
			}
			if (!unsafeProtocol[lowerProto]) for (var i = 0, l = autoEscape.length; i < l; i++) {
				var ae = autoEscape[i];
				if (rest.indexOf(ae) === -1) continue;
				var esc = encodeURIComponent(ae);
				if (esc === ae) esc = escape(ae);
				rest = rest.split(ae).join(esc);
			}
			var hash = rest.indexOf("#");
			if (hash !== -1) {
				this.hash = rest.substr(hash);
				rest = rest.slice(0, hash);
			}
			var qm = rest.indexOf("?");
			if (qm !== -1) {
				this.search = rest.substr(qm);
				this.query = rest.substr(qm + 1);
				if (parseQueryString) this.query = querystring.parse(this.query);
				rest = rest.slice(0, qm);
			} else if (parseQueryString) {
				this.search = "";
				this.query = {};
			}
			if (rest) this.pathname = rest;
			if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "/";
			if (this.pathname || this.search) {
				var p = this.pathname || "";
				var s = this.search || "";
				this.path = p + s;
			}
			this.href = this.format();
			return this;
		};
		Url.prototype.format = function() {
			var auth = this.auth || "";
			if (auth) {
				auth = encodeURIComponent(auth);
				auth = auth.replace(/%3A/i, ":");
				auth += "@";
			}
			var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
			if (this.host) host = auth + this.host;
			else if (this.hostname) {
				host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
				if (this.port) host += ":" + this.port;
			}
			if (this.query && typeof this.query === "object" && Object.keys(this.query).length) query = querystring.stringify(this.query, {
				arrayFormat: "repeat",
				addQueryPrefix: false
			});
			var search = this.search || query && "?" + query || "";
			if (protocol && protocol.substr(-1) !== ":") protocol += ":";
			if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
				host = "//" + (host || "");
				if (pathname && pathname.charAt(0) !== "/") pathname = "/" + pathname;
			} else if (!host) host = "";
			if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
			if (search && search.charAt(0) !== "?") search = "?" + search;
			pathname = pathname.replace(/[?#]/g, function(match) {
				return encodeURIComponent(match);
			});
			search = search.replace("#", "%23");
			return protocol + host + pathname + search + hash;
		};
		Url.prototype.resolve = function(relative) {
			return this.resolveObject(urlParse(relative, false, true)).format();
		};
		Url.prototype.resolveObject = function(relative) {
			if (typeof relative === "string") {
				var rel = new Url();
				rel.parse(relative, false, true);
				relative = rel;
			}
			var result = new Url();
			var tkeys = Object.keys(this);
			for (var tk = 0; tk < tkeys.length; tk++) {
				var tkey = tkeys[tk];
				result[tkey] = this[tkey];
			}
			result.hash = relative.hash;
			if (relative.href === "") {
				result.href = result.format();
				return result;
			}
			if (relative.slashes && !relative.protocol) {
				var rkeys = Object.keys(relative);
				for (var rk = 0; rk < rkeys.length; rk++) {
					var rkey = rkeys[rk];
					if (rkey !== "protocol") result[rkey] = relative[rkey];
				}
				if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
					result.pathname = "/";
					result.path = result.pathname;
				}
				result.href = result.format();
				return result;
			}
			if (relative.protocol && relative.protocol !== result.protocol) {
				if (!slashedProtocol[relative.protocol]) {
					var keys = Object.keys(relative);
					for (var v = 0; v < keys.length; v++) {
						var k = keys[v];
						result[k] = relative[k];
					}
					result.href = result.format();
					return result;
				}
				result.protocol = relative.protocol;
				if (!relative.host && !hostlessProtocol[relative.protocol]) {
					var relPath = (relative.pathname || "").split("/");
					while (relPath.length && !(relative.host = relPath.shift()));
					if (!relative.host) relative.host = "";
					if (!relative.hostname) relative.hostname = "";
					if (relPath[0] !== "") relPath.unshift("");
					if (relPath.length < 2) relPath.unshift("");
					result.pathname = relPath.join("/");
				} else result.pathname = relative.pathname;
				result.search = relative.search;
				result.query = relative.query;
				result.host = relative.host || "";
				result.auth = relative.auth;
				result.hostname = relative.hostname || relative.host;
				result.port = relative.port;
				if (result.pathname || result.search) result.path = (result.pathname || "") + (result.search || "");
				result.slashes = result.slashes || relative.slashes;
				result.href = result.format();
				return result;
			}
			var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
			if (psychotic) {
				result.hostname = "";
				result.port = null;
				if (result.host) if (srcPath[0] === "") srcPath[0] = result.host;
				else srcPath.unshift(result.host);
				result.host = "";
				if (relative.protocol) {
					relative.hostname = null;
					relative.port = null;
					if (relative.host) if (relPath[0] === "") relPath[0] = relative.host;
					else relPath.unshift(relative.host);
					relative.host = null;
				}
				mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
			}
			if (isRelAbs) {
				result.host = relative.host || relative.host === "" ? relative.host : result.host;
				result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
				result.search = relative.search;
				result.query = relative.query;
				srcPath = relPath;
			} else if (relPath.length) {
				if (!srcPath) srcPath = [];
				srcPath.pop();
				srcPath = srcPath.concat(relPath);
				result.search = relative.search;
				result.query = relative.query;
			} else if (relative.search != null) {
				if (psychotic) {
					result.host = srcPath.shift();
					result.hostname = result.host;
					var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
					if (authInHost) {
						result.auth = authInHost.shift();
						result.hostname = authInHost.shift();
						result.host = result.hostname;
					}
				}
				result.search = relative.search;
				result.query = relative.query;
				if (result.pathname !== null || result.search !== null) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
				result.href = result.format();
				return result;
			}
			if (!srcPath.length) {
				result.pathname = null;
				if (result.search) result.path = "/" + result.search;
				else result.path = null;
				result.href = result.format();
				return result;
			}
			var last = srcPath.slice(-1)[0];
			var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
			var up = 0;
			for (var i = srcPath.length; i >= 0; i--) {
				last = srcPath[i];
				if (last === ".") srcPath.splice(i, 1);
				else if (last === "..") {
					srcPath.splice(i, 1);
					up++;
				} else if (up) {
					srcPath.splice(i, 1);
					up--;
				}
			}
			if (!mustEndAbs && !removeAllDots) for (; up--;) srcPath.unshift("..");
			if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) srcPath.unshift("");
			if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") srcPath.push("");
			var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
			if (psychotic) {
				result.hostname = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
				result.host = result.hostname;
				var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
				if (authInHost) {
					result.auth = authInHost.shift();
					result.hostname = authInHost.shift();
					result.host = result.hostname;
				}
			}
			mustEndAbs = mustEndAbs || result.host && srcPath.length;
			if (mustEndAbs && !isAbsolute) srcPath.unshift("");
			if (srcPath.length > 0) result.pathname = srcPath.join("/");
			else {
				result.pathname = null;
				result.path = null;
			}
			if (result.pathname !== null || result.search !== null) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
			result.auth = relative.auth || result.auth;
			result.slashes = result.slashes || relative.slashes;
			result.href = result.format();
			return result;
		};
		Url.prototype.parseHost = function() {
			var host = this.host;
			var port = portPattern.exec(host);
			if (port) {
				port = port[0];
				if (port !== ":") this.port = port.substr(1);
				host = host.substr(0, host.length - port.length);
			}
			if (host) this.hostname = host;
		};
		exports.parse = urlParse;
	}));
	//#endregion
	//#region node_modules/classnames/dedupe.js
	var require_dedupe = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/*!
		Copyright (c) 2016 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
		*/
		(function() {
			"use strict";
			var classNames = (function() {
				function StorageObject() {}
				StorageObject.prototype = Object.create(null);
				function _parseArray(resultSet, array) {
					var length = array.length;
					for (var i = 0; i < length; ++i) _parse(resultSet, array[i]);
				}
				var hasOwn = {}.hasOwnProperty;
				function _parseNumber(resultSet, num) {
					resultSet[num] = true;
				}
				function _parseObject(resultSet, object) {
					for (var k in object) if (hasOwn.call(object, k)) resultSet[k] = !!object[k];
				}
				var SPACE = /\s+/;
				function _parseString(resultSet, str) {
					var array = str.split(SPACE);
					var length = array.length;
					for (var i = 0; i < length; ++i) resultSet[array[i]] = true;
				}
				function _parse(resultSet, arg) {
					if (!arg) return;
					var argType = typeof arg;
					if (argType === "string") _parseString(resultSet, arg);
					else if (Array.isArray(arg)) _parseArray(resultSet, arg);
					else if (argType === "object") _parseObject(resultSet, arg);
					else if (argType === "number") _parseNumber(resultSet, arg);
				}
				function _classNames() {
					var len = arguments.length;
					var args = Array(len);
					for (var i = 0; i < len; i++) args[i] = arguments[i];
					var classSet = new StorageObject();
					_parseArray(classSet, args);
					var list = [];
					for (var k in classSet) if (classSet[k]) list.push(k);
					return list.join(" ");
				}
				return _classNames;
			})();
			if (typeof module !== "undefined" && module.exports) module.exports = classNames;
			else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
				return classNames;
			});
			else window.classNames = classNames;
		})();
	}));
	//#endregion
	//#region app/javascript/react/lib/ui.js
	var import_dedupe, parseModsfromProps, ui_default;
	var init_ui = __esmMin((() => {
		import_dedupe = /* @__PURE__ */ __toESM(require_dedupe());
		init_i18n_translate();
		parseModsfromProps = function(param) {
			const { className, mods } = param;
			return [mods, className];
		};
		ui_default = {
			parseMods: parseModsfromProps,
			classnames: import_dedupe.default,
			cx: import_dedupe.default,
			t: I18nTranslate
		};
	})), omit;
	var init_utils = __esmMin((() => {
		init_present();
		omit = (obj, keys) => {
			const keysToOmit = Array.isArray(keys) ? keys : [keys];
			return Object.keys(obj).reduce((result, key) => {
				if (!keysToOmit.includes(key)) result[key] = obj[key];
				return result;
			}, {});
		};
		Array.isArray;
	}));
	//#endregion
	//#region app/javascript/react/ui-components/Icon.jsx
	function _extends$4() {
		return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends$4.apply(null, arguments);
	}
	var import_react$8, import_prop_types$8, FONT_AWESOME_ICONS, Icon;
	var init_Icon = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$8 = /* @__PURE__ */ __toESM(require_prop_types());
		init_ui();
		init_utils();
		FONT_AWESOME_ICONS = [
			"cloud",
			"clock-o",
			"flask"
		];
		Icon = (props) => {
			const { i, ...restProps } = omit(props, ["mods"]);
			const iconClass = FONT_AWESOME_ICONS.includes(i) ? `fa fa-${i}` : `icon-${i}`;
			const classes = ui_default.cx(ui_default.parseMods(props), iconClass);
			return /*#__PURE__*/ import_react$8.createElement("i", _extends$4({}, restProps, { className: classes }));
		};
		Icon.propTypes = { i: import_prop_types$8.default.string.isRequired };
	}));
	//#endregion
	//#region app/javascript/react/ui-components/Picture.jsx
	function _extends$3() {
		return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends$3.apply(null, arguments);
	}
	var import_react$7, import_prop_types$7, Picture;
	var init_Picture = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$7 = /* @__PURE__ */ __toESM(require_prop_types());
		init_ui();
		init_i18n_translate();
		init_utils();
		Picture = (props) => {
			const { title, alt, className, mods } = props;
			const restProps = omit(props, ["mods"]);
			const classes = ui_default.cx(className, mods, "ui_picture");
			const titleTxt = title || alt || I18nTranslate("picture_alt_fallback");
			const altTxt = `${I18nTranslate("picture_alt_prefix")} ${titleTxt}`;
			return /*#__PURE__*/ import_react$7.createElement("img", _extends$3({}, restProps, {
				className: classes,
				title: titleTxt,
				alt: altTxt
			}));
		};
		Picture.propTypes = {
			src: import_prop_types$7.default.string.isRequired,
			title: import_prop_types$7.default.string,
			alt: import_prop_types$7.default.string
		};
	}));
	//#endregion
	//#region app/javascript/react/ui-components/ResourceIcon.jsx
	var import_react$6, import_prop_types$6, import_classnames$2, ResourceIcon;
	var init_ResourceIcon = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$6 = /* @__PURE__ */ __toESM(require_prop_types());
		init_Icon();
		import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames());
		ResourceIcon = ({ type, mediaType, thumbnail, tiles, flyout, overrideClasses }) => {
			const mediaTypeIconMapping = (mediaType) => {
				const map = {
					image: "fa fa-file-image-o",
					audio: "fa fa-file-audio-o",
					video: "fa fa-file-video-o",
					document: "fa fa-file-o",
					other: "fa fa-file-o"
				};
				return map[mediaType] || map["other"];
			};
			let style = {};
			if (thumbnail) style = {};
			else if (tiles) style = {
				padding: "64px 0px",
				fontSize: "104px",
				color: "#9a9a9a",
				textAlign: "center",
				backgroundColor: "#fff"
			};
			else if (flyout) style = {
				fontSize: "26px",
				padding: "26px",
				textAlign: "center",
				display: "inline-block"
			};
			else style = {
				fontSize: "104px",
				padding: "64px",
				color: "#9a9a9a"
			};
			if (type === "MediaEntry") {
				const mediaTypeIcon = mediaTypeIconMapping(mediaType);
				return /*#__PURE__*/ import_react$6.createElement("i", {
					className: (0, import_classnames$2.default)("ui_media-type-icon", mediaTypeIcon, overrideClasses),
					style
				});
			} else if (type === "Collection") return /*#__PURE__*/ import_react$6.createElement(Icon, {
				i: "set",
				mods: (0, import_classnames$2.default)("ui_media-type-icon", overrideClasses),
				style
			});
			else return /*#__PURE__*/ import_react$6.createElement(Icon, {
				i: "bang",
				mods: (0, import_classnames$2.default)("ui_media-type-icon", overrideClasses),
				style
			});
		};
		ResourceIcon.propTypes = {
			type: import_prop_types$6.default.oneOf(["MediaEntry", "Collection"]).isRequired,
			mediaType: import_prop_types$6.default.string
		};
	}));
	//#endregion
	//#region app/javascript/react/ui-components/VideoJs.jsx
	function ratioToCss(ratio) {
		if (!ratio || typeof ratio !== "string") return "16 / 9";
		const parts = ratio.split(":").map((part) => part.trim());
		if (parts.length !== 2 || !parts[0] || !parts[1]) return "16 / 9";
		return `${parts[0]} / ${parts[1]}`;
	}
	function uniqueQualityOptions(sources) {
		const byLabel = /* @__PURE__ */ new Map();
		sources.forEach((source) => {
			const label = source.label || "SD";
			if (!byLabel.has(label)) byLabel.set(label, source);
		});
		return Array.from(byLabel.entries()).map(([label, source]) => ({
			label,
			source
		}));
	}
	function pickInitialLabel(sources) {
		const options = uniqueQualityOptions(sources);
		if (options.length === 0) return null;
		const preferred = options.find((option) => option.source.preferred);
		if (preferred) return preferred.label;
		return (options.find((option) => option.label === "SD") || options[0]).label;
	}
	function sourceForLabel(sources, label) {
		if (!sources || !label) return null;
		const match = uniqueQualityOptions(sources).find((entry) => entry.label === label);
		return match ? match.source : null;
	}
	function orderedAudioSources(sources) {
		const rank = (type) => type === "audio/mpeg" ? 0 : 1;
		return sources.filter((source) => source && source.src).slice().sort((a, b) => rank(a.type) - rank(b.type));
	}
	var import_react$5, import_prop_types$5, import_classnames$1, defaultProps, propTypes$2, CAST_CHROME_STYLE, AUDIO_CHROME_STYLE, VOLUME_POPOVER_STYLE, AUDIO_VOLUME_ALWAYS_STYLE, TitleOverlay, VideoJS;
	var init_VideoJs = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$5 = /* @__PURE__ */ __toESM(require_prop_types());
		import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames());
		defaultProps = {
			mode: "video",
			preload: "none",
			onMount: () => ({}),
			onReady: () => ({})
		};
		propTypes$2 = {
			options: import_prop_types$5.default.shape({
				fluid: import_prop_types$5.default.bool,
				fill: import_prop_types$5.default.bool,
				width: import_prop_types$5.default.number,
				height: import_prop_types$5.default.number,
				ratio: import_prop_types$5.default.string,
				controlBar: import_prop_types$5.default.shape({ children: import_prop_types$5.default.arrayOf(import_prop_types$5.default.string) })
			}),
			captionConf: import_prop_types$5.default.any,
			isInternal: import_prop_types$5.default.bool,
			mode: import_prop_types$5.default.oneOf(["audio", "video"]),
			onReady: import_prop_types$5.default.func,
			onMount: import_prop_types$5.default.func,
			sources: import_prop_types$5.default.arrayOf(import_prop_types$5.default.shape({
				key: import_prop_types$5.default.string,
				src: import_prop_types$5.default.string,
				type: import_prop_types$5.default.string,
				label: import_prop_types$5.default.string,
				res: import_prop_types$5.default.oneOfType([import_prop_types$5.default.string, import_prop_types$5.default.number])
			})),
			type: import_prop_types$5.default.oneOf(["audio", "video"]),
			/** e.g. "500px" */
			width: import_prop_types$5.default.string,
			/** e.g. "200px" */
			height: import_prop_types$5.default.string,
			/** URL of a poster image */
			poster: import_prop_types$5.default.string,
			preload: import_prop_types$5.default.string,
			className: import_prop_types$5.default.string
		};
		CAST_CHROME_STYLE = `
  media-cast-button {
    display: none !important;
  }
`;
		AUDIO_CHROME_STYLE = `
  .audio-controls-content,
  .media-button,
  .media-tooltip,
  .media-menu-popup,
  .media-menu-radio-item,
  .media-popup-surface,
  .audio-dialog-popup,
  .media-time-toggle,
  .media-slider,
  .media-slider-track,
  .media-slider-track::before,
  .media-slider-fill::before,
  .media-slider-buffer::before,
  .media-volume-popover {
    border-radius: 0 !important;
    corner-shape: square !important;
  }

  .audio-controls-content {
    width: 100%;
    margin-top: auto;
  }
`;
		VOLUME_POPOVER_STYLE = `
  media-volume-popover {
    position: static !important;
    inset: auto !important;
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: auto !important;
    translate: none !important;
    margin: 0 !important;
    display: none !important;
    flex: none;
    align-self: center;
  }

  media-volume-popover[data-open] {
    display: block !important;
  }

  /* Audio: keep the slider right of the mute button (like video),
     not as a left-side flyout with extra padding/gradient. */
  media-volume-popover[data-side="left"] {
    order: 0 !important;
    background-image: none !important;
    padding-inline: calc(var(--media-spacing) * 3) !important;
  }
`;
		AUDIO_VOLUME_ALWAYS_STYLE = `
  media-volume-popover {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }
`;
		TitleOverlay = class extends import_react$5.Component {
			render() {
				const { title, logoTitle, subtitle, link, hidden, logo } = this.props;
				return /*#__PURE__*/ import_react$5.createElement("a", {
					className: (0, import_classnames$1.default)("madek-titlebar", { "is-hidden": hidden }),
					href: link,
					target: "_blank",
					rel: "noreferrer noopener"
				}, /*#__PURE__*/ import_react$5.createElement("span", { className: "madek-titlebar-caption" }, /*#__PURE__*/ import_react$5.createElement("span", { className: "madek-titlebar-title" }, title), /*#__PURE__*/ import_react$5.createElement("span", { className: "madek-titlebar-subtitle" }, subtitle)), logo ? /*#__PURE__*/ import_react$5.createElement("span", {
					className: "madek-titlebar-logo",
					title: logoTitle
				}) : null);
			}
		};
		TitleOverlay.propTypes = {
			title: import_prop_types$5.default.string,
			logoTitle: import_prop_types$5.default.string,
			subtitle: import_prop_types$5.default.string,
			link: import_prop_types$5.default.string,
			hidden: import_prop_types$5.default.bool,
			logo: import_prop_types$5.default.bool
		};
		VideoJS = class extends import_react$5.Component {
			constructor(props) {
				super(props);
				this.mediaRef = /*#__PURE__*/ (0, import_react$5.createRef)();
				this.pendingRestore = null;
				this.state = {
					selectedLabel: pickInitialLabel(props.sources || []),
					titleHidden: false
				};
				this.qualityMenuAttempts = 0;
				this.audioLayoutAttempts = 0;
				this.volumePopoverAttempts = 0;
				this.playbackCleanups = [];
				this.layersRef = /*#__PURE__*/ (0, import_react$5.createRef)();
				this.lyricsRef = /*#__PURE__*/ (0, import_react$5.createRef)();
				this.onPlay = this.onPlay.bind(this);
				this.onPause = this.onPause.bind(this);
				this.onQualityChange = this.onQualityChange.bind(this);
				this.onQualityMenuChange = this.onQualityMenuChange.bind(this);
				this.onAudioAreaClick = this.onAudioAreaClick.bind(this);
			}
			onAudioAreaClick(event) {
				const media = this.mediaRef.current;
				if (!media) return;
				const native = event.nativeEvent || event;
				if ((typeof native.composedPath === "function" ? native.composedPath() : [event.target]).some((node) => {
					if (!node || node === event.currentTarget) return false;
					if (!node.tagName) return false;
					const tag = node.tagName.toLowerCase();
					if (tag === "audio") return false;
					if (tag.startsWith("media-") || [
						"button",
						"a",
						"input",
						"select",
						"label"
					].includes(tag)) return true;
					const cls = typeof node.className === "string" ? node.className : "";
					return /\baudio-controls-content\b|\bmedia-popup\b|\bmedia-button\b/.test(cls);
				})) return;
				if (media.paused || media.ended) {
					const playPromise = media.play();
					if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
				} else media.pause();
			}
			componentDidMount() {
				const { onMount, onReady } = this.props;
				onMount();
				this.bindMediaEvents();
				const media = this.mediaRef.current;
				if (media && onReady) onReady(media);
				this.scheduleQualityMenuSync();
				this.scheduleAudioLayout();
				this.scheduleVolumePopover();
				this.bindPlayback();
			}
			componentDidUpdate(prevProps, prevState) {
				if (prevProps.sources !== this.props.sources) {
					const nextLabel = pickInitialLabel(this.props.sources || []);
					if (nextLabel !== this.state.selectedLabel) this.setState({ selectedLabel: nextLabel });
				}
				if (prevState.selectedLabel !== this.state.selectedLabel && this.pendingRestore) this.restorePlaybackAfterSourceChange();
				if (prevProps.mode !== this.props.mode) {
					this.bindMediaEvents();
					this.scheduleAudioLayout();
					this.scheduleVolumePopover();
				}
				if (prevProps.sources !== this.props.sources || prevState.selectedLabel !== this.state.selectedLabel || prevProps.mode !== this.props.mode) this.scheduleQualityMenuSync();
			}
			componentWillUnmount() {
				this.unbindMediaEvents();
				if (this.qualityMenuTimer) clearTimeout(this.qualityMenuTimer);
				if (this.audioLayoutTimer) clearTimeout(this.audioLayoutTimer);
				if (this.volumePopoverTimer) clearTimeout(this.volumePopoverTimer);
				this.clearPlayback();
			}
			bindMediaEvents() {
				this.unbindMediaEvents();
				const media = this.mediaRef.current;
				if (!media) return;
				media.addEventListener("play", this.onPlay);
				media.addEventListener("pause", this.onPause);
			}
			unbindMediaEvents() {
				const media = this.mediaRef.current;
				if (!media) return;
				media.removeEventListener("play", this.onPlay);
				media.removeEventListener("pause", this.onPause);
			}
			onPlay() {
				if (this.props.mode === "video" && !this.props.isInternal) this.setState({ titleHidden: true });
			}
			onPause() {
				if (this.props.mode === "video" && !this.props.isInternal) this.setState({ titleHidden: false });
			}
			onQualityMenuChange(event) {
				const nextLabel = event.detail && event.detail.value;
				this.onQualityChange({ target: { value: nextLabel } });
			}
			scheduleAudioLayout() {
				if (this.props.mode !== "audio") return;
				if (this.audioLayoutTimer) clearTimeout(this.audioLayoutTimer);
				this.audioLayoutAttempts = 0;
				const attempt = () => {
					this.audioLayoutAttempts += 1;
					if (this.applyAudioLayout()) return;
					if (this.audioLayoutAttempts >= 20) return;
					this.audioLayoutTimer = setTimeout(attempt, 50);
				};
				this.audioLayoutTimer = setTimeout(attempt, 0);
			}
			scheduleVolumePopover() {
				if (this.volumePopoverTimer) clearTimeout(this.volumePopoverTimer);
				this.volumePopoverAttempts = 0;
				const attempt = () => {
					this.volumePopoverAttempts += 1;
					if (this.pinVolumePopover()) return;
					if (this.volumePopoverAttempts >= 20) return;
					this.volumePopoverTimer = setTimeout(attempt, 50);
				};
				this.volumePopoverTimer = setTimeout(attempt, 0);
			}
			pinVolumePopover() {
				const media = this.mediaRef.current;
				const skin = media && media.closest("video-neutral-skin, audio-neutral-skin");
				const shadow = skin && skin.shadowRoot;
				const pop = shadow && shadow.querySelector("media-volume-popover");
				if (!pop) return false;
				if (!shadow.querySelector("#madek-volume-popover")) {
					const style = document.createElement("style");
					style.id = "madek-volume-popover";
					style.textContent = VOLUME_POPOVER_STYLE + (this.props.mode === "audio" ? AUDIO_VOLUME_ALWAYS_STYLE : "");
					shadow.append(style);
				}
				if (!pop.dataset.madekVolumePinned) {
					pop.dataset.madekVolumePinned = "true";
					try {
						HTMLElement.prototype.hidePopover.call(pop);
					} catch {}
					pop.showPopover = () => {
						try {
							HTMLElement.prototype.hidePopover.call(pop);
						} catch {}
					};
				}
				return true;
			}
			applyAudioLayout() {
				const media = this.mediaRef.current;
				const skin = media && media.closest("audio-neutral-skin");
				const root = skin && skin.shadowRoot;
				const frame = root && root.querySelector(".audio-skin");
				if (!frame) return false;
				frame.style.setProperty("height", "100%", "important");
				frame.style.setProperty("min-height", "0", "important");
				frame.style.setProperty("display", "flex", "important");
				frame.style.setProperty("flex-direction", "column", "important");
				frame.style.setProperty("justify-content", "flex-end", "important");
				frame.style.setProperty("border-radius", "0", "important");
				if (!root.querySelector("#madek-audio-layout")) {
					const style = document.createElement("style");
					style.id = "madek-audio-layout";
					style.textContent = AUDIO_CHROME_STYLE;
					root.append(style);
				}
				this.mountAudioCaptions(root, media);
				return true;
			}
			clearPlayback() {
				(this.playbackCleanups || []).forEach((remove) => remove());
				this.playbackCleanups = [];
			}
			listen(target, type, handler) {
				if (!target || !handler) return;
				target.addEventListener(type, handler);
				this.playbackCleanups.push(() => target.removeEventListener(type, handler));
			}
			playbackTracks(kind) {
				const tracks = this.props.playback && this.props.playback.tracks || [];
				if (!kind) return tracks;
				return tracks.filter((track) => kind === "subtitles" ? track.kind !== "chapters" : track.kind === kind);
			}
			bindPlayback() {
				this.clearPlayback();
				const media = this.mediaRef.current;
				if (!media || !this.props.playback) return;
				const preferred = this.playbackTracks("subtitles").find((track) => track.default);
				if (preferred) this.watchSubtitles(media, preferred.srclang);
				this.watchChapters(media);
				this.watchLayers(media);
				if (this.props.mode === "audio") this.watchLyrics(media);
			}
			watchSubtitles(media, language) {
				const started = Date.now();
				const apply = () => {
					if (this.adjustingTracks) return;
					if (Date.now() - started > 1500) {
						if (media.textTracks) media.textTracks.removeEventListener("change", apply);
						return;
					}
					const subtitles = [...media.textTracks || []].filter((track) => track.kind === "subtitles" || track.kind === "captions");
					const preferred = subtitles.find((track) => track.language === language);
					if (!preferred) return;
					this.adjustingTracks = true;
					subtitles.forEach((track) => {
						const mode = track === preferred ? "showing" : "disabled";
						if (track.mode !== mode) track.mode = mode;
					});
					this.adjustingTracks = false;
				};
				this.listen(media.textTracks, "change", apply);
				this.listen(media, "loadedmetadata", apply);
				apply();
			}
			watchChapters(media) {
				const apply = () => {
					if (this.adjustingTracks) return;
					const chapters = [...media.textTracks || []].filter((track) => track.kind === "chapters");
					if (!chapters.length) return;
					const showing = [...media.textTracks || []].find((track) => (track.kind === "subtitles" || track.kind === "captions") && track.mode === "showing");
					const active = chapters.find((track) => track.language === (showing && showing.language)) || chapters[0];
					this.adjustingTracks = true;
					chapters.forEach((track) => {
						const mode = track === active ? "hidden" : "disabled";
						if (track.mode !== mode) track.mode = mode;
					});
					this.adjustingTracks = false;
				};
				this.listen(media, "loadedmetadata", apply);
				this.listen(media.textTracks, "change", apply);
				apply();
			}
			watchLayers(media) {
				const root = this.layersRef.current;
				if (!root) return;
				const headers = [...root.querySelectorAll(".madek-player-header")];
				const overlays = [...root.querySelectorAll(".madek-player-overlay")];
				const fallback = (this.playbackTracks("subtitles").find((track) => track.default) || {}).srclang || "";
				const syncLanguage = () => {
					const showing = [...media.textTracks || []].find((track) => (track.kind === "subtitles" || track.kind === "captions") && track.mode === "showing");
					const language = showing && showing.language || fallback;
					overlays.forEach((overlay) => {
						const variants = [...overlay.querySelectorAll("[data-lang]")];
						const match = variants.find((node) => node.dataset.lang === language) || variants.find((node) => node.dataset.lang === fallback) || variants[0];
						variants.forEach((node) => {
							node.hidden = node !== match;
						});
					});
				};
				const covers = (element) => {
					const time = media.currentTime || 0;
					return time >= Number(element.dataset.start) && time < Number(element.dataset.end);
				};
				const stopsMedia = (overlay) => overlay && overlay.dataset.stopMediaDuringOverlay === "true";
				const overlayKey = (overlay) => overlay ? `${overlay.dataset.start}-${overlay.dataset.end}` : "";
				let holdTimer = 0;
				let pausedByOverlay = false;
				let scriptedPlay = false;
				let doneKey = "";
				const clearHold = () => {
					if (!holdTimer) return;
					window.clearTimeout(holdTimer);
					holdTimer = 0;
				};
				this.playbackCleanups.push(clearHold);
				const resumeFromOverlay = () => {
					if (!pausedByOverlay) return;
					pausedByOverlay = false;
					scriptedPlay = true;
					const playPromise = media.play();
					if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
					scriptedPlay = false;
				};
				const startHold = (overlay) => {
					if (!stopsMedia(overlay) || holdTimer || media.paused) return;
					const key = overlayKey(overlay);
					if (doneKey === key) return;
					media.pause();
					pausedByOverlay = true;
					const remaining = Math.max(0, (Number(overlay.dataset.end) - media.currentTime) * 1e3);
					holdTimer = window.setTimeout(() => {
						holdTimer = 0;
						doneKey = key;
						resumeFromOverlay();
						sync();
					}, remaining);
				};
				const sync = () => {
					const active = overlays.find(covers);
					const key = overlayKey(active);
					if (doneKey && doneKey !== key) {
						clearHold();
						doneKey = "";
						pausedByOverlay = false;
					}
					if (!stopsMedia(active)) clearHold();
					headers.forEach((header) => {
						header.hidden = !covers(header);
					});
					const showOverlay = Boolean(active) && !(stopsMedia(active) && doneKey === key);
					overlays.forEach((overlay) => {
						overlay.hidden = overlay !== active || !showOverlay;
					});
					if (showOverlay) startHold(active);
				};
				this.listen(media, "play", () => {
					if (scriptedPlay || !holdTimer) return;
					clearHold();
					doneKey = overlayKey(overlays.find(covers));
					pausedByOverlay = false;
				});
				this.listen(media, "timeupdate", sync);
				this.listen(media, "seeked", sync);
				this.listen(media.textTracks, "change", syncLanguage);
				syncLanguage();
				sync();
			}
			watchLyrics(media) {
				const lyrics = this.lyricsRef.current;
				if (!lyrics) return;
				const seen = /* @__PURE__ */ new WeakSet();
				const sync = () => {
					const showing = [...media.textTracks || []].find((track) => (track.kind === "subtitles" || track.kind === "captions") && track.mode === "showing");
					const cue = showing && showing.activeCues && showing.activeCues[0];
					lyrics.hidden = !cue;
					lyrics.textContent = cue ? cue.text : "";
				};
				const watch = () => {
					[...media.textTracks || []].forEach((track) => {
						if (seen.has(track)) return;
						seen.add(track);
						this.listen(track, "cuechange", sync);
					});
					sync();
				};
				this.listen(media.textTracks, "addtrack", watch);
				this.listen(media.textTracks, "change", sync);
				this.listen(media, "timeupdate", sync);
				this.listen(media, "seeked", sync);
				watch();
			}
			mountAudioCaptions(root, media) {
				const tracks = this.playbackTracks("subtitles");
				const end = root.querySelector(".audio-controls-end");
				if (!tracks.length || !end || end.querySelector("#madek-captions-trigger")) return;
				const preferred = tracks.find((track) => track.default);
				const button = document.createElement("button");
				button.type = "button";
				button.id = "madek-captions-trigger";
				button.className = "media-button";
				button.setAttribute("commandfor", "madek-captions-popup");
				button.setAttribute("aria-label", "Subtitles");
				button.textContent = "CC";
				const menu = document.createElement("media-menu");
				menu.id = "madek-captions-popup";
				menu.setAttribute("side", "top");
				menu.setAttribute("align", "center");
				menu.className = "media-popup media-popup-surface media-menu-popup";
				const content = document.createElement("media-menu-content");
				content.className = "media-menu-content";
				const group = document.createElement("media-menu-radio-group");
				group.className = "media-menu-radio-group";
				group.setAttribute("aria-label", "Subtitles");
				group.value = preferred ? preferred.srclang : "off";
				const addItem = (value, label) => {
					const item = document.createElement("media-menu-radio-item");
					item.className = "media-menu-radio-item";
					item.value = value;
					const text = document.createElement("span");
					text.setAttribute("data-part", "label");
					text.textContent = label;
					item.append(text);
					group.append(item);
				};
				addItem("off", "Off");
				tracks.forEach((track) => addItem(track.srclang, track.label || track.srclang));
				content.append(group);
				menu.append(content);
				const volumePopover = end.querySelector("media-volume-popover");
				if (volumePopover) volumePopover.after(button, menu);
				else end.prepend(button, menu);
				group.addEventListener("value-change", (event) => {
					const language = event.detail && event.detail.value;
					[...media.textTracks || []].forEach((track) => {
						if (track.kind !== "subtitles" && track.kind !== "captions") return;
						track.mode = language !== "off" && track.language === language ? "showing" : "disabled";
					});
				});
			}
			scheduleQualityMenuSync() {
				if (this.qualityMenuTimer) clearTimeout(this.qualityMenuTimer);
				this.qualityMenuAttempts = 0;
				const attempt = () => {
					this.qualityMenuAttempts += 1;
					if (this.syncQualityMenu()) return;
					if (this.qualityMenuAttempts >= 20) return;
					this.qualityMenuTimer = setTimeout(attempt, 50);
				};
				this.qualityMenuTimer = setTimeout(attempt, 0);
			}
			hideCastButton(shadow) {
				if (!shadow.querySelector("#madek-hide-cast")) {
					const style = document.createElement("style");
					style.id = "madek-hide-cast";
					style.textContent = CAST_CHROME_STYLE;
					shadow.append(style);
				}
				shadow.querySelectorAll("media-cast-button").forEach((button) => {
					const id = button.getAttribute("id");
					if (id) shadow.querySelectorAll("media-tooltip").forEach((tip) => {
						if (tip.getAttribute("trigger") === id) tip.remove();
					});
					button.remove();
				});
			}
			syncQualityMenu() {
				if (this.props.mode !== "video") return true;
				const media = this.mediaRef.current;
				const skin = media && media.closest("video-neutral-skin");
				const shadow = skin && skin.shadowRoot;
				if (!shadow || !customElements.get("media-menu-radio-group")) return false;
				this.hideCastButton(shadow);
				const options = uniqueQualityOptions(this.props.sources || []);
				const nativeGroup = shadow.querySelector("media-quality-radio-group");
				const page = nativeGroup && nativeGroup.parentElement || shadow.querySelector("media-menu-radio-group.madek-quality-group")?.parentElement;
				if (!page) return false;
				if (options.length < 2) return true;
				if (nativeGroup) nativeGroup.remove();
				let group = page.querySelector("media-menu-radio-group.madek-quality-group");
				if (!group) {
					group = document.createElement("media-menu-radio-group");
					group.className = "media-menu-radio-group madek-quality-group";
					group.addEventListener("value-change", this.onQualityMenuChange);
					page.appendChild(group);
				}
				const labels = options.map((option) => option.label);
				if ([...group.querySelectorAll("media-menu-radio-item")].map((item) => item.value).join("|") !== labels.join("|")) group.replaceChildren(...labels.map((label) => {
					const item = document.createElement("media-menu-radio-item");
					item.className = "media-menu-radio-item";
					item.value = label;
					const text = document.createElement("span");
					text.setAttribute("data-part", "label");
					text.textContent = label;
					const indicator = document.createElement("media-menu-item-indicator");
					indicator.setAttribute("force-mount", "");
					indicator.className = "media-menu-item-indicator";
					const icon = document.createElement("media-icon");
					icon.setAttribute("family", "neutral");
					icon.setAttribute("name", "check");
					icon.className = "media-menu-radio-item-icon";
					indicator.appendChild(icon);
					item.append(text, indicator);
					return item;
				}));
				const selected = this.state.selectedLabel || labels[0];
				if (group.value !== selected) group.value = selected;
				if (typeof group.publishMenuOptionState === "function") group.publishMenuOptionState(false, false, "available");
				const trigger = page.id && shadow.querySelector(`[commandfor="${page.id}"]`);
				return Boolean(trigger && trigger.getAttribute("data-availability") === "available");
			}
			onQualityChange(event) {
				const media = this.mediaRef.current;
				const nextLabel = event.target.value;
				if (!nextLabel || nextLabel === this.state.selectedLabel) return;
				this.pendingRestore = media ? {
					currentTime: media.currentTime || 0,
					wasPlaying: !media.paused && !media.ended
				} : null;
				this.setState({ selectedLabel: nextLabel });
			}
			restorePlaybackAfterSourceChange() {
				const media = this.mediaRef.current;
				const restore = this.pendingRestore;
				this.pendingRestore = null;
				if (!media || !restore) return;
				let resumed = false;
				const finish = () => {
					if (resumed) return;
					resumed = true;
					media.removeEventListener("loadeddata", finish);
					media.removeEventListener("timeupdate", finish);
					try {
						media.currentTime = restore.currentTime;
					} catch {}
					if (restore.wasPlaying) {
						const playPromise = media.play();
						if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
					}
				};
				media.addEventListener("loadeddata", finish);
				media.addEventListener("timeupdate", finish);
				setTimeout(finish, 100);
				media.load();
			}
			renderTracks() {
				return this.playbackTracks().map((track) => /*#__PURE__*/ import_react$5.createElement("track", {
					key: `${track.kind}-${track.srclang}`,
					kind: track.kind === "chapters" ? "chapters" : "subtitles",
					src: track.src,
					srcLang: track.srclang,
					label: track.label,
					default: track.default ? true : void 0
				}));
			}
			renderPlaybackLayers() {
				const playback = this.props.playback;
				if (!playback) return null;
				const headers = playback.headers || [];
				const overlays = playback.overlays || [];
				const showLyrics = this.props.mode === "audio" && this.playbackTracks("subtitles").length > 0;
				if (!headers.length && !overlays.length && !showLyrics) return null;
				const fallback = (this.playbackTracks("subtitles").find((track) => track.default) || {}).srclang || "";
				return /*#__PURE__*/ import_react$5.createElement("div", {
					className: "madek-player-layers",
					ref: this.layersRef
				}, headers.map((header) => {
					const image = /*#__PURE__*/ import_react$5.createElement("img", {
						src: header.src,
						alt: header.alt || ""
					});
					return header.href ? /*#__PURE__*/ import_react$5.createElement("a", {
						key: `${header.src}-${header.start}`,
						className: "madek-player-header",
						href: header.href,
						target: header.target || "_blank",
						rel: "noopener noreferrer",
						"data-start": header.start,
						"data-end": header.end,
						hidden: header.start > 0
					}, image) : /*#__PURE__*/ import_react$5.createElement("span", {
						key: `${header.src}-${header.start}`,
						className: "madek-player-header",
						"data-start": header.start,
						"data-end": header.end,
						hidden: header.start > 0
					}, image);
				}), overlays.map((overlay) => /*#__PURE__*/ import_react$5.createElement("div", {
					key: `${overlay.start}-${overlay.end}`,
					className: "madek-player-overlay",
					"data-start": overlay.start,
					"data-end": overlay.end,
					"data-stop-media-during-overlay": overlay.stop_media_during_overlay ? "true" : "false",
					hidden: true
				}, Object.entries(overlay.text || {}).map(([code, text]) => /*#__PURE__*/ import_react$5.createElement("span", {
					key: code,
					"data-lang": code,
					hidden: code !== fallback
				}, text)))), showLyrics ? /*#__PURE__*/ import_react$5.createElement("div", {
					className: "madek-player-lyrics",
					ref: this.lyricsRef,
					hidden: true
				}) : null);
			}
			renderTitleOverlay() {
				const { captionConf, isInternal, mode } = this.props;
				if (isInternal || !captionConf || mode !== "video") return null;
				const { title, logoTitle, subtitle, link } = captionConf;
				return /*#__PURE__*/ import_react$5.createElement(TitleOverlay, {
					title,
					logoTitle,
					subtitle,
					link,
					logo: true,
					hidden: this.state.titleHidden
				});
			}
			render() {
				const { sources, mode, options = {}, poster, preload, className } = this.props;
				if (!sources) throw new TypeError();
				const selected = sourceForLabel(sources, this.state.selectedLabel);
				const skinStyle = {
					display: "block",
					width: "100%",
					aspectRatio: ratioToCss(options.ratio),
					"--media-accent-color": "#d0d0d0",
					"--media-accent-text-color": "#1a1a1a",
					"--media-font-family": "'Open Sans', sans-serif",
					"--media-scale-unit": "12px"
				};
				if (options.fill) {
					skinStyle.width = "100%";
					skinStyle.height = "100%";
					skinStyle.minHeight = 0;
					delete skinStyle.aspectRatio;
					if (mode === "audio") {
						skinStyle.position = "absolute";
						skinStyle.inset = "0";
					} else {
						skinStyle.overflow = "hidden";
						skinStyle.gridTemplateRows = "minmax(0, 1fr)";
					}
				} else {
					if (options.width) skinStyle.width = options.width;
					if (options.height) {
						delete skinStyle.aspectRatio;
						skinStyle.height = options.height;
					}
				}
				const mediaProps = {
					ref: this.mediaRef,
					preload: preload || "none",
					playsInline: true,
					poster: mode === "video" ? poster : void 0,
					src: selected ? selected.src : void 0,
					style: options.fill && mode === "video" ? {
						position: "absolute",
						inset: "0",
						width: "100%",
						height: "100%",
						maxWidth: "100%",
						maxHeight: "100%",
						objectFit: "contain"
					} : void 0
				};
				const wrapperClass = (0, import_classnames$1.default)(className, "madek-media-player", `madek-media-player--${mode}`, { "madek-media-player--fill": options.fill });
				if (mode === "audio") {
					Object.assign(skinStyle, {
						"--media-controls-radius": "0",
						"--media-control-radius": "0",
						"--media-menu-item-radius": "0",
						"--media-popup-radius": "0",
						"--media-dialog-radius": "0",
						"--media-video-border-radius": "0",
						"--media-control-corner-shape": "square"
					});
					const audioSources = orderedAudioSources(sources);
					const audioProps = { ...mediaProps };
					delete audioProps.src;
					return /*#__PURE__*/ import_react$5.createElement("div", {
						className: wrapperClass,
						style: { cursor: "pointer" },
						onClick: this.onAudioAreaClick
					}, /*#__PURE__*/ import_react$5.createElement("audio-player", null, /*#__PURE__*/ import_react$5.createElement("audio-neutral-skin", { style: skinStyle }, /*#__PURE__*/ import_react$5.createElement("audio", audioProps, audioSources.map((source) => /*#__PURE__*/ import_react$5.createElement("source", {
						key: source.key || source.src,
						src: source.src,
						type: source.type
					})), this.renderTracks()))), this.renderPlaybackLayers());
				}
				return /*#__PURE__*/ import_react$5.createElement("div", { className: wrapperClass }, /*#__PURE__*/ import_react$5.createElement("video-player", { poster: poster || void 0 }, /*#__PURE__*/ import_react$5.createElement("video-neutral-skin", { style: skinStyle }, /*#__PURE__*/ import_react$5.createElement("video", mediaProps, this.renderTracks()))), this.renderPlaybackLayers(), this.renderTitleOverlay());
			}
		};
		VideoJS.propTypes = propTypes$2;
		VideoJS.defaultProps = defaultProps;
	}));
	//#endregion
	//#region app/javascript/react/ui-components/AudioPlayer.jsx
	function _extends$2() {
		return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends$2.apply(null, arguments);
	}
	var import_react$4, import_prop_types$4, propTypes$1, AudioPlayer;
	var init_AudioPlayer = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$4 = /* @__PURE__ */ __toESM(require_prop_types());
		init_VideoJs();
		propTypes$1 = {
			/** Soures of different type and quality (e.g. ogg, mp3) */
			sources: import_prop_types$4.default.arrayOf(import_prop_types$4.default.shape({
				url: import_prop_types$4.default.string,
				content_type: import_prop_types$4.default.string,
				profile: import_prop_types$4.default.string
			})),
			/** Options (geometry) */
			options: import_prop_types$4.default.shape({
				fluid: import_prop_types$4.default.bool,
				width: import_prop_types$4.default.number,
				height: import_prop_types$4.default.number,
				ratio: import_prop_types$4.default.string
			})
		};
		AudioPlayer = class extends import_react$4.Component {
			constructor() {
				super();
			}
			render({ sources, options, ...props } = this.props) {
				const videoSources = sources.map((source) => ({
					src: source.url,
					type: source.content_type,
					key: `${source.url}${source.content_type}`
				}));
				return /*#__PURE__*/ import_react$4.createElement("div", { style: {
					margin: "0px",
					padding: "0px"
				} }, /*#__PURE__*/ import_react$4.createElement(VideoJS, _extends$2({}, props, {
					mode: "audio",
					className: "ui-audio-player",
					sources: videoSources,
					options: options || {}
				})));
			}
		};
		AudioPlayer.propTypes = propTypes$1;
	}));
	//#endregion
	//#region app/javascript/react/ui-components/VideoPlayer.jsx
	function _extends$1() {
		return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends$1.apply(null, arguments);
	}
	var import_react$3, import_prop_types$3, propTypes, sourceLabel, VideoPlayer;
	var init_VideoPlayer = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$3 = /* @__PURE__ */ __toESM(require_prop_types());
		init_lodash();
		init_VideoJs();
		propTypes = {
			sources: import_prop_types$3.default.arrayOf(import_prop_types$3.default.shape({
				url: import_prop_types$3.default.string,
				content_type: import_prop_types$3.default.string,
				profile: import_prop_types$3.default.string
			})),
			/** Options (geometry) */
			options: import_prop_types$3.default.shape({
				fluid: import_prop_types$3.default.bool,
				width: import_prop_types$3.default.number,
				height: import_prop_types$3.default.number,
				ratio: import_prop_types$3.default.string
			})
		};
		sourceLabel = ({ profile }) => endsWith(profile, "_HD") ? "HD" : "SD";
		VideoPlayer = class extends import_react$3.Component {
			render({ sources, options, ...props } = this.props) {
				const videoSources = sources.map((source) => ({
					src: source.url,
					type: source.content_type,
					label: sourceLabel(source),
					res: source.height,
					key: `${source.url}${source.content_type}`
				}));
				const mp4s = videoSources.filter((source) => source.type === "video/mp4").sort((a, b) => {
					if (a.label === "SD") return -1;
					else if (b.label === "SD") return 1;
					return 0;
				});
				const webms = videoSources.filter((source) => source.type === "video/webm").sort((a, b) => {
					if (a.label === "SD") return -1;
					else if (b.label === "SD") return 1;
					return 0;
				});
				const sortedSources = mp4s.concat(webms);
				return /*#__PURE__*/ import_react$3.createElement(VideoJS, _extends$1({}, props, {
					sources: sortedSources,
					options: options || {}
				}));
			}
		};
		VideoPlayer.propTypes = propTypes;
	}));
	//#endregion
	//#region app/javascript/react/ui-components/MediaPlayer.jsx
	var import_react$2, import_prop_types$2, MediaPlayer;
	var init_MediaPlayer = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$2 = /* @__PURE__ */ __toESM(require_prop_types());
		init_utils();
		init_i18n_translate();
		init_AudioPlayer();
		init_VideoPlayer();
		MediaPlayer = ({ type, poster, sources, getUrl, ...props }) => {
			const [active, setActive] = (0, import_react$2.useState)(false);
			const [showHint] = (0, import_react$2.useState)(false);
			(0, import_react$2.useEffect)(() => {
				setActive(true);
			}, []);
			const mediaProps = omit({
				type,
				poster,
				sources,
				getUrl,
				...props
			}, ["originalUrl"]);
			if (type === "audio") return /*#__PURE__*/ import_react$2.createElement("div", { style: {
				margin: "0px",
				padding: "0px"
			} }, /*#__PURE__*/ import_react$2.createElement(AudioPlayer, mediaProps), showHint && /*#__PURE__*/ import_react$2.createElement("p", { style: { marginTop: "40px" } }, I18nTranslate("media_entry_file_format_not_supported_1"), /*#__PURE__*/ import_react$2.createElement("a", { href: getUrl + "/export" }, I18nTranslate("media_entry_file_format_not_supported_2")), I18nTranslate("media_entry_file_format_not_supported_3")));
			else if (!active) return /*#__PURE__*/ import_react$2.createElement("div", null, /*#__PURE__*/ import_react$2.createElement("div", { className: "no-js" }, /*#__PURE__*/ import_react$2.createElement(VideoPlayer, mediaProps)), /*#__PURE__*/ import_react$2.createElement("div", { className: "js-only" }, /*#__PURE__*/ import_react$2.createElement("img", {
				src: poster,
				style: {
					height: "100%",
					width: "100%"
				}
			})));
			else return /*#__PURE__*/ import_react$2.createElement(VideoPlayer, mediaProps);
		};
		MediaPlayer.propTypes = {
			type: import_prop_types$2.default.oneOf(["audio", "video"]).isRequired,
			sources: import_prop_types$2.default.arrayOf(import_prop_types$2.default.shape({
				url: import_prop_types$2.default.string.isRequired,
				content_type: import_prop_types$2.default.string.isRequired
			}).isRequired).isRequired,
			poster: import_prop_types$2.default.string
		};
	}));
	//#endregion
	//#region app/javascript/react/decorators/MediaEntryPreview.jsx
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	var import_react$1, import_prop_types$1, import_classnames, import_lib, import_url, MediaEntryPreview, IframeEmbed;
	var init_MediaEntryPreview = __esmMin((() => {
		init_lodash();
		import_react$1 = /* @__PURE__ */ __toESM(require_react());
		import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types());
		init_i18n_translate();
		import_classnames = /* @__PURE__ */ __toESM(require_classnames());
		import_lib = /* @__PURE__ */ __toESM(require_lib());
		import_url = require_url();
		init_Icon();
		init_Picture();
		init_ResourceIcon();
		init_MediaPlayer();
		MediaEntryPreview = class extends import_react$1.Component {
			static propTypes = {
				get: import_prop_types$1.default.shape({
					title: import_prop_types$1.default.string.isRequired,
					media_file: import_prop_types$1.default.shape({ previews: import_prop_types$1.default.object }).isRequired
				}).isRequired,
				mods: import_prop_types$1.default.any
			};
			render() {
				const { get: get$1, mediaProps, withLink, withZoomLink, isEmbedded } = this.props;
				const { image_url, title, media_type, type, export_url } = get$1;
				const { previews, original_file_url } = get$1.media_file;
				const classes = (0, import_classnames.default)(this.props.mods);
				const usesIframeEmbed = !isEmbedded && includes(["audio", "video"], media_type);
				const imageHref = get(last(sortBy(previews.images, "width")), "url");
				const picture = image_url || imageHref ? /*#__PURE__*/ import_react$1.createElement(Picture, _extends({
					title,
					src: image_url || imageHref
				}, mediaProps)) : /*#__PURE__*/ import_react$1.createElement(ResourceIcon, {
					mediaType: media_type,
					thumbnail: false,
					type
				});
				const mediaPlayerConfig = merge({
					poster: imageHref || image_url,
					originalUrl: original_file_url
				}, mediaProps);
				const not_ready = (get$1.media_type == "video" || get$1.media_type == "audio") && get(get$1, "media_file.conversion_status") != "finished";
				const missingAvPreviews = get$1.media_type == "video" && (previews.videos || []).length == 0 || get$1.media_type == "audio" && (previews.audios || []).length == 0;
				if (not_ready || missingAvPreviews) {
					const status = !not_ready && missingAvPreviews ? "failed" : get$1.media_file.conversion_status;
					const warningText = status === "submitted" ? [
						I18nTranslate("media_entry_conversion_progress_pre"),
						get$1.media_file.conversion_progress,
						I18nTranslate("media_entry_conversion_progress_post")
					].join("") : I18nTranslate("media_entry_conversion_status_" + status);
					return /*#__PURE__*/ import_react$1.createElement("div", { className: classes }, /*#__PURE__*/ import_react$1.createElement("div", { className: "ui-alert warning" }, warningText), status === "failed" ? /*#__PURE__*/ import_react$1.createElement("div", { className: "p pvh mth" }) : /*#__PURE__*/ import_react$1.createElement("div", { className: "p pvh mth" }, I18nTranslate("media_entry_conversion_hint"), /*#__PURE__*/ import_react$1.createElement("br", null), /*#__PURE__*/ import_react$1.createElement("span", { className: "title-xs" }, I18nTranslate("media_entry_conversion_reload"))));
				}
				if (usesIframeEmbed) return /*#__PURE__*/ import_react$1.createElement(IframeEmbed, {
					url: get$1.url,
					accessToken: get$1.used_confidential_access_token
				});
				const downloadRef = original_file_url ? original_file_url : export_url;
				const content = this.props.get.media_type == "document" ? /*#__PURE__*/ import_react$1.createElement("div", { className: "ui-has-magnifier" }, downloadRef ? /*#__PURE__*/ import_react$1.createElement("a", { href: downloadRef }, picture) : picture, downloadRef && /*#__PURE__*/ import_react$1.createElement("a", {
					href: downloadRef,
					className: "ui-magnifier"
				}, /*#__PURE__*/ import_react$1.createElement(Icon, {
					i: "magnifier",
					mods: "bright"
				}))) : previews.videos ? /*#__PURE__*/ import_react$1.createElement(MediaPlayer, _extends({ type: "video" }, mediaPlayerConfig, {
					sources: previews.videos,
					options: merge({ fluid: true }, get(mediaPlayerConfig, "options")),
					captionConf: this.props.captionConf,
					playback: get$1.playback,
					isInternal: this.props.isInternal
				})) : previews.audios ? /*#__PURE__*/ import_react$1.createElement(MediaPlayer, _extends({ type: "audio" }, mediaPlayerConfig, {
					getUrl: get$1.url,
					sources: previews.audios,
					options: merge({ fluid: true }, get(mediaPlayerConfig, "options")),
					playback: get$1.playback,
					captionConf: this.props.captionConf,
					isInternal: this.props.isInternal
				})) : imageHref && (withLink || withZoomLink) ? /*#__PURE__*/ import_react$1.createElement("div", { className: (0, import_classnames.default)({ "ui-has-magnifier": withZoomLink }) }, /*#__PURE__*/ import_react$1.createElement("a", { href: imageHref }, picture), !!withZoomLink && /*#__PURE__*/ import_react$1.createElement("a", {
					href: imageHref,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "ui-magnifier",
					style: { textDecoration: "none" }
				}, /*#__PURE__*/ import_react$1.createElement(Icon, {
					i: "magnifier",
					mods: "bright"
				}))) : picture;
				return /*#__PURE__*/ import_react$1.createElement("div", { className: classes }, content);
			}
		};
		IframeEmbed = ({ url, accessToken }) => {
			const parsedUrl = (0, import_url.parse)(url);
			const params = import_lib.default.parse(parsedUrl.query);
			const iframeSrc = parsedUrl.pathname.replace(/\/*$/, "") + "/embedded?" + import_lib.default.stringify({
				...params,
				internalEmbed: "yes",
				accessToken
			});
			return /*#__PURE__*/ import_react$1.createElement("div", { className: "ui-media-overview-preview" }, /*#__PURE__*/ import_react$1.createElement("div", { style: {
				width: "100%",
				position: "relative",
				paddingTop: "56.25%"
			} }, /*#__PURE__*/ import_react$1.createElement("iframe", {
				src: iframeSrc,
				style: {
					height: "100%",
					width: "100%",
					position: "absolute",
					top: "0",
					left: "0"
				},
				allowFullScreen: "true"
			})));
		};
	}));
	//#endregion
	//#region app/javascript/react/views/MediaEntry/MediaEntryEmbedded.jsx
	var MediaEntryEmbedded_exports = /* @__PURE__ */ __exportAll({ default: () => MediaEntryEmbedded$1 });
	var import_react, import_prop_types, MediaEntryEmbedded$1;
	var init_MediaEntryEmbedded = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react());
		import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
		init_MediaEntryPreview();
		MediaEntryEmbedded$1 = ({ get }) => {
			const { caption_conf, embed_config } = get;
			const mediaProps = { options: {
				fluid: false,
				fill: true,
				ratio: embed_config.ratio || "16:9"
			} };
			return /*#__PURE__*/ import_react.createElement(MediaEntryPreview, {
				get,
				mediaProps,
				captionConf: caption_conf,
				isEmbedded: true,
				isInternal: embed_config.isInternal
			});
		};
		MediaEntryEmbedded$1.propTypes = { get: import_prop_types.default.shape({ media_file: import_prop_types.default.object.isRequired }).isRequired };
	}));
	//#endregion
	//#region app/javascript/embedded-view.js
	const { present } = (init_present(), __toCommonJS(present_exports));
	const React = require_react();
	const ReactDOM = require_react_dom();
	const { QueryClientProvider } = require_lib$1();
	const queryClient = (init_query_client(), __toCommonJS(query_client_exports)).default;
	const MediaEntryEmbedded = (init_MediaEntryEmbedded(), __toCommonJS(MediaEntryEmbedded_exports)).default;
	if (!present(APP_CONFIG)) throw new Error("No `APP_CONFIG`!");
	function main() {
		const rootEl = document.querySelector("[data-react-class=\"UI.Views.MediaEntry.MediaEntryEmbedded\"]");
		if (!rootEl || !rootEl.dataset || !rootEl.dataset.reactProps) return false;
		const props = JSON.parse(rootEl.dataset.reactProps);
		const view = React.createElement(QueryClientProvider, { client: queryClient }, React.createElement(MediaEntryEmbedded, props));
		ReactDOM.render(view, rootEl);
	}
	main();
	//#endregion
})();
