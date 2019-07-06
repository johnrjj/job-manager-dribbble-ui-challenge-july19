import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';
import { Menu, Search, ChevronDown } from 'react-feather';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const HeaderMenuButtonContainer = styled.div``;

const HeaderSearchContainer = styled.div`
  display: flex;
  flex-basis: 36rem;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.headerSearchContainerBackgroundColor};
  padding: 1rem 1.5rem;
  border-radius: 16px;
`;

const HeaderSearchIconContainer = styled.div`
  margin-right: 1rem;
`;

const HeaderSearchSearchSubContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const HeaderSearchInputContainer = styled.div`
  color: ${theme.searchGrayFontColor};
`;

const HeaderSearchFilterSubContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSearchFilterChevronContainer = styled.div`
  margin-right: 1rem;
`;

const VerticalGrayDivider = styled.div`
  height: 1.5rem;
  width: 1px;
  background-color: ${theme.grayDivider};
  margin-right: 32px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderMenuButtonContainer>
        <Menu />
      </HeaderMenuButtonContainer>
      <HeaderSearchContainer>
        <HeaderSearchSearchSubContainer>
          <HeaderSearchIconContainer>
            <Search />
          </HeaderSearchIconContainer>
          <HeaderSearchInputContainer>Search job</HeaderSearchInputContainer>
        </HeaderSearchSearchSubContainer>
        <HeaderSearchFilterSubContainer>
          <VerticalGrayDivider />
          <HeaderSearchFilterChevronContainer>
            <ChevronDown />
          </HeaderSearchFilterChevronContainer>
          All Countries
        </HeaderSearchFilterSubContainer>
      </HeaderSearchContainer>
    </HeaderContainer>
  );
};

export { Header };
