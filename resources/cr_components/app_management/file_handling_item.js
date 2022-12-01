// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_shared_style.css.js';
import './toggle_row.js';
import { assert } from '//resources/js/assert_ts.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin } from '../../cr_elements/i18n_mixin.js';
import { BrowserProxy } from './browser_proxy.js';
import { AppManagementUserAction } from './constants.js';
import { getTemplate } from './file_handling_item.html.js';
import { recordAppManagementUserAction } from './util.js';
const AppManagementFileHandlingItemBase = I18nMixin(PolymerElement);
export class AppManagementFileHandlingItemElement extends AppManagementFileHandlingItemBase {
    static get is() {
        return 'app-management-file-handling-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            app: Object,
            /**
             * @type {boolean}
             */
            showOverflowDialog: {
                type: Boolean,
                value: false,
            },
            /**
             * @type {boolean}
             */
            hidden: {
                type: Boolean,
                computed: 'isHidden_(app)',
                reflectToAttribute: true,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('change', this.onChanged_);
    }
    isHidden_(app) {
        if (app && app.fileHandlingState) {
            return !app.fileHandlingState.userVisibleTypes;
        }
        return false;
    }
    isManaged_(app) {
        if (app && app.fileHandlingState) {
            return app.fileHandlingState.isManaged;
        }
        return false;
    }
    userVisibleTypes_(app) {
        if (app && app.fileHandlingState) {
            return app.fileHandlingState.userVisibleTypes;
        }
        return '';
    }
    userVisibleTypesLabel_(app) {
        if (app && app.fileHandlingState) {
            return app.fileHandlingState.userVisibleTypesLabel;
        }
        return '';
    }
    getLearnMoreLinkUrl_(app) {
        if (app && app.fileHandlingState && app.fileHandlingState.learnMoreUrl) {
            return app.fileHandlingState.learnMoreUrl.url;
        }
        return '';
    }
    onLearnMoreLinkClicked_(e) {
        if (!this.getLearnMoreLinkUrl_(this.app)) {
            // Currently, this branch should only be used on Windows.
            e.detail.event.preventDefault();
            e.stopPropagation();
            BrowserProxy.getInstance().handler.showDefaultAppAssociationsUi();
        }
    }
    launchDialog_(e) {
        // A place holder href with the value "#" is used to have a compliant link.
        // This prevents the browser from navigating the window to "#"
        e.detail.event.preventDefault();
        e.stopPropagation();
        this.showOverflowDialog = true;
        recordAppManagementUserAction(this.app.type, AppManagementUserAction.FILE_HANDLING_OVERFLOW_SHOWN);
    }
    onCloseButtonClicked_() {
        this.shadowRoot.querySelector('#dialog').close();
    }
    onDialogClose_() {
        this.showOverflowDialog = false;
        const toFocus = this.shadowRoot.querySelector('#type-list');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    getValue_(app) {
        if (app && app.fileHandlingState) {
            return app.fileHandlingState.enabled;
        }
        return false;
    }
    onChanged_() {
        assert(this.app);
        const enabled = this.shadowRoot
            .querySelector('#toggle-row').isChecked();
        BrowserProxy.getInstance().handler.setFileHandlingEnabled(this.app.id, enabled);
        const fileHandlingChangeAction = enabled ?
            AppManagementUserAction.FILE_HANDLING_TURNED_ON :
            AppManagementUserAction.FILE_HANDLING_TURNED_OFF;
        recordAppManagementUserAction(this.app.type, fileHandlingChangeAction);
    }
}
customElements.define(AppManagementFileHandlingItemElement.is, AppManagementFileHandlingItemElement);
