import { css } from 'emotion';
import styled from 'react-emotion';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export const DrawerPaperClass = (isOpened: boolean) => css`
  div& {
    width: 100%;
    display: ${isOpened ? 'block' : 'none'};

    @media (min-width: 480px) {
      width: 480px;
      display: block;
    }
  }
`;

export const incidentDrawerClasses = (isOpened: boolean) => ({
  paper: DrawerPaperClass(isOpened)
});

export const IncidentListButton = styled(Button)`
  button& {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;

    @media (min-width: 480px) {
      display: none;
    }
  }
`;

export const IncidentListBackButton = styled(Fab)`
  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 2;
`;
