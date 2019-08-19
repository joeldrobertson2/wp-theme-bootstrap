<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package jr
 */

namespace jr\Theme;

get_header();
if ( have_posts() ) :
	?>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="posts">
					<?php
					while ( have_posts() ) :
						the_post();
						the_content();
					endwhile;
					?>
				</div>
			</div>
		</div>
	</div>
	<?php
endif;
get_footer(); ?>
