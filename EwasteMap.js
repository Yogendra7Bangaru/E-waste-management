// In your map component (e.g., EwasteMap.js)
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function EwasteMap({ ewasteCenters }) {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ewasteCenters.map((center) => (
        <Marker
          key={center._id}
          position={[center.latitude, center.longitude]}
        >
          <Popup>{center.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default EwasteMap;
