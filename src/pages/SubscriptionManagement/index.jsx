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

  return (
    <SideBarSkeleton>
      <div className={classes.mainContainer}>
        <PageHeader
          title="Subscription Management"
          buttonLabel="Create "
          buttonIcon={<FaPlus />}
          onClick={() => {
            setSelectedSubscription(null);
            setShowModal(true);
          }}
        />

        <div className={classes.subscriptionGrid}>
          {data?.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              data={subscription}
              onEdit={() => {
                setSelectedSubscription(subscription);
                setShowModal(true);
              }}
            />
          ))}
        </div>

        {showModal && (
          <SubscriptionDetailsModal
            show={showModal}
            setShow={setShowModal}
            data={selectedSubscription}
            onClick={() => {}}
            onDelete={() => {}}
          />
        )}
      </div>
    </SideBarSkeleton>
  );
}
