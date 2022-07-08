import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

let postsData = [
  { id: 1, messages: 'Hi, how are you?', likeCount: 12 },
  { id: 2, messages: "It's my first post", likeCount: 10 },
];

let dialogsData = [
  { id: 1, name: 'Nick' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Anya' },
];

let messagesData = [
  { id: 1, messages: '1' },
  { id: 2, messages: '2' },
  { id: 3, messages: '3' },
];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </BrowserRouter>,
);
