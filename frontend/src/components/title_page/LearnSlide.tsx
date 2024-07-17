import { BsThreeDots } from "react-icons/bs"

export function LearnSlide() {
    return (
        <div className="w-full h-screen pt-[10vh] flex flex-col bg-background">
            <main className="flex flex-col items-center gap-4 px-1/10 mb-[10vh]">
                <h1 className="text-6xl font-bold">Learn at your level</h1>
                <p className="text-2xl text-center">
                    Whether you're a student, worker, or a parent looking to
                    boost your English, we have everything you need.
                </p>
                <div className="flex flex-row my-24 gap-12
                    w-2/3 min-w-[320px] justify-between">
                    <img src="student.png" alt="SMART FELLA" className="grow max-w-[200px]" />
                    <BsThreeDots size={120} />
                    <img src="work.png" alt="FART SMELLA" className="grow max-w-[200px]" />
                </div>
            </main>
            <div className="w-full grow bg-engbot-gradient">
            </div>
        </div>
    )
}
