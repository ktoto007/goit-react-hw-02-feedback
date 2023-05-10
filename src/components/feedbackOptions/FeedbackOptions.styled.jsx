import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 7px;
`;

export const FeedbackButton = styled.button`
  padding: 7px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #bc0022;
  color: white;
  :not(:last-child) {
    margin-right: 7px;
  }
`;
