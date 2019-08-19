<?php
/**
 * Block name: Test block.
 *
 * @package Jr
 */

namespace jr\Theme;

$b_title    = get_field( 'jr_test_block_title' );
$b_image_id = get_field( 'jr_test_block_image' );

?>

<div class="section">
    <div class="container">
        <h2><?php echo esc_html( $b_title ); ?></h2>
        <?php

        // Get an image in a wrapper with a supplied intrisic ratio.
        echo get_wrapped_attachment_image(
            $b_image_id,
            'large',
            [
                'class'   => 'lazyload',
                'wrapper' => 'u-ratio u-ratio--16-9',
            ]
        );
    
        // Get an image in a wrapper with a generated intrisic ratio.
        echo get_wrapped_attachment_image(
            $b_image_id,
            'large',
            [
                'class' => 'lazyload',
                'ratio' => true,
            ]
        );
        ?>
    </div>
</div>