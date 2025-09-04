document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const domaine = document.getElementById("domaine").value;
    const niveau = document.getElementById("niveau").value;
    const message = document.getElementById("message").value.trim();

    // Message format
    const finalMessage = `Bonjour, je souhaite m’inscrire à la formation *${domaine}*.
- Nom: ${lastName}
- Prénom: ${firstName}
- Email: ${email}
- Téléphone: ${phone}
- Niveau: ${niveau}
- Message: ${message}`;

    const whatsappNumber = "212612345678"; // <= ✅ change ce numéro

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  });

  const enSavoirPlusBtn = document.getElementById("enSavoirPlusBtn");
  if (enSavoirPlusBtn) {
    enSavoirPlusBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const formationSection = document.getElementById("formation");
      if (formationSection) {
        formationSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
