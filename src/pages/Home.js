import AboutCompany from "../components/AboutCompany/AboutCompany";
import Blog from "../components/Blog/Blog";
import Button from "../components/Button/Button";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import FurnitureInfos from "../components/FurnitureInfo/FurnitureInfos";
import MainUI from "../components/MainUI/MainUI";
import Partners from "../components/Partners/Partners";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";
import IMG from "../assets/ui-fake-images/about-company-1.jpg";
import BG from "../assets/ui-fake-images/about-company-bg.svg";
import { motion } from "framer-motion";
import { animate, initial } from "../utils/transition";
import { STORAGE_URL } from "../services/apiService";
import { removeHtmlTags } from "../Helpers/removeHtmlTags";

const Home = () => {
  const home = {
    slides: [
      {
        image: "/images/homeSlides/20231213103258.jpeg",
        heading_en: "Heading En",
        heading_ru: "Heading Ru",
        heading_am: "Heading Am",
        description_en:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illo magnam maiores optio recusandae ut voluptates! Asperiores atque ea soluta!</p>",
        description_ru:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illo magnam maiores optio recusandae ut voluptates! Asperiores atque ea soluta!</p>",
        description_am:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illo magnam maiores optio recusandae ut voluptates! Asperiores atque ea soluta!</p>",
        link: "www.google.com",
        link_title_en: "knljn",
        link_title_ru: "dbdfh",
        link_title_am: "dbh",
      },
      {
        image: "/images/homeSlides/20231213103308.jpeg",
        heading_en: "Lorem ipsum dolor.",
        heading_ru: "Lorem ipsum dolor.",
        heading_am: "Lorem ipsum dolor.",
        description_en:
          "<p>Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</p>",
        description_ru:
          "<p>Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</p>",
        description_am:
          "<p>Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</p>",
        link: "www.google.com",
        link_title_en: "dhb",
        link_title_ru: "afv",
        link_title_am: "b fhr",
      },
      {
        image: "/images/homeSlides/20231213134907.svg",
        heading_en: "dhfh",
        heading_ru: "hfghnb",
        heading_am: "fghbgfh",
        description_en: "<p>fgngfn</p>",
        description_ru: "<p>fghbgfn</p>",
        description_am: "<p>fghngjn</p>",
        link: "fgnhgjn",
        link_title_en: "gfhngjnm",
        link_title_ru: "hgjnghm",
        link_title_am: "jnghm",
      },
      {
        image: "/images/homeSlides/20231213135031.svg",
        heading_en: "v xbv",
        heading_ru: "v db",
        heading_am: "dfnnfg",
        description_en: "<p>fghngfn</p>",
        description_ru: "<p>ghjhgm</p>",
        description_am: "<p>gmkhj,k</p>",
        link: "hjhj",
        link_title_en: "jjh",
        link_title_ru: "gjmhmk",
        link_title_am: "jmhk",
      },
    ],
    go_shopping: {
      image: "/images/goShopping/20231214125633.jpeg",
      heading_en: "Go Shopping",
      heading_ru: "Go Shopping",
      heading_am: "Go Shopping",
      description_en:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi at culpa dolore eaque fugit harum incidunt molestiae nihil tenetur!</p>",
      description_ru:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi at culpa dolore eaque fugit harum incidunt molestiae nihil tenetur!</p>",
      description_am:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi at culpa dolore eaque fugit harum incidunt molestiae nihil tenetur!</p>",
      link: "www.google.com",
    },
    about_section: {
      image: "/images/aboutSection/20231213103501.png",
      heading_en: "test123",
      heading_ru: "test",
      heading_am: "test",
      description_en:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eius et hic maiores modi. Aut!<br>&nbsp;</p>",
      description_ru:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eius et hic maiores modi. Aut!<br>&nbsp;</p>",
      description_am:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eius et hic maiores modi. Aut!<br>&nbsp;</p>",
      link: "Lorem",
    },
    portfolio_main: {
      heading_en: "Portfolio",
      heading_ru: "test",
      heading_am: "test",
      description_en: "<p>dfbhfgn</p>",
      description_ru: "<p>gfnjgfmj</p>",
      description_am: "<p>fghg</p>",
      link: "gn",
      works: [
        {
          id: 2,
          image: "/images/works/20231213105735.svg",
          title_en: "Lorem ipsum dolor sit amet.",
          title_ru: "Lorem ipsum dolor sit amet.",
          title_am: "Lorem ipsum dolor sit amet.",
          description_en: "<p>Lorem ipsum dolor sit amet.<br>&nbsp;</p>",
          description_ru: "<p>Lorem ipsum dolor sit amet.<br>&nbsp;</p>",
          description_am: "<p>Lorem ipsum dolor sit amet.<br>&nbsp;</p>",
        },
        {
          id: 3,
          image: "/images/works/20231213105745.svg",
          title_en: "test",
          title_ru: "test",
          title_am: "test",
          description_en: "<p>test</p>",
          description_ru: "<p>test</p>",
          description_am: "<p>test</p>",
        },
      ],
    },
    product_suggestions: [
      {
        heading_en: "Furniture parts",
        heading_ru: "Furniture parts",
        heading_am: "Furniture parts",
        description_en:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        description_ru:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        description_am:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        link: "www.google.com",
        category_id: 3,
        category: "test2",
      },
      {
        heading_en: "Furniture",
        heading_ru: "Furniture",
        heading_am: "Furniture",
        description_en:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        description_ru:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        description_am:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        link: "www.google.com",
        category_id: 4,
        category: "test3",
      },
      {
        heading_en: "burning suggestions123",
        heading_ru: "burning suggestions",
        heading_am: "burning suggestions",
        description_en:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        description_ru:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        description_am:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum ipsum nobis officiis quae similique.",
        link: "www.google.com",
        category_id: 8,
        category: "145897",
      },
    ],
  };

  const lang = "en";

  const {
    slides,
    go_shopping,
    about_section,
    portfolio_main,
    product_suggestions,
  } = home;

  return (
    <motion.div initial={initial} animate={animate} className='home' id='home'>
      <MainUI go_shopping={go_shopping} slides={slides} />
      <AboutCompany
        title={about_section[`heading_${lang}`]}
        description={removeHtmlTags(about_section[`description_${lang}`])}
        btn={
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
        }
        img={`${STORAGE_URL}/${about_section.image}`}
        bgImg={BG}
      />
      <Portfolio portfolio_main={portfolio_main} />
      <Reviews />
      <Partners />
      <FurnitureInfos product_suggestions={product_suggestions} />
      <Blog />
      <FAQ title='faq' className='mainFAQ' />
      <Footer slider={true} />
    </motion.div>
  );
};

export default Home;
