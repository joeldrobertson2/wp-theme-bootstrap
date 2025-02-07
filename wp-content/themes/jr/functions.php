<?php
/**
 * Jr functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package jr
 */

namespace jr\Theme;

require_once __DIR__ . '/inc/menus.php';
require_once __DIR__ . '/inc/template-tags.php';
require_once __DIR__ . '/inc/acf-gutenberg.php';

add_action( 'after_setup_theme',  __NAMESPACE__ . '\\setup' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_scripts' );

/**
 * Setup the theme
 */
function setup() {
	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// Enable support for flexible post formats.
	add_theme_support( 'post-formats', [ 'aside', 'image', 'video', 'quote', 'link' ] );

	// Switch default core markup for search form, comment form, and comments to output valid HTML5.
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ] );

	// Register navigation menus.
	register_nav_menu( 'nav-primary', 'Main navigation' );
	register_nav_menu( 'nav-secondary', 'Secondary navigation' );

	// Allow wide alignmennt for blocks.
	add_theme_support( 'align-wide' );

	// Load editor style sheet.
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/dist/styles/editor.css' );
	// add_editor_style( enqueue_google_fonts() );

	// Color Pallete.
	add_theme_support(
		'editor-color-palette',
		[
			[
				'name'  => 'Night Rider',
				'slug'  => 'nightrider',
				'color' => '#333',
			],
			[
				'name'  => 'White',
				'slug'  => 'white',
				'color' => '#fff',
			],
			[
				'name'  => 'White Smoke',
				'slug'  => 'whitesmoke',
				'color' => '#efefef',
			],
			[
				'name'  => 'Ce Soir',
				'slug'  => 'cesoir',
				'color' => '#89609E',
			],
		]
	);
}

/**
 * Enqueue theme scripts and styles.
 */
function enqueue_scripts() {
	wp_enqueue_style( 'jr-styles', get_stylesheet_directory_uri() . '/assets/dist/styles/theme.css', [], '0.1.0' );
	wp_enqueue_script( 'jr-script', get_template_directory_uri() . '/assets/dist/scripts/theme.bundle.js', [ 'jquery' ], '0.1.0', true );
}
