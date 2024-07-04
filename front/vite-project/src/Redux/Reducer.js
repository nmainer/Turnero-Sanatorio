import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    user: null,
    isLoggedIn: false,
    datos:{},
    turnos:[]
};


export const valorState = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginUser: (state,action)=>{
             state.user = action.payload;
             state.isLoggedIn= true
        },
        logoutUser: (state)=>{
           state.user = null;
           state.isLoggedIn= false;
           state.turnos = [];
        },
        addTurno: (state, action) => {
            state.turnos.push(action.payload);
          },
        setTurnos: (state,action)=>{
            state.turnos = action.payload;
        },
        cancelTurno : (state,action)=>{
            const iduser = action.payload;
            const turno = state.turnos.find((turno) => turno.id === iduser);
            if (turno) {
              turno.estado = "cancelado";
        }
    },
         perfilUser : (state,action)=>{

         }
}
});


export  const {loginUser,logoutUser,setTurnos,cancelTurno,addTurno} = valorState.actions;
export default valorState.reducer;