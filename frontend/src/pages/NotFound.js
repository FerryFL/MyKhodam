const NotFound = () => {
    return(
        <div className="flex items-center justify-center h-screen bg-slate-700">
            <main className="text-center border border-4 p-16 border-[#A2D2FF]">
                <p className="text-4xl font-bold text-[#A2D2FF] mb-2 animate-bounce">Error 404 ⚠️</p>
                <p className="text-2xl font-bold text-[#A2D2FF] mb-5 ">Not Found Cuy</p>
                <a href="/" className="bg-[#A2D2FF] py-1 px-3 rounded">Kembali</a>
            </main>
        </div>
    )
}

export default NotFound