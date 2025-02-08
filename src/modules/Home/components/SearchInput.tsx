import {Block, IconWrap, Input} from '@components';
import {Colors, Images} from '@constants';
import React from 'react';
import {useSearch} from '../hook/Home.hook';

export interface ISearchInput {}

function SearchInput(props: ISearchInput) {
  const {} = props;

  /** state */
  const {searchText, onChangeValue} = useSearch();

  /** render */
  return (
    <Block margin={[0, 16]} mt={24}>
      <Input
        border
        bgColor={Colors.white}
        value={searchText}
        onChangeText={onChangeValue}
        color={Colors.black}
        selectionColor={Colors.primary}
        sx={{
          fontSize: 14,
          paddingLeft: 20 * 2 + 24,
          paddingRight: 20,
          paddingTop: 12,
          paddingBottom: 12,
        }}
        borderRadius={12}
        placeholder="Search"
        placeholderTextColor={Colors.black}
        leftView={
          <Block>
            <IconWrap
              icon={Images.ICON.Search}
              size={24}
              color={Colors.default}
            />
          </Block>
        }
      />
    </Block>
  );
}

export default SearchInput;
