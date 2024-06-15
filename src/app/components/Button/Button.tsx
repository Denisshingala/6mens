import React, { ReactNode } from 'react';
import styles from './Button.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCalApi } from "@calcom/embed-react";

interface ButtonProps {
  label: string | ReactNode;
  src?: string;
  className?: string; // Optional custom className
  onClick?: () => {};
}

const Button = ({ label, src = '', className = '' }: ButtonProps) => {

  const onLinkClick = async () => {
    const calPopUp = await getCalApi({ namespace: 'cal-pop' });
    calPopUp("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
  }

  return (
    <div className={`${styles.glowingWrapper} ${styles.glowingWrapperActive} mt-30 ${className}`}>
      <div className={styles.glowingWrapperAnimations}>
        <div className={styles.glowingWrapperGlow}></div>
        <div className={styles.glowingWrapperMaskWrapper}>
          <div className={styles.glowingWrapperMask}></div>
        </div>
      </div>
      <div className={styles.glowingWrapperBordersMasker}>
        <div className={styles.glowingWrapperBorders}></div>
      </div>
      <div
        data-cal-namespace="cal-pop"
        data-cal-link="6-man-info-tech/30min"
        data-cal-config='{"layout":"month_view"}'
        onClick={onLinkClick}
        className={styles.glowingWrapperButton}>
        <div className={styles.buttonText}>{label}</div>
      </div>
    </div>
  );
};

export default Button;