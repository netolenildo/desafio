package br.com.cadastropessoa.exception;

public class NegocioException extends RuntimeException{

    public NegocioException(String menssagem){
        super(menssagem);
    }
}
