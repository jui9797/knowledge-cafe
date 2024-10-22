import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-auto border-b-2 max-w-7xl '>
           <h1 className='text-3xl font-bold'>Knowledge Cafe</h1> 
           <img src={profile} alt=""  />
        </div>
    );
};

export default Header;