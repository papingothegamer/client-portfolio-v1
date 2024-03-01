import React from 'react';
import styles from '../styles/taxiWay.module.css';

const TaxiWay: React.FC = () => {
    return (
      <div className={styles.taxiWay}>
        <a href="https://www.behance.net/gallery/161685669/A-Case-Study-on-Taxi-Way-%28Ride-Hailing-Mobile-App%29">
          <svg className={styles.externalLinkIcon} viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2.5" x2="20" y2="2.5" stroke="white" strokeWidth="5"/>
            <line x1="17.5" y1="23" x2="17.5" y2="5" stroke="white" strokeWidth="5"/>
          </svg>
        </a>
        <h3 className={styles.headerText}> TaxiWay Case Study</h3>
        <p className={styles.bodyText}> a case study on TaxiWay ride hailing mobile app. </p>
      </div>
    );
  };

export default TaxiWay;