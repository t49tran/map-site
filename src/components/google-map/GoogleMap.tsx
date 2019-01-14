import GoogleMapReact from 'google-map-react';

const googleMapConfiguration = {
  key: process.env.GOOGLE_MAPS_API_KEY,
  libraries: 'places,drawing'
};

interface IGoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

export const GoogleMap: React.FunctionComponent<IGoogleMapProps> = ({
  center: { lat, lng },
  zoom
}) => (
  <GoogleMapReact
    bootstrapURLKeys={googleMapConfiguration}
    center={{ lat, lng }}
    zoom={zoom}
  />
);
