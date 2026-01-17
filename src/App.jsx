import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Phone,
  MapPin,
  Users,
  Search,
  Globe,
  MessageCircle,
} from "lucide-react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVasati, setSelectedVasati] = useState(null);
  const [language, setLanguage] = useState("kn"); // 'kn' for Kannada, 'en' for English

  const whatsappNumber = "9844769716";

  const whatsappMessage = encodeURIComponent(
    `Welcome!

Please share the following details:
• Your Name
• Phone Number
• Place
• Where you want to join (Vasati/Shakha)

Thank you.`,
  );

  const vasatiData = [
    {
      id: 1,
      name: { kn: "ತಿರುಪಾಳ್ಯ ವಸತಿ", en: "Tirupaliya Vasati" },
      shakhe: { kn: "ಬಸವೇಶ್ವರ ಶಾಖೆ", en: "Basaveshwara Shakha" },
      contacts: [
        {
          name: {
            kn: "ಗಮನಿಸುವವರು - ಪೂಜಾರ್ ಕರಿಯಪ್ಪ",
            en: "Observer - Poojar Kariyappa",
          },
          phone: "9980619600",
        },
        {
          name: { kn: "ಮಹೇಶ್ ರೆಡ್ಡಿ", en: "Mahesh Reddy" },
          phone: "9686383852",
        },
      ],
    },
    {
      id: 2,
      name: { kn: "ವಿನಾಯಕ ನಗರ", en: "Vinayaka Nagar" },
      shakhe: { kn: "ಶ್ರೀ ರಾಮ ಶಾಖೆ", en: "Shri Ram Shakha" },
      contacts: [
        { name: { kn: "ಆದಿತ್ಯ ಮಟ್", en: "Aditya Matt" }, phone: "8618587209" },
        { name: { kn: "ಸಂದೀಪ್", en: "Sandeep" }, phone: "8277659683" },
      ],
    },
    {
      id: 3,
      name: { kn: "ಹೆಬ್ಬಗೋಡಿ ಪಶ್ಚಿಮ ವಸತಿ", en: "Hebbagodi West Vasati" },
      shakhe: { kn: "", en: "" },
      contacts: [
        {
          name: { kn: "ಕಿರಣ್ ರೆಡ್ಡಿ", en: "Kiran Reddy" },
          phone: "8892228353",
        },
        { name: { kn: "ಆನಂದ್", en: "Anand" }, phone: "9980377331" },
      ],
    },
    {
      id: 4,
      name: { kn: "ಹೆಬ್ಬಗೋಡಿ ಪೂರ್ವ ವಸತಿ", en: "Hebbagodi East Vasati" },
      shakhe: { kn: "", en: "" },
      contacts: [
        { name: { kn: "ಜಯಂತ್", en: "Jayant" }, phone: "7483528995" },
        { name: { kn: "ಈರಪ್ಪ", en: "Eerappa" }, phone: "9916151762" },
      ],
    },
    {
      id: 5,
      name: { kn: "ವೀರಸಂದ್ರ ವಸತಿ", en: "Veerasandra Vasati" },
      shakhe: { kn: "ಭಗತ್ ಶಾಖೆ", en: "Bhagat Shakha" },
      contacts: [
        { name: { kn: "ಸುನೀಲ್", en: "Sunil" }, phone: "9844769716" },
        { name: { kn: "ಪ್ರಕಾಶ್", en: "Prakash" }, phone: "9743187776" },
      ],
    },
    {
      id: 6,
      name: { kn: "ಅನಂತ್ ನಗರ", en: "Anant Nagar" },
      shakhe: { kn: "ಅನಂತ್ ಶಾಖೆ", en: "Anant Shakha" },
      contacts: [
        {
          name: { kn: "ವಿಜೇಂದ್ರ ಪ್ರಭು", en: "Vijendra Prabhu" },
          phone: "9945068901",
        },
        {
          name: { kn: "ಶ್ರೀನಿವಾಸ್ ಗಟ್ಟಿ", en: "Srinivas Gatti" },
          phone: "9620560163",
        },
      ],
    },
    {
      id: 7,
      name: { kn: "ಕಮ್ಮಸಂದ್ರ ವಸತಿ", en: "Kammasandra Vasati" },
      shakhe: { kn: "ಕೇಶವ ಶಾಖೆ", en: "Keshava Shakha" },
      contacts: [
        { name: { kn: "ಭರತ್", en: "Bharat" }, phone: "9740246836" },
        { name: { kn: "ಉಚ್ಚೇಶ್", en: "Uchchesh" }, phone: "8105534930" },
      ],
    },
    {
      id: 8,
      name: { kn: "ವಿದ್ಯಾನಗರ ವಸತಿ", en: "Vidyanagar Vasati" },
      shakhe: { kn: "ವೀರ ಸಾವರ್ಕರ್ ಶಾಖೆ", en: "Veer Savarkar Shakha" },
      contacts: [
        { name: { kn: "ಹರಿ ಪ್ರಸಾದ್", en: "Hari Prasad" }, phone: "8310269626" },
        { name: { kn: "ವಿಶಾಲ್", en: "Vishal" }, phone: "9900815206" },
      ],
    },
    {
      id: 9,
      name: { kn: "ಗೊಲ್ಲಹಳ್ಳಿ ವಸತಿ", en: "Gollahalli Vasati" },
      shakhe: { kn: "ಶಿವಾಜಿ ಶಾಖೆ", en: "Shivaji Shakha" },
      contacts: [
        {
          name: { kn: "ರಾಜೇಶ್ ನಾಯಕ್", en: "Rajesh Nayak" },
          phone: "9900833358",
        },
        { name: { kn: "ಸಾಗರ್", en: "Sagar" }, phone: "9071204206" },
      ],
    },
    {
      id: 10,
      name: { kn: "ಬೊಮ್ಮಸಂದ್ರ ವಸತಿ", en: "Bommasandra Vasati" },
      shakhe: { kn: "ಅಂಬೇಡ್ಕರ್ ಶಾಖೆ", en: "Ambedkar Shakha" },
      contacts: [
        { name: { kn: "ಲಿಂಗರಾಜು", en: "Lingaraju" }, phone: "8105358641" },
        { name: { kn: "ಮುಕುಲ್", en: "Mukul" }, phone: "7899672927" },
        { name: { kn: "ಮುನೇಗೌಡ", en: "Munegowda" }, phone: "9743986755" },
        {
          name: { kn: "ಮುರಳಿ ರೆಡ್ಡಿ", en: "Murali Reddy" },
          phone: "9880338518",
        },
      ],
    },
  ];

  const content = {
    kn: {
      title: "ರಾಷ್ಟ್ರಿಯ ಸ್ವಯಂಸೇವಕ ಸಂಘ ಹೆಬ್ಬಗೋಡಿ ನಗರ",
      subtitle: "ವಸುಧೈವ ಕುಟುಂಬಕಂ",
      totalVasati: "ಒಟ್ಟು ವಸತಿಗಳು",
      searchPlaceholder: "ವಸತಿ ಹುಡುಕಿ...",
      noResults: "ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      close: "ಮುಚ್ಚಿ",
      footer: "ಜೈ ಹಿಂದ್ 🇮🇳",
      footerSubtitle: "ರಾಷ್ಟ್ರಿಯ ಸ್ವಯಂಸೇವಕ ಸಂಘ - ಹೆಬ್ಬಗೋಡಿ ನಗರ",
    },
    en: {
      title: "Rashtriya Swayamsevak Sangh Hebbagodi Nagar",
      subtitle: "Hebbagodi Nagar",
      totalVasati: "Total Vasati",
      searchPlaceholder: "Search Vasati...",
      noResults: "No results found",
      close: "Close",
      footer: "Jai Hind 🇮🇳",
      footerSubtitle: "Rashtriya Swayamsevak Sangh - Hebbagodi Nagar",
    },
  };

  const t = content[language];

  const filteredVasati = vasatiData.filter(
    (vasati) =>
      vasati.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      vasati.shakhe[language]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      vasati.contacts.some((contact) =>
        contact.name[language].toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const toggleLanguage = () => {
    setLanguage(language === "kn" ? "en" : "kn");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12"></div>
            <div className="flex items-center gap-3">
              <span className="flex items-center">
                <img src="./om.png" alt="RSS" className="w-10 h-10" />
              </span>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center break-words leading-snug">
                {t.title}
              </h1>
              <span className="flex items-center">
                <img src="./om.png" alt="RSS" className="w-10 h-10" />
              </span>
            </div>
            <button
              onClick={toggleLanguage}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-semibold"
              title="Change Language"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline">
                {language === "kn" ? "EN" : "ಕನ್ನಡ"}
              </span>
            </button>
          </div>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{t.subtitle}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Banner */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Users className="w-6 h-6 text-orange-600" />
            <span className="text-xl font-semibold">
              {t.totalVasati}: <span className="text-orange-600">10</span>
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Vasati Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVasati.map((vasati) => (
            <div
              key={vasati.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-orange-500 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedVasati(vasati)}
            >
              <div className="bg-gradient-to-r from-orange-100 to-green-50 p-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {vasati.name[language]}
                    </h3>
                    {vasati.shakhe[language] && (
                      <p className="text-sm text-orange-600 font-semibold">
                        {vasati.shakhe[language]}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {vasati.contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm mb-1">
                        {contact.name[language]}
                      </p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-blue-600 hover:text-blue-800 font-mono text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredVasati.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t.noResults}</p>
          </div>
        )}
      </main>

      {/* Floating WhatsApp Popup Icon (MUI) */}
      <a
        href={`https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Hover Popup Message */}
        <div className="absolute right-16 bottom-2 hidden group-hover:block bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          If you require more details, contact us on WhatsApp
        </div>

        {/* WhatsApp Icon */}
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300">
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </div>
      </a>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold mb-2">{t.footer}</p>
          <p className="text-sm opacity-90">{t.footerSubtitle}</p>
        </div>
      </footer>

     {/* Modal for detailed view */}
      {selectedVasati && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVasati(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Orange Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-6 pb-8 relative">
              <button
                onClick={() => setSelectedVasati(null)}
                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1.5 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedVasati.name[language]}
              </h2>
              {selectedVasati.shakhe[language] && (
                <div className="inline-block bg-white rounded-full px-6 py-2">
                  <p className="text-orange-600 font-semibold text-sm">
                    {selectedVasati.shakhe[language]}
                  </p>
                </div>
              )}
            </div>

            {/* Contacts Section */}
            <div className="px-6 py-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {language === 'kn' ? 'ಸಂಪರ್ಕಗಳು' : 'Contacts'}
                </h3>
              </div>
              
              <div className="space-y-3 mb-6">
                {selectedVasati.contacts.map((contact, idx) => (
                  <div key={idx} className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <p className="font-semibold text-gray-800 mb-2 text-base">
                      {contact.name[language]}
                    </p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-mono text-base transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedVasati(null)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors text-base"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
