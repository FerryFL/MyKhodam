import KhodamImage from '../img/Khodam.png'

const About = () => {
    return(
        <div className="relative flex items-center justify-center h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                style={{ backgroundImage: `url(${KhodamImage})`}}
            ></div>

            <div className="relative flex items-center justify-center bg-opacity-80 bg-slate-700 backdrop-blur-lg">
                <main className="text-center border border-4 max-w-xs md:max-w-xl p-4 border-[#A2D2FF]">
                    <p className="text-md md:text-lg font-bold text-[#A2D2FF]">
                        Website ini dibikin pake MERN stack 🖥️
                    </p>
                    <br></br>
                    <p className="text-md md:text-lg font-bold text-[#A2D2FF] mb-5">
                        Ini adalah v1 dari website MyKhodam dan bakal dibikin v2nya, karna migrasi ke Next.js buat kepenting publish, SEO, dynamic routing, dll untuk fitur yang lebih kerenn...🤩
                    </p>
                    <a href="/about" className="bg-[#A2D2FF] py-1 px-3 rounded ">Kembali</a>
                </main>
            </div>
            

        </div>
        
    )
}

export default About