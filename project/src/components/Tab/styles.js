import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD, MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        display: 'flex',
    },
    tabTitle: {
        color: 'black',
        fontFamily: MONTSERRAT_BOLD,
        fontSize: 16,
    }
})

export default styles;