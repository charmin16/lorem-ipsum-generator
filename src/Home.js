import React from 'react'
import { useState } from 'react'
import text from './data'

function Home() {

    const [display, setDisplay] = useState(text)
    
    const [ sliceValue, setSliceValue ] = useState(1)
    const [inputValue, setInputValue] = useState(1)

    const modified = display.slice(0, sliceValue)

    // const inputHandler = (e) => {
    //     setInputValue(e.target.value)
    // }

    const displayParagragh = () => {
        // if (inputValue < 1) {
        //     setSliceValue(1)
        // } else {
        //     setSliceValue(inputValue)
        // }        
        setSliceValue(inputValue < 1 ? 1: inputValue)
    }



  return (
      <div>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <label htmlFor="para">Paragraphs:</label>
          <input type="number"
              name="paragraph"
              id="para"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue} />
          
        <button onClick={displayParagragh}>Generate</button>
          {modified.map((mod, index) => (
              <div key={index}>
                  <p>{mod}</p>
            </div>
        ))}
        
          {/* <label>
              <span>Paragraph</span>
              <input type="number" name="" id="para" step='1'  />
        </label> */}
    </div>
  )
}

export default Home