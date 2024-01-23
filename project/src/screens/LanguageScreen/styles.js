import { StyleSheet } from 'react-native';
import {
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
} from '../../constants';

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, 
    borderTopColor: '#C4C4C4',
    borderBottomColor: 'transparent'
  },
  textlist: {
    color: 'black',
    fontSize: 18,
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  arrow: {
    paddingRight: 14,
  },
  filters: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
    height: 100
  },
  searchBar: {
    width: 'auto',
    alignSelf: 'center',
    padding: 10
  },
  modal: {
    top: '16%',
    left: '50%',
    backgroundColor: 'white',
    width: '47%',
    height: 150,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconmodal: {
    left: 5,
  },
  textmodal: {
    fontSize: 16,
    fontFamily: MONTSERRAT_REGULAR,
    width: 200,
    left: 25,
  },
  filter: {
    top: '60%',
    left: '80%',
  },
  filtericon: {},
});

export default styles;
