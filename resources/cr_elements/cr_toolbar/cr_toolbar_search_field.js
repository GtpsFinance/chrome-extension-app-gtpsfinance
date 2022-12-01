// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../cr_icon_button/cr_icon_button.js';
import '../cr_icons.css.js';
import '../icons.html.js';
import '../cr_shared_style.css.js';
import '../cr_shared_vars.css.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CrSearchFieldMixin } from '../cr_search_field/cr_search_field_mixin.js';
import { getTemplate } from './cr_toolbar_search_field.html.js';
const CrToolbarSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
export class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is() {
        return 'cr-toolbar-search-field';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
            },
            showingSearch: {
                type: Boolean,
                value: false,
                notify: true,
                observer: 'showingSearchChanged_',
                reflectToAttribute: true,
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // When true, show a loading spinner to indicate that the backend is
            // processing the search. Will only show if the search field is open.
            spinnerActive: { type: Boolean, reflectToAttribute: true },
            isSpinnerShown_: {
                type: Boolean,
                computed: 'computeIsSpinnerShown_(spinnerActive, showingSearch)',
            },
            searchFocused_: { type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', e => this.showSearch_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    isSearchFocused() {
        return this.searchFocused_;
    }
    showAndFocus() {
        this.showingSearch = true;
        this.focus_();
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        this.showingSearch = this.hasSearchText || this.isSearchFocused();
    }
    onSearchIconClicked_() {
        this.dispatchEvent(new CustomEvent('search-icon-clicked', { bubbles: true, composed: true }));
    }
    focus_() {
        this.getSearchInput().focus();
    }
    computeIconTabIndex_(narrow) {
        return narrow && !this.hasSearchText ? 0 : -1;
    }
    computeIconAriaHidden_(narrow) {
        return Boolean(!narrow || this.hasSearchText).toString();
    }
    computeIsSpinnerShown_() {
        const showSpinner = this.spinnerActive && this.showingSearch;
        if (showSpinner) {
            this.$.spinnerTemplate.if = true;
        }
        return showSpinner;
    }
    onInputFocus_() {
        this.searchFocused_ = true;
    }
    onInputBlur_() {
        this.searchFocused_ = false;
        if (!this.hasSearchText) {
            this.showingSearch = false;
        }
    }
    onSearchTermKeydown_(e) {
        if (e.key === 'Escape') {
            this.showingSearch = false;
        }
    }
    showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
    }
    clearSearch_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
    }
    showingSearchChanged_(_current, previous) {
        // Prevent unnecessary 'search-changed' event from firing on startup.
        if (previous === undefined) {
            return;
        }
        if (this.showingSearch) {
            this.focus_();
            return;
        }
        this.setValue('');
        this.getSearchInput().blur();
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);
