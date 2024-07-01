import KhodamImage from '../img/Khodam.png'

const About = () => {
    return(
        <div className="relative flex items-center justify-center h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                style={{ backgroundImage: `url(${KhodamImage})`}}
            ></div>
            <div className="relative flex items-center justify-center bg-slate-700 bg-opacity-80 backdrop-blur-lg">
            <main className="text-center border border-4 max-w-xs md:max-w-xl p-6 border-[#A2D2FF]">
                    <p className="text-md md:text-lg font-bold text-[#A2D2FF]">
                        MyKhodam adalah website ril buat ngecek khodam kalian 👻
                    </p>
                    <a href="/about-more" className="text-[#A2D2FF] underline">More...</a>
                    
                    <p className="text-sm md:text-lg font-bold mt-3 mb-5 text-[#FFAFCC]">
                        Dibuat sama Ferry (27/06/2024)
                    </p>
                    <a href="/" className="bg-[#A2D2FF] py-1 px-3 rounded ">Kembali</a>
                </main>
            </div>
        </div>
    )
}

export default About