import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const clients = createSlice({
  name: 'clients',
  initialState: {
    clients: [
      { id: 1, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 2, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 3, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 4, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 5, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 6, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 7, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 8, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
      { id: 9, clientID: 123456, clientName: 'Entity name', trn: 654321, date: '23/06/22', ard: '23/06/22', companyNumber: '123456789', email: 'email1234@g....', phoneNumber: 7674822811, companyAddress: '10 Name Stree...' },
    ]
  },
  reducers: {
    deleteClient(state, action) {
      state.clients = state.clients.filter(client => client.id !== action.payload)
    },
    insertClient(state, action) {
      let newClient = {
        id: state.clients.length + 1,
        clientID: 123456,
        clientName: action.payload.clientName,
        trn: action.payload.trn,
        date: action.payload.yearEnd,
        ard: action.payload.ard,
        companyNumber: action.payload.companyNumber,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        companyAddress: action.payload.companyAddress
      }
      state.clients.push(newClient)
    }
  },
},
)
export const { deleteClient, insertClient } = clients.actions

export default clients.reducer