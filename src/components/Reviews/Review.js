import { STORAGE_URL } from "../../services/apiService";
import "./review.css";

const Review = ({ star, name, desc, img }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < star);

  return (
    <div className='reviewWrapper'>
      <div className='review'>
        <div className='reviewProfile'>
          <div
            className='reviewProfileImg'
            style={{ backgroundImage: `url(${STORAGE_URL}/${img})` }}></div>
          <div className='reviewProfileNameStar'>
            <p className='reviewProfileName'>{name}</p>
            <div className='reviewProfileStar'>
              {stars.map((item, i) => (
                <svg
                  key={i}
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'>
                  <path
                    d='M8 0L10.5392 4.50505L15.6085 5.52786L12.1086 9.33495L12.7023 14.4721L8 12.32L3.29772 14.4721L3.89144 9.33495L0.391548 5.52786L5.46077 4.50505L8 0Z'
                    fill={`${item ? "#F0B90B" : "#3C3C3C"}`}
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <div className='reviewProfileDesc'>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
    </div>
  );
};

export default Review;
