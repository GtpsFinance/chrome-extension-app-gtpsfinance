// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './app_management.mojom-webui.js';
export class BrowserProxy {
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    recordEnumerationValue(metricName, value, enumSize) {
        chrome.metricsPrivate.recordEnumerationValue(metricName, value, enumSize);
    }
    static getInstance() {
        return instance || (instance = new BrowserProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
