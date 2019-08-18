<?php
/**
 * The default template part for posts.
 *
 * @package    jr
 * @subpackage Theme
 */

namespace jr\Theme;

?>
<div class="post">
	<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	<?php the_post_thumbnail( 'medium' ); ?>
	<?php the_content(); ?>
</div>
