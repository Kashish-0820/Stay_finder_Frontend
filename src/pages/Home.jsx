import { useEffect, useState } from "react";
import API from "../services/api";
import ListingCard from "../components/listingCard";

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await API.get("/listings");
        setListings(response.data);
      } catch (error) {
        console.error("Failed to fetch listings", error);
      }
    };

    fetchListings();  // yeh call yahin hona chahiye tha
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>StayFinder 🏠</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default Home;





  