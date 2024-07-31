import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import FilterButton from "../components/FilterButton";
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const index = () => {
  const scrollViewRef = useRef(null);
  const currentDate = new Date();
  const currentWeek = currentDate.getDay();
  const [activeBtn, setActiveBtn] = useState(currentWeek);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: activeBtn * 85 - 160,
        animated: true,
      });
    }
  }, [activeBtn]);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {weeks.map((week, index) => (
          <FilterButton
            key={index}
            index={index}
            title={week}
            activeBtn={activeBtn}
            onPress={() => {
              setActiveBtn(index);
            }}
          />
        ))}
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text style={{ paddingTop: 50, fontSize: 35, fontWeight: "bold" }}>
          {weeks[activeBtn]}
        </Text>
      </View>
    </View>
  );
};

export default index;
