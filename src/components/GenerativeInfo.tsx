// "use client";
//
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Icon } from "@iconify/react";
//
// export default function GenerativeInfo() {
//   const [isOpen, setIsOpen] = useState(false);
//
//   return (
//     <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
//       <div className="relative">
//         {/* Main Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setIsOpen(!isOpen)}
//           onMouseEnter={() => setIsOpen(true)}
//           onMouseLeave={() => setIsOpen(false)}
//           className="px-6 h-12 flex items-center justify-center bg-primary/[0.1] hover:bg-primary/[0.2] border border-primary/30 backdrop-blur-2xl rounded-full shadow-2xl transition-all duration-300 group"
//           aria-label="What is Generative UI?"
//         >
//           <span className="text-sm font-bold tracking-tighter text-primary group-hover:text-white transition-colors duration-300">
//             GenUI
//           </span>
//         </motion.button>
//
//         {/* Explanation Bubble */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, x: -20, y: -10 }}
//               animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, x: -20, y: -10 }}
//               transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
//               className="absolute bottom-20 right-0 w-72 md:w-80 p-5 bg-card/80 border border-border backdrop-blur-2xl rounded-2xl shadow-3xl origin-bottom-right"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
//                   <Icon icon="solar:star-ring-bold-duotone" className="text-primary text-lg" />
//                 </div>
//                 <h3 className="font-semibold text-white tracking-tight text-sm">
//                   What is Generative <span className="text-primary font-bold">UI</span>?
//                 </h3>
//               </div>
//
//               <p className="text-xs text-muted leading-relaxed">
//                 Generative <span className="text-primary font-bold">UI</span> is a paradigm shift in design where interfaces are
//                 <span className="text-white font-medium"> dynamic, not static</span>.
//                 Elements are synthesized and adapted in real-time by AI to perfectly match your context, intent, and goals.
//               </p>
//
//               <div className="mt-4 pt-4 border-t border-white/5">
//                 <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold">
//                   Powered by Intelligence
//                 </span>
//               </div>
//
//               {/* Decorative Tip */}
//               <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card/80 border-b border-r border-border rotate-45" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
