import Image from "next/image";
import styles from "./about-us.module.css";
import OurTeam from "@/components/about-us/our-team/page";
import team from "@/public/about-us/team.png";
import Chapters from "@/components/about-us/chapters/page";
import Banner from "@/components/banner/page";
import chapters from "@/public/about-us/chapters/chapters";
import icons from "@/public/about-us/icons/icons";

export default function AboutUsPage() {
  return (
    <div className={styles.home}>
      <Banner
        header="About Us"
        description="Empowering your journey towards success with innovative solutions."
      />
      <OurTeam />
      <Image src={team} alt="team" className={styles.team_img} />
      <div className={styles.chapters}>
        <h1 className="title">Our Chapters</h1>
        <Chapters
          isImageOnLeft={false}
          imageSrc={chapters[0]}
          icon1={icons[1]}
          icon2={icons[0]}
          title1="ARCHITECTURE"
          title2="DESIGN"
          text1="We utilize the latest technologies to create reliable and efficient systems that can adapt to your evolving business needs."
          text2="Our design chapter specializes in creating visually stunning and user-friendly interfaces that truly impress."
        />
        <Chapters
          imageSrc={chapters[1]}
          icon1={icons[2]}
          icon2={icons[3]}
          title1="PRODUCT OWNER"
          title2="DEVOPS"
          text1="Our product owner chapter is responsible for ensuring that your product meets the highest standards of quality and usability."
          text2="We use industry-standard tools and practices to build, test, and deploy your software efficiently and securely."
        />
        <Chapters
          isImageOnLeft={false}
          imageSrc={chapters[2]}
          icon1={icons[5]}
          icon2={icons[4]}
          title1="STRATEGIC"
          title2="EDUCATION"
          text1="Our strategic chapter is committed to providing you with the strategic guidance and support you need to achieve your business goals."
          text2="For a better development process, we continually arrange educations for our team."
        />
      </div>
    </div>
  );
}
