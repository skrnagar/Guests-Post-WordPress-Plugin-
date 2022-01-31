<?php

defined( 'ABSPATH' ) or die( 'No script kiddies please!!' );
if ( !class_exists( 'FPSML_Admin_Enqueue' ) ) {

    class FPSML_Admin_Enqueue {

        function __construct() {
            add_action( 'admin_enqueue_scripts', array( $this, 'register_backend_assets' ) );
        }

        function register_backend_assets() {
            $fpsml_settings = get_option( 'fpsml_settings' );
            $translation_strings = array(
                'ajax_message' => esc_html__( 'Please wait', 'guest-posts-submission' ),
                'upload_button_text' => esc_html__( 'Upload File', 'guest-posts-submission' ),
                'delete_form_confirm' => esc_html__( 'Are you sure you want to delete this form?', 'guest-posts-submission' ),
                'copy_form_confirm' => esc_html__( 'Are you sure you want to copy this form?', 'guest-posts-submission' ),
                'clipboad_copy_message' => esc_html__( 'Shortcode copied to clipboard.', 'guest-posts-submission' ),
                'custom_field_error' => esc_html__( 'Label and Meta key both are required', 'guest-posts-submission' ),
                'custom_field_space_error' => esc_html__( 'Meta key cannot contain white space or special characters', 'guest-posts-submission' ),
                'custom_field_key_available_error' => esc_html__( 'Meta key already assigned for one of the fields in the list', 'guest-posts-submission' ),
                'custom_field_delete_confirm' => esc_html__( 'Are you sure you want to delete this custom field?', 'guest-posts-submission' ),
                'option_delete_confirm' => esc_html__( 'Are you sure you want to delete option?', 'guest-posts-submission' ),
                'are_your_sure' => esc_html__( 'It looks like you have been editing something. If you leave before saving, your changes will be lost.', 'guest-posts-submission' ),
                'copy_form_confirm' => esc_html__( 'Are you sure you want to copy this form?', 'guest-posts-submission' )
            );
            $js_obj = array( 'ajax_url' => admin_url( 'admin-ajax.php' ), 'plugin_url' => FPSML_URL, 'ajax_nonce' => wp_create_nonce( 'fpsml_backend_ajax_nonce' ), 'translation_strings' => $translation_strings );
            wp_enqueue_style( 'wp-color-picker' );
            wp_enqueue_media();
            wp_enqueue_style( 'fpsml-backend-style', FPSML_URL . '/assets/css/fpsml-backend-style.css', array(), FPSML_VERSION );
            wp_enqueue_style( 'fontawesome', FPSML_URL . '/assets/fontawesome/css/all.min.css', array(), FPSML_VERSION );
            wp_enqueue_script( 'fpsml-are-you-sure-script', FPSML_URL . '/assets/js/jquery.are-you-sure.js', array( 'jquery' ), FPSML_VERSION );
            wp_enqueue_script( 'fpsml-backend-script', FPSML_URL . '/assets/js/fpsml-backend.js', array( 'jquery', 'wp-util', 'jquery-ui-sortable', 'jquery-ui-datepicker', 'fpsml-are-you-sure-script', 'wp-color-picker' ), FPSML_VERSION );
            wp_localize_script( 'fpsml-backend-script', 'fpsml_backend_obj', $js_obj );
        }

    }

    new FPSML_Admin_Enqueue();
}