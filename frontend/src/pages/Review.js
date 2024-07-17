import { useEffect, useState } from "react"
import axios from 'axios'
import ReviewAll from '../components/ReviewAll'
import ReviewForm from "../components/ReviewForm"
import KhodamImage from '../img/Khodam.png';

const Review = () => {

    const [review, setReview] = useState('')

    useEffect(()=>{
        const fetchReview = async()=> {
            try{
                const response = await axios.get('https://my-khodam-api.vercel.app/api/reviews')
                if(response.status === 200){
                    setReview(response.data)
                }
            }catch(error){
                console.log('Error: ',error)
            }
        }

        fetchReview()
    },[])

    return(
        <div className="relative flex items-center justify-center h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                style={{ backgroundImage: `url(${KhodamImage})`}}
            ></div>
            <div className="relative flex items-center justify-center bg-slate-700 bg-opacity-80 backdrop-blur-lg">
                
                <main className="border border-4 p-2 md:p-6 border-[#A2D2FF] max-w-sm md:max-w-3xl ">
                <h2 className="mt-3 text-3xl font-semibold text-[#A2D2FF] text-center">Reviews</h2>
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
        </div>
        
        
    )
}

export default Review