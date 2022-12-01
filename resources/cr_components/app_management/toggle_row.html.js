import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">:host{align-items:center;display:flex;flex:1;justify-content:space-between}#icon{padding-inline-end:var(--row-item-icon-padding)}#policyIndicator{padding-inline-end:var(--app-management-controlled-by-spacing)}</style>

<div id="left-content" aria-hidden="true">
  <div class="horizontal-align">
    <template is="dom-if" if="[[icon]]">
      <iron-icon id="icon" icon="[[icon]]"></iron-icon>
    </template>
    <div class="vertical-align">
      <div id="label">[[label]]</div>
      <template is="dom-if" if="[[description]]">
          <div id="description" class="secondary-text">
            [[description]]
          </div>
      </template>
    </div>
  </div>
</div>
<div id="right-content" class="horizontal-align">
  <template is="dom-if" if="[[managed]]">
    <cr-policy-indicator id="policyIndicator" indicator-type="devicePolicy">
    </cr-policy-indicator>
  </template>
  <cr-toggle id="toggle" checked="[[value]]" disabled$="[[managed]]" role="button" tabindex="0" aria-pressed="[[value]]" aria-label="[[label]]">
  </cr-toggle>
</div>
<!--_html_template_end_-->`;
}
