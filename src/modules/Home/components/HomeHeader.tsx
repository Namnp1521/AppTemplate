import {Block, IconWrap, Text} from '@components';
import {Colors, Images} from '@constants';
import {MomentUtilities} from '@utils';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface IHomeHeader {}

function HomeHeader(props: IHomeHeader) {
  const {} = props;
  const {top} = useSafeAreaInsets();

  /** callback */

  /** render */
  return (
    <Block margin={[top + 16, 16, 0, 16]}>
      <Block row center>
        <IconWrap icon={Images.ICON.Sun} size={24} color={Colors.primary} />
        <Block ml={8}>
          <Text size={16} color="primary">
            {MomentUtilities.formatDateDDMMMYYYY(new Date())}
          </Text>
        </Block>
      </Block>
      <Block mt={16}>
        <Text size={20} weight="600">
          Welcome John!
        </Text>
      </Block>
    </Block>
  );
}

export default HomeHeader;
