import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
            <div>
                <ul className=' bg-pink-300 h-[50px] flex items-center gap-7 px-3 font-bold justify-center'>
                    <li className=''><Link to ='/' >Background Remover</Link></li>
                    <li><Link to ='/' >Convert</Link></li>
                    <li><Link to ='/' >Download</Link></li>
                    <li><Link to ='/' >RemoveBg</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;