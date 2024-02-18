function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                { 
                    poster === 'N/A' ? 
                    <img className="activator movie-image" alt="" src={`https://placehold.co/600x400?text=${title}`} /> 
                    : <img className="activator movie-image" alt="" src={poster} /> 
                }
            </div>
            <div className="card-content">
                <a className="card-title activator grey-text text-darken-4" href={`https://www.imdb.com/title/${id}/`}>{title}</a>
                <p>{year}
                    <span className="right">{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
