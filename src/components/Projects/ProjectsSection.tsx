
import { CardsCarousel, BigCardGrid } from './Cards';

const ProjectsSection = () => {
    return (
        <div className="m-auto ">
            <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] font-bold mb-6">
                Explore Projetos Exclusivos
            </h1>

            <div className="relative mb-6">
                <div className="absolute top-1/2 left-0 w-full border-t border-gray-700"></div>
            </div>

            <div>
                <BigCardGrid />
            </div>

            <div>
                <CardsCarousel />
            </div>
        </div>
    );
};

export default ProjectsSection;
