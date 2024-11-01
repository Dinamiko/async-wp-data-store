import domReady from '@wordpress/dom-ready';
import {createRoot} from '@wordpress/element';
import {App} from "./App";

domReady(() => {
    createRoot(
        document.getElementById('async-wp-data-store')
    ).render(
        <App />
    );
});
