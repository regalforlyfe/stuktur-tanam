import axios from 'axios';
import Cookies from 'js-cookie';

export default async function CalledApi({
    url, method, token, serverToken, data, headersApi=''
}) {
    let headers = {}
    if (serverToken) {
        headers = {
            authorization: `Bearer ${serverToken}`,
            Accept: 'application/json',
            'Access-Control-Allow-Origin' :'*',

        }
    } else if (token) {
        const tokenCookies = Cookies.get('token')
        if (tokenCookies) {
            tokenCookies = atob(tokenCookies)
            headers = {
                authorization: `Bearer ${tokenCookies}`,
                Accept: 'application/json',
                'Access-Control-Allow-Origin' :'*'
            }
        }
    }

    const response = await axios({ url, method, data, headers }).catch((err) => err.response)
    const { length } = Object.keys(response.data)
    
    if (response.status > 300) {
        return handleErrorStatus()
    } else  {
        const res = {
            error: false,
            message: 'success',
            data: length > 1 ? response.data : response.data.data
        }
        return res
    }
}
