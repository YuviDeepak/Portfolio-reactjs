import React from 'react'
import { easeInOut, motion } from 'motion/react'
const AnimateTitle = ({children}) => {
    const titlevarient={
        hidden:{
            opacity:0,
            x:60
        },
        show:{
            opacity:1,
            x:0
        }
    }
  return (
   <motion.div
   variants={titlevarient}
   initial="hidden"
   whileInView="show"
   viewport={{once:true}}
   transition={{ duration: 1 ,delay:0.2,ease:easeInOut}}
   >
    {children}
   </motion.div>
  )
}

export default AnimateTitle