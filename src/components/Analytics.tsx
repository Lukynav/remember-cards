export function Analytics({num, title, description}:{num:number, title:string, description:string}){
    return(
        <article className="w-full p-5 border-4 rounded-3xl" >
            <p className="text-white font-bold">{title}</p>
            <b className="text-3xl text-teal-400">{num}</b>
            <p className="text-white">{description}</p>
        </article>
    )
}