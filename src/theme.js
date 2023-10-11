const HORIZON_THEME = {
  name:        'horizon',
  displayName: 'Horizon Theme',
  theme: {

    background: {
      default:    '#1C1E26',
      success:    '#27D796',
      notice:     '#6C6F93',
      warning:    '#FAC29A',
      danger:     '#E95678',
      surprise:   '#25B2BC',
      info:       '#25B2BC'
    },

    foreground: {
      default:     '#FDF0ED',
      success:     '#1C1E26',
      notice:      '#FDF0ED',
      warning:     '#1C1E26',
      danger:      '#1C1E26',
      surprise:    '#1C1E26',
      info:        '#1C1E26'
    },

    highlight: {
      default: '#afafc2'
    },

    styles: {
      appHeader: {
        foreground: {
          default: '#E95678',
          surprise:   '#1C1E26'
        }
      },

      paneHeader: {
        foreground: {
          surprise:   '#1C1E26',
          info:       '#1C1E26'
        }
      },

      editor: {
        foreground: {
          default:    '#FDF0ED',
          surprise:   '#1C1E26',
          info:       '#1C1E26'
        }
      },

      dialog: {

        background: {
          default:    '#232530'
        },

        foreground: {
          default:    '#FDF0ED'
        }
      }
    }
  }
};


module.exports = { HORIZON_THEME };
