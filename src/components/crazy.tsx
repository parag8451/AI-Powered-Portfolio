'use client';

import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Crazy = () => {
  return (
    <motion.div
      className="mx-auto w-full text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-semibold text-transparent dark:from-blue-400 dark:to-purple-400 md:text-4xl">
          The Bot That Started It All
        </h2>
      </div>
      <motion.div
        className="flex items-center justify-center rounded-xl border border-purple-200/30 bg-gradient-to-br from-purple-50/50 to-blue-50/50 p-6 dark:border-purple-500/10 dark:from-purple-950/30 dark:to-blue-950/30"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Bot className="h-20 w-20 text-purple-600 dark:text-purple-400" />
      </motion.div>
      <p className="mt-4 text-muted-foreground">
        This portfolio is my answer.
      </p>
    </motion.div>
  );
};

export default Crazy;