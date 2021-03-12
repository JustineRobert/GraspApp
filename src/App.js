import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';
import Login from './Login';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { auth } from './firebase';
import Widgets from './Widgets';
import Chat from './Chat';
import { Map } from '@material-ui/icons';



//import Map from "./Map";




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  const pages = [
    {
      pageLink: '/',
      view: Feed,
      displayName: 'Feed',
      showInNavbar: true,
    },
    {
      pageLink: '/chat',
      view: Chat,
      displayName: 'Chat',
      showInNavbar: true,
    },
    {
      pageLink: '/widgets',
      view: Widgets,
      displayName: 'Widgets',
      showInNavbar: true,
    },
    {
      pageLink: '/map',
      view: Map,
      displayName: 'Map',
      showInNavbar: true,
    },
  ];


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
      } else {
        // User is logged out
        dispatch(logout());
      }
    })
   }, [dispatch]);
  
   return (
    <div className="app">
    

    <Header
    pages={pages}
    />
     {/* app body */}
    {!user ?(
      <Login/>
      ) : (
      <div className="app__body">
        <Sidebar
        pages={pages}
        />
        <Feed />
        <Widgets />
      </div>
    )}
    <div className="sidebar__chat">
        <Chat/>
    </div>
        <Map />

    
  </div>
  );
}

export default App;
