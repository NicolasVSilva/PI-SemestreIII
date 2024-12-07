document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('input[name="cf-phone"]');

    phoneInput.addEventListener('input', function() {
        let value = phoneInput.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

        if (value.length <= 10) {
            // Formato sem o dígito 9 (caso de telefones fixos)
            value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        } else {
            // Formato com o dígito 9 (telefones celulares)
            value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        }

        phoneInput.value = value;
    });
});
