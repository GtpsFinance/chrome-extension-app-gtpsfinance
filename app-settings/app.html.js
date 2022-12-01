import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">
  #content {
    background-color: var(--cr-card-background-color);
    border-radius: var(--cr-card-border-radius);
    box-shadow: var(--cr-card-shadow);
    color: var(--cr-primary-text-color);
    /* Follows margin used in chrome://history */
    margin-top: 24px;
  }

  /* Follows styles in settings_subpage for header and app title */
  #headerLine {
    min-height: 40px;
    padding-bottom: 24px;
    padding-top: 8px;
  }

  #title-icon {
    height: 36px;
    margin-inline-end: 12px;
    margin-inline-start: 2px;
    width: 36px;
  }

  #uninstall-button {
    /* Push the button to the right in flex layout. */
    margin-inline-start: auto;
  }
</style>
<cr-toolbar page-name="App settings" show-search="[[showSearch_]]"
    always-show-logo>
</cr-toolbar>
<div id="content" class="cr-centered-card-container">
  <div class="cr-row first" id="headerLine">
    <img id="title-icon" src="[[iconUrl_]]" aria-hidden="true">
    <h1 class="cr-title-text">[[app_.title]]</h1>
    <app-management-uninstall-button id="uninstall-button"
        app="[[app_]]"
        uninstall-label="Uninstall"
        policy-label="This app has been installed by your administrator.">
    </app-management-uninstall-button>
  </div>
  <div class="permission-list">
    <app-management-run-on-os-login-item
      class="permission-card-row separated-row"
      login-mode-label="Start app when you sign in"
      app="[[app_]]">
    </app-management-run-on-os-login-item>
    <app-management-window-mode-item
      class="permission-card-row separated-row"
      window-mode-label="Open as window"
      app="[[app_]]">
    </app-management-window-mode-item>
    <app-management-permission-item
        class="permission-card-row separated-row"
        app="[[app_]]"
        permission-label="Notifications"
        permission-type="kNotifications">
    </app-management-permission-item>
    <div id="permissions-card" class="permission-card-row">
      <div class="permission-section-header">
        <div class="header-text">Permissions</div>
      </div>
      <div class="permission-list indented-permission-block">
        <app-management-permission-item class="subpermission-row"
            icon="app-management:location" app="[[app_]]"
            permission-label="Location"
            permission-type="kLocation">
        </app-management-permission-item>
        <app-management-permission-item class="subpermission-row"
            icon="app-management:camera" app="[[app_]]"
            permission-label="Camera"
            permission-type="kCamera">
        </app-management-permission-item>
        <app-management-permission-item class="subpermission-row"
            icon="app-management:microphone" app="[[app_]]"
            permission-label="Microphone"
            permission-type="kMicrophone">
        </app-management-permission-item>
      </div>
    </div>
    <app-management-file-handling-item
        class="permission-card-row separated-row"
        app="[[app_]]">
    </app-management-file-handling-item>
    <app-management-more-permissions-item
        class="permission-card-row separated-row" app="[[app_]]"
        more-permissions-label="More settings and permissions">
    </app-management-more-permissions-item>
  </div>
</div>
<!--_html_template_end_-->`;
}
