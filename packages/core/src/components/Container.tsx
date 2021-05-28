import * as React from "react";
import {
  View,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { withTheme } from "../theming";

import Elevation from "./Elevation";
import {
  COMPONENT_TYPES,
  createElevationType,
  createImageProp,
  createResizeModeProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import { ResizeModeType } from "./ResizeMode";

type Props = {
  theme: Theme;
  borderColor: string;
  borderWidth: number;
  backgroundColor: string;
  backgroundImage?: string | ImageSourcePropType;
  backgroundImageResizeMode?: ResizeModeType;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Container: React.FC<Props> = ({
  borderColor,
  borderWidth,
  backgroundColor,
  backgroundImage,
  backgroundImageResizeMode,
  elevation = 4,
  style,
  children,
  theme, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...rest
}) => {
  const {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderRadius,
    height,
    width,
    ...styleProp
  } = StyleSheet.flatten(style) || {};

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
    height,
    width,
    position: "relative",
    ...styleProp,
  };

  const innerStyle: StyleProp<ViewStyle> = {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  };

  const Wrap = elevation ? Elevation : View;

  if (elevation) {
    containerStyle.elevation = elevation;
  }

  return (
    <Wrap style={containerStyle} {...rest}>
      {backgroundImage ? (
        <ImageBackground
          source={
            typeof backgroundImage === "string"
              ? { uri: backgroundImage }
              : backgroundImage
          }
          resizeMode={backgroundImageResizeMode}
          style={{ flex: 1 }}
        >
          <View style={[innerStyle]}>{children}</View>
        </ImageBackground>
      ) : (
        <View style={innerStyle}>{children}</View>
      )}
    </Wrap>
  );
};

export default withTheme(Container);

export const SEED_DATA = {
  name: "Container",
  tag: "Container",
  description: "A container component with gutter padding",
  category: COMPONENT_TYPES.layout,
  layout: {
    height: 250,
  },
  props: {
    backgroundImage: createImageProp({
      label: "Background Image",
      description: "Apply a custom background image",
      defaultValue: null,
    }),
    backgroundImageResizeMode: createResizeModeProp(),
    elevation: createElevationType(0),
  },
};
