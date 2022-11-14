import Cookies from "js-cookie";
import CalledApi from "../services/helper"

const BASE_API = process.env.BASE_API


export async function getDataBuku() {
    const url = `${BASE_API}/buku`
    return CalledApi({
        url,
        method: 'GET',
        token: true,
        serverToken: Cookies.get('token')
    });
}