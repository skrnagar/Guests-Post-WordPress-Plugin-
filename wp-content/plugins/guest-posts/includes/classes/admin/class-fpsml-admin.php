<?php

defined('ABSPATH') or die('No script kiddies please!!');
if (!class_exists('FPSML_Admin')) {

    class FPSML_Admin {

        function __construct() {
            add_action('admin_menu', array($this, 'add_admin_menus'));
            add_action('admin_footer', array($this, 'add_extra_html'));
        }

        function add_admin_menus() {
            if (!empty($_GET['action']) && $_GET['action'] == 'edit_form') {
                $page_title = esc_html__('Edit Form', 'guest-posts-submission');
            } else {
                $page_title = esc_html__('All forms', 'guest-posts-submission');
            }
            add_menu_page(esc_html__('Guest Posts', 'guest-posts-submission'), esc_html__('Guest Posts', 'guest-posts-submission'), 'manage_options', 'fpsm', array($this, 'form_lists'), 'dashicons-format-aside');
            add_submenu_page('fpsm', $page_title, esc_html__('All Forms', 'guest-posts-submission'), 'manage_options', 'fpsm', array($this, 'form_lists'));
            add_submenu_page('fpsm', esc_html__('Setting', 'guest-posts-submission'), esc_html__('Settings', 'guest-posts-submission'), 'manage_options', 'fpsml-settings', array($this, 'render_form_settings_page'));
            add_submenu_page('fpsm', esc_html__('Help', 'guest-posts-submission'), esc_html__('Help', 'guest-posts-submission'), 'manage_options', 'fpsml-help', array($this, 'render_form_help_page'));
            add_submenu_page('fpsm', esc_html__('About', 'guest-posts-submission'), esc_html__('About', 'guest-posts-submission'), 'manage_options', 'fpsml-about', array($this, 'render_form_about_page'));
        }

        function form_lists() {
            if (isset($_GET['action'])) {
                $action = $_GET['action'];
                switch ($action) {
                    case 'edit_form':
                        include(FPSML_PATH . '/includes/views/backend/forms/form-edit.php');
                        break;
                }
            } else {
                include(FPSML_PATH . '/includes/views/backend/forms/form-list.php');
            }
        }

        function render_form_settings_page() {
            include(FPSML_PATH . '/includes/views/backend/settings.php');
        }

        function render_form_help_page() {
            include(FPSML_PATH . '/includes/views/backend/help.php');
        }

        function render_form_about_page() {
            include(FPSML_PATH . '/includes/views/backend/about.php');
        }

        function add_extra_html() {
            include(FPSML_PATH . '/includes/views/backend/admin-footer.php');
        }

    }

    new FPSML_Admin();
}