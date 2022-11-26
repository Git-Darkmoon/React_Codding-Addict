import React from "react"
import ReactDom from "react-dom"

// Importing CSS
import "./index.css"

// Importing other jsx
import { data } from "./bookData"
import { Book } from "./Book"

/* JSX Rules:
  Return Single element
  div / section / article or React.Fragment => <> </>
  use camelCase for html attribute
  close every element
*/

const App = () => {
  return (
    <section className="container">
      {data.map((eachBook) => {
        return <Book key={eachBook.id} {...eachBook} />
      })}
    </section>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
// https://react-basics-coddingaddict.netlify.app
