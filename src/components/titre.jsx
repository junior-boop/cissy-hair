import { LabelIcon } from "./icones";


/**
 * 
 * @param {{titre : string, url? : string, btn?:boolean}} param0 
 * @returns 
 */
export const TitleBar = ({titre, url = '/', btn}) => {
    return(
        <div className='flex items-center justify-between mb-8 px-4'>
            <div className='text-3xl w-[80%] lg:text-5xl lg:w-[50%] font-bold'>
                {titre}
            </div>
            <div>
                {
                    btn 
                    ? (<a className="w-[70px] aspect-square rounded-xl bg-[#252B5B] inline-flex items-center justify-center text-white" href={url}>
                            <LabelIcon className = 'w-[32px]' />
                        </a>)
                    : null 
                }
            </div>
        </div>
    )
}
