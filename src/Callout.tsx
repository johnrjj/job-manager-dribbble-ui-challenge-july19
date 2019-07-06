import React from 'react';
import styled from 'styled-components';
import { Aperture, Plus } from 'react-feather';
import { theme, palette } from './theme';

const CalloutContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  padding: 2rem 4rem;
  overflow-x: scroll;
  background-color: ${theme.calloutContainerBackgroundColor};
  border-radius: 16px;
`;

const CalloutLeftContainer = styled.div`
  display: flex;
  flex: 1;
`;

const CalloutHeaderAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 6rem;
  margin-right: 4.5rem;
`;

const CalloutIconRowContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 2rem;
`;

const CalloutIconContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  padding: 1rem;
  border-radius: 20px;
  background-color: ${theme.calloutIconBackgroundColor};
`;

const CalloutHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  font-size: 2rem;
  font-weight: 400;
  color: ${palette.white};
  line-height: 1.25;
`;

const CalloutChooseCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.white};
  margin-right: 4.5rem;
`;

const CalloutChooseCategoryShortcutsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const CalloutRightContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-basis: 16.25rem;
`;

const CalloutCategoryHeaderText = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const CalloutCategoryBodyText = styled.div`
  font-size: 1rem;
  font-weight: 300;
  max-width: 20rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const CalloutCategoryLinkText = styled.div`
  text-decoration: underline;
`;

const CalloutTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  flex: 1;
`;

const CalloutBottomContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const CalloutShortcutImage = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 16px;

  margin-bottom: 1rem;
`;

const CalloutShortcutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;

const CalloutShortcutLabel = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
`;

const CalloutShortcut = styled.div`
  display: flex;
  height: 4rem;
  width: 4rem;
  background-color: ${palette.yellow};
  border-radius: 16px;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
`;

const VerticalDivider = styled.div`
  margin-right: 2rem;
  height: 100%;
  width: 2px;
  opacity: 0.3;
  background-color: ${palette.darkGray};
`;

const HorizontalDivider = styled.div`
  height: 2px;
  width: 100%;
  margin: 1.25rem 0;
  opacity: 0.3;
  background-color: ${palette.darkGray};
`;

const RecommendedJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  color: ${palette.white};
`;

const RecommendHeaderText = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
const RecommendedBodyText = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.8;
`;

const RecommendedJobsButtonContainer = styled.div``;
const RecommendedJobsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.yellow};
  padding: 1rem;
  font-size: 1.2;
  line-height: 1.5;
  border-radius: 16px;
  font-weight: 700;
  color: ${palette.offBlack};
`;

const Callout = () => {
  return (
    <CalloutContainer>
      <CalloutLeftContainer>
        <CalloutHeaderAndIconContainer>
          <CalloutIconRowContainer>
            <CalloutIconContainer>
              <Aperture />
            </CalloutIconContainer>
          </CalloutIconRowContainer>
          <CalloutHeaderContainer>Manager for Job</CalloutHeaderContainer>
        </CalloutHeaderAndIconContainer>
        <CalloutChooseCategoryContainer>
          <CalloutTopContainer>
            <CalloutCategoryHeaderText>Choose the category</CalloutCategoryHeaderText>
            <CalloutCategoryBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CalloutCategoryBodyText>
            <CalloutCategoryLinkText>see more</CalloutCategoryLinkText>
          </CalloutTopContainer>
          <CalloutBottomContainer>
            <CalloutChooseCategoryShortcutsContainer>
              <CalloutShortcutContainer>
                <CalloutShortcutImage
                  src={'https://img-s3.onedio.com/id-5c2cdd71360967bf13819eb5/rev-0/raw/s-e4f0c51449f5d3bdba591f51bb7b412670d7fa99.jpg'} />
                <CalloutShortcutLabel>
                  <div>

                    Creative
                  </div>
                </CalloutShortcutLabel>
              </CalloutShortcutContainer>
              <CalloutShortcutContainer>
                <CalloutShortcutImage src={'https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80'} />
                <CalloutShortcutLabel>
                  <div>

                    Clerk
                  </div>
                </CalloutShortcutLabel>
              </CalloutShortcutContainer>
              <CalloutShortcut style={{ color: palette.offBlack }}>
                <Plus />
              </CalloutShortcut>
            </CalloutChooseCategoryShortcutsContainer>
          </CalloutBottomContainer>
        </CalloutChooseCategoryContainer>
      </CalloutLeftContainer>
      <CalloutRightContainer>
        <VerticalDivider />
        <RecommendedJobsContainer>
          <RecommendHeaderText>Recommended</RecommendHeaderText>
          <RecommendedBodyText>
            Mauris quis nisl auctor velit placerat vulputate. Cras quis nulla at magna auctor
            fringilla. Sed hendrerit risus eu fringilla fermentum.
          </RecommendedBodyText>
          <HorizontalDivider />
          <RecommendedJobsButtonContainer>
            <RecommendedJobsButton>See Jobs</RecommendedJobsButton>
          </RecommendedJobsButtonContainer>
        </RecommendedJobsContainer>
      </CalloutRightContainer>
    </CalloutContainer>
  );
};

export { Callout };
