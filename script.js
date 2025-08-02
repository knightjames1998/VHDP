// Define the items available for selection along with service fees and estimated costs
const items = [
  // $99 Service Fee items
  { id: "99-1", name: "PCs (Desktops, Laptops, Tablets)", fee: 99, cost: 1200, icon: "💻" },
  { id: "99-2", name: "TVs (LCD, Plasma or LED)", fee: 99, cost: 1000, icon: "📺" },
  { id: "99-3", name: "Gaming Systems", fee: 99, cost: 500, icon: "🎮" },
  { id: "99-4", name: "Printers", fee: 99, cost: 200, icon: "🖨️" },
  { id: "99-5", name: "Home Routers (Mesh)", fee: 99, cost: 300, icon: "📶" },
  { id: "99-6", name: "Home Theater System in a Box", fee: 99, cost: 600, icon: "🎼" },
  { id: "99-7", name: "Bluetooth and Wi-Fi Enabled Speakers", fee: 99, cost: 250, icon: "🔊" },
  { id: "99-8", name: "Virtual Reality Headsets", fee: 99, cost: 700, icon: "🕶️" },
  { id: "99-9", name: "Augmented Reality Headsets", fee: 99, cost: 700, icon: "🕶️" },
  { id: "99-10", name: "Smart Pet Collars", fee: 99, cost: 150, icon: "🐾" },
  { id: "99-11", name: "Robotic Vacuums", fee: 99, cost: 400, icon: "🧹" },
  { id: "99-12", name: "Robotic Mops", fee: 99, cost: 450, icon: "🧽" },

  // $49 Service Fee items
  { id: "49-1", name: "Smart Door Locks", fee: 49, cost: 200, icon: "🔒" },
  { id: "49-2", name: "Smart Home Security Cameras", fee: 49, cost: 150, icon: "📷" },
  { id: "49-3", name: "Smart Thermostats", fee: 49, cost: 180, icon: "🌡️" },
  { id: "49-4", name: "Smart Video Doorbells", fee: 49, cost: 200, icon: "🚪" },
  { id: "49-5", name: "Premium Audio Headsets", fee: 49, cost: 120, icon: "🎧" },
  { id: "49-6", name: "Smart Watches", fee: 49, cost: 300, icon: "⌚" },
  { id: "49-7", name: "Health and Fitness Bands", fee: 49, cost: 150, icon: "🏃" },
  { id: "49-8", name: "Pet Snack & Food Dispensers", fee: 49, cost: 100, icon: "🍖" },
  { id: "49-9", name: "Pet Auto Fetch Machines", fee: 49, cost: 150, icon: "🐶" },

  // No Service Fee items
  { id: "0-1", name: "Remote Control (Original Control Only)", fee: 0, cost: 50, icon: "🎛️" },
  { id: "0-2", name: "Game Controllers", fee: 0, cost: 60, icon: "🎮" },
  { id: "0-3", name: "External PC Speakers (Wired or Wireless)", fee: 0, cost: 80, icon: "🔈" },
  { id: "0-4", name: "Audio/Video Streaming Devices", fee: 0, cost: 70, icon: "📼" },
  { id: "0-5", name: "Monitors", fee: 0, cost: 250, icon: "🖥️" },
  { id: "0-6", name: "Keyboards", fee: 0, cost: 50, icon: "⌨️" },
  { id: "0-7", name: "Mouse", fee: 0, cost: 40, icon: "🖱️" },
  { id: "0-8", name: "Modems", fee: 0, cost: 80, icon: "📡" },
  { id: "0-9", name: "DVD and Blu-Ray Players", fee: 0, cost: 100, icon: "💿" },
  { id: "0-10", name: "Home Routers (Non-Mesh)", fee: 0, cost: 150, icon: "📶" },
  { id: "0-11", name: "Smart Device Hubs", fee: 0, cost: 90, icon: "🏠" },
  { id: "0-12", name: "Smart Light Dimmers", fee: 0, cost: 60, icon: "💡" },
  { id: "0-13", name: "Smart Smoke and Carbon Monoxide Detectors", fee: 0, cost: 120, icon: "🚨" },
  { id: "0-14", name: "Smart Alarm Contact Sensors", fee: 0, cost: 70, icon: "📟" },
  { id: "0-15", name: "Smart Alarm Flood and Freeze Sensors", fee: 0, cost: 80, icon: "❄️" },
  { id: "0-16", name: "Smart Alarm Glassbreak Sensors", fee: 0, cost: 90, icon: "🔨" },
  { id: "0-17", name: "Smart Alarm Keypads", fee: 0, cost: 100, icon: "🔢" },
  { id: "0-18", name: "Smart Alarm Motion Detectors", fee: 0, cost: 110, icon: "🏃" },
  { id: "0-19", name: "Smart Alarm Panic Buttons", fee: 0, cost: 60, icon: "🔴" },
  { id: "0-20", name: "Smart Alarm Range Extenders", fee: 0, cost: 70, icon: "📶" },
  { id: "0-21", name: "Smart Blood Pressure Monitors", fee: 0, cost: 200, icon: "❤️" },
  { id: "0-22", name: "Smart Personal Home Use EKG Monitors", fee: 0, cost: 300, icon: "❤️" },
  { id: "0-23", name: "Smart Pulse Oximeters", fee: 0, cost: 150, icon: "🫁" }
];

