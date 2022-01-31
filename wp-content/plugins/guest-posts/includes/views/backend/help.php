<div class="wrap fpsml-wrap">
    <div class="fpsml-header fpsml-clearfix">
        <h1 class="fpsml-floatLeft">
            <?php esc_html_e('Guest Posts Submission', 'guest-posts-submission'); ?>
            <span><?php esc_html_e('Lite', 'guest-posts-submission'); ?></span>
        </h1>
        
    </div>

    <div class="fpsml-block-wrap">
        <div class="fpsml-content-block">
            <h2><?php esc_html_e('Documentation', 'guest-posts-submission'); ?></h2>
            
        </div>
        <div class="fpsml-content-block">
            <h2><?php esc_html_e('Developer Documentation', 'guest-posts-submission'); ?></h2>
            <p><?php esc_html_e('If you are developer and trying to add any functionality or customize our plugin through hooks then below are the list of actions and filters available in the plugin.', 'guest-posts-submission'); ?></p>
        </div>
        <div class="fpsml-content-block">
            <h2><?php esc_html_e('Available Actions', 'guest-posts-submission'); ?></h2>
            <div class="fpsml-hooks-wrap">
                <pre>
/**
* Fires on init hook
*
* @since 1.0.0
*/
do_action('fpsml_init');
                </pre>

                <pre>
 /**
* Fires on starting of form edit ajax
*
* @since 1.0.0
*/
do_action('fpsml_before_form_edit_ajax');
                </pre>
                <pre>
/**
* Fires when the successful form submission is complete
*
* @param int $insert_update_post_id
* @param array $form_row
* @param string $action
*/
do_action( 'fpsml_form_submission_success', $insert_update_post_id, $form_row, $action );
                </pre>
                <pre>
/**
* Fires at the end of all the custom field option has been printed
*
* @param type string $field_key
* @param type array $field_details
*
* @since 1.0.0
*/
do_action('fpsml_custom_field_admin_end', $field_key, $field_details);
                </pre>
                <pre>
/**
* Fires while building the nav
*
* @since 1.0.0
*/
do_action('fpsml_form_nav');
                </pre>
                <pre>
/**
* Fires on start of the form sections
*
* @since 1.0.0
*
* @param array $form_row
*
*/
do_action('fpsml_form_sections_start', $form_row);
                </pre>
                <pre>
/**
* Fires on end of the form sections
*
* @since 1.0.0
*
* @param array $form_row
*
*/
do_action('fpsml_form_sections_end', $form_row);
                </pre>
                <pre>
/**
* Fires at the start of form
*
* @since 1.0.0
*/
do_action( 'fpsml_form_start', $form_row );
                </pre>
                <pre>
/**
* Fires at the end of form
*
* @since 1.0.0
*/
do_action('fpsml_form_end', $form_row);
                </pre>
                <pre>
/**
* Fires just before displaying the login form
*
* @param obj $form_row
* @param array $form_details
*
* @since 1.0.0
*/
do_action('fpsml_login_form_before', $form_row, $form_details);
                </pre>
                <pre>
/**
* Fires just after displaying the login form
*
* @param obj $form_row
* @param array $form_details
*
* @since 1.0.0
*/
do_action('fpsml_login_form_after', $form_row, $form_details);
                </pre>
            </div>
        </div>
        <div class="fpsml-content-block">
            <h2><?php esc_html_e('Available Filters', 'guest-posts-submission'); ?></h2>
            <div class="fpsml-hooks-wrap">

                <pre>
/**
* Filters allowed html for processing form data
*
* @param array $allowed_html
*
* @since 1.0.0
*/
$allowed_html = apply_filters( 'fpsml_allowed_html', $allowed_html );
                </pre>
                <pre>
/**
* Filter the default fields for form
* @param array $default_fields
*
* @since 1.0.0
*/
return apply_filters( 'fpsml_default_fields', $default_fields );
                </pre>
                <pre>
/**
* Filters the post array before inserting the post into db
*
* @param array $postarr
* @param array $form_data
* @param obj $form_row
*
* @since 1.0.0
*/
$postarr = apply_filters( 'fpsml_insert_postdata', $postarr, $form_data, $form_row );
                </pre>
                <pre>
/**
* Filters the custom field value before storing it in the database
*
* @param mixed $custom_field_value
* @param string $custom_field_key
* @param obj $form_row
*
* @since 1.0.0
*/
$custom_field_value = apply_filters( 'fpsml_custom_field_value', $custom_field_value, $custom_field_key, $form_row );
                </pre>
                <pre>
/**
* Filters the form process response array
*
* @param array $response
* @param array $form_data
* @param obj $form_row
*
* @since 1.0.0
*/
$response = apply_filters( 'fpsml_form_response', $response, $form_data, $form_row );
                </pre>
                <pre>
/**
 * Filters custom field type list
 *
 * @param array $custom_field_type_list
 *
 * @since 1.0.0
 */
$custom_field_type_list = apply_filters('fpsml_custom_field_type_list', $custom_field_type_list);
                </pre>

                <pre>
/**
* Filters user arguments while fetching the users
*
* @param array $user_args
*
* @since 1.0.0
*/
$user_args = apply_filters( 'fpsml_user_list_args', $user_args );
                </pre>
                <pre>
/**
* Filters custom field type list
*
* @param array $custom_field_type_list
*
* @since 1.0.0
*/
$custom_field_type_list = apply_filters('fpsml_custom_field_type_list', $custom_field_type_list);
                </pre>

                <pre>
/**
* Filters custom field value html being printed
*
* @param mixed $custom_field_value
* @param string $custom_field_meta_key
*
* @since 1.0.0
*/
$filterd_custom_field_value = apply_filters('fpsml_custom_field_html', $custom_field_value, $custom_field_meta_key);
                </pre>
            </div>
            <p><?php esc_html_e('If you think there are any missing action or filters then please let us know from below link.', 'guest-posts-submission'); ?></p>
            <a href="https://profiles.wordpress.org/sunilkumarnagar/" target="_blank">https://profiles.wordpress.org/sunilkumarnagar/</a>
        </div>



    </div>
</div>