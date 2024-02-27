import { motion } from 'framer-motion';

const MotionWrapper = ({ children }) => {
    return (
        <motion.div>
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
