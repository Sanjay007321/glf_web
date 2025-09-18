export default function Socials(){
return(
<>
<div id="socials" className="relative mt-50 items-center flex flex-col justify-center">
<h1 className="text-2xl mx-auto bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Socials</h1>
<div className="m-5 text-cyan-200 hover:shadow-md duration-900 ease-in-out shadow-cyan-300 border items-center justify-center bg-gray-800 bg-opacity-0 border-green-300 rounded-4xl p-5 gap-5 flex">
<a href="https://chat.whatsapp.com/Bnv5T4Rrdj5LqNRQlXCoJ7?mode=ems_copy_t">
<div className="flex flex-col items-center justify-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721" className="h-10 m-5"/>
<h1>WhatsApp</h1>
</div>
</a>
<a href="https://youtube.com/@deivanaia-k4e?si=Ntucv1XB5Wfr-rrd">
<div className="flex flex-col items-center justify-center">
<img src="youtube-logo-png-46016.png" className="h-20 p-0"/>
<h1>YouTube</h1>
</div>
</a>
</div>
</div>
</>
)
}
