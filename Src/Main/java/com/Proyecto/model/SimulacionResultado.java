package com.proyecto.model;

public class SimulacionResultado {

    private String titulo;
    private String descripcion;
    private String recomendacion;

    public SimulacionResultado() {
    }

    public SimulacionResultado(String titulo, String descripcion, String recomendacion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.recomendacion = recomendacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getRecomendacion() {
        return recomendacion;
    }

    public void setRecomendacion(String recomendacion) {
        this.recomendacion = recomendacion;
    }
}
