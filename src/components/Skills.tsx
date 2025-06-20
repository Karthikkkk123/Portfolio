import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "TypeScript", icon: "🔷" },
        { name: "PHP", icon: "🐘" },
        { name: "C#", icon: "🔷" },
        { name: "Python", icon: "🐍" },
        { name: "Laravel", icon: "🔴" },
        { name: "Node.js", icon: "🟢" },
        { name: "SQL", icon: "🗄️" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "DynamoDB", icon: "📊" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "🔗" },
        { name: "Elasticsearch", icon: "🔍" },
        { name: "Logstash", icon: "📊" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Redux", icon: "🔄" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Webpack", icon: "📦" },
        { name: "Single Page Applications", icon: "📱" },
        { name: "Responsive Design", icon: "📱" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚙️" },
        { name: "Jenkins", icon: "🔧" },
        { name: "GitHub Actions", icon: "🔄" },
        { name: "Linux", icon: "🐧" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Infrastructure as Code", icon: "🏗️" }
      ]
    },
    {
      title: "Practices",
      skills: [
        { name: "Database design", icon: "🗄️" },
        { name: "Event-driven architecture", icon: "🔄" },
        { name: "Agile", icon: "🏃" },
        { name: "Scrum", icon: "🏉" },
        { name: "Object Oriented Programming (OOP)", icon: "🧩" },
        { name: "Test Driven Development (TDD)", icon: "🧪" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "Sentry", icon: "🔍" },
        { name: "New Relic", icon: "📊" },
        { name: "Grafana", icon: "📈" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;