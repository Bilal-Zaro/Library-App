import react, {Component} from "react";

export  class Main extends Component {
  render() {
    const initState = {
      books: [
        {
          id: 1,
          title: "مقدمة ابن خلدون",
          author: "ابن خلدون",
          isbn: "1289499030",
        },
        {
          id: 2,
          title: "الحاوي في الطب",
          author: "ابو بكر الرازي",
          isbn: "893847239479",
        },
      ],
    };
    const cardComponent = initState.books.map((item) => {
      return (
        <div className="card" key={item.id} style={{ textAlign: "center" }}>
          <h4>
            <b>{item.title}</b>
          </h4>
          <p>{item.author}</p>
          <p>{item.isbn}</p>
          <br></br>
        </div>
      );
    });
    return <div>{cardComponent}</div>;
  }
}
