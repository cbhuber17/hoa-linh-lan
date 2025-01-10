import Slider from "react-slick";
import { flowerImages } from "../constants";
import "./FlowerCarousel.scss";
import Image from "./Image";

const FlowerCarousel = () => {
  const settings = {
    className: "center",
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="best-flowers">
      <h1 className="title">Bộ Sưu Tập Hoa Phổ Biến:</h1>
      <p className="subtitle">
        Khám phá bộ sưu tập hoa đẹp nhất của chúng tôi, được lựa chọn kỹ càng để
        mang đến những bó hoa tươi thắm, hoàn hảo cho mọi dịp.
      </p>
      <div className="carousel">
        <Slider {...settings}>
          {flowerImages.map((flowerImg, index) => {
            if (
              index === 1 ||
              index === 2 ||
              index === 4 ||
              index === 6 ||
              index === 7 ||
              index === 8
            ) {
              return (
                <div key={index} className="slick-slide">
                  <Image src={flowerImg.fileName} alt={`Bó hoa ${index + 1}`} />
                </div>
              );
            } else return null;
          })}
        </Slider>
      </div>
    </section>
  );
};

const CustomPrevArrow = ({ className, style, onClick }) => {
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#CAAA86",
        border: "none",
        borderRadius: "50%",
        position: "absolute",
        left: 0,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      {"<"}
    </button>
  );
};

const CustomNextArrow = ({ className, style, onClick }) => {
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#CAAA86",
        border: "none",
        borderRadius: "50%",
        position: "absolute",
        right: 0,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      {">"}
    </button>
  );
};

export default FlowerCarousel;
