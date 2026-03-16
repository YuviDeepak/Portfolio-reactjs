import React from 'react'
import { easeInOut, motion, transform } from 'motion/react'
const AnimateCardParent = ({children}) => {
    const cardParentvarient = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.5
            }

        }
    }
    return (
        <motion.div
        variants={cardParentvarient}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        >
            {children}
        </motion.div>
    )
}

export default AnimateCardParent