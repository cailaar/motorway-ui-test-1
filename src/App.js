import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import Form from "./form";

const App = () => {
  const [images, setImages] = useState();

  //I am implementing caching to speed up the response of the website
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("imagesData");
        if (cachedData) {
          setImages(JSON.parse(cachedData));
        } else {
          const imagesResponse = await fetchImages();
          setImages(imagesResponse);
          localStorage.setItem("imagesData", JSON.stringify(imagesResponse));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const fetchImages = async () => {
    const response = await fetch("images?limit=10");
    const data = await response.json();
    console.log("Success:", data);
    return data;
  };

  return (
    <div className="app">
      <Navbar />
      {images &&
        images.map((img) => (
          <div key={img.id} className="">
            <div className="image-wrapper profile">
              <img
                src={`${img.user.profile_image}.webp`}
                alt=""
                className="profile-image"
              />
            </div>
            <div className="image-wrapper upload">
              <img src={`${img.url}.jpg`} alt="" className="upload-image" />
            </div>
            <div className="caption">
              <div className="caption-left">
                <p className="username">{img.user.username}</p>
                <p className="description">{img.description}</p>
              </div>
            </div>
            <p className="likes">{img.likes} likes</p>
          </div>
        ))}
      <Form />
    </div>
  );
};

export default App;
