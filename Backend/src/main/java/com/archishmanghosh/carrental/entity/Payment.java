package com.archishmanghosh.carrental.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "payment")
@Getter
@Setter
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "payment_mode")
    private String paymentMode;

    @Column(name = "transaction_id", nullable = false)
    private String transactionId;

    @Column(name = "transaction_status", nullable = false)
    private String transactionStatus;

    @Column(name = "gateway", nullable = false)
    private String gateway;

    @OneToMany(mappedBy = "payment",
            fetch = FetchType.EAGER,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    List<Rent> rents;
}
