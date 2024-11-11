import { useState } from "react";
import { setPage } from "../pageStore";


export default function Menu() {
    const linksNames = ["Experience", "Technologies", "Projects", "Contact"];

    const classesHover = [
        "hover:border-l-4 hover:bg-experience hover:shadow-lg hover:shadow-[#90A6FF] hover:rounded-sm hover:pl-4",
        "hover:border-l-4 hover:bg-technologies hover:shadow-lg hover:shadow-[#72BF8C] hover:rounded-sm hover:pl-4",
        "hover:border-l-4 hover:bg-projects hover:shadow-lg hover:shadow-[#D3A83D] hover:rounded-sm hover:pl-4",
        "hover:border-l-4 hover:bg-contact hover:shadow-lg hover:shadow-[#909D8C] hover:rounded-sm hover:pl-4",
    ];

    const classesSelected = [
        "border-l-2 bg-experience shadow-lg shadow-[#90A6FF] rounded-none pl-4",
        "border-l-2 bg-technologies shadow-lg shadow-[#72BF8C] rounded-none pl-4",
        "border-l-2 bg-projects shadow-lg shadow-[#D3A83D] rounded-none pl-4",
        "border-l-2 bg-contact shadow-lg shadow-[#909D8C] rounded-none pl-4",
    ];

    const [selected, setSelected] = useState([true, false, false, false]);

    return (


        <div id="menu-component" className="flex flex-col justify-evenly gap-y-10 items-start">
            {linksNames.map((name, i) => (

                <button
                    key={i}
                    onClick={() => {
                        setSelected((prevSelected) => prevSelected.map((_, index) => index === i));
                        setPage(i);
                    }}
                    className={`text-lg font-mono text-white py-2 pr-4 transition-all duration-250 ${selected[i] ? classesSelected[i] : classesHover[i]}`}
                >
                    {name}
                </button>

            ))}
        </div>

    );
}

