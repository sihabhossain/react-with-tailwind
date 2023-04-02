import React, { useEffect, useState } from "react";
import axios from "axios";

const Phonebar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        console.log(loadedData);
      });
  }, []);
  return <div></div>;
};

export default Phonebar;
