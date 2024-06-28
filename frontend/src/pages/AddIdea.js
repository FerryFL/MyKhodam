import { useState } from "react"

const AddIdea = () => {
    const [contributor, setContributor] = useState('')
    const [idea, setIdea] = useState('')
    const [flag, setFlag] = useState(false)

    const handleSubmit = () => {
        const ideas = { contributor, idea}

        fetch('https://my-khodam-api.vercel.app/api/ideas',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(ideas)
        })
        setFlag(true)
    }

    return(
        <div className="flex items-center justify-center h-screen bg-slate-700">
            <main className="text-center border border-4 max-w-xs md:max-w-xl p-4 border-[#A2D2FF]">
                {
                    flag?
                    <div>
                        <p className="text-md md:text-lg font-bold text-[#A2D2FF]">Makasii {contributor}!, nanti admin bakal masukin ide kamu</p>
                        
                        <div className="mt-3">
                            <button onClick={()=>{setFlag(false)}} className="bg-[#FFAFCC] py-1 px-3 rounded mx-1">Ada ide lagi?➕</button>
                            <a href="/" className="bg-[#A2D2FF] py-1 px-3 mx-1 rounded ">Kembali↩️</a>
                        </div>
                    </div>
                    :
                    <form onSubmit={handleSubmit}>
                        <p className="text-md md:text-lg font-bold text-[#A2D2FF]">
                            Kamu dukun? Masukin ide khodam yang lucu yaa disini...
                        </p>
                        <div className="flex my-4 mb-6 flex-col md:flex-row">
                            <div>
                                <label className="text-sm md:text-md font-bold text-[#A2D2FF]">Nama kalian</label>
                                <input 
                                    className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-4 py-2 rounded"
                                    onChange={(e)=> {setContributor(e.target.value)}}
                                    required
                                ></input>
                            </div>

                            <div>
                                <label className="text-sm md:text-md font-bold text-[#A2D2FF]">Ide Khodam</label>
                                <input 
                                    className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-4 py-2 rounded"
                                    onChange={(e)=> {setIdea(e.target.value)}}
                                    required
                                ></input>
                            </div>
                        </div>
                        
                        <div>
                            <button className="bg-[#FFAFCC] py-1 px-3 rounded mx-1">Submit🎉</button>
                            <a href="/" className="bg-[#A2D2FF] py-1 px-3 rounded mx-1">Kembali↩️</a>
                        </div>
                    </form>
                }
                
            </main>
        </div>
    )
}

export default AddIdea