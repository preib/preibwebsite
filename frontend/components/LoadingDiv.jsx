export default function LoadingDiv({ message, borderColor, backgroundColor }) {
    return (
        <div className="flex justify-around w-full">
            <div className="inline-flex w-full mx-5 shadow-lg rounded-md text-white">
                <div className={`inline-flex w-full items-center rounded-lg border-2 ${ borderColor || "border-blue-700" } ${ backgroundColor || "bg-blue-600" } transition ease-in-out-150 px-4 py-2 text-base leading-6 font-medium`}>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
                        <circle className="opacity-5"
                            cx="12" cy="12" r="10"
                            stroke="currentColor"
                            strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    { message }
                </div>
            </div>
        </div>
    )
}
