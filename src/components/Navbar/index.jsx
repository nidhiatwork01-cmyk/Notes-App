import logo from '../../assets/download.png';

export const Navbar=()=>{
    return(
        <header className='flex px-5 py-2 gap-4 border-b-2 border-gray-100'>
            <div className='w-20 h-12'>
               <img className='w-full h-full' src={logo} alt='logo'/>
            </div>
            <h1 className='text-indigo-800 text-4xl font-semibold'>NoteIt</h1>
        </header>
    );
};
