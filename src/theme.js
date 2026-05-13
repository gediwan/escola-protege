// src/theme.js
export const colors = {
  primary: '#1A3A6B',      // Azul escuro (Escola que Protege)
  primaryLight: '#2A5298',
  secondary: '#27AE60',    // Verde
  secondaryLight: '#2ECC71',
  accent: '#F39C12',       // Amarelo/Laranja
  danger: '#E74C3C',       // Vermelho denúncia
  dangerLight: '#FADBD8',
  background: '#F5F7FA',
  card: '#FFFFFF',
  text: '#1C2833',
  textSecondary: '#5D6D7E',
  textLight: '#FFFFFF',
  border: '#D5DBDB',
  success: '#1ABC9C',
  purple: '#8E44AD',
  purpleLight: '#F4ECF7',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const typography = {
  h1: { fontSize: 28, fontWeight: '700', color: colors.text },
  h2: { fontSize: 22, fontWeight: '700', color: colors.text },
  h3: { fontSize: 18, fontWeight: '600', color: colors.text },
  body: { fontSize: 15, fontWeight: '400', color: colors.text },
  small: { fontSize: 13, fontWeight: '400', color: colors.textSecondary },
  caption: { fontSize: 11, fontWeight: '400', color: colors.textSecondary },
};
