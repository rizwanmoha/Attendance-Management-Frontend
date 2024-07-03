import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loadingSlice"
import { userReducer } from "./userSlice"
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
//   };

// export const store = configureStore({
//     reducer: {auth: authPersistedReducer},
//   });
  
//   export const persistor = persistStore(store);
  


const store = configureStore({
    reducer: {
        loading: loadingReducer,
        user: userReducer
    }
});

export default store;