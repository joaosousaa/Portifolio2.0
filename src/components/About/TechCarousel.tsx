import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const icons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <FaReact className="text-cyan-500" />, name: "React" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "TailwindCSS" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" }
];

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

const TechCarousel = () => {
  return (

    <div className="relative">
      <div className="-skew-y-6  bg-blue-500 absolute top-[4vh] h-[9vh] w-full left-1/2 -translate-x-1/2 -translate-y-[50%]" />
      
      <div className="mx-auto">
        <Slider {...settings}>
          {icons.map((tech, index) => (
            <div key={index} className="flex justify-center items-center bg-gray-400 ">
              <div className="text-[4vh] p-[2vh]">{tech.icon}</div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default TechCarousel;
