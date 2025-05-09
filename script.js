
function savePreferences(preferences) {
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
  showSavedNotification();
}
function getPreferences() {
  const savedPrefs = localStorage.getItem('userPreferences');
  return savedPrefs ? JSON.parse(savedPrefs) : {
    theme: 'light',
    accentColor: '#3498db',
    animationSpeed: 'normal',
    fontSize: 'medium'
  };
}
function showSavedNotification() {
  const notification = document.getElementById('saved-notification');
  if (notification) {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
}
function applyPreferences() {
  const preferences = getPreferences();
  if (preferences.theme === 'dark') {
    document.body.classList.add('dark-theme');
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) themeToggle.checked = true;
  }
  document.documentElement.style.setProperty('--accent-color', preferences.accentColor);
  const speedValue = {
    'slow': '1.5',
    'normal': '1',
    'fast': '0.5'
  };
  document.documentElement.style.setProperty('--animation-speed', speedValue[preferences.animationSpeed] || '1');
  const fontSizeValue = {
    'small': '0.9rem',
    'medium': '1rem',
    'large': '1.1rem'
  };
  document.documentElement.style.setProperty('--font-size', fontSizeValue[preferences.fontSize] || '1rem');
  updatePreferencesUI(preferences);
}
function updatePreferencesUI(preferences) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.checked = preferences.theme === 'dark';
  }
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.color === preferences.accentColor) {
      option.classList.add('selected');
    }
  });
  const speedSlider = document.getElementById('animation-speed');
  if (speedSlider) {
    const speedValues = { 'slow': 0, 'normal': 1, 'fast': 2 };
    speedSlider.value = speedValues[preferences.animationSpeed];
  }
  const fontSizeSelector = document.getElementById('font-size');
  if (fontSizeSelector) {
    fontSizeSelector.value = preferences.fontSize;
  }
}
const mainButton = document.getElementById('main-button');
if (mainButton) {
  mainButton.addEventListener('click', function() {
    this.textContent = 'Clicked!';
    this.classList.toggle('clicked');
    setTimeout(() => {
      this.textContent = 'Click Me';
      this.classList.toggle('clicked');
    }, 1000);
  });
  mainButton.addEventListener('dblclick', function() {
    document.body.classList.toggle('party-mode');
    const message = document.createElement('div');
    message.textContent = '🎉 Secret mode activated! 🎉';
    message.className = 'secret-message';
    document.body.appendChild(message);
    setTimeout(() => {
      document.body.removeChild(message);
      document.body.classList.toggle('party-mode');
    }, 3000);
  });
}
const hoverElements = document.querySelectorAll('.hover-effect');
hoverElements.forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.classList.add('hovered');
  });
  
  element.addEventListener('mouseleave', function() {
    this.classList.remove('hovered');
  });
});
document.addEventListener('keydown', function(event) {
  const keyDisplay = document.getElementById('key-display');
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
    keyDisplay.classList.add('key-pressed');
    setTimeout(() => {
      keyDisplay.classList.remove('key-pressed');
    }, 500);
  }
});
const colorButton = document.getElementById('color-button');
const colorTarget = document.getElementById('color-target');
const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#6B5B95', '#88D8B0'];
let colorIndex = 0;

if (colorButton && colorTarget) {
  colorButton.addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    colorTarget.style.backgroundColor = colors[colorIndex];
    this.textContent = `Color ${colorIndex + 1}`;
  });
}
const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1019/600/400',
  'https://picsum.photos/id/1022/600/400',
];
let currentImageIndex = 0;
const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imageDisplay = document.getElementById('image-display');

function updateGallery() {
  if (imageDisplay) {
    imageDisplay.src = images[currentImageIndex];
    imageDisplay.alt = `Image ${currentImageIndex + 1}`;
  }
}

