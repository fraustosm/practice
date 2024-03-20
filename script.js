
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    button.addEventListener("click", miNumero);
  
    function miNumero() {
      let min = 1;
      let max = 100;
      let numero;
  
      const adivinarNumero = () => {
        numero = Math.floor((min + max) / 2);
        const confirmacion = confirm(`¿Es tu número ${numero}?`);
  
        if (confirmacion) {
          alert(`¡Tu número es el ${numero}, excelente decisión!`);
          return;
        } else {
          const esMenor = confirm(`¿Es tu número menor que ${numero}?`);
          if (esMenor) {
            max = numero - 1;
          } else {
            min = numero + 1;
          }
          adivinarNumero();
        }
      };
  
      adivinarNumero();
    }
  });
  