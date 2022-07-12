import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../components/firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Chat() {
  const didMountRef = useRef(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  // console.log(user);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    }
    if (!user || user === null) {
      navigate("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "b58907dc-3542-4999-afa2-d0f9cfe6d339",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "844461e8-21ad-4323-96b3-837fb42800bc",
              },
            })
            .then(() => setLoading(false))

            .catch((error) => console.log("e", e.response));
        });
      });
  }, [user, navigate]);
  if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Lets chat</div>
        <div
          onClick={handleLogout}
          className="logout-tab"
          style={{ cursor: "pointer" }}
        >
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh -66px)"
        projectID="b58907dc-3542-4999-afa2-d0f9cfe6d339"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chat;
