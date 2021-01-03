import { useEffect, useRef, useState } from "react"
import { createSaying } from "../firebase/db"

export const Say: React.FC = () => {
    //local states
    const [sayText, setSayText] = useState<string>("")
    //ref
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    //run on render useEffect hook
    useEffect(()=>{
        textareaRef.current?.focus()
    },[])

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setSayText(e.target.value)
    } 

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if(sayText){
            const createdAt: Date = new Date()
            createSaying({saying: sayText, starCount: 0 , createdAt})
            setSayText('')
        }
        else{
            textareaRef.current?.focus()
        }
    }
    return(
        <div className="say">
            <h1>Say Something...</h1>
            <section className="formRoot">
            <form onSubmit={onSubmitHandler}>
                <textarea rows={10} ref={textareaRef} placeholder="write something to say something..." name="sayText" value={sayText} onChange={onChangeHandler} />
                <div className="buttonSection"><button>Say It!</button></div>
            </form>
            </section>
        </div>
    )
}