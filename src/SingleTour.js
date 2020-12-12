import React, { useState, useEffect } from "react";
const SinglePerson = ({ id, image, name, info, removeTour }) => {
  const [showmore, setShowmore] = useState(true);
  const showMore = () => {
    setShowmore(false);
  };
  const showLess = () => {
    setShowmore(true);
  };
  const info1 = info.substring(0, 400);

  return (
    <div className={"mesi"}>
      <h3>{name}</h3>
      <div>
        <img src={image} />
      </div>
      <h5>Informacione shtese</h5>
      {showmore ? (
        <p>
          {info1}
          <label className={"showmore"} onClick={showMore}>
            show more
          </label>
        </p>
      ) : (
        <p>
          {info}
          <label className={"showmore"} onClick={showLess}>
            show less
          </label>
        </p>
      )}
      <button onClick={() => removeTour(id)}>Uninterested</button>
    </div>
  );
};

export default SinglePerson;
