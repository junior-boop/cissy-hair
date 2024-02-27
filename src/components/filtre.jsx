

/**
 * 
 * @param {{children?:any}} param0 
 * @returns {JSX.Element}
 */
export default function FilterComponent({passing_url}){
    return(
       <div className="my-8 overflow-x-auto overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-hidden py-4">
            <div className="flex gap-2 w-max px-4 lg:px-0">
            <Categorie categorie='Mèches' href = '#meches' url = {passing_url} />
            <Categorie categorie='Soins de peau' href = '#peau' url = {passing_url}/>
            <Categorie categorie='Produits Capillaires' href = '#capillaires' url = {passing_url}/>
            <Categorie categorie='Compléments Alimentaires' href = '#aliments' url = {passing_url} />
            <Categorie categorie='Accessoires' href = '#accessoires' url = {passing_url} />
            </div>
       </div>
    )
}

function Categorie({categorie, href, url}){
    return(
        <a href = {href} className="px-6 py-2 border">
            {categorie}
        </a>
    )
}