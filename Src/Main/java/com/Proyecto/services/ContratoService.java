package com.proyecto.service;

import com.proyecto.model.Contrato;
import com.proyecto.repository.ContratoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContratoService {

    private final ContratoRepository contratoRepository;

    public ContratoService(ContratoRepository contratoRepository) {
        this.contratoRepository = contratoRepository;
    }

    public Contrato crearContrato(Contrato contrato) {
        return contratoRepository.save(contrato);
    }

    public List<Contrato> obtenerTodos() {
        return contratoRepository.findAll();
    }

    public Contrato obtenerPorId(Long id) {
        return contratoRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Contrato no encontrado: " + id)
                );
    }
}
