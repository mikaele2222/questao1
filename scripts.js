function verificarLetra() {
            
            const letra = document.getElementById('letra').value.trim().toLowerCase();
            const resultadoElement = document.getElementById('resultado');
            
            
            if (letra.length !== 1 || !/^[a-záàãâéèêíïóôõöúç]$/i.test(letra)) {
                resultadoElement.textContent = 'Por favor, insira uma letra válida.';
                return;
            }
            
            
            if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
                resultadoElement.textContent = `${letra.toUpperCase()} é uma vogal.`;
            } else {
                resultadoElement.textContent = `${letra.toUpperCase()} é uma consoante.`;
            }
        }
