import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#55418E' ,'#000000'],
  start: { x: 0.8, y: -0.1 },
  end: { x: -0.1, y: 1 }
})`
  flex: 1;
`;
