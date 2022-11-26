export const Book = ({ image, title, author }) => {
  /* ES6 Object destructuring, also can be done in the parameter
  const { image, title, author } = props */

  return (
    <div className="card">
      <img src={image} alt={title + "-" + author} />
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
      <div className="btns">
        <button className="btn" onClick={showMessage}>
          Click me !
        </button>
        <button
          className="btn"
          onClick={() => alert(`This book is called: ${title}`)}
        >
          Show title
        </button>
      </div>
    </div>
  )
}

const showMessage = () => {
  alert("Welcome to React !")
}
