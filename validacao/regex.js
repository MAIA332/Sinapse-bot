const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Exemplo de uso:
const email = 'fsdfsdfdsfds';
if (emailRegex.test(email)) {
  console.log('O endereço de e-mail é válido.');
} else {
  console.log('O endereço de e-mail não é válido.');
}
