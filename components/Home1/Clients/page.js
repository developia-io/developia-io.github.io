import clients from "@/public/clients/clients";
import styles from "./clients.module.css";
import Image from "next/image";

export default function Clients() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className="title" style={{ color: "white" }}>
          Our Great Clients
        </h1>
        <p className={styles.description}>
          Developia has had the privilege of working with a diverse range of
          exceptional clients, including startups, established businesses, and
          everything in between. We are proud to have played a part in their
          success stories.
        </p>
      </div>
      <div className={styles.clients}>
        {clients.map((client, index) => (
          <Image src={client} alt="client" key={index} />
        ))}
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
