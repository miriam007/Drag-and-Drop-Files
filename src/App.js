import React from 'react';
import './App.css';
import DragAndDrop from './components/DragAndDrop';
import FileList from './components/FileList';

function App() {
  return (
    <div style={{
      border: 'solid black 4px',
      backgroundColor: 'lightgrey',
      position: 'absolute',
      height: 400,
      width: 300
    }}>
    Drag File(s) to be Uploaded
      <DragAndDrop/>
      <FileList/>
     
    </div>
  );
}

export default App;
