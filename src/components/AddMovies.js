import { useState } from "react";
import Modal from "react-modal";
import "./addMovie.css";
const AddMovies = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    let newMovie = {
      name,
      description,
      date,
      type,
      image,
      rating
    };
    addNewMovie(newMovie);
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">What are you looking for</h1>
        <form>
          <label>Movie Title</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Date of Release</label>
          <input
            type="number"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Film Layout</label>
          <input
            type="url"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Genre</label>
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>Latest Rating</label>
          <input
            type="Number"
            name="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
          
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit Form
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          Close Form
        </button>
      </Modal>
    </div>
  );
};
export default AddMovies;
