import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        pt: 'pt-sans'
      }
    }),
    presetIcons({
      scale: 1.1,
      cdn: 'https://esm.sh/',
    }),
    presetTypography({
      cssExtend: {
        'h1': {
          'font-size': '1.6em',
        },
        'h2': {
          'font-size': '1.4em',
          'margin': '1.4em 0 0.5em',
        },
        'h3': {
          'font-size': '1.25em',
          'margin': '1.2em 0 0.5em',
        },
        'h5, h6': {
          margin: '1em 0 0.5em',
        },
      },
    }),
  ],
  shortcuts: [],
})
