package com.proyecto.controller;

import com.proyecto.model.Contrato;
import com.proyecto.service.ContratoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contratos")
public class ContratoController {

    private final ContratoService contratoService;

    public ContratoController(ContratoService contratoService) {
        this.contratoService = contratoService;
    }

    @PostMapping
    public ResponseEntity<Contrato> crearContrato(
            @Valid @RequestBody Contrato contrato
    ) {
        Contrato contratoGuardado =
                contratoService.crearContrato(contrato);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(contratoGuardado);
    }

    @GetMapping
    public ResponseEntity<List<Contrato>> obtenerContratos() {

        return ResponseEntity.ok(
                contratoService.obtenerTodos()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contrato> obtenerContrato(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                contratoService.obtenerPorId(id)
        );
    }
}
