import { Provider } from "react-redux";
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import { Route, Routes, Navigate } from 'react-router-dom';

function Labs() {
   return (
      <Provider store={store}>
         <div>
            <Nav />
            <Routes>
               <Route path="/"
                  element={<Navigate
                     to="Labs/a3" />} />
               <Route path="a3"
                  element={<Assignment3 />} />
               <Route path="a4"
                  element={<Assignment4 />} />
            </Routes>
         </div>
      </Provider>
   );
}

export default Labs;