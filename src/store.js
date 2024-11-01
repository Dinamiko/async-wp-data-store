import apiFetch from '@wordpress/api-fetch';
import {createReduxStore, register, select} from '@wordpress/data';

const actions = {
    updateTitle(title) {
        return {
            type: 'update_title',
            title
        }
    },
    fetch(path) {
        return {
            type: 'FETCH',
            path,
        };
    },
    *persist() {
        const title = select( 'my-async-store' ).getTitle();

        return yield apiFetch( {
            path: '/wp/v2/settings',
            method: 'post',
            data: {
                title
            },
        } );
    }
}

export const store = createReduxStore('my-async-store', {
    reducer(state = {title: ''}, action) {
        switch (action.type) {
            case 'update_title':
                return {...state, title: action.title}
        }

        return state
    },
    actions,
    selectors: {
        getTitle(state) {
            return state.title
        }
    },
    controls: {
        FETCH(action) {
            return apiFetch({path: action.path});
        },
    },
    resolvers: {
        * getTitle() {
            const path = '/wp/v2/settings?_fields=title'
            const response = yield actions.fetch(path);
            return actions.updateTitle(response.title);
        }
    }
})

register(store);
