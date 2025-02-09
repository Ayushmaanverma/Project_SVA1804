
// Fake Vendor Data (Replace with Firebase Firestore later)
const vendors = [
    { name: "Chai Stall", phone: "919876543210", item: "Masala Chai - ₹10" },
    { name: "Pani Puri", phone: "919876543211", item: "Pani Puri - ₹20" },
    { name: "Momos Wala", phone: "919876543212", item: "Veg Momos - ₹50" }
];

// Load vendors after login
function loadVendors() {
    const vendorList = document.getElementById("vendors");
    vendorList.innerHTML = "";

    vendors.forEach(vendor => {
        const li = document.createElement("li");
        li.className = "vendor-item";
        li.innerHTML = `
            <strong>${vendor.name}</strong> <br>
            ${vendor.item} <br>
            <button onclick="placeOrder('${vendor.phone}', '${vendor.item}')">Order on WhatsApp</button>
        `;
        vendorList.appendChild(li);
    });
}

// WhatsApp Order Integration
function placeOrder(vendorNumber, itemName) {
    const message = `New Order! %0AItem: ${itemName}`;
    const whatsappURL = `https://wa.me/${vendorNumber}?text=${message}`;
    
    window.open(whatsappURL, "_blank"); // Open WhatsApp chat
}