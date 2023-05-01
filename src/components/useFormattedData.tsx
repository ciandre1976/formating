import users from "../data/users.json";

export const useFormattedData = () => {
  const formatted = users;

  const sortBy = () => {
    console.log("sort");
  };

  const filter = () => {
    console.log("FILTER");
  };
  const search = () => {
    console.log("search");
  };

  return { formatted, sortBy, filter, search };
};
