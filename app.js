document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("onboarding-container").style.display = "flex";
    }, 2000);
});

function goToHome() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("home-container").style.display = "block";
    loadVendors();
}

const vendors = [
    {
        name: "Chai Wala",
        description: "Best masala chai in town!",
        image: "https://source.unsplash.com/400x250/?tea",
        menu: ["Masala Chai - ₹10", "Ginger Chai - ₹15", "Lemon Tea - ₹20"]
    },
    {
        name: "Pani Puri Stall",
        description: "Crispy and spicy Pani Puri.",
        image: "https://source.unsplash.com/400x250/?panipuri",
        menu: ["Pani Puri - ₹30", "Dahi Puri - ₹40", "Sev Puri - ₹35"]
    },
    {
        name: "Momos Corner",
        description: "Delicious steamed and fried momos.",
        image: "https://source.unsplash.com/400x250/?momos",
        menu: ["Veg Momos - ₹50", "Paneer Momos - ₹60", "Chicken Momos - ₹70"]
    }
];

function loadVendors() {
    const vendorList = document.getElementById("vendor-list");
    vendorList.innerHTML = "";
    vendors.forEach((vendor, index) => {
        const vendorCard = document.createElement("div");
        vendorCard.classList.add("vendor-card");
        vendorCard.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <h2>${vendor.name}</h2>
            <p>${vendor.description}</p>
        `;
        vendorCard.onclick = () => openVendor(index);
        vendorList.appendChild(vendorCard);
    });
}

function openVendor(index) {
    const vendor = vendors[index];
    document.getElementById("home-container").style.display = "none";
    document.getElementById("vendor-details").style.display = "block";
    document.getElementById("vendor-name").innerText = vendor.name;
    document.getElementById("vendor-description").innerText = vendor.description;
    
    const menuList = document.getElementById("vendor-menu");
    menuList.innerHTML = "";
    vendor.menu.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        menuList.appendChild(li);
    });
}

function backToHome() {
    document.getElementById("vendor-details").style.display = "none";
    document.getElementById("home-container").style.display = "block";
}
