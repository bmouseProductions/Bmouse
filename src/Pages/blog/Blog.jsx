import styles from "../../style";
import computer from "../../assets/computer.jpeg";
import profile from "../../assets/profile-1.png";

import "./index.css";
const Blog = () => {
  return (
    <section className="bg-light py-10">
      <div className="text-center ">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[60.8px] leading-[45px]">
            <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Blog </span> {"  "}
          </h1>
        </div>
      </div>
      <div className="container px-5 text-white mx-auto">
        <a
          className="card post-preview post-preview-featured lift mb-5 overflow-hidden mt-5"
          href="#!"
        >
          <div className="grid g-0">
            <div className="grid g-0">
              <div className="flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2">
                  <div
                    className="post-preview-featured-img"
                    style={{
                      backgroundImage:
                        "url('https://source.unsplash.com/vZJdYl5JVXY/660x360')",
                    }}
                  ></div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="card-body">
                    <div className="py-5">
                      <h5 className="card-title">
                        Boots on the Ground, Inclusive Thought Provoking Ideas
                      </h5>
                      <p className="card-text">
                        Empower communities and energize engaging ideas; scale
                        and impact do-gooders while disruptring industries.
                        Venture philanthropy benefits corporations and people by
                        moving the needle.
                      </p>
                    </div>
                    <hr />
                    <div className="post-preview-meta mt-3">
                      <img
                        className="post-preview-meta-img w-full"
                        src={profile}
                      />
                      <div className="post-preview-meta-details">
                        <div className="post-preview-meta-details-name">
                          Valerie Luna
                        </div>
                        <div className="post-preview-meta-details-date">
                          Feb 5 · 6 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4">
          <div className="col-md-6 col-xl-4 mb-5">
            <a className="card post-preview lift h-100" href="#!">
              <img className="card-img-top" src={computer} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Invest In Social Impact</h5>
                <p className="card-text">
                  Expose the truth, problem-solvers impact mobilized green
                  spaces.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-preview-meta">
                  <img className="post-preview-meta-img" src={computer} />
                  <div className="post-preview-meta-details">
                    <div className="post-preview-meta-details-name">
                      Aariz Fischer
                    </div>
                    <div className="post-preview-meta-details-date">
                      Feb 4 · 5 min read
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-4 mb-5">
            <a className="card post-preview lift h-100" href="#!">
              <img className="card-img-top" src={computer} alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Save the World, Social Entrepreneur
                </h5>
                <p className="card-text">
                  Contextualize co-creation and do good while building your
                  startup.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-preview-meta">
                  <img className="post-preview-meta-img" src={computer} />
                  <div className="post-preview-meta-details">
                    <div className="post-preview-meta-details-name">
                      Alicia Allen
                    </div>
                    <div className="post-preview-meta-details-date">
                      Feb 3 · 4 min read
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-4 mb-5">
            <a className="card post-preview lift h-100" href="#!">
              <img className="card-img-top" src={computer} alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  The Power of Community-Driven Impact
                </h5>
                <p className="card-text">
                  Create equitable access, collaborate revolutionary impact.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-preview-meta">
                  <img className="post-preview-meta-img" src={computer} />
                  <div className="post-preview-meta-details">
                    <div className="post-preview-meta-details-name">
                      Sara Patel
                    </div>
                    <div className="post-preview-meta-details-date">
                      Feb 2 · 3 min read
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
