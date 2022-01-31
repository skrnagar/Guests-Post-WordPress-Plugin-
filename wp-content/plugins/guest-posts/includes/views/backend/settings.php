<?php
defined('ABSPATH') or die('No script kiddies please!!');
global $fpsml_library_obj;
$fpsml_settings = get_option('fpsml_settings');
?>
<div class="wrap fpsml-wrap">
    <div class="fpsml-header fpsml-clearfix">
        <h1 class="fpsml-floatLeft">
            <?php esc_html_e('Guest Posts Submission', 'guest-posts-submission'); ?>
            <span><?php esc_html_e('Lite', 'guest-posts-submission'); ?></span>
        </h1>
        <div class="fpsml-add-wrap">
            <input type="button" value="<?php esc_html_e('Save Settings', 'guest-posts-submission'); ?>" class="fpsml-primary-button fpsml-form-save" data-form="fpsml-settings-form"/>
            <a href="<?php echo admin_url('admin.php?page=fpsm'); ?>" class="fpsml-button-primary btn-cancel">Cancel</a>
        </div>
    </div>
    <form class="fpsml-form fpsml-settings-form">
        <h2 class="fpsml-floatRight"><?php esc_html_e('Global Settings', 'guest-posts-submission'); ?></h2>
        <div class="fpsml-form-element-wrap">
            <div class="fpsml-field-wrap">
                <label><?php esc_html_e('Disable Fontawesome', 'guest-posts-submission'); ?></label>
                <div class="fpsml-field">
                    <input type="checkbox" name="fpsml_settings[disable_fontawesome]" value="1" <?php echo (!empty($fpsml_settings['disable_fontawesome'])) ? 'checked="checked"' : ''; ?>/>
                    <p class="description"><?php esc_html_e('Please check if you want to disable fontawesome being loaded from our plugin.', 'guest-posts-submission'); ?></p>
                </div>
            </div>
            <div class="fpsml-field-wrap">
                <label><?php esc_html_e('Disable jQuery UI CSS', 'guest-posts-submission'); ?></label>
                <div class="fpsml-field">
                    <input type="checkbox" name="fpsml_settings[disable_jquery_ui_css]" value="1" <?php echo (!empty($fpsml_settings['disable_jquery_ui_css'])) ? 'checked="checked"' : ''; ?>/>
                    <p class="description"><?php esc_html_e('Please check if you want to disable the jQuery UI css being used for datepicker.', 'guest-posts-submission'); ?></p>
                </div>
            </div>
            <div class="fpsml-field-wrap">
                <label><?php esc_html_e('Disable "Are you sure?" JS', 'guest-posts-submission'); ?></label>
                <div class="fpsml-field">
                    <input type="checkbox" name="fpsml_settings[disable_are_you_sure_js]" value="1" <?php echo (!empty($fpsml_settings['disable_are_you_sure_js'])) ? 'checked="checked"' : ''; ?>/>
                    <p class="description"><?php esc_html_e('Please check if you want to disable "Are you sure" js which is being used to prevent user from leaving the browser without saving or submitting the form after entering or changing some data in the form.', 'guest-posts-submission'); ?></p>
                </div>
            </div>
        </div>
    </form>
</div>