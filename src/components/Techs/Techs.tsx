import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";


function Techs() {
  const iconSize = 70; // Define tamanho base para os ícones

  const icons = [
    { icon: <FaReact size={iconSize} color="#61DBFB" />, name: "React" },
    { icon: <FaHtml5 size={iconSize} color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt size={iconSize} color="#264de4" />, name: "CSS" },
    { icon: <FaJsSquare size={iconSize} color="#f0db4f" />, name: "JavaScript" },
    { icon: <FaNodeJs size={iconSize} color="#68a063" />, name: "Node.js" },
    { icon: <FaGitAlt size={iconSize} color="#f1502f" />, name: "Git" },
    { icon: <FaGithub size={iconSize} color="#000" />, name: "GitHub" },
    { icon: <FaDatabase size={iconSize} color="#00618a" />, name: "MySQL" },
    { icon: <FaDatabase size={iconSize} color="#008" />, name: "SQL" },
    { icon: <FaDatabase size={iconSize} color="#008" />, name: "SQL" },
    { icon: <FaDatabase size={iconSize} color="#008" />, name: "SQL" },
    {
      icon: (
        <div className="w-20 h-20 flex items-center justify-center text-2xl font-bold text-[#777bb4] border border-[#777bb4] rounded-lg">
          PHP
        </div>
      ),
      name: "PHP",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="Tailwind CSS"
          className="w-20 h-20 object-contain"
        />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          alt="Figma"
          className="w-20 h-20 object-contain"
        />
      ),
      name: "Figma",
    },
  ];

  return (
    <div>
      {/* Div inclinada */}
      <div
        className="bottom-0 left-0 w-full h-[75px] bg-gray-100 z-0"
        style={{
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Conteúdo ajustado para subir e encostar */}
      <div className="bg-gray-100 -mt-[1px]">
        <div className="max-w-[1300px] pt-[16vh] pb-[25vh] m-auto ">
          <div className="p-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <div className="bg-white rounded-full px-[17vh] pb-[6vh] pt-[3vh] flex flex-col items-center">

              {/* Título centralizado com gradiente */}
              <h1 className="text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-semibold mb-10 text-center">
                HABILIDADES
              </h1>

              {/* Grid de tecnologias */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-20 justify-center ">
                {icons.map((item, index) => (
                  <div key={index} className="flex flex-col items-center hover:scale-125 transition-transform duration-5">
                    {item.icon}
                    <p className="mt-4 text-lg font-semibold text-gray-700">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
}

export default Techs;
