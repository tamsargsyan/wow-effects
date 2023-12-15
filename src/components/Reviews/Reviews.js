import FullTitle from "../FullTitle/FullTitle";
import "./style.css";
import { Fragment } from "react";
import Review from "./Review";
import Slider from "../Slider/Slider";

const Reviews = () => {
  const reviews = {
    reviewsMain: {
      heading_en: "dgbojnmip123",
      heading_ru: "dzbfcgb v",
      heading_am: "dfb b",
      description_en: "<p>dbdcv</p>",
      description_ru: "<p>sdgfdg</p>",
      description_am: "<p>sgvdg</p>",
      reviews: [
        {
          id: 1,
          image: "/images/reviews/20231213104046.jpeg",
          name_en: "ykulg",
          name_ru: "ckyf",
          name_am: "bjhnl",
          surname_en: "hkjpo",
          surname_ru: "fhdhn",
          surname_am: "vm mg",
          rate: 3,
          review_text_en: "<p>fthn</p>",
          review_text_ru: "<p>dhbfgh</p>",
          review_text_am: "<p>fbhrt</p>",
        },
        {
          id: 2,
          image: "/images/reviews/20231213104036.png",
          name_en: "ykulg",
          name_ru: "ckyf",
          name_am: "bjhnl",
          surname_en: "hkjpo",
          surname_ru: "fhdhn",
          surname_am: "vm mg",
          rate: 4,
          review_text_en: "<p>fthn</p>",
          review_text_ru: "<p>dhbfgh</p>",
          review_text_am: "<p>fbhrt</p>",
        },
        {
          id: 3,
          image: "/images/reviews/20231213104208.jpeg",
          name_en: "ykulg",
          name_ru: "ckyf",
          name_am: "bjhnl",
          surname_en: "hkjpo",
          surname_ru: "fhdhn",
          surname_am: "vm mg",
          rate: 5,
          review_text_en: "<p>fthn</p>",
          review_text_ru: "<p>dhbfgh</p>",
          review_text_am: "<p>fbhrt</p>",
        },
        {
          id: 4,
          image: "/images/reviews/20231213104018.jpeg",
          name_en: "ykulg",
          name_ru: "ckyf",
          name_am: "bjhnl",
          surname_en: "hkjpo",
          surname_ru: "fhdhn",
          surname_am: "vm mg",
          rate: 5,
          review_text_en: "<p>fthn</p>",
          review_text_ru: "<p>dhbfgh</p>",
          review_text_am: "<p>fbhrt</p>",
        },
      ],
    },
  };

  const lang = "en";

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // const revi = useSelector(state => state.reviews);
  // console.log(revi);

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
