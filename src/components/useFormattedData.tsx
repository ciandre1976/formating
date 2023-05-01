import users from "../data/users.json";
import { useState } from "react";

export const useFormattedData = () => {
  const formatted = users;

  const sortBy = () => {
    console.log("sort");
  };

  const filter = () => {
    console.log("FILTER");
  };

  const search = (prop: string) => {
    console.log("yaya");
    const newArray: [] = [];
    formatted.map((user) => {
      console.log(user.gender);
      if (user.gender === prop) newArray.push(user);
      if (user.firstName === prop) newArray.push(user);
      if (user.lastName === prop) newArray.push(user);
      if (user.city === prop) newArray.push(user);
      if (user.email === prop) newArray.push(user);
      return newArray;
    });

    console.log("evvo", newArray);
  };

  return { formatted, sortBy, filter, search };
};
