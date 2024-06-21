import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

export const initialState = { theme: "true", dentist: [], favs: [] };

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  //Recibe por parametro el estado y lo que mandé desde el dispatch (action)
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, dentist: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] }; 
    case "DELETE_FAVS":
      const filteredfavs = state.favs.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, favs: filteredfavs };
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: "GET_DENTIST", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []); 

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal ;
export const useContextGlobal = () => useContext(ContextGlobal);

