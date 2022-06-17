package br.com.cadastropessoa.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/source")
public class SourceController {

    @GetMapping
    public ResponseEntity<String> source(){
        return ResponseEntity.ok("teste");
    }
}
