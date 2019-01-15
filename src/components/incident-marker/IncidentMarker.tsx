import * as React from 'react';
import { IIncident } from 'stores/IncidentStore';
import WarningIcon from '@material-ui/icons/Warning';
import { IncidentMarkerWrapper } from './IncidentMarkerWrapper';

interface IIncidentMarkerProps {
  lat: number;
  lng: number;
  incident: IIncident;
}

export const IncidentMarker: React.FunctionComponent<IIncidentMarkerProps> = ({
  lat,
  lng,
  incident
}) => (
  <IncidentMarkerWrapper>
    <WarningIcon color="secondary" />
  </IncidentMarkerWrapper>
);
