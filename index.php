<?php
/**
 * Plugin Name: Async WP Data Store
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('admin_menu', function () {
    add_menu_page(
        'Async WP Data Store',
        'Async WP Data Store',
        'manage_options',
        'async-wp-data-store',
        function() {
            echo '<div id="async-wp-data-store">React App goes here...</div>';
        }
    );
});

add_action( 'admin_enqueue_scripts', function($page) {
    if($page !== 'toplevel_page_async-wp-data-store') {
        return;
    }

    $asset_file = require __DIR__ . '/build/index.asset.php';

    wp_register_script(
        'async-wp-data-store',
        plugins_url( '/build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_script( 'async-wp-data-store' );
});

