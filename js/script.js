document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCertificado');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      

      // Obtener certificados desde el archivo JSON
      fetch('data/certificados.json')
          .then(response => response.json())
          .then(certificados => {
              const codigo = document.getElementById('codigo').value.trim();
              const certificado = certificados.find(cert => cert.codigo === codigo);

              if (certificados) {
                  resultado.innerHTML = `
                      <p style="color: green;">Certificado válido.</p>
                      <p><strong>Nombre:</strong> ${certificado.nombre}</p>
                      <p><strong>Curso:</strong> ${certificado.curso}</p>
                  `;
              } else {
              resultado.innerHTML = `<p style="color: red;">Certificado no encontrado.</p>`;
              }
          })
          .catch(error => {
              resultado.innerHTML = `<p style="color: red;">Hubo un error al consultar el certificado.</p>`;
          });
  });
})