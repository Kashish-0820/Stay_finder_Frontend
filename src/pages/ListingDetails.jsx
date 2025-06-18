useEffect(() => {
    fetch(`http://localhost:8080/api/listings/${id}`)
      .then(res => res.json())
      .then(data => setListing(data));
  }, [id]);
  