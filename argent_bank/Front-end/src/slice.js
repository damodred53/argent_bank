
import { createAsyncThunk } from "@reduxjs/toolkit";
import AllServices from "./services/Services";

export const getDataUsersThunk = createAsyncThunk('', async () => {
    
    const response = await AllServices.getUser()
    return response;
})

