import FullTitle from "../FullTitle/FullTitle";
import ARROW from "../../assets/icons/read-more-right.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import { STORAGE_URL } from "../../services/apiService";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogMain } from "../../redux/actions/blogMainActions";

const Blog = () => {
  const lang = "en";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogMain());
  }, [dispatch]);

  const blogs = useSelector(state => state.blogMain);

  return (
    <div className='blogContainer container'>
      {blogs.blogMain && (
        <>
          <FullTitle
            title={blogs.blogMain.blog_main[`heading_${lang}`]}
            desc={blogs.blogMain.blog_main[`description_${lang}`]}
            withoutBtn
          />
          <div className='blogsWrapper'>
            {blogs.blogMain.blog_main.posts.slice(0, 4).map(blog => (
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
        </>
      )}
    </div>
  );
};

export default Blog;