if (prevBtn && nextBtn && imageDisplay) {
  prevBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
  });
  
  nextBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
  });
  updateGallery();
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', function() {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    this.classList.add('active');
    tabContents[index].classList.add('active');
  });
});
if (tabs.length > 0 && tabContents.length > 0) {
  tabs[0].classList.add('active');
  tabContents[0].classList.add('active');
}
const animatedElement = document.getElementById('animated-element');
if (animatedElement) {
  animatedElement.addEventListener('click', function() {
    this.classList.add('animated');
    setTimeout(() => {
      this.classList.remove('animated');
    }, 1000);
  });
}
const form = document.getElementById('validation-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const formStatus = document.getElementById('form-status');
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  if (small) small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}

function checkRequired(inputArr) {
  let valid = true;
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      valid = false;
    } else {
      showSuccess(input);
    }
  });
  return valid;
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    return false;
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
    return false;
  }
  return true;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
if (username) {
  username.addEventListener('input', function() {
    if (this.value.trim() !== '') {
      showSuccess(this);
    } else {
      showError(this, 'Username is required');
    }
  });
}

if (email) {
  email.addEventListener('input', function() {
    checkEmail(this);
  });
}

if (password) {
  password.addEventListener('input', function() {
    const value = this.value;
    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLongEnough = value.length >= 8;
    
    const strength = [hasLower, hasUpper, hasNumber, hasSpecial, isLongEnough]
      .filter(Boolean).length;
    
    let message = '';
    let className = '';
    
    if (strength < 2) {
      message = 'Password is weak';
      className = 'weak';
    } else if (strength < 4) {
      message = 'Password is medium';
      className = 'medium';
    } else {
      message = 'Password is strong';
      className = 'strong';
    }
    
    const strengthIndicator = document.getElementById('password-strength');
    if (strengthIndicator) {
      strengthIndicator.textContent = message;
      strengthIndicator.className = className;
    }
    
    if (value.length < 8) {
      showError(this, 'Password must be at least 8 characters');
    } else {
      showSuccess(this);
    }
  });
}

if (confirmPassword && password) {
  confirmPassword.addEventListener('input', function() {
    if (this.value === password.value) {
      showSuccess(this);
    } else {
      showError(this, 'Passwords do not match');
    }
  });
}
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const requiredValid = checkRequired([username, email, password, confirmPassword]);
    const userLengthValid = username ? checkLength(username, 3, 15) : false;
    const passwordLengthValid = password ? checkLength(password, 8, 25) : false;
    const emailValid = email ? checkEmail(email) : false;
    const passwordsMatch = password && confirmPassword ? 
      checkPasswordsMatch(password, confirmPassword) : false;
    if (requiredValid && userLengthValid && passwordLengthValid && emailValid && passwordsMatch) {
      if (formStatus) {
        formStatus.textContent = 'Form submitted successfully!';
        formStatus.className = 'success-message';
        setTimeout(() => {
          form.reset();
          formStatus.textContent = '';
          const allFormControls = document.querySelectorAll('.form-control');
          allFormControls.forEach(control => {
            control.className = 'form-control';
          });
          if (document.getElementById('password-strength')) {
            document.getElementById('password-strength').textContent = '';
            document.getElementById('password-strength').className = '';
          }
        }, 3000);
      }
    } else {
      if (formStatus) {
        formStatus.textContent = 'Please fix the errors in the form';
        formStatus.className = 'error-message';
      }
    }
  });
}
function togglePreferencesPanel() {
  const panel = document.getElementById('preferences-panel');
  if (panel) {
    panel.classList.toggle('open');
    
    if (panel.classList.contains('open')) {
      panel.style.animation = 'fadeIn var(--animation-speed)s ease';
    }
  }
}

function handleThemeToggle(e) {
  const isDarkTheme = e.target.checked;
  const theme = isDarkTheme ? 'dark' : 'light';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  
  const preferences = getPreferences();
  preferences.theme = theme;
  savePreferences(preferences);
  
  document.body.style.animation = 'fadeIn 0.5s ease';
  setTimeout(() => {
    document.body.style.animation = '';
  }, 500);
}

