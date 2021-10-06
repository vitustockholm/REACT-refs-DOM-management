import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: ${(props) =>
    props.primary ? '#0000ff' : props.secondary ? '#f0f0f0' : '#0000fff'};
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
