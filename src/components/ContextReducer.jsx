import React, { createContext, use, useContext, useReducer } from 'react';

// Create contexts
export const CardStateContext = createContext();
export const CardDispatchContext = createContext();

// Dummy reducer (replace with your actual reducer logic)


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log("🟢 ADD_ITEM called with payload:", action.payload);

      const existingItem = state.find(item => item._id === action.payload._id);

      if (existingItem) {
        console.log("🔄 Item already in cart:", existingItem);

        const updatedState = state.map(item =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );

        console.log("✅ Updated cart state:", updatedState);
        return updatedState;
      } else {
        console.log("➕ Adding new item to cart");

        const updatedState = [
          ...state,
          {
            ...action.payload,
            quantity: action.payload.quantity || 1,
          },
        ];
    

        console.log("✅ Updated cart state:", updatedState);
        return updatedState;
      }
    }

    

    default:
      console.warn("⚠️ Unknown action type:", action.type);
      return state;
  }
};




export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CardDispatchContext.Provider value={dispatch}>
      <CardStateContext.Provider value={state}>
        {children}
      </CardStateContext.Provider>
    </CardDispatchContext.Provider>
  );
};
export const useCardState = () => useContext(CardStateContext);
export const useCardDispatch = () => useContext(CardDispatchContext);
