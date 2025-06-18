// src/components/ListingCard.jsx

import React from "react";

// function ListingCard({ listing }) {
//   return (
//     <div style={{
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       padding: "1rem",
//       margin: "1rem",
//       width: "250px"
//     }}>
//       <h3>{listing.title}</h3>
//       <p>{listing.location}</p>
//       <p>₹{listing.price}</p>
//       <img
//         src={listing.images?.[0]}
//         alt={listing.title}
//         style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
//       />
//       <p>{listing.description}</p>
//     </div>
//   );
// }

function ListingCard({ listing }) {
  return (
    <div className="card">
      <img src={listing.imageUrl} alt="Property" />
      <h3>{listing.title}</h3>
      <p>{listing.location}</p>
      <p>₹{listing.price}</p>
    </div>
  );
}


export default ListingCard;

  