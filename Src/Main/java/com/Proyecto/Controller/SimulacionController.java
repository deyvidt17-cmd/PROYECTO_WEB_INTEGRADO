package com.proyecto.controller;

import com.proyecto.model.SimulacionResultado;
import com.proyecto.service.SimulacionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/simulaciones")
public class SimulacionController {

    private final SimulacionService simulacionService;

    public SimulacionController(SimulacionService simulacionService) {
        this.simulacionService = simulacionService;
    }

    @GetMapping("/{escenario}")
    public ResponseEntity<SimulacionResultado> simular(@PathVariable String escenario) {
        return ResponseEntity.ok(simulacionService.simular(escenario));
    }
}
