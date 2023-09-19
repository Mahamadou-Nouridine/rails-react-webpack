import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk("greeting/gerate-random", async () => {
  const response = await fetch("api/generate");
  const data = await response.json()
  return data;
});
