import { motion } from "framer-motion";

export default function Basketball() {
  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(253, 224, 71 , 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(253, 224, 71, 0.1)",
    },
  };
  return (
    <>
      {" "}
      <motion.svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="120px"
        width="120px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="m256 233.37 34.45-34.45a207.08 207.08 0 0 1-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 0 0 120.67 98zm57.14-57.14L391.33 98A207.07 207.07 0 0 0 273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0 0 40.78 112.56zm22.63 22.63a175.25 175.25 0 0 0 112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 0 0 414 120.67zM176.23 313.14a175.23 175.23 0 0 0-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0 0 98 391.33zM256 278.63l-34.45 34.45a207.08 207.08 0 0 1 50.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 0 0 391.33 414zm192.33-6.96a207.08 207.08 0 0 1-135.25-50.12L278.63 256 414 391.33a207.09 207.09 0 0 0 49.39-120.2c-5.01.35-10.02.54-15.06.54zM233.37 256 98 120.67a207.06 207.06 0 0 0-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 0 1 135.25 50.12zm-112.7 158A207.07 207.07 0 0 0 239 463.2q.63-7.35.64-14.87a175.23 175.23 0 0 0-40.81-112.56z"
          variants={svgIconVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            },
            fill: {
              duration: 2,
              ease: "easeIn",
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            },
          }}
        ></motion.path>
      </motion.svg>
    </>
  );
}
