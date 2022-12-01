// mojom-webui/components/services/app_service/public/mojom/types.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { FilePathSpec as mojoBase_mojom_FilePathSpec } from 'chrome://resources/mojo/mojo/public/mojom/base/file_path.mojom-webui.js';
import { SafeBaseNameSpec as mojoBase_mojom_SafeBaseNameSpec } from 'chrome://resources/mojo/mojo/public/mojom/base/safe_base_name.mojom-webui.js';
import { TimeSpec as mojoBase_mojom_TimeSpec } from 'chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { ImageSkiaSpec as gfx_mojom_ImageSkiaSpec } from 'chrome://resources/mojo/ui/gfx/image/mojom/image.mojom-webui.js';
import { UrlSpec as url_mojom_UrlSpec } from 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const PermissionTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const PermissionType = {
    kUnknown: 0,
    kCamera: 1,
    kLocation: 2,
    kMicrophone: 3,
    kNotifications: 4,
    kContacts: 5,
    kStorage: 6,
    kPrinting: 7,
    kFileHandling: 8,
    MIN_VALUE: 0,
    MAX_VALUE: 8,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const AppTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const AppType = {
    kUnknown: 0,
    kArc: 1,
    kBuiltIn: 2,
    kCrostini: 3,
    kChromeApp: 4,
    kWeb: 5,
    kMacOs: 6,
    kPluginVm: 7,
    kStandaloneBrowser: 8,
    kRemote: 9,
    kBorealis: 10,
    kSystemWeb: 11,
    kStandaloneBrowserChromeApp: 12,
    kExtension: 13,
    kStandaloneBrowserExtension: 14,
    MIN_VALUE: 0,
    MAX_VALUE: 14,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const ReadinessSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const Readiness = {
    kUnknown: 0,
    kReady: 1,
    kDisabledByBlocklist: 2,
    kDisabledByPolicy: 3,
    kDisabledByUser: 4,
    kTerminated: 5,
    kUninstalledByUser: 6,
    kRemoved: 7,
    kUninstalledByMigration: 8,
    MIN_VALUE: 0,
    MAX_VALUE: 8,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const InstallReasonSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const InstallReason = {
    kUnknown: 0,
    kSystem: 1,
    kPolicy: 2,
    kOem: 3,
    kDefault: 4,
    kSync: 5,
    kUser: 6,
    kSubApp: 7,
    kKiosk: 8,
    kCommandLine: 9,
    MIN_VALUE: 0,
    MAX_VALUE: 9,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const InstallSourceSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const InstallSource = {
    kUnknown: 0,
    kSystem: 1,
    kSync: 2,
    kPlayStore: 3,
    kChromeWebStore: 4,
    kBrowser: 5,
    MIN_VALUE: 0,
    MAX_VALUE: 5,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const UninstallSourceSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const UninstallSource = {
    kUnknown: 0,
    kAppList: 1,
    kAppManagement: 2,
    kShelf: 3,
    kMigration: 4,
    MIN_VALUE: 0,
    MAX_VALUE: 4,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const OptionalBoolSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const OptionalBool = {
    kUnknown: 0,
    kFalse: 1,
    kTrue: 2,
    MIN_VALUE: 0,
    MAX_VALUE: 2,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const IconTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const IconType = {
    kUnknown: 0,
    kUncompressed: 1,
    kCompressed: 2,
    kStandard: 3,
    MIN_VALUE: 0,
    MAX_VALUE: 3,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const LaunchSourceSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const LaunchSource = {
    kUnknown: 0,
    kFromAppListGrid: 1,
    kFromAppListGridContextMenu: 2,
    kFromAppListQuery: 3,
    kFromAppListQueryContextMenu: 4,
    kFromAppListRecommendation: 5,
    kFromParentalControls: 6,
    kFromShelf: 7,
    kFromFileManager: 8,
    kFromLink: 9,
    kFromOmnibox: 10,
    kFromChromeInternal: 11,
    kFromKeyboard: 12,
    kFromOtherApp: 13,
    kFromMenu: 14,
    kFromInstalledNotification: 15,
    kFromTest: 16,
    kFromArc: 17,
    kFromSharesheet: 18,
    kFromReleaseNotesNotification: 19,
    kFromFullRestore: 20,
    kFromSmartTextContextMenu: 21,
    kFromDiscoverTabNotification: 22,
    kFromManagementApi: 23,
    kFromKiosk: 24,
    kFromCommandLine: 25,
    kFromBackgroundMode: 26,
    kFromNewTabPage: 27,
    kFromIntentUrl: 28,
    kFromOsLogin: 29,
    kFromProtocolHandler: 30,
    kFromUrlHandler: 31,
    kFromLockScreen: 32,
    MIN_VALUE: 0,
    MAX_VALUE: 32,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const TriStateSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const TriState = {
    kAllow: 0,
    kBlock: 1,
    kAsk: 2,
    MIN_VALUE: 0,
    MAX_VALUE: 2,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const MenuItemTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const MenuItemType = {
    kCommand: 0,
    kRadio: 1,
    kSeparator: 2,
    kSubmenu: 3,
    kPublisherCommand: 4,
    MIN_VALUE: 0,
    MAX_VALUE: 4,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const MenuTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const MenuType = {
    kAppList: 0,
    kShelf: 1,
    MIN_VALUE: 0,
    MAX_VALUE: 1,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const ConditionTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const ConditionType = {
    kScheme: 0,
    kHost: 1,
    kPath: 2,
    kAction: 3,
    kMimeType: 4,
    kFile: 5,
    MIN_VALUE: 0,
    MAX_VALUE: 5,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const PatternMatchTypeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const PatternMatchType = {
    kLiteral: 1,
    kPrefix: 2,
    kGlob: 3,
    kMimeType: 4,
    kFileExtension: 5,
    kIsDirectory: 6,
    kSuffix: 7,
    MIN_VALUE: 1,
    MAX_VALUE: 7,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const LaunchContainerSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const LaunchContainer = {
    kLaunchContainerWindow: 0,
    kLaunchContainerPanelDeprecated: 1,
    kLaunchContainerTab: 2,
    kLaunchContainerNone: 3,
    MIN_VALUE: 0,
    MAX_VALUE: 3,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const WindowModeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const WindowMode = {
    kUnknown: 0,
    kWindow: 1,
    kBrowser: 2,
    kTabbedWindow: 3,
    MIN_VALUE: 0,
    MAX_VALUE: 3,
};
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const RunOnOsLoginModeSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const RunOnOsLoginMode = {
    kUnknown: 0,
    kNotRun: 1,
    kWindowed: 2,
    MIN_VALUE: 0,
    MAX_VALUE: 2,
};
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const AppSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const PermissionSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const IconKeySpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const MenuItemsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const MenuItemSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const ConditionValueSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const ConditionSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const IntentFilterSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const IntentFileSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const IntentSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const PreferredAppSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const FilePathsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CapabilityAccessSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const RectSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const WindowInfoSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const RunOnOsLoginSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType} }
 */
export const PermissionValueSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(AppSpec.$, 'App', [
    mojo.internal.StructField('appType', 0, 0, AppTypeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('appId', 8, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('readiness', 4, 0, ReadinessSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('shortName', 24, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('publisherId', 32, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('description', 40, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('version', 48, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('additionalSearchTerms', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0),
    mojo.internal.StructField('iconKey', 64, 0, IconKeySpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('lastLaunchTime', 72, 0, mojoBase_mojom_TimeSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('installTime', 80, 0, mojoBase_mojom_TimeSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('permissions', 88, 0, mojo.internal.Array(PermissionSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('installReason', 96, 0, InstallReasonSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('installSource', 100, 0, InstallSourceSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('policyIds', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0),
    mojo.internal.StructField('isPlatformApp', 112, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('recommendable', 116, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('searchable', 120, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('showInLauncher', 124, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('showInShelf', 128, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('showInSearch', 132, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('showInManagement', 136, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('handlesIntents', 140, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('allowUninstall', 144, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('hasBadge', 148, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('paused', 152, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('intentFilters', 160, 0, mojo.internal.Array(IntentFilterSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('resizeLocked', 156, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('windowMode', 168, 0, WindowModeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('runOnOsLogin', 176, 0, RunOnOsLoginSpec.$, null, true /* nullable */, 0),
], [[0, 192],]);
/**
 * @record
 */
export class App {
    constructor() {
        /** @type { !AppType } */
        this.appType;
        /** @type { !Readiness } */
        this.readiness;
        /** @type { !string } */
        this.appId;
        /** @type { (string|undefined) } */
        this.name;
        /** @type { (string|undefined) } */
        this.shortName;
        /** @type { (string|undefined) } */
        this.publisherId;
        /** @type { (string|undefined) } */
        this.description;
        /** @type { (string|undefined) } */
        this.version;
        /** @type { !Array<!string> } */
        this.additionalSearchTerms;
        /** @type { (IconKey|undefined) } */
        this.iconKey;
        /** @type { (mojoBase_mojom_Time|undefined) } */
        this.lastLaunchTime;
        /** @type { (mojoBase_mojom_Time|undefined) } */
        this.installTime;
        /** @type { !Array<!Permission> } */
        this.permissions;
        /** @type { !InstallReason } */
        this.installReason;
        /** @type { !InstallSource } */
        this.installSource;
        /** @type { !Array<!string> } */
        this.policyIds;
        /** @type { !OptionalBool } */
        this.isPlatformApp;
        /** @type { !OptionalBool } */
        this.recommendable;
        /** @type { !OptionalBool } */
        this.searchable;
        /** @type { !OptionalBool } */
        this.showInLauncher;
        /** @type { !OptionalBool } */
        this.showInShelf;
        /** @type { !OptionalBool } */
        this.showInSearch;
        /** @type { !OptionalBool } */
        this.showInManagement;
        /** @type { !OptionalBool } */
        this.handlesIntents;
        /** @type { !OptionalBool } */
        this.allowUninstall;
        /** @type { !OptionalBool } */
        this.hasBadge;
        /** @type { !OptionalBool } */
        this.paused;
        /** @type { !OptionalBool } */
        this.resizeLocked;
        /** @type { !Array<!IntentFilter> } */
        this.intentFilters;
        /** @type { !WindowMode } */
        this.windowMode;
        /** @type { (RunOnOsLogin|undefined) } */
        this.runOnOsLogin;
    }
}
mojo.internal.Struct(PermissionSpec.$, 'Permission', [
    mojo.internal.StructField('permissionType', 0, 0, PermissionTypeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('value', 8, 0, PermissionValueSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('isManaged', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 32],]);
/**
 * @record
 */
export class Permission {
    constructor() {
        /** @type { !PermissionType } */
        this.permissionType;
        /** @type { !boolean } */
        this.isManaged;
        /** @type { !PermissionValue } */
        this.value;
    }
}
/**
 * @const { !bigint }
 */
export const IconKey_DOES_NOT_CHANGE_OVER_TIME = BigInt('0');
/**
 * @const { !number }
 */
export const IconKey_INVALID_RESOURCE_ID = 0;
mojo.internal.Struct(IconKeySpec.$, 'IconKey', [
    mojo.internal.StructField('timeline', 0, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0),
    mojo.internal.StructField('resourceId', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('iconEffects', 12, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class IconKey {
    constructor() {
        /** @type { !bigint } */
        this.timeline;
        /** @type { !number } */
        this.resourceId;
        /** @type { !number } */
        this.iconEffects;
    }
}
mojo.internal.Struct(MenuItemsSpec.$, 'MenuItems', [
    mojo.internal.StructField('items', 0, 0, mojo.internal.Array(MenuItemSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class MenuItems {
    constructor() {
        /** @type { !Array<!MenuItem> } */
        this.items;
    }
}
mojo.internal.Struct(MenuItemSpec.$, 'MenuItem', [
    mojo.internal.StructField('type', 0, 0, MenuItemTypeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('commandId', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('stringId', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('submenu', 16, 0, mojo.internal.Array(MenuItemSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('radioGroupId', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('shortcutId', 24, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('image', 40, 0, gfx_mojom_ImageSkiaSpec.$, null, true /* nullable */, 0),
], [[0, 56],]);
/**
 * @record
 */
export class MenuItem {
    constructor() {
        /** @type { !MenuItemType } */
        this.type;
        /** @type { !number } */
        this.commandId;
        /** @type { !number } */
        this.stringId;
        /** @type { !number } */
        this.radioGroupId;
        /** @type { !Array<!MenuItem> } */
        this.submenu;
        /** @type { !string } */
        this.shortcutId;
        /** @type { !string } */
        this.label;
        /** @type { (gfx_mojom_ImageSkia|undefined) } */
        this.image;
    }
}
mojo.internal.Struct(ConditionValueSpec.$, 'ConditionValue', [
    mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('matchType', 8, 0, PatternMatchTypeSpec.$, 0, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class ConditionValue {
    constructor() {
        /** @type { !string } */
        this.value;
        /** @type { !PatternMatchType } */
        this.matchType;
    }
}
mojo.internal.Struct(ConditionSpec.$, 'Condition', [
    mojo.internal.StructField('conditionType', 0, 0, ConditionTypeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('conditionValues', 8, 0, mojo.internal.Array(ConditionValueSpec.$, false), null, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class Condition {
    constructor() {
        /** @type { !ConditionType } */
        this.conditionType;
        /** @type { !Array<!ConditionValue> } */
        this.conditionValues;
    }
}
mojo.internal.Struct(IntentFilterSpec.$, 'IntentFilter', [
    mojo.internal.StructField('conditions', 0, 0, mojo.internal.Array(ConditionSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('activityName', 8, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('activityLabel', 16, 0, mojo.internal.String, null, true /* nullable */, 0),
], [[0, 32],]);
/**
 * @record
 */
export class IntentFilter {
    constructor() {
        /** @type { !Array<!Condition> } */
        this.conditions;
        /** @type { (string|undefined) } */
        this.activityName;
        /** @type { (string|undefined) } */
        this.activityLabel;
    }
}
mojo.internal.Struct(IntentFileSpec.$, 'IntentFile', [
    mojo.internal.StructField('url', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('mimeType', 8, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('fileName', 16, 0, mojoBase_mojom_SafeBaseNameSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('fileSize', 24, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0),
    mojo.internal.StructField('isDirectory', 32, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
], [[0, 48],]);
/**
 * @record
 */
export class IntentFile {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.url;
        /** @type { (string|undefined) } */
        this.mimeType;
        /** @type { (mojoBase_mojom_SafeBaseName|undefined) } */
        this.fileName;
        /** @type { !bigint } */
        this.fileSize;
        /** @type { !OptionalBool } */
        this.isDirectory;
    }
}
mojo.internal.Struct(IntentSpec.$, 'Intent', [
    mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('url', 8, 0, url_mojom_UrlSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('mimeType', 16, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('files', 24, 0, mojo.internal.Array(IntentFileSpec.$, false), null, true /* nullable */, 0),
    mojo.internal.StructField('activityName', 32, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('driveShareUrl', 40, 0, url_mojom_UrlSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('shareText', 48, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('shareTitle', 56, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('startType', 64, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('categories', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true /* nullable */, 0),
    mojo.internal.StructField('data', 80, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('uiBypassed', 88, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('extras', 96, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true /* nullable */, 0),
], [[0, 112],]);
/**
 * @record
 */
export class Intent {
    constructor() {
        /** @type { !string } */
        this.action;
        /** @type { (url_mojom_Url|undefined) } */
        this.url;
        /** @type { (string|undefined) } */
        this.mimeType;
        /** @type { (Array<!IntentFile>|undefined) } */
        this.files;
        /** @type { (string|undefined) } */
        this.activityName;
        /** @type { (url_mojom_Url|undefined) } */
        this.driveShareUrl;
        /** @type { (string|undefined) } */
        this.shareText;
        /** @type { (string|undefined) } */
        this.shareTitle;
        /** @type { (string|undefined) } */
        this.startType;
        /** @type { (Array<!string>|undefined) } */
        this.categories;
        /** @type { (string|undefined) } */
        this.data;
        /** @type { !OptionalBool } */
        this.uiBypassed;
        /** @type { (Object<!string, !string>|undefined) } */
        this.extras;
    }
}
mojo.internal.Struct(PreferredAppSpec.$, 'PreferredApp', [
    mojo.internal.StructField('intentFilter', 0, 0, IntentFilterSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('appId', 8, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class PreferredApp {
    constructor() {
        /** @type { !IntentFilter } */
        this.intentFilter;
        /** @type { !string } */
        this.appId;
    }
}
mojo.internal.Struct(FilePathsSpec.$, 'FilePaths', [
    mojo.internal.StructField('filePaths', 0, 0, mojo.internal.Array(mojoBase_mojom_FilePathSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class FilePaths {
    constructor() {
        /** @type { !Array<!mojoBase_mojom_FilePath> } */
        this.filePaths;
    }
}
mojo.internal.Struct(CapabilityAccessSpec.$, 'CapabilityAccess', [
    mojo.internal.StructField('appId', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('camera', 8, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('microphone', 12, 0, OptionalBoolSpec.$, 0, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class CapabilityAccess {
    constructor() {
        /** @type { !string } */
        this.appId;
        /** @type { !OptionalBool } */
        this.camera;
        /** @type { !OptionalBool } */
        this.microphone;
    }
}
mojo.internal.Struct(RectSpec.$, 'Rect', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class Rect {
    constructor() {
        /** @type { !number } */
        this.x;
        /** @type { !number } */
        this.y;
        /** @type { !number } */
        this.width;
        /** @type { !number } */
        this.height;
    }
}
mojo.internal.Struct(WindowInfoSpec.$, 'WindowInfo', [
    mojo.internal.StructField('windowId', 0, 0, mojo.internal.Int32, -1, false /* nullable */, 0),
    mojo.internal.StructField('state', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('displayId', 8, 0, mojo.internal.Int64, BigInt('-1'), false /* nullable */, 0),
    mojo.internal.StructField('bounds', 16, 0, RectSpec.$, null, true /* nullable */, 0),
], [[0, 32],]);
/**
 * @record
 */
export class WindowInfo {
    constructor() {
        /** @type { !number } */
        this.windowId;
        /** @type { !number } */
        this.state;
        /** @type { !bigint } */
        this.displayId;
        /** @type { (Rect|undefined) } */
        this.bounds;
    }
}
mojo.internal.Struct(RunOnOsLoginSpec.$, 'RunOnOsLogin', [
    mojo.internal.StructField('loginMode', 0, 0, RunOnOsLoginModeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('isManaged', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class RunOnOsLogin {
    constructor() {
        /** @type { !RunOnOsLoginMode } */
        this.loginMode;
        /** @type { !boolean } */
        this.isManaged;
    }
}
mojo.internal.Union(PermissionValueSpec.$, 'PermissionValue', {
    'boolValue': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
    },
    'tristateValue': {
        'ordinal': 1,
        'type': TriStateSpec.$,
    },
});
/**
 * @typedef { {
 *   boolValue: (!boolean|undefined),
 *   tristateValue: (!TriState|undefined),
 * } }
 */
export const PermissionValue = {};