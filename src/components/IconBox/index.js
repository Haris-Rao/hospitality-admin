'use client';
import React from 'react';
import styles from './IconBox.module.css';

const IconBox = ({ icon, text, href, className }) => {
  const content = (
    <div className={`${styles.iconBox} ${className || ''}`}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );

  return href ? (
    <a href={href} className={styles.link}>
      {content}
    </a>
  ) : (
    content
  );
};

export default IconBox; 
