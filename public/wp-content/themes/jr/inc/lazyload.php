<?php
/**
 * Modify images for lazyloading.
 *
 * @package jr
 */

namespace jr\Theme;

add_filter( 'wp_get_attachment_image_attributes', __NAMESPACE__ . '\\modify_image_attributes', 10, 3 );
add_filter( 'post_thumbnail_html', __NAMESPACE__ . '\\wrap_post_thumbnail', 10, 5 );

/**
 * Modify image attributes to enable lazy loading.
 *
 * Use the modern transparent srcset pattern.
 *
 * @link https://github.com/aFarkas/lazysizes#modern-transparent-srcset-pattern
 * @param array        $attr       Attributes for the image markup.
 * @param WP_Post      $attachment Image attachment post.
 * @param string|array $size       Requested size. Image size or array of width and height values
 *                                 (in that order). Default 'thumbnail'.
 * @return string Updated image attributes if the image has the lazyload class.
 */
function modify_image_attributes( $attr, $attachment, $size ) {
    if ( false === strpos( $attr['class'], 'lazyload' ) ) {
        return $attr;
    }

    $one_pixel_gif = get_placeholder_src();

    if ( isset( $attr['srcset'] ) ) {
        $attr['data-srcset'] = $attr['srcset'];
        $attr['srcset']      = $one_pixel_gif;
    } else {
        $attr['data-src'] = $attr['src'];
        $attr['src']      = $one_pixel_gif;
    }

    return $attr;
}

/**
 * Wrap post thumbnail with an optional instrinsic ratio.
 *
 * @since 0.2.0
 *
 * @param string       $html              The post thumbnail HTML.
 * @param int          $post_id           The post ID.
 * @param string       $post_thumbnail_id The post thumbnail ID.
 * @param string|array $size              The post thumbnail size. Image size or array of width and height
 *                                        values (in that order). Default 'post-thumbnail'.
 * @param string|array $attr              Optional. Query string or array of attributes. Default empty.
 * @return string Post thumbnail markup wrapped in a ratio container.
 */
function wrap_post_thumbnail( $html, $post_id, $post_thumbnail_id, $size, $attr ) {
    if ( $post_thumbnail_id && isset( $attr['wrapper'] ) || isset( $attr['ratio'] ) ) {
        $replacements = [];
        $attr_keys    = [
            'wrapper',
            'ratio',
        ];

        foreach ( $attr_keys as $key ) {
            if ( isset( $attr[ $key ] ) ) {
                $replacements[] = $key . '=' . $attr[ $key ] . '"';
            }
            $$key = ( isset( $attr[ $key ] ) ) ? $attr[ $key ] : false;
        }

        // Remove the attributes used to flag that thumbnail should be wrapped.
        $html = str_replace( $replacements, '', $html );

        return get_image_wrapper( $html, $post_thumbnail_id, $size, $wrapper, $ratio );
    }

    return $html;
}

/**
 * Wrap an image with an optional instrinsic ratio.
 *
 * @param string $html          The image html.
 * @param int    $attachment_id The attachment ID.
 * @param string $size          The post thumbnail size.
 * @param string $class         The class for the container. Default 'ratio'.
 * @param bool   $has_ratio     Should an intrinsic ratio be added to the wrapper? Default false.
 * @return string Image markup wrapped in a ratio container.
 */
function get_image_wrapper( $html, $attachment_id, $size, $class, $has_ratio = false ) {
    if ( $has_ratio ) {
        $image = wp_get_attachment_image_src( $attachment_id, $size );
        $ratio = ( $image[2] / $image[1] ) * 100;
    }

    $class = ( is_string( $class ) ) ? $class : 'u-ratio';
    $style = ( isset( $ratio ) ) ? ' style="padding-bottom:' . esc_attr( $ratio ) . '%"' : '';
    return '<div class="' . esc_attr( $class ) . '"' . $style . '>' . $html . '</div>';
}

/**
 * 1px transparent gif placeholder.
 *
 * @return base64 encoded image src.
 */
function get_placeholder_src() {
    return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
}

/**
 * Get an image wrapped in a container with an optional intrinsic ratio.
 *
 * @param int          $attachment_id The attachment ID.
 * @param string       $size          The post thumbnail size.
 * @param string|array $attr          Optional. Query string or array of attributes. Default empty.
 * @return string Image markup wrapped in a ratio container.
 */
function get_wrapped_attachment_image( $attachment_id, $size, $attr = '' ) {
	$html  = '';
	$icon  = false;
	$image = wp_get_attachment_image(
		$attachment_id,
		$size,
		$icon,
		$attr
	);

	if ( $image ) {
        return wrap_post_thumbnail( $image, null, $attachment_id, $size, $attr );
	}
}