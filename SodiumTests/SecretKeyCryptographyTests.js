import React, { Component } from 'react'
import {ScrollView, Text, View} from 'react-native'

import Base64 from 'base64-js'
import Sodium from 'react-native-sodium-boa'

import {BasicTest} from './BasicTest'

export default class Test extends BasicTest {

  constructor(props) {
    super(props)
  }

  async _testSecretBoxKeyGen() {
    let freq = [];
    for (i = 0; i < 256; ++i) freq[i] = 0;
    for (i = 0; i < 20*256/Sodium.crypto_secretbox_KEYBYTES; ++i) {
      let k = await Sodium.crypto_secretbox_keygen();
      let a = Base64.toByteArray(k)
      for (j = 0; j < a.length; ++j) ++freq[a[j]]
    }
    var fail = false
    for (i = 0; i < 256 && !fail; ++i) if (freq[i] == 0) fail = true
    this.testPassed('crypto_secretbox_keygen',!fail)
  }

  async _testAuthKeyGen() {
    let freq = [];
    for (i = 0; i < 256; ++i) freq[i] = 0;
    for (i = 0; i < 20*256/Sodium.crypto_auth_KEYBYTES; ++i) {
      let k = await Sodium.crypto_auth_keygen();
      let a = Base64.toByteArray(k)
      for (j = 0; j < a.length; ++j) ++freq[a[j]]
    }
    var fail = false
    for (i = 0; i < 256 && !fail; ++i) if (freq[i] == 0) fail = true
    this.testPassed('crypto_auth_keygen',!fail)
  }


  _testSecretBox1() {

    const k = Base64.fromByteArray(new Uint8Array([
      0x1b, 0x27, 0x55, 0x64, 0x73, 0xe9, 0x85, 0xd4, 0x62, 0xcd, 0x51, 0x19, 0x7a, 0x9a, 0x46, 0xc7,
      0x60, 0x09, 0x54, 0x9e, 0xac, 0x64, 0x74, 0xf2, 0x06, 0xc4, 0xee, 0x08, 0x44, 0xf6, 0x83, 0x89]))

    const n = Base64.fromByteArray(new Uint8Array([
      0x69, 0x69, 0x6e, 0xe9, 0x55, 0xb6, 0x2b, 0x73, 0xcd, 0x62, 0xbd, 0xa8,
      0x75, 0xfc, 0x73, 0xd6, 0x82, 0x19, 0xe0, 0x03, 0x6b, 0x7a, 0x0b, 0x37]))

    const m = Base64.fromByteArray(new Uint8Array([
      0xbe, 0x07, 0x5f, 0xc5, 0x3c, 0x81, 0xf2, 0xd5, 0xcf, 0x14, 0x13, 0x16,
      0xeb, 0xeb, 0x0c, 0x7b, 0x52, 0x28, 0xc5, 0x2a, 0x4c, 0x62, 0xcb, 0xd4,
      0x4b, 0x66, 0x84, 0x9b, 0x64, 0x24, 0x4f, 0xfc, 0xe5, 0xec, 0xba, 0xaf,
      0x33, 0xbd, 0x75, 0x1a, 0x1a, 0xc7, 0x28, 0xd4, 0x5e, 0x6c, 0x61, 0x29,
      0x6c, 0xdc, 0x3c, 0x01, 0x23, 0x35, 0x61, 0xf4, 0x1d, 0xb6, 0x6c, 0xce,
      0x31, 0x4a, 0xdb, 0x31, 0x0e, 0x3b, 0xe8, 0x25, 0x0c, 0x46, 0xf0, 0x6d,
      0xce, 0xea, 0x3a, 0x7f, 0xa1, 0x34, 0x80, 0x57, 0xe2, 0xf6, 0x55, 0x6a,
      0xd6, 0xb1, 0x31, 0x8a, 0x02, 0x4a, 0x83, 0x8f, 0x21, 0xaf, 0x1f, 0xde,
      0x04, 0x89, 0x77, 0xeb, 0x48, 0xf5, 0x9f, 0xfd, 0x49, 0x24, 0xca, 0x1c,
      0x60, 0x90, 0x2e, 0x52, 0xf0, 0xa0, 0x89, 0xbc, 0x76, 0x89, 0x70, 0x40,
      0xe0, 0x82, 0xf9, 0x37, 0x76, 0x38, 0x48, 0x64, 0x5e, 0x07, 0x05]))

    Sodium.crypto_secretbox_easy(m, n, k).then((c) => {
      this.testPassed('crypto_secretbox_easy_1')
      Sodium.crypto_secretbox_open_easy(c,n,k)
        .then((mm) => this.testPassed('crypto_secretbox_open_easy_1',m === mm))
        .catch((error) => this.testFailed('crypto_secretbox_open_easy_1',error))
    }).catch((error) => this.testFailed('crypto_secretbox_easy_1',error))
  }

  _testAuth1() {
    const k = Base64.fromByteArray(new Uint8Array([
      // Jefe
      0x4a,0x65,0x66,0x65,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
      0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]))

    const c = Base64.fromByteArray(new Uint8Array([
      // what do ya want for nothing?
      0x77,0x68,0x61,0x74,0x20,0x64,0x6f,0x20,0x79,0x61,0x20,0x77,0x61,0x6e,
      0x74,0x20,0x66,0x6f,0x72,0x20,0x6e,0x6f,0x74,0x68,0x69,0x6e,0x67,0x3f]))

    const a = Base64.fromByteArray(new Uint8Array([
      0x16,0x4b,0x7a,0x7b,0xfc,0xf8,0x19,0xe2,0xe3,0x95,0xfb,0xe7,0x3b,0x56,0xe0,0xa3,
      0x87,0xbd,0x64,0x22,0x2e,0x83,0x1f,0xd6,0x10,0x27,0x0c,0xd7,0xea,0x25,0x05,0x54]))

    Sodium.crypto_auth(c,k)
      .then((aa) => {
        this.testPassed('crypto_auth_1',a === aa)
        Sodium.crypto_auth_verify(a,c,k)
          .then((r) => this.testPassed('crypto_auth_verify_1',r == 0))
          .catch((error) => this.testFailed('crypto_auth_verify_1',error))
      })
      .catch((error) => this.testFailed('crypto_auth_1',error))
  }

  componentDidMount() {
    this.initTests([
      'crypto_secretbox_keygen',
      'crypto_secretbox_easy_1','crypto_secretbox_open_easy_1',
      'crypto_auth_keygen',
      'crypto_auth_1','crypto_auth_verify_1'
    ])

    // Secret key cryptography - authenticated encryption
    this._testSecretBoxKeyGen()
    this._testSecretBox1()
    // Secret key cryptography - authentication
    this._testAuthKeyGen()
    this._testAuth1()
  }

}
