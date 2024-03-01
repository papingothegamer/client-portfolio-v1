import React from 'react';
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <p className={styles.headerText}> ui/ux designer</p>
      <div className={styles.bodyText}>
        <p>mariam.designs </p>
      </div>
      <div className={styles.links}>
        <a href="https://x.com/tech_sweetheart?s=21">twitter</a>
        <a href="https://www.behance.net/mhiyahyusuf">behance</a>
        <a href="https://www.instagram.com/tech.euphoria?igsh=MXBjbXlpbm8zd3V3Nw==">instagram</a>
        <a href="https://www.linkedin.com/in/mariam-yusuf">linkedin</a>
        <a href="mailto:yusufmariam400@gmail.com">mail</a>
      </div>
    </div>
  );
};

export default Header;