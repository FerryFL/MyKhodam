import KhodamImage from '../img/Khodam.png'

const NotFound = () => {
    return(
        <div className="relative flex items-center justify-center h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                style={{ backgroundImage: `url(${KhodamImage})`}}
            ></div>
            <div className="relative flex items-center justify-center bg-slate-700 bg-opacity-80 backdrop-blur-lg">
                <main className="text-center border border-4 p-16 border-[#A2D2FF]">
                    <p className="text-4xl font-bold text-[#A2D2FF] mb-2 animate-bounce">Error 404 ⚠️</p>
                    <p className="text-2xl font-bold text-[#A2D2FF] mb-5 ">Not Found Cuy</p>
                    <a href="/" className="bg-[#A2D2FF] py-1 px-3 rounded">Kembali</a>
                </main>
            </div>
        </div>
        
    )
}

export default NotFound