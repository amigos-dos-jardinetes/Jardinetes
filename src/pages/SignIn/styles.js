import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerBotton: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '-1.5%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  containerMiddle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '14%',
  },
  button: {
    paddingLeft: 15,
    fontSize: 32,
  },
  containerInput: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '38%',
    marginTop: '-6%',
  },
  userInput: {
    width: 300,
    height: 32,
    backgroundColor: '#B68F40',
    borderRadius: 7,
  },
  passwordInput: {
    marginTop: '4%',
    width: 300,
    height: 32,
    backgroundColor: '#00B44A',
    borderRadius: 7,

  },
  entrarButton: {
    width: 218,
    height: 27,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: '#166034',
    marginLeft: '5%',
    marginTop: '8%',
  },
  entrartext: {
    marginTop: '0.25%',
    marginLeft: '31%',
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '150%',
  },
  googleButton: {
    marginTop: '1.7%',
    marginLeft: '17.5%',
    maxHeight: '10px',
    maxWidth: '10px',
  },
  input: {
    fontSize: 22,
  },
  googleLogo: {
    color: '#4caf50',
  },
  hudText: {
    fontFamily: 'Helvetica',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#271C00',
  },
  forgotPlace: {
    marginTop: '-11.2%',
    marginLeft: '22.5%',
    maxWidth: '100px',
  },
  forgotText: {
    fontFamily: 'Helvetica',
    fontSize: '10px',
  },
  paginaAtual: {
    paddingLeft: 15,
    fontSize: 32,
    fontFamily: 'Helvetica',
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'grey',
  }
});