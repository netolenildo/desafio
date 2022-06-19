package br.com.cadastropessoa.repository;

import br.com.cadastropessoa.domain.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    Pessoa findByCpf(String cpf);

    @Query("SELECT p.dataCadastro FROM Pessoa p WHERE p.id = ?1")
    LocalDateTime getDataCadastroByIdPessoa(Long id);
}
