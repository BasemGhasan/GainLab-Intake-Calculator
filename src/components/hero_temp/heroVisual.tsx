"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./heroVisual.module.css";
import { createFloatingAnimation } from "../../utils/animations";

const HeroVisual = () => {
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
          fill
          priority
          sizes="(max-width: 576px) 320px, (max-width: 768px) 400px, (max-width: 992px) 500px, 600px"
          style={{ objectFit: "contain" }}
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
          sizes="(max-width: 576px) 320px, (max-width: 768px) 400px, (max-width: 992px) 500px, 600px"
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      {/* Bubble 1 - faster floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.bubble1}`}
        variants={createFloatingAnimation(2.5, 22)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_bubbles1.png"
          alt=""
          fill
          priority
          sizes="(max-width: 576px) 320px, (max-width: 768px) 400px, (max-width: 992px) 500px, 600px"
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
          sizes="(max-width: 576px) 320px, (max-width: 768px) 400px, (max-width: 992px) 500px, 600px"
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      {/* Bubble 3 - slowest floating */}
      <motion.div
        className={`${styles.floatingImage} ${styles.bubble3}`}
        variants={createFloatingAnimation(4.5, 16)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/hero_bubbles3.png"
          alt=""
          fill
          priority
          sizes="(max-width: 576px) 320px, (max-width: 768px) 400px, (max-width: 992px) 500px, 600px"
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </div>
  );
};

export default HeroVisual;
