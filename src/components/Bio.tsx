import React from 'react';
import styles from '../styles/bio.module.css';

const Bio: React.FC = () => {
  return (
    <div className={styles.bio}>
      <p className={styles.bioText}>
      Hi. I'm Mariam, and I'm a passionate designer with a knack for creating awesome user experiences. With expertise in UI/UX, product, and content design, I love crafting seamless and captivating designs. I have over three years of experience in the design and media industry, and I'm all about creatively solving problems and driving innovation while keeping things fun and user-friendly. Projects I have worked on and am currently working on are linked below for your viewing. Let's create something amazing together!
      </p>
      <div className={styles.resumeLink}>
      <a href="/pdf/MARIAM YUSUF RESUME.pdf" target="_blank" rel="noopener noreferrer">
        <svg className={styles.resumeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 2v20h14V8.832L13.168 2H5zM7 4h4v2H7V4zm6 11v2h6v-2h-6zm0 4v2h6v-2h-6zM7 8h10v1H7V8zm0 2h10v1H7V10zm0 2h6v1H7v-1z" fill="currentColor"/>
        </svg>
        View my resume.
      </a>
    </div>
    </div>
  );
};

export default Bio;