// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_shared_style.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/policy/cr_tooltip_icon.js';
import { assertNotReached } from '//resources/js/assert_ts.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxy } from './browser_proxy.js';
import { AppManagementUserAction, InstallReason } from './constants.js';
import { getTemplate } from './uninstall_button.html.js';
import { recordAppManagementUserAction } from './util.js';
export class AppManamentUninstallButtonElement extends PolymerElement {
    static get is() {
        return 'app-management-uninstall-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            app: Object,
            uninstallLabel: String,
            policyLabel: String,
        };
    }
    /**
     * Returns true if the button should be disabled due to app install type.
     */
    getDisableState_() {
        switch (this.app.installReason) {
            case InstallReason.kSystem:
            case InstallReason.kPolicy:
                return true;
            case InstallReason.kOem:
            case InstallReason.kDefault:
            case InstallReason.kSync:
            case InstallReason.kUser:
            case InstallReason.kUnknown:
                return false;
            default:
                assertNotReached();
        }
    }
    /**
     * Returns true if the app was installed by a policy.
     */
    showPolicyIndicator_() {
        return this.app.installReason === InstallReason.kPolicy;
    }
    /**
     * Returns true if the uninstall button should be shown.
     */
    showUninstallButton_() {
        return this.app.installReason !== InstallReason.kSystem;
    }
    onClick_() {
        BrowserProxy.getInstance().handler.uninstall(this.app.id);
        recordAppManagementUserAction(this.app.type, AppManagementUserAction.UNINSTALL_DIALOG_LAUNCHED);
    }
}
customElements.define(AppManamentUninstallButtonElement.is, AppManamentUninstallButtonElement);
