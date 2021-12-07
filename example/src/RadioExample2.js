import React from "react";
import {
  ButtonSolid,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  withTheme,
} from "@draftbit/ui";
import { StyleSheet, Text, View } from "react-native";

const ProblemscreenScreen = (props) => {
  const { theme } = props;
  const { navigation } = props;

  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState(undefined);

  return (
    <ScreenContainer style={styles.screen}>
      <Text style={[styles.TextuQ, { color: theme.colors.strong }]}>
        {"Problem screen"}
      </Text>

      <View style={styles.ViewMb} pointerEvents={"auto"}>
        <RadioButtonGroup
          onValueChange={(radioButtonGroupValue) => {
            try {
              setRadioButtonGroupValue(radioButtonGroupValue);
            } catch (err) {
              console.error(err);
            }
          }}
          direction={"vertical"}
          defaultValue={"One"}
          style={{ minHeight: 0 }}
        >
          <RadioButtonRow
            value={"one"}
            label={"First"}
            color={theme.colors.primary}
            unselectedColor={theme.colors.primary}
          />
          <RadioButtonRow
            value={"Two"}
            label={"Second"}
            color={theme.colors.primary}
            unselectedColor={theme.colors.primary}
          />
          <RadioButtonRow
            value={"Three"}
            label={"Third"}
            color={theme.colors.primary}
            unselectedColor={theme.colors.primary}
          />
        </RadioButtonGroup>

        <View style={styles.Viewov} pointerEvents={"auto"}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate("RadioButtonGroupWithRadioBtnRowScreen");
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_1W,
              { backgroundColor: theme.colors.primary },
            ]}
            title={"Radio Row"}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate("RadioButtonGroupWithRadioBtnsScreen");
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidQ8,
              { backgroundColor: theme.colors.primary },
            ]}
            title={"Radio"}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate("ProblemscreenScreen");
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidS8,
              { backgroundColor: theme.colors.primary },
            ]}
            title={"problem"}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate("DataDrivenScreen");
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidc3,
              { backgroundColor: theme.colors.primary },
            ]}
            title={"Data Driven"}
          />
        </View>
      </View>

      <Text style={{ color: theme.colors.strong }}>
        {"Radio button value: "}
        {radioButtonGroupValue}
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextuQ: {
    alignSelf: "center",
  },
  ButtonSolid_1W: {
    borderRadius: 8,
    fontFamily: "System",
    fontWeight: "700",
    textAlign: "center",
  },
  ButtonSolidQ8: {
    borderRadius: 8,
    fontFamily: "System",
    fontWeight: "700",
    textAlign: "center",
  },
  ButtonSolidS8: {
    borderRadius: 8,
    fontFamily: "System",
    fontWeight: "700",
    textAlign: "center",
  },
  ButtonSolidc3: {
    borderRadius: 8,
    fontFamily: "System",
    fontWeight: "700",
    textAlign: "center",
  },
  Viewov: {
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: 0,
  },
  ViewMb: {
    flex: 1,
    flexBasis: 1,
  },
  screen: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default withTheme(ProblemscreenScreen);
