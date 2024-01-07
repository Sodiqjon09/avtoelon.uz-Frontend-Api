import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AnimatedButton = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <animated.button className="btn" style={styles}>
      <span>
        <FontAwesomeIcon icon={faPlus} />
      </span>
      <span> Sotish</span>
    </animated.button>
  );
};

export default AnimatedButton;
