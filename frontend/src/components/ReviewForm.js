import { useState } from "react"

const ReviewForm = () => {
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async() =>{
        const createReview = { name, review }

        const response = await fetch('https://my-khodam-api.vercel.app/api/reviews',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createReview)
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }else{
            alert('Review Added!')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex my-4 mb-6 flex-col md:flex-row p-5 justify-center">
                <input placeholder="Nama" onChange={(e)=>setName(e.target.value)} className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-3 py-1 rounded"/>
                <input placeholder="Review" onChange={(e)=>setReview(e.target.value)} className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-3 py-1 mt-2 md:ml-2 md:mt-0 rounded"/>
                <button className="bg-[#FFAFCC] py-1 px-2 rounded my-2 md:mx-2 text-center md:my-0">Submit🎉</button>
                <a href="/" className="bg-[#A2D2FF] py-1 px-2 text-center rounded">Kembali↩️</a>
            </form>
            {error&&<div>{error}</div>}
        </div>
        
        
    )
}

export default ReviewForm