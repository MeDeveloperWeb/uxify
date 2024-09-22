"use client";

import { useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { CheckCircle, ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Proven Results",
    description:
      "We've helped countless businesses achieve measurable growth by going online. Our solutions aren't just beautiful—they're built to convert and deliver ROI."
  },
  {
    title: "Expert Team",
    description:
      "You'll work with a dedicated team of web designers, developers, and digital strategists who have years of experience delivering top-notch solutions."
  },
  {
    title: "Data-Driven Strategy",
    description:
      "We don't rely on guesswork. Every decision we make is backed by data and analytics to ensure your website not only looks good but performs well too."
  },
  {
    title: "Fast Turnaround",
    description:
      "We know time is money. That's why we work efficiently without sacrificing quality, so you can get your business online faster than ever."
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end when your website goes live. We offer continuous support and updates to ensure your site remains optimized and secure."
  }
];

const AnimatedSphere = () => {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
  });
  return (
    <Sphere ref={mesh} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        color="#4b0082"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.2
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

const ConvincingSectionExtra = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white min-h-screen py-20 px-4 lg:px-6 overflow-hidden relative"
    >
      <ParticlesBackground />
      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Still Not Convinced?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We get it—choosing the right partner for your digital transformation
          is a big decision. Here are more reasons why working with us is the
          smart choice:
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)"
              }}
            >
              <CheckCircle className="text-green-400 mb-4 h-8 w-8" />
              <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="text-center" style={{ opacity, scale }}>
          <h3 className="text-3xl font-bold mb-6">
            Ready to Take the Next Step?
          </h3>
          <p className="text-xl mb-8">
            Let us prove how we can take your business to the next level online.
            Contact us today and let&apos;s get started!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-white text-indigo-900 font-bold py-3 px-8 rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05, backgroundColor: "#f4ff28" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today <ArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Canvas className="hidden lg:block">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default ConvincingSectionExtra;
