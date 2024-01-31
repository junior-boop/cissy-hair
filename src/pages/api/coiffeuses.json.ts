
import type { APIRoute } from 'astro'
import { db } from "../../firebase/client";
import { collection, getDocs } from "firebase/firestore";


export const GET:APIRoute = async (): Promise<Response> => {

    async function getData() : Promise<[]>{
        const refDocs = collection(db, "coiffeuses")
        const DataStore = await getDocs(refDocs)
        let arr = []
    
        if(!DataStore.empty) {
            DataStore.forEach(Element => {
                arr.push({
                    id : Element.id,
                    ...Element.data()
                })
            })
        }
    
        return arr
    }
    
        
    return new Response(JSON.stringify(await getData()), {
        status : 200,
        headers : {
            "Content-Type" : "application/json"
        }
    })
}