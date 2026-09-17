document.addEventListener('DOMContentLoaded', () => {
  // Controles de accesibilidad (DUA)
  const contrastBtn = document.getElementById('toggle-contrast');
  const textSizeBtn = document.getElementById('toggle-text-size');

  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  textSizeBtn.addEventListener('click', () => {
    document.body.classList.toggle('large-text');
  });

  // Lógica de la Simulación de Sesgo
  const biasSlider = document.getElementById('bias-slider');
  const biasValue = document.getElementById('bias-value');
  const barA = document.getElementById('bar-a');
  const barB = document.getElementById('bar-b');
  const analysisText = document.getElementById('simulation-analysis');

  biasSlider.addEventListener('input', (e) => {
    const bias = parseInt(e.target.value, 10);
    biasValue.textContent = `${bias}%`;

    // Cálculo proporcional del sesgo entre ambos grupos
    const rateA = Math.min(100, Math.max(10, 50 + Math.round(bias / 2)));
    const rateB = Math.max(0, 100 - rateA);

    barA.style.width = `${rateA}%`;
    barA.textContent = `${rateA}% Aprobación`;

    barB.style.width = `${rateB}%`;
    barB.textContent = `${rateB}% Aprobación`;

    // Actualización contextual accesible
    if (bias < 20) {
      analysisText.textContent = 'Con sesgo bajo, el algoritmo distribuye oportunidades de manera equitativa entre ambos grupos.';
    } else if (bias < 70) {
      analysisText.textContent = 'Con sesgo moderado, el algoritmo empieza a favorecer notablemente al grupo históricamente representado.';
    } else {
      analysisText.textContent = 'Con sesgo alto, la IA excluye casi por completo al grupo subrepresentado, perpetuando barreras históricas.';
    }
  });
});