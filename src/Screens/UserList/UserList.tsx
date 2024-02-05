import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useAppDispatch, useAppSelector} from '../../Hooks/reduxHooks';
import {fetchUsers} from '../../Redux/Actions/User/user.action';
import UserListSkeleton from '../../Components/Skeleton/UserList.skeleton';
import UserCard from '../../Components/Cards/UserCard';
import {NavigationProps} from '../../Models/Navigation/Navigation.models';

type Props = {};

const UserList = ({navigation}: NavigationProps<'UserList'>) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={{flex: 1}}>
      {data.isLoading ? (
        <UserListSkeleton />
      ) : (
        <FlashList
          data={data?.users}
          estimatedItemSize={100}
          renderItem={({item, index}) => {
            return (
              <Pressable
                onPress={() => navigation.navigate('UserDetail', {item})}>
                <UserCard key={item.id} {...{item, index}} />
              </Pressable>
            );
          }}
        />
      )}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
