import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD, MONTSERRAT_REGULAR } from '../../constants';

const styles = StyleSheet.create({
  listcontainer: {
    margin: 1,
  },
  arrow: {
    paddingRight: 14,
  },
  container: {
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    padding: 24,
    fontSize: 18,
    fontFamily: MONTSERRAT_REGULAR,
    textAlign: 'justify'
  },
  title: {
    fontFamily: MONTSERRAT_BOLD,
    fontSize: 30,
  },
  searchBar: {
    width: '90%',
    alignSelf: 'center',
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
  buttom: {
    width: 250,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#2D48BA',
    borderRadius: 20,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  buttontext: {
    flexDirection: 'row',
    textAlign: 'center',
    marginVertical: 2,
    color: '#2D48BA',
  },
  goback: {
    marginTop: 55,
    left: 15,
  },
  textbuttom: {
    textAlign: 'center',
    left: 10,
    fontSize: 17,
    marginVertical: 2,
    color: '#FFFFFF',
  },

  buttonimage: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  containerImage: {
    marginBottom: 50,
  },
  containerImage2: {
    width: '50%',
    marginLeft: '1.5%',
  },
  filtericon: {},
});

export default styles;
