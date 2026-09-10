document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTOS DEL DOM
    ===================================== */

    const contractForm =
        document.getElementById("contractForm");

    const propietarioInput =
        document.getElementById("propietario");

    const inquilinoInput =
        document.getElementById("inquilino");

    const montoInput =
        document.getElementById("monto");

    const duracionInput =
        document.getElementById("duracion");


    const contractOwner =
        document.getElementById("contractOwner");

    const contractTenant =
        document.getElementById("contractTenant");

    const contractAmount =
        document.getElementById("contractAmount");

    const contractDuration =
        document.getElementById("contractDuration");


    const scenarioSelect =
        document.getElementById("scenarioSelect");

    const simulateBtn =
        document.getElementById("simulateBtn");


    const dictamenTitle =
        document.getElementById("dictamenTitle");

    const dictamenText =
        document.getElementById("dictamenText");

    const dynamicClause =
        document.getElementById("dynamicClause");


    const dropzone =
        document.getElementById("dropzone");

    const imageInput =
        document.getElementById("imageInput");

    const evidenceGallery =
        document.getElementById("evidenceGallery");


    const exportBtn =
        document.getElementById("exportBtn");


    /* =====================================
       DATOS DE ESCENARIOS
    ===================================== */

    const scenarios = {

        salida: {

            title:
                "Salida anticipada del inquilino",

            description:
                "El inquilino solicita finalizar el contrato antes del plazo acordado. El simulador recomienda revisar las condiciones de terminación anticipada y las posibles penalidades establecidas.",

            clause:
                "En caso de terminación anticipada, ambas partes deberán revisar el plazo de aviso previo y cualquier compensación previamente establecida en el contrato."

        },


        tuberia: {

            title:
                "Rotura de tubería",

            description:
                "Se detecta una avería en una tubería del inmueble. El análisis determina que las reparaciones estructurales normalmente corresponden al propietario, salvo que se demuestre un uso negligente por parte del inquilino.",

            clause:
                "Las reparaciones relacionadas con instalaciones estructurales del inmueble corresponderán al propietario, salvo que se demuestre que el daño fue ocasionado por negligencia o uso indebido del inquilino."

        },


        pago: {

            title:
                "Retraso en el pago",

            description:
                "El inquilino presenta retraso en el pago mensual. Se recomienda verificar el período de tolerancia, los avisos correspondientes y las consecuencias establecidas en el contrato.",

            clause:
                "Ante un retraso en el pago, el propietario deberá comunicar formalmente al inquilino el incumplimiento y otorgar el plazo establecido antes de aplicar las consecuencias contractuales correspondientes."

        },


        mantenimiento: {

            title:
                "Daños por mantenimiento",

            description:
                "Se identifican daños en el inmueble que requieren mantenimiento. La responsabilidad dependerá del origen del daño y de las obligaciones establecidas para cada parte.",

            clause:
                "Los daños derivados del desgaste normal serán responsabilidad del propietario, mientras que los daños ocasionados por uso indebido o negligencia podrán ser atribuidos al inquilino."

        },


        renovacion: {

            title:
                "Solicitud de renovación",

            description:
                "El inquilino solicita renovar el contrato antes de su vencimiento. Se recomienda revisar las condiciones económicas y comunicar la intención de renovación con anticipación.",

            clause:
                "La renovación del contrato deberá ser acordada por ambas partes antes de la fecha de vencimiento y podrá incluir modificaciones en el monto del alquiler u otras condiciones."

        }

    };


    /* =====================================
       GENERAR CONTRATO
    ===================================== */

    contractForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const propietario =
            propietarioInput.value.trim();

        const inquilino =
            inquilinoInput.value.trim();

        const monto =
            parseFloat(montoInput.value);

        const duracion =
            parseInt(duracionInput.value);


        /* ================================
           VALIDACIÓN
        ================================= */

        if (
            !propietario ||
            !inquilino ||
            isNaN(monto) ||
            monto <= 0 ||
            isNaN(duracion) ||
            duracion <= 0
        ) {

            alert(
                "Completa todos los datos del contrato correctamente."
            );

            return;

        }


        /* ================================
           ACTUALIZAR DOCUMENTO
        ================================= */

        contractOwner.textContent =
            propietario;

        contractTenant.textContent =
            inquilino;

        contractAmount.textContent =
            `$ ${monto.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;

        contractDuration.textContent =
            `${duracion} meses`;


        /* ================================
           ANIMACIÓN
        ================================= */

        contractOwner.style.animation =
            "fadeIn 0.4s";

        contractTenant.style.animation =
            "fadeIn 0.4s";

        contractAmount.style.animation =
            "fadeIn 0.4s";

        contractDuration.style.animation =
            "fadeIn 0.4s";


        /* ================================
           MENSAJE
        ================================= */

        alert(
            "Contrato generado correctamente."
        );

    });


    /* =====================================
       SIMULADOR DE ESCENARIOS
    ===================================== */

    simulateBtn.addEventListener("click", () => {

        const scenario =
            scenarioSelect.value;


        /* ================================
           VALIDACIÓN
        ================================= */

        if (!scenario) {

            alert(
                "Selecciona un escenario para simular."
            );

            return;

        }


        const data =
            scenarios[scenario];


        if (!data) {

            alert(
                "El escenario seleccionado no existe."
            );

            return;

        }


        /* ================================
           CAMBIAR BOTÓN
        ================================= */

        simulateBtn.innerHTML =
            `
            <span
                class="spinner-border spinner-border-sm me-2">
            </span>

            Analizando escenario...
            `;

        simulateBtn.disabled = true;


        /* ================================
           SIMULACIÓN
           
           Actualmente se ejecuta en el
           navegador.

           Posteriormente esta parte será
           reemplazada por una petición a:

           POST /api/simulaciones
        ================================= */

        setTimeout(() => {

            dictamenTitle.textContent =
                data.title;

            dictamenText.textContent =
                data.description;


            dynamicClause.innerHTML =
                `
                <div class="dynamic-clause">

                    <strong>
                        Cláusula recomendada:
                    </strong>

                    <br>

                    ${data.clause}

                </div>
                `;


            /* ============================
               BOTÓN FINALIZADO
            ============================ */

            simulateBtn.innerHTML =
                `
                <i class="bi bi-check-circle"></i>

                Escenario Analizado
                `;

            simulateBtn.disabled = false;


        }, 1200);

    });


    /* =====================================
       CLICK EN DROPZONE
    ===================================== */

    dropzone.addEventListener("click", () => {

        imageInput.click();

    });


    /* =====================================
       SELECCIONAR IMÁGENES
    ===================================== */

    imageInput.addEventListener(
        "change",
        (event) => {

            const files =
                event.target.files;

            processImages(files);

        }
    );


    /* =====================================
       DRAG & DROP
    ===================================== */

    dropzone.addEventListener(
        "dragover",
        (event) => {

            event.preventDefault();

            dropzone.classList.add(
                "dragover"
            );

        }
    );


    dropzone.addEventListener(
        "dragleave",
        () => {

            dropzone.classList.remove(
                "dragover"
            );

        }
    );


    dropzone.addEventListener(
        "drop",
        (event) => {

            event.preventDefault();

            dropzone.classList.remove(
                "dragover"
            );


            const files =
                event.dataTransfer.files;

            processImages(files);

        }
    );


    /* =====================================
       PROCESAR IMÁGENES
    ===================================== */

    function processImages(files) {

        if (!files || files.length === 0) {

            return;

        }


        [...files].forEach(file => {

            /* ============================
               VALIDAR TIPO
            ============================ */

            if (!file.type.startsWith("image/")) {

                alert(
                    `El archivo "${file.name}" no es una imagen.`
                );

                return;

            }


            /* ============================
               VALIDAR TAMAÑO
               
               Máximo: 5 MB
            ============================ */

            const maxSize =
                5 * 1024 * 1024;


            if (file.size > maxSize) {

                alert(
                    `La imagen "${file.name}" supera el límite de 5 MB.`
                );

                return;

            }


            /* ============================
               FILE READER
            ============================ */

            const reader =
                new FileReader();


            reader.onload =
                (event) => {

                    createImagePreview(
                        event.target.result
                    );

                };


            reader.onerror =
                () => {

                    alert(
                        `No se pudo cargar la imagen "${file.name}".`
                    );

                };


            reader.readAsDataURL(file);

        });

    }


    /* =====================================
       CREAR MINIATURA
    ===================================== */

    function createImagePreview(imageSrc) {

        const item =
            document.createElement("div");


        item.className =
            "evidence-item";


        item.innerHTML =
            `
            <img
                src="${imageSrc}"
                alt="Evidencia">

            <button
                class="remove-image"
                type="button"
                title="Eliminar imagen">

                <i class="bi bi-x"></i>

            </button>
            `;


        evidenceGallery.appendChild(item);


        /* ================================
           BOTÓN ELIMINAR
        ================================= */

        const removeButton =
            item.querySelector(
                ".remove-image"
            );


        removeButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                item.remove();

            }
        );

    }


    /* =====================================
       EXPORTAR CONTRATO
    ===================================== */

    exportBtn.addEventListener(
        "click",
        () => {

            const propietario =
                propietarioInput.value.trim();

            const inquilino =
                inquilinoInput.value.trim();

            const monto =
                montoInput.value;

            const duracion =
                duracionInput.value;


            /* ================================
               VALIDACIÓN
            ================================= */

            if (
                !propietario ||
                !inquilino ||
                !monto ||
                !duracion
            ) {

                alert(
                    "Primero debes completar los datos del contrato."
                );

                return;

            }


            /* ================================
               ESCENARIO
            ================================= */

            const scenario =
                scenarioSelect.value;


            let escenarioTexto =
                "Sin escenario simulado";


            if (
                scenario &&
                scenarios[scenario]
            ) {

                escenarioTexto =
                    scenarios[scenario].title;

            }


            /* ================================
               OBTENER CLÁUSULA
            ================================= */

            let clausulaDinamica =
                "";


            if (
                scenario &&
                scenarios[scenario]
            ) {

                clausulaDinamica =
                    scenarios[scenario].clause;

            }


            /* ================================
               CONTRATO
            ================================= */

            const contrato =
                `
