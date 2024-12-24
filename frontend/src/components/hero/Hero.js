import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Hero = ({movies =[]}) => {
  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie) =>{
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt={movie.title} />
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className="movie-buttons-container">
                                            <Link to={`/Trailer/${movie.trailerLink?.substring(movie.trailerLink.length - 11)}`} className="movie-button play-button">
                                            <div className="play-button-container">
                                                <FontAwesomeIcon icon={faCirclePlay} className="play-button-icon"/>
                                            </div>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero