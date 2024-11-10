import React from "react";
import styles from "../styles/videoSection.module.css";

const VideoSection = () => {
  return (
    <div className={styles.videoSection}>
      <h3 className={styles.videoTitle}>Meet Ordinary</h3>
      <p className={styles.videoDescription}>
        Learn more about our products and how we carefully craft the essential
        oil blends.
      </p>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoFrame}
          src="/video/video1.mp4"
          title="Meet Ordinary"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
