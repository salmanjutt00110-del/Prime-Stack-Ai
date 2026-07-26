const isNode = typeof window === 'undefined';

const safeGetStorageItem = (key) => {
	try {
		if (!isNode && window.localStorage) {
			return window.localStorage.getItem(key);
		}
	} catch (e) {}
	return null;
};

const safeSetStorageItem = (key, val) => {
	try {
		if (!isNode && window.localStorage) {
			window.localStorage.setItem(key, val);
		}
	} catch (e) {}
};

const safeRemoveStorageItem = (key) => {
	try {
		if (!isNode && window.localStorage) {
			window.localStorage.removeItem(key);
		}
	} catch (e) {}
};

const toSnakeCase = (str) => {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
	if (isNode) {
		return defaultValue;
	}
	const storageKey = `base44_${toSnakeCase(paramName)}`;
	try {
		const urlParams = new URLSearchParams(window.location.search);
		const searchParam = urlParams.get(paramName);
		if (removeFromUrl && searchParam) {
			urlParams.delete(paramName);
			const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
			window.history.replaceState({}, document.title, newUrl);
		}
		if (searchParam) {
			safeSetStorageItem(storageKey, searchParam);
			return searchParam;
		}
		if (defaultValue) {
			safeSetStorageItem(storageKey, defaultValue);
			return defaultValue;
		}
		const storedValue = safeGetStorageItem(storageKey);
		if (storedValue) {
			return storedValue;
		}
	} catch (e) {
		console.warn('Error reading app param:', paramName, e);
	}
	return defaultValue || null;
};

const getAppParams = () => {
	if (getAppParamValue("clear_access_token") === 'true') {
		safeRemoveStorageItem('base44_access_token');
		safeRemoveStorageItem('token');
	}
	return {
		appId: getAppParamValue("app_id", { defaultValue: import.meta.env.VITE_BASE44_APP_ID || '' }),
		token: getAppParamValue("access_token", { removeFromUrl: true }),
		fromUrl: getAppParamValue("from_url", { defaultValue: typeof window !== 'undefined' ? window.location.href : '' }),
		functionsVersion: getAppParamValue("functions_version", { defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION || '' }),
		appBaseUrl: getAppParamValue("app_base_url", { defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL || '' }),
	};
};

export const appParams = {
	...getAppParams()
};
