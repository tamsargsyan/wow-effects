import FullTitle from "../FullTitle/FullTitle";
import BLOG_1 from "../../assets/ui-fake-images/blog-1.jpg";
import BLOG_2 from "../../assets/ui-fake-images/blog-2.jpg";
import BLOG_3 from "../../assets/ui-fake-images/blog-3.jpg";
import BLOG_4 from "../../assets/ui-fake-images/blog-4.jpg";
import ARROW from "../../assets/icons/read-more-right.svg";
import "./style.css";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "HOW TO REACH THE TOP AND STAY THERE",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: BLOG_1,
    },
    {
      id: 2,
      title: "HOW TO REACH THE TOP AND STAY THERE",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: BLOG_2,
    },
    {
      id: 3,
      title: "HOW TO REACH THE TOP AND STAY THERE",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: BLOG_3,
    },
    {
      id: 4,
      title: "HOW TO REACH THE TOP AND STAY THERE",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: BLOG_4,
    },
  ];

  return (
    <div className='blogContainer container'>
      <FullTitle
        title='blog'
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        withoutBtn
      />
      <div className='blogsWrapper'>
        {blogs.map(blog => (
          <div className='blog' key={blog.id}>
            <div
              className='blogImg'
              style={{ backgroundImage: `url(${blog.img})` }}></div>
            <div className='blogInfo'>
              <p className='blogTitle'>{blog.title}</p>
              <p className='blogDesc'>{blog.desc}</p>
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
