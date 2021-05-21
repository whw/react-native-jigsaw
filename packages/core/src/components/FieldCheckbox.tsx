import * as React from "react";
import { withTheme } from "../theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import { StyleSheet, View, Text } from "react-native";
import Touchable from "./Touchable";
import Checkbox from "./Checkbox";

import color from "color";

type Props = {
  title?: string;
  status: "checked" | "indeterminate" | "unchecked";
  onPress?: () => void;
  color: string;
  disabled?: boolean;
  theme: Theme;
} & IconSlot;

const FieldCheckbox: React.FC<Props> = ({
  Icon,
  title,
  status,
  onPress,
  color: checkboxColor,
  disabled = false,
  theme: { colors, typography, disabledOpacity },
}) => {
  let titleColor = status === "checked" ? colors.medium : colors.light;

  if (disabled) {
    titleColor = color(titleColor).alpha(disabledOpacity).rgb().string();
  }

  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        <Checkbox
          Icon={Icon}
          status={status}
          disabled={disabled}
          color={checkboxColor}
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}
        />
        <Text style={[typography.body1, { marginLeft: 12, color: titleColor }]}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(FieldCheckbox);

export const SEED_DATA = [
  {
    name: "Field Checkbox",
    tag: "FieldCheckbox",
    description: "A row with left aligned checkbox and body",
    preview_image_url: "{CLOUDINARY_URL}/Field_Checkbox.png",
    category: COMPONENT_TYPES.deprecated,
    supports_list_render: true,
    props: {
      title: {
        group: GROUPS.data,
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      color: {
        group: GROUPS.basic,
        label: "Color",
        description: "Custom color for the checkbox",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
      },
      disabled: {
        group: GROUPS.basic,
        label: "Disabled",
        description: "Whether checkbox and headline is disabled",
        editable: true,
        required: false,
        defaultValue: false,
        formType: FORM_TYPES.boolean,
        propType: PROP_TYPES.BOOLEAN,
      },
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "checkboxValue",
        valuePropName: "status",
        handlerPropName: "onPress",
      },
    },
    layout: {},
  },
];
