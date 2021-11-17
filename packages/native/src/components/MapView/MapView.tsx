import * as React from "react";
import NativeMapView from "react-native-maps";
import { MapViewProps } from "@draftbit/types";

const MapView: React.FC<MapViewProps> = ({
  provider,
  latitude,
  latitudeDelta,
  longitude,
  longitudeDelta,
  showsCompass = false,
  rotateEnabled = true,
  zoomEnabled = true,
  loadingEnabled = true,
  scrollEnabled = true,
  loadingBackgroundColor,
  loadingIndicatorColor,
  mapType = "standard",
  style,
  children,
}) => {
  return (
    <NativeMapView
      provider={provider}
      mapType={mapType}
      showsCompass={showsCompass}
      rotateEnabled={rotateEnabled}
      zoomEnabled={zoomEnabled}
      initialRegion={{
        latitude: latitude as number,
        longitude: longitude as number,
        latitudeDelta: latitudeDelta as number,
        longitudeDelta: longitudeDelta as number,
      }}
      loadingEnabled={loadingEnabled}
      scrollEnabled={scrollEnabled}
      loadingBackgroundColor={loadingBackgroundColor}
      loadingIndicatorColor={loadingIndicatorColor}
      style={style}
    >
      {children}
    </NativeMapView>
  );
};

export default MapView;
