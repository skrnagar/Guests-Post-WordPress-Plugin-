<?php

defined('ABSPATH') or die('No script kiddies please');

/*
  Plugin Name: Guest Posts Submission
  Description:  The guest author should be able to create a post from front side. You will also need to create another page where all the posts created by this author will be listed.
  Version:     1.0.0
  Author:      Sunil Nagar
  Author URI:  https://profiles.wordpress.org/sunilkumarnagar/
  Plugin URI: https://profiles.wordpress.org/sunilkumarnagar/
  License:     GPL2
  License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
  Domain Path: /languages
  Text Domain: guest-posts-submission
 */

// Define FPSML_URL and FPSML_PATH
defined('FPSML_URL') or define('FPSML_URL', untrailingslashit(plugin_dir_url(__FILE__)));
defined('FPSML_PATH') or define('FPSML_PATH', untrailingslashit(plugin_dir_path(__FILE__)));
defined('FPSML_LANGAUGE_PATH') or define('FPSML_LANGAUGE_PATH', dirname(plugin_basename(__FILE__)) . '/languages');



// Include the plugin's main class.
include(FPSML_PATH . '/includes/classes/class-guest-posts-submission.php');

/**
 * Returns the main instance of Guest Posts Submission class.
 *
 * @since  1.0.0
 * return Guest_Posts_Submission
 */
function fpsml_initialize() {
  return Guest_Posts_Submission::instance();
}

$GLOBALS['fpsml'] = fpsml_initialize();