// Track quantity selections for each item
const itemCounts = {};

// Insert first informational modal about coverage age
const firstModalHTML = `
  <div id="info-modal" class="modal">
    <div class="modal-content">
      <p>Did you know it does not matter if your tech is 1 year old or 20 years old? It’s Covered!</p>
      <button id="modal-ok-btn">OK</button>
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', firstModalHTML);

const modal = document.getElementById('info-modal');
const modalOkBtn = document.getElementById('modal-ok-btn');
modalOkBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  popupShown = true;
});

let popupShown = false;

// Scroll-triggered modal about receipts
const scrollModalHTML = `
  <div id="scroll-modal" class="modal">
    <div class="modal-content">
      <p>You will NEVER need to show receipts or proof of purchase anytime you need to make a claim</p>
      <button id="scroll-modal-ok-btn">OK</button>
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', scrollModalHTML);

const scrollModal = document.getElementById('scroll-modal');
const scrollModalOkBtn = document.getElementById('scroll-modal-ok-btn');
scrollModalOkBtn.addEventListener('click', () => {
  scrollModal.classList.remove('show');
});

let scrollModalShown = false;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  if (!scrollModalShown && scrollPosition >= pageHeight - 50) {
    scrollModal.classList.add('show');
    scrollModalShown = true;
  }
});

// Intro overlay handling
const introOverlay = document.getElementById('intro-overlay');
const downArrow = document.getElementById('down-arrow');

function hideIntro() {
  introOverlay.classList.add('hidden');
  // Wait for CSS transition end before enabling scroll
  introOverlay.addEventListener('transitionend', () => {
    document.body.style.overflow = 'auto';
  }, { once: true });
}

// Disable scrolling initially
document.body.style.overflow = 'hidden';

// Allow hiding the intro on arrow click
downArrow.addEventListener('click', hideIntro);

// Also allow hiding intro if user scrolls or swipes down
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) hideIntro();
}, { once: true });
window.addEventListener('touchmove', () => {
  hideIntro();
}, { once: true });

// Helper to create a tile element for each item
function createTile(item) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.dataset.cost = item.cost;
  tile.dataset.id = item.id;
  tile.title = item.name;

  // Initialize count
  itemCounts[item.id] = 0;

  // Icon
  const iconSpan = document.createElement('span');
  iconSpan.textContent = item.icon;
  iconSpan.style.fontSize = '36px';
  iconSpan.style.display = 'block';
  iconSpan.style.marginBottom = '8px';

  // Name
  const nameSpan = document.createElement('span');
  nameSpan.textContent = item.name;
  nameSpan.style.display = 'block';
  nameSpan.style.marginBottom = '8px';

  // Controls container
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'tile-controls';

  const minusBtn = document.createElement('button');
  minusBtn.textContent = '−';
  minusBtn.setAttribute('aria-label', `Remove one ${item.name}`);

  const quantitySpan = document.createElement('span');
  quantitySpan.className = 'quantity';
  quantitySpan.textContent = '0';

  const plusBtn = document.createElement('button');
  plusBtn.textContent = '+';
  plusBtn.setAttribute('aria-label', `Add one ${item.name}`);

  // Event handlers for quantity controls
  minusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (itemCounts[item.id] > 0) {
      itemCounts[item.id] -= 1;
      quantitySpan.textContent = itemCounts[item.id];
      if (itemCounts[item.id] === 0) {
        tile.classList.remove('selected');
      }
      updateTotal();
    }
  });
  plusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    itemCounts[item.id] += 1;
    quantitySpan.textContent = itemCounts[item.id];
    // Show first modal on first addition
    if (!popupShown && itemCounts[item.id] > 0) {
      modal.classList.add('show');
    }
    tile.classList.add('selected');
    updateTotal();
  });

  controlsDiv.appendChild(minusBtn);
  controlsDiv.appendChild(quantitySpan);
  controlsDiv.appendChild(plusBtn);

  tile.appendChild(iconSpan);
  tile.appendChild(nameSpan);
  tile.appendChild(controlsDiv);

  return tile;
}

