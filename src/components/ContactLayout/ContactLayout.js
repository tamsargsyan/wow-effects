import PagesTitle from "../Title/PagesTitle";
import "./style.css";

const ContactLayout = ({
  pageTitle,
  pageDescription,
  children,
  detailsChildren,
}) => {
  return (
    <div className='contactLayoutContainer'>
      <div className='containerLayout1'>
        <PagesTitle
          style={{ flexDirection: "column", gap: "24px", padding: 0 }}
          title={pageTitle}
          description={pageDescription}
        />
        <div className='contactDetails'>{detailsChildren}</div>
      </div>
      <div className='containerLayout2'>{children}</div>
    </div>
  );
};

export default ContactLayout;
