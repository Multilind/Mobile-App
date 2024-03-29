import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD } from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingBottom: 13,
    paddingTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 2
  },
  textBar: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
  },
});

export default styles;
