import { cn, RenderToast } from "@/helper/HelperFunction";
import styles from "./CreditCard.module.css";
import { FaAsterisk, FaTrash } from "react-icons/fa6";

const CreditCard = ({
  cardData,
  detachCard,
  setSelectedCard,
  selectedCard,
  removeCardLoading,
  defaultCard,
}) => {
  // Define brand colors
  const brandStyles = {
    visa: styles.visaBg,
    mastercard: styles.mastercardBg,
    amex: styles.amexBg,
    discover: styles.discoverBg,
    unionpay: styles.unionpayBg,
    jcb: styles.jcbBg,
    other: styles.otherBg,
  };

  // Format the card number to show only the last 4 digits with asterisks
  const formatCardNumber = (number) => {
    const lastFour = number.slice(-4);
    return (
      <div className={styles.cardNumberWrapper}>
        {[...Array(12)].map((_, index) => (
          <FaAsterisk
            key={index}
            size={12}
            className={cn(
              styles.asterisk,
              (index + 1) % 4 === 0 && styles.asteriskMargin
            )}
          />
        ))}
        <span className={styles.lastFour}>{lastFour}</span>
      </div>
    );
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (selectedCard?.id !== cardData?.id) {
      setSelectedCard(cardData);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (cardData?.id === defaultCard?.id) {
      RenderToast({
        type: "error",
        message: "You cannot detach your current default card.",
      });
    } else if (!removeCardLoading) {
      detachCard(cardData?.id);
    }
  };

  return (
    <div
      className={cn(
        styles.creditCard,
        brandStyles[cardData?.card?.brand?.toLowerCase()] || styles.otherBg
      )}
      onClick={handleCardClick}
    >
      {/* Status pills */}
      <div className={styles.statusPills}>
        {cardData?.id === defaultCard?.id && (
          <div className={styles.pill}>Default</div>
        )}
        {cardData?.id === selectedCard?.id && (
          <div className={styles.pill}>Selected</div>
        )}
      </div>

      {/* Delete button */}
      <div className={styles.deleteButton} onClick={handleDeleteClick}>
        <FaTrash size={18} className={styles.trashIcon} />
      </div>

      {/* Brand name */}
      <div className={styles.brandName}>
        <h2>{cardData?.card?.brand?.toUpperCase()}</h2>
      </div>

      {/* Card number */}
      <div className={styles.cardNumber}>
        <div>{formatCardNumber(cardData?.card?.last4)}</div>
      </div>

      {/* Expiration date */}
      <div className={styles.expiration}>
        <div className={styles.expirationWrapper}>
          <p>Expiration Date:</p>
          <p>
            {cardData?.card?.exp_month}/{cardData?.card?.exp_year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
