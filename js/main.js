$(".carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,

  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
    },
    500: {
      items: 3,
    },
    700: {
      items: 4,
    },
    900: {
      items: 5,
    },
  },
});
