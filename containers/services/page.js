import TextAndImage from "@/components/services/text-and-image/page";
import styles from "./services.module.css";

import manOnPc from "@/public/services/manOnPc.svg";
import advancedTechnologies from "@/public/services/advancedTechnologies.svg";
import digitalUpgrade from "@/public/services/digitalUpgrade.svg";
import dataAnalysis from "@/public/services/dataAnalysis.svg";
import uiUxDesign from "@/public/services/uiUxDesign.svg";
import devOps from "@/public/services/devOps.svg";
import Banner from "@/components/banner/page";

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <Banner
        header="Services"
        description="Unlock your business's full potential with Developia's cutting-edge services."
      />
      <TextAndImage
        title={"Software Development"}
        description={"Transforming ideas into reality through code"}
        imageSrc={manOnPc}
      />
      <TextAndImage
        title={"Advanced technologies"}
        description={"Innovative solutions for complex problems"}
        imageSrc={advancedTechnologies}
        isImageRight={false}
      />

      <TextAndImage
        title={"Digital Upgrade"}
        description={"Elevating businesses to the digital age"}
        imageSrc={digitalUpgrade}
      />
      <TextAndImage
        title={"Data Analysis"}
        description={"Unlocking insights for informed decision-making"}
        imageSrc={dataAnalysis}
        isImageRight={false}
      />

      <TextAndImage
        title={"UI/UX Design and Prototype"}
        description={"Creating user-centered experiences that delight"}
        imageSrc={uiUxDesign}
      />
      <TextAndImage
        title={"DevOps"}
        description={"Building and deploying software at lightning speed"}
        imageSrc={devOps}
        isImageRight={false}
      />
    </div>
  );
}
