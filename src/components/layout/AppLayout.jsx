import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function AppLayout() {

  const location = useLocation();

  return (

    <div className="flex min-h-screen bg-[#070B14] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <TopBar />

        <main className="flex-1 overflow-hidden p-8">

          <AnimatePresence mode="wait">

            <motion.div
              key={location.pathname}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >

              <Outlet />

            </motion.div>

          </AnimatePresence>

        </main>

      </div>

    </div>

  );

}