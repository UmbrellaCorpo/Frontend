// script.js

document.getElementById("processButton").addEventListener("click", async function() {
  const loadingMessage = document.getElementById("loadingMessage");
  const resultDiv = document.getElementById("results");

  // Mostrar mensaje de carga
  loadingMessage.style.display = "block";
  resultDiv.innerHTML = "";

  // Simular lista de datos para enviar
  const data = ["Hominido1", "Hominido2", "Hominido3", "Hominido4"];

  // Construir los parámetros de la URL
  const params = new URLSearchParams();
  data.forEach(datum => params.append("data", datum));

  try {
    // Llamada a la API usando Fetch
    const response = await fetch(`/api/process-data?${params.toString()}`);
    const results = await response.json();

    // Ocultar mensaje de carga
    loadingMessage.style.display = "none";

    // Mostrar los resultados en la página
    resultDiv.innerHTML = results.map(res => `<p>${res}</p>`).join("");
  } catch (error) {
    console.error("Error fetching data:", error);
    loadingMessage.style.display = "none";
    resultDiv.innerHTML = "<p>Error processing data.</p>";
  }
});
