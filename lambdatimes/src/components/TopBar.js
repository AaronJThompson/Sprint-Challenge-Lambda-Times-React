import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;

    >div{
      width: 100%;
      display: flex;
      justify-content: none;
      align-items: none;
      flex-direction: row;
      color: #fff;
      letter-spacing: 1px;
      padding: 0 10px;

      @media (min-width: 1280px) {
          width: 1280px;
      }
    }
`;

const StyledLeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const StyledCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;

    span {
      cursor: pointer;
      margin-right: 5%;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
`;

const StyledRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <div>
        <StyledLeftContainer>
          <span>TOPICS</span><span>SEARCH</span>
        </StyledLeftContainer>
        <StyledCenterContainer>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </StyledCenterContainer>
        <StyledRightContainer>
          <span>LOG IN</span>
        </StyledRightContainer>
      </div>
    </StyledTopBar>
  )
}

export default TopBar;