import { useTranslation } from "react-i18next";
import Img from "../Img";
import Title from "../Title/Title";
import "./style.css";

const AboutCompany = ({
  title,
  description,
  img,
  btn,
  bgImg,
  className,
  customer_savings,
  downloads,
  hours_saved,
  year_growth,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${className} aboutCompanyContainer`}>
      {bgImg && <Img src={bgImg} alt='Background' className='aboutCompanyBG' />}
      <div className='aboutCompanyInfo'>
        <Title title={title} className={className ? `${className}Title` : ""} />
        <p className='aboutCompanyDesc'>{description}</p>
        {customer_savings && downloads && hours_saved && year_growth && (
          <div className='aboutCountingNumbers'>
            <div className='aboutCountingNumber1'>
              <div className='customerSavings'>
                <p className='customerSavingsTitle'>${customer_savings}</p>
                <p className='customerSavingsDescription'>
                  {t("customer_savings")}
                </p>
              </div>
              <div className='hoursSaved'>
                <p className='customerSavingsTitle'>{hours_saved}m+</p>
                <p className='customerSavingsDescription'>{t("hours_saved")}</p>
              </div>
            </div>
            <div className='aboutCountingNumber2'>
              <div className='customerSavings'>
                <p className='customerSavingsTitle'>{year_growth}%</p>
                <p className='customerSavingsDescription'>{t("year_growth")}</p>
              </div>
              <div className='hoursSaved'>
                <p className='customerSavingsTitle'>{downloads}k+</p>
                <p className='customerSavingsDescription'>{t("downloads")}</p>
              </div>
            </div>
          </div>
        )}
        {btn}
      </div>
      {img && (
        <div
          className='aboutCompanyImg'
          style={{ backgroundImage: `url(${img})` }}></div>
      )}
    </div>
  );
};

export default AboutCompany;
