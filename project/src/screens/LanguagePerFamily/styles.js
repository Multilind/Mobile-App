import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD } from '../../constants';

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
    fontSize: 20,
    fontFamily: MONTSERRAT_SEMIBOLD,
    marginRight: '9%',
  },
  arrow: {
    paddingRight: 14,
  },
  familyLinguas: {
    display: 'flex',
    flexDirection: 'row',
  },
  qtdLinguas: {
    backgroundColor: '#04B47F',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 16,
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  filterClick: {
    bottom: '35%',
    marginLeft: '80%',
    width: '5%',
  },
  scrollView: {
    marginTop: '1%',
    marginBottom: 75,
  },
});

export default styles;
