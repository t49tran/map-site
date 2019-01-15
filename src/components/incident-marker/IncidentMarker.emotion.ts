import styled, { css } from 'react-emotion';

export const IncidentMarkerCard = styled('div')`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  text-align: center;
  width: 160px;
  z-index: 2;
  padding: 16px;
`;

export const IncidentMarkerCardTitle = styled('p')`
  font-size: 14px;
  font-weight: 500;
`;

export const IncidentMarkerCardSubTitle = styled('p')`
  font-size: 12px;
`;

export const IncidentMarkerWrapper = styled('div')`
  width: 36px;
  height: 36px;
  background-color: white;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
`;

export const IncidentMarkerCardClose = css`
  position: absolute;
  top: 8px;
  right: 8px;
`;
