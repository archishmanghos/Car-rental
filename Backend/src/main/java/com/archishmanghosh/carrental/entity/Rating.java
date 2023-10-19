package com.archishmanghosh.carrental.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CurrentTimestamp;

import java.util.Date;

@Entity
@Table(name = "rating")
@Getter
@Setter
public class Rating {
    @Column(name = "points", nullable = false)
    private int points;

    @Column(name = "review", nullable = false)
    private String review;

    @Column(name = "date_of_review")
    @CurrentTimestamp
    private Date dateOfReview;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "point_id")
    private RentalPoint rentalPoint;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id")
    private Payment payment;
}
