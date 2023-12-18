import Title from "../Title/Title";
import ARROW from "../../assets/icons/arrow-down-white.svg";
import "./style.css";
import { useState } from "react";

const FAQ = ({ title, className, data }) => {
  const faq2 = {
    faq_main: {
      heading_en: "sfhjbk123258",
      heading_ru: "hhvuj",
      heading_am: "sfsg",
      description_en: "<p>afsdg</p>",
      description_ru: "<p>sdgg</p>",
      description_am: "<p>sgsg</p>",
      faqs: [
        {
          id: 4,
          question_en: "<p>bghgvbujfd147</p>",
          question_ru: "<p>fhgfh</p>",
          question_am: "<p>fhfghg</p>",
          answer_en: "<p>hgfhg</p>",
          answer_ru: "<p>fhgj</p>",
          answer_am: "<p>dgthut</p>",
        },
      ],
    },
  };

  const lang = "en";
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div className={`${className} faqContainer`}>
      {title && <Title title={title} />}
      <div className='accordion'>
        {(data ? data.faq_main.faqs : faq2.faq_main.faqs).map(f => (
          <div
            className={`${
              openAccordion === f.id && "accordion-item-open"
            } accordion-item`}
            id={`question${f.id}`}
            key={f.id}>
            <a
              className={`${
                openAccordion === f.id && "accordion-link-open"
              } accordion-link`}
              href={`#question${f.id}`}
              onClick={e => {
                e.preventDefault();
                openAccordion === f.id
                  ? setOpenAccordion(null)
                  : setOpenAccordion(f.id);
              }}>
              <div
                className='flex'
                dangerouslySetInnerHTML={{ __html: f[`question_${lang}`] }}
              />
              {/* <p
                  dangerouslySetInnerHTML={{ __html: f[`question_${lang}`] }}
                /> */}
              {/* </div> */}
              <div className='accordionArrow'>
                <img src={ARROW} alt='Arrow' />
              </div>
            </a>
            <div
              className='answer'
              dangerouslySetInnerHTML={{ __html: f[`answer_${lang}`] }}
            />
            {/* <p dangerouslySetInnerHTML={{ __html: f[`answer_${lang}`] }} /> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
