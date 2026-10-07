//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@videojs/html/dist/default/registration/safe-define.js
/**
* Define a custom element only if not already registered.
*
* `tagName` overrides the element's own, for the rare case of registering one element under a second name — two flavors
* of the same element in one runtime, say, where whichever registers first would otherwise take the name and the other
* would silently lose it. Registering under the override does not change `element.tagName`, so anything reading the
* class still sees its standard name.
*/
function safeDefine(element, tagName = element.tagName) {
	const registry = globalThis.customElements;
	if (!registry || registry.get(tagName)) return;
	registry.define(tagName, element);
}
//#endregion
//#region node_modules/@lit/context/lib/context-request-event.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var s$2 = class extends Event {
	constructor(s, t, e, o) {
		super("context-request", {
			bubbles: !0,
			composed: !0
		}), this.context = s, this.contextTarget = t, this.callback = e, this.subscribe = o ?? !1;
	}
};
//#endregion
//#region node_modules/@lit/context/lib/create-context.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function n(n) {
	return n;
}
//#endregion
//#region node_modules/@lit/context/lib/controllers/context-consumer.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var s$1 = class {
	constructor(t, s, i, h) {
		if (this.subscribe = !1, this.provided = !1, this.value = void 0, this.t = (t, s) => {
			this.unsubscribe && (this.unsubscribe !== s && (this.provided = !1, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = t, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = !0, this.callback && this.callback(t, s)), this.unsubscribe = s;
		}, this.host = t, void 0 !== s.context) {
			const t = s;
			this.context = t.context, this.callback = t.callback, this.subscribe = t.subscribe ?? !1;
		} else this.context = s, this.callback = i, this.subscribe = h ?? !1;
		this.host.addController(this);
	}
	hostConnected() {
		this.dispatchRequest();
	}
	hostDisconnected() {
		this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
	}
	dispatchRequest() {
		this.host.dispatchEvent(new s$2(this.context, this.host, this.t, this.subscribe));
	}
};
//#endregion
//#region node_modules/@lit/context/lib/value-notifier.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var s = class {
	get value() {
		return this.o;
	}
	set value(s) {
		this.setValue(s);
	}
	setValue(s, t = !1) {
		const i = t || !Object.is(s, this.o);
		this.o = s, i && this.updateObservers();
	}
	constructor(s) {
		this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
			for (const [s, { disposer: t }] of this.subscriptions) s(this.o, t);
		}, void 0 !== s && (this.value = s);
	}
	addCallback(s, t, i) {
		if (!i) return void s(this.value);
		this.subscriptions.has(s) || this.subscriptions.set(s, {
			disposer: () => {
				this.subscriptions.delete(s);
			},
			consumerHost: t
		});
		const { disposer: h } = this.subscriptions.get(s);
		s(this.value, h);
	}
	clearCallbacks() {
		this.subscriptions.clear();
	}
};
//#endregion
//#region node_modules/@lit/context/lib/controllers/context-provider.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var e = class extends Event {
	constructor(t, s) {
		super("context-provider", {
			bubbles: !0,
			composed: !0
		}), this.context = t, this.contextTarget = s;
	}
};
var i = class extends s {
	constructor(s, e, i) {
		super(void 0 !== e.context ? e.initialValue : i), this.onContextRequest = (t) => {
			if (t.context !== this.context) return;
			const s = t.contextTarget ?? t.composedPath()[0];
			s !== this.host && (t.stopPropagation(), this.addCallback(t.callback, s, t.subscribe));
		}, this.onProviderRequest = (s) => {
			if (s.context !== this.context) return;
			if ((s.contextTarget ?? s.composedPath()[0]) === this.host) return;
			const e = /* @__PURE__ */ new Set();
			for (const [s, { consumerHost: i }] of this.subscriptions) e.has(s) || (e.add(s), i.dispatchEvent(new s$2(this.context, i, s, !0)));
			s.stopPropagation();
		}, this.host = s, void 0 !== e.context ? this.context = e.context : this.context = e, this.attachListeners(), this.host.addController?.(this);
	}
	attachListeners() {
		this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
	}
	hostConnected() {
		this.host.dispatchEvent(new e(this.context, this.host));
	}
};
//#endregion
//#region node_modules/@lit/context/lib/context-root.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var t = class {
	constructor() {
		this.pendingContextRequests = /* @__PURE__ */ new Map(), this.onContextProvider = (t) => {
			const s = this.pendingContextRequests.get(t.context);
			if (void 0 === s) return;
			this.pendingContextRequests.delete(t.context);
			const { requests: o } = s;
			for (const { elementRef: s, callbackRef: n } of o) {
				const o = s.deref(), c = n.deref();
				void 0 === o || void 0 === c || o.dispatchEvent(new s$2(t.context, o, c, !0));
			}
		}, this.onContextRequest = (e) => {
			if (!0 !== e.subscribe) return;
			const t = e.contextTarget ?? e.composedPath()[0], s = e.callback;
			let o = this.pendingContextRequests.get(e.context);
			void 0 === o && this.pendingContextRequests.set(e.context, o = {
				callbacks: /* @__PURE__ */ new WeakMap(),
				requests: []
			});
			let n = o.callbacks.get(t);
			void 0 === n && o.callbacks.set(t, n = /* @__PURE__ */ new WeakSet()), n.has(s) || (n.add(s), o.requests.push({
				elementRef: new WeakRef(t),
				callbackRef: new WeakRef(s)
			}));
		};
	}
	attach(e) {
		e.addEventListener("context-request", this.onContextRequest), e.addEventListener("context-provider", this.onContextProvider);
	}
	detach(e) {
		e.removeEventListener("context-request", this.onContextRequest), e.removeEventListener("context-provider", this.onContextProvider);
	}
};
/**
* The default player context instance for consuming the player store in controllers.
*
* @public
*/
const playerContext = n(Symbol.for("@videojs/player"));
/** @internal */
const mediaContext = n(Symbol.for("@videojs/media"));
/** @internal */
const containerContext = n(Symbol.for("@videojs/container"));
/** @internal */
const extensionContext = n(Symbol.for("@videojs/extension"));
//#endregion
//#region node_modules/@videojs/utils/dist/predicate/predicate.js
/** @internal */
function isString(value) {
	return typeof value === "string";
}
/** @internal */
function isNumber(value) {
	return typeof value === "number";
}
/** @internal */
function isBoolean(value) {
	return typeof value === "boolean";
}
/** @internal */
function isFunction(value) {
	return typeof value === "function";
}
/** @internal */
function isNull(value) {
	return value === null;
}
/** @internal */
function isUndefined(value) {
	return typeof value === "undefined";
}
/** @internal */
function isNil(value) {
	return value == null;
}
/** @internal */
function isPromise(value) {
	return value instanceof Promise;
}
/**
* Check if a value is an object, excluding null.
*
* @internal
*/
function isObject(value) {
	return value !== null && typeof value === "object";
}
//#endregion
//#region node_modules/@videojs/utils/dist/object/defaults.js
/**
* Creates a new object with default values filled in for undefined properties.
*
* Only keys owned by `defaultValues` are read from `object`; any other key on `object` is ignored. Callers pass live
* DOM elements as `object`, and enumerating those would touch hundreds of inherited accessors such as `offsetWidth` and
* `innerHTML`, forcing style recalculation and layout on every call.
*
* @example
*   ```ts
*   const props = { label: undefined, disabled: true };
*   const defaultProps = { label: '', disabled: false };
*   defaults(props, defaultProps); // { label: '', disabled: true }
*   ```;
*
* @internal
*/
function defaults(object, defaultValues) {
	const result = { ...defaultValues };
	for (const key of Object.keys(defaultValues)) {
		const value = object[key];
		if (!isUndefined(value)) result[key] = value;
	}
	return result;
}
//#endregion
//#region node_modules/@videojs/utils/dist/object/flatten.js
/** @internal */
function flatten(object, options = {}) {
	const { prefix = "" } = options;
	const result = {};
	for (const [key, value] of Object.entries(object)) {
		const fullKey = prefix ? `${prefix}.${key}` : key;
		if (value !== null && typeof value === "object" && !Array.isArray(value)) Object.assign(result, flatten(value, { prefix: fullKey }));
		else result[fullKey] = value;
	}
	return result;
}
//#endregion
//#region node_modules/@videojs/utils/dist/object/pick.js
/**
* Creates a new object with only the specified keys.
*
* @example
*   const obj = { a: 1, b: 2, c: 3 };
*   pick(obj, ['a', 'c']); // { a: 1, c: 3 }
*
* @internal
*/
function pick(obj, keys) {
	const result = {};
	for (const key of keys) if (Object.hasOwn(obj, key)) result[key] = obj[key];
	return result;
}
//#endregion
//#region node_modules/@videojs/utils/dist/object/shallow-equal.js
const hasOwn = Object.prototype.hasOwnProperty;
/** Shallowly compares values, including own string and symbol keys. */
function shallowEqual(a, b) {
	if (Object.is(a, b)) return true;
	if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return false;
	const keysA = Reflect.ownKeys(a);
	const keysB = Reflect.ownKeys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) if (!hasOwn.call(b, key) || !Object.is(a[key], b[key])) return false;
	return true;
}
//#endregion
//#region node_modules/@videojs/utils/dist/function/noop.js
/** @internal */
function noop(..._args) {}
//#endregion
//#region node_modules/@videojs/utils/dist/function/throttle.js
/**
* Throttle: limits `fn` to at most once per `ms` window.
*
* - Default (no options): trailing-edge only — the first call schedules a timer; subsequent calls within the window
*   update the arguments. The function fires once per window with the latest arguments.
* - `{ leading: true }`: leading + trailing — the first call invokes immediately and opens a cooldown window. Subsequent
*   calls within the window are coalesced to a single trailing-edge invocation.
*
* @internal
*/
function throttle(fn, ms, options) {
	const leading = options?.leading ?? false;
	let timerId = null;
	let latestArgs;
	let hasPending = false;
	function startCooldown() {
		timerId = setTimeout(() => {
			timerId = null;
			if (hasPending) {
				hasPending = false;
				fn(...latestArgs);
				startCooldown();
			}
		}, ms);
	}
	const throttled = (...args) => {
		latestArgs = args;
		if (leading) if (timerId === null) {
			fn(...latestArgs);
			startCooldown();
		} else hasPending = true;
		else {
			if (timerId !== null) return;
			timerId = setTimeout(() => {
				timerId = null;
				fn(...latestArgs);
			}, ms);
		}
	};
	throttled.cancel = () => {
		if (timerId !== null) {
			clearTimeout(timerId);
			timerId = null;
		}
		hasPending = false;
	};
	return throttled;
}
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/html/controllers/snapshot-controller.js
/**
* Subscribe to a `State<T>` container with optional selector.
*
* Without selector: returns full state, re-renders on any state change. With selector: returns selected slice,
* re-renders only when the slice changes (shallowEqual).
*
* @example
*   ```ts
*   #state = new SnapshotController(this, sliderState, (s) => s.value);
*   ```;
*/
var SnapshotController = class {
	#host;
	#selector;
	#state;
	#cached;
	#unsubscribe = noop;
	constructor(host, state, selector) {
		this.#host = host;
		this.#state = state;
		this.#selector = selector;
		host.addController(this);
	}
	get value() {
		if (!this.#selector) return this.#state.current;
		this.#cached ??= this.#selector(this.#state.current);
		return this.#cached;
	}
	/** Switch to tracking a different state container. */
	track(state) {
		this.#state = state;
		this.#subscribe();
	}
	hostConnected() {
		this.#subscribe();
	}
	hostDisconnected() {
		this.#unsubscribe();
		this.#unsubscribe = noop;
		this.#cached = void 0;
	}
	#subscribe() {
		this.#unsubscribe();
		if (!this.#selector) {
			this.#unsubscribe = this.#state.subscribe(() => this.#host.requestUpdate());
			return;
		}
		const selector = this.#selector;
		this.#cached = selector(this.#state.current);
		this.#unsubscribe = this.#state.subscribe(() => {
			const next = selector(this.#state.current);
			if (!shallowEqual(this.#cached, next)) {
				this.#cached = next;
				this.#host.requestUpdate();
			}
		});
	}
};
//#endregion
//#region node_modules/@videojs/utils/dist/events/abort.js
/**
* Compose multiple abort signals into one that aborts when **any** input fires. Uses native `AbortSignal.any` when
* available, otherwise falls back to a manual `AbortController` composition for Chromium ≤115 and similar runtimes.
*
* @internal
*/
function anyAbortSignal(signals) {
	if ("any" in AbortSignal) return AbortSignal.any(signals);
	const controller = new AbortController();
	for (const signal of signals) {
		if (signal.aborted) {
			controller.abort(signal.reason);
			return controller.signal;
		}
		signal.addEventListener("abort", () => controller.abort(signal.reason), { signal: controller.signal });
	}
	return controller.signal;
}
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/core/abort-controller-registry.js
/** @internal */
var AbortControllerRegistry$1 = class {
	#base;
	#keys = /* @__PURE__ */ new Map();
	/** The attach-scoped signal. Aborts on detach or reattach. */
	get base() {
		return (this.#base ??= new AbortController()).signal;
	}
	/** Clears all keyed signals, leaving base intact. */
	clear() {
		for (const controller of this.#keys.values()) controller.abort();
		this.#keys.clear();
	}
	/** Resets base and clears all keyed signals. */
	reset() {
		this.clear();
		this.#base?.abort();
		this.#base = void 0;
	}
	/** Creates a new signal for the key, superseding any previous signal. */
	supersede(key) {
		this.#keys.get(key)?.abort();
		const controller = new AbortController();
		this.#keys.set(key, controller);
		return anyAbortSignal([this.base, controller.signal]);
	}
};
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/core/errors.js
/** @internal */
var StoreError$1 = class extends Error {
	code;
	cause;
	constructor(code, options) {
		super(options?.message ?? code);
		this.name = "StoreError";
		this.code = code;
		this.cause = options?.cause;
	}
};
/** @internal */
function throwNoTargetError$1() {
	throw new StoreError$1("NO_TARGET");
}
/** @internal */
function throwDestroyedError() {
	throw new StoreError$1("DESTROYED");
}
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/core/state.js
let isFlushScheduled$1 = false;
function scheduleFlush$1() {
	if (isFlushScheduled$1) return;
	isFlushScheduled$1 = true;
	queueMicrotask(flush$2);
}
const pendingContainers$1 = /* @__PURE__ */ new Set();
/** @internal */
function flush$2() {
	isFlushScheduled$1 = false;
	for (const container of pendingContainers$1) container.flush();
	pendingContainers$1.clear();
}
const hasOwnProp$2 = Object.prototype.hasOwnProperty;
var StateContainer$1 = class {
	#current;
	#listeners = /* @__PURE__ */ new Set();
	#pending = false;
	constructor(initial) {
		this.#current = Object.freeze({ ...initial });
	}
	get current() {
		return this.#current;
	}
	patch(partial) {
		const next = { ...this.#current };
		let changed = false;
		for (const key of Reflect.ownKeys(partial)) {
			if (!hasOwnProp$2.call(partial, key)) continue;
			const value = partial[key];
			if (!Object.is(this.#current[key], value)) {
				next[key] = value;
				changed = true;
			}
		}
		if (changed) {
			this.#current = Object.freeze(next);
			this.#markPending();
		}
	}
	replace(next) {
		if (shallowEqual(this.#current, next)) return;
		this.#current = Object.freeze({ ...next });
		this.#markPending();
	}
	subscribe(callback, options) {
		const signal = options?.signal;
		if (signal?.aborted) return noop;
		this.#listeners.add(callback);
		if (!signal) return () => this.#listeners.delete(callback);
		const onAbort = () => this.#listeners.delete(callback);
		signal.addEventListener("abort", onAbort, { once: true });
		return () => {
			signal.removeEventListener("abort", onAbort);
			this.#listeners.delete(callback);
		};
	}
	flush() {
		if (!this.#pending) return;
		this.#pending = false;
		for (const fn of this.#listeners) fn();
	}
	#markPending() {
		this.#pending = true;
		pendingContainers$1.add(this);
		scheduleFlush$1();
	}
};
/** @internal */
function createState$1(initial) {
	return new StateContainer$1(initial);
}
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/core/store.js
const STORE_SYMBOL = Symbol.for("@videojs/store");
const hasOwnProp$1 = Object.prototype.hasOwnProperty;
/** @internal */
function createStore() {
	return ((slice, options = {}) => {
		let target = null;
		let destroyed = false;
		const setupAbort = new AbortController();
		const signals = new AbortControllerRegistry$1();
		const actions = /* @__PURE__ */ new WeakMap();
		const reportedErrors = /* @__PURE__ */ new WeakSet();
		let sourceState;
		let state;
		function validate() {
			if (destroyed) throwDestroyedError();
			if (!target) throwNoTargetError$1();
		}
		const initialSourceState = freezeCopy(slice.state({
			target: () => {
				validate();
				return target;
			},
			signals,
			get: () => sourceState,
			set: (partial) => setSource(partial)
		}));
		sourceState = initialSourceState;
		const initialDerivedState = derive(sourceState);
		state = createState$1(publish(sourceState, initialDerivedState));
		const store = {
			[STORE_SYMBOL]: true,
			get $state() {
				return state;
			},
			get target() {
				return target;
			},
			get destroyed() {
				return destroyed;
			},
			get state() {
				return state.current;
			},
			attach,
			destroy,
			subscribe
		};
		for (const key of Object.keys(state.current)) Object.defineProperty(store, key, {
			get: () => state.current[key],
			enumerable: true
		});
		for (const key of Object.getOwnPropertySymbols(sourceState)) {
			if (typeof sourceState[key] !== "function") continue;
			Object.defineProperty(store, key, { get: () => sourceState[key] });
		}
		try {
			options.onSetup?.({
				store,
				signal: setupAbort.signal
			});
		} catch (error) {
			reportError(error);
		}
		return store;
		function derive(source) {
			const result = {};
			const definitions = slice.derived;
			if (!definitions) return result;
			const ctx = { get: () => source };
			for (const key of Object.keys(definitions)) result[key] = definitions[key](ctx);
			return result;
		}
		function publish(source, derived) {
			const result = {};
			for (const key of Object.keys(source)) result[key] = source[key];
			Object.assign(result, derived);
			for (const key of Object.keys(result)) {
				const value = result[key];
				if (isFunction(value)) result[key] = wrapAction(value);
			}
			return result;
		}
		function wrapAction(action) {
			const cached = actions.get(action);
			if (cached) return cached;
			const wrapped = function(...args) {
				try {
					const result = action.apply(this, args);
					if (options.onError && isPromise(result)) result.catch(reportError);
					return result;
				} catch (error) {
					if (options.onError) reportError(error);
					throw error;
				}
			};
			actions.set(action, wrapped);
			return wrapped;
		}
		function setSource(partial) {
			const patched = patchSource(sourceState, partial);
			if (!patched) return;
			const nextDerived = derive(patched.next);
			sourceState = patched.next;
			state.replace(publish(sourceState, nextDerived));
		}
		function attach(newTarget) {
			if (destroyed) throwDestroyedError();
			signals.reset();
			target = newTarget;
			const attachContext = {
				target: newTarget,
				signal: signals.base,
				get: () => sourceState,
				set: (partial) => {
					try {
						setSource(partial);
					} catch (error) {
						reportError(error);
					}
				},
				reportError,
				store: {
					get state() {
						return state.current;
					},
					subscribe
				}
			};
			try {
				slice.attach?.(attachContext);
			} catch (error) {
				reportError(error);
			}
			try {
				options.onAttach?.({
					store,
					target: newTarget,
					signal: signals.base
				});
			} catch (error) {
				reportError(error);
			}
			return detach;
		}
		function detach() {
			if (isNull(target)) return;
			signals.reset();
			target = null;
			const resetState = { ...initialSourceState };
			for (const key of slice.preserve ?? []) resetState[key] = sourceState[key];
			setSource(resetState);
		}
		function destroy() {
			if (destroyed) return;
			destroyed = true;
			detach();
			setupAbort.abort();
		}
		function subscribe(callback, options) {
			return state.subscribe(callback, options);
		}
		function reportError(error) {
			if (isObject(error)) {
				if (reportedErrors.has(error)) return;
				reportedErrors.add(error);
			}
			if (options.onError) options.onError({
				store,
				error
			});
			else console.error("[vjs-store]", error);
		}
	});
}
function freezeCopy(value) {
	return Object.freeze({ ...value });
}
function patchSource(current, partial) {
	const next = { ...current };
	let changed = false;
	for (const key of Reflect.ownKeys(partial)) {
		if (!hasOwnProp$1.call(partial, key)) continue;
		const value = partial[key];
		if (Object.is(current[key], value)) continue;
		next[key] = value;
		changed = true;
	}
	return changed ? { next: Object.freeze(next) } : null;
}
/** @internal */
function isStore(value) {
	return isObject(value) && STORE_SYMBOL in value;
}
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/html/store-accessor.js
/**
* Resolves a store from either a direct instance or context.
*
* When given a direct store, provides immediate access. When given a context, sets up a ContextConsumer to receive the
* store.
*
* @example
*   Direct store
*   ```ts
*   const accessor = new StoreAccessor(host, store, (s) => console.log('available', s));
*   accessor.value; // Store (immediately available)
*   ```
*
* @example
*   Context source
*   ```ts
*   const accessor = new StoreAccessor(host, context, (s) => console.log('available', s));
*   accessor.value; // null until context provides store
*   ```
*
* @internal
*/
var StoreAccessor = class {
	#onAvailable;
	#consumer;
	#directStore;
	constructor(host, source, onAvailable) {
		this.#onAvailable = onAvailable ?? noop;
		if (isStore(source)) {
			this.#directStore = source;
			this.#consumer = null;
		} else {
			this.#directStore = null;
			this.#consumer = new s$1(host, {
				context: source,
				callback: (store) => this.#onAvailable(store),
				subscribe: false
			});
		}
		host.addController(this);
	}
	/** Returns the store, or null if not yet available from context. */
	get value() {
		if (this.#consumer) return this.#consumer.value ?? null;
		return this.#directStore;
	}
	hostConnected() {
		if (this.#directStore) this.#onAvailable(this.#directStore);
	}
};
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/html/controllers/store-controller.js
/**
* Access store state and actions.
*
* Without selector: Returns the store, does NOT subscribe to changes. With selector: Returns selected state, triggers
* update when selected state changes (shallowEqual).
*
* @example
*   ```ts
*   // Store access (no subscription) - access actions
*   class Controls extends LitElement {
*   #store = new StoreController(this, storeSource);
*
*   handleClick() {
*   this.#store.value.setVolume(0.5);
*   }
*   }
*
*   // Selector-based subscription - re-renders when playback changes
*   class PlayButton extends LitElement {
*   #playback = new StoreController(this, storeSource, selectPlayback);
*
*   render() {
*   const playback = this.#playback.value;
*   if (!playback) return nothing;
*   return html`<button @click=${playback.toggle}>
*   ${playback.paused ? 'Play' : 'Pause'}
*   </button>`;
*   }
*   }
*   ```
*/
var StoreController = class {
	#host;
	#selector;
	#accessor;
	#snapshot = null;
	constructor(host, source, selector) {
		this.#host = host;
		this.#selector = selector;
		this.#accessor = new StoreAccessor(host, source, (store) => this.#connect(store));
		host.addController(this);
	}
	get value() {
		const store = this.#accessor.value;
		if (isNull(store)) throw new Error("Store not available");
		if (isUndefined(this.#selector)) return store;
		return this.#snapshot.value;
	}
	hostConnected() {}
	#connect(store) {
		if (isUndefined(this.#selector)) return;
		if (!this.#snapshot) this.#snapshot = new SnapshotController(this.#host, store.$state, this.#selector);
		else this.#snapshot.track(store.$state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/player/controller.js
/**
* Reactive controller for accessing player store state.
*
* Without selector: Returns the store, does NOT subscribe to changes. With selector: Returns selected state, subscribes
* with shallowEqual comparison.
*
* @example
*   ```ts
*   // Store access (no subscription)
*   class Controls extends UIElement {
*     #player = new PlayerController(this, playerContext);
*
*     handleClick() {
*       this.#player.value.setVolume(0.5);
*     }
*   }
*
*   // Selector-based subscription
*   class PlayButton extends UIElement {
*     #playback = new PlayerController(this, playerContext, selectPlayback);
*   }
*   ```;
*/
var PlayerController = class {
	#host;
	#selector;
	#consumer;
	#store = null;
	constructor(host, context, selector) {
		this.#host = host;
		this.#selector = selector;
		this.#consumer = new s$1(host, {
			context,
			callback: (ctx) => this.#connect(ctx),
			subscribe: true
		});
		host.addController(this);
	}
	get value() {
		const store = this.#consumer.value;
		if (!store) return void 0;
		if (!this.#selector) return store;
		return this.#store?.value;
	}
	get displayName() {
		return this.#selector?.displayName;
	}
	hostConnected() {
		const store = this.#consumer.value;
		if (store) this.#connect(store);
	}
	hostDisconnected() {
		this.#store = null;
	}
	#connect(store) {
		if (!this.#store && this.#selector) this.#store = new StoreController(this.#host, store, this.#selector);
	}
};
function createPlayerController(context) {
	class ConfiguredPlayerController extends PlayerController {
		constructor(host, selector) {
			if (selector) super(host, context, selector);
			else super(host, context);
		}
	}
	return ConfiguredPlayerController;
}
//#endregion
//#region node_modules/@videojs/element/dist/default/destroy-mixin.js
/**
* Mixin that adds a deferred destruction lifecycle to a `ReactiveElement`.
*
* On disconnect, schedules destruction after two animation frames. If the element reconnects before the frames fire
* (e.g. DOM shuffling, framework reconciliation), the `isConnected` check prevents destruction.
*
* The `keep-alive` attribute prevents automatic destruction entirely — call `destroy()` manually when done.
*
* Subclasses override `destroyCallback()` (calling `super.destroyCallback()`) to release heavy resources like stores or
* imperative APIs.
*
* Mirrors `addController`/`removeController` to track controllers (needed because `ReactiveElement.#controllers` is
* hard-private), calls `hostDestroyed()` on all tracked controllers in `destroyCallback`, and guards `performUpdate()`
* so no updates run after destruction.
*/
function DestroyMixin(SuperClass) {
	class DestroyableElement extends SuperClass {
		#destroyed = false;
		#trackedControllers = /* @__PURE__ */ new Set();
		get destroyed() {
			return this.#destroyed;
		}
		destroy() {
			if (this.#destroyed) return;
			this.#destroyed = true;
			this.destroyCallback();
		}
		destroyCallback() {
			for (const c of this.#trackedControllers) c.hostDestroyed?.();
		}
		addController(controller) {
			super.addController(controller);
			this.#trackedControllers.add(controller);
		}
		removeController(controller) {
			super.removeController(controller);
			this.#trackedControllers.delete(controller);
		}
		connectedCallback() {
			if (this.#destroyed) return;
			super.connectedCallback();
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			if (!this.#destroyed && !this.hasAttribute("keep-alive")) requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					if (!this.isConnected) this.destroy();
				});
			});
		}
		performUpdate() {
			if (this.#destroyed) return;
			super.performUpdate();
		}
	}
	return DestroyableElement;
}
//#endregion
//#region node_modules/@videojs/element/dist/default/reactive-element.js
const cache$1 = /* @__PURE__ */ new WeakMap();
const propertyKeys = /* @__PURE__ */ new Map();
const HTMLElementBase$1 = globalThis.HTMLElement ?? class {};
/**
* Lightweight reactive custom element base class.
*
* Drop-in subset of Lit's `ReactiveElement` — supports `static properties`, attribute-to-property conversion, batched
* async updates, and reactive controllers. No Shadow DOM, no `static styles`, no decorators.
*
* Updates are batched using the same Promise-based scheduling as Lit: property changes enqueue a microtask, and the
* update is gated behind `connectedCallback` so the first update only runs once the element is in the document.
*
* Subclasses that extend another element with properties must spread them:
*
* @example
*   ```ts
*   class MyButton extends ReactiveElement {
*     static override properties = {
*       label: { type: String },
*       disabled: { type: Boolean },
*     };
*
*     label = 'Click me';
*     disabled = false;
*
*     protected override update(changed: PropertyValues): void {
*       super.update(changed);
*       this.textContent = this.label;
*     }
*   }
*
*   // Inheritance — spread parent properties
*   class FancyButton extends MyButton {
*     static override properties = {
*       ...MyButton.properties,
*       variant: { type: String },
*     };
*
*     variant = 'primary';
*   }
*   ```;
*/
var ReactiveElement = class extends HTMLElementBase$1 {
	static {
		this.properties = {};
	}
	/** Returns a list of attributes corresponding to the registered properties. */
	static get observedAttributes() {
		return [...resolve(this).attrToProp.keys()];
	}
	#controllers;
	#changedProperties;
	#instanceProperties;
	#propertiesUpgraded;
	/**
	* Promise that gates the first update until `connectedCallback`. Also used to serialize updates — each
	* `#enqueueUpdate` awaits the previous `#updatePromise`, so property changes are batched and updates never overlap.
	* Matches Lit's scheduling model.
	*/
	#updatePromise;
	constructor() {
		super();
		this.#controllers = /* @__PURE__ */ new Set();
		this.#changedProperties = /* @__PURE__ */ new Map();
		this.#propertiesUpgraded = false;
		this.isUpdatePending = false;
		this.hasUpdated = false;
		this.#updatePromise = new Promise((res) => this.enableUpdating = res);
		const { props } = resolve(this.constructor);
		for (const name of props.keys()) if (Object.hasOwn(this, name)) {
			(this.#instanceProperties ??= /* @__PURE__ */ new Map()).set(name, this[name]);
			delete this[name];
		}
		this.requestUpdate();
	}
	/**
	* Note, this method should be considered final and not overridden. It is overridden on the element instance with a
	* function that triggers the first update.
	*/
	enableUpdating(_requestedUpdate) {}
	/**
	* Registers a {@linkcode ReactiveController} to participate in the element's reactive update cycle. The element
	* automatically calls into any registered controllers during its lifecycle callbacks.
	*
	* If the element is connected when `addController()` is called, the controller's `hostConnected()` callback will be
	* immediately called.
	*/
	addController(controller) {
		this.#controllers.add(controller);
		if (this.isConnected) controller.hostConnected?.();
	}
	/** Removes a {@linkcode ReactiveController} from the element. */
	removeController(controller) {
		this.#controllers.delete(controller);
	}
	/** On first connection, enables updating and notifies controllers. */
	connectedCallback() {
		this.#upgradeProperties();
		this.enableUpdating(true);
		for (const c of this.#controllers) c.hostConnected?.();
	}
	disconnectedCallback() {
		for (const c of this.#controllers) c.hostDisconnected?.();
	}
	/**
	* Synchronizes property values when attributes change.
	*
	* Specifically, when an attribute is set, the corresponding property is set. You should rarely need to implement this
	* callback. If this method is overridden, `super.attributeChangedCallback(name, _old, value)` must be called.
	*/
	attributeChangedCallback(attr, oldValue, newValue) {
		if (oldValue === newValue) return;
		const { props, attrToProp } = resolve(this.constructor);
		const propName = attrToProp.get(attr);
		if (!propName) return;
		const decl = props.get(propName);
		if (!decl) return;
		let value = newValue;
		if (decl.type === Boolean) value = newValue !== null;
		else if (decl.type === Number) value = newValue === null ? null : Number(newValue);
		this[propName] = value;
	}
	/**
	* Requests an update which is processed asynchronously. This should be called when an element should update based on
	* some state not triggered by setting a reactive property. In this case, pass no arguments. It should also be called
	* when manually implementing a property setter. In this case, pass the property `name` and `oldValue` to ensure that
	* any configured property options are honored.
	*/
	requestUpdate(name, oldValue) {
		if (name !== void 0 && !this.#changedProperties.has(name)) this.#changedProperties.set(name, oldValue);
		if (this.isUpdatePending) return;
		this.#updatePromise = this.#enqueueUpdate();
	}
	/**
	* Sets up the element to asynchronously update. Awaits the previous `#updatePromise` which both serializes updates
	* and (on first update) waits for `connectedCallback` to resolve the gate.
	*/
	async #enqueueUpdate() {
		this.isUpdatePending = true;
		try {
			await this.#updatePromise;
		} catch (e) {
			Promise.reject(e);
		}
		const result = this.scheduleUpdate();
		if (result != null) await result;
		return !this.isUpdatePending;
	}
	/**
	* Schedules an element update. You can override this method to change the timing of updates by returning a Promise.
	* The update will await the returned Promise, and you should resolve the Promise to allow the update to proceed. If
	* this method is overridden, `super.scheduleUpdate()` must be called.
	*
	* For instance, to schedule updates to occur just before the next frame:
	*
	* ```ts
	* override protected async scheduleUpdate(): Promise<unknown> {
	*   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
	*   super.scheduleUpdate();
	* }
	* ```
	*/
	scheduleUpdate() {
		this.performUpdate();
	}
	/**
	* Performs an element update. Note, if an exception is thrown during the update, `firstUpdated` and `updated` will
	* not be called.
	*
	* Call `performUpdate()` to immediately process a pending update. This should generally not be needed, but it can be
	* done in rare cases when you need to update synchronously.
	*/
	performUpdate() {
		if (!this.isUpdatePending) return;
		const changed = this.#changedProperties;
		this.willUpdate(changed);
		for (const c of this.#controllers) c.hostUpdate?.();
		this.update(changed);
		this.#changedProperties = /* @__PURE__ */ new Map();
		this.isUpdatePending = false;
		for (const c of this.#controllers) c.hostUpdated?.();
		if (!this.hasUpdated) {
			this.hasUpdated = true;
			this.firstUpdated(changed);
		}
		this.updated(changed);
	}
	/**
	* Invoked before `update()` to compute values needed during the update.
	*
	* Implement `willUpdate` to compute property values that depend on other properties and are used in the rest of the
	* update process.
	*
	* ```ts
	* willUpdate(changed) {
	*   if (changed.has('firstName') || changed.has('lastName')) {
	*     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
	*   }
	* }
	* ```
	*/
	willUpdate(_changed) {}
	/**
	* Updates the element. Override it to render and keep the element's DOM up to date; properties are not reflected to
	* attributes. Setting properties inside this method will _not_ trigger another update.
	*/
	update(_changed) {}
	/**
	* Invoked when the element is first updated. Implement to perform one time work on the element after update.
	*
	* Setting properties inside this method will trigger the element to update again after this update cycle completes.
	*/
	firstUpdated(_changed) {}
	/**
	* Invoked whenever the element is updated. Implement to perform post-updating tasks via DOM APIs, for example,
	* focusing an element.
	*
	* Setting properties inside this method will trigger the element to update again after this update cycle completes.
	*/
	updated(_changed) {}
	/**
	* Returns a Promise that resolves when the element has completed updating. The Promise value is a boolean that is
	* `true` if the element completed the update without triggering another update. The Promise result is `false` if a
	* property was set inside `updated()`.
	*/
	get updateComplete() {
		return this.#updatePromise;
	}
	/**
	* Replays properties set before registration through their reactive accessors. This runs after subclass fields have
	* initialized but before connection lifecycle consumers, so user values win over defaults and are immediately
	* usable.
	*/
	#upgradeProperties() {
		if (this.#propertiesUpgraded) return;
		this.#propertiesUpgraded = true;
		const { props } = resolve(this.constructor);
		for (const name of props.keys()) {
			const hasSavedValue = this.#instanceProperties?.has(name) ?? false;
			const hasOwnValue = Object.hasOwn(this, name);
			if (!hasSavedValue && !hasOwnValue) continue;
			const value = hasSavedValue ? this.#instanceProperties?.get(name) : Reflect.get(this, name);
			if (hasOwnValue) Reflect.deleteProperty(this, name);
			Reflect.set(this, name, value);
		}
		this.#instanceProperties = void 0;
	}
};
/**
* Resolve `ctor.properties` into lookup Maps and install reactive accessors on the prototype. Runs once per class,
* result is cached.
*
* Subclasses that need parent properties must spread them: `static override properties = { ...Parent.properties, ...
* }`.
*/
function resolve(ctor) {
	const existing = cache$1.get(ctor);
	if (existing) return existing;
	const props = /* @__PURE__ */ new Map();
	const attrToProp = /* @__PURE__ */ new Map();
	for (const [name, decl] of Object.entries(ctor.properties)) {
		props.set(name, decl);
		attrToProp.set(decl.attribute ?? name, name);
		if (!Object.getOwnPropertyDescriptor(ctor.prototype, name)?.get) {
			let key = propertyKeys.get(name);
			if (!key) {
				key = Symbol(name);
				propertyKeys.set(name, key);
			}
			Object.defineProperty(ctor.prototype, name, {
				get() {
					return this[key];
				},
				set(value) {
					const old = this[key];
					this[key] = value;
					if (!Object.is(old, value)) this.requestUpdate(name, old);
				},
				configurable: true,
				enumerable: true
			});
		}
	}
	const meta = {
		props,
		attrToProp
	};
	cache$1.set(ctor, meta);
	return meta;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/ui-element.js
/** Base class for interactive media UI elements. */
var UIElement = class extends DestroyMixin(ReactiveElement) {};
//#endregion
//#region node_modules/@videojs/media/dist/default/core/constants.js
/**
* A frozen, empty `TimeRanges`-like value for hosts with no ranges.
*
* @internal
*/
const EMPTY_TIME_RANGES = Object.freeze({
	length: 0,
	start: () => 0,
	end: () => 0
});
/**
* A frozen, empty `TextTrackList`-like value for hosts with no text tracks.
*
* @internal
*/
const EMPTY_TEXT_TRACKS = Object.assign(new EventTarget(), {
	length: 0,
	*[Symbol.iterator]() {},
	getTrackById: () => null
});
/** @internal */
const EMPTY_REMOTE = new EventTarget();
//#endregion
//#region node_modules/@videojs/media/dist/default/core/media-error.js
var MediaError = class MediaError extends Error {
	static MEDIA_ERR_ABORTED = 1;
	static MEDIA_ERR_NETWORK = 2;
	static MEDIA_ERR_DECODE = 3;
	static MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
	static MEDIA_ERR_ENCRYPTED = 5;
	static MEDIA_ERR_CUSTOM = 100;
	static defaultMessages = {
		1: "You stopped media playback before it finished.",
		2: "This media could not be loaded due to a network or server issue.",
		3: "This media could not be played. It may be corrupted, or your browser may not support its format.",
		4: "This media could not be loaded. It may be unavailable, or your browser may not support its format.",
		5: "This media could not be played because it could not be decrypted."
	};
	name;
	code;
	context;
	fatal;
	data;
	constructor(message, code = MediaError.MEDIA_ERR_CUSTOM, fatal, context) {
		super(message);
		this.name = "MediaError";
		this.code = code;
		this.context = context;
		this.fatal = fatal ?? (code >= MediaError.MEDIA_ERR_NETWORK && code <= MediaError.MEDIA_ERR_ENCRYPTED);
		if (!this.message) this.message = MediaError.defaultMessages[this.code] ?? "";
	}
};
//#endregion
//#region node_modules/@videojs/media/dist/default/core/registered-media.js
/**
* Key a player media facade answers with the media the player registered, which the facade wraps. `Symbol.for` so a
* page carrying two copies of the packages (CDN plus npm, duplicate installs) still agrees on it, and so it can never
* collide with a media member.
*
* @internal
*/
const REGISTERED_MEDIA = Symbol.for("@videojs/media/registered");
/**
* The media the player registered: the media behind a player facade, or `media` itself when it isn't one. Identity
* checks and native-element lookups must go through this: a facade passes `instanceof` for the element it wraps but is
* never identical to it.
*
* @internal
*/
function getRegisteredMedia(media) {
	return media?.[REGISTERED_MEDIA] ?? media;
}
//#endregion
//#region node_modules/@videojs/media/dist/default/core/types.js
/** @internal */
const MediaReadyState = {
	HAVE_NOTHING: 0,
	HAVE_METADATA: 1,
	HAVE_CURRENT_DATA: 2,
	HAVE_FUTURE_DATA: 3,
	HAVE_ENOUGH_DATA: 4
};
/**
* Named values of {@link MediaStreamType}.
*
* @internal
*/
const MediaStreamTypes = {
	ON_DEMAND: "on-demand",
	LIVE: "live",
	UNKNOWN: "unknown"
};
//#endregion
//#region node_modules/@videojs/media/dist/default/core/predicate.js
function hasMetadata(media) {
	return media.readyState >= MediaReadyState.HAVE_METADATA;
}
/** @internal */
function getTimeRangeEnd(media) {
	if (Number.isFinite(media.duration) && media.duration > 0) return media.duration;
	const end = media.seekable.at(-1)?.[1];
	if (end === void 0 || !Number.isFinite(end) || end <= 0) return 0;
	return end;
}
/** @internal */
function hasTimeRange(media) {
	return getTimeRangeEnd(media) > 0;
}
function isMediaPauseCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.paused) && !isUndefined(media.ended) && isFunction(media.pause);
}
function isMediaSeekCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.currentTime) && !isUndefined(media.duration) && !isUndefined(media.seeking);
}
function isMediaSourceCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.src) && !isUndefined(media.currentSrc) && !isUndefined(media.readyState) && isFunction(media.load);
}
function isMediaVolumeCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.volume) && !isUndefined(media.muted);
}
/**
* Whether the media reports a mute at all, which is a narrower question than `isMediaVolumeCapable`: an embed can take
* a mute command while offering no way to set a level.
*
* @internal
*/
function isMediaMutedCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.muted);
}
function isMediaPlaybackRateCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.playbackRate);
}
/**
* Only `requestPictureInPicture` is required. A native video element carries it but leaves exiting to `document`, so
* demanding the pair would rule out the one media that most certainly can.
*
* @internal
*/
function isMediaPictureInPictureCapable(value) {
	if (!isObject(value)) return false;
	return isFunction(value.requestPictureInPicture);
}
function isMediaBufferCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.buffered) && media.buffered !== EMPTY_TIME_RANGES && !isUndefined(media.seekable) && media.seekable !== EMPTY_TIME_RANGES;
}
function isMediaErrorCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.error);
}
function isMediaTextTrackCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.textTracks) && media.textTracks !== EMPTY_TEXT_TRACKS;
}
function isMediaVideoRenditionCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.videoRenditions);
}
function isMediaAudioTrackCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.audioTracks);
}
function isMediaVideoDimensionsCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.videoWidth) && !isUndefined(media.videoHeight);
}
function isMediaRemotePlaybackCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return isObject(media.remote) && media.remote !== EMPTY_REMOTE;
}
function isMediaStreamTypeCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.streamType);
}
/** @internal */
function isMediaContentDataCapable(value) {
	if (!isObject(value)) return false;
	return !isUndefined(value.contentData);
}
function isMediaLiveCapable(value) {
	if (!isObject(value)) return false;
	const media = value;
	return !isUndefined(media.liveEdgeStart) && !isUndefined(media.targetLiveWindow);
}
/** @internal */
function isQuerySelectorAllCapable(value) {
	return isObject(value) && "querySelectorAll" in value && isFunction(value.querySelectorAll);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/extensions/media.js
/**
* Wrap `media` so reads, writes, and method calls consult each source's `mediaOverride` first (the first source with a
* defined value for the member wins) and otherwise reach the media itself. The result still satisfies `instanceof`,
* `in`, and Element methods for the underlying media, and answers `REGISTERED_MEDIA` with it so `getRegisteredMedia()`
* can see through for identity checks.
*
* `sources` is called on every access, so a live collection can grow and shrink without rebuilding the facade.
*/
function createMediaFacade(media, sources) {
	return new Proxy(media, {
		get(target, prop) {
			if (prop === REGISTERED_MEDIA) return target;
			const owner = findOverride(sources, prop) ?? target;
			const value = owner[prop];
			return isFunction(value) && prop !== "constructor" ? value.bind(owner) : value;
		},
		set(target, prop, value) {
			const owner = findOverride(sources, prop) ?? target;
			return Reflect.set(owner, prop, value);
		},
		has(target, prop) {
			return !isNil(findOverride(sources, prop)) || prop in target;
		}
	});
}
/**
* The first source whose override defines `prop`, or `null` when the media owns it. Members inherited from
* `Object.prototype` (`constructor`, `toString`, …) are never overridable: every override object has them, so they
* would otherwise shadow the media's own whenever any extension is installed.
*/
function findOverride(sources, prop) {
	if (Object.hasOwn(Object.prototype, prop)) return null;
	for (const { mediaOverride } of sources()) if (!isNil(mediaOverride) && !isUndefined(mediaOverride[prop])) return mediaOverride;
	return null;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/extensions/coordinator.js
/** Whether `extension` can take over media members, as opposed to only observing the player. */
function overridesMedia(extension) {
	return !!extension && "mediaOverride" in extension;
}
/**
* Holds one extension per class for a player and keeps them attached to the player's current media.
*
* Create one per player, when the player is created: its creation time is the player's `initTime`, and it outlives any
* store the player replaces. Registered extensions connect to its {@link ExtensionPlayer}. The player wraps its media
* with {@link PlayerExtensionCoordinator.getStoreMedia} before attaching the store, and re-attaches the store whenever
* `onChange` fires so features re-read members an extension now owns (such as `remote`).
*
* @internal
*/
var PlayerExtensionCoordinator = class {
	#extensions = /* @__PURE__ */ new Map();
	#facades = /* @__PURE__ */ new WeakMap();
	#player = { initTime: Date.now() };
	#onChange;
	#target = null;
	/** @param onChange - Called after an extension that overrides media members is registered or released. */
	constructor(onChange) {
		this.#onChange = onChange;
	}
	get size() {
		return this.#extensions.size;
	}
	get(Extension) {
		return this.#extensions.get(Extension);
	}
	/**
	* Register `extension`, replacing any earlier instance of the same class: connect it to the player and attach it to
	* the current target. Returns a release callback that only removes this exact instance.
	*/
	register(extension) {
		const Extension = extension.constructor;
		const previous = this.#extensions.get(Extension);
		if (previous !== extension) {
			if (previous) this.#leave(previous);
			this.#extensions.set(Extension, extension);
			extension.connect?.(this.#player);
			if (this.#target) extension.attach?.(this.#target);
			if (overridesMedia(previous) || overridesMedia(extension)) this.#onChange();
		}
		return () => this.#release(extension);
	}
	/**
	* Attach every extension to `target`. Extensions follow the media: a target with the same media is recorded without
	* re-attaching them, so a container change never restarts an extension's session.
	*/
	attach(target) {
		if (this.#target?.media === target.media) {
			this.#target = target;
			return;
		}
		this.detach();
		this.#target = target;
		for (const extension of this.#extensions.values()) extension.attach?.(target);
	}
	detach() {
		if (!this.#target) return;
		for (const extension of this.#extensions.values()) extension.detach?.();
		this.#target = null;
	}
	/** Detach, disconnect, and drop every registration. Extensions are destroyed by their owners, not here. */
	destroy() {
		this.detach();
		for (const extension of this.#extensions.values()) extension.disconnect?.();
		this.#extensions.clear();
	}
	/**
	* The media as the store should see it: `media` itself unless a registered extension can override media members,
	* otherwise a facade that routes each member through the extensions' overrides first.
	*/
	getStoreMedia(media) {
		if (!this.#hasMediaOverrides()) return media;
		let facade = this.#facades.get(media);
		if (!facade) {
			facade = createMediaFacade(media, () => this.#extensions.values());
			this.#facades.set(media, facade);
		}
		return facade;
	}
	#hasMediaOverrides() {
		for (const extension of this.#extensions.values()) if (overridesMedia(extension)) return true;
		return false;
	}
	#release(extension) {
		const Extension = extension.constructor;
		if (this.#extensions.get(Extension) !== extension) return;
		this.#extensions.delete(Extension);
		this.#leave(extension);
		if (overridesMedia(extension)) this.#onChange();
	}
	/** Undo `register` for an extension that is no longer registered: detach it from the media, then disconnect it. */
	#leave(extension) {
		if (this.#target) extension.detach?.();
		extension.disconnect?.();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/feature.js
/** @internal */
function definePlayerFeature(definition) {
	const preserved = Object.values(definition.config ?? {}).map((entry) => entry.state);
	return {
		...definition,
		...preserved.length > 0 ? { preserve: preserved } : {}
	};
}
/**
* Merge the configuration declarations from the selected player features.
*
* @internal
*/
function combinePlayerFeatureConfigs(features) {
	const definitions = features.map((feature) => feature.config ?? {});
	return Object.assign({}, ...definitions);
}
/**
* Forward one configuration input through its feature-owned private action.
*
* @internal
*/
function setPlayerConfigValue(store, entry, value) {
	const action = store[entry.action];
	if (typeof action !== "function") throw new TypeError(`Missing config action "${String(entry.action)}"`);
	action(value);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/constants.js
/**
* Page that explains what a Video.js player is and how to build one. Every packaged skin links to it with a hidden `<a
* rel="help">` inside the player: the HTML skins append it to their shadow root and the React skins render it, so
* server-rendered pages carry the link in their HTML. `hidden` keeps it out of the UI and the accessibility tree.
*
* @internal
*/
const SKIN_HELP_URL = "https://videojs.org/about-this-player";
/**
* Text of the hidden help link. Scrapers and agents read it; people never see it.
*
* @internal
*/
const SKIN_HELP_TEXT = "About this Video.js player";
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/media-action-value.js
function getMediaInputActionValue(action, key, value) {
	if (!isUndefined(value)) return value;
	const normalizedKey = key?.toLowerCase();
	if (action === "seekStep") return normalizedKey === "arrowleft" || normalizedKey === "j" ? -10 : 10;
	if (action === "volumeStep") return normalizedKey === "arrowdown" ? -.05 : 5 / 100;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/gesture/action-value.js
/**
* Resolves the effective value for a gesture action from its explicit value and region.
*
* @internal
*/
function getGestureActionValue(action, region, value) {
	if (action === "seekStep" && isUndefined(value) && region === "left") return -10;
	return getMediaInputActionValue(action, void 0, value);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/attributes.js
/**
* Capture authored values for the selected attributes.
*
* @internal
*/
function snapshotAttributes(element, names) {
	return [...names].map((name) => ({
		name,
		value: element.getAttribute(name)
	}));
}
/**
* Restore a snapshot created by `snapshotAttributes`.
*
* @internal
*/
function restoreAttributes(element, snapshot) {
	for (const { name, value } of snapshot) if (value === null) element.removeAttribute(name);
	else element.setAttribute(name, value);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/children.js
/** @internal */
function getElementChildren(parent, predicate) {
	const children = [];
	for (let index = 0; index < parent.children.length; index++) {
		const child = parent.children.item(index);
		if (child && predicate(child, index)) children.push(child);
	}
	return children;
}
/** @internal */
function findElementChild(parent, predicate) {
	for (let index = 0; index < parent.children.length; index++) {
		const child = parent.children.item(index);
		if (child && predicate(child, index)) return child;
	}
	return null;
}
/**
* Return what an element composes: the elements assigned to a slot, or otherwise its own children.
*
* A slot with nothing assigned yields its fallback content, so the result always describes what renders.
*
* @internal
*/
function getComposedChildren(parent) {
	if (parent instanceof HTMLSlotElement) {
		const assigned = parent.assignedElements();
		if (assigned.length > 0) return assigned;
	}
	return [...parent.children];
}
/** @internal */
function findComposedElement(root, predicate) {
	const children = getComposedChildren(root);
	for (const [index, child] of children.entries()) {
		if (predicate(child, index)) return child;
		const nested = findComposedElement(child, predicate);
		if (nested) return nested;
	}
	return null;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/listen.js
/** @internal */
function listen(target, type, listener, options) {
	target.addEventListener(type, listener, options);
	return () => target.removeEventListener(type, listener, options);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/direction.js
/**
* Check whether an element's text direction is right-to-left.
*
* @internal
*/
function isRTL(element) {
	const dir = element.closest("[dir]")?.getAttribute("dir")?.toLowerCase();
	if (dir === "rtl" || dir === "ltr") return dir === "rtl";
	return getComputedStyle(element).direction === "rtl";
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/event.js
/**
* Resolve the deepest event target, preferring composedPath for shadow DOM.
*
* @internal
*/
function resolveEventTarget(event) {
	const path = event.composedPath();
	return path.length > 0 ? path[0] : event.target;
}
/** @internal */
function onEvent(target, type, options) {
	return new Promise((resolve, reject) => {
		const handleAbort = () => {
			reject(options?.signal?.reason ?? "Aborted");
		};
		if (options?.signal?.aborted) {
			handleAbort();
			return;
		}
		options?.signal?.addEventListener("abort", handleAbort, { once: true });
		target.addEventListener(type, (event) => {
			options?.signal?.removeEventListener("abort", handleAbort);
			resolve(event);
		}, {
			...options,
			once: true
		});
	});
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/predicates.js
/** @internal */
function isDocument(value) {
	return value instanceof Node && value.nodeType === 9;
}
/** @internal */
function isShadowRoot(value) {
	return value instanceof Node && value.nodeType === 11 && "host" in value;
}
/** @internal */
function isHTMLImageElement(value) {
	return value instanceof HTMLImageElement;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/walk-ancestors.js
/**
* Walks an element and its ancestors until the callback returns a defined value.
*
* @internal
*/
function walkAncestors(start, callback, options = {}) {
	if (!start || typeof document === "undefined") return;
	let node = start;
	while (node) {
		const value = callback(node);
		if (!isUndefined(value)) return value;
		node = options.composed ? getComposedParent(node) : node.parentElement;
	}
}
function getComposedParent(element) {
	if (element.assignedSlot) return element.assignedSlot;
	if (element.parentElement) return element.parentElement;
	const root = element.getRootNode();
	return isShadowRoot(root) ? root.host : null;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/focus.js
const TABBABLE_SELECTOR = [
	"a[href]",
	"button:not([disabled])",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"audio[controls]",
	"video[controls]",
	"iframe",
	"[contenteditable]:not([contenteditable=\"false\"])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(",");
/** @internal */
function getDeepActiveElement(root = document) {
	let active = root.activeElement;
	while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
	return active;
}
/**
* Returns the elements in a composed subtree that participate in sequential keyboard navigation.
*
* @internal
*/
function getTabbableElements(root) {
	const tabbable = [];
	const visited = /* @__PURE__ */ new Set();
	visitChildren(root);
	return tabbable;
	function visitChildren(parent) {
		for (const child of parent.children) visitElement(child);
	}
	function visitElement(element) {
		if (visited.has(element)) return;
		visited.add(element);
		if (element instanceof HTMLElement && isTabbableElement(element)) tabbable.push(element);
		if (element instanceof HTMLSlotElement) {
			const assigned = element.assignedElements({ flatten: true });
			if (assigned.length > 0) for (const child of assigned) visitElement(child);
			else visitChildren(element);
			return;
		}
		if (element.shadowRoot) visitChildren(element.shadowRoot);
		else visitChildren(element);
	}
}
function isTabbableElement(element) {
	if (!element.matches(TABBABLE_SELECTOR) || element.tabIndex < 0 || element.matches(":disabled")) return false;
	return !walkAncestors(element, (ancestor) => {
		if (ancestor instanceof HTMLElement && (ancestor.hidden || ancestor.hasAttribute("inert") || ancestor.getAttribute("aria-hidden") === "true")) return true;
	}, { composed: true });
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/supports.js
/** @internal */
function supportsAnchorPositioning() {
	return typeof CSS !== "undefined" && CSS.supports("anchor-name: --a");
}
/** @internal */
function supportsPopoverAPI() {
	return typeof HTMLElement !== "undefined" && "popover" in HTMLElement.prototype;
}
/**
* Whether `new CSSStyleSheet()` works. Safari exposed the interface long before 16.4 made it constructable, and
* constructing it there throws `TypeError: Illegal constructor`, so checking for the interface is not enough.
*
* @internal
*/
function supportsConstructableStyleSheets() {
	if (typeof globalThis.CSSStyleSheet === "undefined") return false;
	try {
		new globalThis.CSSStyleSheet();
		return true;
	} catch {
		return false;
	}
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/interactive.js
/** @internal */
const INTERACTIVE_SELECTOR = [
	"button",
	"input",
	"select",
	"textarea",
	"a[href]",
	"[role=\"button\"]",
	"[role=\"menu\"]",
	"[role=\"menuitem\"]",
	"[role=\"menuitemcheckbox\"]",
	"[role=\"menuitemradio\"]",
	"[role=\"slider\"]",
	"[data-interactive]"
].join(",");
/** @internal */
const EDITABLE_SELECTOR = [
	"textarea",
	"select",
	"input:not([type])",
	...[
		"text",
		"search",
		"url",
		"tel",
		"email",
		"password",
		"number"
	].map((type) => `input[type="${type}"]`),
	"[contenteditable]:not([contenteditable=\"false\"])"
].join(",");
/** @internal */
function isEditableElement(el) {
	return el.matches(EDITABLE_SELECTOR);
}
/**
* Whether the keyboard event target is an editable element (input, textarea, etc).
*
* @internal
*/
function isEditableTarget(event) {
	const target = resolveEventTarget(event);
	return target instanceof Element && isEditableElement(target);
}
/**
* Whether the event originated from an interactive control (button, slider, etc).
*
* @internal
*/
function isInteractiveTarget(event) {
	const target = resolveEventTarget(event);
	if (!(target instanceof Element)) return false;
	return target.closest(INTERACTIVE_SELECTOR) !== null;
}
const ACTIVATION_KEYS = /* @__PURE__ */ new Set([" ", "Enter"]);
/**
* Selector for elements that use Space/Enter as a native activation key. Narrower than `INTERACTIVE_SELECTOR` —
* excludes editable elements like `input`, `textarea`, `select` where Space/Enter is text input, not activation.
*/
const ACTIVATABLE_SELECTOR = "button,a[href],[role=\"slider\"],[role=\"button\"]";
/**
* Whether the event is an activation key on an activatable element (button, link, slider).
*
* @internal
*/
function isInteractiveActivation(event) {
	if (!ACTIVATION_KEYS.has(event.key)) return false;
	const target = resolveEventTarget(event);
	return target instanceof Element && target.matches(ACTIVATABLE_SELECTOR);
}
//#endregion
//#region node_modules/@videojs/utils/dist/string/casing.js
/** @internal */
function pascalCase(str) {
	return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase());
}
/** @internal */
function camelCase(str) {
	return pascalCase(str).replace(/^(.)/, (_, c) => c.toLowerCase());
}
/** @internal */
function kebabCase(str) {
	return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/style.js
function normalizeStyleProperty(property) {
	return property.startsWith("--") ? property : kebabCase(property);
}
/** @internal */
function getAnchorNames(element) {
	const value = element.style.getPropertyValue("anchor-name").trim();
	if (!value || value === "none") return [];
	return value.split(",").map((name) => name.trim()).filter(Boolean);
}
/** @internal */
function applyStyles(element, styles) {
	for (const [prop, value] of Object.entries(styles)) if (typeof value === "string") element.style.setProperty(normalizeStyleProperty(prop), value);
}
/**
* Capture authored inline values and priorities for the selected properties.
*
* @internal
*/
function snapshotInlineStyles(element, properties) {
	return [...properties].map((property) => {
		const normalizedProperty = normalizeStyleProperty(property);
		return {
			property: normalizedProperty,
			value: element.style.getPropertyValue(normalizedProperty),
			priority: element.style.getPropertyPriority(normalizedProperty)
		};
	});
}
/**
* Restore a snapshot created by `snapshotInlineStyles`.
*
* @internal
*/
function restoreInlineStyles(element, snapshot) {
	for (const { property, value, priority } of snapshot) if (value) element.style.setProperty(property, value, priority);
	else element.style.removeProperty(property);
}
/**
* Apply inline styles for a synchronous callback and restore authored styles afterward.
*
* @internal
*/
function withInlineStyles(element, styles, callback) {
	const snapshot = snapshotInlineStyles(element, Object.keys(styles));
	try {
		applyStyles(element, styles);
		return callback();
	} finally {
		restoreInlineStyles(element, snapshot);
	}
}
/**
* Read and resolve a CSS property as a pixel length.
*
* @internal
*/
function readCSSLength(element, property, { source = "inline-or-computed" } = {}) {
	const normalizedProperty = normalizeStyleProperty(property);
	let value = source !== "computed" && element instanceof HTMLElement ? element.style.getPropertyValue(normalizedProperty) : "";
	if (!value && source !== "inline") value = getComputedStyle(element).getPropertyValue(normalizedProperty);
	return value.trim() ? resolveCSSLength(element, value) : null;
}
/** @internal */
function resolveCSSLength(el, value) {
	const trimmed = value.trim();
	if (!trimmed) return 0;
	const parsed = Number.parseFloat(trimmed);
	if (!Number.isNaN(parsed) && (/^-?\d*\.?\d+$/.test(trimmed) || trimmed.endsWith("px"))) return parsed;
	const doc = el.ownerDocument;
	const root = doc?.documentElement;
	if (!Number.isNaN(parsed) && trimmed.endsWith("rem")) return parsed * (root ? Number.parseFloat(getComputedStyle(root).fontSize) || 16 : 16);
	if (!Number.isNaN(parsed) && trimmed.endsWith("em")) return parsed * (el instanceof HTMLElement ? Number.parseFloat(getComputedStyle(el).fontSize) || 16 : 16);
	if (!doc) return Number.isNaN(parsed) ? 0 : parsed;
	const measurementEl = doc.createElement("div");
	measurementEl.style.position = "absolute";
	measurementEl.style.visibility = "hidden";
	measurementEl.style.pointerEvents = "none";
	measurementEl.style.inlineSize = trimmed;
	if (!measurementEl.style.inlineSize) return 0;
	measurementEl.style.blockSize = "0";
	measurementEl.style.padding = "0";
	measurementEl.style.border = "0";
	measurementEl.style.inset = "0";
	const computed = getComputedStyle(el);
	measurementEl.style.fontSize = computed.fontSize;
	for (let i = 0; i < computed.length; i++) {
		const name = computed.item(i);
		if (name.startsWith("--")) measurementEl.style.setProperty(name, computed.getPropertyValue(name));
	}
	const parent = doc.body ?? doc.documentElement;
	if (!parent) return Number.isNaN(parsed) ? 0 : parsed;
	parent.appendChild(measurementEl);
	if (getComputedStyle(measurementEl).inlineSize === "auto") {
		measurementEl.remove();
		return 0;
	}
	const pixels = measurementEl.getBoundingClientRect().width;
	measurementEl.remove();
	if (Number.isFinite(pixels)) return pixels;
	return Number.isNaN(parsed) ? 0 : parsed;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/layout.js
/**
* Read an element's current rendered size.
*
* @internal
*/
function getElementSize(element, { box = "bounding", overflow = "none" } = {}) {
	const rect = element.getBoundingClientRect();
	let width = box === "layout" ? element.offsetWidth || rect.width : rect.width;
	let height = box === "layout" ? element.offsetHeight || rect.height : rect.height;
	if (overflow === "width" || overflow === "both") width = Math.max(width, element.scrollWidth);
	if (overflow === "height" || overflow === "both") height = Math.max(height, element.scrollHeight);
	return {
		width,
		height
	};
}
/**
* Whether a viewport point, such as a mouse event's `clientX` and `clientY`, falls inside an element's border box. The
* right and bottom edges are outside, matching how the browser hit-tests. An element with no size contains nothing.
*
* @internal
*/
function isPointInElement(element, point) {
	const rect = element.getBoundingClientRect();
	return rect.width > 0 && rect.height > 0 && point.clientX >= rect.left && point.clientX < rect.right && point.clientY >= rect.top && point.clientY < rect.bottom;
}
/**
* Measure an element with optional temporary inline style overrides.
*
* @internal
*/
function measureElement(element, options = {}) {
	const { styles, ...sizeOptions } = options;
	const measure = () => getElementSize(element, sizeOptions);
	return styles ? withInlineStyles(element, styles, measure) : measure();
}
/**
* Read logical padding edges in pixels.
*
* @internal
*/
function getElementPadding(element) {
	const style = getComputedStyle(element);
	return {
		inlineStart: Number.parseFloat(style.paddingInlineStart) || 0,
		inlineEnd: Number.parseFloat(style.paddingInlineEnd) || 0,
		blockStart: Number.parseFloat(style.paddingBlockStart) || 0,
		blockEnd: Number.parseFloat(style.paddingBlockEnd) || 0
	};
}
/** @internal */
function getInlineExtent(edges) {
	return edges.inlineStart + edges.inlineEnd;
}
/** @internal */
function getBlockExtent(edges) {
	return edges.blockStart + edges.blockEnd;
}
function getPaddingOrigin(element) {
	const style = getComputedStyle(element);
	return {
		x: Number.parseFloat(style.paddingLeft) || 0,
		y: Number.parseFloat(style.paddingTop) || 0
	};
}
function defaultResolveChildrenSize(measurements) {
	if (measurements.length === 0) return {
		width: 0,
		height: 0
	};
	const width = Math.max(...measurements.map(({ offsetLeft, size }) => offsetLeft + size.width));
	const firstTop = measurements[0].offsetTop;
	return {
		width,
		height: measurements.some(({ offsetTop }) => offsetTop !== firstTop) ? Math.max(...measurements.map(({ offsetTop, size }) => offsetTop + size.height)) : measurements.reduce((total, { size }) => total + size.height, 0)
	};
}
/**
* Measure the layout occupied by a collection of child elements.
*
* @internal
*/
function measureElementChildren(container, { children, includePadding = false, maxWidth = null, measure = (element, width) => measureElement(element, width === void 0 ? void 0 : { styles: { width: `${width}px` } }), resolveSize = defaultResolveChildrenSize } = {}) {
	const elements = [...children ?? Array.from(container.children).filter((child) => child instanceof HTMLElement)].filter((element) => !element.hidden);
	const padding = includePadding ? getElementPadding(container) : {
		inlineStart: 0,
		inlineEnd: 0,
		blockStart: 0,
		blockEnd: 0
	};
	const inlinePadding = getInlineExtent(padding);
	const blockPadding = getBlockExtent(padding);
	const paddingOrigin = includePadding ? getPaddingOrigin(container) : {
		x: 0,
		y: 0
	};
	if (elements.length === 0) return {
		width: inlinePadding,
		height: blockPadding
	};
	const collect = (width) => elements.map((element) => ({
		element,
		size: measure(element, width),
		offsetLeft: element.offsetLeft - paddingOrigin.x,
		offsetTop: element.offsetTop - paddingOrigin.y
	}));
	let measurements = collect();
	const naturalWidth = resolveSize(measurements).width + inlinePadding;
	const width = maxWidth === null ? naturalWidth : Math.min(naturalWidth, Math.max(0, maxWidth));
	if (width < naturalWidth) measurements = collect(Math.max(0, width - inlinePadding));
	return {
		width,
		height: resolveSize(measurements).height + blockPadding
	};
}
//#endregion
//#region node_modules/@videojs/utils/dist/i18n/direction.js
const RTL_SCRIPTS = /* @__PURE__ */ new Set([
	"Adlm",
	"Arab",
	"Hebr",
	"Mand",
	"Mend",
	"Nkoo",
	"Rohg",
	"Samr",
	"Syrc",
	"Thaa",
	"Yezi"
]);
/**
* Resolve the writing direction of a BCP 47 locale.
*
* @internal
*/
function getTextDirection(locale) {
	try {
		const script = new Intl.Locale(locale).maximize().script;
		return script && RTL_SCRIPTS.has(script) ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}
//#endregion
//#region node_modules/@videojs/utils/dist/i18n.js
/**
* Whether the first locale in a lookup list is the default locale or one of its regional variants.
*
* @internal
*/
function isDefaultLocale(locale) {
	const tag = Array.isArray(locale) ? locale[0] : locale;
	if (!tag) return true;
	return tag === "en" || tag.startsWith(`en-`);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/locale/effective-locale.js
/**
* Resolves locale: explicit non-empty value → ambient `lang` → {@link fallback}.
*
* @internal
*/
function effectiveLocale(explicitLocale, ambientLang, fallback = "en") {
	if (!isUndefined(explicitLocale) && explicitLocale.trim() !== "") return explicitLocale;
	if (!isUndefined(ambientLang) && ambientLang.trim() !== "") return ambientLang;
	return fallback;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/locale/find-nearest-lang.js
function getElementLang(node) {
	const fromAttribute = node.getAttribute("lang")?.trim();
	if (fromAttribute) return fromAttribute;
	if ("lang" in node && typeof node.lang === "string") {
		const fromProperty = node.lang.trim();
		if (fromProperty) return fromProperty;
	}
}
/**
* First non-empty `lang` on `start` or an ancestor (HTML language inheritance).
*
* @internal
*/
function findNearestLang(start) {
	return walkAncestors(start, getElementLang);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/locale/merge-locale-overlays.js
/**
* Loads overlay layers for each resolved locale key, least-specific first, then merges most-specific-last (same
* semantics as the core i18n registry).
*
* @internal
*/
async function mergeLocaleOverlays(locale, load, findKeys) {
	const chain = findKeys(locale);
	const layers = await Promise.all(chain.map((tag) => load(tag)));
	const loadedTags = [];
	const merged = {};
	for (let i = 0; i < chain.length; i++) {
		const layer = layers[i];
		if (layer && Object.keys(layer).length > 0) loadedTags.push(chain[i]);
	}
	for (let i = chain.length - 1; i >= 0; i--) {
		const layer = layers[i];
		if (layer) Object.assign(merged, layer);
	}
	return {
		merged,
		loadedTags
	};
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/locale/resolve-lang-attr.js
/**
* Normalizes a raw `lang` string (e.g. from {@link findNearestLang}): empty or whitespace-only → `undefined`, otherwise
* the trimmed value.
*
* @internal
*/
function resolveLangAttr(raw) {
	if (isUndefined(raw) || raw.trim() === "") return;
	return raw.trim();
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/locale/subscribe-ambient-lang.js
const subscribers = /* @__PURE__ */ new Set();
let observer;
let queued = false;
const flush$1 = () => {
	queued = false;
	for (const cb of subscribers) cb();
};
const schedule = () => {
	if (!queued) {
		queued = true;
		queueMicrotask(flush$1);
	}
};
function start() {
	if (observer || typeof document === "undefined") return;
	observer = new MutationObserver(schedule);
	observer.observe(document.documentElement, {
		subtree: true,
		attributes: true,
		attributeFilter: ["lang"],
		childList: true
	});
}
function stop() {
	if (subscribers.size || !observer) return;
	observer.disconnect();
	observer = void 0;
	queued = false;
}
/**
* Subscribes to DOM updates that can change inherited `lang`: any `lang` attribute edit, or subtree structural changes
* under `<html>` (which can move nodes between labeled ancestors).
*
* @internal
*/
function subscribeAmbientLang(onStoreChange) {
	if (typeof document === "undefined") return () => {};
	subscribers.add(onStoreChange);
	start();
	return () => {
		subscribers.delete(onStoreChange);
		stop();
	};
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/observe-elements.js
/**
* Observe one or more elements for size changes and return a cleanup function.
*
* @internal
*/
function observeResize(elements, callback) {
	if (typeof ResizeObserver === "undefined") return noop;
	const observer = new ResizeObserver(callback);
	const targets = Symbol.iterator in Object(elements) ? elements : [elements];
	for (const element of targets) observer.observe(element);
	return () => observer.disconnect();
}
/**
* Observe a dynamically resolved element set. When the optional root mutates, the set is resolved again before
* `onChange` is called.
*
* @internal
*/
function observeElements({ getElements, onChange, root, mutations }) {
	let stopObservingResize = noop;
	const observeCurrentElements = () => {
		stopObservingResize();
		stopObservingResize = observeResize(getElements(), onChange);
	};
	observeCurrentElements();
	let mutationObserver = null;
	if (root && mutations !== false && typeof MutationObserver !== "undefined") {
		mutationObserver = new MutationObserver(() => {
			observeCurrentElements();
			onChange();
		});
		mutationObserver.observe(root, mutations ?? { childList: true });
	}
	return () => {
		mutationObserver?.disconnect();
		stopObservingResize();
	};
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/platform.js
/** @internal */
function isMacOS() {
	return typeof navigator !== "undefined" && /mac/i.test(navigator.userAgent);
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/popover.js
const ZERO_OFFSETS$1 = {
	sideOffset: 0,
	boundaryOffset: 0
};
const OPPOSITE_SIDE$1 = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function getSideAvailable(triggerRect, boundaryRect, side, offsets) {
	const boundaryOffset = offsets.boundaryOffset ?? 0;
	switch (side) {
		case "top": return triggerRect.top - boundaryRect.top - boundaryOffset - offsets.sideOffset;
		case "bottom": return boundaryRect.bottom - triggerRect.bottom - boundaryOffset - offsets.sideOffset;
		case "left": return triggerRect.left - boundaryRect.left - boundaryOffset - offsets.sideOffset;
		case "right": return boundaryRect.right - triggerRect.right - boundaryOffset - offsets.sideOffset;
	}
}
/**
* Resolve the preferred side against a positioning boundary.
*
* @internal
*/
function getPositionedSide(triggerRect, positionedRect, boundaryRect, opts, offsets = ZERO_OFFSETS$1) {
	const preferred = opts.side;
	const opposite = OPPOSITE_SIDE$1[preferred];
	const size = preferred === "top" || preferred === "bottom" ? positionedRect.height : positionedRect.width;
	const preferredSpace = getSideAvailable(triggerRect, boundaryRect, preferred, offsets);
	if (preferredSpace >= size) return preferred;
	return getSideAvailable(triggerRect, boundaryRect, opposite, offsets) > preferredSpace ? opposite : preferred;
}
/** @internal */
function tryShowPopover(el) {
	try {
		el?.showPopover?.();
	} catch {}
}
/** @internal */
function tryHidePopover(el) {
	try {
		el?.hidePopover?.();
	} catch {}
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/raf-throttle.js
/**
* Throttle a function to fire at most once per animation frame.
*
* @internal
*/
function rafThrottle(fn) {
	let rafId = null;
	let latestArgs;
	const throttled = (...args) => {
		latestArgs = args;
		if (rafId !== null) return;
		rafId = requestAnimationFrame(() => {
			rafId = null;
			fn(...latestArgs);
		});
	};
	throttled.cancel = () => {
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
	};
	return throttled;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/shadow-styles.js
/**
* Inject a `<style>` tag into `document.head` once (idempotent by `id`).
*
* @internal
*/
function ensureGlobalStyle(id, css) {
	const doc = globalThis.document;
	if (!doc || doc.getElementById(id)) return;
	const style = doc.createElement("style");
	style.id = id;
	style.textContent = css;
	doc.head.appendChild(style);
}
function isConstructableStyleSheet(value) {
	return typeof globalThis.CSSStyleSheet !== "undefined" && value instanceof globalThis.CSSStyleSheet;
}
function getStyleText(style) {
	if (typeof style === "string") return style;
	return Array.from(style.cssRules).map((rule) => rule.cssText).join("\n");
}
/**
* Create a constructable stylesheet when available, otherwise return raw CSS.
*
* @internal
*/
function createShadowStyle(css) {
	if (!supportsConstructableStyleSheets()) return css;
	const sheet = new globalThis.CSSStyleSheet();
	sheet.replaceSync(css);
	return sheet;
}
/**
* Apply styles to a shadow root using `adoptedStyleSheets` when available, falling back to `<style>` injection.
*
* @internal
*/
function applyShadowStyles(shadowRoot, styles) {
	if (styles.every(isConstructableStyleSheet) && "adoptedStyleSheets" in shadowRoot) {
		shadowRoot.adoptedStyleSheets = styles;
		return;
	}
	const doc = shadowRoot.ownerDocument;
	for (const styleText of styles.map(getStyleText)) {
		const style = doc.createElement("style");
		style.textContent = styleText;
		shadowRoot.appendChild(style);
	}
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/template.js
/**
* Create an `HTMLTemplateElement` from an HTML string, or `null` when `document` is unavailable (SSR).
*
* @internal
*/
function createTemplate(html) {
	const doc = globalThis.document;
	if (!doc) return null;
	const template = doc.createElement("template");
	template.innerHTML = html;
	return template;
}
/**
* Return the first direct-child template in a container.
*
* @internal
*/
function getTemplateElement(container) {
	for (const child of container.children) if (child.localName === "template" && "content" in child) return child;
	return null;
}
/**
* Return a template's only element root, or `null` when it does not contain exactly one.
*
* @internal
*/
function getTemplateRoot(template) {
	const root = template.content.firstElementChild;
	return root && !root.nextElementSibling ? root : null;
}
/**
* Deep-clone a resolved template root into the target document.
*
* @internal
*/
function cloneTemplateRoot(root, targetDocument = root.ownerDocument) {
	return targetDocument.importNode(root, true);
}
/**
* Deep-clone a template's content into a container.
*
* @internal
*/
function renderTemplate(container, template) {
	container.appendChild(container.ownerDocument.importNode(template.content, true));
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/text-track.js
/**
* Whether a text track is a captions or subtitles track.
*
* @internal
*/
function isCaptionOrSubtitleTrack(track) {
	return track.kind === "captions" || track.kind === "subtitles";
}
/**
* Captions and subtitles tracks in the order menus present them: grouped by kind, keeping source order within a kind.
* Shared so selection fallbacks pick the same track the captions menu lists first.
*
* @internal
*/
function getCaptionOrSubtitleTracks(tracks) {
	return Array.from(tracks).filter(isCaptionOrSubtitleTrack).sort(sortByKind);
}
/**
* Find the `<track>` element that owns the given `TextTrack`.
*
* @internal
*/
function findTrackElement(media, track) {
	if (!(media instanceof HTMLElement)) return null;
	for (const el of media.querySelectorAll("track")) if (el.track === track) return el;
	return null;
}
function sortByKind(a, b) {
	return a.kind > b.kind ? 1 : a.kind < b.kind ? -1 : 0;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/time-ranges.js
/**
* Converts a TimeRanges object to an array of [start, end] tuples.
*
* @internal
*/
function serializeTimeRanges(ranges) {
	const result = [];
	for (let i = 0; i < ranges.length; i++) result.push([ranges.start(i), ranges.end(i)]);
	return result;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/tree.js
/** @internal */
function containsComposed(root, element) {
	let current = element;
	while (current) {
		if (current === root || root.contains(current)) return true;
		const nodeRoot = current.getRootNode();
		current = current.assignedSlot ?? current.parentElement ?? (isShadowRoot(nodeRoot) ? nodeRoot.host : null);
	}
	return false;
}
//#endregion
//#region node_modules/@videojs/utils/dist/dom/webkit.js
/**
* Whether WebKit's AirPlay APIs are present in this realm (Safari macOS/iOS).
*
* @internal
*/
function supportsWebKitAirPlay() {
	return "WebKitPlaybackTargetAvailabilityEvent" in globalThis;
}
/**
* Whether `media` exposes WebKit's AirPlay APIs.
*
* @internal
*/
function isWebKitAirPlayCapable(media) {
	return supportsWebKitAirPlay() && "webkitCurrentPlaybackTargetIsWireless" in media;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/audio-track.js
function getTrackValue(track, index) {
	return track.id || String(index);
}
function toMediaTrack(track, index) {
	return {
		id: getTrackValue(track, index),
		...track.kind !== void 0 && { kind: track.kind },
		label: track.label,
		language: track.language,
		enabled: track.enabled
	};
}
const audioTrackFeature = definePlayerFeature({
	name: "audioTrack",
	state: ({ target }) => ({
		audioTrackList: [],
		selectAudioTrack(value) {
			const { media } = target();
			if (!isMediaAudioTrackCapable(media)) return;
			const tracks = [...media.audioTracks];
			const track = tracks.find((candidate, index) => getTrackValue(candidate, index) === value);
			if (!track) return;
			for (const candidate of tracks) candidate.enabled = candidate === track;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		let audioTracks = null;
		let cleanup = null;
		const getAudioTracks = () => isMediaAudioTrackCapable(media) ? media.audioTracks : null;
		const sync = (list = getAudioTracks()) => {
			set({ audioTrackList: list ? [...list].map(toMediaTrack) : [] });
		};
		const bind = () => {
			const nextAudioTracks = getAudioTracks();
			if (nextAudioTracks === audioTracks) {
				sync(nextAudioTracks);
				return;
			}
			cleanup?.abort();
			cleanup = new AbortController();
			audioTracks = nextAudioTracks;
			if (audioTracks) {
				listen(audioTracks, "addtrack", () => sync(audioTracks), { signal: cleanup.signal });
				listen(audioTracks, "removetrack", () => sync(audioTracks), { signal: cleanup.signal });
				listen(audioTracks, "change", () => sync(audioTracks), { signal: cleanup.signal });
			}
			sync(audioTracks);
		};
		bind();
		listen(media, "loadstart", bind, { signal });
		signal.addEventListener("abort", () => cleanup?.abort(), { once: true });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/buffer.js
const bufferFeature = definePlayerFeature({
	name: "buffer",
	state: () => ({
		buffered: [],
		seekable: []
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaBufferCapable(media)) return;
		const sync = () => set({
			buffered: serializeTimeRanges(media.buffered),
			seekable: serializeTimeRanges(media.seekable)
		});
		sync();
		listen(media, "loadedmetadata", sync, { signal });
		listen(media, "durationchange", sync, { signal });
		listen(media, "progress", sync, { signal });
		listen(media, "emptied", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/interaction-lock.js
const locks = /* @__PURE__ */ new WeakMap();
/** Prevent container-level interactions while a scoped overlay owns the container. */
function lockInteractions(element) {
	locks.set(element, (locks.get(element) ?? 0) + 1);
	let released = false;
	return () => {
		if (released) return;
		released = true;
		const count = locks.get(element) ?? 0;
		if (count <= 1) locks.delete(element);
		else locks.set(element, count - 1);
	};
}
/** Whether a scoped overlay currently prevents interactions on this container. */
function isInteractionLocked(element) {
	return (locks.get(element) ?? 0) > 0;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/gesture/region.js
/**
* Determine which named region a pointer position falls into.
*
* Regions divide the container width equally based on how many are active: - `left` + `right` → halves (50% / 50%) -
* `left` + `center` + `right` → thirds (33% / 34% / 33%)
*
* Single region: `left` covers the left half, `right` the right half, and `center` covers the full surface. Partial
* two-region combos (e.g. `left` + `center`) use the same natural zones — positions outside all active zones return
* `null` so full-surface gestures can handle them.
*/
function resolveRegion(clientX, containerRect, activeRegions) {
	const relativeX = clientX - containerRect.left;
	const width = containerRect.width;
	if (width === 0) return null;
	const ratio = relativeX / width;
	if (activeRegions.size === 2 && activeRegions.has("left") && activeRegions.has("right")) return ratio < .5 ? "left" : "right";
	if (activeRegions.size === 3) {
		if (ratio < 1 / 3) return "left";
		if (ratio < 2 / 3) return "center";
		return "right";
	}
	if (activeRegions.has("left") && ratio < .5) return "left";
	if (activeRegions.has("right") && ratio >= .5) return "right";
	if (activeRegions.has("center")) {
		if (activeRegions.size === 1) return "center";
		if (ratio >= 1 / 3 && ratio < 2 / 3) return "center";
	}
	return null;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/gesture/coordinator.js
const TAP_THRESHOLD$1 = 250;
/** @internal */
var GestureCoordinator = class {
	#target;
	#bindings = [];
	#recognizers = /* @__PURE__ */ new Set();
	#disconnect = null;
	#subscribers = /* @__PURE__ */ new Set();
	constructor(target) {
		this.#target = target;
	}
	get bindings() {
		return this.#bindings;
	}
	subscribe(callback) {
		this.#subscribers.add(callback);
		return () => this.#subscribers.delete(callback);
	}
	/**
	* Whether a registered binding claims this tap for the given action. A claimed tap belongs to the gesture layer, so
	* callers should leave it alone. Taps on interactive targets (buttons, sliders) are never claimed — the same
	* filtering the pointerup listener applies. A disabled binding still claims: disabling a gesture opts out of the
	* action, it doesn't hand the tap back to a fallback handler.
	*/
	claimsTap(event, action) {
		if (isInteractionLocked(this.#target)) return true;
		if (isInteractiveTarget(event)) return false;
		return this.#bindings.some((b) => b.type === "tap" && b.action === action && (!b.pointer || b.pointer === event.pointerType));
	}
	add(binding) {
		const value = getGestureActionValue(binding.action ?? "", binding.region, binding.value);
		const wrapped = {
			...binding,
			value,
			onActivate: (event) => {
				if (this.#subscribers.size > 0) {
					const activateEvent = {
						type: binding.type,
						source: "gesture",
						action: binding.action,
						value,
						region: binding.region,
						pointer: binding.pointer,
						event
					};
					for (const cb of this.#subscribers) try {
						cb(activateEvent);
					} catch (error) {}
				}
				binding.onActivate(event);
			}
		};
		this.#bindings.push(wrapped);
		this.#recognizers.add(wrapped.recognizer);
		this.#connect();
		let removed = false;
		return () => {
			if (removed) return;
			removed = true;
			const idx = this.#bindings.indexOf(wrapped);
			if (idx !== -1) this.#bindings.splice(idx, 1);
			this.#maybeDisconnect();
		};
	}
	#connect() {
		if (this.#disconnect) return;
		this.#disconnect = new AbortController();
		const { signal } = this.#disconnect;
		let pointerDownTime = 0;
		listen(this.#target, "pointerdown", (event) => {
			if (isInteractionLocked(this.#target)) {
				pointerDownTime = 0;
				return;
			}
			if (event.button !== 0) return;
			pointerDownTime = Date.now();
		}, { signal });
		listen(this.#target, "pointerup", (event) => {
			if (isInteractionLocked(this.#target)) {
				pointerDownTime = 0;
				return;
			}
			if (event.button !== 0) return;
			if (Date.now() - pointerDownTime > TAP_THRESHOLD$1) return;
			if (isInteractiveTarget(event)) return;
			const pointerType = event.pointerType;
			const clientX = event.clientX;
			const target = this.#target;
			const bindings = this.#bindings;
			const matches = { resolve: (type) => matchBindings(bindings, type, pointerType, clientX, target) };
			for (const recognizer of this.#recognizers) recognizer.handleUp(matches, event);
		}, { signal });
	}
	#maybeDisconnect() {
		if (this.#bindings.length > 0) return;
		for (const recognizer of this.#recognizers) recognizer.reset();
		this.#recognizers.clear();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
};
const coordinators$1 = /* @__PURE__ */ new WeakMap();
/**
* Look up the gesture coordinator for a target element, if one exists.
*
* @internal
*/
function findGestureCoordinator(target) {
	return coordinators$1.get(target);
}
/** @internal */
function getGestureCoordinator(target) {
	let coordinator = coordinators$1.get(target);
	if (!coordinator) {
		coordinator = new GestureCoordinator(target);
		coordinators$1.set(target, coordinator);
	}
	return coordinator;
}
function matchBindings(bindings, type, pointerType, clientX, target) {
	const rect = target.getBoundingClientRect();
	const activeRegions = getActiveRegions(bindings, type, pointerType);
	const region = activeRegions.size > 0 ? resolveRegion(clientX, rect, activeRegions) : null;
	const matches = [];
	for (const binding of bindings) {
		if (binding.disabled) continue;
		if (binding.type !== type) continue;
		if (binding.pointer && binding.pointer !== pointerType) continue;
		if (binding.region) {
			if (binding.region !== region) continue;
		} else if (region !== null) continue;
		matches.push(binding);
	}
	return matches;
}
function getActiveRegions(bindings, type, pointerType) {
	const regions = /* @__PURE__ */ new Set();
	for (const binding of bindings) {
		if (binding.disabled) continue;
		if (binding.type !== type) continue;
		if (binding.pointer && binding.pointer !== pointerType) continue;
		if (binding.region) regions.add(binding.region);
	}
	return regions;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/presentation/remote-playback.js
function resolveRemote(media) {
	const target = media;
	if (isObject(target.remote) && "state" in target.remote && "prompt" in target.remote) return target.remote;
}
function isRemotePlaybackConnected(media) {
	return resolveRemote(media)?.state === "connected";
}
function isRemotePlaybackConnecting(media) {
	return resolveRemote(media)?.state === "connecting";
}
async function requestRemotePlayback(media) {
	const remote = resolveRemote(media);
	if (!remote) throw new DOMException("Remote playback not supported", "NotSupportedError");
	return remote.prompt();
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/controls.js
const IDLE_DELAY = 2e3;
const TAP_THRESHOLD = 250;
const TOUCH_SETTLE_DELAY = 500;
/** How long after a control releases pointer capture a `mouseleave` inside the container is treated as spurious. */
const CAPTURE_RELEASE_DELAY = 100;
const controlsActionsByRequest = /* @__PURE__ */ new WeakMap();
const controlsFeature = definePlayerFeature({
	name: "controls",
	state: ({ get, set }) => {
		const fallbackRequestControlsLock = () => {
			set({ controlsVisible: true });
			return () => {};
		};
		const fallbackToggleControls = (forceShow) => {
			const next = forceShow ?? !get().userActive;
			set({
				userActive: next,
				controlsVisible: next
			});
			return next;
		};
		const actions = createControlsActions(fallbackRequestControlsLock, fallbackToggleControls);
		controlsActionsByRequest.set(actions.requestControlsLock, actions);
		return {
			userActive: true,
			controlsVisible: true,
			requestControlsLock: actions.requestControlsLock,
			toggleControls: actions.toggleControls
		};
	},
	attach({ target, signal, get, set }) {
		const { media, container } = target;
		if (!isMediaPauseCapable(media) || isNull(container)) return;
		let idleTimer;
		let controlsLockCount = 0;
		const computeVisible = (userActive) => {
			return controlsLockCount > 0 || userActive || media.paused || isRemotePlaybackConnected(media) || isRemotePlaybackConnecting(media);
		};
		function clearIdle() {
			clearTimeout(idleTimer);
			idleTimer = void 0;
		}
		function scheduleIdle() {
			clearIdle();
			if (controlsLockCount > 0) return;
			idleTimer = setTimeout(setInactive, IDLE_DELAY);
		}
		function setActive() {
			if (!get().userActive) set({
				userActive: true,
				controlsVisible: true
			});
			scheduleIdle();
		}
		function setInactive() {
			clearIdle();
			set({
				userActive: false,
				controlsVisible: computeVisible(false)
			});
		}
		function requestControlsLock() {
			controlsLockCount++;
			clearIdle();
			if (!get().controlsVisible) set({ controlsVisible: true });
			let released = false;
			return () => {
				if (released || signal.aborted) return;
				released = true;
				controlsLockCount--;
				if (controlsLockCount === 0) setActive();
			};
		}
		function toggleControls(forceShow) {
			if (forceShow ?? !get().controlsVisible) setActive();
			else setInactive();
			return get().controlsVisible;
		}
		const actions = controlsActionsByRequest.get(get().requestControlsLock);
		actions.setDelegates(requestControlsLock, toggleControls);
		let pointerDownTime = 0;
		let lastTouchAt = 0;
		const isRecentTouch = () => lastTouchAt > 0 && Date.now() - lastTouchAt < TOUCH_SETTLE_DELAY;
		let lastCaptureReleaseAt = 0;
		const isRecentCaptureRelease = () => lastCaptureReleaseAt > 0 && Date.now() - lastCaptureReleaseAt < CAPTURE_RELEASE_DELAY;
		function onPointerDown(event) {
			pointerDownTime = Date.now();
			if (event.pointerType === "touch") lastTouchAt = pointerDownTime;
		}
		function onPointerUp(event) {
			if (event.pointerType === "touch") lastTouchAt = Date.now();
			if (event.pointerType === "touch" && Date.now() - pointerDownTime < TAP_THRESHOLD) {
				if (findGestureCoordinator(container)?.claimsTap(event, "toggleControls")) return;
				const isMediaOrContainer = [getRegisteredMedia(media), container].includes(event.target);
				if (get().controlsVisible && isMediaOrContainer) setInactive();
				else setActive();
			} else setActive();
		}
		const onPlaybackChange = () => {
			const { userActive } = get();
			set({ controlsVisible: computeVisible(userActive) });
			if (!media.paused && userActive) scheduleIdle();
		};
		function onPointerMove(event) {
			if (event.pointerType === "touch") {
				if (get().userActive) scheduleIdle();
				return;
			}
			setActive();
		}
		listen(container, "pointermove", onPointerMove, { signal });
		listen(container, "pointerdown", onPointerDown, { signal });
		listen(container, "pointerup", onPointerUp, { signal });
		listen(container, "lostpointercapture", () => {
			lastCaptureReleaseAt = Date.now();
		}, { signal });
		listen(container, "keydown", setActive, { signal });
		listen(container, "keyup", setActive, { signal });
		listen(container, "focusin", () => {
			if (isRecentTouch()) return;
			setActive();
		}, { signal });
		listen(container, "mouseleave", (event) => {
			if (isRecentTouch()) return;
			if (isRecentCaptureRelease() && event instanceof MouseEvent && isPointInElement(container, event)) return;
			setInactive();
		}, { signal });
		listen(media, "play", onPlaybackChange, { signal });
		listen(media, "pause", onPlaybackChange, { signal });
		listen(media, "ended", onPlaybackChange, { signal });
		if (isMediaRemotePlaybackCapable(media)) {
			const onCastChange = () => {
				const { userActive } = get();
				set({ controlsVisible: computeVisible(userActive) });
			};
			listen(media.remote, "connect", onCastChange, { signal });
			listen(media.remote, "connecting", onCastChange, { signal });
			listen(media.remote, "disconnect", onCastChange, { signal });
		}
		signal.addEventListener("abort", () => {
			actions.reset();
			controlsLockCount = 0;
			clearIdle();
		}, { once: true });
		scheduleIdle();
	}
});
function createControlsActions(fallbackRequestControlsLock, fallbackToggleControls) {
	let requestControlsLockDelegate = fallbackRequestControlsLock;
	let toggleControlsDelegate = fallbackToggleControls;
	const locks = /* @__PURE__ */ new Set();
	const requestControlsLock = () => {
		const lock = { release: requestControlsLockDelegate() };
		let released = false;
		locks.add(lock);
		return () => {
			if (released) return;
			released = true;
			locks.delete(lock);
			lock.release();
		};
	};
	const toggleControls = (forceShow) => toggleControlsDelegate(forceShow);
	const actions = {
		requestControlsLock,
		toggleControls,
		setDelegates(nextRequestControlsLock, nextToggleControls) {
			if (nextRequestControlsLock !== requestControlsLockDelegate) {
				requestControlsLockDelegate = nextRequestControlsLock;
				for (const lock of locks) {
					lock.release();
					lock.release = nextRequestControlsLock();
				}
			}
			toggleControlsDelegate = nextToggleControls;
		},
		reset() {
			actions.setDelegates(fallbackRequestControlsLock, fallbackToggleControls);
		}
	};
	return actions;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/error.js
const errorFeature = definePlayerFeature({
	name: "error",
	state: ({ set }) => ({
		error: null,
		dismissError() {
			set({ error: null });
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaErrorCapable(media)) return;
		const syncError = () => set({ error: media.error });
		listen(media, "error", syncError, { signal });
		listen(media, "emptied", () => set({ error: null }), { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/presentation/fullscreen.js
function isFullscreenEnabled() {
	const doc = document;
	if (doc.fullscreenEnabled || doc.webkitFullscreenEnabled) return true;
	return isFunction(document.createElement("video").webkitSetPresentationMode);
}
function getFullscreenElement() {
	const doc = document;
	return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}
function matchesFullscreen(element) {
	if (!(element instanceof Element)) return false;
	try {
		return element.matches(":fullscreen");
	} catch {
		return false;
	}
}
function isFullscreen(container, media) {
	if (media.webkitPresentationMode === "fullscreen") return true;
	const fullscreenElement = getFullscreenElement();
	if (fullscreenElement && (fullscreenElement === container || fullscreenElement === getRegisteredMedia(media))) return true;
	if (matchesFullscreen(container) || matchesFullscreen(media)) return true;
	return media.isFullscreen ?? false;
}
async function requestFullscreen(container, media) {
	const doc = document;
	if (container && (doc.fullscreenEnabled || doc.webkitFullscreenEnabled)) {
		const el = container;
		if (isFunction(el.requestFullscreen)) return el.requestFullscreen();
		if (isFunction(el.webkitRequestFullscreen)) return el.webkitRequestFullscreen();
	}
	const webkitVideo = media;
	if (isFunction(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("fullscreen");
		return;
	}
	const video = media;
	if (isFunction(video.requestFullscreen)) return video.requestFullscreen();
}
async function exitFullscreen(media) {
	const doc = document;
	const webkitVideo = media;
	if (webkitVideo.webkitPresentationMode === "fullscreen" && isFunction(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("inline");
		return;
	}
	if (isFunction(doc.exitFullscreen)) return doc.exitFullscreen();
	if (isFunction(doc.webkitExitFullscreen)) return doc.webkitExitFullscreen();
	const video = media;
	if (isFunction(video.exitFullscreen)) return video.exitFullscreen();
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/presentation/pip.js
function isPictureInPictureEnabled() {
	if (document.pictureInPictureEnabled) {
		const isSafari = /.*Version\/.*Safari\/.*/.test(navigator.userAgent);
		const isPWA = typeof matchMedia === "function" && matchMedia("(display-mode: standalone)").matches;
		return !isSafari || !isPWA;
	}
	return isFunction(document.createElement("video").webkitSetPresentationMode);
}
/**
* Whether this media can enter picture-in-picture at all, which is a separate question from whether the browser
* supports it. Mirrors the branches `requestPictureInPicture` takes below, so anything it would refuse to act on
* reports as incapable here — an iframe embed whose provider has no picture-in-picture can never enter it, however
* capable the browser is.
*/
function isPictureInPictureCapable(media) {
	if (isFunction(media.webkitSetPresentationMode)) return true;
	return isMediaPictureInPictureCapable(media);
}
function isPictureInPicture(media) {
	if (media.webkitPresentationMode === "picture-in-picture") return true;
	if (document.pictureInPictureElement === getRegisteredMedia(media)) return true;
	return media.isPictureInPicture ?? false;
}
async function requestPictureInPicture(media) {
	const webkitVideo = media;
	if (isFunction(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("picture-in-picture");
		return;
	}
	const video = media;
	if (isFunction(video.requestPictureInPicture)) return video.requestPictureInPicture();
}
async function exitPictureInPicture(media) {
	const webkitVideo = media;
	if (webkitVideo.webkitPresentationMode === "picture-in-picture" && isFunction(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("inline");
		return;
	}
	if (isFunction(document.exitPictureInPicture)) return document.exitPictureInPicture();
	const video = media;
	if (isFunction(video.exitPictureInPicture)) return video.exitPictureInPicture();
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/fullscreen.js
const fullscreenFeature = definePlayerFeature({
	name: "fullscreen",
	state: ({ target }) => ({
		isFullscreen: false,
		fullscreenAvailability: "unavailable",
		async requestFullscreen() {
			const { media, container } = target();
			if (isPictureInPicture(media)) await exitPictureInPicture(media);
			return requestFullscreen(container, media);
		},
		async exitFullscreen() {
			const { media } = target();
			return exitFullscreen(media);
		}
	}),
	attach({ target, signal, set }) {
		const { media, container } = target;
		set({ fullscreenAvailability: isFullscreenEnabled() ? "available" : "unsupported" });
		const sync = () => set({ isFullscreen: isFullscreen(container, media) });
		sync();
		listen(document, "fullscreenchange", sync, { signal });
		listen(document, "webkitfullscreenchange", sync, { signal });
		if ("webkitPresentationMode" in media) listen(media, "webkitpresentationmodechanged", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/live.js
/**
* Player feature exposing `liveEdgeStart` and `targetLiveWindow` in store state for media that implements
* `MediaLiveCapability` (currently `HlsJsAdapter` and its delegates).
*
* - `liveEdgeStart` — presentation time marking the start of the Live Edge Window. Playing at the live edge when
*   `currentTime >= liveEdgeStart`. `NaN` when the stream isn't live or the value is unknown.
* - `targetLiveWindow` — `0` for standard latency live, `Infinity` for DVR, `NaN` for on-demand or unknown.
*
* Included by the {@link liveVideoFeatures} and {@link liveAudioFeatures} presets; apps can also compose it into a
* custom preset.
*
* @see https://github.com/video-dev/media-ui-extensions/blob/main/proposals/0007-live-edge.md
*/
const liveFeature = definePlayerFeature({
	name: "live",
	state: () => ({
		liveEdgeStart: NaN,
		targetLiveWindow: NaN
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaLiveCapable(media)) return;
		const sync = () => set({
			liveEdgeStart: media.liveEdgeStart,
			targetLiveWindow: media.targetLiveWindow
		});
		sync();
		listen(media, "targetlivewindowchange", sync, { signal });
		listen(media, "streamtypechange", sync, { signal });
		listen(media, "loadedmetadata", sync, { signal });
		listen(media, "canplay", sync, { signal });
		listen(media, "progress", sync, { signal });
		listen(media, "durationchange", sync, { signal });
		listen(media, "timeupdate", sync, { signal });
		listen(media, "emptied", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/metadata.js
const MEDIA_TITLE = Symbol("@videojs/media-title");
const USER_TITLE = Symbol("@videojs/user-title");
const SET_USER_TITLE = Symbol("@videojs/set-user-title");
const DEFAULT_TITLE = "";
const MEDIA_POSTER = Symbol("@videojs/media-poster");
const USER_POSTER = Symbol("@videojs/user-poster");
const SET_USER_POSTER = Symbol("@videojs/set-user-poster");
const DEFAULT_POSTER = "";
/**
* Resolves content metadata into player state, preferring what the author set over what the media carries. Included in
* the standard audio, video, and live presets.
*/
const metadataFeature = definePlayerFeature({
	name: "metadata",
	config: {
		/** The title to display. Takes precedence over the title the media carries. */
		title: {
			action: SET_USER_TITLE,
			state: USER_TITLE,
			html: { attribute: "content-title" }
		},
		/** The poster to display. Takes precedence over the poster the media carries. */
		poster: {
			action: SET_USER_POSTER,
			state: USER_POSTER
		}
	},
	state: ({ set }) => ({
		[MEDIA_TITLE]: void 0,
		[USER_TITLE]: void 0,
		[SET_USER_TITLE]: (value) => set({ [USER_TITLE]: value }),
		[MEDIA_POSTER]: void 0,
		[USER_POSTER]: void 0,
		[SET_USER_POSTER]: (value) => set({ [USER_POSTER]: value })
	}),
	derived: {
		/** The resolved content title. Set it through the player, not through the store. */
		title: ({ get }) => get()[USER_TITLE] ?? get()[MEDIA_TITLE] ?? DEFAULT_TITLE,
		/**
		* The resolved poster URL, independent of the media element's own `poster`. Set it through the player, not through
		* the store.
		*/
		poster: ({ get }) => get()[USER_POSTER] ?? get()[MEDIA_POSTER] ?? DEFAULT_POSTER
	},
	attach({ target, signal, set }) {
		const { media } = target;
		const sync = () => {
			const contentData = isMediaContentDataCapable(media) ? media.contentData : void 0;
			set({
				[MEDIA_TITLE]: contentData?.title,
				[MEDIA_POSTER]: contentData?.poster
			});
		};
		const bind = () => {
			sync();
			if (!isMediaContentDataCapable(media)) return;
			listen(media, "contentdatachange", sync, { signal });
		};
		bind();
		listen(media, "loadstart", bind, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/pip.js
const pipFeature = definePlayerFeature({
	name: "pip",
	state: ({ target }) => ({
		isPictureInPicture: false,
		pictureInPictureAvailability: "unavailable",
		async requestPictureInPicture() {
			const { media, container } = target();
			if (!isPictureInPictureCapable(media)) return;
			if (!isMediaSourceCapable(media) || !hasMetadata(media)) throw new DOMException("The media has no video data yet.", "InvalidStateError");
			if (isFullscreen(container, media)) await exitFullscreen(media);
			return requestPictureInPicture(media);
		},
		async exitPictureInPicture() {
			const { media } = target();
			return exitPictureInPicture(media);
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		const supported = isPictureInPictureEnabled() && isPictureInPictureCapable(media);
		const sync = () => set({
			isPictureInPicture: isPictureInPicture(media),
			pictureInPictureAvailability: supported ? isMediaSourceCapable(media) && hasMetadata(media) ? "available" : "unavailable" : "unsupported"
		});
		sync();
		listen(media, "enterpictureinpicture", sync, { signal });
		listen(media, "leavepictureinpicture", sync, { signal });
		listen(media, "loadstart", sync, { signal });
		listen(media, "loadedmetadata", sync, { signal });
		listen(media, "emptied", sync, { signal });
		if ("webkitPresentationMode" in media) listen(media, "webkitpresentationmodechanged", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/playback.js
const playbackFeature = definePlayerFeature({
	name: "playback",
	state: ({ target, set }) => ({
		paused: true,
		ended: false,
		started: false,
		waiting: false,
		play() {
			const { media } = target();
			const playing = media.play();
			if (isMediaPauseCapable(media) && !media.paused) set({
				paused: false,
				ended: false,
				started: true
			});
			return playing;
		},
		pause() {
			const { media } = target();
			if (isMediaPauseCapable(media)) {
				media.pause();
				set({ paused: media.paused });
			}
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaPauseCapable(media) || !isMediaSeekCapable(media) || !isMediaSourceCapable(media)) return;
		let starvedAt = null;
		const sync = () => {
			const starved = media.readyState < HTMLMediaElement.HAVE_FUTURE_DATA && !media.paused;
			if (!starved) starvedAt = null;
			else starvedAt ??= media.currentTime;
			set({
				paused: media.paused,
				ended: media.ended,
				started: !media.paused || media.currentTime > 0,
				waiting: starved && starvedAt === media.currentTime
			});
		};
		const starve = () => {
			starvedAt = media.currentTime;
			sync();
		};
		sync();
		listen(media, "emptied", starve, { signal });
		listen(media, "play", starve, { signal });
		listen(media, "pause", sync, { signal });
		listen(media, "ended", sync, { signal });
		listen(media, "playing", sync, { signal });
		listen(media, "waiting", starve, { signal });
		listen(media, "seeking", starve, { signal });
		listen(media, "seeked", sync, { signal });
		listen(media, "canplay", sync, { signal });
		listen(media, "timeupdate", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/playback-rate.js
const DEFAULT_RATES = [
	.2,
	.5,
	.7,
	1,
	1.2,
	1.5,
	1.7,
	2
];
const playbackRateFeature = definePlayerFeature({
	name: "playbackRate",
	state: ({ target }) => ({
		playbackRates: DEFAULT_RATES,
		playbackRate: 1,
		setPlaybackRate(rate) {
			const { media } = target();
			if (isMediaPlaybackRateCapable(media)) media.playbackRate = rate;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaPlaybackRateCapable(media)) return;
		const sync = () => set({ playbackRate: media.playbackRate });
		sync();
		listen(media, "ratechange", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/quality.js
const QUALITY_AUTO_VALUE$1 = "auto";
function getRenditionValue(rendition, index) {
	return rendition.id || String(index);
}
function toMediaRendition(rendition, index) {
	return {
		id: getRenditionValue(rendition, index),
		...rendition.width !== void 0 && { width: rendition.width },
		...rendition.height !== void 0 && { height: rendition.height },
		...rendition.bitrate !== void 0 && { bitrate: rendition.bitrate },
		...rendition.frameRate !== void 0 && { frameRate: rendition.frameRate },
		...rendition.codec !== void 0 && { codec: rendition.codec },
		selected: rendition.selected
	};
}
function getSize(rendition) {
	if (rendition.width && rendition.height) return Math.min(rendition.width, rendition.height);
	return rendition.height ?? rendition.width;
}
const qualityFeature = definePlayerFeature({
	name: "quality",
	state: ({ target }) => ({
		videoRenditionList: [],
		activeVideoRendition: null,
		selectVideoRendition(value) {
			const { media } = target();
			if (!isMediaVideoRenditionCapable(media)) return;
			if (value === QUALITY_AUTO_VALUE$1) {
				media.videoRenditions.selectedIndex = -1;
				return;
			}
			const index = [...media.videoRenditions].findIndex((rendition, renditionIndex) => getRenditionValue(rendition, renditionIndex) === value);
			if (index !== -1) media.videoRenditions.selectedIndex = index;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		let videoRenditions = null;
		let cleanup = null;
		const getVideoRenditions = () => isMediaVideoRenditionCapable(media) ? media.videoRenditions : null;
		const getActiveRendition = (list) => {
			if (!list) return null;
			const renditions = [...list];
			const active = renditions.find((rendition) => rendition.active);
			if (active) return active;
			if (!isMediaVideoDimensionsCapable(media) || !media.videoWidth && !media.videoHeight) return null;
			const size = getSize({
				width: media.videoWidth || void 0,
				height: media.videoHeight || void 0
			});
			const matches = renditions.filter((rendition) => getSize(rendition) === size);
			return matches.length === 1 ? matches[0] : null;
		};
		const sync = (list = getVideoRenditions()) => {
			const renditions = list ? [...list] : [];
			const active = getActiveRendition(list);
			set({
				videoRenditionList: renditions.map(toMediaRendition),
				activeVideoRendition: active ? toMediaRendition(active, renditions.indexOf(active)) : null
			});
		};
		const bind = () => {
			const nextVideoRenditions = getVideoRenditions();
			if (nextVideoRenditions === videoRenditions) {
				sync(nextVideoRenditions);
				return;
			}
			cleanup?.abort();
			cleanup = new AbortController();
			videoRenditions = nextVideoRenditions;
			if (videoRenditions) {
				listen(videoRenditions, "addrendition", () => sync(videoRenditions), { signal: cleanup.signal });
				listen(videoRenditions, "removerendition", () => sync(videoRenditions), { signal: cleanup.signal });
				listen(videoRenditions, "change", () => sync(videoRenditions), { signal: cleanup.signal });
				listen(videoRenditions, "activechange", () => sync(videoRenditions), { signal: cleanup.signal });
			}
			sync(videoRenditions);
		};
		bind();
		listen(media, "loadstart", bind, { signal });
		listen(media, "resize", () => sync(videoRenditions), { signal });
		signal.addEventListener("abort", () => cleanup?.abort(), { once: true });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/remote-playback.js
const remotePlaybackFeature = definePlayerFeature({
	name: "remotePlayback",
	state: ({ target }) => ({
		remotePlaybackState: "disconnected",
		remotePlaybackAvailability: "unsupported",
		async promptRemotePlayback() {
			const { media, container } = target();
			if (isRemotePlaybackConnected(media)) return requestRemotePlayback(media);
			if (isFullscreen(container, media)) await exitFullscreen(media);
			return await requestRemotePlayback(media);
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaRemotePlaybackCapable(media)) return;
		if (isWebKitAirPlayCapable(media)) {
			const syncConnection = () => {
				set({ remotePlaybackState: media.webkitCurrentPlaybackTargetIsWireless ? "connected" : "disconnected" });
			};
			const syncAvailability = (event) => {
				const { availability } = event;
				set({ remotePlaybackAvailability: availability === "available" ? "available" : "unavailable" });
			};
			listen(media, "webkitplaybacktargetavailabilitychanged", syncAvailability, { signal });
			listen(media, "webkitcurrentplaybacktargetiswirelesschanged", syncConnection, { signal });
			syncConnection();
			return;
		}
		const syncState = () => set({ remotePlaybackState: media.remote.state });
		syncState();
		listen(media.remote, "connect", syncState, { signal });
		listen(media.remote, "connecting", syncState, { signal });
		listen(media.remote, "disconnect", syncState, { signal });
		media.remote.watchAvailability((available) => {
			set({ remotePlaybackAvailability: available ? "available" : "unavailable" });
		}).catch(() => {
			set({ remotePlaybackAvailability: "unsupported" });
		});
		signal.addEventListener("abort", () => {
			media.remote?.cancelWatchAvailability?.().catch(() => {});
		});
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/source.js
const sourceFeature = definePlayerFeature({
	name: "source",
	state: () => ({
		currentSrc: "",
		canPlay: false
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaSourceCapable(media)) return;
		const sync = () => set({
			currentSrc: media.currentSrc,
			canPlay: media.readyState >= MediaReadyState.HAVE_FUTURE_DATA
		});
		sync();
		listen(media, "canplay", sync, { signal });
		listen(media, "canplaythrough", sync, { signal });
		listen(media, "loadstart", sync, { signal });
		listen(media, "emptied", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/stream-type.js
const streamTypeFeature = definePlayerFeature({
	name: "streamType",
	state: () => ({ streamType: MediaStreamTypes.UNKNOWN }),
	attach({ target, signal, set }) {
		const { media } = target;
		if (isMediaStreamTypeCapable(media)) {
			const sync = () => set({ streamType: media.streamType });
			sync();
			listen(media, "streamtypechange", sync, { signal });
			return;
		}
		if (!isMediaSeekCapable(media)) return;
		const detect = () => {
			const { duration } = media;
			if (duration === Number.POSITIVE_INFINITY) return MediaStreamTypes.LIVE;
			if (Number.isFinite(duration) && duration > 0) return MediaStreamTypes.ON_DEMAND;
			return MediaStreamTypes.UNKNOWN;
		};
		const sync = () => set({ streamType: detect() });
		sync();
		listen(media, "durationchange", sync, { signal });
		listen(media, "loadedmetadata", sync, { signal });
		listen(media, "emptied", sync, { signal });
		if (isMediaBufferCapable(media)) listen(media, "progress", sync, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/utils/flatten.js
/** @internal */
function flattenTranslations(locale, options = {}) {
	return flatten(locale, options);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/registry.js
/**
* Well-known key for the shared registry. Its name and value shape are a cross-version contract: every copy of this
* module in a realm must agree on them, so change the key when the shape changes.
*/
const I18N_REGISTRY_KEY = Symbol.for("@videojs/i18n-registry");
/**
* The registry is realm-global rather than module-global so duplicate copies of this module converge on one set of
* translations.
*
* Duplication is normal, not a bug to fix upstream: separately loaded CDN bundles, a pinned and an unpinned URL for the
* same file, and two bundlers' output on one page all yield distinct module instances. With module-scoped state, a
* `registerI18n` call on one instance is invisible to the player reading from another, and the locale silently falls
* back to English.
*/
function getRegistry() {
	const host = globalThis;
	const existing = host[I18N_REGISTRY_KEY];
	if (existing) return existing;
	const registry = {
		layers: /* @__PURE__ */ new Map(),
		subscribers: /* @__PURE__ */ new Set()
	};
	host[I18N_REGISTRY_KEY] = registry;
	return registry;
}
function notify() {
	for (const cb of getRegistry().subscribers) cb();
}
function normalizeLocaleTag(tag) {
	return tag.trim().replaceAll("_", "-").toLowerCase();
}
/** Strip unicode locale extension sequences (`-u-…`) before any private-use `-x-` block. */
function stripUnicodeExtensions(tag) {
	const xIdx = tag.indexOf("-x-");
	const uIdx = (xIdx === -1 ? tag : tag.slice(0, xIdx)).indexOf("-u-");
	if (uIdx === -1) return tag;
	return tag.slice(0, uIdx) + (xIdx === -1 ? "" : tag.slice(xIdx));
}
function chineseFallback(segments) {
	if (segments[0] !== "zh") return;
	const script = segments.find((segment) => segment === "hant" || segment === "hans");
	return script === "hant" ? "zh-tw" : script === "hans" ? "zh-cn" : void 0;
}
/**
* Normalize a BCP 47 tag to the key the registry stores it under: lowercase, with Unicode extensions removed.
*
* @example
*   `en-US-u-nu-latn` → `en-us`
*
* @param locale - BCP 47 tag to normalize.
* @public
*/
function getLocaleKey(locale) {
	return stripUnicodeExtensions(normalizeLocaleTag(locale));
}
/**
* Most-specific-first BCP 47 lookup tags (normalized). Always ends with `en` when missing from the truncated chain.
*
* @example
*   `es-419-u-nu-latn` → `['es-419', 'es', 'en']`
*
* @param locale - BCP 47 tag to resolve.
* @public
*/
function findLocaleKeys(locale) {
	const base = getLocaleKey(locale);
	if (!base) return ["en"];
	const segments = base.split("-").filter(Boolean);
	const chain = [];
	for (let len = segments.length; len >= 1; len--) chain.push(segments.slice(0, len).join("-"));
	const zhFallback = chineseFallback(segments);
	const zhIndex = chain.indexOf("zh");
	if (zhFallback && zhIndex !== -1) chain.splice(zhIndex, 0, zhFallback);
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const tag of chain) if (!seen.has(tag)) {
		seen.add(tag);
		out.push(tag);
	}
	if (!seen.has("en")) out.push("en");
	return out;
}
function mergeI18nTranslations(chain) {
	const { layers } = getRegistry();
	const merged = {};
	for (let i = chain.length - 1; i >= 0; i--) {
		const tag = chain[i];
		const layer = layers.get(tag);
		if (layer) Object.assign(merged, layer);
	}
	return merged;
}
/**
* Register or merge translation strings for a BCP 47 locale tag.
*
* @param locale - BCP 47 tag (normalized to lowercase; unicode extensions stripped for the registry key).
* @param translations - Partial nested locale values; merges with any existing layer for the tag.
* @public
*/
function registerI18n(locale, translations) {
	const { layers } = getRegistry();
	const tag = getLocaleKey(locale);
	const existing = layers.get(tag) ?? {};
	layers.set(tag, {
		...existing,
		...flattenTranslations(translations)
	});
	notify();
}
/**
* Return the merged registered translation map for a locale. Built-in English defaults are supplied by text
* descriptors.
*
* @param locale - BCP 47 tag to resolve (e.g. `es-MX`, `zh-Hant-HK`).
* @public
*/
function getI18nTranslations(locale) {
	return mergeI18nTranslations(findLocaleKeys(locale));
}
/**
* Subscribe to global registry mutations (for example after `registerI18n` or browser translation prefetch).
*
* @param callback - Invoked when any locale layer changes.
* @public
*/
function onI18nRegistryChange(callback) {
	const { subscribers } = getRegistry();
	subscribers.add(callback);
	return () => {
		subscribers.delete(callback);
	};
}
/**
* Whether an exact locale tag has been registered via `registerI18n` (not whether lazy packs exist).
*
* @param locale - BCP 47 tag to test.
* @public
*/
function hasRegisteredLocale(locale) {
	return getRegistry().layers.has(getLocaleKey(locale));
}
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/en.js
var en_default = {
	buttons: {
		play: "Play",
		pause: "Pause",
		replay: "Replay",
		mute: "Mute",
		unmute: "Unmute"
	},
	seek: {
		forward: "Seek forward {seconds} seconds",
		backward: "Seek backward {seconds} seconds"
	},
	fullscreen: {
		enter: "Enter fullscreen",
		exit: "Exit fullscreen"
	},
	captions: {
		enable: "Enable captions",
		disable: "Disable captions"
	},
	pip: {
		enter: "Enter picture-in-picture",
		exit: "Exit picture-in-picture"
	},
	live: {
		playing: "Playing live",
		seekToEdge: "Seek to live edge",
		badge: "Live"
	},
	cast: {
		start: "Start casting",
		stop: "Stop casting",
		connecting: "Connecting"
	},
	airplay: {
		start: "Start AirPlay",
		stop: "Stop AirPlay"
	},
	slider: { seek: "Seek" },
	time: {
		current: "Current time",
		duration: "Duration",
		remaining: "Remaining",
		elapsedSuffix: "{duration} elapsed",
		durationSuffix: "{duration} duration",
		remainingSuffix: "{duration} remaining",
		showElapsed: "Show elapsed time, {duration}.",
		showDuration: "Show duration, {duration}.",
		showRemaining: "Show remaining time, {duration}.",
		toggleElapsed: "Toggle between elapsed and remaining time.",
		toggleDuration: "Toggle between duration and remaining time.",
		position: "{current} of {duration}",
		unknown: "Media not loaded, unknown time."
	},
	playback: { rate: "Playback rate {rate}" },
	volume: {
		mutedValue: "{percent}, muted",
		muted: "Muted",
		label: "Volume",
		value: "Volume {value}"
	},
	status: {
		captionsOn: "Captions on",
		captionsOff: "Captions off",
		paused: "Paused",
		playing: "Playing",
		fullscreen: "Fullscreen",
		pip: "Picture in picture",
		exitPip: "Exit picture in picture",
		seekedTo: "Seeked to {time}"
	},
	container: { label: "Media player" },
	errors: {
		aborted: "You stopped media playback before it finished.",
		network: "This media could not be loaded due to a network or server issue.",
		decode: "This media could not be played. It may be corrupted, or your browser may not support its format.",
		source: "This media could not be loaded. It may be unavailable, or your browser may not support its format.",
		encrypted: "This media could not be played because it could not be decrypted.",
		unplayable: "This media is unsupported by the player.",
		title: "Something went wrong.",
		unexpected: "An unexpected error occurred."
	},
	common: {
		empty: "",
		ok: "OK"
	},
	menu: {
		settings: "Settings",
		quality: "Quality",
		audio: "Audio",
		default: "Default",
		speed: "Speed",
		captions: "Captions",
		playbackRate: "Playback rate",
		back: "Back",
		off: "Off",
		auto: "Auto",
		autoWithLabel: "Auto ({label})",
		subtitles: "Subtitles"
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/browser-translation.js
const NAMED_PLACEHOLDER = /\{([^{}]+)\}/g;
const INDEX_PLACEHOLDER = /\{\s*(\d+)\s*\}/g;
/**
* Replaces `{seconds}` with `{0}`, `{1}`, … so the Browser Translation API sees one full sentence (grammar/word order
* preserved) while opaque numeric slots are left alone.
*/
function maskNamedPlaceholders(source) {
	const slots = [];
	return {
		masked: source.replace(NAMED_PLACEHOLDER, (_, name) => {
			slots.push(name);
			return `{${slots.length - 1}}`;
		}),
		slots
	};
}
function restoreNamedPlaceholders(translated, slots) {
	return translated.replace(INDEX_PLACEHOLDER, (match, index) => {
		const name = slots[Number(index)];
		return name !== void 0 ? `{${name}}` : match;
	});
}
async function translateProtectingPlaceholders(translator, value) {
	const { masked, slots } = maskNamedPlaceholders(value);
	if (slots.length === 0) return translator.translate(value);
	return restoreNamedPlaceholders(await translator.translate(masked), slots);
}
const cache = /* @__PURE__ */ new Map();
function getBrowserTranslator() {
	if (!("Translator" in globalThis)) return void 0;
	return globalThis.Translator;
}
/**
* First non-default tag in the lookup chain used as the browser translation target.
*
* @internal
*/
function resolveBrowserTranslationTarget(locale) {
	for (const tag of findLocaleKeys(locale)) if (!isDefaultLocale(tag)) return tag;
}
/**
* Whether to invoke the Browser Translation API for this locale after lazy built-in loading.
*
* @internal
*/
function shouldAttemptBrowserTranslation(locale, loadedLazyTags, translations) {
	if (!resolveBrowserTranslationTarget(locale)) return false;
	if (loadedLazyTags.some((tag) => !isDefaultLocale(tag))) return translations !== void 0 && hasMissingEnglishTranslations(translations);
	return !findLocaleKeys(locale).some((tag) => !isDefaultLocale(tag) && hasRegisteredLocale(tag));
}
function hasMissingEnglishTranslations(translations) {
	const english = flattenTranslations(en_default);
	return Object.keys(english).some((key) => translations[key] === void 0);
}
/**
* Translates English registry values via the on-device Browser Translation API when a pre-installed model is available.
* Results are cached per target language tag.
*
* @internal
*/
async function getBrowserTranslations(locale, options) {
	const target = resolveBrowserTranslationTarget(locale);
	if (!target) return {};
	const cached = cache.get(target);
	if (cached) return cached;
	const Translator = getBrowserTranslator();
	if (!Translator) return {};
	const downloadIfNeeded = options?.downloadIfNeeded ?? false;
	const availability = await Translator.availability({
		sourceLanguage: "en",
		targetLanguage: target
	});
	if (availability === "unavailable") return {};
	if (!downloadIfNeeded && availability !== "available") return {};
	const needsDownload = downloadIfNeeded && (availability === "downloadable" || availability === "downloading");
	let downloadStarted = false;
	const notifyDownloadStart = () => {
		if (!needsDownload || downloadStarted) return;
		downloadStarted = true;
		options?.onModelDownload?.start?.(target);
	};
	notifyDownloadStart();
	const english = flattenTranslations(en_default);
	const keys = Object.keys(english);
	const translator = await Translator.create({
		sourceLanguage: "en",
		targetLanguage: target,
		...downloadIfNeeded ? { monitor(monitor) {
			monitor.addEventListener("downloadprogress", notifyDownloadStart);
		} } : {}
	});
	if (downloadStarted) options?.onModelDownload?.finish?.(target);
	const entries = await Promise.all(keys.map(async (key) => {
		const value = english[key];
		if (!value) return [key, ""];
		return [key, await translateProtectingPlaceholders(translator, value)];
	}));
	const result = Object.fromEntries(entries);
	cache.set(target, result);
	return result;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ar.js
var ar_exports = /* @__PURE__ */ __exportAll({ default: () => ar_default });
var ar_default;
var init_ar = __esmMin((() => {
	ar_default = {
		buttons: {
			play: "تشغيل",
			pause: "إيقاف مؤقت",
			replay: "إعادة التشغيل",
			mute: "كتم الصوت",
			unmute: "إلغاء كتم الصوت"
		},
		seek: {
			forward: "التقديم بمقدار {seconds} ثانية",
			backward: "الترجيع بمقدار {seconds} ثانية"
		},
		fullscreen: {
			enter: "ملء الشاشة",
			exit: "الخروج من ملء الشاشة"
		},
		captions: {
			enable: "تفعيل الترجمة والشرح",
			disable: "إيقاف الترجمة والشرح"
		},
		pip: {
			enter: "صورة داخل صورة",
			exit: "الخروج من وضع صورة داخل صورة"
		},
		live: {
			playing: "بث مباشر",
			seekToEdge: "الانتقال إلى البث المباشر",
			badge: "مباشر"
		},
		cast: {
			start: "بدء الإرسال",
			stop: "إيقاف الإرسال",
			connecting: "جارٍ الاتصال"
		},
		airplay: {
			start: "بدء AirPlay",
			stop: "إيقاف AirPlay"
		},
		slider: { seek: "التقديم والترجيع" },
		time: {
			current: "الوقت الحالي",
			duration: "المدة",
			remaining: "الوقت المتبقي",
			elapsedSuffix: "{duration} من الوقت المنقضي",
			durationSuffix: "المدة {duration}",
			remainingSuffix: "متبقٍ {duration}",
			showElapsed: "عرض الوقت المنقضي، {duration}.",
			showDuration: "عرض المدة، {duration}.",
			showRemaining: "عرض الوقت المتبقي، {duration}.",
			toggleElapsed: "التبديل بين الوقت المنقضي والوقت المتبقي.",
			toggleDuration: "التبديل بين المدة والوقت المتبقي.",
			position: "{current} من {duration}",
			unknown: "الوسائط غير محملة، الوقت غير معلوم."
		},
		playback: { rate: "سرعة التشغيل {rate}" },
		volume: {
			mutedValue: "{percent}، مكتوم",
			muted: "مكتوم",
			label: "مستوى الصوت",
			value: "مستوى الصوت {value}"
		},
		status: {
			captionsOn: "تم تفعيل الترجمة والشرح",
			captionsOff: "تم إيقاف الترجمة والشرح",
			paused: "متوقف مؤقتاً",
			playing: "قيد التشغيل",
			fullscreen: "ملء الشاشة",
			pip: "صورة داخل صورة",
			exitPip: "الخروج من صورة داخل صورة",
			seekedTo: "تم الانتقال إلى {time}"
		},
		container: { label: "مشغل الوسائط" },
		errors: {
			aborted: "لقد أوقفت تشغيل الوسائط قبل انتهائها.",
			network: "تعذّر تحميل هذه الوسائط بسبب مشكلة في الشبكة أو الخادم.",
			decode: "تعذّر تشغيل هذه الوسائط. قد تكون تالفة أو قد لا يدعم متصفحك تنسيقها.",
			source: "تعذّر تحميل هذه الوسائط. قد تكون غير متاحة أو قد لا يدعم متصفحك تنسيقها.",
			encrypted: "تعذّر تشغيل هذه الوسائط لأنّه تعذّر فك تشفيرها.",
			unplayable: "هذه الوسائط غير مدعومة من قِبل المشغّل.",
			title: "حدث خطأ ما.",
			unexpected: "حدث خطأ غير متوقّع."
		},
		common: {
			empty: "",
			ok: "أغلق"
		},
		menu: {
			settings: "الإعدادات",
			quality: "الجودة",
			audio: "الصوت",
			default: "افتراضي",
			speed: "السرعة",
			captions: "الترجمة والشرح",
			playbackRate: "سرعة التشغيل",
			back: "رجوع",
			off: "إيقاف",
			auto: "تلقائي",
			autoWithLabel: "تلقائي ({label})",
			subtitles: "الترجمة"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/az.js
var az_exports = /* @__PURE__ */ __exportAll({ default: () => az_default });
var az_default;
var init_az = __esmMin((() => {
	az_default = {
		buttons: {
			play: "Oynat",
			pause: "Fasilə",
			replay: "Yenidən oynat",
			mute: "Səssiz et",
			unmute: "Səsi aç"
		},
		seek: {
			forward: "{seconds} saniyə irəliyə",
			backward: "{seconds} saniyə geriyə"
		},
		fullscreen: {
			enter: "Tam ekran",
			exit: "Tam ekrandan çıx"
		},
		captions: {
			enable: "Altyazıları aktiv et",
			disable: "Altyazıları deaktiv et"
		},
		pip: {
			enter: "Şəkildə şəkil rejimi",
			exit: "Şəkildə şəkil rejimindən çıx"
		},
		live: {
			playing: "Canlı yayımda",
			seekToEdge: "Canlı yayıma keç",
			badge: "Canlı"
		},
		cast: {
			start: "Yayımı başlat",
			stop: "Yayımı durdur",
			connecting: "Qoşulur"
		},
		airplay: {
			start: "AirPlay-i başlat",
			stop: "AirPlay-i dayandır"
		},
		slider: { seek: "Sürüşdür" },
		time: {
			current: "Cari vaxt",
			duration: "Müddət",
			remaining: "Qalan vaxt",
			elapsedSuffix: "{duration} keçən vaxt",
			durationSuffix: "{duration} müddət",
			remainingSuffix: "Qalan {duration}",
			showElapsed: "Keçən vaxtı göstər, {duration}.",
			showDuration: "Müddəti göstər, {duration}.",
			showRemaining: "Qalan vaxtı göstər, {duration}.",
			toggleElapsed: "Keçən vaxt və qalan vaxt arasında keçid edin.",
			toggleDuration: "Müddət və qalan vaxt arasında keçid edin.",
			position: "{current} / {duration}",
			unknown: "Media yüklənməyib, vaxt məlum deyil."
		},
		playback: { rate: "Oynatma sürəti {rate}" },
		volume: {
			mutedValue: "{percent}, səssiz",
			muted: "Səssiz",
			label: "Səs",
			value: "Səs {value}"
		},
		status: {
			captionsOn: "Altyazılar aktivdir",
			captionsOff: "Altyazılar deaktivdir",
			paused: "Dayandırılıb",
			playing: "Oynadılır",
			fullscreen: "Tam ekran",
			pip: "Şəkildə şəkil",
			exitPip: "Şəkildə şəkil rejimindən çıx",
			seekedTo: "{time} vaxtına keçildi"
		},
		container: { label: "Media pleyeri" },
		errors: {
			aborted: "Siz medianın oxudulmasını başa çatmamış dayandırdınız.",
			network: "Şəbəkə və ya server problemi səbəbindən bu media yüklənə bilmədi.",
			decode: "Bu media oxudula bilmədi. Media korlanmış ola bilər və ya brauzeriniz onun formatını dəstəkləməyə bilər.",
			source: "Bu media yüklənə bilmədi. O, əlçatan olmaya bilər və ya brauzeriniz onun formatını dəstəkləməyə bilər.",
			encrypted: "Şifrəsi açıla bilmədiyi üçün bu media oxudula bilmədi.",
			unplayable: "Bu media pleyer tərəfindən dəstəklənmir.",
			title: "Xəta oldu.",
			unexpected: "Gözlənilməz xəta baş verdi."
		},
		common: {
			empty: "",
			ok: "Bağla"
		},
		menu: {
			settings: "Parametrlər",
			quality: "Keyfiyyət",
			audio: "Səs",
			default: "Defolt",
			speed: "Sürət",
			captions: "Qapalı altyazılar",
			playbackRate: "Oynatma sürəti",
			back: "Geri",
			off: "Söndürülmüş",
			auto: "Avtomatik",
			autoWithLabel: "Avtomatik ({label})",
			subtitles: "Altyazılar"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/bs.js
var bs_exports = /* @__PURE__ */ __exportAll({ default: () => bs_default });
var bs_default;
var init_bs = __esmMin((() => {
	bs_default = {
		buttons: {
			play: "Pusti",
			pause: "Pauziraj",
			replay: "Ponovi",
			mute: "Isključi zvuk",
			unmute: "Uključi zvuk"
		},
		seek: {
			forward: "Premotaj naprijed {seconds} sek.",
			backward: "Premotaj nazad {seconds} sek."
		},
		fullscreen: {
			enter: "Puni ekran",
			exit: "Izlaz iz punog ekrana"
		},
		captions: {
			enable: "Uključi titlove",
			disable: "Isključi titlove"
		},
		pip: {
			enter: "Slika u slici",
			exit: "Izlaz iz slike u slici"
		},
		live: {
			playing: "Reprodukcija uživo",
			seekToEdge: "Idi na prijenos uživo",
			badge: "Uživo"
		},
		cast: {
			start: "Pokreni emitovanje",
			stop: "Zaustavi emitovanje",
			connecting: "Povezivanje"
		},
		airplay: {
			start: "Pokreni AirPlay",
			stop: "Zaustavi AirPlay"
		},
		slider: { seek: "Premotavanje" },
		time: {
			current: "Trenutno vrijeme",
			duration: "Vrijeme trajanja",
			remaining: "Preostalo vrijeme",
			elapsedSuffix: "{duration} proteklog vremena",
			durationSuffix: "{duration} trajanja",
			remainingSuffix: "Preostalo {duration}",
			showElapsed: "Prikaži proteklo vrijeme, {duration}.",
			showDuration: "Prikaži trajanje, {duration}.",
			showRemaining: "Prikaži preostalo vrijeme, {duration}.",
			toggleElapsed: "Prebacivanje između proteklog i preostalog vremena.",
			toggleDuration: "Prebacivanje između trajanja i preostalog vremena.",
			position: "{current} / {duration}",
			unknown: "Medij nije učitan, vrijeme nije poznato."
		},
		playback: { rate: "Brzina reprodukcije {rate}" },
		volume: {
			mutedValue: "{percent}, isključen zvuk",
			muted: "Isključen zvuk",
			label: "Glasnoća",
			value: "Glasnoća {value}"
		},
		status: {
			captionsOn: "Titlovi uključeni",
			captionsOff: "Titlovi isključeni",
			paused: "Pauzirano",
			playing: "Reprodukcija",
			fullscreen: "Puni ekran",
			pip: "Slika u slici",
			exitPip: "Izlaz iz slike u slici",
			seekedTo: "Premotano: {time}"
		},
		container: { label: "Medijski plejer" },
		errors: {
			aborted: "Zaustavili ste reprodukciju medija prije nego što je završila.",
			network: "Ovaj medij nije moguće učitati zbog problema s mrežom ili serverom.",
			decode: "Ovaj medij nije moguće reproducirati. Možda je oštećen ili vaš preglednik ne podržava njegov format.",
			source: "Ovaj medij nije moguće učitati. Možda nije dostupan ili vaš preglednik ne podržava njegov format.",
			encrypted: "Ovaj medij nije moguće reproducirati jer ga nije moguće dešifrirati.",
			unplayable: "Plejer ne podržava ovaj medij.",
			title: "Nešto je pošlo po krivu.",
			unexpected: "Došlo je do neočekivane greške."
		},
		common: {
			empty: "",
			ok: "OK"
		},
		menu: {
			settings: "Postavke",
			quality: "Kvalitet",
			audio: "Zvuk",
			default: "Zadano",
			speed: "Brzina",
			captions: "Titlovi",
			playbackRate: "Brzina reprodukcije",
			back: "Nazad",
			off: "Isključeno",
			auto: "Automatski",
			autoWithLabel: "Automatski ({label})",
			subtitles: "Titlovi"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/bg.js
var bg_exports = /* @__PURE__ */ __exportAll({ default: () => bg_default });
var bg_default;
var init_bg = __esmMin((() => {
	bg_default = {
		buttons: {
			play: "Възпроизвеждане",
			pause: "Пауза",
			replay: "Повторно възпроизвеждане",
			mute: "Спиране на звука",
			unmute: "Включване на звука"
		},
		seek: {
			forward: "Превъртане напред с {seconds} секунди",
			backward: "Превъртане назад с {seconds} секунди"
		},
		fullscreen: {
			enter: "Цял екран",
			exit: "Изход от цял екран"
		},
		captions: {
			enable: "Включване на надписите",
			disable: "Изключване на надписите"
		},
		pip: {
			enter: "Картина в картина",
			exit: "Изход от картина в картина"
		},
		live: {
			playing: "На живо",
			seekToEdge: "Към потока на живо",
			badge: "На живо"
		},
		cast: {
			start: "Стартиране на предаване",
			stop: "Спиране на предаването",
			connecting: "Свързване"
		},
		airplay: {
			start: "Стартиране на AirPlay",
			stop: "Спиране на AirPlay"
		},
		slider: { seek: "Превъртане" },
		time: {
			current: "Текущо време",
			duration: "Продължителност",
			remaining: "Оставащо време",
			elapsedSuffix: "{duration} изминало време",
			durationSuffix: "Продължителност {duration}",
			remainingSuffix: "Остават {duration}",
			showElapsed: "Показване на изминалото време, {duration}.",
			showDuration: "Показване на продължителността, {duration}.",
			showRemaining: "Показване на оставащото време, {duration}.",
			toggleElapsed: "Превключване между изминалото и оставащото време.",
			toggleDuration: "Превключване между продължителността и оставащото време.",
			position: "{current} от {duration}",
			unknown: "Медията не е заредена, времето е неизвестно."
		},
		playback: { rate: "Скорост на възпроизвеждане {rate}" },
		volume: {
			mutedValue: "{percent}, без звук",
			muted: "Без звук",
			label: "Сила на звука",
			value: "Сила на звука {value}"
		},
		status: {
			captionsOn: "Надписите са включени",
			captionsOff: "Надписите са изключени",
			paused: "На пауза",
			playing: "Възпроизвеждане",
			fullscreen: "Цял екран",
			pip: "Картина в картина",
			exitPip: "Режимът „картина в картина“ е изключен",
			seekedTo: "Преместено на {time}"
		},
		container: { label: "Медиен плейър" },
		errors: {
			aborted: "Спряхте възпроизвеждането на медията, преди то да завърши.",
			network: "Тази медия не можа да бъде заредена поради проблем с мрежата или сървъра.",
			decode: "Тази медия не можа да бъде възпроизведена. Възможно е да е повредена или браузърът ви да не поддържа формата ѝ.",
			source: "Тази медия не можа да бъде заредена. Възможно е да не е налична или браузърът ви да не поддържа формата ѝ.",
			encrypted: "Тази медия не можа да бъде възпроизведена, защото не можа да бъде дешифрирана.",
			unplayable: "Този медиен файл не се поддържа от плейъра.",
			title: "Нещо се обърка.",
			unexpected: "Възникна неочаквана грешка."
		},
		common: {
			empty: "",
			ok: "OK"
		},
		menu: {
			settings: "Настройки",
			quality: "Качество",
			audio: "Аудио",
			default: "По подразбиране",
			speed: "Скорост",
			captions: "Надписи",
			playbackRate: "Скорост на възпроизвеждане",
			back: "Назад",
			off: "Изкл.",
			auto: "Авто",
			autoWithLabel: "Авто ({label})",
			subtitles: "Субтитри"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/bn.js
var bn_exports = /* @__PURE__ */ __exportAll({ default: () => bn_default });
var bn_default;
var init_bn = __esmMin((() => {
	bn_default = {
		buttons: {
			play: "প্লে করুন",
			pause: "বিরতি",
			replay: "পুনরায় চালান",
			mute: "মিউট",
			unmute: "আনমিউট"
		},
		seek: {
			forward: "{seconds} সেকেন্ড আগান",
			backward: "{seconds} সেকেন্ড পেছান"
		},
		fullscreen: {
			enter: "ফুলস্ক্রিন",
			exit: "ফুলস্ক্রিন বন্ধ করুন"
		},
		captions: {
			enable: "ক্যাপশন",
			disable: "ক্যাপশন বন্ধ করুন"
		},
		pip: {
			enter: "পিকচার-ইন-পিকচার",
			exit: "পিকচার-ইন-পিকচার বন্ধ করুন"
		},
		live: {
			playing: "লাইভ চলছে",
			seekToEdge: "লাইভে যান",
			badge: "লাইভ"
		},
		cast: {
			start: "কাস্টিং শুরু করুন",
			stop: "কাস্টিং বন্ধ করুন",
			connecting: "সংযুক্ত হচ্ছে"
		},
		airplay: {
			start: "AirPlay শুরু করুন",
			stop: "AirPlay বন্ধ করুন"
		},
		slider: { seek: "পজিশন পরিবর্তন" },
		time: {
			current: "বর্তমান সময়",
			duration: "মোট সময়",
			remaining: "অবশিষ্ট সময়",
			elapsedSuffix: "{duration} অতিক্রান্ত সময়",
			durationSuffix: "{duration} মোট সময়",
			remainingSuffix: "বাকি {duration}",
			showElapsed: "অতিক্রান্ত সময় দেখান, {duration}.",
			showDuration: "মোট সময় দেখান, {duration}.",
			showRemaining: "বাকি সময় দেখান, {duration}.",
			toggleElapsed: "অতিক্রান্ত সময় ও বাকি সময়ের মধ্যে টগল করুন।",
			toggleDuration: "মোট সময় ও বাকি সময়ের মধ্যে টগল করুন।",
			position: "{duration} এর মধ্যে {current}",
			unknown: "মিডিয়া লোড হয়নি, সময় অজানা।"
		},
		playback: { rate: "প্লেব্যাক রেট {rate}" },
		volume: {
			mutedValue: "{percent}, নিঃশব্দ",
			muted: "নিঃশব্দ",
			label: "ভলিউম",
			value: "ভলিউম {value}"
		},
		status: {
			captionsOn: "ক্যাপশন চালু",
			captionsOff: "ক্যাপশন বন্ধ",
			paused: "বিরতি",
			playing: "চলছে",
			fullscreen: "ফুলস্ক্রিন",
			pip: "পিকচার-ইন-পিকচার",
			exitPip: "পিকচার-ইন-পিকচার বন্ধ করুন",
			seekedTo: "{time}-এ যাওয়া হয়েছে"
		},
		container: { label: "মিডিয়া প্লেয়ার" },
		errors: {
			aborted: "আপনি মিডিয়া প্লেব্যাক বাতিল করেছেন",
			network: "নেটওয়ার্ক ত্রুটির কারণে মিডিয়া ডাউনলোড আংশিকভাবে ব্যর্থ হয়েছে।",
			decode: "কোনো সমস্যার কারণে অথবা আপনার ব্রাউজার সাপোর্ট না করায় মিডিয়া প্লেব্যাক বাতিল করা হয়েছে।",
			source: "সার্ভার বা নেটওয়ার্কের সমস্যা অথবা ফাইল ফরম্যাট সাপোর্ট না করায় মিডিয়া লোড করা যায়নি।",
			encrypted: "মিডিয়াটি এনক্রিপ্ট করা, যা ডিক্রিপ্ট করা সম্ভব নয়।",
			unplayable: "এই মিডিয়াটি প্লেয়ারে সাপোর্ট করছে না।",
			title: "কিছু একটা ভুল হয়েছে।",
			unexpected: "একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।"
		},
		common: {
			empty: "",
			ok: "ঠিক আছে"
		},
		menu: {
			settings: "সেটিংস",
			quality: "কোয়ালিটি",
			audio: "অডিও",
			default: "ডিফল্ট",
			speed: "গতি",
			captions: "ক্যাপশন",
			playbackRate: "প্লেব্যাক গতি",
			back: "পেছনে",
			off: "বন্ধ",
			auto: "স্বয়ংক্রিয়",
			autoWithLabel: "স্বয়ংক্রিয় ({label})",
			subtitles: "সাবটাইটেল"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ca.js
var ca_exports = /* @__PURE__ */ __exportAll({ default: () => ca_default });
var ca_default;
var init_ca = __esmMin((() => {
	ca_default = {
		buttons: {
			play: "Reprodueix",
			pause: "Pausa",
			replay: "Repeteix",
			mute: "Silencia",
			unmute: "Activa el so"
		},
		seek: {
			forward: "Salta endavant {seconds} segons",
			backward: "Salta enrere {seconds} segons"
		},
		fullscreen: {
			enter: "Pantalla completa",
			exit: "Surt de pantalla completa"
		},
		captions: {
			enable: "Activa els subtítols",
			disable: "Desactiva els subtítols"
		},
		pip: {
			enter: "Imatge en imatge",
			exit: "Surt de la imatge en imatge"
		},
		live: {
			playing: "Reproducció en directe",
			seekToEdge: "Vés al directe",
			badge: "En directe"
		},
		cast: {
			start: "Comença a emetre",
			stop: "Atura l'emissió",
			connecting: "S'està connectant"
		},
		airplay: {
			start: "Inicia AirPlay",
			stop: "Atura AirPlay"
		},
		slider: { seek: "Desplaçament" },
		time: {
			current: "Temps actual",
			duration: "Durada",
			remaining: "Temps restant",
			elapsedSuffix: "{duration} de temps transcorregut",
			durationSuffix: "{duration} de durada",
			remainingSuffix: "Queden {duration}",
			showElapsed: "Mostra el temps transcorregut, {duration}.",
			showDuration: "Mostra la durada, {duration}.",
			showRemaining: "Mostra el temps restant, {duration}.",
			toggleElapsed: "Alterna entre el temps transcorregut i el temps restant.",
			toggleDuration: "Alterna entre la durada i el temps restant.",
			position: "{current} de {duration}",
			unknown: "Contingut multimèdia no carregat, temps desconegut."
		},
		playback: { rate: "Velocitat de reproducció {rate}" },
		volume: {
			mutedValue: "{percent}, silenciat",
			muted: "Silenciat",
			label: "Volum",
			value: "Volum {value}"
		},
		status: {
			captionsOn: "Subtítols activats",
			captionsOff: "Subtítols desactivats",
			paused: "En pausa",
			playing: "S'està reproduint",
			fullscreen: "Pantalla completa",
			pip: "Imatge en imatge",
			exitPip: "Surt de la imatge en imatge",
			seekedTo: "S'ha saltat a {time}"
		},
		container: { label: "Reproductor multimèdia" },
		errors: {
			aborted: "Heu aturat la reproducció del contingut multimèdia abans que acabés.",
			network: "No s'ha pogut carregar aquest contingut multimèdia a causa d'un problema de xarxa o del servidor.",
			decode: "No s'ha pogut reproduir aquest contingut multimèdia. Pot ser que estigui malmès o que el navegador no n'admeti el format.",
			source: "No s'ha pogut carregar aquest contingut multimèdia. Pot ser que no estigui disponible o que el navegador no n'admeti el format.",
			encrypted: "No s'ha pogut reproduir aquest contingut multimèdia perquè no s'ha pogut desxifrar.",
			unplayable: "El reproductor no admet aquest contingut multimèdia.",
			title: "Alguna cosa ha anat malament.",
			unexpected: "S'ha produït un error inesperat."
		},
		common: {
			empty: "",
			ok: "Tanca"
		},
		menu: {
			settings: "Configuració",
			quality: "Qualitat",
			audio: "Àudio",
			default: "Predeterminat",
			speed: "Velocitat",
			captions: "Subtítols",
			playbackRate: "Velocitat de reproducció",
			back: "Enrere",
			off: "Desactivat",
			auto: "Automàtic",
			autoWithLabel: "Automàtic ({label})",
			subtitles: "Subtítols"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/cs.js
var cs_exports = /* @__PURE__ */ __exportAll({ default: () => cs_default });
var cs_default;
var init_cs = __esmMin((() => {
	cs_default = {
		buttons: {
			play: "Přehrát",
			pause: "Pozastavit",
			replay: "Přehrát znovu",
			mute: "Ztlumit",
			unmute: "Zrušit ztlumení"
		},
		seek: {
			forward: "Posunout vpřed o {seconds} s",
			backward: "Posunout zpět o {seconds} s"
		},
		fullscreen: {
			enter: "Celá obrazovka",
			exit: "Ukončit celou obrazovku"
		},
		captions: {
			enable: "Zapnout titulky",
			disable: "Vypnout titulky"
		},
		pip: {
			enter: "Obraz v obraze",
			exit: "Ukončit obraz v obraze"
		},
		live: {
			playing: "Přehrává se živě",
			seekToEdge: "Přejít na živé vysílání",
			badge: "Živě"
		},
		cast: {
			start: "Spustit odesílání",
			stop: "Ukončit odesílání",
			connecting: "Připojování"
		},
		airplay: {
			start: "Spustit AirPlay",
			stop: "Zastavit AirPlay"
		},
		slider: { seek: "Posun" },
		time: {
			current: "Aktuální čas",
			duration: "Doba trvání",
			remaining: "Zbývající čas",
			elapsedSuffix: "{duration} uplynulého času",
			durationSuffix: "{duration} doby trvání",
			remainingSuffix: "Zbývá {duration}",
			showElapsed: "Zobrazit uplynulý čas, {duration}.",
			showDuration: "Zobrazit dobu trvání, {duration}.",
			showRemaining: "Zobrazit zbývající čas, {duration}.",
			toggleElapsed: "Přepínání mezi uplynulým a zbývajícím časem.",
			toggleDuration: "Přepínání mezi dobou trvání a zbývajícím časem.",
			position: "{current} / {duration}",
			unknown: "Médium se nenačetlo, čas není známý."
		},
		playback: { rate: "Rychlost přehrávání {rate}" },
		volume: {
			mutedValue: "{percent}, ztlumeno",
			muted: "Ztlumeno",
			label: "Hlasitost",
			value: "Hlasitost {value}"
		},
		status: {
			captionsOn: "Titulky zapnuty",
			captionsOff: "Titulky vypnuty",
			paused: "Pozastaveno",
			playing: "Přehrávání",
			fullscreen: "Celá obrazovka",
			pip: "Obraz v obraze",
			exitPip: "Obraz v obraze vypnut",
			seekedTo: "Přesunuto na {time}"
		},
		container: { label: "Přehrávač médií" },
		errors: {
			aborted: "Zastavili jste přehrávání média před jeho dokončením.",
			network: "Toto médium se nepodařilo načíst kvůli potížím se sítí nebo serverem.",
			decode: "Toto médium se nepodařilo přehrát. Může být poškozené nebo váš prohlížeč nemusí podporovat jeho formát.",
			source: "Toto médium se nepodařilo načíst. Může být nedostupné nebo váš prohlížeč nemusí podporovat jeho formát.",
			encrypted: "Toto médium se nepodařilo přehrát, protože se jej nepodařilo dešifrovat.",
			unplayable: "Toto médium přehrávač nepodporuje.",
			title: "Něco se pokazilo.",
			unexpected: "Došlo k neočekávané chybě."
		},
		common: {
			empty: "",
			ok: "Zavřít"
		},
		menu: {
			settings: "Nastavení",
			quality: "Kvalita",
			audio: "Zvuk",
			default: "Výchozí",
			speed: "Rychlost",
			captions: "Titulky",
			playbackRate: "Rychlost přehrávání",
			back: "Zpět",
			off: "Vypnuto",
			auto: "Automaticky",
			autoWithLabel: "Automaticky ({label})",
			subtitles: "Titulky"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/cy.js
var cy_exports = /* @__PURE__ */ __exportAll({ default: () => cy_default });
var cy_default;
var init_cy = __esmMin((() => {
	cy_default = {
		buttons: {
			play: "Chwarae",
			pause: "Oedi",
			replay: "Ailchwarae",
			mute: "Tewi",
			unmute: "Dad-dewi"
		},
		seek: {
			forward: "Neidio ymlaen {seconds} eiliad",
			backward: "Neidio yn ôl {seconds} eiliad"
		},
		fullscreen: {
			enter: "Sgrin lawn",
			exit: "Gadael sgrin lawn"
		},
		captions: {
			enable: "Galluogi capsiynau",
			disable: "Analluogi capsiynau"
		},
		pip: {
			enter: "Llun mewn llun",
			exit: "Gadael llun mewn llun"
		},
		live: {
			playing: "Yn chwarae’n fyw",
			seekToEdge: "Mynd i’r darllediad byw",
			badge: "Yn fyw"
		},
		cast: {
			start: "Dechrau darlledu i’r sgrin",
			stop: "Stopio darlledu i’r sgrin",
			connecting: "Cysylltu"
		},
		airplay: {
			start: "Cychwyn AirPlay",
			stop: "Stopio AirPlay"
		},
		slider: { seek: "Safle" },
		time: {
			current: "Amser cyfredol",
			duration: "Hyd",
			remaining: "Amser ar ôl",
			elapsedSuffix: "{duration} wedi mynd heibio",
			durationSuffix: "{duration} o hyd",
			remainingSuffix: "{duration} yn weddill",
			showElapsed: "Dangos yr amser a aeth heibio, {duration}.",
			showDuration: "Dangos hyd, {duration}.",
			showRemaining: "Dangos yr amser sy'n weddill, {duration}.",
			toggleElapsed: "Toglo rhwng yr amser a aeth heibio a'r amser sy'n weddill.",
			toggleDuration: "Toglo rhwng yr hyd a'r amser sy'n weddill.",
			position: "{current} o {duration}",
			unknown: "Nid yw'r cyfrwng wedi llwytho, amser anhysbys."
		},
		playback: { rate: "Cyfradd chwarae {rate}" },
		volume: {
			mutedValue: "{percent}, wedi tewi",
			muted: "Wedi tewi",
			label: "Lefel sain",
			value: "Lefel sain {value}"
		},
		status: {
			captionsOn: "Capsiynau ymlaen",
			captionsOff: "Capsiynau i ffwrdd",
			paused: "Wedi oedi",
			playing: "Yn chwarae",
			fullscreen: "Sgrin lawn",
			pip: "Llun mewn llun",
			exitPip: "Gadael llun mewn llun",
			seekedTo: "Wedi symud i {time}"
		},
		container: { label: "Chwaraewr cyfryngau" },
		errors: {
			aborted: "Gwnaethoch atal chwarae'r cyfrwng cyn iddo orffen.",
			network: "Nid oedd modd llwytho'r cyfrwng hwn oherwydd problem rhwydwaith neu weinydd.",
			decode: "Nid oedd modd chwarae'r cyfrwng hwn. Efallai ei fod wedi'i lygru, neu efallai nad yw'ch porwr yn cefnogi ei fformat.",
			source: "Nid oedd modd llwytho'r cyfrwng hwn. Efallai nad yw ar gael, neu efallai nad yw'ch porwr yn cefnogi ei fformat.",
			encrypted: "Nid oedd modd chwarae'r cyfrwng hwn am nad oedd modd ei ddadgryptio.",
			unplayable: "Nid yw'r chwaraewr yn cefnogi'r cyfrwng hwn.",
			title: "Aeth rhywbeth o'i le.",
			unexpected: "Digwyddodd gwall annisgwyl."
		},
		common: {
			empty: "",
			ok: "Cau"
		},
		menu: {
			settings: "Gosodiadau",
			quality: "Ansawdd",
			audio: "Sain",
			default: "Rhagosodedig",
			speed: "Cyflymder",
			captions: "Capsiynau",
			playbackRate: "Cyfradd chwarae",
			back: "Yn ôl",
			off: "I ffwrdd",
			auto: "Awtomatig",
			autoWithLabel: "Awtomatig ({label})",
			subtitles: "Isdeitlau"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/da.js
var da_exports = /* @__PURE__ */ __exportAll({ default: () => da_default });
var da_default;
var init_da = __esmMin((() => {
	da_default = {
		buttons: {
			play: "Afspil",
			pause: "Pause",
			replay: "Afspil igen",
			mute: "Slå lyden fra",
			unmute: "Slå lyden til"
		},
		seek: {
			forward: "Spring {seconds} sekunder frem",
			backward: "Spring {seconds} sekunder tilbage"
		},
		fullscreen: {
			enter: "Fuld skærm",
			exit: "Afslut fuld skærm"
		},
		captions: {
			enable: "Aktivér undertekster",
			disable: "Deaktivér undertekster"
		},
		pip: {
			enter: "Billede i billede",
			exit: "Afslut billede i billede"
		},
		live: {
			playing: "Afspiller live",
			seekToEdge: "Gå til live",
			badge: "Live"
		},
		cast: {
			start: "Start cast",
			stop: "Stop cast",
			connecting: "Forbinder"
		},
		airplay: {
			start: "Start AirPlay",
			stop: "Stop AirPlay"
		},
		slider: { seek: "Spol" },
		time: {
			current: "Aktuel tid",
			duration: "Varighed",
			remaining: "Resterende tid",
			elapsedSuffix: "{duration} forløbet tid",
			durationSuffix: "{duration} varighed",
			remainingSuffix: "{duration} tilbage",
			showElapsed: "Vis forløbet tid, {duration}.",
			showDuration: "Vis varighed, {duration}.",
			showRemaining: "Vis resterende tid, {duration}.",
			toggleElapsed: "Skift mellem forløbet og resterende tid.",
			toggleDuration: "Skift mellem varighed og resterende tid.",
			position: "{current} af {duration}",
			unknown: "Mediet er ikke indlæst, tidspunktet er ukendt."
		},
		playback: { rate: "Afspilningshastighed {rate}" },
		volume: {
			mutedValue: "{percent}, lydløs",
			muted: "Lydløs",
			label: "Lydstyrke",
			value: "Lydstyrke {value}"
		},
		status: {
			captionsOn: "Undertekster til",
			captionsOff: "Undertekster fra",
			paused: "Pauseret",
			playing: "Afspiller",
			fullscreen: "Fuld skærm",
			pip: "Billede i billede",
			exitPip: "Billede i billede fra",
			seekedTo: "Sprunget til {time}"
		},
		container: { label: "Medieafspiller" },
		errors: {
			aborted: "Du stoppede afspilningen af mediet, før den var færdig.",
			network: "Mediet kunne ikke indlæses på grund af et netværks- eller serverproblem.",
			decode: "Mediet kunne ikke afspilles. Det er muligvis beskadiget, eller din browser understøtter ikke formatet.",
			source: "Mediet kunne ikke indlæses. Det er muligvis ikke tilgængeligt, eller din browser understøtter ikke formatet.",
			encrypted: "Mediet kunne ikke afspilles, fordi det ikke kunne dekrypteres.",
			unplayable: "Denne mediefil understøttes ikke af afspilleren.",
			title: "Noget gik galt.",
			unexpected: "Der opstod en uventet fejl."
		},
		common: {
			empty: "",
			ok: "OK"
		},
		menu: {
			settings: "Indstillinger",
			quality: "Kvalitet",
			audio: "Lyd",
			default: "Standard",
			speed: "Hastighed",
			captions: "Undertekster",
			playbackRate: "Afspilningshastighed",
			back: "Tilbage",
			off: "Fra",
			auto: "Automatisk",
			autoWithLabel: "Automatisk ({label})",
			subtitles: "Undertekster"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/de.js
var de_exports = /* @__PURE__ */ __exportAll({ default: () => de_default });
var de_default;
var init_de = __esmMin((() => {
	de_default = {
		buttons: {
			play: "Wiedergabe",
			pause: "Pause",
			replay: "Erneut abspielen",
			mute: "Stummschalten",
			unmute: "Ton einschalten"
		},
		seek: {
			forward: "{seconds} Sekunden vorspulen",
			backward: "{seconds} Sekunden zurückspulen"
		},
		fullscreen: {
			enter: "Vollbild",
			exit: "Vollbild beenden"
		},
		captions: {
			enable: "Untertitel einschalten",
			disable: "Untertitel ausschalten"
		},
		pip: {
			enter: "Bild-im-Bild-Modus starten",
			exit: "Bild-im-Bild-Modus beenden"
		},
		live: {
			playing: "Wird live wiedergegeben",
			seekToEdge: "Zum Livestream springen",
			badge: "Live"
		},
		cast: {
			start: "Übertragung starten",
			stop: "Übertragung beenden",
			connecting: "Wird verbunden"
		},
		airplay: {
			start: "AirPlay starten",
			stop: "AirPlay beenden"
		},
		slider: { seek: "Wiedergabeposition" },
		time: {
			current: "Aktueller Zeitpunkt",
			duration: "Dauer",
			remaining: "Verbleibende Zeit",
			elapsedSuffix: "{duration} verstrichen",
			durationSuffix: "{duration} Dauer",
			remainingSuffix: "noch {duration}",
			showElapsed: "Verstrichene Zeit anzeigen, {duration}.",
			showDuration: "Dauer anzeigen, {duration}.",
			showRemaining: "Verbleibende Zeit anzeigen, {duration}.",
			toggleElapsed: "Zwischen verstrichener und verbleibender Zeit wechseln.",
			toggleDuration: "Zwischen Dauer und verbleibender Zeit wechseln.",
			position: "{current} von {duration}",
			unknown: "Medium nicht geladen, Zeit unbekannt."
		},
		playback: { rate: "Wiedergabegeschwindigkeit {rate}" },
		volume: {
			mutedValue: "{percent}, stummgeschaltet",
			muted: "Stummgeschaltet",
			label: "Lautstärke",
			value: "Lautstärke {value}"
		},
		status: {
			captionsOn: "Untertitel ein",
			captionsOff: "Untertitel aus",
			paused: "Pausiert",
			playing: "Wird wiedergegeben",
			fullscreen: "Vollbild",
			pip: "Bild-im-Bild",
			exitPip: "Bild-im-Bild beendet",
			seekedTo: "Zu {time} gesprungen"
		},
		container: { label: "Mediaplayer" },
		errors: {
			aborted: "Sie haben die Medienwiedergabe abgebrochen, bevor sie beendet war.",
			network: "Dieses Medium konnte aufgrund eines Netzwerk- oder Serverproblems nicht geladen werden.",
			decode: "Dieses Medium konnte nicht wiedergegeben werden. Es ist möglicherweise beschädigt oder Ihr Browser unterstützt das Format nicht.",
			source: "Dieses Medium konnte nicht geladen werden. Es ist möglicherweise nicht verfügbar oder Ihr Browser unterstützt das Format nicht.",
			encrypted: "Dieses Medium konnte nicht wiedergegeben werden, da es nicht entschlüsselt werden konnte.",
			unplayable: "Dieses Medium wird vom Player nicht unterstützt.",
			title: "Etwas ist schiefgelaufen.",
			unexpected: "Ein unerwarteter Fehler ist aufgetreten."
		},
		common: {
			empty: "",
			ok: "Schließen"
		},
		menu: {
			settings: "Einstellungen",
			quality: "Qualität",
			audio: "Audiospur",
			default: "Standard",
			speed: "Geschwindigkeit",
			captions: "Untertitel",
			playbackRate: "Wiedergabegeschwindigkeit",
			back: "Zurück",
			off: "Aus",
			auto: "Automatisch",
			autoWithLabel: "Automatisch ({label})",
			subtitles: "Untertitel"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/el.js
var el_exports = /* @__PURE__ */ __exportAll({ default: () => el_default });
var el_default;
var init_el = __esmMin((() => {
	el_default = {
		buttons: {
			play: "Αναπαραγωγή",
			pause: "Παύση",
			replay: "Επανάληψη",
			mute: "Σίγαση",
			unmute: "Κατάργηση σίγασης"
		},
		seek: {
			forward: "Μετάβαση μπροστά κατά {seconds} δευτερόλεπτα",
			backward: "Μετάβαση πίσω κατά {seconds} δευτερόλεπτα"
		},
		fullscreen: {
			enter: "Πλήρης οθόνη",
			exit: "Έξοδος από πλήρη οθόνη"
		},
		captions: {
			enable: "Ενεργοποίηση υποτίτλων",
			disable: "Απενεργοποίηση υποτίτλων"
		},
		pip: {
			enter: "Εικόνα μέσα σε εικόνα",
			exit: "Έξοδος από εικόνα μέσα σε εικόνα"
		},
		live: {
			playing: "Αναπαραγωγή ζωντανά",
			seekToEdge: "Μετάβαση στη ζωντανή μετάδοση",
			badge: "Ζωντανά"
		},
		cast: {
			start: "Έναρξη μετάδοσης",
			stop: "Διακοπή μετάδοσης",
			connecting: "Σύνδεση"
		},
		airplay: {
			start: "Έναρξη AirPlay",
			stop: "Διακοπή AirPlay"
		},
		slider: { seek: "Μετακίνηση" },
		time: {
			current: "Τρέχων χρόνος",
			duration: "Διάρκεια",
			remaining: "Υπολειπόμενος χρόνος",
			elapsedSuffix: "Πέρασαν {duration}",
			durationSuffix: "Διάρκεια {duration}",
			remainingSuffix: "Απομένουν {duration}",
			showElapsed: "Εμφάνιση χρόνου που πέρασε, {duration}.",
			showDuration: "Εμφάνιση διάρκειας, {duration}.",
			showRemaining: "Εμφάνιση υπολειπόμενου χρόνου, {duration}.",
			toggleElapsed: "Εναλλαγή μεταξύ χρόνου που πέρασε και χρόνου που απομένει.",
			toggleDuration: "Εναλλαγή μεταξύ διάρκειας και χρόνου που απομένει.",
			position: "{current} από {duration}",
			unknown: "Το μέσο δεν φορτώθηκε, άγνωστη διάρκεια."
		},
		playback: { rate: "Ρυθμός αναπαραγωγής {rate}" },
		volume: {
			mutedValue: "{percent}, σε σίγαση",
			muted: "Σε σίγαση",
			label: "Ένταση",
			value: "Ένταση {value}"
		},
		status: {
			captionsOn: "Υπότιτλοι ενεργοί",
			captionsOff: "Υπότιτλοι ανενεργοί",
			paused: "Σε παύση",
			playing: "Σε αναπαραγωγή",
			fullscreen: "Πλήρης οθόνη",
			pip: "Εικόνα μέσα σε εικόνα",
			exitPip: "Έξοδος από εικόνα μέσα σε εικόνα",
			seekedTo: "Μετάβαση σε {time}"
		},
		container: { label: "Πρόγραμμα αναπαραγωγής πολυμέσων" },
		errors: {
			aborted: "Διακόψατε την αναπαραγωγή του μέσου πριν ολοκληρωθεί.",
			network: "Δεν ήταν δυνατή η φόρτωση αυτού του μέσου λόγω προβλήματος δικτύου ή διακομιστή.",
			decode: "Δεν ήταν δυνατή η αναπαραγωγή αυτού του μέσου. Μπορεί να είναι κατεστραμμένο ή το πρόγραμμα περιήγησής σας να μην υποστηρίζει τη μορφή του.",
			source: "Δεν ήταν δυνατή η φόρτωση αυτού του μέσου. Μπορεί να μην είναι διαθέσιμο ή το πρόγραμμα περιήγησής σας να μην υποστηρίζει τη μορφή του.",
			encrypted: "Δεν ήταν δυνατή η αναπαραγωγή αυτού του μέσου, επειδή δεν μπόρεσε να αποκρυπτογραφηθεί.",
			unplayable: "Αυτό το μέσο δεν υποστηρίζεται από το πρόγραμμα αναπαραγωγής.",
			title: "Κάτι πήγε στραβά.",
			unexpected: "Παρουσιάστηκε μη αναμενόμενο σφάλμα."
		},
		common: {
			empty: "",
			ok: "Κλείσιμο"
		},
		menu: {
			settings: "Ρυθμίσεις",
			quality: "Ποιότητα",
			audio: "Ήχος",
			default: "Προεπιλογή",
			speed: "Ταχύτητα",
			captions: "Λεζάντες",
			playbackRate: "Ρυθμός αναπαραγωγής",
			back: "Πίσω",
			off: "Απενεργοποίηση",
			auto: "Αυτόματα",
			autoWithLabel: "Αυτόματα ({label})",
			subtitles: "Υπότιτλοι"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/es.js
var es_exports = /* @__PURE__ */ __exportAll({ default: () => es_default });
var es_default;
var init_es = __esmMin((() => {
	es_default = {
		buttons: {
			play: "Reproducir",
			pause: "Pausar",
			replay: "Volver a reproducir",
			mute: "Silenciar",
			unmute: "Activar el sonido"
		},
		seek: {
			forward: "Avanzar {seconds} segundos",
			backward: "Retroceder {seconds} segundos"
		},
		fullscreen: {
			enter: "Pantalla completa",
			exit: "Salir de pantalla completa"
		},
		captions: {
			enable: "Activar subtítulos",
			disable: "Desactivar subtítulos"
		},
		pip: {
			enter: "Imagen en imagen",
			exit: "Salir de imagen en imagen"
		},
		live: {
			playing: "Reproduciendo en directo",
			seekToEdge: "Ir al directo",
			badge: "Directo"
		},
		cast: {
			start: "Iniciar transmisión",
			stop: "Detener transmisión",
			connecting: "Conectando"
		},
		airplay: {
			start: "Iniciar AirPlay",
			stop: "Detener AirPlay"
		},
		slider: { seek: "Buscar" },
		time: {
			current: "Tiempo reproducido",
			duration: "Duración total",
			remaining: "Tiempo restante",
			elapsedSuffix: "{duration} de tiempo transcurrido",
			durationSuffix: "{duration} de duración",
			remainingSuffix: "Quedan {duration}",
			showElapsed: "Mostrar tiempo transcurrido, {duration}.",
			showDuration: "Mostrar duración, {duration}.",
			showRemaining: "Mostrar tiempo restante, {duration}.",
			toggleElapsed: "Alternar entre el tiempo transcurrido y el tiempo restante.",
			toggleDuration: "Alternar entre la duración y el tiempo restante.",
			position: "{current} de {duration}",
			unknown: "Contenido multimedia no cargado, tiempo desconocido."
		},
		playback: { rate: "Velocidad de reproducción {rate}" },
		volume: {
			mutedValue: "{percent}, silenciado",
			muted: "Silenciado",
			label: "Volumen",
			value: "Volumen {value}"
		},
		status: {
			captionsOn: "Subtítulos activados",
			captionsOff: "Subtítulos desactivados",
			paused: "En pausa",
			playing: "Reproduciendo",
			fullscreen: "Pantalla completa",
			pip: "Imagen en imagen",
			exitPip: "Salir de imagen en imagen",
			seekedTo: "Se ha saltado a {time}"
		},
		container: { label: "Reproductor multimedia" },
		errors: {
			aborted: "Has detenido la reproducción del contenido multimedia antes de que terminara.",
			network: "No se ha podido cargar este contenido multimedia debido a un problema de red o del servidor.",
			decode: "No se ha podido reproducir este contenido multimedia. Puede que esté dañado o que tu navegador no admita su formato.",
			source: "No se ha podido cargar este contenido multimedia. Puede que no esté disponible o que tu navegador no admita su formato.",
			encrypted: "No se ha podido reproducir este contenido multimedia porque no se ha podido descifrar.",
			unplayable: "El reproductor no admite este contenido multimedia.",
			title: "Algo ha salido mal.",
			unexpected: "Se ha producido un error inesperado."
		},
		common: {
			empty: "",
			ok: "Cerrar"
		},
		menu: {
			settings: "Configuración",
			quality: "Calidad",
			audio: "Audio",
			default: "Predeterminado",
			speed: "Velocidad",
			captions: "Subtítulos",
			playbackRate: "Velocidad de reproducción",
			back: "Atrás",
			off: "Desactivado",
			auto: "Automático",
			autoWithLabel: "Automático ({label})",
			subtitles: "Subtítulos"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/et.js
var et_exports = /* @__PURE__ */ __exportAll({ default: () => et_default });
var et_default;
var init_et = __esmMin((() => {
	et_default = {
		buttons: {
			play: "Esita",
			pause: "Peata",
			replay: "Esita uuesti",
			mute: "Vaigista",
			unmute: "Lõpeta vaigistus"
		},
		seek: {
			forward: "Keri edasi {seconds} sek.",
			backward: "Keri tagasi {seconds} sek."
		},
		fullscreen: {
			enter: "Täisekraan",
			exit: "Välju täisekraanist"
		},
		captions: {
			enable: "Lülita subtiitrid sisse",
			disable: "Lülita subtiitrid välja"
		},
		pip: {
			enter: "Pilt pildis",
			exit: "Välju režiimist Pilt pildis"
		},
		live: {
			playing: "Esitatakse reaalajas",
			seekToEdge: "Mine otseülekande juurde",
			badge: "Otse"
		},
		cast: {
			start: "Alusta ülekandmist",
			stop: "Lõpeta ülekandmine",
			connecting: "Ühendumine"
		},
		airplay: {
			start: "Käivita AirPlay",
			stop: "Peata AirPlay"
		},
		slider: { seek: "Kerimine" },
		time: {
			current: "Praegune aeg",
			duration: "Kestus",
			remaining: "Järelejäänud aeg",
			elapsedSuffix: "{duration} möödunud aega",
			durationSuffix: "{duration} kestust",
			remainingSuffix: "Jäänud {duration}",
			showElapsed: "Kuva möödunud aeg, {duration}.",
			showDuration: "Kuva kestus, {duration}.",
			showRemaining: "Kuva järelejäänud aeg, {duration}.",
			toggleElapsed: "Lülita möödunud ja järelejäänud aja vahel.",
			toggleDuration: "Lülita kestuse ja järelejäänud aja vahel.",
			position: "{current} / {duration}",
			unknown: "Meedium pole laaditud, aeg teadmata."
		},
		playback: { rate: "Taasesituse kiirus {rate}" },
		volume: {
			mutedValue: "{percent}, vaigistatud",
			muted: "Vaigistatud",
			label: "Helitugevus",
			value: "Helitugevus {value}"
		},
		status: {
			captionsOn: "Subtiitrid sees",
			captionsOff: "Subtiitrid väljas",
			paused: "Peatatud",
			playing: "Esitatakse",
			fullscreen: "Täisekraan",
			pip: "Pilt pildis",
			exitPip: "Pilt pildis välja lülitatud",
			seekedTo: "Keritud: {time}"
		},
		container: { label: "Meediumipleier" },
		errors: {
			aborted: "Katkestasite meediumi taasesituse enne selle lõppu.",
			network: "Seda meediumi ei õnnestunud laadida võrgu- või serveritõrke tõttu.",
			decode: "Seda meediumi ei õnnestunud esitada. See võib olla rikutud või ei toeta teie brauser selle vormingut.",
			source: "Seda meediumi ei õnnestunud laadida. See võib olla kättesaamatu või ei toeta teie brauser selle vormingut.",
			encrypted: "Seda meediumi ei õnnestunud esitada, sest seda ei saanud dekrüpteerida.",
			unplayable: "Pleier ei toeta seda meediumi.",
			title: "Midagi läks valesti.",
			unexpected: "Ilmnes ootamatu viga."
		},
		common: {
			empty: "",
			ok: "Sule"
		},
		menu: {
			settings: "Seaded",
			quality: "Kvaliteet",
			audio: "Heliriba",
			default: "Vaikimisi",
			speed: "Kiirus",
			captions: "Subtiitrid",
			playbackRate: "Taasesituse kiirus",
			back: "Tagasi",
			off: "Väljas",
			auto: "Automaatne",
			autoWithLabel: "Automaatne ({label})",
			subtitles: "Subtiitrid"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/eu.js
var eu_exports = /* @__PURE__ */ __exportAll({ default: () => eu_default });
var eu_default;
var init_eu = __esmMin((() => {
	eu_default = {
		buttons: {
			play: "Hasi",
			pause: "Gelditu",
			replay: "Berriz hasi",
			mute: "Ixildu",
			unmute: "Soinua jarri"
		},
		seek: {
			forward: "Joan aurrera {seconds} segundo",
			backward: "Joan atzera {seconds} segundo"
		},
		fullscreen: {
			enter: "Pantaila osoa",
			exit: "Irten pantaila osotik"
		},
		captions: {
			enable: "Aktibatu azpitituluak",
			disable: "Desaktibatu azpitituluak"
		},
		pip: {
			enter: "Irudiz-irudi",
			exit: "Irten irudiz-irudiztik"
		},
		live: {
			playing: "Zuzenean erreproduzitzen",
			seekToEdge: "Zuzeneko ertzeraino joan",
			badge: "Zuzenean"
		},
		cast: {
			start: "Hasi emankizuna",
			stop: "Gelditu emankizuna",
			connecting: "Konektatzen"
		},
		airplay: {
			start: "Hasi AirPlay",
			stop: "Gelditu AirPlay"
		},
		slider: { seek: "Bilatu" },
		time: {
			current: "Uneko denbora",
			duration: "Iraupena",
			remaining: "Gelditzen den denbora",
			elapsedSuffix: "{duration} igarotako denbora",
			durationSuffix: "{duration} iraupena",
			remainingSuffix: "Geratzen den {duration}",
			showElapsed: "Erakutsi igarotako denbora, {duration}.",
			showDuration: "Erakutsi iraupena, {duration}.",
			showRemaining: "Erakutsi geratzen den denbora, {duration}.",
			toggleElapsed: "Txandakatu igarotako denboraren eta geratzen den denboraren artean.",
			toggleDuration: "Txandakatu iraupenaren eta geratzen den denboraren artean.",
			position: "{current} / {duration}",
			unknown: "Multimedia ez da kargatu, ordu ezezaguna."
		},
		playback: { rate: "Abiadura {rate}" },
		volume: {
			mutedValue: "{percent}, isilarazia",
			muted: "Isilarazia",
			label: "Bolumena",
			value: "Bolumena {value}"
		},
		status: {
			captionsOn: "Oharrak aktibo",
			captionsOff: "Oharrak ez aktibo",
			paused: "Geldituta",
			playing: "Erreproduzitzen",
			fullscreen: "Pantaila osoa",
			pip: "Irudiz irudi",
			exitPip: "Irten irudiz irudiztik",
			seekedTo: "{time} denborara jauzi egin da"
		},
		container: { label: "Multimedia-erreproduzitzailea" },
		errors: {
			aborted: "Bertan behera utzi duzu",
			network: "Sare errore batek deskargak huts egitea eragin du.",
			decode: "Bertan behera gelditu da fitxategia ondo ez dagoelako edo zure nabigatzailean erabili ezin diren ezaugarriak dituelako.",
			source: "Media ezin izan da kargatu, zerbitzariak edo sareak huts egin duelako edo formatu horretako media erabili ezin delako.",
			encrypted: "Media zifratuta dago eta ez ditugu beharrezko gakoak.",
			unplayable: "Erreproduzitzaileak ez du media hau onartzen.",
			title: "Zerbait gaizki joan da.",
			unexpected: "Errore bat gertatu da. Saiatu berriro."
		},
		common: {
			empty: "",
			ok: "Itxi"
		},
		menu: {
			settings: "Ezarpenak",
			quality: "Kalitatea",
			audio: "Audioa",
			default: "Lehenetsia",
			speed: "Abiadura",
			captions: "Azpitituluak",
			playbackRate: "Erreprodukzio-abiadura",
			back: "Atzera",
			off: "Desaktibatuta",
			auto: "Automatikoa",
			autoWithLabel: "Automatikoa ({label})",
			subtitles: "Azpitituluak"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/fa.js
var fa_exports = /* @__PURE__ */ __exportAll({ default: () => fa_default });
var fa_default;
var init_fa = __esmMin((() => {
	fa_default = {
		buttons: {
			play: "پخش",
			pause: "توقف موقت",
			replay: "پخش مجدد",
			mute: "بی‌صدا کردن",
			unmute: "صدادار کردن"
		},
		seek: {
			forward: "{seconds} ثانیه بعد",
			backward: "{seconds} ثانیه قبل"
		},
		fullscreen: {
			enter: "تمام‌صفحه",
			exit: "خروج از تمام‌صفحه"
		},
		captions: {
			enable: "فعال‌سازی زیرنویس",
			disable: "غیرفعال‌سازی زیرنویس"
		},
		pip: {
			enter: "تصویر در تصویر",
			exit: "خروج از حالت تصویر در تصویر"
		},
		live: {
			playing: "پخش زنده",
			seekToEdge: "رفتن به پخش زنده",
			badge: "زنده"
		},
		cast: {
			start: "شروع پخش به تلویزیون",
			stop: "توقف پخش به تلویزیون",
			connecting: "در حال اتصال"
		},
		airplay: {
			start: "شروع AirPlay",
			stop: "توقف AirPlay"
		},
		slider: { seek: "جستجو" },
		time: {
			current: "زمان فعلی",
			duration: "مدت‌زمان",
			remaining: "زمان باقی‌مانده",
			elapsedSuffix: "{duration} زمان سپری‌شده",
			durationSuffix: "{duration} مدت‌زمان",
			remainingSuffix: "{duration} باقی‌مانده",
			showElapsed: "نمایش زمان سپری‌شده، {duration}.",
			showDuration: "نمایش مدت‌زمان، {duration}.",
			showRemaining: "نمایش زمان باقی‌مانده، {duration}.",
			toggleElapsed: "تغییر بین زمان سپری‌شده و زمان باقی‌مانده.",
			toggleDuration: "تغییر بین مدت‌زمان و زمان باقی‌مانده.",
			position: "{current} از {duration}",
			unknown: "رسانه بارگذاری نشده، زمان نامشخص."
		},
		playback: { rate: "سرعت پخش {rate}" },
		volume: {
			mutedValue: "{percent}، بی‌صدا",
			muted: "بی‌صدا",
			label: "میزان صدا",
			value: "میزان صدا {value}"
		},
		status: {
			captionsOn: "زیرنویس روشن",
			captionsOff: "زیرنویس خاموش",
			paused: "متوقف شده",
			playing: "در حال پخش",
			fullscreen: "تمام‌صفحه",
			pip: "تصویر در تصویر",
			exitPip: "خروج از حالت تصویر در تصویر",
			seekedTo: "پرش به {time}"
		},
		container: { label: "پخش‌کننده رسانه" },
		errors: {
			aborted: "شما پخش رسانه را پیش از پایان آن متوقف کردید.",
			network: "این رسانه به‌دلیل مشکل شبکه یا سرور بارگذاری نشد.",
			decode: "این رسانه پخش نشد. ممکن است آسیب‌دیده باشد یا مرورگر شما از قالب آن پشتیبانی نکند.",
			source: "این رسانه بارگذاری نشد. ممکن است در دسترس نباشد یا مرورگر شما از قالب آن پشتیبانی نکند.",
			encrypted: "این رسانه پخش نشد، زیرا رمزگشایی آن ممکن نبود.",
			unplayable: "این رسانه توسط پخش‌کننده پشتیبانی نمی‌شود.",
			title: "مشکلی پیش آمد.",
			unexpected: "خطای غیرمنتظره‌ای رخ داد."
		},
		common: {
			empty: "",
			ok: "بستن"
		},
		menu: {
			settings: "تنظیمات",
			quality: "کیفیت",
			audio: "صدا",
			default: "پیش‌فرض",
			speed: "سرعت",
			captions: "زیرنویس‌ها",
			playbackRate: "سرعت پخش",
			back: "بازگشت",
			off: "خاموش",
			auto: "خودکار",
			autoWithLabel: "خودکار ({label})",
			subtitles: "زیرنویس‌ها"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/fi.js
var fi_exports = /* @__PURE__ */ __exportAll({ default: () => fi_default });
var fi_default;
var init_fi = __esmMin((() => {
	fi_default = {
		buttons: {
			play: "Toista",
			pause: "Keskeytä",
			replay: "Toista uudelleen",
			mute: "Mykistä",
			unmute: "Poista mykistys"
		},
		seek: {
			forward: "Siirry eteenpäin {seconds} sekuntia",
			backward: "Siirry taaksepäin {seconds} sekuntia"
		},
		fullscreen: {
			enter: "Siirry koko näytön tilaan",
			exit: "Poistu koko näytön tilasta"
		},
		captions: {
			enable: "Ota tekstitykset käyttöön",
			disable: "Poista tekstitykset käytöstä"
		},
		pip: {
			enter: "Siirry kuva kuvassa -tilaan",
			exit: "Poistu kuva kuvassa -tilasta"
		},
		live: {
			playing: "Toistetaan livenä",
			seekToEdge: "Siirry liveen",
			badge: "Live"
		},
		cast: {
			start: "Aloita lähetys",
			stop: "Lopeta lähetys",
			connecting: "Yhdistetään"
		},
		airplay: {
			start: "Käynnistä AirPlay",
			stop: "Lopeta AirPlay"
		},
		slider: { seek: "Kelaa" },
		time: {
			current: "Tämänhetkinen aika",
			duration: "Kokonaiskesto",
			remaining: "Jäljellä oleva aika",
			elapsedSuffix: "{duration} kulunutta aikaa",
			durationSuffix: "{duration} kesto",
			remainingSuffix: "{duration} jäljellä",
			showElapsed: "Näytä kulunut aika, {duration}.",
			showDuration: "Näytä kesto, {duration}.",
			showRemaining: "Näytä jäljellä oleva aika, {duration}.",
			toggleElapsed: "Vaihda kuluneen ja jäljellä olevan ajan välillä.",
			toggleDuration: "Vaihda keston ja jäljellä olevan ajan välillä.",
			position: "{current} / {duration}",
			unknown: "Mediaa ei ole ladattu, aika ei ole tiedossa."
		},
		playback: { rate: "Toistonopeus {rate}" },
		volume: {
			mutedValue: "{percent}, mykistetty",
			muted: "Mykistetty",
			label: "Äänenvoimakkuus",
			value: "Äänenvoimakkuus {value}"
		},
		status: {
			captionsOn: "Tekstitykset päällä",
			captionsOff: "Tekstitykset pois päältä",
			paused: "Keskeytetty",
			playing: "Toistetaan",
			fullscreen: "Koko näyttö",
			pip: "Kuva kuvassa",
			exitPip: "Kuva kuvassa -tila päättyi",
			seekedTo: "Siirrytty kohtaan {time}"
		},
		container: { label: "Mediasoitin" },
		errors: {
			aborted: "Keskeytit median toiston ennen kuin se päättyi.",
			network: "Tämän median lataaminen epäonnistui verkko- tai palvelinongelman vuoksi.",
			decode: "Tämän median toistaminen epäonnistui. Se voi olla vioittunut tai selaimesi ei tue sen muotoa.",
			source: "Tämän median lataaminen epäonnistui. Se ei ehkä ole saatavilla tai selaimesi ei tue sen muotoa.",
			encrypted: "Tämän median toistaminen epäonnistui, koska sen salausta ei voitu purkaa.",
			unplayable: "Soitin ei tue tätä mediaa.",
			title: "Jotain meni pieleen.",
			unexpected: "Tapahtui odottamaton virhe."
		},
		common: {
			empty: "",
			ok: "OK"
		},
		menu: {
			settings: "Asetukset",
			quality: "Laatu",
			audio: "Ääni",
			default: "Oletus",
			speed: "Nopeus",
			captions: "Tekstitykset",
			playbackRate: "Toistonopeus",
			back: "Takaisin",
			off: "Pois",
			auto: "Automaattinen",
			autoWithLabel: "Automaattinen ({label})",
			subtitles: "Tekstitykset"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/fr.js
var fr_exports = /* @__PURE__ */ __exportAll({ default: () => fr_default });
var fr_default;
var init_fr = __esmMin((() => {
	fr_default = {
		buttons: {
			play: "Lecture",
			pause: "Pause",
			replay: "Revoir",
			mute: "Couper le son",
			unmute: "Activer le son"
		},
		seek: {
			forward: "Avancer de {seconds} secondes",
			backward: "Reculer de {seconds} secondes"
		},
		fullscreen: {
			enter: "Plein écran",
			exit: "Quitter le plein écran"
		},
		captions: {
			enable: "Activer les sous-titres",
			disable: "Désactiver les sous-titres"
		},
		pip: {
			enter: "Image dans l’image",
			exit: "Quitter le mode image dans l’image"
		},
		live: {
			playing: "Lecture en direct",
			seekToEdge: "Aller au direct",
			badge: "En direct"
		},
		cast: {
			start: "Démarrer la diffusion",
			stop: "Arrêter la diffusion",
			connecting: "Connexion"
		},
		airplay: {
			start: "Démarrer AirPlay",
			stop: "Arrêter AirPlay"
		},
		slider: { seek: "Barre de lecture" },
		time: {
			current: "Temps actuel",
			duration: "Durée",
			remaining: "Temps restant",
			elapsedSuffix: "{duration} de temps écoulé",
			durationSuffix: "{duration} de durée",
			remainingSuffix: "Il reste {duration}",
			showElapsed: "Afficher le temps écoulé, {duration}.",
			showDuration: "Afficher la durée, {duration}.",
			showRemaining: "Afficher le temps restant, {duration}.",
			toggleElapsed: "Basculer entre le temps écoulé et le temps restant.",
			toggleDuration: "Basculer entre la durée et le temps restant.",
			position: "{current} sur {duration}",
			unknown: "Média non chargé, durée inconnue."
		},
		playback: { rate: "Vitesse de lecture {rate}" },
		volume: {
			mutedValue: "{percent}, son coupé",
			muted: "Son coupé",
			label: "Niveau de volume",
			value: "Niveau de volume {value}"
		},
		status: {
			captionsOn: "Sous-titres activés",
			captionsOff: "Sous-titres désactivés",
			paused: "En pause",
			playing: "Lecture en cours",
			fullscreen: "Plein écran",
			pip: "Image dans l’image",
			exitPip: "Quitter l’image dans l’image",
			seekedTo: "Position de lecture\xA0: {time}"
		},
		container: { label: "Lecteur multimédia" },
		errors: {
			aborted: "Vous avez interrompu la lecture du média avant la fin.",
			network: "Ce média n’a pas pu être chargé en raison d’un problème de réseau ou de serveur.",
			decode: "Ce média n’a pas pu être lu. Il est peut-être endommagé, ou votre navigateur ne prend pas en charge son format.",
			source: "Ce média n’a pas pu être chargé. Il est peut-être indisponible, ou votre navigateur ne prend pas en charge son format.",
			encrypted: "Ce média n’a pas pu être lu, car son déchiffrement a échoué.",
			unplayable: "Ce média n’est pas pris en charge par le lecteur.",
			title: "Une erreur s’est produite.",
			unexpected: "Une erreur inattendue s’est produite."
		},
		common: {
			empty: "",
			ok: "Fermer"
		},
		menu: {
			settings: "Paramètres",
			quality: "Qualité",
			audio: "Audio",
			default: "Par défaut",
			speed: "Vitesse",
			captions: "Sous-titres",
			playbackRate: "Vitesse de lecture",
			back: "Retour",
			off: "Désactivé",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Sous-titres"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/gd.js
var gd_exports = /* @__PURE__ */ __exportAll({ default: () => gd_default });
var gd_default;
var init_gd = __esmMin((() => {
	gd_default = {
		buttons: {
			play: "Cluich",
			pause: "Cuir ’na stad",
			replay: "Cluich a-rithist",
			mute: "Mùch",
			unmute: "Dì-mhùch"
		},
		seek: {
			forward: "Gluais air adhart {seconds} diog",
			backward: "Gluais air ais {seconds} diog"
		},
		fullscreen: {
			enter: "Làn-sgrìn",
			exit: "Fàg an làn-sgrìn"
		},
		captions: {
			enable: "Cuir caipseanan air",
			disable: "Thoir caipseanan dheth"
		},
		pip: {
			enter: "Dealbh am broinn deilbh",
			exit: "Fàg dealbh am broinn deilbh"
		},
		live: {
			playing: "A’ cluich beò",
			seekToEdge: "Sir an sruth beò",
			badge: "Beò"
		},
		cast: {
			start: "Tòisich air tar-chur",
			stop: "Cuir stad air tar-chur",
			connecting: "A’ ceangal"
		},
		airplay: {
			start: "Tòisich air AirPlay",
			stop: "Cuir stad air AirPlay"
		},
		slider: { seek: "Sireadh" },
		time: {
			current: "An ùine làithreach",
			duration: "Faide",
			remaining: "An ùine air fhàgail",
			elapsedSuffix: "{duration} den ùine a chaidh seachad",
			durationSuffix: "{duration} de dh’fhaid",
			remainingSuffix: "{duration} air fhàgail",
			showElapsed: "Seall an ùine a chaidh seachad, {duration}.",
			showDuration: "Seall an ùine iomlan, {duration}.",
			showRemaining: "Seall an ùine air fhàgail, {duration}.",
			toggleElapsed: "Toglaich eadar an ùine a chaidh seachad agus an ùine air fhàgail.",
			toggleDuration: "Toglaich eadar an fhaid agus an ùine air fhàgail.",
			position: "{current} à {duration}",
			unknown: "Cha deach am meadhan a luchdadh, àm neo-aithnichte."
		},
		playback: { rate: "Reat na cluiche {rate}" },
		volume: {
			mutedValue: "{percent}, air mùchadh",
			muted: "Air mùchadh",
			label: "Àirde na fuaime",
			value: "Àirde na fuaime {value}"
		},
		status: {
			captionsOn: "Caipseanan air",
			captionsOff: "Caipseanan dheth",
			paused: "Air stad",
			playing: "A’ cluich",
			fullscreen: "Làn-sgrìn",
			pip: "Dealbh am broinn deilbh",
			exitPip: "Fàg dealbh am broinn deilbh",
			seekedTo: "Air a leum gu {time}"
		},
		container: { label: "Cluicheadair mheadhanan" },
		errors: {
			aborted: "Sguir thu de chluich a’ mheadhain mus do chrìochnaich e.",
			network: "Cha ghabh am meadhan seo a luchdadh ri linn duilgheadas lìonraidh no frithealaiche.",
			decode: "Cha ghabh am meadhan seo a chluich – dh’fhaoidte gu bheil e coirbte no nach cuir am brabhsair agad taic ris an fhòrmat aige.",
			source: "Cha ghabh am meadhan seo a luchdadh – dh’fhaoidte nach eil e ri fhaighinn no nach cuir am brabhsair agad taic ris an fhòrmat aige.",
			encrypted: "Cha ghabh am meadhan seo a chluich a chionn ’s nach gabh a dhì-chrioptachadh.",
			unplayable: "Cha toir an cluicheadair taic dhan mheadhan seo.",
			title: "Chaidh rudeigin ceàrr.",
			unexpected: "Thachair mearachd ris nach robh dùil."
		},
		common: {
			empty: "",
			ok: "Dùin"
		},
		menu: {
			settings: "Roghainnean",
			quality: "Càileachd",
			audio: "Fuaim",
			default: "Bunaiteach",
			speed: "Astar",
			captions: "Caipseanan",
			playbackRate: "Reat na cluiche",
			back: "Air ais",
			off: "Dheth",
			auto: "Fèin-obrachail",
			autoWithLabel: "Fèin-obrachail ({label})",
			subtitles: "Fo-thiotalan"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/gl.js
var gl_exports = /* @__PURE__ */ __exportAll({ default: () => gl_default });
var gl_default;
var init_gl = __esmMin((() => {
	gl_default = {
		buttons: {
			play: "Reproducir",
			pause: "Pausa",
			replay: "Repetir",
			mute: "Silenciar",
			unmute: "Activar o son"
		},
		seek: {
			forward: "Avanzar {seconds} segundos",
			backward: "Retroceder {seconds} segundos"
		},
		fullscreen: {
			enter: "Pantalla completa",
			exit: "Saír da pantalla completa"
		},
		captions: {
			enable: "Activar subtítulos",
			disable: "Desactivar subtítulos"
		},
		pip: {
			enter: "Imaxe en imaxe",
			exit: "Saír de imaxe en imaxe"
		},
		live: {
			playing: "Reproducindo en directo",
			seekToEdge: "Ir ao directo",
			badge: "En directo"
		},
		cast: {
			start: "Iniciar emisión",
			stop: "Deter emisión",
			connecting: "Conectando"
		},
		airplay: {
			start: "Iniciar AirPlay",
			stop: "Deter AirPlay"
		},
		slider: { seek: "Buscar" },
		time: {
			current: "Tempo reproducido",
			duration: "Duración",
			remaining: "Tempo restante",
			elapsedSuffix: "{duration} de tempo transcorrido",
			durationSuffix: "{duration} de duración",
			remainingSuffix: "Quedan {duration}",
			showElapsed: "Amosar tempo transcorrido, {duration}.",
			showDuration: "Amosar duración, {duration}.",
			showRemaining: "Amosar tempo restante, {duration}.",
			toggleElapsed: "Alternar entre o tempo transcorrido e o tempo restante.",
			toggleDuration: "Alternar entre a duración e o tempo restante.",
			position: "{current} de {duration}",
			unknown: "Contido multimedia non cargado, tempo descoñecido."
		},
		playback: { rate: "Velocidade de reprodución {rate}" },
		volume: {
			mutedValue: "{percent}, silenciado",
			muted: "Silenciado",
			label: "Nivel do volume",
			value: "Nivel do volume {value}"
		},
		status: {
			captionsOn: "Subtítulos activados",
			captionsOff: "Subtítulos desactivados",
			paused: "En pausa",
			playing: "Reproducindo",
			fullscreen: "Pantalla completa",
			pip: "Imaxe en imaxe",
			exitPip: "Saír de imaxe en imaxe",
			seekedTo: "Saltouse a {time}"
		},
		container: { label: "Reprodutor multimedia" },
		errors: {
			aborted: "Vostede detivo a reprodución do contido multimedia antes de que rematase.",
			network: "Non foi posíbel cargar este contido multimedia por mor dun problema de rede ou do servidor.",
			decode: "Non foi posíbel reproducir este contido multimedia. Pode que estea danado ou que o seu navegador non admita o seu formato.",
			source: "Non foi posíbel cargar este contido multimedia. Pode que non estea dispoñíbel ou que o seu navegador non admita o seu formato.",
			encrypted: "Non foi posíbel reproducir este contido multimedia porque non se puido descifrar.",
			unplayable: "O reprodutor non admite este contido multimedia.",
			title: "Algo saíu mal.",
			unexpected: "Produciuse un erro inesperado."
		},
		common: {
			empty: "",
			ok: "Pechar"
		},
		menu: {
			settings: "Axustes",
			quality: "Calidade",
			audio: "Son",
			default: "Predeterminado",
			speed: "Velocidade",
			captions: "Subtítulos para xordos",
			playbackRate: "Velocidade de reprodución",
			back: "Atrás",
			off: "Desactivado",
			auto: "Automático",
			autoWithLabel: "Automático ({label})",
			subtitles: "Subtítulos"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/he.js
var he_exports = /* @__PURE__ */ __exportAll({ default: () => he_default });
var he_default;
var init_he = __esmMin((() => {
	he_default = {
		buttons: {
			play: "הפעלה",
			pause: "השהיה",
			replay: "הפעלה מחדש",
			mute: "השתקה",
			unmute: "ביטול השתקה"
		},
		seek: {
			forward: "דילוג קדימה {seconds} שניות",
			backward: "דילוג אחורה {seconds} שניות"
		},
		fullscreen: {
			enter: "הפעלת מסך מלא",
			exit: "יציאה ממסך מלא"
		},
		captions: {
			enable: "הפעלת כתוביות",
			disable: "השבתת כתוביות"
		},
		pip: {
			enter: "תמונה בתוך תמונה",
			exit: "יציאה מתמונה בתוך תמונה"
		},
		live: {
			playing: "משדר חי",
			seekToEdge: "עבור לשידור חי",
			badge: "שידור חי"
		},
		cast: {
			start: "התחלת העברה",
			stop: "הפסקת ההעברה",
			connecting: "מתחבר"
		},
		airplay: {
			start: "הפעלת AirPlay",
			stop: "הפסקת AirPlay"
		},
		slider: { seek: "דילוג" },
		time: {
			current: "זמן נוכחי",
			duration: "משך הזמן",
			remaining: "זמן נותר",
			elapsedSuffix: "{duration} זמן שחלף",
			durationSuffix: "{duration} משך זמן",
			remainingSuffix: "נותרו {duration}",
			showElapsed: "הצגת הזמן שחלף, {duration}.",
			showDuration: "הצגת משך הזמן, {duration}.",
			showRemaining: "הצגת הזמן שנותר, {duration}.",
			toggleElapsed: "החלפה בין הזמן שחלף לזמן שנותר.",
			toggleDuration: "החלפה בין משך הזמן לזמן שנותר.",
			position: "{current} מתוך {duration}",
			unknown: "המדיה לא נטענה, זמן לא ידוע."
		},
		playback: { rate: "מהירות הפעלה {rate}" },
		volume: {
			mutedValue: "{percent}, מושתק",
			muted: "מושתק",
			label: "עוצמת קול",
			value: "עוצמת קול {value}"
		},
		status: {
			captionsOn: "כתוביות פועלות",
			captionsOff: "כתוביות כבויות",
			paused: "מושהה",
			playing: "מתנגן",
			fullscreen: "מסך מלא",
			pip: "תמונה בתוך תמונה",
			exitPip: "יציאה מתמונה בתוך תמונה",
			seekedTo: "דילוג אל {time}"
		},
		container: { label: "נגן מדיה" },
		errors: {
			aborted: "הפסקת את הפעלת המדיה לפני שהסתיימה.",
			network: "לא ניתן היה לטעון את המדיה הזו בגלל בעיית רשת או שרת.",
			decode: "לא ניתן היה להפעיל את המדיה הזו. ייתכן שהיא פגומה או שהדפדפן שלך לא תומך בפורמט שלה.",
			source: "לא ניתן היה לטעון את המדיה הזו. ייתכן שהיא לא זמינה או שהדפדפן שלך לא תומך בפורמט שלה.",
			encrypted: "לא ניתן היה להפעיל את המדיה הזו כי לא ניתן היה לפענח אותה.",
			unplayable: "המדיה הזו אינה נתמכת על ידי הנגן.",
			title: "משהו השתבש.",
			unexpected: "אירעה שגיאה בלתי צפויה."
		},
		common: {
			empty: "",
			ok: "סגירה"
		},
		menu: {
			settings: "הגדרות",
			quality: "איכות",
			audio: "שמע",
			default: "ברירת מחדל",
			speed: "מהירות",
			captions: "כתוביות",
			playbackRate: "מהירות ההפעלה",
			back: "חזרה",
			off: "כבוי",
			auto: "אוטומטי",
			autoWithLabel: "אוטומטי ({label})",
			subtitles: "כתוביות"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/hi.js
var hi_exports = /* @__PURE__ */ __exportAll({ default: () => hi_default });
var hi_default;
var init_hi = __esmMin((() => {
	hi_default = {
		buttons: {
			play: "चलाएँ",
			pause: "रोकें",
			replay: "फिर से चलाएँ",
			mute: "म्यूट करें",
			unmute: "अनम्यूट करें"
		},
		seek: {
			forward: "{seconds} सेकंड आगे बढ़ें",
			backward: "{seconds} सेकंड पीछे जाएँ"
		},
		fullscreen: {
			enter: "पूर्ण स्क्रीन",
			exit: "पूर्ण स्क्रीन से बाहर निकलें"
		},
		captions: {
			enable: "कैप्शन चालू करें",
			disable: "कैप्शन बंद करें"
		},
		pip: {
			enter: "पिक्चर में पिक्चर चालू करें",
			exit: "पिक्चर में पिक्चर बंद करें"
		},
		live: {
			playing: "लाइव चल रहा है",
			seekToEdge: "लाइव पर जाएँ",
			badge: "लाइव"
		},
		cast: {
			start: "कास्टिंग शुरू करें",
			stop: "कास्टिंग बंद करें",
			connecting: "कनेक्ट हो रहा है"
		},
		airplay: {
			start: "AirPlay शुरू करें",
			stop: "AirPlay बंद करें"
		},
		slider: { seek: "सीक करें" },
		time: {
			current: "वर्तमान समय",
			duration: "अवधि",
			remaining: "शेष समय",
			elapsedSuffix: "{duration} बीता समय",
			durationSuffix: "{duration} अवधि",
			remainingSuffix: "{duration} शेष",
			showElapsed: "बीता समय दिखाएँ, {duration}।",
			showDuration: "अवधि दिखाएँ, {duration}।",
			showRemaining: "शेष समय दिखाएँ, {duration}।",
			toggleElapsed: "बीते समय और शेष समय के बीच टॉगल करें।",
			toggleDuration: "अवधि और शेष समय के बीच टॉगल करें।",
			position: "{duration} में से {current}",
			unknown: "मीडिया लोड नहीं हुआ, समय अज्ञात है।"
		},
		playback: { rate: "प्लेबैक दर {rate}" },
		volume: {
			mutedValue: "{percent}, म्यूट",
			muted: "म्यूट",
			label: "वॉल्यूम",
			value: "वॉल्यूम {value}"
		},
		status: {
			captionsOn: "कैप्शन चालू",
			captionsOff: "कैप्शन बंद",
			paused: "रोका गया",
			playing: "चल रहा है",
			fullscreen: "पूर्ण स्क्रीन",
			pip: "पिक्चर में पिक्चर",
			exitPip: "पिक्चर में पिक्चर बंद हुआ",
			seekedTo: "{time} पर पहुँचा"
		},
		container: { label: "मीडिया प्लेयर" },
		errors: {
			aborted: "आपने मीडिया के पूरा होने से पहले ही उसे चलाना बंद कर दिया।",
			network: "नेटवर्क या सर्वर की समस्या की वजह से यह मीडिया लोड नहीं हो सका।",
			decode: "यह मीडिया चलाया नहीं जा सका। हो सकता है कि यह खराब हो या आपका ब्राउज़र इसके फ़ॉर्मैट के साथ काम न करता हो।",
			source: "यह मीडिया लोड नहीं हो सका। हो सकता है कि यह उपलब्ध न हो या आपका ब्राउज़र इसके फ़ॉर्मैट के साथ काम न करता हो।",
			encrypted: "यह मीडिया चलाया नहीं जा सका, क्योंकि इसे डिक्रिप्ट नहीं किया जा सका।",
			unplayable: "यह मीडिया प्लेयर द्वारा समर्थित नहीं है।",
			title: "कुछ गड़बड़ हुई।",
			unexpected: "कोई अनपेक्षित त्रुटि हुई।"
		},
		common: {
			empty: "",
			ok: "बंद करें"
		},
		menu: {
			settings: "सेटिंग्स",
			quality: "रेज़ोल्यूशन",
			audio: "ऑडियो",
			default: "डिफ़ॉल्ट",
			speed: "स्पीड",
			captions: "कैप्शन",
			playbackRate: "प्लेबैक दर",
			back: "वापस",
			off: "बंद",
			auto: "ऑटो",
			autoWithLabel: "ऑटो ({label})",
			subtitles: "सबटाइटल"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/hr.js
var hr_exports = /* @__PURE__ */ __exportAll({ default: () => hr_default });
var hr_default;
var init_hr = __esmMin((() => {
	hr_default = {
		buttons: {
			play: "Reproduciraj",
			pause: "Pauziraj",
			replay: "Ponovi",
			mute: "Isključi zvuk",
			unmute: "Uključi zvuk"
		},
		seek: {
			forward: "Preskoči naprijed {seconds} sek.",
			backward: "Preskoči unatrag {seconds} sek."
		},
		fullscreen: {
			enter: "Cijeli zaslon",
			exit: "Izađi iz cijelog zaslona"
		},
		captions: {
			enable: "Uključi titlove",
			disable: "Isključi titlove"
		},
		pip: {
			enter: "Slika u slici",
			exit: "Izađi iz slike u slici"
		},
		live: {
			playing: "Reprodukcija uživo",
			seekToEdge: "Prijeđi na prijenos uživo",
			badge: "Uživo"
		},
		cast: {
			start: "Pokreni emitiranje",
			stop: "Zaustavi emitiranje",
			connecting: "Povezivanje"
		},
		airplay: {
			start: "Pokreni AirPlay",
			stop: "Zaustavi AirPlay"
		},
		slider: { seek: "Premotavanje" },
		time: {
			current: "Trenutno vrijeme",
			duration: "Vrijeme trajanja",
			remaining: "Preostalo vrijeme",
			elapsedSuffix: "{duration} proteklog vremena",
			durationSuffix: "{duration} trajanja",
			remainingSuffix: "Preostalo {duration}",
			showElapsed: "Prikaži proteklo vrijeme, {duration}.",
			showDuration: "Prikaži trajanje, {duration}.",
			showRemaining: "Prikaži preostalo vrijeme, {duration}.",
			toggleElapsed: "Prebacivanje između proteklog i preostalog vremena.",
			toggleDuration: "Prebacivanje između trajanja i preostalog vremena.",
			position: "{current} / {duration}",
			unknown: "Medijski sadržaj nije učitan, vrijeme nije poznato."
		},
		playback: { rate: "Brzina reprodukcije {rate}" },
		volume: {
			mutedValue: "{percent}, utišano",
			muted: "Utišano",
			label: "Glasnoća",
			value: "Glasnoća {value}"
		},
		status: {
			captionsOn: "Titlovi uključeni",
			captionsOff: "Titlovi isključeni",
			paused: "Pauzirano",
			playing: "Reproducira se",
			fullscreen: "Cijeli zaslon",
			pip: "Slika u slici",
			exitPip: "Izađi iz slike u slici",
			seekedTo: "Premotano: {time}"
		},
		container: { label: "Medijski reproduktor" },
		errors: {
			aborted: "Zaustavili ste reprodukciju medijskog sadržaja prije završetka.",
			network: "Ovaj medijski sadržaj nije moguće učitati zbog problema s mrežom ili poslužiteljem.",
			decode: "Ovaj medijski sadržaj nije moguće reproducirati. Možda je oštećen ili vaš preglednik ne podržava njegov format.",
			source: "Ovaj medijski sadržaj nije moguće učitati. Možda nije dostupan ili vaš preglednik ne podržava njegov format.",
			encrypted: "Ovaj medijski sadržaj nije moguće reproducirati jer ga nije moguće dešifrirati.",
			unplayable: "Reproduktor ne podržava ovaj medijski sadržaj.",
			title: "Nešto je pošlo po zlu.",
			unexpected: "Došlo je do neočekivane pogreške."
		},
		common: {
			empty: "",
			ok: "Zatvori"
		},
		menu: {
			settings: "Postavke",
			quality: "Kvaliteta",
			audio: "Zvuk",
			default: "Zadano",
			speed: "Brzina",
			captions: "Titlovi",
			playbackRate: "Brzina reprodukcije",
			back: "Natrag",
			off: "Isključeno",
			auto: "Automatski",
			autoWithLabel: "Automatski ({label})",
			subtitles: "Titlovi"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/hu.js
var hu_exports = /* @__PURE__ */ __exportAll({ default: () => hu_default });
var hu_default;
var init_hu = __esmMin((() => {
	hu_default = {
		buttons: {
			play: "Lejátszás",
			pause: "Szünet",
			replay: "Visszajátszás",
			mute: "Némítás",
			unmute: "Némítás feloldása"
		},
		seek: {
			forward: "Ugrás előre {seconds} másodperccel",
			backward: "Ugrás vissza {seconds} másodperccel"
		},
		fullscreen: {
			enter: "Teljes képernyő",
			exit: "Kilépés teljes képernyőből"
		},
		captions: {
			enable: "Feliratok bekapcsolása",
			disable: "Feliratok kikapcsolása"
		},
		pip: {
			enter: "Kép a képben",
			exit: "Kilépés kép a képben módból"
		},
		live: {
			playing: "Élő adás",
			seekToEdge: "Ugrás az élő adáshoz",
			badge: "Élő"
		},
		cast: {
			start: "Átküldés indítása",
			stop: "Átküldés leállítása",
			connecting: "Csatlakozás"
		},
		airplay: {
			start: "AirPlay indítása",
			stop: "AirPlay leállítása"
		},
		slider: { seek: "Tekerés" },
		time: {
			current: "Aktuális idő",
			duration: "Hossz",
			remaining: "Hátralévő idő",
			elapsedSuffix: "{duration} eltelt idő",
			durationSuffix: "{duration} időtartam",
			remainingSuffix: "{duration} van hátra",
			showElapsed: "Eltelt idő megjelenítése, {duration}.",
			showDuration: "Időtartam megjelenítése, {duration}.",
			showRemaining: "Hátralévő idő megjelenítése, {duration}.",
			toggleElapsed: "Váltás az eltelt és a hátralévő idő között.",
			toggleDuration: "Váltás az időtartam és a hátralévő idő között.",
			position: "{current} / {duration}",
			unknown: "A média nem töltődött be, ismeretlen hossz."
		},
		playback: { rate: "Lejátszási sebesség {rate}" },
		volume: {
			mutedValue: "{percent}, némítva",
			muted: "Némítva",
			label: "Hangerő",
			value: "Hangerő {value}"
		},
		status: {
			captionsOn: "Feliratok bekapcsolva",
			captionsOff: "Feliratok kikapcsolva",
			paused: "Szüneteltetve",
			playing: "Lejátszás folyamatban",
			fullscreen: "Teljes képernyő",
			pip: "Kép a képben",
			exitPip: "Kép a képben mód kikapcsolva",
			seekedTo: "Ugrás ide: {time}"
		},
		container: { label: "Médialejátszó" },
		errors: {
			aborted: "Leállította a média lejátszását, mielőtt az véget ért volna.",
			network: "A média betöltése hálózati vagy kiszolgálói hiba miatt nem sikerült.",
			decode: "A média nem játszható le. Lehet, hogy sérült, vagy a böngészője nem támogatja a formátumát.",
			source: "A média nem tölthető be. Lehet, hogy nem érhető el, vagy a böngészője nem támogatja a formátumát.",
			encrypted: "A média nem játszható le, mert nem sikerült visszafejteni.",
			unplayable: "A lejátszó nem támogatja ezt a médiát.",
			title: "Valami hiba történt.",
			unexpected: "Váratlan hiba történt."
		},
		common: {
			empty: "",
			ok: "Bezárás"
		},
		menu: {
			settings: "Beállítások",
			quality: "Minőség",
			audio: "Hang",
			default: "Alapértelmezett",
			speed: "Sebesség",
			captions: "Feliratok",
			playbackRate: "Lejátszási sebesség",
			back: "Vissza",
			off: "Ki",
			auto: "Automatikus",
			autoWithLabel: "Automatikus ({label})",
			subtitles: "Feliratok"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/id.js
var id_exports = /* @__PURE__ */ __exportAll({ default: () => id_default });
var id_default;
var init_id = __esmMin((() => {
	id_default = {
		buttons: {
			play: "Putar",
			pause: "Jeda",
			replay: "Putar ulang",
			mute: "Bisukan",
			unmute: "Bunyikan"
		},
		seek: {
			forward: "Maju {seconds} detik",
			backward: "Mundur {seconds} detik"
		},
		fullscreen: {
			enter: "Masuk layar penuh",
			exit: "Keluar dari layar penuh"
		},
		captions: {
			enable: "Aktifkan teks",
			disable: "Nonaktifkan teks"
		},
		pip: {
			enter: "Masuk mode mini",
			exit: "Keluar dari mode mini"
		},
		live: {
			playing: "Sedang diputar langsung",
			seekToEdge: "Ke siaran langsung",
			badge: "Langsung"
		},
		cast: {
			start: "Mulai transmisi",
			stop: "Hentikan transmisi",
			connecting: "Menghubungkan"
		},
		airplay: {
			start: "Mulai AirPlay",
			stop: "Hentikan AirPlay"
		},
		slider: { seek: "Bilah geser" },
		time: {
			current: "Waktu saat ini",
			duration: "Durasi",
			remaining: "Waktu tersisa",
			elapsedSuffix: "{duration} berlalu",
			durationSuffix: "Durasi {duration}",
			remainingSuffix: "{duration} tersisa",
			showElapsed: "Tampilkan waktu berlalu, {duration}.",
			showDuration: "Tampilkan durasi, {duration}.",
			showRemaining: "Tampilkan waktu tersisa, {duration}.",
			toggleElapsed: "Beralih antara waktu berlalu dan waktu tersisa.",
			toggleDuration: "Beralih antara durasi dan waktu tersisa.",
			position: "{current} dari {duration}",
			unknown: "Media belum dimuat, waktu tidak diketahui."
		},
		playback: { rate: "Kecepatan pemutaran {rate}" },
		volume: {
			mutedValue: "{percent}, dibisukan",
			muted: "Dibisukan",
			label: "Volume",
			value: "Volume {value}"
		},
		status: {
			captionsOn: "Teks aktif",
			captionsOff: "Teks nonaktif",
			paused: "Dijeda",
			playing: "Sedang diputar",
			fullscreen: "Layar penuh",
			pip: "Mode mini",
			exitPip: "Keluar dari mode mini",
			seekedTo: "Melompat ke {time}"
		},
		container: { label: "Pemutar media" },
		errors: {
			aborted: "Anda menghentikan pemutaran media sebelum selesai.",
			network: "Media tidak dapat dimuat karena masalah jaringan atau server.",
			decode: "Media tidak dapat diputar. Media mungkin rusak atau formatnya tidak didukung oleh peramban Anda.",
			source: "Media tidak dapat dimuat. Media mungkin tidak tersedia atau formatnya tidak didukung oleh peramban Anda.",
			encrypted: "Media tidak dapat diputar karena tidak dapat didekripsi.",
			unplayable: "Media ini tidak didukung oleh pemutar.",
			title: "Terjadi kesalahan.",
			unexpected: "Terjadi kesalahan yang tidak terduga."
		},
		common: {
			empty: "",
			ok: "OK"
		},
		menu: {
			settings: "Pengaturan",
			quality: "Kualitas",
			audio: "Audio",
			default: "Bawaan",
			speed: "Kecepatan",
			captions: "Pilihan teks",
			playbackRate: "Kecepatan pemutaran",
			back: "Kembali",
			off: "Nonaktif",
			auto: "Otomatis",
			autoWithLabel: "Otomatis ({label})",
			subtitles: "Subtitel"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/it.js
var it_exports = /* @__PURE__ */ __exportAll({ default: () => it_default });
var it_default;
var init_it = __esmMin((() => {
	it_default = {
		buttons: {
			play: "Riproduci",
			pause: "Pausa",
			replay: "Riproduci di nuovo",
			mute: "Disattiva l’audio",
			unmute: "Attiva l’audio"
		},
		seek: {
			forward: "Avanti di {seconds} secondi",
			backward: "Indietro di {seconds} secondi"
		},
		fullscreen: {
			enter: "Schermo intero",
			exit: "Esci da schermo intero"
		},
		captions: {
			enable: "Attiva i sottotitoli",
			disable: "Disattiva i sottotitoli"
		},
		pip: {
			enter: "Riproduzione in finestra",
			exit: "Chiudi riproduzione in finestra"
		},
		live: {
			playing: "Riproduzione in diretta",
			seekToEdge: "Vai alla diretta",
			badge: "In diretta"
		},
		cast: {
			start: "Avvia trasmissione",
			stop: "Interrompi trasmissione",
			connecting: "Connessione"
		},
		airplay: {
			start: "Avvia AirPlay",
			stop: "Interrompi AirPlay"
		},
		slider: { seek: "Scorrimento" },
		time: {
			current: "Tempo attuale",
			duration: "Durata",
			remaining: "Tempo rimanente",
			elapsedSuffix: "{duration} di tempo trascorso",
			durationSuffix: "{duration} di durata",
			remainingSuffix: "Restano {duration}",
			showElapsed: "Mostra tempo trascorso, {duration}.",
			showDuration: "Mostra durata, {duration}.",
			showRemaining: "Mostra tempo rimanente, {duration}.",
			toggleElapsed: "Alterna tra il tempo trascorso e il tempo rimanente.",
			toggleDuration: "Alterna tra la durata e il tempo rimanente.",
			position: "{current} di {duration}",
			unknown: "Contenuto multimediale non caricato, tempo sconosciuto."
		},
		playback: { rate: "Velocità di riproduzione {rate}" },
		volume: {
			mutedValue: "{percent}, audio disattivato",
			muted: "Audio disattivato",
			label: "Livello del volume",
			value: "Livello del volume {value}"
		},
		status: {
			captionsOn: "Sottotitoli attivi",
			captionsOff: "Sottotitoli disattivi",
			paused: "In pausa",
			playing: "In riproduzione",
			fullscreen: "Schermo intero",
			pip: "Riproduzione in finestra",
			exitPip: "Chiudi riproduzione in finestra",
			seekedTo: "Posizione di riproduzione: {time}"
		},
		container: { label: "Lettore multimediale" },
		errors: {
			aborted: "Hai interrotto la riproduzione del contenuto multimediale prima della fine.",
			network: "Impossibile caricare il contenuto multimediale a causa di un problema di rete o del server.",
			decode: "Impossibile riprodurre il contenuto multimediale. Potrebbe essere danneggiato oppure il browser potrebbe non supportarne il formato.",
			source: "Impossibile caricare il contenuto multimediale. Potrebbe non essere disponibile oppure il browser potrebbe non supportarne il formato.",
			encrypted: "Impossibile riprodurre il contenuto multimediale perché non è stato possibile decriptarlo.",
			unplayable: "Questo contenuto multimediale non è supportato dal lettore.",
			title: "Qualcosa è andato storto.",
			unexpected: "Si è verificato un errore imprevisto."
		},
		common: {
			empty: "",
			ok: "Chiudi"
		},
		menu: {
			settings: "Impostazioni",
			quality: "Qualità",
			audio: "Audio",
			default: "Predefinito",
			speed: "Velocità",
			captions: "Sottotitoli",
			playbackRate: "Velocità di riproduzione",
			back: "Indietro",
			off: "Disattivato",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Sottotitoli"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ja.js
var ja_exports = /* @__PURE__ */ __exportAll({ default: () => ja_default });
var ja_default;
var init_ja = __esmMin((() => {
	ja_default = {
		buttons: {
			play: "再生",
			pause: "一時停止",
			replay: "もう一度再生",
			mute: "ミュート",
			unmute: "ミュート解除"
		},
		seek: {
			forward: "{seconds}秒進む",
			backward: "{seconds}秒戻る"
		},
		fullscreen: {
			enter: "全画面表示",
			exit: "全画面表示解除"
		},
		captions: {
			enable: "字幕を表示",
			disable: "字幕を非表示"
		},
		pip: {
			enter: "ピクチャー イン ピクチャー",
			exit: "ピクチャー イン ピクチャーを終了"
		},
		live: {
			playing: "ライブ再生中",
			seekToEdge: "ライブ位置へ移動",
			badge: "ライブ"
		},
		cast: {
			start: "キャスト開始",
			stop: "キャスト停止",
			connecting: "接続中"
		},
		airplay: {
			start: "AirPlayを開始",
			stop: "AirPlayを停止"
		},
		slider: { seek: "シーク" },
		time: {
			current: "現在の時間",
			duration: "再生時間",
			remaining: "残りの時間",
			elapsedSuffix: "経過時間 {duration}",
			durationSuffix: "再生時間 {duration}",
			remainingSuffix: "残り {duration}",
			showElapsed: "経過時間を表示、{duration}。",
			showDuration: "再生時間を表示、{duration}。",
			showRemaining: "残り時間を表示、{duration}。",
			toggleElapsed: "経過時間と残り時間を切り替えます。",
			toggleDuration: "再生時間と残り時間を切り替えます。",
			position: "{current} / {duration}",
			unknown: "メディアが読み込まれていないため、時間は不明です。"
		},
		playback: { rate: "再生速度 {rate}" },
		volume: {
			mutedValue: "{percent}、ミュート",
			muted: "ミュート",
			label: "音量",
			value: "音量 {value}"
		},
		status: {
			captionsOn: "字幕オン",
			captionsOff: "字幕オフ",
			paused: "一時停止中",
			playing: "再生中",
			fullscreen: "全画面表示",
			pip: "ピクチャー イン ピクチャー表示",
			exitPip: "ピクチャー イン ピクチャー表示解除",
			seekedTo: "{time}に移動しました"
		},
		container: { label: "メディアプレーヤー" },
		errors: {
			aborted: "メディアの再生が完了する前に停止されました。",
			network: "ネットワークまたはサーバーの問題により、このメディアを読み込めませんでした。",
			decode: "このメディアを再生できませんでした。データが破損しているか、お使いのブラウザがこの形式をサポートしていない可能性があります。",
			source: "このメディアを読み込めませんでした。現在利用できないか、お使いのブラウザがこの形式をサポートしていない可能性があります。",
			encrypted: "このメディアは復号できなかったため、再生できませんでした。",
			unplayable: "このメディアはプレーヤーでサポートされていません。",
			title: "問題が発生しました。",
			unexpected: "予期しないエラーが発生しました。"
		},
		common: {
			empty: "",
			ok: "閉じる"
		},
		menu: {
			settings: "設定",
			quality: "画質",
			audio: "音声",
			default: "デフォルト",
			speed: "速度",
			captions: "字幕",
			playbackRate: "再生速度",
			back: "戻る",
			off: "オフ",
			auto: "自動",
			autoWithLabel: "自動 ({label})",
			subtitles: "字幕"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ko.js
var ko_exports = /* @__PURE__ */ __exportAll({ default: () => ko_default });
var ko_default;
var init_ko = __esmMin((() => {
	ko_default = {
		buttons: {
			play: "재생",
			pause: "일시중지",
			replay: "다시 재생",
			mute: "음소거",
			unmute: "음소거 해제"
		},
		seek: {
			forward: "{seconds}초 앞으로 탐색",
			backward: "{seconds}초 뒤로 탐색"
		},
		fullscreen: {
			enter: "전체 화면",
			exit: "전체 화면 종료"
		},
		captions: {
			enable: "자막 켜기",
			disable: "자막 끄기"
		},
		pip: {
			enter: "화면 속 화면",
			exit: "화면 속 화면 종료"
		},
		live: {
			playing: "라이브 재생 중",
			seekToEdge: "라이브 지점으로 이동",
			badge: "라이브"
		},
		cast: {
			start: "전송 시작",
			stop: "전송 중지",
			connecting: "연결 중"
		},
		airplay: {
			start: "AirPlay 시작",
			stop: "AirPlay 중지"
		},
		slider: { seek: "탐색" },
		time: {
			current: "현재 시간",
			duration: "재생 시간",
			remaining: "남은 시간",
			elapsedSuffix: "{duration} 경과",
			durationSuffix: "{duration} 재생 시간",
			remainingSuffix: "{duration} 남음",
			showElapsed: "경과 시간 표시, {duration}.",
			showDuration: "재생 시간 표시, {duration}.",
			showRemaining: "남은 시간 표시, {duration}.",
			toggleElapsed: "경과 시간과 남은 시간 사이를 전환합니다.",
			toggleDuration: "재생 시간과 남은 시간 사이를 전환합니다.",
			position: "{duration} 중 {current}",
			unknown: "미디어를 불러오지 못했습니다. 재생 시간을 확인할 수 없습니다."
		},
		playback: { rate: "재생 속도 {rate}" },
		volume: {
			mutedValue: "{percent}, 음소거",
			muted: "음소거",
			label: "볼륨",
			value: "볼륨 {value}"
		},
		status: {
			captionsOn: "자막 켜짐",
			captionsOff: "자막 꺼짐",
			paused: "일시중지됨",
			playing: "재생 중",
			fullscreen: "전체 화면",
			pip: "화면 속 화면",
			exitPip: "화면 속 화면 종료",
			seekedTo: "이동 위치: {time}"
		},
		container: { label: "미디어 플레이어" },
		errors: {
			aborted: "미디어가 끝나기 전에 재생을 중지했습니다.",
			network: "네트워크 또는 서버 문제로 인해 이 미디어를 불러올 수 없습니다.",
			decode: "이 미디어를 재생할 수 없습니다. 미디어가 손상되었거나 브라우저에서 해당 형식을 지원하지 않을 수 있습니다.",
			source: "이 미디어를 불러올 수 없습니다. 미디어를 사용할 수 없거나 브라우저에서 해당 형식을 지원하지 않을 수 있습니다.",
			encrypted: "암호를 해독할 수 없어 이 미디어를 재생할 수 없습니다.",
			unplayable: "이 미디어는 플레이어에서 지원되지 않습니다.",
			title: "문제가 발생했습니다.",
			unexpected: "예기치 않은 오류가 발생했습니다."
		},
		common: {
			empty: "",
			ok: "닫기"
		},
		menu: {
			settings: "설정",
			quality: "화질",
			audio: "오디오",
			default: "기본값",
			speed: "속도",
			captions: "캡션",
			playbackRate: "재생 속도",
			back: "뒤로",
			off: "끄기",
			auto: "자동",
			autoWithLabel: "자동 ({label})",
			subtitles: "자막"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/lt.js
var lt_exports = /* @__PURE__ */ __exportAll({ default: () => lt_default });
var lt_default;
var init_lt = __esmMin((() => {
	lt_default = {
		buttons: {
			play: "Leisti",
			pause: "Pristabdyti",
			replay: "Leisti iš naujo",
			mute: "Išjungti garsą",
			unmute: "Įjungti garsą"
		},
		seek: {
			forward: "Persukti pirmyn {seconds} sek.",
			backward: "Persukti atgal {seconds} sek."
		},
		fullscreen: {
			enter: "Visas ekranas",
			exit: "Išeiti iš viso ekrano"
		},
		captions: {
			enable: "Įjungti subtitrus",
			disable: "Išjungti subtitrus"
		},
		pip: {
			enter: "Vaizdas vaizde",
			exit: "Išjungti vaizdą vaizde"
		},
		live: {
			playing: "Rodoma tiesiogiai",
			seekToEdge: "Pereiti prie tiesioginės transliacijos",
			badge: "Tiesiogiai"
		},
		cast: {
			start: "Pradėti perdavimą",
			stop: "Stabdyti perdavimą",
			connecting: "Prisijungiama"
		},
		airplay: {
			start: "Įjungti AirPlay",
			stop: "Išjungti AirPlay"
		},
		slider: { seek: "Persukimas" },
		time: {
			current: "Dabartinis laikas",
			duration: "Trukmė",
			remaining: "Likęs laikas",
			elapsedSuffix: "{duration} praėjusio laiko",
			durationSuffix: "{duration} trukmės",
			remainingSuffix: "Liko {duration}",
			showElapsed: "Rodyti praėjusį laiką, {duration}.",
			showDuration: "Rodyti trukmę, {duration}.",
			showRemaining: "Rodyti likusį laiką, {duration}.",
			toggleElapsed: "Perjungti praėjusį ir likusį laiką.",
			toggleDuration: "Perjungti trukmę ir likusį laiką.",
			position: "{current} / {duration}",
			unknown: "Medija neįkelta, laikas nežinomas."
		},
		playback: { rate: "Atkūrimo greitis {rate}" },
		volume: {
			mutedValue: "{percent}, garsas išjungtas",
			muted: "Garsas išjungtas",
			label: "Garsumas",
			value: "Garsumas {value}"
		},
		status: {
			captionsOn: "Subtitrai įjungti",
			captionsOff: "Subtitrai išjungti",
			paused: "Pristabdyta",
			playing: "Leidžiama",
			fullscreen: "Visas ekranas",
			pip: "Vaizdas vaizde",
			exitPip: "Vaizdas vaizde išjungtas",
			seekedTo: "Persukta: {time}"
		},
		container: { label: "Medijos leistuvė" },
		errors: {
			aborted: "Sustabdėte atkūrimą jam dar nepasibaigus.",
			network: "Šios medijos nepavyko įkelti dėl tinklo arba serverio klaidos.",
			decode: "Šios medijos nepavyko atkurti. Ji gali būti sugadinta arba naršyklė nepalaiko jos formato.",
			source: "Šios medijos nepavyko įkelti. Ji gali būti nepasiekiama arba naršyklė nepalaiko jos formato.",
			encrypted: "Šios medijos nepavyko atkurti, nes nepavyko jos iššifruoti.",
			unplayable: "Leistuvė nepalaiko šios medijos.",
			title: "Kažkas nutiko ne taip.",
			unexpected: "Įvyko nenumatyta klaida."
		},
		common: {
			empty: "",
			ok: "Uždaryti"
		},
		menu: {
			settings: "Nustatymai",
			quality: "Kokybė",
			audio: "Garso takelis",
			default: "Numatytasis",
			speed: "Greitis",
			captions: "Subtitrai",
			playbackRate: "Atkūrimo greitis",
			back: "Atgal",
			off: "Išjungta",
			auto: "Automatinė",
			autoWithLabel: "Automatinė ({label})",
			subtitles: "Subtitrai"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/lv.js
var lv_exports = /* @__PURE__ */ __exportAll({ default: () => lv_default });
var lv_default;
var init_lv = __esmMin((() => {
	lv_default = {
		buttons: {
			play: "Atskaņot",
			pause: "Pauzēt",
			replay: "Atkārtot",
			mute: "Izslēgt skaņu",
			unmute: "Ieslēgt skaņu"
		},
		seek: {
			forward: "Pārtīt uz priekšu {seconds} sek.",
			backward: "Pārtīt atpakaļ {seconds} sek."
		},
		fullscreen: {
			enter: "Pilnekrāna režīms",
			exit: "Iziet no pilnekrāna režīma"
		},
		captions: {
			enable: "Ieslēgt subtitrus",
			disable: "Izslēgt subtitrus"
		},
		pip: {
			enter: "Attēls attēlā",
			exit: "Iziet no režīma “Attēls attēlā”"
		},
		live: {
			playing: "Notiek tiešraide",
			seekToEdge: "Pāriet uz tiešraidi",
			badge: "Tiešraide"
		},
		cast: {
			start: "Sākt apraidi",
			stop: "Apturēt apraidi",
			connecting: "Savienošanās"
		},
		airplay: {
			start: "Sākt AirPlay",
			stop: "Apturēt AirPlay"
		},
		slider: { seek: "Pārtīt" },
		time: {
			current: "Pašreizējais laiks",
			duration: "Ilgums",
			remaining: "Atlikušais laiks",
			elapsedSuffix: "{duration} pagājušā laika",
			durationSuffix: "{duration} ilgums",
			remainingSuffix: "Atlicis {duration}",
			showElapsed: "Rādīt pagājušo laiku, {duration}.",
			showDuration: "Rādīt ilgumu, {duration}.",
			showRemaining: "Rādīt atlikušo laiku, {duration}.",
			toggleElapsed: "Pārslēgties starp pagājušo un atlikušo laiku.",
			toggleDuration: "Pārslēgties starp ilgumu un atlikušo laiku.",
			position: "{current} / {duration}",
			unknown: "Multivide nav ielādēta, laiks nav zināms."
		},
		playback: { rate: "Atskaņošanas ātrums {rate}" },
		volume: {
			mutedValue: "{percent}, skaņa izslēgta",
			muted: "Skaņa izslēgta",
			label: "Skaļums",
			value: "Skaļums {value}"
		},
		status: {
			captionsOn: "Subtitri ieslēgti",
			captionsOff: "Subtitri izslēgti",
			paused: "Pauzēts",
			playing: "Atskaņo",
			fullscreen: "Pilnekrāna režīms",
			pip: "Attēls attēlā",
			exitPip: "Režīms “Attēls attēlā” izslēgts",
			seekedTo: "Pārtīts: {time}"
		},
		container: { label: "Multivides atskaņotājs" },
		errors: {
			aborted: "Jūs apturējāt multivides atskaņošanu pirms tās beigām.",
			network: "Šo multividi nevarēja ielādēt tīkla vai servera problēmas dēļ.",
			decode: "Šo multividi nevarēja atskaņot. Iespējams, tā ir bojāta vai pārlūkprogramma neatbalsta tās formātu.",
			source: "Šo multividi nevarēja ielādēt. Iespējams, tā nav pieejama vai pārlūkprogramma neatbalsta tās formātu.",
			encrypted: "Šo multividi nevarēja atskaņot, jo to nevarēja atšifrēt.",
			unplayable: "Atskaņotājs neatbalsta šo multividi.",
			title: "Kaut kas nogāja greizi.",
			unexpected: "Radās neparedzēta kļūda."
		},
		common: {
			empty: "",
			ok: "Aizvērt"
		},
		menu: {
			settings: "Iestatījumi",
			quality: "Kvalitāte",
			audio: "Audio ieraksts",
			default: "Noklusējums",
			speed: "Ātrums",
			captions: "Subtitri",
			playbackRate: "Atskaņošanas ātrums",
			back: "Atpakaļ",
			off: "Izslēgts",
			auto: "Automātiski",
			autoWithLabel: "Automātiski ({label})",
			subtitles: "Subtitri"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/mr.js
var mr_exports = /* @__PURE__ */ __exportAll({ default: () => mr_default });
var mr_default;
var init_mr = __esmMin((() => {
	mr_default = {
		buttons: {
			play: "प्ले करा",
			pause: "थांबवा",
			replay: "पुन्हा प्ले करा",
			mute: "म्यूट करा",
			unmute: "अनम्यूट करा"
		},
		seek: {
			forward: "{seconds} सेकंद पुढे जा",
			backward: "{seconds} सेकंद मागे जा"
		},
		fullscreen: {
			enter: "फुल स्क्रीन",
			exit: "फुल स्क्रीनमधून बाहेर पडा"
		},
		captions: {
			enable: "कॅप्शन सुरू करा",
			disable: "कॅप्शन बंद करा"
		},
		pip: {
			enter: "पिक्चर-इन-पिक्चर सुरू करा",
			exit: "पिक्चर-इन-पिक्चर बंद करा"
		},
		live: {
			playing: "थेट प्रसारण सुरू आहे",
			seekToEdge: "थेट प्रसारणाकडे जा",
			badge: "थेट प्रसारण"
		},
		cast: {
			start: "कास्टिंग सुरू करा",
			stop: "कास्टिंग थांबवा",
			connecting: "कनेक्ट होत आहे"
		},
		airplay: {
			start: "AirPlay सुरू करा",
			stop: "AirPlay थांबवा"
		},
		slider: { seek: "सीक करा" },
		time: {
			current: "वर्तमान वेळ",
			duration: "कालावधी",
			remaining: "उरलेला वेळ",
			elapsedSuffix: "{duration} गेलेला वेळ",
			durationSuffix: "{duration} कालावधी",
			remainingSuffix: "{duration} उरलेला वेळ",
			showElapsed: "गेलेला वेळ दाखवा, {duration}.",
			showDuration: "कालावधी दाखवा, {duration}.",
			showRemaining: "उरलेला वेळ दाखवा, {duration}.",
			toggleElapsed: "गेलेला वेळ आणि उरलेला वेळ यांमध्ये टॉगल करा.",
			toggleDuration: "कालावधी आणि उरलेला वेळ यांमध्ये टॉगल करा.",
			position: "{duration} पैकी {current}",
			unknown: "मीडिया लोड झालेला नाही, वेळ अज्ञात आहे."
		},
		playback: { rate: "प्लेबॅक दर {rate}" },
		volume: {
			mutedValue: "{percent}, म्यूट केलेले",
			muted: "म्यूट केलेले",
			label: "आवाज",
			value: "आवाज {value}"
		},
		status: {
			captionsOn: "कॅप्शन सुरू",
			captionsOff: "कॅप्शन बंद",
			paused: "थांबवले",
			playing: "प्ले होत आहे",
			fullscreen: "फुल स्क्रीन",
			pip: "पिक्चर-इन-पिक्चर",
			exitPip: "पिक्चर-इन-पिक्चर बंद झाले",
			seekedTo: "{time} वर पोहोचले"
		},
		container: { label: "मीडिया प्लेयर" },
		errors: {
			aborted: "मीडिया संपण्यापूर्वीच तुम्ही प्लेबॅक थांबवला.",
			network: "नेटवर्क किंवा सर्व्हरच्या समस्येमुळे हा मीडिया लोड करता आला नाही.",
			decode: "हा मीडिया प्ले करता आला नाही. तो खराब झालेला असू शकतो किंवा तुमच्या ब्राउझरमध्ये त्याचा फॉरमॅट समर्थित नसेल.",
			source: "हा मीडिया लोड करता आला नाही. तो उपलब्ध नसेल किंवा तुमच्या ब्राउझरमध्ये त्याचा फॉरमॅट समर्थित नसेल.",
			encrypted: "हा मीडिया डिक्रिप्ट करता आला नाही, त्यामुळे तो प्ले करता आला नाही.",
			unplayable: "हे मीडिया प्लेयरद्वारे समर्थित नाही.",
			title: "काहीतरी चुकले.",
			unexpected: "अनपेक्षित त्रुटी आली."
		},
		common: {
			empty: "",
			ok: "बंद करा"
		},
		menu: {
			settings: "सेटिंग्ज",
			quality: "गुणवत्ता",
			audio: "ऑडिओ",
			default: "डीफॉल्ट",
			speed: "वेग",
			captions: "कॅप्शन",
			playbackRate: "प्लेबॅक दर",
			back: "मागे",
			off: "बंद",
			auto: "स्वयंचलित",
			autoWithLabel: "स्वयंचलित ({label})",
			subtitles: "उपशीर्षके"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/nb.js
var nb_exports = /* @__PURE__ */ __exportAll({ default: () => nb_default });
var nb_default;
var init_nb = __esmMin((() => {
	nb_default = {
		buttons: {
			play: "Spill av",
			pause: "Pause",
			replay: "Spill av på nytt",
			mute: "Slå av lyden",
			unmute: "Slå på lyden"
		},
		seek: {
			forward: "Hopp frem {seconds} sekunder",
			backward: "Hopp tilbake {seconds} sekunder"
		},
		fullscreen: {
			enter: "Fullskjerm",
			exit: "Avslutt fullskjerm"
		},
		captions: {
			enable: "Slå på teksting",
			disable: "Slå av teksting"
		},
		pip: {
			enter: "Bilde-i-bilde",
			exit: "Avslutt bilde-i-bilde"
		},
		live: {
			playing: "Spiller direkte",
			seekToEdge: "Gå til direktesendingen",
			badge: "Direkte"
		},
		cast: {
			start: "Start casting",
			stop: "Stopp casting",
			connecting: "Kobler til"
		},
		airplay: {
			start: "Start AirPlay",
			stop: "Stopp AirPlay"
		},
		slider: { seek: "Spol" },
		time: {
			current: "Aktuell tid",
			duration: "Varighet",
			remaining: "Gjenstående tid",
			elapsedSuffix: "{duration} avspilt tid",
			durationSuffix: "{duration} varighet",
			remainingSuffix: "{duration} igjen",
			showElapsed: "Vis avspilt tid, {duration}.",
			showDuration: "Vis varighet, {duration}.",
			showRemaining: "Vis gjenstående tid, {duration}.",
			toggleElapsed: "Bytt mellom avspilt og gjenstående tid.",
			toggleDuration: "Bytt mellom varighet og gjenstående tid.",
			position: "{current} av {duration}",
			unknown: "Mediet er ikke lastet inn, ukjent tid."
		},
		playback: { rate: "Avspillingshastighet {rate}" },
		volume: {
			mutedValue: "{percent}, dempet",
			muted: "Dempet",
			label: "Volum",
			value: "Volum {value}"
		},
		status: {
			captionsOn: "Teksting på",
			captionsOff: "Teksting av",
			paused: "Satt på pause",
			playing: "Spiller",
			fullscreen: "Fullskjerm",
			pip: "Bilde-i-bilde",
			exitPip: "Bilde-i-bilde av",
			seekedTo: "Hoppet til {time}"
		},
		container: { label: "Mediespiller" },
		errors: {
			aborted: "Du stoppet avspillingen av mediet før den var ferdig.",
			network: "Dette mediet kunne ikke lastes inn på grunn av en nettverks- eller serverfeil.",
			decode: "Dette mediet kunne ikke spilles av. Det kan være ødelagt, eller nettleseren din støtter kanskje ikke formatet.",
			source: "Dette mediet kunne ikke lastes inn. Det kan være utilgjengelig, eller nettleseren din støtter kanskje ikke formatet.",
			encrypted: "Dette mediet kunne ikke spilles av fordi det ikke kunne dekrypteres.",
			unplayable: "Denne mediefilen støttes ikke av spilleren.",
			title: "Noe gikk galt.",
			unexpected: "Det oppstod en uventet feil."
		},
		common: {
			empty: "",
			ok: "Lukk"
		},
		menu: {
			settings: "Innstillinger",
			quality: "Kvalitet",
			audio: "Lyd",
			default: "Standard",
			speed: "Hastighet",
			captions: "Teksting",
			playbackRate: "Avspillingshastighet",
			back: "Tilbake",
			off: "Av",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Undertekster"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/nl.js
var nl_exports = /* @__PURE__ */ __exportAll({ default: () => nl_default });
var nl_default;
var init_nl = __esmMin((() => {
	nl_default = {
		buttons: {
			play: "Afspelen",
			pause: "Pauzeren",
			replay: "Opnieuw afspelen",
			mute: "Dempen",
			unmute: "Dempen opheffen"
		},
		seek: {
			forward: "{seconds} seconden vooruit",
			backward: "{seconds} seconden terug"
		},
		fullscreen: {
			enter: "Volledig scherm",
			exit: "Volledig scherm verlaten"
		},
		captions: {
			enable: "Ondertiteling inschakelen",
			disable: "Ondertiteling uitschakelen"
		},
		pip: {
			enter: "Beeld-in-beeld starten",
			exit: "Beeld-in-beeld stoppen"
		},
		live: {
			playing: "Wordt live afgespeeld",
			seekToEdge: "Naar de livestream gaan",
			badge: "Live"
		},
		cast: {
			start: "Casten starten",
			stop: "Casten stoppen",
			connecting: "Verbinden"
		},
		airplay: {
			start: "AirPlay starten",
			stop: "AirPlay stoppen"
		},
		slider: { seek: "Spoelen" },
		time: {
			current: "Huidige tijd",
			duration: "Tijdsduur",
			remaining: "Resterende tijd",
			elapsedSuffix: "{duration} verstreken",
			durationSuffix: "{duration} totaal",
			remainingSuffix: "Nog {duration}",
			showElapsed: "Verstreken tijd tonen, {duration}.",
			showDuration: "Duur tonen, {duration}.",
			showRemaining: "Resterende tijd tonen, {duration}.",
			toggleElapsed: "Schakelen tussen verstreken en resterende tijd.",
			toggleDuration: "Schakelen tussen duur en resterende tijd.",
			position: "{current} van {duration}",
			unknown: "Media niet geladen, onbekende tijd."
		},
		playback: { rate: "Afspeelsnelheid {rate}" },
		volume: {
			mutedValue: "{percent}, gedempt",
			muted: "Gedempt",
			label: "Geluidsniveau",
			value: "Geluidsniveau {value}"
		},
		status: {
			captionsOn: "Ondertiteling aan",
			captionsOff: "Ondertiteling uit",
			paused: "Gepauzeerd",
			playing: "Wordt afgespeeld",
			fullscreen: "Volledig scherm",
			pip: "Beeld-in-beeld",
			exitPip: "Beeld-in-beeld stoppen",
			seekedTo: "Gesprongen naar {time}"
		},
		container: { label: "Mediaspeler" },
		errors: {
			aborted: "U heeft het afspelen van de media gestopt voordat deze was afgelopen.",
			network: "Deze media kon niet worden geladen vanwege een netwerk- of serverprobleem.",
			decode: "Deze media kon niet worden afgespeeld. Mogelijk is het bestand beschadigd of ondersteunt uw browser de indeling niet.",
			source: "Deze media kon niet worden geladen. Mogelijk is deze niet beschikbaar of ondersteunt uw browser de indeling niet.",
			encrypted: "Deze media kon niet worden afgespeeld omdat deze niet kon worden ontsleuteld.",
			unplayable: "Deze media wordt niet ondersteund door de speler.",
			title: "Er is iets misgegaan.",
			unexpected: "Er is een onverwachte fout opgetreden."
		},
		common: {
			empty: "",
			ok: "Sluiten"
		},
		menu: {
			settings: "Instellingen",
			quality: "Kwaliteit",
			audio: "Audio",
			default: "Standaard",
			speed: "Snelheid",
			captions: "Ondertiteling",
			playbackRate: "Afspeelsnelheid",
			back: "Terug",
			off: "Uit",
			auto: "Automatisch",
			autoWithLabel: "Automatisch ({label})",
			subtitles: "Ondertiteling"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/nn.js
var nn_exports = /* @__PURE__ */ __exportAll({ default: () => nn_default });
var nn_default;
var init_nn = __esmMin((() => {
	nn_default = {
		buttons: {
			play: "Spel av",
			pause: "Pause",
			replay: "Spel av på nytt",
			mute: "Slå av lyden",
			unmute: "Slå på lyden"
		},
		seek: {
			forward: "Hopp fram {seconds} sekund",
			backward: "Hopp tilbake {seconds} sekund"
		},
		fullscreen: {
			enter: "Fullskjerm",
			exit: "Avslutt fullskjerm"
		},
		captions: {
			enable: "Slå på teksting",
			disable: "Slå av teksting"
		},
		pip: {
			enter: "Bilete-i-bilete",
			exit: "Avslutt bilete-i-bilete"
		},
		live: {
			playing: "Spelar direkte",
			seekToEdge: "Gå til direktesendinga",
			badge: "Direkte"
		},
		cast: {
			start: "Start casting",
			stop: "Stopp casting",
			connecting: "Koplar til"
		},
		airplay: {
			start: "Start AirPlay",
			stop: "Stopp AirPlay"
		},
		slider: { seek: "Spol" },
		time: {
			current: "Aktuell tid",
			duration: "Varigheit",
			remaining: "Tid att",
			elapsedSuffix: "{duration} avspelt tid",
			durationSuffix: "{duration} varigheit",
			remainingSuffix: "{duration} att",
			showElapsed: "Vis avspelt tid, {duration}.",
			showDuration: "Vis varigheit, {duration}.",
			showRemaining: "Vis tid att, {duration}.",
			toggleElapsed: "Byt mellom avspelt tid og tid att.",
			toggleDuration: "Byt mellom varigheit og tid att.",
			position: "{current} av {duration}",
			unknown: "Mediet er ikkje lasta inn, ukjend tid."
		},
		playback: { rate: "Avspelingshastigheit {rate}" },
		volume: {
			mutedValue: "{percent}, dempa",
			muted: "Dempa",
			label: "Volum",
			value: "Volum {value}"
		},
		status: {
			captionsOn: "Teksting på",
			captionsOff: "Teksting av",
			paused: "Sett på pause",
			playing: "Spelar",
			fullscreen: "Fullskjerm",
			pip: "Bilete-i-bilete",
			exitPip: "Bilete-i-bilete av",
			seekedTo: "Hoppa til {time}"
		},
		container: { label: "Mediespelar" },
		errors: {
			aborted: "Du stoppa avspelinga av mediet før ho var ferdig.",
			network: "Dette mediet kunne ikkje lastast inn på grunn av ein nettverks- eller serverfeil.",
			decode: "Dette mediet kunne ikkje spelast av. Det kan vera øydelagt, eller nettlesaren din støttar kanskje ikkje formatet.",
			source: "Dette mediet kunne ikkje lastast inn. Det kan vera utilgjengeleg, eller nettlesaren din støttar kanskje ikkje formatet.",
			encrypted: "Dette mediet kunne ikkje spelast av fordi det ikkje kunne dekrypterast.",
			unplayable: "Denne mediefila er ikkje støtta av spelaren.",
			title: "Noko gjekk gale.",
			unexpected: "Det oppstod ein uventa feil."
		},
		common: {
			empty: "",
			ok: "Lukk"
		},
		menu: {
			settings: "Innstillingar",
			quality: "Kvalitet",
			audio: "Lyd",
			default: "Standard",
			speed: "Fart",
			captions: "Teksting",
			playbackRate: "Avspelingshastigheit",
			back: "Tilbake",
			off: "Av",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Undertekstar"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ne.js
var ne_exports = /* @__PURE__ */ __exportAll({ default: () => ne_default });
var ne_default;
var init_ne = __esmMin((() => {
	ne_default = {
		buttons: {
			play: "चलाउनुहोस्",
			pause: "रोक्नुहोस्",
			replay: "फेरि चलाउनुहोस्",
			mute: "म्यूट गर्नुहोस्",
			unmute: "अनम्यूट गर्नुहोस्"
		},
		seek: {
			forward: "{seconds} सेकेन्ड अगाडि सार्नुहोस्",
			backward: "{seconds} सेकेन्ड पछाडि सार्नुहोस्"
		},
		fullscreen: {
			enter: "पूर्ण स्क्रिन",
			exit: "पूर्ण स्क्रिनबाट बाहिर निस्कनुहोस्"
		},
		captions: {
			enable: "क्याप्शन अन गर्नुहोस्",
			disable: "क्याप्शन अफ गर्नुहोस्"
		},
		pip: {
			enter: "पिक्चर-इन-पिक्चर",
			exit: "पिक्चर-इन-पिक्चरबाट बाहिर निस्कनुहोस्"
		},
		live: {
			playing: "लाइभ चलिरहेको छ",
			seekToEdge: "लाइभमा जानुहोस्",
			badge: "लाइभ"
		},
		cast: {
			start: "कास्टिङ सुरु गर्नुहोस्",
			stop: "कास्टिङ रोक्नुहोस्",
			connecting: "जडान हुँदैछ"
		},
		airplay: {
			start: "AirPlay सुरु गर्नुहोस्",
			stop: "AirPlay रोक्नुहोस्"
		},
		slider: { seek: "समय सार्नुहोस्" },
		time: {
			current: "हालको समय",
			duration: "अवधि",
			remaining: "बाँकी समय",
			elapsedSuffix: "{duration} बितेको समय",
			durationSuffix: "{duration} अवधि",
			remainingSuffix: "{duration} बाँकी",
			showElapsed: "बितेको समय देखाउनुहोस्, {duration}।",
			showDuration: "अवधि देखाउनुहोस्, {duration}।",
			showRemaining: "बाँकी समय देखाउनुहोस्, {duration}।",
			toggleElapsed: "बितेको समय र बाँकी समयबीच टगल गर्नुहोस्।",
			toggleDuration: "अवधि र बाँकी समयबीच टगल गर्नुहोस्।",
			position: "{duration} मध्ये {current}",
			unknown: "मिडिया लोड भएको छैन, समय अज्ञात छ।"
		},
		playback: { rate: "प्लेब्याक दर {rate}" },
		volume: {
			mutedValue: "{percent}, म्यूट",
			muted: "म्यूट",
			label: "भोल्युम",
			value: "भोल्युम {value}"
		},
		status: {
			captionsOn: "क्याप्शन अन",
			captionsOff: "क्याप्शन अफ",
			paused: "रोकिएको",
			playing: "चलिरहेको",
			fullscreen: "पूर्ण स्क्रिन",
			pip: "पिक्चर इन पिक्चर",
			exitPip: "पिक्चर इन पिक्चरबाट बाहिर",
			seekedTo: "{time}मा सारियो"
		},
		container: { label: "मिडिया प्लेयर" },
		errors: {
			aborted: "मिडिया प्लेब्याक सकिनुअघि नै तपाईंले रोक्नुभयो।",
			network: "नेटवर्क वा सर्भरको समस्याका कारण यो मिडिया लोड गर्न सकिएन।",
			decode: "यो मिडिया चलाउन सकिएन। यो बिग्रिएको हुन सक्छ, वा तपाईंको ब्राउजरले यसको ढाँचालाई समर्थन नगर्न सक्छ।",
			source: "यो मिडिया लोड गर्न सकिएन। यो उपलब्ध नहुन सक्छ, वा तपाईंको ब्राउजरले यसको ढाँचालाई समर्थन नगर्न सक्छ।",
			encrypted: "यो मिडिया डिक्रिप्ट गर्न नसकिएकाले चलाउन सकिएन।",
			unplayable: "यो मिडिया प्लेयरले समर्थन गर्दैन।",
			title: "केही गलत भयो।",
			unexpected: "अप्रत्याशित त्रुटि भयो।"
		},
		common: {
			empty: "",
			ok: "बन्द गर्नुहोस्"
		},
		menu: {
			settings: "सेटिङहरू",
			quality: "गुणस्तर",
			audio: "अडियो",
			default: "पूर्वनिर्धारित",
			speed: "गति",
			captions: "क्याप्शन",
			playbackRate: "प्लेब्याक दर",
			back: "पछाडि",
			off: "बन्द",
			auto: "स्वतः",
			autoWithLabel: "स्वतः ({label})",
			subtitles: "उपशीर्षक"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/oc.js
var oc_exports = /* @__PURE__ */ __exportAll({ default: () => oc_default });
var oc_default;
var init_oc = __esmMin((() => {
	oc_default = {
		buttons: {
			play: "Legir",
			pause: "Pausa",
			replay: "Tornar legir",
			mute: "Copar lo son",
			unmute: "Restablir lo son"
		},
		seek: {
			forward: "Avançar de {seconds} segondas",
			backward: "Recular de {seconds} segondas"
		},
		fullscreen: {
			enter: "Ecran complèt",
			exit: "Sortir de l'ecran complèt"
		},
		captions: {
			enable: "Activar las legendas",
			disable: "Desactivar las legendas"
		},
		pip: {
			enter: "Vidèo incrustada",
			exit: "Sortir de la vidèo incrustada"
		},
		live: {
			playing: "Lectura dirècta",
			seekToEdge: "Anar al dirècte",
			badge: "Dirècte"
		},
		cast: {
			start: "Aviar la difusion",
			stop: "Aturar la difusion",
			connecting: "Connexion en cors"
		},
		airplay: {
			start: "Aviar AirPlay",
			stop: "Arrestar AirPlay"
		},
		slider: { seek: "Posicion" },
		time: {
			current: "Temps actual",
			duration: "Durada",
			remaining: "Temps restant",
			elapsedSuffix: "{duration} de temps passat",
			durationSuffix: "{duration} de durada",
			remainingSuffix: "Demòra {duration}",
			showElapsed: "Afichar lo temps passat, {duration}.",
			showDuration: "Afichar la durada, {duration}.",
			showRemaining: "Afichar lo temps que demòra, {duration}.",
			toggleElapsed: "Alternar entre lo temps passat e lo temps que demòra.",
			toggleDuration: "Alternar entre la durada e lo temps que demòra.",
			position: "{current} sus {duration}",
			unknown: "Mèdia pas cargat, temps desconegut."
		},
		playback: { rate: "Velocitat de lectura {rate}" },
		volume: {
			mutedValue: "{percent}, silenciat",
			muted: "Silenciat",
			label: "Volum",
			value: "Volum {value}"
		},
		status: {
			captionsOn: "Legendas activadas",
			captionsOff: "Legendas desactivadas",
			paused: "En pausa",
			playing: "En lectura",
			fullscreen: "Ecran complèt",
			pip: "Vidèo incrustada",
			exitPip: "Sortir de la vidèo incrustada",
			seekedTo: "Avançat fins a {time}"
		},
		container: { label: "Lector multimèdia" },
		errors: {
			aborted: "Avètz copat la lectura del mèdia abans la fin.",
			network: "Aqueste mèdia a pas pogut èsser cargat a causa d'un problèma de ret o de servidor.",
			decode: "Aqueste mèdia a pas pogut èsser legit. Benlèu qu'es damatjat, o que vòstre navegador pren pas en carga son format.",
			source: "Aqueste mèdia a pas pogut èsser cargat. Benlèu qu'es indisponible, o que vòstre navegador pren pas en carga son format.",
			encrypted: "Aqueste mèdia a pas pogut èsser legit perque son deschiframent a fracassat.",
			unplayable: "Aqueste mèdia es pas pres en carga pel lector.",
			title: "Quaucarèn s'es mal passat.",
			unexpected: "Una error inesperada s'es produsida."
		},
		common: {
			empty: "",
			ok: "Tampar"
		},
		menu: {
			settings: "Paramètres",
			quality: "Qualitat",
			audio: "Àudio",
			default: "Per defaut",
			speed: "Velocitat",
			captions: "Legendas",
			playbackRate: "Velocitat de lectura",
			back: "Retorn",
			off: "Desactivat",
			auto: "Automatic",
			autoWithLabel: "Automatic ({label})",
			subtitles: "Sostítols"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/pl.js
var pl_exports = /* @__PURE__ */ __exportAll({ default: () => pl_default });
var pl_default;
var init_pl = __esmMin((() => {
	pl_default = {
		buttons: {
			play: "Odtwórz",
			pause: "Wstrzymaj",
			replay: "Odtwórz ponownie",
			mute: "Wycisz",
			unmute: "Wyłącz wyciszenie"
		},
		seek: {
			forward: "Przewiń do przodu o {seconds} s",
			backward: "Przewiń do tyłu o {seconds} s"
		},
		fullscreen: {
			enter: "Pełny ekran",
			exit: "Wyjdź z pełnego ekranu"
		},
		captions: {
			enable: "Włącz napisy",
			disable: "Wyłącz napisy"
		},
		pip: {
			enter: "Obraz w obrazie",
			exit: "Wyjdź z trybu obraz w obrazie"
		},
		live: {
			playing: "Odtwarzanie na żywo",
			seekToEdge: "Przejdź na transmisję na żywo",
			badge: "Na żywo"
		},
		cast: {
			start: "Rozpocznij przesyłanie",
			stop: "Zatrzymaj przesyłanie",
			connecting: "Łączenie"
		},
		airplay: {
			start: "Uruchom AirPlay",
			stop: "Zatrzymaj AirPlay"
		},
		slider: { seek: "Przewijanie" },
		time: {
			current: "Aktualny czas",
			duration: "Czas trwania",
			remaining: "Pozostały czas",
			elapsedSuffix: "{duration} czasu, który upłynął",
			durationSuffix: "{duration} czasu trwania",
			remainingSuffix: "Pozostało {duration}",
			showElapsed: "Pokaż upływ czasu, {duration}.",
			showDuration: "Pokaż czas trwania, {duration}.",
			showRemaining: "Pokaż pozostały czas, {duration}.",
			toggleElapsed: "Przełącz między czasem, który upłynął, a pozostałym czasem.",
			toggleDuration: "Przełącz między czasem trwania a pozostałym czasem.",
			position: "{current} / {duration}",
			unknown: "Multimedia nie zostały załadowane, czas jest nieznany."
		},
		playback: { rate: "Szybkość odtwarzania {rate}" },
		volume: {
			mutedValue: "{percent}, wyciszono",
			muted: "Wyciszono",
			label: "Głośność",
			value: "Głośność {value}"
		},
		status: {
			captionsOn: "Napisy włączone",
			captionsOff: "Napisy wyłączone",
			paused: "Wstrzymano",
			playing: "Odtwarzanie",
			fullscreen: "Pełny ekran",
			pip: "Obraz w obrazie",
			exitPip: "Obraz w obrazie wyłączony",
			seekedTo: "Przewinięto: {time}"
		},
		container: { label: "Odtwarzacz multimediów" },
		errors: {
			aborted: "Zatrzymano odtwarzanie przed jego zakończeniem.",
			network: "Nie udało się wczytać tego materiału z powodu problemu z siecią lub serwerem.",
			decode: "Nie udało się odtworzyć tego materiału. Może być uszkodzony lub przeglądarka może nie obsługiwać jego formatu.",
			source: "Nie udało się wczytać tego materiału. Może być niedostępny lub przeglądarka może nie obsługiwać jego formatu.",
			encrypted: "Nie udało się odtworzyć tego materiału, ponieważ nie udało się go odszyfrować.",
			unplayable: "Ten materiał nie jest obsługiwany przez odtwarzacz.",
			title: "Coś poszło nie tak.",
			unexpected: "Wystąpił nieoczekiwany błąd."
		},
		common: {
			empty: "",
			ok: "Zamknij"
		},
		menu: {
			settings: "Ustawienia",
			quality: "Jakość",
			audio: "Dźwięk",
			default: "Domyślne",
			speed: "Szybkość",
			captions: "Napisy",
			playbackRate: "Szybkość odtwarzania",
			back: "Wstecz",
			off: "Wyłączone",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Napisy"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/pt-BR.js
var pt_BR_exports = /* @__PURE__ */ __exportAll({ default: () => pt_BR_default });
var pt_BR_default;
var init_pt_BR = __esmMin((() => {
	pt_BR_default = {
		buttons: {
			play: "Reproduzir",
			pause: "Pausar",
			replay: "Reproduzir novamente",
			mute: "Silenciar",
			unmute: "Ativar o som"
		},
		seek: {
			forward: "Avançar {seconds} segundos",
			backward: "Retroceder {seconds} segundos"
		},
		fullscreen: {
			enter: "Entrar em tela cheia",
			exit: "Sair da tela cheia"
		},
		captions: {
			enable: "Ativar legendas",
			disable: "Desativar legendas"
		},
		pip: {
			enter: "Entrar em picture-in-picture",
			exit: "Sair do picture-in-picture"
		},
		live: {
			playing: "Reproduzindo ao vivo",
			seekToEdge: "Ir para a transmissão ao vivo",
			badge: "Ao vivo"
		},
		cast: {
			start: "Iniciar transmissão",
			stop: "Parar transmissão",
			connecting: "Conectando"
		},
		airplay: {
			start: "Iniciar AirPlay",
			stop: "Parar AirPlay"
		},
		slider: { seek: "Buscar" },
		time: {
			current: "Tempo atual",
			duration: "Duração",
			remaining: "Tempo restante",
			elapsedSuffix: "{duration} de tempo decorrido",
			durationSuffix: "{duration} de duração",
			remainingSuffix: "Restam {duration}",
			showElapsed: "Mostrar tempo decorrido, {duration}.",
			showDuration: "Mostrar duração, {duration}.",
			showRemaining: "Mostrar tempo restante, {duration}.",
			toggleElapsed: "Alternar entre o tempo decorrido e o tempo restante.",
			toggleDuration: "Alternar entre a duração e o tempo restante.",
			position: "{current} de {duration}",
			unknown: "Mídia não carregada, o tempo é desconhecido."
		},
		playback: { rate: "Velocidade de reprodução {rate}" },
		volume: {
			mutedValue: "{percent}, silenciado",
			muted: "Silenciado",
			label: "Nível de volume",
			value: "Nível de volume {value}"
		},
		status: {
			captionsOn: "Legendas ativadas",
			captionsOff: "Legendas desativadas",
			paused: "Pausado",
			playing: "Reproduzindo",
			fullscreen: "Tela cheia",
			pip: "Picture-in-picture",
			exitPip: "Sair do picture-in-picture",
			seekedTo: "Posição alterada para {time}"
		},
		container: { label: "Reprodutor de mídia" },
		errors: {
			aborted: "Você interrompeu a reprodução da mídia antes de ela terminar.",
			network: "Não foi possível carregar esta mídia devido a um problema de rede ou do servidor.",
			decode: "Não foi possível reproduzir esta mídia. Ela pode estar corrompida ou seu navegador pode não suportar o formato.",
			source: "Não foi possível carregar esta mídia. Ela pode estar indisponível ou seu navegador pode não suportar o formato.",
			encrypted: "Não foi possível reproduzir esta mídia porque não foi possível descriptografá-la.",
			unplayable: "Esta mídia não é suportada pelo reprodutor.",
			title: "Algo deu errado.",
			unexpected: "Ocorreu um erro inesperado."
		},
		common: {
			empty: "",
			ok: "Fechar"
		},
		menu: {
			settings: "Configurações",
			quality: "Qualidade",
			audio: "Áudio",
			default: "Padrão",
			speed: "Velocidade",
			captions: "Legendas",
			playbackRate: "Velocidade de reprodução",
			back: "Voltar",
			off: "Desativado",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Legendas"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/pt-PT.js
var pt_PT_exports = /* @__PURE__ */ __exportAll({ default: () => pt_PT_default });
var pt_PT_default;
var init_pt_PT = __esmMin((() => {
	pt_PT_default = {
		buttons: {
			play: "Reproduzir",
			pause: "Pausar",
			replay: "Reiniciar",
			mute: "Desativar som",
			unmute: "Ativar som"
		},
		seek: {
			forward: "Avançar {seconds} segundos",
			backward: "Recuar {seconds} segundos"
		},
		fullscreen: {
			enter: "Ecrã inteiro",
			exit: "Sair do ecrã inteiro"
		},
		captions: {
			enable: "Ativar legendas",
			disable: "Desativar legendas"
		},
		pip: {
			enter: "Imagem em imagem",
			exit: "Sair do modo de imagem em imagem"
		},
		live: {
			playing: "A reproduzir em direto",
			seekToEdge: "Ir para a emissão em direto",
			badge: "Em direto"
		},
		cast: {
			start: "Iniciar transmissão",
			stop: "Parar transmissão",
			connecting: "A ligar"
		},
		airplay: {
			start: "Iniciar AirPlay",
			stop: "Parar AirPlay"
		},
		slider: { seek: "Procurar" },
		time: {
			current: "Tempo atual",
			duration: "Duração",
			remaining: "Tempo restante",
			elapsedSuffix: "{duration} de tempo decorrido",
			durationSuffix: "{duration} de duração",
			remainingSuffix: "Restam {duration}",
			showElapsed: "Mostrar tempo decorrido, {duration}.",
			showDuration: "Mostrar duração, {duration}.",
			showRemaining: "Mostrar tempo restante, {duration}.",
			toggleElapsed: "Alternar entre o tempo decorrido e o tempo restante.",
			toggleDuration: "Alternar entre a duração e o tempo restante.",
			position: "{current} de {duration}",
			unknown: "Conteúdo multimédia não carregado, tempo desconhecido."
		},
		playback: { rate: "Velocidade de reprodução {rate}" },
		volume: {
			mutedValue: "{percent}, sem som",
			muted: "Sem som",
			label: "Nível de volume",
			value: "Nível de volume {value}"
		},
		status: {
			captionsOn: "Legendas ativadas",
			captionsOff: "Legendas desativadas",
			paused: "Em pausa",
			playing: "A reproduzir",
			fullscreen: "Ecrã inteiro",
			pip: "Imagem em imagem",
			exitPip: "Sair do modo de imagem em imagem",
			seekedTo: "Posição alterada para {time}"
		},
		container: { label: "Leitor multimédia" },
		errors: {
			aborted: "Parou a reprodução do conteúdo multimédia antes de esta terminar.",
			network: "Não foi possível carregar este conteúdo multimédia devido a um problema de rede ou do servidor.",
			decode: "Não foi possível reproduzir este conteúdo multimédia. Pode estar danificado ou o seu navegador pode não suportar o formato.",
			source: "Não foi possível carregar este conteúdo multimédia. Pode estar indisponível ou o seu navegador pode não suportar o formato.",
			encrypted: "Não foi possível reproduzir este conteúdo multimédia porque não foi possível desencriptá-lo.",
			unplayable: "Este conteúdo multimédia não é suportado pelo leitor.",
			title: "Algo correu mal.",
			unexpected: "Ocorreu um erro inesperado."
		},
		common: {
			empty: "",
			ok: "Fechar"
		},
		menu: {
			settings: "Definições",
			quality: "Qualidade",
			audio: "Áudio",
			default: "Predefinição",
			speed: "Velocidade",
			captions: "Legendas",
			playbackRate: "Velocidade de reprodução",
			back: "Voltar",
			off: "Desativado",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Legendas"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ro.js
var ro_exports = /* @__PURE__ */ __exportAll({ default: () => ro_default });
var ro_default;
var init_ro = __esmMin((() => {
	ro_default = {
		buttons: {
			play: "Redă",
			pause: "Pauză",
			replay: "Redă din nou",
			mute: "Dezactivează sunetul",
			unmute: "Activează sunetul"
		},
		seek: {
			forward: "Derulează înainte {seconds} sec.",
			backward: "Derulează înapoi {seconds} sec."
		},
		fullscreen: {
			enter: "Ecran complet",
			exit: "Ieși din ecranul complet"
		},
		captions: {
			enable: "Activează subtitrările",
			disable: "Dezactivează subtitrările"
		},
		pip: {
			enter: "Imagine în imagine",
			exit: "Ieși din modul imagine în imagine"
		},
		live: {
			playing: "Redare în direct",
			seekToEdge: "Salt la direct",
			badge: "În direct"
		},
		cast: {
			start: "Începe proiectarea",
			stop: "Oprește proiectarea",
			connecting: "Se conectează"
		},
		airplay: {
			start: "Pornește AirPlay",
			stop: "Oprește AirPlay"
		},
		slider: { seek: "Derulare" },
		time: {
			current: "Timp curent",
			duration: "Durată",
			remaining: "Timp rămas",
			elapsedSuffix: "{duration} de timp scurs",
			durationSuffix: "{duration} durată",
			remainingSuffix: "Mai rămân {duration}",
			showElapsed: "Afișează timpul scurs, {duration}.",
			showDuration: "Afișează durata, {duration}.",
			showRemaining: "Afișează timpul rămas, {duration}.",
			toggleElapsed: "Comută între timpul scurs și timpul rămas.",
			toggleDuration: "Comută între durată și timpul rămas.",
			position: "{current} din {duration}",
			unknown: "Fișierul media nu s-a încărcat, durată necunoscută."
		},
		playback: { rate: "Rată de redare {rate}" },
		volume: {
			mutedValue: "{percent}, sunet dezactivat",
			muted: "Sunet dezactivat",
			label: "Volum",
			value: "Volum {value}"
		},
		status: {
			captionsOn: "Subtitrări activate",
			captionsOff: "Subtitrări dezactivate",
			paused: "În pauză",
			playing: "Se redă",
			fullscreen: "Ecran complet",
			pip: "Imagine în imagine",
			exitPip: "Imagine în imagine dezactivată",
			seekedTo: "S-a trecut la {time}"
		},
		container: { label: "Player media" },
		errors: {
			aborted: "Ați oprit redarea conținutului media înainte de finalizare.",
			network: "Acest conținut media nu a putut fi încărcat din cauza unei probleme de rețea sau de server.",
			decode: "Acest conținut media nu a putut fi redat. Este posibil să fie deteriorat sau browserul dvs. să nu accepte formatul său.",
			source: "Acest conținut media nu a putut fi încărcat. Este posibil să fie indisponibil sau browserul dvs. să nu accepte formatul său.",
			encrypted: "Acest conținut media nu a putut fi redat deoarece nu a putut fi decriptat.",
			unplayable: "Acest fișier media nu este acceptat de player.",
			title: "Ceva nu a funcționat corect.",
			unexpected: "A apărut o eroare neașteptată."
		},
		common: {
			empty: "",
			ok: "Închidere"
		},
		menu: {
			settings: "Setări",
			quality: "Calitate",
			audio: "Audio",
			default: "Implicit",
			speed: "Viteză",
			captions: "Subtitrări",
			playbackRate: "Rată de redare",
			back: "Înapoi",
			off: "Dezactivat",
			auto: "Automat",
			autoWithLabel: "Automat ({label})",
			subtitles: "Subtitrări"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/ru.js
var ru_exports = /* @__PURE__ */ __exportAll({ default: () => ru_default });
var ru_default;
var init_ru = __esmMin((() => {
	ru_default = {
		buttons: {
			play: "Воспроизвести",
			pause: "Приостановить",
			replay: "Воспроизвести снова",
			mute: "Отключить звук",
			unmute: "Включить звук"
		},
		seek: {
			forward: "Перемотать вперед на {seconds} с",
			backward: "Перемотать назад на {seconds} с"
		},
		fullscreen: {
			enter: "Полноэкранный режим",
			exit: "Выйти из полноэкранного режима"
		},
		captions: {
			enable: "Включить субтитры",
			disable: "Отключить субтитры"
		},
		pip: {
			enter: "Картинка в картинке",
			exit: "Закрыть картинку в картинке"
		},
		live: {
			playing: "Прямой эфир",
			seekToEdge: "Перейти к прямому эфиру",
			badge: "Прямой эфир"
		},
		cast: {
			start: "Начать трансляцию",
			stop: "Остановить трансляцию",
			connecting: "Подключение"
		},
		airplay: {
			start: "Запустить AirPlay",
			stop: "Остановить AirPlay"
		},
		slider: { seek: "Перемотка" },
		time: {
			current: "Текущее время",
			duration: "Продолжительность",
			remaining: "Оставшееся время",
			elapsedSuffix: "{duration} прошедшего времени",
			durationSuffix: "Продолжительность {duration}",
			remainingSuffix: "Осталось {duration}",
			showElapsed: "Показать прошедшее время, {duration}.",
			showDuration: "Показать продолжительность, {duration}.",
			showRemaining: "Показать оставшееся время, {duration}.",
			toggleElapsed: "Переключение между прошедшим и оставшимся временем.",
			toggleDuration: "Переключение между продолжительностью и оставшимся временем.",
			position: "{current} / {duration}",
			unknown: "Медиафайл не загружен, время неизвестно."
		},
		playback: { rate: "Скорость воспроизведения {rate}" },
		volume: {
			mutedValue: "{percent}, без звука",
			muted: "Без звука",
			label: "Громкость",
			value: "Громкость {value}"
		},
		status: {
			captionsOn: "Субтитры включены",
			captionsOff: "Субтитры выключены",
			paused: "На паузе",
			playing: "Воспроизведение",
			fullscreen: "Полноэкранный режим",
			pip: "Картинка в картинке",
			exitPip: "Режим «картинка в картинке» выключен",
			seekedTo: "Переход к отметке {time}"
		},
		container: { label: "Медиаплеер" },
		errors: {
			aborted: "Вы остановили воспроизведение медиафайла до его завершения.",
			network: "Не удалось загрузить этот медиафайл из-за проблемы с сетью или сервером.",
			decode: "Не удалось воспроизвести этот медиафайл. Возможно, он поврежден или ваш браузер не поддерживает его формат.",
			source: "Не удалось загрузить этот медиафайл. Возможно, он недоступен или ваш браузер не поддерживает его формат.",
			encrypted: "Не удалось воспроизвести этот медиафайл, так как его не удалось расшифровать.",
			unplayable: "Этот медиафайл не поддерживается плеером.",
			title: "Что-то пошло не так.",
			unexpected: "Произошла непредвиденная ошибка."
		},
		common: {
			empty: "",
			ok: "Закрыть"
		},
		menu: {
			settings: "Настройки",
			quality: "Качество",
			audio: "Аудио",
			default: "По умолчанию",
			speed: "Скорость",
			captions: "Субтитры",
			playbackRate: "Скорость воспроизведения",
			back: "Назад",
			off: "Выкл.",
			auto: "Авто",
			autoWithLabel: "Авто ({label})",
			subtitles: "Субтитры"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/sk.js
var sk_exports = /* @__PURE__ */ __exportAll({ default: () => sk_default });
var sk_default;
var init_sk = __esmMin((() => {
	sk_default = {
		buttons: {
			play: "Prehrať",
			pause: "Pozastaviť",
			replay: "Prehrať znova",
			mute: "Stlmiť",
			unmute: "Zrušiť stlmenie"
		},
		seek: {
			forward: "Posunúť dopredu o {seconds} s",
			backward: "Posunúť dozadu o {seconds} s"
		},
		fullscreen: {
			enter: "Režim celej obrazovky",
			exit: "Ukončiť režim celej obrazovky"
		},
		captions: {
			enable: "Zapnúť titulky",
			disable: "Vypnúť titulky"
		},
		pip: {
			enter: "Obraz v obraze",
			exit: "Ukončiť obraz v obraze"
		},
		live: {
			playing: "Prehráva sa naživo",
			seekToEdge: "Prejsť na živé vysielanie",
			badge: "Naživo"
		},
		cast: {
			start: "Spustiť prenos",
			stop: "Zastaviť prenos",
			connecting: "Pripájanie"
		},
		airplay: {
			start: "Spustiť AirPlay",
			stop: "Zastaviť AirPlay"
		},
		slider: { seek: "Posun" },
		time: {
			current: "Aktuálny čas",
			duration: "Čas trvania",
			remaining: "Zostávajúci čas",
			elapsedSuffix: "{duration} uplynulého času",
			durationSuffix: "{duration} trvania",
			remainingSuffix: "Zostáva {duration}",
			showElapsed: "Zobraziť uplynulý čas, {duration}.",
			showDuration: "Zobraziť trvanie, {duration}.",
			showRemaining: "Zobraziť zostávajúci čas, {duration}.",
			toggleElapsed: "Prepínanie medzi uplynulým a zostávajúcim časom.",
			toggleDuration: "Prepínanie medzi trvaním a zostávajúcim časom.",
			position: "{current} / {duration}",
			unknown: "Médium sa nenačítalo, čas nie je známy."
		},
		playback: { rate: "Rýchlosť prehrávania {rate}" },
		volume: {
			mutedValue: "{percent}, stlmené",
			muted: "Stlmené",
			label: "Hlasitosť",
			value: "Hlasitosť {value}"
		},
		status: {
			captionsOn: "Titulky zapnuté",
			captionsOff: "Titulky vypnuté",
			paused: "Pozastavené",
			playing: "Prehráva sa",
			fullscreen: "Celá obrazovka",
			pip: "Obraz v obraze",
			exitPip: "Obraz v obraze vypnutý",
			seekedTo: "Presunuté na {time}"
		},
		container: { label: "Prehrávač médií" },
		errors: {
			aborted: "Zastavili ste prehrávanie média pred jeho dokončením.",
			network: "Toto médium sa nepodarilo načítať pre problém so sieťou alebo serverom.",
			decode: "Toto médium sa nepodarilo prehrať. Môže byť poškodené alebo váš prehliadač nemusí podporovať jeho formát.",
			source: "Toto médium sa nepodarilo načítať. Môže byť nedostupné alebo váš prehliadač nemusí podporovať jeho formát.",
			encrypted: "Toto médium sa nepodarilo prehrať, pretože sa ho nepodarilo dešifrovať.",
			unplayable: "Toto médium prehrávač nepodporuje.",
			title: "Niečo sa pokazilo.",
			unexpected: "Vyskytla sa neočakávaná chyba."
		},
		common: {
			empty: "",
			ok: "Zatvoriť"
		},
		menu: {
			settings: "Nastavenia",
			quality: "Kvalita",
			audio: "Zvuk",
			default: "Predvolené",
			speed: "Rýchlosť",
			captions: "Titulky",
			playbackRate: "Rýchlosť prehrávania",
			back: "Späť",
			off: "Vypnuté",
			auto: "Automaticky",
			autoWithLabel: "Automaticky ({label})",
			subtitles: "Titulky"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/sl.js
var sl_exports = /* @__PURE__ */ __exportAll({ default: () => sl_default });
var sl_default;
var init_sl = __esmMin((() => {
	sl_default = {
		buttons: {
			play: "Predvajaj",
			pause: "Začasno ustavi",
			replay: "Predvajaj ponovno",
			mute: "Izklopi zvok",
			unmute: "Vklopi zvok"
		},
		seek: {
			forward: "Preskoči naprej {seconds} sek.",
			backward: "Preskoči nazaj {seconds} sek."
		},
		fullscreen: {
			enter: "Celozaslonski prikaz",
			exit: "Izhod iz celozaslonskega prikaza"
		},
		captions: {
			enable: "Vklopi podnapise",
			disable: "Izklopi podnapise"
		},
		pip: {
			enter: "Slika v sliki",
			exit: "Izhod iz slike v sliki"
		},
		live: {
			playing: "Predvajanje v živo",
			seekToEdge: "Skoči na predvajanje v živo",
			badge: "V živo"
		},
		cast: {
			start: "Začni predvajanje na zaslonu",
			stop: "Ustavi predvajanje na zaslonu",
			connecting: "Povezovanje"
		},
		airplay: {
			start: "Zaženi AirPlay",
			stop: "Ustavi AirPlay"
		},
		slider: { seek: "Premikanje" },
		time: {
			current: "Trenutni čas",
			duration: "Trajanje",
			remaining: "Preostali čas",
			elapsedSuffix: "{duration} preteklega časa",
			durationSuffix: "{duration} trajanja",
			remainingSuffix: "Preostane {duration}",
			showElapsed: "Prikaži pretekli čas, {duration}.",
			showDuration: "Prikaži trajanje, {duration}.",
			showRemaining: "Prikaži preostali čas, {duration}.",
			toggleElapsed: "Preklopi med preteklim in preostalim časom.",
			toggleDuration: "Preklopi med trajanjem in preostalim časom.",
			position: "{current} / {duration}",
			unknown: "Predstavnostna vsebina se ni naložila, čas ni znan."
		},
		playback: { rate: "Hitrost predvajanja {rate}" },
		volume: {
			mutedValue: "{percent}, zvok izklopljen",
			muted: "Zvok izklopljen",
			label: "Glasnost",
			value: "Glasnost {value}"
		},
		status: {
			captionsOn: "Podnapisi vklopljeni",
			captionsOff: "Podnapisi izklopljeni",
			paused: "Začasno ustavljeno",
			playing: "Predvajanje",
			fullscreen: "Celozaslonski prikaz",
			pip: "Slika v sliki",
			exitPip: "Izhod iz slike v sliki",
			seekedTo: "Premaknjeno: {time}"
		},
		container: { label: "Medijski predvajalnik" },
		errors: {
			aborted: "Predvajanje predstavnostne vsebine ste prekinili, preden se je končalo.",
			network: "Te predstavnostne vsebine ni bilo mogoče naložiti zaradi težave z omrežjem ali strežnikom.",
			decode: "Te predstavnostne vsebine ni bilo mogoče predvajati. Morda je poškodovana ali pa brskalnik ne podpira njene oblike zapisa.",
			source: "Te predstavnostne vsebine ni bilo mogoče naložiti. Morda ni na voljo ali pa brskalnik ne podpira njene oblike zapisa.",
			encrypted: "Te predstavnostne vsebine ni bilo mogoče predvajati, ker je ni bilo mogoče dešifrirati.",
			unplayable: "Predvajalnik ne podpira te predstavnostne vsebine.",
			title: "Nekaj je šlo narobe.",
			unexpected: "Prišlo je do nepričakovane napake."
		},
		common: {
			empty: "",
			ok: "Zapri"
		},
		menu: {
			settings: "Nastavitve",
			quality: "Kakovost",
			audio: "Zvok",
			default: "Privzeto",
			speed: "Hitrost",
			captions: "Podnapisi",
			playbackRate: "Hitrost predvajanja",
			back: "Nazaj",
			off: "Izklopljeno",
			auto: "Samodejno",
			autoWithLabel: "Samodejno ({label})",
			subtitles: "Podnapisi"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/sr.js
var sr_exports = /* @__PURE__ */ __exportAll({ default: () => sr_default });
var sr_default;
var init_sr = __esmMin((() => {
	sr_default = {
		buttons: {
			play: "Pusti",
			pause: "Pauziraj",
			replay: "Ponovi",
			mute: "Utišaj",
			unmute: "Poništi utišavanje"
		},
		seek: {
			forward: "Premotaj unapred {seconds} sek.",
			backward: "Premotaj unazad {seconds} sek."
		},
		fullscreen: {
			enter: "Režim celog ekrana",
			exit: "Izađi iz režima celog ekrana"
		},
		captions: {
			enable: "Uključi titlove",
			disable: "Isključi titlove"
		},
		pip: {
			enter: "Slika u slici",
			exit: "Izađi iz slike u slici"
		},
		live: {
			playing: "Reprodukcija uživo",
			seekToEdge: "Idi na prenos uživo",
			badge: "Uživo"
		},
		cast: {
			start: "Započni prebacivanje",
			stop: "Zaustavi prebacivanje",
			connecting: "Povezivanje"
		},
		airplay: {
			start: "Pokreni AirPlay",
			stop: "Zaustavi AirPlay"
		},
		slider: { seek: "Premotavanje" },
		time: {
			current: "Trenutno vreme",
			duration: "Vreme trajanja",
			remaining: "Preostalo vreme",
			elapsedSuffix: "{duration} proteklog vremena",
			durationSuffix: "{duration} trajanja",
			remainingSuffix: "Preostalo {duration}",
			showElapsed: "Prikaži proteklo vreme, {duration}.",
			showDuration: "Prikaži trajanje, {duration}.",
			showRemaining: "Prikaži preostalo vreme, {duration}.",
			toggleElapsed: "Prebacivanje između proteklog i preostalog vremena.",
			toggleDuration: "Prebacivanje između trajanja i preostalog vremena.",
			position: "{current} / {duration}",
			unknown: "Medijski sadržaj nije učitan, vreme nije poznato."
		},
		playback: { rate: "Brzina reprodukcije {rate}" },
		volume: {
			mutedValue: "{percent}, utišano",
			muted: "Utišano",
			label: "Jačina zvuka",
			value: "Jačina zvuka {value}"
		},
		status: {
			captionsOn: "Titlovi uključeni",
			captionsOff: "Titlovi isključeni",
			paused: "Pauzirano",
			playing: "Reprodukuje se",
			fullscreen: "Režim celog ekrana",
			pip: "Slika u slici",
			exitPip: "Izađi iz slike u slici",
			seekedTo: "Premotano: {time}"
		},
		container: { label: "Medija plejer" },
		errors: {
			aborted: "Zaustavili ste reprodukciju medijskog sadržaja pre nego što se završila.",
			network: "Ovaj medijski sadržaj nije moguće učitati zbog problema sa mrežom ili serverom.",
			decode: "Ovaj medijski sadržaj nije moguće reprodukovati. Možda je oštećen ili vaš pregledač ne podržava njegov format.",
			source: "Ovaj medijski sadržaj nije moguće učitati. Možda nije dostupan ili vaš pregledač ne podržava njegov format.",
			encrypted: "Ovaj medijski sadržaj nije moguće reprodukovati jer ga nije moguće dešifrovati.",
			unplayable: "Plejer ne podržava ovaj medijski sadržaj.",
			title: "Nešto je pošlo po zlu.",
			unexpected: "Došlo je do neočekivane greške."
		},
		common: {
			empty: "",
			ok: "Zatvori"
		},
		menu: {
			settings: "Podešavanja",
			quality: "Kvalitet",
			audio: "Zvuk",
			default: "Podrazumevano",
			speed: "Brzina",
			captions: "Titlovi",
			playbackRate: "Brzina reprodukcije",
			back: "Nazad",
			off: "Isključeno",
			auto: "Automatski",
			autoWithLabel: "Automatski ({label})",
			subtitles: "Titlovi"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/sv.js
var sv_exports = /* @__PURE__ */ __exportAll({ default: () => sv_default });
var sv_default;
var init_sv = __esmMin((() => {
	sv_default = {
		buttons: {
			play: "Spela upp",
			pause: "Pausa",
			replay: "Spela upp igen",
			mute: "Ljud av",
			unmute: "Ljud på"
		},
		seek: {
			forward: "Hoppa framåt {seconds} sekunder",
			backward: "Hoppa bakåt {seconds} sekunder"
		},
		fullscreen: {
			enter: "Fullskärm",
			exit: "Avsluta fullskärm"
		},
		captions: {
			enable: "Aktivera textning",
			disable: "Inaktivera textning"
		},
		pip: {
			enter: "Bild-i-bild",
			exit: "Avsluta bild-i-bild"
		},
		live: {
			playing: "Sänds live",
			seekToEdge: "Gå till live",
			badge: "Live"
		},
		cast: {
			start: "Börja casta",
			stop: "Sluta casta",
			connecting: "Ansluter"
		},
		airplay: {
			start: "Starta AirPlay",
			stop: "Stoppa AirPlay"
		},
		slider: { seek: "Spola" },
		time: {
			current: "Aktuell tid",
			duration: "Total tid",
			remaining: "Återstående tid",
			elapsedSuffix: "{duration} förfluten tid",
			durationSuffix: "{duration} total tid",
			remainingSuffix: "{duration} kvar",
			showElapsed: "Visa förfluten tid, {duration}.",
			showDuration: "Visa total tid, {duration}.",
			showRemaining: "Visa återstående tid, {duration}.",
			toggleElapsed: "Växla mellan förfluten och återstående tid.",
			toggleDuration: "Växla mellan total tid och återstående tid.",
			position: "{current} av {duration}",
			unknown: "Mediet laddades inte, okänd tid."
		},
		playback: { rate: "Uppspelningshastighet {rate}" },
		volume: {
			mutedValue: "{percent}, tystat",
			muted: "Tystat",
			label: "Volym",
			value: "Volym {value}"
		},
		status: {
			captionsOn: "Textning på",
			captionsOff: "Textning av",
			paused: "Pausad",
			playing: "Spelas upp",
			fullscreen: "Fullskärm",
			pip: "Bild-i-bild",
			exitPip: "Bild-i-bild avslutat",
			seekedTo: "Hoppade till {time}"
		},
		container: { label: "Mediaspelare" },
		errors: {
			aborted: "Du avbröt uppspelningen av mediet innan den var klar.",
			network: "Det gick inte att läsa in det här mediet på grund av ett nätverks- eller serverfel.",
			decode: "Det här mediet kunde inte spelas upp. Det kan vara skadat eller så stöder din webbläsare inte formatet.",
			source: "Det här mediet kunde inte läsas in. Det kan vara otillgängligt eller så stöder din webbläsare inte formatet.",
			encrypted: "Det här mediet kunde inte spelas upp eftersom det inte gick att dekryptera.",
			unplayable: "Det här mediet stöds inte av spelaren.",
			title: "Något gick fel.",
			unexpected: "Ett oväntat fel inträffade."
		},
		common: {
			empty: "",
			ok: "Stäng"
		},
		menu: {
			settings: "Inställningar",
			quality: "Kvalitet",
			audio: "Ljud",
			default: "Standard",
			speed: "Hastighet",
			captions: "Textning",
			playbackRate: "Uppspelningshastighet",
			back: "Tillbaka",
			off: "Av",
			auto: "Auto",
			autoWithLabel: "Auto ({label})",
			subtitles: "Undertexter"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/te.js
var te_exports = /* @__PURE__ */ __exportAll({ default: () => te_default });
var te_default;
var init_te = __esmMin((() => {
	te_default = {
		buttons: {
			play: "ప్లే చేయండి",
			pause: "పాజ్ చేయండి",
			replay: "రీప్లే చేయండి",
			mute: "మ్యూట్ చేయండి",
			unmute: "అన్‌మ్యూట్ చేయండి"
		},
		seek: {
			forward: "{seconds} సెకన్లు ముందుకు వెళ్లండి",
			backward: "{seconds} సెకన్లు వెనుకకు వెళ్లండి"
		},
		fullscreen: {
			enter: "పూర్తి స్క్రీన్",
			exit: "పూర్తి స్క్రీన్ నుండి నిష్క్రమించండి"
		},
		captions: {
			enable: "క్యాప్షన్‌లను ఆన్ చేయండి",
			disable: "క్యాప్షన్‌లను ఆఫ్ చేయండి"
		},
		pip: {
			enter: "పిక్చర్-ఇన్-పిక్చర్",
			exit: "పిక్చర్-ఇన్-పిక్చర్ నుండి నిష్క్రమించండి"
		},
		live: {
			playing: "లైవ్‌లో ప్లే అవుతోంది",
			seekToEdge: "లైవ్‌కు వెళ్లండి",
			badge: "లైవ్"
		},
		cast: {
			start: "ప్రసారం ప్రారంభించండి",
			stop: "ప్రసారం ఆపండి",
			connecting: "కనెక్ట్ అవుతోంది"
		},
		airplay: {
			start: "AirPlay ప్రారంభించండి",
			stop: "AirPlay ఆపండి"
		},
		slider: { seek: "సీక్ చేయండి" },
		time: {
			current: "ప్రస్తుత సమయం",
			duration: "వ్యవధి",
			remaining: "మిగిలిన సమయం",
			elapsedSuffix: "{duration} గడిచిన సమయం",
			durationSuffix: "{duration} వ్యవధి",
			remainingSuffix: "{duration} మిగిలి ఉంది",
			showElapsed: "గడిచిన సమయం చూపండి, {duration}.",
			showDuration: "వ్యవధి చూపండి, {duration}.",
			showRemaining: "మిగిలిన సమయం చూపండి, {duration}.",
			toggleElapsed: "గడిచిన సమయం మరియు మిగిలిన సమయం మధ్య మార్చండి.",
			toggleDuration: "వ్యవధి మరియు మిగిలిన సమయం మధ్య మార్చండి.",
			position: "{current} / {duration}",
			unknown: "మీడియా లోడ్ కాలేదు, సమయం తెలియదు."
		},
		playback: { rate: "ప్లేబ్యాక్ రేట్ {rate}" },
		volume: {
			mutedValue: "{percent}, మ్యూట్ చేయబడింది",
			muted: "మ్యూట్ చేయబడింది",
			label: "వాల్యూమ్",
			value: "వాల్యూమ్ {value}"
		},
		status: {
			captionsOn: "క్యాప్షన్‌లు ఆన్",
			captionsOff: "క్యాప్షన్‌లు ఆఫ్",
			paused: "పాజ్ చేయబడింది",
			playing: "ప్లే అవుతోంది",
			fullscreen: "పూర్తి స్క్రీన్",
			pip: "పిక్చర్ ఇన్ పిక్చర్",
			exitPip: "పిక్చర్ ఇన్ పిక్చర్ నుండి నిష్క్రమించండి",
			seekedTo: "{time}కి తరలించబడింది"
		},
		container: { label: "మీడియా ప్లేయర్" },
		errors: {
			aborted: "మీడియా ప్లేబ్యాక్ పూర్తి కాకముందే మీరు దాన్ని ఆపివేశారు.",
			network: "నెట్‌వర్క్ లేదా సర్వర్ సమస్య కారణంగా ఈ మీడియాను లోడ్ చేయడం సాధ్యం కాలేదు.",
			decode: "ఈ మీడియాను ప్లే చేయడం సాధ్యం కాలేదు. అది పాడైపోయి ఉండవచ్చు, లేదా దాని ఫార్మాట్‌కు మీ బ్రౌజర్ మద్దతు ఇవ్వకపోవచ్చు.",
			source: "ఈ మీడియాను లోడ్ చేయడం సాధ్యం కాలేదు. అది అందుబాటులో లేకపోవచ్చు, లేదా దాని ఫార్మాట్‌కు మీ బ్రౌజర్ మద్దతు ఇవ్వకపోవచ్చు.",
			encrypted: "డీక్రిప్ట్ చేయడం సాధ్యం కానందున ఈ మీడియాను ప్లే చేయడం సాధ్యం కాలేదు.",
			unplayable: "ఈ మీడియాకు ప్లేయర్ మద్దతు ఇవ్వదు.",
			title: "ఏదో తప్పు జరిగింది.",
			unexpected: "ఊహించని లోపం సంభవించింది."
		},
		common: {
			empty: "",
			ok: "మూసివేయండి"
		},
		menu: {
			settings: "సెట్టింగ్‌లు",
			quality: "నాణ్యత",
			audio: "ఆడియో",
			default: "డిఫాల్ట్",
			speed: "వేగం",
			captions: "క్యాప్షన్‌లు",
			playbackRate: "ప్లేబ్యాక్ రేట్",
			back: "వెనుకకు",
			off: "ఆఫ్",
			auto: "ఆటో",
			autoWithLabel: "ఆటో ({label})",
			subtitles: "ఉపశీర్షికలు"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/th.js
var th_exports = /* @__PURE__ */ __exportAll({ default: () => th_default });
var th_default;
var init_th = __esmMin((() => {
	th_default = {
		buttons: {
			play: "เล่น",
			pause: "หยุดชั่วคราว",
			replay: "เล่นซ้ำ",
			mute: "ปิดเสียง",
			unmute: "เปิดเสียง"
		},
		seek: {
			forward: "กรอไปข้างหน้า {seconds} วินาที",
			backward: "ย้อนกลับ {seconds} วินาที"
		},
		fullscreen: {
			enter: "เต็มหน้าจอ",
			exit: "ออกจากโหมดเต็มหน้าจอ"
		},
		captions: {
			enable: "เปิดคำบรรยาย",
			disable: "ปิดคำบรรยาย"
		},
		pip: {
			enter: "ภาพซ้อนภาพ",
			exit: "ออกจากภาพซ้อนภาพ"
		},
		live: {
			playing: "กำลังถ่ายทอดสด",
			seekToEdge: "ไปยังจุดถ่ายทอดสด",
			badge: "ถ่ายทอดสด"
		},
		cast: {
			start: "เริ่มแคสต์",
			stop: "หยุดแคสต์",
			connecting: "กำลังเชื่อมต่อ"
		},
		airplay: {
			start: "เริ่ม AirPlay",
			stop: "หยุด AirPlay"
		},
		slider: { seek: "แถบเลื่อนค้นหา" },
		time: {
			current: "เวลาปัจจุบัน",
			duration: "ระยะเวลา",
			remaining: "เวลาที่เหลือ",
			elapsedSuffix: "เวลาที่ผ่านไป {duration}",
			durationSuffix: "ระยะเวลา {duration}",
			remainingSuffix: "เหลือ {duration}",
			showElapsed: "แสดงเวลาที่ผ่านไป {duration}",
			showDuration: "แสดงระยะเวลา {duration}",
			showRemaining: "แสดงเวลาที่เหลือ {duration}",
			toggleElapsed: "สลับระหว่างเวลาที่ผ่านไปกับเวลาที่เหลือ",
			toggleDuration: "สลับระหว่างระยะเวลากับเวลาที่เหลือ",
			position: "{current} จาก {duration}",
			unknown: "ไม่ได้โหลดสื่อ ไม่ทราบเวลา"
		},
		playback: { rate: "อัตราการเล่น {rate}" },
		volume: {
			mutedValue: "{percent}, ปิดเสียงแล้ว",
			muted: "ปิดเสียงแล้ว",
			label: "ระดับเสียง",
			value: "ระดับเสียง {value}"
		},
		status: {
			captionsOn: "คำบรรยายเปิดอยู่",
			captionsOff: "คำบรรยายปิดอยู่",
			paused: "หยุดชั่วคราวอยู่",
			playing: "กำลังเล่น",
			fullscreen: "เต็มหน้าจอ",
			pip: "ภาพซ้อนภาพ",
			exitPip: "ออกจากภาพซ้อนภาพแล้ว",
			seekedTo: "เลื่อนไปที่ {time}"
		},
		container: { label: "เครื่องเล่นสื่อ" },
		errors: {
			aborted: "คุณหยุดเล่นสื่อก่อนที่จะเล่นจบ",
			network: "ไม่สามารถโหลดสื่อนี้ได้เนื่องจากปัญหาของเครือข่ายหรือเซิร์ฟเวอร์",
			decode: "ไม่สามารถเล่นสื่อนี้ได้ สื่ออาจเสียหายหรือเบราว์เซอร์ของคุณอาจไม่รองรับรูปแบบของสื่อ",
			source: "ไม่สามารถโหลดสื่อนี้ได้ สื่ออาจไม่พร้อมใช้งานหรือเบราว์เซอร์ของคุณอาจไม่รองรับรูปแบบของสื่อ",
			encrypted: "ไม่สามารถเล่นสื่อนี้ได้เนื่องจากไม่สามารถถอดรหัสได้",
			unplayable: "เครื่องเล่นสื่อไม่รองรับสื่อนี้",
			title: "เกิดข้อผิดพลาด",
			unexpected: "เกิดข้อผิดพลาดที่ไม่คาดคิด"
		},
		common: {
			empty: "",
			ok: "ปิด"
		},
		menu: {
			settings: "การตั้งค่า",
			quality: "คุณภาพ",
			audio: "เสียง",
			default: "ค่าเริ่มต้น",
			speed: "ความเร็ว",
			captions: "คำบรรยาย",
			playbackRate: "อัตราการเล่น",
			back: "กลับ",
			off: "ปิด",
			auto: "อัตโนมัติ",
			autoWithLabel: "อัตโนมัติ ({label})",
			subtitles: "คำบรรยาย"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/tr.js
var tr_exports = /* @__PURE__ */ __exportAll({ default: () => tr_default });
var tr_default;
var init_tr = __esmMin((() => {
	tr_default = {
		buttons: {
			play: "Oynat",
			pause: "Duraklat",
			replay: "Yeniden oynat",
			mute: "Sesi kapat",
			unmute: "Sesi aç"
		},
		seek: {
			forward: "{seconds} saniye ileri sar",
			backward: "{seconds} saniye geri sar"
		},
		fullscreen: {
			enter: "Tam ekran",
			exit: "Tam ekrandan çık"
		},
		captions: {
			enable: "Altyazıları aç",
			disable: "Altyazıları kapat"
		},
		pip: {
			enter: "Resim içinde resim",
			exit: "Resim içinde resimden çık"
		},
		live: {
			playing: "Canlı oynatılıyor",
			seekToEdge: "Canlı yayına git",
			badge: "Canlı"
		},
		cast: {
			start: "Yayınlamayı başlat",
			stop: "Yayınlamayı durdur",
			connecting: "Bağlanıyor"
		},
		airplay: {
			start: "AirPlay'i başlat",
			stop: "AirPlay'i durdur"
		},
		slider: { seek: "Sar" },
		time: {
			current: "Geçen süre",
			duration: "Toplam süre",
			remaining: "Kalan süre",
			elapsedSuffix: "{duration} geçen süre",
			durationSuffix: "{duration} toplam süre",
			remainingSuffix: "{duration} kaldı",
			showElapsed: "Geçen süreyi göster, {duration}.",
			showDuration: "Toplam süreyi göster, {duration}.",
			showRemaining: "Kalan süreyi göster, {duration}.",
			toggleElapsed: "Geçen süre ile kalan süre arasında geçiş yap.",
			toggleDuration: "Toplam süre ile kalan süre arasında geçiş yap.",
			position: "{current} / {duration}",
			unknown: "Medya yüklenmedi, süre bilinmiyor."
		},
		playback: { rate: "Oynatma hızı {rate}" },
		volume: {
			mutedValue: "{percent}, sessiz",
			muted: "Sessiz",
			label: "Ses",
			value: "Ses {value}"
		},
		status: {
			captionsOn: "Altyazılar açık",
			captionsOff: "Altyazılar kapalı",
			paused: "Duraklatıldı",
			playing: "Oynatılıyor",
			fullscreen: "Tam ekran",
			pip: "Resim içinde resim",
			exitPip: "Resim içinde resimden çık",
			seekedTo: "{time} konumuna gidildi"
		},
		container: { label: "Medya oynatıcı" },
		errors: {
			aborted: "Medyanın oynatılmasını bitmeden durdurdunuz.",
			network: "Bir ağ veya sunucu sorunu nedeniyle bu medya yüklenemedi.",
			decode: "Bu medya oynatılamadı. Bozuk olabilir veya tarayıcınız biçimini desteklemiyor olabilir.",
			source: "Bu medya yüklenemedi. Kullanılamıyor olabilir veya tarayıcınız biçimini desteklemiyor olabilir.",
			encrypted: "Şifresi çözülemediği için bu medya oynatılamadı.",
			unplayable: "Bu medya, oynatıcı tarafından desteklenmiyor.",
			title: "Bir şeyler ters gitti.",
			unexpected: "Beklenmeyen bir hata oluştu."
		},
		common: {
			empty: "",
			ok: "Kapat"
		},
		menu: {
			settings: "Ayarlar",
			quality: "Kalite",
			audio: "Ses",
			default: "Varsayılan",
			speed: "Hız",
			captions: "Altyazılar",
			playbackRate: "Oynatma hızı",
			back: "Geri",
			off: "Kapalı",
			auto: "Otomatik",
			autoWithLabel: "Otomatik ({label})",
			subtitles: "Altyazılar"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/uk.js
var uk_exports = /* @__PURE__ */ __exportAll({ default: () => uk_default });
var uk_default;
var init_uk = __esmMin((() => {
	uk_default = {
		buttons: {
			play: "Відтворити",
			pause: "Призупинити",
			replay: "Відтворити знову",
			mute: "Вимкнути звук",
			unmute: "Увімкнути звук"
		},
		seek: {
			forward: "Перемотати вперед на {seconds} с",
			backward: "Перемотати назад на {seconds} с"
		},
		fullscreen: {
			enter: "Повноекранний режим",
			exit: "Вийти з повноекранного режиму"
		},
		captions: {
			enable: "Увімкнути субтитри",
			disable: "Вимкнути субтитри"
		},
		pip: {
			enter: "Картинка в картинці",
			exit: "Вийти з режиму «картинка в картинці»"
		},
		live: {
			playing: "Прямий ефір",
			seekToEdge: "Перейти до прямого ефіру",
			badge: "Наживо"
		},
		cast: {
			start: "Почати трансляцію",
			stop: "Зупинити трансляцію",
			connecting: "Підключення"
		},
		airplay: {
			start: "Запустити AirPlay",
			stop: "Зупинити AirPlay"
		},
		slider: { seek: "Перемотка" },
		time: {
			current: "Поточний час",
			duration: "Тривалість",
			remaining: "Час, що залишився",
			elapsedSuffix: "{duration} минулого часу",
			durationSuffix: "Тривалість {duration}",
			remainingSuffix: "Залишилось {duration}",
			showElapsed: "Показати минулий час, {duration}.",
			showDuration: "Показати тривалість, {duration}.",
			showRemaining: "Показати час, що залишився, {duration}.",
			toggleElapsed: "Перемикання між минулим часом і часом, що залишився.",
			toggleDuration: "Перемикання між тривалістю і часом, що залишився.",
			position: "{current} / {duration}",
			unknown: "Медіафайл не завантажено, час невідомий."
		},
		playback: { rate: "Швидкість відтворення {rate}" },
		volume: {
			mutedValue: "{percent}, звук вимкнено",
			muted: "Звук вимкнено",
			label: "Гучність",
			value: "Гучність {value}"
		},
		status: {
			captionsOn: "Субтитри увімкнено",
			captionsOff: "Субтитри вимкнено",
			paused: "На паузі",
			playing: "Відтворення",
			fullscreen: "Повноекранний режим",
			pip: "Картинка в картинці",
			exitPip: "Режим «картинка в картинці» вимкнено",
			seekedTo: "Перехід до позначки {time}"
		},
		container: { label: "Медіапрогравач" },
		errors: {
			aborted: "Ви зупинили відтворення медіафайлу до його завершення.",
			network: "Не вдалося завантажити цей медіафайл через проблему з мережею або сервером.",
			decode: "Не вдалося відтворити цей медіафайл. Можливо, він пошкоджений або ваш браузер не підтримує його формат.",
			source: "Не вдалося завантажити цей медіафайл. Можливо, він недоступний або ваш браузер не підтримує його формат.",
			encrypted: "Не вдалося відтворити цей медіафайл, оскільки його не вдалося розшифрувати.",
			unplayable: "Цей медіафайл не підтримується програвачем.",
			title: "Щось пішло не так.",
			unexpected: "Сталася неочікувана помилка."
		},
		common: {
			empty: "",
			ok: "Закрити"
		},
		menu: {
			settings: "Налаштування",
			quality: "Якість",
			audio: "Аудіо",
			default: "За умовчанням",
			speed: "Швидкість",
			captions: "Субтитри",
			playbackRate: "Швидкість відтворення",
			back: "Назад",
			off: "Вимкнено",
			auto: "Авто",
			autoWithLabel: "Авто ({label})",
			subtitles: "Субтитри"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/vi.js
var vi_exports = /* @__PURE__ */ __exportAll({ default: () => vi_default });
var vi_default;
var init_vi = __esmMin((() => {
	vi_default = {
		buttons: {
			play: "Phát",
			pause: "Tạm dừng",
			replay: "Phát lại",
			mute: "Tắt tiếng",
			unmute: "Bật tiếng"
		},
		seek: {
			forward: "Tua tới {seconds} giây",
			backward: "Tua lại {seconds} giây"
		},
		fullscreen: {
			enter: "Toàn màn hình",
			exit: "Thoát toàn màn hình"
		},
		captions: {
			enable: "Bật phụ đề",
			disable: "Tắt phụ đề"
		},
		pip: {
			enter: "Hình trong hình",
			exit: "Thoát chế độ hình trong hình"
		},
		live: {
			playing: "Đang phát trực tiếp",
			seekToEdge: "Tua đến phần đang phát trực tiếp",
			badge: "Trực tiếp"
		},
		cast: {
			start: "Bắt đầu truyền phát",
			stop: "Dừng truyền phát",
			connecting: "Đang kết nối"
		},
		airplay: {
			start: "Bắt đầu AirPlay",
			stop: "Dừng AirPlay"
		},
		slider: { seek: "Tua" },
		time: {
			current: "Thời gian hiện tại",
			duration: "Thời lượng",
			remaining: "Thời gian còn lại",
			elapsedSuffix: "Đã phát {duration}",
			durationSuffix: "Thời lượng {duration}",
			remainingSuffix: "Còn {duration}",
			showElapsed: "Hiển thị thời gian đã phát, {duration}.",
			showDuration: "Hiển thị thời lượng, {duration}.",
			showRemaining: "Hiển thị thời gian còn lại, {duration}.",
			toggleElapsed: "Chuyển đổi giữa thời gian đã phát và thời gian còn lại.",
			toggleDuration: "Chuyển đổi giữa thời lượng và thời gian còn lại.",
			position: "{current} trên {duration}",
			unknown: "Phương tiện không tải được, thời gian không xác định."
		},
		playback: { rate: "Tốc độ phát lại {rate}" },
		volume: {
			mutedValue: "{percent}, đã tắt tiếng",
			muted: "Đã tắt tiếng",
			label: "Âm lượng",
			value: "Âm lượng {value}"
		},
		status: {
			captionsOn: "Đã bật phụ đề",
			captionsOff: "Đã tắt phụ đề",
			paused: "Đã tạm dừng",
			playing: "Đang phát",
			fullscreen: "Toàn màn hình",
			pip: "Hình trong hình",
			exitPip: "Đã thoát chế độ hình trong hình",
			seekedTo: "Đã tua đến {time}"
		},
		container: { label: "Trình phát đa phương tiện" },
		errors: {
			aborted: "Bạn đã dừng phát phương tiện này trước khi kết thúc.",
			network: "Không thể tải phương tiện này do sự cố mạng hoặc máy chủ.",
			decode: "Không thể phát phương tiện này. Phương tiện có thể bị hỏng hoặc trình duyệt của bạn không hỗ trợ định dạng này.",
			source: "Không thể tải phương tiện này. Phương tiện có thể không còn khả dụng hoặc trình duyệt của bạn không hỗ trợ định dạng này.",
			encrypted: "Không thể phát phương tiện này vì không thể giải mã.",
			unplayable: "Trình phát không hỗ trợ phương tiện này.",
			title: "Đã xảy ra lỗi.",
			unexpected: "Đã xảy ra lỗi không mong muốn."
		},
		common: {
			empty: "",
			ok: "Đóng"
		},
		menu: {
			settings: "Cài đặt",
			quality: "Chất lượng",
			audio: "Âm thanh",
			default: "Mặc định",
			speed: "Tốc độ",
			captions: "Phụ đề",
			playbackRate: "Tốc độ phát lại",
			back: "Quay lại",
			off: "Tắt",
			auto: "Tự động",
			autoWithLabel: "Tự động ({label})",
			subtitles: "Phụ đề"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/zh-CN.js
var zh_CN_exports = /* @__PURE__ */ __exportAll({ default: () => zh_CN_default });
var zh_CN_default;
var init_zh_CN = __esmMin((() => {
	zh_CN_default = {
		buttons: {
			play: "播放",
			pause: "暂停",
			replay: "重新播放",
			mute: "静音",
			unmute: "取消静音"
		},
		seek: {
			forward: "快进 {seconds} 秒",
			backward: "快退 {seconds} 秒"
		},
		fullscreen: {
			enter: "全屏",
			exit: "退出全屏"
		},
		captions: {
			enable: "开启字幕",
			disable: "关闭字幕"
		},
		pip: {
			enter: "画中画",
			exit: "退出画中画"
		},
		live: {
			playing: "正在直播",
			seekToEdge: "跳转到直播",
			badge: "直播"
		},
		cast: {
			start: "开始投屏",
			stop: "停止投屏",
			connecting: "正在连接"
		},
		airplay: {
			start: "启动 AirPlay",
			stop: "停止 AirPlay"
		},
		slider: { seek: "定位" },
		time: {
			current: "当前时间",
			duration: "时长",
			remaining: "剩余时间",
			elapsedSuffix: "已播放时间 {duration}",
			durationSuffix: "时长 {duration}",
			remainingSuffix: "剩余 {duration}",
			showElapsed: "显示已播放时间，{duration}。",
			showDuration: "显示时长，{duration}。",
			showRemaining: "显示剩余时间，{duration}。",
			toggleElapsed: "在已播放时间和剩余时间之间切换。",
			toggleDuration: "在时长和剩余时间之间切换。",
			position: "{current}，总时长 {duration}",
			unknown: "媒体未加载，时间未知。"
		},
		playback: { rate: "播放速度 {rate}" },
		volume: {
			mutedValue: "{percent}，已静音",
			muted: "已静音",
			label: "音量",
			value: "音量 {value}"
		},
		status: {
			captionsOn: "字幕已开启",
			captionsOff: "字幕已关闭",
			paused: "已暂停",
			playing: "正在播放",
			fullscreen: "全屏",
			pip: "画中画",
			exitPip: "退出画中画",
			seekedTo: "已跳转至 {time}"
		},
		container: { label: "媒体播放器" },
		errors: {
			aborted: "您在媒体播放完成前停止了播放。",
			network: "由于网络或服务器问题，无法加载此媒体。",
			decode: "无法播放此媒体。文件可能已损坏，或您的浏览器可能不支持其格式。",
			source: "无法加载此媒体。媒体可能已不可用，或您的浏览器可能不支持其格式。",
			encrypted: "无法播放此媒体，因为无法解密。",
			unplayable: "播放器不支持此媒体。",
			title: "出现问题。",
			unexpected: "发生了意外错误。"
		},
		common: {
			empty: "",
			ok: "关闭"
		},
		menu: {
			settings: "设置",
			quality: "画质",
			audio: "音频",
			default: "默认",
			speed: "速度",
			captions: "字幕",
			playbackRate: "播放速度",
			back: "返回",
			off: "关闭",
			auto: "自动",
			autoWithLabel: "自动（{label}）",
			subtitles: "字幕"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/zh-TW.js
var zh_TW_exports = /* @__PURE__ */ __exportAll({ default: () => zh_TW_default });
var zh_TW_default;
var init_zh_TW = __esmMin((() => {
	zh_TW_default = {
		buttons: {
			play: "播放",
			pause: "暫停",
			replay: "重播",
			mute: "靜音",
			unmute: "取消靜音"
		},
		seek: {
			forward: "快轉 {seconds} 秒",
			backward: "倒轉 {seconds} 秒"
		},
		fullscreen: {
			enter: "全螢幕",
			exit: "退出全螢幕"
		},
		captions: {
			enable: "開啟字幕",
			disable: "關閉字幕"
		},
		pip: {
			enter: "子母畫面",
			exit: "離開子母畫面"
		},
		live: {
			playing: "正在直播",
			seekToEdge: "跳轉至直播",
			badge: "直播"
		},
		cast: {
			start: "開始投放",
			stop: "停止投放",
			connecting: "連線中"
		},
		airplay: {
			start: "啟動 AirPlay",
			stop: "停止 AirPlay"
		},
		slider: { seek: "定位" },
		time: {
			current: "目前時間",
			duration: "總時長",
			remaining: "剩餘時間",
			elapsedSuffix: "已播放時間 {duration}",
			durationSuffix: "時長 {duration}",
			remainingSuffix: "剩餘 {duration}",
			showElapsed: "顯示已播放時間，{duration}。",
			showDuration: "顯示時長，{duration}。",
			showRemaining: "顯示剩餘時間，{duration}。",
			toggleElapsed: "在已播放時間和剩餘時間之間切換。",
			toggleDuration: "在時長和剩餘時間之間切換。",
			position: "{current}，總時長 {duration}",
			unknown: "媒體未載入，時間未知。"
		},
		playback: { rate: "播放速率 {rate}" },
		volume: {
			mutedValue: "{percent}，已靜音",
			muted: "已靜音",
			label: "音量",
			value: "音量 {value}"
		},
		status: {
			captionsOn: "字幕已開啟",
			captionsOff: "字幕已關閉",
			paused: "已暫停",
			playing: "正在播放",
			fullscreen: "全螢幕",
			pip: "子母畫面",
			exitPip: "離開子母畫面",
			seekedTo: "已跳轉至 {time}"
		},
		container: { label: "媒體播放器" },
		errors: {
			aborted: "您在媒體播放完成前停止了播放。",
			network: "由於網路或伺服器問題，無法載入此媒體。",
			decode: "無法播放此媒體。檔案可能已損毀，或您的瀏覽器可能不支援其格式。",
			source: "無法載入此媒體。媒體可能無法使用，或您的瀏覽器可能不支援其格式。",
			encrypted: "無法播放此媒體，因為無法解密。",
			unplayable: "播放器不支援此媒體。",
			title: "發生問題。",
			unexpected: "發生非預期的錯誤。"
		},
		common: {
			empty: "",
			ok: "關閉"
		},
		menu: {
			settings: "設定",
			quality: "畫質",
			audio: "音訊",
			default: "預設",
			speed: "速度",
			captions: "字幕",
			playbackRate: "播放速率",
			back: "返回",
			off: "關閉",
			auto: "自動",
			autoWithLabel: "自動（{label}）",
			subtitles: "字幕"
		}
	};
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/pt.js
var pt_exports = /* @__PURE__ */ __exportAll({ default: () => pt_BR_default });
var init_pt = __esmMin((() => {
	init_pt_BR();
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/locales/zh.js
var zh_exports = /* @__PURE__ */ __exportAll({ default: () => zh_CN_default });
var init_zh = __esmMin((() => {
	init_zh_CN();
}));
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/load-locale.js
const loaders = {
	ar: () => Promise.resolve().then(() => (init_ar(), ar_exports)),
	az: () => Promise.resolve().then(() => (init_az(), az_exports)),
	bs: () => Promise.resolve().then(() => (init_bs(), bs_exports)),
	bg: () => Promise.resolve().then(() => (init_bg(), bg_exports)),
	bn: () => Promise.resolve().then(() => (init_bn(), bn_exports)),
	ca: () => Promise.resolve().then(() => (init_ca(), ca_exports)),
	cs: () => Promise.resolve().then(() => (init_cs(), cs_exports)),
	cy: () => Promise.resolve().then(() => (init_cy(), cy_exports)),
	da: () => Promise.resolve().then(() => (init_da(), da_exports)),
	de: () => Promise.resolve().then(() => (init_de(), de_exports)),
	el: () => Promise.resolve().then(() => (init_el(), el_exports)),
	es: () => Promise.resolve().then(() => (init_es(), es_exports)),
	et: () => Promise.resolve().then(() => (init_et(), et_exports)),
	eu: () => Promise.resolve().then(() => (init_eu(), eu_exports)),
	fa: () => Promise.resolve().then(() => (init_fa(), fa_exports)),
	fi: () => Promise.resolve().then(() => (init_fi(), fi_exports)),
	fr: () => Promise.resolve().then(() => (init_fr(), fr_exports)),
	gd: () => Promise.resolve().then(() => (init_gd(), gd_exports)),
	gl: () => Promise.resolve().then(() => (init_gl(), gl_exports)),
	he: () => Promise.resolve().then(() => (init_he(), he_exports)),
	hi: () => Promise.resolve().then(() => (init_hi(), hi_exports)),
	hr: () => Promise.resolve().then(() => (init_hr(), hr_exports)),
	hu: () => Promise.resolve().then(() => (init_hu(), hu_exports)),
	id: () => Promise.resolve().then(() => (init_id(), id_exports)),
	it: () => Promise.resolve().then(() => (init_it(), it_exports)),
	ja: () => Promise.resolve().then(() => (init_ja(), ja_exports)),
	ko: () => Promise.resolve().then(() => (init_ko(), ko_exports)),
	lt: () => Promise.resolve().then(() => (init_lt(), lt_exports)),
	lv: () => Promise.resolve().then(() => (init_lv(), lv_exports)),
	mr: () => Promise.resolve().then(() => (init_mr(), mr_exports)),
	nb: () => Promise.resolve().then(() => (init_nb(), nb_exports)),
	nl: () => Promise.resolve().then(() => (init_nl(), nl_exports)),
	nn: () => Promise.resolve().then(() => (init_nn(), nn_exports)),
	ne: () => Promise.resolve().then(() => (init_ne(), ne_exports)),
	oc: () => Promise.resolve().then(() => (init_oc(), oc_exports)),
	pl: () => Promise.resolve().then(() => (init_pl(), pl_exports)),
	"pt-br": () => Promise.resolve().then(() => (init_pt_BR(), pt_BR_exports)),
	"pt-pt": () => Promise.resolve().then(() => (init_pt_PT(), pt_PT_exports)),
	ro: () => Promise.resolve().then(() => (init_ro(), ro_exports)),
	ru: () => Promise.resolve().then(() => (init_ru(), ru_exports)),
	sk: () => Promise.resolve().then(() => (init_sk(), sk_exports)),
	sl: () => Promise.resolve().then(() => (init_sl(), sl_exports)),
	sr: () => Promise.resolve().then(() => (init_sr(), sr_exports)),
	sv: () => Promise.resolve().then(() => (init_sv(), sv_exports)),
	te: () => Promise.resolve().then(() => (init_te(), te_exports)),
	th: () => Promise.resolve().then(() => (init_th(), th_exports)),
	tr: () => Promise.resolve().then(() => (init_tr(), tr_exports)),
	uk: () => Promise.resolve().then(() => (init_uk(), uk_exports)),
	vi: () => Promise.resolve().then(() => (init_vi(), vi_exports)),
	"zh-cn": () => Promise.resolve().then(() => (init_zh_CN(), zh_CN_exports)),
	"zh-tw": () => Promise.resolve().then(() => (init_zh_TW(), zh_TW_exports)),
	pt: () => Promise.resolve().then(() => (init_pt(), pt_exports)),
	zh: () => Promise.resolve().then(() => (init_zh(), zh_exports))
};
/**
* Lazy-import the built-in locale pack for a tag, or its closest fallback in the {@link findLocaleKeys} chain. Resolves
* to `undefined` when that chain reaches a registered locale first or no built-in pack matches.
*
* @param tag - BCP 47 tag to load, such as `fr-CA`.
* @public
*/
async function loadLocale(tag) {
	if (hasRegisteredLocale(tag)) return void 0;
	for (const chainTag of findLocaleKeys(tag)) {
		if (hasRegisteredLocale(chainTag)) return void 0;
		const load = loaders[getLocaleKey(chainTag)];
		if (load) return flattenTranslations((await load()).default);
	}
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/resolve-text.js
/** @internal */
function resolveText(text) {
	return typeof text === "string" ? text : text.text;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/text.js
/**
* Whether a value is a text descriptor: a translation key with its English default.
*
* @param value - Value to check.
* @public
*/
function isText(value) {
	return isObject(value) && "key" in value && "text" in value;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/utils/interpolate.js
const PLACEHOLDER = /\{([^{}]+)\}/g;
function interpolate(template, params) {
	if (!params) return template;
	return template.replace(PLACEHOLDER, (match, name) => {
		return Object.hasOwn(params, name) ? String(params[name]) : match;
	});
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/translate-text.js
function translateText(text, translatorOrParams, params) {
	if (typeof text === "string") return text;
	if (typeof translatorOrParams === "function") return translatorOrParams(text, params);
	return interpolate(resolveText(text), translatorOrParams ?? params);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/i18n/translator.js
/**
* Builds a typed translator from a resolved translation map (typically from `getI18nTranslations`).
*
* @param translations - Merged translation map for the active locale.
* @param locale - BCP 47 tag associated with the map (reserved for future locale-aware behavior).
* @public
*/
function createTranslator(translations, locale) {
	const translate = (input, params) => {
		const options = params;
		const isDescriptor = typeof input !== "string";
		const key = isDescriptor ? input.key : input;
		const translation = translations[key];
		const fallback = options?.default;
		const values = options ? { ...options } : void 0;
		if (values) delete values.default;
		return interpolate(translation ?? (isDescriptor ? input.text : fallback) ?? String(key), values);
	};
	return translate;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/text-cues.js
/**
* Plain cue data from a text track's cue list, every end clamped to the media duration once that is finite.
*
* Cues delivered with a stream can be open-ended — a chapters document leaves its last chapter open, and the track
* carries that as a very large `endTime` because engines reject `Infinity` — so a consumer reading the list gets each
* cue ending no later than the media does. While the duration is unknown or infinite the ends pass through unchanged.
* Pure: the result is fresh data, never the live cues, so a store can expose it without leaking DOM objects.
*/
function clampCuesToDuration(cues, duration) {
	if (!cues) return [];
	const max = Number.isFinite(duration) && duration > 0 ? duration : Number.POSITIVE_INFINITY;
	return Array.from(cues, (cue) => ({
		startTime: cue.startTime,
		endTime: Math.min(cue.endTime, max),
		text: cue.text ?? ""
	}));
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/text-track.js
function getTrackId(track, index) {
	return track.id || `track:${index}:${track.kind}:${track.language}:${track.label}`;
}
/** Caption/subtitle tracks paired with the ids exposed through `textTrackList`, in captions menu order. */
function getSubtitlesTracks(media) {
	return getCaptionOrSubtitleTracks(Array.from(media.textTracks, (track, index) => ({
		id: getTrackId(track, index),
		kind: track.kind,
		track
	})));
}
/** Show at most one caption/subtitle track; passing `null` disables them all. */
function showOnly(tracks, active) {
	for (const { track } of tracks) {
		const mode = track === active ? "showing" : "disabled";
		if (track.mode !== mode) track.mode = mode;
	}
}
/**
* Map a media element's `crossOrigin` to a CORS mode. Per the CORS-settings attribute, any value other than
* `use-credentials` is Anonymous — including the empty string and unknown keywords.
*/
function toCorsMode(value) {
	if (isNil(value)) return null;
	return value.toLowerCase() === "use-credentials" ? "use-credentials" : "anonymous";
}
function findLocaleTrack(tracks, locale) {
	const localeKey = getLocaleKey(locale);
	const keys = findLocaleKeys(locale);
	if (localeKey !== "en" && !localeKey.startsWith(`en-`)) keys.pop();
	for (const key of keys) {
		const exact = tracks.find(({ track }) => getLocaleKey(track.language) === key);
		if (exact) return exact;
		const regional = tracks.find(({ track }) => getLocaleKey(track.language).startsWith(`${key}-`));
		if (regional) return regional;
	}
}
const textTrackFeature = definePlayerFeature({
	name: "textTrack",
	state: ({ target }) => {
		let lastShownId = null;
		return {
			textTrackList: [],
			subtitlesShowing: false,
			toggleSubtitles(forceShow) {
				const { media } = target();
				if (!isMediaTextTrackCapable(media)) return false;
				const subtitlesTracks = getSubtitlesTracks(media);
				if (!subtitlesTracks.length) return false;
				const showing = subtitlesTracks.find(({ track }) => track.mode === "showing");
				const nextShowing = forceShow ?? !showing;
				if (showing) lastShownId = showing.id;
				if (!nextShowing) {
					showOnly(subtitlesTracks, null);
					return false;
				}
				const next = showing ?? subtitlesTracks.find(({ id }) => id === lastShownId) ?? findLocaleTrack(subtitlesTracks, globalThis.navigator?.language ?? "") ?? subtitlesTracks[0];
				lastShownId = next.id;
				showOnly(subtitlesTracks, next.track);
				return true;
			},
			selectSubtitlesTrack(id) {
				const { media } = target();
				if (!isMediaTextTrackCapable(media)) return;
				const subtitlesTracks = getSubtitlesTracks(media);
				if (!subtitlesTracks.length) return;
				if (isNull(id)) {
					const showing = subtitlesTracks.find(({ track }) => track.mode === "showing");
					if (showing) lastShownId = showing.id;
					showOnly(subtitlesTracks, null);
					return;
				}
				const active = subtitlesTracks.find((entry) => entry.id === id);
				if (!active) return;
				lastShownId = active.id;
				showOnly(subtitlesTracks, active.track);
			},
			chaptersCues: [],
			thumbnailsTrack: null
		};
	},
	attach({ target, signal, set }) {
		const { media } = target;
		if (!isMediaTextTrackCapable(media)) return;
		let trackCleanup = null;
		const sync = () => {
			trackCleanup?.abort();
			trackCleanup = new AbortController();
			let chaptersTrack = null;
			let thumbnailsTextTrack = null;
			const textTrackList = [];
			let subtitlesShowing = false;
			for (let i = 0; i < media.textTracks.length; i++) {
				const track = media.textTracks[i];
				if (!chaptersTrack && track.kind === "chapters") chaptersTrack = track;
				if (!thumbnailsTextTrack && track.kind === "metadata" && track.label === "thumbnails") thumbnailsTextTrack = track;
				textTrackList.push({
					id: getTrackId(track, i),
					kind: track.kind,
					label: track.label,
					language: track.language,
					mode: track.mode
				});
				if (isCaptionOrSubtitleTrack(track) && track.mode === "showing") subtitlesShowing = true;
			}
			const chaptersCues = clampCuesToDuration(chaptersTrack?.cues, isMediaSeekCapable(media) ? media.duration : NaN);
			let thumbnailsTrack = null;
			if (thumbnailsTextTrack) thumbnailsTrack = {
				cues: thumbnailsTextTrack.cues ? Array.from(thumbnailsTextTrack.cues) : [],
				src: findTrackElement(media, thumbnailsTextTrack)?.src ?? null,
				crossOrigin: isMediaSourceCapable(media) ? toCorsMode(media.crossOrigin) : null
			};
			const tracks = isQuerySelectorAllCapable(media) && media.querySelectorAll("track") || [];
			const shadowTracks = media instanceof HTMLElement && media.shadowRoot?.querySelectorAll("track") || [];
			for (const trackEl of [...tracks, ...shadowTracks]) if (!trackEl.track?.cues?.length) listen(trackEl, "load", sync, { signal: trackCleanup.signal });
			set({
				textTrackList,
				subtitlesShowing,
				chaptersCues,
				thumbnailsTrack
			});
		};
		sync();
		const textTracks = media.textTracks;
		if (textTracks instanceof EventTarget) {
			listen(textTracks, "addtrack", sync, { signal });
			listen(textTracks, "removetrack", sync, { signal });
			listen(textTracks, "change", sync, { signal });
		}
		listen(media, "loadstart", sync, { signal });
		listen(media, "durationchange", sync, { signal });
		signal.addEventListener("abort", () => trackCleanup?.abort(), { once: true });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/signal-keys.js
const signalKeys = { seek: Symbol.for("@videojs/seek") };
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/time.js
const timeFeature = definePlayerFeature({
	name: "time",
	state: ({ target, signals, set }) => ({
		currentTime: 0,
		duration: 0,
		seeking: false,
		async seek(time) {
			const { media } = target(), signal = signals.supersede(signalKeys.seek);
			if (!isMediaSeekCapable(media) || !isMediaSourceCapable(media)) return 0;
			listen(media, "emptied", () => signals.supersede(signalKeys.seek), {
				signal,
				once: true
			});
			if (!hasMetadata(media)) {
				if (!await onEvent(media, "loadedmetadata", { signal }).catch(() => false)) return media.currentTime;
			}
			const clampedTime = Math.max(0, Math.min(time, media.duration || Infinity));
			set({
				currentTime: clampedTime,
				seeking: true
			});
			media.currentTime = clampedTime;
			await onEvent(media, "seeked", { signal }).catch(noop);
			return media.currentTime;
		}
	}),
	attach({ target, signal, set, get }) {
		const { media } = target;
		if (!isMediaSeekCapable(media)) return;
		const resolveDuration = () => {
			const { duration } = media;
			if (duration === Number.POSITIVE_INFINITY && isMediaBufferCapable(media)) {
				const { seekable } = media;
				return seekable.length > 0 ? seekable.end(seekable.length - 1) : 0;
			}
			return Number.isFinite(duration) ? duration : 0;
		};
		const sync = () => set({
			currentTime: media.currentTime,
			duration: resolveDuration(),
			seeking: media.seeking
		});
		const syncUnlessSeeking = () => {
			if (get().seeking) return;
			sync();
		};
		sync();
		listen(media, "timeupdate", syncUnlessSeeking, { signal });
		listen(media, "durationchange", sync, { signal });
		listen(media, "seeking", sync, { signal });
		listen(media, "seeked", sync, { signal });
		listen(media, "loadedmetadata", sync, { signal });
		listen(media, "emptied", sync, { signal });
		listen(media, "progress", syncUnlessSeeking, { signal });
	}
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/volume.js
/** Volume to restore when unmuting at zero. */
const UNMUTE_VOLUME = .25;
const volumeFeature = definePlayerFeature({
	name: "volume",
	state: ({ target, set }) => ({
		volume: 1,
		muted: false,
		volumeAvailability: "unavailable",
		mutedAvailability: "unavailable",
		setVolume(volume) {
			const { media } = target();
			if (!isMediaVolumeCapable(media)) return 0;
			const clamped = Math.max(0, Math.min(1, volume));
			if (clamped > 0 && media.muted) media.muted = false;
			media.volume = clamped;
			set({
				volume: media.volume,
				muted: media.muted
			});
			return media.volume;
		},
		setMuted(muted) {
			const { media } = target();
			if (!isMediaMutedCapable(media)) return false;
			media.muted = muted;
			const volumeCapable = isMediaVolumeCapable(media);
			if (!muted && volumeCapable && media.volume === 0) media.volume = UNMUTE_VOLUME;
			set({
				volume: volumeCapable ? media.volume : 1,
				muted: media.muted
			});
			return media.muted;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		const volumeCapable = isMediaVolumeCapable(media);
		const mutedCapable = isMediaMutedCapable(media);
		if (!volumeCapable && !mutedCapable) return;
		set({
			volumeAvailability: volumeCapable ? canSetVolume() : "unavailable",
			mutedAvailability: mutedCapable ? "available" : "unavailable"
		});
		const sync = () => set({
			volume: volumeCapable ? media.volume : 1,
			muted: mutedCapable ? media.muted : false
		});
		sync();
		listen(media, "volumechange", sync, { signal });
	}
});
/** Check if volume can be programmatically set (fails on iOS Safari). */
function canSetVolume() {
	const video = document.createElement("video");
	try {
		video.volume = .5;
		return video.volume === .5 ? "available" : "unsupported";
	} catch {
		return "unsupported";
	}
}
//#endregion
//#region node_modules/@videojs/core/node_modules/@videojs/store/dist/default/core/abort-controller-registry.js
/** @internal */
var AbortControllerRegistry = class {
	#base;
	#keys = /* @__PURE__ */ new Map();
	/** The attach-scoped signal. Aborts on detach or reattach. */
	get base() {
		return (this.#base ??= new AbortController()).signal;
	}
	/** Clears all keyed signals, leaving base intact. */
	clear() {
		for (const controller of this.#keys.values()) controller.abort();
		this.#keys.clear();
	}
	/** Resets base and clears all keyed signals. */
	reset() {
		this.clear();
		this.#base?.abort();
		this.#base = void 0;
	}
	/** Creates a new signal for the key, superseding any previous signal. */
	supersede(key) {
		this.#keys.get(key)?.abort();
		const controller = new AbortController();
		this.#keys.set(key, controller);
		return anyAbortSignal([this.base, controller.signal]);
	}
};
//#endregion
//#region node_modules/@videojs/core/node_modules/@videojs/store/dist/default/core/errors.js
/** @internal */
var StoreError = class extends Error {
	code;
	cause;
	constructor(code, options) {
		super(options?.message ?? code);
		this.name = "StoreError";
		this.code = code;
		this.cause = options?.cause;
	}
};
/** @internal */
function throwNoTargetError() {
	throw new StoreError("NO_TARGET");
}
//#endregion
//#region node_modules/@videojs/core/node_modules/@videojs/store/dist/default/core/selector.js
const stateContext = {
	target: throwNoTargetError,
	signals: new AbortControllerRegistry(),
	get: throwNoTargetError,
	set: throwNoTargetError
};
/**
* Create a type-safe selector for a slice's state.
*
* The selector returns the slice's state, or `undefined` if the slice is not configured in the store.
*
* @example
*   ```ts
*   const selectPlayback = createSelector(playbackSlice);
*   selectPlayback(store.state); // { paused, play, pause, ... } | undefined
*   selectPlayback.displayName; // 'playback' (from slice name)
*   ```;
*
* @param slice - The slice to create a selector for.
*/
function createSelector(slice) {
	const initialState = slice.state(stateContext);
	const keys = [...Object.keys(initialState), ...Object.keys(slice.derived ?? {})];
	const firstKey = keys[0];
	if (!firstKey) return Object.assign(() => void 0, { displayName: slice.name });
	return Object.assign((state) => {
		if (!(firstKey in state)) return void 0;
		return pick(state, keys);
	}, { displayName: slice.name });
}
//#endregion
//#region node_modules/@videojs/core/node_modules/@videojs/store/dist/default/core/state.js
let isFlushScheduled = false;
function scheduleFlush() {
	if (isFlushScheduled) return;
	isFlushScheduled = true;
	queueMicrotask(flush);
}
const pendingContainers = /* @__PURE__ */ new Set();
/** @internal */
function flush() {
	isFlushScheduled = false;
	for (const container of pendingContainers) container.flush();
	pendingContainers.clear();
}
const hasOwnProp = Object.prototype.hasOwnProperty;
var StateContainer = class {
	#current;
	#listeners = /* @__PURE__ */ new Set();
	#pending = false;
	constructor(initial) {
		this.#current = Object.freeze({ ...initial });
	}
	get current() {
		return this.#current;
	}
	patch(partial) {
		const next = { ...this.#current };
		let changed = false;
		for (const key of Reflect.ownKeys(partial)) {
			if (!hasOwnProp.call(partial, key)) continue;
			const value = partial[key];
			if (!Object.is(this.#current[key], value)) {
				next[key] = value;
				changed = true;
			}
		}
		if (changed) {
			this.#current = Object.freeze(next);
			this.#markPending();
		}
	}
	replace(next) {
		if (shallowEqual(this.#current, next)) return;
		this.#current = Object.freeze({ ...next });
		this.#markPending();
	}
	subscribe(callback, options) {
		const signal = options?.signal;
		if (signal?.aborted) return noop;
		this.#listeners.add(callback);
		if (!signal) return () => this.#listeners.delete(callback);
		const onAbort = () => this.#listeners.delete(callback);
		signal.addEventListener("abort", onAbort, { once: true });
		return () => {
			signal.removeEventListener("abort", onAbort);
			this.#listeners.delete(callback);
		};
	}
	flush() {
		if (!this.#pending) return;
		this.#pending = false;
		for (const fn of this.#listeners) fn();
	}
	#markPending() {
		this.#pending = true;
		pendingContainers.add(this);
		scheduleFlush();
	}
};
/** @internal */
function createState(initial) {
	return new StateContainer(initial);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/selectors.js
/** Select the audio track state (audioTrackList, selectAudioTrack). */
const selectAudioTrack = createSelector(audioTrackFeature);
/** Select the buffer state (buffered, seekable). */
const selectBuffer = createSelector(bufferFeature);
/** Select the controls state (controlsVisible, userActive, toggleControls, requestControlsLock). */
const selectControls = createSelector(controlsFeature);
/** Select the error state (error, dismissError). */
const selectError = createSelector(errorFeature);
/** Select the fullscreen state (isFullscreen, fullscreenAvailability, requestFullscreen, exitFullscreen). */
const selectFullscreen = createSelector(fullscreenFeature);
createSelector(liveFeature);
/** Select resolved content metadata (title, poster). */
const selectMetadata = createSelector(metadataFeature);
/**
* Select the PiP state (isPictureInPicture, pictureInPictureAvailability, requestPictureInPicture,
* exitPictureInPicture).
*/
const selectPiP = createSelector(pipFeature);
/** Select the playback state (paused, ended, play, pause). */
const selectPlayback = createSelector(playbackFeature);
/** Select the playback rate state (playbackRate, playbackRates, setPlaybackRate). */
const selectPlaybackRate = createSelector(playbackRateFeature);
/** Select the quality state (videoRenditionList, activeVideoRendition, selectVideoRendition). */
const selectQuality = createSelector(qualityFeature);
/** Select the remote playback state (remotePlaybackState, remotePlaybackAvailability, promptRemotePlayback). */
const selectRemotePlayback = createSelector(remotePlaybackFeature);
createSelector(sourceFeature);
createSelector(streamTypeFeature);
/**
* Select the text track state (textTrackList, subtitlesShowing, toggleSubtitles, selectSubtitlesTrack, chaptersCues,
* thumbnailsTrack).
*/
const selectTextTrack = createSelector(textTrackFeature);
/** Select the time state (currentTime, duration, seek). */
const selectTime = createSelector(timeFeature);
/** Select the volume state (volume, muted, setVolume, setMuted). */
const selectVolume = createSelector(volumeFeature);
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/media-actions.js
/** Swallow a rejected promise, since input actions have no caller to report it to. */
function ignoreRejection(result) {
	if (isPromise(result)) result.catch(noop);
}
const MEDIA_INPUT_ACTION_OVERRIDES = {
	togglePaused({ store }) {
		const playback = selectPlayback(store.state);
		if (!playback) return;
		ignoreRejection(playback.paused ? playback.play() : playback.pause());
	},
	toggleMuted({ store }) {
		const volume = selectVolume(store.state);
		if (!volume) return;
		volume.setMuted(!(volume.muted || volume.volume === 0));
	},
	toggleFullscreen({ store }) {
		const fullscreen = selectFullscreen(store.state);
		if (!fullscreen) return;
		ignoreRejection(fullscreen.isFullscreen ? fullscreen.exitFullscreen() : fullscreen.requestFullscreen());
	},
	togglePictureInPicture({ store }) {
		const pip = selectPiP(store.state);
		if (!pip) return;
		ignoreRejection(pip.isPictureInPicture ? pip.exitPictureInPicture() : pip.requestPictureInPicture());
	},
	seekStep({ store, value, key }) {
		const step = getMediaInputActionValue("seekStep", key, value);
		const time = selectTime(store.state);
		if (!time) return;
		time.seek(time.currentTime + step);
	},
	volumeStep({ store, value, key }) {
		const step = getMediaInputActionValue("volumeStep", key, value);
		const vol = selectVolume(store.state);
		if (!vol) return;
		vol.setVolume(vol.volume + step);
	},
	speedUp({ store }) {
		const rate = selectPlaybackRate(store.state);
		if (!rate) return;
		const { playbackRates, playbackRate } = rate;
		const idx = playbackRates.indexOf(playbackRate);
		const next = idx < 0 || idx >= playbackRates.length - 1 ? 0 : idx + 1;
		rate.setPlaybackRate(playbackRates[next]);
	},
	speedDown({ store }) {
		const rate = selectPlaybackRate(store.state);
		if (!rate) return;
		const { playbackRates, playbackRate } = rate;
		const idx = playbackRates.indexOf(playbackRate);
		const next = idx <= 0 ? playbackRates.length - 1 : idx - 1;
		rate.setPlaybackRate(playbackRates[next]);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/gesture/actions.js
/** Actions that need custom logic beyond `store.state[action]()`. */
const GESTURE_ACTION_OVERRIDES = {
	togglePaused: MEDIA_INPUT_ACTION_OVERRIDES.togglePaused,
	toggleMuted: MEDIA_INPUT_ACTION_OVERRIDES.toggleMuted,
	toggleFullscreen: MEDIA_INPUT_ACTION_OVERRIDES.toggleFullscreen,
	togglePictureInPicture: MEDIA_INPUT_ACTION_OVERRIDES.togglePictureInPicture,
	seekStep: MEDIA_INPUT_ACTION_OVERRIDES.seekStep,
	volumeStep: MEDIA_INPUT_ACTION_OVERRIDES.volumeStep,
	speedUp: MEDIA_INPUT_ACTION_OVERRIDES.speedUp,
	speedDown: MEDIA_INPUT_ACTION_OVERRIDES.speedDown
};
/** @internal */
function resolveGestureAction(name) {
	const override = GESTURE_ACTION_OVERRIDES[name];
	if (override) return override;
	return ({ store }) => {
		const method = store.state[name];
		if (isFunction(method)) ignoreRejection(method());
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/gesture/tap.js
const DOUBLETAP_WINDOW = 200;
/**
* Recognizes tap vs doubletap from quick pointer-up events.
*
* Stateful recognizer — tracks tap count and doubletap timing. The coordinator handles pointer-down timing (tap
* threshold) and calls `handleUp()` only for quick taps that passed the threshold check.
*/
var TapRecognizer = class {
	#lastTapTime = 0;
	#tapTimer = null;
	handleUp(matches, event) {
		if (matches.resolve("doubletap").length > 0) {
			const now = Date.now();
			if (now - this.#lastTapTime < DOUBLETAP_WINDOW) {
				this.#clearTimer();
				this.#lastTapTime = 0;
				matches.resolve("doubletap")[0]?.onActivate(event);
				return;
			}
			this.#lastTapTime = now;
			this.#clearTimer();
			this.#tapTimer = setTimeout(() => {
				this.#tapTimer = null;
				this.#lastTapTime = 0;
				matches.resolve("tap")[0]?.onActivate(event);
			}, DOUBLETAP_WINDOW);
			return;
		}
		matches.resolve("tap")[0]?.onActivate(event);
	}
	#clearTimer() {
		if (this.#tapTimer !== null) {
			clearTimeout(this.#tapTimer);
			this.#tapTimer = null;
		}
	}
	reset() {
		this.#clearTimer();
		this.#lastTapTime = 0;
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/gesture/create-tap-gesture.js
const recognizers = /* @__PURE__ */ new WeakMap();
function getRecognizer(target) {
	let recognizer = recognizers.get(target);
	if (recognizer) return recognizer;
	recognizer = new TapRecognizer();
	recognizers.set(target, recognizer);
	return recognizer;
}
/**
* Register a tap gesture on a target element.
*
* @example
*   ```ts
*   const cleanup = createTapGesture(
*     container,
*     (event) => {
*       store.paused ? store.play() : store.pause();
*     },
*     { pointer: 'mouse' }
*   );
*   ```;
*
* @internal
*/
function createTapGesture(target, onActivate, options) {
	return getGestureCoordinator(target).add({
		type: "tap",
		recognizer: getRecognizer(target),
		onActivate,
		pointer: options?.pointer,
		region: options?.region,
		disabled: options?.disabled,
		action: options?.action,
		value: options?.value
	});
}
/**
* Register a doubletap gesture on a target element.
*
* @example
*   ```ts
*   const cleanup = createDoubleTapGesture(
*     container,
*     (event) => {
*       store.isFullscreen ? store.exitFullscreen() : store.requestFullscreen();
*     },
*     { region: 'center' }
*   );
*   ```;
*
* @internal
*/
function createDoubleTapGesture(target, onActivate, options) {
	return getGestureCoordinator(target).add({
		type: "doubletap",
		recognizer: getRecognizer(target),
		onActivate,
		pointer: options?.pointer,
		region: options?.region,
		disabled: options?.disabled,
		action: options?.action,
		value: options?.value
	});
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/hotkey/actions.js
/** @internal */
function isHotkeyToggleAction(action) {
	return action.startsWith("toggle");
}
const HOTKEY_ACTIONS = {
	togglePaused: MEDIA_INPUT_ACTION_OVERRIDES.togglePaused,
	toggleMuted: MEDIA_INPUT_ACTION_OVERRIDES.toggleMuted,
	toggleFullscreen: MEDIA_INPUT_ACTION_OVERRIDES.toggleFullscreen,
	toggleSubtitles({ store }) {
		selectTextTrack(store.state)?.toggleSubtitles();
	},
	togglePictureInPicture: MEDIA_INPUT_ACTION_OVERRIDES.togglePictureInPicture,
	seekStep: MEDIA_INPUT_ACTION_OVERRIDES.seekStep,
	volumeStep: MEDIA_INPUT_ACTION_OVERRIDES.volumeStep,
	speedUp: MEDIA_INPUT_ACTION_OVERRIDES.speedUp,
	speedDown: MEDIA_INPUT_ACTION_OVERRIDES.speedDown,
	seekToPercent({ store, value, key }) {
		const time = selectTime(store.state);
		if (!time) return;
		const buffer = selectBuffer(store.state);
		const duration = getTimeRangeEnd({
			duration: time.duration,
			seekable: buffer?.seekable ?? []
		});
		if (duration <= 0) return;
		let percent;
		if (!isUndefined(value)) percent = value;
		else if (key >= "0" && key <= "9") percent = Number(key) * 10;
		else return;
		time.seek(percent / 100 * duration);
	}
};
/** @internal */
function resolveHotkeyAction(name) {
	return HOTKEY_ACTIONS[name];
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/hotkey/aria.js
const ARIA_MODIFIER_MAP = {
	shift: "Shift",
	ctrl: "Control",
	alt: "Alt",
	meta: "Meta"
};
const DISPLAY_MODIFIER_MAP = {
	shift: "Shift",
	ctrl: "Ctrl",
	alt: "Alt",
	meta: "Meta"
};
const MODIFIER_ORDER = [
	"ctrl",
	"shift",
	"alt",
	"meta"
];
/**
* Convert parsed key bindings to a WAI-ARIA `aria-keyshortcuts` formatted string.
*
* @example
*   ```ts
*   toAriaKeyShortcut(parseHotkeyPattern('Ctrl+Shift+f'));
*   // "Control+Shift+f"
*
*   toAriaKeyShortcut([...parseHotkeyPattern('k'), ...parseHotkeyPattern('Space')]);
*   // "k Space"
*   ```;
*
* @internal
*/
function toAriaKeyShortcut(bindings) {
	return bindings.map((b) => {
		const parts = [];
		for (const mod of MODIFIER_ORDER) if (b.modifiers.has(mod)) parts.push(ARIA_MODIFIER_MAP[mod]);
		parts.push(b.originalKey);
		return parts.join("+");
	}).join(" ");
}
/**
* Convert a parsed key binding to a compact display shortcut.
*
* @internal
*/
function toDisplayKeyShortcut(binding) {
	const parts = [];
	for (const mod of MODIFIER_ORDER) if (binding.modifiers.has(mod)) parts.push(DISPLAY_MODIFIER_MAP[mod]);
	parts.push(toDisplayKey(binding.originalKey));
	return parts.join("+");
}
function toDisplayKey(key) {
	return key.length === 1 ? key.toUpperCase() : key;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/hotkey/coordinator.js
/** @internal */
var HotkeyCoordinator = class {
	#target;
	#bindings = [];
	#nextId = 0;
	#disconnect = null;
	#docDisconnect = null;
	#activationSubscribers = /* @__PURE__ */ new Set();
	#shortcutSubscribers = /* @__PURE__ */ new Set();
	#destroyed = false;
	constructor(target) {
		this.#target = target;
	}
	subscribe(callback) {
		this.#activationSubscribers.add(callback);
		return () => this.#activationSubscribers.delete(callback);
	}
	subscribeShortcutChanges(callback) {
		this.#shortcutSubscribers.add(callback);
		return () => this.#shortcutSubscribers.delete(callback);
	}
	add(options) {
		const binding = {
			parsed: parseHotkeyPattern(options.keys),
			options,
			id: this.#nextId++
		};
		this.#bindings.push(binding);
		this.#sortBindings();
		if (options.target === "document") this.#connectDocument();
		else this.#connect();
		this.#notify();
		let removed = false;
		return () => {
			if (removed) return;
			removed = true;
			const idx = this.#bindings.indexOf(binding);
			if (idx !== -1) this.#bindings.splice(idx, 1);
			this.#maybeDisconnect();
			this.#notify();
		};
	}
	getAriaKeys(action) {
		return this.getShortcut(action).aria;
	}
	getShortcut(action, value) {
		const bindings = this.#getActionBindings(action, value);
		if (!bindings.length) return {};
		const parsed = bindings.flatMap((binding) => binding.parsed);
		const preferred = bindings[bindings.length - 1];
		return {
			aria: toAriaKeyShortcut(parsed),
			shortcut: this.#formatDisplayShortcut(preferred)
		};
	}
	destroy() {
		if (this.#destroyed) return;
		this.#destroyed = true;
		this.#disconnect?.abort();
		this.#disconnect = null;
		this.#docDisconnect?.abort();
		this.#docDisconnect = null;
		this.#bindings = [];
		this.#notify();
		this.#activationSubscribers.clear();
		this.#shortcutSubscribers.clear();
	}
	#sortBindings() {
		this.#bindings.sort((a, b) => {
			const specDiff = b.parsed[0].modifiers.size - a.parsed[0].modifiers.size;
			if (specDiff !== 0) return specDiff;
			return a.id - b.id;
		});
	}
	#connect() {
		if (this.#disconnect) return;
		this.#disconnect = new AbortController();
		listen(this.#target, "keydown", this.#handleEvent, { signal: this.#disconnect.signal });
	}
	#connectDocument() {
		if (this.#docDisconnect) return;
		this.#docDisconnect = new AbortController();
		listen(document, "keydown", this.#handleEvent, { signal: this.#docDisconnect.signal });
	}
	#maybeDisconnect() {
		const hasPlayer = this.#bindings.some((b) => b.options.target !== "document");
		const hasDoc = this.#bindings.some((b) => b.options.target === "document");
		if (!hasPlayer) {
			this.#disconnect?.abort();
			this.#disconnect = null;
		}
		if (!hasDoc) {
			this.#docDisconnect?.abort();
			this.#docDisconnect = null;
		}
	}
	#handleEvent = (event) => {
		if (isInteractionLocked(this.#target)) return;
		if (event.key === "Unidentified") return;
		if (isInteractiveActivation(event)) return;
		if (event.defaultPrevented) return;
		const editable = isEditableTarget(event);
		for (const binding of this.#bindings) {
			const { options, parsed } = binding;
			if (options.disabled) continue;
			if (event.repeat && options.repeatable === false) continue;
			if (options.target === "document" !== (event.currentTarget === document)) continue;
			for (const p of parsed) {
				if (!matchesHotkeyEvent(p, event)) continue;
				if (editable && p.modifiers.size === 0) continue;
				if (this.#activationSubscribers.size > 0) {
					const activateEvent = {
						source: "hotkey",
						action: options.action,
						value: options.value,
						event
					};
					for (const cb of this.#activationSubscribers) try {
						cb(activateEvent);
					} catch (error) {}
				}
				event.preventDefault();
				options.onActivate(event, p.originalKey);
				return;
			}
		}
	};
	#getActionBindings(action, value) {
		return this.#bindings.filter((binding) => {
			if (binding.options.disabled) return false;
			if (binding.options.action !== action) return false;
			if (isUndefined(value)) return true;
			return binding.options.value === value;
		}).sort((a, b) => a.id - b.id);
	}
	#formatDisplayShortcut(binding) {
		if (binding.options.keys === "0-9") return binding.options.keys;
		return toDisplayKeyShortcut(binding.parsed[0]);
	}
	#notify() {
		for (const subscriber of this.#shortcutSubscribers) subscriber();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/hotkey/hotkey.js
const MODIFIER_KEYS = /* @__PURE__ */ new Set([
	"shift",
	"ctrl",
	"alt",
	"meta"
]);
/**
* Parse a key pattern string into one or more bindings.
*
* @example
*   ```ts
*   parseHotkeyPattern('>');
*   // [{ modifiers: Set(), key: '>', originalKey: '>' }]
*
*   parseHotkeyPattern('0-9');
*   // 10 bindings, one per digit
*   ```;
*
* @internal
*/
function parseHotkeyPattern(pattern) {
	if (pattern === "0-9") return Array.from({ length: 10 }, (_, i) => ({
		modifiers: /* @__PURE__ */ new Set(),
		key: String(i),
		originalKey: String(i)
	}));
	const segments = pattern.split("+");
	const rawKey = segments.pop();
	const modifiers = /* @__PURE__ */ new Set();
	for (const seg of segments) {
		const lower = seg.toLowerCase();
		if (lower === "mod") modifiers.add(isMacOS() ? "meta" : "ctrl");
		else if (MODIFIER_KEYS.has(lower)) modifiers.add(lower);
	}
	return [{
		modifiers,
		key: rawKey === "Space" ? " " : rawKey.toLowerCase(),
		originalKey: rawKey
	}];
}
/**
* Single non-letter character — layout-dependent modifiers (Shift, Alt/Option) were used to produce the character
* itself, not as deliberate modifiers (e.g. Shift+. → ">", Option+Shift → ">" on some Mac layouts). Letters excluded
* because Shift changes case intentionally (k vs K). Named keys excluded because event.key.length > 1 (ArrowLeft, Tab,
* etc.).
*/
function isImplicitModifierKey(key) {
	return key.length === 1 && !/[a-z]/i.test(key);
}
/**
* Whether a parsed binding matches a keyboard event.
*
* @internal
*/
function matchesHotkeyEvent(binding, event) {
	if (event.key === "Unidentified") return false;
	if (event.key.toLowerCase() !== binding.key) return false;
	const implicit = isImplicitModifierKey(event.key);
	const shiftKey = implicit ? event.shiftKey && binding.modifiers.has("shift") : event.shiftKey;
	const altKey = implicit ? event.altKey && binding.modifiers.has("alt") : event.altKey;
	if (shiftKey !== binding.modifiers.has("shift")) return false;
	if (event.ctrlKey !== binding.modifiers.has("ctrl")) return false;
	if (altKey !== binding.modifiers.has("alt")) return false;
	if (event.metaKey !== binding.modifiers.has("meta")) return false;
	return true;
}
const coordinators = /* @__PURE__ */ new WeakMap();
/**
* Look up or create the hotkey coordinator for a target element.
*
* @internal
*/
function getHotkeyCoordinator(target) {
	let coordinator = coordinators.get(target);
	if (!coordinator) {
		coordinator = new HotkeyCoordinator(target);
		coordinators.set(target, coordinator);
	}
	return coordinator;
}
/**
* Register a hotkey binding on a target element.
*
* @example
*   ```ts
*   const cleanup = createHotkey(container, {
*     keys: 'k',
*     onActivate: () => (store.paused ? store.play() : store.pause()),
*   });
*
*   // Later: remove the binding
*   cleanup();
*   ```;
*
* @returns A cleanup function that removes the binding.
* @internal
*/
function createHotkey(target, options) {
	const coordinator = getHotkeyCoordinator(target);
	const key = parseHotkeyPattern(options.keys)[0]?.originalKey;
	return coordinator.add({
		...options,
		value: getMediaInputActionValue(options.action ?? "", key, options.value)
	});
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/hotkey/hotkey-events.js
/**
* Dispatched when display shortcut metadata changes (e.g. coordinator updates). Tooltips may listen.
*
* @internal
*/
const HOTKEY_SHORTCUT_CHANGE_EVENT = "hotkey-shortcut-change";
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/store/features/presets.js
const videoFeatures = [
	playbackFeature,
	playbackRateFeature,
	qualityFeature,
	audioTrackFeature,
	volumeFeature,
	timeFeature,
	sourceFeature,
	bufferFeature,
	fullscreenFeature,
	pipFeature,
	remotePlaybackFeature,
	controlsFeature,
	textTrackFeature,
	errorFeature,
	metadataFeature
];
const audioFeatures = [
	playbackFeature,
	playbackRateFeature,
	volumeFeature,
	timeFeature,
	sourceFeature,
	bufferFeature,
	errorFeature,
	metadataFeature
];
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/button.js
/** @internal */
function createButton(options) {
	const { onActivate, isDisabled } = options;
	return {
		role: "button",
		tabIndex: 0,
		onClick(event) {
			if (isDisabled()) {
				event.preventDefault();
				return;
			}
			onActivate(event, (event.detail ?? 0) > 0 ? "pointer" : "virtual");
		},
		onPointerDown(event) {
			if (isDisabled()) event.preventDefault();
		},
		onMouseDown(event) {
			if (isDisabled()) event.preventDefault();
		},
		onKeyDown(event) {
			if (event.target !== event.currentTarget) return;
			if (isDisabled()) {
				if (event.key !== "Tab") event.preventDefault();
				return;
			}
			if (event.key === "Enter") {
				event.preventDefault();
				onActivate(event, "keyboard");
			} else if (event.key === " ") event.preventDefault();
		},
		onKeyUp(event) {
			if (event.target !== event.currentTarget) return;
			if (isDisabled()) return;
			if (event.key === " ") onActivate(event, "keyboard");
		}
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/container.js
/** @internal */
const DEFAULT_CONTAINER_ROLE = "group";
/** @internal */
function applyContainerAttrs(element) {
	if (!element.hasAttribute("role")) element.setAttribute("role", DEFAULT_CONTAINER_ROLE);
	if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", String(0));
}
/** @internal */
function focusContainer(element) {
	const active = getDeepActiveElement(element.ownerDocument);
	if (!active || active === element.ownerDocument.body || !containsComposed(element, active)) element.focus({ preventScroll: true });
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/dismiss-layer.js
/** @internal */
function createDismissLayer(options) {
	const { transition } = options;
	const state = transition.state;
	const abort = new AbortController();
	let docAbort = null;
	function open(element) {
		if (abort.signal.aborted) return null;
		const { active, status } = state.current;
		if (active && status !== "ending") return null;
		if (status === "ending") transition.cancel();
		return transition.open(element);
	}
	function close(element) {
		const { active, status } = state.current;
		if (abort.signal.aborted || !active || status === "ending") return null;
		return transition.close(element);
	}
	function setupDocumentListeners() {
		cleanupDocumentListeners();
		if (typeof document === "undefined") return;
		docAbort = new AbortController();
		const { signal } = docAbort;
		listen(document, "keydown", handleKeydown, { signal });
		options.onDocumentActive?.(signal);
	}
	function cleanupDocumentListeners() {
		docAbort?.abort();
		docAbort = null;
	}
	function handleKeydown(event) {
		if (event.key !== "Escape") return;
		if (event.defaultPrevented) return;
		if (!state.current.active) return;
		if (!(options.closeOnEscape?.() ?? true)) return;
		options.onEscapeDismiss(event);
	}
	const unsubscribe = state.subscribe(() => {
		if (state.current.active && state.current.status !== "ending") setupDocumentListeners();
		else cleanupDocumentListeners();
	});
	abort.signal.addEventListener("abort", () => {
		unsubscribe();
		transition.destroy();
		cleanupDocumentListeners();
	});
	function destroy() {
		if (abort.signal.aborted) return;
		abort.abort();
	}
	return {
		input: state,
		open,
		close,
		signal: abort.signal,
		destroy
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/dialog.js
/**
* Manages modal dialog transitions, dismissal, initial focus, focus trapping, and focus restoration.
*
* @internal
*/
function createDialog(options) {
	let popupElement = null;
	let triggerElement = null;
	let previousFocus = null;
	let requestedInteractionRoot = null;
	let activeInteractionRoot = null;
	let releaseInteractionLock = null;
	let focusFrame = 0;
	const isolatedElements = /* @__PURE__ */ new Map();
	const modality = createState({ documentModal: true });
	const layer = createDismissLayer({
		transition: options.transition,
		closeOnEscape: options.closeOnEscape,
		onEscapeDismiss(event) {
			if (!shouldHandleScopedEvent(event)) return;
			event.preventDefault();
			event.stopPropagation();
			applyClose();
		},
		onDocumentActive(signal) {
			listen(document, "keydown", handleDocumentKeydown, {
				capture: true,
				signal
			});
			listen(document, "focusin", handleDocumentFocusin, { signal });
		}
	});
	const state = layer.input;
	function applyOpen() {
		previousFocus = getDeepActiveElement();
		const opening = layer.open(() => popupElement);
		if (!opening) return;
		resolveInteractionRoot();
		isolateBackground();
		options.onOpenChange(true);
		scheduleInitialFocus();
		opening.then(() => {
			if (layer.signal.aborted || !state.current.active || state.current.status !== "idle") return;
			options.onOpenChangeComplete?.(true);
		});
	}
	function applyClose() {
		const closing = layer.close(popupElement);
		if (!closing) return;
		cancelAnimationFrame(focusFrame);
		focusFrame = 0;
		options.onOpenChange(false);
		closing.then(() => {
			if (layer.signal.aborted || state.current.active) return;
			const active = getDeepActiveElement();
			const focusLeftScope = activeInteractionRoot && active instanceof Element && !containsComposed(activeInteractionRoot, active);
			restoreBackground();
			const restoreTarget = triggerElement?.isConnected ? triggerElement : previousFocus;
			if (!focusLeftScope && restoreTarget?.isConnected) restoreTarget.focus();
			previousFocus = null;
			options.onOpenChangeComplete?.(false);
		});
	}
	function scheduleInitialFocus() {
		cancelAnimationFrame(focusFrame);
		focusFrame = requestAnimationFrame(() => {
			focusFrame = 0;
			if (layer.signal.aborted || !state.current.active || !popupElement) return;
			(popupElement.querySelector("[autofocus]") ?? getTabbableElements(popupElement)[0] ?? popupElement).focus();
		});
	}
	function handleDocumentKeydown(event) {
		if (event.key !== "Tab" || !state.current.active || !popupElement || !modality.current.documentModal) return;
		const tabbable = getTabbableElements(popupElement);
		if (tabbable.length === 0) {
			event.preventDefault();
			popupElement.focus();
			return;
		}
		const active = getDeepActiveElement();
		const first = tabbable[0];
		const last = tabbable[tabbable.length - 1];
		if (event.shiftKey && (active === first || !active || !containsComposed(popupElement, active))) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && (active === last || !active || !containsComposed(popupElement, active))) {
			event.preventDefault();
			first.focus();
		}
	}
	function handleDocumentFocusin(event) {
		if (!state.current.active || !popupElement) return;
		if (event.target instanceof Element && containsComposed(popupElement, event.target)) return;
		if (activeInteractionRoot && event.target instanceof Element && !containsComposed(activeInteractionRoot, event.target)) return;
		(getTabbableElements(popupElement)[0] ?? popupElement).focus();
	}
	function setTriggerElement(el) {
		triggerElement = el;
	}
	function setPopupElement(el) {
		if (popupElement !== el) restoreBackground();
		popupElement = el;
		resolveInteractionRoot();
		if (el && state.current.active) isolateBackground();
		const active = getDeepActiveElement();
		if (el && state.current.active && (!active || !containsComposed(el, active))) scheduleInitialFocus();
	}
	function setInteractionRoot(el) {
		if (requestedInteractionRoot === el) return;
		restoreBackground();
		requestedInteractionRoot = el;
		resolveInteractionRoot();
		if (popupElement && state.current.active) isolateBackground();
	}
	layer.signal.addEventListener("abort", () => {
		cancelAnimationFrame(focusFrame);
		focusFrame = 0;
		restoreBackground();
		popupElement = null;
		triggerElement = null;
		previousFocus = null;
		requestedInteractionRoot = null;
		activeInteractionRoot = null;
	});
	return {
		input: state,
		modality,
		triggerProps: { onClick() {
			applyOpen();
		} },
		open: applyOpen,
		close: applyClose,
		setTriggerElement,
		setPopupElement,
		setInteractionRoot,
		destroy: layer.destroy
	};
	function isolateBackground() {
		if (!popupElement?.isConnected || isolatedElements.size > 0 || releaseInteractionLock) return;
		resolveInteractionRoot();
		walkAncestors(popupElement, (current) => {
			if (current === activeInteractionRoot || current === popupElement?.ownerDocument.body) return true;
			if (current.assignedSlot) {
				for (const sibling of current.assignedSlot.assignedElements({ flatten: true })) if (sibling !== current && sibling instanceof HTMLElement) makeInert(sibling);
				return;
			}
			const parent = current.parentElement;
			if (parent) {
				for (const sibling of parent.children) if (sibling !== current && sibling instanceof HTMLElement) makeInert(sibling);
				return;
			}
			const root = current.getRootNode();
			if (!(root instanceof ShadowRoot)) return void 0;
			for (const sibling of root.children) if (sibling !== current && sibling instanceof HTMLElement) makeInert(sibling);
		}, { composed: true });
		if (activeInteractionRoot) releaseInteractionLock = lockInteractions(activeInteractionRoot);
	}
	function makeInert(element) {
		isolatedElements.set(element, element.hasAttribute("inert"));
		element.setAttribute("inert", "");
	}
	function restoreBackground() {
		for (const [element, wasInert] of isolatedElements) if (!wasInert) element.removeAttribute("inert");
		isolatedElements.clear();
		releaseInteractionLock?.();
		releaseInteractionLock = null;
	}
	function resolveInteractionRoot() {
		activeInteractionRoot = requestedInteractionRoot && popupElement && containsComposed(requestedInteractionRoot, popupElement) ? requestedInteractionRoot : null;
		modality.patch({ documentModal: !activeInteractionRoot });
	}
	function shouldHandleScopedEvent(event) {
		if (!activeInteractionRoot) return true;
		const target = event.target instanceof Element ? event.target : getDeepActiveElement();
		return target instanceof Element && containsComposed(activeInteractionRoot, target);
	}
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/transition.js
/**
* Shared data attributes for open/close transition state. Spread into component data-attrs objects.
*
* @internal
*/
const TransitionDataAttrs = {
	/** Present during the open transition. */
	transitionStarting: "data-starting-style",
	/** Present during the close transition. */
	transitionEnding: "data-ending-style"
};
/** @internal */
function getTransitionFlags(status) {
	return {
		transitionStarting: status === "starting",
		transitionEnding: status === "ending"
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/indicator/lifecycle.js
/** @internal */
var IndicatorCloseController = class {
	#timer = null;
	#close;
	#getDelay;
	constructor(close, getDelay) {
		this.#close = close;
		this.#getDelay = getDelay;
	}
	arm() {
		this.clear();
		this.#timer = setTimeout(() => {
			this.#timer = null;
			this.#close();
		}, this.#getDelay());
	}
	clear() {
		if (this.#timer === null) return;
		clearTimeout(this.#timer);
		this.#timer = null;
	}
	close() {
		this.clear();
		this.#close();
	}
	destroy() {
		this.clear();
	}
};
/** @internal */
var IndicatorVisibilityCoordinator = class {
	#handles = /* @__PURE__ */ new Set();
	register(handle) {
		this.#handles.add(handle);
		return () => this.#handles.delete(handle);
	}
	show(handle) {
		for (const nextHandle of this.#handles) if (nextHandle !== handle) nextHandle.close();
	}
};
/** @internal */
function getIndicatorCloseDelay(props) {
	return props.closeDelay ?? 800;
}
/** @internal */
function isIndicatorPresent(current, transition) {
	return current.open || transition.active;
}
/** @internal */
function getRenderedIndicatorState(current, snapshot, transition) {
	const payload = current.open ? current : snapshot;
	return {
		...payload,
		open: current.open && transition.active,
		generation: current.open ? current.generation : payload.generation,
		...getTransitionFlags(transition.status)
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/input-action.js
/** @internal */
function toInputActionEvent(event) {
	return {
		action: event.action,
		value: event.value,
		source: event.source,
		key: "key" in event.event ? event.event.key : void 0,
		repeat: "repeat" in event.event ? event.event.repeat : void 0
	};
}
/** @internal */
function getMediaSnapshot(store) {
	if (!store) return {};
	const state = store.state;
	const time = selectTime(state);
	const textTrack = selectTextTrack(state);
	return {
		paused: selectPlayback(state)?.paused,
		volume: selectVolume(state)?.volume,
		muted: selectVolume(state)?.muted,
		playbackRate: selectPlaybackRate(state)?.playbackRate,
		isFullscreen: selectFullscreen(state)?.isFullscreen,
		subtitlesShowing: textTrack?.subtitlesShowing,
		subtitlesAvailable: textTrack ? (textTrack.textTrackList ?? []).some(isCaptionOrSubtitleTrack) : void 0,
		isPictureInPicture: selectPiP(state)?.isPictureInPicture,
		currentTime: time?.currentTime,
		duration: time?.duration,
		seeking: time?.seeking
	};
}
/** @internal */
function subscribeToInputActions(container, callback) {
	const handleEvent = (event) => callback(toInputActionEvent(event));
	const gestureUnsubscribe = getGestureCoordinator(container).subscribe(handleEvent);
	const hotkeyUnsubscribe = getHotkeyCoordinator(container).subscribe(handleEvent);
	return () => {
		gestureUnsubscribe();
		hotkeyUnsubscribe();
	};
}
const indicatorVisibilityCoordinators = /* @__PURE__ */ new WeakMap();
/** @internal */
function getIndicatorVisibilityCoordinator(container) {
	let coordinator = indicatorVisibilityCoordinators.get(container);
	if (!coordinator) {
		coordinator = new IndicatorVisibilityCoordinator();
		indicatorVisibilityCoordinators.set(container, coordinator);
	}
	return coordinator;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/utils/layout.js
/** @internal */
function forceLayout(element) {
	element?.getBoundingClientRect();
}
/** @internal */
function createDOMRect(left, top, width, height) {
	const right = left + width;
	const bottom = top + height;
	return {
		x: left,
		y: top,
		width,
		height,
		top,
		right,
		bottom,
		left,
		toJSON() {
			return {
				x: left,
				y: top,
				width,
				height,
				top,
				right,
				bottom,
				left
			};
		}
	};
}
/** @internal */
function intersectDOMRects(firstRect, secondRect) {
	const left = Math.max(firstRect.left, secondRect.left);
	const top = Math.max(firstRect.top, secondRect.top);
	const right = Math.min(firstRect.right, secondRect.right);
	const bottom = Math.min(firstRect.bottom, secondRect.bottom);
	return createDOMRect(left, top, Math.max(0, right - left), Math.max(0, bottom - top));
}
/** @internal */
function getPositioningBoundaryRect(boundaryElement) {
	const viewportRect = document.documentElement.getBoundingClientRect();
	return boundaryElement ? intersectDOMRects(viewportRect, boundaryElement.getBoundingClientRect()) : viewportRect;
}
/** @internal */
function resolvePositioningBoundary(boundary, options = {}) {
	if (!boundary) return null;
	if (!isString(boundary)) return boundary;
	if (boundary === "viewport") return null;
	if (boundary === "container") return options.container ?? null;
	try {
		return (options.root ?? document).querySelector(boundary);
	} catch {
		return null;
	}
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/popover/popover.js
/** @internal */
function createPopover(options) {
	const { onOpenChange, closeOnOutsideClick } = options;
	let triggerEl = null;
	let popupEl = null;
	let hoverTimeout = null;
	const capturedPointers = /* @__PURE__ */ new Set();
	let ignoreNextBlurClose = false;
	let blurGuardTimeout = null;
	const layer = createDismissLayer({
		transition: options.transition,
		closeOnEscape: options.closeOnEscape,
		onEscapeDismiss(event) {
			event.preventDefault();
			applyClose("escape", event);
		},
		onDocumentActive(signal) {
			listen(document, "pointerdown", handleDocumentPointerdown, {
				capture: true,
				signal
			});
		}
	});
	const state = layer.input;
	const groupMember = {
		close(reason) {
			applyClose(reason);
		},
		get triggerElement() {
			return triggerEl;
		}
	};
	function clearHoverTimeout() {
		if (hoverTimeout !== null) {
			clearTimeout(hoverTimeout);
			hoverTimeout = null;
		}
	}
	function canHover() {
		return globalThis.matchMedia?.("(hover: hover)")?.matches ?? false;
	}
	function canOpenOnFocus() {
		if (!canHover()) return false;
		return globalThis.matchMedia?.("(pointer: fine)")?.matches ?? false;
	}
	function canToggleOnClick() {
		if (!options.openOnHover?.()) return true;
		return canHover();
	}
	function clearBlurGuard() {
		ignoreNextBlurClose = false;
		if (blurGuardTimeout !== null) {
			clearTimeout(blurGuardTimeout);
			blurGuardTimeout = null;
		}
	}
	function armBlurGuard() {
		ignoreNextBlurClose = true;
		if (blurGuardTimeout !== null) clearTimeout(blurGuardTimeout);
		blurGuardTimeout = setTimeout(clearBlurGuard, 500);
	}
	function consumeBlurGuard() {
		if (!ignoreNextBlurClose) return false;
		clearBlurGuard();
		return true;
	}
	function isTriggerDisabled() {
		if (!triggerEl) return false;
		if (triggerEl.hasAttribute("disabled")) return true;
		return triggerEl.getAttribute("aria-disabled") === "true";
	}
	/**
	* The transition handler manages animation lifecycle via `createState`:
	*
	* **Open:** `transition.open()` patches `{ active: true, status: 'starting' }`. After a double-RAF it patches `{
	* status: 'idle' }`, then waits for the resulting element animations before the promise resolves. Frameworks render
	* `data-starting-style` / `data-ending-style` via `getPopupAttrs(state)` — no imperative DOM mutation needed.
	*
	* **Close:** `transition.close(el)` patches `{ status: 'ending' }` (keeping `active: true` so the element stays
	* mounted). After a double-RAF it waits for `getAnimations()` to settle, then patches `{ active: false, status:
	* 'idle' }`.
	*
	* `onOpenChange` fires immediately (before animations). `onOpenChangeComplete` fires after animations finish.
	*/
	function commitOpen() {
		const opening = layer.open(() => popupEl);
		if (!opening) return;
		queueMicrotask(() => {
			if (layer.signal.aborted || !state.current.active || state.current.status === "ending") return;
			tryShowPopover(popupEl);
		});
		options.group?.()?.open(groupMember);
		opening.then(() => {
			if (layer.signal.aborted || !state.current.active || state.current.status !== "idle") return;
			options.onOpenChangeComplete?.(true);
		});
	}
	function commitClose() {
		const closing = layer.close(popupEl);
		if (!closing) return;
		options.group?.()?.close(groupMember);
		closing.then(() => {
			if (layer.signal.aborted || state.current.active) return;
			tryHidePopover(popupEl);
			options.onOpenChangeComplete?.(false);
		});
	}
	function applyOpen(reason, event) {
		if (layer.signal.aborted) return;
		const { active, status } = state.current;
		if (active && status !== "ending") return;
		onOpenChange(true, event ? {
			reason,
			event
		} : { reason });
		if (!options.deferOpenChanges) commitOpen();
	}
	function applyClose(reason, event) {
		if (layer.signal.aborted) return;
		const { active, status } = state.current;
		if (!active || status === "ending") return;
		onOpenChange(false, event ? {
			reason,
			event
		} : { reason });
		if (!options.deferOpenChanges) commitClose();
	}
	function open(reason = "click") {
		applyOpen(reason);
	}
	function close(reason = "click") {
		clearHoverTimeout();
		applyClose(reason);
	}
	function syncOpen(open) {
		if (!options.deferOpenChanges) return;
		if (open) commitOpen();
		else commitClose();
	}
	function handleDocumentPointerdown(event) {
		if (!closeOnOutsideClick() || !state.current.active) return;
		const path = event.composedPath();
		if (triggerEl && path.includes(triggerEl) || popupEl && path.includes(popupEl)) {
			armBlurGuard();
			return;
		}
		clearBlurGuard();
		applyClose("outside-click", event);
	}
	layer.signal.addEventListener("abort", () => {
		options.group?.()?.close(groupMember);
		clearHoverTimeout();
		clearBlurGuard();
		capturedPointers.clear();
		triggerEl = null;
		popupEl = null;
	});
	const triggerProps = {
		onClick(event) {
			if (!canToggleOnClick()) return;
			if (isTriggerDisabled()) return;
			if (state.current.active && state.current.status !== "ending") applyClose("click", event);
			else applyOpen("click", event);
		},
		onPointerEnter(_event) {
			if (!options.openOnHover?.()) return;
			if (!canHover()) return;
			clearHoverTimeout();
			if (state.current.active) return;
			const delay = options.delay?.() ?? 300;
			hoverTimeout = setTimeout(() => applyOpen("hover"), delay);
		},
		onPointerLeave(_event) {
			if (!options.openOnHover?.()) return;
			if (!canHover()) return;
			clearHoverTimeout();
			if (!state.current.active) return;
			const closeDelay = options.closeDelay?.() ?? 0;
			hoverTimeout = setTimeout(() => applyClose("hover"), closeDelay);
		},
		onFocusIn(_event) {
			if (options.openOnHover?.()) {
				if (!canOpenOnFocus()) return;
				applyOpen("focus");
			}
		},
		onFocusOut(event) {
			const relatedTarget = event.relatedTarget;
			if (relatedTarget && (triggerEl?.contains(relatedTarget) || popupEl?.contains(relatedTarget))) return;
			if (options.openOnHover?.()) applyClose("blur");
		}
	};
	const popupProps = {
		onPointerEnter(_event) {
			if (!options.openOnHover?.()) return;
			clearHoverTimeout();
		},
		onPointerLeave(_event) {
			if (!options.openOnHover?.()) return;
			if (capturedPointers.size > 0) return;
			clearHoverTimeout();
			if (!state.current.active) return;
			const closeDelay = options.closeDelay?.() ?? 0;
			hoverTimeout = setTimeout(() => applyClose("hover"), closeDelay);
		},
		onGotPointerCapture(event) {
			capturedPointers.add(event.pointerId);
		},
		onLostPointerCapture(event) {
			capturedPointers.delete(event.pointerId);
		},
		onFocusOut(event) {
			const relatedTarget = event.relatedTarget;
			if (relatedTarget && (triggerEl?.contains(relatedTarget) || popupEl?.contains(relatedTarget))) return;
			if (consumeBlurGuard()) return;
			if (relatedTarget !== null) {
				applyClose("blur");
				return;
			}
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					if (!state.current.active || state.current.status === "ending" || state.current.status === "starting") return;
					const active = getDeepActiveElement(popupEl?.ownerDocument);
					if (active && (triggerEl?.contains(active) || popupEl?.contains(active))) return;
					applyClose("blur");
				});
			});
		}
	};
	function setTriggerElement(el) {
		triggerEl = el;
	}
	function setPopupElement(el) {
		if (!el && popupEl && state.current.active) tryHidePopover(popupEl);
		popupEl = el;
		if (el) {
			if (state.current.active) tryShowPopover(el);
		}
	}
	return {
		input: state,
		triggerProps,
		popupProps,
		get triggerElement() {
			return triggerEl;
		},
		setTriggerElement,
		setPopupElement,
		open,
		close,
		syncOpen,
		destroy: layer.destroy
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/menu/item.js
/**
* Data attributes set on all navigable menu item elements.
*
* @parts item, radio-item, checkbox-item, trigger
* @internal
*/
const MenuItemDataAttrs = {
	/**
	* Present on all navigable item types: Item, RadioItem, CheckboxItem, and the Trigger when acting as a submenu
	* trigger inside a parent menu. Use `[data-item]` as a shared selector to target all item types at once.
	*/
	item: "data-item",
	/** Present when the item is highlighted. Set to `pointer` when pointer movement caused the highlight; otherwise empty. */
	highlighted: "data-highlighted"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/menu/vars.js
/**
* CSS custom property names for menu layout and positioning.
*
* @internal
*/
const MenuCSSVars = {
	/** Distance between the popup and the trigger along the side axis. */
	sideOffset: "--media-popover-side-offset",
	/** Distance between the popup and the trigger along the alignment axis. */
	alignOffset: "--media-popover-align-offset",
	/** Minimum distance between the popup and the positioning boundary. */
	boundaryOffset: "--media-popover-boundary-offset",
	/** Width of the trigger, set by popup positioning. */
	anchorWidth: "--media-popover-anchor-width",
	/** Height of the trigger, set by popup positioning. */
	anchorHeight: "--media-popover-anchor-height",
	/** Width of the active menu panel (px). */
	width: "--media-menu-width",
	/** Height of the active menu panel (px). */
	height: "--media-menu-height",
	/** Width available within the positioning boundary (px). */
	availableWidth: "--media-menu-available-width",
	/** Height available within the positioning boundary (px). */
	availableHeight: "--media-menu-available-height"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/popover/vars.js
/** @internal */
const PopoverCSSVars = {
	/** Distance between the popup and the trigger along the side axis. */
	sideOffset: "--media-popover-side-offset",
	/** Distance between the popup and the trigger along the alignment axis. */
	alignOffset: "--media-popover-align-offset",
	/** Minimum distance between the popup and the positioning boundary. */
	boundaryOffset: "--media-popover-boundary-offset",
	/** The anchor element's width. */
	anchorWidth: "--media-popover-anchor-width",
	/** The anchor element's height. */
	anchorHeight: "--media-popover-anchor-height",
	/** Available width between the trigger and the boundary edge. */
	availableWidth: "--media-popover-available-width",
	/** Available height between the trigger and the boundary edge. */
	availableHeight: "--media-popover-available-height"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/menu/menu.js
/** @internal */
function isMenuNavigationKey(event) {
	const { key } = event;
	return key === "ArrowDown" || key === "ArrowUp" || key === "ArrowLeft" || key === "ArrowRight" || key === "Home" || key === "End" || key === "Enter" || key === " " || key === "Escape" || key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey;
}
/** @internal */
function getRootPositionOptions(side, align) {
	if (!side || !align) return null;
	return {
		side,
		align
	};
}
/**
* Uses Popover offset inputs while publishing Menu-owned available-size outputs.
*
* @internal
*/
const MenuPositioningCSSVars = {
	...PopoverCSSVars,
	availableWidth: MenuCSSVars.availableWidth,
	availableHeight: MenuCSSVars.availableHeight
};
const parents = /* @__PURE__ */ new WeakMap();
/** @internal */
function completeMenuItemSelection(menu) {
	menu.close();
}
/** @internal */
function createMenu(options) {
	const items = [];
	let highlightedItem = null;
	let triggerElement = null;
	let contentElement = null;
	let popupElement = null;
	const submenus = /* @__PURE__ */ new Set();
	const submenuUnsubscribes = /* @__PURE__ */ new Map();
	let typeaheadBuffer = "";
	let typeaheadTimer = null;
	let pendingFocusOut = null;
	let openRafId = 0;
	let lastCloseReason = null;
	let api;
	function isItemHidden(item) {
		const availability = item.getAttribute("data-availability");
		return Boolean(item.hidden || item.hasAttribute("data-hidden") || item.getAttribute("aria-hidden") === "true" || availability === "unavailable" || availability === "unsupported");
	}
	function getNavigableItems() {
		return items.filter((item) => !isItemHidden(item));
	}
	function getAdjacentNavigableItem(direction) {
		if (items.length === 0) return null;
		const currentIndex = highlightedItem ? items.indexOf(highlightedItem) : direction === 1 ? -1 : 0;
		for (let offset = 1; offset <= items.length; offset++) {
			const index = (currentIndex + direction * offset + items.length) % items.length;
			const candidate = items[index];
			if (candidate && !isItemHidden(candidate)) return candidate;
		}
		return null;
	}
	function highlight(element, highlightOptions) {
		if (!element && openRafId) {
			cancelAnimationFrame(openRafId);
			openRafId = 0;
		}
		if (element && isItemHidden(element)) {
			if (element === highlightedItem) highlight(getAdjacentNavigableItem(1), highlightOptions);
			return;
		}
		if (highlightedItem === element) {
			element?.setAttribute(MenuItemDataAttrs.highlighted, highlightOptions?.pointer === true ? "pointer" : "");
			return;
		}
		const previousItem = highlightedItem;
		if (previousItem) previousItem.tabIndex = -1;
		highlightedItem = element;
		if (element) {
			element.tabIndex = 0;
			element.setAttribute(MenuItemDataAttrs.highlighted, highlightOptions?.pointer === true ? "pointer" : "");
			if (previousItem && compareItems(element, previousItem) < 0 && highlightOptions?.pointer) forceLayout(element.parentElement);
			previousItem?.removeAttribute(MenuItemDataAttrs.highlighted);
			if (highlightOptions?.focus !== false) if (highlightOptions?.preventScroll) element.focus({ preventScroll: true });
			else element.focus();
		} else previousItem?.removeAttribute(MenuItemDataAttrs.highlighted);
		options.onHighlightChange?.(element);
	}
	function clearHighlight() {
		if (highlightedItem) {
			highlightedItem.tabIndex = -1;
			highlightedItem.removeAttribute(MenuItemDataAttrs.highlighted);
			highlightedItem = null;
			options.onHighlightChange?.(null);
		}
	}
	function highlightFirstItem(options) {
		highlight(getNavigableItems()[0] ?? null, options);
	}
	function highlightInitialItem(options) {
		highlight(getInitialHighlightItem(), options);
	}
	function restoreFocus(focusOptions) {
		if (lastCloseReason === "imperative-action" || lastCloseReason === "group-open" || lastCloseReason === "blur" || lastCloseReason === "outside-click") return;
		if (focusOptions) triggerElement?.focus(focusOptions);
		else triggerElement?.focus();
	}
	function getInitialHighlightItem() {
		const navigableItems = getNavigableItems();
		return navigableItems.find((item) => item.matches("[role=\"menuitemradio\"][aria-checked=\"true\"], [aria-selected=\"true\"]")) ?? navigableItems[0] ?? null;
	}
	function clearTypeahead() {
		if (typeaheadTimer !== null) {
			clearTimeout(typeaheadTimer);
			typeaheadTimer = null;
		}
		typeaheadBuffer = "";
	}
	function scheduleInitialHighlight() {
		cancelAnimationFrame(openRafId);
		openRafId = requestAnimationFrame(() => {
			openRafId = 0;
			if (!popover.input.current.active || popover.input.current.status === "ending" || highlightedItem) return;
			highlight(getInitialHighlightItem(), { preventScroll: true });
		});
	}
	function handleTypeahead(char) {
		typeaheadBuffer = typeaheadBuffer.length === 1 && typeaheadBuffer.toLowerCase() === char.toLowerCase() ? char : typeaheadBuffer + char;
		if (typeaheadTimer !== null) clearTimeout(typeaheadTimer);
		typeaheadTimer = setTimeout(clearTypeahead, 500);
		const navigableItems = getNavigableItems();
		const searchStart = (highlightedItem ? navigableItems.indexOf(highlightedItem) : -1) + 1;
		const candidates = [...navigableItems.slice(searchStart), ...navigableItems.slice(0, searchStart)];
		const needle = typeaheadBuffer.toLowerCase();
		const match = candidates.find((candidate) => {
			return (candidate.textContent?.trim().toLowerCase() ?? "").startsWith(needle);
		});
		if (match) highlight(match);
	}
	const popover = createPopover({
		transition: options.transition,
		deferOpenChanges: true,
		onOpenChange(open, details) {
			lastCloseReason = open ? null : details.reason;
			options.onOpenChange(open, details);
			if (open) scheduleInitialHighlight();
			else {
				clearHighlight();
				clearTypeahead();
			}
		},
		onOpenChangeComplete(open) {
			options.onOpenChangeComplete?.(open);
			if (!open && contentElement) {
				const active = getDeepActiveElement(contentElement.ownerDocument);
				if (!(active instanceof Element) || active === contentElement.ownerDocument.body || containsComposed(contentElement, active)) restoreFocus();
			}
		},
		closeOnEscape: options.closeOnEscape,
		closeOnOutsideClick: options.closeOnOutsideClick,
		...options.group ? { group: options.group } : {}
	});
	const contentProps = {
		onFocusOut(event) {
			if (event.relatedTarget === null && hasClosingSubmenu()) {
				pendingFocusOut = event;
				return;
			}
			popover.popupProps.onFocusOut(event);
		},
		onKeyDown(event) {
			const { key } = event;
			const navigableItems = getNavigableItems();
			if (key !== "Escape" && isMenuNavigationKey(event) && !event.defaultPrevented) event.preventDefault();
			if (navigableItems.length === 0) return;
			switch (key) {
				case "ArrowDown":
					event.preventDefault();
					highlight(getAdjacentNavigableItem(1));
					break;
				case "ArrowUp":
					event.preventDefault();
					highlight(getAdjacentNavigableItem(-1));
					break;
				case "Home":
					event.preventDefault();
					highlight(navigableItems[0] ?? null);
					break;
				case "End":
					event.preventDefault();
					highlight(navigableItems[navigableItems.length - 1] ?? null);
					break;
				case "Enter":
				case " ":
					event.preventDefault();
					if (highlightedItem && navigableItems.includes(highlightedItem)) highlightedItem.click();
					break;
				default: if (key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) handleTypeahead(key);
			}
		}
	};
	function handleTriggerKeyDown(event) {
		const input = popover.input.current;
		if (!input.active || input.status === "ending") return;
		if (event.key === "Escape") return;
		if (!isMenuNavigationKey(event)) return;
		contentProps.onKeyDown(event);
		event.stopPropagation();
	}
	function setTriggerElement(element) {
		triggerElement = element;
		popover.setTriggerElement(element);
	}
	function setContentElement(element) {
		contentElement = element;
	}
	function setPopupElement(element) {
		popupElement = element;
		popover.setPopupElement(element);
	}
	function compareItems(a, b) {
		if (a === b) return 0;
		const position = a.compareDocumentPosition(b);
		if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
		if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
		return 0;
	}
	function registerItem(element) {
		const onFocus = () => highlight(element, { focus: false });
		element.tabIndex = -1;
		element.setAttribute(MenuItemDataAttrs.item, "");
		element.addEventListener("focus", onFocus);
		items.push(element);
		items.sort(compareItems);
		if (popover.input.current.active && popover.input.current.status !== "ending" && !highlightedItem) scheduleInitialHighlight();
		return () => {
			element.removeEventListener("focus", onFocus);
			const index = items.indexOf(element);
			if (index !== -1) items.splice(index, 1);
			if (highlightedItem === element) clearHighlight();
		};
	}
	function registerSubmenu(menu) {
		submenus.add(menu);
		parents.set(menu, api);
		const unsubscribe = menu.input.subscribe(handlePendingFocusOut);
		submenuUnsubscribes.set(menu, unsubscribe);
		return () => {
			submenus.delete(menu);
			if (parents.get(menu) === api) parents.delete(menu);
			submenuUnsubscribes.get(menu)?.();
			submenuUnsubscribes.delete(menu);
			handlePendingFocusOut();
		};
	}
	function hasClosingSubmenu() {
		return [...submenus].some(({ input }) => input.current.status === "ending");
	}
	function handlePendingFocusOut() {
		if (!pendingFocusOut || hasClosingSubmenu()) return;
		const event = pendingFocusOut;
		pendingFocusOut = null;
		popover.popupProps.onFocusOut(event);
	}
	function syncOpen(open) {
		if (open) parents.get(api)?.highlight(null);
		else for (const submenu of submenus) submenu.close("imperative-action");
		popover.syncOpen(open);
	}
	function destroy() {
		cancelAnimationFrame(openRafId);
		openRafId = 0;
		clearTypeahead();
		for (const unsubscribe of submenuUnsubscribes.values()) unsubscribe();
		for (const submenu of submenus) if (parents.get(submenu) === api) parents.delete(submenu);
		submenuUnsubscribes.clear();
		submenus.clear();
		parents.delete(api);
		pendingFocusOut = null;
		popover.destroy();
	}
	api = {
		input: popover.input,
		triggerProps: {
			onClick: popover.triggerProps.onClick,
			onKeyDown: handleTriggerKeyDown
		},
		contentProps,
		get triggerElement() {
			return triggerElement;
		},
		get contentElement() {
			return contentElement;
		},
		get popupElement() {
			return popupElement;
		},
		setTriggerElement,
		setContentElement,
		setPopupElement,
		registerItem,
		registerSubmenu,
		highlight,
		highlightFirstItem,
		highlightInitialItem,
		restoreFocus,
		open: popover.open,
		close: popover.close,
		syncOpen,
		destroy
	};
	return api;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/menu/data.js
/**
* Root popup state used for positioning and surface transitions.
*
* @internal
*/
const MenuPopupDataAttrs = {
	/** Present when the menu is open. */
	open: "data-open",
	/** Rendered positioning side after collision handling. Absent on submenus. */
	side: "data-side",
	/** Popover positioning alignment. Absent on submenus. */
	align: "data-align",
	...TransitionDataAttrs
};
/**
* State for one root or nested Content.
*
* @internal
*/
const MenuContentDataAttrs = {
	/** Present while this Content is active or transitioning out. */
	open: "data-open",
	/** Present on Content when this menu is nested inside a parent menu. */
	isSubmenu: "data-submenu",
	/** Present when this Content has an open logical child. */
	childOpen: "data-child-open",
	...TransitionDataAttrs
};
({
	...MenuPopupDataAttrs,
	...MenuContentDataAttrs
});
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/menu/popup.js
/**
* Coordinates sibling Contents and sizes their shared Popup.
*
* @internal
*/
function createMenuPopup() {
	const contents = /* @__PURE__ */ new Set();
	const exitFrames = /* @__PURE__ */ new Map();
	let element = null;
	let frame = 0;
	function scheduleSync() {
		cancelAnimationFrame(frame);
		sync();
		frame = requestAnimationFrame(sync);
	}
	function getChildren(parent) {
		return [...contents].filter((content) => content.parent === parent);
	}
	function getActiveChild(parent) {
		return getChildren(parent).find(({ menu }) => {
			const input = menu.input.current;
			return input.active && input.status !== "ending";
		}) ?? null;
	}
	function getClosingChild(parent) {
		return getChildren(parent).find(({ menu }) => {
			const input = menu.input.current;
			return input.active && input.status === "ending";
		}) ?? null;
	}
	function cancelChildExit(content) {
		cancelAnimationFrame(exitFrames.get(content) ?? 0);
		exitFrames.delete(content);
	}
	function scheduleChildExit(content) {
		if (exitFrames.has(content)) return;
		const exitFrame = requestAnimationFrame(() => {
			exitFrames.set(content, requestAnimationFrame(() => {
				exitFrames.delete(content);
				if (!contents.has(content) || getActiveChild(content.menu)) return;
				content.element.removeAttribute(MenuContentDataAttrs.childOpen);
				sync();
			}));
		});
		exitFrames.set(content, exitFrame);
	}
	function getCurrentContent() {
		let current = [...contents].find((content) => content.parent === null) ?? null;
		while (current) {
			const child = getActiveChild(current.menu) ?? (exitFrames.has(current) ? getClosingChild(current.menu) : null);
			if (!child) return current;
			current = child;
		}
		return null;
	}
	function setInactive(content, inactive) {
		if (inactive) {
			content.element.setAttribute("aria-hidden", "true");
			content.element.setAttribute("inert", "");
		} else restoreAttributes(content.element, content.accessibility);
	}
	function restoreFocusBeforeHiding(content) {
		const hasFocus = () => {
			const active = getDeepActiveElement(content.element.ownerDocument);
			return active instanceof Element && containsComposed(content.element, active);
		};
		if (!hasFocus()) return;
		content.menu.restoreFocus();
		const parentInput = content.parent?.input.current;
		if (hasFocus() && parentInput?.active && parentInput.status !== "ending") content.menu.triggerElement?.focus();
		const active = getDeepActiveElement(content.element.ownerDocument);
		if (hasFocus() && active instanceof HTMLElement) active.blur();
	}
	function getAvailableWidth(popup) {
		return walkAncestors(popup, (ancestor) => {
			const width = readCSSLength(ancestor, MenuCSSVars.availableWidth);
			return width !== null && width > 0 ? width : void 0;
		}) ?? null;
	}
	function getVerticalScrollbarWidth(content) {
		if (content.scrollHeight <= content.clientHeight) return 0;
		const style = getComputedStyle(content);
		const inlineBorder = (Number.parseFloat(style.borderInlineStartWidth) || 0) + (Number.parseFloat(style.borderInlineEndWidth) || 0);
		return Math.max(0, content.offsetWidth - content.clientWidth - inlineBorder);
	}
	function measureContent(content, availableWidth) {
		const children = getElementChildren(content, (child) => child instanceof HTMLElement && !child.hidden);
		if (children.length === 0) return measureElement(content, {
			overflow: "both",
			styles: {
				width: "max-content",
				height: "auto",
				minWidth: "0px",
				maxWidth: "none"
			}
		});
		return measureElementChildren(content, {
			children,
			includePadding: true,
			maxWidth: availableWidth,
			measure: (child, width) => measureElement(child, {
				overflow: "both",
				styles: {
					insetInlineStart: "0px",
					insetInlineEnd: "auto",
					width: width === void 0 ? "max-content" : `${width}px`,
					height: "auto",
					minWidth: "0px",
					maxWidth: "none"
				}
			})
		});
	}
	function sync() {
		if (!element) return;
		const inactiveContents = /* @__PURE__ */ new Map();
		for (const content of contents) {
			const activeChild = getActiveChild(content.menu);
			if (activeChild) {
				cancelChildExit(content);
				content.menu.highlight(null);
				content.element.setAttribute(MenuContentDataAttrs.childOpen, "");
			} else if (getClosingChild(content.menu) && content.element.hasAttribute(MenuContentDataAttrs.childOpen)) scheduleChildExit(content);
			else {
				cancelChildExit(content);
				content.element.removeAttribute(MenuContentDataAttrs.childOpen);
			}
			const input = content.menu.input.current;
			const isExitingPage = content.parent !== null && input.active && input.status === "ending";
			inactiveContents.set(content, activeChild !== null || isExitingPage);
			setInactive(content, false);
		}
		for (const [content, inactive] of inactiveContents) {
			const input = content.menu.input.current;
			if (content.parent !== null && input.active && input.status === "ending") restoreFocusBeforeHiding(content);
			setInactive(content, inactive);
		}
		const current = getCurrentContent();
		if (!current) return;
		const popupPadding = current.parent === null ? getElementPadding(element) : null;
		const inlinePadding = popupPadding ? getInlineExtent(popupPadding) : 0;
		const blockPadding = popupPadding ? getBlockExtent(popupPadding) : 0;
		const availableWidth = getAvailableWidth(element);
		const contentAvailableWidth = availableWidth === null ? null : Math.max(0, availableWidth - inlinePadding);
		const size = measureContent(current.element, contentAvailableWidth);
		const width = Math.ceil(size.width + inlinePadding);
		const height = Math.ceil(size.height + blockPadding);
		element.style.setProperty(MenuCSSVars.width, `${width}px`);
		element.style.setProperty(MenuCSSVars.height, `${height}px`);
		const scrollbarWidth = getVerticalScrollbarWidth(current.element);
		if (scrollbarWidth > 0) element.style.setProperty(MenuCSSVars.width, `${width + scrollbarWidth}px`);
	}
	function setElement(next) {
		element = next;
		scheduleSync();
	}
	function registerContent(registration) {
		const registered = {
			...registration,
			accessibility: snapshotAttributes(registration.element, ["aria-hidden", "inert"]),
			stopObserving: () => {},
			unsubscribe: () => {}
		};
		registered.unsubscribe = registration.menu.input.subscribe(scheduleSync);
		registered.stopObserving = observeElements({
			root: registration.element,
			getElements: () => [registration.element],
			mutations: {
				childList: true,
				subtree: true,
				characterData: true
			},
			onChange: scheduleSync
		});
		contents.add(registered);
		registration.menu.setContentElement(registration.element);
		scheduleSync();
		return () => {
			cancelChildExit(registered);
			contents.delete(registered);
			registered.unsubscribe();
			registered.stopObserving();
			restoreAttributes(registration.element, registered.accessibility);
			registration.element.removeAttribute(MenuContentDataAttrs.childOpen);
			if (registration.menu.contentElement === registration.element) registration.menu.setContentElement(null);
			scheduleSync();
		};
	}
	function destroy() {
		cancelAnimationFrame(frame);
		for (const exitFrame of exitFrames.values()) cancelAnimationFrame(exitFrame);
		exitFrames.clear();
		for (const content of contents) {
			content.unsubscribe();
			content.stopObserving();
			restoreAttributes(content.element, content.accessibility);
			content.element.removeAttribute(MenuContentDataAttrs.childOpen);
			if (content.menu.contentElement === content.element) content.menu.setContentElement(null);
		}
		contents.clear();
		element = null;
	}
	return {
		get element() {
			return element;
		},
		setElement,
		registerContent,
		sync,
		destroy
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/popover/group.js
/** @internal */
function createPopupGroup() {
	let current = null;
	const listeners = /* @__PURE__ */ new Set();
	function notify() {
		for (const listener of listeners) listener();
	}
	return {
		open(member) {
			if (current === member) return;
			const previous = current;
			current = member;
			previous?.close("group-open");
			notify();
		},
		close(member) {
			if (current !== member) return;
			current = null;
			notify();
		},
		isOpenFor(trigger) {
			return trigger !== null && current?.triggerElement === trigger;
		},
		subscribe(listener) {
			listeners.add(listener);
			return () => listeners.delete(listener);
		}
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/utils/event.js
/** @internal */
function isEventWithinElement(event, element) {
	if (!element) return false;
	if (isFunction(event.composedPath)) return event.composedPath().includes(element);
	const target = event.target;
	return target instanceof Node && element.contains(target);
}
//#endregion
//#region node_modules/@videojs/utils/dist/number/number.js
/**
* Clamp a value between min and max (inclusive).
*
* @internal
*/
function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}
/**
* Convert a value within a range to a clamped percentage (0–100).
*
* @param value - Value to convert.
* @param min - Start of the range.
* @param max - End of the range.
* @internal
*/
function toPercent(value, min, max) {
	const range = max - min;
	if (!Number.isFinite(range) || range <= 0) return 0;
	return clamp((value - min) / range * 100, 0, 100);
}
/**
* Snap a value to the nearest step, offset from min.
*
* @internal
*/
function roundToStep(value, step, min) {
	const nearest = Math.round((value - min) / step) * step + min;
	const dot = `${step}`.indexOf(".");
	return dot === -1 ? nearest : Number(nearest.toFixed(`${step}`.length - dot - 1));
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/popover/positioning.js
const ZERO_OFFSETS = {
	sideOffset: 0,
	alignOffset: 0,
	boundaryOffset: 0
};
const OPPOSITE_SIDE = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function formatPixels(value) {
	return `${clamp(value, 0, Infinity)}px`;
}
function shiftCrossAxis(value, boundaryStart, boundaryEnd, size) {
	const max = boundaryEnd - size;
	return max < boundaryStart ? boundaryStart : clamp(value, boundaryStart, max);
}
function getHorizontalAlign({ align, direction = "ltr" }) {
	if (direction !== "rtl") return align;
	return align === "start" ? "end" : align === "end" ? "start" : align;
}
function getAnchorCrossAxisShift(start, end, size, boundaryStart, boundaryEnd, align, alignOffset, boundaryOffset, axis, alignOffsetVar) {
	const base = align === "start" ? start + alignOffset : align === "end" ? end + alignOffset : start + size / 2 + alignOffset;
	const startAnchor = axis === "horizontal" ? "left" : "top";
	const endAnchor = OPPOSITE_SIDE[startAnchor];
	const anchor = align === "start" ? startAnchor : align === "end" ? endAnchor : "center";
	const desiredTranslate = align === "start" ? "0px" : align === "end" ? "-100%" : "-50%";
	return {
		base: `calc(anchor(${anchor}) + ${alignOffsetVar})`,
		translate: `clamp(${boundaryStart + boundaryOffset - base}px, ${desiredTranslate}, calc(${boundaryEnd - boundaryOffset - base}px - 100%))`
	};
}
/**
* Get positioning styles for the popup element.
*
* When the browser supports CSS Anchor Positioning, returns native CSS properties that reference the provided CSS var
* names for side/align offsets — no JS offset values needed.
*
* When rects are provided and anchor positioning is unsupported, falls back to manual JS-computed positioning. The
* caller must resolve offset CSS vars via `getComputedStyle` and pass them as `offsets`.
*
* Returns camelCase keys for standard CSS properties and `--*` keys for custom properties — compatible with both
* React's `style` prop and `applyStyles()` from `@videojs/utils/dom`.
*/
function getAnchorPositionStyle(anchorName, opts, triggerRect, popupRect, boundaryRect, offsets, cssVars = PopoverCSSVars) {
	if (supportsAnchorPositioning()) return {
		...getAnchorPositionCSS(anchorName, opts, cssVars, triggerRect, boundaryRect, offsets),
		...triggerRect && boundaryRect ? getPositioningCSSVars(triggerRect, boundaryRect, opts, offsets, cssVars) : {}
	};
	if (triggerRect && popupRect) {
		const resolved = offsets ?? ZERO_OFFSETS;
		return {
			position: "fixed",
			margin: "0",
			...getManualPositionStyle(triggerRect, popupRect, opts, resolved, boundaryRect),
			...boundaryRect ? getPositioningCSSVars(triggerRect, boundaryRect, opts, resolved, cssVars) : {}
		};
	}
	return {};
}
function getAnchorPositionCSS(anchorName, opts, cssVars = PopoverCSSVars, triggerRect, boundaryRect, offsets = ZERO_OFFSETS) {
	const SIDE_OFFSET_VAR = `var(${cssVars.sideOffset}, 0px)`;
	const ALIGN_OFFSET_VAR = `var(${cssVars.alignOffset}, 0px)`;
	const { side, align } = opts;
	const boundaryOffset = offsets.boundaryOffset ?? 0;
	const style = {
		positionAnchor: `--${anchorName}`,
		position: "fixed",
		inset: "auto",
		margin: "0",
		justifySelf: "normal",
		alignSelf: "normal",
		marginInlineStart: "0",
		marginBlockStart: "0",
		translate: "none"
	};
	const insetProp = OPPOSITE_SIDE[side];
	if (side === "top" || side === "bottom") {
		const horizontalAlign = getHorizontalAlign(opts);
		style[insetProp] = `calc(anchor(${side}) + ${SIDE_OFFSET_VAR})`;
		if (triggerRect && boundaryRect) {
			const { base, translate } = getAnchorCrossAxisShift(triggerRect.left, triggerRect.right, triggerRect.width, boundaryRect.left, boundaryRect.right, horizontalAlign, offsets.alignOffset, boundaryOffset, "horizontal", ALIGN_OFFSET_VAR);
			style.left = base;
			style.translate = `${translate} 0`;
			return style;
		}
		if (horizontalAlign === "start") style.left = `calc(anchor(left) + ${ALIGN_OFFSET_VAR})`;
		else if (horizontalAlign === "end") style.right = `calc(anchor(right) + ${ALIGN_OFFSET_VAR})`;
		else {
			style.justifySelf = "anchor-center";
			style.marginInlineStart = ALIGN_OFFSET_VAR;
		}
	} else {
		style[insetProp] = `calc(anchor(${side}) + ${SIDE_OFFSET_VAR})`;
		if (triggerRect && boundaryRect) {
			const { base, translate } = getAnchorCrossAxisShift(triggerRect.top, triggerRect.bottom, triggerRect.height, boundaryRect.top, boundaryRect.bottom, align, offsets.alignOffset, boundaryOffset, "vertical", ALIGN_OFFSET_VAR);
			style.top = base;
			style.translate = `0 ${translate}`;
			return style;
		}
		if (align === "start") style.top = `calc(anchor(top) + ${ALIGN_OFFSET_VAR})`;
		else if (align === "end") style.bottom = `calc(anchor(bottom) + ${ALIGN_OFFSET_VAR})`;
		else {
			style.alignSelf = "anchor-center";
			style.marginBlockStart = ALIGN_OFFSET_VAR;
		}
	}
	return style;
}
/**
* Compute CSS variables for sizing constraints relative to the anchor/boundary.
*
* Accepts a `cssVars` map so the same logic works for both popover (`--media-popover-*`) and tooltip
* (`--media-tooltip-*`) namespaces.
*/
function getPositioningCSSVars(triggerRect, boundaryRect, opts, offsets = ZERO_OFFSETS, cssVars = PopoverCSSVars) {
	const vars = {};
	const { side } = opts;
	const boundaryOffset = offsets.boundaryOffset ?? 0;
	const boundaryStartX = boundaryRect.left + boundaryOffset;
	const boundaryEndX = boundaryRect.right - boundaryOffset;
	const boundaryStartY = boundaryRect.top + boundaryOffset;
	const boundaryEndY = boundaryRect.bottom - boundaryOffset;
	vars[cssVars.anchorWidth] = `${triggerRect.width}px`;
	vars[cssVars.anchorHeight] = `${triggerRect.height}px`;
	if (side === "top" || side === "bottom") {
		const sideSpace = side === "top" ? triggerRect.top - boundaryStartY : boundaryEndY - triggerRect.bottom;
		vars[cssVars.availableHeight] = formatPixels(sideSpace - offsets.sideOffset);
		vars[cssVars.availableWidth] = formatPixels(boundaryEndX - boundaryStartX);
	} else {
		const sideSpace = side === "left" ? triggerRect.left - boundaryStartX : boundaryEndX - triggerRect.right;
		vars[cssVars.availableWidth] = formatPixels(sideSpace - offsets.sideOffset);
		vars[cssVars.availableHeight] = formatPixels(boundaryEndY - boundaryStartY);
	}
	return vars;
}
/**
* Compute manual positioning when CSS Anchor Positioning is not supported.
*
* Returns inline `top`/`left` styles in **viewport coordinates** for use with `position: fixed` (the popup is in the
* top layer). All rects from `getBoundingClientRect()` are already viewport-relative.
*
* Offsets are resolved by the caller from CSS custom properties via `getComputedStyle()` and passed as `offsets`.
*/
function getManualPositionStyle(triggerRect, popupRect, opts, offsets = {
	sideOffset: 0,
	alignOffset: 0
}, boundaryRect) {
	const { side, align } = opts;
	const { sideOffset, alignOffset } = offsets;
	let top = 0;
	let bottom;
	let left = 0;
	let right;
	if (side === "top") bottom = `calc(100% - ${triggerRect.top}px + ${sideOffset}px)`;
	else if (side === "bottom") top = triggerRect.bottom + sideOffset;
	else if (side === "left") right = `calc(100% - ${triggerRect.left}px + ${sideOffset}px)`;
	else left = triggerRect.right + sideOffset;
	if (side === "top" || side === "bottom") {
		const horizontalAlign = getHorizontalAlign(opts);
		if (horizontalAlign === "start") left = triggerRect.left + alignOffset;
		else if (horizontalAlign === "end") left = triggerRect.right - popupRect.width + alignOffset;
		else left = triggerRect.left + (triggerRect.width - popupRect.width) / 2 + alignOffset;
	} else if (align === "start") top = triggerRect.top + alignOffset;
	else if (align === "end") top = triggerRect.bottom - popupRect.height + alignOffset;
	else top = triggerRect.top + (triggerRect.height - popupRect.height) / 2 + alignOffset;
	if (boundaryRect) {
		const boundaryOffset = offsets.boundaryOffset ?? 0;
		if (side === "top" || side === "bottom") left = shiftCrossAxis(left, boundaryRect.left + boundaryOffset, boundaryRect.right - boundaryOffset, popupRect.width);
		else top = shiftCrossAxis(top, boundaryRect.top + boundaryOffset, boundaryRect.bottom - boundaryOffset, popupRect.height);
	}
	return {
		top: side === "top" ? "auto" : `${top}px`,
		bottom: bottom ?? "auto",
		left: side === "left" ? "auto" : `${left}px`,
		right: right ?? "auto"
	};
}
/**
* Read positioning offset CSS custom properties from the popup element's computed style, returning numeric pixel
* values.
*/
function resolveOffsets(el, cssVars = PopoverCSSVars) {
	const computed = getComputedStyle(el);
	return {
		sideOffset: resolveCSSLength(el, computed.getPropertyValue(cssVars.sideOffset)),
		alignOffset: resolveCSSLength(el, computed.getPropertyValue(cssVars.alignOffset)),
		boundaryOffset: resolveCSSLength(el, computed.getPropertyValue(cssVars.boundaryOffset))
	};
}
/**
* Measure the popup's layout box for positioning.
*
* `getBoundingClientRect()` includes active transforms, which causes the fallback position to drift while
* opening/closing animations scale the popup. Using layout dimensions preserves the untransformed size, while the
* side-axis scroll dimension includes content clipped by size constraints.
*/
function getPopupPositionRect(el, side) {
	const rect = el.getBoundingClientRect();
	const size = getElementSize(el, {
		box: "layout",
		overflow: side === "left" || side === "right" ? "width" : "height"
	});
	return createDOMRect(rect.left, rect.top, size.width, size.height);
}
/**
* The viewport origin of the box a `position: fixed` popup is placed against. A `[popover]` popup is placed against the
* viewport wherever the Popover API exists, including while it is still closed: the first position runs before
* `showPopover()` moves it to the top layer. Without the Popover API it stays in the page, where an ancestor with a
* transform, filter, or containment becomes its containing block instead, and engines disagree about which properties
* count. A fixed probe beside the popup lands on that origin whatever the engine decides, and the popup's own
* transitions cannot move it.
*/
function getFixedContainingBlockOrigin(popup) {
	const parent = popup.parentNode;
	if (opensInTopLayer(popup) || !parent) return {
		x: 0,
		y: 0
	};
	const probe = popup.ownerDocument.createElement("div");
	probe.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;margin:0;padding:0;border:0;visibility:hidden;pointer-events:none";
	parent.insertBefore(probe, popup);
	const rect = probe.getBoundingClientRect();
	probe.remove();
	return {
		x: rect.left,
		y: rect.top
	};
}
/** Move a rect into a coordinate space whose origin sits at `origin` in the viewport. */
function offsetRect(rect, origin) {
	return createDOMRect(rect.left - origin.x, rect.top - origin.y, rect.width, rect.height);
}
function opensInTopLayer(popup) {
	return popup.hasAttribute("popover") && supportsPopoverAPI();
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/popover/positioner.js
const POPUP_STYLE_PROPS = [
	"position",
	"inset",
	"margin",
	"margin-top",
	"margin-right",
	"margin-bottom",
	"margin-left",
	"justify-self",
	"align-self",
	"margin-inline-start",
	"margin-block-start",
	"translate",
	"top",
	"right",
	"bottom",
	"left"
];
/**
* Positions a popup and tracks layout changes while it is active.
*
* @internal
*/
var PopupPositioner = class {
	#options = null;
	#boundaryElement = null;
	#abort = null;
	#stopObservingResize = null;
	#triggerAnchorName = null;
	#triggerAnchorAdded = false;
	#popupAnchor = null;
	#popupStyles = null;
	#reposition = rafThrottle(() => this.#position());
	sync(options) {
		const { anchorName, position, trigger, popup, boundary, container, cssVars = PopoverCSSVars } = options;
		if (!position || !trigger || !popup) {
			this.cleanup();
			return;
		}
		const boundaryElement = resolvePositioningBoundary(boundary, {
			container: container ?? null,
			root: popup.getRootNode()
		});
		const previous = this.#options;
		if (!previous || previous.anchorName !== anchorName || previous.trigger !== trigger || previous.popup !== popup || (previous.cssVars ?? PopoverCSSVars) !== cssVars || previous.trackResize !== options.trackResize || this.#boundaryElement !== boundaryElement) {
			if (previous?.popup) this.#restorePopupStyles(previous.popup);
			this.#stopTracking();
			this.#options = {
				...options,
				cssVars
			};
			this.#boundaryElement = boundaryElement;
			this.#startTracking();
		} else this.#options = {
			...options,
			cssVars
		};
		this.#position();
	}
	cleanup() {
		if (!this.#options) return;
		if (this.#options.popup) this.#restorePopupStyles(this.#options.popup);
		this.#stopTracking();
		this.#options = null;
		this.#boundaryElement = null;
	}
	#startTracking() {
		const options = this.#options;
		if (!options?.trigger || !options.popup) return;
		this.#applyAnchorStyles(options.trigger, options.popup, options.anchorName);
		this.#abort = new AbortController();
		const { signal } = this.#abort;
		window.addEventListener("scroll", this.#schedule, {
			capture: true,
			passive: true,
			signal
		});
		window.addEventListener("resize", this.#schedule, { signal });
		const resizeTargets = [options.trigger];
		if (options.trackResize !== false) resizeTargets.push(options.popup);
		if (this.#boundaryElement) resizeTargets.push(this.#boundaryElement);
		this.#stopObservingResize = observeResize(resizeTargets, () => this.#schedule());
	}
	#stopTracking() {
		this.#abort?.abort();
		this.#abort = null;
		this.#stopObservingResize?.();
		this.#stopObservingResize = null;
		this.#reposition.cancel();
		this.#restoreAnchorStyles();
	}
	#schedule = (event) => {
		const popup = this.#options?.popup;
		if (!popup || event && isEventWithinElement(event, popup)) return;
		this.#reposition();
	};
	#position() {
		const options = this.#options;
		if (!options?.position || !options.trigger || !options.popup) return;
		const trigger = options.trigger;
		const anchorSupported = supportsAnchorPositioning();
		const origin = anchorSupported ? {
			x: 0,
			y: 0
		} : getFixedContainingBlockOrigin(options.popup);
		const triggerRect = offsetRect(trigger.getBoundingClientRect(), origin);
		const boundaryRect = offsetRect(getPositioningBoundaryRect(this.#boundaryElement), origin);
		const offsets = resolveOffsets(options.popup, options.cssVars);
		const preferredPosition = options.position;
		const measure = () => offsetRect(getPopupPositionRect(options.popup, preferredPosition.side), origin);
		const getPosition = (popupRect) => {
			const side = getPositionedSide(triggerRect, popupRect, boundaryRect, preferredPosition, offsets);
			const { positionAnchor: _, ...style } = getAnchorPositionStyle(options.anchorName, {
				...preferredPosition,
				side,
				direction: isRTL(trigger) ? "rtl" : "ltr"
			}, triggerRect, anchorSupported ? void 0 : popupRect, boundaryRect, offsets, options.cssVars);
			return {
				popupRect,
				side,
				style
			};
		};
		const position = getPosition(measure());
		this.#capturePopupStyles(options.popup, options.cssVars ?? PopoverCSSVars);
		applyStyles(options.popup, position.style);
		options.onSideChange?.(position.side);
		if (anchorSupported || !options.onSideChange) return;
		const popupRect = measure();
		if (popupRect.width === position.popupRect.width && popupRect.height === position.popupRect.height) return;
		const nextPosition = getPosition(popupRect);
		applyStyles(options.popup, nextPosition.style);
		if (nextPosition.side !== position.side) options.onSideChange(nextPosition.side);
	}
	#capturePopupStyles(popup, cssVars) {
		if (this.#popupStyles) return;
		const props = [
			...POPUP_STYLE_PROPS,
			cssVars.anchorWidth,
			cssVars.anchorHeight,
			cssVars.availableWidth,
			cssVars.availableHeight
		];
		this.#popupStyles = snapshotInlineStyles(popup, props);
	}
	#restorePopupStyles(popup) {
		if (!this.#popupStyles) return;
		restoreInlineStyles(popup, this.#popupStyles);
		this.#popupStyles = null;
	}
	#applyAnchorStyles(trigger, popup, anchorName) {
		if (!supportsAnchorPositioning()) return;
		const generatedName = `--${anchorName}`;
		const triggerAnchor = this.#readStyle(trigger, "anchor-name");
		this.#popupAnchor = this.#readStyle(popup, "position-anchor");
		const names = getAnchorNames(trigger);
		this.#triggerAnchorName = generatedName;
		this.#triggerAnchorAdded = !names.includes(generatedName);
		if (this.#triggerAnchorAdded) names.push(generatedName);
		trigger.style.setProperty("anchor-name", names.join(", "), triggerAnchor.priority);
		popup.style.setProperty("position-anchor", generatedName);
	}
	#restoreAnchorStyles() {
		const options = this.#options;
		if (!options?.trigger || !options.popup) return;
		if (this.#triggerAnchorName && this.#triggerAnchorAdded) {
			const current = this.#readStyle(options.trigger, "anchor-name");
			const names = getAnchorNames(options.trigger).filter((name) => name !== this.#triggerAnchorName);
			this.#writeStyle(options.trigger, "anchor-name", {
				value: names.join(", "),
				priority: current.priority
			});
		}
		if (this.#popupAnchor) this.#writeStyle(options.popup, "position-anchor", this.#popupAnchor);
		this.#triggerAnchorName = null;
		this.#triggerAnchorAdded = false;
		this.#popupAnchor = null;
	}
	#readStyle(element, prop) {
		const name = prop.startsWith("--") ? prop : kebabCase(prop);
		return {
			value: element.style.getPropertyValue(name),
			priority: element.style.getPropertyPriority(name)
		};
	}
	#writeStyle(element, prop, style) {
		const name = prop.startsWith("--") ? prop : kebabCase(prop);
		if (style.value) element.style.setProperty(name, style.value, style.priority);
		else element.style.removeProperty(name);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/utils/pointer.js
/**
* Convert a pointer event position to a 0–100 percent along an element's rect.
*
* @internal
*/
function getPercentFromPointerEvent(event, rect, orientation) {
	let ratio;
	if (orientation === "vertical") ratio = 1 - (event.clientY - rect.top) / rect.height;
	else ratio = (event.clientX - rect.left) / rect.width;
	if (!Number.isFinite(ratio)) return 0;
	return clamp(ratio * 100, 0, 100);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/slider/slider.js
const DRAG_THRESHOLD = 3;
/** @internal */
function createSlider(options) {
	const input = createState({
		pointerPercent: 0,
		dragPercent: 0,
		dragging: false,
		pointing: false,
		focused: false
	});
	const abort = new AbortController();
	const changeThrottleMs = options.changeThrottle ?? 0;
	let isPointerDown = false, cachedRect = null, capturedPointerId = null, pointerDownX = 0, pointerDownY = 0, lastDragPercent = 0, lastKeyPercent = null, committedOnRelease = false, pointingOnRelease = false;
	const throttledChange = changeThrottleMs > 0 ? throttle((percent) => options.onValueChange?.(percent), changeThrottleMs, { leading: true }) : null;
	/** Fire `onValueChange` — throttled during drag when `changeThrottle > 0`. */
	function fireChange(percent, duringDrag) {
		if (duringDrag && throttledChange) throttledChange(percent);
		else options.onValueChange?.(percent);
	}
	function releaseCapture() {
		if (isNull(capturedPointerId)) return;
		const id = capturedPointerId;
		capturedPointerId = null;
		try {
			options.getElement().releasePointerCapture(id);
		} catch {}
	}
	function endDrag() {
		if (!isPointerDown) return;
		const pointing = committedOnRelease && pointingOnRelease;
		const wasDragging = input.current.dragging;
		if (!committedOnRelease) options.onValueCommit?.(lastDragPercent);
		isPointerDown = false;
		input.patch({
			dragging: false,
			pointing
		});
		if (wasDragging) options.onDragEnd?.();
		options.onPressEnd?.();
		committedOnRelease = false;
		pointingOnRelease = false;
		cleanup();
	}
	function cleanup() {
		throttledChange?.cancel();
		capturedPointerId = null;
		cachedRect = null;
	}
	const rootProps = {
		onPointerDown(event) {
			if (options.isDisabled()) return;
			event.stopPropagation();
			event.preventDefault();
			const el = options.getElement();
			cachedRect = el.getBoundingClientRect();
			committedOnRelease = false;
			pointingOnRelease = false;
			releaseCapture();
			capturedPointerId = event.pointerId;
			el.setPointerCapture(event.pointerId);
			const percent = getPercentFromPointerEvent(event, cachedRect, options.getOrientation());
			isPointerDown = true;
			pointerDownX = event.clientX;
			pointerDownY = event.clientY;
			lastDragPercent = percent;
			lastKeyPercent = percent;
			input.patch({
				pointing: true,
				pointerPercent: percent,
				dragPercent: percent
			});
			options.onPressStart?.();
			options.onValueChange?.(percent);
			options.getThumbElement?.()?.focus({
				preventScroll: true,
				focusVisible: false
			});
		},
		onPointerMove(event) {
			if (options.isDisabled()) return;
			if (!isNull(capturedPointerId)) {
				if (event.pointerType !== "touch" && event.buttons === 0) {
					endDrag();
					return;
				}
				const percent = getPercentFromPointerEvent(event, cachedRect, options.getOrientation());
				const startingDrag = !input.current.dragging;
				if (startingDrag) {
					if (Math.hypot(event.clientX - pointerDownX, event.clientY - pointerDownY) < DRAG_THRESHOLD) return;
				}
				lastDragPercent = percent;
				lastKeyPercent = percent;
				input.patch({
					dragging: true,
					dragPercent: percent,
					pointerPercent: percent
				});
				if (startingDrag) options.onDragStart?.();
				fireChange(percent, true);
				return;
			}
			const percent = getPercentFromPointerEvent(event, options.getElement().getBoundingClientRect(), options.getOrientation());
			input.patch({
				pointing: true,
				pointerPercent: percent
			});
		},
		onPointerUp(event) {
			if (options.isDisabled()) return;
			event.stopPropagation();
			if (isNull(capturedPointerId)) return;
			const percent = getPercentFromPointerEvent(event, cachedRect, options.getOrientation());
			pointingOnRelease = event.pointerType !== "touch" && isPointInElement(options.getElement(), event);
			throttledChange?.cancel();
			options.onValueChange?.(percent);
			options.onValueCommit?.(percent);
			committedOnRelease = true;
		},
		onPointerLeave() {
			if (!isNull(capturedPointerId)) return;
			input.patch({ pointing: false });
		},
		onLostPointerCapture() {
			endDrag();
		}
	};
	const thumbProps = {
		onKeyDownCapture(event) {
			if (options.isDisabled()) {
				if (event.key !== "Tab") event.preventDefault();
				return;
			}
			const stepPercent = options.getStepPercent();
			const largeStepPercent = options.getLargeStepPercent();
			const rounded = roundToStep(event.repeat && !isNull(lastKeyPercent) ? lastKeyPercent : options.getPercent(), stepPercent, 0);
			const step = event.shiftKey ? largeStepPercent : stepPercent;
			let newPercent = null;
			switch (event.key) {
				case "ArrowRight":
					newPercent = rounded + step;
					break;
				case "ArrowLeft":
					newPercent = rounded - step;
					break;
				case "ArrowUp":
					newPercent = rounded + step;
					break;
				case "ArrowDown":
					newPercent = rounded - step;
					break;
				case "PageUp":
					newPercent = rounded + largeStepPercent;
					break;
				case "PageDown":
					newPercent = rounded - largeStepPercent;
					break;
				case "Home":
					newPercent = 0;
					break;
				case "End": newPercent = 100;
			}
			if (newPercent !== null) {
				event.preventDefault();
				newPercent = clamp(newPercent, 0, 100);
				lastKeyPercent = newPercent;
				input.patch({
					pointerPercent: newPercent,
					dragPercent: newPercent,
					pointing: false
				});
				options.onValueChange?.(newPercent);
				options.onValueCommit?.(newPercent);
			}
		},
		onFocus() {
			input.patch({ focused: true });
		},
		onBlur() {
			input.patch({ focused: false });
		}
	};
	function adjustForAlignment(state) {
		if (!options.adjustPercent || state.thumbAlignment !== "edge") return state;
		const rootEl = options.getElement();
		const thumbEl = options.getThumbElement?.();
		if (!thumbEl) return state;
		const isHorizontal = state.orientation === "horizontal";
		const thumbSize = isHorizontal ? thumbEl.offsetWidth : thumbEl.offsetHeight;
		const trackSize = isHorizontal ? rootEl.offsetWidth : rootEl.offsetHeight;
		return {
			...state,
			fillPercent: options.adjustPercent(state.fillPercent, thumbSize, trackSize),
			pointerPercent: options.adjustPercent(state.pointerPercent, thumbSize, trackSize)
		};
	}
	let stopObservingResize = null;
	if (options.onResize) stopObservingResize = observeResize(options.getElement(), () => options.onResize());
	return {
		input,
		rootProps,
		rootStyle: {
			touchAction: "none",
			userSelect: "none"
		},
		thumbProps,
		adjustForAlignment,
		destroy() {
			if (abort.signal.aborted) return;
			abort.abort();
			stopObservingResize?.();
			releaseCapture();
			cleanup();
		}
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/slider/vars.js
/**
* CSS custom property names for slider visual state.
*
* @internal
*/
const SliderCSSVars = {
	/** Fill level percentage (0–100). */
	fill: "--media-slider-fill",
	/** Pointer position percentage (0–100). */
	pointer: "--media-slider-pointer",
	/** Buffer level percentage (0–100). */
	buffer: "--media-slider-buffer"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/slider/css-vars.js
/** @internal */
function getSliderCSSVars(state) {
	return {
		[SliderCSSVars.fill]: `${state.fillPercent.toFixed(3)}%`,
		[SliderCSSVars.pointer]: `${state.pointerPercent.toFixed(3)}%`
	};
}
/** @internal */
function getTimeSliderCSSVars(state) {
	return {
		...getSliderCSSVars(state),
		[SliderCSSVars.buffer]: `${state.bufferPercent.toFixed(3)}%`
	};
}
/**
* Compute structural positioning styles for a slider preview element.
*
* @internal
*/
function getSliderPreviewStyle(width, overflow) {
	const halfWidth = width / 2;
	return {
		position: "absolute",
		left: overflow === "visible" ? `calc(var(${SliderCSSVars.pointer}) - ${halfWidth}px)` : `min(max(0px, calc(var(${SliderCSSVars.pointer}) - ${halfWidth}px)), calc(100% - ${width}px))`,
		width: "max-content",
		pointerEvents: "none"
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/slider/focus.js
/** @internal */
function isSliderFocused(root = document) {
	const active = getDeepActiveElement(isDocument(root) ? root : root.ownerDocument);
	if (active?.getAttribute("role") !== "slider") return false;
	return isDocument(root) || containsComposed(root, active);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/status-announcer.js
/** @internal */
function subscribeToStatusAnnouncer(store, core) {
	let active = true;
	let pending = false;
	let target = store.target;
	let revision = 0;
	const baseline = () => {
		target = store.target;
		pending = true;
		const current = ++revision;
		core.resetSnapshot();
		queueMicrotask(() => {
			if (!active || current !== revision) return;
			pending = false;
			target = store.target;
			if (target) core.processSnapshot(getMediaSnapshot(store));
		});
	};
	const unsubscribe = store.subscribe(() => {
		const nextTarget = store.target;
		if (nextTarget !== target) {
			baseline();
			return;
		}
		if (!nextTarget || pending) return;
		core.processSnapshot(getMediaSnapshot(store));
	});
	baseline();
	return () => {
		active = false;
		unsubscribe();
	};
}
/** @internal */
function shouldAnnounceStatusChange(container) {
	return !container || !isSliderFocused(container);
}
//#endregion
//#region node_modules/@videojs/utils/dist/array/find-last-at-or-before.js
/** Finds the index of the last ordered item whose value is at or before the target, or `-1` if none exists. */
function findLastIndexAtOrBefore(items, value, getValue) {
	let low = 0;
	let high = items.length - 1;
	let index = -1;
	while (low <= high) {
		const mid = low + high >>> 1;
		if (getValue(items[mid]) <= value) {
			index = mid;
			low = mid + 1;
		} else high = mid - 1;
	}
	return index;
}
/**
* Finds the last ordered item whose value is at or before the target.
*
* @internal
*/
function findLastAtOrBefore(items, value, getValue) {
	const index = findLastIndexAtOrBefore(items, value, getValue);
	return index < 0 ? void 0 : items[index];
}
//#endregion
//#region node_modules/@videojs/utils/dist/array/find-range-at.js
/**
* Finds the ordered range containing the target value.
*
* @internal
*/
function findRangeAt(ranges, value, getStart, getEnd) {
	const index = findLastIndexAtOrBefore(ranges, value, getStart);
	if (index < 0) return void 0;
	const range = ranges[index];
	const end = getEnd(range);
	const last = index === ranges.length - 1;
	return value < end || last && value === end ? range : void 0;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/thumbnail/core.js
/** @internal */
var ThumbnailCore = class {
	findActiveThumbnail(thumbnails, time) {
		return findLastAtOrBefore(thumbnails, time, (thumbnail) => thumbnail.startTime);
	}
	/**
	* Parse CSS constraint strings into numeric `ThumbnailConstraints`.
	*
	* Accepts any object with string `minWidth`/`maxWidth`/`minHeight`/`maxHeight` properties — `CSSStyleDeclaration`
	* satisfies this structurally.
	*/
	parseConstraints(raw) {
		const minW = parseFloat(raw.minWidth);
		const maxW = parseFloat(raw.maxWidth);
		const minH = parseFloat(raw.minHeight);
		const maxH = parseFloat(raw.maxHeight);
		return {
			minWidth: Number.isFinite(minW) ? minW : 0,
			maxWidth: Number.isFinite(maxW) ? maxW : Infinity,
			minHeight: Number.isFinite(minH) ? minH : 0,
			maxHeight: Number.isFinite(maxH) ? maxH : Infinity
		};
	}
	/**
	* Calculate a uniform scale factor that sizes `tileWidth × tileHeight` to the given CSS min/max constraints while
	* preserving aspect ratio.
	*
	* - Fills the max constraints, scaling the tile up as readily as down. A box that grows — entering fullscreen widens it
	*   through a container query — has to take the tile with it rather than leave it at its native size.
	* - Raises that to meet min constraints, which win over max as they do in CSS.
	* - Returns `1` when unconstrained.
	*/
	calculateScale(tileWidth, tileHeight, constraints) {
		const { minWidth, maxWidth, minHeight, maxHeight } = constraints;
		const maxRatio = Math.min(maxWidth / tileWidth, maxHeight / tileHeight);
		const minRatio = Math.max(minWidth / tileWidth, minHeight / tileHeight);
		const scale = Number.isFinite(maxRatio) ? maxRatio : 1;
		return Number.isFinite(minRatio) && minRatio > scale ? minRatio : scale;
	}
	/**
	* Compute container and image dimensions for the current thumbnail, scaled to the element's CSS min/max constraints.
	*
	* The container clips the sprite sheet via `overflow: hidden`, and the image is positioned with `transform:
	* translate()` to show the correct tile.
	*/
	resize(thumbnail, imgNaturalWidth, imgNaturalHeight, constraints) {
		const tileWidth = thumbnail.width ?? imgNaturalWidth;
		const tileHeight = thumbnail.height ?? imgNaturalHeight;
		if (!tileWidth || !tileHeight) return void 0;
		const scale = this.calculateScale(tileWidth, tileHeight, constraints);
		const coordX = thumbnail.coords?.x ?? 0;
		const coordY = thumbnail.coords?.y ?? 0;
		const inset = scale !== 1 ? 1 : 0;
		return {
			scale,
			containerWidth: Math.max(0, Math.floor(tileWidth * scale) - inset * 2),
			containerHeight: Math.max(0, Math.floor(tileHeight * scale) - inset * 2),
			imageWidth: Math.ceil(imgNaturalWidth * scale),
			imageHeight: Math.ceil(imgNaturalHeight * scale),
			offsetX: Math.ceil(coordX * scale) + inset,
			offsetY: Math.ceil(coordY * scale) + inset
		};
	}
	/**
	* Resolve the CORS mode the image should request with.
	*
	* `null` opts out and drops the attribute. Any other explicit value wins, including `''`, which the CORS-settings
	* attribute reads as Anonymous. Otherwise the inherited mode applies, which renderers supply only for
	* `<track>`-sourced thumbnails since a list set directly may point at a host unrelated to the media element.
	*/
	resolveCrossOrigin(explicit, inherited) {
		if (isNull(explicit)) return void 0;
		if (!isUndefined(explicit)) return explicit;
		return inherited ?? void 0;
	}
	getState(loading, error, thumbnail) {
		return {
			loading,
			error,
			hidden: !loading && !thumbnail
		};
	}
	getAttrs(_state) {
		return {
			dir: "ltr",
			role: "img",
			"aria-hidden": "true"
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/thumbnail.js
/** @internal */
function createThumbnail(options) {
	const { getContainer, getImg, onStateChange } = options;
	const core = new ThumbnailCore();
	let loading = false;
	let error = false;
	let naturalWidth = 0;
	let naturalHeight = 0;
	let lastSrc = "";
	let boundImg = null;
	let checkedImg = null;
	let stopListeningToImg = null;
	let stopObservingResize = null;
	const failedSrcs = /* @__PURE__ */ new Set();
	function onImgLoad() {
		const img = getImg();
		if (img) {
			naturalWidth = img.naturalWidth;
			naturalHeight = img.naturalHeight;
		}
		failedSrcs.delete(lastSrc);
		loading = false;
		error = false;
		onStateChange();
	}
	function markFailed() {
		failedSrcs.add(lastSrc);
		loading = false;
		error = true;
	}
	function onImgError() {
		markFailed();
		onStateChange();
	}
	function bindImg(img) {
		stopListeningToImg = new AbortController();
		listen(img, "load", onImgLoad, { signal: stopListeningToImg.signal });
		listen(img, "error", onImgError, { signal: stopListeningToImg.signal });
	}
	function ensureBindings() {
		const img = getImg();
		if (img !== boundImg) {
			stopListeningToImg?.abort();
			stopListeningToImg = null;
			boundImg = img;
			checkedImg = null;
			if (img) bindImg(img);
		}
		if (!stopObservingResize) {
			const container = getContainer();
			if (container) stopObservingResize = observeResize(container, onStateChange);
		}
	}
	function updateSrc(url) {
		ensureBindings();
		const src = url ?? "";
		if (src === lastSrc) return;
		lastSrc = src;
		if (src) {
			const failed = failedSrcs.has(src);
			loading = !failed;
			error = failed;
		} else {
			loading = false;
			error = false;
			naturalWidth = 0;
			naturalHeight = 0;
		}
	}
	function connect() {
		ensureBindings();
		const img = getImg();
		if (!img || img === checkedImg) return;
		checkedImg = img;
		if (!img.complete || !lastSrc) return;
		const previous = {
			loading,
			error,
			naturalWidth,
			naturalHeight
		};
		if (img.naturalWidth > 0) {
			naturalWidth = img.naturalWidth;
			naturalHeight = img.naturalHeight;
			loading = false;
			error = false;
		} else markFailed();
		if (previous.loading !== loading || previous.error !== error || previous.naturalWidth !== naturalWidth || previous.naturalHeight !== naturalHeight) onStateChange();
	}
	function disconnectImg(img) {
		if (img !== boundImg) return;
		stopListeningToImg?.abort();
		stopListeningToImg = null;
		boundImg = null;
		checkedImg = null;
	}
	function destroy() {
		stopListeningToImg?.abort();
		stopListeningToImg = null;
		boundImg = null;
		checkedImg = null;
		stopObservingResize?.();
		stopObservingResize = null;
	}
	return {
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		get naturalWidth() {
			return naturalWidth;
		},
		get naturalHeight() {
			return naturalHeight;
		},
		readConstraints() {
			const el = getContainer();
			if (!el) return {
				minWidth: 0,
				maxWidth: Infinity,
				minHeight: 0,
				maxHeight: Infinity
			};
			return core.parseConstraints(getComputedStyle(el));
		},
		updateSrc,
		connect,
		disconnectImg,
		destroy
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/tooltip/tooltip.js
/** Map popover reasons to tooltip reasons, filtering out click/outside-click. */
const REASON_MAP = {
	hover: "hover",
	focus: "focus",
	escape: "escape",
	blur: "blur",
	"imperative-action": "imperative-action"
};
/** @internal */
function createTooltip(options) {
	const popoverOpts = {
		transition: options.transition,
		onOpenChange(open, details) {
			const reason = REASON_MAP[details.reason];
			if (!reason) return;
			const group = options.group?.();
			if (open) group?.notifyOpen();
			else group?.notifyClose();
			const tooltipDetails = details.event ? {
				reason,
				event: details.event
			} : { reason };
			options.onOpenChange(open, tooltipDetails);
		},
		closeOnEscape: () => true,
		closeOnOutsideClick: () => false,
		openOnHover: () => true,
		delay: () => {
			const group = options.group?.();
			if (group?.shouldSkipDelay()) return 0;
			return options.delay?.() ?? group?.delay ?? 600;
		},
		closeDelay: () => {
			const group = options.group?.();
			return options.closeDelay?.() ?? group?.closeDelay ?? 0;
		}
	};
	if (options.onOpenChangeComplete) popoverOpts.onOpenChangeComplete = options.onOpenChangeComplete;
	const popover = createPopover(popoverOpts);
	let isPointerDown = false;
	let popupGroup;
	let unsubscribe;
	function isTriggerPopupOpen() {
		return popupGroup?.isOpenFor(popover.triggerElement) ?? false;
	}
	function isSticky() {
		return options.sticky?.() ?? false;
	}
	function syncPopupGroup() {
		const next = options.popupGroup?.();
		if (next === popupGroup) return;
		unsubscribe?.();
		popupGroup = next;
		unsubscribe = popupGroup?.subscribe(() => {
			if (isTriggerPopupOpen() && !isSticky()) popover.close("imperative-action");
		});
	}
	function setTriggerElement(el) {
		popover.setTriggerElement(el);
		syncPopupGroup();
		if (isTriggerPopupOpen() && !isSticky()) popover.close("imperative-action");
	}
	const { onClick: _, ...baseTriggerProps } = popover.triggerProps;
	const triggerProps = {
		...baseTriggerProps,
		onPointerDown() {
			syncPopupGroup();
			isPointerDown = true;
			if (!isSticky()) popover.close("imperative-action");
		},
		onPointerEnter(event) {
			syncPopupGroup();
			if (options.disabled?.()) return;
			if (isTriggerPopupOpen() && !isSticky()) return;
			if (event.pointerType === "touch") return;
			baseTriggerProps.onPointerEnter(event);
		},
		onFocusIn(event) {
			syncPopupGroup();
			if (options.disabled?.()) return;
			if (isTriggerPopupOpen() && !isSticky()) return;
			if (isPointerDown) {
				isPointerDown = false;
				return;
			}
			baseTriggerProps.onFocusIn(event);
		}
	};
	const popupProps = {
		...popover.popupProps,
		onPointerEnter(event) {
			if (options.disableHoverablePopup?.()) return;
			popover.popupProps.onPointerEnter(event);
		}
	};
	return {
		...popover,
		triggerProps,
		popupProps,
		get triggerElement() {
			return popover.triggerElement;
		},
		setTriggerElement,
		open: () => {
			syncPopupGroup();
			if (!isTriggerPopupOpen() || isSticky()) popover.open("hover");
		},
		close: (reason = "hover") => popover.close(reason),
		destroy() {
			unsubscribe?.();
			popover.destroy();
		}
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/transition.js
/**
* Manages open/close transition lifecycle via `createState`.
*
* **Open:** patches `{ active: true, status: 'starting' }`, then after a double-RAF patches `{ status: 'idle' }` so the
* browser paints the initial ("from") state before transitioning. It then waits for the resulting element animations to
* finish. Reopening an active transition flushes styles first so CSS transitions can restart.
*
* **Close:** patches `{ status: 'ending' }` (keeping `active: true` so the element stays mounted), then after a
* double-RAF waits for `getAnimations()` to settle before patching `{ active: false, status: 'idle' }`.
*
* @internal
*/
function createTransition() {
	const state = createState({
		active: false,
		status: "idle"
	});
	let destroyed = false;
	let rafId1 = 0;
	let rafId2 = 0;
	let operationId = 0;
	let resolvePending = null;
	function cancelFrames() {
		cancelAnimationFrame(rafId1);
		cancelAnimationFrame(rafId2);
		rafId1 = 0;
		rafId2 = 0;
	}
	function beginOperation() {
		operationId++;
		cancelFrames();
		resolvePending?.();
		resolvePending = null;
		return operationId;
	}
	function finishOperation(id) {
		if (id !== operationId) return;
		const resolve = resolvePending;
		resolvePending = null;
		resolve?.();
	}
	function open(el = null) {
		if (destroyed) return Promise.resolve();
		const id = beginOperation();
		const restarting = state.current.active;
		if (restarting) state.patch({ status: "idle" });
		state.patch({
			active: true,
			status: "starting"
		});
		return new Promise((resolve) => {
			resolvePending = resolve;
			rafId1 = requestAnimationFrame(() => {
				rafId1 = 0;
				if (restarting) {
					const element = resolveElement(el);
					cancelAnimations(element);
					flushStyles(element);
				}
				rafId2 = requestAnimationFrame(() => {
					rafId2 = 0;
					if (destroyed || id !== operationId || !state.current.active) return finishOperation(id);
					state.patch({ status: "idle" });
					rafId1 = requestAnimationFrame(() => {
						rafId1 = 0;
						if (destroyed || id !== operationId || !state.current.active) return finishOperation(id);
						waitForAnimations(resolveElement(el)).finally(() => finishOperation(id));
					});
				});
			});
		});
	}
	function close(el) {
		if (destroyed) return Promise.resolve();
		const id = beginOperation();
		state.patch({ status: "ending" });
		return new Promise((resolve) => {
			resolvePending = resolve;
			rafId1 = requestAnimationFrame(() => {
				rafId1 = 0;
				rafId2 = requestAnimationFrame(() => {
					rafId2 = 0;
					if (destroyed || id !== operationId) return finishOperation(id);
					waitForAnimations(el).finally(() => {
						if (destroyed || id !== operationId || state.current.status !== "ending") return finishOperation(id);
						state.patch({
							active: false,
							status: "idle"
						});
						finishOperation(id);
					});
				});
			});
		});
	}
	function cancel() {
		operationId++;
		cancelFrames();
		resolvePending?.();
		resolvePending = null;
		if (state.current.status !== "idle") state.patch({ status: "idle" });
	}
	return {
		state,
		open,
		close,
		cancel,
		destroy() {
			if (destroyed) return;
			destroyed = true;
			cancel();
		}
	};
}
function resolveElement(element) {
	return typeof element === "function" ? element() : element;
}
function flushStyles(el) {
	if (!el) return;
	el.offsetHeight;
}
function cancelAnimations(el) {
	const animations = el?.getAnimations?.({ subtree: true }) ?? [];
	for (const animation of animations) animation.cancel();
}
function waitForAnimations(el) {
	if (!el) return Promise.resolve();
	const animations = el.getAnimations?.() ?? [];
	if (animations.length === 0) return Promise.resolve();
	return Promise.all(animations.map((a) => a.finished)).then(noop, noop);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/ui/wheel-step.js
/** @internal */
function createWheelStep(options) {
	return { onWheel(event) {
		if (options.isDisabled()) return;
		const direction = Math.sign(event.deltaY);
		if (direction === 0) return;
		event.preventDefault();
		const stepPercent = options.getStepPercent();
		const newPercent = clamp(options.getPercent() - direction * stepPercent, 0, 100);
		options.onValueChange?.(newPercent);
	} };
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/utils/element-props.js
/**
* Apply props to a DOM element.
*
* Handles both attributes and event listeners: - Event props (onClick, onKeyDown, etc.) are attached as listeners -
* Event props ending in `Capture` use capture phase, except pointer capture events - Boolean props: `true` sets empty
* attribute, `false` removes - `undefined` removes the attribute - Other props are set as string attributes
*
* @internal
*/
function applyElementProps(element, props, options) {
	const signal = options?.signal;
	for (const [key, value] of Object.entries(props)) if (isFunction(value) && key.startsWith("on")) {
		const capture = key.endsWith("Capture") && !key.endsWith("PointerCapture");
		listen(element, key.slice(2, capture ? -7 : void 0).toLowerCase(), value, signal ? {
			capture,
			signal
		} : { capture });
	} else if (isUndefined(value) || value === false) element.removeAttribute(key);
	else if (value === true) element.setAttribute(key, "");
	else element.setAttribute(key, String(value));
}
//#endregion
//#region node_modules/@videojs/core/dist/default/dom/utils/state-data-attrs.js
/**
* Apply state as data attributes to an element.
*
* - `true` → sets `data-keyname=""`
* - Truthy string/number → sets `data-keyname="value"`
* - Falsy → removes the attribute
*
* @example
*   ```ts
*   const state = { paused: true, ended: false };
*   applyStateDataAttrs(element, state);
*   // element has data-paused="", data-ended is removed
*   ```;
*
* @internal
*/
function applyStateDataAttrs(element, state, map) {
	for (const key in state) {
		if (map && !(key in map)) continue;
		const name = map?.[key] ?? toDataAttrName(key), value = state[key];
		if (value === true) element.setAttribute(name, "");
		else if (value) element.setAttribute(name, String(value));
		else element.removeAttribute(name);
	}
}
function toDataAttrName(key) {
	return `data-${key.toLowerCase()}`;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/player/element.js
function resolveInputs(config) {
	return Object.entries(config).map(([key, entry]) => {
		const attribute = entry.html?.attribute ?? kebabCase(key);
		return {
			property: camelCase(attribute),
			attribute,
			entry
		};
	});
}
function createPlayerElement(options) {
	const inputs = resolveInputs(options.config);
	class ConfiguredPlayerElement extends UIElement {
		static {
			this.properties = {
				...UIElement.properties,
				...Object.fromEntries(inputs.map(({ property, attribute }) => [property, {
					type: String,
					attribute
				}]))
			};
		}
		#store = options.factory();
		#contextRoot = new t();
		#configuredStore = null;
		#detach = null;
		#connected = false;
		#media = null;
		#nativeMedia = null;
		#container = null;
		#attached = null;
		#mediaRegistrations = [];
		#containerRegistrations = [];
		#observer = new MutationObserver(() => this.#syncNativeMedia());
		#extensions = new PlayerExtensionCoordinator(() => this.#syncExtensions());
		#registerExtension = (extension) => this.#extensions.register(extension);
		#registerMedia = (media) => {
			const registration = { value: media };
			this.#mediaRegistrations.push(registration);
			this.#syncMedia();
			return () => {
				const index = this.#mediaRegistrations.indexOf(registration);
				if (index < 0) return;
				this.#mediaRegistrations.splice(index, 1);
				this.#syncNativeMedia();
				this.#syncMedia();
			};
		};
		#registerContainer = (container) => {
			const registration = { value: container };
			this.#containerRegistrations.push(registration);
			this.#syncContainer();
			return () => {
				const index = this.#containerRegistrations.indexOf(registration);
				if (index < 0) return;
				this.#containerRegistrations.splice(index, 1);
				this.#syncContainer();
			};
		};
		#playerProvider = new i(this, {
			context: options.playerContext,
			initialValue: this.store
		});
		#mediaProvider = new i(this, {
			context: options.mediaContext,
			initialValue: {
				media: this.#media,
				registerMedia: this.#registerMedia
			}
		});
		#containerProvider = new i(this, {
			context: options.containerContext,
			initialValue: {
				container: this.#container,
				registerContainer: this.#registerContainer
			}
		});
		constructor() {
			super();
			new i(this, {
				context: options.extensionContext,
				initialValue: { registerExtension: this.#registerExtension }
			});
		}
		get store() {
			if (isNull(this.#store)) this.#store = options.factory();
			return this.#store;
		}
		connectedCallback() {
			this.#connected = true;
			this.#contextRoot.attach(this);
			super.connectedCallback();
			this.#syncInitialConfig();
			this.#playerProvider.setValue(this.store);
			this.#publishMedia();
			this.#publishContainer();
			this.#observer.observe(this, {
				childList: true,
				subtree: true
			});
			queueMicrotask(() => {
				if (this.#connected) this.#syncNativeMedia();
			});
			this.#tryAttach();
		}
		disconnectedCallback() {
			this.#connected = false;
			this.#contextRoot.detach(this);
			this.#observer.disconnect();
			this.#detachStore();
			super.disconnectedCallback();
		}
		destroyCallback() {
			this.#contextRoot.detach(this);
			this.#observer.disconnect();
			this.#detachStore();
			this.#extensions.destroy();
			this.#store?.destroy();
			this.#store = null;
			super.destroyCallback();
		}
		willUpdate(changed) {
			super.willUpdate(changed);
			for (const { property, entry } of inputs) {
				if (!changed.has(property)) continue;
				const configProperty = property;
				setPlayerConfigValue(this.store, entry, this[configProperty]);
			}
		}
		#syncMedia() {
			const media = this.#mediaRegistrations.at(-1)?.value ?? null ?? this.#nativeMedia;
			if (this.#media === media) return;
			this.#media = media;
			this.#publishMedia();
			this.#tryAttach();
		}
		#syncContainer() {
			const container = this.#containerRegistrations.at(-1)?.value ?? null;
			if (this.#container === container) return;
			this.#container = container;
			this.#publishContainer();
			this.#tryAttach();
		}
		#syncNativeMedia() {
			const media = this.querySelector("video, audio");
			if (this.#nativeMedia === media) return;
			this.#nativeMedia = media;
			this.#syncMedia();
		}
		#publishMedia() {
			this.#mediaProvider.setValue({
				media: this.#media,
				registerMedia: this.#registerMedia
			});
		}
		#publishContainer() {
			this.#containerProvider.setValue({
				container: this.#container,
				registerContainer: this.#registerContainer
			});
		}
		#tryAttach() {
			if (!this.#connected || !this.#store) return;
			if (!this.#media) {
				this.#detachStore();
				return;
			}
			const target = {
				media: this.#media,
				container: this.#container
			};
			const hasMediaChanged = this.#attached?.media !== target.media;
			const hasContainerChanged = this.#attached?.container !== target.container;
			if (hasMediaChanged || hasContainerChanged) this.#attach(target);
		}
		/**
		* Extensions attach before the store so their overrides are in place when features first read the media; the store
		* then sees the media through the extensions' facade. Extensions follow the media only, so a container change
		* re-attaches the store but leaves them attached.
		*/
		#attach(target) {
			const store = this.#store;
			if (!store) return;
			this.#detach?.();
			this.#attached = target;
			this.#extensions.attach(target);
			this.#detach = store.attach({
				media: this.#extensions.getStoreMedia(target.media),
				container: target.container
			});
		}
		/**
		* An extension that overrides media members was added or removed. Features hold members read at attach time (such
		* as `remote`), so the store re-attaches to the same target to pick up what the extensions now own. Observers such
		* as analytics never get here. Extensions themselves stay attached.
		*/
		#syncExtensions() {
			if (this.#attached) this.#attach(this.#attached);
		}
		#detachStore() {
			this.#detach?.();
			this.#detach = null;
			this.#extensions.detach();
			this.#attached = null;
		}
		#syncInitialConfig() {
			const store = this.store;
			if (this.#configuredStore === store) return;
			for (const { property, entry } of inputs) {
				const configProperty = property;
				setPlayerConfigValue(store, entry, this[configProperty]);
			}
			this.#configuredStore = store;
		}
	}
	return ConfiguredPlayerElement;
}
//#endregion
//#region node_modules/@videojs/html/node_modules/@videojs/store/dist/default/core/combine.js
/**
* Combines multiple slices into a single slice.
*
* @param slices - The slices to combine.
* @returns A new slice that represents the combination of the input slices.
* @internal
*/
function combine(...slices) {
	const derivedDefinitions = slices.map((slice) => slice.derived ?? {});
	return {
		state: (ctx) => {
			const states = slices.map((slice) => slice.state(ctx));
			return Object.assign({}, ...states);
		},
		preserve: Array.from(new Set(slices.flatMap((slice) => slice.preserve ?? []))),
		derived: Object.assign({}, ...derivedDefinitions),
		attach: (ctx) => {
			for (const slice of slices) try {
				slice.attach?.(ctx);
			} catch (err) {
				ctx.reportError(err);
			}
		}
	};
}
//#endregion
//#region node_modules/@videojs/html/dist/default/player/create-player.js
function createPlayer(config) {
	const slice = combine(...config.features);
	return {
		PlayerElement: createPlayerElement({
			playerContext,
			mediaContext,
			containerContext,
			extensionContext,
			factory: () => createStore()(slice),
			config: combinePlayerFeatureConfigs(config.features)
		}),
		PlayerController: createPlayerController(playerContext),
		playerContext
	};
}
//#endregion
//#region node_modules/@videojs/html/dist/default/presets/video/player.js
const { PlayerElement: PlayerElement$1, PlayerController: VideoPlayerController } = createPlayer({ features: videoFeatures });
/**
* Player-state provider registered as `<video-player>`.
*
* The element owns the configured video store but no layout. Put a skin or `<media-container>` inside it to provide the
* media, controls, and fullscreen target.
*/
var VideoPlayerElement = class extends PlayerElement$1 {
	static {
		this.tagName = "video-player";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/video/player.js
safeDefine(VideoPlayerElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/global.js
var global_default = "@property --media-slider-fill{syntax:\"<percentage>\";inherits:true;initial-value:0%}@property --media-slider-buffer{syntax:\"<percentage>\";inherits:true;initial-value:0%}video-player,live-video-player,media-i18n,media-dialog,media-alert-dialog,media-error-dialog,media-controls{display:contents}media-container video,media-container [slot=poster]{width:100%;height:100%;display:block}media-container video::-webkit-media-text-track-container{z-index:1;scale:.98;translate:0 var(--media-caption-track-y,0);transition:translate var(--media-caption-track-duration,0) ease-out;transition-delay:var(--media-caption-track-delay,0);font-family:inherit}\n";
//#endregion
//#region node_modules/@videojs/html/dist/default/define/shadow.js
var shadow_default = ":host{width:100%;display:grid}:host(:focus){outline:none!important}::slotted(video),::slotted(audio){margin:0!important}\n";
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/airplay.js
const prefix$12 = "airplay.";
const startText$1 = {
	key: `${prefix$12}start`,
	text: "Start AirPlay"
};
const stopText$1 = {
	key: `${prefix$12}stop`,
	text: "Stop AirPlay"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/cast.js
const prefix$11 = "cast.";
const startText = {
	key: `${prefix$11}start`,
	text: "Start casting"
};
const stopText = {
	key: `${prefix$11}stop`,
	text: "Stop casting"
};
const connectingText = {
	key: `${prefix$11}connecting`,
	text: "Connecting"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/utils/resolve-label.js
function resolveLabel(label, state) {
	if (isFunction(label)) return label(state) || void 0;
	return label || void 0;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/airplay-button/core.js
/** @internal */
var AirPlayButtonCore = class AirPlayButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		state: "disconnected",
		availability: "unsupported",
		disabled: true,
		hidden: true,
		label: ""
	});
	#props = { ...AirPlayButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, AirPlayButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		if (state.state === "connected") return stopText$1;
		if (state.state === "connecting") return connectingText;
		return startText$1;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = supportsWebKitAirPlay() ? media.remotePlaybackAvailability : "unsupported";
		this.state.patch({
			state: media.remotePlaybackState,
			availability,
			disabled: this.#props.disabled || availability !== "available",
			hidden: availability !== "available"
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async toggle(media) {
		this.setMedia(media);
		if (this.getState().disabled) return;
		try {
			await media.promptRemotePlayback();
		} catch {}
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/airplay-button/data.js
/** @internal */
const AirPlayButtonDataAttrs = {
	/**
	* Current AirPlay connection state.
	*
	* @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
	*/
	state: "data-airplay-state",
	/**
	* Whether AirPlay is available on the active platform and media.
	*
	* @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback
	*/
	availability: "data-availability",
	/** Present when the button is non-interactive (mirrors `aria-disabled`). */
	disabled: "data-disabled",
	/** Present when the button is hidden because AirPlay is unavailable. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/dialog/core.js
/** @internal */
var DialogCore = class {
	static defaultProps = {
		open: false,
		defaultOpen: false,
		closeOnEscape: true
	};
	#role;
	#input = null;
	#titleId = void 0;
	#descriptionId = void 0;
	#documentModal = true;
	constructor(role = "dialog") {
		this.#role = role;
	}
	/** Accept props for API consistency. Props are consumed by platform layers. */
	setProps(_props) {}
	setInput(input) {
		this.#input = input;
	}
	setTitleId(id) {
		this.#titleId = id;
	}
	setDescriptionId(id) {
		this.#descriptionId = id;
	}
	setDocumentModal(documentModal) {
		this.#documentModal = documentModal;
	}
	getState() {
		const input = this.#input;
		return {
			open: input.active,
			status: input.status,
			titleId: this.#titleId,
			descriptionId: this.#descriptionId,
			...getTransitionFlags(input.status)
		};
	}
	getTriggerAttrs(state, popupId) {
		return {
			"aria-expanded": state.open && state.status !== "ending" ? "true" : "false",
			"aria-haspopup": "dialog",
			"aria-controls": popupId
		};
	}
	getPopupAttrs(state) {
		return {
			role: this.#role,
			"aria-modal": this.#documentModal ? "true" : void 0,
			"aria-labelledby": state.titleId,
			"aria-describedby": state.descriptionId
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/alert-dialog/core.js
/**
* A dialog with alert semantics for urgent messages that require acknowledgement.
*
* @internal
*/
var AlertDialogCore = class extends DialogCore {
	constructor() {
		super("alertdialog");
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/dialog/data.js
/** @internal */
const DialogDataAttrs = {
	/** Present when the dialog is open. */
	open: "data-open",
	/** Present during the open transition. */
	transitionStarting: "data-starting-style",
	/** Present during the close transition. */
	transitionEnding: "data-ending-style"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/menu.js
const prefix$10 = "menu.";
const qualityText = {
	key: `${prefix$10}quality`,
	text: "Quality"
};
const audioText = {
	key: `${prefix$10}audio`,
	text: "Audio"
};
const captionsText = {
	key: `${prefix$10}captions`,
	text: "Captions"
};
const playbackRateText = {
	key: `${prefix$10}playbackRate`,
	text: "Playback rate"
};
const offText = {
	key: `${prefix$10}off`,
	text: "Off"
};
const autoText = {
	key: `${prefix$10}auto`,
	text: "Auto"
};
const autoWithLabelText = {
	key: `${prefix$10}autoWithLabel`,
	text: "Auto ({label})"
};
const subtitlesText = {
	key: `${prefix$10}subtitles`,
	text: "Subtitles"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/audio-track-radio-group/core.js
function formatTrackLabel$1(track) {
	if (track.label) return track.label;
	if (track.language) return track.language;
	if (track.kind) return track.kind;
	return audioText;
}
/** @internal */
var AudioTrackRadioGroupCore = class AudioTrackRadioGroupCore {
	static defaultProps = {
		label: "",
		formatTrack: formatTrackLabel$1,
		disabled: false
	};
	state = createState({
		options: [],
		value: "",
		disabled: true,
		hidden: true,
		availability: "unavailable",
		label: ""
	});
	#props = { ...AudioTrackRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, AudioTrackRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return audioText;
	}
	getTrackLabel(track) {
		return this.#props.formatTrack(track);
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const enabledIndex = media.audioTrackList.findIndex((track) => track.enabled);
		const options = media.audioTrackList.map((track) => ({
			value: track.id,
			label: this.getTrackLabel(track),
			disabled: false
		}));
		const availability = options.length > 1 ? "available" : "unavailable";
		this.state.patch({
			options,
			value: enabledIndex === -1 ? "" : media.audioTrackList[enabledIndex].id,
			disabled: this.#props.disabled || availability === "unavailable",
			hidden: availability === "unavailable",
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, value) {
		if (this.#props.disabled) return;
		if (!media.audioTrackList.some((track) => track.id === value)) return;
		media.selectAudioTrack(value);
	}
	selectValue(media, value) {
		this.select(media, value);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/audio-track-radio-group/data.js
/** @internal */
const AudioTrackRadioGroupDataAttrs = {
	/** Current audio track value. */
	value: "data-audio-track",
	/** Present when audio track selection is disabled. */
	disabled: "data-disabled",
	/** Present when audio track selection is unavailable. */
	hidden: "data-hidden",
	/** Indicates audio track availability (`available` or `unavailable`). */
	availability: "data-availability"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/buffering-indicator/core.js
/** @internal */
var BufferingIndicatorCore = class BufferingIndicatorCore {
	static defaultProps = { delay: 500 };
	state = createState({ visible: false });
	#props = { ...BufferingIndicatorCore.defaultProps };
	#timer = null;
	setProps(props) {
		this.#props = defaults(props, BufferingIndicatorCore.defaultProps);
	}
	destroy() {
		this.#clearTimer();
	}
	update(media) {
		const buffering = media.waiting && !media.paused;
		if (buffering && !this.state.current.visible && !this.#timer) this.#timer = setTimeout(() => {
			this.#timer = null;
			this.state.patch({ visible: true });
		}, this.#props.delay);
		else if (!buffering) {
			this.#clearTimer();
			this.state.patch({ visible: false });
		}
	}
	#clearTimer() {
		if (this.#timer !== null) {
			clearTimeout(this.#timer);
			this.#timer = null;
		}
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/buffering-indicator/data.js
/** @internal */
const BufferingIndicatorDataAttrs = { 
/** Present when the buffering indicator is visible (after delay). */
visible: "data-visible" };
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/captions.js
const prefix$9 = "captions.";
const enableText = {
	key: `${prefix$9}enable`,
	text: "Enable captions"
};
const disableText = {
	key: `${prefix$9}disable`,
	text: "Disable captions"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/captions-button/core.js
/** @internal */
var CaptionsButtonCore = class CaptionsButtonCore {
	static defaultProps = {
		label: "",
		disabled: false,
		menuTrigger: false
	};
	state = createState({
		subtitlesShowing: false,
		availability: "unavailable",
		disabled: true,
		hidden: true,
		label: ""
	});
	#props = { ...CaptionsButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, CaptionsButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return state.subtitlesShowing ? disableText : enableText;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = media.textTrackList.some(isCaptionOrSubtitleTrack) ? "available" : "unavailable";
		this.state.patch({
			subtitlesShowing: media.subtitlesShowing,
			availability,
			disabled: this.#props.disabled || availability !== "available",
			hidden: availability === "unavailable"
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	toggle(media) {
		this.setMedia(media);
		if (this.getState().disabled) return;
		if (this.#props.menuTrigger && getCaptionTrackCount$1(media) > 1) return;
		media.toggleSubtitles();
	}
};
function getCaptionTrackCount$1(media) {
	return media.textTrackList.filter(isCaptionOrSubtitleTrack).length;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/captions-button/data.js
/** @internal */
const CaptionsButtonDataAttrs = {
	/** Present when captions are enabled. */
	subtitlesShowing: "data-active",
	/** Indicates captions availability (`available` or `unavailable`). */
	availability: "data-availability",
	/** Present when the button is non-interactive (mirrors `aria-disabled`). */
	disabled: "data-disabled",
	/** Present when the button is hidden because no caption tracks are present. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/captions-radio-group/core.js
function formatTrackLabel(track) {
	if (track.label) return track.label;
	if (track.language) return track.language;
	return track.kind === "captions" ? captionsText : subtitlesText;
}
/** @internal */
var CaptionsRadioGroupCore = class CaptionsRadioGroupCore {
	static defaultProps = {
		label: "",
		formatTrack: formatTrackLabel,
		disabled: false
	};
	state = createState({
		options: [{
			value: "off",
			label: offText,
			disabled: false
		}],
		value: "off",
		subtitlesShowing: false,
		disabled: true,
		hidden: true,
		availability: "unavailable",
		label: ""
	});
	#props = { ...CaptionsRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, CaptionsRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return captionsText;
	}
	getTrackLabel(track) {
		return this.#props.formatTrack(track);
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const captionTracks = getCaptionOrSubtitleTracks(media.textTrackList);
		const showingIndex = captionTracks.findIndex((track) => track.mode === "showing");
		const options = [{
			value: "off",
			label: offText,
			disabled: false
		}, ...captionTracks.map((track) => ({
			value: track.id,
			label: this.getTrackLabel(track),
			disabled: false
		}))];
		const availability = captionTracks.length > 0 ? "available" : "unavailable";
		this.state.patch({
			options,
			value: showingIndex === -1 ? "off" : captionTracks[showingIndex].id,
			subtitlesShowing: media.subtitlesShowing,
			disabled: this.#props.disabled || captionTracks.length === 0,
			hidden: availability === "unavailable",
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, value) {
		if (this.#props.disabled) return;
		const captionTracks = getCaptionOrSubtitleTracks(media.textTrackList);
		if (!captionTracks.length) return;
		if (value === "off") {
			media.selectSubtitlesTrack(null);
			return;
		}
		if (!captionTracks.some((track) => track.id === value)) return;
		media.selectSubtitlesTrack(value);
	}
	selectValue(media, value) {
		this.select(media, value);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/captions-radio-group/data.js
/** @internal */
const CaptionsRadioGroupDataAttrs = {
	/** Present when captions are enabled. */
	subtitlesShowing: "data-active",
	/** Present when track selection is disabled. */
	disabled: "data-disabled",
	/** Present when track selection is unavailable. */
	hidden: "data-hidden",
	/** Indicates captions availability (`available` or `unavailable`). */
	availability: "data-availability"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/cast-button/core.js
/** @internal */
var CastButtonCore = class CastButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		connection: "disconnected",
		availability: "unsupported",
		disabled: true,
		hidden: true,
		label: ""
	});
	#props = { ...CastButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, CastButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		if (state.connection === "connected") return stopText;
		if (state.connection === "connecting") return connectingText;
		return startText;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = !!globalThis.chrome ? media.remotePlaybackAvailability : "unsupported";
		this.state.patch({
			connection: media.remotePlaybackState,
			availability,
			disabled: this.#props.disabled || availability !== "available",
			hidden: availability === "unsupported"
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async toggle(media) {
		this.setMedia(media);
		if (this.getState().disabled) return;
		return media.promptRemotePlayback();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/cast-button/data.js
/** @internal */
const CastButtonDataAttrs = {
	/**
	* Current remote playback connection state.
	*
	* @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
	*/
	connection: "data-cast-state",
	/**
	* Whether remote playback can be requested on this platform.
	*
	* @see https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback
	*/
	availability: "data-availability",
	/** Present when the button is non-interactive (mirrors `aria-disabled`). */
	disabled: "data-disabled",
	/** Present when the button is hidden because the feature is unsupported. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/container/core.js
/** @internal */
var ContainerCore = class {
	#media = null;
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		return { controlsVisible: this.#media.controlsVisible };
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/container/data.js
/** @internal */
const ContainerDataAttrs = { 
/** Present when player controls are visible. */
controlsVisible: "data-controls-visible" };
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/controls/core.js
/** @internal */
var ControlsCore = class ControlsCore {
	static defaultProps = { visibility: "auto" };
	#props = { ...ControlsCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, ControlsCore.defaultProps);
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		if (!media) return this.#props.visibility === "always" ? {
			visible: true,
			userActive: true
		} : null;
		return {
			visible: this.#props.visibility === "always" || media.controlsVisible,
			userActive: media.userActive
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/controls/data.js
/** @internal */
const ControlsDataAttrs = {
	/** Present when controls are visible. */
	visible: "data-visible",
	/** Present when the user has recently interacted. */
	userActive: "data-user-active"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/error-dialog/core.js
/**
* Error-dialog core: an alert dialog whose open state is driven by media error state.
*
* @internal
*/
var ErrorDialogCore = class extends AlertDialogCore {
	setProps() {}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/error-dialog/data.js
/** @internal */
const ErrorDialogDataAttrs = { ...DialogDataAttrs };
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/common.js
const prefix$8 = "common.";
const emptyText = {
	key: `${prefix$8}empty`,
	text: ""
};
const okText = {
	key: `${prefix$8}ok`,
	text: "OK"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/errors.js
const prefix$7 = "errors.";
const abortedText = {
	key: `${prefix$7}aborted`,
	text: "You stopped media playback before it finished."
};
const networkText = {
	key: `${prefix$7}network`,
	text: "This media could not be loaded due to a network or server issue."
};
const decodeText = {
	key: `${prefix$7}decode`,
	text: "This media could not be played. It may be corrupted, or your browser may not support its format."
};
const sourceText = {
	key: `${prefix$7}source`,
	text: "This media could not be loaded. It may be unavailable, or your browser may not support its format."
};
const encryptedText = {
	key: `${prefix$7}encrypted`,
	text: "This media could not be played because it could not be decrypted."
};
const unplayableText = {
	key: `${prefix$7}unplayable`,
	text: "This media is unsupported by the player."
};
const titleText = {
	key: `${prefix$7}title`,
	text: "Something went wrong."
};
const unexpectedText = {
	key: `${prefix$7}unexpected`,
	text: "An unexpected error occurred."
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/error-dialog/i18n.js
/**
* SVTA 99 [Custom] 001 — an engine reporting that it has no pipeline for something the source requires. Not a
* `MediaError.MEDIA_ERR_*` value: engines that report SVTA codes surface them on `error.code` directly.
*
* The literal rather than an import. `@videojs/spf` defines this as `SVTA_UNSUPPORTED_PLAYBACK_FEATURE` and owns its
* meaning, but core doesn't depend on spf, and reaching it through `@videojs/media` would pull an engine entry point
* into a barrel that has no other reason to load one. Same trade `HlsVideoMediaStreamType` makes in the other direction
* — compatibility by value, stated in a comment, instead of a dependency edge neither package wants.
*/
const SVTA_UNSUPPORTED_PLAYBACK_FEATURE = 99001;
const MEDIA_ERROR_TRANSLATIONS = {
	[MediaError.MEDIA_ERR_ABORTED]: abortedText,
	[MediaError.MEDIA_ERR_NETWORK]: networkText,
	[MediaError.MEDIA_ERR_DECODE]: decodeText,
	[MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]: sourceText,
	[MediaError.MEDIA_ERR_ENCRYPTED]: encryptedText,
	[MediaError.MEDIA_ERR_CUSTOM]: emptyText,
	[SVTA_UNSUPPORTED_PLAYBACK_FEATURE]: unplayableText
};
const STANDARD_CODE_UA_MESSAGES = { [MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]: ["Failed to open media"] };
function isStandardMediaErrorCode(code) {
	return code >= MediaError.MEDIA_ERR_ABORTED && code <= MediaError.MEDIA_ERR_ENCRYPTED;
}
/** @internal */
function getErrorDialogTitleText() {
	return titleText;
}
/** @internal */
function getErrorDialogDismissText() {
	return okText;
}
/** @internal */
function getErrorDialogUnexpectedText() {
	return unexpectedText;
}
/**
* Resolves dialog body copy: default phrases for known {@link MediaError} defaults, literal text for custom messages,
* otherwise the generic fallback key.
*
* @internal
*/
function resolveErrorDialogDescription(error, cachedMessage) {
	if (error) {
		const text = MEDIA_ERROR_TRANSLATIONS[error.code];
		const message = error.message?.trim();
		if (message) {
			const defaultForCode = MediaError.defaultMessages[error.code];
			if (text && defaultForCode && message === defaultForCode) return text;
			const uaVariants = STANDARD_CODE_UA_MESSAGES[error.code];
			if (text && isStandardMediaErrorCode(error.code) && !error.context && uaVariants?.includes(message)) return text;
			return message;
		}
		if (text) return text;
	}
	const cached = cachedMessage?.trim();
	if (cached) return cached;
	return unexpectedText;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/fullscreen.js
const prefix$6 = "fullscreen.";
const enterText$1 = {
	key: `${prefix$6}enter`,
	text: "Enter fullscreen"
};
const exitText$1 = {
	key: `${prefix$6}exit`,
	text: "Exit fullscreen"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/fullscreen-button/core.js
/** @internal */
var FullscreenButtonCore = class FullscreenButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		fullscreen: false,
		availability: "unavailable",
		disabled: true,
		hidden: true,
		label: ""
	});
	#props = { ...FullscreenButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, FullscreenButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return state.fullscreen ? exitText$1 : enterText$1;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = media.fullscreenAvailability;
		this.state.patch({
			fullscreen: media.isFullscreen,
			availability,
			disabled: this.#props.disabled || availability !== "available",
			hidden: availability !== "available"
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async toggle(media) {
		this.setMedia(media);
		if (this.getState().disabled) return;
		return media.isFullscreen ? media.exitFullscreen() : media.requestFullscreen();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/fullscreen-button/data.js
/** @internal */
const FullscreenButtonDataAttrs = {
	/** Present when fullscreen mode is active. */
	fullscreen: "data-fullscreen",
	/** Indicates fullscreen availability (`available`, `unavailable`, `unsupported`). */
	availability: "data-availability",
	/** Present when the button is non-interactive (mirrors `aria-disabled`). */
	disabled: "data-disabled",
	/** Present when the button is hidden because fullscreen is not available. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/status.js
const prefix$5 = "status.";
const captionsOnText = {
	key: `${prefix$5}captionsOn`,
	text: "Captions on"
};
const captionsOffText = {
	key: `${prefix$5}captionsOff`,
	text: "Captions off"
};
const pausedText = {
	key: `${prefix$5}paused`,
	text: "Paused"
};
const playingText = {
	key: `${prefix$5}playing`,
	text: "Playing"
};
const fullscreenText = {
	key: `${prefix$5}fullscreen`,
	text: "Fullscreen"
};
const pipText = {
	key: `${prefix$5}pip`,
	text: "Picture in picture"
};
const exitPipText = {
	key: `${prefix$5}exitPip`,
	text: "Exit picture in picture"
};
const seekedToText = {
	key: `${prefix$5}seekedTo`,
	text: "Seeked to {time}"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/volume.js
const prefix$4 = "volume.";
const mutedValueText = {
	key: `${prefix$4}mutedValue`,
	text: "{percent}, muted"
};
const mutedText = {
	key: `${prefix$4}muted`,
	text: "Muted"
};
const labelText$1 = {
	key: `${prefix$4}label`,
	text: "Volume"
};
const valueText = {
	key: `${prefix$4}value`,
	text: "Volume {value}"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/indicator/labels.js
/** @internal */
const DEFAULT_INPUT_INDICATOR_LABELS = {
	muted: translateText(mutedText),
	volume: translateText(labelText$1),
	captionsOn: translateText(captionsOnText),
	captionsOff: translateText(captionsOffText),
	paused: translateText(pausedText),
	playing: translateText(playingText),
	fullscreen: translateText(fullscreenText),
	exitFullscreen: translateText(exitText$1),
	pictureInPicture: translateText(pipText),
	exitPictureInPicture: translateText(exitPipText)
};
/**
* Maps i18n indicator keys to {@link InputIndicatorLabels} for status / volume feedback.
*
* @internal
*/
function createInputIndicatorLabels(translator) {
	return {
		muted: translator(mutedText),
		volume: translator(labelText$1),
		captionsOn: translator(captionsOnText),
		captionsOff: translator(captionsOffText),
		paused: translator(pausedText),
		playing: translator(playingText),
		fullscreen: translator(fullscreenText),
		exitFullscreen: translator(exitText$1),
		pictureInPicture: translator(pipText),
		exitPictureInPicture: translator(exitPipText)
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/input-action.js
/** @internal */
function isInputActionIncluded(action, actions) {
	if (!action) return false;
	return !actions || actions.includes(action);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/menu/core.js
/**
* Combines direct and nested option-menu state for a parent trigger.
*
* @internal
*/
function resolveMenuOptionState(states) {
	const options = [...states];
	if (options.length === 0) return null;
	const visible = options.filter((state) => !state.hidden);
	const availability = visible.filter((state) => state.availability === "available").length > 0 ? "available" : options.every((state) => state.availability === "unsupported") ? "unsupported" : "unavailable";
	return {
		value: options.length === 1 ? options[0].value : "",
		disabled: visible.length === 0 || visible.every((state) => state.disabled),
		hidden: visible.length === 0,
		availability
	};
}
/**
* Base menu logic: ARIA attributes and open/close state computation.
*
* @internal
*/
var MenuCore = class MenuCore {
	static defaultProps = {
		side: "bottom",
		align: "start",
		open: false,
		defaultOpen: false,
		closeOnEscape: true,
		closeOnOutsideClick: true
	};
	#props = { ...MenuCore.defaultProps };
	#input = null;
	get props() {
		return this.#props;
	}
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, MenuCore.defaultProps);
	}
	setInput(input) {
		this.#input = input;
	}
	getState() {
		const input = this.#input;
		const isSubmenu = input.isSubmenu;
		return {
			open: input.active,
			status: input.status,
			side: isSubmenu ? void 0 : this.#props.side,
			align: isSubmenu ? void 0 : this.#props.align,
			isSubmenu,
			...getTransitionFlags(input.status)
		};
	}
	getTriggerAttrs(state, contentId) {
		return {
			...!state.isSubmenu && { tabIndex: 0 },
			"aria-haspopup": "menu",
			"aria-expanded": state.open && state.status !== "ending" ? "true" : "false",
			"aria-controls": contentId
		};
	}
	getContentAttrs() {
		return {
			role: "menu",
			tabIndex: -1
		};
	}
	getPopupAttrs() {
		return { popover: "manual" };
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/buttons.js
const prefix$3 = "buttons.";
const playText = {
	key: `${prefix$3}play`,
	text: "Play"
};
const pauseText = {
	key: `${prefix$3}pause`,
	text: "Pause"
};
const replayText = {
	key: `${prefix$3}replay`,
	text: "Replay"
};
const muteText = {
	key: `${prefix$3}mute`,
	text: "Mute"
};
const unmuteText = {
	key: `${prefix$3}unmute`,
	text: "Unmute"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/mute-button/core.js
/** @internal */
var MuteButtonCore = class MuteButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		muted: false,
		volumeLevel: "off",
		availability: "unavailable",
		hidden: true,
		label: ""
	});
	#props = { ...MuteButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, MuteButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return state.muted ? unmuteText : muteText;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = media.mutedAvailability;
		this.state.patch({
			muted: media.muted || media.volume === 0,
			volumeLevel: getVolumeLevel$1(media),
			availability,
			hidden: availability !== "available"
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	toggle(media) {
		if (this.#props.disabled || media.mutedAvailability !== "available") return;
		media.setMuted(!(media.muted || media.volume === 0));
	}
};
function getVolumeLevel$1(media) {
	if (media.muted || media.volume === 0) return "off";
	if (media.volume < .5) return "low";
	if (media.volume < .75) return "medium";
	return "high";
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/mute-button/data.js
/** @internal */
const MuteButtonDataAttrs = {
	/** Present when the media is muted. */
	muted: "data-muted",
	/** Indicates the volume level. */
	volumeLevel: "data-volume-level",
	/** Indicates mute availability (`available`, `unavailable`, `unsupported`). */
	availability: "data-availability",
	/** Present when the button is hidden because the media has no mute to toggle. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/pip.js
const prefix$2 = "pip.";
const enterText = {
	key: `${prefix$2}enter`,
	text: "Enter picture-in-picture"
};
const exitText = {
	key: `${prefix$2}exit`,
	text: "Exit picture-in-picture"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/pip-button/core.js
/** @internal */
var PiPButtonCore = class PiPButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		pip: false,
		availability: "unavailable",
		disabled: true,
		hidden: true,
		label: ""
	});
	#props = { ...PiPButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PiPButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return state.pip ? exitText : enterText;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = media.pictureInPictureAvailability;
		const actionable = media.isPictureInPicture || availability === "available";
		this.state.patch({
			pip: media.isPictureInPicture,
			availability,
			disabled: this.#props.disabled || !actionable,
			hidden: !actionable
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async toggle(media) {
		this.setMedia(media);
		if (this.getState().disabled) return;
		return media.isPictureInPicture ? media.exitPictureInPicture() : media.requestPictureInPicture();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/pip-button/data.js
/** @internal */
const PiPButtonDataAttrs = {
	/** Present when picture-in-picture mode is active. */
	pip: "data-pip",
	/** Indicates picture-in-picture availability (`available`, `unavailable`, `unsupported`). */
	availability: "data-availability",
	/** Present when the button is non-interactive (mirrors `aria-disabled`). */
	disabled: "data-disabled",
	/** Present when the button is hidden because picture-in-picture is not available. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/play-button/core.js
/** @internal */
var PlayButtonCore = class PlayButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = createState({
		paused: true,
		ended: false,
		started: false,
		label: ""
	});
	#props = { ...PlayButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PlayButtonCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		if (state.ended) return replayText;
		return state.paused ? playText : pauseText;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({
			paused: media.paused,
			ended: media.ended,
			started: media.started
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async toggle(media) {
		if (this.#props.disabled) return;
		if (media.paused || media.ended) return media.play();
		media.pause();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/play-button/data.js
/** @internal */
const PlayButtonDataAttrs = {
	/** Present when the media is paused. */
	paused: "data-paused",
	/** Present when the media has ended. */
	ended: "data-ended",
	/** Present when playback has started. */
	started: "data-started"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/playback.js
const rateText = {
	key: `playback.rate`,
	text: "Playback rate {rate}"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/playback-rate-button/core.js
/** @internal */
var PlaybackRateButtonCore = class PlaybackRateButtonCore {
	static defaultProps = {
		label: "",
		disabled: false,
		menuTrigger: false
	};
	state = createState({
		rate: 1,
		label: ""
	});
	#props = { ...PlaybackRateButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PlaybackRateButtonCore.defaultProps);
	}
	getLabel(state) {
		const custom = resolveLabel(this.#props.label, state);
		if (custom !== void 0) return custom;
		return rateText;
	}
	getLabelParams(state) {
		if (resolveLabel(this.#props.label, state) !== void 0) return void 0;
		return { rate: state.rate };
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({ rate: media.playbackRate });
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	cycle(media) {
		if (this.#props.disabled) return;
		if (this.#props.menuTrigger) return;
		const { playbackRates, playbackRate } = media;
		if (playbackRates.length === 0) return;
		const idx = playbackRates.indexOf(playbackRate);
		const next = idx === -1 ? playbackRates.find((r) => r > playbackRate) ?? playbackRates[0] : playbackRates[(idx + 1) % playbackRates.length];
		media.setPlaybackRate(next);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/playback-rate-button/data.js
/** @internal */
const PlaybackRateButtonDataAttrs = { 
/** Current playback rate. */
rate: "data-rate" };
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/playback-rate-radio-group/core.js
function formatPlaybackRate(rate) {
	return `${rate}×`;
}
/** @internal */
var PlaybackRateRadioGroupCore = class PlaybackRateRadioGroupCore {
	static defaultProps = {
		label: "",
		formatRate: formatPlaybackRate,
		disabled: false
	};
	state = createState({
		rate: 1,
		value: "1",
		options: [],
		disabled: true,
		hidden: true,
		availability: "unavailable",
		label: ""
	});
	#props = { ...PlaybackRateRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PlaybackRateRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const custom = resolveLabel(this.#props.label, state);
		if (custom !== void 0) return custom;
		return playbackRateText;
	}
	getLabelParams(_state) {}
	getRateLabel(rate) {
		return this.#props.formatRate(rate);
	}
	getRateValue(rate) {
		return String(rate);
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const availability = media.playbackRates.length > 0 ? "available" : "unavailable";
		this.state.patch({
			rate: media.playbackRate,
			value: this.getRateValue(media.playbackRate),
			options: media.playbackRates.map((rate) => ({
				rate,
				value: this.getRateValue(rate),
				label: this.getRateLabel(rate),
				disabled: false
			})),
			disabled: this.#props.disabled || media.playbackRates.length === 0,
			hidden: availability === "unavailable",
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, rate) {
		if (this.#props.disabled) return;
		if (!media.playbackRates.includes(rate)) return;
		media.setPlaybackRate(rate);
	}
	selectValue(media, value) {
		const rate = media.playbackRates.find((candidate) => this.getRateValue(candidate) === value);
		if (isUndefined(rate)) return;
		this.select(media, rate);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/playback-rate-radio-group/data.js
/** @internal */
const PlaybackRateRadioGroupDataAttrs = {
	/** Current playback rate. */
	rate: "data-rate",
	/** Present when playback rate selection is disabled. */
	disabled: "data-disabled",
	/** Present when playback rate selection is unavailable. */
	hidden: "data-hidden",
	/** Indicates playback rate availability (`available` or `unavailable`). */
	availability: "data-availability"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/popover/core.js
/** @internal */
var PopoverCore = class PopoverCore {
	static defaultProps = {
		side: "top",
		align: "center",
		modal: false,
		closeOnEscape: true,
		closeOnOutsideClick: true,
		open: false,
		defaultOpen: false,
		openOnHover: false,
		delay: 300,
		closeDelay: 0
	};
	#props = { ...PopoverCore.defaultProps };
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, PopoverCore.defaultProps);
	}
	#input = null;
	setInput(input) {
		this.#input = input;
	}
	getState() {
		const input = this.#input;
		return {
			open: input.active,
			status: input.status,
			side: this.#props.side,
			align: this.#props.align,
			modal: this.#props.modal,
			...getTransitionFlags(input.status)
		};
	}
	getTriggerAttrs(state, popupId) {
		return {
			"aria-expanded": state.open && state.status !== "ending" ? "true" : "false",
			"aria-haspopup": "dialog",
			"aria-controls": popupId
		};
	}
	getPopupAttrs(state) {
		return {
			popover: "manual",
			role: "dialog",
			"aria-modal": state.modal === true ? "true" : void 0
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/popover/data.js
/** @internal */
const PopoverDataAttrs = {
	/** Present when the popover is open. */
	open: "data-open",
	/** Indicates the rendered side of the popover after collision handling. */
	side: "data-side",
	/** Indicates how the popover is aligned relative to the specified side. */
	align: "data-align",
	...TransitionDataAttrs
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/popover/host.js
/**
* Hosted floating UI surfaces (popover, menu, tooltip, and future overlays) that support parent-driven lifecycle may
* set {@link POPUP_HOST_ATTR}. Ancestors can discover them with {@link POPUP_HOST_SELECTOR} and call methods such as
* `close('imperative-action')` when the element implements that contract.
*
* @internal
*/
const POPUP_HOST_ATTR = "data-popup";
/** @internal */
const POPUP_HOST_SELECTOR = `[${POPUP_HOST_ATTR}]`;
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/poster/core.js
/**
* Turns playback and metadata into poster presentation state.
*
* Owns no image of its own: a binding finds one, supplies how it is faring through {@link PosterCore.setImageLoadState},
* and paints the result.
*
* @internal
*/
var PosterCore = class {
	#media = null;
	#loadState = "none";
	/** Supply the latest player state. Call before reading {@link PosterCore.getState}. */
	setMedia(media) {
		this.#media = media;
	}
	/** Supply how the binding's image is faring. */
	setImageLoadState(loadState) {
		this.#loadState = loadState;
	}
	/** Derive the presentation state to paint. */
	getState() {
		const media = this.#media;
		return {
			visible: !media.started,
			src: media.poster,
			loading: this.#loadState === "loading",
			loaded: this.#loadState === "loaded",
			error: this.#loadState === "error"
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/poster/data.js
/** @internal */
const PosterDataAttrs = {
	/** Present until playback starts. */
	visible: "data-visible",
	/** Present while the poster image is fetching. */
	loading: "data-loading",
	/** Present once the poster image has decoded. */
	loaded: "data-loaded",
	/** Present when the poster image failed. */
	error: "data-error"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/quality-radio-group/core.js
/** @internal */
const QUALITY_AUTO_VALUE = "auto";
const STANDARD_RENDITION_SIZES = [
	4320,
	2160,
	1440,
	1080,
	720,
	480,
	360,
	240
];
function formatBitrate(bitrate) {
	return bitrate >= 1e6 ? `${Math.round(bitrate / 1e5) / 10} Mbps` : `${Math.round(bitrate / 1e3)} kbps`;
}
function getWidescreenSize(width) {
	const size = Math.round(width * 9 / 16);
	return STANDARD_RENDITION_SIZES.includes(size) ? size : void 0;
}
function getRenditionSize(rendition) {
	const { width, height } = rendition;
	if (width && height) {
		if (width > height && width * 9 > height * 16) return getWidescreenSize(width) ?? height;
		return Math.min(width, height);
	}
	if (height) return height;
	if (width) return getWidescreenSize(width) ?? width;
}
function hasSameSize(rendition, renditions) {
	const size = getRenditionSize(rendition);
	return Boolean(size && renditions.some((other) => other !== rendition && getRenditionSize(other) === size));
}
function formatRenditionLabel(rendition) {
	const size = getRenditionSize(rendition);
	if (size) return `${size}p`;
	if (rendition.bitrate) return formatBitrate(rendition.bitrate);
	return qualityText;
}
function formatRenditionBadge(rendition, renditions = []) {
	if (!getRenditionSize(rendition) || !rendition.bitrate || !hasSameSize(rendition, renditions)) return void 0;
	return formatBitrate(rendition.bitrate);
}
function formatRenditionTier(rendition) {
	const size = getRenditionSize(rendition);
	if (!size) return void 0;
	if (size >= 4320) return "8K";
	if (size >= 2160) return "4K";
	if (size >= 1080) return "HD";
}
/** @internal */
var QualityRadioGroupCore = class QualityRadioGroupCore {
	static defaultProps = {
		label: "",
		formatRendition: formatRenditionLabel,
		disabled: false
	};
	state = createState({
		options: [{
			value: QUALITY_AUTO_VALUE,
			label: autoText,
			disabled: false
		}],
		value: QUALITY_AUTO_VALUE,
		disabled: true,
		hidden: true,
		availability: "unavailable",
		label: ""
	});
	#props = { ...QualityRadioGroupCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, QualityRadioGroupCore.defaultProps);
	}
	getLabel(state) {
		const label = resolveLabel(this.#props.label, state);
		if (label) return label;
		return qualityText;
	}
	getRenditionLabel(rendition) {
		if (this.#props.formatRendition !== QualityRadioGroupCore.defaultProps.formatRendition) return this.#props.formatRendition(rendition);
		return formatRenditionLabel(rendition);
	}
	getRenditionBadge(rendition, renditions = []) {
		if (this.#props.formatRendition !== QualityRadioGroupCore.defaultProps.formatRendition) return void 0;
		return formatRenditionBadge(rendition, renditions);
	}
	getRenditionTier(rendition) {
		if (this.#props.formatRendition !== QualityRadioGroupCore.defaultProps.formatRendition) return void 0;
		return formatRenditionTier(rendition);
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const selectedIndex = media.videoRenditionList.findIndex((rendition) => rendition.selected);
		const availability = media.videoRenditionList.length > 1 ? "available" : "unavailable";
		const toOption = (rendition) => {
			const tier = this.getRenditionTier(rendition);
			const badge = this.getRenditionBadge(rendition, media.videoRenditionList);
			return {
				value: rendition.id,
				label: this.getRenditionLabel(rendition),
				disabled: false,
				...tier && { tier },
				...badge && { badge }
			};
		};
		const { activeVideoRendition } = media;
		const active = activeVideoRendition && media.videoRenditionList.some((rendition) => rendition.id === activeVideoRendition.id) ? toOption(activeVideoRendition) : void 0;
		const autoOption = {
			value: QUALITY_AUTO_VALUE,
			label: selectedIndex === -1 && active ? autoWithLabelText : autoText,
			disabled: false,
			...selectedIndex === -1 && active && { labelParams: { label: resolveText(active.label) } }
		};
		this.state.patch({
			options: [autoOption, ...media.videoRenditionList.map(toOption)],
			value: selectedIndex === -1 ? QUALITY_AUTO_VALUE : media.videoRenditionList[selectedIndex].id,
			disabled: this.#props.disabled || availability === "unavailable",
			hidden: availability === "unavailable",
			availability
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	select(media, value) {
		if (this.#props.disabled) return;
		if (value === "auto") {
			media.selectVideoRendition(value);
			return;
		}
		if (!media.videoRenditionList.some((rendition) => rendition.id === value)) return;
		media.selectVideoRendition(value);
	}
	selectValue(media, value) {
		this.select(media, value);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/quality-radio-group/data.js
/** @internal */
const QualityRadioGroupDataAttrs = {
	/** Current quality value. */
	value: "data-quality",
	/** Present when quality selection is disabled. */
	disabled: "data-disabled",
	/** Present when quality selection is unavailable. */
	hidden: "data-hidden",
	/** Indicates quality availability (`available` or `unavailable`). */
	availability: "data-availability"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/seek.js
const prefix$1 = "seek.";
const forwardText = {
	key: `${prefix$1}forward`,
	text: "Seek forward {seconds} seconds"
};
const backwardText = {
	key: `${prefix$1}backward`,
	text: "Seek backward {seconds} seconds"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/seek-button/core.js
/** @internal */
var SeekButtonCore = class SeekButtonCore {
	static defaultProps = {
		seconds: 30,
		label: "",
		disabled: false
	};
	state = createState({
		seeking: false,
		direction: "forward",
		label: ""
	});
	#props = { ...SeekButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, SeekButtonCore.defaultProps);
	}
	getLabel(state) {
		const custom = resolveLabel(this.#props.label, state);
		if (custom !== void 0) return custom;
		return state.direction === "backward" ? backwardText : forwardText;
	}
	getLabelParams(state) {
		if (resolveLabel(this.#props.label, state) !== void 0) return void 0;
		return { seconds: Math.abs(this.#props.seconds) };
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const direction = this.#props.seconds < 0 ? "backward" : "forward";
		this.state.patch({
			seeking: media.seeking,
			direction
		});
		this.state.patch({ label: resolveText(this.getLabel(this.state.current)) });
		return this.state.current;
	}
	async seek(media) {
		if (this.#props.disabled) return;
		await media.seek(media.currentTime + this.#props.seconds);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/seek-button/data.js
/** @internal */
const SeekButtonDataAttrs = {
	/** Present when a seek is in progress. */
	seeking: "data-seeking",
	/** Indicates the seek direction: `"forward"` or `"backward"`. */
	direction: "data-direction"
};
//#endregion
//#region node_modules/@videojs/utils/dist/time/format.js
const durationFormatters = /* @__PURE__ */ new Map();
function createDurationFormatter(style, hoursDisplay, locale) {
	if (style === "digital") {
		const number = new Intl.NumberFormat(locale, { useGrouping: false });
		const padded = new Intl.NumberFormat(locale, {
			minimumIntegerDigits: 2,
			useGrouping: false
		});
		return { format: (duration) => {
			const body = `${padded.format(duration.minutes ?? 0)}:${padded.format(duration.seconds ?? 0)}`;
			return hoursDisplay === "always" || duration.hours !== void 0 ? `${number.format(duration.hours ?? 0)}:${body}` : body;
		} };
	}
	const units = [
		["hours", new Intl.NumberFormat(locale, {
			style: "unit",
			unit: "hour",
			unitDisplay: style
		})],
		["minutes", new Intl.NumberFormat(locale, {
			style: "unit",
			unit: "minute",
			unitDisplay: style
		})],
		["seconds", new Intl.NumberFormat(locale, {
			style: "unit",
			unit: "second",
			unitDisplay: style
		})]
	];
	const list = typeof Intl.ListFormat === "function" ? new Intl.ListFormat(locale, {
		type: "unit",
		style
	}) : { format: (parts) => [...parts].join(style === "narrow" ? " " : ", ") };
	return { format: (duration) => list.format(units.filter(([unit]) => duration[unit] !== void 0).map(([unit, formatter]) => formatter.format(duration[unit] ?? 0))) };
}
function localeCacheKey$1(locale) {
	if (locale === void 0) return "";
	return Array.isArray(locale) ? locale.join(":") : locale;
}
function getDurationFormatter(locale, style = "long", hoursDisplay) {
	const key = `${localeCacheKey$1(locale)}:${style}:${hoursDisplay ?? ""}`;
	let formatter = durationFormatters.get(key);
	if (!formatter) {
		formatter = createDurationFormatter(style, hoursDisplay, locale);
		durationFormatters.set(key, formatter);
	}
	return formatter;
}
function isValidTime(value) {
	return isNumber(value) && Number.isFinite(value);
}
/**
* Format seconds to digital display string.
*
* @example
*   formatTime(90); // "1:30"
*   formatTime(3661); // "1:01:01"
*   formatTime(35, 3600); // "0:00:35" (guided by 1-hour duration)
*   formatTime(35, 600); // "00:35" (guided by 10-minute duration)
*
* @param seconds - Time in seconds (can be negative)
* @param guide - Guide time (typically duration) to determine display format
* @param options - Digital formatting options
* @returns Formatted string like "1:30" or "1:05:30"
* @internal
*/
function formatTime(seconds, guide, options) {
	if (!isValidTime(seconds)) return "0:00";
	const negative = seconds < 0;
	const totalSeconds = Math.floor(Math.abs(seconds));
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor(totalSeconds % 3600 / 60);
	const secondsPart = totalSeconds % 60;
	const guideSeconds = isValidTime(guide ?? 0) ? Math.abs(guide ?? 0) : 0;
	const guideHours = Math.floor(guideSeconds / 3600);
	const guideMinutes = Math.floor(guideSeconds / 60 % 60);
	const showHours = hours > 0 || guideHours > 0;
	const padMinutes = showHours || guideMinutes >= 10;
	const duration = showHours ? {
		hours,
		minutes,
		seconds: secondsPart
	} : {
		minutes,
		seconds: secondsPart
	};
	const { locale = "en" } = options ?? {};
	let body = getDurationFormatter(locale, "digital", showHours ? "always" : "auto").format(duration);
	if (!padMinutes) {
		const zero = new Intl.NumberFormat(locale, { useGrouping: false }).format(0);
		body = body.replace(new RegExp(`^${zero}(?=\\p{Nd}\\D)`, "u"), "");
	}
	return `${negative ? "-" : ""}${body}`;
}
/**
* Convert seconds to ISO 8601 duration for datetime attribute.
*
* @example
*   secondsToIsoDuration(90); // "PT1M30S"
*   secondsToIsoDuration(3661); // "PT1H1M1S"
*
* @param seconds - Time in seconds
* @returns ISO 8601 duration string like "PT1M30S"
* @internal
*/
function secondsToIsoDuration(seconds) {
	if (!isValidTime(seconds)) return "PT0S";
	const positiveSeconds = Math.abs(seconds);
	const h = Math.floor(positiveSeconds / 3600);
	const m = Math.floor(positiveSeconds / 60 % 60);
	const s = Math.floor(positiveSeconds % 60);
	let duration = "PT";
	if (h > 0) duration += `${h}H`;
	if (m > 0) duration += `${m}M`;
	if (s > 0 || duration === "PT") duration += `${s}S`;
	return duration;
}
/**
* Human-readable duration using `Intl.NumberFormat` and `Intl.ListFormat`.
*
* Negative `seconds` denote remaining time: the absolute value is formatted, then wrapped in a localized phrase via
* {@link TimeFormatOptions.formatRemaining}; otherwise `{duration} remaining`.
*
* @internal
*/
function formatTimeAsPhrase(seconds, options) {
	if (!isValidTime(seconds)) return "";
	const { locale = "en", style = "long", formatRemaining } = options ?? {};
	const negative = seconds < 0;
	const totalSeconds = Math.floor(Math.abs(seconds));
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor(totalSeconds % 3600 / 60);
	const secondsPart = totalSeconds % 60;
	const record = {};
	if (hours > 0) record.hours = hours;
	if (minutes > 0) record.minutes = minutes;
	if (secondsPart > 0 || hours === 0 && minutes === 0) record.seconds = secondsPart;
	const body = getDurationFormatter(locale, style).format(record);
	if (negative) {
		if (formatRemaining) return formatRemaining(body);
		if (isDefaultLocale(locale)) return `${body} remaining`;
		return body;
	}
	return body;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/seek-indicator/status.js
/** @internal */
function isSeekIndicatorAction(action) {
	return action === "seekStep" || action === "seekToPercent";
}
/** @internal */
function formatCurrentTime(snapshot, locale) {
	const options = locale === void 0 ? void 0 : { locale };
	return formatTime(snapshot.currentTime ?? 0, snapshot.duration, options);
}
/** @internal */
function getSeekIndicatorDisplayValue(state) {
	return state.value ?? state.currentTime;
}
/** @internal */
function getSeekToPercent(event) {
	if (event.value !== void 0) return clamp(event.value, 0, 100);
	if (!event.key || event.key < "0" || event.key > "9") return null;
	return Number(event.key) * 10;
}
/** @internal */
function getSeekDirection(event, snapshot) {
	if (event.action === "seekStep" && event.value !== void 0) {
		if (event.value > 0) return "forward";
		if (event.value < 0) return "backward";
	}
	if (event.action === "seekToPercent") {
		const percent = getSeekToPercent(event);
		if (percent === null || snapshot.duration === void 0 || snapshot.duration <= 0) return null;
		const targetTime = percent / 100 * snapshot.duration;
		const currentTime = snapshot.currentTime ?? 0;
		if (targetTime > currentTime) return "forward";
		if (targetTime < currentTime) return "backward";
	}
	return null;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/seek-indicator/core.js
const INITIAL_STATE$2 = {
	open: false,
	generation: 0,
	direction: null,
	count: 0,
	seekTotal: 0,
	value: null,
	currentTime: "0:00",
	transitionStarting: false,
	transitionEnding: false
};
/** @internal */
var SeekIndicatorCore = class {
	state = createState({ ...INITIAL_STATE$2 });
	#props = {};
	#originTime = null;
	#close = new IndicatorCloseController(() => {
		this.#originTime = null;
		this.state.patch({
			open: false,
			direction: null,
			count: 0,
			seekTotal: 0,
			value: null
		});
	}, () => getIndicatorCloseDelay(this.#props));
	setProps(props) {
		this.#props = props;
	}
	destroy() {
		this.#close.destroy();
	}
	close() {
		this.#close.close();
	}
	processEvent(event, snapshot) {
		if (!isSeekIndicatorAction(event.action)) return false;
		const current = this.state.current;
		const direction = getSeekDirection(event, snapshot);
		const rapidRepeat = current.open && event.action === "seekStep" && current.direction === direction;
		if (!rapidRepeat) this.#originTime = snapshot.currentTime ?? null;
		const value = this.#getEffectiveSeekValue(event, snapshot, rapidRepeat);
		const seekTotal = rapidRepeat ? current.seekTotal + Math.abs(value) : Math.abs(value);
		const label = event.action === "seekStep" && seekTotal > 0 ? new Intl.NumberFormat(this.#props.locale ?? "en", {
			style: "unit",
			unit: "second",
			unitDisplay: isDefaultLocale(this.#props.locale) ? "narrow" : "short",
			useGrouping: false
		}).format(seekTotal) : null;
		this.state.patch({
			open: true,
			generation: current.generation + 1,
			direction,
			count: rapidRepeat ? current.count + 1 : 1,
			seekTotal,
			value: label,
			currentTime: formatCurrentTime(snapshot, this.#props.locale)
		});
		this.#close.arm();
		return true;
	}
	#getEffectiveSeekValue(event, snapshot, rapidRepeat) {
		if (event.action !== "seekStep" || event.value === void 0) return 0;
		if (!rapidRepeat || this.#originTime === null) return event.value;
		const originTime = this.#originTime;
		const duration = snapshot.duration ?? Infinity;
		const currentTotal = this.state.current.seekTotal;
		const step = Math.abs(event.value);
		return (event.value < 0 ? Math.max(0, originTime - currentTotal) : Math.max(0, duration - originTime - currentTotal)) >= step ? event.value : 0;
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/seek-indicator/data.js
/** @internal */
const SeekIndicatorDataAttrs = {
	/** Present while the indicator is open. */
	open: "data-open",
	/** Direction of the seek as `"forward"` or `"backward"`. */
	direction: "data-direction",
	/** Present during the open transition. */
	transitionStarting: "data-starting-style",
	/** Present during the close transition. */
	transitionEnding: "data-ending-style"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/slider/core.js
/**
* Base slider logic: value mapping, ARIA attrs, and step calculations.
*
* @internal
*/
var SliderCore = class SliderCore {
	static defaultProps = {
		label: "",
		step: 1,
		largeStep: 10,
		orientation: "horizontal",
		disabled: false,
		thumbAlignment: "center",
		value: 0,
		min: 0,
		max: 100
	};
	static defaultInput = {
		pointerPercent: 0,
		dragPercent: 0,
		dragging: false,
		pointing: false,
		focused: false
	};
	#props = { ...SliderCore.defaultProps };
	#input = { ...SliderCore.defaultInput };
	get props() {
		return this.#props;
	}
	get input() {
		return this.#input;
	}
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, SliderCore.defaultProps);
	}
	setInput(input) {
		this.#input = input;
	}
	getSliderState(value) {
		const { orientation, disabled, thumbAlignment } = this.#props;
		const { pointerPercent, dragging, pointing, focused } = this.#input;
		return {
			value,
			fillPercent: this.percentFromValue(value),
			pointerPercent,
			dragging,
			pointing,
			interactive: dragging || pointing || focused,
			orientation,
			disabled,
			thumbAlignment
		};
	}
	getLabel(state) {
		return resolveLabel(this.#props.label, state) || "";
	}
	getAttrs(state) {
		return {
			role: "slider",
			tabIndex: state.disabled ? -1 : 0,
			autoComplete: "off",
			"aria-label": this.getLabel(state),
			"aria-valuemin": this.#props.min,
			"aria-valuemax": this.#props.max,
			"aria-valuenow": state.value,
			"aria-orientation": state.orientation,
			"aria-disabled": state.disabled ? "true" : void 0
		};
	}
	valueFromPercent(percent) {
		const { min, max, step } = this.#props;
		return roundToStep(clamp(min + percent / 100 * (max - min), min, max), step, min);
	}
	/** Convert percent to a clamped value without applying step rounding. */
	rawValueFromPercent(percent) {
		const { min, max } = this.#props;
		return clamp(min + percent / 100 * (max - min), min, max);
	}
	percentFromValue(value) {
		const { min, max } = this.#props;
		return toPercent(value, min, max);
	}
	/** Step as a percentage of the slider range. */
	getStepPercent() {
		const { step, min, max } = this.#props;
		const range = max - min;
		return range > 0 ? step / range * 100 : 0;
	}
	/** Large step as a percentage of the slider range. */
	getLargeStepPercent() {
		const { largeStep, min, max } = this.#props;
		const range = max - min;
		return range > 0 ? largeStep / range * 100 : 0;
	}
	adjustPercentForAlignment(rawPercent, thumbSize, trackSize) {
		if (this.#props.thumbAlignment === "center" || trackSize === 0) return rawPercent;
		const thumbHalf = thumbSize / trackSize * 100 / 2;
		const minPercent = thumbHalf;
		const maxPercent = 100 - thumbHalf;
		return minPercent + rawPercent / 100 * (maxPercent - minPercent);
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/slider/data.js
/** @internal */
const SliderDataAttrs = {
	/** Present when the user is actively dragging. */
	dragging: "data-dragging",
	/** Present when the pointer is over the slider. */
	pointing: "data-pointing",
	/** Present when dragging, pointing, or focus is active. */
	interactive: "data-interactive",
	/** Current axis of slider movement (`horizontal` or `vertical`). */
	orientation: "data-orientation",
	/** Present when the slider is non-interactive. */
	disabled: "data-disabled"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/slider/segments.js
/**
* Localizes ordered numeric ranges into slider geometry and interaction state.
*
* @internal
*/
var SliderSegmentsCore = class {
	getGeometry(input) {
		const { ranges, min, max, orientation } = input;
		const domain = max - min;
		if (!Number.isFinite(domain) || domain <= 0) return [];
		const valid = ranges.filter((segment) => {
			const size = (segment.end - segment.start) / domain;
			const offset = (segment.start - min) / domain;
			return Number.isFinite(size) && Number.isFinite(offset) && size > 0;
		});
		return valid.map((segment, index) => {
			const offset = (segment.start - min) / domain;
			const size = (segment.end - segment.start) / domain;
			const segmentSize = `${size * 100}%`;
			return {
				...segment,
				index,
				last: index === valid.length - 1,
				orientation,
				width: orientation === "horizontal" ? segmentSize : void 0,
				height: orientation === "vertical" ? segmentSize : void 0,
				startPercent: `${offset * 100}%`,
				endPercent: `${(offset + size) * 100}%`
			};
		});
	}
	getState(segment, slider, pointerValue) {
		const { last, ...geometry } = segment;
		const contains = (value) => value >= segment.start && (value < segment.end || last && value === segment.end);
		const active = contains(slider.value);
		const pointing = slider.pointing && contains(pointerValue);
		const dragging = slider.dragging && contains(pointerValue);
		const focused = slider.interactive && !slider.pointing && !slider.dragging;
		return {
			...geometry,
			fillPercent: toPercent(slider.value, segment.start, segment.end),
			active,
			pointing,
			dragging,
			highlighted: segment.highlight !== false && pointing,
			interactive: pointing || dragging || focused && active
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/status-announcer/labels.js
/**
* Default English labels used when no translated labels are provided.
*
* @internal
*/
const DEFAULT_STATUS_ANNOUNCER_LABELS = {
	...DEFAULT_INPUT_INDICATOR_LABELS,
	volumeWithValue: (value) => translateText(valueText, { value }),
	seekedTo: (time) => translateText(seekedToText, { time: formatTimeAsPhrase(time) }),
	playbackRate: (rate) => translateText(rateText, { rate })
};
/**
* Creates translated labels for status, volume, seek, and playback-rate announcements.
*
* @internal
*/
function createStatusAnnouncerLabels(translator, locale = "en") {
	return {
		...createInputIndicatorLabels(translator),
		volumeWithValue: (value) => translator(valueText, { value }),
		seekedTo: (time) => translator(seekedToText, { time: formatTimeAsPhrase(time, { locale }) }),
		playbackRate: (rate) => translator(rateText, { rate })
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-indicator/status.js
/** @internal */
function isVolumeIndicatorAction(action) {
	return action === "toggleMuted" || action === "volumeStep";
}
/** @internal */
function getVolumeLevel(volume) {
	if (volume <= 0) return "off";
	return volume <= .5 ? "low" : "high";
}
/** @internal */
function formatVolumeValue(volume) {
	return `${Math.round(clamp(volume, 0, 1) * 100)}%`;
}
/** @internal */
function getVolumeIndicatorDisplayValue(state) {
	return state.value ?? "";
}
/**
* Predicted mute/volume after a volume-indicator action.
*
* @internal
*/
function predictVolumeActionOutcome(event, snapshot) {
	const muted = snapshot.muted === true;
	const snapshotVolume = snapshot.volume ?? 0;
	if (event.action === "toggleMuted") return {
		snapshotVolume,
		nextMuted: !muted,
		nextVolume: snapshotVolume
	};
	if (event.action === "volumeStep") {
		const nextVolume = clamp(snapshotVolume + (event.value ?? 0), 0, 1);
		return {
			snapshotVolume,
			nextMuted: muted && nextVolume <= 0,
			nextVolume
		};
	}
	return {
		snapshotVolume,
		nextMuted: muted,
		nextVolume: snapshotVolume
	};
}
/**
* Labels/value/level for volume actions, shared with `StatusIndicatorCore`.
*
* @internal
*/
function deriveVolumeStatus(event, snapshot, labels = DEFAULT_INPUT_INDICATOR_LABELS, cachedPrediction) {
	const prediction = cachedPrediction ?? predictVolumeActionOutcome(event, snapshot);
	const level = prediction.nextMuted ? "off" : getVolumeLevel(prediction.nextVolume);
	const value = prediction.nextMuted ? "0%" : formatVolumeValue(prediction.nextVolume);
	return {
		status: level === "off" ? "volume-off" : level === "low" ? "volume-low" : "volume-high",
		label: level === "off" ? labels.muted : labels.volume,
		value,
		volumeLevel: level
	};
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/status-announcer/status.js
/**
* Derives the immediate announcement for changed playback, captions, presentation, and playback-rate state.
*
* @internal
*/
function deriveStatusAnnouncement(previous, snapshot, labels = DEFAULT_STATUS_ANNOUNCER_LABELS) {
	const announcements = [];
	if (hasChanged(previous.paused, snapshot.paused)) announcements.push(snapshot.paused ? labels.paused : labels.playing);
	if (hasChanged(previous.subtitlesShowing, snapshot.subtitlesShowing) && snapshot.subtitlesAvailable !== false) announcements.push(snapshot.subtitlesShowing ? labels.captionsOn : labels.captionsOff);
	if (hasChanged(previous.isFullscreen, snapshot.isFullscreen)) announcements.push(snapshot.isFullscreen ? labels.fullscreen : labels.exitFullscreen);
	if (hasChanged(previous.isPictureInPicture, snapshot.isPictureInPicture)) announcements.push(snapshot.isPictureInPicture ? labels.pictureInPicture : labels.exitPictureInPicture);
	if (hasChanged(previous.playbackRate, snapshot.playbackRate)) announcements.push(labels.playbackRate(`${snapshot.playbackRate}×`));
	return announcements.length > 0 ? announcements.join(". ") : null;
}
/**
* Derives the announcement for changed volume or mute state.
*
* @internal
*/
function deriveVolumeAnnouncement(previous, snapshot, labels = DEFAULT_STATUS_ANNOUNCER_LABELS) {
	if (!hasChanged(previous.volume, snapshot.volume) && !hasChanged(previous.muted, snapshot.muted)) return null;
	const volume = snapshot.volume ?? previous.volume;
	const muted = snapshot.muted ?? previous.muted;
	if (volume === void 0 && muted === void 0) return null;
	return muted || (volume ?? 0) <= 0 ? labels.muted : labels.volumeWithValue(formatVolumeValue(volume ?? 0));
}
function hasChanged(previous, next) {
	return previous !== void 0 && next !== void 0 && !Object.is(previous, next);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/status-announcer/core.js
const ANNOUNCEMENT_DEBOUNCE = 200;
/** @internal */
var StatusAnnouncerCore = class {
	state = createState({
		generation: 0,
		label: null
	});
	#props = {};
	#snapshot = null;
	#seekStartTime = null;
	#seekTargetTime = null;
	#timer = null;
	#close = new IndicatorCloseController(() => this.state.patch({ label: null }), () => getIndicatorCloseDelay(this.#props));
	setProps(props) {
		this.#props = props;
	}
	resetSnapshot() {
		this.#snapshot = null;
		this.#seekStartTime = null;
		this.#seekTargetTime = null;
		this.#clearTimer();
		this.#close.close();
	}
	destroy() {
		this.#clearTimer();
		this.#close.destroy();
	}
	processSnapshot(snapshot) {
		const previous = this.#snapshot;
		this.#snapshot = snapshot;
		if (!previous) return false;
		const labels = this.#getLabels();
		const statusLabel = deriveStatusAnnouncement(previous, snapshot, labels);
		const statusHandled = statusLabel !== null && this.#announce(statusLabel);
		const seekHandled = this.#processSeekSnapshot(previous, snapshot, labels, statusHandled);
		const volumeHandled = this.#processVolumeSnapshot(previous, snapshot, labels, statusHandled || seekHandled);
		return statusHandled || seekHandled || volumeHandled;
	}
	#getLabels() {
		return {
			...DEFAULT_STATUS_ANNOUNCER_LABELS,
			...this.#props.labels
		};
	}
	#announce(label) {
		this.#clearTimer();
		this.state.patch({
			generation: this.state.current.generation + 1,
			label
		});
		this.#close.arm();
		return true;
	}
	#processVolumeSnapshot(previous, snapshot, labels, alreadyHandled) {
		const label = deriveVolumeAnnouncement(previous, snapshot, labels);
		if (label === null || alreadyHandled || !this.#shouldAnnounce()) return false;
		this.#schedule(label);
		return true;
	}
	#processSeekSnapshot(previous, snapshot, labels, alreadyHandled) {
		if (previous.seeking !== true && snapshot.seeking === true) {
			this.#seekStartTime = previous.currentTime ?? null;
			this.#seekTargetTime = snapshot.currentTime ?? null;
			this.#clearTimer();
			return false;
		}
		if (snapshot.seeking === true) {
			this.#seekTargetTime = snapshot.currentTime ?? this.#seekTargetTime;
			return false;
		}
		if (previous.seeking !== true || snapshot.seeking !== false) return false;
		const targetTime = snapshot.currentTime ?? this.#seekTargetTime;
		const startTime = this.#seekStartTime;
		this.#seekStartTime = null;
		this.#seekTargetTime = null;
		if (targetTime === void 0 || targetTime === null || Object.is(targetTime, startTime)) return false;
		if (alreadyHandled || !this.#shouldAnnounce()) return false;
		this.#schedule(labels.seekedTo(targetTime));
		return true;
	}
	#schedule(label) {
		this.#clearTimer();
		this.#timer = setTimeout(() => {
			this.#timer = null;
			if (!this.#shouldAnnounce()) return;
			this.#announce(label);
		}, ANNOUNCEMENT_DEBOUNCE);
	}
	#shouldAnnounce() {
		return this.#props.shouldAnnounce?.() !== false;
	}
	#clearTimer() {
		if (this.#timer === null) return;
		clearTimeout(this.#timer);
		this.#timer = null;
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/status-indicator/status.js
/**
* Derives the predicted visual status from an input action and its pre-action media snapshot.
*
* @internal
*/
function deriveStatus(event, snapshot, labels = DEFAULT_INPUT_INDICATOR_LABELS) {
	switch (event.action) {
		case "togglePaused": {
			const paused = snapshot.paused !== void 0 ? !snapshot.paused : true;
			return {
				status: paused ? "pause" : "play",
				label: paused ? labels.paused : labels.playing,
				value: null
			};
		}
		case "toggleMuted":
		case "volumeStep": return deriveVolumeStatus(event, snapshot, labels);
		case "toggleSubtitles": {
			if (snapshot.subtitlesAvailable === false) return null;
			const showing = snapshot.subtitlesShowing !== void 0 ? !snapshot.subtitlesShowing : true;
			return {
				status: showing ? "captions-on" : "captions-off",
				label: showing ? labels.captionsOn : labels.captionsOff,
				value: null
			};
		}
		case "toggleFullscreen": {
			const fullscreen = snapshot.isFullscreen !== void 0 ? !snapshot.isFullscreen : true;
			return {
				status: fullscreen ? "fullscreen" : "exit-fullscreen",
				label: fullscreen ? labels.fullscreen : labels.exitFullscreen,
				value: null
			};
		}
		case "togglePictureInPicture": {
			const pip = snapshot.isPictureInPicture !== void 0 ? !snapshot.isPictureInPicture : true;
			return {
				status: pip ? "pip" : "exit-pip",
				label: pip ? labels.pictureInPicture : labels.exitPictureInPicture,
				value: null
			};
		}
		default: return null;
	}
}
/**
* Returns the volume percentage when present, then the translated status label.
*
* @internal
*/
function getStatusIndicatorDisplayValue(state) {
	return state.value ?? state.label ?? "";
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/status-indicator/core.js
const INITIAL_STATE$1 = {
	open: false,
	generation: 0,
	status: null,
	label: null,
	value: null,
	transitionStarting: false,
	transitionEnding: false
};
/** @internal */
var StatusIndicatorCore = class {
	state = createState({ ...INITIAL_STATE$1 });
	#props = {};
	#close = new IndicatorCloseController(() => this.state.patch({
		open: false,
		status: null,
		label: null,
		value: null
	}), () => getIndicatorCloseDelay(this.#props));
	setProps(props) {
		this.#props = props;
	}
	destroy() {
		this.#close.destroy();
	}
	close() {
		this.#close.close();
	}
	processEvent(event, snapshot) {
		if (!isInputActionIncluded(event.action, this.#props.actions)) return false;
		const details = deriveStatus(event, snapshot, {
			...DEFAULT_INPUT_INDICATOR_LABELS,
			...this.#props.labels
		}) ?? this.#props.deriveCustomStatus?.(event, snapshot);
		if (!details) return false;
		this.state.patch({
			open: true,
			generation: this.state.current.generation + 1,
			status: details.status,
			label: details.label,
			value: details.value
		});
		this.#close.arm();
		return true;
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/status-indicator/data.js
/** @internal */
const StatusIndicatorDataAttrs = {
	/** Present while the indicator is open. */
	open: "data-open",
	/** Predicted visual status for the handled input action. */
	status: "data-status",
	/** Present during the open transition. */
	transitionStarting: "data-starting-style",
	/** Present during the close transition. */
	transitionEnding: "data-ending-style"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/thumbnail/data.js
/** @internal */
const ThumbnailDataAttrs = {
	loading: "data-loading",
	error: "data-error",
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/thumbnail/media-fragment.js
/**
* Parse `url#xywh=x,y,w,h` into a URL and optional sprite coordinates.
*
* @internal
*/
function parseMediaFragment(text, baseURL) {
	const parts = text.trim().split("#");
	const rawURL = parts[0] ?? "";
	const hash = parts[1];
	const url = baseURL ? new URL(rawURL, baseURL).href : rawURL;
	if (!hash) return { url };
	const eqIndex = hash.indexOf("=");
	if (eqIndex === -1) return { url };
	const keys = hash.slice(0, eqIndex);
	const values = hash.slice(eqIndex + 1).split(",").map(Number);
	const data = {};
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = values[i];
		if (key && isNumber(value) && !Number.isNaN(value)) data[key] = value;
	}
	const result = { url };
	if (isNumber(data.w)) result.width = data.w;
	if (isNumber(data.h)) result.height = data.h;
	if (isNumber(data.x) && isNumber(data.y)) result.coords = {
		x: data.x,
		y: data.y
	};
	return result;
}
/**
* Convert an array of text cues (e.g. `VTTCue` from a `<track>` element) into {@link ThumbnailImage} entries by parsing
* the media-fragment in each cue's text.
*
* @internal
*/
function mapCuesToThumbnails(cues, baseURL) {
	const images = [];
	for (const cue of cues) {
		const fragment = parseMediaFragment(cue.text, baseURL);
		const image = {
			url: fragment.url,
			startTime: cue.startTime,
			endTime: cue.endTime
		};
		if (fragment.width) image.width = fragment.width;
		if (fragment.height) image.height = fragment.height;
		if (fragment.coords) image.coords = fragment.coords;
		images.push(image);
	}
	return images;
}
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/time.js
const prefix = "time.";
const currentText = {
	key: `${prefix}current`,
	text: "Current time"
};
const durationText = {
	key: `${prefix}duration`,
	text: "Duration"
};
const remainingText = {
	key: `${prefix}remaining`,
	text: "Remaining"
};
const elapsedSuffixText = {
	key: `${prefix}elapsedSuffix`,
	text: "{duration} elapsed"
};
const durationSuffixText = {
	key: `${prefix}durationSuffix`,
	text: "{duration} duration"
};
const remainingSuffixText = {
	key: `${prefix}remainingSuffix`,
	text: "{duration} remaining"
};
const showElapsedText = {
	key: `${prefix}showElapsed`,
	text: "Show elapsed time, {duration}."
};
const showDurationText = {
	key: `${prefix}showDuration`,
	text: "Show duration, {duration}."
};
const showRemainingText = {
	key: `${prefix}showRemaining`,
	text: "Show remaining time, {duration}."
};
const toggleElapsedText = {
	key: `${prefix}toggleElapsed`,
	text: "Toggle between elapsed and remaining time."
};
const toggleDurationText = {
	key: `${prefix}toggleDuration`,
	text: "Toggle between duration and remaining time."
};
const positionText = {
	key: `${prefix}position`,
	text: "{current} of {duration}"
};
const unknownText = {
	key: `${prefix}unknown`,
	text: "Media not loaded, unknown time."
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time/core.js
const TOGGLE_LABELS = {
	current: showElapsedText,
	duration: showDurationText,
	remaining: showRemainingText
};
const DEFAULT_LABELS = {
	current: currentText,
	duration: durationText,
	remaining: remainingText
};
const TOGGLE_DESCRIPTIONS = {
	current: toggleElapsedText,
	duration: toggleDurationText,
	remaining: toggleDurationText
};
/** @internal */
var TimeCore = class TimeCore {
	static defaultProps = {
		type: "current",
		negativeSign: "-",
		label: "",
		toggle: false
	};
	#props = { ...TimeCore.defaultProps };
	#media = null;
	#formatLocale;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, TimeCore.defaultProps);
	}
	setMedia(media) {
		this.#media = media;
	}
	/** @internal Platform adapters set the active i18n locale for digital time formatting. */
	setFormatLocale(locale) {
		this.#formatLocale = locale;
	}
	#getSeconds() {
		const media = this.#media;
		const duration = getTimeRangeEnd(media);
		const { type } = this.#props;
		switch (type) {
			case "current": return media.currentTime;
			case "duration": return duration;
			case "remaining": return media.currentTime - duration;
			default: return 0;
		}
	}
	#getText() {
		const media = this.#media;
		const seconds = this.#getSeconds();
		const duration = getTimeRangeEnd(media);
		const options = this.#formatLocale === void 0 ? void 0 : { locale: this.#formatLocale };
		return formatTime(Math.abs(seconds), duration, options);
	}
	#getPhrase() {
		const { type } = this.#props;
		const seconds = this.#getSeconds();
		if (type === "remaining") return formatTimeAsPhrase(seconds < 0 ? seconds : -Math.abs(seconds));
		return formatTimeAsPhrase(seconds);
	}
	#getDatetime() {
		const seconds = this.#getSeconds();
		return secondsToIsoDuration(Math.abs(seconds));
	}
	#getToggleType(type, currentType) {
		if (type === "current") return currentType === "remaining" ? "current" : "remaining";
		return currentType === "duration" ? "remaining" : "duration";
	}
	getLabel(state, type = this.#props.type) {
		const custom = resolveLabel(this.#props.label, state);
		if (custom !== void 0) return custom;
		if (state.disabled || state.unavailable) return unknownText;
		if (!this.#props.toggle) return DEFAULT_LABELS[this.#props.type];
		const toggleType = this.#getToggleType(type, state.type);
		return TOGGLE_LABELS[toggleType];
	}
	getLabelParams(state) {
		if (resolveLabel(this.#props.label, state) !== void 0 || state.disabled || !this.#props.toggle) return void 0;
		const options = this.#formatLocale === void 0 ? void 0 : { locale: this.#formatLocale };
		const duration = formatTimeAsPhrase(Math.abs(state.seconds), options);
		switch (state.type) {
			case "current": return { duration: `${duration} elapsed` };
			case "duration": return { duration: `${duration} duration` };
			case "remaining": return { duration: `${duration} remaining` };
		}
	}
	getDescription(state, type = this.#props.type) {
		return this.#props.toggle && !state.disabled ? TOGGLE_DESCRIPTIONS[type] : void 0;
	}
	getAttrs(state, type = this.#props.type) {
		return {
			"aria-label": this.getLabel(state, type),
			"aria-description": this.getDescription(state, type),
			"aria-disabled": this.#props.toggle && state.disabled ? "true" : void 0,
			role: this.#props.toggle ? "button" : void 0,
			tabIndex: this.#props.toggle ? state.disabled ? -1 : 0 : void 0
		};
	}
	getState() {
		const seconds = this.#getSeconds();
		const unavailable = !hasTimeRange(this.#media);
		return {
			type: this.#props.type,
			disabled: this.#props.toggle && unavailable,
			unavailable: !this.#props.toggle && unavailable,
			seconds,
			negative: this.#props.type === "remaining" && seconds < 0,
			text: this.#getText(),
			phrase: this.#getPhrase(),
			datetime: this.#getDatetime()
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time/data.js
/** @internal */
const TimeDataAttrs = {
	/** The type of time being displayed. */
	type: "data-type",
	/** Present when the time toggle is disabled. */
	disabled: "data-disabled",
	/** Present when the non-interactive time value is unavailable. */
	unavailable: "data-unavailable"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/slider.js
const seekText = {
	key: `slider.seek`,
	text: "Seek"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time-slider/core.js
/**
* Time-domain slider: maps media time/buffer state to slider state.
*
* @internal
*/
var TimeSliderCore = class TimeSliderCore extends SliderCore {
	static defaultProps = {
		...SliderCore.defaultProps,
		label: "",
		changeThrottle: 100,
		pauseOnDrag: false
	};
	#props = { ...TimeSliderCore.defaultProps };
	#media = null;
	#formatLocale;
	#wasPlayingBeforeDrag = false;
	constructor(props) {
		super();
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, TimeSliderCore.defaultProps);
		super.setProps({
			...props,
			min: 0
		});
	}
	setMedia(media) {
		this.#media = media;
	}
	/** @internal Platform adapters set the active i18n locale for `aria-valuetext` time formatting. */
	setFormatLocale(locale) {
		this.#formatLocale = locale;
	}
	getState() {
		const media = this.#media;
		const { currentTime, seeking, buffered } = media;
		const duration = getTimeRangeEnd(media);
		super.setProps({
			...this.#props,
			disabled: this.#props.disabled || !hasTimeRange(media),
			min: 0,
			max: duration
		});
		const base = super.getSliderState(currentTime);
		const bufferPercent = toPercent(buffered.length > 0 ? buffered[buffered.length - 1][1] : 0, 0, duration);
		return {
			...base,
			currentTime,
			duration,
			seeking,
			bufferPercent
		};
	}
	getLabel(state) {
		return super.getLabel(state) || seekText;
	}
	#announceValue(state) {
		return state.dragging ? this.rawValueFromPercent(state.pointerPercent) : state.value;
	}
	#formatTimeAsPhrase(seconds) {
		return this.#formatLocale === void 0 ? formatTimeAsPhrase(seconds) : formatTimeAsPhrase(seconds, { locale: this.#formatLocale });
	}
	getValueText(state) {
		if (state.duration <= 0) return unknownText;
		return Number.isFinite(state.duration) ? positionText : this.getValueTextParams(state).current;
	}
	getValueTextParams(state) {
		const current = this.#formatTimeAsPhrase(this.#announceValue(state));
		if (!Number.isFinite(state.duration)) return { current };
		return {
			current,
			duration: this.#formatTimeAsPhrase(state.duration)
		};
	}
	/**
	* Pause playback when a drag begins if `pauseOnDrag` is enabled, remembering whether media was playing so `endDrag`
	* can resume it.
	*/
	startDrag(playback) {
		this.#wasPlayingBeforeDrag = false;
		if (this.#props.pauseOnDrag && playback && !playback.paused) {
			this.#wasPlayingBeforeDrag = true;
			playback.pause();
		}
	}
	/**
	* Resume playback if `startDrag` paused it. Resume depends only on the intent captured at drag start, so it survives
	* `pauseOnDrag` being toggled mid-drag. Safe to call on teardown — a no-op unless a drag paused playback.
	*/
	endDrag(playback) {
		if (this.#wasPlayingBeforeDrag) playback?.play().catch(() => {});
		this.#wasPlayingBeforeDrag = false;
	}
	getAttrs(state) {
		const base = super.getAttrs(state);
		const announceValue = this.#announceValue(state);
		return {
			...base,
			"aria-valuenow": announceValue,
			"aria-valuetext": this.getValueText(state)
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time-slider/data.js
/** @internal */
const TimeSliderDataAttrs = {
	...SliderDataAttrs,
	/** Present when a seek operation is in progress. */
	seeking: "data-seeking"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time-slider/chapters/core.js
/**
* A stable key for a chapter cue: its id when it has one, then where it starts and what it says. Keyed by content
* rather than identity because the store hands out fresh cue data on every sync (a duration change re-clamps ends); two
* cues sharing all of that within one list are told apart by position.
*/
function getCueKey(cue, seen) {
	const id = cue.id;
	const base = `cue-${typeof id === "string" && id ? `${id}-` : ""}${cue.startTime}-${cue.text}`;
	const count = seen.get(base) ?? 0;
	seen.set(base, count + 1);
	return count ? `${base}-${count}` : base;
}
/**
* Produces an ordered, non-overlapping, contiguous partition of the slider domain.
*
* @internal
*/
function normalizeChapterCues(cues, min, max) {
	if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) return [];
	const seen = /* @__PURE__ */ new Map();
	const sorted = cues.map((cue, index) => ({
		cue,
		index,
		key: getCueKey(cue, seen)
	})).filter(({ cue }) => Number.isFinite(cue.startTime) && Number.isFinite(cue.endTime)).sort((a, b) => a.cue.startTime - b.cue.startTime || a.index - b.index);
	const chapters = [];
	let end = min;
	let previousKey = "start";
	for (const { cue, key } of sorted) {
		const start = Math.max(min, cue.startTime);
		const cueEnd = Math.min(max, cue.endTime);
		if (cueEnd <= start) continue;
		if (start > end) chapters.push({
			key: `gap-${previousKey}-${key}`,
			start: end,
			end: start,
			cue: null
		});
		const segmentStart = Math.max(start, end);
		if (cueEnd <= segmentStart) continue;
		chapters.push({
			key,
			start: segmentStart,
			end: cueEnd,
			cue
		});
		end = cueEnd;
		previousKey = key;
	}
	if (chapters.length === 0) return [{
		key: "gap-start-end",
		start: min,
		end: max,
		cue: null
	}];
	if (end < max) chapters.push({
		key: `gap-${previousKey}-end`,
		start: end,
		end: max,
		cue: null
	});
	return chapters;
}
/**
* Prepares chapter ranges and state for platform renderers.
*
* @internal
*/
var TimeSliderChaptersCore = class {
	#cues = null;
	#min = 0;
	#max = 0;
	#result = null;
	getRanges(cues, min, max) {
		if (this.#result && (this.#cues === cues || this.#cues?.length === 0 && cues.length === 0) && this.#min === min && this.#max === max) return this.#result;
		const hasRange = max > min;
		const rangeMax = hasRange ? max : min + 1;
		const chapters = normalizeChapterCues(hasRange ? cues : [], min, rangeMax);
		const ranges = chapters.map(({ key, start, end, cue }) => ({
			key,
			start,
			end,
			highlight: cue !== null
		}));
		this.#cues = cues;
		this.#min = min;
		this.#max = max;
		this.#result = {
			chapters,
			ranges,
			max: rangeMax
		};
		return this.#result;
	}
	findChapter(chapters, value) {
		return findRangeAt(chapters, value, (chapter) => chapter.start, (chapter) => chapter.end);
	}
	getState(segment, chapters, bufferedEnd) {
		return {
			...segment,
			cue: chapters[segment.index]?.cue ?? null,
			bufferPercent: toPercent(bufferedEnd, segment.start, segment.end)
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time-slider/chapters/data.js
/** @internal */
const TimeSliderChapterDataAttrs = {
	/** Present when playback is within the chapter. */
	active: "data-active",
	/** Present when pointer interaction highlights the chapter. */
	highlighted: "data-highlighted"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/time-slider/chapters/vars.js
/**
* CSS geometry and progress local to each chapter.
*
* @internal
*/
const TimeSliderChapterCSSVars = {
	start: "--media-slider-chapter-start",
	end: "--media-slider-chapter-end",
	width: "--media-slider-chapter-width",
	fill: "--media-slider-chapter-fill",
	buffer: "--media-slider-chapter-buffer"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/title/core.js
/** @internal */
var TitleCore = class {
	getState(media, controls) {
		const { title } = media;
		return {
			title,
			hidden: title.length === 0,
			visible: controls?.controlsVisible ?? false
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/title/data.js
/** @internal */
const TitleDataAttrs = {
	/** Present when the element is hidden because no title is available. */
	hidden: "data-hidden",
	/** Present while the player controls are visible. */
	visible: "data-visible"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/tooltip/core.js
/** @internal */
var TooltipCore = class TooltipCore {
	static defaultProps = {
		side: "top",
		align: "center",
		open: false,
		defaultOpen: false,
		delay: 600,
		closeDelay: 0,
		disableHoverablePopup: true,
		disabled: false,
		sticky: false
	};
	#props = { ...TooltipCore.defaultProps };
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, TooltipCore.defaultProps);
	}
	#input = null;
	setInput(input) {
		this.#input = input;
	}
	getState() {
		const input = this.#input;
		return {
			open: input.active,
			status: input.status,
			side: this.#props.side,
			align: this.#props.align,
			...getTransitionFlags(input.status)
		};
	}
	getPopupAttrs(_state) {
		return {
			popover: "manual",
			role: "presentation"
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/tooltip/data.js
/** @internal */
const TooltipDataAttrs = {
	/** Present when the tooltip is open. */
	open: "data-open",
	/** Indicates the rendered side of the tooltip after collision handling. */
	side: "data-side",
	/** Indicates how the tooltip is aligned relative to the specified side. */
	align: "data-align",
	...TransitionDataAttrs
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/tooltip/group.js
/** @internal */
var TooltipGroupCore = class TooltipGroupCore {
	static defaultProps = {
		delay: 600,
		closeDelay: 0,
		timeout: 400
	};
	#props = { ...TooltipGroupCore.defaultProps };
	#lastCloseTime = 0;
	#isOpen = false;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = defaults(props, TooltipGroupCore.defaultProps);
	}
	get delay() {
		return this.#props.delay;
	}
	get closeDelay() {
		return this.#props.closeDelay;
	}
	shouldSkipDelay() {
		if (this.#isOpen) return true;
		return Date.now() - this.#lastCloseTime < this.#props.timeout;
	}
	notifyOpen() {
		this.#isOpen = true;
	}
	notifyClose() {
		this.#isOpen = false;
		this.#lastCloseTime = Date.now();
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/tooltip/vars.js
/** @internal */
const TooltipCSSVars = {
	/** Distance between the popup and the trigger along the side axis. */
	sideOffset: "--media-tooltip-side-offset",
	/** Distance between the popup and the trigger along the alignment axis. */
	alignOffset: "--media-tooltip-align-offset",
	/** Minimum distance between the popup and the positioning boundary. */
	boundaryOffset: "--media-tooltip-boundary-offset",
	/** The anchor element's width. */
	anchorWidth: "--media-tooltip-anchor-width",
	/** The anchor element's height. */
	anchorHeight: "--media-tooltip-anchor-height",
	/** Available width between the trigger and the boundary edge. */
	availableWidth: "--media-tooltip-available-width",
	/** Available height between the trigger and the boundary edge. */
	availableHeight: "--media-tooltip-available-height"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-indicator/core.js
const BOUNDARY_CLEAR_DELAY = 300;
const INITIAL_STATE = {
	open: false,
	generation: 0,
	level: null,
	value: null,
	fill: null,
	min: false,
	max: false,
	transitionStarting: false,
	transitionEnding: false
};
/** @internal */
var VolumeIndicatorCore = class {
	state = createState({ ...INITIAL_STATE });
	#props = {};
	#boundaryTimer = null;
	#close = new IndicatorCloseController(() => this.state.patch({
		open: false,
		level: null,
		value: null,
		fill: null,
		min: false,
		max: false
	}), () => getIndicatorCloseDelay(this.#props));
	setProps(props) {
		this.#props = props;
	}
	destroy() {
		this.#close.destroy();
		this.#clearBoundaryTimers();
	}
	close() {
		this.#clearBoundaryTimers();
		this.#close.close();
	}
	processEvent(event, snapshot) {
		if (!isVolumeIndicatorAction(event.action)) return false;
		const current = this.state.current;
		const prediction = predictVolumeActionOutcome(event, snapshot);
		const details = deriveVolumeStatus(event, snapshot, {
			...DEFAULT_INPUT_INDICATOR_LABELS,
			...this.#props.labels
		}, prediction);
		const boundary = getVolumeBoundary(event, prediction.snapshotVolume, prediction.nextVolume);
		const showBoundary = boundary !== null && !event.repeat;
		if (!boundary) this.#clearBoundaryTimers();
		this.state.patch({
			open: true,
			generation: current.generation + 1,
			level: details.volumeLevel,
			value: details.value,
			fill: details.value,
			min: boundary && event.repeat ? current.min : showBoundary && boundary === "min",
			max: boundary && event.repeat ? current.max : showBoundary && boundary === "max"
		});
		if (showBoundary) this.#scheduleBoundaryClear();
		this.#close.arm();
		return true;
	}
	#scheduleBoundaryClear() {
		this.#clearBoundaryTimer();
		this.#boundaryTimer = setTimeout(() => {
			this.#boundaryTimer = null;
			this.state.patch({
				min: false,
				max: false
			});
		}, BOUNDARY_CLEAR_DELAY);
	}
	#clearBoundaryTimer() {
		if (this.#boundaryTimer === null) return;
		clearTimeout(this.#boundaryTimer);
		this.#boundaryTimer = null;
	}
	#clearBoundaryTimers() {
		this.#clearBoundaryTimer();
	}
};
function getVolumeBoundary(event, currentVolume, nextVolume) {
	if (event.action !== "volumeStep" || event.value === void 0 || event.value === 0) return null;
	if (nextVolume !== currentVolume) return null;
	return event.value < 0 ? "min" : "max";
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-indicator/data.js
/** @internal */
const VolumeIndicatorDataAttrs = {
	/** Present while the indicator is open. */
	open: "data-open",
	/** Predicted volume level as `"off"`, `"low"`, or `"high"`. */
	level: "data-level",
	/** Present briefly when a downward step cannot lower the volume further. */
	min: "data-min",
	/** Present briefly when an upward step cannot raise the volume further. */
	max: "data-max",
	/** Present during the open transition. */
	transitionStarting: "data-starting-style",
	/** Present during the close transition. */
	transitionEnding: "data-ending-style"
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-indicator/vars.js
/** @internal */
const VolumeIndicatorCSSVars = { 
/** Current predicted volume percentage, set on the Fill part. */
fill: "--media-volume-fill" };
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-popover/core.js
/**
* A volume-aware popover that preserves its mute trigger when volume level controls are unavailable.
*
* @internal
*/
var VolumePopoverCore = class extends PopoverCore {
	static defaultProps = PopoverCore.defaultProps;
	#media = null;
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const availability = this.#media.volumeAvailability;
		return {
			...super.getState(),
			availability,
			hidden: availability !== "available"
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-popover/data.js
/** @internal */
const VolumePopoverDataAttrs = {
	/** Present when the popover is open. */
	open: "data-open",
	/** Indicates the rendered side after collision handling. */
	side: "data-side",
	/** Indicates how the popup is aligned relative to its side. */
	align: "data-align",
	/** Present during the open transition. */
	transitionStarting: "data-starting-style",
	/** Present during the close transition. */
	transitionEnding: "data-ending-style",
	/** Indicates volume control availability (`available`, `unavailable`, or `unsupported`). */
	availability: "data-availability",
	/** Present when volume level controls are unavailable. */
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/utils/dist/percent/percent.js
const formatters = /* @__PURE__ */ new Map();
function localeCacheKey(locale) {
	if (locale === void 0) return "";
	return Array.isArray(locale) ? locale.join(":") : locale;
}
function getFormatter(locale) {
	const key = localeCacheKey(locale);
	let formatter = formatters.get(key);
	if (!formatter) try {
		formatter = new Intl.NumberFormat(locale, {
			style: "percent",
			maximumFractionDigits: 0
		});
		formatters.set(key, formatter);
	} catch {
		return;
	}
	return formatter;
}
function formatFallback(fraction) {
	return `${Math.round(Math.min(1, Math.max(0, fraction)) * 100)}%`;
}
/**
* Format a fraction (0-1) with {@link Intl.NumberFormat} `style: "percent"`.
*
* @internal
*/
function formatPercent(fraction, locale) {
	const value = !isNumber(fraction) || !Number.isFinite(fraction) ? 0 : Math.min(1, Math.max(0, fraction));
	try {
		const formatter = getFormatter(locale) ?? getFormatter(void 0);
		if (formatter) return formatter.format(value);
	} catch {}
	return formatFallback(value);
}
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-slider/core.js
/**
* Volume-domain slider: maps media volume/mute state to slider state.
*
* @internal
*/
var VolumeSliderCore = class VolumeSliderCore extends SliderCore {
	static defaultProps = {
		...SliderCore.defaultProps,
		label: "",
		step: 5,
		wheelStep: 5
	};
	#wheelStep = VolumeSliderCore.defaultProps.wheelStep;
	#media = null;
	#formatLocale;
	constructor(props) {
		super();
		if (props) this.setProps(props);
	}
	setProps(props) {
		const resolvedProps = defaults(props, VolumeSliderCore.defaultProps);
		this.#wheelStep = resolvedProps.wheelStep;
		super.setProps(resolvedProps);
	}
	setMedia(media) {
		this.#media = media;
	}
	/** @internal Platform adapters set the active i18n locale for `aria-valuetext` percent formatting. */
	setFormatLocale(locale) {
		this.#formatLocale = locale;
	}
	getState() {
		const media = this.#media;
		const { volume, muted } = media;
		const effectivelyMuted = muted || volume === 0;
		const { dragging, dragPercent } = this.input;
		const volumePercent = volume * 100;
		const value = dragging ? this.valueFromPercent(dragPercent) : volumePercent;
		const base = super.getSliderState(value);
		const availability = media.volumeAvailability;
		return {
			...base,
			disabled: base.disabled || availability !== "available",
			fillPercent: effectivelyMuted ? 0 : base.fillPercent,
			volume,
			muted: effectivelyMuted,
			availability,
			hidden: availability !== "available"
		};
	}
	/** Wheel step as a percentage of the slider range. */
	getWheelStepPercent() {
		const { min, max } = this.props;
		const range = max - min;
		return range > 0 ? this.#wheelStep / range * 100 : 0;
	}
	getLabel(state) {
		return super.getLabel(state) || labelText$1;
	}
	getValueText(state) {
		return state.muted ? mutedValueText : this.getValueTextParams(state).percent;
	}
	getValueTextParams(state) {
		return { percent: formatPercent(state.value / 100, this.#formatLocale) };
	}
	getAttrs(state) {
		return {
			...super.getAttrs(state),
			"aria-valuetext": this.getValueText(state)
		};
	}
};
//#endregion
//#region node_modules/@videojs/core/dist/default/core/ui/volume-slider/data.js
/** @internal */
const VolumeSliderDataAttrs = {
	...SliderDataAttrs,
	availability: "data-availability",
	hidden: "data-hidden"
};
//#endregion
//#region node_modules/@videojs/html/dist/default/presets/skin.js
const STYLES_ID = "__media-styles";
const shadowSheet = createShadowStyle(shadow_default);
/**
* Base element for skin definitions. Attaches a shadow root, clones `static template` into it, and applies shared +
* per-skin styles via `adoptedStyleSheets` (or `<style>` fallback).
*/
var SkinElement = class extends ReactiveElement {
	static {
		this.shadowRootOptions = { mode: "open" };
	}
	constructor() {
		super();
		ensureGlobalStyle(STYLES_ID, global_default);
		if (!this.shadowRoot) {
			const ctor = this.constructor;
			this.attachShadow(ctor.shadowRootOptions);
			if (ctor.template) renderTemplate(this.shadowRoot, ctor.template);
			this.shadowRoot.append(createHelpLink(this.ownerDocument));
			const sheets = [shadowSheet];
			if (ctor.styles) sheets.push(ctor.styles);
			applyShadowStyles(this.shadowRoot, sheets);
		}
	}
};
/** Every packaged skin links to the page that explains what the player is. See `SKIN_HELP_URL`. */
function createHelpLink(doc) {
	const link = doc.createElement("a");
	link.rel = "help";
	link.href = SKIN_HELP_URL;
	link.hidden = true;
	link.textContent = SKIN_HELP_TEXT;
	return link;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/internal/skins/neutral-video/template.js
/** Static template rendered from the finalized VJSC module graph. */
const template$1 = createTemplate(`<media-container class="media-skin media-container video-skin" data-theme="neutral" data-preset="video">
<slot>
</slot>
<media-poster class="media-poster">
<slot name="poster">
<img alt="" decoding="async" class="media-poster-image">
</slot>
</media-poster>
<media-buffering-indicator class="media-buffering-indicator">
<media-icon family="neutral" name="spinner" class="media-buffering-indicator-spinner-icon">
</media-icon>
</media-buffering-indicator>
<media-error-dialog class="media-dialog-root">
<media-dialog-backdrop class="media-dialog-backdrop">
</media-dialog-backdrop>
<media-dialog-popup class="media-dialog-popup">
<div class="media-dialog-content">
<media-dialog-title class="media-dialog-title">
</media-dialog-title>
<media-dialog-description class="media-dialog-description">
</media-dialog-description>
</div>
<div class="media-dialog-actions">
<media-dialog-close class="media-button media-dialog-close">
</media-dialog-close>
</div>
</media-dialog-popup>
</media-error-dialog>
<media-title class="media-title">
</media-title>
<media-controls>
<media-controls-backdrop class="video-controls-backdrop">
</media-controls-backdrop>
<media-controls-content class="video-controls video-controls-content video-controls-wrap">
<media-tooltip-group>
<media-controls-group class="video-controls-start">
<media-play-button class="media-button media-play-button" id="vjs-TIskxJHd-0-trigger">
<media-icon family="neutral" name="restart" class="media-button-icon media-play-button-restart-icon">
</media-icon>
<media-icon family="neutral" name="play" class="media-button-icon media-play-button-play-icon">
</media-icon>
<media-icon family="neutral" name="pause" class="media-button-icon media-play-button-pause-icon">
</media-icon>
</media-play-button>
<media-tooltip trigger="vjs-TIskxJHd-0-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-mute-button commandfor="vjs-wZFXwba8-0-popup" class="media-button media-mute-button" id="vjs-TIskxJHd-0-2-trigger">
<media-icon family="neutral" name="volume-off" class="media-button-icon media-mute-button-off-icon">
</media-icon>
<media-icon family="neutral" name="volume-low" class="media-button-icon media-mute-button-low-icon">
</media-icon>
<media-icon family="neutral" name="volume-high" class="media-button-icon media-mute-button-high-icon">
</media-icon>
</media-mute-button>
<media-tooltip trigger="vjs-TIskxJHd-0-2-trigger" delay="0" sticky side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-volume-popover open-on-hover delay="200" close-delay="100" side="right" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-volume-popover" id="vjs-wZFXwba8-0-popup">
<media-volume-slider class="media-slider media-volume-slider" thumb-alignment="edge" orientation="horizontal">
<media-slider-track class="media-slider-track">
<media-slider-fill class="media-slider-fill">
</media-slider-fill>
</media-slider-track>
<media-slider-thumb class="media-slider-thumb media-volume-slider-thumb">
</media-slider-thumb>
</media-volume-slider>
</media-volume-popover>
</media-controls-group>
<media-controls-group class="video-time-slider-group">
<media-time-group class="media-time-group">
<media-time class="media-time-toggle media-time-current-value" type="current" toggle>
</media-time>
<media-time-separator class="media-time-separator">
</media-time-separator>
<media-time class="media-time-duration-value" type="duration">
</media-time>
</media-time-group>
<media-time-slider class="media-slider media-time-slider">
<media-time-slider-chapters class="media-time-slider-chapters">
<template>
<div class="media-time-slider-chapter">
<media-slider-track class="media-slider-track media-time-slider-chapter-track">
<media-slider-buffer class="media-slider-buffer media-time-slider-chapter-layer">
</media-slider-buffer>
<media-slider-fill class="media-slider-fill media-time-slider-chapter-layer">
</media-slider-fill>
</media-slider-track>
</div>
</template>
</media-time-slider-chapters>
<media-slider-thumb class="media-slider-thumb media-time-slider-thumb">
</media-slider-thumb>
<media-slider-preview class="media-slider-preview" overflow="clamp">
<media-slider-thumbnail class="media-slider-preview-content media-popup-surface media-slider-thumbnail">
<slot name="thumbnail">
<img alt="" aria-hidden="true" decoding="async" class="media-slider-thumbnail-image">
</slot>
<media-icon family="neutral" name="spinner" class="media-slider-thumbnail-spinner-icon">
</media-icon>
</media-slider-thumbnail>
<div class="media-slider-preview-content media-time-slider-preview-content">
<media-time-slider-chapter-title class="media-time-slider-chapter-title">
</media-time-slider-chapter-title>
<media-slider-value class="media-time-slider-value" type="pointer">
</media-slider-value>
</div>
</media-slider-preview>
</media-time-slider>
</media-controls-group>
<media-controls-group class="video-controls-end">
<media-captions-button class="media-button media-captions-button video-controls-captions-button" id="vjs-TIskxJHd-0-3-trigger">
<media-icon family="neutral" name="captions-off" class="media-button-icon media-captions-button-off-icon">
</media-icon>
<media-icon family="neutral" name="captions-on" class="media-button-icon media-captions-button-on-icon">
</media-icon>
</media-captions-button>
<media-tooltip trigger="vjs-TIskxJHd-0-3-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<button commandfor="vjs-WpQqFM2J-0-popup" class="media-button media-settings-menu-trigger" id="vjs-TIskxJHd-0-4-trigger">
<media-icon family="neutral" name="gear" class="media-button-icon-base media-settings-menu-trigger-icon">
</media-icon>
<media-text class="media-settings-menu-trigger-label" token="menu.settings">Settings</media-text>
</button>
<media-tooltip trigger="vjs-TIskxJHd-0-4-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-text token="menu.settings">Settings</media-text>
</media-tooltip>
<media-menu side="top" align="center" class="media-popup media-popup-surface media-menu-popup media-menu-resizable-popup" id="vjs-WpQqFM2J-0-popup">
<media-menu-content class="media-menu-content">
<media-menu-item commandfor="vjs-1Oi3whcx-0-content" class="media-menu-trigger-item">
<media-icon family="neutral" name="switches" class="media-menu-trigger-item-icon">
</media-icon>
<media-text token="menu.quality">Quality</media-text>
<span class="media-menu-hint">
<span data-part="value" class="media-menu-hint-label">
</span>
<media-icon family="neutral" name="chevron" class="media-menu-forward-chevron">
</media-icon>
</span>
</media-menu-item>
<media-menu-content class="media-menu-content" id="vjs-1Oi3whcx-0-content">
<media-menu-item class="media-menu-back-item">
<media-icon family="neutral" name="chevron" class="media-menu-back-chevron">
</media-icon>
<media-text token="menu.quality">Quality</media-text>
</media-menu-item>
<media-menu-separator class="media-menu-separator">
</media-menu-separator>
<media-quality-radio-group class="media-menu-radio-group">
<template>
<media-menu-radio-item class="media-menu-radio-item">
<span>
<span data-part="label">
</span>
<sup data-part="tier" class="media-menu-tier">
</sup>
</span>
<span data-part="badge" class="media-menu-badge">
</span>
<media-menu-item-indicator force-mount class="media-menu-item-indicator">
<media-icon family="neutral" name="check" class="media-menu-radio-item-icon">
</media-icon>
</media-menu-item-indicator>
</media-menu-radio-item>
</template>
</media-quality-radio-group>
</media-menu-content>
<media-menu-item commandfor="vjs-6DDbyaB8-0-content" class="media-menu-trigger-item">
<media-icon family="neutral" name="speech" class="media-menu-trigger-item-icon">
</media-icon>
<media-text token="menu.audio">Audio</media-text>
<span class="media-menu-hint">
<span data-part="value" class="media-menu-hint-label">
</span>
<media-icon family="neutral" name="chevron" class="media-menu-forward-chevron">
</media-icon>
</span>
</media-menu-item>
<media-menu-content class="media-menu-content" id="vjs-6DDbyaB8-0-content">
<media-menu-item class="media-menu-back-item">
<media-icon family="neutral" name="chevron" class="media-menu-back-chevron">
</media-icon>
<media-text token="menu.audio">Audio</media-text>
</media-menu-item>
<media-menu-separator class="media-menu-separator">
</media-menu-separator>
<media-audio-track-radio-group class="media-menu-radio-group">
<template>
<media-menu-radio-item class="media-menu-radio-item">
<span data-part="label">
</span>
<media-menu-item-indicator force-mount class="media-menu-item-indicator">
<media-icon family="neutral" name="check" class="media-menu-radio-item-icon">
</media-icon>
</media-menu-item-indicator>
</media-menu-radio-item>
</template>
</media-audio-track-radio-group>
</media-menu-content>
<media-menu-item commandfor="vjs-A3zWz_yK-0-content" class="media-menu-trigger-item">
<media-icon family="neutral" name="speed" class="media-menu-trigger-item-icon">
</media-icon>
<media-text token="menu.speed">Speed</media-text>
<span class="media-menu-hint">
<span data-part="value" class="media-menu-hint-label">
</span>
<media-icon family="neutral" name="chevron" class="media-menu-forward-chevron">
</media-icon>
</span>
</media-menu-item>
<media-menu-content class="media-menu-content" id="vjs-A3zWz_yK-0-content">
<media-menu-item class="media-menu-back-item">
<media-icon family="neutral" name="chevron" class="media-menu-back-chevron">
</media-icon>
<media-text token="menu.speed">Speed</media-text>
</media-menu-item>
<media-menu-separator class="media-menu-separator">
</media-menu-separator>
<media-playback-rate-radio-group class="media-menu-radio-group">
<template>
<media-menu-radio-item class="media-menu-radio-item">
<span data-part="label">
</span>
<media-menu-item-indicator force-mount class="media-menu-item-indicator">
<media-icon family="neutral" name="check" class="media-menu-radio-item-icon">
</media-icon>
</media-menu-item-indicator>
</media-menu-radio-item>
</template>
</media-playback-rate-radio-group>
</media-menu-content>
<media-menu-item commandfor="vjs-d4E9Ev1b-0-content" class="media-menu-trigger-item">
<media-icon family="neutral" name="captions-off" class="media-menu-trigger-item-icon">
</media-icon>
<media-text token="menu.captions">Captions</media-text>
<span class="media-menu-hint">
<span data-part="value" class="media-menu-hint-label">
</span>
<media-icon family="neutral" name="chevron" class="media-menu-forward-chevron">
</media-icon>
</span>
</media-menu-item>
<media-menu-content class="media-menu-content" id="vjs-d4E9Ev1b-0-content">
<media-menu-item class="media-menu-back-item">
<media-icon family="neutral" name="chevron" class="media-menu-back-chevron">
</media-icon>
<media-text token="menu.captions">Captions</media-text>
</media-menu-item>
<media-menu-separator class="media-menu-separator">
</media-menu-separator>
<media-captions-radio-group class="media-menu-radio-group">
<template>
<media-menu-radio-item class="media-menu-radio-item">
<span data-part="label">
</span>
<media-menu-item-indicator force-mount class="media-menu-item-indicator">
<media-icon family="neutral" name="check" class="media-menu-radio-item-icon">
</media-icon>
</media-menu-item-indicator>
</media-menu-radio-item>
</template>
</media-captions-radio-group>
</media-menu-content>
</media-menu-content>
</media-menu>
<media-controls-group class="video-controls-trailing">
<media-cast-button class="media-button media-cast-button" id="vjs-TIskxJHd-0-5-trigger">
<media-icon family="neutral" name="cast-enter" class="media-button-icon media-cast-button-enter-icon">
</media-icon>
<media-icon family="neutral" name="cast-exit" class="media-button-icon media-cast-button-exit-icon">
</media-icon>
</media-cast-button>
<media-tooltip trigger="vjs-TIskxJHd-0-5-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-airplay-button class="media-button media-airplay-button" id="vjs-TIskxJHd-0-6-trigger">
<media-icon family="neutral" name="airplay-enter" class="media-button-icon media-airplay-button-enter-icon">
</media-icon>
<media-icon family="neutral" name="airplay-exit" class="media-button-icon media-airplay-button-exit-icon">
</media-icon>
</media-airplay-button>
<media-tooltip trigger="vjs-TIskxJHd-0-6-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-pip-button class="media-button media-pip-button" id="vjs-TIskxJHd-0-7-trigger">
<media-icon family="neutral" name="pip-enter" class="media-button-icon media-pip-button-enter-icon">
</media-icon>
<media-icon family="neutral" name="pip-exit" class="media-button-icon media-pip-button-exit-icon">
</media-icon>
</media-pip-button>
<media-tooltip trigger="vjs-TIskxJHd-0-7-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-fullscreen-button class="media-button media-fullscreen-button" id="vjs-TIskxJHd-0-8-trigger">
<media-icon family="neutral" name="fullscreen-enter" class="media-button-icon media-fullscreen-button-enter-icon">
</media-icon>
<media-icon family="neutral" name="fullscreen-exit" class="media-button-icon media-fullscreen-button-exit-icon">
</media-icon>
</media-fullscreen-button>
<media-tooltip trigger="vjs-TIskxJHd-0-8-trigger" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
</media-controls-group>
</media-controls-group>
</media-tooltip-group>
</media-controls-content>
</media-controls>
<media-hotkey keys="Space" action="togglePaused">
</media-hotkey>
<media-hotkey keys="k" action="togglePaused">
</media-hotkey>
<media-hotkey keys="m" action="toggleMuted">
</media-hotkey>
<media-hotkey keys="ArrowRight" action="seekStep">
</media-hotkey>
<media-hotkey keys="ArrowLeft" action="seekStep">
</media-hotkey>
<media-hotkey keys="l" action="seekStep">
</media-hotkey>
<media-hotkey keys="j" action="seekStep">
</media-hotkey>
<media-hotkey keys="ArrowUp" action="volumeStep">
</media-hotkey>
<media-hotkey keys="ArrowDown" action="volumeStep">
</media-hotkey>
<media-hotkey keys="0-9" action="seekToPercent">
</media-hotkey>
<media-hotkey keys="Home" action="seekToPercent" value="0">
</media-hotkey>
<media-hotkey keys="End" action="seekToPercent" value="100">
</media-hotkey>
<media-hotkey keys="&gt;" action="speedUp">
</media-hotkey>
<media-hotkey keys="&lt;" action="speedDown">
</media-hotkey>
<media-hotkey keys="f" action="toggleFullscreen">
</media-hotkey>
<media-hotkey keys="c" action="toggleSubtitles">
</media-hotkey>
<media-hotkey keys="i" action="togglePictureInPicture">
</media-hotkey>
<media-gesture type="tap" action="togglePaused" pointer="mouse" region="center">
</media-gesture>
<media-gesture type="tap" action="toggleControls" pointer="touch">
</media-gesture>
<media-gesture type="doubletap" action="seekStep" region="left">
</media-gesture>
<media-gesture type="doubletap" action="toggleFullscreen" region="center">
</media-gesture>
<media-gesture type="doubletap" action="seekStep" region="right">
</media-gesture>
<media-status-announcer class="media-status-announcer">
</media-status-announcer>
<div class="video-status-indicators">
<media-volume-indicator class="media-indicator media-volume-indicator">
<media-volume-indicator-fill class="media-indicator-content media-volume-indicator-fill">
<media-icon family="neutral" name="volume-high" class="media-volume-indicator-high-icon">
</media-icon>
<media-icon family="neutral" name="volume-low" class="media-volume-indicator-low-icon">
</media-icon>
<media-icon family="neutral" name="volume-off" class="media-volume-indicator-off-icon">
</media-icon>
<media-volume-indicator-value class="media-volume-indicator-value">
</media-volume-indicator-value>
</media-volume-indicator-fill>
</media-volume-indicator>
<media-status-indicator actions="toggleSubtitles,toggleFullscreen,togglePictureInPicture" class="media-indicator media-status-indicator">
<div class="media-indicator-content media-status-indicator-content">
<media-icon family="neutral" name="captions-on" class="media-status-indicator-captions-on-icon">
</media-icon>
<media-icon family="neutral" name="captions-off" class="media-status-indicator-captions-off-icon">
</media-icon>
<media-icon family="neutral" name="fullscreen-enter" class="media-status-indicator-fullscreen-enter-icon">
</media-icon>
<media-icon family="neutral" name="fullscreen-exit" class="media-status-indicator-fullscreen-exit-icon">
</media-icon>
<media-icon family="neutral" name="pip-enter" class="media-status-indicator-pip-enter-icon">
</media-icon>
<media-icon family="neutral" name="pip-exit" class="media-status-indicator-pip-exit-icon">
</media-icon>
<media-status-indicator-value class="media-status-indicator-value">
</media-status-indicator-value>
</div>
</media-status-indicator>
<media-seek-indicator class="media-seek-indicator">
<media-icon family="neutral" name="chevron" class="media-seek-indicator-icon">
</media-icon>
<media-seek-indicator-value class="media-seek-indicator-value">
</media-seek-indicator-value>
</media-seek-indicator>
<media-status-indicator actions="togglePaused" class="media-playback-status-indicator">
<media-icon family="neutral" name="play" class="media-playback-status-indicator-play-icon">
</media-icon>
<media-icon family="neutral" name="pause" class="media-playback-status-indicator-pause-icon">
</media-icon>
</media-status-indicator>
</div>
</media-container>`);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/video/neutral-skin2.js
var neutral_skin_default$1 = "@property --media-slider-fill{syntax:\"<percentage>\";inherits:true;initial-value:0%}@property --media-slider-buffer{syntax:\"<percentage>\";inherits:true;initial-value:0%}video-player,live-video-player,media-i18n,media-dialog,media-alert-dialog,media-error-dialog,media-controls{display:contents}media-container video,media-container [slot=poster]{width:100%;height:100%;display:block}media-container video::-webkit-media-text-track-container{z-index:1;scale:.98;translate:0 var(--media-caption-track-y,0);transition:translate var(--media-caption-track-duration,0) ease-out;transition-delay:var(--media-caption-track-delay,0);font-family:inherit}:host{width:100%;display:grid}:host(:focus){outline:none!important}::slotted(video),::slotted(audio){margin:0!important}@layer base.theme{.media-skin[data-theme=neutral]{--media-control-corner-shape:squircle;--media-control-radius:calc(var(--media-spacing) * 2);--media-control-size:calc(var(--media-spacing) * 9);--media-controls-radius:calc(var(--media-spacing) * 3);--media-popover:oklch(0% 0 0/.5);--media-border:oklch(100% 0 0/.1);--media-shadow-surface:0 1px 2px oklch(0% 0 0/.2);--media-shadow-thumb:0 0 0 1px #00000026, 0 1px 3px 0 #00000026, 0 1px 2px -1px #00000026;--media-text-shadow-dialog:0 1px 0 #00000080;--media-backdrop-filter-dialog:blur(16px) saturate(120%);--media-shadow-tooltip:0 0 0 1px var(--media-border), 0 4px 6px -1px oklch(0% 0 0/.2), 0 2px 4px -2px oklch(0% 0 0/.2);--media-duration-dialog:var(--media-duration);--media-duration-indicator:.4s;--media-hidden-offset:100%;--media-hidden-indicator-offset:-100%;--media-menu-item-radius:calc(var(--media-spacing) * 1.5);--media-popover-boundary-offset:calc(var(--media-spacing) * 2);--media-popover-side-offset:calc(var(--media-spacing) * 5);--media-popup-radius:calc(var(--media-spacing) * 2.5);--media-popup-translate-distance:calc(var(--media-spacing) * 2);--media-dialog-width:100%;--media-dialog-max-width:calc(var(--media-spacing) * 64);--media-slider-preview-label-offset:calc(var(--media-spacing) * 5);--media-video-border-radius:var(--media-border-radius,12px)}.media-skin{--media-background:oklch(0% 0 0);--media-foreground:oklch(100% 0 0);--media-controls:oklch(0% 0 0/.35);--media-controls-foreground:var(--media-foreground);--media-popover:oklch(100% 0 0/.1);--media-popover-foreground:var(--media-foreground);--media-primary:var(--media-accent-color,var(--media-default-accent-color));--media-primary-foreground:var(--media-accent-text-color,var(--media-default-accent-text-color));--media-accent:var(--media-accent-color,color-mix(in oklab, var(--media-default-accent-color) 10%, transparent));--media-accent-foreground:var(--media-accent-text-color,currentColor);--media-muted:oklch(100% 0 0/.15);--media-muted-foreground:oklch(100% 0 0/.65);--media-border:oklch(0% 0 0/.1);--media-ring:oklch(100% 0 0);--media-backdrop:oklch(0% 0 0);--media-live-color:oklch(65% .22 27);--media-shadow-surface:0 1px 3px 0 oklch(0% 0 0/.15), 0 1px 2px -1px oklch(0% 0 0/.15);--media-shadow-surface-inset:inset 0 1px 0 0 #ffffff1a, inset 0 0 0 1px #ffffff0d;--media-shadow-thumb:0 0 0 1px #0000001a, 0 1px 3px 0 #00000059, 0 1px 2px -1px #00000059;--media-shadow-tooltip:0 0 0 1px var(--media-border), var(--media-shadow-surface);--media-shadow-separator:0 1px 0 0 oklch(100% 0 0/.075);--media-shadow-current-color:oklch(from currentColor 0 0 0 / clamp(0, calc((l - .5) * .5), .15));--media-shadow-subtle-current-color:color-mix(in oklab, var(--media-shadow-current-color) 40%, transparent);--media-text-shadow-dialog:0 1px 0 #00000040;--media-backdrop-filter-surface:blur(16px) saturate(110%);--media-backdrop-filter-indicator:blur(8px);--media-backdrop-filter-dialog:blur(16px) saturate(110%);--media-control-corner-shape:round;--media-control-radius:99px;--media-control-size:calc(var(--media-spacing) * 9);--media-controls-radius:var(--media-control-radius);--media-default-accent-color:oklch(100% 0 0);--media-default-accent-text-color:oklch(0% 0 0);--media-duration-instant:50ms;--media-duration-fast:.1s;--media-duration:.15s;--media-duration-slow:.2s;--media-duration-slower:.25s;--media-duration-controls:.1s;--media-duration-dialog:.35s;--media-duration-indicator:var(--media-duration-slower);--media-duration-menu:.25s;--media-duration-slider:var(--media-duration-fast);--media-delay-dialog:.1s;--media-hidden-scale:.95;--media-hidden-blur:8px;--media-hidden-offset:calc(var(--media-spacing) * 1);--media-hidden-icon-scale:0;--media-hidden-indicator-scale:.9;--media-hidden-indicator-offset:-25%;--media-hidden-playback-scale:.85;--media-hidden-popup-scale:.95;--media-hidden-popup-blur:4px;--media-hidden-preview-scale:.8;--media-hidden-preview-offset:calc(var(--media-spacing) * 2);--media-hidden-seek-offset:60%;--media-menu-item-radius:calc(var(--media-spacing) * 2);--media-popover-boundary-offset:calc(var(--media-spacing) * 3);--media-popover-side-offset:calc(var(--media-spacing) * 3);--media-popup-radius:calc(var(--media-spacing) * 3);--media-popup-translate-distance:calc(var(--media-spacing) * 2);--media-tooltip-boundary-offset:var(--media-popover-boundary-offset);--media-tooltip-side-offset:var(--media-popover-side-offset);--media-dialog-radius:calc(var(--media-spacing) * 7);--media-dialog-width:calc(100% - var(--media-spacing) * 6);--media-dialog-max-width:calc(var(--media-spacing) * 72);--media-slider-preview-label-offset:calc(var(--media-spacing) * 10.5);--media-video-border-radius:var(--media-border-radius,28px);--media-scale:1;--media-scrollbar-thumb-color:color-mix(in oklab, currentColor 30%, transparent);--media-spacing:calc(var(--media-scale-unit,16px) * var(--media-scale) / 4);scrollbar-color:var(--media-scrollbar-thumb-color) transparent;scrollbar-width:thin}@supports (color:contrast-color(red)){.media-skin{--media-primary-foreground:var(--media-accent-text-color,contrast-color(var(--media-primary)));--media-accent-foreground:var(--media-accent-text-color,contrast-color(var(--media-accent-color,var(--media-internal-accent-text-fallback,oklch(0% 0 0)))))}}@supports (color:oklch(from red l c h)){.media-skin{--media-shadow-subtle-current-color:oklch(from var(--media-shadow-current-color) l c h / calc(alpha * .4))}}@supports (color:oklch(from currentColor l c h)){.media-skin{--media-scrollbar-thumb-color:oklch(from currentColor l c h / .3)}}.media-skin::-webkit-scrollbar-thumb{background:var(--media-scrollbar-thumb-color);border-radius:9999px}.media-skin:fullscreen{--media-object-fit:contain;--media-video-border-radius:0}@media (width>=1280px){.media-skin:fullscreen{--media-scale:1.25}}@media (width>=1536px){.media-skin:fullscreen{--media-scale:1.5}}@media (width>=1920px){.media-skin:fullscreen{--media-scale:1.75}}}@layer base.preset{.media-skin:is([data-preset=video],[data-preset=live-video]){--media-frame-border:var(--media-border-color,#0000001a);--media-controls-gradient:linear-gradient(to top, color-mix(in oklab, var(--media-backdrop) 40%, transparent), color-mix(in oklab, var(--media-backdrop) 20%, transparent), color-mix(in oklab, var(--media-backdrop) 50%, transparent));--media-caption-controls-y:calc(var(--media-spacing) * -14);--media-slider-preview-offset:calc(var(--media-spacing) * 9);--media-thumbnail-gradient:linear-gradient(to top, color-mix(in oklab, var(--media-backdrop) 50%, transparent), color-mix(in oklab, var(--media-backdrop) 10%, transparent), transparent)}@supports (color:oklch(from red l c h)) and (background-image:linear-gradient(in oklab, red, red)){.media-skin:is([data-preset=video],[data-preset=live-video]){--media-controls-gradient:linear-gradient(to top in oklab, oklch(from var(--media-backdrop) l c h / .4), oklch(from var(--media-backdrop) l c h / .2), oklch(from var(--media-backdrop) l c h / .5))}}@supports (color:oklch(from red l c h)){.media-skin:is([data-preset=video],[data-preset=live-video]){--media-thumbnail-gradient:linear-gradient(to top, oklch(from var(--media-backdrop) l c h / .5), oklch(from var(--media-backdrop) l c h / .1), transparent)}}.media-skin:is([data-preset=video],[data-preset=live-video])[data-theme=neutral]{--media-frame-border:var(--media-border-color,#00000026);--media-controls-gradient:linear-gradient(to top, color-mix(in oklab, var(--media-backdrop) 50%, transparent), color-mix(in oklab, var(--media-backdrop) 20%, transparent));--media-indicator-gradient:linear-gradient(to bottom, color-mix(in oklab, var(--media-backdrop) 35%, transparent), color-mix(in oklab, var(--media-backdrop) 20%, transparent) calc(var(--media-spacing) * 12), transparent);--media-caption-controls-y:calc(var(--media-spacing) * -18);--media-slider-preview-offset:calc(var(--media-spacing) * 11)}@supports (color:oklch(from red l c h)) and (background-image:linear-gradient(in oklab, red, red)){.media-skin:is([data-preset=video],[data-preset=live-video])[data-theme=neutral]{--media-controls-gradient:linear-gradient(to top in oklab, oklch(from var(--media-backdrop) l c h / .5), oklch(from var(--media-backdrop) l c h / .2))}}@supports (color:oklch(from red l c h)){.media-skin:is([data-preset=video],[data-preset=live-video])[data-theme=neutral]{--media-indicator-gradient:linear-gradient(to bottom, oklch(from var(--media-backdrop) l c h / .35), oklch(from var(--media-backdrop) l c h / .2) calc(var(--media-spacing) * 12), transparent)}}@supports (color:light-dark(red, red)){.media-skin:is([data-preset=video],[data-preset=live-video]){--media-frame-border:var(--media-border-color,light-dark(#0000001a,#ffffff26))}.media-skin:is([data-preset=video],[data-preset=live-video])[data-theme=neutral]{--media-frame-border:var(--media-border-color,light-dark(#00000026,#ffffff26))}}}@layer base.preferences{@media (pointer:fine) and (prefers-reduced-motion:no-preference){.media-skin:not([data-controls-visible]){--media-duration-controls:.3s}}@media (pointer:coarse) and (prefers-reduced-motion:no-preference){.media-skin:not([data-controls-visible]){--media-duration-controls:.15s}}@media (prefers-reduced-motion:reduce){.media-skin{--media-duration-fast:var(--media-duration-instant);--media-duration:var(--media-duration-instant);--media-duration-slow:var(--media-duration-instant);--media-duration-slower:var(--media-duration-instant);--media-duration-controls:var(--media-duration-instant);--media-duration-dialog:var(--media-duration-instant);--media-duration-indicator:var(--media-duration-instant);--media-duration-menu:0s;--media-duration-slider:0s;--media-delay-dialog:0s;--media-hidden-scale:1;--media-hidden-blur:0px;--media-hidden-offset:0px;--media-hidden-icon-scale:1;--media-hidden-indicator-scale:1;--media-hidden-indicator-offset:0px;--media-hidden-playback-scale:1;--media-hidden-popup-scale:1;--media-hidden-popup-blur:0px;--media-hidden-preview-scale:1;--media-hidden-preview-offset:0px;--media-hidden-seek-offset:0px;--media-popup-translate-distance:0px;--media-spinner-animation:none;--media-icon-airplay-fill-animation:none;--media-icon-airplay-triangle-animation:none}}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){.media-skin{--media-popover:var(--media-background);--media-scrollbar-thumb-color:color-mix(in oklab, currentColor 80%, transparent);--media-backdrop-filter-surface:none;--media-backdrop-filter-indicator:none;--media-backdrop-filter-dialog:none;--media-shadow-surface-inset:inset 0 1px 0 0 #ffffff40, inset 0 0 0 1px #ffffff20;scrollbar-width:auto}@supports (color:oklch(from currentColor l c h)){.media-skin{--media-scrollbar-thumb-color:oklch(from currentColor l c h / .8)}}}@media (forced-colors:active){.media-skin{--media-border:CanvasText;--media-frame-border:CanvasText;--media-popover:Canvas;--media-popover-foreground:CanvasText;--media-ring:CanvasText;--media-shadow-surface-inset:inset 0 1px 0 0 CanvasText, inset 0 0 0 1px CanvasText}}}@layer base{:where(.media-skin){text-align:start;text-transform:none;letter-spacing:normal;font-style:normal;font-weight:400}:where(.media-skin),:where(.media-skin) *,:where(.media-skin) :before,:where(.media-skin) :after{box-sizing:border-box;border:0 solid;margin:0;padding:0}:where(.media-skin) button{font:inherit;color:inherit;text-transform:none;letter-spacing:inherit;appearance:none;background:0 0}:where(.media-skin) img,:where(.media-skin) svg,:where(.media-skin) media-icon{max-width:100%;display:block}:where(.media-skin) svg[fill=currentColor]{fill:currentColor}:where(.media-skin) svg[fill=none]{fill:none}:where(.media-skin) svg[stroke=currentColor]{stroke:currentColor}:where(.media-skin) video{border-radius:inherit;object-fit:var(--media-object-fit,contain);object-position:var(--media-object-position,center);width:100%;max-width:100%;height:100%;display:block}:where(.media-skin) media-icon>svg{width:100%;height:100%}:where(.media-skin) media-tooltip-group,:where(.media-skin) media-dialog,:where(.media-skin) media-alert-dialog,:where(.media-skin) media-error-dialog,:where(.media-skin) media-controls{display:contents}:where(.media-skin) [hidden][hidden]{display:none!important}@media (prefers-reduced-motion:no-preference){.media-skin{interpolate-size:allow-keywords}}@supports not selector(:popover-open){:where(.media-skin) [popover]:not([data-open],[data-ending-style]){display:none!important}.media-skin:is([data-preset=audio],[data-preset=live-audio]){overflow:visible!important}}}@layer components{:where(.media-skin){--media-caption-track-duration:var(--media-duration-controls);--media-caption-track-delay:25ms;--media-caption-track-y:calc(var(--media-spacing) * -2)}:where(.media-skin) video::-webkit-media-text-track-container{z-index:20;scale:.98;translate:0 var(--media-caption-track-y);transition:translate var(--media-caption-track-duration) ease-out;transition-delay:var(--media-caption-track-delay);font-family:inherit}:where(.media-skin)[data-controls-visible]{--media-caption-track-y:var(--media-caption-controls-y)}:where(.media-skin)[data-theme=compat] video::-webkit-media-text-track-container{translate:none;scale:none;transform:translateY(var(--media-caption-track-y,0px)) scale(.98);transition-property:transform}@container media-root (width>=42rem){:where(.media-skin)[data-theme=neutral][data-controls-visible] video{--media-caption-track-y:calc(var(--media-spacing) * -12)}}:where(.media-skin[data-theme=neutral]) .media-button{width:var(--media-control-size);height:var(--media-control-size);cursor:pointer;touch-action:manipulation;border-radius:var(--media-control-radius);text-align:center;min-height:0;color:inherit;outline-offset:-2px;transition-property:background-color,color,outline-offset,scale;transition-duration:var(--media-duration);will-change:scale;-webkit-user-select:none;user-select:none;corner-shape:var(--media-control-corner-shape);background-color:#0000;border-style:solid;border-width:0;outline:2px solid #0000;flex-shrink:0;place-items:center;padding:0;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}@media (hover:hover){:where(.media-skin[data-theme=neutral]) .media-button:not([aria-disabled=true]):hover{background-color:var(--media-accent);color:var(--media-accent-foreground)}}:where(.media-skin[data-theme=neutral]) .media-button:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-button:not([aria-disabled=true]):active{scale:.97}:where(.media-skin[data-theme=neutral]) .media-button[aria-disabled=true]{cursor:not-allowed;opacity:.5}@supports (corner-shape:squircle){:where(.media-skin[data-theme=neutral]) .media-button{border-radius:1rem}}@media (prefers-reduced-motion:reduce){:where(.media-skin[data-theme=neutral]) .media-button{will-change:auto;transition-property:background-color,color;scale:1}}:where(.media-skin[data-theme=neutral]) .media-button:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){background-color:var(--media-accent);color:var(--media-accent-foreground)}:where(.media-skin[data-theme=neutral]) .media-dialog-actions{gap:calc(var(--media-spacing) * 2);flex-shrink:0;display:flex}:where(.media-skin[data-theme=neutral]) .media-dialog-backdrop{z-index:40;border-radius:inherit;background-color:var(--media-backdrop);opacity:1;-webkit-backdrop-filter:var(--media-backdrop-filter-dialog);backdrop-filter:var(--media-backdrop-filter-dialog);transition-property:opacity;transition-duration:.15s;transition-delay:var(--media-delay-dialog);transition-duration:var(--media-duration-dialog);transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;inset:0}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-dialog-backdrop{background-color:color-mix(in oklab, var(--media-backdrop) 20%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-dialog-backdrop:not([data-open]){display:none}:where(.media-skin[data-theme=neutral]) .media-dialog-backdrop[data-ending-style]{transition-delay:0s;transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-dialog-backdrop:is([data-starting-style],[data-ending-style]){opacity:0}:where(.media-skin[data-theme=neutral]) .media-dialog-close{height:var(--media-control-size);width:100%;padding-inline:calc(var(--media-spacing) * 4);padding-block:calc(var(--media-spacing) * 2);flex:1;font-weight:500;background-color:var(--media-primary)!important;color:var(--media-primary-foreground)!important}:where(.media-skin[data-theme=neutral]) .media-dialog-content{gap:calc(var(--media-spacing) * 2);min-height:0;padding-block:calc(var(--media-spacing) * 1.5);flex-direction:column;display:flex;overflow-y:auto}:where(.media-skin[data-theme=neutral]) .media-dialog-description{overflow-wrap:anywhere;opacity:.7;margin:0}:where(.media-skin[data-theme=neutral]) .media-dialog-popup{z-index:50;max-height:calc(100% - .5rem);width:var(--media-dialog-width);max-width:var(--media-dialog-max-width);gap:calc(var(--media-spacing) * 3);border-radius:var(--media-dialog-radius);padding:calc(var(--media-spacing) * 4);color:var(--media-popover-foreground);transition-property:opacity,scale;transition-duration:.15s;transition-delay:var(--media-delay-dialog);transition-duration:var(--media-duration-dialog);text-shadow:var(--media-text-shadow-dialog);outline-style:none;flex-direction:column;transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:absolute;top:50%;left:50%;translate:-50% -50%}@media (forced-colors:active){:where(.media-skin[data-theme=neutral]) .media-dialog-popup{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral]) .media-dialog-popup:not([data-open]){display:none}:where(.media-skin[data-theme=neutral]) .media-dialog-popup[data-ending-style]{transition-delay:0s;transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-dialog-popup:is([data-starting-style],[data-ending-style]){scale:var(--media-hidden-popup-scale) var(--media-hidden-popup-scale);opacity:0}:where(.media-skin[data-theme=neutral]) .media-dialog-title{font-size:calc(var(--media-spacing) * 3.75);margin:0;font-weight:600;line-height:1.25}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator{pointer-events:none;color:var(--media-controls-foreground);place-content:center;display:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator:not([data-visible]){--media-spinner-animation:none}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator:before{background-color:var(--media-backdrop);content:\"\";-webkit-backdrop-filter:var(--media-backdrop-filter-indicator);backdrop-filter:var(--media-backdrop-filter-indicator);position:absolute;inset:0}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-buffering-indicator:before{background-color:color-mix(in oklab, var(--media-backdrop) 35%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator[data-visible]{display:grid}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator-spinner-icon{z-index:30;width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));position:relative}.media-poster>slot::slotted(img){border-radius:inherit;object-fit:var(--media-object-fit,contain);object-position:var(--media-object-position,center);width:100%;height:100%;position:absolute;inset:0;height:100%!important}.media-poster>slot::slotted(img:not([src]):not([srcset])){visibility:hidden}:where(.media-skin[data-theme=neutral]) .media-poster{pointer-events:none;border-radius:inherit;width:100%;height:100%;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:var(--media-duration-slower);position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-poster:not([data-visible]){opacity:0}:where(.media-skin[data-theme=neutral]) .media-poster-image{border-radius:inherit;object-fit:var(--media-object-fit,contain);object-position:var(--media-object-position,center);width:100%;height:100%;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-poster-image:not([src]):not([srcset]){visibility:hidden}:where(.media-skin[data-theme=neutral]) .media-title{pointer-events:none;isolation:isolate;z-index:20;transform-origin:top;padding-inline:calc(var(--media-spacing) * 4);padding-top:calc(var(--media-spacing) * 2.5);font-size:calc(var(--media-spacing) * 3.25);letter-spacing:-.0125em;overflow-wrap:anywhere;color:var(--media-controls-foreground);transition-property:filter,opacity,translate;transition-duration:.15s;transition-duration:calc(var(--media-duration-controls) / 2);text-shadow:0 1px 0 var(--media-shadow-current-color);inset-inline:0;font-weight:400;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;top:0}:where(.media-skin[data-theme=neutral]) .media-title:not([data-visible]){translate:0 calc(min(var(--media-hidden-offset), var(--media-control-size)) * -1);opacity:0;transition-duration:var(--media-duration-controls)}@media (pointer:fine){:where(.media-skin[data-theme=neutral]) .media-title:not([data-visible]){filter:blur(var(--media-hidden-blur))}}@container media-root (width>=28rem){:where(.media-skin[data-theme=neutral]) .media-title{padding-inline:calc(var(--media-spacing) * 6);padding-top:calc(var(--media-spacing) * 4);font-size:calc(var(--media-spacing) * 4.25)}}:where(.media-skin[data-theme=neutral]) .media-container,:where(.media-skin[data-theme=neutral]).media-container{isolation:isolate;border-radius:var(--media-video-border-radius);background-color:var(--media-background);width:100%;min-width:0;height:100%;min-height:0;font-family:var(--media-font-family,\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif);font-size:calc(var(--media-spacing) * 3.25);-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;outline-offset:-4px;transition-property:outline-offset,outline-color;transition-duration:.15s;transition-duration:var(--media-duration-fast);--spacing:var(--media-spacing);outline:2px solid #0000;line-height:1.5;transition-timing-function:cubic-bezier(0,0,.2,1);display:block;position:relative;overflow:clip;container:media-root/inline-size}:where(.media-skin[data-theme=neutral]) .media-container:after,:where(.media-skin[data-theme=neutral]).media-container:after{pointer-events:none;z-index:10;border-radius:inherit;content:\"\";border-style:solid;border-width:1px;border-color:var(--media-frame-border);position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-container:focus-visible,:where(.media-skin[data-theme=neutral]).media-container:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-container:fullscreen:after,:where(.media-skin[data-theme=neutral]).media-container:fullscreen:after{content:\"\";display:none}.media-container>slot::slotted(video),:scope.media-container>slot::slotted(video){border-radius:inherit;object-fit:var(--media-object-fit,contain);object-position:var(--media-object-position,center);width:100%;max-width:100%;height:100%;margin:0;display:block}:where(.media-skin[data-theme=neutral]) .media-status-announcer{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:where(.media-skin[data-theme=neutral]) .media-seek-indicator{place-content:center;gap:var(--media-spacing);padding:calc(var(--media-spacing) * 4);text-align:center;grid-row-start:1;grid-column-start:2;display:grid}:where(.media-skin[data-theme=neutral]) .media-seek-indicator[data-direction=backward]{grid-column-start:1;justify-self:flex-start}:where(.media-skin[data-theme=neutral]) .media-seek-indicator[data-direction=forward]{grid-column-start:3;justify-self:flex-end}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral]) .media-seek-indicator{padding:calc(var(--media-spacing) * 6)}}:where(.media-skin[data-theme=neutral]) .media-seek-indicator-icon{width:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 1.5);height:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 1.5);transition-property:translate,opacity;transition-duration:.15s;transition-duration:var(--media-duration-slow);transition-timing-function:cubic-bezier(.4,0,.2,1);display:none}:where(:where(.media-skin[data-theme=neutral]) .media-seek-indicator)[data-direction] .media-seek-indicator-icon{display:block}:where(:where(.media-skin[data-theme=neutral]) .media-seek-indicator)[data-direction=backward] .media-seek-indicator-icon{scale:-1 1}:where(:where(.media-skin[data-theme=neutral]) .media-seek-indicator)[data-direction=backward][data-starting-style] .media-seek-indicator-icon{translate:var(--media-hidden-seek-offset) 0}:where(:where(.media-skin[data-theme=neutral]) .media-seek-indicator)[data-direction=forward][data-starting-style] .media-seek-indicator-icon{translate:calc(var(--media-hidden-seek-offset) * -1) 0}:where(:where(.media-skin[data-theme=neutral]) .media-seek-indicator):is([data-starting-style],[data-ending-style]) .media-seek-indicator-icon{opacity:0}:where(.media-skin[data-theme=neutral]) .media-seek-indicator-value{font-variant-numeric:tabular-nums}:where(.media-skin[data-theme=neutral]) .media-indicator{pointer-events:none;transform-origin:top;background-image:var(--media-indicator-gradient);padding-top:calc(var(--media-spacing) * 3);padding-bottom:calc(var(--media-spacing) * 32);color:inherit;transition-duration:var(--media-duration-fast);text-shadow:0 1px 0 var(--media-shadow-current-color);inset-inline:0;justify-content:center;transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:absolute;top:0}:where(.media-skin[data-theme=neutral]) .media-indicator[data-ending-style]{translate:0 var(--media-hidden-indicator-offset)}@media (pointer:coarse){:where(.media-skin[data-theme=neutral]) .media-indicator{will-change:translate, opacity;transition-property:translate,opacity}}@media (pointer:fine){:where(.media-skin[data-theme=neutral]) .media-indicator{will-change:translate, filter, opacity;transition-property:translate,filter,opacity}}:where(.media-skin[data-theme=neutral]) .media-indicator:is([data-starting-style],[data-ending-style]){opacity:0;transition-duration:var(--media-duration-indicator);transition-timing-function:cubic-bezier(.4,0,1,1)}@media (pointer:fine){:where(.media-skin[data-theme=neutral]) .media-indicator:is([data-starting-style],[data-ending-style]){filter:blur(var(--media-hidden-blur))}}:where(.media-skin[data-theme=neutral]) .media-indicator-content{justify-content:space-between;align-items:center;gap:calc(var(--media-spacing) * 2);padding-inline:calc(var(--media-spacing) * 2.5);padding-block:var(--media-spacing)}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){:where(.media-skin[data-theme=neutral]) .media-indicator-content{border-radius:var(--media-control-radius);background-color:var(--media-background)}}:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator{padding:calc(var(--media-spacing) * 4);text-align:center;transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration-slow);grid-row-start:1;grid-column-start:2;place-content:center;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator[data-ending-style]{transition-duration:var(--media-duration-fast);transition-timing-function:cubic-bezier(.4,0,1,1)}:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator:is([data-starting-style],[data-ending-style]){scale:var(--media-hidden-playback-scale) var(--media-hidden-playback-scale);opacity:0}:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator-pause-icon{width:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 2);height:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 2);scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0;transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration);grid-row-start:1;grid-column-start:1;transition-timing-function:cubic-bezier(0,0,.2,1)}:where(:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator)[data-status=pause] .media-playback-status-indicator-pause-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator-play-icon{width:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 2);height:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 2);scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0;transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration);grid-row-start:1;grid-column-start:1;transition-timing-function:cubic-bezier(0,0,.2,1)}:where(:where(.media-skin[data-theme=neutral]) .media-playback-status-indicator)[data-status=play] .media-playback-status-indicator-play-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-status-indicator-captions-off-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-status-indicator)[data-status=captions-off] .media-status-indicator-captions-off-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-status-indicator-captions-on-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-status-indicator)[data-status=captions-on] .media-status-indicator-captions-on-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-status-indicator-content{display:flex}:where(.media-skin[data-theme=neutral]) .media-status-indicator-fullscreen-enter-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-status-indicator)[data-status=fullscreen] .media-status-indicator-fullscreen-enter-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-status-indicator-fullscreen-exit-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-status-indicator)[data-status=exit-fullscreen] .media-status-indicator-fullscreen-exit-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-status-indicator-pip-enter-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-status-indicator)[data-status=pip] .media-status-indicator-pip-enter-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-status-indicator-pip-exit-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-status-indicator)[data-status=exit-pip] .media-status-indicator-pip-exit-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-status-indicator-value{margin-left:auto}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-fill{border-radius:inherit;grid-template-columns:auto minmax(0,1fr) auto;width:min(80%,14rem);display:grid;transform:translate(0)}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-fill:before{height:calc(var(--media-spacing) * .75);content:\"\";width:100%;box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 0 var(--media-shadow-subtle-current-color);background-color:currentColor;border-radius:9999px;grid-row-start:1;grid-column-start:2}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-volume-indicator-fill:before{background-color:color-mix(in oklab, currentcolor 20%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-fill:after{height:calc(var(--media-spacing) * .75);width:var(--media-volume-fill,0%);background-color:var(--media-primary);transition-property:width;transition-duration:.15s;transition-duration:var(--media-duration-slow);content:\"\";border-radius:9999px;grid-row-start:1;grid-column-start:2;justify-self:flex-start;transition-timing-function:linear}@media (prefers-reduced-motion:no-preference){:where(:where(.media-skin[data-theme=neutral]) .media-volume-indicator):is([data-min],[data-max]):not([data-starting-style],[data-ending-style]) .media-volume-indicator-fill{transition:transform .3s linear(0, -24 20%, 16 40%, -8 60%, 4 80%, 1);transform:translate(.25px)}}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-high-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;grid-row-start:1;grid-column-start:1;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-volume-indicator)[data-level=high] .media-volume-indicator-high-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-low-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;grid-row-start:1;grid-column-start:1;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-volume-indicator)[data-level=low] .media-volume-indicator-low-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-off-icon{filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;grid-row-start:1;grid-column-start:1;display:none}:where(:where(.media-skin[data-theme=neutral]) .media-volume-indicator)[data-level=off] .media-volume-indicator-off-icon{display:block}:where(.media-skin[data-theme=neutral]) .media-volume-indicator-value{grid-row-start:1;grid-column-start:3}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-status-indicators{pointer-events:none;z-index:20;color:var(--media-controls-foreground);grid-template-columns:repeat(3,minmax(0,1fr));place-items:center;display:grid;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-airplay-button:not([data-airplay-state=connected]){--media-icon-airplay-fill-animation:none;--media-icon-airplay-triangle-animation:none}:where(.media-skin[data-theme=neutral]) .media-airplay-button-enter-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-airplay-button):not([data-airplay-state=connected]) .media-airplay-button-enter-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-airplay-button-exit-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-airplay-button)[data-airplay-state=connected] .media-airplay-button-exit-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-button-icon{width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration);text-shadow:inherit;grid-row-start:1;grid-column-start:1;transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral]) .media-popup{color:inherit;border-style:solid;border-width:0;margin:0;overflow:visible}:where(.media-skin[data-theme=neutral]) .media-popup[data-ending-style]{transform:none}:where(.media-skin[data-theme=neutral]) .media-popup[data-starting-style]{transform:translate(var(--media-popup-translate-x-distance,0), var(--media-popup-translate-y-distance,0));filter:none}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=bottom]{transform-origin:top;--media-popup-translate-y-distance:calc(var(--media-popup-translate-distance) * -1)}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=left]{transform-origin:100%;--media-popup-translate-x-distance:var(--media-popup-translate-distance)}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=right]{transform-origin:0;--media-popup-translate-x-distance:calc(var(--media-popup-translate-distance) * -1)}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=top]{transform-origin:bottom;--media-popup-translate-y-distance:var(--media-popup-translate-distance)}:where(.media-skin[data-theme=neutral]) .media-popup:is([data-starting-style],[data-ending-style]){scale:var(--media-hidden-popup-scale) var(--media-hidden-popup-scale);opacity:0;filter:blur(var(--media-hidden-popup-blur))}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area:before{pointer-events:auto;content:\"\";position:absolute}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=bottom]:before{content:\"\";height:var(--media-popup-side-offset);inset-inline:0;bottom:100%}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=left]:before{content:\"\";width:var(--media-popup-side-offset);inset-block:0;left:100%}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=right]:before{content:\"\";width:var(--media-popup-side-offset);inset-block:0;right:100%}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=top]:before{content:\"\";height:var(--media-popup-side-offset);inset-inline:0;top:100%}:where(.media-skin[data-theme=neutral]) .media-popup-transition{transition-property:opacity,filter,transform,scale;transition-duration:var(--media-duration-fast);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral]) .media-popup-transition[data-ending-style]{transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-tooltip{border-radius:var(--media-control-radius);padding-inline:calc(var(--media-spacing) * 2);padding-block:var(--media-spacing);font-size:calc(var(--media-spacing) * 3.25);white-space:nowrap;--media-popup-side-offset:var(--media-tooltip-side-offset);box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--media-shadow-tooltip)!important}:where(.media-skin[data-theme=neutral]) .media-tooltip[data-open]{align-items:center;gap:var(--media-spacing);display:flex}:where(.media-skin[data-theme=neutral]) .media-tooltip-shortcut{border-radius:var(--media-spacing);background-color:var(--media-muted);text-align:center;min-width:1.5em;font-family:inherit;font-size:calc(var(--media-spacing) * 2.75);margin-inline-end:calc(var(--media-spacing) * -1);padding:.1em;font-weight:600;line-height:1.25}:where(.media-skin[data-theme=neutral]) .media-popup-surface{background-color:var(--media-popover);color:var(--media-popover-foreground);box-shadow:0 0 0 1px var(--media-surface-border,var(--media-border)), var(--media-shadow-surface);-webkit-backdrop-filter:var(--media-backdrop-filter-surface);backdrop-filter:var(--media-backdrop-filter-surface)}:where(.media-skin[data-theme=neutral]) .media-popup-surface:after{z-index:10;pointer-events:none;border-radius:inherit;box-shadow:var(--media-shadow-surface-inset);content:\"\";display:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-captions-button-off-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-captions-button):not([data-active]) .media-captions-button-off-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-captions-button-on-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-captions-button)[data-active] .media-captions-button-on-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-cast-button-enter-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-cast-button):not([data-cast-state=connected]) .media-cast-button-enter-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-cast-button-exit-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-cast-button)[data-cast-state=connected] .media-cast-button-exit-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-fullscreen-button-enter-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-fullscreen-button):not([data-fullscreen]) .media-fullscreen-button-enter-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-fullscreen-button-exit-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-fullscreen-button)[data-fullscreen] .media-fullscreen-button-exit-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-pip-button-enter-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-pip-button):not([data-pip]) .media-pip-button-enter-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-pip-button-exit-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-pip-button)[data-pip] .media-pip-button-exit-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-play-button-pause-icon{scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-play-button)[data-started]:not([data-paused]):not([data-ended]) .media-play-button-pause-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-play-button-play-icon{scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-play-button):not([data-ended]):not([data-started]) .media-play-button-play-icon,:where(:where(.media-skin[data-theme=neutral]) .media-play-button):not([data-ended])[data-paused] .media-play-button-play-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-play-button-restart-icon{scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-play-button)[data-ended] .media-play-button-restart-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-mute-button-high-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-mute-button):not([data-muted]):not([data-volume-level=low]) .media-mute-button-high-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-mute-button-low-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-mute-button):not([data-muted])[data-volume-level=low] .media-mute-button-low-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-mute-button-off-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-mute-button)[data-muted] .media-mute-button-off-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-slider-buffer{pointer-events:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-slider-buffer:before{border-radius:var(--media-control-radius);content:\"\";background-color:currentColor;width:100%;height:100%;position:absolute}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-buffer:before{background-color:color-mix(in oklab, currentcolor 20%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=horizontal]{left:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));right:max(calc(100% - var(--media-slider-buffer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(-1px 0)}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=horizontal]:before{content:\"\";min-width:var(--media-spacing);left:0}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=vertical]{bottom:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));top:max(calc(100% - var(--media-slider-buffer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(0 -1px)}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=vertical]:before{content:\"\";min-height:var(--media-spacing);bottom:0}:where(.media-skin[data-theme=neutral]) .media-slider-fill{pointer-events:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-slider-fill:before{border-radius:var(--media-control-radius);content:\"\";background-color:var(--media-primary);width:100%;height:100%;position:absolute}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=horizontal]{left:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));right:max(calc(100% - var(--media-slider-fill,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(-1px 0)}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-fill[data-orientation=horizontal]{left:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));right:max(calc(100% - var(--media-slider-pointer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(-1px 0)}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=horizontal]:before{content:\"\";min-width:var(--media-spacing);left:0}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=vertical]{bottom:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));top:max(calc(100% - var(--media-slider-fill,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(0 -1px)}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-fill[data-orientation=vertical]{bottom:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));top:max(calc(100% - var(--media-slider-pointer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(0 -1px)}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=vertical]:before{content:\"\";min-height:var(--media-spacing);bottom:0}:where(.media-skin[data-theme=neutral]) .media-slider-thumb{top:50%;left:var(--media-slider-fill,0%);z-index:10;width:calc(var(--media-spacing) * 3);height:calc(var(--media-spacing) * 3);border-radius:var(--media-control-radius);box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--media-shadow-thumb);outline-offset:-2px;transition-property:opacity,height,width,outline-offset,scale;transition-duration:.15s;transition-duration:var(--media-duration-slider);-webkit-user-select:none;user-select:none;background-color:#fff;outline:2px solid #0000;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;translate:-50% -50%}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-thumb{scale:.9}:where(.media-skin[data-theme=neutral]) .media-slider-thumb:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-thumb[data-orientation=horizontal]{left:var(--media-slider-pointer)}:where(.media-skin[data-theme=neutral]) .media-slider-thumb[data-orientation=vertical]{top:calc(100% - var(--media-slider-fill,0%));left:50%}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-thumb[data-orientation=vertical]{top:calc(100% - var(--media-slider-pointer))}:where(.media-skin[data-theme=neutral]) .media-slider-track{isolation:isolate;-webkit-user-select:none;user-select:none;border-radius:9999px;width:100%;position:relative}:where(.media-skin[data-theme=neutral]) .media-slider-track:before{pointer-events:none;border-radius:var(--media-control-radius);content:\"\";background-color:currentColor;position:absolute;inset:0}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-track:before{background-color:color-mix(in oklab, currentcolor 20%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-slider-track[data-orientation=horizontal]{height:var(--media-spacing)}:where(.media-skin[data-theme=neutral]) .media-slider-track[data-orientation=vertical]{height:100%;width:var(--media-spacing)}:where(.media-skin[data-theme=neutral]) .media-slider{cursor:pointer;transition-property:--media-slider-fill,--media-slider-buffer;transition-duration:.15s;transition-duration:var(--media-duration-slider);border-radius:9999px;outline-style:none;flex:1;justify-content:center;align-items:center;transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:relative}@media (forced-colors:active){:where(.media-skin[data-theme=neutral]) .media-slider{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral]) .media-slider[data-disabled]{pointer-events:none}:where(.media-skin[data-theme=neutral]) .media-slider[data-dragging]{transition-duration:0s}:where(.media-skin[data-theme=neutral]) .media-slider[data-orientation=horizontal]{height:var(--media-slider-height,calc(var(--media-spacing) * 8));min-width:calc(var(--media-spacing) * 20)}:where(.media-skin[data-theme=neutral]) .media-slider[data-orientation=vertical]{height:calc(var(--media-spacing) * 20);width:calc(var(--media-spacing) * 8);min-width:0}:where(.media-skin[data-theme=neutral]) .media-volume-slider-thumb{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-volume-popover{border-radius:var(--media-control-radius);padding-inline:0;padding-block:calc(var(--media-spacing) * 3);--media-popup-side-offset:var(--media-popover-side-offset)}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=left]{background-image:linear-gradient(to left, var(--media-controls) 80%, transparent 100%);--media-popover-side-offset:0rem;border-style:solid;border-width:0;border-radius:0;padding-block:0;padding-inline-start:calc(var(--media-spacing) * 16);padding-inline-end:calc(var(--media-spacing) * 2);box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background-color:#0000!important}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=left]:after{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=right]{padding:0;padding-inline:calc(var(--media-spacing) * 3);--media-popover-side-offset:0rem;border-radius:0;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background-color:#0000!important}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=right]:after{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-slider-preview{height:var(--media-spacing);--media-preview-end-inset:calc(100cqi - 100%);--media-preview-left:clamp(calc(var(--media-slider-preview-max-width) / 2), var(--media-slider-pointer), calc(100% - var(--media-slider-preview-max-width) / 2 + var(--media-preview-end-inset)));--media-slider-preview-max-height:var(--media-slider-preview-max-width);--media-slider-preview-max-width:min(calc(var(--media-spacing) * 28), 100cqi);min-width:100%;position:relative}:where(.media-skin[data-theme=neutral]) .media-slider-preview:before{pointer-events:none;z-index:1;opacity:0;transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration-slow);content:\"\";background-color:currentColor;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;translate:-50% -50%;scale:.5}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-preview:before{background-color:color-mix(in oklab, currentcolor 35%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-slider-preview[data-pointing]:not([data-dragging]):before{content:\"\";opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-slider-preview[data-orientation=horizontal]:before{top:50%;left:var(--media-slider-pointer);height:calc(var(--media-spacing) * 5);content:\"\";width:1px}:where(.media-skin[data-theme=neutral]) .media-slider-preview[data-orientation=vertical]:before{top:calc(100% - var(--media-slider-pointer));content:\"\";height:1px;width:calc(var(--media-spacing) * 5);left:50%}@container media-root (width>=32rem){:where(.media-skin[data-theme=neutral]) .media-slider-preview{--media-slider-preview-max-width:min(calc(var(--media-spacing) * 36), 100cqi)}}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral]) .media-slider-preview{--media-preview-left:var(--media-slider-pointer);--media-slider-preview-max-width:min(calc(var(--media-spacing) * 48), 100cqi)}}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail{background-color:color-mix(in oklab, var(--media-backdrop) 90%, transparent)}}:where(:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail)[data-loading] .media-slider-thumbnail-image{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail):not([data-loading]) .media-slider-thumbnail-spinner-icon{--media-spinner-animation:none}:where(:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail)[data-loading] .media-slider-thumbnail-spinner-icon{opacity:1}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter{--media-chapter-inset-end:.5;--media-chapter-inset-start:.5;justify-content:center;align-items:center;min-width:0;min-height:0;display:flex;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter:first-of-type{--media-chapter-inset-start:0}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter:last-of-type{--media-chapter-inset-end:0}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter[data-orientation=horizontal]{clip-path:inset(0 calc(100% - var(--media-slider-chapter-end)) 0 var(--media-slider-chapter-start))}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter[data-orientation=vertical]{clip-path:inset(calc(100% - var(--media-slider-chapter-end)) 0 var(--media-slider-chapter-start) 0)}:where(:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter)[data-highlighted] .media-time-slider-chapter-layer[data-orientation=horizontal]:before{content:\"\";min-width:calc(var(--media-spacing) * 1.75)}:where(:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter)[data-highlighted] .media-time-slider-chapter-layer[data-orientation=vertical]:before{content:\"\";min-height:calc(var(--media-spacing) * 1.75)}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter-title{max-width:var(--media-slider-preview-max-width);text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter-title:empty{display:none}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter-track{transition-property:height,width;transition-duration:.15s;transition-duration:var(--media-duration-slow);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter)[data-highlighted] .media-time-slider-chapter-track[data-orientation=horizontal]{height:calc(var(--media-spacing) * 1.75)}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter-track[data-orientation=horizontal]:before{content:\"\";left:calc(var(--media-slider-chapter-start) + var(--media-spacing) * var(--media-chapter-inset-start));right:calc(100% - var(--media-slider-chapter-end) + var(--media-spacing) * var(--media-chapter-inset-end));clip-path:inset(-1px)}:where(:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter)[data-highlighted] .media-time-slider-chapter-track[data-orientation=vertical]{width:calc(var(--media-spacing) * 1.75)}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapter-track[data-orientation=vertical]:before{content:\"\";top:calc(100% - var(--media-slider-chapter-end) + var(--media-spacing) * var(--media-chapter-inset-end));bottom:calc(var(--media-slider-chapter-start) + var(--media-spacing) * var(--media-chapter-inset-start));clip-path:inset(-1px)}:where(.media-skin[data-theme=neutral]) .media-time-slider-chapters{border-radius:inherit;flex:1;align-items:center;width:100%;min-width:0;height:100%;min-height:0;display:flex;position:relative}:where(.media-skin[data-theme=neutral]) .media-time-slider-preview-content{bottom:calc(100% + var(--media-slider-preview-label-offset));left:var(--media-preview-left,var(--media-slider-pointer));justify-content:center;gap:calc(var(--media-spacing) * 2);font-variant-numeric:tabular-nums;flex-direction:row-reverse;display:flex}:where(.media-skin[data-theme=neutral]) .media-time-slider-thumb{opacity:0;scale:.7}:where(.media-skin[data-theme=neutral]) .media-time-slider-thumb:focus-visible{opacity:1}:where(.media-skin[data-theme=neutral]) .media-time-slider-thumb[data-interactive]{opacity:1;scale:1}@media (pointer:fine){@media (hover:hover){:where(:where(.media-skin[data-theme=neutral]) .media-slider):hover .media-time-slider-thumb{opacity:1;scale:1}}}:where(.media-skin[data-theme=neutral]) .media-time-slider-value{font-variant-numeric:tabular-nums}.media-slider-thumbnail>slot::slotted(img){transition-property:opacity;transition-duration:.15s;transition-duration:var(--media-duration);transition-timing-function:cubic-bezier(0,0,.2,1);display:block}.media-slider-thumbnail[data-loading]>slot::slotted(img){opacity:0}:where(.media-skin[data-theme=neutral]) .media-slider-preview-content{max-width:var(--media-slider-preview-max-width);transform-origin:bottom;translate:-50% var(--media-hidden-preview-offset);scale:var(--media-hidden-preview-scale) var(--media-hidden-preview-scale);opacity:0;filter:blur(var(--media-hidden-blur));transition-property:filter,opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration);transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute}:where(.media-skin[data-theme=neutral]) :where(.media-slider):has(:focus-visible) .media-slider-preview-content,:where(.media-skin[data-theme=neutral]) :where(.media-slider-preview)[data-pointing] .media-slider-preview-content{opacity:1;filter:none;scale:1}:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail{pointer-events:none;bottom:calc(100% + var(--media-slider-preview-offset));left:var(--media-preview-left,var(--media-slider-pointer));max-height:var(--media-slider-preview-max-height);border-radius:var(--media-popup-radius);background-color:var(--media-backdrop);overflow:hidden}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail{background-color:color-mix(in oklab, var(--media-backdrop) 90%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail[data-loading]{aspect-ratio:16/9;width:var(--media-slider-preview-max-width)}:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail-image{transition-property:opacity;transition-duration:.15s;transition-duration:var(--media-duration);transition-timing-function:cubic-bezier(0,0,.2,1);display:block}:where(.media-skin[data-theme=neutral]) :where(.media-slider-thumbnail)[data-loading] .media-slider-thumbnail-image{opacity:0}:where(.media-skin[data-theme=neutral]) .media-slider-thumbnail-spinner-icon{z-index:10;width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));opacity:0;filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));transition-property:opacity;transition-duration:.15s;transition-duration:var(--media-duration);transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:50%;translate:-50% -50%}:where(.media-skin[data-theme=neutral]) :where(.media-slider-thumbnail):not([data-loading]) .media-slider-thumbnail-spinner-icon{--media-spinner-animation:none}:where(.media-skin[data-theme=neutral]) :where(.media-slider-thumbnail)[data-loading] .media-slider-thumbnail-spinner-icon{opacity:1}:where(.media-skin[data-theme=neutral]) .media-menu-back-chevron{width:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 7 / 9);height:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 7 / 9);color:var(--media-muted-foreground);filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0;rotate:180deg}:where(:where(.media-skin[data-theme=neutral]) .media-menu-back-item):where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])) .media-menu-back-chevron{color:inherit}:where(.media-skin[data-theme=neutral]) .media-menu-back-chevron:where(:dir(rtl),[dir=rtl],[dir=rtl] *){rotate:0deg;scale:1}:where(.media-skin[data-theme=neutral]) .media-menu-forward-chevron{width:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 7 / 9);height:calc(var(--media-icon-size,calc(var(--media-spacing) * 4.5)) * 7 / 9);color:var(--media-muted-foreground);filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0}:where(:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item):where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])) .media-menu-forward-chevron{color:inherit}:where(.media-skin[data-theme=neutral]) .media-menu-forward-chevron:where(:dir(rtl),[dir=rtl],[dir=rtl] *){scale:-1 1}:where(.media-skin[data-theme=neutral]) .media-menu-item-indicator{opacity:0;flex-shrink:0;margin-inline-start:auto;margin-inline-end:calc(var(--media-spacing) * -1)}:where(:where(.media-skin[data-theme=neutral]) .media-menu-radio-item)[aria-checked=true] .media-menu-item-indicator{opacity:1}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item{cursor:pointer;justify-content:space-between;align-items:center;gap:calc(var(--media-spacing) * 1.5);border-radius:var(--media-menu-item-radius);padding-inline:calc(var(--media-spacing) * 2);padding-block:calc(var(--media-spacing) * 1.5);text-align:start;white-space:nowrap;color:inherit;font-variant-numeric:tabular-nums;outline-offset:-2px;transition-property:background-color,color;transition-duration:.15s;transition-duration:var(--media-duration-fast);-webkit-user-select:none;user-select:none;text-shadow:0 1px 0 var(--media-shadow-current-color);outline:2px solid #0000;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[aria-disabled=true]{pointer-events:none;cursor:not-allowed;opacity:.5}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[data-availability=unavailable],:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[data-availability=unsupported]{display:none}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){background-color:var(--media-accent);color:var(--media-accent-foreground)}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral]) .media-menu-radio-item{transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[data-highlighted]{anchor-name:--media-menu-item-highlight-anchor}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){transition-duration:var(--media-duration-slow);background-color:#0000}}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item-icon{width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));color:var(--media-muted-foreground);filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0}:where(:where(.media-skin[data-theme=neutral]) .media-menu-radio-item):where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])) .media-menu-radio-item-icon{color:inherit}:where(.media-skin[data-theme=neutral]) .media-menu-back-item{margin-bottom:calc(var(--media-spacing) * .5);cursor:pointer;align-items:center;gap:calc(var(--media-spacing) * 1.5);border-radius:var(--media-menu-item-radius);width:100%;padding-inline:calc(var(--media-spacing) * 2);padding-block:calc(var(--media-spacing) * 1.5);text-align:start;white-space:nowrap;outline-offset:-2px;transition-property:background-color,color;transition-duration:.15s;transition-duration:var(--media-duration-fast);-webkit-user-select:none;user-select:none;text-shadow:0 1px 0 var(--media-shadow-current-color);outline:2px solid #0000;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}:where(.media-skin[data-theme=neutral]) .media-menu-back-item:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-menu-back-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){background-color:var(--media-accent);color:var(--media-accent-foreground)}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral]) .media-menu-back-item{transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-menu-back-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){transition-duration:var(--media-duration-slow)}}:where(.media-skin[data-theme=neutral]) .media-menu-content{max-height:inherit;overscroll-behavior:none;transition-property:translate,filter;transition-duration:.15s;transition-duration:var(--media-duration-menu);anchor-scope:--media-menu-item-highlight-anchor;outline-style:none;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;overflow:auto}@media (forced-colors:active){:where(.media-skin[data-theme=neutral]) .media-menu-content{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral]) .media-menu-content:not([data-submenu]){inset-inline:var(--media-spacing);top:var(--media-spacing);gap:calc(var(--media-spacing) * .5);flex-direction:column;display:flex}:where(.media-skin[data-theme=neutral]) .media-menu-content:not([data-submenu])[data-child-open]{filter:blur(var(--media-hidden-blur));translate:-100%}:where(.media-skin[data-theme=neutral]) .media-menu-content:not([data-submenu])[data-child-open]:before{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-menu-content[data-submenu]{z-index:10;max-height:inherit;padding:var(--media-spacing);inset-inline:0;top:0}:where(.media-skin[data-theme=neutral]) .media-menu-content:not([data-submenu])[data-child-open]:where(:dir(rtl),[dir=rtl],[dir=rtl] *){translate:100%}:where(.media-skin[data-theme=neutral]) .media-menu-content:is([data-starting-style],[data-ending-style]):before{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-menu-content[data-submenu]:is([data-starting-style],[data-ending-style]){pointer-events:none;filter:blur(var(--media-hidden-blur));overflow:hidden;translate:100%}:where(.media-skin[data-theme=neutral]) .media-menu-content[data-submenu]:is([data-starting-style],[data-ending-style]):where(:dir(rtl),[dir=rtl],[dir=rtl] *){translate:-100%}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral]) .media-menu-content:before{content:\"\";position-anchor:--media-menu-item-highlight-anchor;inset:anchor(inside);overflow-anchor:none;pointer-events:none;border-radius:var(--media-menu-item-radius);background-color:var(--media-accent);transition:inset var(--media-duration-fast) ease-in-out;position:absolute}:where(.media-skin[data-theme=neutral]) .media-menu-content:has([data-highlighted=\"\"]):before{content:\"\";transition-duration:0s}}:where(.media-skin[data-theme=neutral]) .media-menu-content:is([data-starting-style],[data-ending-style]) :before{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-menu-hint{align-items:center;gap:var(--media-spacing);min-width:0;margin-inline-start:auto;padding-inline-start:calc(var(--media-spacing) * 2);display:inline-flex}:where(.media-skin[data-theme=neutral]) .media-menu-hint-label{max-width:calc(var(--media-spacing) * 24);text-overflow:ellipsis;white-space:nowrap;opacity:.65;overflow:hidden}:where(.media-skin[data-theme=neutral]) .media-menu-radio-group{max-height:inherit;gap:calc(var(--media-spacing) * .5);anchor-scope:--media-menu-item-highlight-anchor;flex-direction:column;display:flex}:where(.media-skin[data-theme=neutral]) .media-menu-radio-group:is([data-starting-style],[data-ending-style]):before{content:\"\";display:none}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral]) .media-menu-radio-group:before{content:\"\";position-anchor:--media-menu-item-highlight-anchor;inset:anchor(inside);overflow-anchor:none;pointer-events:none;border-radius:var(--media-menu-item-radius);background-color:var(--media-accent);transition:inset var(--media-duration-fast) ease-in-out;position:absolute}:where(.media-skin[data-theme=neutral]) .media-menu-radio-group:has([data-highlighted=\"\"]):before{content:\"\";transition-duration:0s}}:where(.media-skin[data-theme=neutral]) .media-menu-radio-group:is([data-starting-style],[data-ending-style]) :before{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-menu-separator{margin-block:var(--media-spacing);border-bottom-style:solid;border-bottom-width:1px;border-color:var(--media-border);display:block}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){:where(.media-skin[data-theme=neutral]) .media-menu-separator{border-color:var(--media-foreground)}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-menu-separator{border-color:color-mix(in oklab, var(--media-foreground) 25%, transparent)}}}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item{cursor:pointer;justify-content:space-between;align-items:center;gap:calc(var(--media-spacing) * 1.5);border-radius:var(--media-menu-item-radius);padding-inline:calc(var(--media-spacing) * 2);padding-block:calc(var(--media-spacing) * 1.5);text-align:start;white-space:nowrap;color:inherit;font-variant-numeric:tabular-nums;outline-offset:-2px;transition-property:background-color,color;transition-duration:.15s;transition-duration:var(--media-duration-fast);-webkit-user-select:none;user-select:none;text-shadow:0 1px 0 var(--media-shadow-current-color);outline:2px solid #0000;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item[aria-disabled=true]{pointer-events:none;cursor:not-allowed;opacity:.5}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item[data-availability=unavailable],:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item[data-availability=unsupported]{display:none}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){background-color:var(--media-accent);color:var(--media-accent-foreground)}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item{transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item[data-highlighted]{anchor-name:--media-menu-item-highlight-anchor}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){transition-duration:var(--media-duration-slow);background-color:#0000}}:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item-icon{width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));color:var(--media-muted-foreground);filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0}:where(:where(.media-skin[data-theme=neutral]) .media-menu-trigger-item):where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])) .media-menu-trigger-item-icon{color:inherit}:where(.media-skin[data-theme=neutral]) .media-menu-badge{border-radius:var(--media-control-radius);background-color:var(--media-accent);padding-inline:calc(var(--media-spacing) * 1.5);font-size:.7em;font-weight:600}:where(.media-skin[data-theme=neutral]) .media-menu-tier{opacity:.7;padding-inline-start:calc(var(--media-spacing) * .5);padding-top:1px;font-size:.7em;font-weight:600;line-height:1}:where(.media-skin[data-theme=neutral]) .media-menu-popup{height:var(--media-menu-height);max-height:min(var(--media-menu-available-height,calc(var(--media-spacing) * 56)), calc(var(--media-spacing) * 56));width:var(--media-menu-width);max-width:var(--media-menu-available-width);min-width:calc(var(--media-spacing) * 44);overscroll-behavior:none;border-radius:var(--media-popup-radius);padding:var(--media-spacing);transition-property:opacity,filter,transform,scale;transition-duration:var(--media-duration-fast);--media-popup-side-offset:var(--media-popover-side-offset);border-style:solid;border-width:0;margin:0;transition-timing-function:cubic-bezier(0,0,.2,1);overflow:hidden!important}:where(.media-skin[data-theme=neutral]) .media-menu-popup:is([data-starting-style],[data-ending-style]){transition-property:opacity,filter,transform,scale;transition-duration:var(--media-duration-fast);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral]) .media-menu-resizable-popup{transition-property:opacity,filter,transform,scale,width,height;transition-duration:var(--media-duration-fast), var(--media-duration-fast), var(--media-duration-fast), var(--media-duration-fast), var(--media-duration-menu), var(--media-duration-menu)}:where(.media-skin[data-theme=neutral]) .media-settings-menu-trigger-icon{transition-property:transform,translate,scale,rotate;transition-duration:.15s;transition-duration:var(--media-duration);transition-timing-function:cubic-bezier(.4,0,.2,1)}:where(:where(.media-skin[data-theme=neutral]) .media-settings-menu-trigger)[aria-expanded=true] .media-settings-menu-trigger-icon{rotate:90deg}@media (prefers-reduced-motion:reduce){:where(.media-skin[data-theme=neutral]) .media-settings-menu-trigger-icon{transition-property:none}}:where(.media-skin[data-theme=neutral]) .media-settings-menu-trigger-label{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:where(.media-skin[data-theme=neutral]) .media-button-icon-base{width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));text-shadow:inherit;grid-row-start:1;grid-column-start:1}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-backdrop{pointer-events:none;z-index:10;border-radius:inherit;background-image:var(--media-controls-gradient);transition-property:opacity;transition-duration:.15s;transition-duration:var(--media-duration-controls);transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;inset:0}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-backdrop:not([data-visible]){opacity:0}@container media-root (width<20rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-captions-button{display:none}}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content{inset-inline:calc(var(--media-spacing) * .5);bottom:calc(var(--media-spacing) * .5);z-index:30;align-items:center;column-gap:calc(var(--media-spacing) * 2);border-radius:var(--media-controls-radius);padding:var(--media-spacing);color:var(--media-controls-foreground);transition-property:filter,opacity,translate;transition-duration:.15s;transition-duration:calc(var(--media-duration-controls) / 2);text-shadow:0 1px 0 var(--media-shadow-current-color);background-color:#0000;transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:absolute}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content:not([data-visible]){pointer-events:none;translate:0 var(--media-hidden-offset);opacity:0;transition-duration:var(--media-duration-controls)}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}@media (pointer:fine){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content:not([data-visible]){filter:blur(var(--media-hidden-blur))}}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content{background-color:var(--media-background)}}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content{inset-inline:calc(var(--media-spacing) * 2);bottom:calc(var(--media-spacing) * 2);--media-popover-side-offset:calc(var(--media-spacing) * 3);--media-tooltip-side-offset:var(--media-popover-side-offset)}}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-end{flex:1;justify-content:flex-end;align-items:center;gap:1px;display:flex}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-end:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-end{flex:none}}@container media-root (width<42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-end{transition:mask-position var(--media-duration-instant) ease-out;-webkit-mask-position:100% 0;mask-position:100% 0;-webkit-mask-size:400% 100%;mask-size:400% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}:where(:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content):has([data-volume-level][aria-expanded=true]) .video-controls-end{-webkit-mask-image:linear-gradient(90deg,#0000 10%,#000 25% 100%);mask-image:linear-gradient(90deg,#0000 10%,#000 25% 100%);-webkit-mask-position:0 0;mask-position:0 0}}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-start{flex:1;align-items:center;gap:1px;display:flex}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-start:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-start{flex:none}}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-trailing{align-items:center;gap:1px;display:flex}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-trailing:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-wrap{flex-wrap:wrap}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-wrap{flex-wrap:nowrap}}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-time-slider-group{align-items:center;gap:calc(var(--media-spacing) * 3);padding-inline:calc(var(--media-spacing) * 1.5);--media-slider-height:calc(var(--media-spacing) * 5);flex-direction:row-reverse;flex:0 0 100%;order:-1;display:flex;container:video-time-controls/inline-size}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-time-slider-group:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-time-slider-group{min-width:0;transition:mask-position var(--media-duration-instant) ease-out;--media-slider-height:calc(var(--media-spacing) * 8);flex-direction:row;flex:1;order:0;-webkit-mask-position:100% 0;mask-position:100% 0;-webkit-mask-size:200% 100%;mask-size:200% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}:where(:where(.media-skin[data-theme=neutral][data-preset=video]) .video-controls-content):has([data-volume-level][aria-expanded=true]) .video-time-slider-group{-webkit-mask-image:linear-gradient(90deg,#0000 10%,#000 25% 100%);mask-image:linear-gradient(90deg,#0000 10%,#000 25% 100%);-webkit-mask-position:0 0;mask-position:0 0}:where(.media-skin[data-theme=neutral][data-preset=video]) .video-time-slider-group:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-current-value{display:none}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-current-value{display:inline}}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-duration-value{font-variant-numeric:tabular-nums;transition-property:opacity;transition-duration:.15s;transition-duration:var(--media-duration-slow);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-duration-value[data-unavailable]{opacity:.5}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-duration-value{color:var(--media-controls-foreground)}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-duration-value{color:color-mix(in oklab, var(--media-controls-foreground) 60%, transparent)}}}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-group{align-items:center;gap:var(--media-spacing);display:flex}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-group:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-separator{display:none}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-separator{color:var(--media-controls-foreground);display:inline}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-separator{color:color-mix(in oklab, var(--media-controls-foreground) 60%, transparent)}}}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-toggle{cursor:pointer;font-variant-numeric:tabular-nums;outline-offset:-2px;transition-property:outline-color,outline-offset;transition-duration:.15s;transition-duration:var(--media-duration-fast);border-radius:.25rem;outline:2px solid #0000;transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-toggle:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-toggle[aria-disabled=true]{cursor:not-allowed;opacity:.5}@supports (corner-shape:squircle){:where(.media-skin[data-theme=neutral][data-preset=video]) .media-time-toggle{corner-shape:squircle;border-radius:1rem}}@media (pointer:fine){:where(.media-skin[data-theme=neutral][data-preset=video]) .video-skin:not([data-controls-visible]),:where(.media-skin[data-theme=neutral][data-preset=video]).video-skin:not([data-controls-visible]){cursor:none}}}@layer utilities;\n";
//#endregion
//#region node_modules/@videojs/html/dist/default/presets/video/neutral-skin.js
/** Packaged Neutral video UI registered as `<video-neutral-skin>`. */
var NeutralVideoSkinElement = class extends SkinElement {
	static {
		this.tagName = "video-neutral-skin";
	}
	static {
		this.styles = createShadowStyle(neutral_skin_default$1);
	}
	static {
		this.template = template$1;
	}
};
/**
* The default HTML context carrying the active translator and locale.
*
* @public
*/
const i18nContext = n(Symbol.for("@videojs/i18n"));
//#endregion
//#region node_modules/@videojs/html/dist/default/i18n/controller.js
let fallbackTranslator;
function getFallbackTranslator() {
	fallbackTranslator ??= createTranslator(getI18nTranslations("en"), "en");
	return fallbackTranslator;
}
/** Consumes an i18n context and updates its host when the translator or locale changes. */
var I18nController = class {
	#host;
	#consumer;
	#unsubscribeRegistry;
	/**
	* @param host - Reactive host updated when the i18n value changes.
	* @param context - I18n context to consume.
	*/
	constructor(host, context) {
		this.#host = host;
		this.#consumer = new s$1(host, {
			context,
			callback: () => this.#host.requestUpdate(),
			subscribe: true
		});
		host.addController(this);
	}
	get value() {
		return this.#consumer.value?.translator ?? getFallbackTranslator();
	}
	get locale() {
		return this.#consumer.value?.locale ?? "en";
	}
	hostConnected() {
		fallbackTranslator = void 0;
		this.#unsubscribeRegistry = onI18nRegistryChange(() => {
			fallbackTranslator = void 0;
			if (!this.#consumer.value) this.#host.requestUpdate();
		});
	}
	hostDisconnected() {
		this.#unsubscribeRegistry?.();
		this.#unsubscribeRegistry = void 0;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/i18n/locale.js
/**
* Delegates to {@link effectiveLocale}; result is typed as {@link Locale} for player UI.
*
* @internal
*/
function resolvePlayerLocale(explicit, inherited) {
	return effectiveLocale(explicit, inherited);
}
/**
* Effective locale for an i18n provider element (explicit `lang` → ancestor `lang` chain → `en`).
*
* @internal
*/
function resolveProviderLocale(host) {
	return resolvePlayerLocale(resolveLangAttr(host.lang), resolveLangAttr(findNearestLang(host.parentElement ?? (typeof document !== "undefined" ? document.documentElement : null))));
}
//#endregion
//#region node_modules/@videojs/html/dist/default/i18n/provider-mixin.js
function createI18nProviderMixin({ context, loader = loadLocale }) {
	return (Base) => {
		class I18nProviderElement extends Base {
			constructor(..._args) {
				super(..._args);
				this.lang = "";
				this.dir = "";
				this.#i18nProvider = new i(this, {
					context,
					initialValue: {
						translator: getFallbackTranslator(),
						locale: "en"
					}
				});
				this.#registryEpoch = 0;
				this.#lazyLayer = {};
				this.#lazySeq = 0;
				this.#i18nValue = {
					translator: getFallbackTranslator(),
					locale: "en"
				};
				this.#publishedRegistryEpoch = -1;
			}
			static {
				this.properties = {
					...Base.properties,
					lang: {
						type: String,
						reflect: true
					},
					dir: {
						type: String,
						reflect: true
					}
				};
			}
			#i18nProvider;
			#registryUnsubscribe;
			#ambientUnsubscribe;
			#registryEpoch;
			#lazyLayer;
			#lazySeq;
			/** Tracks locale used for `#lazyLayer`; ambient `lang` can change without the `lang` property. */
			#resolvedLocaleForLazy;
			/** Locale snapshot when the current `#lazySeq` async load was started (see `willUpdate` drift guard). */
			#lazyResetStartedForLocale;
			#i18nValue;
			#publishedLocale;
			#publishedRegistryEpoch;
			#publishedLazyLayer;
			#derivedDirection;
			get i18nValue() {
				return this.#i18nValue;
			}
			connectedCallback() {
				super.connectedCallback();
				this.#registryUnsubscribe = onI18nRegistryChange(() => {
					this.#registryEpoch += 1;
					this.requestUpdate();
				});
				this.#ambientUnsubscribe = subscribeAmbientLang(() => this.requestUpdate());
				this.#resetLazyAndLoad();
				this.#publish();
				this.requestUpdate();
			}
			disconnectedCallback() {
				super.disconnectedCallback();
				this.#registryUnsubscribe?.();
				this.#registryUnsubscribe = void 0;
				this.#ambientUnsubscribe?.();
				this.#ambientUnsubscribe = void 0;
				this.#lazySeq += 1;
				this.#lazyLayer = {};
				this.#resolvedLocaleForLazy = void 0;
				this.#lazyResetStartedForLocale = void 0;
			}
			willUpdate(changed) {
				super.willUpdate(changed);
				const locale = resolveProviderLocale(this);
				if (this.#resolvedLocaleForLazy !== locale) {
					const hadLocale = this.#resolvedLocaleForLazy !== void 0;
					this.#resolvedLocaleForLazy = locale;
					const localeDriftedBeforeFirstPaint = !hadLocale && this.#lazyResetStartedForLocale !== void 0 && locale !== this.#lazyResetStartedForLocale;
					if (hadLocale || localeDriftedBeforeFirstPaint) this.#resetLazyAndLoad();
				}
				this.#syncDirection(locale);
				this.#publish();
			}
			#resetLazyAndLoad() {
				const localeSnapshot = resolveProviderLocale(this);
				this.#lazyResetStartedForLocale = localeSnapshot;
				this.#lazySeq += 1;
				const seq = this.#lazySeq;
				this.#lazyLayer = {};
				(async () => {
					try {
						const { merged, loadedTags } = await mergeLocaleOverlays(localeSnapshot, loader, findLocaleKeys);
						if (seq !== this.#lazySeq) return;
						if (shouldAttemptBrowserTranslation(localeSnapshot, loadedTags, merged)) {
							const browser = await getBrowserTranslations(localeSnapshot);
							if (seq !== this.#lazySeq) return;
							if (Object.keys(browser).length) registerI18n(localeSnapshot, browser);
						}
						if (seq !== this.#lazySeq) return;
						this.#lazyLayer = merged;
						this.requestUpdate();
					} catch {}
				})();
			}
			#resolvedLocale() {
				return resolveProviderLocale(this);
			}
			#syncDirection(locale) {
				const current = this.dir.trim().toLowerCase();
				const isDerived = this.#derivedDirection !== void 0 && current === this.#derivedDirection;
				if (!this.lang.trim()) {
					if (isDerived) this.dir = "";
					this.#derivedDirection = void 0;
					return;
				}
				if (current && !isDerived) {
					this.#derivedDirection = void 0;
					return;
				}
				const direction = getTextDirection(locale);
				this.#derivedDirection = direction;
				if (this.dir !== direction) this.dir = direction;
			}
			#publish() {
				const locale = this.#resolvedLocale();
				if (this.#publishedLocale === locale && this.#publishedRegistryEpoch === this.#registryEpoch && this.#publishedLazyLayer === this.#lazyLayer) return;
				const registryLayer = getI18nTranslations(locale);
				const translator = createTranslator({
					...this.#lazyLayer,
					...registryLayer
				}, locale);
				this.#i18nValue = {
					translator,
					locale
				};
				this.#publishedLocale = locale;
				this.#publishedRegistryEpoch = this.#registryEpoch;
				this.#publishedLazyLayer = this.#lazyLayer;
				this.#i18nProvider.setValue(this.#i18nValue);
			}
		}
		return I18nProviderElement;
	};
}
//#endregion
//#region node_modules/@videojs/html/dist/default/i18n/provider-element.js
/** @internal */
const I18nProviderMixin = createI18nProviderMixin({ context: i18nContext });
var I18nProviderElement = class extends I18nProviderMixin(ReactiveElement) {
	static {
		this.tagName = "media-i18n";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/i18n/text-mixin.js
function createTextMixin({ context }) {
	return (Base) => {
		class MediaText extends Base {
			constructor(..._args) {
				super(..._args);
				this.#i18n = new I18nController(this, context);
				this.token = "";
			}
			static {
				this.properties = { token: { type: String } };
			}
			#i18n;
			#text;
			connectedCallback() {
				this.#text ??= this.textContent?.trim() ?? "";
				super.connectedCallback();
			}
			updated(changed) {
				super.updated(changed);
				if (!this.#text) {
					this.textContent = "";
					return;
				}
				const text = this.token ? {
					key: this.token,
					text: this.#text
				} : this.#text;
				this.textContent = typeof text === "string" ? text : translateText(text, this.#i18n.value);
			}
		}
		return MediaText;
	};
}
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/text/element.js
/** @internal */
const I18nTextMixin = createTextMixin({ context: i18nContext });
var TextElement = class extends I18nTextMixin(ReactiveElement) {
	static {
		this.tagName = "media-text";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/i18n.js
safeDefine(I18nProviderElement);
safeDefine(TextElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/element/base.js
const HTMLElementBase = globalThis.HTMLElement ?? class {};
/** Renders registered SVG icon families in the light DOM. */
var MediaIconElement = class MediaIconElement extends HTMLElementBase {
	static #families = /* @__PURE__ */ new Map();
	static #loaders = /* @__PURE__ */ new Map();
	static #loading = /* @__PURE__ */ new Map();
	static #instances = /* @__PURE__ */ new Set();
	static register(family, icons) {
		const familyIcons = MediaIconElement.#families.get(family) ?? /* @__PURE__ */ new Map();
		for (const [name, svg] of Object.entries(icons)) familyIcons.set(name, svg);
		MediaIconElement.#families.set(family, familyIcons);
		for (const icon of MediaIconElement.#instances) if (icon.#family === family) icon.#render();
	}
	static registerLoader(family, load) {
		MediaIconElement.#loaders.set(family, load);
		for (const icon of MediaIconElement.#instances) if (icon.#family === family) icon.#render();
	}
	static load(family) {
		if (MediaIconElement.#families.has(family)) return Promise.resolve();
		const pending = MediaIconElement.#loading.get(family);
		if (pending) return pending;
		const loader = MediaIconElement.#loaders.get(family);
		if (!loader) return Promise.resolve();
		const loading = Promise.resolve().then(loader).then((icons) => MediaIconElement.register(family, icons)).finally(() => MediaIconElement.#loading.delete(family));
		MediaIconElement.#loading.set(family, loading);
		return loading;
	}
	static get observedAttributes() {
		return ["name", "family"];
	}
	connectedCallback() {
		MediaIconElement.#instances.add(this);
		this.#render();
	}
	disconnectedCallback() {
		MediaIconElement.#instances.delete(this);
	}
	attributeChangedCallback() {
		this.#render();
	}
	get #family() {
		return this.getAttribute("family") || "default";
	}
	#render() {
		if (!this.isConnected) return;
		const name = this.getAttribute("name");
		const family = this.#family;
		const familyIcons = MediaIconElement.#families.get(family);
		const svg = name ? familyIcons?.get(name) : void 0;
		if (svg !== void 0) {
			if (this.innerHTML !== svg) this.innerHTML = svg;
			return;
		}
		this.replaceChildren();
		if (familyIcons || !name || !MediaIconElement.#loaders.has(family)) return;
		MediaIconElement.load(family).then(() => {
			if (this.isConnected && this.getAttribute("name") === name && this.#family === family) this.#render();
		}, () => {});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/element/register/index.js
/** Register an exact set of SVGs for generated source that renders `<media-icon>`. */
function registerIcons(family, icons) {
	const customElementRegistry = globalThis.customElements;
	const registeredElement = customElementRegistry?.get("media-icon");
	if (registeredElement && !supportsIconRegistration(registeredElement)) throw new Error("The registered <media-icon> element does not support icon registration.");
	(registeredElement ?? MediaIconElement).register(family, icons);
	if (customElementRegistry && globalThis.HTMLElement && !registeredElement) customElementRegistry.define("media-icon", MediaIconElement);
}
function supportsIconRegistration(element) {
	return "register" in element && isFunction(element.register);
}
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/airplay-enter.js
const airPlayEnterIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M15.154 2.004A3 3 0 0 1 18 5v6a3 3 0 0 1-2.846 2.996L15 14l-1.5-1.5H15a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 15 3.5H3A1.5 1.5 0 0 0 1.5 5v6A1.5 1.5 0 0 0 3 12.5h1.5L3 14a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12z\"/><path d=\"M8.631 10.902a.5.5 0 0 1 .738 0l4.363 4.76a.5.5 0 0 1-.369.838H4.637a.5.5 0 0 1-.369-.838z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/airplay-exit.js
const airPlayExitIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><style>@keyframes media-icon-airplay-triangle{0%{translate:0 0}to{translate:0-2px}}@keyframes media-icon-airplay-fill{0%{opacity:0}to{opacity:.2}}@media (prefers-reduced-motion:reduce){:root{--media-icon-airplay-fill-animation:none;--media-icon-airplay-triangle-animation:none}}</style><path d=\"M14.5 2A3.5 3.5 0 0 1 18 5.5v5a3.5 3.5 0 0 1-3.032 3.468L9.354 8.354a.5.5 0 0 0-.708 0l-5.615 5.614A3.5 3.5 0 0 1 0 10.5v-5A3.5 3.5 0 0 1 3.5 2z\" style=\"animation:var(--media-icon-airplay-fill-animation, media-icon-airplay-fill 1s ease-in-out infinite alternate)\"/><path d=\"M14.5 2A3.5 3.5 0 0 1 18 5.5v5l-.005.18a3.5 3.5 0 0 1-3.027 3.288L13.5 12.5h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1l-1.468 1.467A3.5 3.5 0 0 1 0 10.5v-5A3.5 3.5 0 0 1 3.5 2z\"/><path d=\"M8.631 10.902a.5.5 0 0 1 .738 0l4.363 4.76a.5.5 0 0 1-.369.838H4.637a.5.5 0 0 1-.369-.838z\" style=\"animation:var(--media-icon-airplay-triangle-animation, media-icon-airplay-triangle 1s ease-in-out infinite alternate)\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/captions-off.js
const captionsOffIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"none\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><rect width=\"16.5\" height=\"12.5\" x=\".75\" y=\"2.75\" stroke=\"currentColor\" stroke-width=\"1.5\" rx=\"3\"/><rect width=\"3\" height=\"1.5\" x=\"3\" y=\"8.5\" fill=\"currentColor\" fill-opacity=\".5\" rx=\".75\"/><rect width=\"2\" height=\"1.5\" x=\"13\" y=\"8.5\" fill=\"currentColor\" fill-opacity=\".5\" rx=\".75\"/><rect width=\"4\" height=\"1.5\" x=\"11\" y=\"11.5\" fill=\"currentColor\" fill-opacity=\".5\" rx=\".75\"/><rect width=\"5\" height=\"1.5\" x=\"7\" y=\"8.5\" fill=\"currentColor\" fill-opacity=\".5\" rx=\".75\"/><rect width=\"7\" height=\"1.5\" x=\"3\" y=\"11.5\" fill=\"currentColor\" fill-opacity=\".5\" rx=\".75\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/captions-on.js
const captionsOnIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M15 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM3.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-8-3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/cast-enter.js
const castEnterIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M15.154 2.004A3 3 0 0 1 18 5v8l-.004.154a3 3 0 0 1-2.842 2.842L15 16H7.5q-.002-.772-.15-1.5H15a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 15 3.5H3A1.5 1.5 0 0 0 1.5 5v3.65A7.5 7.5 0 0 0 0 8.5V5a3 3 0 0 1 3-3h12zM0 12a4 4 0 0 1 4 4H2.5A2.5 2.5 0 0 0 0 13.5z\"/><path d=\"M0 9.5A6.5 6.5 0 0 1 6.5 16H5a5 5 0 0 0-5-5zm0 5A1.5 1.5 0 0 1 1.5 16h-1a.5.5 0 0 1-.5-.5z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/cast-exit.js
const castExitIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M15.154 2.004A3 3 0 0 1 18 5v8l-.004.154a3 3 0 0 1-2.842 2.842L15 16H7.5q-.002-.772-.15-1.5H15a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 15 3.5H3A1.5 1.5 0 0 0 1.5 5v3.65A7.5 7.5 0 0 0 0 8.5V5a3 3 0 0 1 3-3h12z\"/><path d=\"M14 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6.874A7.52 7.52 0 0 0 3 9.126V6a1 1 0 0 1 1-1zM0 12a4 4 0 0 1 4 4H2.5A2.5 2.5 0 0 0 0 13.5z\"/><path d=\"M0 9.5A6.5 6.5 0 0 1 6.5 16H5a5 5 0 0 0-5-5zm0 5A1.5 1.5 0 0 1 1.5 16h-1a.5.5 0 0 1-.5-.5z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/check.js
const checkIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"none\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 10.455 6.5 13 14 5\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/chevron.js
const chevronIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"none\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M11.667 9.014 6.364 3.711m0 10.606 5.303-5.303\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/fullscreen-enter.js
const fullscreenEnterIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M15.25 2a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V3.5h-3.75a.75.75 0 0 1-.743-.648L10 2.75a.75.75 0 0 1 .75-.75z\"/><path d=\"M14.72 2.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06zM2.75 10a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 .743.648L8 15.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75\"/><path d=\"M6.72 10.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/fullscreen-exit.js
const fullscreenExitIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M10.75 2a.75.75 0 0 1 .75.75V6.5h3.75a.75.75 0 0 1 .743.648L16 7.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75\"/><path d=\"M14.72 2.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06zM7.25 10a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V11.5H2.75a.75.75 0 0 1-.743-.648L2 10.75a.75.75 0 0 1 .75-.75z\"/><path d=\"M6.72 10.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/gear.js
const gearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M7.519 2.184c.356-1.579 2.605-1.579 2.962 0a1.52 1.52 0 0 0 2.292.949c1.368-.864 2.958.727 2.094 2.095-.56.886-.073 2.06.95 2.29 1.578.357 1.578 2.607 0 2.964a1.518 1.518 0 0 0-.95 2.29c.864 1.369-.726 2.96-2.094 2.095a1.52 1.52 0 0 0-2.292.95c-.357 1.578-2.606 1.578-2.962 0a1.518 1.518 0 0 0-2.291-.95c-1.368.864-2.959-.726-2.095-2.094.56-.887.074-2.06-.95-2.291-1.578-.357-1.578-2.607 0-2.963a1.518 1.518 0 0 0 .95-2.291c-.864-1.368.727-2.959 2.095-2.095.886.56 2.06.074 2.29-.95M9 5.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/pause.js
const pauseIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><rect width=\"4\" height=\"12\" x=\"3\" y=\"3\" rx=\"1.75\"/><rect width=\"4\" height=\"12\" x=\"11\" y=\"3\" rx=\"1.75\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/pip-enter.js
const pipEnterIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M13 2a4 4 0 0 1 4 4v2.645a3.5 3.5 0 0 0-1-.145h-.5V6A2.5 2.5 0 0 0 13 3.5H4A2.5 2.5 0 0 0 1.5 6v6A2.5 2.5 0 0 0 4 14.5h2.5v.5c0 .347.05.683.145 1H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z\"/><rect width=\"10\" height=\"7\" x=\"8\" y=\"10\" rx=\"2\"/><path d=\"M7.25 10A.75.75 0 0 0 8 9.25v-3.5a.75.75 0 0 0-1.5 0V8.5H3.75a.75.75 0 0 0-.743.648L3 9.25c0 .414.336.75.75.75z\"/><path d=\"M6.72 9.78a.75.75 0 0 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/pip-exit.js
const pipExitIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M13 2a4 4 0 0 1 4 4v2.646a3.5 3.5 0 0 0-1-.146h-.5V6A2.5 2.5 0 0 0 13 3.5H4A2.5 2.5 0 0 0 1.5 6v6A2.5 2.5 0 0 0 4 14.5h2.5v.5q.002.523.146 1H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z\"/><rect width=\"10\" height=\"7\" x=\"8\" y=\"10\" rx=\"2\"/><path d=\"M3.75 5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V6.5h2.75a.75.75 0 0 0 .743-.648L8 5.75A.75.75 0 0 0 7.25 5z\"/><path d=\"M4.28 5.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/play.js
const playIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"m13.473 10.476-6.845 4.256a1.697 1.697 0 0 1-2.364-.547 1.77 1.77 0 0 1-.264-.93v-8.51C4 3.78 4.768 3 5.714 3c.324 0 .64.093.914.268l6.845 4.255a1.763 1.763 0 0 1 0 2.953\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/restart.js
const restartIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M9 17a8 8 0 0 1-8-8h1.5a6.5 6.5 0 1 0 1.43-4.07l1.643 1.643A.25.25 0 0 1 5.396 7H1.25A.25.25 0 0 1 1 6.75V2.604a.25.25 0 0 1 .427-.177l1.438 1.438A8 8 0 1 1 9 17\"/><path d=\"m11.61 9.639-3.331 2.07a.826.826 0 0 1-1.15-.266.86.86 0 0 1-.129-.452V6.849C7 6.38 7.374 6 7.834 6c.158 0 .312.045.445.13l3.331 2.071a.858.858 0 0 1 0 1.438\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/speech.js
const speechIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path fill-opacity=\".2\" stroke=\"currentColor\" stroke-width=\"1.5\" d=\"M6 12.75a4.25 4.25 0 0 1 3.835 2.417c.008.016.005.017.006.009 0-.006.001-.003-.007.009a.2.2 0 0 1-.158.065H2.324a.2.2 0 0 1-.158-.065c-.009-.012-.007-.015-.006-.01 0 .01-.003.008.005-.008a4.25 4.25 0 0 1 3.521-2.405zm0-6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z\"/><path d=\"M14 2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1.333L10.8 8.4A.5.5 0 0 1 10 8V6.73A2 2 0 0 1 9 5V4a2 2 0 0 1 2-2zm-2.75 1.5a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/speed.js
const speedIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M9 18q-.213 0-.424-.012h.85Q9.214 18 9 18M9 2a8 8 0 0 1 8 8c0 1.975-.719 3.78-1.905 5.175a.75.75 0 0 1-1.204.018l-1.509-1.971a.75.75 0 0 1 .596-1.206h2.202a6.5 6.5 0 1 0-12.36 0h2.209a.75.75 0 0 1 .595 1.206l-1.507 1.971a.75.75 0 0 1-1.133.07l-.003.004A8 8 0 0 1 9 2\"/><rect width=\"6\" height=\"1.5\" x=\"6\" y=\"14\" fill-opacity=\".5\" rx=\".75\"/><path d=\"M8.504 5.217c.077-.578.915-.578.992 0l.399 2.996A1.998 1.998 0 0 1 9 12a2 2 0 0 1-.896-3.787z\"/><g fill-opacity=\".5\"><circle cx=\"4.75\" cy=\"9.75\" r=\".75\"/><circle cx=\"13.25\" cy=\"9.75\" r=\".75\"/><circle cx=\"6\" cy=\"6.75\" r=\".75\"/><circle cx=\"12\" cy=\"6.75\" r=\".75\"/></g></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/spinner.js
const spinnerIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><style>@keyframes media-spinner-fade{0%{opacity:1}to{opacity:0}}.media-spinner__segment{animation:var(--media-spinner-animation, media-spinner-fade 1s steps(8, end) infinite);animation-delay:var(--media-spinner-delay)}@media (prefers-reduced-motion:reduce){.media-spinner__segment{animation:none}}</style><path d=\"M9 1.5v3\" class=\"media-spinner__segment\" opacity=\".5\" style=\"--media-spinner-delay:0s\"/><path d=\"m14.5 3.5-2 2\" class=\"media-spinner__segment\" opacity=\".45\" style=\"--media-spinner-delay:0.125s\"/><path d=\"M16.5 9h-3\" class=\"media-spinner__segment\" opacity=\".4\" style=\"--media-spinner-delay:0.25s\"/><path d=\"m14.5 14.5-2-2\" class=\"media-spinner__segment\" opacity=\".35\" style=\"--media-spinner-delay:0.375s\"/><path d=\"M9 16.5v-3\" class=\"media-spinner__segment\" opacity=\".3\" style=\"--media-spinner-delay:0.5s\"/><path d=\"m3.5 14.5 2-2\" class=\"media-spinner__segment\" opacity=\".25\" style=\"--media-spinner-delay:0.625s\"/><path d=\"M1.5 9h3\" class=\"media-spinner__segment\" opacity=\".15\" style=\"--media-spinner-delay:0.75s\"/><path d=\"m3.5 3.5 2 2\" class=\"media-spinner__segment\" opacity=\".1\" style=\"--media-spinner-delay:0.875s\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/switches.js
const switchesIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M12.5 9.5a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7zm-2 1.5a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4z\"/><path fill-opacity=\".5\" d=\"M12.5 1.5a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7zM5.5 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/volume-high.js
const volumeHighIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M15.6 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4C15.4 5.9 16 7.4 16 9s-.6 3.1-1.8 4.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7\"/><path d=\"M.714 6.008h3.072l4.071-3.857c.5-.376 1.143 0 1.143.601V15.28c0 .602-.643.903-1.143.602l-4.071-3.858H.714c-.428 0-.714-.3-.714-.752V6.76c0-.451.286-.752.714-.752m10.568.59a.91.91 0 0 1 0-1.316.91.91 0 0 1 1.316 0c1.203 1.203 1.47 2.216 1.522 3.208q.012.255.011.51c0 1.16-.358 2.733-1.533 3.803a.7.7 0 0 1-.298.156c-.382.106-.873-.011-1.018-.156a.91.91 0 0 1 0-1.316c.57-.57.995-1.551.995-2.487 0-.944-.26-1.667-.995-2.402\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/volume-low.js
const volumeLowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M.714 6.008h3.072l4.071-3.857c.5-.376 1.143 0 1.143.601V15.28c0 .602-.643.903-1.143.602l-4.071-3.858H.714c-.428 0-.714-.3-.714-.752V6.76c0-.451.286-.752.714-.752m10.568.59a.91.91 0 0 1 0-1.316.91.91 0 0 1 1.316 0c1.203 1.203 1.47 2.216 1.522 3.208q.012.255.011.51c0 1.16-.358 2.733-1.533 3.803a.7.7 0 0 1-.298.156c-.382.106-.873-.011-1.018-.156a.91.91 0 0 1 0-1.316c.57-.57.995-1.551.995-2.487 0-.944-.26-1.667-.995-2.402\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/volume-off.js
const volumeOffIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M.714 6.008h3.072l4.071-3.857c.5-.376 1.143 0 1.143.601V15.28c0 .602-.643.903-1.143.602l-4.071-3.858H.714c-.428 0-.714-.3-.714-.752V6.76c0-.451.286-.752.714-.752M14.5 7.586l-1.768-1.768a1 1 0 1 0-1.414 1.414L13.085 9l-1.767 1.768a1 1 0 0 0 1.414 1.414l1.768-1.768 1.768 1.768a1 1 0 0 0 1.414-1.414L15.914 9l1.768-1.768a1 1 0 0 0-1.414-1.414z\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/player/popup-group-context.js
const popupGroupContext = n(Symbol.for("@videojs/popup-group"));
//#endregion
//#region node_modules/@videojs/core/dist/default/i18n/text/container.js
const labelText = {
	key: `container.label`,
	text: "Media player"
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/container/element.js
/**
* The visual, interactive player boundary.
*
* A container registers itself with its closest player and provides popup coordination to the controls it contains.
*/
var ContainerElement = class extends UIElement {
	static {
		this.tagName = "media-container";
	}
	#releaseContainer = null;
	#disconnect = null;
	#label = null;
	#core = new ContainerCore();
	#controls = new PlayerController(this, playerContext, selectControls);
	#i18n = new I18nController(this, i18nContext);
	#popupGroup = createPopupGroup();
	#popupGroupProvider = new i(this, {
		context: popupGroupContext,
		initialValue: this.#popupGroup
	});
	#container = new s$1(this, {
		context: containerContext,
		callback: (value) => this.#register(value)
	});
	connectedCallback() {
		super.connectedCallback();
		this.#popupGroupProvider.setValue(this.#popupGroup);
		this.#register(this.#container.value);
		applyContainerAttrs(this);
		this.#applyLabel();
		this.#disconnect = new AbortController();
		listen(this, "pointerup", this.#onPointerUp, { signal: this.#disconnect.signal });
	}
	disconnectedCallback() {
		this.#releaseContainer?.();
		this.#releaseContainer = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
		super.disconnectedCallback();
	}
	update(changed) {
		super.update(changed);
		this.#applyLabel();
		const controls = this.#controls.value;
		if (controls) {
			this.#core.setMedia(controls);
			applyStateDataAttrs(this, this.#core.getState(), ContainerDataAttrs);
		} else this.removeAttribute(ContainerDataAttrs.controlsVisible);
	}
	#register(value) {
		this.#releaseContainer?.();
		this.#releaseContainer = null;
		if (this.isConnected && value) this.#releaseContainer = value.registerContainer(this);
	}
	#applyLabel() {
		const current = this.getAttribute("aria-label");
		if (current && current !== this.#label) return;
		if (this.hasAttribute("aria-labelledby")) {
			if (current === this.#label) {
				this.removeAttribute("aria-label");
				this.#label = null;
			}
			return;
		}
		const label = this.#i18n.value(labelText);
		this.setAttribute("aria-label", label);
		this.#label = label;
	}
	#onPointerUp = () => {
		focusContainer(this);
	};
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/container.js
safeDefine(ContainerElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/poster/element.js
const SHADOW_CSS$1 = `\
:host {
  display: block;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: var(--media-object-fit, contain);
  object-position: var(--media-object-position, center);
}
img:not([src]) {
  visibility: hidden;
}`;
/**
* Whether anything already points this image somewhere, which answers both whether the author owns the source and
* whether there is a download to wait for. A `<source>` counts: inside a `<picture>` it can win over the `src`.
*/
function hasSource(img) {
	if (img.hasAttribute("src") || img.hasAttribute("srcset")) return true;
	const parent = img.parentElement;
	return parent?.localName === "picture" && parent.querySelector("source") !== null;
}
/**
* Whether `complete` on this image describes a request. It is also true for one that omits both `src` and `srcset`,
* whatever a parent `<picture>` is fetching on its behalf, so only an image sourced from its own attributes can be
* read.
*/
function hasOwnSource(img) {
	return !!img.getAttribute("src") || img.hasAttribute("srcset");
}
/**
* The image the element draws when none is supplied, reachable from outside as `::part(image)`. Decorative by default,
* like the one each skin carries: a resolved URL says nothing about what it depicts.
*/
function createFallbackImage$1() {
	const img = document.createElement("img");
	img.alt = "";
	img.setAttribute("part", "image");
	img.setAttribute("decoding", "async");
	return img;
}
/**
* `<media-poster>` — sets `src` on a poster image it does not own.
*
* The image is a child, as in `<picture>`, but sourcing runs the other way around: `<picture>` treats the `src` on its
* `<img>` as the fallback, while here an image with no source of its own is the one this element fills in. Give the
* child a `src`, a `srcset`, or `<source>` candidates and it is yours, left alone.
*
* Left empty, the element draws an image of its own in its shadow root. Supply one as a child to describe it or wrap
* it: `<media-poster><img alt="Keynote speaker"></media-poster>`. Inside a skin, an `<img slot="poster">` of yours
* replaces the one the skin carries.
*/
var PosterElement = class extends UIElement {
	static {
		this.tagName = "media-poster";
	}
	#core = new PosterCore();
	#shadow = this.attachShadow({ mode: "open" });
	#fallback = createFallbackImage$1();
	#children = new MutationObserver(() => this.requestUpdate());
	#playback = new PlayerController(this, playerContext, selectPlayback);
	#metadata = new PlayerController(this, playerContext, selectMetadata);
	#image = null;
	/** Whether `#image` had no source of its own when it became active. */
	#owned = false;
	#imageLoadState = "pending";
	#imageEvents = null;
	#disconnect = null;
	constructor() {
		super();
		const style = document.createElement("style");
		style.textContent = SHADOW_CSS$1;
		this.#shadow.append(style, document.createElement("slot"), this.#fallback);
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#disconnect = new AbortController();
		const { signal } = this.#disconnect;
		this.addEventListener("slotchange", () => this.requestUpdate(), { signal });
		this.#children.observe(this, {
			childList: true,
			subtree: true
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#adopt(null);
		this.#children.disconnect();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	get #loadState() {
		if (!this.#image || !hasSource(this.#image)) return "none";
		return this.#imageLoadState === "pending" ? "loading" : this.#imageLoadState;
	}
	update(changed) {
		super.update(changed);
		const playback = this.#playback.value;
		if (!playback) return;
		this.#core.setMedia({
			started: playback.started,
			poster: this.#metadata.value?.poster ?? ""
		});
		const { src } = this.#core.getState();
		this.#adopt(findComposedElement(this, isHTMLImageElement) ?? this.#fallback);
		this.#applySource(src);
		this.#core.setImageLoadState(this.#loadState);
		applyStateDataAttrs(this, this.#core.getState(), PosterDataAttrs);
	}
	/**
	* Ownership is settled once, when an image becomes active: after the first fill the `src` we set would itself look
	* authored. Re-slot an image with a source to hand it back, the way React decides a field is controlled at mount.
	*/
	#adopt(next) {
		if (next === this.#image) return;
		if (this.#owned) this.#image?.removeAttribute("src");
		this.#imageEvents?.abort();
		this.#imageEvents = null;
		this.#image = next;
		this.#owned = next !== null && !hasSource(next);
		this.#imageLoadState = "pending";
		if (next === this.#fallback) this.#shadow.append(this.#fallback);
		else if (next) this.#fallback.remove();
		if (!next) return;
		if (next.naturalWidth > 0) this.#imageLoadState = "loaded";
		else if (next.complete && hasOwnSource(next)) this.#imageLoadState = "error";
		this.#imageEvents = new AbortController();
		const { signal } = this.#imageEvents;
		const settle = (loadState) => () => {
			this.#imageLoadState = loadState;
			this.requestUpdate();
		};
		next.addEventListener("load", settle("loaded"), { signal });
		next.addEventListener("error", settle("error"), { signal });
	}
	#applySource(src) {
		const img = this.#image;
		if (!img || !this.#owned) return;
		if (!src) {
			this.#imageLoadState = "pending";
			img.removeAttribute("src");
		} else if (img.getAttribute("src") !== src) {
			this.#imageLoadState = "pending";
			img.setAttribute("src", src);
		}
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/poster.js
safeDefine(PosterElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/buffering-indicator/element.js
var BufferingIndicatorElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.delay = BufferingIndicatorCore.defaultProps.delay;
		this.#core = new BufferingIndicatorCore();
		this.#state = new PlayerController(this, playerContext, selectPlayback);
		this.#disconnect = null;
	}
	static {
		this.tagName = "media-buffering-indicator";
	}
	static {
		this.properties = { delay: { type: Number } };
	}
	#core;
	#state;
	#disconnect;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#disconnect = new AbortController();
		this.#core.state.subscribe(() => this.requestUpdate(), { signal: this.#disconnect.signal });
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	destroyCallback() {
		this.#core.destroy();
		super.destroyCallback();
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		this.#core.setProps(this);
	}
	update(changed) {
		super.update(changed);
		const media = this.#state.value;
		if (!media) return;
		this.#core.update(media);
		applyStateDataAttrs(this, this.#core.state.current, BufferingIndicatorDataAttrs);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/buffering-indicator.js
safeDefine(BufferingIndicatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/dialog/context.js
/** @internal */
const dialogContext = n(Symbol("@videojs/dialog"));
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/error-dialog/element.js
let idCounter$1 = 0;
function hasAuthoredContent$1(host) {
	return Array.from(host.childNodes).some((node) => !!node.textContent?.trim());
}
var ErrorDialogElement = class extends UIElement {
	static {
		this.tagName = "media-error-dialog";
	}
	#core = new ErrorDialogCore();
	#provider = new i(this, { context: dialogContext });
	#popupId = `vjs-error-dialog-popup-${idCounter$1++}`;
	#titleId = `vjs-error-dialog-title-${idCounter$1++}`;
	#descriptionId = `vjs-error-dialog-desc-${idCounter$1++}`;
	#errorState = new PlayerController(this, playerContext, selectError);
	#i18n = new I18nController(this, i18nContext);
	#container = new s$1(this, {
		context: containerContext,
		subscribe: true
	});
	#dialog = null;
	#snapshot = null;
	#modalitySnapshot = null;
	#lastError = null;
	#lastDescription = null;
	#seenCopyParts = /* @__PURE__ */ new WeakSet();
	#authoredCopyParts = /* @__PURE__ */ new WeakSet();
	constructor() {
		super();
		this.#core.setTitleId(this.#titleId);
		this.#core.setDescriptionId(this.#descriptionId);
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#dialog = createDialog({
			transition: createTransition(),
			onOpenChange: (nextOpen) => {
				if (!nextOpen) this.#errorState.value?.dismissError();
			}
		});
		if (this.#snapshot) this.#snapshot.track(this.#dialog.input);
		else this.#snapshot = new SnapshotController(this, this.#dialog.input);
		if (this.#modalitySnapshot) this.#modalitySnapshot.track(this.#dialog.modality);
		else this.#modalitySnapshot = new SnapshotController(this, this.#dialog.modality);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#dialog?.destroy();
		this.#dialog = null;
	}
	willUpdate(_changed) {
		super.willUpdate(_changed);
		if (!this.#dialog) return;
		this.#dialog.setInteractionRoot(this.#container.value?.container ?? null);
		const errorState = this.#errorState.value;
		const hasError = Boolean(errorState?.error);
		const { active: isOpen } = this.#dialog.input.current;
		if (errorState?.error) this.#lastError = errorState.error;
		const errorForCopy = errorState?.error ?? (isOpen ? this.#lastError : null);
		this.#syncDialogCopy(errorForCopy);
		if (!hasError && !isOpen) {
			this.#lastError = null;
			this.#lastDescription = null;
		}
		if (hasError && !isOpen) this.#dialog.open();
		else if (!hasError && isOpen) this.#dialog.close();
	}
	update(_changed) {
		super.update(_changed);
		if (!this.#dialog) return;
		const input = this.#dialog.input.current;
		this.#core.setInput(input);
		this.#core.setDocumentModal(this.#dialog.modality.current.documentModal);
		const state = this.#core.getState();
		applyStateDataAttrs(this, state, ErrorDialogDataAttrs);
		this.#provider.setValue({
			state,
			stateAttrMap: ErrorDialogDataAttrs,
			dialog: this.#dialog,
			popupId: this.#popupId,
			popupAttrs: this.#core.getPopupAttrs(state),
			close: () => this.#dialog?.close()
		});
	}
	#syncDialogCopy(error) {
		const t = this.#i18n.value;
		const title = this.querySelector("media-dialog-title");
		if (title && !this.#hasAuthoredCopy(title)) title.textContent = translateText(getErrorDialogTitleText(), t);
		const desc = this.querySelector("media-dialog-description");
		if (desc && !this.#hasAuthoredCopy(desc)) {
			const description = error ? resolveErrorDialogDescription(error) : null;
			if (description) this.#lastDescription = description;
			const copy = description ?? this.#lastDescription;
			desc.textContent = copy ? translateText(copy, t) : translateText(getErrorDialogUnexpectedText(), t);
		}
		const close = this.querySelector("media-dialog-close");
		if (close && !this.#hasAuthoredCopy(close)) close.textContent = translateText(getErrorDialogDismissText(), t);
	}
	#hasAuthoredCopy(el) {
		if (!this.#seenCopyParts.has(el)) {
			this.#seenCopyParts.add(el);
			if (hasAuthoredContent$1(el)) this.#authoredCopyParts.add(el);
		}
		return this.#authoredCopyParts.has(el);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/error-dialog.js
safeDefine(ErrorDialogElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/context-part-element.js
/**
* Abstract base for compound-component part elements that consume a parent context and apply data attributes from
* `ctx.state` + `ctx.stateAttrMap`.
*
* Subclasses only need to declare the `consumer` property:
*
* ```ts
* export class SliderTrackElement extends ContextPartElement<SliderState> {
*   static readonly tagName = 'media-slider-track';
*   protected readonly consumer = new ContextConsumer(this, { context: sliderContext, subscribe: true });
* }
* ```
*/
var ContextPartElement = class extends UIElement {
	connectedCallback() {
		super.connectedCallback();
		this.#applyState();
	}
	update(_changed) {
		super.update(_changed);
		this.#applyState();
	}
	#applyState() {
		const ctx = this.consumer.value;
		if (ctx) applyStateDataAttrs(this, ctx.state, ctx.stateAttrMap);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/dialog/backdrop.js
/** Presentational backdrop that reflects its owning dialog's state. */
var DialogBackdropElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: dialogContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-dialog-backdrop";
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("role", "presentation");
		this.setAttribute("aria-hidden", "true");
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/dialog-backdrop.js
safeDefine(DialogBackdropElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/dialog/popup.js
/** Semantic popup that owns focus management and dialog transition completion. */
var DialogPopupElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: dialogContext,
			subscribe: true
		});
		this.#dialog = null;
	}
	static {
		this.tagName = "media-dialog-popup";
	}
	#dialog;
	disconnectedCallback() {
		this.#dialog?.setPopupElement(null);
		this.#dialog = null;
		super.disconnectedCallback();
	}
	update(changed) {
		super.update(changed);
		const ctx = this.consumer.value;
		if (!ctx) return;
		if (this.#dialog !== ctx.dialog) {
			this.#dialog?.setPopupElement(null);
			this.#dialog = ctx.dialog;
			this.#dialog.setPopupElement(this);
		}
		applyElementProps(this, {
			id: ctx.popupId,
			tabIndex: -1,
			...ctx.popupAttrs
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/dialog-popup.js
safeDefine(DialogPopupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/dialog/title.js
/** Text that labels its owning dialog. The element takes the `id` that the popup's `aria-labelledby` points to. */
var DialogTitleElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: dialogContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-dialog-title";
	}
	update(changed) {
		super.update(changed);
		const titleId = this.consumer.value?.state.titleId;
		if (titleId) this.id = titleId;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/dialog-title.js
safeDefine(DialogTitleElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/dialog/description.js
/**
* Text announced as its owning dialog's description. The element takes the `id` that the popup's `aria-describedby`
* points to.
*/
var DialogDescriptionElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: dialogContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-dialog-description";
	}
	update(changed) {
		super.update(changed);
		const descriptionId = this.consumer.value?.state.descriptionId;
		if (descriptionId) this.id = descriptionId;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/dialog-description.js
safeDefine(DialogDescriptionElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/dialog/close.js
/** Button that closes its owning dialog; the element itself takes `role="button"` and keyboard focus. */
var DialogCloseElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.#ctx = new s$1(this, {
			context: dialogContext,
			subscribe: true
		});
		this.#disconnect = null;
	}
	static {
		this.tagName = "media-dialog-close";
	}
	static {
		this.properties = { disabled: { type: Boolean } };
	}
	#ctx;
	#disconnect;
	connectedCallback() {
		super.connectedCallback();
		this.#disconnect = new AbortController();
		const buttonProps = createButton({
			onActivate: () => this.#ctx.value?.close(),
			isDisabled: () => this.disabled
		});
		applyElementProps(this, buttonProps, { signal: this.#disconnect.signal });
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	update(_changed) {
		super.update(_changed);
		const ctx = this.#ctx.value;
		if (ctx) applyStateDataAttrs(this, ctx.state, ctx.stateAttrMap);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/dialog-close.js
safeDefine(DialogCloseElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/title/element.js
/**
* Displays the resolved content title.
*
* The element owns its text content. Set the title through the player's `content-title` attribute.
*/
var TitleElement = class extends UIElement {
	static {
		this.tagName = "media-title";
	}
	#core = new TitleCore();
	#metadataState = new PlayerController(this, playerContext, selectMetadata);
	#controlsState = new PlayerController(this, playerContext, selectControls);
	connectedCallback() {
		super.connectedCallback();
	}
	update(changed) {
		super.update(changed);
		const metadata = this.#metadataState.value;
		if (!metadata) return;
		const state = this.#core.getState(metadata, this.#controlsState.value);
		if (this.textContent !== state.title) this.textContent = state.title;
		this.hidden = state.hidden;
		applyStateDataAttrs(this, state, TitleDataAttrs);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/title.js
safeDefine(TitleElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/controls/context.js
const controlsContext = n(Symbol("@videojs/controls"));
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/controls/element.js
/**
* Tracks controls visibility, reflects it as data attributes, and shares it with its descendant controls parts. Hiding
* the controls closes any popup open inside it.
*/
var ControlsElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.visibility = ControlsCore.defaultProps.visibility;
		this.#core = new ControlsCore();
		this.#mediaState = new PlayerController(this, playerContext, selectControls);
		this.#provider = new i(this, { context: controlsContext });
		this.#visible = true;
	}
	static {
		this.tagName = "media-controls";
	}
	static {
		this.properties = { visibility: { type: String } };
	}
	#core;
	#mediaState;
	#provider;
	#visible;
	connectedCallback() {
		super.connectedCallback();
	}
	update(_changed) {
		super.update(_changed);
		this.#core.setProps({ visibility: this.visibility });
		this.#core.setMedia(this.#mediaState.value ?? null);
		const state = this.#core.getState();
		if (!state) return;
		applyStateDataAttrs(this, state, ControlsDataAttrs);
		this.#provider.setValue({
			state,
			stateAttrMap: ControlsDataAttrs
		});
		const wasVisible = this.#visible;
		this.#visible = state.visible;
		if (wasVisible && !state.visible) this.#closeOwnedOverlays();
	}
	#closeOwnedOverlays() {
		for (const element of this.querySelectorAll(POPUP_HOST_SELECTOR)) {
			const host = element;
			if (!isFunction(host.close)) continue;
			host.close("imperative-action");
		}
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/controls.js
safeDefine(ControlsElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/controls/backdrop.js
/** Presentational backdrop that reflects its owning controls surface's state. */
var ControlsBackdropElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: controlsContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-controls-backdrop";
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("role", "presentation");
		this.setAttribute("aria-hidden", "true");
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/controls-backdrop.js
safeDefine(ControlsBackdropElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/controls/content.js
/** Interactive surface that reflects its owning controls state. */
var ControlsContentElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: controlsContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-controls-content";
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("data-interactive", "");
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/controls-content.js
safeDefine(ControlsContentElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/tooltip/context.js
/** @internal */
const tooltipGroupContext = n(Symbol("@videojs/tooltip-group"));
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/tooltip/group.js
var TooltipGroupElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.delay = TooltipGroupCore.defaultProps.delay;
		this.closeDelay = TooltipGroupCore.defaultProps.closeDelay;
		this.timeout = TooltipGroupCore.defaultProps.timeout;
		this.#core = new TooltipGroupCore();
		this.#provider = new i(this, {
			context: tooltipGroupContext,
			initialValue: this.#core
		});
	}
	static {
		this.tagName = "media-tooltip-group";
	}
	static {
		this.properties = {
			delay: { type: Number },
			closeDelay: {
				type: Number,
				attribute: "close-delay"
			},
			timeout: { type: Number }
		};
	}
	#core;
	#provider;
	update(_changed) {
		super.update(_changed);
		this.#core.setProps(this);
		this.#provider.setValue(this.#core);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/tooltip-group.js
safeDefine(TooltipGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/controls/group.js
var ControlsGroupElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: controlsContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-controls-group";
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.hasAttribute("aria-label") || this.hasAttribute("aria-labelledby")) this.setAttribute("role", "group");
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/controls-group.js
safeDefine(ControlsGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/hotkey/aria-key-shortcuts-controller.js
/** Provides hotkey shortcut metadata for a given hotkey action name. */
var AriaKeyShortcutsController = class {
	#host;
	#action;
	#getValue;
	#container;
	#unsubscribe = null;
	/**
	* @param host - Host element whose nearest player container supplies hotkey registrations.
	* @param action - Registered hotkey action to look up.
	* @param options - Optional value resolver for value-dependent shortcuts.
	*/
	constructor(host, action, options = {}) {
		this.#host = host;
		this.#action = action;
		this.#getValue = options.value;
		this.#container = new s$1(host, {
			context: containerContext,
			callback: (ctx) => this.#connect(ctx?.container),
			subscribe: true
		});
		host.addController(this);
	}
	get value() {
		return this.aria;
	}
	get aria() {
		return this.details.aria;
	}
	get shortcut() {
		return this.details.shortcut;
	}
	get details() {
		const container = this.#container.value?.container;
		if (!container) return {};
		return getHotkeyCoordinator(container).getShortcut(this.#action, this.#getValue?.());
	}
	hostConnected() {
		this.#connect(this.#container.value?.container);
	}
	hostDisconnected() {
		this.#disconnect();
	}
	#connect(container) {
		this.#disconnect();
		if (!container) return;
		const coordinator = getHotkeyCoordinator(container);
		const notify = () => {
			this.#host.requestUpdate();
		};
		this.#unsubscribe = coordinator.subscribeShortcutChanges(notify);
		notify();
	}
	#disconnect() {
		this.#unsubscribe?.();
		this.#unsubscribe = null;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/media-button-element.js
/**
* Abstract base for HTML custom elements that render a media-control button. `ComponentState` is the state the button
* reflects to data attributes, and `MediaState` is the player state it reads and acts on. Pass both: a subclass that
* omits them still compiles, but types `activate(state)` and `mediaState` as the `ButtonState` and `object` defaults.
*/
var MediaButtonElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.label = "";
		this.hotkeyAction = void 0;
		this.#disconnect = null;
		this.#hotkeyRegistry = null;
		this.#i18n = new I18nController(this, i18nContext);
	}
	static {
		this.properties = {
			label: { type: String },
			disabled: { type: Boolean }
		};
	}
	getIsButtonDisabled() {
		return this.disabled || !this.mediaState.value;
	}
	handleActivate(event, source) {
		Promise.resolve(this.activate(this.mediaState.value, event, source)).catch((error) => {});
	}
	/** Override to match hotkeys that use action values, such as seek steps. */
	get hotkeyValue() {}
	get $state() {
		return this.core.state;
	}
	#disconnect;
	#hotkeyRegistry;
	#lastHotkeyShortcut;
	#i18n;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		if (this.hotkeyAction && !this.#hotkeyRegistry) this.#hotkeyRegistry = new AriaKeyShortcutsController(this, this.hotkeyAction, { value: () => this.hotkeyValue });
		this.#disconnect = new AbortController();
		const buttonProps = createButton({
			onActivate: (event, source) => this.handleActivate(event, source),
			isDisabled: () => this.getIsButtonDisabled()
		});
		applyElementProps(this, buttonProps, { signal: this.#disconnect.signal });
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	/** Returns the button's current label derived from media state. */
	getLabel() {
		return this.core.state.current.label ? resolveText(this.core.state.current.label) : void 0;
	}
	getShortcut() {
		return this.#hotkeyRegistry?.shortcut;
	}
	/** Resolved label for tooltips and other display surfaces. */
	getResolvedLabel() {
		const media = this.mediaState.value;
		if (!media) return void 0;
		this.core.setMedia(media);
		const state = this.core.getState();
		return translateText(this.core.getLabel(state), this.#i18n.value, this.core.getLabelParams?.(state));
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		this.core.setProps?.(this);
	}
	update(changed) {
		super.update(changed);
		const media = this.mediaState.value;
		this.#syncHotkeyShortcut();
		if (!media) return;
		this.core.setMedia(media);
		const state = this.core.getState();
		const attrs = this.core.getAttrs?.(state) ?? {};
		if (isText(attrs["aria-label"])) attrs["aria-label"] = translateText(attrs["aria-label"], this.#i18n.value, this.core.getLabelParams?.(state));
		applyElementProps(this, {
			...attrs,
			"aria-keyshortcuts": this.#hotkeyRegistry?.aria,
			...isHideable(state) && { hidden: state.hidden ? "" : void 0 }
		});
		applyStateDataAttrs(this, state, this.stateAttrMap);
	}
	#syncHotkeyShortcut() {
		const shortcut = this.getShortcut();
		if (shortcut === this.#lastHotkeyShortcut) return;
		this.#lastHotkeyShortcut = shortcut;
		this.dispatchEvent(new CustomEvent(HOTKEY_SHORTCUT_CHANGE_EVENT));
	}
};
/** Whether a button's core reports whether it should be shown at all. */
function isHideable(state) {
	return isObject(state) && isBoolean(state.hidden);
}
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/airplay-button/element.js
var AirPlayButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.core = new AirPlayButtonCore();
		this.stateAttrMap = AirPlayButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectRemotePlayback);
	}
	static {
		this.tagName = "media-airplay-button";
	}
	activate(state) {
		return this.core.toggle(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/airplay-button.js
safeDefine(AirPlayButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/position-controller.js
let popupId = 0;
/** Connects a popup element to the shared positioning lifecycle. */
var PositionController = class {
	#host;
	#positioner = new PopupPositioner();
	#implicitBinding = null;
	constructor(host) {
		this.#host = host;
		host.addController(this);
	}
	/** Discover an explicit trigger by ID or one linked via `commandfor`. */
	findTrigger(trigger) {
		const root = this.#host.getRootNode();
		if (root.nodeType !== Node.DOCUMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
			this.#releaseImplicitBinding();
			return null;
		}
		const scopedRoot = root;
		if (trigger) {
			this.#releaseImplicitBinding();
			return scopedRoot.getElementById(trigger);
		}
		if (this.#implicitBinding) {
			const { id, trigger: boundTrigger } = this.#implicitBinding;
			if (this.#host.id === id && boundTrigger.getAttribute("commandfor") === id && this.#host.previousElementSibling === boundTrigger) return boundTrigger;
			this.#releaseImplicitBinding();
		}
		if (this.#host.id) return scopedRoot.querySelector(`[commandfor="${this.#host.id}"]`);
		const adjacent = this.#host.previousElementSibling;
		if (!(adjacent instanceof HTMLElement)) return null;
		if (adjacent.getAttribute("commandfor")) return null;
		const id = nextPopupId(scopedRoot);
		this.#host.id = id;
		adjacent.setAttribute("commandfor", id);
		this.#implicitBinding = {
			id,
			trigger: adjacent
		};
		return adjacent;
	}
	sync(options) {
		this.#positioner.sync({
			...options,
			popup: this.#host
		});
	}
	cleanup() {
		this.#positioner.cleanup();
	}
	hostDisconnected() {
		this.cleanup();
		this.#releaseImplicitBinding();
	}
	hostDestroyed() {
		this.cleanup();
		this.#releaseImplicitBinding();
	}
	#releaseImplicitBinding() {
		const binding = this.#implicitBinding;
		if (!binding) return;
		if (binding.trigger.getAttribute("commandfor") === binding.id) binding.trigger.removeAttribute("commandfor");
		if (this.#host.id === binding.id) this.#host.removeAttribute("id");
		this.#implicitBinding = null;
	}
};
function nextPopupId(root) {
	let id;
	do
		id = `vjs-popup-${++popupId}`;
	while (root.getElementById(id));
	return id;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/tooltip/label.js
function hasAuthoredContent(host) {
	return Array.from(host.childNodes).some((node) => !!node.textContent?.trim());
}
/** Label region inside `media-tooltip`; parent syncs text from the trigger when linked to a media button. */
var TooltipLabelElement = class TooltipLabelElement extends UIElement {
	static {
		this.tagName = "media-tooltip-label";
	}
	#hasAuthoredContent = false;
	static findIn(host) {
		return host.querySelector(TooltipLabelElement.tagName);
	}
	static create() {
		return document.createElement(TooltipLabelElement.tagName);
	}
	connectedCallback() {
		this.#hasAuthoredContent ||= hasAuthoredContent(this);
		super.connectedCallback();
	}
	setSyncedText(text) {
		if (this.#hasAuthoredContent) return;
		this.textContent = text;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/tooltip/shortcut.js
/**
* Shortcut hint inside `media-tooltip`. CSS skins: `class="media-tooltip__kbd"`; Tailwind skins: `class` from
* `popup.tooltipShortcut`.
*/
var TooltipShortcutElement = class TooltipShortcutElement extends UIElement {
	static {
		this.tagName = "media-tooltip-shortcut";
	}
	static findIn(host) {
		return host.querySelector(TooltipShortcutElement.tagName);
	}
	static create() {
		return document.createElement(TooltipShortcutElement.tagName);
	}
	setSyncedShortcut(shortcut) {
		if (shortcut) {
			this.textContent = shortcut;
			this.hidden = false;
		} else {
			this.textContent = "";
			this.hidden = true;
		}
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/tooltip/element.js
function isLabelTrigger(el) {
	return "$state" in el;
}
/** @fires open-change - Fired when the tooltip's open state changes. */
var TooltipElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.open = TooltipCore.defaultProps.open;
		this.defaultOpen = TooltipCore.defaultProps.defaultOpen;
		this.side = TooltipCore.defaultProps.side;
		this.align = TooltipCore.defaultProps.align;
		this.delay = TooltipCore.defaultProps.delay;
		this.closeDelay = TooltipCore.defaultProps.closeDelay;
		this.disableHoverablePopup = TooltipCore.defaultProps.disableHoverablePopup;
		this.disabled = TooltipCore.defaultProps.disabled;
		this.sticky = TooltipCore.defaultProps.sticky;
		this.boundary = "container";
		this.trigger = "";
		this.#core = new TooltipCore();
		this.#i18n = new I18nController(this, i18nContext);
		this.#groupConsumer = new s$1(this, { context: tooltipGroupContext });
		this.#containerCtx = new s$1(this, {
			context: containerContext,
			subscribe: true
		});
		this.#popupGroupCtx = new s$1(this, { context: popupGroupContext });
		this.#position = new PositionController(this);
		this.#tooltip = null;
		this.#snapshot = null;
		this.#disconnect = null;
		this.#triggerAbort = null;
		this.#currentTrigger = null;
	}
	static {
		this.tagName = "media-tooltip";
	}
	static {
		this.properties = {
			open: { type: Boolean },
			defaultOpen: {
				type: Boolean,
				attribute: "default-open"
			},
			side: { type: String },
			align: { type: String },
			delay: { type: Number },
			closeDelay: {
				type: Number,
				attribute: "close-delay"
			},
			disableHoverablePopup: {
				type: Boolean,
				attribute: "disable-hoverable-popup"
			},
			disabled: { type: Boolean },
			sticky: { type: Boolean },
			boundary: { type: String },
			trigger: { type: String }
		};
	}
	#core;
	#i18n;
	#groupConsumer;
	#containerCtx;
	#popupGroupCtx;
	#position;
	#tooltip;
	#snapshot;
	#disconnect;
	#triggerAbort;
	#currentTrigger;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.setAttribute(POPUP_HOST_ATTR, "");
		this.#disconnect = new AbortController();
		this.#tooltip = createTooltip({
			transition: createTransition(),
			onOpenChange: (nextOpen, details) => {
				this.open = nextOpen;
				this.dispatchEvent(new CustomEvent("open-change", { detail: {
					open: nextOpen,
					...details
				} }));
			},
			delay: () => this.delay,
			closeDelay: () => this.closeDelay,
			disableHoverablePopup: () => this.disableHoverablePopup,
			disabled: () => this.disabled,
			sticky: () => this.sticky,
			group: () => this.#groupConsumer.value,
			popupGroup: () => this.#popupGroupCtx.value
		});
		this.#tooltip.setPopupElement(this);
		applyElementProps(this, this.#tooltip.popupProps, { signal: this.#disconnect.signal });
		if (this.#snapshot) this.#snapshot.track(this.#tooltip.input);
		else this.#snapshot = new SnapshotController(this, this.#tooltip.input);
	}
	firstUpdated(changed) {
		super.firstUpdated(changed);
		if (this.defaultOpen && !this.open) this.#tooltip?.open();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#cleanupTrigger();
		this.#tooltip?.destroy();
		this.#tooltip = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	close(reason = "imperative-action") {
		this.#tooltip?.close(reason);
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		this.#core.setProps(this);
		if (this.#tooltip && changed.has("open")) {
			const { active: interactionOpen } = this.#tooltip.input.current;
			if (this.open !== interactionOpen) if (this.open) this.#tooltip.open();
			else this.#tooltip.close();
		}
	}
	update(_changed) {
		super.update(_changed);
		if (!this.#tooltip) return;
		const triggerEl = this.#position.findTrigger(this.trigger);
		this.#syncTrigger(triggerEl);
		if (this.#currentTrigger && isLabelTrigger(this.#currentTrigger)) this.#syncContent(this.#currentTrigger);
		const input = this.#tooltip.input.current;
		this.#core.setInput(input);
		const state = this.#core.getState();
		applyElementProps(this, this.#core.getPopupAttrs(state));
		applyStateDataAttrs(this, state, TooltipDataAttrs);
		if (state.open) tryShowPopover(this);
		else tryHidePopover(this);
		if (!state.open) {
			this.#position.cleanup();
			return;
		}
		this.#position.sync({
			anchorName: this.id,
			position: {
				side: state.side,
				align: state.align
			},
			trigger: this.#currentTrigger,
			boundary: this.boundary,
			container: this.#containerCtx.value?.container ?? null,
			cssVars: TooltipCSSVars,
			onSideChange: (side) => this.setAttribute(TooltipDataAttrs.side, side)
		});
	}
	#syncTrigger(triggerEl) {
		if (triggerEl === this.#currentTrigger) return;
		this.#position.cleanup();
		this.#cleanupTrigger();
		this.#currentTrigger = triggerEl;
		this.#tooltip?.setTriggerElement(triggerEl);
		if (triggerEl && this.#tooltip) {
			this.#triggerAbort = new AbortController();
			applyElementProps(triggerEl, this.#tooltip.triggerProps, { signal: this.#triggerAbort.signal });
			if (isLabelTrigger(triggerEl)) {
				this.#syncContent(triggerEl);
				triggerEl.$state.subscribe(() => this.#syncContent(triggerEl), { signal: this.#triggerAbort.signal });
				listen(triggerEl, HOTKEY_SHORTCUT_CHANGE_EVENT, () => this.#syncContent(triggerEl), { signal: this.#triggerAbort.signal });
			}
		}
	}
	#syncContent(triggerEl) {
		const label = triggerEl.getLabel();
		let resolved = isFunction(triggerEl.getResolvedLabel) ? triggerEl.getResolvedLabel() : void 0;
		if (resolved === void 0 && label) resolved = translateText(label, this.#i18n.value);
		const shortcut = triggerEl.getShortcut?.();
		let labelEl = TooltipLabelElement.findIn(this);
		let shortcutEl = TooltipShortcutElement.findIn(this);
		if (!labelEl && !shortcutEl) {
			if (this.#hostHasAuthoredTooltipContent()) return;
			labelEl = TooltipLabelElement.create();
			shortcutEl = TooltipShortcutElement.create();
			this.replaceChildren(labelEl, shortcutEl);
		}
		labelEl?.setSyncedText(resolved ?? "");
		shortcutEl?.setSyncedShortcut(shortcut);
	}
	#hostHasAuthoredTooltipContent() {
		return Array.from(this.childNodes).some((node) => !!node.textContent?.trim());
	}
	#cleanupTrigger() {
		this.#triggerAbort?.abort();
		this.#triggerAbort = null;
		this.#currentTrigger = null;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/tooltip.js
safeDefine(TooltipElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/tooltip-label.js
safeDefine(TooltipLabelElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/tooltip-shortcut.js
safeDefine(TooltipShortcutElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/cast-button/element.js
var CastButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.core = new CastButtonCore();
		this.stateAttrMap = CastButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectRemotePlayback);
	}
	static {
		this.tagName = "media-cast-button";
	}
	activate(state) {
		return this.core.toggle(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/cast-button.js
safeDefine(CastButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/pip-button/element.js
var PiPButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.core = new PiPButtonCore();
		this.stateAttrMap = PiPButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectPiP);
		this.hotkeyAction = "togglePictureInPicture";
	}
	static {
		this.tagName = "media-pip-button";
	}
	activate(state) {
		return this.core.toggle(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/pip-button.js
safeDefine(PiPButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/fullscreen-button/element.js
var FullscreenButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.core = new FullscreenButtonCore();
		this.stateAttrMap = FullscreenButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectFullscreen);
		this.hotkeyAction = "toggleFullscreen";
		this.#container = new s$1(this, {
			context: containerContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-fullscreen-button";
	}
	#container;
	activate(state, _event, source) {
		if (source === "pointer") this.#container.value?.container?.focus({ preventScroll: true });
		return this.core.toggle(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/fullscreen-button.js
safeDefine(FullscreenButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/play-button/element.js
var PlayButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.core = new PlayButtonCore();
		this.stateAttrMap = PlayButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectPlayback);
		this.hotkeyAction = "togglePaused";
	}
	static {
		this.tagName = "media-play-button";
	}
	activate(state) {
		return this.core.toggle(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/play-button.js
safeDefine(PlayButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/context.js
/** @internal */
const sliderContext = n(Symbol("@videojs/slider"));
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/time-slider/element.js
/**
* @fires drag-start - Fired when a pointer drag starts.
* @fires drag-end - Fired when a pointer drag ends.
*/
var TimeSliderElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.label = "";
		this.changeThrottle = TimeSliderCore.defaultProps.changeThrottle;
		this.step = TimeSliderCore.defaultProps.step;
		this.largeStep = TimeSliderCore.defaultProps.largeStep;
		this.orientation = TimeSliderCore.defaultProps.orientation;
		this.disabled = TimeSliderCore.defaultProps.disabled;
		this.thumbAlignment = TimeSliderCore.defaultProps.thumbAlignment;
		this.pauseOnDrag = TimeSliderCore.defaultProps.pauseOnDrag;
		this.#core = new TimeSliderCore();
		this.#controlsState = new PlayerController(this, playerContext, selectControls);
		this.#provider = new i(this, { context: sliderContext });
		this.#timeState = new PlayerController(this, playerContext, selectTime);
		this.#bufferState = new PlayerController(this, playerContext, selectBuffer);
		this.#playbackState = new PlayerController(this, playerContext, selectPlayback);
		this.#i18n = new I18nController(this, i18nContext);
		this.#slider = null;
		this.#disconnect = null;
		this.#releaseControlsLock = null;
	}
	static {
		this.tagName = "media-time-slider";
	}
	static {
		this.properties = {
			label: { type: String },
			changeThrottle: {
				type: Number,
				attribute: "change-throttle"
			},
			step: { type: Number },
			largeStep: {
				type: Number,
				attribute: "large-step"
			},
			orientation: { type: String },
			disabled: { type: Boolean },
			thumbAlignment: {
				type: String,
				attribute: "thumb-alignment"
			},
			pauseOnDrag: {
				type: Boolean,
				attribute: "pause-on-drag"
			}
		};
	}
	#core;
	#controlsState;
	#provider;
	#timeState;
	#bufferState;
	#playbackState;
	#i18n;
	#slider;
	#disconnect;
	#releaseControlsLock;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#disconnect = new AbortController();
		const signal = this.#disconnect.signal;
		this.#slider = createSlider({
			getElement: () => this,
			getThumbElement: () => this.querySelector("media-slider-thumb"),
			getOrientation: () => this.orientation,
			isDisabled: () => {
				const time = this.#timeState.value;
				const buffer = this.#bufferState.value;
				return this.disabled || !time || !hasTimeRange({
					...time,
					...buffer ?? {
						buffered: [],
						seekable: []
					}
				});
			},
			getPercent: () => {
				const media = this.#timeState.value;
				if (!media) return 0;
				return this.#core.percentFromValue(media.currentTime);
			},
			getStepPercent: () => this.#core.getStepPercent(),
			getLargeStepPercent: () => this.#core.getLargeStepPercent(),
			onValueCommit: (percent) => {
				const media = this.#timeState.value;
				if (media) media.seek(this.#core.rawValueFromPercent(percent));
			},
			changeThrottle: this.changeThrottle,
			onPressStart: () => {
				this.#releaseControlsLock ??= this.#controlsState.value?.requestControlsLock() ?? null;
			},
			onPressEnd: () => this.#releaseControlsVisibilityLock(),
			onDragStart: () => {
				this.#core.startDrag(this.#playbackState.value);
				this.dispatchEvent(new CustomEvent("drag-start", { bubbles: true }));
			},
			onDragEnd: () => {
				this.#core.endDrag(this.#playbackState.value);
				this.dispatchEvent(new CustomEvent("drag-end", { bubbles: true }));
			},
			adjustPercent: (raw, thumbSize, trackSize) => this.#core.adjustPercentForAlignment(raw, thumbSize, trackSize),
			onResize: () => this.requestUpdate()
		});
		applyElementProps(this, this.#slider.rootProps, { signal });
		applyStyles(this, this.#slider.rootStyle);
		this.#slider.input.subscribe(() => this.requestUpdate(), { signal });
	}
	disconnectedCallback() {
		this.#releaseControlsVisibilityLock();
		this.#resumeIfDragPaused();
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	destroyCallback() {
		this.#releaseControlsVisibilityLock();
		this.#resumeIfDragPaused();
		this.#slider?.destroy();
		super.destroyCallback();
	}
	#resumeIfDragPaused() {
		this.#core.endDrag(this.#playbackState.value);
	}
	#releaseControlsVisibilityLock() {
		this.#releaseControlsLock?.();
		this.#releaseControlsLock = null;
	}
	willUpdate(_changed) {
		super.willUpdate(_changed);
		this.#core.setProps({
			label: this.label,
			changeThrottle: this.changeThrottle,
			step: this.step,
			largeStep: this.largeStep,
			orientation: this.orientation,
			disabled: this.disabled,
			thumbAlignment: this.thumbAlignment,
			pauseOnDrag: this.pauseOnDrag
		});
		this.#core.setFormatLocale(this.#i18n.locale);
	}
	update(_changed) {
		super.update(_changed);
		if (!this.#slider) return;
		const time = this.#timeState.value;
		const buffer = this.#bufferState.value;
		if (!time) return;
		this.#core.setInput(this.#slider.input.current);
		const media = {
			...time,
			...buffer ?? {
				buffered: [],
				seekable: []
			}
		};
		this.#core.setMedia(media);
		const state = this.#core.getState();
		const cssVars = getTimeSliderCSSVars(this.#slider.adjustForAlignment(state));
		const thumbAttrs = this.#core.getAttrs(state);
		applyStyles(this, cssVars);
		applyStateDataAttrs(this, state, TimeSliderDataAttrs);
		this.#provider.setValue({
			state,
			stateAttrMap: TimeSliderDataAttrs,
			pointerValue: this.#core.rawValueFromPercent(state.pointerPercent),
			thumbAttrs: {
				...thumbAttrs,
				"aria-label": translateText(thumbAttrs["aria-label"], this.#i18n.value),
				"aria-valuetext": translateText(thumbAttrs["aria-valuetext"], this.#i18n.value, this.#core.getValueTextParams(state))
			},
			thumbProps: this.#slider.thumbProps,
			formatValue: (value) => formatTime(value, state.duration, { locale: this.#i18n.locale })
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/time-slider.js
safeDefine(TimeSliderElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/time-slider/chapters.js
/**
* Clones a light-DOM template once per normalized chapter range.
*
* The required template must contain exactly one HTML root element. When no chapter cues are available, the template is
* cloned once for a full-duration range.
*/
var TimeSliderChaptersElement = class extends UIElement {
	static {
		this.tagName = "media-time-slider-chapters";
	}
	#segments = new SliderSegmentsCore();
	#core = new TimeSliderChaptersCore();
	#slider = new s$1(this, {
		context: sliderContext,
		subscribe: true
	});
	#textTrack = new PlayerController(this, playerContext, selectTextTrack);
	#buffer = new PlayerController(this, playerContext, selectBuffer);
	#time = new PlayerController(this, playerContext, selectTime);
	#rendered = /* @__PURE__ */ new Map();
	#templateRoot = null;
	#templateChecked = false;
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("aria-hidden", "true");
	}
	update(_changed) {
		super.update(_changed);
		const slider = this.#slider.value;
		const duration = this.#time.value?.duration ?? 0;
		const templateRoot = this.#getTemplateRoot();
		if (!slider) return;
		applyStateDataAttrs(this, slider.state, slider.stateAttrMap);
		if (!templateRoot) return;
		const { chapters, ranges, max } = this.#core.getRanges(this.#textTrack.value?.chaptersCues ?? [], 0, duration);
		const geometry = this.#segments.getGeometry({
			ranges,
			min: 0,
			max,
			orientation: slider.state.orientation
		});
		const buffered = this.#buffer.value?.buffered ?? [];
		const bufferedEnd = buffered.length ? buffered[buffered.length - 1][1] : 0;
		const next = /* @__PURE__ */ new Map();
		for (const segment of geometry) {
			const state = this.#core.getState(this.#segments.getState(segment, slider.state, slider.pointerValue), chapters, bufferedEnd);
			let root = this.#rendered.get(state.key);
			if (!root) root = cloneTemplateRoot(templateRoot, this.ownerDocument);
			this.#setStyle(root, "pointer-events", state.cue ? void 0 : "none");
			this.#setStyle(root, TimeSliderChapterCSSVars.start, state.startPercent);
			this.#setStyle(root, TimeSliderChapterCSSVars.end, state.endPercent);
			this.#setStyle(root, TimeSliderChapterCSSVars.width, state.width ?? state.height);
			this.#setStyle(root, TimeSliderChapterCSSVars.fill, `${state.fillPercent}%`);
			this.#setStyle(root, TimeSliderChapterCSSVars.buffer, `${state.bufferPercent}%`);
			applyStateDataAttrs(root, slider.state, slider.stateAttrMap);
			applyStateDataAttrs(root, state, TimeSliderChapterDataAttrs);
			next.set(state.key, root);
		}
		for (const [key, root] of this.#rendered) if (!next.has(key)) root.remove();
		let before = null;
		for (const root of [...next.values()].reverse()) {
			if (root.parentNode !== this || root.nextSibling !== before) this.insertBefore(root, before);
			before = root;
		}
		this.#rendered.clear();
		for (const [key, rendered] of next) this.#rendered.set(key, rendered);
	}
	#getTemplateRoot() {
		if (this.#templateChecked) return this.#templateRoot;
		const template = getTemplateElement(this);
		if (!template) {
			for (const node of [...this.childNodes]) node.remove();
			return null;
		}
		this.#templateChecked = true;
		const root = getTemplateRoot(template);
		for (const node of [...this.childNodes]) if (node !== template) node.remove();
		if (root?.namespaceURI !== "http://www.w3.org/1999/xhtml") return null;
		this.#templateRoot = root;
		return this.#templateRoot;
	}
	#setStyle(element, name, value) {
		if (value === void 0) element.style.removeProperty(name);
		else element.style.setProperty(name, value);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/time-slider-chapters.js
safeDefine(TimeSliderChaptersElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/track.js
var SliderTrackElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: sliderContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-slider-track";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-track.js
safeDefine(SliderTrackElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/buffer.js
var SliderBufferElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: sliderContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-slider-buffer";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-buffer.js
safeDefine(SliderBufferElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/fill.js
var SliderFillElement = class extends ContextPartElement {
	constructor(..._args) {
		super(..._args);
		this.consumer = new s$1(this, {
			context: sliderContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-slider-fill";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-fill.js
safeDefine(SliderFillElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/thumb.js
var SliderThumbElement = class extends UIElement {
	static {
		this.tagName = "media-slider-thumb";
	}
	#ctx = new s$1(this, {
		context: sliderContext,
		subscribe: true
	});
	#disconnect = null;
	#thumbPropsApplied = false;
	connectedCallback() {
		super.connectedCallback();
		this.#disconnect = new AbortController();
		this.#thumbPropsApplied = false;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
		this.#thumbPropsApplied = false;
	}
	update(_changed) {
		super.update(_changed);
		const ctx = this.#ctx.value;
		if (!ctx) return;
		if (!this.#thumbPropsApplied && this.#disconnect) {
			applyElementProps(this, ctx.thumbProps, { signal: this.#disconnect.signal });
			this.#thumbPropsApplied = true;
		}
		applyElementProps(this, ctx.thumbAttrs);
		applyStateDataAttrs(this, ctx.state, ctx.stateAttrMap);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-thumb.js
safeDefine(SliderThumbElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/preview.js
var SliderPreviewElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.overflow = "clamp";
		this.#ctx = new s$1(this, {
			context: sliderContext,
			subscribe: true
		});
		this.#stopObservingResize = null;
		this.#width = 0;
	}
	static {
		this.tagName = "media-slider-preview";
	}
	static {
		this.properties = { overflow: { type: String } };
	}
	#ctx;
	#stopObservingResize;
	#width;
	connectedCallback() {
		super.connectedCallback();
		this.#stopObservingResize = observeResize(this, ([entry]) => {
			this.#width = entry.contentRect.width;
			this.#applyPosition();
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#stopObservingResize?.();
		this.#stopObservingResize = null;
	}
	#applyPosition() {
		applyStyles(this, getSliderPreviewStyle(this.#width, this.overflow));
	}
	update(_changed) {
		super.update(_changed);
		const ctx = this.#ctx.value;
		if (ctx) applyStateDataAttrs(this, ctx.state, ctx.stateAttrMap);
		this.#applyPosition();
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-preview.js
safeDefine(SliderPreviewElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/thumbnail/element.js
const SHADOW_CSS = `\
:host {
  display: inline-block;
  overflow: hidden;
}
img,
::slotted(img) {
  display: block;
}`;
/**
* Image attributes the element fills in from its own properties. Ones already on an image when it is adopted are the
* author's and are left alone, so an `<img slot="thumbnail" loading="lazy">` keeps its settings inside a skin.
*/
const IMAGE_ATTRIBUTES = [
	"crossorigin",
	"loading",
	"fetchpriority"
];
/** The image the element draws when none is supplied, reachable from outside as `::part(image)`. */
function createFallbackImage() {
	const img = document.createElement("img");
	img.alt = "";
	img.setAttribute("part", "image");
	img.setAttribute("aria-hidden", "true");
	img.setAttribute("decoding", "async");
	return img;
}
/**
* `<media-thumbnail>` — resolves and sizes a time-based thumbnail into an image.
*
* The element owns `src` and `srcset` on the active image. Left empty, it draws an image of its own in its shadow root.
* Supply an `<img>` child instead — `<media-thumbnail time="12"><img alt=""></media-thumbnail>` — to compose overlays
* or loading indicators beside the image the element controls. Any `crossorigin`, `loading`, or `fetchpriority` the
* child already carries wins over the element's own; the rest are filled in. Inside a skin, an `<img slot="thumbnail">`
* of yours replaces the one the skin carries.
*/
var ThumbnailElement = class extends UIElement {
	static {
		this.tagName = "media-thumbnail";
	}
	static {
		this.properties = {
			time: { type: Number },
			crossOrigin: {
				type: String,
				attribute: "crossorigin"
			},
			loading: { type: String },
			fetchPriority: {
				type: String,
				attribute: "fetchpriority"
			}
		};
	}
	#core;
	#shadow;
	#fallback;
	#children;
	#imageAttributes;
	#textTracks;
	#slots;
	#img;
	/** Attributes `#img` already carried when adopted, which the author owns. */
	#authored;
	#thumbnails;
	#externalThumbnails;
	#lastTextTrack;
	#api;
	constructor() {
		super();
		this.time = 0;
		this.#core = new ThumbnailCore();
		this.#shadow = this.attachShadow({ mode: "open" });
		this.#fallback = createFallbackImage();
		this.#children = new MutationObserver(() => this.requestUpdate());
		this.#imageAttributes = new MutationObserver(() => this.requestUpdate());
		this.#textTracks = new PlayerController(this, playerContext, selectTextTrack);
		this.#slots = null;
		this.#img = null;
		this.#authored = /* @__PURE__ */ new Set();
		this.#thumbnails = [];
		this.#api = null;
		const style = document.createElement("style");
		style.textContent = SHADOW_CSS;
		this.#shadow.append(style, document.createElement("slot"), this.#fallback);
	}
	/**
	* Set thumbnail images directly, bypassing the automatic `<track>` detection. When set, this takes priority over the
	* text track path.
	*/
	get thumbnails() {
		return this.#externalThumbnails;
	}
	set thumbnails(value) {
		this.#externalThumbnails = value;
		this.requestUpdate();
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#api = createThumbnail({
			getContainer: () => this,
			getImg: () => this.#img,
			onStateChange: () => this.requestUpdate()
		});
		this.#children.observe(this, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["src", "srcset"]
		});
		this.#slots = new AbortController();
		listen(this, "slotchange", () => this.requestUpdate(), { signal: this.#slots.signal });
		this.requestUpdate();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#adopt(null);
		this.#children.disconnect();
		this.#slots?.abort();
		this.#slots = null;
		this.#api?.destroy();
		this.#api = null;
	}
	destroyCallback() {
		this.#api?.destroy();
		super.destroyCallback();
	}
	update(changed) {
		super.update(changed);
		const textTrack = this.#textTracks.value;
		if (this.#externalThumbnails) this.#thumbnails = this.#externalThumbnails;
		else if (textTrack !== this.#lastTextTrack) {
			this.#lastTextTrack = textTrack;
			const thumbnailsTrack = textTrack?.thumbnailsTrack;
			this.#thumbnails = thumbnailsTrack && thumbnailsTrack.cues.length > 0 ? mapCuesToThumbnails(thumbnailsTrack.cues, thumbnailsTrack.src ?? void 0) : [];
		}
		const thumbnail = this.#core.findActiveThumbnail(this.#thumbnails, this.time);
		const img = findComposedElement(this, isHTMLImageElement) ?? this.#fallback;
		this.#adopt(img);
		this.#applyImageAttributes(img, textTrack);
		this.#api?.updateSrc(thumbnail?.url);
		this.#applySource(thumbnail?.url);
		this.#api?.connect();
		if (!thumbnail) {
			this.#resetStyles();
			const state = this.#core.getState(false, false, void 0);
			applyElementProps(this, this.#core.getAttrs(state));
			applyStateDataAttrs(this, state, ThumbnailDataAttrs);
			return;
		}
		const api = this.#api;
		const state = this.#core.getState(api?.loading ?? false, api?.error ?? false, thumbnail);
		applyElementProps(this, this.#core.getAttrs(state));
		applyStateDataAttrs(this, state, ThumbnailDataAttrs);
		if (api?.naturalWidth && api.naturalHeight) {
			const constraints = api.readConstraints();
			const result = this.#core.resize(thumbnail, api.naturalWidth, api.naturalHeight, constraints);
			if (result) this.#applyResize(result);
		}
	}
	/**
	* Leaving `crossOrigin` unset means "follow the media element", so thumbnails keep working on a CORS-enabled player
	* without a skin having to thread an attribute through. Only the `<track>` path inherits: `thumbnails` set directly
	* may point at a host that has nothing to do with the media element.
	*/
	#inheritedCrossOrigin(textTrack) {
		return this.#externalThumbnails ? void 0 : textTrack?.thumbnailsTrack?.crossOrigin;
	}
	/** Sync image attributes from element properties, leaving the ones the author put on the image alone. */
	#applyImageAttributes(img, textTrack) {
		const props = {
			crossorigin: this.#core.resolveCrossOrigin(this.crossOrigin, this.#inheritedCrossOrigin(textTrack)),
			loading: this.loading,
			fetchpriority: this.fetchPriority
		};
		for (const name of this.#authored) delete props[name];
		applyElementProps(img, props);
	}
	#applyResize(result) {
		this.style.width = `${result.containerWidth}px`;
		this.style.height = `${result.containerHeight}px`;
		const imgStyle = this.#img?.style;
		if (!imgStyle) return;
		imgStyle.width = `${result.imageWidth}px`;
		imgStyle.height = `${result.imageHeight}px`;
		imgStyle.maxWidth = "none";
		imgStyle.transform = result.offsetX || result.offsetY ? `translate(-${result.offsetX}px, -${result.offsetY}px)` : "";
	}
	#resetStyles() {
		this.style.width = "";
		this.style.height = "";
		const imgStyle = this.#img?.style;
		if (!imgStyle) return;
		imgStyle.width = "";
		imgStyle.height = "";
		imgStyle.maxWidth = "";
		imgStyle.transform = "";
	}
	#adopt(next) {
		if (next === this.#img) return;
		const previous = this.#img;
		if (previous) {
			this.#api?.disconnectImg(previous);
			this.#resetStyles();
			previous.removeAttribute("src");
			previous.removeAttribute("srcset");
			for (const name of IMAGE_ATTRIBUTES) if (!this.#authored.has(name)) previous.removeAttribute(name);
		}
		this.#img = next;
		this.#authored = new Set(next ? IMAGE_ATTRIBUTES.filter((name) => next.hasAttribute(name)) : []);
		this.#imageAttributes.disconnect();
		if (next && next !== this.#fallback) this.#imageAttributes.observe(next, {
			attributes: true,
			attributeFilter: ["src", "srcset"]
		});
		if (next === this.#fallback) this.#shadow.append(this.#fallback);
		else if (next) this.#fallback.remove();
		this.#api?.updateSrc(void 0);
	}
	#applySource(src) {
		const img = this.#img;
		if (!img) return;
		img.removeAttribute("srcset");
		if (!src) img.removeAttribute("src");
		else if (img.getAttribute("src") !== src) img.setAttribute("src", src);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/thumbnail.js
/**
* `<media-thumbnail>` whose `time` follows the slider pointer. Left empty, it draws an image of its own; supply an
* `<img>` child to compose overlays or loading indicators beside the image it controls.
*/
var SliderThumbnailElement = class extends ThumbnailElement {
	static {
		this.tagName = "media-slider-thumbnail";
	}
	#ctx = new s$1(this, {
		context: sliderContext,
		subscribe: true
	});
	update(changed) {
		const ctx = this.#ctx.value;
		if (ctx) this.time = ctx.pointerValue;
		super.update(changed);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-thumbnail.js
safeDefine(SliderThumbnailElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/slider/value.js
/** Writes the formatted current or pointer slider value into its own text content, replacing any children. */
var SliderValueElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.type = "current";
		this.#ctx = new s$1(this, {
			context: sliderContext,
			subscribe: true
		});
	}
	static {
		this.tagName = "media-slider-value";
	}
	static {
		this.properties = { type: { type: String } };
	}
	#ctx;
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("aria-live", "off");
	}
	update(_changed) {
		super.update(_changed);
		const ctx = this.#ctx.value;
		if (!ctx) return;
		const value = this.type === "pointer" ? ctx.pointerValue : ctx.state.value;
		this.textContent = ctx.formatValue ? ctx.formatValue(value, this.type) : String(Math.round(value));
		applyStateDataAttrs(this, ctx.state, ctx.stateAttrMap);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/slider-value.js
safeDefine(SliderValueElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/time-slider/chapter-title.js
/** Displays the chapter title at the current pointer or keyboard position. */
var TimeSliderChapterTitleElement = class extends UIElement {
	static {
		this.tagName = "media-time-slider-chapter-title";
	}
	#core = new TimeSliderChaptersCore();
	#slider = new s$1(this, {
		context: sliderContext,
		subscribe: true
	});
	#textTrack = new PlayerController(this, playerContext, selectTextTrack);
	#time = new PlayerController(this, playerContext, selectTime);
	update(_changed) {
		super.update(_changed);
		const slider = this.#slider.value;
		if (!slider) return;
		const duration = this.#time.value?.duration ?? 0;
		const { chapters } = this.#core.getRanges(this.#textTrack.value?.chaptersCues ?? [], 0, duration);
		const keyboard = slider.state.interactive && !slider.state.pointing && !slider.state.dragging;
		const value = slider.state.pointing || slider.state.dragging ? slider.pointerValue : slider.state.value;
		const chapter = this.#core.findChapter(chapters, value);
		this.textContent = chapter?.cue?.text ?? "";
		if (keyboard) {
			this.removeAttribute("aria-hidden");
			this.setAttribute("aria-live", "polite");
		} else {
			this.setAttribute("aria-hidden", "true");
			this.removeAttribute("aria-live");
		}
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/time-slider-chapter-title.js
safeDefine(TimeSliderChapterTitleElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/mute-button/element.js
var MuteButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.core = new MuteButtonCore();
		this.stateAttrMap = MuteButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectVolume);
		this.hotkeyAction = "toggleMuted";
	}
	static {
		this.tagName = "media-mute-button";
	}
	activate(state) {
		this.core.toggle(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/mute-button.js
safeDefine(MuteButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/popover/element.js
/** @fires open-change - Fired when the popover's open state changes. */
var PopoverElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.open = PopoverCore.defaultProps.open;
		this.defaultOpen = PopoverCore.defaultProps.defaultOpen;
		this.side = PopoverCore.defaultProps.side;
		this.align = PopoverCore.defaultProps.align;
		this.modal = PopoverCore.defaultProps.modal;
		this.closeOnEscape = PopoverCore.defaultProps.closeOnEscape;
		this.closeOnOutsideClick = PopoverCore.defaultProps.closeOnOutsideClick;
		this.openOnHover = PopoverCore.defaultProps.openOnHover;
		this.delay = PopoverCore.defaultProps.delay;
		this.closeDelay = PopoverCore.defaultProps.closeDelay;
		this.boundary = "container";
		this.#core = new PopoverCore();
		this.#containerCtx = new s$1(this, {
			context: containerContext,
			subscribe: true
		});
		this.#popupGroupCtx = new s$1(this, { context: popupGroupContext });
		this.#position = new PositionController(this);
		this.#popover = null;
		this.#snapshot = null;
		this.#disconnect = null;
		this.#triggerAbort = null;
		this.#currentTrigger = null;
	}
	static {
		this.tagName = "media-popover";
	}
	static {
		this.properties = {
			open: { type: Boolean },
			defaultOpen: {
				type: Boolean,
				attribute: "default-open"
			},
			side: { type: String },
			align: { type: String },
			modal: { type: Boolean },
			closeOnEscape: {
				type: Boolean,
				attribute: "close-on-escape"
			},
			closeOnOutsideClick: {
				type: Boolean,
				attribute: "close-on-outside-click"
			},
			openOnHover: {
				type: Boolean,
				attribute: "open-on-hover"
			},
			delay: { type: Number },
			closeDelay: {
				type: Number,
				attribute: "close-delay"
			},
			boundary: { type: String }
		};
	}
	#core;
	#containerCtx;
	#popupGroupCtx;
	#position;
	#popover;
	#snapshot;
	#disconnect;
	#triggerAbort;
	#currentTrigger;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.setAttribute(POPUP_HOST_ATTR, "");
		this.#disconnect = new AbortController();
		this.#popover = createPopover({
			transition: createTransition(),
			onOpenChange: (nextOpen, details) => {
				this.open = nextOpen;
				this.dispatchEvent(new CustomEvent("open-change", { detail: {
					open: nextOpen,
					...details
				} }));
			},
			closeOnEscape: () => this.closeOnEscape,
			closeOnOutsideClick: () => this.closeOnOutsideClick,
			openOnHover: () => this.openOnHover,
			delay: () => this.delay,
			closeDelay: () => this.closeDelay,
			group: () => this.#popupGroupCtx.value
		});
		this.#popover.setPopupElement(this);
		applyElementProps(this, this.#popover.popupProps, { signal: this.#disconnect.signal });
		if (this.#snapshot) this.#snapshot.track(this.#popover.input);
		else this.#snapshot = new SnapshotController(this, this.#popover.input);
	}
	firstUpdated(changed) {
		super.firstUpdated(changed);
		if (this.defaultOpen && !this.open) this.#popover?.open();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	destroyCallback() {
		this.#cleanupTrigger();
		this.#popover?.destroy();
		super.destroyCallback();
	}
	close(reason = "imperative-action") {
		this.#popover?.close(reason);
	}
	get triggerElement() {
		return this.#currentTrigger;
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		this.#core.setProps(this);
		if (this.#popover && changed.has("open")) {
			const { active: interactionOpen } = this.#popover.input.current;
			if (this.open !== interactionOpen) if (this.open) this.#popover.open();
			else this.#popover.close();
		}
	}
	update(_changed) {
		super.update(_changed);
		if (!this.#popover) return;
		const triggerEl = this.#position.findTrigger();
		this.#syncTrigger(triggerEl);
		const input = this.#popover.input.current;
		this.#core.setInput(input);
		const state = this.#core.getState();
		applyElementProps(this, this.#core.getPopupAttrs(state));
		applyStateDataAttrs(this, state, PopoverDataAttrs);
		if (state.open) tryShowPopover(this);
		else tryHidePopover(this);
		if (this.#currentTrigger) applyElementProps(this.#currentTrigger, this.#core.getTriggerAttrs(state, this.id));
		if (!state.open) {
			this.#position.cleanup();
			return;
		}
		this.#position.sync({
			anchorName: this.id,
			position: {
				side: state.side,
				align: state.align
			},
			trigger: this.#currentTrigger,
			boundary: this.boundary,
			container: this.#containerCtx.value?.container ?? null,
			onSideChange: (side) => this.setAttribute(PopoverDataAttrs.side, side)
		});
	}
	#syncTrigger(triggerEl) {
		if (triggerEl === this.#currentTrigger) return;
		this.#position.cleanup();
		this.#cleanupTrigger();
		this.#currentTrigger = triggerEl;
		this.#popover?.setTriggerElement(triggerEl);
		if (triggerEl && this.#popover) {
			this.#triggerAbort = new AbortController();
			applyElementProps(triggerEl, this.#popover.triggerProps, { signal: this.#triggerAbort.signal });
		}
	}
	#cleanupTrigger() {
		if (this.#currentTrigger) applyElementProps(this.#currentTrigger, {
			"aria-expanded": void 0,
			"aria-haspopup": void 0,
			"aria-controls": void 0
		});
		this.#triggerAbort?.abort();
		this.#triggerAbort = null;
		this.#currentTrigger = null;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/volume-popover/element.js
const unavailableVolume = {
	volume: 0,
	muted: false,
	volumeAvailability: "unsupported",
	mutedAvailability: "unsupported",
	setVolume: () => 0,
	setMuted: () => false
};
/** A volume-aware popover that keeps its adjacent mute trigger available as a fallback. */
var VolumePopoverElement = class extends PopoverElement {
	static {
		this.tagName = "media-volume-popover";
	}
	#core = new VolumePopoverCore();
	#volume = new PlayerController(this, playerContext, selectVolume);
	update(changed) {
		super.update(changed);
		this.#core.setProps(this);
		this.#core.setInput({
			active: this.hasAttribute("data-open"),
			status: this.hasAttribute("data-starting-style") ? "starting" : this.hasAttribute("data-ending-style") ? "ending" : "idle"
		});
		this.#core.setMedia(this.#volume.value ?? unavailableVolume);
		const state = this.#core.getState();
		applyStateDataAttrs(this, state, VolumePopoverDataAttrs);
		this.hidden = state.hidden;
		if (state.hidden) {
			this.close();
			if (this.triggerElement) applyElementProps(this.triggerElement, {
				"aria-expanded": void 0,
				"aria-haspopup": void 0,
				"aria-controls": void 0
			});
		}
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/volume-popover.js
safeDefine(VolumePopoverElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/volume-slider/element.js
/**
* @fires drag-start - Fired when a pointer drag starts.
* @fires drag-end - Fired when a pointer drag ends.
*/
var VolumeSliderElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.label = "";
		this.step = VolumeSliderCore.defaultProps.step;
		this.largeStep = VolumeSliderCore.defaultProps.largeStep;
		this.wheelStep = VolumeSliderCore.defaultProps.wheelStep;
		this.orientation = VolumeSliderCore.defaultProps.orientation;
		this.disabled = VolumeSliderCore.defaultProps.disabled;
		this.thumbAlignment = VolumeSliderCore.defaultProps.thumbAlignment;
		this.#core = new VolumeSliderCore();
		this.#controlsState = new PlayerController(this, playerContext, selectControls);
		this.#provider = new i(this, { context: sliderContext });
		this.#volumeState = new PlayerController(this, playerContext, selectVolume);
		this.#i18n = new I18nController(this, i18nContext);
		this.#slider = null;
		this.#disconnect = null;
		this.#releaseControlsLock = null;
	}
	static {
		this.tagName = "media-volume-slider";
	}
	static {
		this.properties = {
			label: { type: String },
			step: { type: Number },
			largeStep: {
				type: Number,
				attribute: "large-step"
			},
			wheelStep: {
				type: Number,
				attribute: "wheel-step"
			},
			orientation: { type: String },
			disabled: { type: Boolean },
			thumbAlignment: {
				type: String,
				attribute: "thumb-alignment"
			}
		};
	}
	#core;
	#controlsState;
	#provider;
	#volumeState;
	#i18n;
	#slider;
	#disconnect;
	#releaseControlsLock;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#disconnect = new AbortController();
		const signal = this.#disconnect.signal;
		const isDisabled = () => {
			const volume = this.#volumeState.value;
			return this.disabled || !volume || volume.volumeAvailability !== "available";
		};
		const getPercent = () => (this.#volumeState.value?.volume ?? 0) * 100;
		const getStepPercent = () => this.#core.getStepPercent();
		const setVolume = (percent) => this.#setVolume(percent);
		this.#slider = createSlider({
			getElement: () => this,
			getThumbElement: () => this.querySelector("media-slider-thumb"),
			getOrientation: () => this.orientation,
			isDisabled,
			getPercent,
			getStepPercent,
			getLargeStepPercent: () => this.#core.getLargeStepPercent(),
			onValueChange: setVolume,
			onValueCommit: setVolume,
			onPressStart: () => {
				this.#releaseControlsLock ??= this.#controlsState.value?.requestControlsLock() ?? null;
			},
			onPressEnd: () => this.#releaseControlsVisibilityLock(),
			onDragStart: () => {
				this.dispatchEvent(new CustomEvent("drag-start", { bubbles: true }));
			},
			onDragEnd: () => {
				this.dispatchEvent(new CustomEvent("drag-end", { bubbles: true }));
			},
			adjustPercent: (raw, thumbSize, trackSize) => this.#core.adjustPercentForAlignment(raw, thumbSize, trackSize),
			onResize: () => this.requestUpdate()
		});
		const wheelProps = createWheelStep({
			isDisabled,
			getPercent,
			getStepPercent: () => this.#core.getWheelStepPercent(),
			onValueChange: (percent) => this.#volumeState.value?.setVolume(this.#core.rawValueFromPercent(percent) / 100)
		});
		applyElementProps(this, this.#slider.rootProps, { signal });
		applyElementProps(this, wheelProps, { signal });
		applyStyles(this, this.#slider.rootStyle);
		this.#slider.input.subscribe(() => this.requestUpdate(), { signal });
	}
	disconnectedCallback() {
		this.#releaseControlsVisibilityLock();
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	destroyCallback() {
		this.#releaseControlsVisibilityLock();
		this.#slider?.destroy();
		super.destroyCallback();
	}
	#releaseControlsVisibilityLock() {
		this.#releaseControlsLock?.();
		this.#releaseControlsLock = null;
	}
	willUpdate(_changed) {
		super.willUpdate(_changed);
		this.#core.setProps(this);
		this.#core.setFormatLocale(this.#i18n.locale);
	}
	update(_changed) {
		super.update(_changed);
		if (!this.#slider) return;
		const media = this.#volumeState.value;
		if (!media) return;
		this.#core.setInput(this.#slider.input.current);
		this.#core.setMedia(media);
		const state = this.#core.getState();
		const cssVars = getSliderCSSVars(this.#slider.adjustForAlignment(state));
		const thumbAttrs = this.#core.getAttrs(state);
		applyStyles(this, cssVars);
		applyStateDataAttrs(this, state, VolumeSliderDataAttrs);
		applyElementProps(this, { hidden: state.hidden ? "" : void 0 });
		this.#provider.setValue({
			state,
			stateAttrMap: VolumeSliderDataAttrs,
			pointerValue: this.#core.valueFromPercent(state.pointerPercent),
			thumbAttrs: {
				...thumbAttrs,
				"aria-label": translateText(thumbAttrs["aria-label"], this.#i18n.value),
				"aria-valuetext": translateText(thumbAttrs["aria-valuetext"], this.#i18n.value, this.#core.getValueTextParams(state))
			},
			thumbProps: this.#slider.thumbProps,
			formatValue: (value) => `${Math.round(value)}%`
		});
	}
	#setVolume(percent) {
		this.#volumeState.value?.setVolume(this.#core.valueFromPercent(percent) / 100);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/volume-slider.js
safeDefine(VolumeSliderElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/time/group.js
/** Container for composed `<media-time>` and `<media-time-separator>` displays. */
var TimeGroupElement = class extends UIElement {
	static {
		this.tagName = "media-time-group";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/time-group.js
safeDefine(TimeGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/time/element.js
var TimeElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.type = TimeCore.defaultProps.type;
		this.negativeSign = TimeCore.defaultProps.negativeSign;
		this.label = "";
		this.toggle = TimeCore.defaultProps.toggle;
		this.#core = new TimeCore();
		this.#state = new PlayerController(this, playerContext, selectTime);
		this.#buffer = new PlayerController(this, playerContext, selectBuffer);
		this.#i18n = new I18nController(this, i18nContext);
		this.#signSpan = document.createElement("span");
		this.#textNode = new Text();
		this.#disconnect = null;
		this.#listening = false;
		this.#activeType = TimeCore.defaultProps.type;
		this.#handleClick = (event) => {
			if (event.defaultPrevented || !this.toggle || !this.#state.value || !this.#hasTimeRange()) return;
			this.#toggleType();
		};
		this.#handleKeyDown = (event) => {
			if (event.defaultPrevented || !isInteractiveActivation(event)) return;
			if (!this.toggle || !this.#state.value || !this.#hasTimeRange()) return;
			event.preventDefault();
			if (event.repeat) return;
			this.#toggleType();
		};
	}
	static {
		this.tagName = "media-time";
	}
	static {
		this.properties = {
			type: { type: String },
			negativeSign: {
				type: String,
				attribute: "negative-sign"
			},
			label: { type: String },
			toggle: { type: Boolean }
		};
	}
	#core;
	#state;
	#buffer;
	#i18n;
	#signSpan;
	#textNode;
	#disconnect;
	#listening;
	#activeType;
	connectedCallback() {
		super.connectedCallback();
		this.#disconnect = new AbortController();
		this.#syncListeners();
		if (!this.#signSpan.parentNode) {
			this.#signSpan.setAttribute("aria-hidden", "true");
			this.#signSpan.hidden = true;
			this.append(this.#signSpan, this.#textNode);
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
		this.#listening = false;
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		if (changed.has("type") || changed.has("toggle")) this.#activeType = this.type;
	}
	update(changed) {
		super.update(changed);
		if (changed.has("toggle")) this.#syncListeners();
		const media = this.#state.value;
		if (!media) {
			this.#clearAttrs();
			return;
		}
		this.#core.setProps({
			type: this.toggle ? this.#activeType : this.type,
			negativeSign: this.negativeSign,
			label: this.label,
			toggle: this.toggle
		});
		this.#core.setMedia({
			...media,
			seekable: this.#buffer.value?.seekable ?? []
		});
		this.#core.setFormatLocale(this.#i18n.locale);
		const state = this.#core.getState();
		this.#signSpan.hidden = !state.negative;
		this.#signSpan.textContent = state.negative ? this.negativeSign : "";
		this.#textNode.textContent = state.text;
		const attrs = this.#core.getAttrs(state, this.type);
		const label = translateText(attrs["aria-label"], this.#i18n.value, this.#getLabelParams(state));
		const description = attrs["aria-description"] ? translateText(attrs["aria-description"], this.#i18n.value) : void 0;
		applyElementProps(this, {
			"aria-label": label,
			"aria-description": description,
			"aria-disabled": attrs["aria-disabled"],
			role: this.toggle ? attrs.role : "time",
			tabIndex: attrs.tabIndex,
			datetime: this.toggle || state.unavailable ? void 0 : state.datetime
		});
		applyStateDataAttrs(this, state, TimeDataAttrs);
	}
	#getLabelParams(state) {
		if (!this.#core.getLabelParams(state)) return void 0;
		const duration = formatTimeAsPhrase(Math.abs(state.seconds), { locale: this.#i18n.locale });
		const text = {
			current: elapsedSuffixText,
			duration: durationSuffixText,
			remaining: remainingSuffixText
		}[state.type];
		return { duration: translateText(text, this.#i18n.value, { duration }) };
	}
	#handleClick;
	#handleKeyDown;
	#toggleType() {
		if (this.type === "current") this.#activeType = this.#activeType === "remaining" ? "current" : "remaining";
		else this.#activeType = this.#activeType === "duration" ? "remaining" : "duration";
		this.requestUpdate();
	}
	#hasTimeRange() {
		const media = this.#state.value;
		if (!media) return false;
		return hasTimeRange({
			...media,
			seekable: this.#buffer.value?.seekable ?? []
		});
	}
	#syncListeners() {
		if (!this.toggle || !this.#disconnect || this.#listening) return;
		this.#listening = true;
		applyElementProps(this, {
			onClick: this.#handleClick,
			onKeyDown: this.#handleKeyDown
		}, { signal: this.#disconnect.signal });
	}
	#clearAttrs() {
		applyElementProps(this, {
			"aria-label": void 0,
			"aria-description": void 0,
			"aria-disabled": void 0,
			role: void 0,
			tabIndex: void 0,
			datetime: void 0,
			"data-type": void 0,
			"data-disabled": void 0,
			"data-unavailable": void 0
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/time.js
safeDefine(TimeElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/time/separator.js
var TimeSeparatorElement = class extends UIElement {
	static {
		this.tagName = "media-time-separator";
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("aria-hidden", "true");
		if (!this.textContent?.trim()) this.textContent = "/";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/time-separator.js
safeDefine(TimeSeparatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/command-for.js
/** Toggle a popup host linked via `commandfor` (menu, popover, etc.). */
function toggleCommandTarget(host, commandfor) {
	const root = host.getRootNode();
	const target = ("getElementById" in root ? root.getElementById(commandfor) : null) ?? root.querySelector(`#${CSS.escape(commandfor)}`);
	if (!target || !("open" in target)) return;
	const popup = target;
	popup.open = !popup.open;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/captions-button/element.js
function getCaptionTrackCount(state) {
	return state.textTrackList.filter(isCaptionOrSubtitleTrack).length;
}
var CaptionsButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.commandfor = void 0;
		this.menuFor = void 0;
		this.#defaultCommandfor = void 0;
		this.core = new CaptionsButtonCore();
		this.stateAttrMap = CaptionsButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectTextTrack);
		this.hotkeyAction = "toggleSubtitles";
	}
	static {
		this.tagName = "media-captions-button";
	}
	static {
		this.properties = {
			label: { type: String },
			disabled: { type: Boolean },
			commandfor: { type: String },
			menuFor: {
				type: String,
				attribute: "menu-for"
			}
		};
	}
	#defaultCommandfor;
	connectedCallback() {
		super.connectedCallback();
		if (this.commandfor && this.commandfor !== this.menuFor) this.#defaultCommandfor = this.commandfor;
	}
	activate(state, event) {
		if (this.menuFor && getCaptionTrackCount(state) > 1) {
			if (event instanceof KeyboardEvent) toggleCommandTarget(this, this.menuFor);
			return;
		}
		this.core.toggle(state);
	}
	getIsButtonDisabled() {
		const media = this.mediaState.value;
		if (super.getIsButtonDisabled()) return true;
		if (media && getCaptionTrackCount(media) === 0) return true;
		return false;
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		if (changed.has("commandfor") && this.commandfor !== this.menuFor) this.#defaultCommandfor = this.commandfor;
		if (changed.has("commandfor") || changed.has("menuFor")) this.#syncCommandFor();
	}
	update(changed) {
		super.update(changed);
		const media = this.mediaState.value;
		if (!media) return;
		this.#syncCommandFor(media);
		if (this.menuFor && getCaptionTrackCount(media) > 1) applyElementProps(this, { "aria-disabled": this.getIsButtonDisabled() ? "true" : void 0 });
	}
	#syncCommandFor(media) {
		const state = media ?? this.mediaState.value;
		const target = state && this.menuFor && getCaptionTrackCount(state) > 1 ? this.menuFor : this.#defaultCommandfor;
		if (target) this.setAttribute("commandfor", target);
		else this.removeAttribute("commandfor");
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/captions-button.js
safeDefine(CaptionsButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/radio-group/context.js
/** @internal */
const radioGroupContext = n(Symbol("@videojs/radio-group"));
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/context.js
const MENU_CONTEXT_KEY = Symbol("@videojs/menu");
const MENU_GROUP_CONTEXT_KEY = Symbol("@videojs/menu-group");
/** @internal */
const menuContext = n(MENU_CONTEXT_KEY);
/** @internal */
const menuGroupContext = n(MENU_GROUP_CONTEXT_KEY);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/element.js
/**
* Root menu state and positioned popup. Content pages are direct children.
*
* @fires open-change - Fired before the menu's open state changes. Cancel the event to prevent the change.
*/
var MenuElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.open = MenuCore.defaultProps.open;
		this.defaultOpen = MenuCore.defaultProps.defaultOpen;
		this.side = MenuCore.defaultProps.side;
		this.align = MenuCore.defaultProps.align;
		this.closeOnEscape = MenuCore.defaultProps.closeOnEscape;
		this.closeOnOutsideClick = MenuCore.defaultProps.closeOnOutsideClick;
		this.boundary = "container";
		this.#core = new MenuCore();
		this.#provider = new i(this, { context: menuContext });
		this.#position = new PositionController(this);
		this.#controlsState = new PlayerController(this, playerContext, selectControls);
		this.#containerCtx = new s$1(this, {
			context: containerContext,
			subscribe: true
		});
		this.#popupGroupCtx = new s$1(this, { context: popupGroupContext });
		this.#menu = null;
		this.#popup = null;
		this.#snapshot = null;
		this.#disconnect = null;
		this.#triggerAbort = null;
		this.#currentTrigger = null;
		this.#triggerWasDisabled = false;
		this.#triggerWasHidden = false;
		this.#releaseControlsLock = null;
		this.#optionStates = /* @__PURE__ */ new Map();
		this.#optionState = null;
		this.#handleFocusOut = (event) => {
			this.#menu?.contentProps.onFocusOut(event);
		};
		this.#setOptionState = (source, optionState) => {
			const previous = this.#optionStates.get(source);
			if (optionState && isSameOptionState$1(previous, optionState)) return;
			if (!optionState && !previous) return;
			if (optionState) this.#optionStates.set(source, optionState);
			else this.#optionStates.delete(source);
			this.#optionState = resolveMenuOptionState(this.#optionStates.values());
			if ((this.#optionState?.disabled || this.#optionState?.hidden) && this.open) this.close("imperative-action");
			this.#syncOptionState(this.#currentTrigger);
		};
	}
	static {
		this.tagName = "media-menu";
	}
	static {
		this.properties = {
			open: { type: Boolean },
			defaultOpen: {
				type: Boolean,
				attribute: "default-open"
			},
			side: { type: String },
			align: { type: String },
			closeOnEscape: {
				type: Boolean,
				attribute: "close-on-escape"
			},
			closeOnOutsideClick: {
				type: Boolean,
				attribute: "close-on-outside-click"
			},
			boundary: { type: String }
		};
	}
	#core;
	#provider;
	#position;
	#controlsState;
	#containerCtx;
	#popupGroupCtx;
	#menu;
	#popup;
	#snapshot;
	#disconnect;
	#triggerAbort;
	#currentTrigger;
	#triggerWasDisabled;
	#triggerWasHidden;
	#releaseControlsLock;
	#optionStates;
	#optionState;
	get menu() {
		return this.#menu;
	}
	get popup() {
		return this.#popup;
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.setAttribute(POPUP_HOST_ATTR, "");
		this.#disconnect = new AbortController();
		this.#popup = createMenuPopup();
		this.#popup.setElement(this);
		this.#menu = createMenu({
			transition: createTransition(),
			onOpenChange: (nextOpen, details) => {
				if (this.dispatchEvent(new CustomEvent("open-change", {
					bubbles: true,
					cancelable: true,
					composed: true,
					detail: {
						open: nextOpen,
						...details
					}
				}))) this.open = nextOpen;
			},
			closeOnEscape: () => this.closeOnEscape,
			closeOnOutsideClick: () => this.closeOnOutsideClick,
			group: () => this.#popupGroupCtx.value
		});
		this.#menu.setPopupElement(this);
		applyElementProps(this, { onFocusOut: this.#handleFocusOut }, { signal: this.#disconnect.signal });
		if (this.#snapshot) this.#snapshot.track(this.#menu.input);
		else this.#snapshot = new SnapshotController(this, this.#menu.input);
	}
	disconnectedCallback() {
		this.#releaseControlsVisibilityLock();
		super.disconnectedCallback();
		this.#position.cleanup();
		this.#cleanupTrigger();
		this.#popup?.destroy();
		this.#popup = null;
		this.#menu?.destroy();
		this.#menu = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	close(reason = "imperative-action") {
		this.#menu?.close(reason);
	}
	openMenu(reason = "imperative-action") {
		this.#menu?.open(reason);
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		if (!this.hasUpdated && this.defaultOpen && !this.open) this.open = true;
		this.#core.setProps({
			open: this.open,
			defaultOpen: this.defaultOpen,
			side: this.side,
			align: this.align,
			closeOnEscape: this.closeOnEscape,
			closeOnOutsideClick: this.closeOnOutsideClick
		});
		if (this.#menu && changed.has("open")) this.#menu.syncOpen(this.open);
	}
	update(changed) {
		super.update(changed);
		if (!this.#menu || !this.#popup) return;
		const input = this.#menu.input.current;
		this.#core.setInput({
			...input,
			isSubmenu: false
		});
		const state = this.#core.getState();
		if (state.open) this.#releaseControlsLock ??= this.#controlsState.value?.requestControlsLock() ?? null;
		else this.#releaseControlsVisibilityLock();
		const triggerElement = this.#position.findTrigger();
		this.#syncTrigger(triggerElement);
		applyElementProps(this, this.#core.getPopupAttrs());
		applyStateDataAttrs(this, state, MenuPopupDataAttrs);
		if (state.open) tryShowPopover(this);
		else tryHidePopover(this);
		if (this.#currentTrigger) {
			applyElementProps(this.#currentTrigger, this.#core.getTriggerAttrs(state, this.#menu.contentElement?.id));
			this.#syncOptionState(this.#currentTrigger);
		}
		if (!state.open) this.#position.cleanup();
		else {
			this.#popup.sync();
			const positionOptions = getRootPositionOptions(state.side, state.align);
			if (positionOptions && this.#currentTrigger) this.#position.sync({
				anchorName: this.id,
				position: positionOptions,
				trigger: this.#currentTrigger,
				boundary: this.boundary,
				container: this.#containerCtx.value?.container ?? null,
				cssVars: MenuPositioningCSSVars,
				trackResize: false,
				onSideChange: (side) => this.setAttribute(MenuPopupDataAttrs.side, side)
			});
		}
		this.#provider.setValue({
			core: this.#core,
			menu: this.#menu,
			popup: this.#popup,
			state,
			setOptionState: this.#setOptionState
		});
	}
	#releaseControlsVisibilityLock() {
		this.#releaseControlsLock?.();
		this.#releaseControlsLock = null;
	}
	#handleFocusOut;
	#syncTrigger(triggerElement) {
		if (triggerElement === this.#currentTrigger) return;
		this.#position.cleanup();
		this.#cleanupTrigger();
		this.#currentTrigger = triggerElement;
		this.#triggerWasDisabled = triggerElement ? isTriggerExplicitlyDisabled$1(triggerElement) : false;
		this.#triggerWasHidden = triggerElement?.hidden === true;
		this.#menu?.setTriggerElement(triggerElement);
		if (triggerElement && this.#menu) {
			this.#triggerAbort = new AbortController();
			applyElementProps(triggerElement, this.#menu.triggerProps, { signal: this.#triggerAbort.signal });
			this.#syncOptionState(triggerElement);
		}
	}
	#setOptionState;
	#syncOptionState(trigger) {
		if (!trigger) return;
		applyElementProps(trigger, {
			disabled: this.#triggerWasDisabled || this.#optionState?.disabled || void 0,
			"aria-disabled": this.#triggerWasDisabled || this.#optionState?.disabled ? "true" : void 0,
			"data-availability": this.#optionState?.availability,
			hidden: this.#triggerWasHidden || this.#optionState?.hidden || void 0
		});
		const value = trigger.querySelector("[data-part~=\"value\"], [data-part~=\"hint\"]");
		if (value && value.textContent !== this.#optionState?.value) value.textContent = this.#optionState?.value ?? "";
	}
	#cleanupTrigger() {
		if (this.#currentTrigger) {
			applyElementProps(this.#currentTrigger, {
				"aria-expanded": void 0,
				"aria-haspopup": void 0,
				"aria-controls": void 0,
				disabled: this.#triggerWasDisabled || void 0,
				"aria-disabled": this.#triggerWasDisabled ? "true" : void 0,
				"data-availability": void 0,
				hidden: this.#triggerWasHidden || void 0
			});
			const value = this.#currentTrigger.querySelector("[data-part~=\"value\"], [data-part~=\"hint\"]");
			if (value?.textContent) value.textContent = "";
		}
		this.#triggerAbort?.abort();
		this.#triggerAbort = null;
		this.#currentTrigger = null;
		this.#triggerWasDisabled = false;
		this.#triggerWasHidden = false;
	}
};
function isSameOptionState$1(a, b) {
	return a?.value === b.value && a.disabled === b.disabled && a.hidden === b.hidden && a.availability === b.availability;
}
function isTriggerExplicitlyDisabled$1(trigger) {
	return trigger.hasAttribute("disabled") || "disabled" in trigger && trigger.disabled === true;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu.js
safeDefine(MenuElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/content.js
let idCounter = 0;
/** One accessible menu page. Root and nested pages are sibling children of `<media-menu>`. */
var MenuContentElement = class MenuContentElement extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.open = false;
		this.defaultOpen = false;
		this.#root = new s$1(this, {
			context: menuContext,
			subscribe: true
		});
		this.#provider = new i(this, { context: menuContext });
		this.#core = new MenuCore();
		this.#generatedId = `vjs-menu-content-${idCounter++}`;
		this.#context = null;
		this.#menu = null;
		this.#parentMenu = null;
		this.#rootMenu = null;
		this.#ownsMenu = false;
		this.#disconnect = null;
		this.#cleanupRegistration = null;
		this.#cleanupParentRegistration = null;
		this.#optionStates = /* @__PURE__ */ new Map();
		this.#optionSource = Symbol("menu");
		this.#optionState = null;
		this.#optionParent = null;
		this.#stateTrigger = null;
		this.#triggerWasDisabled = false;
		this.#triggerWasHidden = false;
		this.#wasActive = false;
		this.#normalizing = false;
		this.#handleKeyDown = (event) => {
			const isNavigationKey = isMenuNavigationKey(event);
			const defaultPrevented = event.defaultPrevented;
			this.#menu?.contentProps.onKeyDown(event);
			if (this.#parentMenu && (event.key === "ArrowLeft" || event.key === "Escape") && !defaultPrevented) {
				event.preventDefault();
				this.#menu?.close("escape");
			}
			if (event.key !== "Escape" && isNavigationKey) event.stopPropagation();
		};
		this.#handleFocusOut = (event) => {
			this.#menu?.contentProps.onFocusOut(event);
		};
		this.#setOptionState = (source, optionState) => {
			const previous = this.#optionStates.get(source);
			if (optionState && isSameOptionState(previous, optionState)) return;
			if (!optionState && !previous) return;
			if (optionState) this.#optionStates.set(source, optionState);
			else this.#optionStates.delete(source);
			this.#optionState = resolveMenuOptionState(this.#optionStates.values());
			if ((this.#optionState?.disabled || this.#optionState?.hidden) && this.open && this.#parentMenu) this.close("imperative-action");
			this.#syncOptionState(this.#findTrigger());
			this.#optionParent?.setOptionState(this.#optionSource, this.#optionState);
		};
	}
	static {
		this.tagName = "media-menu-content";
	}
	static {
		this.properties = {
			open: { type: Boolean },
			defaultOpen: {
				type: Boolean,
				attribute: "default-open"
			}
		};
	}
	#root;
	#provider;
	#core;
	#generatedId;
	#context;
	#menu;
	#parentMenu;
	#rootMenu;
	#ownsMenu;
	#disconnect;
	#cleanupRegistration;
	#cleanupParentRegistration;
	#optionStates;
	#optionSource;
	#optionState;
	#optionParent;
	#stateTrigger;
	#triggerWasDisabled;
	#triggerWasHidden;
	#wasActive;
	#normalizing;
	get context() {
		return this.#context;
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.#normalizing) return;
		this.#disconnect = new AbortController();
		applyElementProps(this, {
			onKeyDown: this.#handleKeyDown,
			onFocusOut: this.#handleFocusOut
		}, { signal: this.#disconnect.signal });
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.#normalizing) return;
		this.#cleanupMenu();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	openMenu(reason = "imperative-action") {
		this.#menu?.open(reason);
	}
	close(reason = "imperative-action") {
		this.#menu?.close(reason);
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		if (!this.hasUpdated && this.defaultOpen && !this.open) this.open = true;
		if (this.#ownsMenu && this.#menu && changed.has("open")) this.#menu.syncOpen(this.open);
	}
	update(changed) {
		super.update(changed);
		const root = this.#root.value ?? null;
		if (!root) return;
		if (!this.id) this.id = this.#generatedId;
		const trigger = this.#findTrigger();
		const parentContent = trigger?.closest(MenuContentElement.tagName) ?? null;
		if (parentContent && !parentContent.context) {
			this.hidden = true;
			requestAnimationFrame(() => this.requestUpdate());
			return;
		}
		const parentMenu = parentContent?.context?.menu ?? null;
		const isSubmenu = parentMenu !== null;
		if (root.menu !== this.#rootMenu || parentMenu !== this.#parentMenu) {
			this.#cleanupMenu();
			this.#rootMenu = root.menu;
			this.#parentMenu = parentMenu;
			this.#setupMenu(root, parentMenu);
		}
		this.#setOptionParent(parentContent?.context ?? root);
		const menu = this.#menu;
		if (!menu) return;
		const input = menu.input.current;
		this.#core.setInput({
			...input,
			isSubmenu
		});
		const state = this.#core.getState();
		const active = !isSubmenu || state.open || state.status === "ending";
		applyElementProps(this, {
			...this.#core.getContentAttrs(),
			hidden: !active
		});
		applyStateDataAttrs(this, state, MenuContentDataAttrs);
		if (trigger) {
			menu.setTriggerElement(trigger);
			applyElementProps(trigger, this.#core.getTriggerAttrs(state, active ? this.id : void 0));
			this.#syncOptionState(trigger);
		}
		if (isSubmenu && active && !this.#wasActive) menu.highlightInitialItem({ preventScroll: true });
		this.#wasActive = active;
		this.#context = {
			core: this.#core,
			menu,
			popup: root.popup,
			state,
			setOptionState: this.#setOptionState
		};
		this.#provider.setValue(this.#context);
		root.popup.sync();
		this.#normalize();
	}
	#setupMenu(root, parentMenu) {
		if (parentMenu !== null) {
			this.#ownsMenu = true;
			this.#menu = createMenu({
				transition: createTransition(),
				onOpenChange: (nextOpen, details) => {
					if (this.dispatchEvent(new CustomEvent("open-change", {
						bubbles: true,
						cancelable: true,
						composed: true,
						detail: {
							open: nextOpen,
							...details
						}
					}))) this.open = nextOpen;
				},
				closeOnEscape: () => true,
				closeOnOutsideClick: () => false
			});
			this.#menu.setPopupElement(this);
			this.#cleanupParentRegistration = parentMenu.registerSubmenu(this.#menu);
			const signal = this.#disconnect?.signal;
			if (signal) this.#menu.input.subscribe(() => this.requestUpdate(), { signal });
			this.#menu.syncOpen(this.open);
		} else {
			this.#ownsMenu = false;
			this.#menu = root.menu;
		}
		this.#cleanupRegistration = root.popup.registerContent({
			menu: this.#menu,
			parent: parentMenu,
			element: this
		});
	}
	#cleanupMenu() {
		this.#cleanupRegistration?.();
		this.#cleanupRegistration = null;
		this.#cleanupParentRegistration?.();
		this.#cleanupParentRegistration = null;
		this.#setOptionParent(null);
		this.#clearOptionState();
		this.#optionStates.clear();
		this.#optionState = null;
		if (this.#ownsMenu) this.#menu?.destroy();
		this.#menu = null;
		this.#context = null;
		this.#rootMenu = null;
		this.#parentMenu = null;
		this.#ownsMenu = false;
		this.#wasActive = false;
	}
	#findTrigger() {
		if (!this.id) return null;
		return [...this.getRootNode().querySelectorAll("[commandfor], media-menu-item")].find((element) => element.getAttribute("commandfor") === this.id || element.commandfor === this.id) ?? null;
	}
	/** Keep every page as a direct popup child, including authored nested pages. */
	#normalize() {
		const popup = this.closest("media-menu");
		if (!popup || this.parentElement === popup) return;
		this.#normalizing = true;
		popup.append(this);
		this.#normalizing = false;
	}
	#handleKeyDown;
	#handleFocusOut;
	#setOptionState;
	#setOptionParent(parent) {
		if (parent?.menu === this.#optionParent?.menu) {
			this.#optionParent = parent;
			return;
		}
		this.#optionParent?.setOptionState(this.#optionSource, null);
		this.#optionParent = parent;
		this.#optionParent?.setOptionState(this.#optionSource, this.#optionState);
	}
	#syncOptionState(trigger) {
		if (trigger !== this.#stateTrigger) {
			this.#clearOptionState();
			this.#stateTrigger = trigger;
			this.#triggerWasDisabled = trigger ? isTriggerExplicitlyDisabled(trigger) : false;
			this.#triggerWasHidden = trigger?.hidden === true;
		}
		if (!trigger) return;
		const disabled = this.#optionState?.disabled || this.#triggerWasDisabled;
		applyElementProps(trigger, {
			disabled: disabled || void 0,
			"aria-disabled": disabled ? "true" : void 0,
			"data-availability": this.#optionState?.availability,
			hidden: this.#triggerWasHidden || this.#optionState?.hidden || void 0
		});
		const value = trigger.querySelector("[data-part~=\"value\"], [data-part~=\"hint\"]");
		if (value && value.textContent !== this.#optionState?.value) value.textContent = this.#optionState?.value ?? "";
	}
	#clearOptionState() {
		const trigger = this.#stateTrigger;
		if (!trigger) return;
		applyElementProps(trigger, {
			disabled: this.#triggerWasDisabled || void 0,
			"aria-disabled": this.#triggerWasDisabled ? "true" : void 0,
			"data-availability": void 0,
			hidden: this.#triggerWasHidden || void 0
		});
		const value = trigger.querySelector("[data-part~=\"value\"], [data-part~=\"hint\"]");
		if (value?.textContent) value.textContent = "";
		this.#stateTrigger = null;
		this.#triggerWasDisabled = false;
		this.#triggerWasHidden = false;
	}
};
function isSameOptionState(a, b) {
	return a?.value === b.value && a.disabled === b.disabled && a.hidden === b.hidden && a.availability === b.availability;
}
function isTriggerExplicitlyDisabled(trigger) {
	return trigger.hasAttribute("disabled") || "disabled" in trigger && trigger.disabled === true;
}
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu-content.js
safeDefine(MenuContentElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/item.js
/**
* Menu action; the element itself takes `role="menuitem"`. Activation fires a cancelable `select` event and then closes
* the menu, unless `commandfor` names a nested `<media-menu-content>` page to open instead.
*/
var MenuItemElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.commandfor = void 0;
		this.#ctx = new s$1(this, {
			context: menuContext,
			subscribe: true
		});
		this.#disconnect = null;
		this.#registeredMenu = null;
		this.#cleanupRegistration = null;
	}
	static {
		this.tagName = "media-menu-item";
	}
	static {
		this.properties = {
			disabled: { type: Boolean },
			commandfor: { type: String }
		};
	}
	#ctx;
	#disconnect;
	#registeredMenu;
	#cleanupRegistration;
	connectedCallback() {
		super.connectedCallback();
		this.#disconnect = new AbortController();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#cleanupRegistration?.();
		this.#cleanupRegistration = null;
		this.#registeredMenu = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	update(_changed) {
		super.update(_changed);
		const ctx = this.#ctx.value;
		if (!ctx || !this.#disconnect) return;
		if (this.#registeredMenu !== ctx.menu) {
			this.#cleanupRegistration?.();
			this.#registeredMenu = ctx.menu;
			this.#cleanupRegistration = ctx.menu.registerItem(this);
			applyElementProps(this, {
				onClick: (event) => {
					const currentCtx = this.#ctx.value;
					if (!currentCtx || this.#isDisabled()) return;
					const target = this.commandfor;
					if (target) this.#openSubmenu(target);
					else {
						const select = new CustomEvent("select", {
							bubbles: true,
							cancelable: true
						});
						if (!this.dispatchEvent(select)) {
							event.preventDefault();
							return;
						}
						completeMenuItemSelection(currentCtx.menu);
					}
					event.preventDefault();
				},
				onKeyDown: (event) => {
					if (!this.#ctx.value || this.#isDisabled() || event.key !== "ArrowRight") return;
					const target = this.commandfor;
					if (!target) return;
					this.#openSubmenu(target);
					event.preventDefault();
				},
				onPointerenter: () => {
					const currentCtx = this.#ctx.value;
					if (!this.#isDisabled()) currentCtx?.menu.highlight(this, {
						focus: false,
						pointer: true
					});
				}
			}, { signal: this.#disconnect.signal });
		}
		const hasSubmenu = Boolean(this.commandfor);
		applyElementProps(this, {
			role: "menuitem",
			"aria-disabled": this.#isDisabled() ? "true" : void 0,
			...hasSubmenu && {
				"aria-haspopup": "menu",
				"aria-expanded": "false",
				"data-has-submenu": ""
			}
		});
	}
	#openSubmenu(id) {
		this.getRootNode().querySelector(`#${CSS.escape(id)}`)?.openMenu?.("click");
	}
	#isDisabled() {
		return this.disabled || this.getAttribute("aria-disabled") === "true";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu-item.js
safeDefine(MenuItemElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/separator.js
/** Visual divider between groups of menu items; the element itself takes `role="separator"`. */
var MenuSeparatorElement = class extends UIElement {
	static {
		this.tagName = "media-menu-separator";
	}
	update(_changed) {
		super.update(_changed);
		applyElementProps(this, { role: "separator" });
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu-separator.js
safeDefine(MenuSeparatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/radio-group/element.js
/** @fires value-change - Fired when the selected value changes. */
var RadioGroupElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.value = "";
		this.#provider = new i(this, { context: radioGroupContext });
	}
	static {
		this.properties = { value: { type: String } };
	}
	#provider;
	update(changed) {
		super.update(changed);
		this.#provider.setValue({
			value: this.value,
			onValueChange: (next) => {
				this.value = next;
				this.dispatchEvent(new CustomEvent("value-change", {
					detail: { value: next },
					bubbles: true
				}));
			}
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/group-controller.js
var MenuGroupController = class {
	#host;
	#provider;
	#contextValue = { registerLabel: (id) => this.#registerLabel(id) };
	#labelId;
	#appliedLabelId;
	constructor(host) {
		this.#host = host;
		this.#provider = new i(host, {
			context: menuGroupContext,
			initialValue: this.#contextValue
		});
	}
	applyProps() {
		const currentLabelledBy = this.#host.getAttribute("aria-labelledby") ?? void 0;
		const hasExplicitLabelledBy = currentLabelledBy !== void 0 && currentLabelledBy !== this.#appliedLabelId;
		if (this.#host.hasAttribute("aria-label") || hasExplicitLabelledBy) {
			if (this.#appliedLabelId && currentLabelledBy === this.#appliedLabelId) this.#host.removeAttribute("aria-labelledby");
			this.#appliedLabelId = void 0;
			applyElementProps(this.#host, { role: "group" });
			return;
		}
		this.#appliedLabelId = this.#labelId;
		applyElementProps(this.#host, {
			role: "group",
			"aria-labelledby": this.#labelId
		});
	}
	#registerLabel(id) {
		this.#labelId = id;
		this.#provider.setValue(this.#contextValue);
		this.#host.requestUpdate();
		return () => {
			if (this.#labelId !== id) return;
			this.#labelId = void 0;
			this.#host.requestUpdate();
		};
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/radio-item.js
/**
* Menu item that selects its `value` in the enclosing `<media-menu-radio-group>` and closes the menu. The element
* itself takes `role="menuitemradio"`, checked while its value matches the group's.
*/
var MenuRadioItemElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.value = "";
		this.disabled = false;
		this.#menuCtx = new s$1(this, {
			context: menuContext,
			subscribe: true
		});
		this.#groupCtx = new s$1(this, {
			context: radioGroupContext,
			subscribe: true
		});
		this.#disconnect = null;
		this.#registered = false;
		this.#cleanupRegistration = null;
	}
	static {
		this.tagName = "media-menu-radio-item";
	}
	static {
		this.properties = {
			value: { type: String },
			disabled: { type: Boolean }
		};
	}
	#menuCtx;
	#groupCtx;
	#disconnect;
	#registered;
	#cleanupRegistration;
	connectedCallback() {
		super.connectedCallback();
		this.#disconnect = new AbortController();
		this.#registered = false;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#cleanupRegistration?.();
		this.#cleanupRegistration = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
		this.#registered = false;
	}
	update(_changed) {
		super.update(_changed);
		const menuCtx = this.#menuCtx.value;
		const groupCtx = this.#groupCtx.value;
		if (!menuCtx || !groupCtx || !this.#disconnect) return;
		if (!this.#registered) {
			this.#registered = true;
			this.#cleanupRegistration = menuCtx.menu.registerItem(this);
			applyElementProps(this, {
				onClick: () => {
					const currentMenuCtx = this.#menuCtx.value;
					const currentGroupCtx = this.#groupCtx.value;
					if (!currentMenuCtx || !currentGroupCtx || this.disabled) return;
					currentGroupCtx.onValueChange(this.value);
					completeMenuItemSelection(currentMenuCtx.menu);
				},
				onPointerenter: () => {
					const currentMenuCtx = this.#menuCtx.value;
					if (!this.disabled) currentMenuCtx?.menu.highlight(this, {
						focus: false,
						pointer: true
					});
				}
			}, { signal: this.#disconnect.signal });
		}
		const checked = groupCtx.value === this.value;
		applyElementProps(this, {
			role: "menuitemradio",
			"aria-checked": String(checked),
			"aria-disabled": this.disabled ? "true" : void 0
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/radio-group.js
/** Group of mutually exclusive `<media-menu-radio-item>` children; the element itself takes `role="group"`. */
var MenuRadioGroupElement = class extends RadioGroupElement {
	static {
		this.tagName = "media-menu-radio-group";
	}
	#group = new MenuGroupController(this);
	#menu = new s$1(this, {
		context: menuContext,
		subscribe: true
	});
	#optionSource = Symbol("menu-option");
	#ariaLabel = null;
	#optionMenu = null;
	#setOptionState = null;
	disconnectedCallback() {
		this.#clearMenuOptionState();
		super.disconnectedCallback();
	}
	update(changed) {
		super.update(changed);
		this.#group.applyProps();
	}
	setItemLabel(item, label) {
		const labelPart = item.querySelector("[data-part~=\"label\"]");
		if (labelPart) labelPart.textContent = label;
		else item.textContent = label;
	}
	/** Applies a generated fallback without replacing an author-provided accessible name. */
	applyDefaultAriaLabel(label) {
		if (this.hasAttribute("aria-labelledby")) return;
		const current = this.getAttribute("aria-label");
		if (current !== null && current !== this.#ariaLabel) return;
		this.#ariaLabel = label;
		this.setAttribute("aria-label", label);
	}
	publishMenuOptionState(disabled, hidden, availability) {
		const context = this.#menu.value ?? null;
		if (context?.menu !== this.#optionMenu) {
			this.#clearMenuOptionState();
			this.#optionMenu = context?.menu ?? null;
			this.#setOptionState = context?.setOptionState ?? null;
		}
		if (!this.#setOptionState) return;
		const selectedItem = findElementChild(this, (item) => item instanceof MenuRadioItemElement && item.value === this.value);
		const value = selectedItem?.querySelector("[data-part~=\"label\"]")?.textContent ?? selectedItem?.textContent?.trim() ?? "";
		this.#setOptionState(this.#optionSource, {
			value,
			disabled,
			hidden,
			availability
		});
	}
	#clearMenuOptionState() {
		this.#setOptionState?.(this.#optionSource, null);
		this.#optionMenu = null;
		this.#setOptionState = null;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/i18n/cache-key.js
/** Serialize text content and parameters so dynamic labels invalidate their caches. */
function cacheKey(text, params) {
	return JSON.stringify([text, params]);
}
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/menu/item-indicator.js
/**
* Decorative checked-state mark inside a menu item, hidden from assistive technology. It stays `hidden` unless
* `checked` or `force-mount` is set; option radio groups set `checked` on the indicators in the items they generate.
*/
var MenuItemIndicatorElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.checked = false;
		this.forceMount = false;
	}
	static {
		this.tagName = "media-menu-item-indicator";
	}
	static {
		this.properties = {
			checked: { type: Boolean },
			forceMount: {
				type: Boolean,
				attribute: "force-mount"
			}
		};
	}
	update(_changed) {
		super.update(_changed);
		const hidden = !this.checked && !this.forceMount;
		applyElementProps(this, {
			"aria-hidden": "true",
			hidden
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/radio-options/controller.js
/** Renders normalized options into menu radio items and manages their interaction lifecycle. */
var RadioOptionsController = class {
	#host;
	#config;
	#contentKey = "";
	#translator = null;
	#disconnect = null;
	constructor(host, config) {
		this.#host = host;
		this.#config = config;
		host.addController(this);
	}
	hostConnected() {
		this.#disconnect = new AbortController();
		this.#host.addEventListener("value-change", this.#handleValueChange, { signal: this.#disconnect.signal });
	}
	hostDisconnected() {
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	hostDestroyed() {
		this.hostDisconnected();
	}
	sync(state, translator, locale) {
		this.#host.value = state.value;
		applyElementProps(this.#host, {
			"aria-disabled": state.disabled ? "true" : void 0,
			hidden: state.hidden ? "" : void 0
		});
		const template = getTemplateElement(this.#host);
		const templateRoot = template ? getTemplateRoot(template) : null;
		const itemRoot = templateRoot?.localName === MenuRadioItemElement.tagName ? templateRoot : null;
		const contentKey = `${state.options.map((option) => `${option.value}:${cacheKey(option.label, option.labelParams)}:${this.#config.getOptionCacheKey?.(option) ?? ""}`).join("|")}::${locale}::${template?.innerHTML ?? ""}`;
		if (contentKey !== this.#contentKey || translator !== this.#translator) {
			this.#contentKey = contentKey;
			this.#translator = translator;
			for (const child of [...this.#host.children]) {
				if (child === template) continue;
				child.remove();
			}
			const items = state.options.map((option) => {
				const item = itemRoot ? cloneTemplateRoot(itemRoot, this.#host.ownerDocument) : this.#host.ownerDocument.createElement(MenuRadioItemElement.tagName);
				item.value = option.value;
				this.#config.setItemAttributes?.(item, option);
				const label = translateText(option.label, translator, option.labelParams);
				if (this.#config.renderItem) this.#config.renderItem(item, label, option);
				else this.#setItemLabel(item, label);
				return item;
			});
			this.#host.append(...items);
		}
		const optionsByValue = new Map(state.options.map((option) => [option.value, option]));
		for (const item of this.#host.querySelectorAll(MenuRadioItemElement.tagName)) {
			const checked = item.value === state.value;
			const option = optionsByValue.get(item.value);
			item.disabled = state.disabled || option?.disabled === true;
			for (const indicator of item.querySelectorAll(MenuItemIndicatorElement.tagName)) indicator.checked = checked;
		}
	}
	#handleValueChange = (event) => {
		if (event.target !== this.#host) return;
		const { value } = event.detail;
		this.#config.onValueChange(value);
	};
	#setItemLabel(item, label) {
		const labelPart = item.querySelector("[data-part~=\"label\"]");
		if (labelPart) labelPart.textContent = label;
		else item.textContent = label;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/quality-radio-group/element.js
/**
* Menu radio group that generates an Auto `<media-menu-radio-item>` plus one per video rendition, and shares the
* selected label and availability with an enclosing menu. An optional `<template>` holding one
* `<media-menu-radio-item>` customizes each generated item; its `data-part` `label`, `tier`, and `badge` descendants
* receive the rendition's text.
*/
var QualityRadioGroupElement = class extends MenuRadioGroupElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.label = "";
		this.formatRendition = QualityRadioGroupCore.defaultProps.formatRendition;
		this.#core = new QualityRadioGroupCore();
		this.#i18n = new I18nController(this, i18nContext);
		this.#mediaState = new PlayerController(this, playerContext, selectQuality);
		this.#options = new RadioOptionsController(this, {
			renderItem: (item, label, option) => this.#setContent(item, label, option.tier, option.badge),
			setItemAttributes: (item, option) => item.setAttribute("data-rendition", option.value),
			getOptionCacheKey: (option) => `${option.tier ?? ""}:${option.badge ?? ""}`,
			onValueChange: (value) => {
				const media = this.#mediaState.value;
				if (media) this.#core.selectValue(media, value);
			}
		});
	}
	static {
		this.tagName = "media-quality-radio-group";
	}
	static {
		this.properties = {
			...MenuRadioGroupElement.properties,
			disabled: { type: Boolean },
			label: { type: String }
		};
	}
	#core;
	#i18n;
	#mediaState;
	#options;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
	}
	update(changed) {
		const media = this.#mediaState.value;
		let state = null;
		if (media) {
			this.#core.setProps({
				formatRendition: this.formatRendition,
				disabled: this.disabled,
				label: this.label
			});
			this.#core.setMedia(media);
			state = this.#core.getState();
			this.applyDefaultAriaLabel(translateText(this.#core.getLabel(state), this.#i18n.value));
			this.#options.sync(state, this.#i18n.value, this.#i18n.locale);
			this.publishMenuOptionState(state.disabled, state.hidden, state.availability);
		} else this.publishMenuOptionState(true, true, "unsupported");
		super.update(changed);
		if (state) applyStateDataAttrs(this, state, QualityRadioGroupDataAttrs);
	}
	#setContent(item, label, tier, badge) {
		const labelPart = item.querySelector("[data-part~=\"label\"]");
		const tierPart = item.querySelector("[data-part~=\"tier\"]");
		const badgePart = item.querySelector("[data-part~=\"badge\"]");
		if (labelPart) labelPart.textContent = label;
		if (tierPart) {
			tierPart.textContent = tier ?? "";
			tierPart.hidden = !tier;
		}
		if (badgePart) {
			badgePart.textContent = badge ?? "";
			badgePart.hidden = !badge;
		}
		if (!labelPart && !tierPart && !badgePart) item.textContent = [
			label,
			tier,
			badge
		].filter(Boolean).join(" ");
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/quality-radio-group.js
safeDefine(QualityRadioGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu-radio-item.js
safeDefine(MenuRadioItemElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu-item-indicator.js
safeDefine(MenuItemIndicatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/audio-track-radio-group/element.js
/**
* Menu radio group that generates a `<media-menu-radio-item>` per available audio track and shares the selected label
* and availability with an enclosing menu. An optional `<template>` holding one `<media-menu-radio-item>` customizes
* each generated item.
*/
var AudioTrackRadioGroupElement = class extends MenuRadioGroupElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.label = "";
		this.formatTrack = AudioTrackRadioGroupCore.defaultProps.formatTrack;
		this.#core = new AudioTrackRadioGroupCore();
		this.#i18n = new I18nController(this, i18nContext);
		this.#mediaState = new PlayerController(this, playerContext, selectAudioTrack);
		this.#options = new RadioOptionsController(this, {
			setItemAttributes: (item, option) => item.setAttribute("data-track", option.value),
			onValueChange: (value) => {
				const media = this.#mediaState.value;
				if (media) this.#core.selectValue(media, value);
			}
		});
	}
	static {
		this.tagName = "media-audio-track-radio-group";
	}
	static {
		this.properties = {
			...MenuRadioGroupElement.properties,
			disabled: { type: Boolean },
			label: { type: String }
		};
	}
	#core;
	#i18n;
	#mediaState;
	#options;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
	}
	update(changed) {
		const media = this.#mediaState.value;
		let state = null;
		if (media) {
			this.#core.setProps({
				formatTrack: this.formatTrack,
				disabled: this.disabled,
				label: this.label
			});
			this.#core.setMedia(media);
			state = this.#core.getState();
			this.applyDefaultAriaLabel(translateText(this.#core.getLabel(state), this.#i18n.value));
			this.#options.sync(state, this.#i18n.value, this.#i18n.locale);
			this.publishMenuOptionState(state.disabled, state.hidden, state.availability);
		} else this.publishMenuOptionState(true, true, "unsupported");
		super.update(changed);
		if (state) applyStateDataAttrs(this, state, AudioTrackRadioGroupDataAttrs);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/audio-track-radio-group.js
safeDefine(AudioTrackRadioGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/playback-rate-radio-group/element.js
/**
* Menu radio group that generates a `<media-menu-radio-item>` per available playback rate and shares the selected label
* and availability with an enclosing menu. An optional `<template>` holding one `<media-menu-radio-item>` customizes
* each generated item.
*/
var PlaybackRateRadioGroupElement = class extends MenuRadioGroupElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.formatRate = PlaybackRateRadioGroupCore.defaultProps.formatRate;
		this.#core = new PlaybackRateRadioGroupCore();
		this.#i18n = new I18nController(this, i18nContext);
		this.#mediaState = new PlayerController(this, playerContext, selectPlaybackRate);
		this.#options = new RadioOptionsController(this, {
			setItemAttributes: (item, option) => item.setAttribute("data-rate", option.value),
			onValueChange: (value) => {
				const media = this.#mediaState.value;
				if (media) this.#core.selectValue(media, value);
			}
		});
	}
	static {
		this.tagName = "media-playback-rate-radio-group";
	}
	static {
		this.properties = {
			...MenuRadioGroupElement.properties,
			disabled: { type: Boolean }
		};
	}
	#core;
	#i18n;
	#mediaState;
	#options;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
	}
	update(changed) {
		const media = this.#mediaState.value;
		let state = null;
		if (media) {
			this.#core.setProps({
				formatRate: this.formatRate,
				disabled: this.disabled
			});
			this.#core.setMedia(media);
			state = this.#core.getState();
			this.applyDefaultAriaLabel(translateText(this.#core.getLabel(state), this.#i18n.value, this.#core.getLabelParams(state)));
			this.#options.sync(state, this.#i18n.value, this.#i18n.locale);
			this.publishMenuOptionState(state.disabled, state.hidden, state.availability);
		} else this.publishMenuOptionState(true, true, "unsupported");
		super.update(changed);
		if (state) applyStateDataAttrs(this, state, PlaybackRateRadioGroupDataAttrs);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/playback-rate-radio-group.js
safeDefine(PlaybackRateRadioGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/captions-radio-group/element.js
/**
* Menu radio group that generates an Off `<media-menu-radio-item>` plus one per captions and subtitles track, and
* shares the selected label and availability with an enclosing menu. An optional `<template>` holding one
* `<media-menu-radio-item>` customizes each generated item.
*/
var CaptionsRadioGroupElement = class extends MenuRadioGroupElement {
	constructor(..._args) {
		super(..._args);
		this.disabled = false;
		this.label = "";
		this.formatTrack = CaptionsRadioGroupCore.defaultProps.formatTrack;
		this.#core = new CaptionsRadioGroupCore();
		this.#i18n = new I18nController(this, i18nContext);
		this.#mediaState = new PlayerController(this, playerContext, selectTextTrack);
		this.#options = new RadioOptionsController(this, {
			setItemAttributes: (item, option) => item.setAttribute("data-track", option.value),
			onValueChange: (value) => {
				const media = this.#mediaState.value;
				if (media) this.#core.selectValue(media, value);
			}
		});
	}
	static {
		this.tagName = "media-captions-radio-group";
	}
	static {
		this.properties = {
			...MenuRadioGroupElement.properties,
			disabled: { type: Boolean },
			label: { type: String }
		};
	}
	#core;
	#i18n;
	#mediaState;
	#options;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
	}
	update(changed) {
		const media = this.#mediaState.value;
		let state = null;
		if (media) {
			this.#core.setProps({
				formatTrack: this.formatTrack,
				disabled: this.disabled,
				label: this.label
			});
			this.#core.setMedia(media);
			state = this.#core.getState();
			this.applyDefaultAriaLabel(translateText(this.#core.getLabel(state), this.#i18n.value));
			this.#options.sync(state, this.#i18n.value, this.#i18n.locale);
			this.publishMenuOptionState(state.disabled, state.hidden, state.availability);
		} else this.publishMenuOptionState(true, true, "unsupported");
		super.update(changed);
		if (state) applyStateDataAttrs(this, state, CaptionsRadioGroupDataAttrs);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/captions-radio-group.js
safeDefine(CaptionsRadioGroupElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/hotkey/element.js
var HotkeyElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.keys = "";
		this.action = "";
		this.value = void 0;
		this.disabled = false;
		this.target = "player";
		this.#player = new PlayerController(this, playerContext);
		this.#container = new s$1(this, {
			context: containerContext,
			callback: () => this.requestUpdate(),
			subscribe: true
		});
		this.#cleanup = null;
	}
	static {
		this.tagName = "media-hotkey";
	}
	static {
		this.properties = {
			keys: { type: String },
			action: { type: String },
			value: { type: Number },
			disabled: { type: Boolean },
			target: { type: String }
		};
	}
	#player;
	#container;
	#cleanup;
	connectedCallback() {
		super.connectedCallback();
		this.style.display = "none";
		this.#register();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#unregister();
	}
	update(changed) {
		super.update(changed);
		if (this.isConnected) {
			this.#unregister();
			this.#register();
		}
	}
	#register() {
		const store = this.#player.value;
		const container = this.#container.value?.container;
		if (!this.keys || !this.action || !store || !container) return;
		const resolver = resolveHotkeyAction(this.action);
		if (!resolver) return;
		const { value, action } = this;
		this.#cleanup = createHotkey(container, {
			keys: this.keys,
			action,
			value,
			target: this.target,
			disabled: this.disabled,
			repeatable: !isHotkeyToggleAction(action),
			onActivate: (_event, key) => {
				resolver({
					store,
					key,
					value
				});
			}
		});
	}
	#unregister() {
		this.#cleanup?.();
		this.#cleanup = null;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/hotkey.js
safeDefine(HotkeyElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/gesture/element.js
var GestureElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.type = "";
		this.action = "";
		this.value = void 0;
		this.pointer = void 0;
		this.region = void 0;
		this.disabled = false;
		this.#player = new PlayerController(this, playerContext);
		this.#container = new s$1(this, {
			context: containerContext,
			callback: () => this.requestUpdate(),
			subscribe: true
		});
		this.#cleanup = null;
	}
	static {
		this.tagName = "media-gesture";
	}
	static {
		this.properties = {
			type: { type: String },
			action: { type: String },
			value: { type: Number },
			pointer: { type: String },
			region: { type: String },
			disabled: { type: Boolean }
		};
	}
	#player;
	#container;
	#cleanup;
	connectedCallback() {
		super.connectedCallback();
		this.style.display = "none";
		this.#register();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#unregister();
	}
	update(changed) {
		super.update(changed);
		if (this.isConnected) {
			this.#unregister();
			this.#register();
		}
	}
	#register() {
		const store = this.#player.value;
		const container = this.#container.value?.container;
		if (!this.type || !this.action || !store || !container) return;
		const resolver = resolveGestureAction(this.action);
		if (!resolver) return;
		const { value, region } = this;
		const actionValue = getGestureActionValue(this.action, region, value);
		const onActivate = (event) => {
			resolver({
				store,
				value: actionValue,
				event
			});
		};
		const options = {
			pointer: this.pointer,
			region,
			disabled: this.disabled,
			action: this.action,
			value: actionValue
		};
		if (this.type === "doubletap") this.#cleanup = createDoubleTapGesture(container, onActivate, options);
		else if (this.type === "tap") this.#cleanup = createTapGesture(container, onActivate, options);
	}
	#unregister() {
		this.#cleanup?.();
		this.#cleanup = null;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/gesture.js
safeDefine(GestureElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/status-announcer/element.js
var StatusAnnouncerElement = class extends UIElement {
	static {
		this.tagName = "media-status-announcer";
	}
	static {
		this.properties = { closeDelay: {
			type: Number,
			attribute: "close-delay"
		} };
	}
	#i18n = new I18nController(this, i18nContext);
	#core = new StatusAnnouncerCore();
	#storeUnsubscribe = null;
	#player = new s$1(this, {
		context: playerContext,
		callback: (store) => this.#reconnect(store),
		subscribe: true
	});
	#container = new s$1(this, {
		context: containerContext,
		subscribe: true
	});
	#disconnect = null;
	#liveText = null;
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.setAttribute("role", "status");
		this.#ensureLiveText();
		this.#disconnect = new AbortController();
		this.#core.state.subscribe(() => this.requestUpdate(), { signal: this.#disconnect.signal });
		this.#reconnect();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#storeUnsubscribe?.();
		this.#storeUnsubscribe = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	destroyCallback() {
		this.#storeUnsubscribe?.();
		this.#core.destroy();
		super.destroyCallback();
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		this.#core.setProps({
			closeDelay: this.closeDelay,
			labels: createStatusAnnouncerLabels(this.#i18n.value, this.#i18n.locale),
			shouldAnnounce: () => shouldAnnounceStatusChange(this.#container.value?.container)
		});
	}
	update(changed) {
		super.update(changed);
		const label = this.#core.state.current.label;
		const liveText = this.#ensureLiveText();
		if (label === null) liveText.replaceChildren();
		else liveText.replaceChildren(document.createTextNode(label));
	}
	#reconnect(store = this.#player.value) {
		this.#storeUnsubscribe?.();
		this.#storeUnsubscribe = null;
		if (!store) {
			this.#core.resetSnapshot();
			return;
		}
		this.#storeUnsubscribe = subscribeToStatusAnnouncer(store, this.#core);
	}
	#ensureLiveText() {
		if (this.#liveText?.isConnected) return this.#liveText;
		const existing = this.querySelector("[data-status-announcer-content]");
		this.#liveText = existing ?? document.createElement("span");
		this.#liveText.setAttribute("data-status-announcer-content", "");
		if (!existing) this.append(this.#liveText);
		return this.#liveText;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/status-announcer.js
safeDefine(StatusAnnouncerElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/input-indicator/element.js
var InputIndicatorElement = class extends UIElement {
	constructor(..._args) {
		super(..._args);
		this.player = new PlayerController(this, playerContext);
		this.container = new s$1(this, {
			context: containerContext,
			callback: () => this.#reconnect(),
			subscribe: true
		});
		this.#disconnect = null;
		this.#inputActionUnsubscribe = null;
		this.#visibilityUnsubscribe = null;
		this.#visibilityHandle = null;
		this.#lastGeneration = 0;
		this.#snapshot = null;
	}
	get options() {
		return {};
	}
	#disconnect;
	#inputActionUnsubscribe;
	#visibilityUnsubscribe;
	#visibilityHandle;
	#lastGeneration;
	#snapshot;
	#getVisibilityHandle() {
		return this.#visibilityHandle ??= { close: () => this.core.close() };
	}
	#payloadSnapshot() {
		return this.#snapshot ?? this.core.state.current;
	}
	connectedCallback() {
		super.connectedCallback();
		if (this.destroyed) return;
		this.#snapshot = this.core.state.current;
		this.#disconnect = new AbortController();
		this.core.state.subscribe(() => this.requestUpdate(), { signal: this.#disconnect.signal });
		this.transition.state.subscribe(() => this.requestUpdate(), { signal: this.#disconnect.signal });
		this.hidden = true;
		this.#reconnect();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#inputActionUnsubscribe?.();
		this.#visibilityUnsubscribe?.();
		this.#inputActionUnsubscribe = null;
		this.#visibilityUnsubscribe = null;
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	destroyCallback() {
		this.#inputActionUnsubscribe?.();
		this.#visibilityUnsubscribe?.();
		this.core.destroy();
		this.transition.destroy();
		this.liveIndicator.remove();
		super.destroyCallback();
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		this.syncCoreProps();
	}
	update(changed) {
		super.update(changed);
		this.#syncTransition();
		const currentState = this.core.state.current;
		const transitionState = this.transition.state.current;
		if (!isIndicatorPresent(currentState, transitionState)) {
			this.liveIndicator.remove();
			return;
		}
		const state = getRenderedIndicatorState(currentState, this.#payloadSnapshot(), transitionState);
		this.liveIndicator.render(state);
	}
	#syncTransition() {
		const currentState = this.core.state.current;
		if (currentState.open) {
			this.#snapshot = currentState;
			if (this.#lastGeneration !== currentState.generation) {
				this.#lastGeneration = currentState.generation;
				const transitionState = this.transition.state.current;
				if (!transitionState.active || this.options.replayOnUpdate !== false) this.transition.open(this.liveIndicator.element);
				else if (transitionState.status === "ending") this.transition.cancel();
			}
			return;
		}
		const { active, status } = this.transition.state.current;
		if (active && status !== "ending") this.transition.close(this.liveIndicator.element);
	}
	#reconnect() {
		if (!this.container) return;
		this.#inputActionUnsubscribe?.();
		this.#visibilityUnsubscribe?.();
		this.#inputActionUnsubscribe = null;
		this.#visibilityUnsubscribe = null;
		const container = this.container.value?.container;
		if (!container) return;
		const visibility = getIndicatorVisibilityCoordinator(container);
		const visibilityHandle = this.#getVisibilityHandle();
		this.#visibilityUnsubscribe = visibility.register(visibilityHandle);
		this.#inputActionUnsubscribe = subscribeToInputActions(container, (event) => {
			if (this.core.processEvent(event, getMediaSnapshot(this.player.value))) visibility.show(visibilityHandle);
		});
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/input-indicator/live-indicator.js
var LiveIndicator = class {
	#host;
	#dataAttrs;
	#render;
	constructor(options) {
		this.#host = options.host;
		this.#dataAttrs = options.dataAttrs;
		this.#render = options.render;
	}
	get element() {
		return this.#host;
	}
	render(state) {
		this.#host.hidden = false;
		applyStateDataAttrs(this.#host, state, this.#dataAttrs);
		this.#render(this.#host, state);
		return this.#host;
	}
	remove() {
		this.#host.hidden = true;
		for (const key in this.#dataAttrs) {
			const name = this.#dataAttrs[key];
			if (name) this.#host.removeAttribute(name);
		}
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/volume-indicator/element.js
var VolumeIndicatorElement = class extends InputIndicatorElement {
	static {
		this.tagName = "media-volume-indicator";
	}
	static {
		this.properties = { closeDelay: {
			type: Number,
			attribute: "close-delay"
		} };
	}
	#i18n = new I18nController(this, i18nContext);
	#core = new VolumeIndicatorCore();
	#transition = createTransition();
	#liveIndicator = new LiveIndicator({
		host: this,
		dataAttrs: VolumeIndicatorDataAttrs,
		render: renderVolumeIndicator
	});
	#options = { replayOnUpdate: false };
	get core() {
		return this.#core;
	}
	get transition() {
		return this.#transition;
	}
	get liveIndicator() {
		return this.#liveIndicator;
	}
	get options() {
		return this.#options;
	}
	syncCoreProps() {
		this.#core.setProps({
			closeDelay: this.closeDelay,
			labels: createInputIndicatorLabels(this.#i18n.value)
		});
	}
};
function renderVolumeIndicator(element, state) {
	const fill = element.querySelector("media-volume-indicator-fill");
	const value = element.querySelector("media-volume-indicator-value");
	if (state.fill) fill?.style.setProperty(VolumeIndicatorCSSVars.fill, state.fill);
	else fill?.style.removeProperty(VolumeIndicatorCSSVars.fill);
	if (value) value.textContent = getVolumeIndicatorDisplayValue(state);
}
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/volume-indicator.js
safeDefine(VolumeIndicatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/volume-indicator/fill.js
var VolumeIndicatorFillElement = class extends UIElement {
	static {
		this.tagName = "media-volume-indicator-fill";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/volume-indicator-fill.js
safeDefine(VolumeIndicatorFillElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/volume-indicator/value.js
var VolumeIndicatorValueElement = class extends UIElement {
	static {
		this.tagName = "media-volume-indicator-value";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/volume-indicator-value.js
safeDefine(VolumeIndicatorValueElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/status-indicator/element.js
var StatusIndicatorElement = class extends InputIndicatorElement {
	static {
		this.tagName = "media-status-indicator";
	}
	static {
		this.properties = {
			actions: { type: String },
			closeDelay: {
				type: Number,
				attribute: "close-delay"
			}
		};
	}
	#i18n = new I18nController(this, i18nContext);
	#core = new StatusIndicatorCore();
	#transition = createTransition();
	#liveIndicator = new LiveIndicator({
		host: this,
		dataAttrs: StatusIndicatorDataAttrs,
		render: renderStatusIndicator
	});
	#options = { replayOnUpdate: false };
	#deriveCustomStatus;
	/**
	* Derives display details for actions without built-in feedback, such as custom hotkey actions. Called only when the
	* built-in derivation returns `null`. Set as a JavaScript property; it has no attribute.
	*/
	get deriveCustomStatus() {
		return this.#deriveCustomStatus;
	}
	set deriveCustomStatus(value) {
		this.#deriveCustomStatus = value;
		this.requestUpdate();
	}
	get core() {
		return this.#core;
	}
	get transition() {
		return this.#transition;
	}
	get liveIndicator() {
		return this.#liveIndicator;
	}
	get options() {
		return this.#options;
	}
	syncCoreProps() {
		this.#core.setProps({
			actions: parseActions(this.actions),
			closeDelay: this.closeDelay,
			labels: createInputIndicatorLabels(this.#i18n.value),
			deriveCustomStatus: this.#deriveCustomStatus
		});
	}
};
function parseActions(actions) {
	return actions?.split(/[\s,]+/).filter(Boolean);
}
function renderStatusIndicator(element, state) {
	const value = element.querySelector("media-status-indicator-value");
	if (!value) return;
	value.textContent = getStatusIndicatorDisplayValue(state);
}
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/status-indicator.js
safeDefine(StatusIndicatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/status-indicator/value.js
var StatusIndicatorValueElement = class extends UIElement {
	static {
		this.tagName = "media-status-indicator-value";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/status-indicator-value.js
safeDefine(StatusIndicatorValueElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/seek-indicator/element.js
var SeekIndicatorElement = class extends InputIndicatorElement {
	static {
		this.tagName = "media-seek-indicator";
	}
	static {
		this.properties = { closeDelay: {
			type: Number,
			attribute: "close-delay"
		} };
	}
	#i18n = new I18nController(this, i18nContext);
	#core = new SeekIndicatorCore();
	#transition = createTransition();
	#liveIndicator = new LiveIndicator({
		host: this,
		dataAttrs: SeekIndicatorDataAttrs,
		render: renderSeekIndicator
	});
	get core() {
		return this.#core;
	}
	get transition() {
		return this.#transition;
	}
	get liveIndicator() {
		return this.#liveIndicator;
	}
	syncCoreProps() {
		this.#core.setProps({
			closeDelay: this.closeDelay,
			locale: this.#i18n.locale
		});
	}
};
function renderSeekIndicator(element, state) {
	const value = element.querySelector("media-seek-indicator-value");
	if (!value) return;
	value.textContent = getSeekIndicatorDisplayValue(state);
}
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/seek-indicator.js
safeDefine(SeekIndicatorElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/seek-indicator/value.js
var SeekIndicatorValueElement = class extends UIElement {
	static {
		this.tagName = "media-seek-indicator-value";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/seek-indicator-value.js
safeDefine(SeekIndicatorValueElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/internal/skins/neutral-video/register.js
registerIcons("neutral", {
	"airplay-enter": airPlayEnterIcon,
	"airplay-exit": airPlayExitIcon,
	"captions-off": captionsOffIcon,
	"captions-on": captionsOnIcon,
	"cast-enter": castEnterIcon,
	"cast-exit": castExitIcon,
	check: checkIcon,
	chevron: chevronIcon,
	"fullscreen-enter": fullscreenEnterIcon,
	"fullscreen-exit": fullscreenExitIcon,
	gear: gearIcon,
	pause: pauseIcon,
	"pip-enter": pipEnterIcon,
	"pip-exit": pipExitIcon,
	play: playIcon,
	restart: restartIcon,
	speech: speechIcon,
	speed: speedIcon,
	spinner: spinnerIcon,
	switches: switchesIcon,
	"volume-high": volumeHighIcon,
	"volume-low": volumeLowIcon,
	"volume-off": volumeOffIcon
});
//#endregion
//#region node_modules/@videojs/html/dist/default/define/video/neutral-skin.js
safeDefine(NeutralVideoSkinElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/presets/audio/player.js
const { PlayerElement, PlayerController: AudioPlayerController } = createPlayer({ features: audioFeatures });
var AudioPlayerElement = class extends PlayerElement {
	static {
		this.tagName = "audio-player";
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/audio/player.js
safeDefine(AudioPlayerElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/internal/skins/neutral-audio/template.js
/** Static template rendered from the finalized VJSC module graph. */
const template = createTemplate(`<media-container class="media-skin media-container audio-skin" data-theme="neutral" data-preset="audio">
<slot>
</slot>
<media-error-dialog class="audio-dialog-root">
<media-dialog-backdrop class="audio-dialog-backdrop">
</media-dialog-backdrop>
<media-dialog-popup class="audio-dialog-popup">
<div class="audio-dialog-content">
<media-dialog-title class="audio-dialog-title">
</media-dialog-title>
<media-dialog-description class="audio-dialog-description">
</media-dialog-description>
</div>
<div class="audio-dialog-actions">
<media-dialog-close class="media-button audio-dialog-close">
</media-dialog-close>
</div>
</media-dialog-popup>
</media-error-dialog>
<media-controls visibility="always">
<media-controls-content class="audio-controls audio-controls-content">
<media-tooltip-group>
<media-controls-group class="audio-controls-start">
<div class="audio-play-button">
<media-buffering-indicator class="media-buffering-indicator audio-play-button-buffering-indicator">
<media-icon family="neutral" name="spinner" class="media-buffering-indicator-spinner-icon">
</media-icon>
</media-buffering-indicator>
<media-play-button class="media-button media-play-button" id="vjs-nAo4ezjf-0-trigger">
<media-icon family="neutral" name="restart" class="media-button-icon media-play-button-restart-icon">
</media-icon>
<media-icon family="neutral" name="play" class="media-button-icon media-play-button-play-icon">
</media-icon>
<media-icon family="neutral" name="pause" class="media-button-icon media-play-button-pause-icon">
</media-icon>
</media-play-button>
<media-tooltip trigger="vjs-nAo4ezjf-0-trigger" boundary="viewport" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
</div>
<media-seek-button seconds="-10" class="media-button media-seek-button" id="vjs-nAo4ezjf-0-2-trigger">
<div class="media-seek-button-content">
<media-icon family="neutral" name="seek" class="media-button-icon media-seek-button-backward-icon">
</media-icon>
<span class="media-seek-button-label media-seek-button-backward-label">10</span>
</div>
</media-seek-button>
<media-tooltip trigger="vjs-nAo4ezjf-0-2-trigger" boundary="viewport" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-seek-button seconds="10" class="media-button media-seek-button" id="vjs-nAo4ezjf-0-3-trigger">
<div class="media-seek-button-content">
<media-icon family="neutral" name="seek" class="media-button-icon">
</media-icon>
<span class="media-seek-button-label media-seek-button-forward-label">10</span>
</div>
</media-seek-button>
<media-tooltip trigger="vjs-nAo4ezjf-0-3-trigger" boundary="viewport" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
</media-controls-group>
<media-controls-group class="audio-time-slider-group">
<media-time-group class="media-time-group">
<media-time class="media-time-toggle media-time-current-value" type="current" toggle>
</media-time>
<media-time-separator class="media-time-separator">
</media-time-separator>
<media-time class="media-time-duration-value" type="duration">
</media-time>
</media-time-group>
<media-time-slider class="media-slider audio-time-slider">
<media-slider-track class="media-slider-track">
<media-slider-buffer class="media-slider-buffer">
</media-slider-buffer>
<media-slider-fill class="media-slider-fill">
</media-slider-fill>
</media-slider-track>
<media-slider-thumb class="media-slider-thumb audio-time-slider-thumb">
</media-slider-thumb>
<media-slider-preview class="media-slider-preview" overflow="clamp">
<div class="media-slider-preview-content media-popup-surface media-tooltip audio-time-slider-preview-content">
<media-slider-value class="audio-time-slider-value" type="pointer">
</media-slider-value>
</div>
</media-slider-preview>
</media-time-slider>
</media-controls-group>
<media-controls-group class="audio-controls-end">
<media-mute-button commandfor="vjs-IMkbfqkS-0-popup" class="media-button media-mute-button" id="vjs-nAo4ezjf-0-4-trigger">
<media-icon family="neutral" name="volume-off" class="media-button-icon media-mute-button-off-icon">
</media-icon>
<media-icon family="neutral" name="volume-low" class="media-button-icon media-mute-button-low-icon">
</media-icon>
<media-icon family="neutral" name="volume-high" class="media-button-icon media-mute-button-high-icon">
</media-icon>
</media-mute-button>
<media-tooltip trigger="vjs-nAo4ezjf-0-4-trigger" delay="0" sticky side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-volume-popover open-on-hover delay="200" close-delay="100" side="left" boundary="viewport" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-volume-popover" id="vjs-IMkbfqkS-0-popup">
<media-volume-slider class="media-slider media-volume-slider" thumb-alignment="edge" orientation="horizontal">
<media-slider-track class="media-slider-track">
<media-slider-fill class="media-slider-fill">
</media-slider-fill>
</media-slider-track>
<media-slider-thumb class="media-slider-thumb media-volume-slider-thumb">
</media-slider-thumb>
</media-volume-slider>
</media-volume-popover>
<media-playback-rate-button commandfor="vjs-Dapd3-W_-0-popup" class="media-button media-playback-rate-button" id="vjs-nAo4ezjf-0-5-trigger">
</media-playback-rate-button>
<media-tooltip trigger="vjs-nAo4ezjf-0-5-trigger" boundary="viewport" side="top" class="media-popup media-popup-safe-area media-popup-transition media-popup-surface media-tooltip">
<media-tooltip-label>
</media-tooltip-label>
<media-tooltip-shortcut class="media-tooltip-shortcut">
</media-tooltip-shortcut>
</media-tooltip>
<media-menu side="top" align="center" boundary="viewport" class="media-popup media-popup-surface media-menu-popup audio-settings-menu-popup" id="vjs-Dapd3-W_-0-popup">
<media-menu-content class="media-menu-content">
<media-playback-rate-radio-group class="media-menu-radio-group">
<template>
<media-menu-radio-item class="media-menu-radio-item">
<span data-part="label">
</span>
<media-menu-item-indicator force-mount class="media-menu-item-indicator">
<media-icon family="neutral" name="check" class="media-menu-radio-item-icon">
</media-icon>
</media-menu-item-indicator>
</media-menu-radio-item>
</template>
</media-playback-rate-radio-group>
</media-menu-content>
</media-menu>
</media-controls-group>
</media-tooltip-group>
</media-controls-content>
</media-controls>
<media-hotkey keys="Space" action="togglePaused">
</media-hotkey>
<media-hotkey keys="k" action="togglePaused">
</media-hotkey>
<media-hotkey keys="m" action="toggleMuted">
</media-hotkey>
<media-hotkey keys="ArrowRight" action="seekStep">
</media-hotkey>
<media-hotkey keys="ArrowLeft" action="seekStep">
</media-hotkey>
<media-hotkey keys="l" action="seekStep">
</media-hotkey>
<media-hotkey keys="j" action="seekStep">
</media-hotkey>
<media-hotkey keys="ArrowUp" action="volumeStep">
</media-hotkey>
<media-hotkey keys="ArrowDown" action="volumeStep">
</media-hotkey>
<media-hotkey keys="0-9" action="seekToPercent">
</media-hotkey>
<media-hotkey keys="Home" action="seekToPercent" value="0">
</media-hotkey>
<media-hotkey keys="End" action="seekToPercent" value="100">
</media-hotkey>
<media-hotkey keys="&gt;" action="speedUp">
</media-hotkey>
<media-hotkey keys="&lt;" action="speedDown">
</media-hotkey>
<media-status-announcer class="media-status-announcer">
</media-status-announcer>
</media-container>`);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/audio/neutral-skin2.js
var neutral_skin_default = "@property --media-slider-fill{syntax:\"<percentage>\";inherits:true;initial-value:0%}@property --media-slider-buffer{syntax:\"<percentage>\";inherits:true;initial-value:0%}video-player,live-video-player,media-i18n,media-dialog,media-alert-dialog,media-error-dialog,media-controls{display:contents}media-container video,media-container [slot=poster]{width:100%;height:100%;display:block}media-container video::-webkit-media-text-track-container{z-index:1;scale:.98;translate:0 var(--media-caption-track-y,0);transition:translate var(--media-caption-track-duration,0) ease-out;transition-delay:var(--media-caption-track-delay,0);font-family:inherit}:host{width:100%;display:grid}:host(:focus){outline:none!important}::slotted(video),::slotted(audio){margin:0!important}@layer base.theme{.media-skin[data-theme=neutral]{--media-control-corner-shape:squircle;--media-control-radius:calc(var(--media-spacing) * 2);--media-control-size:calc(var(--media-spacing) * 9);--media-controls-radius:calc(var(--media-spacing) * 3);--media-popover:oklch(0% 0 0/.5);--media-border:oklch(100% 0 0/.1);--media-shadow-surface:0 1px 2px oklch(0% 0 0/.2);--media-shadow-thumb:0 0 0 1px #00000026, 0 1px 3px 0 #00000026, 0 1px 2px -1px #00000026;--media-text-shadow-dialog:0 1px 0 #00000080;--media-backdrop-filter-dialog:blur(16px) saturate(120%);--media-shadow-tooltip:0 0 0 1px var(--media-border), 0 4px 6px -1px oklch(0% 0 0/.2), 0 2px 4px -2px oklch(0% 0 0/.2);--media-duration-dialog:var(--media-duration);--media-duration-indicator:.4s;--media-hidden-offset:100%;--media-hidden-indicator-offset:-100%;--media-menu-item-radius:calc(var(--media-spacing) * 1.5);--media-popover-boundary-offset:calc(var(--media-spacing) * 2);--media-popover-side-offset:calc(var(--media-spacing) * 5);--media-popup-radius:calc(var(--media-spacing) * 2.5);--media-popup-translate-distance:calc(var(--media-spacing) * 2);--media-dialog-width:100%;--media-dialog-max-width:calc(var(--media-spacing) * 64);--media-slider-preview-label-offset:calc(var(--media-spacing) * 5);--media-video-border-radius:var(--media-border-radius,12px)}.media-skin{--media-background:oklch(0% 0 0);--media-foreground:oklch(100% 0 0);--media-controls:oklch(0% 0 0/.35);--media-controls-foreground:var(--media-foreground);--media-popover:oklch(100% 0 0/.1);--media-popover-foreground:var(--media-foreground);--media-primary:var(--media-accent-color,var(--media-default-accent-color));--media-primary-foreground:var(--media-accent-text-color,var(--media-default-accent-text-color));--media-accent:var(--media-accent-color,color-mix(in oklab, var(--media-default-accent-color) 10%, transparent));--media-accent-foreground:var(--media-accent-text-color,currentColor);--media-muted:oklch(100% 0 0/.15);--media-muted-foreground:oklch(100% 0 0/.65);--media-border:oklch(0% 0 0/.1);--media-ring:oklch(100% 0 0);--media-backdrop:oklch(0% 0 0);--media-live-color:oklch(65% .22 27);--media-shadow-surface:0 1px 3px 0 oklch(0% 0 0/.15), 0 1px 2px -1px oklch(0% 0 0/.15);--media-shadow-surface-inset:inset 0 1px 0 0 #ffffff1a, inset 0 0 0 1px #ffffff0d;--media-shadow-thumb:0 0 0 1px #0000001a, 0 1px 3px 0 #00000059, 0 1px 2px -1px #00000059;--media-shadow-tooltip:0 0 0 1px var(--media-border), var(--media-shadow-surface);--media-shadow-separator:0 1px 0 0 oklch(100% 0 0/.075);--media-shadow-current-color:oklch(from currentColor 0 0 0 / clamp(0, calc((l - .5) * .5), .15));--media-shadow-subtle-current-color:color-mix(in oklab, var(--media-shadow-current-color) 40%, transparent);--media-text-shadow-dialog:0 1px 0 #00000040;--media-backdrop-filter-surface:blur(16px) saturate(110%);--media-backdrop-filter-indicator:blur(8px);--media-backdrop-filter-dialog:blur(16px) saturate(110%);--media-control-corner-shape:round;--media-control-radius:99px;--media-control-size:calc(var(--media-spacing) * 9);--media-controls-radius:var(--media-control-radius);--media-default-accent-color:oklch(100% 0 0);--media-default-accent-text-color:oklch(0% 0 0);--media-duration-instant:50ms;--media-duration-fast:.1s;--media-duration:.15s;--media-duration-slow:.2s;--media-duration-slower:.25s;--media-duration-controls:.1s;--media-duration-dialog:.35s;--media-duration-indicator:var(--media-duration-slower);--media-duration-menu:.25s;--media-duration-slider:var(--media-duration-fast);--media-delay-dialog:.1s;--media-hidden-scale:.95;--media-hidden-blur:8px;--media-hidden-offset:calc(var(--media-spacing) * 1);--media-hidden-icon-scale:0;--media-hidden-indicator-scale:.9;--media-hidden-indicator-offset:-25%;--media-hidden-playback-scale:.85;--media-hidden-popup-scale:.95;--media-hidden-popup-blur:4px;--media-hidden-preview-scale:.8;--media-hidden-preview-offset:calc(var(--media-spacing) * 2);--media-hidden-seek-offset:60%;--media-menu-item-radius:calc(var(--media-spacing) * 2);--media-popover-boundary-offset:calc(var(--media-spacing) * 3);--media-popover-side-offset:calc(var(--media-spacing) * 3);--media-popup-radius:calc(var(--media-spacing) * 3);--media-popup-translate-distance:calc(var(--media-spacing) * 2);--media-tooltip-boundary-offset:var(--media-popover-boundary-offset);--media-tooltip-side-offset:var(--media-popover-side-offset);--media-dialog-radius:calc(var(--media-spacing) * 7);--media-dialog-width:calc(100% - var(--media-spacing) * 6);--media-dialog-max-width:calc(var(--media-spacing) * 72);--media-slider-preview-label-offset:calc(var(--media-spacing) * 10.5);--media-video-border-radius:var(--media-border-radius,28px);--media-scale:1;--media-scrollbar-thumb-color:color-mix(in oklab, currentColor 30%, transparent);--media-spacing:calc(var(--media-scale-unit,16px) * var(--media-scale) / 4);scrollbar-color:var(--media-scrollbar-thumb-color) transparent;scrollbar-width:thin}@supports (color:contrast-color(red)){.media-skin{--media-primary-foreground:var(--media-accent-text-color,contrast-color(var(--media-primary)));--media-accent-foreground:var(--media-accent-text-color,contrast-color(var(--media-accent-color,var(--media-internal-accent-text-fallback,oklch(0% 0 0)))))}}@supports (color:oklch(from red l c h)){.media-skin{--media-shadow-subtle-current-color:oklch(from var(--media-shadow-current-color) l c h / calc(alpha * .4))}}@supports (color:oklch(from currentColor l c h)){.media-skin{--media-scrollbar-thumb-color:oklch(from currentColor l c h / .3)}}.media-skin::-webkit-scrollbar-thumb{background:var(--media-scrollbar-thumb-color);border-radius:9999px}.media-skin:fullscreen{--media-object-fit:contain;--media-video-border-radius:0}@media (width>=1280px){.media-skin:fullscreen{--media-scale:1.25}}@media (width>=1536px){.media-skin:fullscreen{--media-scale:1.5}}@media (width>=1920px){.media-skin:fullscreen{--media-scale:1.75}}}@layer base.preset{.media-skin:is([data-preset=audio],[data-preset=live-audio]){--media-background:oklch(100% 0 0);--media-foreground:oklch(0% 0 0);--media-controls:oklch(100% 0 0/.5);--media-controls-foreground:var(--media-foreground);--media-popover:var(--media-controls);--media-popover-foreground:var(--media-foreground);--media-surface-border:oklch(0% 0 0/.05);--media-primary:var(--media-accent-color,var(--media-foreground));--media-border:oklch(0% 0 0/.1);--media-ring:var(--media-foreground);--media-default-accent-color:oklch(0% 0 0);--media-default-accent-text-color:oklch(100% 0 0);--media-internal-accent-text-fallback:oklch(100% 0 0);--media-popover-boundary-offset:calc(var(--media-spacing) * 2);--media-popover-side-offset:calc(var(--media-spacing) * 3);--media-slider-preview-label-offset:calc(var(--media-spacing) * 10)}@supports (color:light-dark(red, red)){.media-skin:is([data-preset=audio],[data-preset=live-audio]){--media-background:light-dark(oklch(100% 0 0),oklch(0% 0 0));--media-foreground:light-dark(oklch(0% 0 0),oklch(100% 0 0));--media-controls:light-dark(oklch(100% 0 0/.5),oklch(0% 0 0/.4));--media-border:light-dark(oklch(0% 0 0/.1),oklch(100% 0 0/.1));--media-default-accent-color:light-dark(oklch(0% 0 0),oklch(100% 0 0));--media-default-accent-text-color:light-dark(oklch(100% 0 0),oklch(0% 0 0));--media-internal-accent-text-fallback:light-dark(oklch(100% 0 0),oklch(0% 0 0))}}.media-skin:is([data-preset=audio],[data-preset=live-audio])[data-theme=neutral]{--media-controls:var(--media-background);--media-popover:var(--media-background);--media-controls-radius:calc(var(--media-spacing) * 3.5);--media-popover-boundary-offset:calc(var(--media-spacing) * 3)}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){.media-skin:is([data-preset=audio],[data-preset=live-audio]){--media-controls:var(--media-background);--media-surface-border:oklch(0% 0 0/.05)}@supports (color:light-dark(red, red)){.media-skin:is([data-preset=audio],[data-preset=live-audio]){--media-surface-border:light-dark(oklch(0% 0 0/.05),#0000)}}}}@layer base.preferences{@media (pointer:fine) and (prefers-reduced-motion:no-preference){.media-skin:not([data-controls-visible]){--media-duration-controls:.3s}}@media (pointer:coarse) and (prefers-reduced-motion:no-preference){.media-skin:not([data-controls-visible]){--media-duration-controls:.15s}}@media (prefers-reduced-motion:reduce){.media-skin{--media-duration-fast:var(--media-duration-instant);--media-duration:var(--media-duration-instant);--media-duration-slow:var(--media-duration-instant);--media-duration-slower:var(--media-duration-instant);--media-duration-controls:var(--media-duration-instant);--media-duration-dialog:var(--media-duration-instant);--media-duration-indicator:var(--media-duration-instant);--media-duration-menu:0s;--media-duration-slider:0s;--media-delay-dialog:0s;--media-hidden-scale:1;--media-hidden-blur:0px;--media-hidden-offset:0px;--media-hidden-icon-scale:1;--media-hidden-indicator-scale:1;--media-hidden-indicator-offset:0px;--media-hidden-playback-scale:1;--media-hidden-popup-scale:1;--media-hidden-popup-blur:0px;--media-hidden-preview-scale:1;--media-hidden-preview-offset:0px;--media-hidden-seek-offset:0px;--media-popup-translate-distance:0px;--media-spinner-animation:none;--media-icon-airplay-fill-animation:none;--media-icon-airplay-triangle-animation:none}}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more){.media-skin{--media-popover:var(--media-background);--media-scrollbar-thumb-color:color-mix(in oklab, currentColor 80%, transparent);--media-backdrop-filter-surface:none;--media-backdrop-filter-indicator:none;--media-backdrop-filter-dialog:none;--media-shadow-surface-inset:inset 0 1px 0 0 #ffffff40, inset 0 0 0 1px #ffffff20;scrollbar-width:auto}@supports (color:oklch(from currentColor l c h)){.media-skin{--media-scrollbar-thumb-color:oklch(from currentColor l c h / .8)}}}@media (forced-colors:active){.media-skin{--media-border:CanvasText;--media-frame-border:CanvasText;--media-popover:Canvas;--media-popover-foreground:CanvasText;--media-ring:CanvasText;--media-shadow-surface-inset:inset 0 1px 0 0 CanvasText, inset 0 0 0 1px CanvasText}}}@layer base{:where(.media-skin){text-align:start;text-transform:none;letter-spacing:normal;font-style:normal;font-weight:400}:where(.media-skin),:where(.media-skin) *,:where(.media-skin) :before,:where(.media-skin) :after{box-sizing:border-box;border:0 solid;margin:0;padding:0}:where(.media-skin) button{font:inherit;color:inherit;text-transform:none;letter-spacing:inherit;appearance:none;background:0 0}:where(.media-skin) img,:where(.media-skin) svg,:where(.media-skin) media-icon{max-width:100%;display:block}:where(.media-skin) svg[fill=currentColor]{fill:currentColor}:where(.media-skin) svg[fill=none]{fill:none}:where(.media-skin) svg[stroke=currentColor]{stroke:currentColor}:where(.media-skin) video{border-radius:inherit;object-fit:var(--media-object-fit,contain);object-position:var(--media-object-position,center);width:100%;max-width:100%;height:100%;display:block}:where(.media-skin) media-icon>svg{width:100%;height:100%}:where(.media-skin) media-tooltip-group,:where(.media-skin) media-dialog,:where(.media-skin) media-alert-dialog,:where(.media-skin) media-error-dialog,:where(.media-skin) media-controls{display:contents}:where(.media-skin) [hidden][hidden]{display:none!important}@media (prefers-reduced-motion:no-preference){.media-skin{interpolate-size:allow-keywords}}@supports not selector(:popover-open){:where(.media-skin) [popover]:not([data-open],[data-ending-style]){display:none!important}.media-skin:is([data-preset=audio],[data-preset=live-audio]){overflow:visible!important}}}@layer components{:where(.media-skin[data-theme=neutral]) .media-status-announcer{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:where(.media-skin[data-theme=neutral]) .media-container,:where(.media-skin[data-theme=neutral]).media-container{isolation:isolate;border-radius:var(--media-video-border-radius);background-color:var(--media-background);width:100%;min-width:0;height:100%;min-height:0;font-family:var(--media-font-family,\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif);font-size:calc(var(--media-spacing) * 3.25);-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;outline-offset:-4px;transition-property:outline-offset,outline-color;transition-duration:.15s;transition-duration:var(--media-duration-fast);--spacing:var(--media-spacing);outline:2px solid #0000;line-height:1.5;transition-timing-function:cubic-bezier(0,0,.2,1);display:block;position:relative;overflow:clip;container:media-root/inline-size}:where(.media-skin[data-theme=neutral]) .media-container:after,:where(.media-skin[data-theme=neutral]).media-container:after{pointer-events:none;z-index:10;border-radius:inherit;content:\"\";border-style:solid;border-width:1px;border-color:var(--media-frame-border);position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-container:focus-visible,:where(.media-skin[data-theme=neutral]).media-container:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-container:fullscreen:after,:where(.media-skin[data-theme=neutral]).media-container:fullscreen:after{content:\"\";display:none}.media-container>slot::slotted(video),:scope.media-container>slot::slotted(video){border-radius:inherit;object-fit:var(--media-object-fit,contain);object-position:var(--media-object-position,center);width:100%;max-width:100%;height:100%;margin:0;display:block}:where(.media-skin[data-theme=neutral]) .media-button{width:var(--media-control-size);height:var(--media-control-size);cursor:pointer;touch-action:manipulation;border-radius:var(--media-control-radius);text-align:center;min-height:0;color:inherit;outline-offset:-2px;transition-property:background-color,color,outline-offset,scale;transition-duration:var(--media-duration);will-change:scale;-webkit-user-select:none;user-select:none;corner-shape:var(--media-control-corner-shape);background-color:#0000;border-style:solid;border-width:0;outline:2px solid #0000;flex-shrink:0;place-items:center;padding:0;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}@media (hover:hover){:where(.media-skin[data-theme=neutral]) .media-button:not([aria-disabled=true]):hover{background-color:var(--media-accent);color:var(--media-accent-foreground)}}:where(.media-skin[data-theme=neutral]) .media-button:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-button:not([aria-disabled=true]):active{scale:.97}:where(.media-skin[data-theme=neutral]) .media-button[aria-disabled=true]{cursor:not-allowed;opacity:.5}@supports (corner-shape:squircle){:where(.media-skin[data-theme=neutral]) .media-button{border-radius:1rem}}@media (prefers-reduced-motion:reduce){:where(.media-skin[data-theme=neutral]) .media-button{will-change:auto;transition-property:background-color,color;scale:1}}:where(.media-skin[data-theme=neutral]) .media-button:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){background-color:var(--media-accent);color:var(--media-accent-foreground)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-actions{gap:calc(var(--media-spacing) * 2);flex-shrink:0;display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-backdrop{display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-close{height:var(--media-control-size);width:auto;padding-inline:calc(var(--media-spacing) * 3);flex:none;font-weight:500;background-color:var(--media-primary)!important;color:var(--media-primary-foreground)!important}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-content{align-items:center;gap:calc(var(--media-spacing) * 2);flex-direction:row;flex:1;min-height:0;display:flex;overflow:visible}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-description{overflow-wrap:anywhere;opacity:.7;margin:0}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-popup{z-index:50;align-items:center;gap:calc(var(--media-spacing) * 4);background-color:var(--media-background);width:100%;height:100%;max-height:none;padding-inline:calc(var(--media-spacing) * 3);color:var(--media-controls-foreground);-webkit-backdrop-filter:var(--media-backdrop-filter-dialog);backdrop-filter:var(--media-backdrop-filter-dialog);transition-property:opacity,filter,scale;transition-duration:.15s;transition-duration:var(--media-duration-slower);border-radius:9999px;outline-style:none;flex-direction:row;padding-block:0;padding-inline-end:var(--media-spacing);transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:absolute;inset:0;translate:none}@media (forced-colors:active){:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-popup{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-popup:not([data-open]){display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-popup:is([data-starting-style],[data-ending-style]){scale:var(--media-hidden-popup-scale) var(--media-hidden-popup-scale);opacity:0;filter:blur(var(--media-hidden-popup-blur))}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-dialog-title{font-size:calc(var(--media-spacing) * 3.25);margin:0;font-weight:600;line-height:1.25}:where(.media-skin[data-theme=neutral]) .media-popup{color:inherit;border-style:solid;border-width:0;margin:0;overflow:visible}:where(.media-skin[data-theme=neutral]) .media-popup[data-ending-style]{transform:none}:where(.media-skin[data-theme=neutral]) .media-popup[data-starting-style]{transform:translate(var(--media-popup-translate-x-distance,0), var(--media-popup-translate-y-distance,0));filter:none}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=bottom]{transform-origin:top;--media-popup-translate-y-distance:calc(var(--media-popup-translate-distance) * -1)}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=left]{transform-origin:100%;--media-popup-translate-x-distance:var(--media-popup-translate-distance)}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=right]{transform-origin:0;--media-popup-translate-x-distance:calc(var(--media-popup-translate-distance) * -1)}:where(.media-skin[data-theme=neutral]) .media-popup[data-side=top]{transform-origin:bottom;--media-popup-translate-y-distance:var(--media-popup-translate-distance)}:where(.media-skin[data-theme=neutral]) .media-popup:is([data-starting-style],[data-ending-style]){scale:var(--media-hidden-popup-scale) var(--media-hidden-popup-scale);opacity:0;filter:blur(var(--media-hidden-popup-blur))}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area:before{pointer-events:auto;content:\"\";position:absolute}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=bottom]:before{content:\"\";height:var(--media-popup-side-offset);inset-inline:0;bottom:100%}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=left]:before{content:\"\";width:var(--media-popup-side-offset);inset-block:0;left:100%}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=right]:before{content:\"\";width:var(--media-popup-side-offset);inset-block:0;right:100%}:where(.media-skin[data-theme=neutral]) .media-popup-safe-area[data-side=top]:before{content:\"\";height:var(--media-popup-side-offset);inset-inline:0;top:100%}:where(.media-skin[data-theme=neutral]) .media-popup-transition{transition-property:opacity,filter,transform,scale;transition-duration:var(--media-duration-fast);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral]) .media-popup-transition[data-ending-style]{transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-tooltip{border-radius:var(--media-control-radius);padding-inline:calc(var(--media-spacing) * 2);padding-block:var(--media-spacing);font-size:calc(var(--media-spacing) * 3.25);white-space:nowrap;--media-popup-side-offset:var(--media-tooltip-side-offset);box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--media-shadow-tooltip)!important}:where(.media-skin[data-theme=neutral]) .media-tooltip[data-open]{align-items:center;gap:var(--media-spacing);display:flex}:where(.media-skin[data-theme=neutral]) .media-tooltip-shortcut{border-radius:var(--media-spacing);background-color:var(--media-muted);text-align:center;min-width:1.5em;font-family:inherit;font-size:calc(var(--media-spacing) * 2.75);margin-inline-end:calc(var(--media-spacing) * -1);padding:.1em;font-weight:600;line-height:1.25}:where(.media-skin[data-theme=neutral]) .media-popup-surface{background-color:var(--media-popover);color:var(--media-popover-foreground);box-shadow:0 0 0 1px var(--media-surface-border,var(--media-border)), var(--media-shadow-surface);-webkit-backdrop-filter:var(--media-backdrop-filter-surface);backdrop-filter:var(--media-backdrop-filter-surface)}:where(.media-skin[data-theme=neutral]) .media-popup-surface:after{z-index:10;pointer-events:none;border-radius:inherit;box-shadow:var(--media-shadow-surface-inset);content:\"\";display:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-button-icon{width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration);text-shadow:inherit;grid-row-start:1;grid-column-start:1;transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral]) .media-seek-button-backward-icon{scale:-1 1}:where(.media-skin[data-theme=neutral]) .media-seek-button-backward-label{left:-1px}:where(.media-skin[data-theme=neutral]) .media-seek-button-content{display:grid;position:relative}:where(.media-skin[data-theme=neutral]) .media-seek-button-forward-label{right:-1px}:where(.media-skin[data-theme=neutral]) .media-seek-button-label{letter-spacing:-.05em;font-variant-numeric:tabular-nums;font-size:.7em;font-weight:500;position:absolute;bottom:-3px}:where(.media-skin[data-theme=neutral]) .media-mute-button-high-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-mute-button):not([data-muted]):not([data-volume-level=low]) .media-mute-button-high-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-mute-button-low-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-mute-button):not([data-muted])[data-volume-level=low] .media-mute-button-low-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-mute-button-off-icon{opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-mute-button)[data-muted] .media-mute-button-off-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-slider-buffer{pointer-events:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-slider-buffer:before{border-radius:var(--media-control-radius);content:\"\";background-color:currentColor;width:100%;height:100%;position:absolute}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-buffer:before{background-color:color-mix(in oklab, currentcolor 20%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=horizontal]{left:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));right:max(calc(100% - var(--media-slider-buffer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(-1px 0)}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=horizontal]:before{content:\"\";min-width:var(--media-spacing);left:0}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=vertical]{bottom:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));top:max(calc(100% - var(--media-slider-buffer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(0 -1px)}:where(.media-skin[data-theme=neutral]) .media-slider-buffer[data-orientation=vertical]:before{content:\"\";min-height:var(--media-spacing);bottom:0}:where(.media-skin[data-theme=neutral]) .media-slider-fill{pointer-events:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-slider-fill:before{border-radius:var(--media-control-radius);content:\"\";background-color:var(--media-primary);width:100%;height:100%;position:absolute}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=horizontal]{left:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));right:max(calc(100% - var(--media-slider-fill,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(-1px 0)}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-fill[data-orientation=horizontal]{left:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));right:max(calc(100% - var(--media-slider-pointer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(-1px 0)}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=horizontal]:before{content:\"\";min-width:var(--media-spacing);left:0}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=vertical]{bottom:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));top:max(calc(100% - var(--media-slider-fill,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(0 -1px)}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-fill[data-orientation=vertical]{bottom:calc(var(--media-slider-chapter-start,0%) + var(--media-spacing) * var(--media-chapter-inset-start,0));top:max(calc(100% - var(--media-slider-pointer,0%)), calc(100% - var(--media-slider-chapter-end,100%) + var(--media-spacing) * var(--media-chapter-inset-end,0)));clip-path:inset(0 -1px)}:where(.media-skin[data-theme=neutral]) .media-slider-fill[data-orientation=vertical]:before{content:\"\";min-height:var(--media-spacing);bottom:0}:where(.media-skin[data-theme=neutral]) .media-slider-thumb{top:50%;left:var(--media-slider-fill,0%);z-index:10;width:calc(var(--media-spacing) * 3);height:calc(var(--media-spacing) * 3);border-radius:var(--media-control-radius);box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--media-shadow-thumb);outline-offset:-2px;transition-property:opacity,height,width,outline-offset,scale;transition-duration:.15s;transition-duration:var(--media-duration-slider);-webkit-user-select:none;user-select:none;background-color:#fff;outline:2px solid #0000;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;translate:-50% -50%}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-thumb{scale:.9}:where(.media-skin[data-theme=neutral]) .media-slider-thumb:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-thumb[data-orientation=horizontal]{left:var(--media-slider-pointer)}:where(.media-skin[data-theme=neutral]) .media-slider-thumb[data-orientation=vertical]{top:calc(100% - var(--media-slider-fill,0%));left:50%}:where(:where(.media-skin[data-theme=neutral]) .media-slider)[data-dragging] .media-slider-thumb[data-orientation=vertical]{top:calc(100% - var(--media-slider-pointer))}:where(.media-skin[data-theme=neutral]) .media-slider-track{isolation:isolate;-webkit-user-select:none;user-select:none;border-radius:9999px;width:100%;position:relative}:where(.media-skin[data-theme=neutral]) .media-slider-track:before{pointer-events:none;border-radius:var(--media-control-radius);content:\"\";background-color:currentColor;position:absolute;inset:0}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-slider-track:before{background-color:color-mix(in oklab, currentcolor 20%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-slider-track[data-orientation=horizontal]{height:var(--media-spacing)}:where(.media-skin[data-theme=neutral]) .media-slider-track[data-orientation=vertical]{height:100%;width:var(--media-spacing)}:where(.media-skin[data-theme=neutral]) .media-slider{cursor:pointer;transition-property:--media-slider-fill,--media-slider-buffer;transition-duration:.15s;transition-duration:var(--media-duration-slider);border-radius:9999px;outline-style:none;flex:1;justify-content:center;align-items:center;transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:relative}@media (forced-colors:active){:where(.media-skin[data-theme=neutral]) .media-slider{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral]) .media-slider[data-disabled]{pointer-events:none}:where(.media-skin[data-theme=neutral]) .media-slider[data-dragging]{transition-duration:0s}:where(.media-skin[data-theme=neutral]) .media-slider[data-orientation=horizontal]{height:var(--media-slider-height,calc(var(--media-spacing) * 8));min-width:calc(var(--media-spacing) * 20)}:where(.media-skin[data-theme=neutral]) .media-slider[data-orientation=vertical]{height:calc(var(--media-spacing) * 20);width:calc(var(--media-spacing) * 8);min-width:0}:where(.media-skin[data-theme=neutral]) .media-volume-slider-thumb{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-volume-popover{border-radius:var(--media-control-radius);padding-inline:0;padding-block:calc(var(--media-spacing) * 3);--media-popup-side-offset:var(--media-popover-side-offset)}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=left]{background-image:linear-gradient(to left, var(--media-controls) 80%, transparent 100%);--media-popover-side-offset:0rem;border-style:solid;border-width:0;border-radius:0;padding-block:0;padding-inline-start:calc(var(--media-spacing) * 16);padding-inline-end:calc(var(--media-spacing) * 2);box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background-color:#0000!important}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=left]:after{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=right]{padding:0;padding-inline:calc(var(--media-spacing) * 3);--media-popover-side-offset:0rem;border-radius:0;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background-color:#0000!important}:where(.media-skin[data-theme=neutral]) .media-volume-popover[data-side=right]:after{content:\"\";display:none}:where(.media-skin[data-theme=neutral]) .media-play-button-pause-icon{scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-play-button)[data-started]:not([data-paused]):not([data-ended]) .media-play-button-pause-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-play-button-play-icon{scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-play-button):not([data-ended]):not([data-started]) .media-play-button-play-icon,:where(:where(.media-skin[data-theme=neutral]) .media-play-button):not([data-ended])[data-paused] .media-play-button-play-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-play-button-restart-icon{scale:var(--media-hidden-icon-scale) var(--media-hidden-icon-scale);opacity:0}:where(:where(.media-skin[data-theme=neutral]) .media-play-button)[data-ended] .media-play-button-restart-icon{opacity:1;scale:1}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator{pointer-events:none;color:var(--media-controls-foreground);place-content:center;display:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator:not([data-visible]){--media-spinner-animation:none}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator:before{background-color:var(--media-backdrop);content:\"\";-webkit-backdrop-filter:var(--media-backdrop-filter-indicator);backdrop-filter:var(--media-backdrop-filter-indicator);position:absolute;inset:0}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral]) .media-buffering-indicator:before{background-color:color-mix(in oklab, var(--media-backdrop) 35%, transparent)}}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator[data-visible]{display:grid}:where(.media-skin[data-theme=neutral]) .media-buffering-indicator-spinner-icon{z-index:30;width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));position:relative}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-play-button{display:inline-flex;position:relative}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-play-button-buffering-indicator{z-index:20;border-radius:var(--media-control-radius);color:inherit!important}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-play-button-buffering-indicator:before{content:\"\";display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-play-button-buffering-indicator[data-visible]{background-color:var(--media-controls)}:where(.media-skin[data-theme=neutral]) .media-playback-rate-button{font-variant-numeric:tabular-nums}:where(.media-skin[data-theme=neutral]) .media-playback-rate-button:after{content:attr(data-rate) \"×\";width:4ch}:where(.media-skin[data-theme=neutral]) .media-menu-item-indicator{opacity:0;flex-shrink:0;margin-inline-start:auto;margin-inline-end:calc(var(--media-spacing) * -1)}:where(:where(.media-skin[data-theme=neutral]) .media-menu-radio-item)[aria-checked=true] .media-menu-item-indicator{opacity:1}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item{cursor:pointer;justify-content:space-between;align-items:center;gap:calc(var(--media-spacing) * 1.5);border-radius:var(--media-menu-item-radius);padding-inline:calc(var(--media-spacing) * 2);padding-block:calc(var(--media-spacing) * 1.5);text-align:start;white-space:nowrap;color:inherit;font-variant-numeric:tabular-nums;outline-offset:-2px;transition-property:background-color,color;transition-duration:.15s;transition-duration:var(--media-duration-fast);-webkit-user-select:none;user-select:none;text-shadow:0 1px 0 var(--media-shadow-current-color);outline:2px solid #0000;transition-timing-function:cubic-bezier(.4,0,.2,1);display:flex;position:relative}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[aria-disabled=true]{pointer-events:none;cursor:not-allowed;opacity:.5}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[data-availability=unavailable],:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[data-availability=unsupported]{display:none}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){background-color:var(--media-accent);color:var(--media-accent-foreground)}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral]) .media-menu-radio-item{transition-duration:var(--media-duration-instant)}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item[data-highlighted]{anchor-name:--media-menu-item-highlight-anchor}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item:where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])){transition-duration:var(--media-duration-slow);background-color:#0000}}:where(.media-skin[data-theme=neutral]) .media-menu-radio-item-icon{width:var(--media-icon-size,calc(var(--media-spacing) * 4.5));height:var(--media-icon-size,calc(var(--media-spacing) * 4.5));color:var(--media-muted-foreground);filter:drop-shadow(0 1px 0 var(--media-shadow-current-color));flex-shrink:0}:where(:where(.media-skin[data-theme=neutral]) .media-menu-radio-item):where(:focus-visible,[aria-expanded=true],[data-highlighted]):where(:not([aria-disabled=true])) .media-menu-radio-item-icon{color:inherit}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup{color:inherit;border-style:solid;border-width:0;margin:0;overflow:visible}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup[data-ending-style]{transform:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup[data-starting-style]{transform:translate(var(--media-popup-translate-x-distance,0), var(--media-popup-translate-y-distance,0));filter:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup[data-side=bottom]{transform-origin:top;--media-popup-translate-y-distance:calc(var(--media-popup-translate-distance) * -1)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup[data-side=left]{transform-origin:100%;--media-popup-translate-x-distance:var(--media-popup-translate-distance)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup[data-side=right]{transform-origin:0;--media-popup-translate-x-distance:calc(var(--media-popup-translate-distance) * -1)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup[data-side=top]{transform-origin:bottom;--media-popup-translate-y-distance:var(--media-popup-translate-distance)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup:is([data-starting-style],[data-ending-style]){scale:var(--media-hidden-popup-scale) var(--media-hidden-popup-scale);opacity:0;filter:blur(var(--media-hidden-popup-blur))}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup-surface{background-color:var(--media-popover);color:var(--media-popover-foreground);box-shadow:0 0 0 1px var(--media-surface-border,var(--media-border)), var(--media-shadow-surface);-webkit-backdrop-filter:var(--media-backdrop-filter-surface);backdrop-filter:var(--media-backdrop-filter-surface)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-popup-surface:after{z-index:10;pointer-events:none;border-radius:inherit;box-shadow:var(--media-shadow-surface-inset);content:\"\";display:none;position:absolute;inset:0}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content{max-height:inherit;overscroll-behavior:none;transition-property:translate,filter;transition-duration:.15s;transition-duration:var(--media-duration-menu);anchor-scope:--media-menu-item-highlight-anchor;outline-style:none;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;overflow:auto}@media (forced-colors:active){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:not([data-submenu]){inset-inline:var(--media-spacing);top:var(--media-spacing);gap:calc(var(--media-spacing) * .5);flex-direction:column;display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:not([data-submenu])[data-child-open]{filter:blur(var(--media-hidden-blur));translate:-100%}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:not([data-submenu])[data-child-open]:before{content:\"\";display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content[data-submenu]{z-index:10;max-height:inherit;padding:var(--media-spacing);inset-inline:0;top:0}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:not([data-submenu])[data-child-open]:where(:dir(rtl),[dir=rtl],[dir=rtl] *){translate:100%}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:is([data-starting-style],[data-ending-style]):before{content:\"\";display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content[data-submenu]:is([data-starting-style],[data-ending-style]){pointer-events:none;filter:blur(var(--media-hidden-blur));overflow:hidden;translate:100%}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content[data-submenu]:is([data-starting-style],[data-ending-style]):where(:dir(rtl),[dir=rtl],[dir=rtl] *){translate:-100%}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:before{content:\"\";position-anchor:--media-menu-item-highlight-anchor;inset:anchor(inside);overflow-anchor:none;pointer-events:none;border-radius:var(--media-menu-item-radius);background-color:var(--media-accent);transition:inset var(--media-duration-fast) ease-in-out;position:absolute}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:has([data-highlighted=\"\"]):before{content:\"\";transition-duration:0s}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-content:is([data-starting-style],[data-ending-style]) :before{content:\"\";display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-popup{height:var(--media-menu-height);max-height:min(var(--media-menu-available-height,calc(var(--media-spacing) * 56)), calc(var(--media-spacing) * 56));width:var(--media-menu-width);max-width:var(--media-menu-available-width);min-width:calc(var(--media-spacing) * 44);overscroll-behavior:none;border-radius:var(--media-popup-radius);padding:var(--media-spacing);transition-property:opacity,filter,transform,scale;transition-duration:var(--media-duration-fast);--media-popup-side-offset:var(--media-popover-side-offset);border-style:solid;border-width:0;margin:0;transition-timing-function:cubic-bezier(0,0,.2,1);overflow:hidden!important}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-popup:is([data-starting-style],[data-ending-style]){transition-property:opacity,filter,transform,scale;transition-duration:var(--media-duration-fast);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-radio-group{max-height:inherit;gap:calc(var(--media-spacing) * .5);anchor-scope:--media-menu-item-highlight-anchor;flex-direction:column;display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-radio-group:is([data-starting-style],[data-ending-style]):before{content:\"\";display:none}@supports (top:anchor(top)){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-radio-group:before{content:\"\";position-anchor:--media-menu-item-highlight-anchor;inset:anchor(inside);overflow-anchor:none;pointer-events:none;border-radius:var(--media-menu-item-radius);background-color:var(--media-accent);transition:inset var(--media-duration-fast) ease-in-out;position:absolute}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-radio-group:has([data-highlighted=\"\"]):before{content:\"\";transition-duration:0s}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-menu-radio-group:is([data-starting-style],[data-ending-style]) :before{content:\"\";display:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-settings-menu-popup{min-width:0!important}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider{cursor:pointer;transition-property:--media-slider-fill,--media-slider-buffer;transition-duration:.15s;transition-duration:var(--media-duration-slider);border-radius:9999px;outline-style:none;flex:1;justify-content:center;align-items:center;transition-timing-function:cubic-bezier(0,0,.2,1);display:flex;position:relative}@media (forced-colors:active){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider{outline-offset:2px;outline:2px solid #0000}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider[data-disabled]{pointer-events:none}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider[data-dragging]{transition-duration:0s}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider[data-orientation=horizontal]{height:var(--media-slider-height,calc(var(--media-spacing) * 8));min-width:calc(var(--media-spacing) * 20)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider[data-orientation=vertical]{height:calc(var(--media-spacing) * 20);width:calc(var(--media-spacing) * 8);min-width:0}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview{height:var(--media-spacing);--media-preview-end-inset:calc(100cqi - 100%);--media-preview-left:clamp(calc(var(--media-slider-preview-max-width) / 2), var(--media-slider-pointer), calc(100% - var(--media-slider-preview-max-width) / 2 + var(--media-preview-end-inset)));--media-slider-preview-max-height:var(--media-slider-preview-max-width);--media-slider-preview-max-width:min(calc(var(--media-spacing) * 28), 100cqi);min-width:100%;position:relative}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview:before{pointer-events:none;z-index:1;opacity:0;transition-property:opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration-slow);content:\"\";background-color:currentColor;transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute;translate:-50% -50%;scale:.5}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview:before{background-color:color-mix(in oklab, currentcolor 35%, transparent)}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview[data-pointing]:not([data-dragging]):before{content:\"\";opacity:1;scale:1}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview[data-orientation=horizontal]:before{top:50%;left:var(--media-slider-pointer);height:calc(var(--media-spacing) * 5);content:\"\";width:1px}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview[data-orientation=vertical]:before{top:calc(100% - var(--media-slider-pointer));content:\"\";height:1px;width:calc(var(--media-spacing) * 5);left:50%}@container media-root (width>=32rem){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview{--media-slider-preview-max-width:min(calc(var(--media-spacing) * 36), 100cqi)}}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview{--media-preview-left:var(--media-slider-pointer);--media-slider-preview-max-width:min(calc(var(--media-spacing) * 48), 100cqi)}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider-preview-content{max-width:var(--media-slider-preview-max-width);transform-origin:bottom;translate:-50% var(--media-hidden-preview-offset);scale:var(--media-hidden-preview-scale) var(--media-hidden-preview-scale);opacity:0;filter:blur(var(--media-hidden-blur));transition-property:filter,opacity,scale;transition-duration:.15s;transition-duration:var(--media-duration);transition-timing-function:cubic-bezier(0,0,.2,1);position:absolute}:where(.media-skin[data-theme=neutral][data-preset=audio]) :where(.media-slider):has(:focus-visible) .media-slider-preview-content,:where(.media-skin[data-theme=neutral][data-preset=audio]) :where(.media-slider-preview)[data-pointing] .media-slider-preview-content{opacity:1;filter:none;scale:1}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-preview-content{bottom:calc(100% + var(--media-slider-preview-label-offset));left:var(--media-preview-left,var(--media-slider-pointer));font-variant-numeric:tabular-nums}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-thumb{opacity:0}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-thumb[data-interactive]{opacity:1}@media (pointer:fine){@media (hover:hover){:where(:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-slider):hover .audio-time-slider-thumb{opacity:1;scale:1}}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-value{font-variant-numeric:tabular-nums}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-tooltip{border-radius:var(--media-control-radius);padding-inline:calc(var(--media-spacing) * 2);padding-block:var(--media-spacing);font-size:calc(var(--media-spacing) * 3.25);white-space:nowrap;--media-popup-side-offset:var(--media-tooltip-side-offset);box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--media-shadow-tooltip)!important}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-tooltip[data-open]{align-items:center;gap:var(--media-spacing);display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-controls-content{z-index:20;align-items:center;gap:calc(var(--media-spacing) * 2);border-radius:var(--media-controls-radius);background-color:var(--media-controls);padding:var(--media-spacing);color:var(--media-controls-foreground);box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 0 1px var(--media-border);text-shadow:0 1px 0 var(--media-shadow-current-color);display:flex;position:relative}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-controls-content:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-controls-end{align-items:center;gap:1px;display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-controls-end:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-controls-start{align-items:center;gap:1px;display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-controls-start:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-group{align-items:center;gap:calc(var(--media-spacing) * 3);flex-direction:row-reverse;flex:1;min-width:0;display:flex;container:audio-time-controls/inline-size}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-group:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-group{flex-direction:row}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-time-slider-group:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-current-value{display:none}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-current-value{display:inline}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-duration-value{font-variant-numeric:tabular-nums;transition-property:opacity;transition-duration:.15s;transition-duration:var(--media-duration-slow);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-duration-value[data-unavailable]{opacity:.5}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-duration-value{color:var(--media-controls-foreground)}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-duration-value{color:color-mix(in oklab, var(--media-controls-foreground) 60%, transparent)}}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-group{align-items:center;gap:var(--media-spacing);display:flex}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-group:where(:dir(rtl),[dir=rtl],[dir=rtl] *){flex-direction:row-reverse}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-separator{display:none}@container media-root (width>=42rem){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-separator{color:var(--media-controls-foreground);display:inline}@supports (color:color-mix(in lab, red, red)){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-separator{color:color-mix(in oklab, var(--media-controls-foreground) 60%, transparent)}}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-toggle{cursor:pointer;font-variant-numeric:tabular-nums;outline-offset:-2px;transition-property:outline-color,outline-offset;transition-duration:.15s;transition-duration:var(--media-duration-fast);border-radius:.25rem;outline:2px solid #0000;transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-toggle:focus-visible{outline-offset:2px;outline-color:var(--media-ring)}:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-toggle[aria-disabled=true]{cursor:not-allowed;opacity:.5}@supports (corner-shape:squircle){:where(.media-skin[data-theme=neutral][data-preset=audio]) .media-time-toggle{corner-shape:squircle;border-radius:1rem}}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-skin,:where(.media-skin[data-theme=neutral][data-preset=audio]).audio-skin{background-color:#0000!important;height:auto!important;overflow:visible!important}:where(.media-skin[data-theme=neutral][data-preset=audio]) .audio-skin:after,:where(.media-skin[data-theme=neutral][data-preset=audio]).audio-skin:after{content:\"\";display:none}}@layer utilities;\n";
//#endregion
//#region node_modules/@videojs/html/dist/default/presets/audio/neutral-skin.js
/** Packaged Neutral audio UI registered as `<audio-neutral-skin>`. */
var NeutralAudioSkinElement = class extends SkinElement {
	static {
		this.tagName = "audio-neutral-skin";
	}
	static {
		this.styles = createShadowStyle(neutral_skin_default);
	}
	static {
		this.template = template;
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/icons/dist/html/neutral/seek.js
const seekIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" aria-hidden=\"true\" viewBox=\"0 0 18 18\"><path d=\"M1 9c0 2.21.895 4.21 2.343 5.657l1.06-1.06a6.5 6.5 0 1 1 9.665-8.665l-1.641 1.641a.25.25 0 0 0 .177.427h4.146a.25.25 0 0 0 .25-.25V2.604a.25.25 0 0 0-.427-.177l-1.438 1.438A8 8 0 0 0 1 9\"/></svg>";
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/seek-button/element.js
var SeekButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.seconds = SeekButtonCore.defaultProps.seconds;
		this.core = new SeekButtonCore();
		this.stateAttrMap = SeekButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectTime);
		this.hotkeyAction = "seekStep";
	}
	static {
		this.tagName = "media-seek-button";
	}
	static {
		this.properties = {
			...MediaButtonElement.properties,
			seconds: { type: Number }
		};
	}
	get hotkeyValue() {
		return this.seconds;
	}
	activate(state) {
		this.core.seek(state);
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/seek-button.js
safeDefine(SeekButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/ui/playback-rate-button/element.js
var PlaybackRateButtonElement = class extends MediaButtonElement {
	constructor(..._args) {
		super(..._args);
		this.commandfor = void 0;
		this.core = new PlaybackRateButtonCore();
		this.stateAttrMap = PlaybackRateButtonDataAttrs;
		this.mediaState = new PlayerController(this, playerContext, selectPlaybackRate);
		this.hotkeyAction = "speedUp";
	}
	static {
		this.tagName = "media-playback-rate-button";
	}
	static {
		this.properties = {
			label: { type: String },
			disabled: { type: Boolean },
			commandfor: { type: String }
		};
	}
	activate(state, event) {
		if (this.commandfor) {
			if (event instanceof KeyboardEvent) this.click();
			return;
		}
		this.core.cycle(state);
	}
	getIsButtonDisabled() {
		const media = this.mediaState.value;
		if (super.getIsButtonDisabled()) return true;
		if (this.commandfor && media && media.playbackRates.length === 0) return true;
		return false;
	}
	willUpdate(changed) {
		super.willUpdate(changed);
		if (changed.has("commandfor")) if (this.commandfor) this.setAttribute("commandfor", this.commandfor);
		else this.removeAttribute("commandfor");
	}
	update(changed) {
		super.update(changed);
		if (!this.mediaState.value || !this.commandfor) return;
		applyElementProps(this, { "aria-disabled": this.getIsButtonDisabled() ? "true" : void 0 });
	}
};
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/playback-rate-button.js
safeDefine(PlaybackRateButtonElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/internal/skins/neutral-audio/register.js
registerIcons("neutral", {
	check: checkIcon,
	pause: pauseIcon,
	play: playIcon,
	restart: restartIcon,
	seek: seekIcon,
	spinner: spinnerIcon,
	"volume-high": volumeHighIcon,
	"volume-low": volumeLowIcon,
	"volume-off": volumeOffIcon
});
//#endregion
//#region node_modules/@videojs/html/dist/default/define/audio/neutral-skin.js
safeDefine(NeutralAudioSkinElement);
//#endregion
//#region node_modules/@videojs/html/dist/default/define/ui/menu-radio-group.js
safeDefine(MenuRadioGroupElement);
//#endregion
