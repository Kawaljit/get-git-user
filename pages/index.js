
import { useState, useRef, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import User from '../components/user';
import Lookup from '../components/lookup';


function Index() {
  const [
    searchText,
    setSearchText
  ] = useState('');

  const [
    userData,
    setUserData
  ] = useState(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      (async () => {
        const response = await fetch(`https://api.github.com/users/${searchText}`);
        const user = await response.json();
        setUserData(user);
      })();
    }
  }, [searchText]);

  return (
    <Layout >
      <Lookup setSearchText={setSearchText} />
      {userData && <User userData={userData} />}
    </Layout>
  );
}

export default Index;