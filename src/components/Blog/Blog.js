import FullTitle from "../FullTitle/FullTitle";
// import BLOG_1 from "../../assets/ui-fake-images/blog-1.jpg";
// import BLOG_2 from "../../assets/ui-fake-images/blog-2.jpg";
// import BLOG_3 from "../../assets/ui-fake-images/blog-3.jpg";
// import BLOG_4 from "../../assets/ui-fake-images/blog-4.jpg";
import ARROW from "../../assets/icons/read-more-right.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import { STORAGE_URL } from "../../services/apiService";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";

const Blog = () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "HOW TO REACH THE TOP AND STAY THERE",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img: BLOG_1,
  //   },
  //   {
  //     id: 2,
  //     title: "HOW TO REACH THE TOP AND STAY THERE",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img: BLOG_2,
  //   },
  //   {
  //     id: 3,
  //     title: "HOW TO REACH THE TOP AND STAY THERE",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img: BLOG_3,
  //   },
  //   {
  //     id: 4,
  //     title: "HOW TO REACH THE TOP AND STAY THERE",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img: BLOG_4,
  //   },
  // ];

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

  return (
    <div className='blogContainer container'>
      <FullTitle
        title={blogs.blog_main[`heading_${lang}`]}
        desc={blogs.blog_main[`description_${lang}`]}
        withoutBtn
      />
      <div className='blogsWrapper'>
        {blogs.blog_main.posts.slice(0, 4).map(blog => (
          <div className='blog' key={blog.id}>
            <div
              className='blogImg'
              style={{
                backgroundImage: `url(${STORAGE_URL}/${blog.image})`,
              }}></div>
            <div className='blogInfo'>
              <p className='blogTitle'>{blog[`title_${lang}`]}</p>
              <p className='blogDesc'>
                {removeHtmlTags(blog[`description_${lang}`])}
              </p>
              <NavLink className='blogReadMore'>
                <p>Read more</p>
                <img src={ARROW} alt='Arrow' />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
