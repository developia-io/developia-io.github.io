import styles from "./get-in-touch.module.css";
import Image from "next/image";
import phone from "@/public/get-in-touch/fa-phone.png";
import mail from "@/public/get-in-touch/fa-envelope.png";

export default function GetInTouchPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className="title">Get In Touch</h1>
          <div className={styles.description}>
            We appreciate each customer. Let us know if you have anything to
            share!
          </div>
          <div className={styles.content}>
            <div className={styles.information}>
              <Image src={phone} alt="phone" width={15} />
              <div className={styles.address}>+ 532 111 11 11</div>
            </div>
            <div className={styles.information}>
              <Image src={mail} alt="mail" width={15} />
              <div className={styles.address}>developia@mail.com</div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.map}>
            <h2 style={{ color: "#1E0E62" }}>Find Us On Map</h2>
            <div className={styles.description}>Developia Address</div>
            <iframe
              width="500"
              height="200"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBIKk3uRcRxfiCP5-Nzz_5PA7GdAbf6dOY
      &q=Dogus+Teknoloji,Istanbul+Maslak"
            ></iframe>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className="title">You Can Mail Us</h1>
          <div className={styles.description}>
            We are always looking for a next great project.
          </div>
          <form
            action="mailto:oruchan.asar@gmail.com"
            method="post"
            enctype="text/plain"
            className={styles.form}
          >
            <div className={styles.element}>
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className={styles.element}>
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="7"
                placeholder="Drop us a line"
              />
            </div>
            <div className={styles.element}>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
              <input type="submit" value="Send" className={styles.submit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
