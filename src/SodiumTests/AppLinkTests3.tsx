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

    async _Vote() {
        const votingData = {
            payload:
                'CEJBTExPVCAgBlZvdGVyYQxJRDEyMzQ1Njc4OTApZQoKF+Lz6N/PxiRc1yujqEIDTPgpU3iLe7loamHrZBo9lo/jmNo2+yvZ3/kOvIVbFH0HLYmxU6j/VJl+rtRC56TX6bA1NUTXMZGZ5hTCTmz+Pki8VAoVKymhT/+3pO8CGJO/QOulEaxxFDIwMjEtMDQtMTVUMDA6MDA6MDBaSWw0dM4HZWT0WCpMweiq/FZB7D0msSRd4YEiawxLMAwPW11+bp2sCuKsc70fAiIA5q/gGx3TydUaNja/tOcOb2ROBIJUGjjcur5FRYgC+jVJBlUG7ZxOTFX/krUwUty+BbiTAOG5Un3cTXYRajgutGs+B7fu/etAcIje/gv5jqcY',
        };
        const stringifyObj = JSON.stringify(votingData);
        await Linking.openURL(`boawallet://app/vote/${encodeURIComponent(stringifyObj)}`);
        this.testPassed('App Link Vote', true);
    }

    componentDidMount() {
        this.initTests([
            'App Link Vote'
        ])

        this._Vote();
    }
}
