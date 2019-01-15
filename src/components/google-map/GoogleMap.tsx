import * as React from 'react';
import GoogleMapReact from 'google-map-react';

const googleMapConfiguration = {
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: 'places,drawing'
};

const mapDefaultCenter = {
  lat: parseFloat(process.env.REACT_APP_MAP_DEFAULT_CENTER_LAT as string),
  lng: parseFloat(process.env.REACT_APP_MAP_DEFAULT_CENTER_LNG as string)
};

interface IGoogleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom: number;
  onApiLoaded: ({ map, maps }: { map: any; maps: any }) => void;
}

export const GoogleMap: React.FunctionComponent<IGoogleMapProps> = ({
  center,
  zoom,
  onApiLoaded,
  children
}) => (
  <GoogleMapReact
    center={center}
    bootstrapURLKeys={googleMapConfiguration}
    defaultCenter={mapDefaultCenter}
    defaultZoom={zoom}
    onGoogleApiLoaded={onApiLoaded}
    yesIWantToUseGoogleMapApiInternals
  >
    {children}
  </GoogleMapReact>
);
