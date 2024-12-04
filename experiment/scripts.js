// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// function resizeCanvas() {
//     const cssWidth = canvas.clientWidth;
//     const cssHeight = canvas.clientHeight;

//     // Set the internal dimensions of the canvas
//     canvas.width = cssWidth * window.devicePixelRatio; // Adjust for high DPI screens
//     canvas.height = cssHeight * window.devicePixelRatio;

//     // Scale context to ensure proper rendering
//     ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

//     drawDots(); // Redraw dots whenever the canvas is resized
// }

// const dots = [];
// const dotSize = 1; // Size of each dot
// let spacing = 20; // Base space between dots

// function calculateSpacing() {
//     // Calculate spacing based on canvas width and height
//     spacing = Math.min(canvas.width, canvas.height) / 50; // Adjust divisor for desired density
// }

// function drawDots() {
//     calculateSpacing(); // Update spacing based on new dimensions
//     dots.length = 0; // Clear existing dots

//     const rows = Math.ceil(canvas.height / (dotSize * Math.sqrt(3) + spacing));
//     const cols = Math.ceil(canvas.width / (dotSize * 2 + spacing));

//     // Generate dots in a triangular grid pattern with updated spacing
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             const x = col * (dotSize * 2 + spacing) + (row % 2) * (dotSize + spacing / 2);
//             const y = row * (dotSize * Math.sqrt(3) + spacing);
//             dots.push({ x, y });
//         }
//     }
// }

// let time = 0;

// // Animation loop
// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

//     // Draw dots with wave-like bulge effect
//     for (let dot of dots) {
//         const waveEffectX = Math.sin((dot.x + time * 50) / 100) * 10; // Horizontal wave effect
//         const waveEffectY = Math.cos((dot.y + time * 50) / 100) * 10; // Vertical wave effect

//         const maxBulgeEffect = waveEffectX + waveEffectY;

//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y - maxBulgeEffect, dotSize, 0, Math.PI * 10); // Apply bulge effect
//         ctx.fillStyle = 'red';
//         ctx.fill();
//     }

//     // Create a vignette effect at the bottom
//     const gradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
//     gradient.addColorStop(0, 'rgba(0, 0, 0, 0.3)');   // Fully transparent at the top of the gradient
//     gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)'); // Dark shadow at the bottom

//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, canvas.height - 100, canvas.width, 100); // Fill a rectangle with the gradient

//     time += 0.1; // Increment time for animation
//     requestAnimationFrame(animate); // Request next frame
// }

// // Start with initial setup
// resizeCanvas();
// drawDots(); // Initial drawing of dots
// animate(); // Start animation

// // Add event listener for window resize
// window.addEventListener('resize', resizeCanvas);




const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawDots(); // Redraw dots whenever the canvas is resized
}

const dots = [];
const dotSize = 1; // Size of each dot
let spacing = 20; // Base space between dots

function calculateSpacing() {
    // Calculate spacing based on canvas width and height
    spacing = Math.min(canvas.width, canvas.height) / 50; // Adjust divisor for desired density
}

function drawDots() {
    calculateSpacing(); // Update spacing based on new dimensions
    dots.length = 0; // Clear existing dots

    const rows = Math.ceil(canvas.height / (dotSize * Math.sqrt(3) + spacing));
    const cols = Math.ceil(canvas.width / (dotSize * 2 + spacing));


    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Calculate the x position
            const x = col * (spacing * 1.5); // Horizontal distance between dots
            
            // Calculate the y position with offset for odd rows
            const y = row * (spacing * Math.sqrt(3)) + (col % 2) * (spacing * Math.sqrt(3) / 2);
            
            dots.push({ x, y });
        }
    }



}

let time = 0;

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Draw dots with wave-like bulge effect
    for (let dot of dots) {
        const waveEffectX = Math.sin((dot.x + time * 50) / 100) * 10; // Horizontal wave effect
        const waveEffectY = Math.cos((dot.y + time * 50) / 100) * 10; // Vertical wave effect

        const maxBulgeEffect = waveEffectX + waveEffectY;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y - maxBulgeEffect, dotSize, 0, Math.PI * 2); // Apply bulge effect
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    // Create a vignette effect at the bottom
    const gradient = ctx.createLinearGradient(0, canvas.height - 300, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');   // Fully transparent at the top of the gradient
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)'); // Dark shadow at the bottom

    ctx.fillStyle = gradient;
    ctx.fillRect(0, canvas.height - 300, canvas.width, 300); // Fill a rectangle with the gradient

    time += 0.1; // Increment time for animation
    requestAnimationFrame(animate); // Request next frame
}

// Start with initial setup
resizeCanvas();
drawDots(); // Initial drawing of dots
animate(); // Start animation

// Add event listener for window resize
window.addEventListener('resize', resizeCanvas);



