import {configureStore, createSlice } from "@reduxjs/toolkit";
import { getDataUsersThunk } from "./slice";

// CreateSlice permet de gérer les différentes actions possible dans le reducer pour les utilisateurs.
const userSlice = createSlice({
    status: "VOID",
    name : "argent_bank_user",
    initialState: {
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
        /**
         * fonction d'appel des données de l'utilisateur
         * @param {*} state 
         * @param {*} action 
         * @returns 
         */
        getBankUser : (state, action) => {

            /**
             * fonction asynchrone permettant d'ajouter les données de l'utilisateurs dnas le store.
             * 
             */
        /*getDataUsersThunk()*/

            return {   
                status : "modified",
                firstname : action.payload.body.firstName,
                lastname : action.payload.body.lastName,
            }
        }
    }
})

// store utilisé par redux et pour les besoins du projets ne contien qu'un seul reducer
export const store = configureStore({
    reducer: {    
        argent_bank_user : userSlice.reducer,
    }
})

export const {addUser, updateUserStore, getBankUser, deleteUser} = userSlice.actions;