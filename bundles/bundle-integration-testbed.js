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
		var isOwn = hasOwnProperty$14.call(value, symToStringTag$1), tag = value[symToStringTag$1];
		try {
			value[symToStringTag$1] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString$1.call(value);
		if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
		return result;
	}
	var objectProto$5, hasOwnProperty$14, nativeObjectToString$1, symToStringTag$1;
	var init__getRawTag = __esmMin((() => {
		init__Symbol();
		objectProto$5 = Object.prototype;
		hasOwnProperty$14 = objectProto$5.hasOwnProperty;
		nativeObjectToString$1 = objectProto$5.toString;
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
	var isArray;
	var init_isArray = __esmMin((() => {
		isArray = Array.isArray;
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
		if (isArray(value)) return arrayMap(value, baseToString) + "";
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
	var reRegExpChar, reIsHostCtor, funcProto$1, objectProto$4, funcToString$1, hasOwnProperty$13, reIsNative;
	var init__baseIsNative = __esmMin((() => {
		init_isFunction();
		init__isMasked();
		init_isObject();
		init__toSource();
		reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
		reIsHostCtor = /^\[object .+?Constructor\]$/;
		funcProto$1 = Function.prototype;
		objectProto$4 = Object.prototype;
		funcToString$1 = funcProto$1.toString;
		hasOwnProperty$13 = objectProto$4.hasOwnProperty;
		reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$13).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
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
		if (!(hasOwnProperty$12.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	var hasOwnProperty$12;
	var init__assignValue = __esmMin((() => {
		init__baseAssignValue();
		init_eq();
		hasOwnProperty$12 = Object.prototype.hasOwnProperty;
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
		start = nativeMax$2(start === void 0 ? func.length - 1 : start, 0);
		return function() {
			var args = arguments, index = -1, length = nativeMax$2(args.length - start, 0), array = Array(length);
			while (++index < length) array[index] = args[start + index];
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) otherArgs[index] = args[index];
			otherArgs[start] = transform(array);
			return apply(func, this, otherArgs);
		};
	}
	var nativeMax$2;
	var init__overRest = __esmMin((() => {
		init__apply();
		nativeMax$2 = Math.max;
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
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$3);
	}
	var objectProto$3;
	var init__isPrototype = __esmMin((() => {
		objectProto$3 = Object.prototype;
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
	var objectProto$2, hasOwnProperty$11, propertyIsEnumerable$1, isArguments;
	var init_isArguments = __esmMin((() => {
		init__baseIsArguments();
		init_isObjectLike();
		objectProto$2 = Object.prototype;
		hasOwnProperty$11 = objectProto$2.hasOwnProperty;
		propertyIsEnumerable$1 = objectProto$2.propertyIsEnumerable;
		isArguments = baseIsArguments(function() {
			return arguments;
		}()) ? baseIsArguments : function(value) {
			return isObjectLike(value) && hasOwnProperty$11.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
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
		var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
		for (var key in value) if ((inherited || hasOwnProperty$10.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	var hasOwnProperty$10;
	var init__arrayLikeKeys = __esmMin((() => {
		init__baseTimes();
		init_isArguments();
		init_isArray();
		init_isBuffer();
		init__isIndex();
		init_isTypedArray();
		hasOwnProperty$10 = Object.prototype.hasOwnProperty;
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
		for (var key in Object(object)) if (hasOwnProperty$9.call(object, key) && key != "constructor") result.push(key);
		return result;
	}
	var hasOwnProperty$9;
	var init__baseKeys = __esmMin((() => {
		init__isPrototype();
		init__nativeKeys();
		hasOwnProperty$9 = Object.prototype.hasOwnProperty;
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
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$8.call(object, key)))) result.push(key);
		return result;
	}
	var hasOwnProperty$8;
	var init__baseKeysIn = __esmMin((() => {
		init_isObject();
		init__isPrototype();
		init__nativeKeysIn();
		hasOwnProperty$8 = Object.prototype.hasOwnProperty;
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
		if (isArray(value)) return false;
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
		return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
	}
	var HASH_UNDEFINED$2, hasOwnProperty$7;
	var init__hashGet = __esmMin((() => {
		init__nativeCreate();
		HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
		hasOwnProperty$7 = Object.prototype.hasOwnProperty;
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
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
	}
	var hasOwnProperty$6;
	var init__hashHas = __esmMin((() => {
		init__nativeCreate();
		hasOwnProperty$6 = Object.prototype.hasOwnProperty;
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
		if (isArray(value)) return value;
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
		return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
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
	//#region node_modules/lodash-es/flatten.js
	/**
	* Flattens `array` a single level deep.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to flatten.
	* @returns {Array} Returns the new flattened array.
	* @example
	*
	* _.flatten([1, [2, [3, [4]], 5]]);
	* // => [1, 2, [3, [4]], 5]
	*/
	function flatten(array) {
		return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
	}
	var init_flatten = __esmMin((() => {
		init__baseFlatten();
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
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag$2) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	var objectTag$2, funcProto, objectProto$1, funcToString, hasOwnProperty$5, objectCtorString;
	var init_isPlainObject = __esmMin((() => {
		init__baseGetTag();
		init__getPrototype();
		init_isObjectLike();
		objectTag$2 = "[object Object]";
		funcProto = Function.prototype;
		objectProto$1 = Object.prototype;
		funcToString = funcProto.toString;
		hasOwnProperty$5 = objectProto$1.hasOwnProperty;
		objectCtorString = funcToString.call(Object);
	}));
	//#endregion
	//#region node_modules/lodash-es/_arrayReduce.js
	/**
	* A specialized version of `_.reduce` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @param {*} [accumulator] The initial value.
	* @param {boolean} [initAccum] Specify using the first element of `array` as
	*  the initial value.
	* @returns {*} Returns the accumulated value.
	*/
	function arrayReduce(array, iteratee, accumulator, initAccum) {
		var index = -1, length = array == null ? 0 : array.length;
		if (initAccum && length) accumulator = array[++index];
		while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
		return accumulator;
	}
	var init__arrayReduce = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_basePropertyOf.js
	/**
	* The base implementation of `_.propertyOf` without support for deep paths.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyOf(object) {
		return function(key) {
			return object == null ? void 0 : object[key];
		};
	}
	var init__basePropertyOf = __esmMin((() => {}));
	//#endregion
	//#region node_modules/lodash-es/_deburrLetter.js
	var deburrLetter;
	var init__deburrLetter = __esmMin((() => {
		init__basePropertyOf();
		deburrLetter = basePropertyOf({
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "A",
			"Å": "A",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "a",
			"å": "a",
			"Ç": "C",
			"ç": "c",
			"Ð": "D",
			"ð": "d",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"Ñ": "N",
			"ñ": "n",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "O",
			"Ø": "O",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "o",
			"ø": "o",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "U",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "u",
			"Ý": "Y",
			"ý": "y",
			"ÿ": "y",
			"Æ": "Ae",
			"æ": "ae",
			"Þ": "Th",
			"þ": "th",
			"ß": "ss",
			"Ā": "A",
			"Ă": "A",
			"Ą": "A",
			"ā": "a",
			"ă": "a",
			"ą": "a",
			"Ć": "C",
			"Ĉ": "C",
			"Ċ": "C",
			"Č": "C",
			"ć": "c",
			"ĉ": "c",
			"ċ": "c",
			"č": "c",
			"Ď": "D",
			"Đ": "D",
			"ď": "d",
			"đ": "d",
			"Ē": "E",
			"Ĕ": "E",
			"Ė": "E",
			"Ę": "E",
			"Ě": "E",
			"ē": "e",
			"ĕ": "e",
			"ė": "e",
			"ę": "e",
			"ě": "e",
			"Ĝ": "G",
			"Ğ": "G",
			"Ġ": "G",
			"Ģ": "G",
			"ĝ": "g",
			"ğ": "g",
			"ġ": "g",
			"ģ": "g",
			"Ĥ": "H",
			"Ħ": "H",
			"ĥ": "h",
			"ħ": "h",
			"Ĩ": "I",
			"Ī": "I",
			"Ĭ": "I",
			"Į": "I",
			"İ": "I",
			"ĩ": "i",
			"ī": "i",
			"ĭ": "i",
			"į": "i",
			"ı": "i",
			"Ĵ": "J",
			"ĵ": "j",
			"Ķ": "K",
			"ķ": "k",
			"ĸ": "k",
			"Ĺ": "L",
			"Ļ": "L",
			"Ľ": "L",
			"Ŀ": "L",
			"Ł": "L",
			"ĺ": "l",
			"ļ": "l",
			"ľ": "l",
			"ŀ": "l",
			"ł": "l",
			"Ń": "N",
			"Ņ": "N",
			"Ň": "N",
			"Ŋ": "N",
			"ń": "n",
			"ņ": "n",
			"ň": "n",
			"ŋ": "n",
			"Ō": "O",
			"Ŏ": "O",
			"Ő": "O",
			"ō": "o",
			"ŏ": "o",
			"ő": "o",
			"Ŕ": "R",
			"Ŗ": "R",
			"Ř": "R",
			"ŕ": "r",
			"ŗ": "r",
			"ř": "r",
			"Ś": "S",
			"Ŝ": "S",
			"Ş": "S",
			"Š": "S",
			"ś": "s",
			"ŝ": "s",
			"ş": "s",
			"š": "s",
			"Ţ": "T",
			"Ť": "T",
			"Ŧ": "T",
			"ţ": "t",
			"ť": "t",
			"ŧ": "t",
			"Ũ": "U",
			"Ū": "U",
			"Ŭ": "U",
			"Ů": "U",
			"Ű": "U",
			"Ų": "U",
			"ũ": "u",
			"ū": "u",
			"ŭ": "u",
			"ů": "u",
			"ű": "u",
			"ų": "u",
			"Ŵ": "W",
			"ŵ": "w",
			"Ŷ": "Y",
			"ŷ": "y",
			"Ÿ": "Y",
			"Ź": "Z",
			"Ż": "Z",
			"Ž": "Z",
			"ź": "z",
			"ż": "z",
			"ž": "z",
			"Ĳ": "IJ",
			"ĳ": "ij",
			"Œ": "Oe",
			"œ": "oe",
			"ŉ": "'n",
			"ſ": "s"
		});
	}));
	//#endregion
	//#region node_modules/lodash-es/deburr.js
	/**
	* Deburrs `string` by converting
	* [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	* and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	* letters to basic Latin letters and removing
	* [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to deburr.
	* @returns {string} Returns the deburred string.
	* @example
	*
	* _.deburr('déjà vu');
	* // => 'deja vu'
	*/
	function deburr(string) {
		string = toString(string);
		return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
	}
	var reLatin, reComboMark;
	var init_deburr = __esmMin((() => {
		init__deburrLetter();
		init_toString();
		reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
		reComboMark = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
	}));
	//#endregion
	//#region node_modules/lodash-es/_asciiWords.js
	/**
	* Splits an ASCII `string` into an array of its words.
	*
	* @private
	* @param {string} The string to inspect.
	* @returns {Array} Returns the words of `string`.
	*/
	function asciiWords(string) {
		return string.match(reAsciiWord) || [];
	}
	var reAsciiWord;
	var init__asciiWords = __esmMin((() => {
		reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	}));
	//#endregion
	//#region node_modules/lodash-es/_hasUnicodeWord.js
	/**
	* Checks if `string` contains a word composed of Unicode symbols.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {boolean} Returns `true` if a word is found, else `false`.
	*/
	function hasUnicodeWord(string) {
		return reHasUnicodeWord.test(string);
	}
	var reHasUnicodeWord;
	var init__hasUnicodeWord = __esmMin((() => {
		reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	}));
	//#endregion
	//#region node_modules/lodash-es/_unicodeWords.js
	/**
	* Splits a Unicode `string` into an array of its words.
	*
	* @private
	* @param {string} The string to inspect.
	* @returns {Array} Returns the words of `string`.
	*/
	function unicodeWords(string) {
		return string.match(reUnicodeWord) || [];
	}
	var rsAstralRange, rsComboRange, rsDingbatRange, rsLowerRange, rsMathOpRange, rsNonCharRange, rsPunctuationRange, rsSpaceRange, rsUpperRange, rsVarRange, rsBreakRange, rsApos, rsBreak, rsCombo, rsDigits, rsDingbat, rsLower, rsMisc, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsUpper, rsZWJ, rsMiscLower, rsMiscUpper, rsOptContrLower, rsOptContrUpper, reOptMod, rsOptVar, rsOptJoin, rsOrdLower, rsOrdUpper, rsSeq, rsEmoji, reUnicodeWord;
	var init__unicodeWords = __esmMin((() => {
		rsAstralRange = "\\ud800-\\udfff";
		rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
		rsDingbatRange = "\\u2700-\\u27bf";
		rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
		rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
		rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
		rsPunctuationRange = "\\u2000-\\u206f";
		rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
		rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
		rsVarRange = "\\ufe0e\\ufe0f";
		rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
		rsApos = "['’]";
		rsBreak = "[" + rsBreakRange + "]";
		rsCombo = "[" + rsComboRange + "]";
		rsDigits = "\\d+";
		rsDingbat = "[" + rsDingbatRange + "]";
		rsLower = "[" + rsLowerRange + "]";
		rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
		rsModifier = "(?:" + rsCombo + "|\\ud83c[\\udffb-\\udfff])";
		rsNonAstral = "[^" + rsAstralRange + "]";
		rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
		rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
		rsUpper = "[" + rsUpperRange + "]";
		rsZWJ = "\\u200d";
		rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
		rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
		rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
		rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
		reOptMod = rsModifier + "?";
		rsOptVar = "[" + rsVarRange + "]?";
		rsOptJoin = "(?:" + rsZWJ + "(?:" + [
			rsNonAstral,
			rsRegional,
			rsSurrPair
		].join("|") + ")" + rsOptVar + reOptMod + ")*";
		rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
		rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
		rsSeq = rsOptVar + reOptMod + rsOptJoin;
		rsEmoji = "(?:" + [
			rsDingbat,
			rsRegional,
			rsSurrPair
		].join("|") + ")" + rsSeq;
		reUnicodeWord = RegExp([
			rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [
				rsBreak,
				rsUpper,
				"$"
			].join("|") + ")",
			rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [
				rsBreak,
				rsUpper + rsMiscLower,
				"$"
			].join("|") + ")",
			rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
			rsUpper + "+" + rsOptContrUpper,
			rsOrdUpper,
			rsOrdLower,
			rsDigits,
			rsEmoji
		].join("|"), "g");
	}));
	//#endregion
	//#region node_modules/lodash-es/words.js
	/**
	* Splits `string` into an array of its words.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to inspect.
	* @param {RegExp|string} [pattern] The pattern to match words.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {Array} Returns the words of `string`.
	* @example
	*
	* _.words('fred, barney, & pebbles');
	* // => ['fred', 'barney', 'pebbles']
	*
	* _.words('fred, barney, & pebbles', /[^, ]+/g);
	* // => ['fred', 'barney', '&', 'pebbles']
	*/
	function words(string, pattern, guard) {
		string = toString(string);
		pattern = guard ? void 0 : pattern;
		if (pattern === void 0) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
		return string.match(pattern) || [];
	}
	var init_words = __esmMin((() => {
		init__asciiWords();
		init__hasUnicodeWord();
		init_toString();
		init__unicodeWords();
	}));
	//#endregion
	//#region node_modules/lodash-es/_createCompounder.js
	/**
	* Creates a function like `_.camelCase`.
	*
	* @private
	* @param {Function} callback The function to combine each word.
	* @returns {Function} Returns the new compounder function.
	*/
	function createCompounder(callback) {
		return function(string) {
			return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
		};
	}
	var reApos;
	var init__createCompounder = __esmMin((() => {
		init__arrayReduce();
		init_deburr();
		init_words();
		reApos = RegExp("['’]", "g");
	}));
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
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
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
			if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) return false;
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
	var COMPARE_PARTIAL_FLAG$3, hasOwnProperty$4;
	var init__equalObjects = __esmMin((() => {
		init__getAllKeys();
		COMPARE_PARTIAL_FLAG$3 = 1;
		hasOwnProperty$4 = Object.prototype.hasOwnProperty;
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
		var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
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
			var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
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
	var COMPARE_PARTIAL_FLAG$2, argsTag, arrayTag, objectTag, hasOwnProperty$3;
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
		hasOwnProperty$3 = Object.prototype.hasOwnProperty;
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
		return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
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
		if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
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
	//#region node_modules/lodash-es/defaults.js
	var objectProto, hasOwnProperty$2, defaults;
	var init_defaults = __esmMin((() => {
		init__baseRest();
		init_eq();
		init__isIterateeCall();
		init_keysIn();
		objectProto = Object.prototype;
		hasOwnProperty$2 = objectProto.hasOwnProperty;
		defaults = baseRest(function(object, sources) {
			object = Object(object);
			var index = -1;
			var length = sources.length;
			var guard = length > 2 ? sources[2] : void 0;
			if (guard && isIterateeCall(sources[0], sources[1], guard)) length = 1;
			while (++index < length) {
				var source = sources[index];
				var props = keysIn(source);
				var propsIndex = -1;
				var propsLength = props.length;
				while (++propsIndex < propsLength) {
					var key = props[propsIndex];
					var value = object[key];
					if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty$2.call(object, key)) object[key] = source[key];
				}
			}
			return object;
		});
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
			var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
			newValue = srcValue;
			if (isArr || isBuff || isTyped) if (isArray(objValue)) newValue = objValue;
			else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
			else if (isBuff) {
				isCommon = false;
				newValue = cloneBuffer(srcValue, true);
			} else if (isTyped) {
				isCommon = false;
				newValue = cloneTypedArray(srcValue, true);
			} else newValue = [];
			else if (isPlainObject(srcValue) || isArguments(srcValue)) {
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
	//#region node_modules/lodash-es/_baseFilter.js
	/**
	* The base implementation of `_.filter` without support for iteratee shorthands.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	*/
	function baseFilter(collection, predicate) {
		var result = [];
		baseEach(collection, function(value, index, collection) {
			if (predicate(value, index, collection)) result.push(value);
		});
		return result;
	}
	var init__baseFilter = __esmMin((() => {
		init__baseEach();
	}));
	//#endregion
	//#region node_modules/lodash-es/filter.js
	/**
	* Iterates over elements of `collection`, returning an array of all elements
	* `predicate` returns truthy for. The predicate is invoked with three
	* arguments: (value, index|key, collection).
	*
	* **Note:** Unlike `_.remove`, this method returns a new array.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [predicate=_.identity] The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	* @see _.reject
	* @example
	*
	* var users = [
	*   { 'user': 'barney', 'age': 36, 'active': true },
	*   { 'user': 'fred',   'age': 40, 'active': false }
	* ];
	*
	* _.filter(users, function(o) { return !o.active; });
	* // => objects for ['fred']
	*
	* // The `_.matches` iteratee shorthand.
	* _.filter(users, { 'age': 36, 'active': true });
	* // => objects for ['barney']
	*
	* // The `_.matchesProperty` iteratee shorthand.
	* _.filter(users, ['active', false]);
	* // => objects for ['fred']
	*
	* // The `_.property` iteratee shorthand.
	* _.filter(users, 'active');
	* // => objects for ['barney']
	*
	* // Combining several predicates using `_.overEvery` or `_.overSome`.
	* _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
	* // => objects for ['fred', 'barney']
	*/
	function filter(collection, predicate) {
		return (isArray(collection) ? arrayFilter : baseFilter)(collection, baseIteratee(predicate, 3));
	}
	var init_filter = __esmMin((() => {
		init__arrayFilter();
		init__baseFilter();
		init__baseIteratee();
		init_isArray();
	}));
	//#endregion
	//#region node_modules/lodash-es/_createFind.js
	/**
	* Creates a `_.find` or `_.findLast` function.
	*
	* @private
	* @param {Function} findIndexFunc The function to find the collection index.
	* @returns {Function} Returns the new find function.
	*/
	function createFind(findIndexFunc) {
		return function(collection, predicate, fromIndex) {
			var iterable = Object(collection);
			if (!isArrayLike(collection)) {
				var iteratee = baseIteratee(predicate, 3);
				collection = keys(collection);
				predicate = function(key) {
					return iteratee(iterable[key], key, iterable);
				};
			}
			var index = findIndexFunc(collection, predicate, fromIndex);
			return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
		};
	}
	var init__createFind = __esmMin((() => {
		init__baseIteratee();
		init_isArrayLike();
		init_keys();
	}));
	//#endregion
	//#region node_modules/lodash-es/findIndex.js
	/**
	* This method is like `_.find` except that it returns the index of the first
	* element `predicate` returns truthy for instead of the element itself.
	*
	* @static
	* @memberOf _
	* @since 1.1.0
	* @category Array
	* @param {Array} array The array to inspect.
	* @param {Function} [predicate=_.identity] The function invoked per iteration.
	* @param {number} [fromIndex=0] The index to search from.
	* @returns {number} Returns the index of the found element, else `-1`.
	* @example
	*
	* var users = [
	*   { 'user': 'barney',  'active': false },
	*   { 'user': 'fred',    'active': false },
	*   { 'user': 'pebbles', 'active': true }
	* ];
	*
	* _.findIndex(users, function(o) { return o.user == 'barney'; });
	* // => 0
	*
	* // The `_.matches` iteratee shorthand.
	* _.findIndex(users, { 'user': 'fred', 'active': false });
	* // => 1
	*
	* // The `_.matchesProperty` iteratee shorthand.
	* _.findIndex(users, ['active', false]);
	* // => 0
	*
	* // The `_.property` iteratee shorthand.
	* _.findIndex(users, 'active');
	* // => 2
	*/
	function findIndex(array, predicate, fromIndex) {
		var length = array == null ? 0 : array.length;
		if (!length) return -1;
		var index = fromIndex == null ? 0 : toInteger(fromIndex);
		if (index < 0) index = nativeMax$1(length + index, 0);
		return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	var nativeMax$1;
	var init_findIndex = __esmMin((() => {
		init__baseFindIndex();
		init__baseIteratee();
		init_toInteger();
		nativeMax$1 = Math.max;
	}));
	//#endregion
	//#region node_modules/lodash-es/find.js
	var find;
	var init_find = __esmMin((() => {
		init__createFind();
		init_findIndex();
		find = createFind(findIndex);
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
		return (isArray(collection) ? arrayMap : baseMap)(collection, baseIteratee(iteratee, 3));
	}
	var init_map = __esmMin((() => {
		init__arrayMap();
		init__baseIteratee();
		init__baseMap();
		init_isArray();
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseHas.js
	/**
	* The base implementation of `_.has` without support for deep paths.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {Array|string} key The key to check.
	* @returns {boolean} Returns `true` if `key` exists, else `false`.
	*/
	function baseHas(object, key) {
		return object != null && hasOwnProperty$1.call(object, key);
	}
	var hasOwnProperty$1;
	var init__baseHas = __esmMin((() => {
		hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	}));
	//#endregion
	//#region node_modules/lodash-es/has.js
	/**
	* Checks if `path` is a direct property of `object`.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	* @example
	*
	* var object = { 'a': { 'b': 2 } };
	* var other = _.create({ 'a': _.create({ 'b': 2 }) });
	*
	* _.has(object, 'a');
	* // => true
	*
	* _.has(object, 'a.b');
	* // => true
	*
	* _.has(object, ['a', 'b']);
	* // => true
	*
	* _.has(other, 'a');
	* // => false
	*/
	function has(object, path) {
		return object != null && hasPath(object, path, baseHas);
	}
	var init_has = __esmMin((() => {
		init__baseHas();
		init__hasPath();
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
		return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
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
		if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
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
	//#region node_modules/lodash-es/_baseSet.js
	/**
	* The base implementation of `_.set`.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {Array|string} path The path of the property to set.
	* @param {*} value The value to set.
	* @param {Function} [customizer] The function to customize path creation.
	* @returns {Object} Returns `object`.
	*/
	function baseSet(object, path, value, customizer) {
		if (!isObject(object)) return object;
		path = castPath(path, object);
		var index = -1, length = path.length, lastIndex = length - 1, nested = object;
		while (nested != null && ++index < length) {
			var key = toKey(path[index]), newValue = value;
			if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
			if (index != lastIndex) {
				var objValue = nested[key];
				newValue = customizer ? customizer(objValue, key, nested) : void 0;
				if (newValue === void 0) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
			}
			assignValue(nested, key, newValue);
			nested = nested[key];
		}
		return object;
	}
	var init__baseSet = __esmMin((() => {
		init__assignValue();
		init__castPath();
		init__isIndex();
		init_isObject();
		init__toKey();
	}));
	//#endregion
	//#region node_modules/lodash-es/set.js
	/**
	* Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	* it's created. Arrays are created for missing index properties while objects
	* are created for all other missing properties. Use `_.setWith` to customize
	* `path` creation.
	*
	* **Note:** This method mutates `object`.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to modify.
	* @param {Array|string} path The path of the property to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns `object`.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.set(object, 'a[0].b.c', 4);
	* console.log(object.a[0].b.c);
	* // => 4
	*
	* _.set(object, ['x', '0', 'y', 'z'], 5);
	* console.log(object.x[0].y.z);
	* // => 5
	*/
	function set(object, path, value) {
		return object == null ? object : baseSet(object, path, value);
	}
	var init_set = __esmMin((() => {
		init__baseSet();
	}));
	//#endregion
	//#region node_modules/lodash-es/snakeCase.js
	var snakeCase;
	var init_snakeCase = __esmMin((() => {
		init__createCompounder();
		snakeCase = createCompounder(function(result, word, index) {
			return result + (index ? "_" : "") + word.toLowerCase();
		});
	}));
	//#endregion
	//#region node_modules/lodash-es/_baseSome.js
	/**
	* The base implementation of `_.some` without support for iteratee shorthands.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	*/
	function baseSome(collection, predicate) {
		var result;
		baseEach(collection, function(value, index, collection) {
			result = predicate(value, index, collection);
			return !result;
		});
		return !!result;
	}
	var init__baseSome = __esmMin((() => {
		init__baseEach();
	}));
	//#endregion
	//#region node_modules/lodash-es/some.js
	/**
	* Checks if `predicate` returns truthy for **any** element of `collection`.
	* Iteration is stopped once `predicate` returns truthy. The predicate is
	* invoked with three arguments: (value, index|key, collection).
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [predicate=_.identity] The function invoked per iteration.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	* @example
	*
	* _.some([null, 0, 'yes', false], Boolean);
	* // => true
	*
	* var users = [
	*   { 'user': 'barney', 'active': true },
	*   { 'user': 'fred',   'active': false }
	* ];
	*
	* // The `_.matches` iteratee shorthand.
	* _.some(users, { 'user': 'barney', 'active': false });
	* // => false
	*
	* // The `_.matchesProperty` iteratee shorthand.
	* _.some(users, ['active', false]);
	* // => true
	*
	* // The `_.property` iteratee shorthand.
	* _.some(users, 'active');
	* // => true
	*/
	function some(collection, predicate, guard) {
		var func = isArray(collection) ? arraySome : baseSome;
		if (guard && isIterateeCall(collection, predicate, guard)) predicate = void 0;
		return func(collection, baseIteratee(predicate, 3));
	}
	var init_some = __esmMin((() => {
		init__arraySome();
		init__baseIteratee();
		init__baseSome();
		init_isArray();
		init__isIterateeCall();
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
		init_flatten();
		init__overRest();
		init__baseRest();
		init__baseGetTag();
		init_isPlainObject();
		init__baseAssignValue();
		init__toKey();
		init_toString();
		init__createCompounder();
		init_toNumber();
		init__isIterateeCall();
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
		init__baseFlatten();
		init__arrayMap();
		init__baseIteratee();
		init_constant();
		init__baseEach();
		init_deburr();
		init_defaults();
		init__baseMerge();
		init__SetCache();
		init__cacheHas();
		init_isArrayLikeObject();
		init_last();
		init__createBaseFor();
		init__createBaseEach();
		init__mapToArray();
		init_eq();
		init__basePropertyOf();
		init_filter();
		init_find();
		init_findIndex();
		init__baseForOwn();
		init__createFind();
		init__baseFindIndex();
		init_map();
		init__baseFor();
		init__arrayFilter();
		init_isFunction();
		init_has();
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
		init__baseSet();
		init__baseMap();
		init__arraySome();
		init__baseProperty();
		init_property();
		init__arrayReduce();
		init__baseFilter();
		init_set();
		init__baseKeys();
		init_snakeCase();
		init_some();
		init__baseValues();
		init__baseTimes();
		init__stringToPath();
		init_toPlainObject();
		init__baseTrim();
		init__trimmedEndIndex();
		init__Set();
		init_words();
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
	var present, presence;
	var init_present = __esmMin((() => {
		init_lodash();
		present = (val) => val != null && (!isEmpty(val) || isNumber(val) || isBoolean(val) || isFunction(val));
		presence = (val) => present(val) ? val : void 0;
	}));
	//#endregion
	//#region app/javascript/lib/app-config.js
	var config;
	var init_app_config = __esmMin((() => {
		config = globalThis.APP_CONFIG;
	}));
	//#endregion
	//#region app/javascript/lib/rails-csrf-token.js
	var require_rails_csrf_token = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = () => {
			const metaTag = typeof document !== "undefined" && document.querySelector("meta[name=\"csrf-token\"]");
			return metaTag ? metaTag.getAttribute("content") : null;
		};
	}));
	//#endregion
	//#region app/javascript/models/shared/base-model.js
	function propDefault(def) {
		if (Array.isArray(def)) return def[2];
		if (def && typeof def === "object") return def.default;
	}
	function isDerivedKey(instance, key) {
		let proto = Object.getPrototypeOf(instance);
		while (proto && proto !== Object.prototype) {
			const desc = Object.getOwnPropertyDescriptor(proto, key);
			if (desc) return !!desc.get;
			proto = Object.getPrototypeOf(proto);
		}
		return false;
	}
	function mergeConfigs(parentConfig = {}, mixins, ownConfig) {
		const merged = {
			props: { ...parentConfig.props || {} },
			session: { ...parentConfig.session || {} },
			children: { ...parentConfig.children || {} },
			collections: { ...parentConfig.collections || {} },
			derived: { ...parentConfig.derived || {} },
			extraProperties: parentConfig.extraProperties,
			initialize: parentConfig.initialize,
			type: ownConfig.type !== void 0 ? ownConfig.type : parentConfig.type
		};
		mixins.forEach((mixin) => {
			if (mixin.props) Object.assign(merged.props, mixin.props);
			if (mixin.session) Object.assign(merged.session, mixin.session);
			if (mixin.children) Object.assign(merged.children, mixin.children);
			if (mixin.collections) Object.assign(merged.collections, mixin.collections);
			if (mixin.derived) Object.assign(merged.derived, mixin.derived);
			if (mixin.initialize) merged.initialize = mixin.initialize;
			if (mixin.extraProperties) merged.extraProperties = mixin.extraProperties;
		});
		if (ownConfig.props) Object.assign(merged.props, ownConfig.props);
		if (ownConfig.session) Object.assign(merged.session, ownConfig.session);
		if (ownConfig.children) Object.assign(merged.children, ownConfig.children);
		if (ownConfig.collections) Object.assign(merged.collections, ownConfig.collections);
		if (ownConfig.derived) Object.assign(merged.derived, ownConfig.derived);
		if (ownConfig.initialize) merged.initialize = ownConfig.initialize;
		if (ownConfig.extraProperties) merged.extraProperties = ownConfig.extraProperties;
		return merged;
	}
	var import_rails_csrf_token$3, SKIP_METHOD_KEYS$1, BaseModel;
	var init_base_model = __esmMin((() => {
		import_rails_csrf_token$3 = /* @__PURE__ */ __toESM(require_rails_csrf_token());
		SKIP_METHOD_KEYS$1 = /* @__PURE__ */ new Set([
			.../* @__PURE__ */ new Set([
				"props",
				"session",
				"children",
				"collections",
				"derived",
				"initialize"
			]),
			"type",
			"urlRoot",
			"idAttribute",
			"extraProperties",
			"dataTypes",
			"typeAttribute",
			"mainIndex",
			"indexes",
			"ajaxConfig"
		]);
		BaseModel = class BaseModel {
			constructor(data = {}) {
				this._listeners = {};
				this._listenedTo = [];
				this._initFromConfig(data);
			}
			_initFromConfig(data) {
				const config = this.constructor._config || {};
				const allProps = {
					...config.props || {},
					...config.session || {}
				};
				if (config.type !== void 0) this.type = config.type;
				Object.entries(allProps).forEach(([key, def]) => {
					this[key] = key in data ? data[key] : propDefault(def);
				});
				Object.entries(config.children || {}).forEach(([key, ChildClass]) => {
					this[key] = data[key] != null ? new ChildClass(data[key]) : null;
				});
				Object.entries(config.collections || {}).forEach(([key, CollClass]) => {
					const coll = new CollClass(data[key] || []);
					coll.parent = this;
					this[key] = coll;
				});
				if (config.extraProperties === "allow") {
					const handled = /* @__PURE__ */ new Set([
						...Object.keys(allProps),
						...Object.keys(config.children || {}),
						...Object.keys(config.collections || {}),
						...Object.keys(config.derived || {})
					]);
					Object.entries(data).forEach(([key, val]) => {
						if (!handled.has(key)) this[key] = val;
					});
				}
				if (config.initialize) config.initialize.call(this, data);
			}
			on(event, fn) {
				(this._listeners[event] = this._listeners[event] || []).push(fn);
				return this;
			}
			off(event, fn) {
				if (!event) {
					this._listeners = {};
					return this;
				}
				if (!fn) {
					this._listeners[event] = [];
					return this;
				}
				this._listeners[event] = (this._listeners[event] || []).filter((f) => f !== fn);
				return this;
			}
			trigger(event, ...args) {
				const list = this._listeners[event];
				if (list) list.slice().forEach((fn) => fn(...args));
				return this;
			}
			listenTo(other, event, fn) {
				other.on(event, fn);
				this._listenedTo.push({
					other,
					event,
					fn
				});
				return this;
			}
			stopListening(other) {
				this._listenedTo = this._listenedTo.filter(({ other: o, event, fn }) => {
					if (!other || o === other) {
						o.off(event, fn);
						return false;
					}
					return true;
				});
			}
			set(keyOrObj, val) {
				if (keyOrObj && typeof keyOrObj === "object") {
					Object.entries(keyOrObj).forEach(([k, v]) => this.set(k, v));
					return this;
				}
				if (isDerivedKey(this, keyOrObj)) return this;
				this[keyOrObj] = val;
				this.trigger("change");
				return this;
			}
			get(key) {
				return this[key];
			}
			merge(prop, data) {
				return this.set(prop, Object.assign({}, this[prop], data));
			}
			unset(key) {
				this[key] = void 0;
				this.trigger("change");
				return this;
			}
			_applyData(data) {
				const config = this.constructor._config || {};
				const allProps = {
					...config.props || {},
					...config.session || {}
				};
				Object.entries(data).forEach(([key, val]) => {
					if (key in allProps) this[key] = val;
					else if (config.children && key in config.children) this[key] = val != null ? new config.children[key](val) : null;
					else if (config.collections && key in config.collections) {
						const coll = new config.collections[key](val || []);
						coll.parent = this;
						this[key] = coll;
					} else if (config.extraProperties === "allow" && !isDerivedKey(this, key)) this[key] = val;
				});
			}
			serialize() {
				const config = this.constructor._config || {};
				const result = {};
				Object.keys(config.props || {}).forEach((key) => {
					result[key] = this[key];
				});
				Object.keys(config.children || {}).forEach((key) => {
					const child = this[key];
					result[key] = child && child.serialize ? child.serialize() : child;
				});
				Object.keys(config.collections || {}).forEach((key) => {
					const coll = this[key];
					result[key] = coll && coll.serialize ? coll.serialize() : coll || [];
				});
				return result;
			}
			dump() {
				return this.serialize();
			}
			_runRequest(req, callback) {
				const { method = "GET", url, body, json, headers: extra = {} } = req;
				const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
				const headers = {
					Accept: "application/json",
					"X-CSRF-Token": (0, import_rails_csrf_token$3.default)(),
					...extra
				};
				if (!isFormData) headers["Content-Type"] = "application/json";
				fetch(url, {
					method,
					headers,
					body: body !== void 0 ? body : json !== void 0 ? JSON.stringify(json) : void 0
				}).then(async (res) => {
					let data;
					try {
						data = await res.json();
					} catch {
						data = null;
					}
					callback(null, { statusCode: res.status }, data);
				}).catch((err) => callback(err, null, null));
			}
			save(config = {}) {
				this._runRequest({
					method: "PUT",
					url: this.url,
					json: this.serialize()
				}, (err, res, data) => {
					if (err || res.statusCode >= 400) {
						if (config.error) config.error(this, err || data);
					} else {
						if (data && typeof data === "object") this._applyData(data);
						if (config.success) config.success(this);
					}
				});
			}
			fetch(config = {}) {
				this._runRequest({
					method: "GET",
					url: this.url
				}, (err, res, data) => {
					if (err || res.statusCode >= 400) {
						if (config.error) config.error(this, err || data);
					} else {
						if (data && typeof data === "object") this._applyData(data);
						if (config.success) config.success(this);
					}
				});
			}
			destroy(config = {}) {
				this._runRequest({
					method: "DELETE",
					url: this.url
				}, (err, res, data) => {
					if (err || res.statusCode >= 400) {
						if (config.error) config.error(this, err || data);
					} else if (config.success) config.success(this);
				});
			}
			static extend(...args) {
				const ownConfig = args[args.length - 1] || {};
				const mixins = args.slice(0, -1);
				const Parent = this;
				const merged = mergeConfigs(Parent._config || {}, mixins, ownConfig);
				class Extended extends Parent {}
				Extended._config = merged;
				mixins.forEach((mixin) => {
					Object.entries(mixin).forEach(([key, val]) => {
						if (!SKIP_METHOD_KEYS$1.has(key) && typeof val === "function") Extended.prototype[key] = val;
					});
				});
				Object.entries(ownConfig).forEach(([key, val]) => {
					if (!SKIP_METHOD_KEYS$1.has(key)) Extended.prototype[key] = val;
				});
				Object.entries(merged.derived || {}).forEach(([key, { fn }]) => {
					Object.defineProperty(Extended.prototype, key, {
						get: fn,
						enumerable: true,
						configurable: true
					});
				});
				Extended.extend = BaseModel.extend.bind(Extended);
				return Extended;
			}
		};
	}));
	//#endregion
	//#region app/javascript/models/shared/rails-resource-mixin.js
	var import_rails_csrf_token$2, rails_resource_mixin_default;
	var init_rails_resource_mixin = __esmMin((() => {
		import_rails_csrf_token$2 = /* @__PURE__ */ __toESM(require_rails_csrf_token());
		rails_resource_mixin_default = { ajaxConfig: { headers: {
			Accept: "application/json",
			"X-CSRF-Token": (0, import_rails_csrf_token$2.default)()
		} } };
	}));
	//#endregion
	//#region app/javascript/models/shared/app-resource.js
	var import_rails_csrf_token$1, AppResource;
	var init_app_resource = __esmMin((() => {
		init_lodash();
		init_base_model();
		import_rails_csrf_token$1 = /* @__PURE__ */ __toESM(require_rails_csrf_token());
		init_rails_resource_mixin();
		AppResource = BaseModel.extend(rails_resource_mixin_default, {
			type: "AppResource",
			idAttribute: "url",
			props: {
				url: "string",
				uuid: "string"
			},
			save: function(config) {
				return BaseModel.prototype.save.call(this, defaults({}, config, { wait: true }));
			},
			merge: function(prop, data) {
				return this.set(prop, merge(this[prop], data));
			},
			dump: function() {
				return this.serialize();
			},
			_runRequest: function(req, callback) {
				const { method = "GET", url, body, json, headers: extra = {} } = req;
				const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
				const headers = {
					Accept: "application/json",
					"X-CSRF-Token": (0, import_rails_csrf_token$1.default)(),
					...extra
				};
				if (!isFormData) headers["Content-Type"] = "application/json";
				fetch(url, {
					method,
					headers,
					body: body !== void 0 ? body : json !== void 0 ? JSON.stringify(json) : void 0
				}).then(async (res) => {
					let data;
					try {
						data = await res.json();
					} catch {
						data = null;
					}
					callback(null, { statusCode: res.status }, data);
				}).catch((err) => callback(err, null, null));
			}
		});
	}));
	//#endregion
	//#region app/javascript/models/person.js
	var person_default;
	var init_person = __esmMin((() => {
		init_app_resource();
		person_default = AppResource.extend({
			type: "Person",
			props: { name: ["string"] }
		});
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
		if (!present(rawCsvText)) throw new Error("No translations found!");
		var parsed = import_babyparse.default.parse(rawCsvText);
		if (present(parsed.errors)) throw new Error(parsed.errors);
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
		translationsList = readTranslationsFromCSV("key,de,en,comment\najax_form_connection_error,Verbindungsfehler. Bitte versuchen Sie es noch einmal.,Connection error. Please try again.,\najax_form_no_longer_authorized,Sie sind für diese Aktion nicht mehr authorisiert.,You are no longer authorized to do this.,\najax_form_unexpected_error,Es gab einen unerwarteten Server-Fehler.,There was an unexpected server error.,\najax_form_validation_error_unparsable,Validation error with unparsable errors.,Validation error with unparsable errors.,\"Formular speichern, Edge case: Server gibt Fehlermeldung UND sie kann nicht gelesen werden.\"\najax_form_validation_error_without_any_data,Validation error without any data.,Validation error without any data.,\"Formular speichern, Edge case: Server gibt Fehlermeldungs-Code aber sonst keinen Inhalt\"\najax_form_validation_error_without_error_data,Validation error without error data.,Validation error without error data.,\"Formular speichern, Edge case: Server gibt Fehlermeldung, aber keine Details\"\napi_tokens_callback_description,Token wird für eine externe Applikation erstellt.,Token is being created for an external application.,\napi_tokens_create_cancel,Abbrechen,Cancel,\napi_tokens_create_description,Beschreibung,Description,\napi_tokens_create_submit,Token anlegen,Create token,\napi_tokens_create_title,Neuen Token hinzufügen,Add new token,\napi_tokens_created_back_btn,Zurück zu allen Tokens.,Back to all tokens.,\napi_tokens_created_callback_btn,Weiter zur Applikation,Continue to the application,\napi_tokens_created_callback_description,\"Falls die Weiterleitung nicht funktioniert, kann der Token auch manuell kopiert werden:\",\"If the redirect does not work, the token can also be copied manually:\",\napi_tokens_created_notice,Dieser Token wird nur einmal angezeigt. Bitte speichern Sie ihn jetzt.,This token is displayed only once. Please save it now.,\napi_tokens_created_title,Es wurde ein neuer Token erstellt.,A new token was created.,\napi_tokens_head_id,ID,ID,\napi_tokens_head_name,Name,Name,\napi_tokens_head_permissions,Berechtigungen,Permissions,\napi_tokens_head_valid_since,Gültig seit,Valid from,\napi_tokens_head_valid_until,Gültig bis,Valid to,\napi_tokens_list_created_hint_pre,Erstellt: ,Created: ,\"Tooltip auf dem Datum in der Tokens-Tabelle, wird vor einem Zeitstempel angezeigt\"\napi_tokens_list_expires_hint_pre,Ablaufdatum: ,Expiration date: ,\"Tooltip auf dem Datum in der Tokens-Tabelle, wird vor einem Zeitstempel angezeigt\"\napi_tokens_list_new_button,Neuen Token erstellen,Create new token,\napi_tokens_list_no_description,(Keine Beschreibung),No description),\"Platzhalter-Text, falls ein Token keine Beschreibung hat.\"\napi_tokens_list_revoke_btn_hint,Token zurückziehen.,Revoke token.,\napi_tokens_list_revoke_confirm,\"Sind Sie sicher, dass Sie diesen Token zurückziehen wollen?\",Are you sure you want to revoke the token?,\napi_tokens_list_revoked_title,Abgelaufene und zurückgezogene Tokens,Expired and revoked tokens,\napi_tokens_list_scope_off,Nein,No,\napi_tokens_list_scope_on,Ja,Yes,\napi_tokens_list_scope_read,Lesen,Read,\napi_tokens_list_scope_write,Schreiben,Write,\napp_autocomplete_displayname_users,Nutzer/innen,Users,\napp_autocomplete_displayname_delegations,Verantwortungs-Gruppen,Responsibility groups,\napp_autocomplete_no_results,Keine Ergebnisse.,No results.,\napp_autocomplete_user_delegation_postfix, (Verantwortungs-Gruppe), (Responsibility group)\napp_autocomplete_enter_term,Suchbegriff eingeben für weitere Ergebnisse,Enter search term for further results,\napp_autocomplete_extend_term,Suchbegriff erweitern für weitere Ergebnisse,Extend search term for further results,\napp_confirm_form_leave_msg,\"Diese Seite bittet Sie zu bestätigen, dass Sie die Seite verlassen möchten. Daten, die Sie eingegeben haben, werden unter Umständen nicht gespeichert.\",Please confirm that you wish to leave this page – entered data might not be saved.,NOTE: German version copied from Firefox default message\napp_notice_admin_mode_on,Admin-Modus aktiviert!,Admin mode activated!,\napp_notice_admin_mode_off,Admin-Modus deaktiviert!,Admin mode deactivated!,\napp_notice_logged_in,Sie haben sich angemeldet.,You have logged in.,\napp_notice_logged_out,Sie haben sich abgemeldet.,You have logged out.,\napp_notice_wrong_credentials,Falscher Benutzername/Passwort.,Incorrect username/password.,\napp_notice_shibboleth_not_enabled,Die Anmeldung mittels Shibboleth ist nicht aktiviert!,Shibboleth sign in is not enabled!,\napp_notice_shibboleth_missing_fields,\"Die Authentifizierungsdaten von Shibboleth sind unvollständig. SURNAME, GIVENNAME und EMAIL sind Pflichtfelder!\",\"Shibboleth authentication data is incomplete. SURNAME, GIVENNAME and EMAIL are required fields!\",\napp_warning_jsonly,\"Diese Funktion erfordert JavaScript, aber es ist nicht aktiviert.\",\"This feature requires Javascript, but it is not activated.\",\nauthentication_groups,Systemgruppen,System groups,\nbatch_add_to_collection_hint,\"Nach Sets suchen, zu denen Sie die Medieneinträge hinzufügen möchten.\",Seach for sets to add media entries.,\nbatch_add_to_collection_post, Medieneinträge zu Set hinzufügen,Add media entries to set,(nach der Anzahl)\nbatch_add_to_collection_pre, ,,(vor der Anzahl)\nbatch_destroy_resources_ask_1,Möchten Sie folgende Inhalte löschen:,Do you want to delete the following items:,\nbatch_destroy_resources_ask_2, Medieneinträge, Media entries,\nbatch_destroy_resources_ask_3, Sets, Sets,\nbatch_destroy_resources_ask_4,(Die Inhalte von Sets werden nicht automatisch mit dem Set gelöscht.),\"(When a set is deleted, the items of this set are not deleted at the same time.)\",\nbatch_destroy_resources_cancel,Abbrechen,Cancel,\nbatch_destroy_resources_ok,OK,OK,\nbatch_destroy_resources_success,Inhalte wurden erfolgreich gelöscht.,Items are deleted successfully.,\nbatch_meta_data_edit,Metadaten für %{media_entry_count} Medieneinträge gleichzeitig editieren.,Edit metadata for %{media_entry_count} media entries at the same time.,\nbatch_remove_from_collection_cancel,Abbrechen,Cancel,\nbatch_remove_from_collection_question_part_1,Möchten Sie die ausgewählten ,Do you want to remove the selected ,\nbatch_remove_from_collection_question_part_2, Medieneinträge und , media entries and ,\nbatch_remove_from_collection_question_part_3, Sets aus dem Set entfernen?, sets from this set?,\nbatch_remove_from_collection_remove,Entfernen,Remove,\nbatch_remove_from_collection_title,Medieinträge/Sets aus Set entfernen,Remove media entries/sets from sets,\nbatch_warning_no_authorized_contents_collection,Sie haben für keines der Sets die nötige Berechtigung.,You have no permissions for these sets.,\nbatch_warning_no_authorized_contents_media_entry,Sie haben für keinen der Medieneinträge die nötige Berechtigung.,You have no permissions for these media entries.,\nbatch_warning_no_contents_collection,Sie haben keine Sets.,You have no sets.,\nbatch_warning_no_contents_media_entry,Sie haben keine Medieneinträge.,You have no media entries.,\nbatch_edit_title_title,Titel von Medieneinträgen editieren,Edit titles of media entries,\nbatch_edit_title_th_filename,Dateiname,File name,\nbatch_edit_title_th_title,Titel,Title,\nbatch_edit_title_save,Speichern,Save,\nbatch_edit_title_cancel,Abbrechen,Cancel,\nbrowse_entries_browse_link_title,In diese Richtung weiterstöbern,Browse further in this direction,\nbrowse_entries_filter_link,Weiter filtern →,Apply additional filter →,\nbrowse_entries_loading_error,Ladefehler,Loading error,\nbrowse_entries_title,Nach ähnlichen Inhalten stöbern,Browse similar items,\nbubble_batch_label,Stapel,Batch,Wo: Labels in der Stapelverarbeitung\nbubble_draft_label,Entwurf,Draft,Wo: Labels in der Stapelverarbeitung\nclipboard_add_hint,Zur Stapelverarbeitung hinzufügen,Add to batch processing,\nclipboard_adding_all_resources_cancelled,\"Das Hinzufügen zur Stapelverarbeitung wurde abgebrochen. Ein Teil der Inhalte wurde schon hinzugefügt. Wenn Sie alle hinzufügen möchten, versuchen Sie es noch einmal. Schon hinzugefügte Inhalte werden nicht dupliziert.\",\"The process of adding items to batch processing was interrupted. Some items were successfully added to batch processing. If you wish to add all items, please try again.Those items already added will not be duplicated.\",\nclipboard_adding_all_resources_error,Es konnten nicht alle Inhalte zur Stapelverarbeitung hinzugefügt werden. Bitte versuchen Sie es noch einmal. Schon hinzugefügte Inhalte werden nicht dupliziert.,It was not possible to add all items to batch processing. Please try again. Those items already added will not be duplicated.,\nclipboard_adding_all_resources_retry,Nochmals, Again,\nclipboard_adding_resources,Füge Inhalte zur Stapelverarbeitung hinzu …,Add items to batch processing …,\nclipboard_ask_add_all_1,Möchten sie alle ,Would you like to add all ,\nclipboard_ask_add_all_2, Inhalte zur Stapelverarbeitung hinzufügen?, items to batch processing?,\nclipboard_ask_add_all_cancel,Abbrechen,Cancel,\nclipboard_ask_add_all_ok,Ok,OK,\nclipboard_batch_add_success,Die Inhalte wurden der Stapelverarbeitung hinzugefügt.,Items were added to batch processing.,\nclipboard_batch_remove_success,Die Inhalte wurden aus der Stapelverarbeitung entfernt.,Items wer removed from batch processing.,\nclipboard_empty_message,Sie haben keine Inhalte für die Stapelverarbeitung ausgewählt.,Batch processing is empty,\nclipboard_fetching_resources,Lade Inhalte …,Items loading …,\"Wieso sind da Pünktchen? -> Ist eine Zustandsanzeige, Nutzer wartet.\"\nclipboard_removing_resources,Entferne Inhalte aus Stapelverarbeitung...,Remove items from batch processing ...,\ncollection_ask_delete_question_pre,\"Sind Sie sicher, dass Sie folgendes Set löschen möchten: \",Are you sure you want to delete the following set:,\ncollection_ask_delete_title,Set löschen,Delete set,\ncollection_deleted,Dieses Set wurde gelöscht und ist für Benutzer nicht mehr sichtbar.,This set has been deleted and is no longer visible to users.\ncollection_delete_success,Set wurde gelöscht.,Set deleted.,\ncollection_does_not_exist,Dieses Set existiert nicht.,This set does not exist.,\ncollection_edit_cover_submit_btn,Speichern,Submit,\ncollection_edit_cover_title,Titelbild für Set festlegen,Define set cover,\ncollection_edit_highlights_btn,Auswahl speichern,Submit selection,\ncollection_edit_highlights_empty,Dieses Set hat noch keine Inhalte.,This set has no items yet.,\ncollection_edit_highlights_title,Inhalte hervorheben,Highlight items,\ncollection_edit_permissions_btn,Speichern,Submit,\ncollection_highlighted_contents,Hervorgehobene Inhalte,Highlighted items,\ncollection_layout_save,Darstellung festlegen,Save type of display,\ncollection_layout_saved,Darstellung gespeichert,Type of display saved,\ncollection_meta_data_header_prefix,Set editieren: ,Edit set:,\ncollection_new_cancel,Abbrechen,Cancel,\ncollection_new_create_set,Set erstellen,Create set,\ncollection_new_dialog_title,Set erstellen,Create set,\ncollection_new_dialog_parent_warning,The new created set will be added as a child to:,The new created set will be added as a child to:,\ncollection_new_flash_successful,Set wurde erstellt.,Set was created.,\ncollection_new_flash_title_needed,Titel ist ein Pflichtfeld.,Title is a mandatory field.,\ncollection_new_header,Neues Set,New set,\ncollection_new_label_title,Titel,Title,\ncollection_permissions_btn,Zugriffsberechtigungen ändern,Change permissions,\ncollection_relations_child_sets,Untergeordnete Sets,Child sets,\ncollection_relations_children_hint,Diese Sets wurden dem ausgewählten Set hinzugefügt.,These sets are now related to the selected set.,\ncollection_relations_current,Aktuelles Set,Current set,\ncollection_relations_hint_text,\"Das ausgewählte Set ist mit anderen Sets verknüpft. Diese Zusammenhänge wurden aktiv durch Sie oder eine/n andere/n Nutzer/in festgelegt als übergeordnet, benachbart oder untergeordnet. Sie sehen hier sowohl eigene Sets, als auch solche, die andere Nutzer/innen mit Ihnen teilen.\",\"The selected set is related to other sets. The relationship between these sets was actively defined by you or another user. The type of relationship to the other sets could be described as parent, siblings or children relationship. The displayed sets are owned by yourself or shared by other users with you.\",\ncollection_relations_no_child_sets, , ,\"Optionaler Hinweis, falls Zusammenhänge leer\"\ncollection_relations_no_parent_sets, , ,\"Optionaler Hinweis, falls Zusammenhänge leer\"\ncollection_relations_no_sibling_sets, , ,\"Optionaler Hinweis, falls Zusammenhänge leer\"\ncollection_relations_parent_sets,Übergeordnete Sets,Parent sets,\ncollection_relations_parents_hint,Das ausgewählte Set wurde diesen Sets hinzugefügt.,The selected set is now related to this set.,\ncollection_relations_show_all,Alle anzeigen →,Show all →,\ncollection_relations_show_all_relations,Alle Zusammenhänge anzeigen,Show all relations,\ncollection_relations_sibling_sets,Benachbarte Sets,Sibling sets,\ncollection_relations_siblings_hint,Diese Sets wurden den gleichen Sets hinzugefügt wie das ausgewählte Set.,This set is related to the same sets as the selected set.,Wo: Zusammenhänge eines Sets\ncollection_resource_selection_cancel,Abbrechen,Cancel,\ncollection_resource_selection_h_author,Autor/in,Author,\ncollection_resource_selection_h_date,Datierung,Dating,\ncollection_resource_selection_h_keywords,Schlagworte,Keywords,\ncollection_resource_selection_h_responsible,Rechteinhaber,Holder of rights,\ncollection_resource_selection_h_selection,Auswahl,Selection,\ncollection_resource_selection_h_subtitle,Untertitel,Subtitle,\ncollection_resource_selection_h_title,Titel,Title,\ncollection_resource_selection_save,Auswahl speichern,Save selection,\ncollection_select_collection_flash_result,Set aus %{removed_count} Set(s) entfernt. Zu %{added_count} Set(s) hinzugefügt.,Removed set from %{removed_count} set(s). Added set to %{added_count} set(s).,\ncollection_sorting_created_at_asc,Sortieren nach Importierdatum aufsteigend,Sort by import date ascending,\ncollection_sorting_created_at_desc,Sortieren nach Importierdatum absteigend,Sort by import date descending,\ncollection_sorting_manual_asc,Sortieren manuell aufsteigend,Sort manually ascending,\ncollection_sorting_manual_desc,Sortieren manuell absteigend,Sort manually descending,\ncollection_sorting_last_change_desc,Sortieren nach letzter Änderung absteigend,Sort by date of update descending,\ncollection_sorting_last_change_asc,Sortieren nach letzter Änderung aufsteigend,Sort by date of update ascending,\ncollection_sorting_title_asc,Sortieren nach Titel alphabetisch,Sort by title alphabetically,\ncollection_sorting_title_desc,Sortieren nach Titel absteigend,\"Sort by title alphabetically, but descending\",\ncollection_tab_main,Set,Set,\ncollection_was_disfavored,Das Set wurde von den Favoriten entfernt.,Set was removed from favorites.,\ncollection_was_favored,Das Set wurde zu den Favoriten hinzugefügt.,Set was added to favorites.,\ncontents_privacy_private,Diese Inhalte sind nur für Sie zugänglich.,These items are only accessible to you.,\ncontents_privacy_public,Diese Inhalte sind öffentlich zugänglich.,These items are accessible to the public.,\ncustom_urls_canonical_hint,\"Jeder Inhalt hat eine automatisch erzeugte, kanonische Adresse bestehend aus Zahlen und Buchstaben, eine sog. UUID (Universally Unique Identifier). Diese Adresse kann nicht übertragen oder entfernt werden und ist deshalb immer an erster Stelle aufgelistet.\",\"Every item has a canonical address consisting of numbers und letters which is created automatically, a so- called UUID (Universally Unique Identifier). This address can not be transferred or deleted. For this reason it is always listed first.\",\ncustom_urls_canonical_title,Kanonische Adresse (UUID),Canonical address (UUID),\ncustom_urls_flash_create_successful_1,Adresse ,Address ,\ncustom_urls_flash_create_successful_2, wurde erstellt., was created.,\ncustom_urls_flash_empty,Adresse darf nicht leer sein.,Address is not allowed to be empty.,\ncustom_urls_flash_exists_on_itself_collection_1,Die Adresse ,The address ,\ncustom_urls_flash_exists_on_itself_collection_2, existiert bereits für dieses Set., already exists for this set.,\ncustom_urls_flash_exists_on_itself_media_entry_1,Die Adresse ,The address ,\ncustom_urls_flash_exists_on_itself_media_entry_2, existiert bereits für diesen Medieneintrag., already exists for this media entry.,\ncustom_urls_flash_not_allowed_collection_1,Die Adresse ,The address ,\ncustom_urls_flash_not_allowed_collection_2,\" kann nicht übertragen werden. Sie haben nicht die Berechtigung das Set zu verwalten, auf welches die Adresse \", can not be transferred. You do not have permission to manage the set to which the address ,\ncustom_urls_flash_not_allowed_collection_3, im Moment verweist., is related to.,\ncustom_urls_flash_not_allowed_media_entry_1,Die Adresse ,The address ,\ncustom_urls_flash_not_allowed_media_entry_2,\" kann nicht übertragen werden. Sie haben nicht die Berechtigung den Medieneintrag zu verwalten, auf welchen die Adresse \", cannot be transferred. You do not have  permission to manage the media entry to which the address ,\ncustom_urls_flash_not_allowed_media_entry_3, im Moment verweist., is related to.,\ncustom_urls_flash_not_same_type_collection_1,Adresse ,The address ,\ncustom_urls_flash_not_same_type_collection_2, kann nicht übertragen werden. Adressen von Medieneinträgen können nicht auf Sets übertragen werden., can not be transferred. Addresses from media entries can not be transferred to sets.,\ncustom_urls_flash_not_same_type_media_entry_1,Adresse ,The address ,\ncustom_urls_flash_not_same_type_media_entry_2, kann nicht übertragen werden. Adressen von Sets können nicht auf Medieneinträge übertragen werden., cannot be transferred. Addresses from sets cannot be transferred to media entries.,\ncustom_urls_flash_primary_url_set_1,,,\"Wo: Bestätigung CustomURL, vor der Adresse\"\ncustom_urls_flash_primary_url_set_2, wurde als primäre Adresse gesetzt., was set as primary address.,\"Wo: Bestätigung CustomURL, nach der Adresse\"\ncustom_urls_flash_transfer_confirmation_collection_1,Die Adresse ,The address ,\ncustom_urls_flash_transfer_confirmation_collection_2, ist gegenwärtig dem Set , is currently related to the set  ,\ncustom_urls_flash_transfer_confirmation_collection_3, zugewiesen. Wollen Sie diese Adresse auf das Set ,. Would you like to transfer this address to the set ,\ncustom_urls_flash_transfer_confirmation_collection_4, übertragen?,?,\ncustom_urls_flash_transfer_confirmation_media_entry_1,Die Adresse ,The address ,\ncustom_urls_flash_transfer_confirmation_media_entry_2, ist gegenwärtig dem Medieneintrag , is currently related to the media entry  ,\ncustom_urls_flash_transfer_confirmation_media_entry_3, zugewiesen. Wollen Sie diese Adresse auf den Medieneintrag ,. Would you like to transfer this address to the media entry ,\ncustom_urls_flash_transfer_confirmation_media_entry_4, übertragen?,?,\ncustom_urls_flash_transfer_successful_1,Adresse ,Address  ,\ncustom_urls_flash_transfer_successful_2, wurde von , was transferred from  ,\ncustom_urls_flash_transfer_successful_3, auf , to ,\ncustom_urls_flash_transfer_successful_4, übertragen.,0,\ncustom_urls_flash_wrong_format_1,Adresse ,Address ,\ncustom_urls_flash_wrong_format_2, erfüllt die Anforderungen nicht., does not meet the requirements.,\ncustom_urls_manage_address_title,Adressverwaltung,Address administration,\ncustom_urls_new,Adresse anlegen / übertragen,Create / transfer address,\ncustom_urls_no_addresses_defined,Noch keine Adressen definiert.,No address defined yet.,\ncustom_urls_primary_hint,\"Für jeden Inhalt (egal ob Medieneintrag oder Set) gibt es immer genau eine primäre Adresse. Diese ist in der Adressleiste des Browsers sichtbar, wenn der Inhalt angezeigt wird. Neben der primären Adresse können weitere gesetzt werden, die auf die primäre Adresse weiterleiten.\",Each item (media entry or set) has exactly one primary address. This address is displayed in the browsersaddress bar when the item is accessed.You have the option to create other addresses which are forwarded to the primary address.,\ncustom_urls_primary_title,Primäre Adresse,Primary address,\ncustom_urls_table_header_actions,Aktionen,Actions,\ncustom_urls_table_header_address,Adresse,Address ,\ncustom_urls_table_header_created_by,Erstellt durch,Created by,\ncustom_urls_table_header_date,Datum,Date,\ncustom_urls_table_header_type,Typ,Type,\ncustom_urls_title,Adressen für ,Addresses for ,\ndashboard_create_collection,Set erstellen,Create set,\ndashboard_create_collection_btn,Set erstellen,Create set,\ndashboard_create_media_entry_btn,Medien importieren,Upload media,\ndashboard_none_exist,Keine vorhanden.,There are none.,\ndashboard_show_all,Alle anzeigen,Show all,\ndashboard_title_head,Mein Archiv,My archive,\ndeleted,gelöscht,deleted,\ndynamic_filters_any_values_title,Jegliche Werte,Any values,\ndynamic_filters_authorization,Berechtigung,Authorization,\ndynamic_filters_visibility,Sichtbarkeit,Accessability,\ndynamic_filters_visibility_private,Nur für mich,Only for me,\ndynamic_filters_visibility_user_or_group,Geteilt mit Personen und Arbeitsgruppen,Shared with people and work groups,\ndynamic_filters_person_header,Personen,Persons,\ndynamic_filters_remove_all_title,Alle entfernen,Remove all,\ndynamic_filters_role_header,Funktionen,Functions,\ndynamic_filters_search_for_api_client_placeholder,Suche nach API-Applikation,Search for API client...,\ndynamic_filters_search_for_delegation_placeholder,Suche nach Gruppe...,Search for group...,\ndynamic_filters_search_for_group_placeholder,Suche nach Gruppe...,Search for group...,\ndynamic_filters_search_for_user_placeholder,Suche nach User...,Search for user...,\ndynamic_filters_search_for,Suche nach,Search for,\nedit_custom_urls_back_to_collection,Zurück zum Set,Back to the set,\nedit_custom_urls_back_to_media_entry,Zurück zum Medieneintrag,Back to the media entry,\nedit_custom_urls_cancel,Abbrechen,Cancel,\nedit_custom_urls_confirmation,Bestätigung,Confirmation,\nedit_custom_urls_create_or_transfer,Adresse anlegen / übertragen,Create / transfer address,\nedit_custom_urls_preferred_address,Gewünschte Adresse:,Preferred address:,\nedit_custom_urls_requirements_hint,\"Eine Adresse darf nur genau einmal im System vorkommen – entweder für einen Medieneintrag oder für ein Set. Sie beginnt immer mit einem Kleinbuchstaben, gefolgt von (mindestens einem) weiteren Zeichen aus Kleinbuchstaben, Nummern, Bindestrichen ( - ) und Grundstrichen ( _ ) in beliebiger Reihenfolge.\",\"Each comprehensible address is unique in the system – either for a media entry or for a set. The address always begins with a lower case letter, followed by at least one other character. The following characters can bei lower case letters, numbers, hyphens ( - ) or low lines ( _ ) in any order.\",\nedit_custom_urls_requirements_title,Anforderungen,Requirements,\nedit_custom_urls_set_primary,Als primäre Adresse setzen,Set as primary address,\nedit_custom_urls_state_primary,Primäre Adresse,Primary address,\nedit_custom_urls_state_transfer,Weiterleitung,Forwarding,\nedit_custom_urls_title,Anforderungen,Requirements,\nedit_custom_urls_transfer,Übertragen,Transfer,\nedit_custom_urls_transfer_hint,\"Eine bereits bestehende Adresse kann von einem Medieneintrag auf einen anderen oder von einem Set auf ein anderes übertragen werden. Bestehende Adressen können nicht von einem Medieneintrag auf ein Set und umgekehrt übertragen werden. Wollen Sie eine Adresse übertragen, dann geben Sie diese hier ein. Sie müssen für beide Inhalte über die Zugriffsberechtigung 'Verwalten' verfügen.\",\"An existing address can be transferred from one media entry to another or from one set to another. Existing addresses cannfot be transferred from a media entry to a set or vice versa. If you want to transfer an address, please enter this address here. You have to have manage permissions for both items.\",\nedit_custom_urls_transfer_title,Übertragen,Transfer,\nembed_error_title,\"Fehler!\",\"Error!\",\nembed_error_context_pre,\"Angeforderte URL: \",\"Requested URL: \",\nembed_error_context_post,\"\",\"\",\nembed_error_help_pre,\"Hilfe: \",\"Help: \",\nembed_error_help_post,\"\",\"\",\nembed_error_msg,\"Dieser Inhalt kann nicht eingebettet werden.\",\"This content cannot be embedded.\",\nembed_error_msg_403,\"Dieser Inhalt kann nicht eingebettet werden, weil die nötigen Berechtigungen fehlen.\",\"This content cannot be embedded because the necessary permissions are missing.\",\nembed_error_msg_404,\"Der gewünschte Inhalt konnte nicht gefunden werden.\",\"The requested content could not be found.\",\nerror_401_title,\"Um Zugang zu diesem Bereich zu erhalten, melden Sie sich bitte an.\",To get access please login below with your user data.,\nerror_403_message,Bitte kontaktieren Sie die für die Ressource verantwortliche Person.,Please contact the responsible user for this resource.,\nerror_403_title,Sie haben keine Zugriffsrechte für diesen Inhalt.,You don’t have the necessary permissions to access this resource.,\nerror_404_title,Die gesuchte Seite kann nicht gefunden werden.,The requested page cannot be found.,\nerror_500_message,\"Benötigen Sie diesbezüglich Hilfe, dann kontaktieren Sie bitte den Support (%{support_email}) mit einer Beschreibung Ihrer letzten Arbeitsschritte sowie einem Screenshot dieser Seite.\",\"If you require help in this matter, please contact the support (%{support_email}) with a description of your last working steps and a screen shot of this page.\",\nerror_500_message_pre,\"Benötigen Sie diesbezüglich Hilfe, dann kontaktieren Sie bitte den Support (\",\"If you require help in this matter, please contact the support (\",\nerror_500_message_post,\") mit einer Beschreibung Ihrer letzten Arbeitsschritte sowie einem Screenshot dieser Seite.\",\") with a description of your last working steps and a screen shot of this page.\",\nerror_500_title,Es ist ein Server-Fehler aufgetreten.,A server error occurred.,\nexplore_keywords_section_title,Häufige Schlagworte,Frequent keywords,\nexplore_show_more,Weitere anzeigen,Show more,\nexplore_vocabulary_section_show_details,Details anzeigen,View details,\nexplore_vovabulary_section_title,Vokabulare,Vocabularies,\nexternal_groups,Abteilungsgruppen,Division groups,\nfooter_choose_language,Sprache wählen,Choose language,\ngroup_ask_delete_cancel,Abbrechen,Cancel,\ngroup_ask_delete_delete,Löschen,Delete,\ngroup_ask_delete_question_post, löschen?,?,\ngroup_ask_delete_question_pre,Möchten Sie die Arbeitsgruppe ,Would you like to delete work group ,\ngroup_ask_delete_title,Arbeitsgruppe löschen,Delete work group,\ngroup_delete_confirm_msg,\"Sind Sie sicher, dass Sie diese Arbeitsgruppe löschen wollen?\",Are you sure you want to delete this work group?,\ngroup_edit_at_least_one_member_delete,löschen,delete,VERB\ngroup_edit_at_least_one_member_post,0,0,NACH dem Verb und Namen der Gruppe\ngroup_edit_at_least_one_member_pre,Eine Arbeitsgruppe muss mindestens eine Person enthalten. Ganze Arbeitsgruppe ,A work group has at least one member. Whole work group,VOR dem Verb und Namen der Gruppe\ngroup_edit_btn,Bearbeiten,Edit,\ngroup_edit_cancel,Abbrechen,Cancel,\ngroup_edit_form_new_member_login_hint,Login des neuen Mitglieds dieser Arbeitsgruppe,New work group member login,\ngroup_edit_form_new_member_login_label,User hinzufügen,Add a member,\ngroup_edit_form_save_btn,Speichern,Save,\ngroup_edit_form_title_pre,Arbeitsgruppe bearbeiten: ,Edit work group: ,\ngroup_edit_hint_remove_yourself,Achtung: Sie entfernen sich selbst aus der Arbeitsgruppe!,Attention: You are about to remove yourself from the work group!,\ngroup_edit_member,Mitglieder,Members,\ngroup_edit_name,Name,Name,\ngroup_edit_person,Person,Person,\ngroup_edit_save,Speichern,Save,\ngroup_edit_username,Benutzername,Username,\ngroup_meta_data_institutional_name,Name der Abteilungsgruppe,Division group name,\ngroup_meta_data_name,Name,Name,\ngroup_new_form_title,Neue Arbeitsgruppe erstellen,Create group,\ngroup_new_group_btn,Neue Arbeitsgruppe,New work group,\ngroup_show_edit_button,Arbeitsgruppe bearbeiten,Edit work group,\ngroup_show_members,Mitglieder,Members,\ngroup_show_permissions_use,(anwenden),(execute),\ngroup_show_permissions_view,(betrachten),(view),\ngroup_show_permissions_view_use,(betrachten und anwenden),(view and execute),\ngroup_show_vocabulary_permissions,Berechtigungen Vokabulare,Permissions vocabularies,\ngroup_toolbar_header_entrusted_resources,Mir anvertraute Medieneinträge,Entrusted media entries,\ngroup_was_deleted,Arbeitsgruppe wurde gelöscht.,Work group has been deleted.,\nhome_page_new_contents,Neue Inhalte,New items,\ninternal_groups,Arbeitsgruppen,Work groups,\nlayout_mode_grid,Raster-Ansicht,Grid view,\nlayout_mode_list,Listen-Ansicht,List view,\nlayout_mode_miniature,Miniatur-Ansicht,Miniature view,\nlayout_mode_tiles,Kachel-Ansicht,Tile view,\nlogin_box_internal,Externe,External users,\nlogin_box_title,Anmelden,Log in,\nlogin_box_login_btn,Anmelden,Log in,\nlogin_box_email_or_login,E-Mail,Email,\nlogin_box_password,Passwort,Password,\nlogin_box_rememberme,Login merken,Remember me,\nlogin_box_username,Benutzername,User name,\nmedia_entry_all_metadata_title,Alle Metadaten nach Vokabularen,All metadata by vocabulary,\nmedia_entry_ask_delete_question_pre,\"Sind Sie sicher, dass Sie folgenden Medienintrag löschen möchten: \",Are you sure you want to delete the following media entry:,\nmedia_entry_ask_delete_title,Medieneintrag löschen,Delete media entry,\nmedia_entry_back_btn,Zurück,Back,\nmedia_entry_conversion_hint,\"Diese Datei wird gerade für eine Vorschau konvertiert. Sobald dies abgeschlossen ist, finden Sie hier eine abspielbare Version.\",\"Currently the system is converting this file to a preview. As soon as the conversion is finished, you will be able to play the file here.\",\nmedia_entry_conversion_progress_post,% abgeschlossen.,% completed.,\nmedia_entry_conversion_progress_pre,Konvertierung zu ,Conversion ,\nmedia_entry_conversion_reload,\"Laden Sie diese Seite neu, um den aktuellen Stand der Konvertierung zu erfahren.\",Reload this page to display the current state of conversion.,\nmedia_entry_conversion_status_failed,Die Konvertierung ist fehlgeschlagen. Bitte wenden Sie sich an den Support.,The file conversion has failed. Please contact support.,\nmedia_entry_conversion_status_initialized,Die Konvertierung läuft. Bitte versuchen Sie es später noch einmal.,The media file is converting. Please try later.,\nmedia_entry_conversion_status_submitted,Die Konvertierung läuft. Bitte versuchen Sie es später noch einmal.,The media file is converting. Please try later.,\nmedia_entry_deleted,Dieser Medieneintrag wurde gelöscht und ist für Benutzer nicht mehr sichtbar.,This media entry has been deleted and is no longer visible to users.\nmedia_entry_delete_success,Der Medieneintrag wurde gelöscht.,Media entry has been deleted.,\nmedia_entry_duplicator_configuration_annotate_as_new_version_of_post,erstellen,,\nmedia_entry_duplicator_configuration_annotate_as_new_version_of_pre,(Experte) Hinweis zu neuer Version inkl. Verlinkung zu,(Expert) Add annotation «new version of» and link to,\nmedia_entry_duplicator_configuration_copy_meta_data,Metadaten übertragen,Copy meta data,\nmedia_entry_duplicator_configuration_copy_permissions,Zugriffsberechtigungen übertragen,Copy permissions,\nmedia_entry_duplicator_configuration_copy_relations,Zusammenhänge übertragen (übergeordnete Sets und Favoriten),Copy relations (parent collections & favorites),\nmedia_entry_duplicator_configuration_move_custom_urls,(Experte) Sprechende Adresse (URL) übernehmen,(Expert) Move comprehensible Address (URL),\nmedia_entry_duplicator_configuration_instructions,Folgende Optionen können gewählt werden:,Choose options below:,\nmedia_entry_duplicator_custom_urls_already_moved,moved to the first successful upload!,moved to the first successful upload!,\nmedia_entry_duplicator_desc_post,zugewiesen.,by selected options.,\nmedia_entry_duplicator_desc_pre,\"Die unten importierten Mediendateien bekommen die den nachfolgend gewählten Optionen entsprechenden Metadaten, Zugriffsberechtigungen, Beziehungen und weitere Einstellungen des aktuellen Medieneintrags\",\"The media file to be imported below will get assigned meta data, permissions, relations and further settings from the actual media entry\",\nmedia_entry_duplicator_md_title_suffix,(updated),(updated),\nmedia_entry_duplicator_new_version_of_label,Updated file,Updated file,\nmedia_entry_export_close,Schliessen,Close,\nmedia_entry_export_download,Exportieren,Download,\nmedia_entry_export_has_no_original,Sie verfügen für den Export der Originaldatei nicht über die notwendige Berechtigung.,You are not allowed to download the original file.,\nmedia_entry_export_no_content,Sie haben keine Zugriffsberechtigung für die Originaldatei und es steht keine Vorschau zur Verfügung.,You do not have permission to access the original file and there is no preview available.,\nmedia_entry_export_original,Original,Original,\nmedia_entry_export_original_hint,Originaldatei herunterladen.,Download original file.,\nmedia_entry_export_subtitle_audios,Audio-Dateien,Audio files,\nmedia_entry_export_subtitle_documents,Dokumente,Documents,\nmedia_entry_export_subtitle_images,Bilder,Images,\nmedia_entry_export_subtitle_videos,Video-Dateien,Video files,\nmedia_entry_export_title,Medieneintrag exportieren,Download media entry,\nmedia_entry_export_rdf_title,RDF-Export Metadaten,RDF export metadata,\nmedia_entry_export_rdf_title_hint,(experimentell),(experimental),\nmedia_entry_export_rdf_experiment_footnote,\"Struktur und Format der Daten können sich ändern. Bitte geben sie eine Rückmeldung, falls Sie diese verwenden!\",\"Data structure and format is subject to change. Please send feedback if you are using this!\",\nmedia_entry_export_checksum_title,Prüfsumme,Checksum,\nmedia_entry_export_checksum_generate,Erzeugen,Generate,\nmedia_entry_export_checksum_verify,Prüfen,Verify,\nmedia_entry_export_checksum_empty,Prüfsumme erzeugen,Generate checksum,\nmedia_entry_export_checksum_generating,Wird erzeugt…,Generating…,\nmedia_entry_export_checksum_verifying,Wird verifiziert…,Verifying…,\nmedia_entry_export_checksum_generated_at,Erzeugt am,Generated at,\nmedia_entry_export_checksum_verified_at,Geprüft am,Verified at,\nmedia_entry_export_checksum_match,Prüfsumme stimmt überein,Checksum matches,\nmedia_entry_export_checksum_mismatch,Prüfsumme stimmt nicht überein,Checksum does not match,\nmedia_entry_export_checksum_error,Fehler bei der Prüfsummen-Operation,Error during checksum operation,\nmedia_entry_file_format_not_supported_1,\"Wahrscheinlich unterstützt Ihr Browser nicht die Darstellung dieses Dateiformats, aber Sie \",\"Your browser probably does not support the file format, but you can \",\nmedia_entry_file_format_not_supported_2,können die Datei ,download the file,\nmedia_entry_file_format_not_supported_3,exportieren.,0,\nmedia_entry_file_information_title,Datei,File information,\nmedia_entry_media_import_gotodrafts,Medieneinträge vervollständigen,Complete media entries,\nmedia_entry_media_import_gotomediaentries,Weiter zu Meine Medieneinträge,Continue to My media entries,\nmedia_entry_media_import_header,Medien importieren,Media upload,\nmedia_entry_media_import_box_header_a,,,\nmedia_entry_media_import_box_header_b, Upload(s), Upload(s),\nmedia_entry_media_import_box_upload_status_waiting,Warten…,Waiting…,\nmedia_entry_media_import_box_upload_status_error,Fehler!,Error!,\nmedia_entry_media_import_box_upload_status_progress_a,Hochladen… ,Uploading… ,\nmedia_entry_media_import_box_upload_status_progress_b,%,%,\nmedia_entry_media_import_box_upload_status_processing,Verarbeiten…,Processing…,\nmedia_entry_media_import_inside,Dateien auf dieses Feld ziehen oder ,Add files by drag and drop in this field or ,\nmedia_entry_media_import_inside_nojs,Dateien auswählen,Select files,\nmedia_entry_media_import_notes_msg,\"Bilder (TIFF, JPEG, PNG) sowie Audio- und Videofiles in den gängigsten Formaten werden direkt verarbeitet und dargestellt. Bilder im CMYK-Farbraum werden nicht korrekt dargestellt. Wandeln Sie diese vor dem Importieren in RGB um.\",\"Images (TIFF, JPEG, PNG) and audio/video files in the most common formats are processed and displayed directly. Images in the CMYK color model cannot be displayed correctly, please convert to RGB before uploading.\",\nmedia_entry_media_import_notes_title,Hinweise,Hints,\nmedia_entry_media_import_select_media,Medien auswählen,Select media files,\nmedia_entry_media_import_upload_error,überschreitet maximale Grösse von 16000 Pixel,exceeds size limit of 16000 pixel,\nmedia_entry_media_import_title,\"Bilder, Videos, Audio-Dateien oder Dokumente bereitstellen.\",\"Add images, video or audio files, or other documents.\",\nmedia_entry_meta_data_edit_by_context_btn,Metadaten nach Kontexten bearbeiten,Edit metadata by context,\nmedia_entry_meta_data_edit_by_vocab_btn,Metadaten nach Vokabularen bearbeiten,Edit metadata by vocabulary,\nmedia_entry_meta_data_header_prefix,Medieneintrag editieren: ,Edit media entry: ,\nmedia_entry_more_data_title,Verantwortlichkeit und Aktivität,Responsibility and activities,\nmedia_entry_not_published_warning_msg,Bei diesem Medieneintrag fehlen noch Pflichtangaben.,Media entry still needs mandatory data.,\nmedia_entry_relations_current,Aktueller Eintrag,Current entry,\nmedia_entry_relations_hint_text,\"Der ausgewählte Medieneintrag ist mit Sets verknüpft. Diese Zusammenhänge wurden aktiv festgelegt als übergeordnet oder benachbart. Sie sehen hier sowohl eigene Sets, als auch solche, die andere Nutzer/innen mit Ihnen teilen.\",\"The selected media entry is connected to sets. These relations are actively defined as a parent, a sibling or a child relationship. The sets displayed here are your own or are shared with you by other users.\",\nmedia_entry_relations_parents_hint,Der ausgewählte Medieneintrag wurde diesen Sets hinzugefügt.,The selected media entry was added to these sets.,\nmedia_entry_relations_siblings_hint,Diese Sets wurden den gleichen Sets hinzugefügt wie der ausgewählte Medieneintrag.,These sets were added to the same sets as the selected media entry.,\nmedia_entry_select_collection_flash_result,Der Medieneintrag wurde aus %{removed_count} Set(s) entfernt und zu %{added_count} Set(s) hinzugefügt.,Media entry removed from %{removed_count} set(s) and added to %{added_count} set(s).,\nmedia_entry_siblings_section_title,Weitere Medieneinträge im selben Set,Other media entries in the same set,\nmedia_entry_siblings_parent_set,Übergeordnetes Set:,Parent set:,\nmedia_entry_tab_main,Medieneintrag,Media entry,\nmedia_entry_tab_more_data,Alle Metadaten,All metadata,\nmedia_entry_tab_permissions,Berechtigungen,Permissions,\nmedia_entry_tab_relations,Zusammenhänge,Relations,\nmedia_entry_tab_usage_data,Nutzung,Usage,\nmedia_entry_upload_btn,Importieren,Upload,\nmedia_entry_was_disfavored,Der Medieneintrag wurde von den Favoriten entfernt.,Media entry was removed from favorites.,\nmedia_entry_was_favored,Der Medieneintrag wurde zu den Favoriten hinzugefügt.,Media entry was added to favorites.,\nmeta_data_action_delete_btn,Löschen,Delete,\nmeta_data_action_edit_btn,Bearbeiten,Edit,\nmeta_data_batch_action_remove_meta_data,Werte für alle Inhalte löschen,Delete data for all content,\nmeta_data_batch_failure,Metadaten konnten nicht aktualisiert werden.,Metadata could not be updated.,\nmeta_data_batch_hint_differences,Unterschiedliche Metadaten vorhanden,Different metadata in place.,\nmeta_data_batch_hint_differences_override,\"Achtung: Bestehende Werte werden durch Änderungen überschrieben! Wenn keine Änderungen vorgenommen werden, bleiben die verschiedenen Werte erhalten.\",\"Attention: Changes will replace exiting data. If not changes are made, data will be preserved.\",\nmeta_data_batch_hint_equal_data,Gleiche Metadaten vorhanden,Same metadata in place.,\nmeta_data_batch_hint_no_data,Noch keine Metadaten vorhanden,No metadata available yet.,\nmeta_data_batch_hint_value,Werte oder Text,Values or text,\nmeta_data_batch_item_selected,Medieneintrag selektiert,Media entry selected,\nmeta_data_batch_items_selected,Medieneinträge selektiert,Media entries selected,\nmeta_data_batch_more,weitere,More,\nmeta_data_batch_some_ignored_1,(,(,\nmeta_data_batch_some_ignored_2,\" Medieneinträge wurden ignoriert, da Sie nicht über die nötigen Berechtigungen verfügen)\",\"Media entries were ignored, because you do not have the required permissions.)\",\nmeta_data_batch_success,Metadaten wurden erfolgreich aktualisiert.,metadata have been updated successfully.,\nmeta_data_batch_summary_all_post, Medieneinträge wurden gespeichert., Media entries have been saved.,NACH der Anzahl\nmeta_data_batch_summary_all_pre,Alle ,All ,VOR der Anzahl\nmeta_data_batch_summary_missing, haben fehlende Pflichtangaben, have missing mandatory data,\nmeta_data_batch_summary_published, haben ausgefüllte Pflichtfelder, have mandatory data,\nmeta_data_batch_summary_were_published, hatten bereits ausgefüllte Pflichtfelder, already had mandatory data,\nmeta_data_batch_title_post_collections, Sets gleichzeitig editieren,Edit sets at the same time,\nmeta_data_batch_title_post_media_entries, Medieneinträge gleichzeitig bearbeiten, media entries at once,\nmeta_data_batch_title_pre,Metadaten für ,Edit metadata for ,\nmeta_data_blank_value_for_required_meta_key_post,0,0,\nmeta_data_blank_value_for_required_meta_key_pre,Kein Wert vorhanden für ,No value available for,\nmeta_data_collection_batch_summary_all_post, Sets wurden gespeichert., Sets were saved.,\nmeta_data_collection_batch_summary_all_pre,Alle ,All ,\nmeta_data_delete_confirm_msg,\"Sind Sie sicher, dass Sie diese Werte löschen wollen?\",Are you sure you want to delete these data?,\nmeta_data_edit_collection_saved,Set wurde gespeichert.,Set was saved.,\nmeta_data_edit_media_entry_published,Der Medieneintrag wurde gespeichert und alle Pflichtfelder sind ausgefüllt.,Media entry was saved and mandatory data have been entered.,\nmeta_data_edit_media_entry_saved,Der Medieneintrag wurde gespeichert.,Media entry was saved.,\nmeta_data_edit_media_entry_saved_missing,\"Der Medieneintrag wurde gespeichert, aber es wurden nicht alle Pflichtfelder ausgefüllt.\",Media entry was saved but there some mandatory data are missing.,\nmeta_data_edit_more_data,Weitere Angaben,More data,\nmeta_data_form_all_data,Alle Daten,All metadata,\nmeta_data_form_cancel,Abbrechen,Cancel,\nmeta_data_form_save,Speichern,Save,\nmeta_data_form_saving,Die Metadaten werden gerade gespeichert. Dies kann einige Zeit in Anspruch nehmen. Bitte gedulden Sie sich und schliessen Sie das Fenster nicht.,Meta data are currently being saved. This will take some time. Please be patient and do not close the browser.,\nmeta_data_form_submit_btn,Speichern,Save,\nmeta_data_header_text,Werte,Data,\nmeta_data_input_date_placeholder_duration_from,von,from,\nmeta_data_input_date_placeholder_duration_to,bis,to,\nmeta_data_input_date_placeholder_text,Freie Eingabe,Free text entry,\nmeta_data_input_date_placeholder_timestamp,wird als Text gespeichert,on,\nmeta_data_input_date_type_duration,von/bis,from/to,\nmeta_data_input_date_type_text,Freie Eingabe,Free text entry,\nmeta_data_input_date_type_timestamp,am,on,\nmeta_data_input_keywords_existing,Schlagwort ist bereits vergeben.,Keyword already assigned.,\nmeta_data_input_new_group_add,Arbeitsgruppe einfügen,Add work group,\nmeta_data_input_new_group_name,Name,Name,\nmeta_data_input_new_person_add,Person einfügen,Add person,\nmeta_data_input_new_person_first_name,Vorname,First name,\nmeta_data_input_new_person_last_name,Nachname,Last name,\nmeta_data_input_new_person_pseudonym,Pseudonym,Pseudonym,\nmeta_data_input_new_person_toggle,Neue Person oder Gruppe anlegen,Add new person or work group,\nmeta_data_input_person_save,Übernehmen,Apply,\nmeta_data_input_json_err_prefix,Eingabefehler: ,Input error: ,\nmeta_data_input_json_err_no_object,Wert ist nicht vom Typ 'Object'!,Value is not an 'Object'!,\nmeta_data_meta_key_documentation_url,> Online-Hilfe,click link for details,\nmeta_data_meta_key_label,Schlüssel,Key,\nmeta_data_role_add_another_btn,Weitere Funktion hinzufügen,Add another function,\nmeta_data_role_add_btn,Funktion hinzufügen,Add a function,\nmeta_data_role_add_heading,Funktion hinzufügen zu ,Add a function to,\nmeta_data_role_choose_label,Wählen Sie eine Funktion aus der Liste,Choose a function from the list,\nmeta_data_extensible_role_choose_label,Wählen Sie eine Funktion aus der Liste oder ergänzen Sie die Liste mit der gewünschten Funktion. Mit Enter die Eingabe abschliessen.,Choose a function from the list or enter the function and press Enter,\nmeta_data_role_edit_btn,Funktion bearbeiten,Edit function,\nmeta_data_role_edit_heading,Funktion bearbeiten,Edit the function of,\nmeta_data_role_remove_btn,Funktion entfernen,Remove function,\nmeta_data_type_label,Typ,Type,\nmeta_data_value_label,Wert,Data,\nmeta_datum_media_entry_label_id,Ressourcen-ID:,Resource ID:,\nmeta_datum_media_entry_label_string,Zusatztext:,additional text:,\nmeta_datum_media_entry_err_uuid_invalid,Ungültige UUID!,Invalid UUID!,\nmeta_datum_media_entry_value_unauthorized,Hinweis: Sie haben keinen Zugriff auf diese Ressource!,Notice: You do not have access to this resource!,\nmeta_datum_media_entry_value_not_found,Hinweis: Diese Ressource konnte nicht (mehr) gefunden werden!,Notice: This resource could not be found (anymore)!,\nmeta_key_order_alphabetical,a-z,a-z,\nmeta_key_order_alphabetical_hint,Die Schlagworte dieses Metadatenfeldes sind alphabetisch sortiert.,The keywords of this metakey are sorted alphabetically.,\nmeta_key_order_custom,redaktionell,editorial,\nmeta_key_order_custom_hint,Die Schlagworte dieses Metadatenfeldes sind redaktionell sortiert.,The keywords of this metakey are sorted editorially.,\nno_content_fallback,Keine Inhalte vorhanden.,No items available.,\nno_groups_fallback,Keine Arbeitsgruppen vorhanden.,No work groups available.,\nno_keywords_fallback,Keine Schlagworte vorhanden.,No keywords available.,\nno_relations_title,Es wurden keine Zusammenhänge gefunden.,No relations found.,\nnotifications_title_transfer_responsibility,Verantwortlichkeit übertragen,Transfer responsibility,\nnotifications_message_transfer_responsibility,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{user} an Sie übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{user} to you.\",\nnotifications_message_transfer_responsibility_via_delegation,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{user} an %{viaDelegation} übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{user} to %{viaDelegation}.\",\nnotifications_message_transfer_responsibility_by_user,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{sourceDelegation} durch %{actingUser} an Sie übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{sourceDelegation} by %{actingUser} to you.\",\nnotifications_message_transfer_responsibility_via_delegation_by_user,\"Verantwortlichkeit für %{resourceType} %{resource} wurde von %{sourceDelegation} durch %{actingUser} an %{viaDelegation} übertragen.\",\"The responsibility for %{resourceType} %{resource} was transferred from %{sourceDelegation} by %{actingUser} to %{viaDelegation}.\",\nnotifications_media_entry,Medieneintrag,media entry,\nnotifications_collection,Set,set,\nnotifications_acknowledge_all,Alle Notifikationen löschen,Delete all notifications,\nnotifications_really_acknowledge_all,Wirklich alle löschen?,Really delete all?,\nnotifications_acknowledge,Löschen,Delete,\nnotifications_acknowledge_date_tooltip,Alle Notifikationen vom %{date} löschen,Delete all notifications of %{date},\nnotifications_no_notifications,Keine Einträge vorhanden,No entries present,\nnotifications_section_expand,Alle anzeigen,Show all,\nnotifications_section_collapse,Anzeige reduzieren,Reduce,\nnotifications_section_show_more,Weitere Einträge anzeigen,Show more,\npagination_nav_loadnext,Mehr laden,Load more,\npagination_nav_nextloading,Mehr Inhalte werden geladen.,More items are being loaded.,\npagination_nav_nextpage,Nächste Seite,Next page,Wo: Manuelle Paginierung (ohne Javascript-Auto-Nachladen)\npagination_nav_prevpage,Vorangehende Seite,Previous page,Wo: Manuelle Paginierung (ohne Javascript-Auto-Nachladen)\npagination_nav_thispage,Diese Seite,This page,Wo: Manuelle Paginierung (ohne Javascript-Auto-Nachladen)\npagination_prefix,Seite ,Page ,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npagination_infix, von , of ,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npagination_postfix,,,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npagination_selection_label,Seite auswählen,Select page,Wo: Paginierung - Seitenanzeige (Zwischenbalken)\npeople_toolbar_header,Ähnliche Inhalte,Related items,\npermission_entrusted_to_api_client,Sichtbar für API-Applikationen,Visible to API clients,\npermission_entrusted_to_group,Sichtbar für Arbeitsgruppen,Visible to work groups,\npermission_entrusted_to_user,Sichtbar für Nutzer/innen,Visible to users,\npermission_name_edit_metadata,Metadaten editieren,Edit metadata,\npermission_name_edit_metadata_and_relations,Metadaten editieren & Inhalte hinzufügen,Edit metadata and add items,\npermission_name_edit_permissions,Zugriffsberechtigungen ändern,Edit permissions,\npermission_name_get_full_size,Original exportieren & in PDF blättern,Download original & browse PDF,\npermission_name_get_metadata_and_previews,Betrachten,View,\npermission_name_use,Anwenden,Execute,bezieht sich auf Vokabulare!\npermission_name_view,Betrachten,View,bezieht sich auf Vokabulare!\npermission_overridden_by_public,(überschrieben durch die öffentlichen Berechtigungen),(overruled by public permissions),\npermission_subject_name_public,Internet,Internet,\npermission_subject_title_apiapps,API-Applikationen,API clients,\npermission_subject_title_groups,Gruppen,Groups,\npermission_subject_title_public,Öffentlichkeit,Public,\npermission_subject_title_users,Nutzer/innen,Users,\npermission_subject_title_users_or_delegations,Nutzer/innen / Verantwortungs-Gruppen,Users / Responsibility Groups,\npermissions_batch_success,Berechtigungen wurden erfolgreich aktualisiert.,Permissions have been updated succesfully.,\npermissions_batch_title_post, Inhalten., Items.,\npermissions_batch_title_pre,Berechtigungen ändern von ,Edit permissions of ,\npermissions_overview_yours_msg_end,\", haben gegenwärtig als Nutzer/in oder als Mitglied einer Verantwortungs-Gruppe oder Arbeitsgruppe folgende Berechtigungen:\",\", currently have the following permissions (either directly or as a member of a\nresponsibility group or as a member of a work group):\",\npermissions_overview_yours_msg_start,\"Sie, \",\"You, \",\npermissions_overview_yours_title,Ihre Berechtigungen,Your permissions,\npermissions_responsibility_title,Verantwortlichkeit,Responsibility,\npermissions_responsible_user_and_responsibility_group_title,Verantwortliche/r Nutzer/in / Verantwortungs-Gruppe,Responsible user / Responsibility group,\npermissions_responsible_user_and_responsibility_group_msg,Der/die verantwortliche/r Nutzer/in hat alle Berechtigungen zu den ausgewählten Inhalten und kann diese auch löschen.,The responsible user / responsibility group has all permissions for the selected content and can also delete it.,\npermissions_responsible_delegation_title,Verantwortungs-Gruppe,Responsibility group,\npermissions_responsible_user_title,Verantwortliche Person,Responsible user,\npermissions_table_cancel_btn,Abbrechen,Cancel,\npermissions_table_edit_btn,Bearbeiten,Edit,\npermissions_table_remove_subject_btn,Berechtigung entfernen,Remove permission,\npermissions_table_save_btn,Speichern,Save,\npermissions_table_title,Zugriffsberechtigungen,Permissions,\npermissions_transfer_responsibility_link,Verantwortlichkeit übertragen,Transfer responsibility,\nperson_edit_add_uri_btn,URI hinzufügen,Add URL,\nperson_edit_cancel_btn,Abbrechen,Cancel,\nperson_edit_editing_header,Bearbeiten,editing,\nperson_show_external_uris,Links,Links,\nperson_edit_preview,Vorschau,Preview,\nperson_edit_save_btn,Speichern,Save,\nperson_edit_name_readonly_hint,\"Hinweis: Der eigene Name kann nicht geändert werden. Bitte wenden sie sich an den Support.\",\"Notice: Your own name can not be changed .Please contact the support.\"\nperson_show_description,Kurzbiographie,Short biography,\nperson_show_edit_btn,Seite bearbeiten,Edit Page,\nperson_show_external_uris,Links,Links,\nperson_show_external_uris_autority_control,Verzeichnis(se),Register,\nperson_show_first_name,Vorname,First name,\nperson_show_last_name,Nachname,Last name,\nperson_show_only_name,Name,Name,\nperson_show_pseudonym,Pseudonym,Pseudonym,\npicture_alt_fallback,(unbekannt),(unkown),\npicture_alt_prefix,Bild: ,Picture:,Prefix für Titel von Bildern (hover-titel/Screenreader)\nrelations_parents_title,Übergeordnete Sets,Parents,\nrelations_siblings_title,Benachbarte Sets,Siblings,\nrelations_title,Zusammenhänge,Relations,\nrelease_source_history,Source History,Source History,\nrelease_info,Release Info,Release info,\nrelease_local_git_version,Lokale Git Version,Local Git version,\nresource_action_collection_create,Set erstellen,Create set,\nresource_action_collection_destroy,Set löschen,Delete set,\nresource_action_collection_disfavor,Aus Favoriten entfernen,Remove from favorites,\nresource_action_collection_edit_cover,Titelbild festlegen,Define set cover,\nresource_action_collection_edit_custom_urls,Sprechende Adressen verwalten,Manage comprehensible address,\nresource_action_collection_edit_highlight,Inhalte hervorheben,Highlight items,\nresource_action_collection_edit_metadata,Metadaten editieren,Edit metadata,\nresource_action_collection_favor,Zu Favoriten hinzufügen,Add to favorites,\nresource_action_collection_select_collection,Zu Set hinzufügen/entfernen,Add to/remove from set,\nresource_action_collection_share,Set teilen,Share set,\nresource_action_media_entry_destroy,Medieneintrag löschen,Delete media entry,\nresource_action_media_entry_disfavor,Aus Favoriten entfernen,Remove from favorites,\nresource_action_media_entry_edit_custom_urls,Sprechende Adressen verwalten,Manage comprehensible address,\nresource_action_media_entry_edit_metadata,Metadaten editieren,Edit metadata,\nresource_action_media_entry_export,Medieneintrag exportieren,Export media entry,\nresource_action_media_entry_favor,Zu Favoriten hinzufügen,Add to favorites,\nresource_action_media_entry_manage_confidential_links,Vertrauliche Links verwalten,Manage Confidential Links,\nresource_action_media_entry_select_collection,Zu Sets hinzufügen / Aus Sets entfernen,Add to/remove from set,\nresource_action_media_entry_share,Medieneintrag teilen,Share media entry,\nresource_action_media_entry_update_file,Medieneintrag ersetzen,Replace media entry,\nresource_action_more_actions,Weitere Aktionen,Further actions,\nresource_action_show_in_admin,Zeige im Admin-Interface,Show in Admin Interface,\nresource_ask_delete_cancel,Abbrechen,Cancel,\nresource_ask_delete_ok,Löschen,Delete,\nresource_ask_delete_question_post,?,?,\nresource_meta_data_copyright_notice,Rechte am geistigen Eigentum,Copyright notice,\nresource_meta_data_date,Datierung,Date,\nresource_meta_data_description,Beschreibung,Description,\nresource_meta_data_document_type,Dokumenttyp,Type of document,\nresource_meta_data_fallback,Es sind keine Metadaten zu diesem Kontext bereitgestellt.,There are no metadata related to this context.,\nresource_meta_data_has_validation_errors,Es gibt fehlerhafte Eingabefelder.,There are erroneously entry fields.,\"Wo: Meldung wenn Metadaten fehlerhaft, z.B. fehlendes Pflichtfeld\"\nresource_meta_data_keywords,Schlagworte,Keywords,\nresource_meta_data_resource_type,Medientyp,Media type,\nresource_meta_data_responsible,Verantwortliche/r Nutzer/in,Responsible user,\nresource_meta_data_saved_filter,Gespeicherter Filter,Saved filter,\nresource_meta_data_title,Titel,Title,\nresource_select_collection_cancel,Abbrechen,Cancel,\nresource_select_collection_clear,Löschen,Clear,\nresource_select_collection_has_more,Es gibt noch weitere Resultate. Bitte Suche verfeinern.,There are more results. Please refine the search.,\nresource_select_collection_hint_more,Es wurden noch weitere Sets gefunden. Bitte verfeinern Sie Ihre Suche.,Additional sets were found. Please refine your search.,\nresource_select_collection_new,Neue,New,\nresource_select_collection_non_assigned,Inhalt ist noch keinem Set zugewiesen.,Item is not yet related to any set.,\nresource_select_collection_non_found,Zu dieser Suche wurde kein Set gefunden.,No set was found.,\nresource_select_collection_save,Speichern,Save,\nresource_select_collection_search,Suchen,Search,\nresource_select_collection_search_placeholder,Suche,Search,\nresource_select_collection_title,Zu Set hinzufügen/entfernen,Add to/remove from set,\nresource_thumbnail_contents,Inhalte,Items,\nresource_thumbnail_sets,Sets,Sets,\nresources_box_batch_actions_addalltoclipboard_1,Alle ,Add all ,\nresources_box_batch_actions_addalltoclipboard_2, zur Stapelverarbeitung hinzufügen, to batch processing,\nresources_box_batch_actions_addselectedtoclipboard,Ausgewählte zur Stapelverarbeitung hinzufügen,Add selected to batch processing,\nresources_box_batch_actions_addtoset,Ausgewählte zu Set hinzufügen,Add selected to set,\nresources_box_batch_actions_clear_clipboard,Stapelverarbeitung leeren,Empty batch processing,\nresources_box_batch_actions_delete,Ausgewählte löschen,Delete selected,\nresources_box_batch_actions_edit,Metadaten von Medieneinträgen editieren,Edit metadata for media entries,\nresources_box_batch_actions_edit_title,Titel von Medieneinträgen editieren,Edit titles of media entries,\nresources_box_batch_actions_edit_all_collections,Metadaten von allen Sets editieren,Edit metadata of all sets at once,\nresources_box_batch_actions_edit_all_media_entries,Metadaten von allen Medieneinträgen editieren,Edit metadata of all media entries at once,\nresources_box_batch_actions_edit_sets,Metadaten von Sets editieren,Edit metadata of sets,\nresources_box_batch_actions_managepermissions,Berechtigungen von Medieneinträgen editieren,Edit permissions for media entries,\nresources_box_batch_actions_menu_title,Aktionen,Actions,\nresources_box_batch_actions_removefromclipboard,Ausgewählte aus der Stapelverarbeitung entfernen,Remove selected from batch processing,\nresources_box_batch_actions_removefromset,Aus Set entfernen,Remove from set,\nresources_box_batch_actions_sets_managepermissions,Berechtigungen von Sets editieren,Edit permissions for sets,\nresources_box_batch_actions_transfer_responsibility_entries,Verantwortlichkeit von Medieneinträgen übertragen,Transfer responsibility of media entries,\nresources_box_batch_actions_transfer_responsibility_sets,Verantwortlichkeit von Sets übertragen,Transfer responsibility of sets,\nresources_box_deselect_all,Alle abwählen,Deselect all,\nresources_box_filter,Filtern,Filter,\nresources_box_filters_note_post,\"aus, um weitere Filterkriterien anwenden zu können.\",\"in the Action bar to see more filter options.\",\nresources_box_filters_note_pre,Wählen Sie in der Aktionsleiste,Please select,\nresources_box_filters_note_or,oder,or,\nresources_box_new_search,Neue Suche,New search,\nresources_box_no_content,Keine Inhalte verfügbar,No items available.,\nresources_box_no_content_but_sets_1,Es gibt keine Medieneinträge für diese Suche. Es wurden aber ,There are no media entries related to this search process. But ,\nresources_box_no_content_but_sets_2,Sets,sets,\nresources_box_no_content_but_sets_3, gefunden., have been found.,\nresources_box_reset_filter,Filter zurücksetzen,Reset filter,\nresources_box_select_all,Alle auswählen,Select all,\nresources_box_selection_limit_ok,Ok,Ok,\nresources_box_selection_limit_page_1,\"Die Seite kann nicht selektiert werden, da sonst die maximale Anzahl von \",This page cannot be selected because otherwise the maximum number of,\nresources_box_selection_limit_page_2, ausgewählten Inhalten überstiegen würde., pages would be exceeded.,\nresources_box_selection_limit_single_1,\"Der Inhalt kann nicht selektiert werden, da sonst die maximale Anzahl von \",\"This item can not be selected, because otherwise the maximum number of\",\nresources_box_selection_limit_single_2, ausgewählten Inhalten überstiegen würde.,selected items would be exceeded.,\nresources_box_selection_remove_selection,Auswahl entfernen,Remove selection,\nresources_box_selection_select,Auswählen,Select,\nresources_box_title_count_post,Inhalte,Items,\nresources_box_info_header_no_system_groups,In dieser Auflistung werden %{system_groups_name} nicht berücksichtigt.,%{system_groups_name} are not taken into account.,\nresources_box_info_header_system_groups_name,Systemgruppen,System groups,\nresources_section_show_all,Alle anzeigen →,Show all →,\nresources_type_all,Alle,All,\nresponsibility_groups,Verantwortungs-Gruppen,Responsibility groups,\nsearch_btn_search,Suchen,Search,\nsearch_filename,Filename,File name,\nsearch_full_text,Volltext,Full text,\nsection_title_collections,Meine Sets,My sets,\nsection_title_groups,Meine Gruppen,My groups,\nsection_title_keywords,Meine Schlagworte,My keywords,\nsection_title_media_entries,Meine Medieneinträge,My media entries,\nsection_title_tokens,Meine Tokens,My tokens,\nsession_expiring_soon,Sie werden in weniger als %{minutes} Minuten ausgeloggt. Speichern Sie Ihre Eingaben und melden sich neu an.,You will be logged out in less than %{minutes} minutes. Save your input and log in again.\nshare_back_to_collection,Zurück zum Set,Back to the set,\nshare_back_to_media_entry,Zurück zum Medieneintrag,Back to the media entry,\nshare_close,Schliessen,Close,\nshare_custom_url_hint_collection,\"Falls eine «sprechende Adresse» definiert wurde und Sie diese nutzen möchten (z.B. …/annas-neueste-arbeiten), dann verwenden Sie folgende URL:\",\"If a \"comprehensible address\" has been defined and you would like to use it (e.g., …/latest-works-by-anna), use the following URL:\",\nshare_custom_url_hint_media_entry,\"Falls eine «sprechende Adresse» definiert wurde und Sie diese nutzen möchten (z.B. …/annas-neueste-arbeit), dann verwenden Sie folgende URL:\",\"If a \"comprehensible address\" has been defined and you would like to use it (e.g., …/latest-work-by-anna), use the following URL:\",\nshare_custom_url_none_available,Es ist keine sprechende Adresse angelegt.,No comprehensible address has been defined.,\nshare_custom_url_subtitle,Sprechende Adresse teilen,Share comprehensible address,\nshare_embed_hint_iframe,\"Falls dies von Ihrem gewünschen System nicht unterstützt wird, kopieren Sie den nachfolgenden iFrame-Code und fügen diesen als HTML-Element in das gewünschte System ein.\",\"If your desired system does not support this, copy the following iFrame code and paste it into the desired system as an HTML element.\",\nshare_embed_hint_iframe_code,\"IFrame-Code\",\"IFrame Code\",\nshare_embed_hint_oembed,\"Viele Content Management Systeme lassen einfaches Einbetten von Inhalten via oEmbed zu. Dazu kopieren Sie die URL oben und fügen sie in ein Inhaltselement ein.\",\"Many content management systems allow easy embedding of content via oEmbed. To do so, copy the URL above and paste it into a content element.\",\nshare_embed_hint_subtitle,\"Medieneintrag einbetten\",\"Embed Media Entry\",\nshare_title_collection,Set teilen,Share set,\nshare_title_media_entry,Medieneintrag teilen,Share media entry,\nshare_uuid_url_hint_collection,\"Möchten Sie dieses Set teilen? Verwenden Sie dazu folgende URL.\",\"Would you like to share this set? Use the following URL.\",\nshare_uuid_url_hint_exporter,Auch für den Export mit dem Madek-Exporter wird diese URL benötigt.,This URL is also required for exporting with the Madek exporter.,\nshare_uuid_url_hint_media_entry,\"Möchten Sie diesen Medieneintrag teilen? Verwenden Sie dazu folgende URL.\",\"Would you like to share this media entry? Use the following URL.\",\nshare_uuid_url_subtitle,URL teilen,Share URL,\n\n\nsettings_notifications_title,Notifikationen,Notifications,\nsettings_notifications_info1,Notifikationen werden unter %{notifications} aufgeführt und optional per E-Mail verschickt.,Notifications are listed under %{notifications} and optionally sent via email.,\nsettings_notifications_info2,Notifikationen werden nach 6 Monaten gelöscht,Notifications will be removed after 6 months,\nsettings_notifications_info3,Die Einstellungen für die E-Mail-Notifikationen finden Sie nachstehend:,Choose your settings for e-mail notifications below:,\nsettings_notifications_email_label,An folgende E-Mail-Adresse bekommen Sie Notifikationen zugestellt:,Notifications will be sent to the following e-mail address:,\nsettings_notifications_locale_label,Die E-Mails werden in folgender Sprache verschickt:,You will receive emails in,\nsettings_notifications_locale_de,Deutsch,German,\nsettings_notifications_locale_en,Englisch,English,\nsettings_notifications_title_transfer_responsibility,Verantwortlichkeit übertragen,Transfer responsibility,\nsettings_notifications_title_weather_report,Wetterbericht,Weather report,\nsettings_notifications_email_frequency_label,In welcher Häufigkeit möchten Sie E-Mails erhalten?,Frequency of email notification:,\nsettings_notifications_email_frequency_immediately,sofort,immediately,\nsettings_notifications_email_frequency_daily,täglich (Zusammenfassung),daily (digest),\nsettings_notifications_email_frequency_weekly,wöchentlich (Zusammenfassung),weekly (digest),\nsettings_notifications_email_frequency_never,keine,none,\nsettings_advanced_functions_title,Erweiterte Funktionen,Advanced functions,\nsettings_show_all_data_tab_in_edit_mode_label,Reiter «Alle Daten» im Bearbeitungsmodus einblenden,Show the «All metadata» Tab in edit mode,\nsettings_save_changes,Einstellungen speichern,Save settings,\nsettings_saved_changes,Einstellungen wurden gespeichert,Settings have been saved,\nsitemap_activities,Aktivitäten,Activities,\nsitemap_notifications,Notifikationen,Notifications,\nsitemap_api,API,API,\nsitemap_clipboard,Stapelverarbeitung,Batch processing,\nsitemap_collections,Sets,Sets,\nsitemap_entries,Medieneinträge,Media entries,\nsitemap_explore,Erkunden,Explore,\nsitemap_filter_sets,Filtersets,Filter sets,\nsitemap_help,Hilfe,Support,\nsitemap_media_entries,Medieneinträge,Media entries,\nsitemap_metakey,Metakey,Metakey,\nsitemap_metakey_id,Metakey-ID,Metakey ID,\nsitemap_my_archive,Mein Archiv,My archive,\nsitemap_my_clipboard,Stapelverarbeitung,Batch processing,\nsitemap_my_content_collections,Sets,Sets,\nsitemap_my_content_media_entries,Medieneinträge,Media entries,\nsitemap_my_delegated_collections,Sets in gemeinsamer Verantwortung,Sets with joint responsibility,\nsitemap_my_delegated_media_entries,Medieneinträge in gemeinsamer Verantwortung,Media entries with joint responsibility,\nsitemap_my_entrusted_collections,Mir anvertraute Sets,My entrusted sets,\nsitemap_my_entrusted_filter_sets,Mir anvertraute Filtersets,My entrusted filter sets,\nsitemap_my_entrusted_media_entries,Mir anvertraute Medieneinträge,My entrusted media entries,\nsitemap_my_favorite_collections,Favoriten-Sets,Favorite sets,\nsitemap_my_favorite_media_entries,Favoriten-Medieneinträge,Favorite media entries,\nsitemap_my_groups,Gruppen,Groups,\nsitemap_my_latest_imports,Letzte Importe,Last imports,\nsitemap_my_unpublished,Unvollständige Medieneinträge,Incomplete media entries,\nsitemap_my_used_keywords,Schlagworte,Keywords,\nsitemap_search,Suche,Search,\nsitemap_tokens,Tokens,Tokens,\nsitemap_settings,Einstellungen,Settings,\nsitemap_vocabularies,Vokabulare,Vocabularies,\nconfidential_links_help_title,Hinweise,Hints,\nsitemap_vocabulary,Vokabular,Vocabulary,\nconfidential_links_help_text,\"Vertrauliche Links ermöglichen den direkten Zugriff auf Medieneinträge, auch wenn sie nicht öffentlich sichtbar sind.\nDiese Links ermöglichen somit auch Benutzern ohne Login einen Zugang zum Medieneintrag. Binden Sie Vertrauliche Links nicht in öffentlich zugängliche Webseiten ein, sonst werden die regulären Zugriffsberechtigungen wirkungslos.\nVertrauliche Links können nur vom Verantwortlichen eines Medieneintrags erstellt und zurückgezogen werden. Die Links können mit einem Verfallsdatum erstellt oder zeitlich unbeschränkt erstellt werden.\",\"Confidential Links can be used to enable access to Entries without making them publicly visible.\nThese Links therefore also make it possible to share Entries with Users that don't have a login. Please do not share or embed Confidential Links onto publicly accessible websites, because it would render the regular permission settings useless.\nConfidential Links can only be created by the responsible user of an Entry. They can be manually revoked at any time, and optionally be set to expire automatically after a set day.\",\nconfidential_links_header,Vertrauliche Links,Confidential Links,\nconfidential_links_title_pre,Vertrauliche Links für ,Confidential Links for ,\nconfidential_links_title_post,Zurück zum Set,Back to the set,\nconfidential_links_back_to_media_entry,Zurück zum Medieneintrag,Back to the media entry,\nconfidential_links_create_title,Neuen Vertraulichen Link erstellen,Create a new Confidential Link,\nconfidential_links_create_description,Beschreibung,Description,\nconfidential_links_create_submit,Vertraulichen Link erstellen,Create Confidential Link,\nconfidential_links_create_set_expiration_date,Ablaufdatum einstellen,Set expiration date,\nconfidential_links_create_cancel,Abbrechen,Cancel,\nconfidential_links_created_title,Neuer Vertraulicher Link erstellt,New Confidential Link created,\nconfidential_links_created_back_btn,Zurück zu allen Vertraulichen Links,Go back to all Confidential Links,\nconfidential_links_created_notice,Vertraulicher Link erstellt!,Confidential Link was created!,\nconfidential_links_show_link_for_copy,Link zum kopieren:,Link to copy:,\nconfidential_links_show_embedcode_for_copy,Embed-Code zum kopieren:,Embed-Code to copy:,\nconfidential_links_show_embed_link,Embed-Link:,Embed-link:,\nconfidential_links_show_embed_code_iframe,HTML-Code/iframe:,HTML-code/iframe:,\nconfidential_links_list_created_hint_pre,Erstellt: ,Created: ,\nconfidential_links_list_expires_hint_pre,Ablaufdatum: ,Expiration date: ,\nconfidential_links_list_no_expiry,Nie,Never,\nconfidential_links_list_new_button,Neuen Vertraulichen Link erstellen,Add a new Confidential Link,\nconfidential_links_list_no_description,(Keine Beschreibung),(No description),\nconfidential_links_list_revoke_btn_hint,Zurückziehen,Revoke,\nconfidential_links_list_revoke_confirm,\"Sind Sie sicher, dass Sie diesen Vertraulichen Link zurückziehen wollen?\",Are you sure you want to revoke this Confidential Link?,\nconfidential_links_list_revoked_title,Abgelaufene und zurückgezogene Vertrauliche Links,Expired and revoked Confidential Links,\nconfidential_links_list_show_url,Link anzeigen,Show Link,\nconfidential_links_list_copy_url,Vertraulichen Link kopieren,Copy Confidential Link,\nconfidential_links_head_id,ID,ID,\nconfidential_links_head_name,Name,Name,\nconfidential_links_head_token,Token,Token,\nconfidential_links_head_valid_since,Erstellt am,Created at,\nconfidential_links_head_valid_until,Läuft ab,Expires at,\nconfidential_links_show_title,Vertraulicher Link,Confidential Link,\nconfidential_links_access_notice,Dieser Medieneintrag wurde über einen Vertraulichen Link aufgerufen. Die URL dieser Seite darf nur einem eingeschränkten Personenkreis zugänglich sein.,This Entry was accessed via a Confidential Link. The URL of this page shall only be made accessible to a limited group of people.,\ntransfer_responsibility_batch_success_collection_1,Sie haben für ,You have successfully transferred responsibility for ,\ntransfer_responsibility_batch_success_collection_1a, Set , set ,\ntransfer_responsibility_batch_success_collection_1b, Sets , sets ,\ntransfer_responsibility_batch_success_collection_2, die Verantwortlichkeit erfolgreich übertragen.,0,\ntransfer_responsibility_batch_success_media_entry_1,Sie haben für ,You have successfully transferred responsibility for ,\ntransfer_responsibility_batch_success_media_entry_1a, Medieneintrag , media entry,\ntransfer_responsibility_batch_success_media_entry_1b, Medieneinträge, media entries,\ntransfer_responsibility_batch_success_media_entry_2, die Verantwortlichkeit erfolgreich übertragen.,0,\ntransfer_responsibility_cancel,Abbrechen,Cancel,\ntransfer_responsibility_currently_responsible,Bisher verantwortlich,Currently responsible,\ntransfer_responsibility_to,Verantwortlichkeit übertragen auf,Transfer responsibility to,\ntransfer_responsibility_for_1_media_entry,für 1 Medieneintrag,for 1 media entry,\ntransfer_responsibility_for_n_media_entries,für %{nofResources} Medieneinträge,for %{nofResources} media entries,\ntransfer_responsibility_for_1_collection,für 1 Set,for %{nofResources} set,\ntransfer_responsibility_for_n_collections,für %{nofResources} Sets,for %{nofResources} sets,\ntransfer_responsibility_multiple_will_receive,Die bisher Verantwortlichen behalten folgende Berechtigungen:,The ones currently responsible are retaining the following permissions:,\ntransfer_responsibility_single_will_receive,%{name} behält folgende Berechtigungen:,%{name} is retaining the following permissions:,\ntransfer_responsibility_submit,Übertragen,Transfer,\ntransfer_responsibility_success_collection,Sie haben die Verantwortlichkeit für das Set erfolgreich übertragen.,You have successfully transferred responsibility for the set.,\ntransfer_responsibility_success_media_entry,Sie haben die Verantwortlichkeit für den Medieneintrag erfolgreich übertragen.,You have successfully transferred responsibility for the media entry.,\ntransfer_responsibility_title_single,Verantwortlichkeit übertragen,Transfer responsibility,\ntransfer_responsibility_title_batch,Verantwortlichkeit %{forNResources} übertragen,Transfer responsibility %{forNResources},\ntransfer_responsibility_you_will_receive,\"Sie, %{name}, behalten folgende Berechtigungen:\",\"You, %{name}, are retaining the following permissions:\",\nusage_data_created_at,Erstellt am,Created on,\nusage_data_import_at,Importiert am,Imported on,\nusage_data_import_by,Importiert durch,Imported by,\nusage_data_last_changes_empty,Es wurden noch keine Änderungen festgehalten.,No changes have been recorded yet.,\nusage_data_last_changes_title,Letzte Änderungen der Metadaten,Last change of metadata,\nusage_data_relations_children,Set enthält,Set is related to,\nusage_data_relations_parents,Übergeordnete Sets,Parent sets,\nusage_data_relations_title,Zusammenhänge,Relations,\nusage_data_responsibility_title,Verantwortlichkeit und Aktivitäten,Responsibility and activities,\nusage_data_responsible,Verantwortliche/r Nutzer/in / Verantwortungs-Gruppe,Responsible user / responsibility group,\nusage_terms_accept_btn,Nutzungsbedingungen akzeptieren,Accept usage terms,\nusage_terms_reject_btn,Ablehnen,Reject usage terms,\nuser_menu_admin_mode_toogle_off,Admin-Modus beenden,Stop admin mode,\nuser_menu_admin_mode_toogle_on,In Admin-Modus wechseln,Switch to admin mode,\nuser_menu_admin_ui,Admin-Interface öffnen,Open admin interface,\nuser_menu_login_btn,Anmelden,Log in,\nuser_menu_logout_btn,Abmelden,Log out,\nuser_menu_my_content_collections,Meine Sets,My sets,\nuser_menu_my_content_media_entries,Meine Medieneinträge,My media entries,\nuser_menu_my_favorite_collections,Favoriten - Sets,Favorites - sets,\nuser_menu_my_favorite_media_entries,Favoriten - Medieneinträge,Favorites - media entries,\nuser_menu_my_groups,Meine Gruppen,My groups,\nuser_menu_my_person,Meine Person,My person,\nuser_menu_upload,Medien importieren,Upload media,\nuser_name_deactivated,[Gelöschter User],[Deleted user],\nvocabularies_all,Alle Vokabulare,All vocabularies,\nvocabularies_contents_hint_1,Alle Inhalte mit Metadaten des Vokabulars ,All items with metadata related to the vocabulary,\nvocabularies_contents_hint_2,\". Sie sehen nur Inhalte, für die Sie berechtigt sind.\",. You can see only items you have permissions for.,\nvocabularies_keywords_hint_1,Alle im Vokabular ,All keywords contained in the vocabulary ,\nvocabularies_keywords_hint_2, enthaltenen Schlagworte und die dazugehörenden Metadatenfelder., and related meta data fields.,\nvocabularies_no_description,(Keine Beschreibung),(No description available),\nvocabularies_no_keywords,Keine Schlagworte vorhanden.,No keywords available.,\nvocabularies_no_people,Keine Personen vorhanden.,Keine Personen vorhanden.,\nvocabularies_people_hint_1,Alle im Vokabular ,Alle im Vokabular ,\nvocabularies_people_hint_2, enthaltenen Personen und die dazugehörenden Metadatenfelder., enthaltenen Personen und die dazugehörenden Metadatenfelder.,\nvocabularies_tabs_contents,Inhalte,Items,\nvocabularies_tabs_keywords,Schlagworte,Keywords,\nvocabularies_tabs_people,Personen,People,\nvocabularies_tabs_permissions,Berechtigungen,Permissions,\nvocabularies_tabs_vocabulary,Vokabular,Vocabulary,\nvocabulary_permissions_hint1,\"Für dieses Vokabular können die Berechtigungen \"\"Betrachten\"\" und \"\"Anwenden\"\" vergeben werden. Wenn Sie Mitglied einer berechtigten Arbeitsgruppe sind, können Sie weitere Personen zu dieser hinzufügen oder daraus entfernen. Bitte überlegen Sie Änderungen gut, da über Arbeitsgruppen auch weitere Berechtigungen gesteuert werden.\",\"This vocabulary can be managed with the permissions \"\"View\"\" and \"\"Execute\"\". If you are member of a work group which owns permissions, you are able to add or remove further users. Think carefully before you make changes to work groups as this may affect other permissions.\",\nvocabulary_permissions_hint2,\"Weitere Berechtigungen für Personen, Arbeitsgruppen, API-Applikationen oder die Öffentlichkeit werden durch den Administrator vergeben – bitte wenden Sie sich an den Support.\",\"Further permissions for persons, work groups, API clients or public usage are granted by the administrator. Please contact  support.\",\nvocabulary_term_info_contents,Inhalte,Items,\nvocabulary_term_info_description,Beschreibung,Description,\nvocabulary_term_info_rdfclass,Typ,Type,\nvocabulary_term_info_term,Begriff,Term,\nvocabulary_term_info_url,URL,URL,\nvocabulary_term_info_urls,URLs,URLs,\nworkgroup_link_to_contents_text,Inhalte,Items,\nworkgroup_link_to_contents_title,Inhalte dieser Arbeitsgruppe anzeigen,Show items of this work group,\nworkgroup_members_table_is_member,Mitglied?,Member?,\nworkgroup_members_table_login,Login,Login,\nworkgroup_members_table_title,Mitglieder,Members,\nmedia_entry_notice_new_versions,Für diesen Medieneintrag sind neuere Versionen vorhanden:,Newer versions are available for this media entry:,\nread_more_button,\"Mehr anzeigen\",\"Show more\",\nread_less_button,\"Weniger anzeigen\",\"Show less\",\n");
		translations = Object.fromEntries(translationsList.map(function(item) {
			return [item.lang, item.mapping];
		}));
	}));
	//#endregion
	//#region app/javascript/models/shared/get-media-type.js
	var require_get_media_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function mediaTypeFromContentType(contentType) {
			if (/^image/.test(contentType)) return "image";
			if (/^video/.test(contentType)) return "video";
			if (/^audio/.test(contentType)) return "audio";
			if (/^text/.test(contentType)) return "document";
			if (/^application/.test(contentType)) return "document";
			return "other";
		};
	}));
	//#endregion
	//#region app/javascript/models/shared/base-collection.js
	var import_rails_csrf_token, SKIP_METHOD_KEYS, BaseCollection;
	var init_base_collection = __esmMin((() => {
		import_rails_csrf_token = /* @__PURE__ */ __toESM(require_rails_csrf_token());
		init_base_model();
		SKIP_METHOD_KEYS = /* @__PURE__ */ new Set([
			"type",
			"model",
			"isModel",
			"parse",
			"initialize",
			"mainIndex",
			"indexes",
			"ajaxConfig"
		]);
		BaseCollection = class BaseCollection {
			constructor(data = []) {
				this._listeners = {};
				this._listenedTo = [];
				this.models = [];
				this.isCollection = true;
				const config = this.constructor._config || {};
				const raw = Array.isArray(data) ? data : [];
				const parsed = config.parse ? config.parse.call(this, data) : raw;
				if (config.initialize) config.initialize.call(this, data);
				if (parsed && parsed.length) this._setModels(parsed);
			}
			_createModel(attrs) {
				if (!attrs) return attrs;
				const modelFn = (this.constructor._config || {}).model;
				if (!modelFn) return attrs;
				if (modelFn.prototype instanceof BaseModel) return new modelFn(attrs);
				return modelFn.call(this, attrs, {});
			}
			_setModels(arr) {
				this.models = arr.map((d) => {
					if (d instanceof BaseModel) return d;
					return this._createModel(d);
				});
			}
			on(event, fn) {
				(this._listeners[event] = this._listeners[event] || []).push(fn);
				return this;
			}
			off(event, fn) {
				if (!event) {
					this._listeners = {};
					return this;
				}
				if (!fn) {
					this._listeners[event] = [];
					return this;
				}
				this._listeners[event] = (this._listeners[event] || []).filter((f) => f !== fn);
				return this;
			}
			trigger(event, ...args) {
				const list = this._listeners[event];
				if (list) list.slice().forEach((fn) => fn(...args));
				return this;
			}
			listenTo(other, event, fn) {
				other.on(event, fn);
				this._listenedTo.push({
					other,
					event,
					fn
				});
				return this;
			}
			get length() {
				return this.models.length;
			}
			map(fn) {
				return this.models.map(fn);
			}
			filter(fn) {
				return this.models.filter(fn);
			}
			find(fn) {
				return this.models.find(fn);
			}
			some(fn) {
				return this.models.some(fn);
			}
			every(fn) {
				return this.models.every(fn);
			}
			forEach(fn) {
				return this.models.forEach(fn);
			}
			get(id) {
				return this.models.find((m) => m.url === id || m.uuid === id);
			}
			has(id) {
				return !!this.get(id);
			}
			add(attrsOrArray) {
				(Array.isArray(attrsOrArray) ? attrsOrArray : [attrsOrArray]).forEach((attrs) => {
					const model = this._createModel(attrs);
					this.models.push(model);
					this.trigger("add", model);
				});
				this.trigger("change");
				return this;
			}
			remove(model) {
				const idx = this.models.indexOf(model);
				if (idx >= 0) {
					this.models.splice(idx, 1);
					this.trigger("remove", model);
					this.trigger("change");
				}
				return this;
			}
			set(data) {
				const arr = Array.isArray(data) ? data : data ? [data] : [];
				this._setModels(arr);
				this.trigger("reset");
				this.trigger("change");
				return this;
			}
			reset(data) {
				return this.set(data);
			}
			serialize() {
				return this.models.map((m) => m && m.serialize ? m.serialize() : m);
			}
			sync(method, model, opts = {}) {
				const httpMethod = opts.method || {
					create: "POST",
					update: "PUT",
					patch: "PATCH",
					delete: "DELETE",
					read: "GET"
				}[method] || "GET";
				return fetch(opts.url, {
					method: httpMethod,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						"X-CSRF-Token": (0, import_rails_csrf_token.default)()
					},
					body: opts.json ? JSON.stringify(opts.json) : void 0
				}).then(async (res) => {
					let data;
					try {
						data = await res.json();
					} catch {
						data = null;
					}
					const resp = {
						statusCode: res.status,
						body: data
					};
					if (res.ok) {
						if (opts.success) opts.success(model, data, resp);
					} else if (opts.error) opts.error(model, resp);
					return res;
				}).catch((err) => {
					if (opts.error) opts.error(model, err);
					throw err;
				});
			}
			static extend(...args) {
				const ownConfig = args[args.length - 1] || {};
				const Parent = this;
				const merged = {
					...Parent._config || {},
					...ownConfig
				};
				class Extended extends Parent {}
				Extended._config = merged;
				Object.entries(ownConfig).forEach(([key, val]) => {
					if (!SKIP_METHOD_KEYS.has(key)) Extended.prototype[key] = val;
				});
				Extended.extend = BaseCollection.extend.bind(Extended);
				Extended.prototype.sync = Parent.prototype.sync;
				return Extended;
			}
		};
	}));
	//#endregion
	//#region app/javascript/models/shared/app-collection.js
	var AppCollection;
	var init_app_collection = __esmMin((() => {
		init_present();
		init_base_collection();
		init_rails_resource_mixin();
		AppCollection = BaseCollection.extend(rails_resource_mixin_default, {
			type: "AppCollection",
			mainIndex: ["url"],
			indexes: ["uuid"],
			has: function(index) {
				return present(this.get(index));
			}
		});
	}));
	//#endregion
	//#region app/javascript/models/meta-key.js
	var meta_key_default;
	var init_meta_key = __esmMin((() => {
		init_app_resource();
		meta_key_default = AppResource.extend({
			type: "MetaKey",
			props: {
				label: "string",
				value_type: "string"
			}
		});
	}));
	//#endregion
	//#region app/javascript/models/meta-datum.js
	var MetaDatum, meta_datum_default;
	var init_meta_datum = __esmMin((() => {
		init_app_resource();
		init_meta_key();
		MetaDatum = AppResource.extend({
			type: "MetaDatum",
			urlRoot: "/meta_data",
			props: {
				values: {
					type: "array",
					required: true
				},
				literal_values: {
					type: "array",
					required: true
				},
				vocabulary_id: {
					type: "string",
					required: true
				}
			},
			children: { meta_key: meta_key_default }
		});
		meta_datum_default = {
			Text: MetaDatum.extend({ type: "MetaDatumText" }),
			TextDate: MetaDatum.extend({ type: "MetaDatumText" }),
			People: MetaDatum.extend({ type: "MetaDatumPeople" }),
			Keywords: MetaDatum.extend({ type: "MetaDatumKeywords" }),
			Roles: MetaDatum.extend({ type: "MetaDatumRoles" })
		};
	}));
	//#endregion
	//#region app/javascript/models/meta-data.js
	var meta_data_default, serializeForSave;
	var init_meta_data = __esmMin((() => {
		init_lodash();
		init_app_collection();
		init_meta_datum();
		meta_data_default = AppCollection.extend({
			type: "MetaData",
			model: function(attrs, options) {
				const MetaDatumClass = meta_datum_default[attrs.type.replace(/^MetaDatum::/, "")];
				if (!MetaDatumClass) throw new Error(`No such type: ${attrs.type}!`);
				return new MetaDatumClass(attrs, options);
			},
			isModel: function(model) {
				return some(map(keys(meta_datum_default), (subType) => model instanceof meta_datum_default[subType]));
			},
			parse: function(meta_data) {
				return filter(flatten(map(meta_data.by_vocabulary, "meta_data")));
			},
			save: function(opts) {
				return AppCollection.prototype.sync.call(this, "update", this, merge(opts, {
					url: this.parent.url + "/meta_data",
					json: set({}, snakeCase(this.parent.type), serializeForSave(this))
				}));
			}
		});
		serializeForSave = (list) => ({ meta_data: Object.fromEntries(list.map((md) => [md.meta_key.uuid, md.literal_values])) });
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
		function urlFormat(obj) {
			if (typeof obj === "string") obj = urlParse(obj);
			if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
			return obj.format();
		}
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
		exports.format = urlFormat;
	}));
	//#endregion
	//#region app/javascript/models/concerns/resource-with-relations.js
	var import_url, resource_with_relations_default;
	var init_resource_with_relations = __esmMin((() => {
		init_present();
		init_lodash();
		import_url = require_url();
		resource_with_relations_default = {
			props: {
				parent_collections: ["object"],
				sibling_collections: ["object"]
			},
			fetchRelations: function(type, callback) {
				if (!includes([
					"parent",
					"sibling",
					"child"
				], type)) throw new Error("Invalid Relations type!");
				const [subPath, jsonPath] = Array.from({
					parent: ["relations", "relations.parent_collections"],
					sibling: ["relations", "relations.sibling_collections"],
					child: ["", "child_media_resources"]
				}[type]);
				const modelAttr = last(jsonPath.split("."));
				if (present(this.get(jsonPath))) return;
				const sparseSpec = JSON.stringify(set({}, jsonPath, {}));
				const parsedUrl = (0, import_url.parse)(this.url, true);
				delete parsedUrl.search;
				parsedUrl.pathname += "/" + subPath;
				parsedUrl.query["list[page]"] = 1;
				parsedUrl.query["list[per_page]"] = 2;
				parsedUrl.query["___sparse"] = sparseSpec;
				const relationsUrl = (0, import_url.format)(parsedUrl);
				return this._runRequest({
					url: relationsUrl,
					json: true
				}, (err, res, json) => {
					if (err || res.statusCode >= 400) {
						console.error("Error fetching relations!", err || json);
						if (isFunction(callback)) return callback(err || json);
					}
					const data = get(json, jsonPath);
					if (present(data)) this.set(modelAttr, data);
					if (isFunction(callback)) return callback(err, data);
				});
			}
		};
	}));
	//#endregion
	//#region app/javascript/models/concerns/resource-favoritable.js
	var resource_favoritable_default;
	var init_resource_favoritable = __esmMin((() => {
		init_lodash();
		resource_favoritable_default = {
			props: { favored: {
				type: "boolean",
				default: false
			} },
			setFavoredStatus: function(action, callback) {
				if (!includes(["favor", "disfavor"], action.name) || !action.url) throw new Error("ArgumentError!");
				this.set("favored", action === "favor" ? true : false);
				return this._runRequest({
					method: "PATCH",
					url: action.url
				}, (err, res, data) => {
					this.set("favored", data.isFavored);
					return callback(err, res, data);
				});
			}
		};
	}));
	//#endregion
	//#region app/javascript/models/concerns/resource-deletable.js
	var require_resource_deletable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {
			props: { deleted: {
				type: "boolean",
				default: false
			} },
			delete: function(callback) {
				return this._runRequest({
					method: "DELETE",
					url: this.url
				}, function(err, res, data) {
					if (parseInt(res.statusCode) >= 400) alert("Unexpected Error: " + JSON.stringify(res));
					return callback(err, res, data);
				});
			}
		};
	}));
	//#endregion
	//#region app/javascript/models/media-entry.js
	var import_get_media_type, import_resource_deletable, BrowserFile, media_entry_default;
	var init_media_entry = __esmMin((() => {
		init_present();
		init_lodash();
		init_app_config();
		init_app_resource();
		init_person();
		init_i18n_translate();
		import_get_media_type = /* @__PURE__ */ __toESM(require_get_media_type());
		init_meta_data();
		init_resource_with_relations();
		init_resource_favoritable();
		import_resource_deletable = /* @__PURE__ */ __toESM(require_resource_deletable());
		BrowserFile = globalThis.File;
		media_entry_default = AppResource.extend(resource_with_relations_default, resource_favoritable_default, import_resource_deletable.default, {
			type: "MediaEntry",
			urlRoot: "/entries",
			extraProperties: "allow",
			props: {
				title: {
					type: "string",
					required: true
				},
				description: ["string"],
				"published?": {
					type: "boolean",
					default: false,
					required: true
				},
				copyright_notice: ["string"],
				portrayed_object_date: ["string"],
				image_url: {
					type: "string",
					required: false
				},
				privacy_status: {
					type: "string",
					required: true,
					default: "private"
				},
				keywords: ["array"],
				more_data: ["object"],
				media_file: ["object"]
			},
			children: { responsible: person_default },
			collections: { meta_data: meta_data_default },
			session: { uploading: "object" },
			derived: {
				mediaType: {
					deps: ["media_file", "uploading"],
					fn: function() {
						return (0, import_get_media_type.default)(presence(get(this.media_file, "content_type")) || presence(get(this.uploading, "file.type")));
					}
				},
				isBatchEditable: {
					deps: ["editable", "invalid_meta_data"],
					fn: function() {
						return this.editable && !this.invalid_meta_data;
					}
				},
				uploadStatus: {
					deps: ["uploading"],
					fn: function() {
						if (!this.uploading) return;
						return [get(this, "uploading.file.name"), (() => {
							switch (false) {
								case !this.uploading.error: return I18nTranslate("media_entry_media_import_box_upload_status_error");
								case !!this.uploading.progress: return I18nTranslate("media_entry_media_import_box_upload_status_waiting");
								case !(this.uploading.progress < 100): return I18nTranslate("media_entry_media_import_box_upload_status_progress_a") + `${this.uploading.progress === -1 ? "??" : this.uploading.progress.toFixed(2)}` + I18nTranslate("media_entry_media_import_box_upload_status_progress_b");
								default: return I18nTranslate("media_entry_media_import_box_upload_status_processing");
							}
						})()];
					}
				}
			},
			upload: function(callback) {
				if (!(this.uploading.file instanceof BrowserFile)) throw new Error("Model: MediaEntry: #upload called but no file!");
				const formData = new FormData();
				formData.append("media_entry[media_file]", this.uploading.file);
				if (has(this.uploading, "copyMdFrom.id") && has(this.uploading, "copyMdFrom.configuration")) {
					formData.append("media_entry[copy_md_from][id]", this.uploading.copyMdFrom.id);
					formData.append("media_entry[copy_md_from][configuration]", JSON.stringify(this.uploading.copyMdFrom.configuration));
				}
				this.merge("uploading", { started: (/* @__PURE__ */ new Date()).getTime() });
				const handleOnProgress = (param) => {
					let progress;
					if (param == null) param = event;
					const { loaded, total } = param;
					try {
						progress = loaded / total * 100;
					} catch (error) {
						console.error("Could not calculate percentage for loaded/total:", loaded, total, error);
						progress = -1;
					}
					return this.merge("uploading", { progress });
				};
				return this._runRequest({
					method: "POST",
					url: config.relativeUrlRoot + "/entries/",
					body: formData,
					beforeSend: function(xhrObject) {
						return xhrObject.upload.onprogress = handleOnProgress;
					}
				}, (err, res, data) => {
					let error;
					if (err || !res || res.statusCode >= 400) {
						if (err) error = err;
						else if (res) {
							console.error(`Response status code = ${res.statusCode}`);
							error = data || res.statusCode;
						} else error = "Error: no response data";
						console.log("Date", Date());
						this.set("uploading", merge(this.uploading, { error }));
					} else {
						if (data && typeof data === "object") this.set(data);
						this.unset("uploading");
					}
					if (isFunction(callback)) return callback(error || null, res);
				});
			}
		});
	}));
	//#endregion
	//#region app/javascript/spec/media-entry-meta-data-update_spec.js
	var media_entry_meta_data_update_spec_exports = /* @__PURE__ */ __exportAll({ default: () => media_entry_meta_data_update_spec_default });
	function media_entry_meta_data_update_spec_default(data, callback) {
		const entry = new media_entry_default({ url: data.entry });
		return entry.fetch({
			parse: true,
			success: function() {
				find(entry.meta_data.models, { meta_key: { uuid: data.meta_key_id } }).set("literal_values", data.values);
				return entry.meta_data.save({
					error: function(model, res) {
						return callback(JSON.stringify(res, 0, 2));
					},
					success: function(model, msg, res) {
						return callback(null, res);
					}
				});
			}
		});
	}
	var init_media_entry_meta_data_update_spec = __esmMin((() => {
		init_lodash();
		init_media_entry();
	}));
	//#endregion
	//#region app/javascript/integration-testbed.js
	window.tests = { MediaEntryMetaData: (init_media_entry_meta_data_update_spec(), __toCommonJS(media_entry_meta_data_update_spec_exports)).default };
	window.runTest = function(name, data) {
		if (data == null) data = {};
		window.onerror = (err) => handleResult(err);
		try {
			let test;
			if (typeof (test = window.tests[name]) !== "function") throw new Error(`No test named ${name}!`);
			test(data, handleResult);
		} catch (error) {
			handleResult(error);
		}
		return null;
	};
	var handleResult = function(err, res) {
		let errorMessage;
		if (err != null) errorMessage = { error: err.toString() };
		const div = document.createElement("div");
		div.id = "TestBedResult";
		div.textContent = JSON.stringify(errorMessage != null ? errorMessage : res || {});
		document.body.appendChild(div);
		if (err != null) throw err;
	};
	//#endregion
})();
