import '../../shim.js'
import { BasicTest } from './BasicTest';
import { BOASodiumRN } from '../modules/crypto/BOASodiumRN';

import * as boasdk from 'boa-sdk-ts';
import { SmartBuffer } from 'smart-buffer';

export default class Test extends BasicTest
{
    constructor(props:any) {
        super(props);

        // The SDK requires the following first time.
        let native_sodium = new BOASodiumRN();
        boasdk.SodiumHelper.assign(native_sodium);
    }

    async _Hash() {
        // The test codes below compare with the values calculated in Agora.
        {
            let h = boasdk.hash(Buffer.from("abc"));
            this.testPassed('BOA-SDK-TS Hash', h.toString() ===
                '0x239900d4ed8623b95a92f1dba88ad31895cc3345ded552c22d79ab2a39c5877' +
                'dd1a2ffdb6fbb124bb7c45a68142f214ce9f6129fb697276a0d4d1c983fa580ba');
        }

        // The test codes below compare with the values calculated in Agora.
        {
            // Source 1 : "foo"
            let foo = boasdk.hash(Buffer.from("foo"));

            // Source 2 : "bar"
            let bar = boasdk.hash(Buffer.from("bar"));

            // Hash Multi
            let h2 = boasdk.hashMulti(foo.data, bar.data);

            // Check
            this.testPassed('BOA-SDK-TS Hash', h2.toString() ===
                '0xe0343d063b14c52630563ec81b0f91a84ddb05f2cf05a2e4330ddc79bd3a06e57' +
                'c2e756f276c112342ff1d6f1e74d05bdb9bf880abd74a2e512654e12d171a74');
        }

        // Test of utxo key, using makeUTXOKey'
        {
            let tx_hash = new boasdk.Hash('0x5d7f6a7a30f7ff591c8649f61eb8a35d034824ed5cd252c2c6f10cdbd223671' +
                '3dc369ef2a44b62ba113814a9d819a276ff61582874c9aee9c98efa2aa1f10d73');
            let hash = boasdk.makeUTXOKey(tx_hash, boasdk.JSBI.BigInt(1));
            this.testPassed('BOA-SDK-TS Hash', hash.toString() ===
                '0x7c95c29b184e47fbd32e58e5abd42c6e22e8bd5a7e934ab049d21df545e09c2' +
                'e33bb2b89df2e59ee01eb2519b1508284b577f66a76d42546b65a6813e592bb84');
        }

        // Test for hash value of transaction data
        {
            let payment_tx = new boasdk.Transaction(
                boasdk.TxType.Payment,
                [
                    boasdk.TxInput.fromTxHash(new boasdk.Hash(Buffer.alloc(boasdk.Hash.Width)), boasdk.JSBI.BigInt(0))
                ],
                [
                    new boasdk.TxOutput("0", boasdk.Lock.Null)
                ],
                boasdk.DataPayload.init
            );
            this.testPassed('BOA-SDK-TS Hash', boasdk.hashFull(payment_tx).toString() ===
                "0xef5d99551a2d15e723f77a468fcd1d1a9635d0ff2eb6924445e8b005108e0c7" +
                "007c60135014a46c4513bfaaa3c6e0ff826c28c86f63c8976f5c5527599d46bac");

            let freeze_tx = new boasdk.Transaction(
                boasdk.TxType.Freeze,
                [
                    boasdk.TxInput.fromTxHash(new boasdk.Hash(Buffer.alloc(boasdk.Hash.Width)), boasdk.JSBI.BigInt(0))
                ],
                [
                    new boasdk.TxOutput("0", boasdk.Lock.Null)
                ],
                boasdk.DataPayload.init
            );

            this.testPassed('BOA-SDK-TS Hash', boasdk.hashFull(freeze_tx).toString() ===
                "0x9f7f610a6b2689b2c88ec3c62bbd7cf393737700f660793d6642b2852773de0" +
                "abc2c0d4bb3a7d4a807dfd869f88e91e28471f6a4d2c990442b9c250585c25051");

            let payload_tx = new boasdk.Transaction(
                boasdk.TxType.Payment,
                [
                    boasdk.TxInput.fromTxHash(new boasdk.Hash(Buffer.alloc(boasdk.Hash.Width)), boasdk.JSBI.BigInt(0))
                ],
                [
                    new boasdk.TxOutput("0", boasdk.Lock.Null)
                ],
                new boasdk.DataPayload(Buffer.from([1,2,3]))
            );
            this.testPassed('BOA-SDK-TS Hash', boasdk.hashFull(payload_tx).toString() ===
                "0xfa416b96ef0b6d81ae246e3de6a992c9afabd1f53c336dceec47fd462e69948" +
                "da328a86330c228de06ef9c101d3294722675af08e576670e91533117f75b6976");
        }

        // Test for hash value of Scalar", () =>
        {
            let scalar = new boasdk.Scalar(
                "0x0e00a8df701806cb4deac9bb09cc85b097ee713e055b9d2bf1daf668b3f63778");
            this.testPassed('BOA-SDK-TS Hash', boasdk.hashFull(scalar).toString() ===
                "0x4f895cc641b2bfe4541f53b83445add00a7a81ad340312c51cbf15c53ddebcc" +
                "7ea7dcd11a97e085d28552026952e7c7c8d4276d5901d33605a3ea21027a673d4");
        }

        // "Test for hash value of Point"
        {
            let point = new boasdk.Point(
                "0xdb445140a72012a177535f43e6bbb8523ff21de465a7c35b42be1a447e5e2908")
            this.testPassed('BOA-SDK-TS Hash', boasdk.hashFull(point).toString() ===
                "0xa0ad987cffcf2e3f96af64dd197d95d4e8e41be4448f6abebd8953b3c37b313" +
                "2a1a1917c2046f6d3550cac70299110b28f23454d6124892ab2b8a6508f2bfe47");
        }
    }

