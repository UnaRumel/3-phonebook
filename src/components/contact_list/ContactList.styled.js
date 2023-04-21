import styled from 'styled-components';

export const ContainerList = styled.ul`
  position: relative;
  top: 460px;
  max-width: 800px;
  width: 80%;
  /* left: 6%; */
  /* right: 6%; */
  padding: 0 6%;
  min-width: 300px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerItem = styled.li`
  padding: 6px 0;
  min-width: 300px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;
