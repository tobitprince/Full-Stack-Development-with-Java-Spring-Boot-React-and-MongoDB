package com.princetobit.movies.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.princetobit.movies.model.Movie;
import com.princetobit.movies.repository.MovieRepository;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }
    public Optional<Movie> getSingleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }

}
