import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from "./component/login/Login";
import Register from './component/register/Register';
import Dashboard from './component/dashboard/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import Header from './component/header/Header';
import CreateTask from './component/task/CreateTask';
import Report from './component/report/Report';
import UpdateTask from './component/task/UpdateTask';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
    
      <Route path='/'  element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='*' element={<Navigate to={"/"}></Navigate>} />

      <Route path='/dashboard' element={<ProtectedRoutes component={Dashboard} />} />
      <Route path='/createtask' element={<ProtectedRoutes component={CreateTask} />} />
      <Route path='/report' element={<ProtectedRoutes component={Report} />} />
      <Route path='/update/:id' element={<ProtectedRoutes component={UpdateTask} />} />
    

     </Routes>
     </BrowserRouter>
    
     
    </div>
  );
}

export default App;
