"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MessageSection() {
  const messages = [
    {
      id: 1,
      role: "MESSAGE FROM THE PRINCIPAL",
      name: "Milan Dixit",
      text: "Whether you visit us online or in person, we hope you will get a sense of what Rainbow academy is and the mission that drives us. We are a progressive learning community that works to educate the whole person and prepare them for life.",
      image: "/images/principal.jpg", // replace with your image path

    },
    {
      id: 2,
      role: "MESSAGE FROM THE VICE PRINCIPAL",
      name: "Shanta Dixit",
      text: "For over three decades, Rainbow academy has continuously evolved to work towards its mission of providing the best in progressive pedagogy to its children. The path has been challenging and sometimes lonely.",
      image: "/images/vice-principal.jpg", // replace with your image path
      
    },
  ];

  return (
    <section className="w-full py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              whileHover={{ y: -6 }}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden"
            >
              
             

              {/* Image */}
              <Image
                src={msg.image}
                alt={msg.name}
                width={600}
                height={400}
                className="w-full h-72 object-cover"
              />

              {/* Text Content */}
              <div className="p-6 md:p-8">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wide text-black`}
                >
                  {msg.role}
                  <span className={`ml-3 inline-block w-8 h-0.5 bg-blue-500 align-middle`} />
                </h3>

                <h2 className="text-2xl text-orange-500 font-semibold mt-2 mb-4">{msg.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{msg.text}</p>

                <Link
                  href="#"
                  className={`font-semibold text-blue-500 hover:text-blue-800 flex items-center gap-2`}
                >
                  View Detail Message →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
