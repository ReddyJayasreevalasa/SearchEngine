import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useApi } from './Api/UseApi';
import UsersView from './Api/UsersView';

const url = "https://jsonplaceholder.typicode.com/users";
export const MyContext = React.createContext(null);

function App() {
  const data = useApi(url);
  return (
    <MyContext.Provider value={data}>
      <UsersView />
    </MyContext.Provider>
  );
}

export default App;
