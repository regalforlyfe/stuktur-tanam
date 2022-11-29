import CryptoJS from 'crypto-js';

const secretKey = process.env.REACT_APP_SECRET_KEY;

const encryptData = word => {
    let encrypted = CryptoJS.AES.encrypt(word, secretKey).toString();
    return encrypted;
}

const decryptData = word => {
    let decrypted = CryptoJS.AES.decrypt(word, secretKey).toString(CryptoJS.enc.Utf8);
    return decrypted;
}

const EncryptDecrypt = {
    encryptData,
    decryptData
}

export default EncryptDecrypt;