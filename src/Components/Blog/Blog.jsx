import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} =blog
    return (
        <div className="mb-20 space-y-4">
          <div className="w-full h-400 mb-8">
          <img  src={cover} alt={`Cover pictures of the title ${title}`} /> 
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
            <button className="ml-2 text-red-500 text-2xl"><CiBookmark /></button>
            </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hastag, idx)=><span className="ml-3 font-bold" key={idx}><a href="#"> {hastag}</a></span>)
                }
            </p>
            <button className="text-blue-600 underline"><a href="">mark as read</a></button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;