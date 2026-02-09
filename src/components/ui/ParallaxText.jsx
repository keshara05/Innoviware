import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden w-full leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="scroller font-bold uppercase text-6xl md:text-9xl flex whitespace-nowrap flex-nowrap children:block children:mr-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900 opacity-20" style={{ x }}>
                <span className="mr-8">{children} </span>
                <span className="mr-8">{children} </span>
                <span className="mr-8">{children} </span>
                <span className="mr-8">{children} </span>
            </motion.div>
        </div>
    );
}

export default ParallaxText;
