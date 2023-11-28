import React from "react";

export default function ReseñaLbl({ data }) {
  return (
    <div className="Infgendiv">
      <img src="/images/profile.png" />
      <div>
        <span>
          {data.rating}/5 <i className="bx bxs-star"></i>
        </span>
        <span>{data.comment}</span>
      </div>
    </div>
  );
}