// Update the grand total when selections change
function updateTotal() {
  let total = 0;
  // Sum over all items based on quantity
  items.forEach((item) => {
    const count = itemCounts[item.id] || 0;
    total += count * item.cost;
  });
  document.getElementById('grand-total').textContent = '$' + total.toLocaleString();
}

// Initialize the tiles on page load
function init() {
  const fee99Container = document.getElementById('fee-99');
  const fee49Container = document.getElementById('fee-49');
  const fee0Container = document.getElementById('fee-0');
  items.forEach((item) => {
    const tile = createTile(item);
    if (item.fee === 99) fee99Container.appendChild(tile);
    else if (item.fee === 49) fee49Container.appendChild(tile);
    else fee0Container.appendChild(tile);
  });
}

window.onload = init;

// ----- Claim steps slider -----
const claimSteps = [
  {
    emoji: '🌐',
    title: 'Step 1: Visit Asurion Claims',
    // Make the Asurion website a clickable link
    description: 'Go to <a href="https://www.asurion.com/claims/" target="_blank" rel="noopener noreferrer">Asurion.com/claims/</a> and follow the easy online steps to start your claim.'
  },
  {
    emoji: '📦',
    title: 'Step 2: Item Eligibility',
    description: 'Bigger items are covered only under malfunction. Portable devices are covered for any issue, including accidental damage.'
  },
  {
    emoji: '🔧',
    title: 'Step 3: Repair or Replace',
    description: 'If your tech is unrepairable, Asurion will replace it with the newest version available.'
  },
  {
    emoji: '💵',
    title: 'Step 4: Discontinued Tech',
    description: 'If your device is discontinued, you will be reimbursed via Venmo, PayPal, or a mailed check.'
  }
];

let currentStep = 0;

function renderStep() {
  const stepData = claimSteps[currentStep];
  const stepSlide = document.getElementById('step-slide');
  if (!stepSlide) return;
  stepSlide.innerHTML = `
    <div class="step-emoji" style="font-size:48px;margin-bottom:10px;">${stepData.emoji}</div>
    <h3>${stepData.title}</h3>
    <p>${stepData.description}</p>
  `;
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  if (prevBtn) prevBtn.disabled = currentStep === 0;
  if (nextBtn) {
    const last = currentStep === claimSteps.length - 1;
    nextBtn.disabled = last;
    // Hide the next button entirely on the last step
    nextBtn.style.display = last ? 'none' : 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Render the first step when DOM is ready
  renderStep();
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        renderStep();
      }
    });
    nextBtn.addEventListener('click', () => {
      if (currentStep < claimSteps.length - 1) {
        currentStep++;
        renderStep();
      }
    });
  }
});

// --- Added logic for "What is VHDP" modal ---
const whatBtn = document.getElementById('what-btn');
const whatModal = document.getElementById('what-modal');
const whatOkBtn = document.getElementById('what-ok-btn');

if (whatBtn && whatModal && whatOkBtn) {
  whatBtn.addEventListener('click', () => {
    whatModal.classList.add('show');
    // prevent background scroll when modal is open
    document.body.style.overflow = 'hidden';
  });
  whatOkBtn.addEventListener('click', () => {
    whatModal.classList.remove('show');
    // re-enable scroll after closing modal
    document.body.style.overflow = 'auto';
  });
  (function () {
  const params = new URLSearchParams(window.location.search);
  const repName = params.get("name");
  const repPhone = params.get("phone");

  if (repName) {
    document.getElementById("repName").textContent = decodeURIComponent(repName);
  }
  if (repPhone) {
    document.getElementById("repPhone").textContent = decodeURIComponent(repPhone);
  }
})();


}
