import '../App.css';

function PokemonCard(props) {
    return (
        <>
            <figure className='card' style={{ backgroundColor: props.color }}>
                <img src={props.url} alt={props.text} className="card-img" />
                <figcaption>{props.text}</figcaption>
            </figure >
        </>

    );
}
export default PokemonCard;