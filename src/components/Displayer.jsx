import { selectedPage } from "../pageStore";
import { useStore } from "@nanostores/react";

import Experiences from "./Experiences";
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
    const [content, setContent] = useState(<Experiences />);

    useEffect(() => {
        switch (pageIndex) {
            case 0:
                setShadow(displaing[0]);
                document.title = "Experiences - Portfolio";
                setContent(<Experiences />);
                break;
            case 1:
                setShadow(displaing[1]);
                document.title = "Technologies - Portfolio";
                setContent(<Technologies />);
                break;
            case 2:
                setShadow(displaing[2]);
                document.title = "Projects - Portfolio";
                setContent(<Technologies />);
                break;
            case 3:
                setShadow(displaing[3]);
                document.title = "Contact - Portfolio";
                setContent(<Technologies />);
                break;
            default:
                break;
        }
    }, [pageIndex]);

    return (
        <div id="content" className="col-span-2 m-4 bg-secondary w-auto rounded-md">
            <span className={`flex rounded-lg ${shadow} transition-all ease-in-out duration-200`}>
                {content}
            </span>
        </div>
    );
}

function Technologies() {
    return (
        <span className="grid grid-cols-2 gap-4 w-full text-white font-sans p-4">
            <h1 className="text-2xl font-mono font-bold col-span-2 underline decoration-4 decoration-primary">TECHNOLOGIES</h1>
        </span>
    );
}