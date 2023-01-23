export function Dashboard({children}){
    return(
        <main className="bg-black w-screen min-h-screen py-10 px-5">
            <section className="max-w-3xl m-auto">
                {children}
            </section>
        </main>
    )
}