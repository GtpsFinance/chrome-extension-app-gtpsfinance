import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import './shared_vars.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style">
.card-container{border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);display:flex;flex-direction:column;margin:24px auto;max-width:var(--card-max-width);min-width:var(--card-min-width)}.separated-row{align-items:center;display:inline-flex;justify-content:space-between}.card-row{border-top:var(--card-separator);padding:0 24px}.permission-card-row{border-bottom:var(--card-separator);padding:0 20px}.permission-text-row{border-top:var(--card-separator);display:flex;flex-direction:column;height:var(--text-permission-list-row-height);justify-content:center}.permission-section-header{line-height:48px}.clickable{cursor:pointer}.permission-card-row:last-child{border-style:none}.permission-card-row[hide-bottom-border]{border-bottom:none}.header-text{color:var(--header-text-color);font-weight:var(--header-font-weight)}.permission-row-controls{align-items:center;display:inline-flex}.permission-list{display:flex;flex-direction:column}.permission-list>*{flex:0 0 var(--permission-list-item-height)}.row-with-description{flex:0 0 var(--permission-list-item-with-description-height)}.native-settings-icon{display:flex;margin-inline-start:0}.subpermission-row{border-bottom:var(--card-separator);height:48px}.subpermission-row[available_]:last-of-type{border-bottom:none}.secondary-text{color:var(--secondary-text-color);font-weight:var(--secondary-font-weight)}.expand-button{height:36px;margin-inline-end:12px;width:36px}.horizontal-align{align-items:center;display:flex}.expander-list-row{align-items:center;border-top:var(--card-separator);color:var(--secondary-text-color);display:flex;height:50px;justify-content:space-between;padding-inline-end:8px;padding-inline-start:24px}.page-title{flex:1;font-size:16px;overflow:hidden;text-overflow:ellipsis}.indented-permission-block{padding-inline-start:36px}.info-text-row{display:flex;flex:0 0 var(--info-text-row-height)}#info-icon{float:inline-block;height:var(--help-icon-size);padding-inline-end:var(--help-icon-padding);width:var(--help-icon-size)}#info-text{float:inline-block;overflow-wrap:break-word}.indented-app-details{margin-inline-start:20px}
    </style>
  </template>
`.content);
styleMod.register('app-management-shared-style');
