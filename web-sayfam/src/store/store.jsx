import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer, // Kullanıcı bilgilerini yöneten reducer
});

const store = createStore(rootReducer);
{/*
combineReducers ile birden fazla reducer birleştirilir.
createStore ile Redux Store oluşturulur ve React uygulamasına bağlanır.
  */ }
export default store;