    async _KeyPair() {
        let address = `boa1xrdwry6fpk7a57k4gwyj3mwnf59w808nygtuxsgdrpmv4p7ua2hqx78z5en`;
        let seed = `SDV3GLVZ6W7R7UFB2EMMY4BBFJWNCQB5FTCXUMD5ZCFTDEVZZ3RQ2BZI`;

        let kp = boasdk.KeyPair.fromSeed(new boasdk.SecretKey(seed));
        this.testPassed('BOA-SDK-TS KeyPair', kp.address.toString() === address);

        let signature = kp.secret.sign<Buffer>(Buffer.from('Hello World'));
        this.testPassed('BOA-SDK-TS KeyPair', kp.address.verify<Buffer>(signature, Buffer.from('Hello World')));

        let random_kp = boasdk.KeyPair.random();
        let random_kp_signature = random_kp.secret.sign<Buffer>(Buffer.from('Hello World'));
        this.testPassed('BOA-SDK-TS KeyPair', random_kp.address.verify<Buffer>(random_kp_signature, Buffer.from('Hello World')));

        let reproduced_kp = boasdk.KeyPair.fromSeed(random_kp.secret);
        let reproduced_kp_signature = reproduced_kp.secret.sign<Buffer>(Buffer.from('Hello World'));
        this.testPassed('BOA-SDK-TS KeyPair', reproduced_kp.address.verify<Buffer>(reproduced_kp_signature, Buffer.from('Hello World')));
        this.testPassed('BOA-SDK-TS KeyPair', random_kp.secret.toString(false) === reproduced_kp.secret.toString(false));
        this.testPassed('BOA-SDK-TS KeyPair', random_kp.address.toString() === reproduced_kp.address.toString());

        let valid = new boasdk.Point("0xab4f6f6e85b8d0d38f5d5798a4bdc4dd444c8909c8a5389d3bb209a18610511b");
        this.testPassed('BOA-SDK-TS KeyPair', valid.isValid());

        let invalid = new boasdk.Point("0xab4f6f6e85b8d0d38f5d5798a4bdc4dd444c8909c8a5389d3bb209a18610511c");
        this.testPassed('BOA-SDK-TS KeyPair', !invalid.isValid());

        let invalid2: boasdk.Point = boasdk.Point.Null;
        this.testPassed('BOA-SDK-TS KeyPair', !invalid2.isValid());
    }

