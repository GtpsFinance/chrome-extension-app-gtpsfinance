import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">:host(:not([available_])){display:none}#file-handling-item{margin:var(--row-item-vertical-padding) 0;width:100%}#toggle-row:not([disabled_]){cursor:pointer}#dialog-body{user-select:text}</style>

<div id="file-handling-item">
  <app-management-toggle-row id="toggle-row" label="[[i18n('appManagementFileHandlingHeader')]]" managed="[[isManaged_(app)]]" value="[[getValue_(app)]]" class="header-text">
  </app-management-toggle-row>
  <p>
    <localized-link id="type-list" localized-string="[[userVisibleTypesLabel_(app)]]" on-link-clicked="launchDialog_">
    </localized-link>
  </p>
  <localized-link id="learn-more" localized-string="[[i18nAdvanced('fileHandlingSetDefaults')]]" link-url="[[getLearnMoreLinkUrl_(app)]]" on-link-clicked="onLearnMoreLinkClicked_">
  </localized-link>
</div>
<template is="dom-if" if="[[showOverflowDialog]]" restamp>
  <cr-dialog id="dialog" show-on-attach on-close="onDialogClose_">
    <div slot="title">[[i18n('fileHandlingOverflowDialogTitle')]]</div>
    <div id="dialog-body" slot="body">
      [[userVisibleTypes_(app)]]
    </div>
    <div slot="button-container">
      <cr-button class="action-button" on-click="onCloseButtonClicked_">
        [[i18n('close')]]
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`;
}
