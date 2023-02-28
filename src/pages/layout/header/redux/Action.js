import RouteName from "../../../../services/routename";

const checkPrivilege = () => {
  const data = localStorage.getItem("user-info");
  if (data !== null) {
    return [
      ["Home", RouteName.home],
      ["Dashboard", RouteName.dashboard],
      ["Product", RouteName.product],
      ["Buku", RouteName.buku],
      ["Daftar", RouteName.daftar],
    ];
  } else {
    return [
      ["Home", RouteName.home],
      ["Dashboard", RouteName.dashboard],
      ["UserData", RouteName.userdata],
      ["Comment", RouteName.comment],
      ["Daftar", RouteName.daftar],
    ];
  }
};

const Action = {
  checkPrivilege,
};

export default Action;
