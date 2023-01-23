export function Board({title, description, newCards, learnCards, reviewCards}:{title:string, description:string, newCards: number, learnCards: number, reviewCards: number}){
    return(
        <div className="w-full p-5 bg-slate-900 rounded-3xl border-slate-800 border-2">
            <b className="text-white text-lg">{title}</b>
            <span className="w-full grid grid-cols-2 sm:flex gap-3 mt-3 pb-5 border-b-2 border-slate-700">
                <div className="px-3 rounded-3xl bg-blue-100 text-sm text-center">{newCards} New</div>
                <div className="px-3 rounded-3xl bg-red-100 text-sm text-center">{learnCards} Learn</div>
                <div className="px-3 rounded-3xl bg-green-100 text-sm text-center">{reviewCards} Review</div>
            </span>
            <div className="mt-5">
                <p className="text-sm text-slate-300">{description}</p>
            </div>
        </div>
    )
}