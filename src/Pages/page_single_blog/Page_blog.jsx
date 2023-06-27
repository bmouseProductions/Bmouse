import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { ListBlog, ListBlogId } from "../../api/api";
import teste from "../../assets/audiovisual@2x.png";

const Page_blog = () => {
  const match = useMatch(`/pageblog/:friendly_url`);
  const url = match?.params.friendly_url;

  const [rows, setRows] = useState({});
  /*   useEffect(() => {
    (async () => {
      const response = await ListBlog();
      setBlog(response.data);
      console.log(response.data);
    })();
  }, []); */

  const handleImageChange = (e) => {
    setRows({
      ...rows,
      photo: URL.createObjectURL(e.target.files[0]),
      photoFile: e.target.files[0],
    });
  };

  useEffect(() => {
    (async () => {
      const response = await ListBlogId(url);
      setRows(response);
    })();
  }, [url]);

  return (
    <div className="relative text-center z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none py-20 z-50">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">{rows.news_title} </span> {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        {rows.photoUrl && <img src={rows.photo} alt="imagem" height={150} />}
      </div>

      <div className="relative text-white text-left p-5 sm:p-10 z-50 w-full h-auto">
        <p
          className="relative my-5 text-lg sm:text-xl z-50"
          dangerouslySetInnerHTML={{
            __html: rows.news,
          }}
        ></p>
      </div>
    </div>
  );
};

export default Page_blog;
