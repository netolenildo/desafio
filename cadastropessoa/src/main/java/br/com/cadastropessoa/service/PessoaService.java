package br.com.cadastropessoa.service;

import br.com.cadastropessoa.domain.Pessoa;
import br.com.cadastropessoa.exception.NegocioException;
import br.com.cadastropessoa.repository.PessoaRepository;
import br.com.cadastropessoa.utils.PessoaUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;


/**
 * @author Raimundo Lenildo (lenildo.neto@gmail.com)
 * @since 13/06/2022
 */
@Service
public class PessoaService {

    private final PessoaRepository repository;

    @Autowired
    public PessoaService(PessoaRepository repository){
        this.repository = repository;
    }

    @Transactional
    public Pessoa salvar(Pessoa pessoa){
        pessoa.setCpf(pessoa.getCpf().replace(".","").replace("-",""));

        validaDados(pessoa);

        if(Objects.nonNull(repository.findByCpf(pessoa.getCpf()))){
            throw new NegocioException("Já existe uma pessoa cadastrada com o CPF informado.");
        }


        pessoa.setDataCadastro(LocalDateTime.now());
        return repository.save(pessoa);
    }

    @Transactional
    public Pessoa alterar(Pessoa pessoa){
        validaDados(pessoa);

        Pessoa pessoaDb = repository.findByCpf(pessoa.getCpf());

        if(Objects.nonNull(pessoaDb) && !pessoaDb.getId().equals(pessoa.getId())){
            throw new NegocioException("Já existe uma pessoa cadastrada com o CPF informado.");
        }

        pessoa.setDataAtualizacao(LocalDateTime.now());
        return repository.save(pessoa);
    }

    public void remover(Long id){
        repository.deleteById(id);
    }

    public List<Pessoa> listar(){
        return repository.findAll();
    }

    private void validaDados(Pessoa pessoa){
        if(Objects.isNull(pessoa.getNome())){
            throw new NegocioException("Nome: Campo obrigatório não informado.");
        }

        if(Objects.isNull(pessoa.getDataNascimento())){
            throw new NegocioException("Data de Nascimento: Campo obrigatório não informado.");
        }

        if(Objects.isNull(pessoa.getCpf())){
            throw new NegocioException("CPF: Campo obrigatório não informado.");
        }

        PessoaUtils.isCpfValido(pessoa.getCpf());

        if(Objects.nonNull(pessoa.getEmail()))
            PessoaUtils.validaEmail(pessoa.getEmail());
    }
}
