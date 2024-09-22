import PushNotifications from "@pusher/push-notifications-server";
const beamsClient = new PushNotifications({
    instanceId: "73fdef63-3c62-4643-9a28-058feea538fd",
    secretKey: "883BDEF9B5DB6D217DBB7FED943D68E238B0CC41D3F35C89BCC3C48FC214B6E0",
});

export default beamsClient