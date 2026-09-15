document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Global On-Scroll Section Element Reveals ---
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealObserverOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target); // Reveal animation occurs once
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(element => revealObserver.observe(element));


    // --- 2. Split Screen Sticky Scrollytelling Mechanics Engine ---
    const steps = document.querySelectorAll(".step-card");
    const images = document.querySelectorAll(".slide-img");

    const scrollyObserverOptions = {
        root: null,
        // Active margins configured to intercept center screen tracking blocks
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0.1
    };

    const scrollyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Clear state layers
                steps.forEach(step => step.classList.remove("active"));
                images.forEach(img => img.classList.remove("active"));

                // Active designated layer targets
                entry.target.classList.add("active");
                const currentStep = entry.target.getAttribute("data-step");
                const matchedImage = document.getElementById(`img-${currentStep}`);
                if (matchedImage) matchedImage.classList.add("active");
            }
        });
    }, scrollyObserverOptions);

    steps.forEach(step => scrollyObserver.observe(step));


       // This is the end of your section 3 vessel tool
    vesselItems.forEach(item => {
        item.addEventListener("click", () => {
            vesselItems.forEach(v => v.classList.remove("active"));
            item.classList.add("active");
            console.log(`Logistics track focus swapped to target: ${item.getAttribute("data-vessel")}`);
        });
    });

    // The clipboard engine sits safely INSIDE the wrapper here
    const phoneLink = document.getElementById('phone-link');
    if (phoneLink) {
        phoneLink.addEventListener('click', function() {
            navigator.clipboard.writeText('+2349026998901');
            const toast = document.getElementById('copy-toast');
            if (toast) {
                toast.classList.add('toast-visible');
                setTimeout(() => {
                    toast.classList.remove('toast-visible');
                }, 2000);
            }
        });
    }

}); // <--- THIS is the final closing bracket that must sit at the absolute end of the file.
