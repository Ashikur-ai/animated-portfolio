import React, { useState } from 'react';
import { delay, motion } from "framer-motion";

const Test = () => {
  // const [open, setOpen] = useState(false);
  const variants = {
    visible:(i)=> ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.2 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["items1", "items2", "item3", "item4"];

  return (
    <div className='course'>
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
        )
          
        )}
      </motion.ul>
    </div>
  );
};

export default Test;