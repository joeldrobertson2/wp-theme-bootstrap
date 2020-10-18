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
		<div class="wrapper">
			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile;
			?>
		</div>
	</div>
	<?php
endif;
get_footer(); ?>
