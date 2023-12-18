import FullTitle from "../FullTitle/FullTitle";
import "./style.css";
import Review from "./Review";
import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const Reviews = ({ reviews }) => {
  const lang = "en";
  const [showArrowBtns, setShowArrowBtns] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const sliderContainer = document.querySelector(".slider ");
    const items = document.querySelectorAll(".reviewItem");
    const gap = 32;
    let totalWidth = 0;
    if (sliderContainer && items) {
      items.forEach(img => {
        //@ts-ignore
        totalWidth += img.offsetWidth + gap;
      });
      //@ts-ignore
      setShowArrowBtns(totalWidth > sliderContainer.offsetWidth);
    }
  }, [width]);

  return (
    <div className='reviewsContainer container'>
      <FullTitle
        title={reviews.reviewsMain[`heading_${lang}`]}
        desc={reviews.reviewsMain[`description_${lang}`]}
        withoutBtn
      />
      <Slider showArrowBtns={showArrowBtns}>
        {reviews.reviewsMain.reviews.map(review => {
          return (
            <div className='reviewItem' key={review.id}>
              <Review
                star={review.rate}
                name={`${review[`name_${lang}`]} ${review[`surname_${lang}`]}`}
                desc={review[`review_text_${lang}`]}
                img={review.image}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
