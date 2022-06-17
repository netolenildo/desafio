package br.com.cadastropessoa.repository;

import br.com.cadastropessoa.domain.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    Pessoa findByCpf(String cpf);
}
