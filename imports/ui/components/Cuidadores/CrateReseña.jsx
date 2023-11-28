import axios from "axios";
import React, { useState } from "react";

export default function CrateReseña({ data }) {
  const [Review, setReview] = useState({
    petSitterId: data,
    rating: "",
    comment: "",
  });
  const handleSubmit = () => {
    axios.post(`http://localhost:5000/reviews/create`, { data:Review }).then((response) => {
      alert("Comentario realizado correctamente");
      setReview({
        petSitterId: data,
        rating: "",
        comment: "",
      });
    });
  };
  return (
    <div className="reseñaContenedor">
      <div className="cont2">
        <textarea
          placeholder="Escribe una reseña"
          value={Review.comment}
          onChange={({ target }) => {
            setReview({ ...Review, comment: target.value });
          }}
        />
        <div className="bottom">
          <div className="resConB">
            Calificacion:
            <div className="Body">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label
                    key={i}
                    name="rating"
                    value={ratingValue}
                    onClick={() => {
                      setReview({ ...Review, rating: ratingValue });
                    }}
                  >
                    <i
                      className="bx bxs-star"
                      style={
                        ratingValue <= Review.rating
                          ? { color: "var(--main-color)" }
                          : { color: "#ccc" }
                      }
                    ></i>
                  </label>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="btnMain"
          >
            Subir
          </button>
        </div>
      </div>
    </div>
  );
}
