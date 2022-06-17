package br.com.cadastropessoa.controllers;

import br.com.cadastropessoa.controllers.dto.PessoaDTO;
import br.com.cadastropessoa.controllers.mapper.PessoaMapper;
import br.com.cadastropessoa.domain.Pessoa;
import br.com.cadastropessoa.exception.NegocioException;
import br.com.cadastropessoa.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Raimundo Lenildo (lenildo.neto@gmail.com)
 * @since 13/06/2022
 */
@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    private final PessoaService service;

    @Autowired
    public PessoaController(PessoaService service){
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<PessoaDTO> salvar(@RequestBody PessoaDTO dto){
        Pessoa pessoa = null;

        try {
            pessoa = service.salvar(PessoaMapper.toModel(dto));
        }catch (NegocioException e){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(PessoaMapper.toDto(pessoa));
    }

    @PutMapping
    public ResponseEntity<PessoaDTO> alterar(@RequestBody PessoaDTO dto){
        Pessoa pessoa = service.alterar(PessoaMapper.toModel(dto));

        return ResponseEntity.ok(PessoaMapper.toDto(pessoa));
    }

    @GetMapping
    public ResponseEntity<List<PessoaDTO>> listar(){
        return ResponseEntity.ok(service.listar().stream().map(
                pessoa -> PessoaMapper.toDto(pessoa)
        ).collect(Collectors.toList()));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity remover(@PathVariable("id") Long id){
        service.remover(id);

        return ResponseEntity.ok().build();
    }

}
