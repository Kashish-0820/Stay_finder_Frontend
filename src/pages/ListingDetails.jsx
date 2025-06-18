useEffect(() => {
    fetch(`https://stay-finder-frontend-3.onrender.com${id}`)
      .then(res => res.json())
      .then(data => setListing(data));
  }, [id]);
  