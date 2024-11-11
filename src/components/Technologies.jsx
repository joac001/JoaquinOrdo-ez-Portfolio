import { technologies } from "../data/technologies.js";

export default function Technologies() {

    const baseUrl = import.meta.env.BASE_URL;

    function fetchImage(image) {
        try {
            console.log(baseUrl);
            const newImage = `/public/assets/${image}`;
            return newImage;
        } catch (error) {
            const newImage = `${baseUrl}/assets/${image}`;
            return newImage;
        }
    }

    return (
        <span className="flex gap-10 flex-wrap w-full text-white font-sans justify-center items-center p-4">
            {

                technologies.map((tech, index) => (
                    <span key={index} className="grid grid-rows-2 items-center justify-center m-2 w-20 h-20 gap-2">
                        <img
                            src={fetchImage(tech.icon)}
                            alt={tech.name}
                            className="w-16"
                            loading="eager"
                        />
                        <span className="text-center text-sm font-semibold mt-1">{tech.name}</span>
                    </span >
                ))
            }
        </span >
    );
}
