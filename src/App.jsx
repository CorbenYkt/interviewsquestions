import { useState } from 'react'
import GoogleSpreadsheetData from './Components/GoogleSpreadsheetData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GoogleSpreadsheetData></GoogleSpreadsheetData>
    </>
  )
}

export default App
