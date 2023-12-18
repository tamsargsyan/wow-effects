import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import ContactLayout from "../ContactLayout/ContactLayout";
import Img from "../Img";
import Map from "../Map";
import LOCATION from "../../assets/icons/location-white.svg";
import { useState } from "react";

const Locations = ({ locations }) => {
  const lang = "en";

  const fixingCoords = coords => coords.map(coord => Number(coord));
  const [addresTitle, setAddressTitle] = useState(
    locations[`address_1_${lang}`]
  );

  const [coords, setCoords] = useState(
    locations.address_1_coordinates.split(", ")
  );

  return (
    <ContactLayout
      pageTitle={locations[`heading_${lang}`]}
      pageDescription={removeHtmlTags(locations[`description_${lang}`])}
      detailsChildren={
        <>
          <div className='contactDetail'>
            <div className='contactDetailIcon'>
              <Img src={LOCATION} alt='Locations' />
            </div>
            <div className='contactDetailInfo'>
              <p className='contactDetailInfoDescription'>Address</p>
              <p className='contactDetailInfoTitle'>
                {locations[`address_1_${lang}`]}
              </p>
              <button
                className='addressViewMapBtn'
                onClick={() => {
                  setCoords(locations.address_1_coordinates.split(", "));
                  setAddressTitle(locations[`address_1_${lang}`]);
                }}>
                View Map
              </button>
            </div>
          </div>
          <div className='contactDetail'>
            <div className='contactDetailIcon'>
              <Img src={LOCATION} alt='Locations' />
            </div>
            <div className='contactDetailInfo'>
              <p className='contactDetailInfoDescription'>Address</p>
              <p className='contactDetailInfoTitle'>
                {locations[`address_2_${lang}`]}
              </p>
              <button
                className='addressViewMapBtn'
                onClick={() => {
                  setCoords(locations.address_2_coordinates.split(", "));
                  setAddressTitle(locations[`address_2_${lang}`]);
                }}>
                View Map
              </button>
            </div>
          </div>
          {/* {addresses.map(detail => (
              <div className='contactDetail' key={detail.id}>
                <div className='contactDetailIcon'>
                  <Img src={detail.icon} alt={detail.title} />
                </div>
                <div className='contactDetailInfo'>
                  <p className='contactDetailInfoDescription'>{detail.title}</p>
                  <p className='contactDetailInfoTitle'>{detail.description}</p>
                  <button className='addressViewMapBtn'>View Map</button>
                </div>
              </div>
            ))} */}
        </>
      }>
      <div className='contactMap'>
        <Map coords={fixingCoords(coords)} addressTitle={addresTitle} />
      </div>
    </ContactLayout>
  );
};

export default Locations;
