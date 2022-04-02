import React, { useState, useEffect, useRef } from "react";

const InfinityScroll = () => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchPhotos = async pageNumber => {
    const accessKey = "mfcqsWqaCS1ESvlF8b6t3fj9UKjLaGU3hfU0RzuBGk8";
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${pageNumber}&per_page=3`,
    );
    const data = await res.json();
    console.log(data);
  };

  return <React.Fragment></React.Fragment>;
};

export default InfinityScroll;
