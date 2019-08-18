<?php
/**
 * Template Tags.
 *
 * @package jr
 */

/**
 * Echo an svg sprite.
 *
 * @param string $sprite     The name of the svg sprite to display.
 * @param string $aria_label The aria label to describe the svg. Defaults to the sprite name.
 */
function svg_sprite( $sprite = null, $aria_label = null ) {
	echo get_svg_sprite( $sprite, $aria_label ); //phpcs:ignore
}

/**
 * Return an svg sprite.
 *
 * @param string $sprite     The name of the svg sprite to display.
 * @param string $aria_label The aria label to describe the svg. Defaults to the sprite name.
 */
function get_svg_sprite( $sprite = null, $aria_label = null ) {
	if ( ! $sprite ) {
		return;
	}

	$path       = get_template_directory_uri() . '/assets/dist/images/sprite.symbol.svg#' . $sprite;
	$aria_label = ( $aria_label ) ? $aria_label : $sprite;
	$title_id   = 'title-' . wp_generate_uuid4();
	$classes    = [
		'svgIcon',
		'svgIcon--' . $sprite,
	];

	$content = '<svg class="' . esc_attr( implode( ' ', $classes ) ) . '" aria-labelledby="' . esc_attr( $title_id ) . '">
				<title id="' . esc_attr( $title_id ) . '">' . esc_attr( $aria_label ) . '</title>
				<use xlink:href="' . esc_url( $path ) . '" />
				</svg>';

	return $content;
}
