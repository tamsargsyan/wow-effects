import "./style.css";
import Title from "../Title/Title";
import MEMBER_1 from "../../assets/ui-fake-images/about-company-1.jpg";
import MEMBER_2 from "../../assets/ui-fake-images/meet-us-1.jpg";

const MeetUs = () => {
  const members = [
    {
      id: 1,
      name: "Name",
      last_name: "Surname",
      position: "Position",
      img: MEMBER_1,
    },
    {
      id: 2,
      name: "Name",
      last_name: "Surname",
      position: "Position",
      img: MEMBER_2,
    },
  ];

  return (
    <div className='meetUsContainer container'>
      <div className='meetUsInfo'>
        <Title title='Meet us' />
        <p className='meetUsDesc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className='meetUsMembers'>
        {members.map(member => (
          <div className='meetUsMember' key={member.id}>
            <div
              className='meetUsMemberImg'
              style={{ backgroundImage: `url(${member.img})` }}></div>
            <p className='meetUsMemberName'>
              {member.name} {member.last_name}
            </p>
            <p className='meetUsMemberPosition'>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetUs;
