package com.archishmanghosh.carrental.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "person")
@Getter
@Setter
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "dob", nullable = false)
    private Date dob;

    @Column(name = "mobile_number", nullable = false)
    private String mobileNumber;

    @Column(name = "landline_number")
    private String landlineNumber;

    public Person() {
    }

    public Person(String firstName, String lastName, Date dob, String mobileNumber, String landlineNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.mobileNumber = mobileNumber;
        this.landlineNumber = landlineNumber;
    }

    public Person(String firstName, String lastName, Date dob, String mobileNumber) {
        this(firstName, lastName, dob, mobileNumber, null);
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob=" + dob +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", landlineNumber='" + landlineNumber + '\'' +
                '}';
    }
}
