import { motion } from "framer-motion";

export const Overlay = ({ onClose }) => {
    return <motion.div className="w-screen h-screen fixed bg-black opacity-25 right-0 top-0 z-40" onClick={onClose}></motion.div>
}