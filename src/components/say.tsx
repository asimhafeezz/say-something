import { useState } from "react"

export const Say: React.FC = () => {
    //local states
    const [sayText, setSayText] = useState<string>("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSayText(e.target.value)
    } 

    const onSubmitHandler = (): void => {
        console.log('text')
    }
    return(
        <div className="say">
            <h2>Say Something</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="text" multiple name="sayText" value={sayText} onChange={onChangeHandler} />
                <div><button>Say!</button></div>
            </form>
        </div>
    )
}