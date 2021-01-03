import { updateStars } from '../firebase/db'
import starURL from './icons/star.png'
export interface StarPropsI {
    id: string,
    starCount: number
}



export const Star: React.FC<StarPropsI> = (props) => {
    const { id, starCount } = props
    const onStarClickHandler = (event: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
        updateStars(id , starCount)
    }
    return(
        <div className="star">
            <div><img onClick={onStarClickHandler} src={starURL} alt="star" /></div>
            <p>{starCount}</p>
        </div>
    )
}