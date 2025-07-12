import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

<MapContainer center={[-17.7833, -63.1821]} zoom={13} style={{ height: '400px' }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; OpenStreetMap contributors'
  />
  <Marker position={[-17.7833, -63.1821]}>
    <Popup>Santa Cruz de la Sierra</Popup>
  </Marker>
</MapContainer>
