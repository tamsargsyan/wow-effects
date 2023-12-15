import { Fragment } from "react";
import SingleBlogBox from "../../components/SingleBlogBox/SingleBlogBox";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import { animate, initial } from "../../utils/transition";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";

const BlogPage = () => {
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
    <motion.div initial={initial} animate={animate}>
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
              name='Blog title heading will go here'
              description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...'
              btnText='Custom furniture production'
            />
          </div>
          <div className='overviewSmallBlogs'>
            {blogs.blog_main.posts.slice(0, 3).map((post, i) => (
              <Fragment key={i}>
                <SingleBlogBox
                  className='overviewSmallBlog'
                  size='small'
                  style={{
                    flexDirection: "row",
                    gap: "16px",
                  }}
                  name={post[`title_${lang}`]}
                  // description={removeHtmlTags(post[`description_${lang}`])}
                  description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...'
                  btnText='Interior Design'
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div className='blogPageSections'>
          <p className='blogPageSectionTitle'>Latest blog posts</p>
          <div className='blogPageSectionBlogs'>
            {blogs.blog_main.posts.map((blog, i) => (
              <Fragment key={i}>
                <SingleBlogBox
                  className='blogSectionBlog'
                  size='small'
                  style={{
                    flexDirection: "column",
                    gap: "32px",
                  }}
                  name='Blog title heading will go here'
                  description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...'
                  btnText='Custom furniture production'
                />
              </Fragment>
            ))}
            <Button
              className='seeMoreBtn'
              text='See More'
              link={false}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 0.60)",
                marginTop: "48px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className='blogPageSections'>
          <p className='blogPageSectionTitle'>Category name</p>
          <div className='blogPageSectionBlogs'>
            {blogs.blog_main.posts.map((blog, i) => (
              <Fragment key={i}>
                <SingleBlogBox
                  className='blogSectionBlog'
                  size='small'
                  style={{
                    flexDirection: "column",
                    gap: "32px",
                  }}
                  name='Blog title heading will go here'
                  description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...'
                  btnText='Custom furniture production'
                />
              </Fragment>
            ))}
            <Button
              className='seeMoreBtn'
              text='See More'
              link={false}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 0.60)",
                marginTop: "48px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
