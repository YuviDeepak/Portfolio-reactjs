import React from 'react'
import { easeInOut, motion } from 'motion/react'
export const Animate     = ({children}) => {
    const cardVarient = {
        hidden: {
            opacity: 0,
            y: 30
        },
        show: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.div
        className='ct'
            variants={cardVarient}

        >
            {children}
        </motion.div>
    )
}
