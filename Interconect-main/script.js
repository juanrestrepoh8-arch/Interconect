const btnTema = document.createElement("button");
btnTema.textContent = "Modo noche";
btnTema.onclick = function() {
    if (document.body.style.background === "rgb(8, 14, 25)") {
        document.body.style.background = "#f1f5f9";
        document.body.style.color = "#172033";
        btnTema.textContent = "Modo noche";
    } else {
        document.body.style.background = "#080e19";
        document.body.style.color = "white";
        btnTema.textContent = "Modo día";
    }
};
 
document.body.appendChild(btnTema);
const btnOcultar = document.createElement("button");
btnOcultar.textContent = "Ocultar información";
let visible = true;
btnOcultar.onclick = function() {
    visible = !visible;
    document.querySelectorAll(".panel").forEach(panel => {
        panel.style.display = visible ? "" : "none";
    });
    btnOcultar.textContent = visible
        ? "Ocultar información"
        : "Mostrar información";
};
document.body.appendChild(btnOcultar);
 