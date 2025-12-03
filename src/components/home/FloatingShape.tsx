import { MotionDiv } from '@/components/motion/MotionComponents';

interface FloatingShapeProps {
  color: string;
  size: string;
  position: string;
  delay: number;
  duration: number;
}

export function FloatingShape({ color, size, position, delay, duration }: FloatingShapeProps) {
  return (
    <MotionDiv
      className={`absolute ${position} ${size} bg-linear-to-br ${color} rounded-[60px] blur-2xl opacity-60`}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      style={{
        boxShadow: '0 30px 60px rgba(255, 81, 0, 0.3)',
        transform: 'translateZ(0)',
      }}
    />
  );
}