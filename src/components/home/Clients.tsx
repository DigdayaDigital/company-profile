"use client"

import { motion } from 'motion/react';

const clients = [
  { name: 'TechCorp', initial: 'TC' },
  { name: 'InnovateLabs', initial: 'IL' },
  { name: 'FutureSoft', initial: 'FS' },
  { name: 'CloudNine', initial: 'C9' },
  { name: 'DataFlow', initial: 'DF' },
  { name: 'SmartSys', initial: 'SS' },
];

export function Clients() {
  return (
    <section id="klien" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Klien Kami</h2>
          <p className="text-xl text-gray-600">Dipercaya oleh perusahaan terkemuka</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 10,
                scale: 1.1,
              }}
              className="group"
              style={{ perspective: '1000px' }}
            >
              <div
                className="bg-white rounded-[30px] p-8 flex items-center justify-center h-32 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[20px] flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">{client.initial}</span>
                  </div>
                  <p className="text-sm text-gray-600">{client.name}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}