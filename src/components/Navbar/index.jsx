import logo from '../../assets/download.png';

export const Navbar=()=>{
    return(
        <header className='flex'>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <h1 className='text-indigo-800'>NoteIt</h1>
        </header>
    )
}