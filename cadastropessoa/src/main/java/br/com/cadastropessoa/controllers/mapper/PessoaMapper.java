package br.com.cadastropessoa.controllers.mapper;

import br.com.cadastropessoa.controllers.dto.PessoaDTO;
import br.com.cadastropessoa.domain.Pessoa;

public class PessoaMapper {

    public static PessoaDTO toDto(Pessoa pessoa){
        return PessoaDTO.builder()
                .id(pessoa.getId())
                .nome(pessoa.getNome())
                .sexo(pessoa.getSexo())
                .email(pessoa.getEmail())
                .dataNascimento(pessoa.getDataNascimento())
                .naturalidade(pessoa.getNaturalidade())
                .nacionalidade(pessoa.getNacionalidade())
                .cpf(pessoa.getCpf())
                .build();
    }

    public static Pessoa toModel(PessoaDTO dto){
        return Pessoa.builder()
                .id(dto.getId()).nome(dto.getNome())
                .sexo(dto.getSexo())
                .email(dto.getEmail())
                .dataNascimento(dto.getDataNascimento())
                .naturalidade(dto.getNaturalidade())
                .nacionalidade(dto.getNacionalidade())
                .cpf(dto.getCpf())
                .build();
    }
}
