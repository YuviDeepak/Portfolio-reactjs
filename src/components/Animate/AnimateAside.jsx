import React from 'react'
import { easeInOut, easeOut, motion } from 'motion/react'
const AnimateAside = ({children}) => {
    const asidevarient = {
        hidden: {
        },
        show: {
            transition: {
                staggerChildren: 0.5,
                
            }
        }
    }
    return (
    <motion.div
    variants={asidevarient}
    initial="hidden"
    animate="show"
    transition={{duration:1,ease:easeOut}}
    >
        {children}
    </motion.div>
  )
}

export default AnimateAside