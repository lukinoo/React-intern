import React from "react";
import { motion } from "framer-motion";

export const ErrorGroup = ({ value, onChange, errors }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      />
      {errors.message && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {errors.message}
        </motion.div>
      )}
    </>
  );
};
