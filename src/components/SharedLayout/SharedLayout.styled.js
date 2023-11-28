import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid #da11a5;
  background-color: gold;

  > nav {
    display: flex;
    margin-left: 16px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #da11a5;
  }
`;
