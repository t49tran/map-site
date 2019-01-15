import styled from 'react-emotion';

export const TrafficMapWrapper = styled('div')`
  height: 100vh;
  width: ${({ isListOpened }: { isListOpened: boolean }) =>
    isListOpened ? 'calc(100vw - 320px)' : '100vw'};
  padding-left: ${({ isListOpened }: { isListOpened: boolean }) =>
    isListOpened ? '320px' : '0'};
`;
