import { useState } from 'react'
import './formulaire.css'
import { LineMdConfirm } from './icones'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/client'
export default function Formulaire ({ produit }){
    const [validation, setValidation] = useState(false)
    
    const price = () => {
        const r = parseInt(produit.price)
        const p = new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(r)
        return p
    }
    


    const handleSubmit = (e) => {
        e.preventDefault()

        const target = e.target
        const commandes = {
            order : produit,
            amount : price(),
            customer : {
                name : target.name.value,
                surname : target.surname.value,
                ville : target.ville.value,
                email : target.mail.value,
                tel : target.tel.value
            }
        }

        handleCommande(commandes)
    }

    async function handleCommande(commandes){
        const headersList = {
            "Accept": "*/*",
            "Authorization": "Bearer EAAUAKVmVtFEBO4ZBi8yTXQnyc51ZCffGwY6w9ZBKNZBItS7GFE9NZBSzhZCShGAiN4kzRYcWSAR7ZC0jQaFAS0ODJhz7ZBDmdCRfpMXSYwhi4grkdAu5tvqOg9IblG7vXMca2NdB04jgX7U638gxuZAwTsFMRSP7TBvCCwIRATOaCFTQv6zpRwWf9mpOV0f2xnxfz",
            "Content-Type": "application/json"
        }
    
    
    
        try{
          const ClientRef = await addDoc(collection(db, 'clients'), commandes.customer)
          if(ClientRef){
            commandes.customer.id = ClientRef.id
            commandes.customer.createdAt = Date.now()
    
            const CommandeRef = await addDoc(collection(db, 'commandes'), commandes)
            if(CommandeRef){
    
                const commandId = CommandeRef.id
    
                const convertOrderToString = () => {
                    let userOrderInString = ''
            
                    commandes.order.forEach(el => {
                        const liste =`${el.number} ${el.name} ${el.total}, `
                        userOrderInString += liste                
                    })
            
                    return userOrderInString
                }
            
                   
                
                const bodyContent_1 = JSON.stringify({ 
                    "messaging_product": "whatsapp", 
                    "recipient_type": "individual",
                    "to": commandes.customer.tel, 
                    "type": "template", 
                    "template": { 
                      "name": "commande", 
                      "language": { 
                        "code": "Fr" 
                      },
                      "components": [
                        {
                          "type": "body",
                          "parameters": [
                            {
                              "type": "text",
                              "text": commandes.customer.surname + " " + commandes.customer.name
                            },
                            {
                              "type": "text",
                              "text": commandId
                            },
                            {
                              "type": "text",
                              "text": convertOrderToString()
                            },
                            {
                              "type": "currency",
                              "currency": {
                                "fallback_value": `${commandes.amount} francs CFA`,
                                "code": "CFA",
                                "amount_1000": commandes.amount
                              }
                            },
                            {
                              "type": "text",
                              "text": "Cissy's Hair Order"
                            }
                            
                          ]
                        }
                      ]
                    } 
                });
    
                const bodyContent_2 = JSON.stringify({ 
                    "messaging_product": "whatsapp", 
                    "recipient_type": "individual",
                    "to": "237656065734", 
                    "type": "template", 
                    "template": { 
                      "name": "commande_server", 
                      "language": { 
                        "code": "Fr" 
                      },
                      "components": [
                        {
                          "type": "body",
                          "parameters": [
                            {
                              "type": "text",
                              "text": commandes.customer.surname + " " + commandes.customer.name
                            },
                            {
                              "type": "text",
                              "text": commandes.customer.tel
                            },
                            {
                              "type": "text",
                              "text": convertOrderToString()
                            },
                            {
                              "type": "text",
                              "text": commandId
                            },
                            {
                              "type": "currency",
                              "currency": {
                                "fallback_value": `${commandes.amount} francs CFA`,
                                "code": "CFA",
                                "amount_1000": commandes.amount
                              }
                            }
                            
                          ]
                        }
                      ]
                    } 
                });
        
                
                setValidation(true)
                const response_2 = await fetch("https://graph.facebook.com/v17.0/194809957044371/messages", { 
                    method: "POST",
                    body: bodyContent_2,
                    headers: headersList
                });
    
                if(response_2.ok) {
                        const response = await fetch("https://graph.facebook.com/v17.0/194809957044371/messages", { 
                        method: "POST",
                        body: bodyContent_1,
                        headers: headersList
                    });
                }
    
                setTimeout(() => {
                  setValidation(false)
                }, 2000)
            }
          }
        } catch (error) {
          console.log("il y a une erreur", error)
        }
    }
    return(
        <div class="flex gap-3 p-6 border mt-4 w-full rounded-xl" onSubmit={handleSubmit}>
                <form class="w-full">
                    <div class="champInput">
                        <label for="name">Nom</label>
                        <input type="text" id="name" name="name" placeholder="Votre nom" required/>
                    </div>
                    <div class="champInput">
                        <label for="name">Prénom</label>
                        <input type="text" id="name" name="surname" placeholder="Votre nom" required/>
                    </div>
                    <div class="champInput">
                        <label for="ville">Ville de résidence</label>
                        <input type="text" id="name" name="ville" placeholder="Votre ville de résidence" required/>
                    </div>
                    <div class="champInput">
                        <label for="tel">Téléphone</label>
                        <input type="tel" id="name" name="tel" placeholder="Votre numéro de téléphone WhatsApp" required/>
                    </div>
                    <div class="champInput">
                        <label for="mail">Adresse e-mail</label>
                        <input type="email" id="mail" name="mail" placeholder="Votre e-mail" required/>
                    </div>
                    <div class="mt-4">
                        <button class="px-5 py-1 bg-green-600 text-white rounded-md w-full lg:w-[200px] flex justify-center">Valider</button>
                    </div>
                </form>
                {
                    validation && (<div className='fixed top-0 left-0 right-0 w-full h-full bg-white z-10 flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-[72px] aspect-square flex items-center justify-center rounded-full border-2'>
                            <LineMdConfirm className = 'w-10 h-10' />
                        </div>
                        <div className='text-center font-bold text-xl'>
                            Commande Valider
                        </div>
                    </div>
                </div>)
                }
            </div>
    )
}