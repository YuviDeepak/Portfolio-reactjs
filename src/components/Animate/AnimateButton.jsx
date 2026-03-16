import { easeInOut, motion, transform } from 'motion/react'
import React from 'react'

const AnimateButton = ({children}) => {
    const buttonvarient={
        hidden:{
            opacity:0,
            scale:0
        },
        show:{
            opacity:1,
            scale:1
        }
    }
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={buttonvarient}
    viewport={{once:true}}
    transition={{ duration: 1 ,delay:0.1,ease:easeInOut}}
    >
        {children}
    </motion.div>
   
  )
}

export default AnimateButton