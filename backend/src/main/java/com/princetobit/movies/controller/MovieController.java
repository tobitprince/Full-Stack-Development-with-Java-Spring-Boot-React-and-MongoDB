package com.princetobit.movies.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.princetobit.movies.model.Movie;
import com.princetobit.movies.service.MovieService;

@RestController
@RequestMapping("/api/v1/movies")

public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> allMovies(){
        return new ResponseEntity<>(movieService.allMovies(), HttpStatus.OK);
    }
    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<>(movieService.getSingleMovie(imdbId), HttpStatus.OK);
    }

}
