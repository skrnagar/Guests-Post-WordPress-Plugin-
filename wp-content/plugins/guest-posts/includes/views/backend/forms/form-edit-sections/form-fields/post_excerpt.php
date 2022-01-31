<div class="fpsml-each-form-field">
    <div class="fpsml-field-head fpsml-clearfix">
        <h3 class="fpsml-field-title"><span class="dashicons dashicons-arrow-down"></span><?php esc_html_e('Post Excerpt', 'guest-posts-submission'); ?></h3>
    </div>
    <div class="fpsml-field-body fpsml-display-none">
        <?php include(FPSML_PATH . '/includes/views/backend/forms/form-edit-sections/form-fields/common-fields.php'); ?>
        <div class="fpsml-show-fields-ref-<?php echo esc_attr($field_key); ?> <?php echo (empty($field_details['show_on_form'])) ? 'fpsml-display-none' : ''; ?>">
            <div class="fpsml-field-wrap">
                <label><?php esc_html_e('Characters Limit', 'guest-posts-submission'); ?></label>
                <div class="fpsml-field">
                    <input type="number" name="<?php echo esc_attr($field_name_prefix);?>[characters_limit]" value="<?php echo (!empty($field_details['characters_limit'])) ? intval($field_details['characters_limit']) : ''; ?>"/>
                </div>
            </div>
            <div class="fpsml-field-wrap">
                <label><?php esc_html_e('Character Limit Error Message', 'guest-posts-submission'); ?></label>
                <div class="fpsml-field">
                    <input type="text" name="form_details[form][fields][<?php echo esc_attr($field_key) ?>][character_limit_error_message]" value="<?php echo (!empty($field_details['character_limit_message'])) ? esc_attr($field_details['character_limit_message']) : ''; ?>"/>
                </div>
            </div>
        </div>
    </div>
</div>