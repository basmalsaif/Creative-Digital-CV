// Initialize AOS for scroll animations
AOS.init({
  once: true,
  duration: 700,
  easing: 'ease-out-quart'
});

// Highlight active navigation link based on current page
const currentPath = window.location.pathname.split('/').pop();
const normalizedPath = currentPath === '' ? 'index.html' : currentPath;
document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.getAttribute('href') === normalizedPath) {
    link.classList.add('active');
  }
});

// Simple CV preview generator logic
const nameInput = document.querySelector('#cvName');
const roleInput = document.querySelector('#cvRole');
const skillsInput = document.querySelector('#cvSkills');
const previewName = document.querySelector('#previewName');
const previewRole = document.querySelector('#previewRole');
const previewSkills = document.querySelector('#previewSkills');
const avatar = document.querySelector('#previewAvatar');

function updatePreview() {
  if (!previewName || !previewRole || !previewSkills) return;

  const nameValue = nameInput?.value?.trim() || 'Jordan Rivers';
  const roleValue = roleInput?.value?.trim() || 'Product Designer';
  const skillsValue = skillsInput?.value?.trim() || 'UX Research, Visual Design, Prototyping';

  previewName.textContent = nameValue;
  previewRole.textContent = roleValue;
  previewSkills.innerHTML = '';

  const initials = nameValue
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
  if (avatar) {
    avatar.textContent = initials || 'CR';
  }

  skillsValue.split(',').forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    previewSkills.appendChild(li);
  });
}

[nameInput, roleInput, skillsInput].forEach((input) => {
  input?.addEventListener('input', updatePreview);
});

updatePreview();
