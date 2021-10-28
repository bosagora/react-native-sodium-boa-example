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

    async _ProposalFee() {
        const proposalFeeTransferData = {"proposer_address":"boa1xzcd00f8jn36mzppkue6w3gpt2ufevulupaa5a8f9uc0st8uh68jyak7p64","destination":"boa1xrgq6607dulyra5r9dw0ha6883va0jghdzk67er49h3ysm7k222ruhh7400","amount":"10000000000000","payload":"CFBST1AtRkVFBlZvdGVyYQxJRDEyMzQ1Njc4OTA="};

        const stringifyObj = JSON.stringify(proposalFeeTransferData);
        console.log(encodeURIComponent(stringifyObj));
        const url = `boawallet://app/proposalfeetransfer/${encodeURIComponent(stringifyObj)}`;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
            this.testPassed('App Link Proposal Fee', true);
        } else {
            this.testPassed('App Link Proposal Fee', false);
        }
    }


    componentDidMount() {
        this.initTests([
            'App Link Proposal Fee',
        ])

        this._ProposalFee();
    }
}
