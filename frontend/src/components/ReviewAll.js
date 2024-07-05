const ReviewAll = ({ review }) => {
    return (
        <div className="bg-[#FFAFCC] my-2 mx-1 py-2 px-2 rounded w-5/12 md:w-3/12">
            <p className="text-base font-bold break-words">~ {review.name}</p>
            <p className="text-sm font-semibold md:text-base break-words">{review.review}</p>
        </div>
    );
}

export default ReviewAll;