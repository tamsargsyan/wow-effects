import IMG_404 from "../../assets/not-found-404.svg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Img from "../../components/Img";
import "./style.css";

const PageNotFound = () => {
  return (
    <div>
      <div className='pageNotFoundContainer'>
        <div className='img404'>
          <Img src={IMG_404} alt='404' />
        </div>
        <div className='pageNotFoundTitleContainer'>
          <p className='pageNotFoundTitle'>Oops...</p>
          <p className='pageNotFoundDescription'>
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
          <Button
            text='Go Home'
            className='pageNotFoundBtn'
            style={{
              background: "var(--main-color-pink)",
              color: "var(--secondary-color-white)",
              border: "none",
              display: "block",
              textAlign: "center",
              textDecoration: "none",
            }}
            link={true}
            // onClick={() => dispatch(closeBasketModal())}
            to='/'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
