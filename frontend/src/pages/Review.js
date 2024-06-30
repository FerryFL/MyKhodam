import { useEffect, useState } from "react"
import ReviewAll from '../components/ReviewAll'
import ReviewForm from "../components/ReviewForm"

const Review = () => {

    const [review, setReview] = useState('')

    useEffect(()=>{
        const fetchReview = async()=> {
            const response = await fetch('https://my-khodam-api.vercel.app/api/reviews')
            const json = await response.json()

            if(response.ok){
                setReview(json)
            }
        }

        fetchReview()
    },[])

    return(
        
        <div className="flex justify-center min-h-screen bg-slate-700">
            
            <main className="border border-4 p-2 md:p-6 border-[#A2D2FF] my-5 max-w-xs md:max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#A2D2FF] text-center">Reviews</h2>
            <ReviewForm/>
            <div className="flex flex-wrap justify-center">
                {
                    review && review.map((review)=>(
                        <ReviewAll key={review._id} review={review}/>
                    ))
                }
            </div>
                
            </main>
        </div>
    )
}

export default Review