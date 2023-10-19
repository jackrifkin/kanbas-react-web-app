import Dashboard from './Dashboard';
import KanbasNavigation from './KanbasNavigation'
import Courses from './Courses';
import { Route, Routes, Navigate } from 'react-router';

function Kanbas() {
   return (
      <div className="d-flex">
         <KanbasNavigation />
         <Routes>
            <Route path='/' element={<Navigate to={"Dashboard"} replace={true}/>}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Courses/:courseId/*" element={<Courses />} />
         </Routes>
      </div>
   );
}
export default Kanbas;