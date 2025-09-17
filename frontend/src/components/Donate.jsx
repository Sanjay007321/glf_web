export default function Donate(){
return(
<>
<div id="donate" className="mt-50 relative flex flex-col">
<h1 className="text-2xl mx-auto bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent mt-2">Donate Us</h1>
<div className="hover:shadow-md duration-900 ease-in-out shadow-cyan-300 flex m-5 text-cyan-200 items-center md:flex-row md:justify-around justify-center border flex-col bg-gray-800 bg-opacity-0 border-green-300 rounded-4xl p-5 gap-5">
<div className="flex flex-col  items-center justify-center gap-4">
<p className="text-xl">Scan and Donate</p>
<img src="src/assets/WhatsApp Image 2025-08-30 at 11.38.56 PM.jpeg" className="h-40 w-40 rounded-xl border border-white border-5"> 
</img>
<p className="text-md">UPI Id: glf7092606176@pytes</p>
</div>
<p>(or)</p>
<div className="flex flex-col items-center justify-center gap-4">
<p className="text-2xl">Bank transfer</p>
<p className="text-md">Bank Name: CANARA BANK</p>
<p className="text-md">Name: GOOD LIFE FOUNDATION</p>
<p className="text-md">Account No: 120034916560</p>
<p className="text-md">IFSC Code: CNRB0000969</p>
<p className="text-md">MICR Code: 632015102</p>
</div>
</div>
</div>

</>
)
}