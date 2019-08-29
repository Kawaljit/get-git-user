
import { useState, useRef, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import User from '../components/user';
import Lookup from '../components/lookup';
import CustomError from '../components/customError'


function Index() {
  const [
    searchText,
    setSearchText
  ] = useState(null);

  const [
    userData,
    setUserData
  ] = useState(null);

  const [
    customError,
    setError
  ] = useState(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      (async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${searchText}`);
          if (response.status === 200) {
            const user = await response.json();
            setUserData(user);
            setError(null);
          } else {
            setUserData(null);
            setError(response)
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [searchText]);

  return (
    <Layout >
      <Lookup setSearchText={setSearchText} />
      {userData && <User userData={userData} />}
      {customError && <CustomError customError={customError} />}
    </Layout>
  );
}

export default Index;