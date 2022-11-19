import React from "react"
import ReactDom from "react-dom"
//CSS
import "./index.css"

/* Stateless functional component
   Always return JSX */

/* JSX Rules
Return Single element
div / section / article or React.Fragment => <> </>
use camelCase for html attribute
className instead of class
close every element
formatting */

// Nested Components, React Tools

const App = () => {
  return (
    <>
      <h1 className="title">iBooklist</h1>
      <section className="container">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  )
}

const Book = () => {
  const title = "Fairy Tale"
  const author = "Stephen King"

  return (
    <div className="card">
      <img
        src="https://i0.wp.com/ellaberintodelminotauro.com.co/wp-content/uploads/2022/02/fairy-tale-9781668002179_xlg.jpg?ssl=1"
        alt="Fairy Tale book - Stephen King"
      />
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
