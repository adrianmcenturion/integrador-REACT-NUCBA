
import './App.css';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import  store, { Persistor } from './redux/store';
import { GetTotalsAction } from './redux/CartSlice';

function App() {

  store.dispatch(GetTotalsAction())

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
