import React, { useState } from 'react';
import { Scale, Phone, Mail, MapPin, Menu, X, ChevronRight, Users, Building, FileText, Gavel, Home, Shield, Briefcase, Award } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Corporate & Commercial Law",
    description: "Company incorporation, mergers & acquisitions, contract drafting, commercial dispute resolution, and regulatory compliance under CAMA 2020."
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Real Estate & Property Law",
    description: "Property transactions, title verification, land registration, landlord-tenant disputes, and property documentation under the Land Use Act."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Family Law",
    description: "Divorce proceedings, child custody, adoption, marriage settlements, and inheritance matters under Nigerian matrimonial laws."
  },
  {
    icon: <Gavel className="w-8 h-8" />,
    title: "Litigation & Dispute Resolution",
    description: "Civil and criminal litigation, arbitration, mediation, and representation in Nigerian courts at all levels including Supreme Court."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Immigration & Citizenship",
    description: "Work permits, residency applications, citizenship matters, and immigration compliance under Nigerian Immigration Act."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Intellectual Property",
    description: "Trademark registration, patent applications, copyright protection, and IP litigation under Nigerian IP laws."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Employment & Labour Law",
    description: "Employment contracts, wrongful termination, workplace disputes, and compliance with Nigerian Labour Act."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Estate Planning & Probate",
    description: "Will drafting, estate administration, probate matters, and succession planning under Nigerian succession laws."
  }
];

const teamMembers = [
  {
    name: "Barrister Adebayo Okonkwo",
    position: "Senior Partner & Head of Litigation",
    qualification: "BL, LLM (London)",
    experience: "25 years"
  },
  {
    name: "Mrs. Chioma Nwosu",
    position: "Partner - Corporate Law",
    qualification: "BL, LLM (Harvard)",
    experience: "18 years"
  },
  {
    name: "Barrister Ibrahim Yusuf",
    position: "Partner - Real Estate",
    qualification: "BL, LLM (Lagos)",
    experience: "20 years"
  },
  {
    name: "Mrs. Folake Adeyemi",
    position: "Senior Associate - Family Law",
    qualification: "BL, LLM (Cambridge)",
    experience: "12 years"
  }
];

