import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/postsSlice'
import userSlice from './features/userSlice'
import appApi from './services/appApi'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  user:userSlice,
  posts: postsSlice,
  [appApi.reducerPath] : appApi.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [appApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
  reducer: persistedReducer,
 
    middleware: [thunk,appApi.middleware]
})


export default store;