import { useState } from "react"
export default function Header() {
    const [numCount, setnumCount] = useState(0)
    const handleAdd = () => {
      const newNumCount = numCount + 1
      setnumCount(newNumCount)
    }
    const handleReduce = () => {
      const newNumcount = numCount - 1
      setnumCount(newNumcount)
    }
  return (
    <div>
      <div className="header">
      <div className="header1">
        <h1>Hi there !!!</h1>

      </div>
      <div className="header2">
        <h2>I am Counting : <u><span className="span1">{numCount}</span></u></h2>
        <button className="btn" onClick={handleAdd}>C Add</button>
        <button className="btn" onClick={handleReduce}>C Reduce</button>
 
      </div>
    </div>
    <hr />
    </div>
  )
}
