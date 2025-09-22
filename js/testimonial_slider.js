// Testimonial slider functionality
    document.addEventListener('DOMContentLoaded', function () {
      let currentSet = 0;
      let cardsPerSet = 3;
      const cards = document.querySelectorAll('.testimonial-card');
      const dots = document.querySelectorAll('.control-dot');
      let rotationInterval;

      function getCardsPerSet() {
        if (window.innerWidth <= 768) {
          return 1;
        } else if (window.innerWidth <= 992) {
          return 2;
        } else {
          return 3;
        }
      }

      function showSet(setIndex) {
        clearInterval(rotationInterval);

        currentSet = setIndex;
        cardsPerSet = getCardsPerSet();

        // Hide all cards first
        document.querySelectorAll('.testimonial-card.active').forEach(card => {
          card.classList.add('exiting');
        });

        setTimeout(() => {
          cards.forEach(card => {
            card.classList.remove('active');
            card.classList.remove('exiting');
          });

          // Show the current set of cards
          setTimeout(() => {
            for (let i = 0; i < cardsPerSet; i++) {
              const cardIndex = (currentSet * cardsPerSet) + i;
              if (cardIndex < cards.length) {
                setTimeout(() => {
                  cards[cardIndex].classList.add('active');
                }, i * 100);
              }
            }
          }, 50);

          // Update active dot
          dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSet);
          });

          startAutoRotation();
        }, 800);
      }

      function rotateCards() {
        cardsPerSet = getCardsPerSet();
        const maxSets = Math.ceil(cards.length / cardsPerSet);
        currentSet = (currentSet + 1) % maxSets;
        showSet(currentSet);
      }

      function startAutoRotation() {
        clearInterval(rotationInterval);
        rotationInterval = setInterval(() => {
          rotateCards();
        }, 5000);
      }

      // Initialize
      cardsPerSet = getCardsPerSet();
      showSet(0);
      startAutoRotation();

      // Add click events to dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          showSet(index);
        });
      });

      // Add click events to cards
      cards.forEach(card => {
        card.addEventListener('click', function () {
          rotateCards();
        });
      });

      // Handle window resize
      window.addEventListener('resize', function () {
        const newCardsPerSet = getCardsPerSet();
        if (newCardsPerSet !== cardsPerSet) {
          cardsPerSet = newCardsPerSet;
          showSet(0);
        }
      });
    });