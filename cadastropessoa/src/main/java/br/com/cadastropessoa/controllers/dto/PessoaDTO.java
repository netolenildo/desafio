package br.com.cadastropessoa.controllers.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class PessoaDTO {

    @JsonProperty("id-pessoa")
    private Long id;

    @JsonProperty("nome")
    private String nome;

    @JsonProperty("sexo")
    private Character sexo;

    @JsonProperty("email")
    private String email;

    @JsonProperty("data-nascimento")
    private LocalDate dataNascimento;

    @JsonProperty("naturalidade")
    private String naturalidade;

    @JsonProperty("nacionalidade")
    private String nacionalidade;

    @JsonProperty("cpf")
    private String cpf;
}
