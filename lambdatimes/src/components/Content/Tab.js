import React from 'react';
import pt from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let { selectTabHandler, selectedTab, tab } = props;

  return (
    <div
      className={`tab${selectedTab === tab ? ' actvie-tab' : ''}`}
      onClick={() => {
        selectTabHandler(tab);
      }}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: pt.func,
  selectedTab: pt.String,
  tab: pt.String,
}

export default Tab;
