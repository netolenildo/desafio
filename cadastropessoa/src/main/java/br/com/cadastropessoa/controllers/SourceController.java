package br.com.cadastropessoa.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Raimundo Lenildo (lenildo.neto@gmail.com)
 * @since 13/06/2022
 */
@RestController
@RequestMapping("/source")
public class SourceController {

    @GetMapping
    public ResponseEntity<String> source(){
        return ResponseEntity.ok()
                .header("Access-Control-Allow-Origin", "http://localhost:3000")
                .body("https://github.com/netolenildo/desafio");
    }
}
