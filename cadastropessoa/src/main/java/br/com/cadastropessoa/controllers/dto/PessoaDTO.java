package br.com.cadastropessoa.controllers.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * @author Raimundo Lenildo (lenildo.neto@gmail.com)
 * @since 13/06/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class PessoaDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("nome")
    private String nome;

    @JsonProperty("sexo")
    private Character sexo;

    @JsonProperty("email")
    private String email;

    @JsonProperty("dataNascimento")
    private LocalDate dataNascimento;

    @JsonProperty("naturalidade")
    private String naturalidade;

    @JsonProperty("nacionalidade")
    private String nacionalidade;

    @JsonProperty("cpf")
    private String cpf;
}
