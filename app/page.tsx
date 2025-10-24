import Script from 'next/script';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <>
      {/* reCAPTCHA v3 Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />

      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-700 hover:text-primary-700 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-primary-700 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-primary-700 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
                Forging Digital Excellence
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We craft robust, scalable web solutions that drive business growth. 
                From concept to deployment, we build digital experiences that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="inline-block bg-white hover:bg-gray-50 text-primary-700 font-medium py-3 px-8 rounded-lg border-2 border-primary-700 transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Our Services
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Web Development
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Modern, responsive websites built with cutting-edge technologies. 
                  React, Next.js, and more to create fast, scalable applications.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  UI/UX Design
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  User-centered design that combines aesthetics with functionality. 
                  Creating intuitive interfaces that engage and delight users.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Performance Optimization
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Lightning-fast load times and seamless user experiences. 
                  We optimize every aspect for maximum performance and efficiency.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  API Development
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Robust RESTful and GraphQL APIs that power your applications. 
                  Secure, scalable, and well-documented backend solutions.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Security & Compliance
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Industry-standard security practices and compliance. 
                  Protecting your data and users with best-in-class security measures.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Consulting & Support
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Expert guidance and ongoing support for your projects. 
                  Strategic consulting to help you make the right technical decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                About Black Anvil
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a team of passionate developers and designers dedicated to creating 
                exceptional digital experiences. With years of experience in modern web 
                technologies, we transform ideas into reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach combines technical expertise with creative problem-solving, 
                ensuring every project we undertake meets the highest standards of quality 
                and performance. We believe in building lasting partnerships with our clients, 
                delivering solutions that grow with their businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-600">
                  Ready to start your project? Let's discuss how we can help bring your vision to life.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Logo className="brightness-0 invert" />
              </div>
              <p className="text-primary-300 mb-6">
                Forging Digital Excellence
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#services" className="text-primary-300 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#about" className="text-primary-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#contact" className="text-primary-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
              <p className="text-primary-400 text-sm">
                © {new Date().getFullYear()} Black Anvil. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
