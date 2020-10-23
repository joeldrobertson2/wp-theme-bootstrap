<?php
/**
 * Enqueue google fonts.
 *
 * @package jr
 */

namespace jr\Theme;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_google_fonts' );

/**
 * Enqueue google fonts.
 */
function enqueue_google_fonts() {
	wp_enqueue_style( 'ch-google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap', [], '0.1.0' );
}
