import { useEffect, useState } from "react";
import { CarbonCloseLarge, LucideMenu } from "./icones";

export default function Menu(){
    const [open, setOpen] = useState(false)
    return(
        <div className="w-full h-full flex items-center justify-center relative">
            <button onClick={() => setOpen(true)}>
                <LucideMenu className = 'w-6 h-6 text-black' />
            </button>
            <div className={`fixed top-[0] ${open ? 'right-0' : 'right-[-90vw]'} w-[90vw] bg-white z-10 h-[100vh] duration-300 ease-in-out`}>
                <div className="p-4 flex justify-between items-center">
                    <div className="font-bold text-xl">Menu</div>
                    <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full border flex items-center justify-center"><CarbonCloseLarge className = "w-6 h-6 text-black" /></button>
                </div>
                <ul className="text-left">
                    <NavLi 
                        icon = {<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19zM7 15h10v2H7z"/></svg>}
                        name ={'Accueil'} url="/" />
                    <NavLi 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A3.985 3.985 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a3.99 3.99 0 0 1-1 2.646m-2 1.228a4.01 4.01 0 0 1-4-1.228A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354a3.99 3.99 0 0 1-4 1.228V20h14zM14 9a1 1 0 1 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 0 1 2 0a2 2 0 1 0 4 0"/></svg>}
                        name={'Boutique'} url="/boutique" />
                    <NavLi 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4v4h4v12H5V4zM3.999 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5zM15 11.667l-4.88-3.253a.4.4 0 0 0-.621.333v6.505a.4.4 0 0 0 .622.333L15 12.333a.401.401 0 0 0 0-.666"/></svg>}
                        name={'Tutoriels'} url="/tutoriel" />
                    <NavLi 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3c.279 0 .55.033.81.094a5.948 5.948 0 0 0-.301 1.575L6 16v.086a1.493 1.493 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"/></svg>}
                        name={'Coiffeuses'} url="/coiffeuses" />
                    <NavLi 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-9.5V15h1v2h-4v-2h1v-2.5h-1v-2zm.5-2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"/></svg>}
                        name={'A Propos'} url="/a-propos" />
                    {/* <NavLi 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8h2v5.5a1.5 1.5 0 0 0 3 0zm-8-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>}
                        name={'Contactez-nous'} url="/contacts" /> */}
                </ul>
            </div>
        </div>
    )
}

function NavLi({
    icon,
    name, 
    url = '/'
}){
    const [active, setActive] = useState(false)
    useEffect(() => {
        if(location.pathname === url) setActive(true)
        else setActive(false)
    })
    return(
        <li className={`py-3 px-6 active:bg-slate-100 text-slate-900 ${active ? 'bg-slate-100' : 'bg-white'} `}><a href={url} className="flex gap-4 items-center">{icon} {name}</a></li>
    )
}