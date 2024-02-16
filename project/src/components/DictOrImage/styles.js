import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  dictionary: {
    height: 170,
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  description: {
    marginTop: 20,
    maxWidth: 300,
  },
  flexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    width: 72,
    height: 62,
  },
  buttontext: {
    color: 'black',
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 24,
  },
});

export default styles;
