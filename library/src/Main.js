import React from "react";

function Main() {
    

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون ",
      author: "ابن خلدون ",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "893847239479",
    },
  ],
};

  return (
    <main>
      <h2>Available Books</h2>
      <div className="book-list">
        {initState.books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
