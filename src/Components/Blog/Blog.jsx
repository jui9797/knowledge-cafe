import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {id,title, cover, author, author_img, reading_time, posted_date, hashtags} =blog
    return (
        <div className="mb-20 space-y-4 shadow-xl p-4">
          <div className="w-full h-[400px] mb-8 rounded">
          <img className="w-full h-full" src={cover} alt={`Cover pictures of the title ${title}`} /> 
            </div> 
            <div className="flex justify-between mb-4">
            <div className="flex">
             <img className="w-14" src={author_img} alt="" />
             <div className="ml-6">
              <h3>{author}</h3>
              <p>{posted_date}</p>
             </div>
            </div>
            <div className="flex items-center">
            <span>{reading_time} min read</span>
            <button onClick={handleAddToBookmark} className="ml-2 text-red-500 text-2xl"><CiBookmark /></button>
            </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hastag, idx)=><span className="ml-3 font-bold" key={idx}><a href="#"> {hastag}</a></span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(reading_time, id)} className="text-blue-600 underline">mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blog;