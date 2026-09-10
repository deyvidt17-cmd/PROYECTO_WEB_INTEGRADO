package com.proyecto.service;

import com.proyecto.model.SimulacionResultado;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class SimulacionService {

    private final Map<String, SimulacionResultado> escenarios =
            Map.of(

                    "salida",
                    new SimulacionResultado(
                            "Salida anticipada del inquilino",
                            "El inquilino solicita finalizar el contrato antes del plazo acordado. El simulador recomienda revisar las condiciones de terminación anticipada y las posibles penalidades establecidas.",
                            "En caso de terminación anticipada, ambas partes deberán revisar el plazo de aviso previo y cualquier compensación previamente establecida en el contrato."
                    ),

                    "tuberia",
                    new SimulacionResultado(
                            "Rotura de tubería",
                            "Se detecta una avería en una tubería del inmueble. El análisis determina que las reparaciones estructurales normalmente corresponden al propietario, salvo que se demuestre un uso negligente por parte del inquilino.",
                            "Las reparaciones relacionadas con instalaciones estructurales del inmueble corresponderán al propietario, salvo que se demuestre que el daño fue ocasionado por negligencia o uso indebido del inquilino."
                    ),

                    "pago",
                    new SimulacionResultado(
                            "Retraso en el pago",
                            "El inquilino presenta retraso en el pago mensual. Se recomienda verificar el período de tolerancia, los avisos correspondientes y las consecuencias establecidas en el contrato.",
                            "Ante un retraso en el pago, el propietario deberá comunicar formalmente al inquilino el incumplimiento y otorgar el plazo establecido antes de aplicar las consecuencias contractuales correspondientes."
                    ),

                    "mantenimiento",
                    new SimulacionResultado(
                            "Daños por mantenimiento",
                            "Se identifican daños en el inmueble que requieren mantenimiento. La responsabilidad dependerá del origen del daño y de las obligaciones establecidas para cada parte.",
                            "Los daños derivados del desgaste normal serán responsabilidad del propietario, mientras que los daños ocasionados por uso indebido o negligencia podrán ser atribuidos al inquilino."
                    ),

                    "renovacion",
                    new SimulacionResultado(
                            "Solicitud de renovación",
                            "El inquilino solicita renovar el contrato antes de su vencimiento. Se recomienda revisar las condiciones económicas y comunicar la intención de renovación con anticipación.",
                            "La renovación del contrato deberá ser acordada por ambas partes antes de la fecha de vencimiento y podrá incluir modificaciones en el monto del alquiler u otras condiciones."
                    )
            );

    public SimulacionResultado simular(String escenario) {

        SimulacionResultado resultado =
                escenarios.get(escenario);

        if (resultado == null) {
            throw new IllegalArgumentException(
                    "Escenario no válido: " + escenario
            );
        }

        return resultado;
    }
}
