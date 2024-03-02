import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  textcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: 100,
    backgroundColor: '#F2F2F2',
    padding: 16
  },
  firstText: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: 'black',
    fontWeight: 600
  },
});
export default styles;
