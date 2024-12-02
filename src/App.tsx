import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import List from '../src/components/List';
import GlobalStyles from './GlobalStyles';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <List />
    </Provider>
  );
};

export default App;