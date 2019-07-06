import React from 'react';
import styled from 'styled-components';
import { Bell, MoreHorizontal, Plus, Check } from 'react-feather';
import { theme, palette } from './theme';

const SidebarContainer = styled.div`
  display: flex;
  flex-basis: 24rem;
  min-width: 24rem;
  flex-direction: column;
  width: 24rem;
  background-color: ${theme.sidebarBackgroundColor};
  padding: 4rem 0 4rem 4rem;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 100vh;
  height: 100vh;
`;

const SidebarProfileContainer = styled.div`
  padding: 0rem 4rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const SidebarProfileAlertContainer = styled.div`
  position: relative;
`;

const SideProfileAlertTopRightPosition = styled.div`
  position: absolute;
  top: -2px;
  right: -4px;
`;

const SideProfileAlertRedDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${palette.salmonPink};
  border-radius: 100%;
`;

const SideProfileAlertRedDotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  background-color: ${palette.white};
  border-radius: 100%;
`;

const SidebarProfileAlertBellContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${palette.yellow};
`;

const SidebarProfileNameContainer = styled.div`
  font-size: 1.25rem;
`;

const SidebarProfilePictureContainer = styled.div``;

const SidebarProfilePicture = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 16px;
`;

const SidebarViewMoreContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin-bottom: 3.5rem;
`;

const SidebarViewMorePrimaryDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${palette.mediumGray};
`;

const SidebarViewMoreSecondaryDivider = styled(SidebarViewMorePrimaryDivider)`
  opacity: 0.4;
`;

const SidebarViewMoreHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-direction: row;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding-right: 4rem;
`;

export interface SidebarViewMoreListItemProps {
  companyName: string;
  positionName: string;
  imgSrc: string;
}

const SidebarViewMoreListItemPrimaryText = styled.div`
  font-size: 1rem;
  margin-bottom: 12px;
`;

const SidebarViewMoreListItemSecondaryText = styled.div`
  font-size: 0.85rem;
  font-weight: 300;
`;

const SidebarViewMoreListItem: React.FC<SidebarViewMoreListItemProps> = ({
  companyName,
  positionName,
  imgSrc,
}) => {
  return (
    <SidebarViewMoreListItemContainer>
      <SidebarViewMoreListItemIconContainer>
        <SidebarViewMoreListItemIcon src={imgSrc} />
      </SidebarViewMoreListItemIconContainer>

      <SidebarViewMoreListItemDetailsContainer>
        <SidebarViewMoreListItemPrimaryText>{companyName}</SidebarViewMoreListItemPrimaryText>
        <SidebarViewMoreListItemSecondaryText>{positionName}</SidebarViewMoreListItemSecondaryText>
      </SidebarViewMoreListItemDetailsContainer>

      <SidebarViewMoreListItemActionContainer>
        <Plus />
      </SidebarViewMoreListItemActionContainer>
    </SidebarViewMoreListItemContainer>
  );
};

const SidebarViewMoreListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 2rem 0;
  padding-right: 4rem;
`;

const SidebarViewMoreListItemIconContainer = styled.div``;

const SidebarViewMoreListItemIcon = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 16px;
  background-color: ${palette.lightTurquoise};
`;

const SidebarViewMoreListItemDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 0 0 1.5rem;
`;

const SidebarViewMoreListItemActionContainer = styled.div``;

const SidebarSettingsContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex: 1;
  flex-direction: column;
`;

const SidebarSettingsHeaderContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SidebarSettingsFilterContainer = styled.div``;

const SidebarSettingsFilterHeaderContainer = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SidebarSettingsFilterControlsContainer = styled.div`
  margin-bottom: 3rem;
  padding-right: 4rem;
`;

const SidebarSettingsFilterControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SidebarSettingsFilterControlLabel = styled.div`
  font-weight: 300;
`;

