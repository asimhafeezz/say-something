import { useEffect, useRef, useState } from "react"

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
        console.log('text')
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