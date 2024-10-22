

const Bookmark = ({bookmark}) => {
    const {title} =bookmark;
    return (
        <div className="bg-purple-300 p-4 rounded">
            <div className="bg-white rounded p-2">
            <h3 className="text-xl text-center font-bold text-slate-700">{title}</h3>
            </div>
        </div>
    );
};

export default Bookmark;