const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Scale className="w-10 h-10 text-amber-500" />
          <div>
            <h1 className="text-2xl font-bold">Okonkwo & Associates</h1>
            <p className="text-xs text-amber-500">Legal Practitioners & Solicitors</p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['home', 'services', 'team', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize font-medium hover:text-amber-500 transition ${
                currentPage === page ? 'text-amber-500' : ''
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pb-4">
          {['home', 'services', 'team', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 capitalize ${
                currentPage === page ? 'text-amber-500' : ''
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);

const HomePage = ({ setCurrentPage }) => (
  <div>
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Excellence in Nigerian Legal Practice</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Providing comprehensive legal solutions across Nigeria with over 30 years of combined experience in Nigerian courts and regulatory bodies.
        </p>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition"
        >
          Schedule a Consultation
        </button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="text-5xl font-bold text-amber-500 mb-2">500+</div>
          <div className="text-gray-600">Cases Won</div>
        </div>
        <div className="text-center p-6">
          <div className="text-5xl font-bold text-amber-500 mb-2">30+</div>
          <div className="text-gray-600">Years Combined Experience</div>
        </div>
        <div className="text-center p-6">
          <div className="text-5xl font-bold text-amber-500 mb-2">1000+</div>
          <div className="text-gray-600">Satisfied Clients</div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h4 className="text-xl font-bold mb-3">Deep Nigerian Legal Expertise</h4>
            <p className="text-gray-600">
              Our team has extensive experience practicing before Nigerian courts, from Magistrate Courts to the Supreme Court, and deep knowledge of Nigerian statutes including CAMA 2020, Land Use Act, and Criminal Code.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h4 className="text-xl font-bold mb-3">Client-Centered Approach</h4>
            <p className="text-gray-600">
              We prioritize understanding your unique situation and provide personalized legal strategies that align with your goals and budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h4 className="text-xl font-bold mb-3">Proven Track Record</h4>
            <p className="text-gray-600">
              With hundreds of successful cases across various practice areas, we have established ourselves as trusted legal advisors in Lagos and across Nigeria.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h4 className="text-xl font-bold mb-3">Transparent Communication</h4>
            <p className="text-gray-600">
              We keep you informed at every stage of your legal matter with clear, jargon-free explanations and regular updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = ({ setCurrentPage }) => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-4">Our Legal Services</h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      We offer comprehensive legal services tailored to the Nigerian judicial system, serving individuals, businesses, and organizations across all legal matters.
    </p>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-amber-500">
          <div className="text-amber-500 mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="mt-4 text-amber-500 font-semibold flex items-center hover:text-amber-600"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      ))}
    </div>

    <div className="mt-16 bg-slate-900 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Additional Legal Services</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <ul className="space-y-2">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Banking & Finance Law</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Tax Law & Revenue Matters</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Oil & Gas Transactions</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Insurance Law</span>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Notary Public Services</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Maritime & Admiralty Law</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Aviation Law</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0 mt-1" />
            <span>Environmental Law Compliance</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const TeamPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-4">Our Legal Team</h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Our attorneys are members of the Nigerian Bar Association and have been called to the Nigerian Bar, with extensive experience in Nigerian courts and legal practice.
    </p>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 h-48 flex items-center justify-center">
            <Users className="w-24 h-24 text-white opacity-50" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-amber-600 font-semibold mb-2">{member.position}</p>
            <p className="text-gray-600 text-sm mb-1">{member.qualification}</p>
            <p className="text-gray-500 text-sm">{member.experience} of practice</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Professional Memberships & Accreditations</h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h4 className="font-bold mb-2">Nigerian Bar Association</h4>
          <p className="text-sm text-gray-600">All attorneys are registered NBA members</p>
        </div>
        <div>
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h4 className="font-bold mb-2">Supreme Court of Nigeria</h4>
          <p className="text-sm text-gray-600">Licensed to practice at all court levels</p>
        </div>
        <div>
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h4 className="font-bold mb-2">Certified Arbitrators</h4>
          <p className="text-sm text-gray-600">Accredited by Lagos Court of Arbitration</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-center text-gray-600 mb-12">
        Get in touch with us for a consultation. We're here to help with all your legal needs.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Legal Service Needed *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>{service.title}</option>
                ))}
                <option value="other">Other Legal Matter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Please describe your legal matter..."
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-amber-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition"
            >
              Submit Inquiry
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Our Office</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Main Office - Lagos</h4>
                <p className="text-gray-600">15 Broad Street, Lagos Island<br />Lagos State, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-gray-600">+234 1 234 5678<br />+234 802 345 6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-600">info@okonkwolaw.com.ng<br />chambers@okonkwolaw.com.ng</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg">
            <h4 className="font-bold mb-4 text-lg">Office Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-semibold">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-amber-300">Emergency consultations available by appointment</p>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-bold mb-2 text-lg">Branch Offices</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Abuja Office</p>
                <p className="text-gray-600">Plot 123, Central Business District, Abuja FCT</p>
              </div>
              <div>
                <p className="font-semibold">Port Harcourt Office</p>
                <p className="text-gray-600">42 Trans Amadi Road, Port Harcourt, Rivers State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-slate-900 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Scale className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-lg">Okonkwo & Associates</span>
          </div>
          <p className="text-gray-400 text-sm">
            Professional legal services across Nigeria with integrity and excellence.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-amber-500">Home</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-amber-500">Services</button></li>
            <li><button onClick={() => setCurrentPage('team')} className="hover:text-amber-500">Our Team</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-amber-500">Contact</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Practice Areas</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Corporate Law</li>
            <li>Real Estate</li>
            <li>Litigation</li>
            <li>Family Law</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal Information</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Attorney-client privilege applies</li>
            <li>NBA Registered</li>
            <li>Supreme Court Certified</li>
            <li>Confidential Consultations</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 Okonkwo & Associates. All rights reserved. | Legal Practitioners & Solicitors of the Supreme Court of Nigeria</p>
      </div>
    </div>
  </footer>
);

const LawFirmWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'services' && <ServicesPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'team' && <TeamPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default LawFirmWebsite;