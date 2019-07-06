import React from 'react';
import styled from 'styled-components';
import { ArrowRight, Heart, ChevronDown } from 'react-feather';
import { theme, palette } from './theme';

const ContentContainer = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5.75rem;
`;

const FilterTextContainer = styled.div`
  display: flex;
  flex: 1;
  font-size: 1.5rem;
  font-weight: 600;
`;

const FilterControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterControlContainer = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  background-color: ${props =>
    props.active ? theme.controlActiveBackgroundColor : theme.controlInactiveBackgroundColor};
  color: ${props => (props.active ? theme.controlActiveFontColor : theme.controlInactiveFontColor)};
  padding: 1rem 0;
  width: 6rem;
  border-radius: 16px;
  font-size: 0.9rem;
` as any;

export interface FilterControlProps {
  active?: boolean;
}

const FilterControl: React.FC<FilterControlProps> = ({ children, active }) => {
  return <FilterControlContainer active={active}>{children}</FilterControlContainer>;
};

const MoreDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
`;

const MoreDetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 20rem;
`;
const MoreDetailsHeaderText = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 600;
`;
const MoreDetailsBodyText = styled.div`
  font-weight: 300;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  max-width: 15rem;
`;
const MoreDetailsMoreLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline;
  font-weight: 700;
`;

const MoreDetailsRightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MoreDetailJobRowContainer = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 16px;
  background-color: ${props => (props.bgColor === 'red' ? palette.salmonPink : palette.slateBlue)};
  color: ${palette.white};
`;

const MoreDetailJobIconContainer = styled.img`
  height: 50px;
  width: 50px;
  background-color: ${palette.white};
  border-radius: 16px;
  margin-right: 22px;
`;

const MoreDetailCompanyNameContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MoreDetailPositionNameContainer = styled.div`
  display: flex;
  flex: 3;
`;

const MoreDetailJobControls = styled.div`
  display: flex;
`;

const MoreDetailJobControlFavoriteContainer = styled.div`
  margin: 0 2rem;
`;

const MoreDetailJobControlDropdownContainer = styled.div``;

export interface JobRowItemProps {
  companyName: string;
  positionName: string;
  favorited?: boolean;
  imgSrc: string;
  bgColor: 'red' | 'blue';
}

const JobRowItem: React.FC<JobRowItemProps> = ({
  companyName,
  positionName,
  favorited,
  imgSrc,
  bgColor,
}) => {
  return (
    <MoreDetailJobRowContainer bgColor={bgColor}>
      <MoreDetailJobIconContainer src={imgSrc} />
      <MoreDetailCompanyNameContainer>{companyName}</MoreDetailCompanyNameContainer>
      <MoreDetailPositionNameContainer>{positionName}</MoreDetailPositionNameContainer>
      <MoreDetailJobControls>
        <MoreDetailJobControlFavoriteContainer>
          <Heart />
        </MoreDetailJobControlFavoriteContainer>
        <MoreDetailJobControlDropdownContainer>
          <ChevronDown />
        </MoreDetailJobControlDropdownContainer>
      </MoreDetailJobControls>
    </MoreDetailJobRowContainer>
  );
};

const Content: React.FC<{}> = () => {
  return (
    <ContentContainer>
      <FilterContainer>
        <FilterTextContainer>See more vacancies</FilterTextContainer>
        <FilterControlsContainer>
          <FilterControl active={true}>Today</FilterControl>
          <FilterControl>Week</FilterControl>
          <FilterControl>Month</FilterControl>
        </FilterControlsContainer>
      </FilterContainer>
      <MoreDetailsContainer>
        <MoreDetailsLeftContainer>
          <MoreDetailsHeaderText>More Details</MoreDetailsHeaderText>
          <MoreDetailsBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lorem imperdiet.
          </MoreDetailsBodyText>
          <MoreDetailsMoreLink>
            How it works
            <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </MoreDetailsMoreLink>
        </MoreDetailsLeftContainer>
        <MoreDetailsRightContainer>
          <JobRowItem
            imgSrc="https://image.flaticon.com/teams/slug/google.jpg"
            companyName={'Google'}
            positionName={'Visual designer'}
            favorited={false}
            bgColor="red"
          ></JobRowItem>
          <JobRowItem
            imgSrc="https://user-images.githubusercontent.com/4998725/51313627-50fc6400-1a4e-11e9-8cbe-7c40cc0bfe67.jpg"
            companyName={'Slack'}
            positionName={'UX Engineer'}
            favorited={false}
            bgColor="blue"
          ></JobRowItem>
        </MoreDetailsRightContainer>
      </MoreDetailsContainer>
    </ContentContainer>
  );
};

export { Content };
