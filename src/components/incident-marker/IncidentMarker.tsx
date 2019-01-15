import * as React from 'react';
import { IIncident } from 'stores/IncidentStore';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import {
  IncidentMarkerCard,
  IncidentMarkerWrapper,
  IncidentMarkerCardTitle,
  IncidentMarkerCardSubTitle,
  IncidentMarkerCardClose
} from './IncidentMarker.emotion';
import { Typography } from '@material-ui/core';

interface IIncidentMarkerProps {
  lat: string;
  lng: string;
  incident: IIncident;
}

export const IncidentMarker: React.FunctionComponent<IIncidentMarkerProps> = ({
  lat,
  lng,
  incident
}) => {
  const [isCardOpen, setIsCardOpen] = React.useState(false);

  const warningClickHandler = () => {
    setIsCardOpen(true);
  };

  const closeClickHandler = () => {
    setIsCardOpen(false);
  };

  return (
    <IncidentMarkerWrapper>
      <WarningIcon
        onClick={React.useCallback(warningClickHandler, [])}
        color="secondary"
      />
      {isCardOpen && (
        <IncidentMarkerCard>
          <IncidentMarkerCardTitle>
            {incident.title} - {incident.alert_type}
          </IncidentMarkerCardTitle>
          <IncidentMarkerCardSubTitle>
            {incident.description}
          </IncidentMarkerCardSubTitle>
          <CloseIcon
            onClick={closeClickHandler}
            className={IncidentMarkerCardClose}
          />
        </IncidentMarkerCard>
      )}
    </IncidentMarkerWrapper>
  );
};
