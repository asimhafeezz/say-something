import { Star } from "./icons/star"

//interfaces
interface DataI {
    saying: string,
    starCount: number
}

const Saying:React.FC<DataI> = ({saying, starCount}) => {
    return(
        <section className="card">
            <p>{saying}</p>
            <div className="starRootDiv"><Star starCount={starCount} /></div>
        </section>
    )
}

export const Sayings: React.FC = () => {
    return(
        <div className="sayingsContainer">
        <div className="sayings">
            {
                data.map(({saying , starCount},i) => {
                    return(
                        <Saying key={i} saying={saying} starCount={starCount} />
                    )
                })
            }
        </div>
        </div>
    )
}



const data: DataI[] = [
    {
    saying: 'This is the actuall saying first time! is the actuall saying first time!  is the actuall saying first time! ',
    starCount: 30
    },
    {
    saying: 'This is the actuall saying first time! the actuall saying first time! the actuall saying first time! ',
    starCount: 10
    },
    {
    saying: 'This is the actuall saying first time!  saying first time! the actuall s saying first time! the actuall s  saying first time! the actuall s  saying first time! the actuall s  saying first time! the actuall s saying first time! the actuall s saying first time! the actuall s',
    starCount: 20
    },
    {
    saying: 'This is the actuall saying first time!',
    starCount: 10
    }
]