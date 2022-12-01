// mojom-webui/skia/public/mojom/image_info.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {mojo} from '//resources/mojo/mojo/public/js/bindings.js';


/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const ColorTypeSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
export const ColorType = {
  
  UNKNOWN: 0,
  ALPHA_8: 1,
  RGB_565: 2,
  ARGB_4444: 3,
  RGBA_8888: 4,
  BGRA_8888: 5,
  DEPRECATED_INDEX_8: 6,
  GRAY_8: 7,
  MIN_VALUE: 0,
  MAX_VALUE: 7,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const AlphaTypeSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
export const AlphaType = {
  
  UNKNOWN: 0,
  ALPHA_TYPE_OPAQUE: 1,
  PREMUL: 2,
  UNPREMUL: 3,
  MIN_VALUE: 0,
  MAX_VALUE: 3,
};


/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const ImageInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const BitmapN32ImageInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    ImageInfoSpec.$,
    'ImageInfo',
    [
      mojo.internal.StructField(
        'colorType', 0,
        0,
        ColorTypeSpec.$,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'alphaType', 4,
        0,
        AlphaTypeSpec.$,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'width', 8,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'height', 12,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'colorTransferFunction', 16,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0),
      mojo.internal.StructField(
        'colorToXyzMatrix', 24,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0),
    ],
    [[0, 40],]);



/**
 * @record
 */
export class ImageInfo {
  constructor() {
    /** @type { !ColorType } */
    this.colorType;
    /** @type { !AlphaType } */
    this.alphaType;
    /** @type { !number } */
    this.width;
    /** @type { !number } */
    this.height;
    /** @type { (Array<!number>|undefined) } */
    this.colorTransferFunction;
    /** @type { (Array<!number>|undefined) } */
    this.colorToXyzMatrix;
  }
}



mojo.internal.Struct(
    BitmapN32ImageInfoSpec.$,
    'BitmapN32ImageInfo',
    [
      mojo.internal.StructField(
        'alphaType', 0,
        0,
        AlphaTypeSpec.$,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'width', 4,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'height', 8,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'colorTransferFunction', 16,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0),
      mojo.internal.StructField(
        'colorToXyzMatrix', 24,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0),
    ],
    [[0, 40],]);



/**
 * @record
 */
export class BitmapN32ImageInfo {
  constructor() {
    /** @type { !AlphaType } */
    this.alphaType;
    /** @type { !number } */
    this.width;
    /** @type { !number } */
    this.height;
    /** @type { (Array<!number>|undefined) } */
    this.colorTransferFunction;
    /** @type { (Array<!number>|undefined) } */
    this.colorToXyzMatrix;
  }
}
