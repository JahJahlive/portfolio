import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import useTranslation from "next-translate/useTranslation";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  let { t, lang } = useTranslation();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section>
      <SectionTitle>{t("common:timeline.about")}</SectionTitle>
      <SectionText>{t("common:timeline.description")}</SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
        {TimeLineData.map(({text_fr, text_en, year}, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT -1}>
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
            >
              <CarouselItemTitle>
                {year}
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d=""
                    fill="url(#paint0_linear)"
                    fill-opacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1="-4.30412e-10"
                      y1="0.5"
                      x2="208"
                      y2="0.500295"
                      gradientUnits='userSpaceOnUse'>
                      <stop stop-color="white" />
                      <stop
                        offset="0.79478"
                        stop-color="white"
                        stop-opacity="0"
                    />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{lang === 'en' ? text_en : text_fr }</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
      {TimeLineData.map(({text, year}, index) => (
        <CarouselButton 
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type='button'
        > 
          <CarouselButtonDot active={activeItem} />
        </CarouselButton>
      ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
