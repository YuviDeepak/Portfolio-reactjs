import React from 'react'
import { easeInOut, motion, transform } from 'motion/react'
const AnimateAsideChild = ({children}) => {
    const asidechild={
        hidden:{
            opacity:0,
            x:-30
        },
        show:{
            opacity:1,
            x:0
        }
    }
  return (
    <motion.div
    variants={asidechild}
    >
        {children}
    </motion.div>
  )
}

export default AnimateAsideChild