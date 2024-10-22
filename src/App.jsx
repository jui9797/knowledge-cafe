
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);
  const [readingTime, setReadingTime] =useState(0)

  const handleAddToBookmark =blog=>{
    console.log('bookmark adding soon', blog)
    const newBookmarks =[...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleReadingTime =(time, id)=>{
    console.log('marking as read', time)
    setReadingTime(readingTime + time)

    // remove from bookmark
    console.log('remove bookmark', id)
    const remainingBookmarks =bookmarks.filter(bookmarks => bookmarks.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-5 my-4'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleReadingTime={handleReadingTime}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
