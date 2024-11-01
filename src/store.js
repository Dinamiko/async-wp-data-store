import apiFetch from '@wordpress/api-fetch';
import {createReduxStore, register} from '@wordpress/data';

const actions = {
    updateTitle(title) {
        return {
            type: 'update_title',
            title
        }
    },
    fetchFromAPI(path) {
        return {
            type: 'FETCH_FROM_API',
            path,
        };
    },
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
        FETCH_FROM_API( action ) {
            return apiFetch( { path: action.path } );
        },
    },
    resolvers: {
        * getTitle() {
            const path = '/wp/v2/settings?_fields=title'
            const response = yield actions.fetchFromAPI( path );
            return actions.updateTitle( response.title );
        }
    }
})

register(store);
