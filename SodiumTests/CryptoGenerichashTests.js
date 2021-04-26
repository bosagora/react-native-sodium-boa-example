import React, { Component } from 'react'

import Base64 from 'base64-js'
import Sodium from 'react-native-sodium-boa'

import {BasicTest} from './BasicTest';

export default class Test extends BasicTest
{
    constructor(props) {
        super(props);
    }

    async _crypto_generichash_Test() {
        let sample_crypto_generichash = [
            {
                "value": "199d91ac71d6ae893ba9e9d267e9291fa3067f3d3099f3401f006a220ae245f2",
                "hash": "72686e63d1892e2349d0cdca689f27cfcc11d52ae10406837c42599284e17fe383cb888f883a9669172ae91b55778eb0767b0485507389c208e91c3508c57d22"
            },
            {
                "value": "2de4c5e0794f015d9847da16ed0f546c03820a1dcf8f8014e6cb6e62a9f6e7aa",
                "hash": "57676415decfa5f032371c1e308d883bc9da54b2eda52cfb88cd061686c65afe8798a15b481ec87210d6e720c9433f761ebe2ebeae64e77615355ac3f24735ae"
            },
            {
                "value": "9fd6bdf35c3310fc2b82c38df74cb0d0a9a4e638bd0bf6f81e02467eaaac70f5",
                "hash": "e98ea761c10b679472b3748774634ee761bba201b5abd919e95e1d93302ec4d25a2fcb07ad6ac076ca0ac13a351ff2f064d9e31046db1f2c8322b9229fcdaeb2"
            },
            {
                "value": "82d28d1e5df4d6aa616fa4edb5ce9749e3b884a76bc029a163bd076fdcc2dc2c",
                "hash": "de7aa6b130b1410abad055a5ee0f9145eaaac84ab71374dd35a57522bb8e008c86c08fa6aa3613911ef133d166d625042946ffb9ccd8565c8caf13faac04ad74"
            },
            {
                "value": "ff28d03d9a912de49e42baba9b48deaba1b4feaa8ac4aef9f253c8be3b4128ae",
                "hash": "e07cfe86e8a9f29311b2293addbbc429fac783837e014094c0a5c88a56cda91c0dbca89d95a177ca095e863a0a5e7af5ec8240d07720bce8c31245f716ca0035"
            },
            {
                "value": "81b0fdd48397484e7584cf4822313a265f1501c991add6035e907a3f4acd26c9",
                "hash": "8cf349bd212dd6d8e37c9bb99e47dd905b438de3abc136b57b9690421f18b0d37c82e5e85f955888843cb2b86d2a26c951affc21a3afd8a2d1ed30e2228a309e"
            },
            {
                "value": "f9a38460bfea952c45e5353bb02e3cf018292aedfa432b2905ee9215a38cd478",
                "hash": "ca2acc1c8281d172b4d4c456c1603a9cfeca0f46cb2a3aa961ea8b235603c3d00c8f59cc3a23812f684b6f11061092bb95ab36e342863e837a75796b0411e316"
            },
            {
                "value": "5bb00fc040c527106bd8a5349cc09034b96c64cdafc2feec0e70d5843fb850e8",
                "hash": "523fd39b92b4de830f94b36336b9e427d27d6fc2803577afc210e35cd7d8de0b2c6cb40a99647010b6cd3f21659eaf40c70bd3d76a313fd35dce2163274edb7d"
            },
            {
                "value": "93efa741137fd501094f5198f4b5ae34d882cdb6d559ef9d27a4d1ecd87898f4",
                "hash": "eada980b996cc908d370d9522737b8ab60ca0a67348b0c11f1fc61d6c98c62f99aec56c18eb0c85bdbc0132d3f687e95f564972b2645f6f1c9f6c1f640ee2a5c"
            },
            {
                "value": "fd7a498cf5b99ba16326f9ed4cd5a37e25df966cb99a19251749b743483dd00f",
                "hash": "a87a633d6903d009f96910a7d1562729902fd230dbde863df7c5d45a84dcdc8f773b1521f16fc6f270adf7458ee0138b91ef0a6deebf4ce24736070ea64f675b"
            },
            {
                "value": "f1296fc4f9dca64f5c240b2faaf041b6e5d35f2218be53ba24f11d88af089b0a",
                "hash": "2745be184ad5dc24e29f9aea5caf804150a5db77514bce309ba8d7edefa37d3e87d8ab4556b47fc156a7ab8108cbad66db0c772aa4fe6f7ce6733be052ae6324"
            },
            {
                "value": "32fad6a487756db944bb4b2d6cce458bb7fe2bf6abd520f68ad30d40c0fe9cc1",
                "hash": "da51a03f15888ea8537cb0447a855136abaf1e974cdab38194cabca481263a6861652d4639eda6075dd43c9ec417216569b59b4bdc0bb77708fc48bb0f6031a3"
            },
            {
                "value": "c8ade406c4d30cf66f0759ccb8204f085ec94c708add0e6e5b7a47cc89b8add9",
                "hash": "c10cb2a027be8e43f194a63644b17bfceddb1d96364c75cf9d292d8b7baf841cc84b8e458995bd36545d869c8b2c9b744e7f65c3efed110a5e02536d62868af1"
            },
            {
                "value": "50383b69c4a4fe1b067080c74a3100654a8caadb1b56954649b639fe02c040a0",
                "hash": "e228997b39406e1eb4a129422c715da7adfd97fd17a97e4ba7b3efd64f128b1bbb6a9ae4fb70a288ef94a08e2da1be092bd27d84f18c2c3a54982452009765c4"
            },
            {
                "value": "330e406d24f13120fed6c9d2321a9804b25abeedfed48a4a15289ec66540c71e",
                "hash": "9ddec5e6f1febb730110b45f7b331eace333a9f7475e21cdd788e30cc1b00a249455c47b0cbad0f00a5c28a89def5edeb19bed03250e029ea2b6a8e903b918ba"
            },
            {
                "value": "9b8e8190d6485d79e704187861a4a55cb213364bbe3baee13ec66057dc9b24af",
                "hash": "a04decd862a89fe584e0847d5abe63b1d5256c9959311d08c1de0c654924dda5686e2011b03a22fb2cdfbc4ab6c3343a88e697e979f72cd08e957727887df238"
            },
            {
                "value": "37812d234e6d0be659746a695c2cd424f190f63c6e87c8de9cd03f8cacdd5c0c",
                "hash": "0a3c6fa0b31e0c67630a6bfb8be10287ed4cd807c0457f2c039cbe9b259e368c98bfb5a0cff355c151c4b5bfbf991c7f6f51cfc0f49bde91ee8720da72a84a66"
            },
            {
                "value": "6ca9ccffaacb2e769f48ebd0447c51ab4bb51164bf94c03781fcaaf8e79bf9c0",
                "hash": "352513546732f6d2c5702d88ba790d83954083a1c31d55f83807deac091839b8888406cc4ec40d614423b631b1af7b7a725e07c7f9af897c0fb8464df3a6d700"
            },
            {
                "value": "9fb55ba1ecd8b55a6d41cfd56aca9622b30616dbb60a8e32beadb282ef982a0e",
                "hash": "ede45893276f6390627e45a7f91d95bdc718bfb978dd54ae7aa966da5b155a0761a92eb98e0a7b215496a9aecc6e9e7d799aa982f021e0c83cccbf1344ce6596"
            },
            {
                "value": "036ebe58ec805f9de9afff2369fb4457c13a5b636608caf97b8ebafe5097c54e",
                "hash": "2cf5365c8e12435dd74d4ec2c2e6b860cd71eb14605eceddd386699c027d239f1444a7f789f92f569582f55cf09d4a05915601c3ef267a7fc0e5d40abaa0a7a1"
            }
        ];

        Promise.all(sample_crypto_generichash.map(t => {
            return Sodium.crypto_generichash(64, Base64.fromByteArray(this.hex2bin(t.value)), "")
                .then(q => t.hash === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_generichash', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_generichash', error))
    }
    componentDidMount() {
        this.initTests([
            'crypto_generichash'
        ])

        this._crypto_generichash_Test()
    }
}
