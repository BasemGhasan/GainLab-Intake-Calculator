"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/hero/heroVisual.module.css";
import { createFloatingAnimation } from "../../utils/animations";

const HeroVisual = () => {
  const imageSizes =
    "(max-width: 576px) 500px, (max-width: 768px) 600px, (max-width: 992px) 750px, 1000px"; // Next.js responsive sizes

  return (
    <div className={styles.visualContainer}>
      {/* Dumbbells - slower floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.dumbbells}`}
        variants={createFloatingAnimation(4, 15)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_dumbbells.png"
          alt=""
          fill // Fills parent container completely
          priority // Loads immediately (hero image)
          sizes={imageSizes} // Responsive image sizes
          style={{ objectFit: "contain" }} // Maintains aspect ratio within container
        />
      </motion.div>

      {/* Apple - medium floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.apple}`}
        variants={createFloatingAnimation(3.5, 18)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_apple.png"
          alt=""
          fill
          priority
          sizes={imageSizes}
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      {/* Bubble 1 - medium-fast floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.bubble1}`}
        variants={createFloatingAnimation(3.5, 22)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_bubbles1.png"
          alt=""
          fill
          priority
          sizes={imageSizes}
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      {/* Bubble 2 - medium-fast floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.bubble2}`}
        variants={createFloatingAnimation(3, 20)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_bubbles2.png"
          alt=""
          fill
          priority
          sizes={imageSizes}
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      {/* Bubble 3 - slowest floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.bubble3}`}
        variants={createFloatingAnimation(3.5, 16)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_bubbles3.png"
          alt=""
          fill
          priority
          sizes={imageSizes}
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </div>
  );
};

export default HeroVisual;
