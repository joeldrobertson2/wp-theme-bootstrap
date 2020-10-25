<?php
/**
 * Enqueue block js and register blocks.
 *
 * @package JrBlocks
 */

namespace maltBlocks;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' );

/**
 * Enqueue block and js.
 */
function block_editor_assets() {
	wp_register_script(
		'blocks-editor-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n' ),
		'1.10',
		true
	);

	register_block_type(
		'jr/blocks',
		[
			'editor_script' => 'blocks-editor-js',
		]
	);
}


