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
		<div class="row">
			<div class="col-md-12">
                <?php
                while ( have_posts() ) : ?>
                <?php
					the_post();
					
					// Get the post thumbnail with an intrinsic wrapper.
					the_post_thumbnail(
						'large',
						[
							'class' => 'lazyload',
							'ratio' => 'u-ratio u-ratio--16-9',
						]
					);
                    the_content();
				endwhile;
                ?>
			</div>
		</div>
	</div>
	<?php
endif;
get_footer(); ?>