const SidebarSettingsFilterControlKnobContainer = styled.div<{active: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border: 2px solid ${palette.yellow};
  border-radius: 8px;
  background-color: ${props => props.active ? palette.yellow : 'inherit'};
`;


export interface SidebarSettingsFilterControlKnobProps {
  active: boolean;
}

const SidebarSettingsFilterControlKnob: React.FC<SidebarSettingsFilterControlKnobProps> = ({
  active,
}) => {
  return (
    <SidebarSettingsFilterControlKnobContainer active={active}>
      {active && <Check size={12}/>}
    </SidebarSettingsFilterControlKnobContainer>
  )
}

const SidebarSettingsFilterApplyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  border-radius: 8px;
  background-color: ${palette.yellow};
  color: ${palette.offBlack};
  margin-right: 4rem;
  font-weight: 600;
  font-size: 0.95rem;
`;

const SidebarSettingsFilterApplyButton = styled.div``;

const Sidebar = () => {
  return (
    <SidebarContainer>
    <SidebarProfileContainer>
      <SidebarProfileAlertContainer>
        <SidebarProfileAlertBellContainer>
          <Bell size={16} />
        </SidebarProfileAlertBellContainer>
        <SideProfileAlertTopRightPosition>
          <SideProfileAlertRedDotContainer>
            <SideProfileAlertRedDot></SideProfileAlertRedDot>
          </SideProfileAlertRedDotContainer>
        </SideProfileAlertTopRightPosition>
      </SidebarProfileAlertContainer>
      <SidebarProfileNameContainer>Sung Jin-Shil</SidebarProfileNameContainer>
      <SidebarProfilePictureContainer>
        <SidebarProfilePicture src="https://randomuser.me/api/portraits/men/3.jpg" />
      </SidebarProfilePictureContainer>
    </SidebarProfileContainer>
    <SidebarViewMoreContainer>
      <SidebarViewMoreHeaderContainer>
        <div>View more</div>
        <div>
          <MoreHorizontal />
        </div>
      </SidebarViewMoreHeaderContainer>
      <SidebarViewMorePrimaryDivider />
      <SidebarViewMoreListItem
      imgSrc={'https://cdn.modlar.com/photos/9804/img/s_295_295/rey_juan_carlos_hospital_tower_detail_59c1d06ba1e4f.jpg'} 
      companyName="Gensler" 
      positionName="Economic manager" />
      <SidebarViewMoreSecondaryDivider />
      <SidebarViewMoreListItem companyName="SafeRow" positionName="Sport Manager" imgSrc={'https://images.unsplash.com/photo-1523713619122-ac8b3188e38e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ee0f4ba205ecd8acd62cf34482b29ff'} />
      <SidebarViewMoreSecondaryDivider />
      <SidebarViewMoreListItem companyName="AeCom" positionName="Product Designer" imgSrc={'https://images.unsplash.com/photo-1521089815383-cf2b2cf7f0f0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e199f431b0a1fc018b1da227f8d1fc73'} />
      <SidebarViewMoreSecondaryDivider />
    </SidebarViewMoreContainer>
    <SidebarSettingsContainer>
      <SidebarSettingsHeaderContainer>Settings</SidebarSettingsHeaderContainer>
      <SidebarSettingsFilterContainer>
        <SidebarSettingsFilterHeaderContainer>Filter by:</SidebarSettingsFilterHeaderContainer>
        <SidebarSettingsFilterControlsContainer>
          <SidebarSettingsFilterControlContainer>
            <SidebarSettingsFilterControlLabel>Date</SidebarSettingsFilterControlLabel>
            <SidebarSettingsFilterControlKnob active={true}/>
          </SidebarSettingsFilterControlContainer>
          <SidebarSettingsFilterControlContainer>
            <SidebarSettingsFilterControlLabel>
              Salary estimate
            </SidebarSettingsFilterControlLabel>
            <SidebarSettingsFilterControlKnob active={false}/>
          </SidebarSettingsFilterControlContainer>
        </SidebarSettingsFilterControlsContainer>
        <SidebarSettingsFilterApplyButtonContainer>
          <SidebarSettingsFilterApplyButton>Apply filters</SidebarSettingsFilterApplyButton>
        </SidebarSettingsFilterApplyButtonContainer>
      </SidebarSettingsFilterContainer>
    </SidebarSettingsContainer>
  </SidebarContainer>
  )
}

export {
  Sidebar,
}