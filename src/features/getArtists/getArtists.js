import { createSlice } from "@reduxjs/toolkit";
import { fetchArtists } from "./getArtistsApi";
// Importing the fetchArtistOverview function from the getArtistsApi file
import { fetchArtistOverview } from "./getArtistsApi";

// Initial state of the Redux slice, defining empty arrays for artists and artistOverview
const initialState = {
  artists: [], // To store the list of artists
  artistOverview: [], // To store detailed information about a specific artist
};

// Creating a Redux slice to manage artist-related state
const albumsSlice = createSlice({
  name: "artistData", // Naming the slice 'artistData'
  initialState, // Setting the initial state for the slice
  reducers: {}, // No local reducers are defined for this slice
  extraReducers: (builder) => {
    builder
      // Handling fulfilled state when fetchArtists action is successful
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.artists = action.payload; // Updating the state with the fetched list of artists
      })
      // Handling fulfilled state when fetchArtistOverview action is successful
      .addCase(fetchArtistOverview.fulfilled, (state, action) => {
        state.artistOverview = action.payload; // Updating the state with detailed artist information
      });
  },
});

// Exporting the reducer generated by the slice for use in the Redux store
export default albumsSlice.reducer;
