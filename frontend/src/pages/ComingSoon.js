import KhodamImage from '../img/Khodam.png';

const ComingSoon = () => {
    return(
        <div className='relative flex items-center justify-center h-screen'>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                style={{ backgroundImage: `url(${KhodamImage})`}}
            ></div>
        
        <div className="relative z-10 text-center border border-4 p-8 md:p-16 border-[#A2D2FF] bg-slate-700 bg-opacity-80 backdrop-blur-lg">
                
                <main className="relative text-center">
                    <p className="text-md md:text-xl font-bold text-[#A2D2FF] mb-2  animate-bounce">Fiturnya masih in progress nihh 😅</p>
                    <p className="text-md md:text-xl font-bold text-[#A2D2FF] mb-5">Balik nnti lagi yaah..</p>
                    <a href="/" className="bg-[#A2D2FF] py-1 px-3 rounded ">Kembali</a>
                </main>
            </div>
        </div>
    )
}

export default ComingSoon