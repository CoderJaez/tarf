"use client";
import { useEffect, useState } from "react";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
export default function PushNotification() {
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.log("Service Worker registration failed:", error);
          });
      });
    }
  }, []);
  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: "73fdef63-3c62-4643-9a28-058feea538fd",
    });
    beamsClient
      .start()
      .then((beamsClient: any) => beamsClient.getDeviceId())
      .then((deviceId) =>
        console.log("Successfully registered with Beams. Device ID:", deviceId)
      )
      .then(() => beamsClient.addDeviceInterest("hello"))
      .then(() => {
        console.log("Successfully subscribed to notifications");
        setSubscribed(true);
      })
      .catch((error) =>
        console.error("Error subscribing to notifications", error)
      );
  }, []);

  return (
    <div>
      {subscribed ? (
        <p className="text-slate-600">You subscribed to notifications!</p>
      ) : (
        <p className="text-slate-600">Subscribing to notifications...</p>
      )}
    </div>
  );
}
