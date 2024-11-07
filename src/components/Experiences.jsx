import { work, volunteer } from '../data/experiences.js';

export default function Experiences() {

    return (
        <span className="grid grid-cols-2 gap-4 w-full text-white font-sans p-4">
            <h1 className="text-2xl font-mono font-bold col-span-2 underline decoration-4 decoration-primary">Working experience</h1>
            {
                Object.keys(work).map(key => (
                    <ExperienceCard key={key} title={work[key].title} start_date={work[key].start_date} end_date={work[key].end_date} skills={work[key].skills} description={work[key].description}>
                        <img src="../assets/placeholder.jpg" alt="Placeholder" className="w-24 h-24" />
                    </ExperienceCard>
                ))
            }
            <h1 className="text-2xl font-mono font-bold col-span-2 underline decoration-4 decoration-primary">Volunteer experience</h1>
            {
                Object.keys(volunteer).map(key => (
                    <ExperienceCard key={key} title={volunteer[key].title} start_date={volunteer[key].start_date} end_date={volunteer[key].end_date} skills={volunteer[key].skills} description={volunteer[key].description}>
                        <img alt="Placeholder" className="w-24 h-24" />
                    </ExperienceCard>
                ))
            }

        </span>
    );

}

function ExperienceCard({ title, start_date, end_date, skills, description, children }) {
    return (
        <span id="experience-card" className="grid grid-cols-2 grid-rows-auto p-4">
            <h1 className="col-span-2 font-semibold text-lg">{title}</h1>
            <span className="col-span-2 flex gap-2 text-sm">
                <p>{start_date} {end_date ? `- ${end_date}` : ''}</p>
                <p>{skills}</p>
            </span>
            {/*children*/}
            <span className="w-24 h-24 bg-background text-md"></span>
            <p>{description}</p>
            <style>
                {`
                    #experience-card {
                        content-visibility: auto;
                    }
                `}
            </style>
        </span>
    );
}
