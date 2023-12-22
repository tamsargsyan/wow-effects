import { Fragment, useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import "./style.css";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const contents = [
    {
      id: 1,
      name: "Heading 1",
    },
    {
      id: 1,
      name: "Heading 2",
    },
    {
      id: 1,
      name: "Heading 3",
    },
    {
      id: 1,
      name: "Heading 4",
    },
  ];

  const [id, setId] = useState(0);

  return (
    <div>
      <div className='privacyPolicyContainer'>
        <div className='privacyPolicyTitleContainer'>
          <p className='privacyPolicyTitle'>{t("privacy_policy")}</p>
          <p className='privacyPolicyDescription'>
            Effective date: April 3, 2023
          </p>
        </div>
        <div className='privacyPolicyDetails'>
          <div className='privacyPolicyTableContentsContainer'>
            <p className='privacyPolicyTableContentsTitle'>Table of contents</p>
            <div className='privacyPolicyTableContents'>
              {contents.map((content, i) => (
                <Fragment key={i}>
                  <Button
                    link={true}
                    onClick={e => {
                      e.preventDefault();
                      setId(i);
                    }}
                    to='sign-up'
                    text={content.name}
                    style={{
                      backgroundColor:
                        id === i ? "var(--main-color-pink)" : "transparent",
                      border: "none",
                      fontFamily: "Poppins-600, sans-serif",
                      fontWeight: "600",
                      borderRadius: "var(--main-border-radius)",
                      color: "var(--secondary-color-white)",
                      display: "block",
                      textAlign: "center",
                      width: "fit-content",
                      transition: "0.3s ease",
                    }}
                    className='privacyPolicyHeaderBtn'
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className='privacyPolicyDetailsDescription'>
            <div className='articleInfo'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
                <br />
                <br />
                <strong>Lorem Ipsum is simply dummy text</strong>
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
                <br />
                <br />
                <strong>Lorem Ipsum is simply dummy text</strong>
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
