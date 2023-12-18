import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ coords, addressTitle }) => {
  const mapCenter = coords;
  const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = "Map data © OpenStreetMap contributors";

  const centerIcon = L.icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={mapCenter}
      zoom={20}
      style={{ height: "100%", width: "100%", borderRadius: "inherit" }}>
      <TileLayer attribution={attribution} url={tileLayerUrl} />
      <Marker position={mapCenter} icon={centerIcon}>
        <Popup>{addressTitle}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
