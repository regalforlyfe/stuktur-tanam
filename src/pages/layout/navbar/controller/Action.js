import RouteName from "../../../../services/routename";

const checkPrivilege = () => {
  const data = localStorage.getItem("user-info");
  if (
    data === "fe724472cf9db4f35b89d4b7310de066f6bbbde518389803f6b43696fbecc51f"
  ) {
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
