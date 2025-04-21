import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://st.depositphotos.com/1004199/1386/i/450/depositphotos_13860489-stock-photo-british-shorthair-cat-on-a.jpg"
        alt=""
        className="kittykat"
      />
      <img
        src="https://thumbs.dreamstime.com/b/pet-cat-green-cats-eyes-gray-big-102425920.jpg"
        alt=""
        className="kittykat"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuOr8QKVFXHMSffrM3VbSQzYAmrgE7B8sOdYwf0_eL65n7VrPYUTyqC4qNwtTgU6vQwU&usqp=CAU"
        alt=""
        className="kittykat"
      />
      <img alt="random" src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
