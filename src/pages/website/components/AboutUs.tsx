import { motion } from 'framer-motion'

const features = [
  {
    name: 'Innovation at the Core',
    description: 'At Tozon, we push boundaries with innovative digital products that harness the power of advanced technology to create unique, transformative experiences.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'User-Centric Approach',
    description: "Every solution is thoughtfully designed to provide intuitive, practical, and accessible experiences, keeping our users' needs at the forefront.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Future-Ready Solutions',
    description: 'From augmented reality menus to AI-driven insights, our products leverage emerging technologies that adapt and evolve with a changing world, ensuring they remain relevant and useful.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function AboutUs() {
  return (
    <motion.section 
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id='about'
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            We are a visionary technology company focused on building intuitive, cutting-edge digital solutions that address real-world challenges. Our mission is to deliver accessible, impactful tools that empower people, businesses, and communities to thrive.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-lg leading-8 text-gray-600">
            We are dedicated to creating products that range from AI-powered assistance and robust security applications to augmented reality experiences and personalized digital platforms. Our solutions are designed with the future in mind, aiming to improve productivity, enhance security, and simplify the way users interact with technology.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            By focusing on these pillars, Tozon aims to shape a digital ecosystem where users can work smarter, connect deeper, and feel secure. Join us as we build a future of seamless, effective, and enriching digital experiences.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}