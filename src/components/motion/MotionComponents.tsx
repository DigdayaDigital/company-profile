"use client"

import { motion, HTMLMotionProps } from 'motion/react';

export function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}

export function MotionButton(props: HTMLMotionProps<"button">) {
  return <motion.button {...props} />;
}

export function MotionA(props: HTMLMotionProps<"a">) {
  return <motion.a {...props} />;
}

export function MotionSpan(props: HTMLMotionProps<"span">) {
  return <motion.span {...props} />;
}
