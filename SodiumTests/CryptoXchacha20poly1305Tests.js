import React, { Component } from 'react'

import Base64 from 'base64-js'
import Sodium from 'react-native-sodium-boa'

import {BasicTest} from './BasicTest';

export default class Test extends BasicTest
{
    constructor(props) {
        super(props);
    }

    async _crypto_aead_xchacha20_Test() {
        let sample_crypto_aead_xchacha20 = [
            {
                "message": "365f25573a4eaa21ec4df336",
                "cipher": "ca9ee811441db147cf23f3fd2bf4d0c8eae299621dd85c9f0108cb37",
                "additional_data": "8f82967863347b3efc43422c9843f5adf1f91d0a3e922d5799ec1ca57256cd55",
                "secret_nonce": "1194f5993063d81c093570576ea3183244933240c829ba66",
                "public_nonce": "74edc966500a0c95e1f19ed86327b3740287a9162610e3c1",
                "key": "8d72445135a453ee146b905d178b1fe4e9971e5f7d13f2f882df573ddc5a59a4"
            },
            {
                "message": "ec1cf5b8133734946f8abe1d",
                "cipher": "abf9c3fd69301a7b0f0c59998fde1521618e72a6c891f69783fc7ea8",
                "additional_data": "05d6a396edf004a297aef1270f20e124ae764e2c71123970779b3b0fd3fff7f6",
                "secret_nonce": "029d5572652f971061bddcfd8afbb880afe15ccd2c5dc05b",
                "public_nonce": "f5d6993f112f232da43b34e653012602c9f165ac5895c82a",
                "key": "3a0a82fee69d62d018eb61a05201b3aa48e34c2129483d1a0eef266db1a035d2"
            },
            {
                "message": "780804196b8506206f93575b",
                "cipher": "7c14ff0436ba355bc205de72ab59cb661970df1d2f700be70e00d3fd",
                "additional_data": "32afc5bbce2971d5822f253158cbfe85106bb60d5b78b2a295addcd63f0fafd9",
                "secret_nonce": "9a476a736574c87282798c903741c1465e811b4483e1c247",
                "public_nonce": "a0977798812ae446ba653eddef5c86308498bd43a9b5a570",
                "key": "e07591434263e109f1b4d5f2fa34bc6341e425dab7b3a4e677a7c425f8de9644"
            },
            {
                "message": "8238de509f0b67497ec35722",
                "cipher": "f956e424a117398e8114c40648704a9f126e411d5dea0ac69c1a3678",
                "additional_data": "6302e229bf6c392f6ae609b9b56498280edf50c2c94837d71202bb85a9815940",
                "secret_nonce": "c1eec07237ae944e9cf304eef4014b2d68754741dd5e15c1",
                "public_nonce": "740fc813a7128a581fb29db4ff26f7c758cd1153a39e1117",
                "key": "711d0ad50741ad918020ccbd3a492a0bedc010c21bdad0c4dff3b61aeb6a8a6e"
            },
            {
                "message": "152302bd0e77483301948a57",
                "cipher": "2fd60cdb67f28a7fea55f8c7ee8579716ae7a0d767c9b243911a6522",
                "additional_data": "da01d9907775b7a21f414d55040b5bf7092c7f526fccd080ac3675d1eec5303f",
                "secret_nonce": "9164206110651d4bd3f26a566c441008c215c19c590488cd",
                "public_nonce": "e8a54ddf5cb426c7847b90ff715c994aef5c57dc2c293b32",
                "key": "8c6787a02f109a9def16e3b2412e320e16b0e068d5b0e32d450a5843c4fe7397"
            },
            {
                "message": "428a8afb7ed27c8d63929ab6",
                "cipher": "0e497844066d6e3ba27b0419fd03a2cb503d4177b29d0e923f32e7b4",
                "additional_data": "8a41cd9c560e6ee18119210577004702158cc993ff06cbcc70bc162f9cb79ff8",
                "secret_nonce": "0f02f3c01eb925e8b9f91afbaf130436e98c2bfd5b6cfc98",
                "public_nonce": "5a8737deed8e3cfede86e58d9183e74fe898e727bae899e5",
                "key": "4b13e74fb4c0682c4f714fcc755e9fa03af790396350474d4f1f65ce341372b4"
            },
            {
                "message": "fb2cb179f710ff30957ce197",
                "cipher": "c39ac60b3cfdb3ecaca616263ed9bc954ab77ae34bc1cd763d1854a5",
                "additional_data": "ad85a6f11c93dfa1230fa7c2a4c520a73277fba568b7b819025ff87acf485b7a",
                "secret_nonce": "47e48cbc5b4c1125f021cf233c1474c811789590c7c031f8",
                "public_nonce": "1c93861f08badb2f190f85da10d5c2b49feaa9bc678022c5",
                "key": "d30d9455f09d5d5ce3f3ab7b66d70e9dffacfa3c23d22fee616de9af33af1be3"
            },
            {
                "message": "5087fdbf34fa3796d66331a6",
                "cipher": "77499c2e6b8efe6d94687bc585b1961a3c9d2663b1e1c4d8556ddc85",
                "additional_data": "4b3e4667852732ddc033c4f8aa133dd64cab9afdbcf30d621bd8f5ebb5de7a98",
                "secret_nonce": "d596e46a64df63c809d0766999c424ae71eb5dce91262ae2",
                "public_nonce": "77bff4887f397c3457229f695ecee575302e0395ae4c3f50",
                "key": "8cd9b977cb70a911344b9856f3ad51d0aeba1de1f501bc26f9dd21dee2f68086"
            },
            {
                "message": "806dfab294f993f640df23d8",
                "cipher": "e118cd80308c94fd555d6290af503aceb9930aa16d9416979a5f0a09",
                "additional_data": "ce11d74c1d079cd24dce2a572fb98a7d748ecaed193b0bfe51d65fa7e26f670f",
                "secret_nonce": "fe1d8a0426468589fa741e8057c90d9a93055085dda6ccfe",
                "public_nonce": "2fd88e162f7eb1b920afd4f0c56011283b98bd9b41983680",
                "key": "718e0a3f101e765f87fd99d3666cc1c0dff53695080e5df106311ae3ea6c106e"
            },
            {
                "message": "e1a1cddc43dcd4181c28a2ae",
                "cipher": "460121d5bdbf4b7dfab4b450cb957b87587f81ffdf892d23b88ec48c",
                "additional_data": "95fee064a7e3e2bd6ca986625e9c675aac55a4d388c6d8ac9882fcf08e3e8e40",
                "secret_nonce": "b31ec1f08655f6c6e36b25590079aa1a0bc206df73b05d1b",
                "public_nonce": "83ad184c8e183ff03034fa381809a25e3bb594042ba11fb7",
                "key": "66db8c280ca365f2ade6a0bb410c6950db166ef64b58972a3b392b5e64ab77f6"
            },
            {
                "message": "9768c2a2ac91fa414ac7d984",
                "cipher": "3829b808ea871a246cf94d7b6fc888ee3ef3e288ee4837b6e3144bd4",
                "additional_data": "f031cd4ab54bd0a5e5f5e1f8e87ededa7de422dea7206c7d8d2fb26b7b03f0da",
                "secret_nonce": "6962be153f3cd2190663fc1798f841317a9787f64e6a93e4",
                "public_nonce": "c0728e2c3aee40b7a280f7fca2ea76f8d2117c5904856b41",
                "key": "20dd46062fdf8557b071071416a4f89594e180990c60218a370fd5a38ab0a82c"
            },
            {
                "message": "61afcac31620e81f0a624c32",
                "cipher": "a9dd0fbacd52dcb40bc44940d0ba66b7a4beaeceb27d1598827dcf12",
                "additional_data": "71348810182b2e1f4d54897cc0e19aa70965fa2f7616d4aa4692c5c2fefc7352",
                "secret_nonce": "6d6fb1c429c9f1c010aa4f9fa2033308772d17622fec624f",
                "public_nonce": "bb6f770716c3f26be77fd7f5f6f2621aa18bb21209c9c0b9",
                "key": "77e7a36b3d258d6f4d960c37b7c3ebedc621bea430c391a8317231d0bcd258aa"
            },
            {
                "message": "052d95e79bcd3de2293922ad",
                "cipher": "6fedf8c53015338c8328e43df581c8ae91526244ac639db2c7972a72",
                "additional_data": "de5e190a6abc713e1430293844206f4b86c19a91014e2564ce4ae040e8654985",
                "secret_nonce": "3e26c1986bcfa9ffea1b5d7faf671eedd48894d4b599f87e",
                "public_nonce": "6048a937f1056750e54405933cca2fc41bdde9bb821479c1",
                "key": "4d11dcf98e13309a0ec5a5b55730c7050f98b8db57c5c5260b2a76a77ad9aace"
            },
            {
                "message": "19b100f71d8285ce4380ae07",
                "cipher": "da2631c6dd7d88596fabedd0fd7adf3ddf27c07eeb8c6a5c50cb8c81",
                "additional_data": "b864fce1febb4e13df571053e2b5e6d6610247f200449ff7d0f37e3ab5eac037",
                "secret_nonce": "3451aba8ede8b7c82b0278b4cdeb176bd34b79ccf950704f",
                "public_nonce": "bc9e68e91a1a73b5f8eeef6c73ce61fd3b4acad9156f2732",
                "key": "6abd01838b919e4b8b4d82a3e8293fea9d243278e46ea8604201c5652d976625"
            },
            {
                "message": "f3c93feaa45f8f602bec21b6",
                "cipher": "9812133934e7fd9ab2983b0143fd66141efa9916b45c3953267e414a",
                "additional_data": "59182b88ce585af3180183336fed37af514a15ef0aa857872de784ea8a4722c8",
                "secret_nonce": "6b323dbe253a204c5b0a81e62604127bca5bf4e63d941683",
                "public_nonce": "56fd7bd8a6b8d9958058d0fd56842d70499afc2a3b280bf0",
                "key": "a5010055399d7d2f82a34ee6219eedd3433181b8b46f6115e6d05fb4973b9428"
            },
            {
                "message": "ff73d28ba58b45b31d470e1f",
                "cipher": "633fd9e9cb9c45bf173b818b7a55f4e84f7a113aa8249f8b48326e61",
                "additional_data": "fc7cdd4085205b816c08cab46c5784d933a2c76397305ff807875ff2c420b472",
                "secret_nonce": "d2bf067d81f069d9a3928fc2bd3e6d4a5e726104244c7445",
                "public_nonce": "4d1e3b6ab10ad046792ab4f8b31029e65941f4f6e796e4a4",
                "key": "97b73a5f211e0a57dbdd01341b04dc6c1a15d8f480dc0e144826c14368b3022e"
            },
            {
                "message": "04f028aaab41c93716be5d3d",
                "cipher": "eca1294acf8b650803885377c46ad695482244833b0496f41d096ac0",
                "additional_data": "bc55597b81f6e3dc7f7eace0359db73c583f69bc54c1703ddd38b70a184327c8",
                "secret_nonce": "05099e0fdcd3d00d42f57de39a87d3548365350ffed5bd7a",
                "public_nonce": "f66ee5e5067531ab21da2e6c44f30460093c7d012f593127",
                "key": "4f15680c6128e1af9f17c916be281d7ce6950a7aac4163dce2c7d1b62e0e9c75"
            },
            {
                "message": "4e31ef3797ba41ede8bcd43d",
                "cipher": "2a34e192302bfd9702cab8812ad5685c7d42c99af0ff51dfb96d1bf4",
                "additional_data": "30a1b0bd3264ac29f526e84cd229112fe836be25fc7004fd36a748b163447066",
                "secret_nonce": "37e57f1b234a69dcf5e941dba346d633e894639646191f17",
                "public_nonce": "c6942ebddb7c795979f3484f8dc0f1cd3345debbb004e666",
                "key": "c565baaf5811df1249aa4d374f0fc2b68cc94453d73039cb7e1e8a936ae60e16"
            },
            {
                "message": "08ef988f9f2703b4d8084edd",
                "cipher": "14de331bd1267cdeef605f1566d9cba82bb6045cb49e4d28d9cbb8ed",
                "additional_data": "ee09dfe70d4e4f7dd9a773bb034fc0f0861b70cd312d4eb5a135c602055397cb",
                "secret_nonce": "e9a59b50785d53a4cff539adfb9dd64ca96769ce3c4cf659",
                "public_nonce": "9c8a6edbef5e322e0907699993a18888d52dc2dce4c66be7",
                "key": "7042b350b3ddbdd9a18f80250b3ba70a41733f4fcf25a8a264a08a1df1a0f7cb"
            },
            {
                "message": "69faf2d7359b6ef61aad7f5a",
                "cipher": "0e40e0e9879c85f1cb5c402705814955d1487c35b54b4f963afd8d44",
                "additional_data": "c11d7c9ccc595e3e3dd15812c808914aacd06ab23d4daec9dcb1ebb0f1fd90b8",
                "secret_nonce": "3c72c7d837c3033eb3e2c6ef51ee9f77f7eeb56c510104db",
                "public_nonce": "3f35563befadccc367586595165937adf30f0506c7199d42",
                "key": "3a0cc6dad8f9849c852f4c1ba43c5cd43ecc74efdc033b34e827ea5c87e364f5"
            }
        ];

        Promise.all(sample_crypto_aead_xchacha20.map(t => {
            return Sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(
                Base64.fromByteArray(this.hex2bin(t.message)),
                Base64.fromByteArray(this.hex2bin(t.additional_data)),
                Base64.fromByteArray(this.hex2bin(t.secret_nonce)),
                Base64.fromByteArray(this.hex2bin(t.public_nonce)),
                Base64.fromByteArray(this.hex2bin(t.key))
            )
                .then(q => t.cipher === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_aead_xchacha20poly1305_ietf_encrypt', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_aead_xchacha20poly1305_ietf_encrypt', error))


        Promise.all(sample_crypto_aead_xchacha20.map(t => {
            return Sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(
                Base64.fromByteArray(this.hex2bin(t.secret_nonce)),
                Base64.fromByteArray(this.hex2bin(t.cipher)),
                Base64.fromByteArray(this.hex2bin(t.additional_data)),
                Base64.fromByteArray(this.hex2bin(t.public_nonce)),
                Base64.fromByteArray(this.hex2bin(t.key))
            )
                .then(q => t.message === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_aead_xchacha20poly1305_ietf_decrypt', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_aead_xchacha20poly1305_ietf_decrypt', error))
    }
    componentDidMount() {
        this.initTests([
            'crypto_aead_xchacha20poly1305_ietf_encrypt',
            'crypto_aead_xchacha20poly1305_ietf_decrypt'
        ])

        this._crypto_aead_xchacha20_Test()
    }
}
