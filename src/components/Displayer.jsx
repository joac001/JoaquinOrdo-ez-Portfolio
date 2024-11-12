import { selectedPage } from "../pageStore";
import { useStore } from "@nanostores/react";

import ExperienceJourney from "./ExperienceJourney";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useState } from "react";

export default function Displayer() {

    const pageIndex = useStore(selectedPage);

    const displaing = {
        0: "shadow-experience",
        1: "shadow-technologies",
        2: "shadow-projects",
        3: "shadow-contact"
    }
    const [shadow, setShadow] = useState(displaing[0]);
    const [content, setContent] = useState(<ExperienceJourney client:load />);

    useEffect(() => {
        switch (pageIndex) {
            case 0:
                setShadow(displaing[0]);
                document.title = "Experiences - Portfolio";
                setContent(<ExperienceJourney />);
                break;
            case 1:
                setShadow(displaing[1]);
                document.title = "Technologies - Portfolio";
                setContent(<Technologies />);
                break;
            case 2:
                setShadow(displaing[2]);
                document.title = "Projects - Portfolio";
                setContent(<Projects />);
                break;
            case 3:
                setShadow(displaing[3]);
                document.title = "Contact - Portfolio";
                setContent(<Contact />);
                break;
            default:
                break;
        }
    }, [pageIndex]);

    return (
        <div id="content" className="col-span-2 m-4 bg-secondary-background w-auto rounded-md">
            <span className={`flex rounded-lg ${shadow} transition-all ease-in-out duration-300 p-8 overflow-hidden`}>
                {content}
            </span>
        </div>
    );
}

