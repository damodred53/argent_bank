import {configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "argent_bank_user",
    initialState: 
        [{

        }],
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
                updateUser : (state, action) => {
                    const updatedUser = {
                        firstName: action.payload.firstName,
                        lastName : action.payload.lastName
                    }
                    state.push(updatedUser)
                }
          }
    
})

export const store = configureStore({
    reducer: {
        argent_bank_user : userSlice.reducer
    }
})

export const {addUser, updateUser} = userSlice.actions;