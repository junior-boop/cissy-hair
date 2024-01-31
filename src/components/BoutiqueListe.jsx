import { db } from "../firebase/client";
import { collection, getDocs, } from "firebase/firestore";
import Grid, { Gridtemplate_3, ProductItem } from "./grid";
import { useEffect, useState } from "react";


/**
 * @typedef {{id: string, createdAt : number, price: string: name : string, description: string}} Data
 * @param {{datalist : Array<Data>}} param0 
 * @returns 
 */
export default function Liste({datalist}){
    
    console.log(datalist)

    return(
        <div id = 'liste'>
            <Gridtemplate_3>
               {
                datalist.map((el, key) => {
                    return <Produit data={el} key={key}/>
                })
               }
            </Gridtemplate_3>
        </div>
    )
}


function Produit({data}){
    console.log(data.image)
    return(
        <ProductItem>
            <div className="flex flex-col">
                <div className={`bg-slate-500 w-full aspect-square rounded-3xl`} style={{backgroundImage : data.image}}>
                  {/* <img src={data.image} /> */}
                </div>
                <div className="flex-1 py-2">
                    <div className="text-[32px] font-semibold">name</div>
                </div>
                <div className="flex justify-end ">

                </div>
            </div>
        </ProductItem>
    )
}