const About = () => {
    return(
        <div className="flex items-center justify-center h-screen bg-slate-700">
            <main className="text-center border border-4 max-w-xs md:max-w-xl p-4 border-[#A2D2FF]">
                <p className="text-sm md:text-lg font-bold text-[#A2D2FF]">
                    Ini adalah website lucu-lucuan buat ngeliat khodam kalian!
                </p>
                <p className="text-sm md:text-lg font-bold mb-5 text-[#FFAFCC]">
                    Dibuat sama Ferry (27/06/2024)
                </p>
                <a href="/" className="bg-[#A2D2FF] py-1 px-3 rounded ">Kembali</a>
            </main>
        </div>
    )
}

export default About