import "./App.css"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { useState, useCallback } from "react"

function App() {
  const [code, setCode] = useState("a = 0")

  const onChange = useCallback((value) => {
    setCode(value)
    console.log(code)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="absolute top-20 bottom-40 left-10 right-10 text-left">
          <CodeMirror
            value={code}
            height="200px"
            extensions={[javascript({ jsx: true })]}
            theme="dark"
            onChange={onChange}
          />
        </div>
      </header>
    </div>
  )
}

export default App
