import React, { useEffect, useState } from "react";
import SingleTour from "./SingleTour";
const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const items = await response.json();
      setTours(items);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);

      throw new Error("Ua Ca gabimiiiii");
      console.log("gabimii");
    }
  };
  const removeTour = (id) => {
    setTours((tours) => {
      return tours.filter((tour) => tour.id !== id);
    });
  };
  useEffect(() => {
    getTours();
  }, [url]);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h2 className={"mesi"}>Our Tours</h2>
          {tours.map((item) => {
            return (
              <SingleTour key={item.id} {...item} removeTour={removeTour} />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Tours;
