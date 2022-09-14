import "./App.css"
import CodeMirror from "@uiw/react-codemirror"
import axios from "axios"
import { javascript } from "@codemirror/lang-javascript"
import { useState, useCallback } from "react"

function App() {
  const [code, setCode] = useState("a = 0")

  const onChange = useCallback((value) => {
    setCode(value)
    console.log(code)
  }, [])

  const submitCode = () => {
    axios.post("http://localhost:80/javascript", { code }).then(({ data }) => {
      console.log(data)
    })
    console.log(code)
  }
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
          <div className="border-2 bg-green-500" onClick={submitCode}>
            Submit
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
