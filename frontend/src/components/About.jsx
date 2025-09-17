export default function About(){
return(
<>
<div className="relative mt-60 text-center">
<h1 className='bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent text-amber-100 mt-2 mx-auto text-2xl md:text-2xl'>About GLF</h1>
</div>
<div className='md:flex-grow hover:shadow-md duration-900 ease-in-out shadow-cyan-300 flex-col text-cyan-200 bg-gray-800 flex m-3 border border-green-300 rounded-4xl md:p-3 md:text-xl relative justify-center items-center' id='about'> 
<div className='flex m-3 rounded-4xl justify-center items-center md:p-3'>
<img className='border-5 border-amber-200 md:h-50 md:w-100 h-40 w-50 rounded-4xl ms-2 opacity-70 brightness-100 contrast-100' src='src/assets/WhatsApp Image 2025-08-09 at 2.05.48 PM.jpeg' ></img>
<p className='text-wrap p-3'>Good Life Foundation was launched on 10/04/2024 under the leadership of social worker G.vigneswaran. The Good Life Foundation continues to work to provide equal rights and justice to all people in our country. It helps people who are deprived of basic amenities in their daily lives</p>
</div>
<div className="flex m-3 rounded-4xl p-3 items-center gap-4">
<p className=" flex-1 text-wrap p-1">
The founder, G.Vigneswaran(B.com), is a disabled person himself and has created
this organization with the aim of fulfilling the basic needs of the disabled
by providing them with education and employment opportunities.
</p>
<img
src="WhatsApp Image 2025-08-09 at 2.05.55 PM.jpeg"
className="w-45 h-45 object-cover rounded-4xl md:h-55 md:w-55 opacity-90 brightness-90 contrast-100 border-5 border-amber-200"
alt="Founder"
/>
</div>
<div className="flex m-3  rounded-4xl p-3 items-center gap-4">
<img
src="src/assets/WhatsApp Image 2025-08-09 at 2.06.15 PM (1).jpeg"
className="border-5 border-amber-200 w-45 h-45 object-cover rounded-4xl md:h-55 md:w-55 opacity-90 brightness-90 contrast-100"
alt="Founder"
/>
<p className="flex-1 text-wrap p-1">The Secretary, Social worker Surya(MSW), through the executive committee of the organization, is taking strong action against drugs that pollute the education of rural people, social justice and equality.</p>
</div>

</div>
</>
)
}
