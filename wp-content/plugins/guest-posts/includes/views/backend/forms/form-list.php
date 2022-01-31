<?php
defined('ABSPATH') or die('No script kiddies please!!');
?>
<div class="wrap fpsml-wrap">
    <div class="fpsml-header">
        <h1 class="fpsml-floatLeft">
            <?php esc_html_e('Guest Posts Submission', 'guest-posts-submission'); ?>
            <span><?php esc_html_e('Lite', 'guest-posts-submission'); ?></span>
        </h1>
        
    </div>

    <div class="fpsml-grid-wrap">
        <div class="fpsml-title-wrap">
            <h2><?php esc_html_e('Form Lists', 'guest-posts-submission'); ?></h2>

        </div>
        <table class="wp-list-table widefat fixed fpsml-form-lists-table">
            <thead>
                <tr>
                    <th><?php esc_html_e('Form Title', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Shortcode', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Post Type', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Form Type', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Status', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Action', 'guest-posts-submission'); ?></th>
                </tr>
            </thead>
            <tbody>
                <?php
                global $wpdb;
                $form_table = FPSML_FORM_TABLE;
                $form_rows = $wpdb->get_results("select * from $form_table order by form_title asc");
                if (!empty($form_rows)) {
                    foreach ($form_rows as $form_row) {
                ?>
                        <tr>
                            <td><a href="<?php echo admin_url('admin.php?page=fpsm&form_id=' . intval($form_row->form_id) . '&action=edit_form'); ?>"><?php echo esc_html($form_row->form_title); ?></a></td>
                            <td>
                                <span class="fpsml-shortcode-preview">[fpsm alias="<?php echo esc_html(($form_row->form_alias)); ?>"]</span>
                                <span class="fpsml-clipboard-copy"><i class="fas fa-clipboard-list"></i></span>
                            </td>
                            <td><?php echo esc_html($form_row->post_type); ?></td>
                            <td><?php
                                $form_type_label = array('login_require' => esc_html__('Login Require Form'), 'guest' => esc_html__('Guest Form', 'guest-posts-submission'));
                                echo esc_html($form_type_label[$form_row->form_type]);
                                ?></td>
                            <td><?php echo (!empty($form_row->form_status)) ? esc_html__('Active', 'guest-posts-submission') : esc_html__('Inactive', 'guest-posts-submission'); ?></td>
                            <td>
                                <a class="fpsml-edit" href="<?php echo admin_url('admin.php?page=fpsm&form_id=' . intval($form_row->form_id) . '&action=edit_form'); ?>" title="<?php esc_html_e('Edit Form', 'guest-posts-submission'); ?>"><?php esc_html_e('Edit', 'guest-posts-submission'); ?></a>
                                <a class="fpsml-preview" href="<?php echo site_url() . '?fpsml_form_preview=true&fpsml_form_alias=' . esc_attr($form_row->form_alias) . '&_wpnonce=' . wp_create_nonce('fpsml_preview_nonce'); ?>" target="_blank" title="<?php esc_html_e('Preview', 'guest-posts-submission'); ?>"><?php esc_html_e('Preview', 'guest-posts-submission'); ?></a>
                            </td>
                        </tr>
                    <?php
                    }
                } else {
                    ?>
                    <tr>
                        <td colspan="5"><?php esc_html_e('No forms added yet.', 'guest-posts-submission'); ?></td>
                    </tr>
                <?php
                }
                ?>
            </tbody>
            <tfoot>
                <tr>
                    <th><?php esc_html_e('Form Title', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Shortcode', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Post Type', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Form Type', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Status', 'guest-posts-submission'); ?></th>
                    <th><?php esc_html_e('Action', 'guest-posts-submission'); ?></th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>