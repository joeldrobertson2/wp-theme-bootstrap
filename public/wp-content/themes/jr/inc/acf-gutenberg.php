<?php
/**
 * Register ACF Gutenberg blocks.
 *
 * @package jr
 */

namespace jr\Theme;

add_action( 'acf/init', __NAMESPACE__ . '\init_blocks' );
add_filter( 'block_categories', __NAMESPACE__ . '\malt_blocks', 10, 2 );

/**
 * Register custom block category.
 *
 * @param array $categories default block categories.
 */
function malt_blocks( $categories ) {
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'malt-blocks',
				'title' => __( 'Malt Blocks', 'ACF Gutenberg Blocks' ),
			],
		]
	);
}

/**
 * Register ACF Gutenberg blocks.
 */
function init_blocks() {

    // Test block.
    acf_register_block(
		[
			'name'            => 'test-block',
			'title'           => __( 'Test Block' ),
			'description'     => __( 'A test block' ),
			'render_template' => 'partials/blocks/test-block.php',
			'category'        => 'malt-blocks',
			'icon'            => 'video-alt3',
			'keywords'        => [ 'test', 'section' ],
			'supports'        => [
				'align' => false,
			],
		]
	);
}