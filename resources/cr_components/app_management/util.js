// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert_ts.js';
import { PermissionType } from './app_management.mojom-webui.js';
import { BrowserProxy } from './browser_proxy.js';
import { AppManagementUserAction, AppType, OptionalBool } from './constants.js';
import { isPermissionEnabled } from './permission_util.js';
export function createEmptyState() {
    return {
        apps: {},
        selectedAppId: null,
    };
}
export function createInitialState(apps) {
    const initialState = createEmptyState();
    for (const app of apps) {
        initialState.apps[app.id] = app;
    }
    return initialState;
}
export function getAppIcon(app) {
    return `chrome://app-icon/${app.id}/64`;
}
export function getPermissionValueBool(app, permissionType) {
    const permission = getPermission(app, permissionType);
    assert(permission);
    return isPermissionEnabled(permission.value);
}
/**
 * Undefined is returned when the app does not request a permission.
 */
export function getPermission(app, permissionType) {
    return app.permissions[PermissionType[permissionType]];
}
export function getSelectedApp(state) {
    const selectedAppId = state.selectedAppId;
    return selectedAppId ? state.apps[selectedAppId] : null;
}
/**
 * A comparator function to sort strings alphabetically.
 */
export function alphabeticalSort(a, b) {
    return a.localeCompare(b);
}
/**
 * Toggles an OptionalBool
 */
export function toggleOptionalBool(bool) {
    switch (bool) {
        case OptionalBool.kFalse:
            return OptionalBool.kTrue;
        case OptionalBool.kTrue:
            return OptionalBool.kFalse;
        default:
            assertNotReached();
    }
}
export function convertOptionalBoolToBool(optionalBool) {
    switch (optionalBool) {
        case OptionalBool.kTrue:
            return true;
        case OptionalBool.kFalse:
            return false;
        default:
            assertNotReached();
    }
}
function getUserActionHistogramNameForAppType(appType) {
    switch (appType) {
        case AppType.kArc:
            return 'AppManagement.AppDetailViews.ArcApp';
        case AppType.kChromeApp:
        case AppType.kStandaloneBrowser:
        case AppType.kStandaloneBrowserChromeApp:
            // TODO(https://crbug.com/1225848): Figure out appropriate behavior for
            // Lacros-hosted chrome-apps.
            return 'AppManagement.AppDetailViews.ChromeApp';
        case AppType.kWeb:
            return 'AppManagement.AppDetailViews.WebApp';
        case AppType.kPluginVm:
            return 'AppManagement.AppDetailViews.PluginVmApp';
        case AppType.kBorealis:
            return 'AppManagement.AppDetailViews.BorealisApp';
        default:
            assertNotReached();
    }
}
export function recordAppManagementUserAction(appType, userAction) {
    const histogram = getUserActionHistogramNameForAppType(appType);
    const enumLength = Object.keys(AppManagementUserAction).length;
    BrowserProxy.getInstance().recordEnumerationValue(histogram, userAction, enumLength);
}
