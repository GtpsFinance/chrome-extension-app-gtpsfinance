// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_shared_style.css.js';
import './toggle_row.js';
import { assert, assertNotReached } from '//resources/js/assert_ts.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxy } from './browser_proxy.js';
import { AppManagementUserAction, RunOnOsLoginMode } from './constants.js';
import { getTemplate } from './run_on_os_login_item.html.js';
import { recordAppManagementUserAction } from './util.js';
function convertModeToBoolean(runOnOsLoginMode) {
    switch (runOnOsLoginMode) {
        case RunOnOsLoginMode.kNotRun:
            return false;
        case RunOnOsLoginMode.kWindowed:
            return true;
        default:
            assertNotReached();
    }
}
function getRunOnOsLoginModeBoolean(runOnOsLoginMode) {
    assert(runOnOsLoginMode !== RunOnOsLoginMode.kUnknown, 'Run on OS Login Mode is not set');
    return convertModeToBoolean(runOnOsLoginMode);
}
export class AppManagementRunOnOsLoginItemElement extends PolymerElement {
    static get is() {
        return 'app-management-run-on-os-login-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            loginModeLabel: String,
            app: Object,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onClick_);
        this.addEventListener('change', this.toggleOsLoginMode_);
    }
    isManaged_() {
        const loginData = this.app.runOnOsLogin;
        if (loginData) {
            return loginData.isManaged;
        }
        return false;
    }
    getValue_() {
        const loginMode = this.getRunOnOsLoginMode();
        assert(loginMode);
        if (loginMode) {
            return getRunOnOsLoginModeBoolean(loginMode);
        }
        return false;
    }
    onClick_() {
        this.shadowRoot
            .querySelector('#toggle-row').click();
    }
    toggleOsLoginMode_() {
        assert(this.app);
        const currentRunOnOsLoginData = this.app.runOnOsLogin;
        if (currentRunOnOsLoginData) {
            const currentRunOnOsLoginMode = currentRunOnOsLoginData.loginMode;
            if (currentRunOnOsLoginMode === RunOnOsLoginMode.kUnknown) {
                assertNotReached();
            }
            const newRunOnOsLoginMode = (currentRunOnOsLoginMode === RunOnOsLoginMode.kNotRun) ?
                RunOnOsLoginMode.kWindowed :
                RunOnOsLoginMode.kNotRun;
            BrowserProxy.getInstance().handler.setRunOnOsLoginMode(this.app.id, newRunOnOsLoginMode);
            const booleanRunOnOsLoginMode = getRunOnOsLoginModeBoolean(newRunOnOsLoginMode);
            const runOnOsLoginModeChangeAction = booleanRunOnOsLoginMode ?
                AppManagementUserAction.RUN_ON_OS_LOGIN_MODE_TURNED_ON :
                AppManagementUserAction.RUN_ON_OS_LOGIN_MODE_TURNED_OFF;
            recordAppManagementUserAction(this.app.type, runOnOsLoginModeChangeAction);
        }
    }
    getRunOnOsLoginMode() {
        if (this.app.runOnOsLogin) {
            return this.app.runOnOsLogin.loginMode;
        }
        return null;
    }
}
customElements.define(AppManagementRunOnOsLoginItemElement.is, AppManagementRunOnOsLoginItemElement);
