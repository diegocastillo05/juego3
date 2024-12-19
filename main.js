document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".ContentItems .item");
    const btnContinuar = document.getElementById("continuar");
    const btnVolver = document.getElementById("volver");

    let selectedCount = 0; // Para contar los ítems seleccionados

    // Función para reiniciar el juego
    function resetGame() {
        selectedCount = 0;
        items.forEach((item) => item.classList.remove("active"));
        btnContinuar.classList.remove("active");
        btnVolver.classList.remove("active");
    }

    // Agregar eventos a cada ítem
    items.forEach((item) => {
        item.addEventListener("click", () => {
            // Si el ítem ya está seleccionado, deseleccionarlo
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                selectedCount--;
            } else {
                // Si no está seleccionado y aún quedan slots disponibles
                if (selectedCount < 4) {
                    item.classList.add("active");
                    selectedCount++;
                }
            }

            // Comprobar si todos los ítems con clase "true" están seleccionados
            const allTrueSelected = Array.from(
                document.querySelectorAll(".item.true")
            ).every((trueItem) => trueItem.classList.contains("active"));

            // Aplicar clases a los botones según las condiciones
            if (allTrueSelected) {
                btnContinuar.classList.add("active");
                btnVolver.classList.remove("active");
            } else {
                btnContinuar.classList.remove("active");
                btnVolver.classList.add("active");
            }
        });
    });

    // Evento para reiniciar el juego al hacer clic en el botón "Volver a intentar"
    btnVolver.addEventListener("click", resetGame);
});
