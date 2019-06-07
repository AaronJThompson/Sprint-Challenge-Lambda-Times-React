import React from 'react';
import Tab from './Tab';
import pt from 'prop-types';
const Tabs = props => {
  let { tabs, selectTab, selectedTab } = props;
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {
          tabs.map((tab) => {
            return (
              <Tab
                tab={tab}
                selectTabHandler={selectTab}
                selectedTab={selectedTab}
              />
            )
          })
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTab: pt.func.isRequired,
  selectedTab: pt.string.isRequired,
  tabs: pt.arrayOf(pt.string).isRequired,
}
export default Tabs;
