document.addEventListener('DOMContentLoaded', function() {
    // Máscara para o campo Nome (permitindo apenas letras e espaços)
    const nameInput = document.querySelector('input[name="cf-name"]');
    nameInput.addEventListener('input', function() {
        nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, ''); // Somente letras e espaços
    });

    // Máscara para o campo Idade (somente números de 1 a 3 dígitos)
    const ageInput = document.querySelector('input[name="cf-age"]');
    ageInput.addEventListener('input', function() {
        let value = ageInput.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (value.length > 3) value = value.slice(0, 3); // Limita a 3 dígitos
        ageInput.value = value;
    });

    // Máscara para o campo Gênero (somente letras)
    const genderInput = document.querySelector('input[name="cf-gender"]');
    genderInput.addEventListener('input', function() {
        genderInput.value = genderInput.value.replace(/[^A-Za-z]/g, ''); // Somente letras
    });

    // Máscara para o campo de altura (cm)
    const heightInput = document.querySelector('input[name="cf-height"]');
    heightInput.addEventListener('input', function() {
        let value = heightInput.value;

        // Remove tudo que não seja número ou ponto
        value = value.replace(/[^0-9.]/g, '');

        // Permite apenas um ponto decimal
        if (value.indexOf('.') !== value.lastIndexOf('.')) {
            value = value.slice(0, -1);  // Remove o segundo ponto
        }

        // Limita a 3 dígitos inteiros e 1 casa decimal
        if (value.includes('.')) {
            const [intPart, decimalPart] = value.split('.');
            value = `${intPart.slice(0, 3)}.${decimalPart.slice(0, 1)}`;  // Limita a 1 casa decimal
        } else {
            value = value.slice(0, 3); // Limita os inteiros a no máximo 3 dígitos
        }

        heightInput.value = value; // Atualiza o campo com o valor formatado
    });


    // Máscara para o campo Peso (kg) - formato decimal com até uma casa decimal (ex: 70.5)
    const weightInput = document.querySelector('input[name="cf-weight"]');
    weightInput.addEventListener('input', function() {
        let value = weightInput.value;

        // Remove tudo que não seja número ou ponto
        value = value.replace(/[^0-9.]/g, '');

        // Permite apenas um ponto decimal
        if (value.indexOf('.') !== value.lastIndexOf('.')) {
            value = value.slice(0, -1);  // Remove o segundo ponto
        }

        // Limita a 3 dígitos inteiros e 1 casa decimal
        if (value.includes('.')) {
            const [intPart, decimalPart] = value.split('.');
            value = `${intPart.slice(0, 3)}.${decimalPart.slice(0, 1)}`;  // Limita a 1 casa decimal
        } else {
            value = value.slice(0, 3); // Limita os inteiros a no máximo 3 dígitos
        }

        weightInput.value = value; // Atualiza o campo com o valor formatado
    });
});
