import FullTitle from "../FullTitle/FullTitle";
import "./style.css";
import { Fragment } from "react";
import Review from "./Review";
import Slider from "../Slider/Slider";

const Reviews = ({ reviews }) => {
  const lang = "en";

  return (
    <div className='reviewsContainer container'>
      <FullTitle
        title={reviews.reviewsMain[`heading_${lang}`]}
        desc={reviews.reviewsMain[`description_${lang}`]}
        withoutBtn
      />
      <Slider>
        {reviews.reviewsMain.reviews.map(review => {
          return (
            <Fragment key={review.id}>
              <Review
                star={review.rate}
                name={`${review[`name_${lang}`]} ${review[`surname_${lang}`]}`}
                desc={review[`review_text_${lang}`]}
                img={review.image}
              />
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
