// Hobbies.tsx
import './hobbies.css'
import { getHobbiesAction } from './action'
import type { THobbies } from './hobbies.type'

const Hobbies = async () => {
  const hobbies = await getHobbiesAction()

  if (!hobbies) return <p>Failed to load hobbies...</p>

  return (
    <section className="ho-container">
      <h1 className="ho-title">Hobbies & Interests</h1>
      <div className="ho-grid">
        {hobbies.map((hobby, i) => (
          <div key={i} className="ho-card">
            <i className={`${hobby.categoryIcon} ho-icon`} />
            <h2 className="ho-card-title">{hobby.category}</h2>
            {hobby.description && <p className="ho-description">{hobby.description}</p>}

            {hobby.books && (
              <div className="ho-books">
                {hobby.books.map((book, idx) => (
                  <div key={idx} className="ho-book">
                    <img src={book.bookImage} alt={book.booktitle} className="ho-book-img" />
                    <div>
                      <p className="ho-book-status">{book.status}</p>
                      <p className="ho-book-title">{book.booktitle}</p>
                      <p className="ho-book-author">by {book.bookAuthor}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export { Hobbies }
