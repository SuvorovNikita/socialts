import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music/index';
import Settings from './components/Settings';

import './App.css';
import { StateType } from './redux/state';

type PropsType = {
  state: StateType;
};

function App(props: PropsType) {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  messages={props.state.dialogsPage.messages}
                  dialogs={props.state.dialogsPage.dialogs}
                />
              }
            />
            <Route path="/profile" element={<Profile posts={props.state.profilePage.posts} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
