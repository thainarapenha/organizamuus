import { ThemeProvider } from 'styled-components/native';
import theme from '@/theme/lightTheme';
import { StackRoutes } from '@/routes/stackRoutes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StackRoutes />
    </ThemeProvider>
  );
}