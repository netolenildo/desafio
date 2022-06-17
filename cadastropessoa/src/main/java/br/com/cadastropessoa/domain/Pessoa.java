package br.com.cadastropessoa.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author Raimundo Lenildo (lenildo.neto@gmail.com)
 * @since 13/06/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
@Table(schema = "public", name = "pessoa")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_pessoa", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column
    private Character sexo;

    @Column
    private String email;

    @Column(name = "data_nascimento", nullable = false)
    private LocalDate dataNascimento;

    @Column
    private String naturalidade;

    @Column
    private String nacionalidade;

    @Column(nullable = false)
    private String cpf;

    @Column(name = "data_cadastro")
    private LocalDateTime dataCadastro;

    @Column(name = "data_atualizacao")
    private LocalDateTime dataAtualizacao;
}
