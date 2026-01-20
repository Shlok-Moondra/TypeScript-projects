import { useState } from "react"



interface OrderFormProps{
    onSummit(order:{name:string; cups:number}):void
}
export function OrderForm({onSummit}:OrderFormProps){

    const [name,setName] = useState<string>("Masala");
    const [cups,setCups] = useState<number>(1);

    function handleSumit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSummit({name,cups});
    }

    return(
        <form onSubmit={handleSumit}>
            <label>Chai Name</label>
            <input 
            value={name}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)}
            />
            <label>Chai cup</label>
            <input 
            type="number"
            value={cups}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCups(Number(e.target.value) || 0)}
            />
            <button type="submit">place order</button>

        </form>

    )
}