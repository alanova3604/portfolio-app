import { motion } from "framer-motion" // O "motion/react" según tu versión

interface EnterAnimationProps {
    children: React.ReactNode;
    duration?: number;
    tag?: keyof typeof motion | string; // Esto le dice que puede ser 'div', 'button', etc.
    className?: string;
    [x: string]: any; // Esto permite que reciba 'href', 'type', etc., sin errores
}

function EnterAnimation({
                            children,
                            duration = 0.4,
                            tag = "div",
                            className = "",
                            ...props // Recolecta todas las demás propiedades (como href o type)
                        }: EnterAnimationProps) {

    // Usamos 'as any' aquí para que TypeScript no se queje de la indexación dinámica
    const MotionTag = (motion as any)[tag] || motion.div;

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: duration,
                duration: 1,
                ease: "easeOut"
            }}
            {...props} // Pasamos el href, type, etc., al tag final
        >
            {children}
        </MotionTag>
    )
}

export default EnterAnimation;