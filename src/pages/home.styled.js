import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  list-style: none;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 60px;
`;

export const Wrapper = styled.div`
  text-decoration: none;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  max-height: 500px;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-color: gold;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  
  
  object-fit: cover;
 height:100%;
 width:100%;

  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: black;
`;
