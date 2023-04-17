import { configureStore } from '@reduxjs/toolkit'
import clients from './clients'

export default configureStore({
  reducer: {
    clients: clients
  }
})