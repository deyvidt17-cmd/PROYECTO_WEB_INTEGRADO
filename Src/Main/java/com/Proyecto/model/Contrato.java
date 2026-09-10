package com.proyecto.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.time.LocalDateTime;

@Entity
@Table(name = "contratos")
public class Contrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El propietario es obligatorio")
    @Column(nullable = false)
    private String propietario;

    @NotBlank(message = "El inquilino es obligatorio")
    @Column(nullable = false)
    private String inquilino;

    @NotNull(message = "El monto es obligatorio")
    @Positive(message = "El monto debe ser mayor que cero")
    @Column(nullable = false)
    private Double monto;

    @NotNull(message = "La duración es obligatoria")
    @Positive(message = "La duración debe ser mayor que cero")
    @Column(nullable = false)
    private Integer duracion;

    @Column(nullable = false)
    private LocalDateTime fechaCreacion;

    public Contrato() {
    }

    public Contrato(
            String propietario,
            String inquilino,
            Double monto,
            Integer duracion
    ) {
        this.propietario = propietario;
        this.inquilino = inquilino;
        this.monto = monto;
        this.duracion = duracion;
        this.fechaCreacion = LocalDateTime.now();
    }

    @PrePersist
    public void prepararFechaCreacion() {
        if (fechaCreacion == null) {
            fechaCreacion = LocalDateTime.now();
        }
    }

    public Long getId() {
        return id;
    }

    public String getPropietario() {
        return propietario;
    }

    public void setPropietario(String propietario) {
        this.propietario = propietario;
    }

    public String getInquilino() {
        return inquilino;
    }

    public void setInquilino(String inquilino) {
        this.inquilino = inquilino;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public Integer getDuracion() {
        return duracion;
    }

    public void setDuracion(Integer duracion) {
        this.duracion = duracion;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
}
