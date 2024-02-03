import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD } from '../../constants';

const styles = StyleSheet.create({
    button: {
        width: 386,
        height: '22%',
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#016949',
        backgroundColor: '#016949',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
  },
  text: {
    color: '#fff',
    fontSize: 20,
    width: 220,
  },
  flexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default styles;