import { useEffect, useState } from "react";
import { ListBlog } from "../../api/api";
import "./index.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Blog = () => {
  const itemsPerPage = 4;
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await ListBlog();
      console.log(response.data);
      setBlog(response.data);
    })();
  }, []);

  const displayedBlog = blog.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pageCount = Math.ceil(blog.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="bg-light relative py-10 z-30">
      <div className="text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">Blog </span> {"  "}
          </h1>
        </div>
      </div>
      <div className="container px-5 text-white mx-auto">
        {/* Usando map para iterar sobre a matriz de postagens */}
        {displayedBlog.map((post) => (
          <Link
            className="card post-preview post-preview-featured lift mb-5 overflow-hidden mt-5"
            to={`/pageblog/${post.friendly_url}`} // Usando o id da postagem para criar o link
            key={post.id} // Usando o id da postagem como key
          >
            <div className="grid g-0">
              <div className="grid g-0">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full lg:w-1/2">
                    <div
                      className="post-preview-featured-img"
                      style={{
                        backgroundImage: `url('${post.photo}')`, // Usando a imagem da postagem
                      }}
                    ></div>
                  </div>{" "}
                  <div className="w-full lg:w-1/2">
                    <div className="p-5 flex flex-col justify-center h-full">
                      <h2 className="font-bold text-xl mb-2">
                        {post.news_title}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            post.news.slice(0, 50) +
                            (post.news.length > 50 ? "..." : ""),
                        }}
                      />

                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 rounded-full mr-2"
                          src={`https://ui-avatars.com/api/?name=${post.author}`} // Usando o nome do autor para gerar uma imagem do avatar
                          alt={`${post.author} avatar`}
                        />
                        <span>{post.author}</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-3">
                        {post.post_day}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {/* Adicionando o componente ReactPaginate */}
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Próximo"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-center"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
