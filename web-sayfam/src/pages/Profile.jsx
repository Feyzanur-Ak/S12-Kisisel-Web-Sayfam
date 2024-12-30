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
      className={`w-screen px-8  flex flex-col items-center ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-60">
        <h2
          className={`text-5xl font-bold mb-10 ${
            isDark ? "text-indigo-200" : "text-gray-900"
          }`}
        >
          {language === "tr" ? "Profil" : "Profile"}
        </h2>

        <div   className={`flex justify-between mb-10 pb-10 ${
            isDark ? "border-gray-300" : "border-black"
          } border-b`}
        >
          <div className="space-y-6 w-1/2 pr-10">
            <h3
              className={`text-3xl font-bold ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              {language === "tr" ? "Profil" : "Profile"}
            </h3>
            <div className="flex gap-16">
              <h3
                className={`text-lg font-bold ${
                  isDark ? "text-neutral-200" : "text-purple-600"
                }`}
              >
                {labels.birthDate}
              </h3>
              <p
                className={`text-lg ${
                  isDark ? "text-neutral-200" : "text-gray-700"
                }`}
              >
                {profile[labels.birthDate]}
              </p>
            </div>
            <div className="flex gap-12">
              <h3
                className={`text-lg font-bold ${
                  isDark ? "text-neutral-200" : "text-purple-600"
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
            <div className="flex gap-12">
              <h3
                className={`text-lg font-bold ${
                  isDark ? "text-neutral-200" : "text-purple-600"
                }`}
              >
                {labels.preferredRole}
              </h3>
              <p
                className={`text-lg ${
                  isDark ? "text-neutral-200" : "text-gray-700"
                }`}
              >
                {profile[labels.preferredRole]}
              </p>
            </div>
          </div>

          <div className="w-1/2 space-y-6">
            <h3
              className={`text-3xl font-bold ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              {labels.aboutMe}
            </h3>
            <p
              className={`text-lg leading-8 ${
                isDark ? "text-neutral-200" : "text-gray-700"
              }`}
            >
              {profile.aboutMe}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
