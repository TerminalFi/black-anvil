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
                Forging Security Excellence
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Professional penetration testing services for web, cloud, and mobile applications. 
                We identify vulnerabilities before attackers do, protecting your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Request Assessment
                </a>
                <a
                  href="#services"
                  className="inline-block bg-white hover:bg-gray-50 text-primary-700 font-medium py-3 px-8 rounded-lg border-2 border-primary-700 transition-colors duration-200"
                >
                  Our Services
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
                Comprehensive penetration testing and security assessment services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Web Application Testing
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive security assessment of web applications. Identify OWASP Top 10 vulnerabilities, 
                  business logic flaws, and authentication issues before they're exploited.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Cloud Security Assessment
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Evaluate cloud infrastructure security across AWS, Azure, and GCP. 
                  Identify misconfigurations, access control issues, and compliance gaps.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Mobile App Security
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Thorough testing of iOS and Android applications. Analyze data storage, 
                  API security, and reverse engineering vulnerabilities.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  API Security Testing
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Deep analysis of REST and GraphQL APIs. Identify authentication bypasses, 
                  authorization flaws, and data exposure vulnerabilities.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Compliance Testing
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Ensure adherence to security standards including PCI-DSS, HIPAA, SOC 2, and ISO 27001. 
                  Detailed reporting for audit and certification requirements.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3">
                  Detailed Reporting
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive reports with executive summaries, technical findings, 
                  risk ratings, and remediation guidance. Clear, actionable insights.
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
                We are a team of expert security professionals specializing in penetration testing 
                for web applications, cloud infrastructure, and mobile apps. With years of experience 
                in offensive security, we help organizations identify and remediate vulnerabilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our methodology combines industry-standard frameworks (OWASP, PTES, NIST) with real-world 
                attack scenarios. We provide actionable insights that strengthen your security posture 
                and help you stay ahead of emerging threats. From startups to enterprises, we deliver 
                thorough assessments with clear, prioritized remediation guidance.
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
                  Ready to secure your applications? Let's discuss how we can help strengthen your security posture.
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
                Forging Security Excellence
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
