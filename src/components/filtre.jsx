/**
 * 
 * @param {{children?:any}} param0 
 * @returns {JSX.Element}
 */
export default function FilterComponent(){
    return(
       <div className="my-8 overflow-x-auto overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-hidden py-4">
            <div className="flex gap-2 w-max px-4 lg:px-0">
            <Categorie categorie='Meches' />
            <Categorie categorie='Greffes de Cheveux' />
            <Categorie categorie='Accessoires' />
            </div>
       </div>
    )
}

function Categorie({categorie, }){
    const handleClick = () => {
        
    }
    return(
        <button className="px-6 py-2 border">
            {categorie}
        </button>
    )
}