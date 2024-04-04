export default function ExperienceSlide() {
    return (
        <div className="w-full min-h-screen bg-background flex flex-col pb-12">
            <div className="w-full grow"></div>
            <main className="flex flex-col items-center gap-4 px-1/10 my-[10vh]">
                <h1 className="text-6xl font-bold text-center">Experience Personalized Learning</h1>
                <div className="flex flex-col lg:flex-row px-1/10 mt-[10vh] gap-12 items-center">
                    <p className="col-span-2 text-2xl text-left text-center">
                        Scenarios ranging from classroom conversations to everyday tasks, all while buildling a strong foundation in English and grammar vocabulary.
                    </p>
                    <img src="thinking.png" alt="image that is supposed to be there"
                        className="max-w-[200px]" />
                </div>

            </main>
        </div>
    )
}
