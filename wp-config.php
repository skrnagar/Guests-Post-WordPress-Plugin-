<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dot' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fH~Nc7Hhnr;k(0Pe4vHKd6=^3DA)5/R#ULqM|JRHzm/BsKXUJ^+}LP0+db]xGDEI' );
define( 'SECURE_AUTH_KEY',  '-m5a^~^m^8/&@HNhm)A4DrC;W)>~k;1`.7^B1S7;_XmmGuCZiQvs-XhCyaL?iPkq' );
define( 'LOGGED_IN_KEY',    'LHz51lqWKgc<PrCP`l4u>eVO7?4`iX?+Hd|_]ILX?y,-bj*Z(g*&%:_J`;V@y/i1' );
define( 'NONCE_KEY',        '$p$(<%{g{<;n3*TLO@[AkJFioRUp{Fj|&:~N6aM!qU,RUIR0mMGeE7egnk.8cZCv' );
define( 'AUTH_SALT',        '+-g6UbkDK}|_B(o8;YbuJ)|&qJGsl6Z/x=pD!ER:j$B)`.&{ ]jOIY7h`$_xeoN[' );
define( 'SECURE_AUTH_SALT', 'VtF+;Mx[ .K6ARy*C*g+sktvuG7.f& ;{+rit`^N^yZx3w$?=5U,V`xhQrh7^I]|' );
define( 'LOGGED_IN_SALT',   's3elm|nz~yOgkTzW+DO$iG8W3G g(Qx>y59ZZ%JG?.j-#.]8r#!)B0CcrBB)/P4B' );
define( 'NONCE_SALT',       'z?7zz<tMu-9ghdkgX-$@B@J}iNjI$!W@]X! 1;wT<i)O|kF+k&`~Z_Q8VzUL+r6p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
