import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-300 p-4 rounded-lg">
            
            <div className="bg-white border-2 border-blue-800 p-4 rounded-lg">
            <h2 className="text-blue-800 text-center">Spend time on read: {readingTime} min</h2>
            </div>
            <br />
            <h2 className="font-bold text-center text-2xl">Bookmarked Blogs :{bookmarks.length}</h2>

          {
            bookmarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
          }

        </div>
    );
};

export default Bookmarks;