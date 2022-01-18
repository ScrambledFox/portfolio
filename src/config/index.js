module.exports = {
  particles: {
    particles: {
      number: { value: 30 },
      color: { value: ['#0C67F0', '#5594F2', '#063070'] },
      opacity: {
        value: 0.65,
        random: true,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.2,
          sync: true,
        },
      },
      size: {
        value: 50,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 450,
        color: '#fff',
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      // activate
      events: {
        onhover: {
          enable: true,
          mode: ['bubble'],
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 20,
          duration: 1,
          opacity: 0.8,
          speed: 2,
        },
      },
    },
    retina_detect: true,
  },
}
