import { createSlice } from "@reduxjs/toolkit";

const cliSlice = createSlice({
  name: "cli",
  initialState: {
    cmdInput: [],
    cmdOutput: [],
  },
  reducers: {
    addCommand: (state, action) => {
      state.cmdInput = [...state.cmdInput, action.payload];
      state.cmdOutput = [...state.cmdOutput, action.payload];
    },
    clearCli: (state) => {
        state.cmdInput = [];
        state.cmdOutput = [];
    },
  },
});

export const { addCommand, clearCli } = cliSlice.actions;
export default cliSlice.reducer;
