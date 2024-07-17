import axios from "axios"
import { useState } from "react"

const ReviewForm = () => {
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const createReview = { name, review }
        
        try{
            const response = await axios.post('https://my-khodam-api.vercel.app/api/reviews', createReview)
            if(response.status === 200){
                alert("Review Added!")
                window.location.reload()
            }else{
                setError("Failed")
            }
        }catch(error){
            console.log('Error: ', error)
        }   
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex my-4 mb-6 flex-col md:flex-row p-5 justify-center">
                <input placeholder="Nama" onChange={(e)=>setName(e.target.value)} required className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-3 py-1 rounded" maxLength={50}/>
                <input placeholder="Review" onChange={(e)=>setReview(e.target.value)} required className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-3 py-1 mt-2 md:ml-2 md:mt-0 rounded" maxLength={50}  />
                <button className="bg-[#FFAFCC] py-1 px-2 rounded my-2 md:mx-2 text-center md:my-0">Submit🎉</button>
                <a href="/" className="bg-[#A2D2FF] py-1 px-2 text-center rounded">Kembali↩️</a>
            </form>
            {error&&<div>{error}</div>}
        </div>
        
        
    )
}

export default ReviewForm