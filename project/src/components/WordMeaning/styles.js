import { StyleSheet } from 'react-native';
import { MONTSERRAT_BOLD, MONTSERRAT_SEMIBOLD } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 112,
    borderRadius: 19,
    borderColor: '#016949',
    borderWidth: 2,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    flexShrink: 0,
    margin: 24
  },
  header: {
    width: '100%',
    height: 56,
    backgroundColor: '#E6F0ED',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16

  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent'
  },
  title: {
    color: '#016949',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  meaning: {
    color: '#000',
    fontSize: 22,
    fontFamily: MONTSERRAT_SEMIBOLD,
    textAlign: 'justify',
  },
});
export default styles;
