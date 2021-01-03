import spinnerURL from '../icons/loader.png'
export const Spinner: React.FC = () => {
    return(
        <div className="spinner">
            <section>
            <img src={spinnerURL} alt="spinner" />
            </section>
        </div>
    )
}