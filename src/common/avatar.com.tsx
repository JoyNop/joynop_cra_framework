import React from "react";
import { Avatar } from "antd";
import { AvatarProps } from "antd/lib/avatar";
interface JoyNopCraAvatar extends AvatarProps {
  text?: string;
}

export const JoyNopCraAvatar: React.SFC<JoyNopCraAvatar> = (props) => {
  const { text, src } = props;

  return (
    <>
      {src ? (
        <Avatar {...props} data-avatar-state="true" />
      ) : (
        // uploadButton
        <Avatar
          data-avatar-state="false"
          style={{
            color: "#298dff",
            backgroundColor: "#d0e4fb",
          }}
          {...props}
        >
          {text}
        </Avatar>
      )}
    </>
  );
};
