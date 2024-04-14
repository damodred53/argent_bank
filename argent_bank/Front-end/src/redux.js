import {configureStore, createSlice } from "@reduxjs/toolkit";
import { getDataUsersThunk } from "./slice";

const userSlice = createSlice({
    status: "VOID",
    name : "argent_bank_user",
    initialState: 
        {
            firstname : "",
            lastname : ""
        },
          reducers : {
                addUser: (state, action) => {
                    
                    const newUser = {
                        firstName: "indéfini",
                        lastName : "indéfini",
                        email : action.payload.email,
                        password : action.payload.password
                    }
                    state.push(newUser)

                },
                updateUserStore: (state, action) => {
                    const { firstName, lastName } = action.payload;
                    state.status = "modified";
                    state.firstname = firstName;
                    state.lastname = lastName;
                },
                deleteUser : (state, action ) => {
                    const { firstName, lastName } = action.payload;
                    state.status = "void";
                    state.firstname = firstName;
                    state.lastname = lastName;
                },
                getBankUser : (state, action) => {
                    console.log(action)
                    const user = getDataUsersThunk()

                    return {
                        
                        status : "modified",
                        firstname : action.payload.body.firstName,
                        lastname : action.payload.body.lastName,
                    }
                }
          }
})

export const store = configureStore({
    reducer: {    
        argent_bank_user : userSlice.reducer,
    }
})

export const {addUser, updateUserStore, getBankUser, deleteUser} = userSlice.actions;