function handleColorSelection(color) 
{
  document.documentElement.style.setProperty('--accent-color', color);
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.classList.remove('selected');
  });
  event.target.classList.add('selected');
  
  const preferences = getPreferences();
  preferences.accentColor = color;
  savePreferences(preferences);
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
      button.style.animation = '';
    }, 500);
  });
}
function handleSpeedChange(value) {
  let speedText;
  let speedValue;
  
  switch (parseInt(value)) {
    case 0:
      speedText = 'slow';
      speedValue = '1.5';
      break;
    case 1:
      speedText = 'normal';
      speedValue = '1';
      break;
    case 2:
      speedText = 'fast';
      speedValue = '0.5';
      break;
    default:
      speedText = 'normal';
      speedValue = '1';
  }
  
  document.documentElement.style.setProperty('--animation-speed', speedValue);
  
  const speedDisplay = document.getElementById('speed-display');
  if (speedDisplay) {
    speedDisplay.textContent = speedText.charAt(0).toUpperCase() + speedText.slice(1);
  }
  
  const preferences = getPreferences();
  preferences.animationSpeed = speedText;
  savePreferences(preferences);

  const animatedElement = document.getElementById('animated-element');
  if (animatedElement) {
    animatedElement.classList.add('animated');
    setTimeout(() => {
      animatedElement.classList.remove('animated');
    }, parseInt(speedValue) * 1000);
  }
}

function handleFontSizeChange(size) {
  const fontSizeValue = {
    'small': '0.9rem',
    'medium': '1rem',
    'large': '1.1rem'
  };
  
  document.documentElement.style.setProperty('--font-size', fontSizeValue[size]);
  
  const preferences = getPreferences();
  preferences.fontSize = size;
  savePreferences(preferences);
  
  document.body.style.animation = 'fadeIn 0.3s ease';
  setTimeout(() => {
    document.body.style.animation = '';
  }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Interactive Event Assignment Loaded!');
  
  const savedNotification = document.createElement('div');
  savedNotification.id = 'saved-notification';
  savedNotification.className = 'saved-notification';
  savedNotification.textContent = 'Preferences saved successfully!';
  document.body.appendChild(savedNotification);
  
  document.documentElement.style.setProperty('--accent-color', '#3498db');
  document.documentElement.style.setProperty('--animation-speed', '1');
  document.documentElement.style.setProperty('--font-size', '1rem');
  
  applyPreferences();
  
  if (document.querySelector('.tab')) {
    document.querySelector('.tab').click();
  }
  
  if (document.getElementById('color-button')) {
    document.getElementById('color-button').click();
  }

  const preferencesTitle = document.getElementById('preferences-title');
  if (preferencesTitle) {
    preferencesTitle.addEventListener('click', togglePreferencesPanel);
  }
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', handleThemeToggle);
  }
  
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', () => handleColorSelection(option.dataset.color));
  });
  
  const speedSlider = document.getElementById('animation-speed');
  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => handleSpeedChange(e.target.value));
  }
  
  const fontSizeSelector = document.getElementById('font-size');
  if (fontSizeSelector) {
    fontSizeSelector.addEventListener('change', (e) => handleFontSizeChange(e.target.value));
  }
  
  const clearDataButton = document.getElementById('clear-data');
  if (clearDataButton) {
    clearDataButton.addEventListener('click', function() {
      localStorage.removeItem('userPreferences');
    
      const defaultPreferences = {
        theme: 'light',
        accentColor: '#3498db',
        animationSpeed: 'normal',
        fontSize: 'medium'
      };
      document.body.classList.remove('dark-theme');
      updatePreferencesUI(defaultPreferences);
      applyPreferences();
      
      const notification = document.getElementById('saved-notification');
      if (notification) {
        notification.textContent = 'Preferences reset to default!';
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
          notification.textContent = 'Preferences saved successfully!';
        }, 3000);
      }
    });
  }
});