import Title from "../Title/Title";
import Button from "../Button/Button";
import IMG from "../../assets/ui-fake-images/about-company-1.jpg";
import BG from "../../assets/ui-fake-images/about-company-bg.svg";
import "./style.css";

const AboutCompany = () => {
  return (
    <div className='aboutCompanyContainer'>
      <img src={BG} alt='Background' className='aboutCompanyBG' />
      <div className='aboutCompanyInfo'>
        <Title title='about our company' />
        <p className='aboutCompanyDesc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button
          link={true}
          text='Read More'
          className='aboutCompanyReadMoreBtn'
          style={{
            fontFamily: "Poppins-600",
            textDecoration: "none",
            color: "var(--secondary-color-white)",
            background: "var(--main-color-pink)",
            borderRadius: "8px",
            display: "block",
            width: "fit-content",
          }}
        />
      </div>
      <div
        className='aboutCompanyImg'
        style={{ backgroundImage: `url(${IMG})` }}></div>
    </div>
  );
};

export default AboutCompany;
