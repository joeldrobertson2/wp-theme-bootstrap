<?php
/**
 * The page file.
 *
 * @package jr
 */

namespace jr\Theme;

get_header();
if ( have_posts() ) :
	?>
	<div class="container">
		<?php
		while ( have_posts() ) : ?>
		<?php
			the_post();
			the_content();
		endwhile;
		?>
	</div>
	<?php
endif;
get_footer(); ?>
