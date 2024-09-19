import FaqConponent from "../components/FAQs/FaqConponent";
import OtherServices from "../components/ServiceComponents/OtherServices";
import ServiceHero from "../components/ServiceComponents/ServiceHero";
import React from "react";

function ServicePage() {
  return (
    <div>
      <div>
        <ServiceHero />
      </div>
      <div>
        <OtherServices />
      </div>
      <div>
        <FaqConponent />
      </div>
    </div>
  );
}

export default ServicePage;
