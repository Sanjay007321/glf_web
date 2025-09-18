import { useState, useEffect } from "react";
export default function Services() {
const slides = [
"WhatsApp Image 2025-08-09 at 2.06.02 PM (1).jpeg",
"WhatsApp Image 2025-08-09 at 2.05.59 PM.jpeg",
"WhatsApp Image 2025-08-09 at 3.47.16 PM.jpeg",
"WhatsApp Image 2025-08-09 at 2.06.14 PM.jpeg",
"WhatsApp Image 2025-08-09 at 2.06.14 PM (2).jpeg",
];
const [current, setCurrent] = useState(0);
useEffect(() => {
var interval = setInterval(() => {
setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
}, 5000);
return () => clearInterval(interval);
}, [slides.length]);
const prevSlide = () => {
setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
};
const nextSlide = () => {
setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
};
return (
<div
id="services"
className="flex m-3 relative flex-col rounded-4xl p-3 gap-4 mt-50"
>
<h1 className="text-2xl mx-auto bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent mt-2">Our Services</h1>
<div className="flex border flex-col hover:shadow-md duration-900 ease-in-out shadow-cyan-300 bg-gray-800 bg-opacity-0 border-green-300 rounded-4xl p-5 gap-5">
<div className="flex items-center justify-center md:justify-between">
{/* Prev Button */}
<button onClick={prevSlide}>
<svg
className="h-15 w-15 m-5 md:h-25 md:w-25 ml-auto fill-emerald-300"
viewBox="-3 0 32 32"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
fill=""
/>
<path
d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
fill=""
/>
</svg>
</button>

{/* Image */}
<img
src={slides[current]}
alt="service"
className="h-60 w-60 md:h-90 md:w-90 rounded-lg border-cyan-100 border-5 transition-all duration-500 ease-in-out"
/>

{/* Next Button */}
<button onClick={nextSlide}>
<svg
className="h-15 w-15 m-5 md:h-25 md:w-25 mr-auto fill-emerald-300"
viewBox="-3 0 32 32"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
fill=""
/>
<path
d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
fill=""
/>
</svg>
</button>
</div>
<div className="text-cyan-200 md:text-xl flex flex-col gap-3">
<p>➤ Conducting awareness meetings on the elimination of alcohol and drugs that destroy the youth.</p>
<p>➤ Promoting women's education and conducting meetings to create awareness that girl child marriage is wrong.</p>
<p>➤ Providing employment opportunities to educated but unemployed youth.</p>
<p>➤ Providing free equipment to the differently abled and providing them with suitable employment opportunities and self-employment.</p>
<p>➤ Providing self-employment to unsupported women and handmaids.</p>
<p>➤ Implementing the nature conservation and tree planting project extensively throughout Tamil Nadu.</p>
<p>➤ Initiating the work of establishing a 'rehabilitation center' for the unsupported people through our organization.</p>
</div>
</div>
</div>
);
}
/*



*/
