import { useState } from "react";
import "./Tab.css";
import { BasicTable } from "./DataTable/TableUpComingCampaings";
import { TableLiveCampaigns } from "./DataTable/TableLiveCampaigns";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (num) => {
    setToggleState(num);
  };

  return (
    <div className="bloc-tabs">
      <button
        className={toggleState === 1 ? "tabOne" : "UpcomingChallenges"}
        onClick={() => toggleTab(1)}
      >
        Upcoming Campaigns
      </button>
      <button
        className={toggleState === 2 ? "tabTwo" : "LiveCampaigns"}
        onClick={() => toggleTab(2)}
      >
        Live Campaigns
      </button>
      <button
        className={toggleState === 3 ? "tabThree" : "PastCampaigns"}
        onClick={() => toggleTab(3)}
      >
        Past Campaigns
      </button>
      <div>
        {toggleState === 1 ? (
          <BasicTable />
        ) : toggleState === 2 ? (
          <TableLiveCampaigns />
        ) : (
          <BasicTable />
        )}
      </div>
    </div>
  );
}

export default Tabs;
