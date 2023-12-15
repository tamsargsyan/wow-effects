import { Fragment } from "react";
// import IMG_1 from "../../assets/ui-fake-images/portfolio-work-1.svg";
// import IMG_2 from "../../assets/ui-fake-images/portfolio-work-2.svg";
// import IMG_3 from "../../assets/ui-fake-images/portfolio-work-3.svg";
// import IMG_4 from "../../assets/ui-fake-images/portfolio-work-4.svg";
// import IMG_5 from "../../assets/ui-fake-images/portfolio-work-5.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button/Button";
import FullTitle from "../FullTitle/FullTitle";
import PortfolioBox from "./PortfolioBox";
import "./style.css";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { STORAGE_URL } from "../../services/apiService";

const Portfolio = ({ portfolio_main }) => {
  const works = portfolio_main.works;

  // const portfolio = [
  //   {
  //     id: 1,
  //     img: IMG_1,
  //     className: "portfolioHeader1",
  //     name: "Name of the work",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 2,
  //     img: IMG_2,
  //     className: "portfolioContent1",
  //     name: "Name of the work",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 3,
  //     img: IMG_3,
  //     className: "portfolioSidebar",
  //     name: "Name of the work",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 4,
  //     img: IMG_4,
  //     className: "portfolioHeader",
  //     name: "Name of the work",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 5,
  //     img: IMG_5,
  //     className: "portfolioContent",
  //     name: "Name of the work",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  // ];

  const { width } = useWindowSize();
  const lang = "en";

  return (
    <div className='portfolioContainer container'>
      <FullTitle
        title={portfolio_main[`heading_${lang}`]}
        desc={removeHtmlTags(portfolio_main[`description_${lang}`])}
        btnLink={true}
        to='/portfolio'
        btnStyle={{
          border: "1px solid rgba(255, 255, 255, 0.40)",
          borderRadius: "8px",
          color: "var(--secondary-color-white)",
          background: "var(--main-bg-color-black)",
          textDecoration: "none",
          display: "block",
          width: "fit-content",
        }}
      />
      <div className='portfolioWrapper'>
        {works.map(p => (
          <Fragment key={p.id}>
            <PortfolioBox
              className={p.className}
              img={`${STORAGE_URL}/${p.image}`}
              name={p[`title_${lang}`]}
              description={removeHtmlTags(p[`description_${lang}`])}
              to={p.link}
            />
          </Fragment>
        ))}
      </div>
      {width < 797 && (
        <Button
          text='View More'
          className='fullTitleBtnMobile'
          style={{
            border: "1px solid rgba(255, 255, 255, 0.40)",
            borderRadius: "8px",
            color: "var(--secondary-color-white)",
            background: "var(--main-bg-color-black)",
            textDecoration: "none",
            display: "block",
            width: "100%",
            marginTop: "30px",
            textAlign: "center",
          }}
          link={true}
        />
      )}
    </div>
  );
};

export default Portfolio;
