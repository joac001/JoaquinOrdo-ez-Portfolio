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
            <div className='flex items-center w-full'>
                <div className='w-8 h-8 rounded-full border-x-2 border-y-2 border-experience'></div>
                <div className="w-full h-1 bg-experience rounded-lg flex items-center"></div>
            </div>
            <div className='p-4 min-w-46 rounded-md border-x-2 border-y-2 border-experience'>
                <div className="flex items-center">
                    <div>
                        <h3 className="font-bold pt-2">{experience.title}</h3>
                        <p className="text-gray pb-2">
                            {experience.start_date} {experience.end_date ? ` - ${experience.end_date}` : ''}
                        </p>
                        <p className='text-sm md:text-lg'>{experience.description ? experience.description : ''}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span
                                className="py-2 rounded-full text-xs text-gray"
                            >
                                {experience.skills.length > 0 ? 'Skills: ' : ''}
                                {experience.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex}>
                                        {skillIndex == 0 ? skill : `- ${skill}`}
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