import React, { useEffect, useRef, useState } from 'react';
import style from './PicturesSlider.module.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
  ms?: number;
};

export const PicturesSlider: React.FC<Props> = () => {
  const navigate = useNavigate();

  const bannersMobile = [
    'img/slider/banner_mobile.png',
    'img/slider/banner_tablets.png',
    'img/slider/banner_accessories.jpg',
  ];

  const bannerTablet = [
    'img/slider/banner-phones.png',
    'img/slider/banner-tabletst.png',
    'img/slider/banner-accessories.png',
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);
  const banners = isMobile ? bannersMobile : bannerTablet;
  const len = banners.length;

  useEffect(() => {
    if (len <= 1) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timer.current && window.clearInterval(timer.current);

    timer.current = window.setInterval(() => {
      setIndex(ind => (ind + 1) % len);
    }, 5000);

    return () => {
      if (timer.current) {
        window.clearInterval(timer.current);
      }
    };
  }, [len]);

  const prev = () => setIndex(ind => (ind - 1 + len) % len);
  const next = () => setIndex(ind => (ind + 1) % len);

  return (
    <div className={style.main}>
      <h2 className={style.title}>Welcome to Nice Gadgets store!</h2>

      <div className={style.slider}>
        <div className={style.sliderHeader}>
          <button
            onClick={prev}
            className={`${style.sliderButton} ${style.sliderButtonPrev}`}
            aria-label="Previous Slide"
          >
            <img src="img/arrows/arrow_left.svg" alt="photo arrow left" />
          </button>

          <div
            className={style.sliderBackground}
            style={{
              backgroundImage: `url(${banners[index]})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={style.overlay}>
              <div className={style.blockTitle}>
                <p className={`${style.titleOverlay} ${style.gradientText}`}>
                  Now availabable
                  <br />
                  in our store!
                  <img
                    className={style.imgOverlay}
                    src="img/logo/hand_perfect.svg"
                    alt="hand perfect"
                  />
                </p>
                <p className={style.textOverlay}>Be the first!</p>
              </div>

              <button
                className={style.btnOverlay}
                onClick={() => navigate('/phones')}
              >
                ORDER NOW
              </button>
            </div>
          </div>

          <button
            onClick={next}
            className={`${style.sliderButton} ${style.sliderButtonNext}`}
            aria-label="Next Slide"
          >
            <img src="img/arrows/arrow_right.svg" alt="photo arrow right" />
          </button>
        </div>

        <div className={style.sliderPagination}>
          {banners.map((_, ind) => (
            <button
              key={ind}
              onClick={() => setIndex(ind)}
              className={`${style.sliderPaginationBtn} ${ind === index ? style.sliderPaginationActive : ''}`}
              aria-label={`Go to slide ${ind + 1}`}
              type="button"
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
