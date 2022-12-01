import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">
  :host {
    --cr-localized-link-display: inline;
    --cr-subsequent-anchors-of-span-margin: 0;
  }

  a {
    display: var(--cr-localized-link-display);
  }

  a[href] {
    color: var(--cr-link-color);
  }

  /**
   * Prevent action-links from being selected to avoid accidental
   * selection when trying to click it.
   */
  a[is=action-link] {
    user-select: none;
  }

  :host([link-disabled]) #container {
    cursor: pointer;
    opacity: var(--cr-disabled-opacity);
    pointer-events: none;
  }
</style>
<!-- innerHTML is set via setContainerInnerHTML_. -->
<div id="container"></div>
<!--_html_template_end_-->`;
}
