package br.com.cadastropessoa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class CadastropessoaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadastropessoaApplication.class, args);
	}

}
