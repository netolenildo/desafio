package br.com.cadastropessoa.utils;

import br.com.cadastropessoa.exception.NegocioException;
import br.com.caelum.stella.validation.CPFValidator;
import br.com.caelum.stella.validation.InvalidStateException;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.regex.Pattern;

/**
 * @author Raimundo Lenildo (lenildo.neto@gmail.com)
 * @since 13/06/2022
 */
public class PessoaUtils {

    public static String toMd5(String senha){
        MessageDigest md;
        try {
            md = MessageDigest.getInstance(senha);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        return md.toString();
    }

    public static void isCpfValido(String cpf) {
        CPFValidator validator = new CPFValidator();
        try{
            validator.assertValid(cpf);
        }catch(InvalidStateException e){
            throw new NegocioException("CPF Inválido.");
        }
    }

    public static void validaEmail(String email){
        String regx = "^[A-Za-z0-9+_.-]+@(.+)$";
        Pattern pattern = Pattern.compile(regx);

        if(!pattern.matcher(email).matches()){
            throw new NegocioException("E-mail inválido.");
        }
    }
}
