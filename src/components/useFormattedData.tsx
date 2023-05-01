import users from "../data/users.json";
import { useState } from "react";

export const useFormattedData = () => {
  const formatted = users;

  const [data, setData] = useState([]);

  const sortBy = (param: string) => {
    if (param === "firstName") {
      const res = formatted.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
      console.log("Sorted Array:", res);
      if (res !== undefined) {
        setData(res);
      }
      return res;
    }
  };

  //filter(({ zip }) => zip > 486);

  const filter = function (prop: string) {
    const res = formatted.filter((user) => user.gender !== prop);
    console.log("fILTER:", res);
    setData(res);
  };

  const search = (prop: string) => {
    const newArray: any[] | ((prevState: never[]) => never[]) = [];
    formatted.map((user) => {
      if (user.gender === prop) newArray.push(user);
      if (user.firstName === prop) newArray.push(user);
      if (user.lastName === prop) newArray.push(user);
      if (user.city === prop) newArray.push(user);
      if (user.email === prop) newArray.push(user);
      setData(newArray);
      return newArray;
    });

    console.log("DATA", data);

    console.log(`Search by ${prop}`, newArray);
  };

  return { formatted, sortBy, filter, search };
};
