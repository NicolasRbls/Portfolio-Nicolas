export const fadeUp = (delay=0) => ({
  initial: { y: 16, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { delay, duration: .5 }
});
