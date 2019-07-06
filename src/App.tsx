import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Callout } from './Callout';
import { Content } from './Content';
import { Navigation } from './Navigation';
import { Sidebar } from './Sidebar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const MainContainer = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Scrollable = styled.div`
  overflow-y: scroll;
  max-height: 100%;
  padding: 4rem 3.5rem 0;
`;

function App() {
  return (
    <AppContainer>
      <MainContainer>
        <Scrollable>
          <Header />
          <Callout />
          <Content />
        </Scrollable>
        <Navigation />
      </MainContainer>
      <Sidebar />
    </AppContainer>
  );
}

export default App;
