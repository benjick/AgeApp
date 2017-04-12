import React from 'react';
import { Provider } from 'mobx-react';
import store from './src/store';
import Main from './src/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
