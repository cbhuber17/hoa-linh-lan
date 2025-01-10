import React from "react";
import "./Gallery.scss";
import Image from "./Image";

const Gallery = () => {
  return (
    <section className="display" id="gallery">
      <div className="header">
        <div className="hero_img">
          <img src="/hoa-linh-lan/Hero1.png" alt="Hero1" />
        </div>
        <div>
          <h1 className="title">Bộ Sưu Tập Tất Cả Các Bó Hoa</h1>
          <p className="subtitle">
            Khám phá bộ sưu tập phong phú các bó hoa của chúng tôi, từ những
            thiết kế đơn giản và tinh tế đến những bó hoa cầu kỳ và sang trọng.
            Với sự đa dạng về màu sắc, kiểu dáng và ý nghĩa, chúng tôi mang đến
            lựa chọn hoàn hảo cho mọi dịp và cảm xúc của bạn. Hãy tìm bó hoa phù
            hợp để gửi gắm thông điệp yêu thương và sự chân thành.
          </p>
        </div>
      </div>

      <div className="gallery">
        {/* First Row */}
        <figure className="gallery__item gallery__item--1">
          <Image
            src="/hoa-linh-lan/flowers/Hoa01.png"
            alt="Gallery image 1"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <Image
            src="/hoa-linh-lan/flowers/Hoa02.png"
            alt="Gallery image 2"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <Image
            src="/hoa-linh-lan/flowers/Hoa03.png"
            alt="Gallery image 3"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <Image
            src="/hoa-linh-lan/flowers/Hoa20.png"
            alt="Gallery image 4"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <Image
            src="/hoa-linh-lan/flowers/Hoa06.png"
            alt="Gallery image 6"
            applyClass="gallery__img"
          />
        </figure>

        {/* Second Row */}
        <figure className="gallery__item gallery__item--6">
          <Image
            src="/hoa-linh-lan/flowers/Hoa07.png"
            alt="Gallery image 6"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <Image
            src="/hoa-linh-lan/flowers/Hoa10.png"
            alt="Gallery image 7"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <Image
            src="/hoa-linh-lan/flowers/Hoa09.png"
            alt="Gallery image 8"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <Image
            src="/hoa-linh-lan/flowers/Hoa08.png"
            alt="Gallery image 9"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <Image
            src="/hoa-linh-lan/flowers/Hoa05.png"
            alt="Gallery image 10"
            applyClass="gallery__img"
          />
        </figure>

        {/* Third Row */}
        <figure className="gallery__item gallery__item--11">
          <Image
            src="/hoa-linh-lan/flowers/Hoa11.png"
            alt="Gallery image 11"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <Image
            src="/hoa-linh-lan/flowers/Hoa13.png"
            alt="Gallery image 12"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <Image
            src="/hoa-linh-lan/flowers/Hoa18.png"
            alt="Gallery image 13"
            applyClass="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--14">
          <Image
            src="/hoa-linh-lan/flowers/Hoa12.png"
            alt="Gallery image 14"
            applyClass="gallery__img"
          />
        </figure>

        {/* Fourth Row */}

        <figure className="gallery__item gallery__item--15">
          <Image
            src="/hoa-linh-lan/flowers/Hoa19.png"
            alt="Gallery image 15"
            applyClass="gallery__img"
          />
        </figure>

        <figure className="gallery__item gallery__item--16">
          <Image
            src="/hoa-linh-lan/flowers/Hoa04.png"
            alt="Gallery image 16"
            applyClass="gallery__img"
          />
        </figure>

        <figure className="gallery__item gallery__item--17">
          <Image
            src="/hoa-linh-lan/flowers/Hoa16.png"
            alt="Gallery image 17"
            applyClass="gallery__img"
          />
        </figure>

        <figure className="gallery__item gallery__item--18">
          <Image
            src="/hoa-linh-lan/flowers/Hoa17.png"
            alt="Gallery image 18"
            applyClass="gallery__img"
          />
        </figure>

        <figure className="gallery__item gallery__item--19">
          <Image
            src="/hoa-linh-lan/flowers/Hoa15.png"
            alt="Gallery image 19"
            applyClass="gallery__img"
          />
        </figure>

        <figure className="gallery__item gallery__item--20">
          <Image
            src="/hoa-linh-lan/flowers/Hoa14.png"
            alt="Gallery image 20"
            applyClass="gallery__img"
          />
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
