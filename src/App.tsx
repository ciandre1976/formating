import "./App.css";
import { useEffect } from "react";
import { useFormattedData } from "./components/useFormattedData";

function App() {
  const { formatted, sortBy, filter, search } = useFormattedData();

  const param = "Male";
  useEffect(() => {
    search(param);
    filter(param);
    sortBy("firstName");
  }, [search, sortBy, filter]);

  return (
    <>
      <h3>Users By First Name:</h3>
      {formatted.map(({ id, firstName, lastName, birthdate }) => (
        <div key={id}>
          <div>
            <b>
              {firstName} {lastName}
            </b>
          </div>
          <div>{birthdate}</div>
        </div>
      ))}
    </>
  );
}

export default App;
