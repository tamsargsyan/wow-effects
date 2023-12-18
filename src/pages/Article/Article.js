import ARROW from "../../assets/icons/arrow-left-pink.svg";
import PERSON from "../../assets/person-images/1.jpg";
import Img from "../../components/Img";
import LINK from "../../assets/icons/link-pink.svg";
import LINKEDIN from "../../assets/icons/linked-in-pink.svg";
import TWITTER from "../../assets/icons/twitter-pink.svg";
import FACEBOOK from "../../assets/icons/facebook-pink.svg";
import IMG_3 from "../../assets/ui-fake-images/blog-1.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { portfolios } from "../Portfolio/PortfolioPage";
import SecondButton from "../../components/SecondButton/SecondButton";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import SingleBlogBox from "../../components/SingleBlogBox/SingleBlogBox";
import { Fragment, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const Article = () => {
  const medias = [
    {
      id: 1,
      name: "Link",
      icon: LINK,
    },
    {
      id: 2,
      name: "Linked In",
      icon: LINKEDIN,
    },
    {
      id: 3,
      name: "Twitter",
      icon: TWITTER,
    },
    {
      id: 4,
      name: "Facebook",
      icon: FACEBOOK,
    },
  ];

  const tags = [
    {
      id: 1,
      name: "Interior Design",
    },
    {
      id: 2,
      name: "Interior Design",
    },
    {
      id: 3,
      name: "Interior Design",
    },
    {
      id: 4,
      name: "Interior Design",
    },
  ];

  const blogs = {
    blog_main: {
      heading_en: "hvb hbx12",
      heading_ru: "vfdsgvbd",
      heading_am: "fdgfdg",
      description_en: "<p>sfvc</p>",
      description_ru: "<p>bg vn&nbsp;</p>",
      description_am: "<p>bgfb</p>",
      posts: [
        {
          id: 6,
          image: "/images/posts/20231213111624post.jpeg",
          title_en: "test1234",
          title_ru: "test",
          title_am: "test1234",
          description_en: "<p>test</p>",
          description_ru: "<p>test</p>",
          description_am: "<p>test</p>",
        },
        {
          id: 10,
          image: "/images/posts/20231213111642post.png",
          title_en: "dgfdg",
          title_ru: "dfhbgfj",
          title_am: "dgfdg",
          description_en: "<p>fhgfhg</p>",
          description_ru: "<p>dgfhgfjh</p>",
          description_am: "<p>dfhgfjh</p>",
        },
        {
          id: 11,
          image: "/images/posts/20231213111700post.png",
          title_en: "sdfgf",
          title_ru: "dhgfhng",
          title_am: "sdfgf",
          description_en: "<p>fhhgf</p>",
          description_ru: "<p>fdgfdg</p>",
          description_am: "<p>dfgfhgf</p>",
        },
      ],
    },
  };

  const lang = "en";

  const { width } = useWindowSize();
  const [showArrowBtns, setShowArrowBtns] = useState(false);

  useEffect(() => {
    const sliderContainer = document.querySelector(".slider ");
    const items = document.querySelectorAll(".blogItem");
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
    <div>
      <div className='articleContainer'>
        <div className='articleBackBtnContainer'>
          <button className='articleBackBtn'>
            <div>
              <Img src={ARROW} alt='Arrow' />
            </div>
            Back
          </button>
        </div>
        {width < 600 && (
          <div className='articleAuthorMedias'>
            {medias.map((media, i) => (
              <Link key={i}>
                <Img src={media.icon} alt={media.name} />
              </Link>
            ))}
          </div>
        )}
        <div className='article'>
          <p className='articleTitle'>
            Hot Wheels NFT Garage: All You Need to Know About Mattel's Biggest
            IP in Web3
          </p>
          <div className='articleAuthorContainer'>
            <div className='articleAuthor'>
              <div className='articleAuthorImg'>
                <Img src={PERSON} alt='Person' />
              </div>
              <div className='articleAuthorNameContainer'>
                <p className='articleAuthorName'>Name Surname</p>
                <p className='articleAuthorDate'>
                  11 Jan 2022 <span className='articleAuthorDateDot'></span>5
                  min read
                </p>
              </div>
            </div>
            {width > 600 && (
              <div className='articleAuthorMedias'>
                {medias.map((media, i) => (
                  <Link key={i}>
                    <Img src={media.icon} alt={media.name} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className='articleDescriptionContainer'>
            <p className='articleDescription'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className='articleImg'>
            <Img src={IMG_3} alt='Article' />
          </div>
          <div className='articleInfo'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
              <br />
              <br />
              <strong>Lorem Ipsum is simply dummy text</strong>
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
              <br />
              <br />
              <strong>Lorem Ipsum is simply dummy text</strong>
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div className='articleLine'></div>
          <div className='articleTagsContainer'>
            <p className='articleTagsTitle'>Tags :</p>
            <div className='articleTags'>
              {tags.map((tag, i) => (
                <div className='singleBlogBoxBtn' key={i}>
                  <Button text={tag.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='portfolioSliderContainer container'>
        <Title title='Related Projects' />
        <Slider className='portfolioSlider' showArrowBtns={showArrowBtns}>
          {blogs.blog_main.posts.map((blog, i) => (
            <div className='blogItem' key={i}>
              <SingleBlogBox
                className='blogSectionBlog'
                size='small'
                style={{
                  flexDirection: "column",
                  gap: "32px",
                }}
                name='Blog title heading will go here'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...'
                btnText='Interior Design'
              />
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
