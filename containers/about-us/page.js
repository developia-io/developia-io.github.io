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
          title1="ARCHITECTURE & TECHNIC"
          title2="DESIGN"
          text1="We design blueprint of the projects and relationships of the components"
          text2="We provide design solutions to our software team for a better user experience"
        />
        <Chapters
          imageSrc={chapters[1]}
          icon1={icons[2]}
          icon2={icons[3]}
          title1="PRODUCT OWNER"
          title2="DEVOPS"
          text1="We keep the communication between customer and the development team to whether implementation process goes correctly or not"
          text2="We bring teams together, maintain collaborative environment to deliver software quickly and  "
        />
        <Chapters
          isImageOnLeft={false}
          imageSrc={chapters[2]}
          icon1={icons[5]}
          icon2={icons[4]}
          title1="STRATEGIC"
          title2="EDUCATION"
          text1="She clutched the matron by the arm, and forcing her into a chair by the bedside."
          text2="For a better development process, we continually arrange educations for our team."
        />
      </div>
    </div>
  );
}
