import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState('## hello');
  return (  
    <div className="App">
      <textarea id="editor" value={text} onChange={(event)=>{setText(event.target.value)}}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
    </div>
  );
}

export default App;
