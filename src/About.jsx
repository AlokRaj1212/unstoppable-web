import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 text-center px-6"
            data-aos="fade-up"
        >
            <h2
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient"
                data-aos="fade-down"
            >
                About Us
            </h2>
            <p
                className="max-w-3xl mx-auto text-gray-300 text-lg"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                We are Unstopable — a creative team of web developers, data analysts, and digital growth experts.
                We build powerful digital experiences that help businesses grow online. Our team specializes in modern web development, e-commerce solutions, portfolio websites, agricultural-tech platforms, data analytics, and digital marketing strategies.

                With strong expertise in HTML, CSS, JavaScript, React.js, Node.js, MS SQL, BI tools, and automation platforms, we deliver clean, responsive, and high-performing websites tailored to client needs.

                Beyond development, we help brands scale their digital presence through Facebook & Instagram ads, Meta Ads Campaigns, Google AdSense setups, and high-engagement reel content creation.

                At Unstopable, we believe in creativity, teamwork, and continuous innovation.
                Our mission is simple: build digital solutions that are user-friendly, scalable, and designed to create real impact.

                Whether you’re a startup, a business owner, or a creator —
                we turn your ideas into reality with strategy, design, development, and digital growth under one roof.
            </p>
        </section>

    );
};

export default About;
