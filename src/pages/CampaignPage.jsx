import Button from "components/button/Button";
import Heading from "components/commom/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React from "react";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="flex items-start gap-x-6">
          <div className="h-14 w-14 rounded-full flex items-center justify-center text-white bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign
            </p>
            <a href="/" className="text-primary text-sm">
              Need and help? learn More...
            </a>
          </div>
        </div>
        <Button
          type="button"
          className="text-secondary bg-secondary bg-opacity-20"
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
