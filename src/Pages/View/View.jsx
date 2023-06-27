import React, { useState, useEffect } from "react";
import axios from "axios";

function View() {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("https://bmouseproductions.com/view/index.php")
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Conteúdo do arquivo PHP:</h1>
      <p>{content}</p>
    </div>
  );
}

export default View;
