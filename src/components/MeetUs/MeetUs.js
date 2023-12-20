import "./style.css";
import Title from "../Title/Title";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { STORAGE_URL } from "../../services/apiService";
import Cookies from "js-cookie";

const MeetUs = ({ meet_us }) => {
  const lang = Cookies.get("i18next") || "en";

  return (
    <div className='meetUsContainer container'>
      <div className='meetUsInfo'>
        <Title title={meet_us[`title_${lang}`]} />
        <p className='meetUsDesc'>
          {removeHtmlTags(meet_us[`description_${lang}`])}
        </p>
      </div>
      <div className='meetUsMembers'>
        {meet_us.team_members.map(member => (
          <div className='meetUsMember' key={member.id}>
            <div
              className='meetUsMemberImg'
              style={{
                backgroundImage: `url(${STORAGE_URL}/${member.image})`,
              }}></div>
            <p className='meetUsMemberName'>
              {member[`name_${lang}`]} {member[`surname_${lang}`]}
            </p>
            <p className='meetUsMemberPosition'>{member[`position_${lang}`]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetUs;
