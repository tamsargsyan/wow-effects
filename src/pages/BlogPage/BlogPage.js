import { Fragment, useEffect } from "react";
import SingleBlogBox from "../../components/SingleBlogBox/SingleBlogBox";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import { animate, initial } from "../../utils/transition";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../redux/actions/blogActions";
import Spinner from "../../components/Spinner/Spinner";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { STORAGE_URL } from "../../services/apiService";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const blog = useSelector(state => state.blog);

  if (blog.blog === null && blog.loading)
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div initial={initial} animate={animate}>
      {blog.blog && (
        <>
          <div className='blogPageContainer'>
            <div className='blogPageOverviewContainer'>
              <div className='overviewLargeBlogContainer'>
                <SingleBlogBox
                  className='overviewLargeBlog'
                  size='large'
                  style={{
                    flexDirection: "column",
                    gap: "32px",
                  }}
                  name={blog.blog.posts_in_blog[0][`title_${lang}`]}
                  description={removeHtmlTags(
                    blog.blog.posts_in_blog[0][`description_${lang}`]
                  )}
                  img={`${STORAGE_URL}/${blog.blog.posts_in_blog[0].image}`}
                  btnText='Custom furniture production'
                  to={`/blog/${blog.blog.posts_in_blog[0].id}`}
                />
              </div>
              <div className='overviewSmallBlogs'>
                {blog.blog.posts_in_blog.slice(0, 3).map((blog, i) => (
                  <Fragment key={i}>
                    <SingleBlogBox
                      className='overviewSmallBlog'
                      size='small'
                      style={{
                        flexDirection: "row",
                        gap: "16px",
                      }}
                      name={blog[`title_${lang}`]}
                      description={removeHtmlTags(blog[`description_${lang}`])}
                      img={`${STORAGE_URL}/${blog.image}`}
                      btnText='Interior Design'
                      to={`/blog/${blog.id}`}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className='blogPageSections'>
              <p className='blogPageSectionTitle'>{t("latest_blog")}</p>
              <div className='blogPageSectionBlogs'>
                {blog.blog.latest_posts.map((blog, i) => (
                  <Fragment key={i}>
                    <SingleBlogBox
                      className='blogSectionBlog'
                      size='small'
                      style={{
                        flexDirection: "column",
                        gap: "32px",
                      }}
                      name={blog[`title_${lang}`]}
                      description={removeHtmlTags(blog[`description_${lang}`])}
                      img={`${STORAGE_URL}/${blog.image}`}
                      btnText='Custom furniture production'
                      to={`/blog/${blog.id}`}
                    />
                  </Fragment>
                ))}
                {/* <Button
                  className='seeMoreBtn'
                  text='See More'
                  link={false}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "rgba(255, 255, 255, 0.60)",
                    marginTop: "48px",
                    width: "100%",
                  }}
                /> */}
              </div>
            </div>
            <div className='blogPageSections'>
              <p className='blogPageSectionTitle'>{t("category_name")}</p>
              <div className='blogPageSectionBlogs'>
                {blog.blog.post_categories_with_posts.map((blog, i) => (
                  <Fragment key={i}>
                    <SingleBlogBox
                      className='blogSectionBlog'
                      size='small'
                      style={{
                        flexDirection: "column",
                        gap: "32px",
                      }}
                      name={blog[`title_${lang}`]}
                      description={removeHtmlTags(blog[`description_${lang}`])}
                      img={`${STORAGE_URL}/${blog.image}`}
                      btnText='Custom furniture production'
                      to={`/blog/${blog.id}`}
                    />
                  </Fragment>
                ))}
                {/* <Button
                  className='seeMoreBtn'
                  text='See More'
                  link={false}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "rgba(255, 255, 255, 0.60)",
                    marginTop: "48px",
                    width: "100%",
                  }}
                /> */}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </motion.div>
  );
};

export default BlogPage;
