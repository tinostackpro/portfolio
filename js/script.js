/* PERSONALIZE AQUI. Use URLs completas (https://...).
   O nome pode ser alterado nos cabeçalhos dos três arquivos HTML. */
const portfolioLinks = {
  certificados: 'https://drive.google.com/drive/folders/16Sef-eCiLmXI7UqyFYG-v7pJj9pyxOSo?usp=sharing',
  github: 'https://github.com/tinostackpro',
  linkedin: 'https://www.linkedin.com/in/tinostackpro/',
};

// Aplica os links compartilhados. Os projetos são editados em projetos.html.
document.querySelectorAll('[data-config]').forEach((link) => {
  link.setAttribute('href', portfolioLinks[link.dataset.config]);
});

// Evita que os placeholders levem a páginas inexistentes.
// Depois de inserir uma URL real, o link abre normalmente em uma nova aba.
const notice = document.querySelector('#link-notice');
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href').startsWith('COLE_AQUI_')) {
      event.preventDefault();
      notice.showModal();
    }
  });
});
