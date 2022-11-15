import axios from 'axios';
import GeneralUtility from '../utility/general-utility';

export default async function CallApi({
    url, method, data
}) {
    // get token:
    const token = await GeneralUtility.getToken();
    // end of get token

    let headers = {
        authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
    }

    const response = await axios({ url, method, data, headers }).catch((err) => err.response)
    console.log("singo: "+JSON.stringify(response));
    // update response handling
    
    // end of response handling
    
    return response;
}
