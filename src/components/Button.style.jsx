import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  margin: 3px;
  background-color: ${(props) =>
    props.primary ? '#0000ff' : props.secondary ? '#f0f0f0' : '#000fff'};
  color: ${(props) =>
    props.primary ? '#fff' : props.secondary ? '#0000ff' : '#fff'};

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
//   border: none;
//   padding: 10px 15px;

//   background-color: #f0f0f0;
//   color: #0000ff;
//   &:hover {
//     opacity: 0.85;
//     cursor: pointer;
//   }
// `;
