import styled from 'styled-components';

const Button = styled.button`
  padding: 0.9375rem 2rem;
  margin-bottom: 1.25rem;
  color: #343434;
  background: #e6fece;
  border: 1px solid #ededed;
  border-radius: 0;
  font-weight: 700;

  &:hover,
  &:focus {
    background-color: #cde5b5;
    border-color: #cde5b5;
    transition: all 0.5s ease;
  }
`;

export default Button;
