import ARROW from "../../assets/icons/arrow-left-pink.svg";
import PERSON from "../../assets/person-images/1.jpg";
import Img from "../../components/Img";
import LINK from "../../assets/icons/link-pink.svg";
import LINKEDIN from "../../assets/icons/linked-in-pink.svg";
import TWITTER from "../../assets/icons/twitter-pink.svg";
import FACEBOOK from "../../assets/icons/facebook-pink.svg";
import IMG_3 from "../../assets/ui-fake-images/blog-1.jpg";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import SingleBlogBox from "../../components/SingleBlogBox/SingleBlogBox";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/actions/postActions";
import Spinner from "../../components/Spinner/Spinner";
import { STORAGE_URL } from "../../services/apiService";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";

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

  const { blogName } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(blogName));
  }, [dispatch]);

  const post = useSelector(state => state.post);

  if (post.post === null && post.loading)
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <div>
      {post.post && (
        <>
          <div className='articleContainer'>
            <div className='articleBackBtnContainer'>
              <Link to='/blog' className='articleBackBtn'>
                <div>
                  <Img src={ARROW} alt='Arrow' />
                </div>
                Back
              </Link>
            </div>
            {width < 600 && (
              <div className='articleAuthorMedias'>
                {/* {medias.map((media, i) => (
                  <Link key={i}>
                    <Img src={media.icon} alt={media.name} />
                  </Link>
                ))} */}
                <Link to={post.post.post.twitter_link}>
                  <Img src={TWITTER} alt={"Twitter"} />
                </Link>
              </div>
            )}
            <div className='article'>
              <p className='articleTitle'>{post.post.post[`title_${lang}`]}</p>
              <div className='articleAuthorContainer'>
                <div className='articleAuthor'>
                  <div className='articleAuthorImg'>
                    <Img
                      src={`${STORAGE_URL}/${post.post.post.author_image}`}
                      alt='Person'
                    />
                  </div>
                  <div className='articleAuthorNameContainer'>
                    <p className='articleAuthorName'>
                      {post.post.post.author_name}{" "}
                      {post.post.post.author_surname}
                    </p>
                    <p className='articleAuthorDate'>
                      11 Jan 2022 <span className='articleAuthorDateDot'></span>
                      5 min read
                    </p>
                  </div>
                </div>
                {width > 600 && (
                  <div className='articleAuthorMedias'>
                    {/* {medias.map((media, i) => (
                  <Link key={i}>
                    <Img src={media.icon} alt={media.name} />
                  </Link>
                ))} */}
                    <Link to={post.post.post.twitter_link}>
                      <Img src={TWITTER} alt={"Twitter"} />
                    </Link>
                  </div>
                )}
              </div>
              <div className='articleDescriptionContainer'>
                <p className='articleDescription'>
                  {removeHtmlTags(post.post.post[`description_${lang}`])}
                </p>
              </div>
              <div className='articleImg'>
                <Img
                  src={`${STORAGE_URL}/${post.post.post.image}`}
                  alt='Article'
                />
              </div>
              <div className='articleInfo'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,
                  <br />
                  <br />
                  <strong>Lorem Ipsum is simply dummy text</strong>
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,
                  <br />
                  <br />
                  <strong>Lorem Ipsum is simply dummy text</strong>
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,
                </p>
              </div>
              <div className='articleLine'></div>
              <div className='articleTagsContainer'>
                <p className='articleTagsTitle'>Tags :</p>
                <div className='articleTags'>
                  {post.post.post.tags.map((tag, i) => (
                    <div className='singleBlogBoxBtn' key={i}>
                      <Button text={tag[`title_${lang}`]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='portfolioSliderContainer container'>
            <Title title='Related Projects' />
            <Slider className='portfolioSlider' showArrowBtns={showArrowBtns}>
              {post.post.related_posts.map((blog, i) => (
                <div className='blogItem' key={i}>
                  <SingleBlogBox
                    className='blogSectionBlog'
                    size='small'
                    style={{
                      flexDirection: "column",
                      gap: "32px",
                    }}
                    name={blog[`title_${lang}`]}
                    description={blog[`description_${lang}`]}
                    btnText='Interior Design'
                    img={`${STORAGE_URL}/${blog.image}`}
                    to={`/blog/${blog.id}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Article;
