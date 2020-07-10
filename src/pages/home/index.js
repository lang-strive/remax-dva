import React from "react";
import { View, Text, Image, Button } from "remax/one";
import styles from "./index.less";
import { connect } from "react-redux";
import showToast from "@/api/showToast";

const Index = props => {
  console.log(props);
  const { count, dispatch } = props;
  return (
    <View className={styles.home}>
      <Button
        onTap={() => {
          dispatch({
            type: "home/update",
            payload: {
              count: count + 1
            }
          });
        }}
      >
        按钮{count}
      </Button>
    </View>
  );
};

export default connect(({ home, loading }) => ({
  ...home,
  ...loading
}))(Index);
