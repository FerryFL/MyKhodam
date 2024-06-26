import { useEffect, useState } from 'react' 

const Home = ()=> {

    const [khodam, setKhodam] = useState('')
    const [nama, setNama] = useState('')
    const [flag, setFlag] = useState(false)
    const [user, setUser] = useState('')

    const fetchKhodam = async()=>{
        console.log('1')
        const response = await fetch('https://my-khodam-api.vercel.app/api/khodams/random')
        const json = await response.json()

        if(response.ok){
            setKhodam(json[0])
        }
    }

    const handleChange = (event) => {
        setNama(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(nama){
            await fetchKhodam();
            setFlag(true)
        }
    };

    const anotherName = (event)=>{
        event.preventDefault()
        setNama('')
        setKhodam('')
        setFlag(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log('ef')
            const response = await fetch('https://my-khodam-api.vercel.app/api/users')
            const json = await response.json()
    
            if(response.ok){
                setUser(json[0].user)
            }
        };

        fetchData();
    }, [flag]);

    return(
        <div className="flex items-center justify-center h-screen bg-slate-700">
            <main className="text-center border border-4 p-16 border-[#A2D2FF]">
                <div className='mb-6 max-sm:text-center'>
                    <h1 className='font-bold text-center text-xl'>
                        <span className=' text-4xl text-[#A2D2FF]'>
                            Cek <span className='text-[#FFAFCC]'>Khodam</span>
                        </span>
                        <br></br>
                        <span className='text-[#A2D2FF]'>By </span>
                        <span className='text-sm text-[#FFAFCC]'>@MyKhodam</span>
                    </h1>
                </div>

                {khodam && (
                    <div>
                        <p className='mb-1 text-[#BDE0FE]'>Khodam {nama} hari ini adalah...</p>
                        <p className='my-3 mb-5 text-3xl font-bold text-[#FFAFCC] animate-pulse'>✨{khodam.name}✨</p>
                    </div>
                    
                )}
                
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                    {flag ? (
                        <button onClick={anotherName} className="bg-[#A2D2FF] text-black px-4 py-2 rounded">Coba Nama Lain</button>
                    ) : (
                        <div className="flex flex-col items-center space-y-4">
                            <p className='text-[#A2D2FF]'>Masukin Nama Kamu</p>
                            <input
                                type="text"
                                placeholder={user}
                                value={nama}
                                onChange={handleChange}
                                required
                                className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-4 py-2 rounded"
                            />
                            <button type="submit" className='bg-[#A2D2FF] text-black px-4 py-2 animate-bounce  rounded'>✨ Check</button>
                            <div className='flex'>
                                <a href='/coming-soon' className='bg-[#FFAFCC] py-1 mx-1 px-3 rounded'>+</a>
                                <a href='/coming-soon' className='bg-[#FFAFCC] py-1 mx-1 px-3 rounded'>About</a>
                                
                            </div>
                        </div>
                    )}
                </form>
            </main>
        </div>
    )
}

export default Home