import React, { memo, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import { firebase, db, addDoc, auth, collection, doc, getDocs, setDoc, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '../firebase/config'

type Props = {
  navigation: Navigation;
};



const Dashboard = ({ navigation }) => {

  const [visible, setVisible] = useState(false);
  const [notificationMessage, setnotificationMessage] = useState('');

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const userSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate('LoginScreen')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={userSignOut}>
        Logout
      </Button>
    </Background>
  )
}
export default memo(Dashboard);
