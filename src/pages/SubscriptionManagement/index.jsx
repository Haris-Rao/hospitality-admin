import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import PageHeader from "@/components/PageHeader";
import SubscriptionCard from "@/components/SubscriptionCard";
import { subscriptionData } from "@/constant/DummyData";
import SubscriptionDetailsModal from "@/modals/SubscriptionDetailsModal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import classes from "./SubscriptionManagement.module.css";

export default function SubscriptionManagement() {
  const [data, setData] = useState(subscriptionData);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditSubscription = (subscription) => {
    setSelectedSubscription(subscription);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDeleteSubscription = (subscription) => {
    console.log("Delete subscription:", subscription);
    setShowModal(false);
  };

  const handleEditSubmit = (updatedData) => {
    console.log("Edit subscription:", updatedData);
    setShowModal(false);
  };

  const handleCreateSubscription = () => {
    setSelectedSubscription(null);
    setIsEditMode(false);
    setShowModal(true);
  };

  return (
    <SideBarSkeleton>
      <div className={classes.mainContainer}>
        <PageHeader
          title="Subscription Management"
          buttonLabel="Create "
          buttonIcon={<FaPlus />}
          onClick={handleCreateSubscription}
        />

        <div className={classes.subscriptionGrid}>
          {data?.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              data={subscription}
              onEdit={() => handleEditSubscription(subscription)}
            />
          ))}
        </div>

        <SubscriptionDetailsModal
          show={showModal}
          setShow={setShowModal}
          data={selectedSubscription}
          onCreate={handleCreateSubscription}
          onEdit={handleEditSubmit}
          onDelete={handleDeleteSubscription}
          isEditMode={isEditMode}
        />
      </div>
    </SideBarSkeleton>
  );
}
