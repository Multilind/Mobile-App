import { StyleSheet } from 'react-native';
import {
    MONTSERRAT_BOLD,
    MONTSERRAT_SEMIBOLD,
    MONTSERRAT_REGULAR,
  } from '../../constants';

const styles = StyleSheet.create({
    listcontainer: {
        backgroundColor: 'white',
        borderRadius: 0,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderTopColor: '#C4C4C4',
        borderBottomColor: 'transparent',
      },
      list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
      textlist: {
        color: 'black',
        fontSize: 18,
        fontFamily: MONTSERRAT_SEMIBOLD, 
        width: '90%',
      },
      arrow: {
        paddingRight: 14,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontFamily: MONTSERRAT_BOLD, 
        fontSize: 40,
        marginTop: 40,
        padding: 24
      },
});

export default styles;