import React from "react";

function ListingCard({ listing }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        width: "270px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={listing.images[0]}  // Unsplash ka image URL yaha aayega
        alt={listing.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "0.5rem",
        }}
      />
      <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>{listing.title}</h3>
      <p style={{ margin: "0.3rem 0", color: "#555" }}>{listing.location}</p>
      <p style={{ margin: "0.3rem 0", fontWeight: "bold" }}>₹{listing.price}</p>
      <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#777" }}>
        {listing.description}
      </p>
    </div>
  );
}

export default ListingCard;
