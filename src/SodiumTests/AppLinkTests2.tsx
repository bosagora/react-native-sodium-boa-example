import '../../shim.js'
import { BasicTest } from './BasicTest';
import { BOASodiumRN } from '../modules/crypto/BOASodiumRN';

import { Linking } from "react-native";
import * as boasdk from 'boa-sdk-ts';

export default class Test extends BasicTest
{
    constructor(props:any) {
        super(props);

        // The SDK requires the following first time.
        let native_sodium = new BOASodiumRN();
        boasdk.SodiumHelper.assign(native_sodium);
    }

    async _Proposal() {
        const votingFeeAndProposalData =
            {
                "proposer_address":"boa1xzcd00f8jn36mzppkue6w3gpt2ufevulupaa5a8f9uc0st8uh68jyak7p64",
                "validators":[
                    "boa1xrdwry6fpk7a57k4gwyj3mwnf59w808nygtuxsgdrpmv4p7ua2hqx78z5en",
                    "boa1xrdwrymw40ae7kdumk5uf24rf7wj6kxeem0t3mh9yclz6j46rnen6htq9ju",
                    "boa1xrdwryuhc2tw2j97wqe3ahh37qnjya59n5etz88n9fvwyyt9jyvrvfq5ecp",
                    "boa1xrdwryayr9r3nacx26vwe6ymy2kl7zp7dc03q5h6zk65vnu6mtkkzdqg39f",
                    "boa1xrdwry7vltf9mrzf62qgpdh282grqn9nlnvhzp0yt8y0y9zedmgh64s2qjg",
                    "boa1xrdwryl0ajdd86c45w4zrjf8spmrt7u4l7s5jy64ac3dc78x2ucd7wkakac",
                    "boa1xrgr66gdm5je646x70l5ar6qkhun0hg3yy2eh7tf8xxlmlt9fgjd2q0uj8p"
                ],
                "voting_fee":"12000000",
                "payload":"CFBST1BPU0FMBlZvdGVyYQEMSUQxMjM0NTY3ODkwBVRpdGxl/QPo/QvSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAkYTnKgAP8AAAAXSHboAP4Bm/zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDXvSeU462IIbczp0UBWrics5/ge9p06S8w+Cz8vo8ixOYx2v6aWx69nACIFINcMrCytXJmcWy99/N+ZlGEIWM="};
        const stringifyObj = JSON.stringify(votingFeeAndProposalData);
        await Linking.openURL(`boawallet://app/votingfeetransfer/${encodeURIComponent(stringifyObj)}`);
        this.testPassed('App Link Proposal', true);
    }
    componentDidMount() {
        this.initTests([
            'App Link Proposal',
        ])

        this._Proposal();
    }
}
