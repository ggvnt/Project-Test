import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/main.css";
import "./style/gallery.css";

export default function Gallery() {
  const navigate = useNavigate();
  const [media, setMedia] = useState([]);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const addContent = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post("http://localhost:8070/media/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Item added.");
        navigate("/gallery");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0]);
  };


  // Fetch media on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8070/media/read")
      .then((res) => {
        setMedia(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Error fetching media.");
      });
  }, []);

  return (
    <div>
      {/* Background image
      <div className="background">
        <img src="../../Images/gallery.jpg" alt="IDS" width="1440" height="400" />
      </div> */}
      
      <form className="form1" onSubmit={addContent}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Picture Caption
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Picture Caption"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="photoFile" className="form-label">
            Upload Content
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Content
        </button>
      </form>
      
      
      {/* Display fetched media */}
      <div className="media">
        {media.map((item) => (
          <div key={item._id}>
            <h3 className="imagename">{item.name}</h3><hr className="boder"/>
            <p className="imagedescription">{item.description}</p>
            {/* Check if image exists before rendering */}
            {item.image && (
              <img
                src={`http://localhost:8070/media/uploads/${item.image}`}
                alt="Product Image"
                style={{maxWidth:'700px' , height:'400px' ,alignSelf:'center'}}
              />
            )}
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
}
