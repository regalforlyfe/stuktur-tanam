import EncryptDecrypt from "../../../services/encrypt-decrypt";

const checkPrivilege = () => {
  const data = localStorage.getItem("user-info");
  var privilege = data ? EncryptDecrypt.decryptData(data) : "";
  // console.log(privilege); //get from session;
  if (privilege === "QpwL5tke4Pnpja7X4") {
    return [
      ["Home", ""],
      ["Dashboard", "dashboard"],
      ["Product", "product"],
    ];
  } else if (privilege === "merchant") {
    return [
      ["Home", ""],
      ["Product", "product"],
    ];
  } else {
    return [["Home", ""]];
  }
};

const Action = {
    checkPrivilege
}

export default Action;