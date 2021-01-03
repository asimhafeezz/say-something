import { useEffect, useState } from "react"
import { getAllSayings } from "../firebase/db"
import { Star } from "./star"
import moment from 'moment'
import { Spinner } from "./util"

//interfaces
export interface DataI {
    id: string,
    saying: string,
    starCount: number,
    createdAt: any
}

const Saying:React.FC<DataI> = ({id, saying, starCount, createdAt}) => {
    return(
        <section className="card">
            <p>{saying}</p>
            <div className="starRootDiv">
                <p className="date">{moment(createdAt.toDate()).calendar()}</p>
                <Star id={id} starCount={starCount} />
                </div>
        </section>
    )
}

export const Sayings: React.FC = () => {
    //localStates
    const [data, setData] = useState<DataI[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        const unsub = () => {
            getAllSayings(setData, setLoading)
        }

        return unsub()
    },[])
    return loading ? <Spinner /> : (
        <div className="sayingsContainer">
        <div className="sayings">
            {
                data.map(({id, saying , starCount, createdAt},i) => {
                    return(
                        <Saying key={i} id={id} saying={saying} starCount={starCount} createdAt={createdAt} />
                    )
                })
            }
        </div>
        </div>
    )
}
