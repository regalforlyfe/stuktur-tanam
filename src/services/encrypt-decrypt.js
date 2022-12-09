import CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_SECRET_KEY; // Could use a date or something dynamic

const encryptData = (word) => {
  let encrypted = CryptoJS.SHA256(secretKey + JSON.stringify(word)).toString();
  console.log(secretKey + JSON.stringify(word));
  return encrypted;
};

// const AESEncrypt = (pureText) => {
//   var ciphertext = encodeURIComponent(
//     CryptoJS.AES.encrypt(JSON.stringify(pureText), secretKey).toString()
//   );
//   return ciphertext;
// };

// const AESDecrypt = (encryptedText) => {
//   var bytes = CryptoJS.AES.decrypt(
//     decodeURIComponent(encryptedText),
//     secretKey
//   );
//   var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//   return decryptedData;
// };

// const decryptData = (word) => {
//   let decrypted = CryptoJS.SHA256(secretKey + word).toString(CryptoJS.enc.Utf8);
//   return decrypted;
// };

// const enc = (word) => {
//   let encrypted = CryptoJS.AES.encrypt(JSON.stringify(word), secretKey).toString();
//   return encrypted;
// };

// const dec = (word) => {
//   let decrypted = CryptoJS.AES.decrypt(word, secretKey).toString(CryptoJS.enc.Utf8);
//   return JSON.parse(decrypted);
// };

// const Sha256Hash = (pureText) => {
//   var hash = encodeURIComponent(
//     Base64.stringify(hmacSHA256(JSON.stringify(pureText), secretKey))
//   );
//   return hash;
// };

const EncryptDecrypt = {
  encryptData,
//   decryptData,
//   AESEncrypt,
//   AESDecrypt,
//   enc,
//   dec
};

export default EncryptDecrypt;
