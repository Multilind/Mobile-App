import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD } from '../../constants';

const styles = StyleSheet.create({
  content: {
    height: '100%',
    backgroundColor: 'white'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goback: {
    position: 'absolute',
    marginTop: 70,
    left: 15,
  },
  dictChildren: {
    marginBottom: 48,
    backgroundColor: 'rgba(1, 105, 73, 0.10)',
    borderWidth: 2,
    borderColor: '#016949'
  },
  imageChildren: {
    backgroundColor: 'rgba(45, 72, 186, 0.10)',
    borderWidth: 2,
    borderColor: '#2D48BA'
  },
  Dict: {
    width: '90%',
    marginBottom: '8.3%',
    marginTop: '12%',
  },
  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
    top: 5,
  },
  buttonscontainer: {
    top: 80,
    width: '90%',
  },
});

export default styles;
