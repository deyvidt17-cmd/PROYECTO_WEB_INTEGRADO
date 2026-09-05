document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTOS DEL DOM
    ===================================== */

    const contractForm = document.getElementById("contractForm");

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


        if (!propietario ||
            !inquilino ||
            !monto ||
            !duracion) {

            alert(
                "Completa todos los datos del contrato."
            );

            return;
        }


        /* Actualizar documento */

        contractOwner.textContent =
            propietario;

        contractTenant.textContent =
            inquilino;

        contractAmount.textContent =
            `$ ${monto.toLocaleString("en-US", {
                minimumFractionDigits: 2
            })}`;

        contractDuration.textContent =
            `${duracion} meses`;


        /* Animación */

        contractOwner.style.animation =
            "fadeIn 0.4s";

        contractTenant.style.animation =
            "fadeIn 0.4s";


        alert(
            "Contrato generado correctamente."
        );

    });


    /* =====================================
       SIMULADOR
    ===================================== */

    simulateBtn.addEventListener("click", () => {

        const scenario =
            scenarioSelect.value;


        if (!scenario) {

            alert(
                "Selecciona un escenario para simular."
            );

            return;

        }


        const data =
            scenarios[scenario];


        /* Cambiar botón */

        simulateBtn.innerHTML =
            `<span class="spinner-border spinner-border-sm me-2"></span>
             Analizando escenario...`;

        simulateBtn.disabled = true;


        /* Simulación */

        setTimeout(() => {

            dictamenTitle.textContent =
                data.title;

            dictamenText.textContent =
                data.description;


            dynamicClause.innerHTML = `
                
                <div class="dynamic-clause">

                    <strong>
                        Cláusula recomendada:
                    </strong>

                    <br>

                    ${data.clause}

                </div>

            `;


            simulateBtn.innerHTML =
                `<i class="bi bi-check-circle"></i>
                 Escenario Analizado`;

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

    imageInput.addEventListener("change", (event) => {

        const files =
            event.target.files;

        processImages(files);

    });


    /* =====================================
       DRAG & DROP
    ===================================== */

    dropzone.addEventListener(
        "dragover",
        (event) => {

            event.preventDefault();

            dropzone.classList.add("dragover");

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

        [...files].forEach(file => {

            if (!file.type.startsWith("image/")) {

                return;

            }


            const reader =
                new FileReader();


            reader.onload = (event) => {

                createImagePreview(
                    event.target.result
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


        item.innerHTML = `

            <img src="${imageSrc}" alt="Evidencia">

            <button
                class="remove-image"
                type="button">

                <i class="bi bi-x"></i>

            </button>

        `;


        evidenceGallery.appendChild(item);


        /* Eliminar imagen */

        const removeButton =
            item.querySelector(
                ".remove-image"
            );


        removeButton.addEventListener(
            "click",
            () => {

                item.remove();

            }
        );

    }


    /* =====================================
       EXPORTAR CONTRATO
    ===================================== */

    exportBtn.addEventListener("click", () => {

        const propietario =
            propietarioInput.value.trim();

        const inquilino =
            inquilinoInput.value.trim();

        const monto =
            montoInput.value;

        const duracion =
            duracionInput.value;


        if (!propietario ||
            !inquilino ||
            !monto ||
            !duracion) {

            alert(
                "Primero debes completar los datos del contrato."
            );

            return;

        }


        const scenario =
            scenarioSelect.value;


        let escenarioTexto =
            "Sin escenario simulado";


        if (scenario) {

            escenarioTexto =
                scenarios[scenario].title;

        }


        const contrato = `

CONTRATO DE ARRENDAMIENTO

PROPIETARIO:
${propietario}

INQUILINO:
${inquilino}

ALQUILER MENSUAL:
$ ${monto}

DURACIÓN:
${duracion} meses


ESCENARIO SIMULADO:
${escenarioTexto}


CLÁUSULAS PRINCIPALES:

1. El inquilino se compromete a realizar
el pago mensual acordado.

2. El propietario deberá garantizar
condiciones adecuadas de habitabilidad.

3. Las reparaciones estructurales serán
responsabilidad del propietario salvo
negligencia del inquilino.

4. Cualquier modificación deberá ser
acordada por ambas partes.


Documento generado por LegalHub.
        `;


        const blob =
            new Blob(
                [contrato],
                {
                    type: "text/plain"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "contrato-arrendamiento.txt";


        link.click();


        URL.revokeObjectURL(url);

    });


});