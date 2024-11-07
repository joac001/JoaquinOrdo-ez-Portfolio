export default function Technologies() {
    const n = 12
    return (
        <span className="grid grid-cols-4 gap-4 w-full text-white font-sans p-4">
            {
                Array(n).fill().map((_, i) => (
                    <span key={i} className="flex flex-col items-center justify-center">
                        <span className="bg-primary w-16 h-16 rounded-full"></span>
                        <span className="text-center">Technology</span>
                    </span>
                ))
            }
        </span>
    );
}
