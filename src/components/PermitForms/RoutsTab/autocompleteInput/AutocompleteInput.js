import React, { useRef, useEffect } from "react";

function AutocompleteInput({ onPlaceSelected }) {
  const inputRef = useRef(null);
  const autocomplete = useRef(null);

  useEffect(() => {
    autocomplete.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { types: ["geocode"] }
    );

    autocomplete.current.addListener("place_changed", () => {
      const place = autocomplete.current.getPlace();
      onPlaceSelected(place);
    });
  }, [onPlaceSelected]);

  

  return <input ref={inputRef} type="text" placeholder="City or ZIP code" />;
}

export default AutocompleteInput;
