package com.archishmanghosh.carrental;

import com.archishmanghosh.carrental.dao.AppDAO;
import com.archishmanghosh.carrental.entity.Customer;
import com.archishmanghosh.carrental.entity.Person;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class CarRentalApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarRentalApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AppDAO appDAO) {
		return runner -> {
			createPerson(appDAO);
//			createCustomer(appDAO);
		};
	}

	private void createCustomer(AppDAO appDAO) {
//		Customer tempCustomer=new Customer()
	}

	private void createPerson(AppDAO appDAO) {
		Person tempPerson=new Person("Archishman", "Ghosh", new Date(2000, 12, 6), "9674629474");
		appDAO.save(tempPerson);
		System.out.println("Done!");
	}

}