    async _TxBuilder() {
        let utxo_data1 = {
            utxo: new boasdk.Hash('0xd9482016835acc6defdfd060216a5890e00cf8f0a79ab0b83d3385fc723cd45bfea66eb3587a684518ff1756951d38bf4f07abda96dcdea1c160a4f83e377c32'),
            amount: boasdk.JSBI.BigInt(1000000000)
        }
        let utxo_data2 = {
            utxo: new boasdk.Hash('0x4dde806d2e09367f9d5bdaaf46deab01a336a64fdb088dbb94edb171560c63cf6a39377bf0c4d35118775681d989dee46531926299463256da303553f09be6ef'),
            amount: boasdk.JSBI.BigInt(1000000000)
        }
        let owner = boasdk.KeyPair.fromSeed(new boasdk.SecretKey("SD4IEXJ6GWZ226ALTDDM72SYMHBTTJ6CHDPUNNTVZK4XSDHAM4BAQIC4"))

        let destination = new boasdk.PublicKey("boa1xrdwryl0ajdd86c45w4zrjf8spmrt7u4l7s5jy64ac3dc78x2ucd7wkakac");
        let builder = new boasdk.TxBuilder(owner);
        let tx: boasdk.Transaction;
        let expected = {
            "type": 0,
            "inputs": [
                {
                    "utxo": "0xd9482016835acc6defdfd060216a5890e00cf8f0a79ab0b83d3385fc723cd45bfea66eb3587a684518ff1756951d38bf4f07abda96dcdea1c160a4f83e377c32",
                    "unlock": {
                        "bytes": "baLr3KhfUzr0WEYxYuQpthF8x+xIYihkWf+RnfXjldAGvnArN0hDVLcNZsHFCBaP2zKmRJm3sQUmKko7ZGlgDw=="
                    },
                    "unlock_age": 0
                },
                {
                    "utxo": "0x4dde806d2e09367f9d5bdaaf46deab01a336a64fdb088dbb94edb171560c63cf6a39377bf0c4d35118775681d989dee46531926299463256da303553f09be6ef",
                    "unlock": {
                        "bytes": "2zY7qq/EKWQpAePoOjT4eFd3soO71EAE9P/E6PaLfzN5e4ZcxR9zZvsqH76pFgENlwTozYVARS6HRzY/l+FnBA=="
                    },
                    "unlock_age": 0
                }
            ],
            "outputs": [
                {
                    "value": "1980000000",
                    "lock": {
                        "type": 0,
                        "bytes": "wa1PiNOnmZYBpjfjXS58SZ6fJTaihHSRZRt86aWWRgE="
                    }
                },
                {
                    "value": "20000000",
                    "lock": {
                        "type": 0,
                        "bytes": "2uGT7+ya0+sVo6ohySeAdjX7lf+hSRNV7iLceOZXMN8="
                    }
                }
            ],
            "payload": "",
            "lock_height": "0"
        };

        try {
            tx = builder
                .addInput(utxo_data1.utxo, utxo_data1.amount)
                .addInput(utxo_data2.utxo, utxo_data2.amount)
                .addOutput(destination, boasdk.JSBI.BigInt(20000000))
                .sign(boasdk.TxType.Payment);

            tx.inputs.forEach((value, idx) => {
                expected.inputs[idx].unlock = value.unlock.toJSON();
            });

            this.testPassed('BOA-SDK-TS TxBuilder', JSON.stringify(tx) == JSON.stringify(expected));
        }
        catch (error)
        {
            this.testPassed('BOA-SDK-TS TxBuilder', false);
        }

    }

