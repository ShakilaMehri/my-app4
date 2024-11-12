import React from "react";
import styles from "../styles/footer.module.css";
import { BiArrowFromLeft } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogos}>
        <img src="/images/bustle logo.webp" alt="Bustle" />
        <img src="/images/health logo.jpg" alt="Health" />
        <img src="/images/nytimes logo.png" alt="NY Times" />
        <img src="/images/BuzzFeed logo.jpg" alt="BuzzFeed" />
        <img src="/images/Huffpost logo.png" alt="HuffPost" />
      </div>
      <div className={styles.footerNewsletter}>
        <h2>Newsletter</h2>
        <p>Get the latest updates</p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Email" required />
          <button type="submit">
            <BiArrowFromLeft />
          </button>
        </form>
      </div>
      <div className={styles.footerlinks}>
        <div>
          <p>
            <strong>Shop</strong>
          </p>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Get in touch</strong>
          </p>
          <ul>
            <li>
              <a href="#">Order & General Inquiries</a>
            </li>
            <li>
              <a href="#">Mon-Fri 9 am-6 pm EST</a>
            </li>
            <li>
              <a href="#">support@ordinary.com</a>
            </li>
            <li>
              <a href="#">Toronto, Ontario</a>
            </li>
          </ul>
          </div>
          <div>
            <p>
              <strong>Brand</strong>
            </p>
            <p>
              Ordinary is a lifestyle brand offering a clean, healthy line of
              products based on organic ingredients.
            </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Site by <a href="#">Designed by Shaky</a>Powered by{" "}
          <a href="#">Shopify</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
