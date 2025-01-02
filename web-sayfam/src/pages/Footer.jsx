import useGlobalContext from "../hooks/useGlobalContext";

const Footer = () => {
  const { theme, language } = useGlobalContext();
  const isDark = theme === "dark";

  return (
    <section
      className={`w-screen px-8 py-10 ${
        isDark ? "bg-black text-indigo-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="mb-8">
          <span className="text-3xl font-bold block text-center w-full md:text-left ">
            {language === "tr"
              ? "Birlikte çalışarak bir sonraki büyük fikrinizi hayata geçirelim."
              : "Let’s join forces to bring your next big idea to life."}
          </span>
        </div>

        {/* İletişim ve Sosyal Medya */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* E-posta */}
          <a
            href="mailto:senturkfeyzanur96@gmail.com"
            className="text-lg flex items-center"
          >
            <span role="img" aria-label="mail" className="mr-2">
              📧
            </span>
            <p
              className={`underline ${
                isDark ? "text-violet-300" : "text-black"
              }`}
            >
              senturkfeyzanur96@gmail.com
            </p>
          </a>

          {/* Sosyal Medya Linkleri */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-lg text-center">
            <a
              href="https://s12-kisisel-web-sayfam-gzjj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com/Feyzanur-Ak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-green-500"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-500"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