    async _UTXOManager() {

        let manager: boasdk.UTXOManager;
        let utxos: Array<boasdk.UnspentTxOutput>;

        // Prepare variables
        {
            utxos = [
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0x6d85d61fd9d7bb663349ca028bd023ad1bd8fa65c68b4b1363a9c7406b4d663fd73fd386195ba2389100b5cd5fc06b440f053fe513f739844e2d72df302e8ad0"),
                    boasdk.TxType.Freeze,
                    boasdk.JSBI.BigInt(1),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0x3451d94322524e3923fd26f0597fb8a9cdbf3a9427c38ed1ca61104796d39c5b9b5ea33d576f17c2dc17bebc5d84a0559de8c8c521dfe725d4c352255fc71e85"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(2),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0xfca92fe76629311c6208a49e89cb26f5260777278cd8b272e7bb3021adf429957fd6844eb3b8ff64a1f6074126163fd636877fa92a1f4329c5116873161fbaf8"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(3),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0x7e1958dbe6839d8520d65013bbc85d36d47a9f64cf608cc66c0d816f0b45f5c8a85a8990725ffbb1ab13c3c65b45fdc06f4745d455e00e1068c4c5c0b661d685"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(4),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0xd44608de8a5015b04f933098fd7f67f84ffbf00c678836d38c661ab6dc1f149606bdc96bad149375e16dc5722b077b14c0a4afdbe6d30932f783650f435bcb92"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(5),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0xc3780f9907a97c20a2955945544e7732a60702c32d81e016bdf1ea172b7b7fb96e9a4164176663a146615307aaadfbbad77e615a7c792a89191e85471120d314"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(6),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0x451a5b7929615121e0f2be759222853ea3acb45c94430a03de29a47db7c70e04eb4fce5b4a0c5af01d98331732546fede05fdfaf6ab429b3960aad6a20bbf0eb"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(7),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0xff05579da497ac482ccd2be1851e9ff1196314e97228a1fca62e6292b5e7ea91cadca41d6afe2d57048bf594c6dd73ab1f93e96717c73c128807905e7175beeb"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(8),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0xcfa89b7a9cd48fddc16cdcbbf0ffa7a9fd14d89c96bc3da0151db0bd7e453fe031f8a1e4d575a299c16942d9c96fbafff2497332bc48532aa7e0acf6122be0e2"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(9),
                    boasdk.JSBI.BigInt(10)),
                new boasdk.UnspentTxOutput(
                    new boasdk.Hash("0x37e17420b4bfd8be693475fbbe8b53bb80904dd3e45f3080c0d0b912b004324a27693559d884b943830f6a21b05c69061f453e8b9f03d56f3b6fd5b0c6fc2f8b"),
                    boasdk.TxType.Payment,
                    boasdk.JSBI.BigInt(10),
                    boasdk.JSBI.BigInt(10))
            ];
            manager = new boasdk.UTXOManager(utxos);
        }

        // Check the available amount
        {
            let test_manager = new boasdk.UTXOManager([]);

            test_manager.add([utxos[0]]);
            let sum1 = test_manager.getSum();

            this.testPassed('BOA-SDK-TS UTXOManager', boasdk.JSBI.equal(sum1[0], boasdk.JSBI.BigInt(0)));
            this.testPassed('BOA-SDK-TS UTXOManager', boasdk.JSBI.equal(sum1[1], boasdk.JSBI.BigInt(10)));
            this.testPassed('BOA-SDK-TS UTXOManager', boasdk.JSBI.equal(sum1[2], boasdk.JSBI.BigInt(0)));
        }

        // Obtain a UTXO to use - if there is enough money
        {
            let res = manager.getUTXO(boasdk.JSBI.BigInt(15), boasdk.JSBI.BigInt(5));
            this.testPassed('BOA-SDK-TS UTXOManager', JSON.stringify(res) === JSON.stringify([utxos[1], utxos[2]]));
        }

