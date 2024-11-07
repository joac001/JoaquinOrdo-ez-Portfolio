import { work, volunteer } from '../data/experiences.js';

export default function ExperienceJourney() {

    return (
        <div className="relative w-full px-8">
            <div className="flex flex-col gap-y-8 p-4 relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-experience rounded-lg"></div>
                <div className='border-b-4 border-experience w-fit'>
                    <h2 className="text-2xl text-white font-mono font-bold ml-10">Work Experiences</h2>
                </div>
                {work.map((experience, index) => (
                    <ExperienceCard experience={experience} index={index} />
                ))}



                <div className='border-b-4 border-experience w-fit'>
                    <h2 className="text-2xl text-white font-mono font-bold ml-10 ">Volunteer Experiences</h2>
                </div>
                {volunteer.map((experience, index) => (
                    <ExperienceCard experience={experience} index={index} />
                ))}
            </div>
        </div>
    );
};

function ExperienceCard({ experience, index }) {
    return (
        <div key={index} className='w-full flex items-center text-white'>

            <div className="w-full h-1 mr-1 bg-experience rounded-lg flex items-center"><div className='w-8 h-8 rounded-full bg-experience'></div></div>
            <div className='p-4 rounded-md transition-all duration-150 ease-in-out bg-[#044A6D] scale-100 hover:scale-110'>
                <div className="flex items-center">
                    <div>
                        <h3 className="font-bold">{experience.title}</h3>
                        <p className="text-gray mb-2">
                            {experience.start_date} - {experience.end_date}
                        </p>
                        <p>{experience.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span
                                className="px-2 py-1 rounded-full text-xs"
                            >
                                {experience.skills.length > 0 ? 'Skills: ' : ''}
                                {experience.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="px-2 py-1 rounded-full text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}