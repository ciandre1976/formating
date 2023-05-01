import "./App.css";
import { useEffect } from "react";
import { useFormattedData } from "./components/useFormattedData";

function App() {
  const { formatted, sortBy, filter, search } = useFormattedData();

  useEffect(() => {
    search();
    filter();
    sortBy();
  }, []);

  return (
    <>
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
