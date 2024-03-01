import React from 'react';
import styles from '../styles/estility.module.css';

const Estility: React.FC = () => {
    return (
      <div className={styles.estility}>
        <a href="#">
          <svg className={styles.externalLinkIcon} viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2.5" x2="20" y2="2.5" stroke="white" strokeWidth="5"/>
            <line x1="17.5" y1="23" x2="17.5" y2="5" stroke="white" strokeWidth="5"/>
          </svg>
        </a>
        <h3 className={styles.headerText}> Estility</h3>
        <p className={styles.bodyText}> coming soon.</p>
      </div>
    );
  };

export default Estility;