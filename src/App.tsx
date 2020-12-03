import React from 'react';
import './App.css';
import {Provider} from "react-redux";

// const store = configureStore(initialState)

const App:React.FC = ()=> {
  return (
      <Provider store={store}>

          <div className="App">
              <p>
                  Edit <code>src/App.tsx</code> and save to reload.
              </p>
          </div>
      </Provider>
  );
}

export default App;
