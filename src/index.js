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

const bookProps = [
  {
    image:
      "https://i0.wp.com/ellaberintodelminotauro.com.co/wp-content/uploads/2022/02/fairy-tale-9781668002179_xlg.jpg?ssl=1",
    title: "Fairy Tale",
    author: "Stephen King",
  },
  {
    image:
      "https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",
    title: "IT STARTS WITH US",
    author: "Colleen Hoover",
  },
  {
    image:
      "https://storage.googleapis.com/du-prd/books/images/9780316485654.jpg",
    title: "DESERT STAR",
    author: "Michael Connelly",
  },
  {
    image:
      "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
    title: "IT ENDS WITH US",
    author: "Colleen Hoover",
  },
]

const App = () => {
  return (
    <>
      <h1 className="title">iBooklist</h1>
      <section className="container">
        <Book
          image={bookProps[0].image}
          title={bookProps[0].title}
          author={bookProps[0].author}
        />
        <Book
          image={bookProps[1].image}
          title={bookProps[1].title}
          author={bookProps[1].author}
        />
        <Book
          image={bookProps[2].image}
          title={bookProps[2].title}
          author={bookProps[2].author}
        />
        <Book
          image={bookProps[3].image}
          title={bookProps[3].title}
          author={bookProps[3].author}
        />
      </section>
    </>
  )
}

const Book = ({ image, title, author }) => {
  /* ES6 Object destructuring
  const { image, title, author } = props */

  return (
    <div className="card">
      <img src={image} alt={title + "-" + author} />
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