        // Obtain a UTXO to use - if there is not enough money
        {
            let sum = manager.getSum(boasdk.JSBI.BigInt(10));
            this.testPassed('BOA-SDK-TS UTXOManager', JSON.stringify(sum) === JSON.stringify([boasdk.JSBI.BigInt(70), boasdk.JSBI.BigInt(10), boasdk.JSBI.BigInt(0)]))

            let res = manager.getUTXO(boasdk.JSBI.add(sum[0], boasdk.JSBI.BigInt(1)), boasdk.JSBI.BigInt(10));
            this.testPassed('BOA-SDK-TS UTXOManager', JSON.stringify(res) === JSON.stringify([]));
        }
    }

    async _LinkProposalFeeData() {
        let data = new boasdk.ProposalFeeData("Votera", "ID1234567890");
        let proposal_address = new boasdk.PublicKey("boa1xrw66w303s5x05ej9uu6djc54kue29j72kah22xqqcrtqj57ztwm5uh524e");
        let destination = new boasdk.PublicKey("boa1xrgq6607dulyra5r9dw0ha6883va0jghdzk67er49h3ysm7k222ruhh7400");
        let amount = boasdk.JSBI.BigInt("10000000000000")
        let link_data = data.getLinkData(proposal_address, destination, amount);
        let expected = {
            proposer_address: 'boa1xrw66w303s5x05ej9uu6djc54kue29j72kah22xqqcrtqj57ztwm5uh524e',
            destination: 'boa1xrgq6607dulyra5r9dw0ha6883va0jghdzk67er49h3ysm7k222ruhh7400',
            amount: '10000000000000',
            payload: 'CFBST1AtRkVFBlZvdGVyYQxJRDEyMzQ1Njc4OTA='
        }
        this.testPassed('BOA-SDK-TS Link Data ProposalFeeData', JSON.stringify(link_data) === JSON.stringify(expected));
    }

    async _LinkProposalData() {
        let data = new boasdk.ProposalData(
            "Votera",
            boasdk.ProposalType.Fund,
            "ID1234567890",
            "Title",
            boasdk.JSBI.BigInt(1000),
            boasdk.JSBI.BigInt(3026),
            new boasdk.Hash(Buffer.alloc(boasdk.Hash.Width)),
            boasdk.JSBI.BigInt(10000000000000),
            boasdk.JSBI.BigInt(100000000000),
            boasdk.JSBI.BigInt(27000000),
            new boasdk.Hash(Buffer.alloc(boasdk.Hash.Width)),
            new boasdk.PublicKey("boa1xrw66w303s5x05ej9uu6djc54kue29j72kah22xqqcrtqj57ztwm5uh524e"),
            new boasdk.PublicKey("boa1xrzwvvw6l6d9k84ansqgs9yrtsetpv44wfn8zm9a7lehuej3ssskxth867s")
        );
        let proposer_address = new boasdk.PublicKey("boa1xrw66w303s5x05ej9uu6djc54kue29j72kah22xqqcrtqj57ztwm5uh524e");
        let validators = [
            new boasdk.PublicKey("boa1xrdwry6fpk7a57k4gwyj3mwnf59w808nygtuxsgdrpmv4p7ua2hqx78z5en"),
            new boasdk.PublicKey("boa1xrdwrymw40ae7kdumk5uf24rf7wj6kxeem0t3mh9yclz6j46rnen6htq9ju"),
            new boasdk.PublicKey("boa1xrdwryuhc2tw2j97wqe3ahh37qnjya59n5etz88n9fvwyyt9jyvrvfq5ecp"),
            new boasdk.PublicKey("boa1xrdwryayr9r3nacx26vwe6ymy2kl7zp7dc03q5h6zk65vnu6mtkkzdqg39f"),
            new boasdk.PublicKey("boa1xrdwry7vltf9mrzf62qgpdh282grqn9nlnvhzp0yt8y0y9zedmgh64s2qjg"),
            new boasdk.PublicKey("boa1xrdwryl0ajdd86c45w4zrjf8spmrt7u4l7s5jy64ac3dc78x2ucd7wkakac"),
            new boasdk.PublicKey("boa1xrgr66gdm5je646x70l5ar6qkhun0hg3yy2eh7tf8xxlmlt9fgjd2q0uj8p"),
        ];
        let voting_fee = boasdk.JSBI.BigInt("12000000")
        let link_data = data.getLinkData(proposer_address, validators, voting_fee);
        let expected = {
            proposer_address: 'boa1xrw66w303s5x05ej9uu6djc54kue29j72kah22xqqcrtqj57ztwm5uh524e',
            validators: [
                'boa1xrdwry6fpk7a57k4gwyj3mwnf59w808nygtuxsgdrpmv4p7ua2hqx78z5en',
                'boa1xrdwrymw40ae7kdumk5uf24rf7wj6kxeem0t3mh9yclz6j46rnen6htq9ju',
                'boa1xrdwryuhc2tw2j97wqe3ahh37qnjya59n5etz88n9fvwyyt9jyvrvfq5ecp',
                'boa1xrdwryayr9r3nacx26vwe6ymy2kl7zp7dc03q5h6zk65vnu6mtkkzdqg39f',
                'boa1xrdwry7vltf9mrzf62qgpdh282grqn9nlnvhzp0yt8y0y9zedmgh64s2qjg',
                'boa1xrdwryl0ajdd86c45w4zrjf8spmrt7u4l7s5jy64ac3dc78x2ucd7wkakac',
                'boa1xrgr66gdm5je646x70l5ar6qkhun0hg3yy2eh7tf8xxlmlt9fgjd2q0uj8p'
            ],
            voting_fee: '12000000',
            payload: 'CFBST1BPU0FMBlZvdGVyYQEMSUQxMjM0NTY3ODkwBVRpdGxl/egD/dILAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AoHJOGAkAAP8A6HZIFwAAAP7A/JsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2tOi+MKGfTMi85pssUrbmVFl5Vu3UowAYGsEqeEt26xOYx2v6aWx69nACIFINcMrCytXJmcWy99/N+ZlGEIWM='
        };
        this.testPassed('BOA-SDK-TS Link Data ProposalData', JSON.stringify(link_data) === JSON.stringify(expected));
    }

    async _LinkVoteData() {
        // The KeyPair of the validator
        let validator_key = boasdk.KeyPair.fromSeed(new boasdk.SecretKey("SDZQW3XBFXRXW2L7GVLS7DARGRKPQR5QIB5CDMGQ4KB24T46JURAAOLT"));

        // The temporary KeyPair
        let temporary_key = boasdk.KeyPair.fromSeed(new boasdk.SecretKey("SANGEY2BIMFZ3K3T3NWSVYBS65N55SZE7WBEVVXQFLLZI6GLZBKACO6G"));

        let voter_card = new boasdk.VoterCard(validator_key.address, temporary_key.address, "2021-04-15T00:00:00Z");
        voter_card.signature = validator_key.secret.sign<boasdk.VoterCard>(voter_card);

        let pre_image = new boasdk.Hash('0x0a8201f9f5096e1ce8e8de4147694940a57a188b78293a55144fc8777a774f2349b3a910fb1fb208514fb16deaf49eb05882cdb6796a81f913c6daac3eb74328');
        let app_name = "Votera";
        let proposal_id = "ID1234567890";
        let key_agora_admin = boasdk.hashMulti(pre_image.data, Buffer.from(app_name));
        let key_encrypt = boasdk.Encrypt.createKey(key_agora_admin.data, proposal_id);
        let ballot = boasdk.Encrypt.encrypt(Buffer.from([boasdk.BallotData.YES]), key_encrypt);
        let ballot_data = new boasdk.BallotData(app_name, "ID1234567890", ballot, voter_card, 100);
        ballot_data.signature = temporary_key.secret.sign<boasdk.BallotData>(ballot_data);

        let link_data = ballot_data.getLinkData();
        let expected = {
            payload: 'CEJBTExPVCAgBlZvdGVyYQxJRDEyMzQ1Njc4OTApLiJ5n0+MzlHg5Uqz+nRlD7pzNaXdURBJy7SEcNxc3WtEOqLsJ2ReXOnFrSKdkwbnyCSISJw+l76oyJmY8Vncx0mYjWFV1big5setAqNd51Ay94fqSlwrBuOtBR0YA2VpyRX02J3If7S4FDIwMjEtMDQtMTVUMDA6MDA6MDBaAoR3zMbQrdFDVCZVO91GE/lmyK7DqeSD+kCM+KGdHQNlieKjkzQvqQxWBbPUoVTm20AfjYom48ZT4LqFJGxvbmQ0gWQYAaLEO0FR0kfGZtRyKDhNf0po8wNtC3mN9VroDEj4iyyhkk9bWg6Q9t53KWxwNehXQ0LpQrlwBSfcHs+q'
        };

        let deserialized_ballot_data = boasdk.BallotData.deserialize(SmartBuffer.fromBuffer(Buffer.from(link_data.payload, "base64")));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(ballot_data) === JSON.stringify(deserialized_ballot_data));

        let expected_ballot_data = boasdk.BallotData.deserialize(SmartBuffer.fromBuffer(Buffer.from(expected.payload, "base64")));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(ballot_data.proposal_id) === JSON.stringify(expected_ballot_data.proposal_id));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(boasdk.Encrypt.decrypt(ballot_data.ballot, key_encrypt)) === JSON.stringify(boasdk.Encrypt.decrypt(expected_ballot_data.ballot, key_encrypt)));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(ballot_data.card.validator_address) === JSON.stringify(expected_ballot_data.card.validator_address));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(ballot_data.card.address) === JSON.stringify(expected_ballot_data.card.address));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(ballot_data.card.expires) === JSON.stringify(expected_ballot_data.card.expires));
        this.testPassed('BOA-SDK-TS Link Data Vote', JSON.stringify(ballot_data.sequence) === JSON.stringify(expected_ballot_data.sequence));
    }

    async _Vote() {
        let pre_image = new boasdk.Hash('0x0a8201f9f5096e1ce8e8de4147694940a57a188b78293a55144fc8777a774f2349b3a910fb1fb208514fb16deaf49eb05882cdb6796a81f913c6daac3eb74328');
        let app_name = "Votera";
        let proposal_id = "ID1234567890";
        let key_agora_admin = boasdk.hashMulti(pre_image.data, Buffer.from(app_name));
        let key_encrypt = boasdk.Encrypt.createKey(key_agora_admin.data, proposal_id);

        let message = Buffer.from([boasdk.BallotData.YES]);
        let cipher_message = boasdk.Encrypt.encrypt(message, key_encrypt);
        let decode_message = boasdk.Encrypt.decrypt(cipher_message, key_encrypt);
        this.testPassed('BOA-SDK-TS Vote', Buffer.compare(message, decode_message) === 0);

        let cipher_message1 = boasdk.Encrypt.encrypt(Buffer.from([boasdk.BallotData.YES  ]), key_encrypt);
        let cipher_message2 = boasdk.Encrypt.encrypt(Buffer.from([boasdk.BallotData.NO   ]), key_encrypt);
        let cipher_message3 = boasdk.Encrypt.encrypt(Buffer.from([boasdk.BallotData.BLANK]), key_encrypt);

        this.testPassed('BOA-SDK-TS Vote', Buffer.compare(cipher_message1, cipher_message2) !== 0);
        this.testPassed('BOA-SDK-TS Vote', Buffer.compare(cipher_message2, cipher_message3) !== 0);
        this.testPassed('BOA-SDK-TS Vote', Buffer.compare(cipher_message3, cipher_message1) !== 0);

        this.testPassed('BOA-SDK-TS Vote', cipher_message1.length == 41);
        this.testPassed('BOA-SDK-TS Vote', cipher_message2.length == 41);
        this.testPassed('BOA-SDK-TS Vote', cipher_message3.length == 41);
    }

    componentDidMount() {
        this.initTests([
            'BOA-SDK-TS Hash',
            'BOA-SDK-TS KeyPair',
            'BOA-SDK-TS TxBuilder',
            'BOA-SDK-TS UTXOManager',
            'BOA-SDK-TS Vote',
            'BOA-SDK-TS Link Data ProposalFeeData',
            'BOA-SDK-TS Link Data ProposalData',
            'BOA-SDK-TS Link Data Vote'
        ])

        this._Hash();
        this._KeyPair();
        this._TxBuilder();
        this._UTXOManager();

        this._LinkProposalFeeData();
        this._LinkProposalData();
        this._LinkVoteData();
        this._Vote();
    }
}
