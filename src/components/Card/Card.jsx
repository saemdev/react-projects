
import { FaDollarSign, FaRegBookmark } from 'react-icons/fa';
const Card = ({ card,handleAddToSidebar = {} }) => {
    let { image, course_title, course_description, price, credits } = card;
    return (
        <div className="w-80 rounded-lg p-4 border-2">
            <img src={image} alt="" />
            <h1 className="text-xl font-semibold my-2">{course_title}</h1>
            <p className="text-gray">{course_description}</p>

            {/* flex inside card */}
            <div className="flex justify-between my-4 text-lg">
                <div className='flex gap-2'>
                    <button><FaDollarSign /></button>
                    <p>Price : {price}</p>
                </div>
                <div className='flex gap-2'>
                    <button><FaRegBookmark /></button>
                    <p>Credit : {credits}</p>
                </div>
            </div>

            <button className='bg-blue-600 py-2 w-full text-white rounded-lg font-semibold text-lg' onClick={()=>handleAddToSidebar(card)}>Select</button>

        </div>
    );
};

export default Card;