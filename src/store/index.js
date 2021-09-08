import { createStore } from 'vuex';
import * as Cookies from 'js-cookie';
import cookie from 'cookie';
import createPersistedState from "vuex-persistedstate";

export default createStore({
	modules: {},
	storage: {
        getItem: (key) => {
            if (process.server) {
                const parsedCookies = cookie.parse(process.headers.cookie)
                return parsedCookies[key]
            } else {
                return Cookies.get(key)
            }
        },
        setItem: (key, value) =>
            Cookies.set(key, value, { expires: 365, secure: false }),
        removeItem: key => Cookies.remove(key)
    },
    plugins: [createPersistedState()],
});