import starURL from './icons/star.png'
interface PropsI {
    starCount: number
}

export const Star: React.FC<PropsI> = (props) => {
    const { starCount } = props
    return(
        <div className="star">
            <div><img src={starURL} alt="star" /></div>
            <p>{starCount}</p>
        </div>
    )
}