import { Link } from 'react-router-dom';
import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({ data }) => {
    const {name, description, thumbnail, title} = data;

    return (
        <div className="single-comic">
                <meta
                    name="description"
                    content={`${title} character`}
                />
                <title>{title}</title>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to="/" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleCharacterLayout;