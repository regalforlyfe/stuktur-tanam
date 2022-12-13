import React, { useState } from "react";
import EncryptDecrypt from "../../services/encrypt-decrypt";
import Action from "./controller/Action";

const Navbar = ({ onClick }) => {
  const [drop, setDrop] = useState("");

  const data = {
    code: 200,
    data: {
      key: "Gz6yMNUZzGSw3apmxGZpZAPhD6Vz2UUZ",
    },
    message: "Success get Data",
  };

  const data2 = {
    per_page: 6,
    total: 12,
    data: [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
    ],
    page: 2,
    total_pages: 2,
  };

  console.log(
    "---------------------------------------------------------------------"
  );

  const encryptData = EncryptDecrypt.encryptData(data2);
  console.log("encryptData", encryptData);

  return (
    <div className="h-full text-white" style={{ background: "#26473D" }}>
      <div className="py-10"> </div>
      <div className="flex flex-col pl-8">
        <div className="text-2xl text-amber-200 pb-5">
          TANAM
          <br />
          EMAS
        </div>
        {Action.checkPrivilege().map(([title, url]) => (
          <div key={title}>
            <button
              className="rounded-lg px-3 py-2 font-medium  hover:text-amber-200"
              onClick={() => {
                onClick(url);
              }}
            >
              {title}
            </button>
          </div>
        ))}

        <div className="pt-6">
          <select
            onChange={(e) => setDrop(e.target.value)}
            value={drop}
            name="cars"
            id="cars"
            className="text-black"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <a
            className="rounded-lg px-3 py-2 font-medium  hover:text-amber-200"
            href={
              "mailto:rifal.ahmd2@gmai1.com?subject=" +
              drop +
              "&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/"
            }
          >
            Sent Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
