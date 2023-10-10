import './App.css'
import SplitPane from 'react-split-pane';
import InputPane from './InputPane/InputPane'; 
import OutputPane from './OutputPane/OutputPane';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useState } from 'react'

function App() {
  const [theText, setTheText] = useState('')
  const [tabSize, setTabSize] = useState(4)
  const [problemText, setProblemText] = useState('')

  function changeInputText(newString){
    setTheText(newString)
  }

  return (
    <div className="App">
      <Header theText={theText} problemText={problemText} />
      <SplitPane split='vertical' style={{position: "relative"}} defaultSize="50%">
        <InputPane changeInputText={changeInputText} tabSize={tabSize} />
        <OutputPane inputText={theText} setProblemText={setProblemText} />
      </SplitPane>
      <Footer />
    </div>
  );
}

export default App;
