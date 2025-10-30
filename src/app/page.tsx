import Image from 'next/image';
import ContactForm from './components/ContactForm';

/**
 * Home Page Component
 * Main portfolio page featuring hero section, services, process overview, and contact form
 * Uses coral color scheme for light mode and slate colors for dark mode
 * Includes multiple background images and smooth theme transitions
 */
export default function Home() {
  return (
    // Main container with coral/slate backgrounds that transition between themes
    <div className="min-h-screen bg-coral-50 transition-colors">
      {/* Hero Section - Full-screen intro with background image and call-to-action buttons */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coral-50 to-coral-100 transition-colors"
      >
        <div className="absolute inset-0 z-0">
          {/* Hero background image - unoptimized for static export */}
          <Image
            src="/assets/pexels-timmossholder-2432221.jpg"
            alt="Modern workspace"
            fill
            className="object-cover opacity-15"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Websites that actually
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              work
            </span>{' '}
            for you.
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            I&apos;m Zack Eddy, the developer behind Sparkline Creative. I
            design and build modern websites that help small businesses stand
            out and stay ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call-to-action button linking to contact section with smooth scroll */}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
            >
              Start Your Project
            </a>
            {/* Secondary button linking to services section */}
            <a
              href="#services"
              className="border-2 border-slate-300 text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center"
            >
              View My Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Lists what services are offered with numbered items and image */}
      <section
        id="services"
        className="py-20 px-6 bg-coral-100 transition-colors"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Here&apos;s what I can help with:
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Custom websites made from scratch
                    </h3>
                    <p className="text-slate-600">
                      Tailored solutions that perfectly match your brand and
                      business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Redesigns that bring old sites back to life
                    </h3>
                    <p className="text-slate-600">
                      Modern makeovers that improve user experience and
                      performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Performance and SEO improvements
                    </h3>
                    <p className="text-slate-600">
                      Fast-loading sites that rank well and convert visitors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Regular updates and long-term support
                    </h3>
                    <p className="text-slate-600">
                      Ongoing maintenance to keep your site secure and
                      up-to-date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Services section image - unoptimized for static export */}
              <Image
                src="/assets/pexels-energepic-com-27411-313690.jpg"
                alt="Developer workspace"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Explains the development workflow with image and step-by-step breakdown */}
      <section className="py-20 px-6 bg-coral-50 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              {/* Process section image - unoptimized for static export */}
              <Image
                src="/assets/pexels-olly-927022.jpg"
                alt="Planning and collaboration"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-80"></div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                How it all comes together:
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mb-8"></div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We&apos;ll start with a quick chat about what you need — your
                goals, audience, and style. Then I&apos;ll sketch, code, and
                test until everything feels right.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                You&apos;ll see progress the whole way, no surprises or jargon.
                Just clear communication and quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Personal introduction with skills, experience, and professional image */}
      <section
        id="about"
        className="py-20 px-6 bg-coral-100 transition-colors"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                A bit about me:
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mb-8"></div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I&apos;m Zack Eddy, a web developer with a passion for creating
                beautiful, functional websites. With years of experience in the
                industry, I understand what it takes to build sites that not
                only look great but also perform well and meet business goals.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Every project is an opportunity to solve problems creatively and
                deliver something that makes a real difference for my clients.
              </p>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                {/* About section headshot - unoptimized for static export */}
                <Image
                  src="/assets/ZackEddyHeadShot.jpg"
                  alt="Zack Eddy - Professional headshot"
                  width={400}
                  height={400}
                  className="rounded-full shadow-2xl object-cover aspect-square"
                  unoptimized
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-80"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Prominent section encouraging visitors to start a project */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you need a brand-new site or just want to improve what
            you&apos;ve got, I&apos;m here to help. Let&apos;s make something
            great together.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:Zack@sparkline.pro"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Send me an email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Contact form with multiple images and mailto functionality */}
      <section
        id="contact"
        className="py-20 px-6 bg-coral-50 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              I&apos;m excited to hear about your project! Whether you have a
              clear vision or just an idea you&apos;d like to explore,
              let&apos;s start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Image - Standalone image with rounded mask cutting off top 10% for better alignment */}
            <div>
              <div className="relative pl-4 mb-8">
                {/* Contact section image - unoptimized for static export */}
                <Image
                  src="/assets/pexels-fotios-photos-1833306.jpg"
                  alt="Get in touch"
                  width={400}
                  height={267}
                  className="rounded-2xl shadow-2xl"
                  unoptimized
                  style={{
                    maskImage:
                      'radial-gradient(ellipse 100% 90% at 50% 100%, black 0%, black 100%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 100% 90% at 50% 100%, black 0%, black 100%)',
                  }}
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-80"></div>
              </div>
            </div>

            {/* Contact Form - Moved down with more spacing for better visual balance */}
            <div className="mt-40">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Bar - Phone, email, and response promise in fixed bottom bar */}
      <div className="bg-coral-100 border-t border-coral-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">@</span>
                </div>
                <div>
                  <p className="text-slate-900 font-medium text-sm">
                    Email
                  </p>
                  <a
                    href="mailto:Zack@sparkline.pro"
                    className="text-blue-600 hover:underline"
                  >
                    Zack@sparkline.pro
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-coral-200 px-2 py-3 rounded-lg max-w-lg">
              <h4 className="text-sm font-semibold text-slate-900 mb-1">
                Quick Response Promise
              </h4>
              <p className="text-md text-slate-700">
                I typically respond to new inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
