import RouteName from "../../../../services/routename";

const checkPrivilege = () => {
  const data = localStorage.getItem("user-info");
  if (data !== null) {
    return [
      ["Home", RouteName.home],
      ["Dashboard", RouteName.dashboard],
      ["Product", RouteName.product],
      ["Buku", RouteName.buku],
    ];
  } else {
    return [
      ["Home", RouteName.home],
      ["Dashboard", RouteName.dashboard],
    ];
  }
};

const Action = {
  checkPrivilege,
};

export default Action;
