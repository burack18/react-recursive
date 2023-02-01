import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data=[
  {
    name:'videos',
    type:'Folder',
    children:[
      {
        name:'game-video',
        type:'video'
        
      },
      {
        name:'game-video2',
        type:'video' 
      },
      {
        name:'images',
        type:'Folder',
        children:[
          {
            name:'jpg1',
            type:'jpg'
          }
        ]
      }
    ]
  },
  {
    name:'file',
    type:'file'
  }
]
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);


