import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image, imageAlt, accent }: SectionProps) {
  const accentColor = accent || '#3B82F6'

  return (
    <section id={id} className="relative h-screen w-full snap-start flex items-center overflow-hidden">
      {image && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isActive ? { opacity: 0.18, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      <div className="relative z-10 w-full flex flex-col justify-center p-8 md:p-16 lg:p-24">
        {subtitle && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}

        <motion.h2
          className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold leading-[1.05] tracking-tight max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              style={{ color: accentColor, borderColor: accentColor }}
              className="bg-transparent hover:text-black transition-colors text-base px-8 py-6"
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = accentColor }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
            >
              {buttonText}
            </Button>
          </motion.div>
        )}

        <motion.div
          className="absolute bottom-8 left-8 md:left-16 lg:left-24 w-12 h-0.5"
          style={{ backgroundColor: accentColor }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isActive ? { scaleX: 1, opacity: 0.6 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  )
}
