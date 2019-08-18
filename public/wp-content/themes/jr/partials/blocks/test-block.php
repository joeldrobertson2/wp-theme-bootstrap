<?php
/**
 * Block name: Test block.
 *
 * @package Jr
 */

namespace jr\Theme;

$field = get_field( 'jr_field' );

?>

<div class="section">
    <div class="container">
        <?php echo esc_html( $field ); ?>
    </div>
</div>