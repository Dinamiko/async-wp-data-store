import {createReduxStore, register} from '@wordpress/data';

export const store = createReduxStore('my-async-store', {
    reducer(state = {title: 'Some title'}, action) {
        switch (action.type) {
            case 'update_title':
                return {...state, title: action.title}
        }
        return state
    },
    actions: {
        updateTitle(title) {
            return {
                type: 'update_title',
                title
            }
        }
    },
    selectors: {
        getTitle(state) {
            return state.title
        }
    }
})

register(store);
