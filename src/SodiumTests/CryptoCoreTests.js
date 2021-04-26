import React, { Component } from 'react'

import Base64 from 'base64-js'
import Sodium from 'react-native-sodium-boa'

import {BasicTest} from './BasicTest';

export default class Test extends BasicTest
{
    constructor(props) {
        super(props);
    }

    async _crypto_core_Test() {
        let sample_crypto_core_ed25519_random = [
            {
                "random": "199d91ac71d6ae893ba9e9d267e9291fa3067f3d3099f3401f006a220ae245f2",
                "crypto_core_ed25519_from_uniform": "f297b423c6aed3b20cc75cd08d85d00a839de1b8baa0c4a2793df0c0edfe5105"
            },
            {
                "random": "2de4c5e0794f015d9847da16ed0f546c03820a1dcf8f8014e6cb6e62a9f6e7aa",
                "crypto_core_ed25519_from_uniform": "e1a33d6667d4f0a942308ddccbac0d5f11190e0f973215b301f58c79e19555e6"
            },
            {
                "random": "9fd6bdf35c3310fc2b82c38df74cb0d0a9a4e638bd0bf6f81e02467eaaac70f5",
                "crypto_core_ed25519_from_uniform": "242d196c487d25c157b35bc27e50e0f4a02e164820b4af18af53acb8e3ea43fc"
            },
            {
                "random": "82d28d1e5df4d6aa616fa4edb5ce9749e3b884a76bc029a163bd076fdcc2dc2c",
                "crypto_core_ed25519_from_uniform": "94d62d5a3b1831a988efc46a66138dfe62ef81ec1b8b6e069127ad80bb92014a"
            },
            {
                "random": "ff28d03d9a912de49e42baba9b48deaba1b4feaa8ac4aef9f253c8be3b4128ae",
                "crypto_core_ed25519_from_uniform": "9c338ec44535371882fb2ca97f5a6edeaa35f98a054b2b06f72dfdd138b69215"
            },
            {
                "random": "81b0fdd48397484e7584cf4822313a265f1501c991add6035e907a3f4acd26c9",
                "crypto_core_ed25519_from_uniform": "0ed590f1445abfef08864b950e5abb4d3250fb01dae4d139f2d1859810a6ba9a"
            },
            {
                "random": "f9a38460bfea952c45e5353bb02e3cf018292aedfa432b2905ee9215a38cd478",
                "crypto_core_ed25519_from_uniform": "20f01c26b75cb961469d6e87b5a94ff778247e16c5f59a02f1662c53c051a6ce"
            },
            {
                "random": "5bb00fc040c527106bd8a5349cc09034b96c64cdafc2feec0e70d5843fb850e8",
                "crypto_core_ed25519_from_uniform": "53b89a65e2124900a4b6a955f897399330a631139ecb998fd64ad0eb9ab76883"
            },
            {
                "random": "93efa741137fd501094f5198f4b5ae34d882cdb6d559ef9d27a4d1ecd87898f4",
                "crypto_core_ed25519_from_uniform": "df75209edfcfe45c22303b648d2767ccdc3e9590aaded3b6f2055f5d4b45d29c"
            },
            {
                "random": "fd7a498cf5b99ba16326f9ed4cd5a37e25df966cb99a19251749b743483dd00f",
                "crypto_core_ed25519_from_uniform": "2e91601fcc1ca956910c3539858333847dc46c61c194a7bceafddbc39a2653d7"
            },
            {
                "random": "f1296fc4f9dca64f5c240b2faaf041b6e5d35f2218be53ba24f11d88af089b0a",
                "crypto_core_ed25519_from_uniform": "8ee709f360d4e30ffc457776a12106d888fe261a00879b7933ad137108380e57"
            },
            {
                "random": "32fad6a487756db944bb4b2d6cce458bb7fe2bf6abd520f68ad30d40c0fe9cc1",
                "crypto_core_ed25519_from_uniform": "d4d4857bbcb7046bd6d5d82cbfe8a69b5bb2d750c77e323f0a250e015dc7b00c"
            },
            {
                "random": "c8ade406c4d30cf66f0759ccb8204f085ec94c708add0e6e5b7a47cc89b8add9",
                "crypto_core_ed25519_from_uniform": "b1b928bfc5706451a47a6eb8e3704feadaed3259844c4b1a76b45f35757d2f0e"
            },
            {
                "random": "50383b69c4a4fe1b067080c74a3100654a8caadb1b56954649b639fe02c040a0",
                "crypto_core_ed25519_from_uniform": "456717aebfcafbd1d21003e2c9d408bf120fe6be92c3325a70ee4ec393db1972"
            },
            {
                "random": "330e406d24f13120fed6c9d2321a9804b25abeedfed48a4a15289ec66540c71e",
                "crypto_core_ed25519_from_uniform": "53061a333ff97b65c29090e94105e100d7068ca11228ebbe2576d229b8bc201e"
            },
            {
                "random": "9b8e8190d6485d79e704187861a4a55cb213364bbe3baee13ec66057dc9b24af",
                "crypto_core_ed25519_from_uniform": "54e76e72d1cefeea5872d6d6aa80aca158f299c8ece8e505d221140b3a2f87d3"
            },
            {
                "random": "37812d234e6d0be659746a695c2cd424f190f63c6e87c8de9cd03f8cacdd5c0c",
                "crypto_core_ed25519_from_uniform": "6707e1e38e6f1826a0d2117abbc5b662f04e82ac6c25c58bd6650893760c1670"
            },
            {
                "random": "6ca9ccffaacb2e769f48ebd0447c51ab4bb51164bf94c03781fcaaf8e79bf9c0",
                "crypto_core_ed25519_from_uniform": "1e225628ed90260e303a32f8439c584456f4c24f99eb86f00c1521b9f3788751"
            },
            {
                "random": "9fb55ba1ecd8b55a6d41cfd56aca9622b30616dbb60a8e32beadb282ef982a0e",
                "crypto_core_ed25519_from_uniform": "6c0a4fe2b9260bea6773652217ac97313c3d757f08cde0ec2769639e560acd3e"
            },
            {
                "random": "036ebe58ec805f9de9afff2369fb4457c13a5b636608caf97b8ebafe5097c54e",
                "crypto_core_ed25519_from_uniform": "962d96405fdf082c2423ded384cd6ea99011e39174cd642d3c1077fe7a4a1833"
            }
        ];
        let sample_crypto_core_ed25519_add_sub = [
            {
                "p": "00611a85e5a2e76b9218d9c39e4a76428aa6b76a534ede3c383d2b76b96ffb90",
                "q": "2dfc24c6e9cd1ca32e985aef9d22ec0d210c50f66c7125523f8425d5a66e78fd",
                "add": "c94541b929868d2482275797a775ed234bb6b663e68ef12668fa99483d671e41",
                "sub": "7d5a80f588b930b626a48af04a8744d1546796be1073c858e0ab3477e8877bb9"
            },
            {
                "p": "49d79aa40b22539ac0f61509fbb9c40ecbf00b9a4474cc283805b84ebaf46808",
                "q": "4278974dd3d90d841dd1e5fa7305d3272a8e85292aecadc6bbfbdab69821fc5f",
                "add": "b15658b53e6047a8c6fd1333cc0449b5be816727d7efa7c2e4ccc518df22f6fd",
                "sub": "80a9050e8947b93d2e3761f527a6bd861a6ef302ec65899534f920904ea68001"
            },
            {
                "p": "2b79ff0e5c91582a7bcc68b93bc9ba0613fc45f41b55da0dba41ece712c85401",
                "q": "831d5890595a93ecc6dc4647715bed7dbd478cd0e0cbe9b87b676b01c4f046aa",
                "add": "94aaa3ac0023cb0056d3b236645130e345bc3992f440059c5bcd0bc587c3a88f",
                "sub": "6b234302b9f05ebe637c3a759dbcbbef468013fe786dfaab01316e35b2f30d1b"
            },
            {
                "p": "5796b24e837b5b5b13c6af8c8e03b0f43ac00811eb7ea28f74dd83953a5b44b3",
                "q": "13d218644ddc6af27b38cdd505d56687792c773fe987722cd6504231465b51a4",
                "add": "d6cdc85e762a93890dece58e65badca1859437ce52365096ffe3005a37703665",
                "sub": "58f65949252db0833b0af8e5686327bacbc449da655b5a312c365c1cf51fd699"
            },
            {
                "p": "0da1b0165bbb05b542edd79ba34369225452b7d9c1447c27651dc5860b7bfa03",
                "q": "7427ba3a806c0ab8ce68e7769e1e84e20d3617a931c72d297e226a91e8e37fca",
                "add": "e7cf519ea6969d3e64dd3b0535d6a84919f21820352e88ada1ecc8ac1954cd55",
                "sub": "4dabad94a65fc6bfbfbadfc3ec30d0e2621a8db714d3e3e8f4bf8f841a0b3ed1"
            },
            {
                "p": "37b3d98a4bef04c3d5dcba78fe36653e8e771f3be135d7aa4fffc41e67cec4f5",
                "q": "ec1cd66c11401ce1b6edb4d24c5fa379340aec490f39f9ed9d2ce9f47744b2ad",
                "add": "2932b502a5c9247f2907945d5c64728ad81d5e15a7bda1978b8bc30a2afbc713",
                "sub": "fcf4da240b091b2d8f5e8b323e63cacecb40d71dfda1c65e22551f0a78b0ca9d"
            },
            {
                "p": "fab612d02e965deaa6615a0142d89dbab72e22481bf428034f20de3a9c72afb0",
                "q": "2e6ac0e07c1f7dc84e8a15110366d110a6855c14590f00fb0e28f54eadfa6151",
                "add": "1a7a26180c3fa22b9d875729791490799c9b0f4c4ede5050e0e97b1c97336144",
                "sub": "0a3d0b522afe0fbb6649f516375c59d038b7841ec294ab86eb96002bfb5c161d"
            },
            {
                "p": "f0a3dcdb44bea23189d5a8b33150a6164db1c8175ff09d4242568c449c36b43d",
                "q": "abcceea853f7ec419128a40faf4ca2af0a23aaae7c961d327da89e81466b6b9b",
                "add": "140e6baead21f0be13b012bebab2ab81f8310c28bb301f6d07d05cf85387dc35",
                "sub": "d05551b4d53fa77a4c30f89a0adff3354b2745933933a699892c36988b0206ec"
            },
            {
                "p": "e824bd2e58746bafa30db08b7a517786f547b73f3de172ed355fc0c3d17dacd6",
                "q": "5bd0be7c71530134fd20a95d0ec2cbcfe6a56e36564f2842fd6823b46e37ddbc",
                "add": "665c074a766b5e6aae6b718b45514e41122398a40dd1c084ca23193437319fbf",
                "sub": "1667d9647e440f9127f28e05c4c0569ea19c8bb90929d006593a81920ca7a8c2"
            },
            {
                "p": "afbc26a1525dd7752334553e55afc34d08eec288bf509354923050d2d5c91854",
                "q": "dab6926a0586b9f5d1dfe2060c427fa664bb5a33b884049562abef9ceab0f2d6",
                "add": "850bd47aedbbb4893e9f69424de4db55967b101421324eec3876d990cc1db6fa",
                "sub": "8d34626d94a2068c2c74eb57d4377a2baf78f6e46a43d9184061b87d5781c05f"
            },
            {
                "p": "176f929d4448c8b5fcf355d4abfa1c1983f45934a41b67d4e9a7284ca55ef9bc",
                "q": "1399cfcda6e1d24fc0380239f9df5ee454e69522efec8f0aba0e582c69d9d091",
                "add": "ef1ecf4bc43cccde0f1c5f2d46d8eeed319f851594c99c593c9840338fcbecc2",
                "sub": "9c6aaf174013b119051abf426fc71cb995a17706664b50deff0afe5f1985f1b7"
            },
            {
                "p": "ed2d32d97c83ef3d87b5859e9d708d3c608ef47e179c3cc4b8729bd56bc291ae",
                "q": "53a12626da3cbd01575dbf31d3bd9a4bba544ee46fd0468c61b74e83c769ab50",
                "add": "cef4d7ee11eeb637a9f626a2cf9887acd1670b87e64a4dcc54ff9898a5967ef4",
                "sub": "e870d86422057fd51775aa3fe44a6946c5edf124bfd12d384df5c234a3825773"
            },
            {
                "p": "e4f875b7a16f22751716fb638a930db5c0e3c2d7dbbfa683c07aa03700ccf0c2",
                "q": "cdf938008a976214cc7662379265e550f1f254078109c4a8c9e22d6e1389132a",
                "add": "efc4e5f2efa6cb67edb4878a7e535b0269504e049cd5840f2242dacd03a92873",
                "sub": "76ddca74e2573f73ec25cf7d07250a25f3049d228c0e128264df5ba077990164"
            },
            {
                "p": "c8089df65181015fd74304a14392d7a3b17f24786a1624679841aa732180d707",
                "q": "c408fe113e89fef23e49ad42b39f266a079577a31a633aba5e6c57de0a675176",
                "add": "113af112ba09953bec0d5f2e50593c8a3aa18b63b29c8044f73bdcd15a69ad35",
                "sub": "61847e37813de63d36126208e5a0c733cb07f5253947bce5f6a268de86307e89"
            },
            {
                "p": "4c7f8b6c193a4fa4dee5f00132d2d48813a28726cff79124d256980b1b90f700",
                "q": "9308a463b65fd2d6bf7fbdfb1eef39c73abdc7ab17457f890152a9ad39b16772",
                "add": "3f2a08354747b1e7a4255a2d2ed1c73b4930ac909ac7ed42b67c4ee7a93f21a6",
                "sub": "068f391346496ee34f832ab95201d79f159185a0da8546436ada0877632bcb6a"
            },
            {
                "p": "72225fc549143b9a7cf9a6070edbd4133fdcfbc8becc4b8070ef5781904fb3b1",
                "q": "4b6198253de261401504138fbb643e22ada4ac0f5515109d7e98d1a0442b6663",
                "add": "06a8e06bf0f5c05a7bc0e823bf091b8de4ab3b9a5fa20282ef6fd5bdaaa5ba84",
                "sub": "b76a896234c9033c84c7b4f52c9b51914898cfa31cd457a8fb050ae8e6b430d3"
            },
            {
                "p": "cc97c4cacff122948c78f1905f4f3de464ba344974fd461544cfa2f1ee652600",
                "q": "f2406fb90e27d2921d80217051dd2916f0d9700d9f0ecd57b6404b6220cc7d40",
                "add": "5f18b261e778d964c58df63bd4562f139e62eaa3ec2af5842d5b37075e3c2add",
                "sub": "4ea865f775b78810b06e912c8876453efae8f5cf72262e014ae9c8850b28e776"
            },
            {
                "p": "61447eb63ae977446c5846ba4e02657f0f7d617b0ed4333461dd53f228618246",
                "q": "97880e21b96a341df5caba858a36dfe455732cf71588abe642064ed35655b5c7",
                "add": "8908aa590852de5777c2ee9a70f5c265375a1de345d7a2dffc8a428efa23dcd4",
                "sub": "212f273f9f1a4dc0fbcecfaecca67919644445436ad12326f3d63d962ac606a4"
            },
            {
                "p": "de4972615b7e34bafb26c68a6e74d1795377b7c810dda33fb9314075ffc80995",
                "q": "e9fbc69841172086fbeff30c5e4945333343c05e01914cc6ee65541503d95557",
                "add": "7f287d505cf8e5e027bdda7ee07123b9209c0be0ade4f7e911ad6a82fee8cb21",
                "sub": "4a4861678587cc9aaa982d7d0428512e211539b1f3603848833734ac224f916b"
            },
            {
                "p": "a1593473d1e1da9a24e11ee8054f30ed617ec7f2d8b824b7eafa191aa33db354",
                "q": "e524151fa78b6c669b2dde9a721a3c35f93d1042c0a2cf6126ddb09c134ccd79",
                "add": "91ade4d666b8d355f3a3f4c54611e9f0599269bedef5f8c8b545a594a52e91ea",
                "sub": "414cb593a4ca8f0320a94afac8aeb161092dd0fccf40d02cb3f709f284681d3c"
            }
        ];
        let sample_crypto_core_ed25519_scalar_reduce = [
            {
                "hash": "815a8bdbe31cb02d3be20f566b57ec3bf6032a2fd138c1736821796e44af0a4d10e56b2b0a43c81ccab2f5db5488208c8f0e6c55498d24dd3a6c874a87be9b41",
                "result": "5e79be4ef064242610a59f88f742e71810c13e9f4090d9e2e54c12e44406830c"
            },
            {
                "hash": "a05bf2c6cb55c1350cac047e07e2965662bb9ef4da5df57da0cd134c2e1b7083eaf31ec23d1130f64294d00b8e92cbd047f10e34c4dcb4bbc28c94e7d2f5f9f3",
                "result": "56c7efe68251941e30c40712a809d1176712ba9ad45b469e1f3ff340baf52f02"
            },
            {
                "hash": "86d79da0ec6c9e489466d26a0910fcb21d4615c55797b4b0e18de93b7360d5280e9471c9950aebe3527c33b2603acedae0d02ebd2d7f8ae708071b40aa4a213a",
                "result": "ce26871c8d391af5fb06f9b0c6cea9d4d538856326ea81f2b7eed7e3bb21e50b"
            },
            {
                "hash": "9204a078223876813ebcb002d0daa8a80a4c1edb865fbee1739afa8b4d02e663acdbb155906c2f39b001ad3c0c96e745ff49f3cd05b447c52bae8cf9c2a06031",
                "result": "7774810697f1659f4d4d0547b2d43aa59621c0d63c8426c9d1d880e74514ec05"
            },
            {
                "hash": "d283aa7d8f116966ac369fe13fe677966ce781c57aec27ae0c03686c812ec9aa203e94566511c1b9b0e9e5c730bdf7c8cffb48d29aa84ed5fa56303816d2703b",
                "result": "d6537f67b74800c0df166654fc71d3974ee4dc9a4569f03e66e8ca1d95c1f805"
            },
            {
                "hash": "0ffa9047a43fe04b2fefb2053176f8f3b38c075acf4c966d25b21cf7f5d7d8b1db356aae3859a04c411a33b876df2b32f9e306e5d35a66bf2c7690e9c8430efc",
                "result": "59f213c6c9b88f8c0f902e254c72b9e3c3fb9c7b82973462e831f74531b6b904"
            },
            {
                "hash": "2a2431438cf2e4a9bf9c7a8e82e5a45d4096272a7ecba4f053e0d17dbf3d417179979b2e05250a28c575a934cbc80cd206e2a34884990311a838f3b914b62f5c",
                "result": "37610659186160a4ca4772fa31a6f9dce1dd5bd8186ff17d4de5945e17dc0104"
            },
            {
                "hash": "2f7adb6da26c7c733c63a838bc67c0c98eecca8dbb68707db1f4d9290aa7da499c4c5088df258a86a366caad89368df756ab5fc5ad18af65362924b67e744af8",
                "result": "04bf80bb300f70135270518a7085e9960f9fa665b319704c0414285bc843dd09"
            },
            {
                "hash": "3e2c6fa72e911ef0ac609fc9fd6e5d5e5150c233ed65ea1f2ba510fe2871b8041f2b59ef014ed6908de3754d84c9b2ca6eabe99eba1259fbc1692fb46d9d856d",
                "result": "b6f711a551f3d022c2891c26d094dbac1b61197fe9d6f62c0b830bcfa3fe3c03"
            },
            {
                "hash": "efef80b8448a379e2a7f56e8a5784da9b1a00b9801739089f085bce7b82f66c0354b6c1c2b5aaebaf54611ca90a58f9aaf4ed8363ef96787ff24e8fbab6660fa",
                "result": "adc61838a97ec02010d1a7f05244bf20c9ad84f3e09d0f5b300431d1e9c62504"
            },
            {
                "hash": "ee4d938bad4ca92b4d6c632ebc62ffdac7f8bc1435ced3fca88deb279dd3d565d64b5a08eb7348e6d8611ce75cfafcbb808709c180c89ae71dae7f63534bdad4",
                "result": "afdde37ac9d554b45e7f75629fb9beae4c3c2679747866e0e18ce55e007e710e"
            },
            {
                "hash": "ce1ece525b55441d63d4458e11fe67dee88961d631df5631f59b1119f971580f7adf2d6813cd5e28123973b52b7f69c3915dfedab5879d6f00332d2fbba98047",
                "result": "f95dd4093af96f2bf24aa19e579b97027761182af9ca4c8725cdcdf05d15de00"
            },
            {
                "hash": "413f32c5b3d5dd47b5c8868c03bde1213188ca19c639d6968bf0b0a6470a6728e7e96a258c9867110d0c1f78e0abdbe63f3dd3d17990e082036daf6d47639e4d",
                "result": "8624f185949c093fbf20518c1738fa78af2e1f63be0f1cd9bdfb16e2a081b300"
            },
            {
                "hash": "4b1e72c3b869ab5b3ba0e0251158b58399b33f9f88e4e3893496c95a763baf34dd675060c2e68fdfbb80e5395c05743d67b7806cdf4729582a4da2fcdb194afa",
                "result": "4105e5381992baf553c6279c98f851cdddf0410171166dcd70846fa9a984fe02"
            },
            {
                "hash": "aaf2fdb56206b9126413c9a0f4c48c685ac2407667f4c7e997e2729b8f9c524f1701b99e51eb60fa335c33b819a817f5d2e7df72db8532b50695cad5c0d514da",
                "result": "93ee2e88626bca0f94d3ac08913290f73fc50bffdaaf37830c90efa25537d905"
            },
            {
                "hash": "0550b283a530dde6e66e3709f5bc134c1d166ff1571ee3643396f30a2ba90742fa5d396b08f2e6b7757fe5279e937bcf2f7df4dc52dc6d2be5f1ed2d32d5e47f",
                "result": "498ab089a56eb263132f57dcb8f36d1425b65b2122f149ab290ff511f037df08"
            },
            {
                "hash": "3524d8ad30f71f53bda517e397d0495e3fdea17e8c58eaf90ab4320d43b1928cb0cc6aa8ace577eb8c3155c8f83370a3ac16ac211964a6e423708b6048e904db",
                "result": "bdd0f6b19635b2ba22d2bef25b0cf27bad1890d75fdf8af198db15aaf70fad03"
            },
            {
                "hash": "3ef4278c1d2682e31ddd7ee46e79adff29bd156188ba6e0100ffcf63a4ee0a596d5623aa56b61152dee2e7e9a589dc5c98c9ea40e881a7beaf2e2e78e3b2976b",
                "result": "71d8a83a0d5a7ebe2e3cd7ade0bd6e1083aef6ff7bc0fd2c41fd726455eec502"
            },
            {
                "hash": "2b4082a493038750974c15b417b630ccf8680a5ef4cfb3328ae21170b04aa2a4fd156102d0c23fa29474f6e8c8e391107edf9ed0563ddda4bd5379a52478d880",
                "result": "aa96b10c22b5d8c2fa2aeba1586bb30c724ca307056be796880fa7537afb0d07"
            },
            {
                "hash": "04e4daef3608d7b5fdac3431f2beea2c6d42c8ca459bd815bf4b3b895b6af009a9760d3eb93119031011cf0830e5f07824c761fcddc558f9c8d674e472c7b828",
                "result": "cf852a7f79f7e83fb18af785de680f13b6c70e5b626dc5634ad1a3701f0dd306"
            }
        ];
        let sample_crypto_core_ed25519_scalar_xxxxx = [
            {
                "x": "aeb7e5cc0cec745a51db2a3e56397d348e5a28ead283533c584ac0fbb41b7d02",
                "y": "07a4f076fd1632d7f5045d397d6e1e176eb337ed66189eea7a3d3c2d59cec107",
                "add": "b55bd6430a03a73147e08777d3a79b4bfc0d60d7399cf126d387fc280eea3e0a",
                "sub": "94e7eab2293855db3173c5a7b7c43d3220a7f0fc6b6bb551dd0c84ce5b4dbb0a",
                "mul": "28c2e04cf8d0ce999c60b390d428455f9ff8ad8a76815314517f0ee4ee2f1c00",
                "negate_x": "3f1c10900d779dfd84c1cc6488c061e071a5d7152d7cacc3a7b53f044be4820d",
                "invert_x": "e293070163e7467d209be1c728c3e63435b14df12d5f987f0ae53629b3b5bd00",
                "complement_x": "401c10900d779dfd84c1cc6488c061e071a5d7152d7cacc3a7b53f044be4820d"
            },
            {
                "x": "6783772a9e82f17474ec0ac229041f173ae03432b40344e6f70bef670cfb0f06",
                "y": "3c56ba0c3ddfe37260a9fffce4df8a498bdefdd8604a122096449bb159d0770b",
                "add": "b6053cdac0fec28ffef8121c30eaca4bc5be320b154e56068e508a1966cb8701",
                "sub": "1801b37a7b06205aeadf0268231e73e2ae01375953b931c661c753b6b22a980a",
                "mul": "343226d98815d45aaa03c679e6418f6be90d1c963f0eb6abe05ce1102ca31d09",
                "negate_x": "86507e327ce020e361b0ece0b4f5bffdc51fcbcd4bfcbb1908f41098f304f009",
                "invert_x": "369dcd2697bff9c4bda9c0b571450b4900093979708387cc3d73171a99b34800",
                "complement_x": "87507e327ce020e361b0ece0b4f5bffdc51fcbcd4bfcbb1908f41098f304f009"
            },
            {
                "x": "f7c7a86af4f8f531b01877683df29b7f728121da7726b30cfb986ccb2cb28605",
                "y": "2a035cc5b395b4e302865cc6e3f51292a163f4c6e4eeed85637f48d2b2516704",
                "add": "21cb0430a88eaa15b39ed32e21e8ae1114e515a15c15a1925e18b59ddf03ee09",
                "sub": "cdc44ca54063414ead921aa259fc88edd01d2d139337c586971924f979601f01",
                "mul": "ebca5c4dff250f684dd948c5205b69fe09136d4852910283229d8bddbc48bc05",
                "negate_x": "f60b4df2256a1c262684803aa10743958d7ede2588d94cf304679334d34d790a",
                "invert_x": "d8c3729771bdb6cc9f4cbb7940a8f6258f6ebfc3c6c220967b82e3c1c2fc870c",
                "complement_x": "f70b4df2256a1c262684803aa10743958d7ede2588d94cf304679334d34d790a"
            },
            {
                "x": "4a0d97c99b7c1a7aa5338ab4186b767c529f98d6e63a98118e2ab220f163fb09",
                "y": "97293ac19e0618ea657f7628fb68e01a3b7bfb392d9670933c20bd2810455d08",
                "add": "f462db2d2020200c3516093a35da77828d1a941014d108a5ca4a6f4901a95802",
                "sub": "b3e35c08fd7502903fb4138c1d02966117249d9cb9a4277e510af5f7e01e9e01",
                "mul": "2e48bd7eacbc751763ad959411dfc78106d3c548e61cbdcbbccb54bed694bb05",
                "negate_x": "a3c65e937ee6f7dd30696deec58e6898ad60672919c567ee71d54ddf0e9c0406",
                "invert_x": "509bda4d984c475b9f322593ce9ae3b65f9d9b343dd6967470e5531b20fa2d07",
                "complement_x": "a4c65e937ee6f7dd30696deec58e6898ad60672919c567ee71d54ddf0e9c0406"
            },
            {
                "x": "eb9199e291dec2c1912c4d1bbe71f2d8fe4b5eddf30fc3b877246dcd436cb609",
                "y": "470ec731b9559d4aef7449904a933fd6290b24ce0b1d4e5f8e57e89e29f84f0f",
                "add": "45cc6ab730d14db4aa049f082a0b539a285782abff2c1118067c556c6d640609",
                "sub": "9157c80df3eb37cf7854fb2d52d89117d5403a0fe8f27459e9cc842e1a74660a",
                "mul": "4b78e90439016a720c87a2bbd9cc4c0a880c44f5f39d84b2011c6c396aed7b06",
                "negate_x": "02425c7a88844f964470aa872088ec3b01b4a1220cf03c4788db9232bc934906",
                "invert_x": "b95459da376bfd00491ebaa4cb02bb8179d84c73eaeb0268d2a214ec1be1340b",
                "complement_x": "03425c7a88844f964470aa872088ec3b01b4a1220cf03c4788db9232bc934906"
            },
            {
                "x": "a681e7a32d6433634a58cfe26e95242db08e296ca84180186139f6acc15b7e07",
                "y": "ec5e0111155e8a7307a2f7b4c5c4987a92396fecbbcc8a9a652d02ca59377403",
                "add": "92e0e8b442c2bdd651fac697345abda742c89858640e0bb3c666f8761b93f20a",
                "sub": "ba22e6921806a9ef42b6d72da9d08bb21d55ba7fec74f57dfb0bf4e267240a04",
                "mul": "32633f0cf7c7faac79af50afa5f99f5604eb1e2530f76d167dbe4b598002080a",
                "negate_x": "47520eb9ecfedef48b4428c06f64bae74f71d69357be7fe79ec609533ea48108",
                "invert_x": "286cee7f0e96c88a25e18ba899eae2a666a785d491fcd45e8aebb73d12e95107",
                "complement_x": "48520eb9ecfedef48b4428c06f64bae74f71d69357be7fe79ec609533ea48108"
            },
            {
                "x": "da4842b151d24acb6348220e510575ee700ca749d7ea8b64d00cca9cbef6230f",
                "y": "58209f0fa61cfe4a80b5e1b382d35a750ed65667e769d4a612b4da11ec7f6d02",
                "add": "4595eb63dd8b36be0d610c1ff5def04e7fe2fdb0be54600be3c0a4aeaa769101",
                "sub": "8228a3a1abb54c80e392405ace311a79623650e2ef80b7bdbd58ef8ad276b60c",
                "mul": "ea0e5c03b3b9242b597a0f07940bcae3478fcba8ff5a3e343ea77e69024dcb0d",
                "negate_x": "138bb3abc890c78c7254d5948df469268ff358b62815749b2ff335634109dc00",
                "invert_x": "dad29ab9c7d81e947cfdecc65587ef2f8459d21cbc6fecb3bf1c53c1591e1505",
                "complement_x": "148bb3abc890c78c7254d5948df469268ff358b62815749b2ff335634109dc00"
            },
            {
                "x": "44673cc7e528212763ae1074b612cc94ecb2022b8d473e5dea474b0de9b47c05",
                "y": "46744fdfde3babb098e0c6403366f626af62e83c7bb8138ae53fa75d52ed0b0f",
                "add": "9d079649aa01ba7f25f2df110b7fe3a69b15eb67080052e7cf87f26a3ba28804",
                "sub": "ebc6e244215088cea06a41d661a6b4823d501aee118f2ad30408a4af96c77006",
                "mul": "f75e72be862f1c9f439ae837c3caf1689d70ff9aeaf9784a5cadc8b3bc348600",
                "negate_x": "a96cb995343af13073eee62e28e71280134dfdd472b8c1a215b8b4f2164b830a",
                "invert_x": "9d0910f33735dad0a1ebc57efd46b9df31b96665b523264ffea6dfc7aec7ce00",
                "complement_x": "aa6cb995343af13073eee62e28e71280134dfdd472b8c1a215b8b4f2164b830a"
            },
            {
                "x": "859eb7bae26903daeb100826d21169751b64219e5658a9950465df213a9ce905",
                "y": "10638b719b7e170eeed24e04d3469b58a850500eab47ccda417e61e693886f03",
                "add": "9501432c7ee81ae8d9e3562aa55804cec3b471ac01a0757046e34008ce245909",
                "sub": "753b2c4947ebebcbfd3db921ffcacd1c7313d18fab10ddbac2e67d3ba6137a02",
                "mul": "3c7da34157cc9af6ca6e1ea769e80cb99105571b63234984ca68b2f0aae9f80a",
                "negate_x": "68353ea237f90e7eea8bef7c0ce8759fe49bde61a9a7566afb9a20dec563160a",
                "invert_x": "4bcb4a996480ba72d294125d389882fd99260c60688dff99708f72712857ba08",
                "complement_x": "69353ea237f90e7eea8bef7c0ce8759fe49bde61a9a7566afb9a20dec563160a"
            },
            {
                "x": "2d4c5fe66d455870aec296de7f4f73d4d382f7d2988cb71804726aecff49d201",
                "y": "f5e29079d0614337cedc5608305650efc28bb72390b3ce432dffce62bd0a5801",
                "add": "222ff05f3ea79ba77c9fede6afa5c3c3960eaff62840865c3171394fbd542a03",
                "sub": "3869ce6c9de31439e0e53fd64ff922e510f73faf08d9e8d4d6729b89423f7a00",
                "mul": "518ddfa8e42f885cbd3903f79940cdd1f7357a989fe12de70d2784a2a86b8309",
                "negate_x": "c0879676ac1dbae727da60c45eaa6b402c7d082d677348e7fb8d951300b62d0e",
                "invert_x": "d57fd2f218fd15ef8c56467da4332bf40e2e93730010d247eb24193d4cbd870c",
                "complement_x": "c1879676ac1dbae727da60c45eaa6b402c7d082d677348e7fb8d951300b62d0e"
            },
            {
                "x": "ae24bcd527e63b8a663a082714177aeeeca5edb77237b3377e9897956b2b150d",
                "y": "08a80498dc1c153c77ca98c5295b36fbd608d5178034c907136aa55bec2e370a",
                "add": "c9f8ca10ea9f3e6e0768a9495f78d1d4c3aec2cff26b7c3f91023df1575a4c07",
                "sub": "a67cb73d4bc9264eef6f6f61eabb43f3159d18a0f202ea2f6b2ef2397ffcdd02",
                "mul": "ed8e57ad39cbcc2cd84eb7ba75e0f9e21fbb47bd26afaa5b9e6298a9f8e1f107",
                "negate_x": "3faf3987f27cd6cd6f62ef7bcae26426135a12488dc84cc88167686a94d4ea02",
                "invert_x": "f3d376efb6f92bb3eeb6c5fd5a4b1fa440ce2e9adc349fbc29447bfe91cc540d",
                "complement_x": "40af3987f27cd6cd6f62ef7bcae26426135a12488dc84cc88167686a94d4ea02"
            },
            {
                "x": "4dc330bdd5f12ab65c0c871078a26d436fd0d15a6d6c66631d822284efad010d",
                "y": "8fea4c1baeb5ebf22010bf77737212ae9eb98aa10df6c886fc8e4099ff49f700",
                "add": "dcad7dd883a716a97d1c4688eb1480f10d8a5cfc7a622fea1911631deff7f80d",
                "sub": "bed8e3a1273c3fc33bfcc79804305b95d01647b95f769ddc20f3e1eaef630a0c",
                "mul": "308416e5a4fb127e8e3ebcbafe7625c7327afde2c646740cb7e667d33ca1c005",
                "negate_x": "a010c59f4471e7a179907092665771d1902f2ea59293999ce27ddd7b1052fe02",
                "invert_x": "141bdb6c648a4f5d5f7e4264ee23c1c0e37a8fa8b9cbf236bd729d38e874150b",
                "complement_x": "a110c59f4471e7a179907092665771d1902f2ea59293999ce27ddd7b1052fe02"
            },
            {
                "x": "d4b4cf566b6a99d3e20abec329c7bb0bcc9687852cf4c9045102f5238a70c20c",
                "y": "d33fd03124f37abf0e69737e8c718d273cf4f31c599e56947695a2b4893d7e0b",
                "add": "ba20aa2b75fa013b1bd7399fd73e6a1e088b7ba285922099c79797d813ae4008",
                "sub": "0175ff2447771e14d4a14a459d552ee48fa29368d3557370da6c526f00334401",
                "mul": "4ce5858f96257e0e897a678d4c060fc66fd031691341eefe40b15334e2ba700d",
                "negate_x": "191f2606aff87884f39139dfb43223093469787ad30b36fbaefd0adc758f3d03",
                "invert_x": "132835b09ce208a95cfa5ffc7ba904c58f4167311348c032554c1e081db6530f",
                "complement_x": "1a1f2606aff87884f39139dfb43223093469787ad30b36fbaefd0adc758f3d03"
            },
            {
                "x": "41b63e8fed96ee41242c5d8a89e3c3cf87f56a764f6e2bbe60d2c5cb7bae6608",
                "y": "2a40f807e42da73441ef386c4744aa6cbac245940bd74edd7bf029b0a328da02",
                "add": "6bf63697d1c49576651b96f6d0276e3c42b8b00a5b457a9bdcc2ef7b1fd7400b",
                "sub": "177646870969470de33c241e429f1963cd3225e24397dce0e4e19b1bd8858c05",
                "mul": "1fef8d361febef38f47cc048a14f6ab15ec0dd0c91e1957d2623401230491508",
                "negate_x": "ac1db7cd2ccc2316b2709a1855161b45780a9589b091d4419f2d3a3484519907",
                "invert_x": "dbd4533b11d17f0844e921f735cb67006bd1e2bf677ba6604ae281dfa54aff03",
                "complement_x": "ad1db7cd2ccc2316b2709a1855161b45780a9589b091d4419f2d3a3484519907"
            },
            {
                "x": "4b5aba4668bf2852577bcfb882845dad0bed5d460ed9073aca818a34096fdd06",
                "y": "6989cdd6699879a0eeca4ada3757b2f40c5fe5bdbf7da92aa2a13ba8ba49b305",
                "add": "b4e3871dd257a2f245461a93badb0fa2184c4304ce56b1646c23c6dcc3b8900c",
                "sub": "e2d0ec6ffe26afb168b084de4a2dabb8fe8d78884e5b5e0f28e04e8c4e252a01",
                "mul": "4698feeb9a3c2d05e6c2b273e3e1fda97643038d4890513dbc574f7ec361b207",
                "negate_x": "a2793b16b2a3e9057f2128ea5b758167f412a2b9f126f8c5357e75cbf6902209",
                "invert_x": "064e45c4b778754f50ca0b68b0839b649d202ed26c40a7ef20e731557f2b780e",
                "complement_x": "a3793b16b2a3e9057f2128ea5b758167f412a2b9f126f8c5357e75cbf6902209"
            },
            {
                "x": "b51f066d1df8d4cdfc3472bc3bb61a02455d3cd8d371661a01ec96a633524d06",
                "y": "a3d72e36120d14477847fdc29be1893c48fe4049702107d95850ae3e47ba500a",
                "add": "6b233f4615a2d6bc9edf77dcf89dc5298d5b7d2144936df3593c45e57a0c9e00",
                "sub": "ff1bcd93254ed3de5a8a6c9c7ece6fdafc5efb8e63505f41a89be867ec97fc0b",
                "mul": "559e491357f7b8f737ce8c773fa47cce3002356bb9c6b543ebf1d6b6756cb40a",
                "negate_x": "38b4efeffc6a3d8ad96785e6a243c412bba2c3272c8e99e5fe136959ccadb209",
                "invert_x": "3f90ecf0edfe395dd5a0e5c68e035b6fed158238e6ead4cf088a1da355533509",
                "complement_x": "39b4efeffc6a3d8ad96785e6a243c412bba2c3272c8e99e5fe136959ccadb209"
            },
            {
                "x": "15cdbe00645e9116bbbcac2f8cd437cca6db43369d5b0dea1dc5249c968ab10b",
                "y": "827211fad302ac2b2f45825fad67e6b2b6325ee2cc5aa5f52af5897466b96900",
                "add": "973fd0fa37613d42ea012f8f393c1e7f5d0ea2186ab6b2df48baae10fd431b0c",
                "sub": "935aad06905be5ea8b772ad0de6c5119f0a8e553d00068f4f2cf9a2730d1470b",
                "mul": "3faf757efccdaa1912d842b93e3a1338b0cecc7aff01a45135b2a4ad1fd7d505",
                "negate_x": "d806375cb60481411be04a735225a7485924bcc962a4f215e23adb6369754e04",
                "invert_x": "6500d9f9819b191974abf73ff7dd8520232b4257c32fc75f5bef7cc04e182709",
                "complement_x": "d906375cb60481411be04a735225a7485924bcc962a4f215e23adb6369754e04"
            },
            {
                "x": "ca2483ed4904a55b75ad10de9320e2dc18e4b2ec6c234a8fa56fc404027e770a",
                "y": "20473ee273d285895bc0bcf7bbbe1f3a930fc1316ef0f89e87a9b15e74944e07",
                "add": "fd97cb72a373188dfad0d53271e52202acf3731edb13432e2d1976637612c601",
                "sub": "aadd440bd6311fd219ed53e6d761c2a285d4f1bafe3251f01dc612a68de92803",
                "mul": "711cb02c4463b78c9c20b366d45469f21e37315632a87dd42fead90e30976909",
                "negate_x": "23af726fd05e6dfc60efe6c44ad9fc37e71b4d1393dcb5705a903bfbfd818805",
                "invert_x": "044bb3e4a1a1d8b1a19800410c7036d96c8c2d7a2bc0c605274027869893ad0e",
                "complement_x": "24af726fd05e6dfc60efe6c44ad9fc37e71b4d1393dcb5705a903bfbfd818805"
            },
            {
                "x": "d16a75150cf47b480ee6e0b09403f7e0f09b5ff4e66db4d4c5e9b46cec857d0f",
                "y": "104a840d7c0f0ce766ff752a6f9810fb47c02ab15737b0f3136aeb693a9eeb0a",
                "add": "f4e003c66da075d79e485f3825a228c7385c8aa53ea564c8d953a0d62624690a",
                "sub": "c120f10790e46f61a7e66a86256be6e5a8db34438f3604e1b17fc902b2e79104",
                "mul": "a97883ac4ec664ad0112acc7de7995049b41b448f02e4c620e59bdaef14a5008",
                "negate_x": "1c6980470e6f960fc8b616f249f6e7330f64a00b19924b2b3a164b93137a8200",
                "invert_x": "a8c30618cde9f31e67218d903dc3163e6a5f28197618755b14afd684caab3507",
                "complement_x": "1d6980470e6f960fc8b616f249f6e7330f64a00b19924b2b3a164b93137a8200"
            },
            {
                "x": "1345f886527c497d373679dcb46f5e5d5be69f7e8c7ab0c95708a94942c5d90e",
                "y": "d37c37423242b450ec5ffd36821bb8a0f80c5d69c933359ba9682a69bd57ca06",
                "add": "f9ed396c6a5beb754df97e70589137e953f3fce755aee5640171d3b2ff1ca405",
                "sub": "40c8c044203a952c4bd67ba53254a6bc62d94215c3467b2eae9f7ee0846d0f08",
                "mul": "87d9dce6de08b23d5330871ecf53d6679bc33f6d954bbae5bb637db4baed6e03",
                "negate_x": "da8efdd5c7e6c8da9e667ec6298a80b7a419608173854f36a8f756b6bd3a2601",
                "invert_x": "ae79a2e767b8c33d6cbc8595e98c1ea947a4af9b458888f99d53bb340a2f9e0a",
                "complement_x": "db8efdd5c7e6c8da9e667ec6298a80b7a419608173854f36a8f756b6bd3a2601"
            }
        ];

        Promise.all(sample_crypto_core_ed25519_random.map(t => {
            return Sodium.crypto_core_ed25519_random()
                .then(q => Base64.toByteArray(q).length === 32)
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_random', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_random', error))

        Promise.all(sample_crypto_core_ed25519_random.map(t => {
            return Sodium.crypto_core_ed25519_from_uniform(Base64.fromByteArray(this.hex2bin(t.random)))
                .then(q => t.crypto_core_ed25519_from_uniform === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_from_uniform', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_from_uniform', error))

        Promise.all(sample_crypto_core_ed25519_add_sub.map(t => {
            return Sodium.crypto_core_ed25519_add(Base64.fromByteArray(this.hex2bin(t.p)), Base64.fromByteArray(this.hex2bin(t.q)))
                .then(q => t.add === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_add', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_add', error))


        Promise.all(sample_crypto_core_ed25519_add_sub.map(t => {
            return Sodium.crypto_core_ed25519_sub(Base64.fromByteArray(this.hex2bin(t.p)), Base64.fromByteArray(this.hex2bin(t.q)))
                .then(q => t.sub === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_sub', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_sub', error))

        Promise.all(sample_crypto_core_ed25519_scalar_reduce.map(t => {
            return Sodium.crypto_core_ed25519_scalar_reduce(Base64.fromByteArray(this.hex2bin(t.hash)))
                .then(q => t.result === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_reduce', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_reduce', error))


        Promise.all(sample_crypto_core_ed25519_scalar_xxxxx.map(t => {
            return Sodium.crypto_core_ed25519_scalar_add(Base64.fromByteArray(this.hex2bin(t.x)), Base64.fromByteArray(this.hex2bin(t.y)))
                .then(q => t.add === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_add', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_add', error))

        Promise.all(sample_crypto_core_ed25519_scalar_xxxxx.map(t => {
            return Sodium.crypto_core_ed25519_scalar_sub(Base64.fromByteArray(this.hex2bin(t.x)), Base64.fromByteArray(this.hex2bin(t.y)))
                .then(q => t.sub === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_sub', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_sub', error))

        Promise.all(sample_crypto_core_ed25519_scalar_xxxxx.map(t => {
            return Sodium.crypto_core_ed25519_scalar_mul(Base64.fromByteArray(this.hex2bin(t.x)), Base64.fromByteArray(this.hex2bin(t.y)))
                .then(q => t.mul === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_mul', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_mul', error))


        Promise.all(sample_crypto_core_ed25519_scalar_xxxxx.map(t => {
            return Sodium.crypto_core_ed25519_scalar_negate(Base64.fromByteArray(this.hex2bin(t.x)))
                .then(q => t.negate_x === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_negate', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_negate', error))

        Promise.all(sample_crypto_core_ed25519_scalar_xxxxx.map(t => {
            return Sodium.crypto_core_ed25519_scalar_invert(Base64.fromByteArray(this.hex2bin(t.x)))
                .then(q => t.invert_x === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_invert', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_invert', error))

        Promise.all(sample_crypto_core_ed25519_scalar_xxxxx.map(t => {
            return Sodium.crypto_core_ed25519_scalar_complement(Base64.fromByteArray(this.hex2bin(t.x)))
                .then(q => t.complement_x === this.bin2hex(Base64.toByteArray(q)))
                .catch(e => {
                    throw e
                })
        }))
            .then(results => this.testPassed('crypto_core_ed25519_scalar_complement', results.find(t => t == false) == undefined ? true : false))
            .catch((error) => this.testFailed('crypto_core_ed25519_scalar_complement', error))
    }

    componentDidMount() {
        this.initTests([
            'crypto_core_ed25519_random',
            'crypto_core_ed25519_from_uniform',
            'crypto_core_ed25519_add',
            'crypto_core_ed25519_sub',
            'crypto_core_ed25519_scalar_reduce',
            'crypto_core_ed25519_scalar_add',
            'crypto_core_ed25519_scalar_sub',
            'crypto_core_ed25519_scalar_mul',
            'crypto_core_ed25519_scalar_negate',
            'crypto_core_ed25519_scalar_invert',
            'crypto_core_ed25519_scalar_complement'
        ])

        this._crypto_core_Test()

    }

}
