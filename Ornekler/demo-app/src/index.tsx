
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css' //Bootstrap yükledikten sonra bunu import etmen lazımki classlarını kullanabil
import Odev from './pages/Odev';
import OdevHocaCozum from './pages/OdevHocaCozum'
import Odev2 from './pages/Odev2';
import OrnekPage from './pages/OrnekPage';
import UserList from './pages/UserList'
import UserListComponents from './pages/UserListComponents';
import Ornek3 from './pages/Ornek3';
import UserAvatarList from './pages/UserAvatarList';
import UserPage from './pages/UserPage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
    <UserPage/>
 
);

