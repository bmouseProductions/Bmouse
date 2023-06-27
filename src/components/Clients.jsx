import { clients } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10px",
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

const Clients = () => (
  <section>
    <div className="text-center mt-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Nossos Clientes </span> {"  "}
        </h1>
      </div>
    </div>
    <Slider {...settings} className="mx-auto mt-40 mb-60 content-center">
      {clients.map((client) => (
        <div key={client.id}>
          <img
            src={client.logo}
            alt="client_logo"
            className="mx-auto h-[70px]"
          />
        </div>
      ))}
    </Slider>
  </section>
);

export default Clients;
