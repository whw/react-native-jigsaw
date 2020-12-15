import * as React from "react";
import { AudioPlayer } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function AvatarExample() {
  return (
    <Container>
      <Section title="Avatar" style={styles.row}>
        <AudioPlayer
          source={{
            uri:
              "https://hwcdn.libsyn.com/p/9/e/2/9e224ffb4f3625c8/Nerdist_644_-_Ted_Melfi.mp3?c_id=8473543&cs_id=8473543&destination_id=18174&expiration=1607628092&hwt=f8327d4f551ec81f902e666647dc76f5",
          }}
        />
      </Section>
    </Container>
  );
}
