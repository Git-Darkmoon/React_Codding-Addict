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

const bookList = [
  {
    id: 1,
    image:
      "https://i0.wp.com/ellaberintodelminotauro.com.co/wp-content/uploads/2022/02/fairy-tale-9781668002179_xlg.jpg?ssl=1",
    title: "Fairy Tale",
    author: "Stephen King",
  },
  {
    id: 2,
    image:
      "https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",
    title: "IT STARTS WITH US",
    author: "Colleen Hoover",
  },
  {
    id: 3,
    image:
      "https://storage.googleapis.com/du-prd/books/images/9780316485654.jpg",
    title: "DESERT STAR",
    author: "Michael Connelly",
  },
  {
    id: 4,
    image:
      "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
    title: "IT ENDS WITH US",
    author: "Colleen Hoover",
  },
]

const App = () => {
  return (
    <section className="container">
      {bookList.map((eachBook) => {
        return <Book key={eachBook.id} {...eachBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  /* ES6 Object destructuring, also can be done in the parameter */
  const { image, title, author } = props

  return (
    <div className="card">
      <img src={image} alt={title + "-" + author} />
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
