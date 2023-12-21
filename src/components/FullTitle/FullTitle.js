import Title from "../Title/Title";
import Button from "../Button/Button";
import "./style.css";
import { useTranslation } from "react-i18next";

const FullTitle = ({
  btnStyle,
  className,
  title,
  desc,
  btnLink,
  withoutBtn,
  to,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${className} ${
        withoutBtn && "fullTitleContainerWithoutBtn"
      } fullTitleContainer`}>
      <div className='fullTitle'>
        <Title title={title} />
        <p
          className='fullTitleDesc'
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
      {!withoutBtn && (
        <div className='fullTitleBtn'>
          <Button
            text={t("view-more")}
            style={btnStyle}
            link={btnLink}
            to={to}
          />
        </div>
      )}
    </div>
  );
};

export default FullTitle;
