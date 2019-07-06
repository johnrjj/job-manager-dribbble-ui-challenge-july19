import React from 'react';
import styled from 'styled-components';
import { Mail, Calendar, PieChart, Sliders } from 'react-feather';
import { theme, palette } from './theme';

const NavigationTabsContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 3.5rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.tabNavigationBackgroundColor};
  height: 90px;
  max-height: 90px;
  padding: 0 82px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const NavigationTab: React.FC<{ active?: boolean }> = ({ children, active }) => {
  return (
    <NavigationTabContainer>
      <div>{children}</div>
      {active && <div style={{ fontSize: '2rem' }}>•</div>}
    </NavigationTabContainer>
  );
};

const NavigationTabContainer = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

const NavigationTabFilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${palette.yellow};
  width: 7.5rem;
  height: 3rem;
`;

const Navigation: React.FC<{}> = () => {
  return (
    <NavigationTabsContainer>
      <NavigationTab active>
        <div>Home</div>
      </NavigationTab>
      <NavigationTab>
        <Mail />
      </NavigationTab>
      <NavigationTab>
        <Calendar />
      </NavigationTab>
      <NavigationTab>
        <PieChart />
      </NavigationTab>
      <NavigationTab>
        <NavigationTabFilterButton>
          <Sliders size={16} style={{ marginRight: '12px' }} /> Filter
        </NavigationTabFilterButton>
      </NavigationTab>
    </NavigationTabsContainer>
  );
};

export { Navigation };
