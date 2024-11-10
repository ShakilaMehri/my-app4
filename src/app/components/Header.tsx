import React from "react";
import styles from "../styles/header.module.css";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

interface NavItem {
  label: string;
  link: string;
  dropdown?: Array<NavItem>;
}
const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  {
    label: "Shop",
    link: "/shop",
    dropdown: [
      { label: "All Products", link: "/shop/all" },
      { label: "Best Sellers", link: "/shop/bestsellers" },
    ],
  },
  { label: "Our Story", link: "/our-story" },
  { label: "Blog", link: "/blog" },
];

const Header = () => {
  return (
    <>
      <div className={styles.topNavbar}>
        <p>Be a piece of peace.</p>
      </div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <p>
              <span className={styles.logoSmall}> The </span>{""}
              <span className={styles.logoLarge}>ORDINARY.</span>
            </p>
          </div>

          {/* Navigation */}
          <nav className={styles.headerNav}>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <a href={item.link}>{item.label}</a>
                  {item.dropdown && (
                    <ul className={styles.dropdown}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.link}>{subItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons: Search, User, Cart */}
          <div className={styles.headerIcons}>
            <a href="/search" className={styles.icon}>
              <FaSearch />
            </a>
            <a href="/account" className={styles.icon}>
              <FaUser />
            </a>
            <a href="/cart" className={styles.icon}>
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