CONTRATO DE ARRENDAMIENTO

========================================

PROPIETARIO:
${propietario}

INQUILINO:
${inquilino}

ALQUILER MENSUAL:
$ ${monto}

DURACIÓN:
${duracion} meses


========================================

ESCENARIO SIMULADO:
${escenarioTexto}


========================================

CLÁUSULAS PRINCIPALES:

1. El inquilino se compromete a realizar
el pago mensual acordado dentro del plazo
establecido.

2. El propietario deberá garantizar
condiciones adecuadas de habitabilidad.

3. Las reparaciones estructurales serán
responsabilidad del propietario salvo daños
ocasionados por negligencia del inquilino.

4. Cualquier modificación del contrato
deberá ser acordada por ambas partes.

5. Los retrasos en los pagos podrán generar
las consecuencias establecidas en el contrato.


========================================

CLÁUSULA GENERADA POR SIMULACIÓN:

${clausulaDinamica || "No se generó una cláusula adicional."}


========================================

Documento generado por LegalHub.

Este documento corresponde a una simulación
contractual y no constituye asesoría legal.
                `;


            /* ================================
               CREAR ARCHIVO
            ================================= */

            const blob =
                new Blob(
                    [contrato],
                    {
                        type: "text/plain;charset=utf-8"
                    }
                );


            /* ================================
               CREAR URL
            ================================= */

            const url =
                URL.createObjectURL(blob);


            /* ================================
               CREAR ENLACE
            ================================= */

            const link =
                document.createElement("a");


            link.href =
                url;

            link.download =
                "contrato-arrendamiento.txt";


            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);


            /* ================================
               LIBERAR MEMORIA
            ================================= */

            URL.revokeObjectURL(url);

        }
    );

});
