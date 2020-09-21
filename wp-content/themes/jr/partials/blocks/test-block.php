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
    </div>
</div>