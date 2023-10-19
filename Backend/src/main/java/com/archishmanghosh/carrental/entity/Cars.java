package com.archishmanghosh.carrental.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "cars")
@Getter
@Setter
public class Cars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "chassis_no")
    private String chassisNo;

    @Column(name = "availaibility", nullable = false)
    private String availability;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "colour", nullable = false)
    private String colour;

    @Column(name = "engine_displacement", nullable = false)
    private int engineDisplacement;

    @Column(name = "km_driven", nullable = false)
    private int kmDriven;

    @CreationTimestamp
    @Column(name = "delivery_date", nullable = false)
    private Date deliveryDate;

    @Column(name = "car_condition", nullable = false)
    private String carCondition;

    @Column(name = "trips_taken", nullable = false)
    private int tripsTaken;

    @Column(name = "price_per_hour", nullable = false)
    private int pricePerHour;

    @Column(name = "price_per_km", nullable = false)
    private int pricePerKm;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "point_id")
    private RentalPoint point;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "manager_id")
    private Manager manager;

    @OneToMany(mappedBy = "cars",
            fetch = FetchType.EAGER,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private List<Rent> rents;
}
