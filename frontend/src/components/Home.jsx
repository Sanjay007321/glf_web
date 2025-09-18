import { useState } from 'react';
import '../App.css';
import About from './About';
import Vision from './Vision';
import Services from './Services';
import Donate from './Donate';
import Joinus from './Joinus';
import Contact from './Contact';
import Socials from './Socials';

export default function Home() {
  
const [menu,setMenu] = useState(false);
const togglemenu = ()=>{
setMenu(!menu);
}
return(
<div className='md:text-lg' id='home'>
<video src="WhatsApp Video 2025-08-09 at 7.27.32 PM.mp4" autoPlay loop muted></video>
<div className=' flex relative text-nowrap md:h-[150px] justify-between gap-3 md:justify-center p-2 md:flex-auto bg-gray-800'>
<img src='WhatsApp_Image_2025-08-09_at_2.05.48_PM-removebg-preview.png' className='animate-pulse duration-1000 h-20 m-4'></img>
<h1 className='mt-10 text-2xl md:text-4xl animate-pulse bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent'>Good Life Foundation</h1>
<img src='WhatsApp_Image_2025-08-09_at_2.05.48_PM-removebg-preview.png' className='animate-pulse md:h-20 md:m-4 h-0'></img>
{ 
!menu ?
<svg onClick={togglemenu} className='transition-all animate-pulse duration-2000 ease-in-out h-10 w-10 ml-auto md:hidden m-9 fill-cyan-950' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="cyan" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<title>Menu</title>
</svg> 
:
<svg onClick={togglemenu} className='transition-all animate-pulse duration-2000 ease-in-out h-10 w-10 ml-auto md:hidden m-9 fill-cyan-950' viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Cancel</title>
<g id="Page-1" stroke="none" fill="" fill-rule="">
<g id="work-case" fill="cyan" transform="translate(91.520000, 91.520000)"><polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
</polygon>
</g>
</g>
</svg> 
} 
<div className='hidden absolute bottom-7 p-2 md:flex flex-row gap-6 justify-center md:h-5'>
<a href='#about' className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>About Us</a>
<a href='#vision'className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>Our Visions</a>
<a href='#services'className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>Our Services</a>
<a href='#donate'className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>Donate Us</a>
<a href='#joinus'className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>Join with Us</a>
<a href='#contact'className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>Contact</a>
<a href='#socials'className='text-cyan-300 transition delay-200 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white'>Socials</a> 
</div>
</div>
{
<div className={`flex flex-col rounded-b-3xl gap-4 justify-center items-center bg-gray-800 md:hidden 
transition-all duration-1000 ease-in-out overflow-hidden
${menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0" } text-white relative`}>
<a onClick={togglemenu} href='#about' className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>About Us</a>
<a onClick={togglemenu} href='#vision'className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>Our Visions</a>
<a onClick={togglemenu} href='#services'className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>Our Services</a>
<a onClick={togglemenu} href='#donate'className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>Donate Us</a>
<a onClick={togglemenu} href='#joinus'className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>Join with Us</a>
<a onClick={togglemenu} href='#contact'className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>Contact</a>
<a onClick={togglemenu} href='#socials'className='mb-3 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent'>Socials</a> 
</div>
}
<div className='absolute text-md text-center flex justify-center items-center m-15 md:ml-50'>
<p className='md:text-3xl italic bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 text-transparent bg-clip-text text-xl'>“It's not how much we give, but how much love we put into giving.”</p>
</div>
<div className='grid place-content-center'>
<a href='#about' className='ease-in-out transition-all duration-1000 delay-1000'>
<svg fill="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    className='md:h-40  md:w-40 h-30 mt-50 fill-emerald-300 animate-bounce duration-1000 delay-1000' viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g>
<path d="M49.288,59.647c0.383,0.348,0.863,0.519,1.342,0.519c0.076,0,0.151-0.015,0.228-0.023c0.028,0.001,0.057,0.008,0.085,0.008
    c0.545,0,1.088-0.222,1.482-0.657l15.231-16.804c0.742-0.818,0.68-2.083-0.139-2.824c-0.818-0.743-2.083-0.679-2.824,0.139
    L50.656,55.49L35.169,41.453c-0.819-0.744-2.083-0.68-2.824,0.139c-0.742,0.818-0.68,2.083,0.139,2.824L49.288,59.647z"/>
<path d="M50,83.214c18.449,0,33.458-15.009,33.458-33.457c0-18.449-15.009-33.458-33.458-33.458
    c-18.448,0-33.457,15.009-33.457,33.458C16.543,68.205,31.552,83.214,50,83.214z M50,20.299c16.243,0,29.458,13.215,29.458,29.458
    c0,16.242-13.215,29.457-29.458,29.457c-16.242,0-29.457-13.215-29.457-29.457C20.543,33.514,33.758,20.299,50,20.299z"/>
</g>
</svg>
</a>
</div>
<About/>
<Vision/>
<Services/>
<Donate/>
<Joinus/>
<Contact/>
<Socials/>

</div>
);

}
