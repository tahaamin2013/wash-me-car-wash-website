import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const AnimatedText = ({ text, el: Wrapper = "p", className }: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <span aria-hidden>
        {text.split("").map((char, charIndex) => (
          <motion.span key={`${char}-${charIndex}`} className="inline-block">
            {char}
          </motion.span>
        ))}
      </span>
    </Wrapper>
  );
};
