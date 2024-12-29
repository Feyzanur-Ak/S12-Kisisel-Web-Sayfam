import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Skills = () => {
  const { theme, language, skills } = useContext(GlobalContext)
  const isDark = theme === 'dark'

  return (
    <section
      className={`max-w-7xl mx-auto px-8 py-14 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2
        className={`
          text-5xl font-bold mb-10
          ${isDark ? 'text-gray-300' : 'text-gray-900'}
        `}
      >
        {language === 'tr' ? 'Becerilerim' : 'Skills'}
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex-1 space-y-3">
            <h3
              className={`
                text-2xl font-bold
                ${isDark ? 'text-purple-400' : 'text-purple-600'}
              `}
            >
              {skill.name}
            </h3>
            <p
              className={`
                text-base leading-relaxed text-justify
                ${isDark ? 'text-gray-400' : 'text-gray-600'}
              `}
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      <hr className={`mt-8 ${isDark ? 'border-white' : 'border-gray-700'}`} />
    </section>
  )
}

export default Skills