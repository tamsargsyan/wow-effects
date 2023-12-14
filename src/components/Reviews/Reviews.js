import FullTitle from "../FullTitle/FullTitle";
import "./style.css";
import { Fragment, useEffect } from "react";
import Review from "./Review";
import Slider from "../Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/reviewsActions";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Name Surname",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      star: 3,
    },
    {
      id: 2,
      name: "Name Surname",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      star: 4,
    },
    {
      id: 3,
      name: "Name Surname",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      star: 5,
    },
    {
      id: 4,
      name: "Name Surname",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      star: 1,
    },
    {
      id: 5,
      name: "Name Surname",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      star: 3,
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const revi = useSelector(state => state.reviews);
  console.log(revi);

  return (
    <div className='reviewsContainer container'>
      <FullTitle
        title='Reviews'
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        withoutBtn
      />
      <Slider>
        {reviews.map(review => {
          return (
            <Fragment key={review.id}>
              <Review star={review.star} />
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
