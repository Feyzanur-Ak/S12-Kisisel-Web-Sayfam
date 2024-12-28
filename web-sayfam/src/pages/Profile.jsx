import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Profile = () => {
  const { theme, language, profile } = useContext(GlobalContext);
  const isDark = theme === "dark";

  const labels = {
    birthDate: language === "tr" ? "Doğum Tarihi" : "Birth Date",
    education: language === "tr" ? "Eğitim Durumu" : "Education",
    preferredRole: language === "tr" ? "Tercih Ettiği Rol" : "Preferred Role",
    aboutMe: language === "tr" ? "Hakkımda" : "About Me",
  };

  return (
    <section
      className={`max-w-7xl mx-auto px-8  flex flex-row justify-between ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
 
      <div className="w-1/2 space-y-6">
        <h2
          className={`text-5xl font-bold mb-10 ${
            isDark ? "text-gray-300" : "text-gray-900"
          }`}
        >
          {language === "tr" ? "Profil" : "Profile"}
        </h2>
        <h3
          className={`text-3xl font-bold mb-10 ${
            isDark ? "text-purple-400" : "text-purple-600"
          }`}
        >
          {language === "tr" ? "Profil" : "Profile"}
        </h3>
        <div className="flex gap-16">
          <h3
            className={`text-lg font-bold ${
              isDark ? "text-gray-300" : "text-purple-600"
            }`}
          >
            {labels.birthDate}
          </h3>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {profile[labels.birthDate]}
          </p>
        </div>
        <div className="flex gap-16">
          <h3
            className={`text-lg font-bold ${
              isDark ? "text-gray-300" : "text-purple-600"
            }`}
          >
            {labels.education}
          </h3>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {profile[labels.education]}
          </p>
        </div>
        <div className="flex gap-8">
          <h3
            className={`text-lg font-bold ${
              isDark ? "text-gray-300" : "text-purple-600"
            }`}
          >
            {labels.preferredRole}
          </h3>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {profile[labels.preferredRole]}
          </p>
        </div>
      </div>

    
      <div className="w-1/2 space-y-6 py-20">
        <h3
          className={`text-3xl font-bold ${
            isDark ? "text-purple-400" : "text-purple-600"
          }`}
        >
          {labels.aboutMe}
        </h3>
        <p
          className={`text-lg leading-8 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {profile.aboutMe}
        </p>
      </div>
 
    </section>
  );
};

export default Profile;
