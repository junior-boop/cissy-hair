import { useState } from "react"

export default function Gallerie_img ({ images }){
    
    const [position, setPosition] = useState(0)

    console.log(images)
    return(
        <div className="flex-1 p-4">
            <div className="w-full lg:w-full aspect-square bg-slate-300 bg-cover bg-center rounded-lg mb-3 overflow-hidden border">
                <img src={images && images[position]} alt="" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="flex flex-wrap gap-2">
                {
                    images && images.map((el, key) => (<button onClick={() => setPosition(key)} className={`w-[23%] aspect-square rounded-xl border ${position === key ? 'border-[3px] border-red-600' : 'border'}`} key={key}>
                                                            <img src={el} alt="" className="w-full h-full aspect-square object-cover" />
                                                        </button>))
                }
            </div>
        </div>
    )
}