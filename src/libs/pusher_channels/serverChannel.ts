import Pusher from "pusher";

const { NEXT_PUSHER_APPID, NEXT_PUSHER_KEY, NEXT_PUSHER_SECRET, NEXT_PUSHER_CLUSTER } = process.env
const PusherServer = new Pusher({
    appId: NEXT_PUSHER_APPID as string,
    key: NEXT_PUSHER_KEY as string,
    secret: NEXT_PUSHER_SECRET as string,
    cluster: NEXT_PUSHER_CLUSTER as string,
    useTLS: true
})


export default PusherServer