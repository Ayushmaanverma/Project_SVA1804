function goToLogin() {
    document.getElementById("onboarding-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

function goToHome() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("home-container").style.display = "block";
    loadVendors();
}

const vendors = [
    { name: "Chai Wala", description: "Best masala chai!", menu: ["Masala Chai - ₹10", "Lemon Tea - ₹20"] },
    { name: "Pani Puri Stall", description: "Crispy & spicy!", menu: ["Pani Puri - ₹30", "Dahi Puri - ₹40"] }
];

function loadVendors() {
    const vendorList = document.getElementById("vendor-list");
    vendorList.innerHTML = vendors.map((v, i) => `<div class="vendor-card" onclick="openVendor(${i})"><h2>${v.name}</h2></div>`).join("");
}

function openVendor(index) {
    const vendor = vendors[index];
    document.getElementById("vendor-name").innerText = vendor.name;
    document.getElementById("vendor-description").innerText = vendor.description;
    document.getElementById("vendor-menu").innerHTML = vendor.menu.map(item => `<li>${item}</li>`).join("");
    document.getElementById("vendor-details").style.display = "block";
}

function placeOrder() {
    window.location.href = "https://wa.me/917007383638";
}