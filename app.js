// Simulación de eventos
const events = [
  { eventType: "Tipo A", data: "Datos de ejemplo A" },
  { eventType: "Tipo B", data: "Datos de ejemplo B" },
  { eventType: "Tipo C", data: "Datos de ejemplo C" },
];

// Cargar eventos en la tabla
function loadEvents() {
  const tableBody = document.querySelector("#eventTable tbody");
  events.forEach(event => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${event.eventType}</td><td>${event.data}</td>`;
    tableBody.appendChild(row);
  });
}

// Crear gráfico de rendimiento
function createPerformanceChart() {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['10s', '20s', '30s', '40s'],
      datasets: [{
        label: 'Rendimiento del Sistema',
        data: [12, 19, 3, 5], // Datos de rendimiento simulados
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", function() {
  loadEvents();
  createPerformanceChart();
});
