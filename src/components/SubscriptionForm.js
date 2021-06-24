import { useState, useEffect } from "react";
import axios from "axios";
import ClusterConfig from "./ClusterConfig";
import Confirmation from "./Confirmation";
import PaymentForm from "./PaymentForm";

export default function SubscriptionForm({
  step,
  handleChange,
  subscriptionValues,
}) {
  const [cloudStoragePrices, setCloudStoragePrices] = useState({});

  let [gbPrice, setGbPrice] = useState(0);

  let [finalPrice, setFinalPrice] = useState(0);

  const fetchCloudStoragePrices = async () => {
    try {
      const res = await axios.get(
        "https://cloud-storage-prices-moberries.herokuapp.com/prices"
      );
      setCloudStoragePrices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrice = () => {
    let { subscription_plans } = cloudStoragePrices;

    switch (subscriptionValues.duration) {
      case 3:
        setGbPrice(subscription_plans[0].price_usd_per_gb);
        break;

      case 6:
        setGbPrice(subscription_plans[1].price_usd_per_gb);
        break;

      case 12:
        setGbPrice(2);
        // setGbPrice(subscription_plans[2].price_usd_per_gb);
        break;
    }

    if (subscriptionValues.upFrontPayment === true) {
      let discount = ((subscriptionValues.gbAmount * gbPrice) / 100) * 10;
      let total = subscriptionValues.gbAmount * gbPrice - discount;
      setFinalPrice(total);
    } else {
      setFinalPrice(subscriptionValues.gbAmount * gbPrice);
    }
  };

  useEffect(() => {
    fetchCloudStoragePrices();
  }, []);

  useEffect(() => {
    handlePrice();
  }, [subscriptionValues, cloudStoragePrices]);

  switch (step) {
    case 0:
      return (
        <ClusterConfig
          handleChange={handleChange}
          finalPrice={finalPrice}
          subscriptionValues={subscriptionValues}
        />
      );
    case 1:
      return (
        <PaymentForm
          finalPrice={finalPrice}
          handleChange={handleChange}
          subscriptionValues={subscriptionValues}
        />
      );
    case 2:
      return (
        <Confirmation
          gbPrice={gbPrice}
          finalPrice={finalPrice}
          handleChange={handleChange}
          subscriptionValues={subscriptionValues}
        />
      );
  }
}
