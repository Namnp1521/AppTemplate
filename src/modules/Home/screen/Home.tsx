import {Block, Container, Loader} from '@components';
import {withOptimize} from '@utils';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import HomeHeader from '../components/HomeHeader';
import ProductList from '../components/ProductList';
import SearchInput from '../components/SearchInput';
import {initHome} from '../hook/Home.hook';

function Home() {
  /** props */
  const {loading} = initHome();

  /** render */
  if (loading) {
    return (
      <Block flex color="white" center middle>
        <Loader loading />
      </Block>
    );
  }

  return (
    <Block flex>
      <Container pt={0}>
        <Animated.View entering={FadeInDown.delay(0).duration(600)}>
          <HomeHeader />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).duration(600)}>
          <SearchInput />
        </Animated.View>
        {/* <Animated.View entering={FadeInDown.delay(500).duration(600)}>
          <Categories />
        </Animated.View> */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)}>
          <ProductList />
        </Animated.View>
      </Container>
    </Block>
  );
}

export default withOptimize(Home);
