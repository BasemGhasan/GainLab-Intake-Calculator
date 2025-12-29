import { Variants } from 'framer-motion';

/**
 * Creates a floating animation variant for vertical (Y-axis) motion
 * @param duration - Animation duration in seconds
 * @param yOffset - Maximum vertical offset in pixels
 * @returns Framer Motion animation variant
 */
export const createFloatingAnimation = (
    duration: number = 3,
    yOffset: number = 20
): Variants => ({
    initial: {
        y: 0,
    },
    animate: {
        y: [-yOffset, yOffset, -yOffset],
        transition: {
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
});
