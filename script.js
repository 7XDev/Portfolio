// Slider configuration
const sliderData = {
    content1: [
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org/' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
    ],
    content2: [
        { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', url: 'https://visualstudio.microsoft.com/' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/' },
        { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com/' },
        { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', url: 'https://www.cloudflare.com/' },
        { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', url: 'https://www.microsoft.com/windows' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', url: 'https://www.linux.org/' },
        { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', url: 'https://www.arduino.cc/' }
    ]
};

// Function to create a slider item
function createSliderItem(item) {
    const sliderLink = document.createElement('a');
    sliderLink.href = item.url;
    sliderLink.target = '_blank';
    sliderLink.rel = 'noopener noreferrer';
    sliderLink.className = 'slider-item';
    
    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.name;
    img.onerror = function() {
        // Fallback if icon doesn't load
        this.style.display = 'none';
    };
    
    const span = document.createElement('span');
    span.textContent = item.name;
    
    sliderLink.appendChild(img);
    sliderLink.appendChild(span);
    
    return sliderLink;
}

// Function to initialize a slider
function initializeSlider(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Create slider track
    const track = document.createElement('div');
    track.className = 'slider-track';
    
    // Add items twice for seamless loop
    const allItems = [...items, ...items];
    allItems.forEach(item => {
        track.appendChild(createSliderItem(item));
    });
    
    container.appendChild(track);
    
    // Calculate animation duration based on number of items
    // Base speed: 2.5 seconds per item for consistent speed
    const duration = items.length * 1.75;
    track.style.animationDuration = `${duration}s`;
}

// Function to add a new item to a slider
function addSliderItem(containerId, item) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const track = container.querySelector('.slider-track');
    if (!track) return;
    
    // Add item to the data
    sliderData[containerId].push(item);
    
    // Recreate the slider with updated data
    track.innerHTML = '';
    const allItems = [...sliderData[containerId], ...sliderData[containerId]];
    allItems.forEach(dataItem => {
        track.appendChild(createSliderItem(dataItem));
    });
    
    // Recalculate animation duration
    const duration = sliderData[containerId].length * 2.5;
    track.style.animationDuration = `${duration}s`;
}

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider('content1', sliderData.content1);
    initializeSlider('content2', sliderData.content2);
});