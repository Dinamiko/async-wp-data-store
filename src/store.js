import {createReduxStore, register} from '@wordpress/data';

export const store = createReduxStore('counter', {
    reducer(state, action) {
        return state
    },
    actions: {},
    selectors: {}
})

register(store);
