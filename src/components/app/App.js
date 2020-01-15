import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Header from '../header/Header';
import { Router } from '../router/Router';

import store from "../../store/store";
import {fetchShowById} from "../../store/actions";

const App = () => {
    useEffect(() => {
        store.dispatch(fetchShowById('6771'));
    }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router />
      </div>
    </Provider>
  );
};

export default App;
