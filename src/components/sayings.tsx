import { useEffect, useState } from "react"
import { getAllSayings } from "../firebase/db"
import { Star } from "./star"

//interfaces
interface DataI {
    id?: string,
    saying: string,
    starCount: number,
    createdAt: Date
}

const Saying:React.FC<DataI> = ({saying, starCount, createdAt}) => {
    return(
        <section className="card">
            <p>{saying}</p>
            <div className="starRootDiv">
                <p>{createdAt.toString()}</p>
                <Star starCount={starCount} />
                </div>
        </section>
    )
}

export const Sayings: React.FC = () => {
    //localStates
    const [data, setData] = useState<DataI[]>([])

    useEffect(()=>{
        const unsub = () => {
            getAllSayings(setData)
        }

        return unsub()
    },[])
    return(
        <div className="sayingsContainer">
        <div className="sayings">
            {
                data.map(({saying , starCount, createdAt},i) => {
                    return(
                        <Saying key={i} saying={saying} starCount={starCount} createdAt={createdAt} />
                    )
                })
            }
        </div>
        </div>
    )
}



const data1: DataI[] = [
    {
    saying: 'This is the actuall saying first time! is the actuall saying first time!  is the actuall saying first time! ',
    starCount: 30,
    createdAt: new Date()
    },
    {
    saying: 'This is the actuall saying first time! the actuall saying first time! the actuall saying first time! ',
    starCount: 10,
    createdAt: new Date()
    },
    {
    saying: 'This is the actuall saying first time!  saying first time! the actuall s saying first time! the actuall s  saying first time! the actuall s  saying first time! the actuall s  saying first time! the actuall s saying first time! the actuall s saying first time! the actuall s',
    starCount: 20,
    createdAt: new Date()
    },
    {
    saying: 'This is the actuall saying first time!',
    starCount: 10,
    createdAt: new Date()
    }
]