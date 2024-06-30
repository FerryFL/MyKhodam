const ReviewAll = ({review}) =>{

    const limit = 15;

    const truncateText = (text) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    return(
        <div className="bg-[#FFAFCC] my-2 mx-1 py-2 px-2 rounded w-5/12 md:w-3/12">
            <p className="font-semibold lowercase">~ {truncateText(review.name)}</p>
            <p className="text-xs font-semibold md:text-base lowercase">{truncateText(review.review)}</p>
        </div>
    )
}   

export default ReviewAll