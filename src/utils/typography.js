import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '1.6',
  scaleRatio: 2,
  headerFontFamily: ['Lora', 'Helvetica', 'Arial', 'serif'],
  headerWeight: 400,
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: 'Lora',
      styles: ['400', '400i', '700'],
    },
  ],
});

export default typography;
