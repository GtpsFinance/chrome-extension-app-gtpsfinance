import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">:host{align-items:center;cursor:pointer;display:flex;flex:1;justify-content:space-between}</style>
<div id="label" aria-hidden="true">
  [[morePermissionsLabel]]
</div>
<div class="permission-row-controls">
  <cr-icon-button class="native-settings-icon icon-external" role="link" tabindex="0" aria-labelledby="label">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`;
}
